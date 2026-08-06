(() => {
  const VOICE_NAME = "Amy (Piper Local)";
  const ENDPOINT = "http://127.0.0.1:17493/synthesize";
  const NativeUtterance = window.SpeechSynthesisUtterance;
  const nativeGetVoices = speechSynthesis.getVoices.bind(speechSynthesis);
  const nativeSpeak = speechSynthesis.speak.bind(speechSynthesis);
  const nativeCancel = speechSynthesis.cancel.bind(speechSynthesis);
  const nativePause = speechSynthesis.pause.bind(speechSynthesis);
  const nativeResume = speechSynthesis.resume.bind(speechSynthesis);
  const amy = Object.freeze({
    default: false,
    lang: "en-US",
    localService: true,
    name: VOICE_NAME,
    voiceURI: "piper-local:en_US-amy-medium"
  });
  let localAudio = null;
  let localUtterance = null;

  class PiperAwareUtterance extends EventTarget {
    constructor(text = "") {
      super();
      this.text = String(text);
      this.lang = "";
      this.voice = null;
      this.volume = 1;
      this.rate = 1;
      this.pitch = 1;
    }
  }

  const dispatch = (utterance, type) => utterance.dispatchEvent(new Event(type));

  async function speakWithPiper(utterance) {
    localUtterance = utterance;
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: utterance.text, rate: utterance.rate })
      });
      if (!response.ok) throw new Error(`Piper server returned ${response.status}`);
      const objectUrl = URL.createObjectURL(await response.blob());
      const audio = new Audio(objectUrl);
      localAudio = audio;
      audio.volume = utterance.volume;
      audio.addEventListener("ended", () => {
        URL.revokeObjectURL(objectUrl);
        localAudio = null;
        localUtterance = null;
        dispatch(utterance, "end");
      }, { once: true });
      audio.addEventListener("error", () => {
        URL.revokeObjectURL(objectUrl);
        localAudio = null;
        localUtterance = null;
        dispatch(utterance, "error");
      }, { once: true });
      dispatch(utterance, "start");
      await audio.play();
    } catch (error) {
      console.error(`${VOICE_NAME}: start dev/piper-server.mjs`, error);
      localAudio = null;
      localUtterance = null;
      dispatch(utterance, "error");
    }
  }

  function toNative(utterance) {
    const native = new NativeUtterance(utterance.text);
    native.lang = utterance.lang;
    native.voice = utterance.voice;
    native.volume = utterance.volume;
    native.rate = utterance.rate;
    native.pitch = utterance.pitch;
    for (const type of ["start", "end", "error", "pause", "resume", "boundary", "mark"]) {
      native.addEventListener(type, (event) => utterance.dispatchEvent(new Event(event.type)));
    }
    return native;
  }

  speechSynthesis.getVoices = () => {
    const voices = nativeGetVoices();
    return voices.some((voice) => voice.voiceURI === amy.voiceURI) ? voices : [...voices, amy];
  };
  speechSynthesis.speak = (utterance) => {
    if (utterance.voice?.voiceURI === amy.voiceURI) {
      void speakWithPiper(utterance);
      return;
    }
    nativeSpeak(utterance instanceof PiperAwareUtterance ? toNative(utterance) : utterance);
  };
  speechSynthesis.cancel = () => {
    if (localAudio) {
      localAudio.pause();
      localAudio = null;
    }
    if (localUtterance) {
      dispatch(localUtterance, "end");
      localUtterance = null;
    }
    nativeCancel();
  };
  speechSynthesis.pause = () => localAudio ? localAudio.pause() : nativePause();
  speechSynthesis.resume = () => localAudio ? void localAudio.play() : nativeResume();
  window.SpeechSynthesisUtterance = PiperAwareUtterance;
})();
