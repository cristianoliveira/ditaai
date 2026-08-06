const successContainer = document.getElementById('success-container');
const mainContainer = document.getElementById('container');
const deniedContainer = document.getElementById('denied-container');
const permissionNeededDialogCloseButton = document.querySelector(
  '.permission-needed-dialog-close-button',
);
const permissionNeededDialogButton = document.querySelector('.permission-needed-dialog-button');
const pageLoadTimestamp = Date.now();

function logAnalyticsEvent(eventName, properties) {
  // Get flow from query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const flow = urlParams.get('flow') || 'realtime_voice_chat';
  const hash = Math.random().toString(36).substring(2, 8);

  chrome.runtime.sendMessage(
    {
      path: 'analytics/log',
      request: {
        body: {
          eventName,
          properties: {
            ...properties,
            flow,
            timestamp: Date.now(),
          },
        },
        meta: {},
      },
      hash,
      isHermes: true,
    },
    () => {
      // Ignore response, just log the event
    },
  );
}

function closePermissionNeededDialog() {
  document.querySelector('.permission-needed-dialog').classList.add('hide');

  logAnalyticsEvent('Allow Microphone Access Clicked');
  window.location.reload();
}

function openPermissionNeededDialog() {
  document.querySelector('.permission-needed-dialog').classList.remove('hide');
}

function showPermissionDeniedContainer() {
  mainContainer.classList.add('hide');
  deniedContainer.classList.remove('hide');
}

function startPermissionPolling() {
  setInterval(() => {
    requestMicrophonePermission(true);
  }, 1000);
}

function checkFailureTimestamp() {
  const failureTimestamp = Date.now() - pageLoadTimestamp;
  const failureBySystem = failureTimestamp < 2000;
  if (failureBySystem) {
    showPermissionDeniedContainer();
    startPermissionPolling();
  }
  return failureBySystem;
}

async function requestMicrophonePermission(ignoreError = false) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    mainContainer.classList.add('hide');
    deniedContainer.classList.add('hide');
    successContainer.classList.remove('hide');

    // Send message back to the opener window (sidepanel) that permission was granted
    if (window.opener) {
      window.opener.postMessage(
        {
          target: 'sidepanel',
          data: {
            type: 'microphone-permission-granted',
            success: true,
          },
        },
        window.location.origin,
      );
    }

    // Send message to background script to restart meeting capture if pending (route format)
    chrome.runtime.sendMessage({
      path: 'meeting-capture/microphone-permission-granted',
      request: { body: {}, meta: {} },
      hash: Math.random().toString(36).substring(7),
      isHermes: true,
    });

    // Send message to all content scripts via Chrome extension messaging
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, {
            target: 'content',
            data: {
              type: 'mic-permission-status',
              permission: true,
            },
          });
        }
      });
    });

    logAnalyticsEvent('Allow Microphone Access Result', {
      permission_status: 'granted',
    });

    // Store permission status
    try {
      await chrome.storage.local.set({ microphonePermissionGranted: true });
    } catch (e) {
      // Could not store permission status
    }

    // Keep the stream active briefly then close
    setTimeout(() => {
      stream.getTracks().forEach((track) => track.stop());

      // Auto-close after confirming permissions
      setTimeout(() => {
        window.close();
      }, 2000);
    }, 1000);
  } catch (error) {
    if (ignoreError) {
      return;
    }
    const failure = checkFailureTimestamp();
    if (failure) {
      return;
    }

    openPermissionNeededDialog();

    console.error('Failed to get microphone permission:', error);

    let errorMessage = 'Failed to access microphone. ';

    if (error.name === 'NotAllowedError') {
      errorMessage +=
        'Permission was denied. Please check your browser settings and allow microphone access for this extension.';
    } else if (error.name === 'NotFoundError') {
      errorMessage += 'No microphone found. Please connect a microphone and try again.';
    } else if (error.name === 'NotReadableError') {
      errorMessage +=
        'Microphone is already in use. Please close other applications using the microphone.';
    } else {
      errorMessage += error.message || 'Unknown error occurred.';
    }

    logAnalyticsEvent('Allow Microphone Access Result', {
      permission_status: 'denied',
      permission_error_message: errorMessage,
    });

    // Send failure message
    if (window.opener) {
      window.opener.postMessage(
        {
          target: 'sidepanel',
          data: {
            type: 'microphone-permission-granted',
            success: false,
            error: errorMessage,
          },
        },
        window.location.origin,
      );
    }

    // Send message to all content scripts via Chrome extension messaging
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, {
            target: 'content',
            data: {
              type: 'mic-permission-status',
              permission: false,
            },
          });
        }
      });
    });
  }
}

function isDarkMode() {
  // Check if :root or html has a class containing 'dark'
  const root = document.documentElement;
  const hasDarkClass = root.classList.contains('dark') || root.className.includes('dark');

  // Fallback to prefers-color-scheme media query
  if (!hasDarkClass) {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return hasDarkClass;
}

function updateVideoSources() {
  const isDark = isDarkMode();
  const mode = isDark ? 'dark' : 'light';
  const baseUrl = 'https://cdn.speechify.com/chrome-extension/assets/microphone-permission/';

  // Update all video elements with data-video-name attribute
  const videos = document.querySelectorAll('video[data-video-name]');
  videos.forEach((video) => {
    const videoName = video.getAttribute('data-video-name');
    video.src = `${baseUrl}${mode}-${videoName}.mp4`;
  });
}

function setupVideoHoverPlayback() {
  const listCards = document.querySelectorAll('.list-card');

  listCards.forEach((card) => {
    const video = card.querySelector('video');
    if (!video) return;

    let isHovering = false;
    let replayTimeout = null;

    const playVideo = () => {
      if (isHovering && video.paused) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Ignore play errors (e.g., if video hasn't loaded yet)
        });
      }
    };

    const scheduleReplay = () => {
      if (replayTimeout) {
        clearTimeout(replayTimeout);
      }
      if (isHovering) {
        replayTimeout = setTimeout(() => {
          playVideo();
        }, 2000);
      }
    };

    const stopVideo = () => {
      if (replayTimeout) {
        clearTimeout(replayTimeout);
        replayTimeout = null;
      }
      video.pause();
      video.currentTime = 0;
    };

    // Handle hover start
    card.addEventListener('mouseenter', () => {
      isHovering = true;
      playVideo();
    });

    // Handle hover end
    card.addEventListener('mouseleave', () => {
      isHovering = false;
      stopVideo();
    });

    // Handle video end - wait 2000ms then replay if still hovering
    video.addEventListener('ended', () => {
      scheduleReplay();
    });
  });
}

window.addEventListener('load', () => {
  updateVideoSources();
  // Wait a bit for videos to load before setting up hover handlers
  setTimeout(() => {
    setupVideoHoverPlayback();
  }, 100);
  requestMicrophonePermission();
});

// Listen for changes in color scheme preference
if (window.matchMedia) {
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', updateVideoSources);
}

// Watch for changes to the root element's class (in case dark mode is toggled dynamically)
const observer = new MutationObserver(() => {
  updateVideoSources();
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
});

permissionNeededDialogButton.addEventListener('click', closePermissionNeededDialog);
permissionNeededDialogCloseButton.addEventListener('click', closePermissionNeededDialog);
