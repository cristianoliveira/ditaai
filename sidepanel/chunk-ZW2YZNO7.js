(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as Oa,b as Ng,e as oE}from"./chunk-ABFIUFCH.js";import{a as Dg,b as nE}from"./chunk-VZX2ZYCM.js";import{a as Z,b as Ir,c as Bg,d as Di,e as ad,h as Fa,i as oo,q as cd}from"./chunk-SUAAOZL7.js";import{a as Da,b as Rr,d as Mr,h as Ba,i as Bi}from"./chunk-37VRLQDC.js";import{L as Fi,a as Pa,b as tE,c as _r,d as Ua,e as et,f as Fg,g as rE,h as Lt,u as Va}from"./chunk-GHJJGGNS.js";import{a as ro,b as Do,c as v,d as lt,e as Ni,f as Ag,g as Lg,h as JT,i as Pg,j as eE,l as Og,m as be,n as Ke,o as De,p as St,q as Er,r as kr,s as Na}from"./chunk-YP5CIT26.js";import{a as O,b as ee,c as XT,d as Ee,f as p,g as w,h as m,j as u,k as T}from"./chunk-3TJIL3LD.js";var ld,iE,Ar,Be,dO,fO,pO,mO,gO,hO,yO,bO,Ui=O(()=>{"use strict";p();m();Er();Na();ld=["Summarize the key points","What are the main takeaways?","What should I know about this?"],iE=200,Ar=St()(kr((e,t)=>({muted:!1,hasPermission:!1,mediaStream:null,isInitializing:!1,isActive:!1,isRecording:!1,recordingStartTime:null,isToolRunning:!1,isMessageStreaming:!1,conversationStatus:"connecting",currentUserTranscript:"",currentUserTranscriptItemId:"",currentAssistantTranscript:"",currentResponseId:"",isUserSpeaking:!1,maxVoiceModeUsageOfToday:iE,voiceModeUsageOfToday:0,overlay:null,questionRecommendations:ld,isLoadingQuestionRecommendations:!1,chatMessageLatestSources:[],openAIAudioControls:null,openAIAudioState:"idle",streamingResponseId:null,isClientInitializing:!1,initializePromise:null,realtimeClient:null,setVoiceModePermission:r=>{e({hasPermission:r})},setStream:r=>{e({mediaStream:r})},setMuted:r=>{e({muted:r})},setIsInitializing:r=>{e({isInitializing:r})},setIsActive:r=>{e({isActive:r})},setRecording:(r,i)=>{e({isRecording:r,recordingStartTime:r?i||Date.now():null})},setIsUserSpeaking:r=>{e({isUserSpeaking:r})},setIsToolRunning:r=>{e({isToolRunning:r})},stopVoiceMode:()=>{let{mediaStream:r,hasPermission:i,realtimeClient:s}=t();if(s)try{s.disconnect()}catch{}r&&r.getTracks().forEach(c=>c.stop()),e({isActive:!1,hasPermission:i,mediaStream:null,isRecording:!1,recordingStartTime:null,realtimeClient:null,openAIAudioControls:null,openAIAudioState:"idle",isInitializing:!1,conversationStatus:"connecting",streamingResponseId:null,isMessageStreaming:!1})},setConversationStatus:r=>{e({conversationStatus:r})},setCurrentUserTranscript:r=>{e({currentUserTranscript:r})},setCurrentUserTranscriptItemId:r=>{e({currentUserTranscriptItemId:r})},setCurrentAssistantTranscript:r=>{e({currentAssistantTranscript:r})},appendAssistantTranscript:r=>{let i=t().currentAssistantTranscript;e({currentAssistantTranscript:i+r})},setCurrentResponseId:r=>{e({currentResponseId:r})},clearTranscripts:()=>{e({currentUserTranscript:"",currentAssistantTranscript:"",currentResponseId:""})},setMaxVoiceModeUsageOfToday:r=>{e({maxVoiceModeUsageOfToday:r})},setVoiceModeUsageOfToday:r=>{e({voiceModeUsageOfToday:r})},incrementVoiceModeUsage:()=>{let r=t().voiceModeUsageOfToday;e({voiceModeUsageOfToday:r+1})},setOverlay:r=>{e({overlay:r})},setQuestionRecommendations:r=>{e({questionRecommendations:r})},setIsLoadingQuestionRecommendations:r=>{e({isLoadingQuestionRecommendations:r})},setIsMessageStreaming:r=>e({isMessageStreaming:r}),setLatestSources:r=>{e({chatMessageLatestSources:r})},setOpenAIAudioControls:r=>e({openAIAudioControls:r}),setOpenAIAudioState:r=>e({openAIAudioState:r}),setStreamingResponseId:r=>e({streamingResponseId:r}),setRealtimeClient:r=>e({realtimeClient:r})}))),Be=Ar,dO=()=>Ar(e=>e.mediaStream),fO=()=>Ar(e=>({overlay:e.overlay,setOverlay:e.setOverlay})),pO=()=>Ar(e=>({muted:e.muted,setMuted:e.setMuted})),mO=()=>Ar(e=>e.isToolRunning),gO=()=>Ar(e=>({maxUsage:e.maxVoiceModeUsageOfToday,currentUsage:e.voiceModeUsageOfToday,questionsRemaining:e.maxVoiceModeUsageOfToday-e.voiceModeUsageOfToday,showWarning:e.maxVoiceModeUsageOfToday-e.voiceModeUsageOfToday<=10})),hO=()=>Ar(e=>({isInitializing:e.isInitializing,isActive:e.isActive,hasPermission:e.hasPermission})),yO=()=>Ar(e=>({questionRecommendations:e.questionRecommendations,isLoadingQuestionRecommendations:e.isLoadingQuestionRecommendations,setQuestionRecommendations:e.setQuestionRecommendations,setIsLoadingQuestionRecommendations:e.setIsLoadingQuestionRecommendations})),bO=async()=>{let{isClientInitializing:e,initializePromise:t}=Be.getState();e&&await t}});var Ug,MO,_O,Vg,AO,LO,PO,OO,$g=O(()=>{"use strict";p();m();Ui();Ke();Bi();Ir();ad();Ug=be("Sidepanel Tab Store"),MO=async e=>{Z.setState({initialUrl:e})},_O=async(e,t)=>{let r=Z.getState();if(e===r.currentUrl)return;let i=await Da(e),s=i||Di(),c=t;try{let d=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}")[e];d?.imageUrl&&(c={...t,imageUrl:d.imageUrl,imageExtractedAt:d.extractedAt})}catch(l){Ug.warn("Failed to load cached image for URL:",l)}Z.setState({currentUrl:e,currentUrlState:s,currentUrlMetadata:c}),i||await Rr(e,s)},Vg=async(e,t)=>{let{currentUrl:r,currentUrlState:i}=Z.getState(),s=t||r;if(!s)return;let c=i;if(t&&t!==r&&(c=await Da(t)||null),!c)return;let l={...c,...e};s===r&&Z.setState({currentUrlState:l}),await Rr(s,l)},AO=e=>{let{currentUrlMetadata:t}=Z.getState(),r={...t,...e};Z.setState({currentUrlMetadata:r})},LO=async()=>{let{currentUrl:e,currentUrlState:t,activeSummaryControllers:r,activeChatControllers:i,currentSessionState:s}=Z.getState();if(!e)return;if(s){let l=r.get(s.sessionId);l&&(l.abort(),r.delete(s.sessionId),Z.setState({activeSummaryControllers:new Map(r)}));let d=i.get(s.sessionId);d&&(d.abort(),i.delete(s.sessionId),Z.setState({activeChatControllers:new Map(i)}))}let c={...Di(),hasContent:t?.hasContent??!1,contentCount:t?.contentCount??0};Z.setState({currentUrlState:c}),await Rr(e,c),Be.getState().setQuestionRecommendations(ld)},PO=async()=>{let{currentUrl:e,activeSummaryControllers:t,activeChatControllers:r}=Z.getState(),i=await Ba();for(let[s,c]of i.entries()){let l=t.get(s);l&&(l.abort(),t.delete(s));let d=r.get(s);d&&(d.abort(),r.delete(s));let g={...Di(),hasContent:c?.hasContent??!1,contentCount:c?.contentCount??0};s===e&&Z.setState({currentUrlState:g}),await Rr(s,g)}Z.setState({activeSummaryControllers:new Map(t),activeChatControllers:new Map(r)}),Ug.info(`Cleared chat for ${i.size} URLs`)},OO=async e=>{let{activeSummaryControllers:t,activeChatControllers:r}=Z.getState(),i=await Da(e);if(!i)return;let s=t.get(e);s&&(s.abort(),t.delete(e));let c=r.get(e);c&&(c.abort(),r.delete(e));let l={...Di(),hasContent:i?.hasContent??!1,contentCount:i?.contentCount??0};await Rr(e,l);let{currentUrl:d}=Z.getState();d===e&&Z.setState({currentUrlState:l}),Z.setState({activeSummaryControllers:new Map(t),activeChatControllers:new Map(r)})}});var VO,$O,qO,GO,WO,zO,qg=O(()=>{"use strict";p();m();Bi();Ir();VO=async(e,t)=>{let{currentUrl:r,currentSessionState:i}=Z.getState();if(!r||!i)return;let s={extractedAt:Date.now(),summary:e,url:r,settings:t},c={...i,summaryData:s};Z.setState({currentSessionState:c}),await Mr(c)},$O=async e=>{let{currentSessionState:t}=Z.getState();if(!t)return;let r={...t,isLoadingSummary:e,summaryFeedback:e?void 0:t.summaryFeedback};Z.setState({currentSessionState:r}),await Mr(r)},qO=async e=>{let{currentSessionState:t}=Z.getState();if(!t)return;let r={...t,summaryFeedback:{isLiked:e,feedbackAt:Date.now()}};Z.setState({currentSessionState:r}),await Mr(r)},GO=(e,t)=>{let{activeSummaryControllers:r}=Z.getState();r.set(e,t),Z.setState({activeSummaryControllers:new Map(r)})},WO=e=>{let{activeSummaryControllers:t}=Z.getState(),r=t.get(e);r&&(r.abort(),t.delete(e),Z.setState({activeSummaryControllers:new Map(t)}))},zO=e=>{let{activeSummaryControllers:t}=Z.getState(),r=t.get(e);return r?r.signal.aborted:!1}});var eN,Gg,tN,nN,rN,oN,iN,sN,aN,Wg=O(()=>{"use strict";p();m();Bi();Ir();ad();cd();eN=async(e,t)=>{let{currentUrl:r}=Z.getState(),i=t||r;if(!i)return"";let s=Bg(),c=Date.now(),l={...e,id:s,timestamp:c,updatedAt:c,...e.type==="user"&&i?{targetUrl:i}:{}};return await Fa(l),s},Gg=async(e,t)=>{await oo(e,t)},tN=async e=>{let{currentSessionState:t}=Z.getState();if(!t)return;let r={...t,chatId:e};Z.setState({currentSessionState:r}),await Mr(r)},nN=async e=>{let{currentSessionState:t}=Z.getState();if(!t)return;let r={...t,isChatStreaming:e};Z.setState({currentSessionState:r}),await Mr(r)},rN=async()=>{let{currentSessionState:e,activeChatControllers:t}=Z.getState();if(!e)return;let r=t.get(e.sessionId);r&&(r.abort(),t.delete(e.sessionId),Z.setState({activeChatControllers:new Map(t)}));let i={...e,chatId:void 0,isChatStreaming:void 0};Z.setState({currentSessionState:i}),await Mr(i)},oN=(e,t)=>{let{activeChatControllers:r}=Z.getState();r.set(e,t),Z.setState({activeChatControllers:new Map(r)})},iN=e=>{let{activeChatControllers:t}=Z.getState(),r=t.get(e);r&&(r.abort(),t.delete(e),Z.setState({activeChatControllers:new Map(t)}))},sN=e=>{let{activeChatControllers:t}=Z.getState(),r=t.get(e);return r?r.signal.aborted:!1},aN=e=>{Z.setState({questionInput:e})}});var $a,pN,mN,gN,hN,zg=O(()=>{"use strict";p();m();Ke();Ir();$a=be("Sidepanel Tab Store"),pN=async(e,t)=>{let{currentUrl:r,currentUrlMetadata:i}=Z.getState(),s=t||r;if(s){if(s===r){let c={...i,imageUrl:e,imageExtractedAt:Date.now()};Z.setState({currentUrlMetadata:c})}try{let c=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}");c[s]={imageUrl:e,extractedAt:Date.now()},localStorage.setItem("sidepanel-image-cache",JSON.stringify(c))}catch(c){$a.warn("Failed to cache image URL for:",s,c)}}},mN=()=>{let{currentUrl:e,currentUrlMetadata:t}=Z.getState();if(!e)return null;if(t?.imageUrl)return t.imageUrl;try{let i=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}")[e];if(i?.imageUrl)return i.imageUrl}catch(r){$a.warn("Failed to read image cache:",r)}return null},gN=()=>{let{currentUrl:e,currentUrlMetadata:t}=Z.getState();if(!e)return!1;let r=1440*60*1e3,i=Date.now();if(t?.imageExtractedAt)return i-t.imageExtractedAt<r;try{let c=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}")[e];if(c?.extractedAt)return i-c.extractedAt<r}catch(s){$a.warn("Failed to check image cache validity:",s)}return!1},hN=async()=>{let{currentUrl:e,currentUrlMetadata:t}=Z.getState();if(!e)return;let r={...t,imageUrl:void 0,imageExtractedAt:void 0};Z.setState({currentUrlMetadata:r});try{let i=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}");delete i[e],localStorage.setItem("sidepanel-image-cache",JSON.stringify(i))}catch(i){$a.warn("Failed to clear image cache:",i)}}});var qa=ee((SN,jg)=>{"use strict";p();m();var sE=Array.isArray;jg.exports=sE});var Yg=ee((wN,Qg)=>{"use strict";p();m();var aE=typeof global=="object"&&global&&global.Object===Object&&global;Qg.exports=aE});var Vi=ee((kN,Kg)=>{"use strict";p();m();var cE=Yg(),lE=typeof self=="object"&&self&&self.Object===Object&&self,uE=cE||lE||Function("return this")();Kg.exports=uE});var Ga=ee((MN,Zg)=>{"use strict";p();m();var dE=Vi(),fE=dE.Symbol;Zg.exports=fE});var eh=ee((LN,Jg)=>{"use strict";p();m();var Hg=Ga(),Xg=Object.prototype,pE=Xg.hasOwnProperty,mE=Xg.toString,$i=Hg?Hg.toStringTag:void 0;function gE(e){var t=pE.call(e,$i),r=e[$i];try{e[$i]=void 0;var i=!0}catch{}var s=mE.call(e);return i&&(t?e[$i]=r:delete e[$i]),s}Jg.exports=gE});var nh=ee((NN,th)=>{"use strict";p();m();var hE=Object.prototype,yE=hE.toString;function bE(e){return yE.call(e)}th.exports=bE});var ud=ee((FN,ih)=>{"use strict";p();m();var rh=Ga(),xE=eh(),SE=nh(),CE="[object Null]",vE="[object Undefined]",oh=rh?rh.toStringTag:void 0;function wE(e){return e==null?e===void 0?vE:CE:oh&&oh in Object(e)?xE(e):SE(e)}ih.exports=wE});var ah=ee(($N,sh)=>{"use strict";p();m();function TE(e){return e!=null&&typeof e=="object"}sh.exports=TE});var qi=ee((WN,ch)=>{"use strict";p();m();var EE=ud(),kE=ah(),IE="[object Symbol]";function RE(e){return typeof e=="symbol"||kE(e)&&EE(e)==IE}ch.exports=RE});var uh=ee((QN,lh)=>{"use strict";p();m();var ME=qa(),_E=qi(),AE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,LE=/^\w*$/;function PE(e,t){if(ME(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||_E(e)?!0:LE.test(e)||!AE.test(e)||t!=null&&e in Object(t)}lh.exports=PE});var Gi=ee((ZN,dh)=>{"use strict";p();m();function OE(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}dh.exports=OE});var ph=ee((JN,fh)=>{"use strict";p();m();var NE=ud(),DE=Gi(),BE="[object AsyncFunction]",FE="[object Function]",UE="[object GeneratorFunction]",VE="[object Proxy]";function $E(e){if(!DE(e))return!1;var t=NE(e);return t==FE||t==UE||t==BE||t==VE}fh.exports=$E});var gh=ee((nD,mh)=>{"use strict";p();m();var qE=Vi(),GE=qE["__core-js_shared__"];mh.exports=GE});var bh=ee((iD,yh)=>{"use strict";p();m();var dd=gh(),hh=(function(){var e=/[^.]+$/.exec(dd&&dd.keys&&dd.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function WE(e){return!!hh&&hh in e}yh.exports=WE});var Sh=ee((cD,xh)=>{"use strict";p();m();var zE=Function.prototype,jE=zE.toString;function QE(e){if(e!=null){try{return jE.call(e)}catch{}try{return e+""}catch{}}return""}xh.exports=QE});var vh=ee((dD,Ch)=>{"use strict";p();m();var YE=ph(),KE=bh(),ZE=Gi(),HE=Sh(),XE=/[\\^$.*+?()[\]{}|]/g,JE=/^\[object .+?Constructor\]$/,ek=Function.prototype,tk=Object.prototype,nk=ek.toString,rk=tk.hasOwnProperty,ok=RegExp("^"+nk.call(rk).replace(XE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ik(e){if(!ZE(e)||KE(e))return!1;var t=YE(e)?ok:JE;return t.test(HE(e))}Ch.exports=ik});var Th=ee((mD,wh)=>{"use strict";p();m();function sk(e,t){return e?.[t]}wh.exports=sk});var fd=ee((yD,Eh)=>{"use strict";p();m();var ak=vh(),ck=Th();function lk(e,t){var r=ck(e,t);return ak(r)?r:void 0}Eh.exports=lk});var Wi=ee((SD,kh)=>{"use strict";p();m();var uk=fd(),dk=uk(Object,"create");kh.exports=dk});var Mh=ee((wD,Rh)=>{"use strict";p();m();var Ih=Wi();function fk(){this.__data__=Ih?Ih(null):{},this.size=0}Rh.exports=fk});var Ah=ee((kD,_h)=>{"use strict";p();m();function pk(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}_h.exports=pk});var Ph=ee((MD,Lh)=>{"use strict";p();m();var mk=Wi(),gk="__lodash_hash_undefined__",hk=Object.prototype,yk=hk.hasOwnProperty;function bk(e){var t=this.__data__;if(mk){var r=t[e];return r===gk?void 0:r}return yk.call(t,e)?t[e]:void 0}Lh.exports=bk});var Nh=ee((LD,Oh)=>{"use strict";p();m();var xk=Wi(),Sk=Object.prototype,Ck=Sk.hasOwnProperty;function vk(e){var t=this.__data__;return xk?t[e]!==void 0:Ck.call(t,e)}Oh.exports=vk});var Bh=ee((ND,Dh)=>{"use strict";p();m();var wk=Wi(),Tk="__lodash_hash_undefined__";function Ek(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=wk&&t===void 0?Tk:t,this}Dh.exports=Ek});var Uh=ee((FD,Fh)=>{"use strict";p();m();var kk=Mh(),Ik=Ah(),Rk=Ph(),Mk=Nh(),_k=Bh();function Bo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Bo.prototype.clear=kk;Bo.prototype.delete=Ik;Bo.prototype.get=Rk;Bo.prototype.has=Mk;Bo.prototype.set=_k;Fh.exports=Bo});var $h=ee(($D,Vh)=>{"use strict";p();m();function Ak(){this.__data__=[],this.size=0}Vh.exports=Ak});var Gh=ee((WD,qh)=>{"use strict";p();m();function Lk(e,t){return e===t||e!==e&&t!==t}qh.exports=Lk});var zi=ee((QD,Wh)=>{"use strict";p();m();var Pk=Gh();function Ok(e,t){for(var r=e.length;r--;)if(Pk(e[r][0],t))return r;return-1}Wh.exports=Ok});var jh=ee((ZD,zh)=>{"use strict";p();m();var Nk=zi(),Dk=Array.prototype,Bk=Dk.splice;function Fk(e){var t=this.__data__,r=Nk(t,e);if(r<0)return!1;var i=t.length-1;return r==i?t.pop():Bk.call(t,r,1),--this.size,!0}zh.exports=Fk});var Yh=ee((JD,Qh)=>{"use strict";p();m();var Uk=zi();function Vk(e){var t=this.__data__,r=Uk(t,e);return r<0?void 0:t[r][1]}Qh.exports=Vk});var Zh=ee((nB,Kh)=>{"use strict";p();m();var $k=zi();function qk(e){return $k(this.__data__,e)>-1}Kh.exports=qk});var Xh=ee((iB,Hh)=>{"use strict";p();m();var Gk=zi();function Wk(e,t){var r=this.__data__,i=Gk(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}Hh.exports=Wk});var e0=ee((cB,Jh)=>{"use strict";p();m();var zk=$h(),jk=jh(),Qk=Yh(),Yk=Zh(),Kk=Xh();function Fo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Fo.prototype.clear=zk;Fo.prototype.delete=jk;Fo.prototype.get=Qk;Fo.prototype.has=Yk;Fo.prototype.set=Kk;Jh.exports=Fo});var n0=ee((dB,t0)=>{"use strict";p();m();var Zk=fd(),Hk=Vi(),Xk=Zk(Hk,"Map");t0.exports=Xk});var i0=ee((mB,o0)=>{"use strict";p();m();var r0=Uh(),Jk=e0(),eI=n0();function tI(){this.size=0,this.__data__={hash:new r0,map:new(eI||Jk),string:new r0}}o0.exports=tI});var a0=ee((yB,s0)=>{"use strict";p();m();function nI(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}s0.exports=nI});var ji=ee((SB,c0)=>{"use strict";p();m();var rI=a0();function oI(e,t){var r=e.__data__;return rI(t)?r[typeof t=="string"?"string":"hash"]:r.map}c0.exports=oI});var u0=ee((wB,l0)=>{"use strict";p();m();var iI=ji();function sI(e){var t=iI(this,e).delete(e);return this.size-=t?1:0,t}l0.exports=sI});var f0=ee((kB,d0)=>{"use strict";p();m();var aI=ji();function cI(e){return aI(this,e).get(e)}d0.exports=cI});var m0=ee((MB,p0)=>{"use strict";p();m();var lI=ji();function uI(e){return lI(this,e).has(e)}p0.exports=uI});var h0=ee((LB,g0)=>{"use strict";p();m();var dI=ji();function fI(e,t){var r=dI(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}g0.exports=fI});var b0=ee((NB,y0)=>{"use strict";p();m();var pI=i0(),mI=u0(),gI=f0(),hI=m0(),yI=h0();function Uo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Uo.prototype.clear=pI;Uo.prototype.delete=mI;Uo.prototype.get=gI;Uo.prototype.has=hI;Uo.prototype.set=yI;y0.exports=Uo});var C0=ee((FB,S0)=>{"use strict";p();m();var x0=b0(),bI="Expected a function";function pd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(bI);var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],c=r.cache;if(c.has(s))return c.get(s);var l=e.apply(this,i);return r.cache=c.set(s,l)||c,l};return r.cache=new(pd.Cache||x0),r}pd.Cache=x0;S0.exports=pd});var w0=ee(($B,v0)=>{"use strict";p();m();var xI=C0(),SI=500;function CI(e){var t=xI(e,function(i){return r.size===SI&&r.clear(),i}),r=t.cache;return t}v0.exports=CI});var E0=ee((WB,T0)=>{"use strict";p();m();var vI=w0(),wI=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,TI=/\\(\\)?/g,EI=vI(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(wI,function(r,i,s,c){t.push(s?c.replace(TI,"$1"):i||r)}),t});T0.exports=EI});var I0=ee((QB,k0)=>{"use strict";p();m();function kI(e,t){for(var r=-1,i=e==null?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s}k0.exports=kI});var P0=ee((ZB,L0)=>{"use strict";p();m();var R0=Ga(),II=I0(),RI=qa(),MI=qi(),_I=1/0,M0=R0?R0.prototype:void 0,_0=M0?M0.toString:void 0;function A0(e){if(typeof e=="string")return e;if(RI(e))return II(e,A0)+"";if(MI(e))return _0?_0.call(e):"";var t=e+"";return t=="0"&&1/e==-_I?"-0":t}L0.exports=A0});var N0=ee((JB,O0)=>{"use strict";p();m();var AI=P0();function LI(e){return e==null?"":AI(e)}O0.exports=LI});var B0=ee((nF,D0)=>{"use strict";p();m();var PI=qa(),OI=uh(),NI=E0(),DI=N0();function BI(e,t){return PI(e)?e:OI(e,t)?[e]:NI(DI(e))}D0.exports=BI});var U0=ee((iF,F0)=>{"use strict";p();m();var FI=qi(),UI=1/0;function VI(e){if(typeof e=="string"||FI(e))return e;var t=e+"";return t=="0"&&1/e==-UI?"-0":t}F0.exports=VI});var $0=ee((cF,V0)=>{"use strict";p();m();var $I=B0(),qI=U0();function GI(e,t){t=$I(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[qI(t[r++])];return r&&r==i?e:void 0}V0.exports=GI});var G0=ee((dF,q0)=>{"use strict";p();m();var WI=$0();function zI(e,t,r){var i=e==null?void 0:WI(e,t);return i===void 0?r:i}q0.exports=zI});function jI(e){return{_ok:!0,value:e}}function QI(e){return{_ok:!1,error:e}}function md(e){return async(...t)=>{try{return jI(await e(...t))}catch(r){return QI(r)}}}var W0=O(()=>{"use strict";p();m()});var z0=O(()=>{"use strict";p();m()});var j0=O(()=>{"use strict";p();m();z0()});var Q0,gd,Y0=O(()=>{"use strict";p();m();nE();Q0=Dg({events:["failed","success"]}),gd=async(e,t)=>{let r=new Error().stack;try{let i=await fetch(e,t),s=i.status>=200&&i.status<300?"success":"failed";return Q0.emit(s,{status:i.status,url:e}),i}catch(i){throw i instanceof Error&&(i.stack+=`

Caused by:
${r}`),Q0.emit("failed",{url:e,error:i}),Error(i)}}});var Wa,K0=O(()=>{"use strict";p();m();Wa={"*":{notSpecified:"Hi, my name is {{ name }}. I am an English voice from the {{ country }}."},en:{notSpecified:"Hi, my name is {{ name }}. I am an English voice from the {{ country }}."},"en-US":{notSpecified:"Hi, my name is {{ name }}. I am an American English voice from the United States."},"en-GB":{notSpecified:"Hi, my name is {{ name }}. I am a British English voice from the United Kingdom."},"en-AU":{notSpecified:"Hi, my name is {{ name }}. I am an Australian English voice from Australia."},"en-IN":{notSpecified:"Hi, my name is {{ name }}. I am an Indian English voice from India."},"en-NG":{notSpecified:"Hi, my name is {{ name }}. I am a Nigerian English voice from Nigeria."},"en-ZA":{notSpecified:"Hi, my name is {{ name }}. I am a South African English voice from South Africa."},"en-IE":{notSpecified:"Hi, my name is {{ name }}. I am an Irish English voice from Ireland."},de:{notSpecified:"Hallo, mein Name ist {{ name }}. Ich bin eine deutschsprachige Stimme."},"de-DE":{notSpecified:"Hallo, mein Name ist {{ name }}. Ich bin eine deutsche Stimme aus Deutschland."},"de-CH":{notSpecified:"Grüezi, ich heiße {{ name }}. Ich bin eine deutschsprachige Stimme aus der Schweiz."},pt:{notSpecified:"Olá, meu nome é {{ name }}. Sou uma voz em português."},"pt-BR":{notSpecified:"Olá, meu nome é {{ name }}. Sou uma voz em português do Brasil."},"pt-PT":{notSpecified:"Olá, o meu nome é {{ name }}. Sou uma voz portuguesa de Portugal."},es:{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz en español."},"es-ES":{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz española de España."},"es-MX":{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz mexicana de México."},"es-US":{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz en español de Estados Unidos."},it:{notSpecified:"Ciao, mi chiamo {{ name }}. Sono una voce italiana."},"it-IT":{notSpecified:"Ciao, mi chiamo {{ name }}. Sono una voce italiana dall'Italia."},fr:{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française."},"fr-FR":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française de France."},"fr-BE":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française de Belgique."},"fr-CA":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française du Canada."},"fr-CH":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française de Suisse."},ja:{notSpecified:"こんにちは、私の名前は{{ name }}です。私は日本語の声です。"},"ja-JP":{notSpecified:"こんにちは、私の名前は{{ name }}です。私は日本の日本語の声です。"},zh:{notSpecified:"您好，我是{{ name }}。我是中文声音。"},"zh-CN":{notSpecified:"您好，我是{{ name }}。我是中国的中文声音。"},"zh-HK":{notSpecified:"您好，我是{{ name }}。我是香港的中文声音。"},"zh-TW":{notSpecified:"您好，我是{{ name }}。我是臺灣的中文聲音。"},da:{notSpecified:"Hej, jeg hedder {{ name }}. Jeg er en dansk stemme."},"da-DK":{notSpecified:"Hej, jeg hedder {{ name }}. Jeg er en dansk stemme fra Danmark."},fi:{notSpecified:"Hei, nimeni on {{ name }}. Olen ääni Suomesta."},"fi-FI":{notSpecified:"Hei, nimeni on {{ name }}. Olen suomalainen ääni Suomesta."},id:{notSpecified:"Halo, nama saya {{ name }}. Saya suara berbahasa Indonesia dari {{ country }}."},"id-ID":{notSpecified:"Halo, nama saya {{ name }}. Saya suara bahasa Indonesia dari Indonesia."},ms:{notSpecified:"Hai, nama saya {{ name }}. Saya suara berbahasa Melayu dari {{ country }}."},"ms-MY":{notSpecified:"Hai, nama saya {{ name }}. Saya suara bahasa Melayu dari Malaysia."},ne:{notSpecified:"नमस्कार, मेरो नाम {{ name }} हो। म {{ country }} बाट {{ language }} आवाज हुँ।"},"ne-NP":{notSpecified:"नमस्कार, मेरो नाम {{ name }} हो। म नेपालबाट नेपाली आवाज हुँ।"},ta:{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் {{ country }}-இல் இருந்து தமிழ் குரல்."},"ta-IN":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் இந்திய தமிழின் குரல்."},"ta-LK":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் இலங்கைத் தமிழின் குரல்."},"ta-MY":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் மலேசிய தமிழ் குரல்."},"ta-SG":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் சிங்கப்பூர் தமிழின் குரல்."},te:{notSpecified:"హలో, నా పేరు {{ name }}. నేను {{ country }} నుంచి తెలుగు స్వరం."},"te-IN":{notSpecified:"హలో, నా పేరు {{ name }}. నేను భారతదేశం నుండి తెలుగు స్వరం."},th:{notSpecified:"สวัสดี, ฉันชื่อ {{ name }}. ฉันเป็นเสียงภาษาไทยจาก {{ country }}."},"th-TH":{notSpecified:"สวัสดี, ฉันชื่อ {{ name }}. ฉันเป็นเสียงภาษาไทยจากประเทศไทย."},ur:{notSpecified:"سلام، میرا نام {{ name }} ہے۔ میں {{ country }} سے {{ language }} کی آواز ہوں۔"},"ur-IN":{notSpecified:"سلام، میرا نام {{ name }} ہے۔ میں ہندوستان کی اردو آواز ہوں۔"},"ur-PK":{notSpecified:"سلام، میرا نام {{ name }} ہے۔ میں پاکستان کی اردو آواز ہوں۔"},yue:{notSpecified:"你好，我叫{{ name }}。我係廣東話聲音。"},"yue-CN":{notSpecified:"你好，我叫{{ name }}。我係中國廣東話聲音。"},cmn:{notSpecified:"您好，我是{{ name }}。我是普通话声音。"},"cmn-CN":{notSpecified:"您好，我是{{ name }}。我是中国普通话声音。"},lt:{notSpecified:"Labas, mano vardas yra {{ name }}. Aš esu {{ country }} kalbos balsas."},"lt-LT":{notSpecified:"Labas, mano vardas yra {{ name }}. Aš esu Lietuvos kalbos balsas."},lv:{notSpecified:"Sveiki, mans vārds ir {{ name }}. Es esmu balss no {{ country }}."},"lv-LV":{notSpecified:"Sveiki, mans vārds ir {{ name }}. Es esmu balss no Latvijas."},sk:{notSpecified:"Ahoj, moje meno je {{ name }}. Som hlas zo Slovenska."},"sk-SK":{notSpecified:"Ahoj, moje meno je {{ name }}. Som slovenský hlas zo Slovenska."},sl:{notSpecified:"Pozdravljeni, moje ime je {{ name }}. Sem glas iz Slovenije."},"sl-SI":{notSpecified:"Pozdravljeni, moje ime je {{ name }}. Sem slovenski glas iz Slovenije."},ro:{notSpecified:"Salut, numele meu este {{ name }}. Sunt o voce din România."},"ro-RO":{notSpecified:"Salut, numele meu este {{ name }}. Sunt o voce din România."},ru:{notSpecified:"Здравствуйте, меня зовут {{ name }}. Я голос из России."},"ru-RU":{notSpecified:"Здравствуйте, меня зовут {{ name }}. Я русский голос из России."},uk:{notSpecified:"Привіт, мене звати {{ name }}. Я голос з України."},"uk-UA":{notSpecified:"Привіт, мене звати {{ name }}. Я український голос з України."},sv:{notSpecified:"Hej, jag heter {{ name }}. Jag är en svensk röst."},"sv-SE":{notSpecified:"Hej, jag heter {{ name }}. Jag är en svensk röst från Sverige."},af:{notSpecified:"Hallo, my naam is {{ name }}. Ek is 'n Afrikaanse stem van {{ country }}."},"af-ZA":{notSpecified:"Hallo, my naam is {{ name }}. Ek is 'n Afrikaanse stem van Suid-Afrika."},ar:{notSpecified:"مرحبًا، اسمي {{ name }}. أنا صوت باللغة العربية."},"ar-AE":{notSpecified:"مرحبًا، اسمي {{ name }}. أنا صوت من الإمارات العربية المتحدة."},"ar-IQ":{notSpecified:"مرحبًا، اسمي {{ name }}. أنا صوت من العراق."},bg:{notSpecified:"Здравейте, казвам се {{ name }}. Аз съм глас от България."},"bg-BG":{notSpecified:"Здравейте, казвам се {{ name }}. Аз съм български глас от България."},bn:{notSpecified:"হ্যালো, আমার নাম {{ name }}। আমি বাংলা ভাষার কণ্ঠ।"},"bn-IN":{notSpecified:"হ্যালো, আমার নাম {{ name }}। আমি ভারতের বাংলা ভাষার কণ্ঠ।"},ca:{notSpecified:"Hola, em dic {{ name }}. Sóc una veu en català."},"ca-ES":{notSpecified:"Hola, em dic {{ name }}. Sóc una veu catalana d'Espanya."},cs:{notSpecified:"Ahoj, jmenuji se {{ name }}. Jsem hlas z České republiky."},"cs-CZ":{notSpecified:"Ahoj, jmenuji se {{ name }}. Jsem český hlas z České republiky."},el:{notSpecified:"Γεια σας, με λένε {{ name }}. Είμαι φωνή από την Ελλάδα."},"el-GR":{notSpecified:"Γεια σας, με λένε {{ name }}. Είμαι ελληνική φωνή από την Ελλάδα."},et:{notSpecified:"Tere, minu nimi on {{ name }}. Olen hääl Eestist."},"et-EE":{notSpecified:"Tere, minu nimi on {{ name }}. Olen eestikeelne hääl Eestist."},fa:{notSpecified:"سلام، نام من {{ name }} است. من یک صدای فارسی هستم."},"fa-IR":{notSpecified:"سلام، نام من {{ name }} است. من یک صدای فارسی از ایران هستم."},fil:{notSpecified:"Kamusta, ang pangalan ko ay {{ name }}. Ako ay isang boses mula sa Pilipinas."},"fil-PH":{notSpecified:"Kamusta, ang pangalan ko ay {{ name }}. Ako ay isang boses mula sa Pilipinas."},ga:{notSpecified:"Dia duit, is mise {{ name }}. Is mé guth ó Éirinn."},"ga-IE":{notSpecified:"Dia duit, is mise {{ name }}. Is mé guth Éireannach ó Éirinn."},he:{notSpecified:"שלום, קוראים לי {{ name }}. אני קול בעברית."},"he-IL":{notSpecified:"שלום, קוראים לי {{ name }}. אני קול מעיר ישראל."},hi:{notSpecified:"नमस्ते, मेरा नाम {{ name }} है। मैं हिंदी आवाज़ हूँ।"},"hi-IN":{notSpecified:"नमस्ते, मेरा नाम {{ name }} है। मैं भारत की हिंदी आवाज़ हूँ।"},hr:{notSpecified:"Bok, ja sam {{ name }}. Ja sam glas iz Hrvatske."},"hr-HR":{notSpecified:"Bok, ja sam {{ name }}. Ja sam glas iz Hrvatske."},hu:{notSpecified:"Szia, a nevem {{ name }}. Egy magyar hang vagyok."},"hu-HU":{notSpecified:"Szia, a nevem {{ name }}. Egy magyar hang vagyok Magyarországról."},is:{notSpecified:"Halló, ég heiti {{ name }}. Ég er íslensk rödd."},"is-IS":{notSpecified:"Halló, ég heiti {{ name }}. Ég er íslensk rödd frá Íslandi."},ka:{notSpecified:"გამარჯობა, მე მქვია {{ name }}. მე ვარ ხმა საქართველოდან."},"ka-GE":{notSpecified:"გამარჯობა, მე მქვია {{ name }}. მე ვარ ქართული ხმა საქართველოდან."},kk:{notSpecified:"Сәлеметсіз бе, менің атым {{ name }}. Мен қазақ тілінің даусымын."},"kk-KZ":{notSpecified:"Сәлеметсіз бе, менің атым {{ name }}. Мен қазақ тілінің даусымын Қазақстаннан."},ko:{notSpecified:"안녕하세요, 제 이름은 {{ name }}입니다. 저는 한국어 목소리입니다."},"ko-KR":{notSpecified:"안녕하세요, 제 이름은 {{ name }}입니다. 저는 대한민국의 한국어 목소리입니다."},nl:{notSpecified:"Hallo, mijn naam is {{ name }}. Ik ben een Nederlandse stem."},"nl-BE":{notSpecified:"Hallo, mijn naam is {{ name }}. Ik ben een Nederlandse stem uit België."},"nl-NL":{notSpecified:"Hallo, mijn naam is {{ name }}. Ik ben een Nederlandse stem uit Nederland."},nb:{notSpecified:"Hei, jeg heter {{ name }}. Jeg er en norsk stemme."},"nb-NO":{notSpecified:"Hei, jeg heter {{ name }}. Jeg er en norsk stemme fra Norge."},pl:{notSpecified:"Cześć, mam na imię {{ name }}. Jestem głosem polskim."},"pl-PL":{notSpecified:"Cześć, mam na imię {{ name }}. Jestem polskim głosem z Polski."},si:{notSpecified:"හෙලෝ, මගේ නම {{ name }}. මම {{ country }} වෙතින් සිංහල හඬක්."},"si-LK":{notSpecified:"හෙලෝ, මගේ නම {{ name }}. මම ශ්‍රී ලංකාවේ සිංහල හඬක්."},sw:{notSpecified:"Habari, jina langu ni {{ name }}. Mimi ni sauti ya Kiswahili kutoka {{ country }}."},"sw-TZ":{notSpecified:"Habari, jina langu ni {{ name }}. Mimi ni sauti ya Kiswahili kutoka Tanzania."},tr:{notSpecified:"Merhaba, benim adım {{ name }}. Ben bir Türkçe sesim."},"tr-TR":{notSpecified:"Merhaba, benim adım {{ name }}. Ben Türkiye'den bir Türkçe sesim."},vi:{notSpecified:"Xin chào, tôi tên là {{ name }}. Tôi là giọng nói tiếng Việt."},"vi-VN":{notSpecified:"Xin chào, tôi tên là {{ name }}. Tôi là giọng nói tiếng Việt từ Việt Nam."}}});var YI,Qi,Z0,FF,za,KI,UF,ZI,HI,hd,VF,XI,$F,qF,JI,eR,H0,tR,nR,GF,rR,WF,zF,jF,QF,YF,X0=O(()=>{"use strict";p();m();YI=Ee(G0());Ng();W0();j0();Y0();K0();Qi="speechSynth",Z0="local",FF=md(({audioServerUrl:e,idToken:t})=>gd(e,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"X-Speechify-Client":Oa()?"SafariExtension":"DesktopExtension","X-Speechify-Client-Version":w.runtime.getManifest().version}}).then(r=>r.json())),za=e=>({displayName:e.name,localizedDisplayName:{},name:e.name,language:e.locale,engine:e.provider,gender:e.gender==="unspecified"?"notSpecified":e.gender,labels:e.tags,avatarImage:e.avatarUrl,previewAudio:e.previews?.[0]?.previewUrl,slug:e.slug}),KI=async(e,t)=>gd(`${e}/public-voices/get-by-scopes`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"x-caller":"Speechify Chrome Extension"},body:JSON.stringify({scopes:["reader-app","reader-app:recommended"]})}).then(r=>r.json()),UF=md(async(e,t)=>{let r=await KI(e,t),i=r["reader-app"],s=r["reader-app:recommended"],c=i.reduce((l,d)=>{let g=d.locale.split("-")[0];return l[g]||(l[g]=[]),l[g].push(d),l},{});return{config:{defaultVoice:za(i[0]),fallbackVoice:za(i[0])},labels:[],tabs:[{displayName:"Recommended",localizedDisplayName:{},categories:[{displayName:"All",localizedDisplayName:{},voices:s.map(za),localVoices:{languages:[]}}]},{displayName:"All",localizedDisplayName:{},categories:Object.keys(c).map(l=>({displayName:new Intl.DisplayNames(["en"],{type:"language"}).of(l),localizedDisplayName:{},voices:c[l].map(za),localVoices:{languages:[l]}}))}],voicePreviewTemplates:{}}}),ZI="https://cdn.speechify.com",HI=e=>{let t=e.split("-")[1]||"US",r=/^\d+$/.test(t);return`${ZI}/web/flags/${r?"XX":t}.svg`},hd=({language:e,...t})=>{let[r,i="US"]=e.split("-").filter(Boolean).map(d=>d.toLowerCase()),s=new Intl.DisplayNames([e],{type:"region"}),c=new Intl.DisplayNames([e],{type:"language"});return Wa[r],(Wa[r]??Wa["*"]).notSpecified.replace("{{ name }}",t.name.startsWith("PVL:")?t.displayName:t.name).replace("{{ language }}",c.of(r)).replace("{{ country }}",s.of(i.toUpperCase()))},VF=(e,t)=>["language","name","engine"].every(i=>{let s=e[i],c=t[i];return!s||!c?!0:(i==="engine"&&(s=s===Z0?Qi:s,c=c===Z0?Qi:c),(s||"").toLowerCase()===(c||"").toLowerCase())}),XI={en:"English",es:"Spanish",fr:"French",de:"German",it:"Italian",pt:"Portuguese",nl:"Dutch",pl:"Polish",ru:"Russian",ja:"Japanese",ko:"Korean",zh:"Chinese",ar:"Arabic",hi:"Hindi",tr:"Turkish",sv:"Swedish",da:"Danish",no:"Norwegian",fi:"Finnish",cs:"Czech",el:"Greek",he:"Hebrew",th:"Thai",vi:"Vietnamese",id:"Indonesian",uk:"Ukrainian",ro:"Romanian",hu:"Hungarian",bg:"Bulgarian",hr:"Croatian",sk:"Slovak",sl:"Slovenian",lt:"Lithuanian",lv:"Latvian",et:"Estonian",ms:"Malay",fil:"Filipino",ta:"Tamil",te:"Telugu",bn:"Bengali",mr:"Marathi",gu:"Gujarati",kn:"Kannada",ml:"Malayalam",pa:"Punjabi",ur:"Urdu",fa:"Persian",ca:"Catalan",ga:"Irish",cy:"Welsh",af:"Afrikaans",sw:"Swahili"},$F=e=>{let t=e.split("-")[0];return XI[t]||t.toUpperCase()},qF=e=>`${e.displayName}-${e.language}`,JI=(e,t)=>!e||!t?!1:e.displayName===t.displayName&&e.language===t.language,eR={"timbre:angry":"Intense","timbre:assertive-or-confident":"Bold","timbre:bright":"Bright","timbre:calm-or-relaxed":"Calm","timbre:cheerful":"Cheerful","timbre:deep":"Rich","timbre:direct":"Clear","timbre:energetic":"Energetic","timbre:high-pitch":"Crisp","timbre:neutral":"Neutral","timbre:professional":"Professional","timbre:relaxed":"Relaxed","timbre:sad":"Thoughtful","timbre:surprised":"Amazed","timbre:warm-or-friendly":"Inviting"},H0=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),tR=e=>eR[e]||H0(e.split(" ")[0]),nR=e=>!!e.personal,GF=e=>nR(e)?e.avatarImage||"":e.avatarImage||HI(e.language),rR=e=>{if(!e?.labels)return"";let t=e.labels.find(i=>i.includes("style:")),r=e.labels.find(i=>i.includes("timbre:"));if(t){let i=t.split(":")?.at(-1)?.split(" ")[0]||"";return H0(i)}return r?tR(r):""},WF=(e,t)=>e.labels?.includes("label:founder")?"Founder":e.labels?.includes("label:partner")?"Official Voice":t.some(i=>i.slug===e.slug)?"Narrator":rR(e),zF=e=>!!(e.labels?.includes("label:founder")||e.labels?.includes("label:partner")),jF=(e,t=!1)=>e.engine===Qi?e.name.split(/ \(| -/)[0]:t?e.displayName:e.displayName.split(" ")[0],QF=e=>{let[t,r]=e.language.split("-");return r?r.toUpperCase():t.toUpperCase()},YF=(e,t)=>JI(t,e)});function XF({value:e,children:t}){return u(J0.Provider,{value:e},t)}function e2(){let e=(0,ja.useContext)(J0);if(!e)throw new Error("useSettingsAdapter must be used within a SettingsAdapterProvider");return e}var ja,J0,t2=O(()=>{"use strict";p();m();ja=Ee(De()),J0=(0,ja.createContext)(null)});function oU(e,t){let{fetch:r,isPlaybackActive:i}=e2(),[s,c]=(0,Mn.useState)(Qa===t),[l,d]=(0,Mn.useState)(!1),g=(0,Mn.useRef)(null);(0,Mn.useEffect)(()=>{let R=k=>{c(k===t)};return yd.add(R),()=>{yd.delete(R)}},[t]);let y=(0,Mn.useCallback)(()=>{g.current&&(g.current.abort(),g.current=null);let R=n2();R.pause(),R.currentTime=0,typeof speechSynthesis<"u"&&speechSynthesis.cancel(),Un(null),d(!1)},[]),b=(0,Mn.useCallback)(async()=>{if(await i())return;let R=n2();if(y(),Qa!==t){d(!0),g.current=new AbortController;try{if(e.previewAudio){let k=await r("/tts/fetch-preview-url",{url:e.previewAudio});if(g.current?.signal.aborted)return;k?.audioData&&(R.src=k.audioData,await R.play(),Un(t)),d(!1);return}if(e.engine!==Qi){let B=`<speak>${hd(e)}</speak>`,N=await r("/tts/get-audio",{ssml:B,voice:{name:e.name,displayName:e.displayName,language:e.language,engine:e.engine,gender:e.gender,localizedDisplayName:{}}});if(g.current?.signal.aborted)return;N?.audioData&&(R.src=N.audioData,await R.play(),Un(t)),d(!1);return}if(typeof speechSynthesis<"u"){let k=hd(e),B=new SpeechSynthesisUtterance(k),N=speechSynthesis.getVoices().find(F=>F.name?.toLowerCase()===e.name?.toLowerCase());N&&(B.voice=N),speechSynthesis.cancel(),setTimeout(()=>{speechSynthesis.speak(B),Un(t),d(!1),B.addEventListener("end",()=>{Un(null)}),B.addEventListener("error",()=>{Un(null)})},250)}}catch(k){console.error("Failed to play voice preview:",k),d(!1),Un(null)}}},[e,t,y,r,i]),E=(0,Mn.useCallback)(()=>{s?y():b()},[s,b,y]);return{isPlaying:s,isLoading:l,playPreview:b,stopPreview:y,togglePreview:E}}function Ya(){Qa!==null&&(Lr&&(Lr.pause(),Lr.currentTime=0),typeof speechSynthesis<"u"&&speechSynthesis.cancel(),Un(null))}var Mn,Lr,Qa,yd,Un,n2,bd=O(()=>{"use strict";p();m();Mn=Ee(De());X0();t2();Lr=null,Qa=null,yd=new Set,Un=e=>{Qa=e,yd.forEach(t=>t(e))},n2=()=>(Lr||(Lr=new Audio,Lr.addEventListener("ended",()=>{Un(null)}),Lr.addEventListener("error",()=>{Un(null)})),Lr)});var Vn,dU,Yi,Ka,fU,pU,mU,gU,hU,oR,yU,bU,o2=O(()=>{"use strict";p();m();Vn=Ee(De());Bi();r2();Ir();dU=()=>[Z(t=>t.currentUrlState),Vg],Yi=()=>Z(e=>e.currentUrl),Ka=()=>Z(e=>e.currentUrlMetadata),fU=()=>Z(e=>e.config),pU=()=>null,mU=()=>Z(e=>e.currentSessionState?.chatId),gU=()=>{let e=Z(i=>i.currentSessionState?.isChatStreaming),[t,r]=(0,Vn.useState)(!1);return(0,Vn.useEffect)(()=>{if(!e){r(!1);return}r(e)},[e]),t},hU=e=>{let[t,r]=(0,Vn.useState)(!1);return(0,Vn.useEffect)(()=>{let i=()=>{let s=Date.now(),c=e.updatedAt+.5*60*1e3<=s,l=e.status==="streaming"&&!c;e.status==="streaming"&&c&&Gg(e.id,{status:"completed"}),r(l)};if(i(),e.status==="streaming"){let s=setInterval(i,5e3);return()=>clearInterval(s)}},[e]),t},oR=()=>{let e=Z(r=>r.currentSessionState);return{messages:(0,Vn.useMemo)(()=>e?.messages?[...e.messages].sort((r,i)=>r.timestamp-i.timestamp):[],[e]),loading:!1}},yU=()=>{let e=Yi(),[t,r]=(0,Vn.useState)(null);return(0,Vn.useEffect)(()=>{(async()=>{try{let s=await Ba();r(s)}catch{r(null)}})()},[e]),t},bU=()=>{let{messages:e}=oR(),t=Z(s=>s.currentSessionState),r=e.length>0,i=t?.summaryData!==void 0;return r||i}});var io=O(()=>{p();m();Ir();ad();o2()});var iR,i2,s2=O(()=>{"use strict";p();m();iR={amplitude:{apiKey:"7cb368e0f04f1b8e6fc3ce1008c0011c"},cdn:{baseUrl:"https://cdn.speechify.com"},cloudFunctions:{baseUrl:"https://us-central1-speechifymobile.cloudfunctions.net"},platform:{cloudFunctionsBaseUrl:"https://us-central1-speechifymobile.cloudfunctions.net"},segment:{writeKey:"TNQ3krVkHTWg6Gx2PEkaCYEXaNrwbGXG"},summarizationProxyUrl:"https://us-central1-faro-cloud-proxy-production.cloudfunctions.net/gemini-summarization-proxy",llmService:{baseUrl:"https://llm.api.speechify.com"},audioServer:{baseUrl:"https://audio.api.speechify.com"},voiceTyping:{url:"https://ce-voice-typing.speechify.com"},app:{baseUrl:"https://app.speechify.com"}},i2=iR});var _n,Vo=O(()=>{"use strict";p();m();s2();_n=i2});var c2=ee((NU,a2)=>{"use strict";p();m();function sR(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}a2.exports=sR});var Sd,Cd,xd,aR,l2,$n,u2,d2,f2,Za,p2=O(()=>{"use strict";p();m();Sd=Ee(c2());JT();Cd=e=>[e[0],e[0]+e[2]],xd=e=>[e[1],e[1]+e[3]],aR=Lg((e,t)=>Math.max(e[0],t[0])<Math.min(e[1],t[1])),l2=e=>({x:e.x,y:e.y,width:e.width,height:e.height}),$n=e=>[e.x,e.y,e.width,e.height],u2=e=>({x:e[0],y:e[1],width:e[2],height:e[3]}),d2=(e,t)=>r=>({x:Math.max(r.x-e,0),y:r.y,width:r.width+e*2,height:r.height*t}),f2=e=>{let t=Ni(Ag,$n,xd)(e),r=e.filter(Ni($n,xd,aR(t)));return{x:e[0].x,y:e[0].y,width:Math.max(...r.map(Ni($n,Cd,Sd.default)))-e[0].x,height:Math.max(...r.map(Ni($n,xd,Sd.default)))-e[0].y}},Za=(e,t)=>[Math.max(t[0]-e[0],0),Math.max(t[1]-e[1],0),Math.min(t[2],e[2]),Math.min(t[3],e[3])]});function uR(e){let t=e instanceof HTMLElement?e:e.parentElement;return window.getComputedStyle(t).color}function Ed(e,t){let r=`--${e}ElemColor`,i=`--${e}ElemMatrix`,s=`--${e}HighlightWordInfo`,c=`--${e}HighlightWordClipInfo`,l=`--${e}HighlightSentenceInfo`,d=`--${e}SentenceHighlightColorDark`,g=`--${e}SentenceHighlightColorLight`,y=`--${e}WordHighlightColorDark`,b=`--${e}WordHighlightColorLight`,E=0,R=new Map,k=xR();function B(K){let pe={scaleX:1,scaleY:1,skewX:0,skewY:0,translateX:0,translateY:0};if(!k)return pe;for(;K;){let le=window.getComputedStyle(K),me=le.transform||le.webkitTransform;if(me&&me!=="none"){let ce=me.match(/^matrix\((.+)\)$/);if(ce){let fe=ce[1].split(", ").map(parseFloat);if(fe.length===6){let Ce=fe[0],Ze=fe[3],te=Math.atan(fe[1]),Re=Math.atan(fe[2]),Le=fe[4],we=fe[5];return{scaleX:Ce,scaleY:Ze,skewX:te,skewY:Re,translateX:Le,translateY:we}}}}K=K.parentElement}return pe}function N(K){let pe=R.get(K);if(pe){let{ctx:me,id:ce}=pe;return me.clearRect(0,0,K.scrollWidth,K.scrollHeight),{ctx:me,id:ce}}return pe={ctx:document.getCSSCanvasContext("2d",`${e}-highlighting-${E}`,K.scrollWidth,K.scrollHeight),id:`${e}-highlighting-${E}`},R.set(K,pe),E++,pe}function F(K){K.style.removeProperty(r),K.style.removeProperty(s),K.style.removeProperty(c),K.style.removeProperty(l),K.style.removeProperty(d),K.style.removeProperty(g),K.style.removeProperty(y),K.style.removeProperty(b),K.style.removeProperty(i);let le=K.style.getPropertyValue("background-image").split(",").filter(me=>!me.includes(e)).join(",");le===""?K.style.removeProperty("background-image"):K.style.setProperty("background-image",le),K.removeAttribute(`data-${e}-highlight`),K.removeAttribute(`data-${e}-no-background`)}async function C(K,{elemColor:pe,elemMatrix:le,sentencePositions:me,wordPositions:ce,wordClipPositions:fe,highlightColor:Ce,sentenceOnly:Ze,isKeypoint:te}){async function Re(){let{ctx:we,id:Ve}=N(K);K.style.setProperty("background-image",`-webkit-canvas(${Ve})`);let{paint:it}=await import("./houdini-RVEGSGXO.js"),nt=te?vd:Ce.sentence,Rt=te?wd:Ce.word;Ze?it(we,{elemColor:pe,elemMatrix:le,sentencePositions:me,sentenceColor:nt,wordColor:Rt}):it(we,{elemColor:pe,elemMatrix:le,wordPositions:ce,wordClipPositions:fe,sentencePositions:me,sentenceColor:nt,wordColor:Rt})}function Le(){if(K.style.getPropertyValue("transform"))K.style.removeProperty("transform");else{let we=getComputedStyle(K).transform;K.style.setProperty("transform",we==="none"?"translateZ(0)":we)}}await Re(),Le()}function _(K,{elemColor:pe,elemMatrix:le,sentencePositions:me,wordPositions:ce,wordClipPositions:fe,highlightColor:Ce,sentenceOnly:Ze,unsetColor:te,isKeypoint:Re}){te&&(K.style.color="unset"),K.style.setProperty(r,pe??null),K.style.setProperty(l,me?.join(",")??null);let Le=K.style.getPropertyValue("background-image");if(Le!==""){let we=Le.split(",").filter(Ve=>!Ve.includes(e)).join(",");K.style.setProperty("background-image",`${we}, paint(${e})`)}else K.style.setProperty("background-image",`paint(${e})`);Re?(K.style.setProperty(d,vd),K.style.setProperty(g,vd),K.style.setProperty(y,wd),K.style.setProperty(b,wd)):(K.style.setProperty(d,Ce.sentence.dark),K.style.setProperty(g,Ce.sentence.light),K.style.setProperty(y,Ce.word.dark),K.style.setProperty(b,Ce.word.light)),le&&K.style.setProperty(i,M(le)),Ze?(K.style.removeProperty(s),K.style.removeProperty(c)):(K.style.setProperty(s,ce?.join(",")??null),K.style.setProperty(c,fe?.join(",")??null))}function M(K){let{scaleX:pe,scaleY:le,skewX:me,skewY:ce,translateX:fe,translateY:Ce}=K,Ze=Math.tan(me),te=Math.tan(ce);return`${pe},${le},${Ze},${te},${fe},${Ce}`}async function W(K,{wordPositions:pe,wordClipPositions:le,sentencePositions:me,elemColor:ce,elemMatrix:fe,unsetColor:Ce,isKeypoint:Ze}={},te=t){let Re={...t,...te},{keepBackgrounds:Le}=Re;cR?await C(K,{wordPositions:pe,wordClipPositions:le,sentencePositions:me,elemColor:ce,elemMatrix:fe,isKeypoint:Ze,...Re}):_(K,{wordPositions:pe,wordClipPositions:le,sentencePositions:me,elemColor:ce,elemMatrix:fe,unsetColor:Ce,isKeypoint:Ze,...Re}),K.setAttribute(`data-${e}-highlight`,"true"),Le||K.setAttribute(`data-${e}-no-background`,"true")}let $=K=>{let pe=Array.from(K?.querySelectorAll(`[data-${e}-highlight="true"], [data-${e}-no-background="true"], [style*="${l}"]`)??[]).filter(le=>le instanceof HTMLElement);for(let le of pe)F(le)};async function Q(K=null){let pe=K??document.body,le=Array.from(pe.querySelectorAll(`[data-${e}-highlight="true"], [data-${e}-no-background="true"], [style*="${l}"]`)).filter(me=>me instanceof HTMLElement);$(document.body);for(let me of le)F(me)}function V(K,pe,le,me,ce=t){let fe=$o(K,le[0],le[1]),Ce=$o(K,me[0],me[1]);return de(pe,fe,Ce,{...t,...ce})}let oe=performance.now();function de(K,pe,le,me=t){let{sentenceOnly:ce,keepBackgrounds:fe,highlightColor:Ce,rectOnly:Ze,...te}={...t,...me},Re=m2(le,Ha);if(!ce&&(Re.length===0||Re[0].width===0))return;let Le=Re[0],we=$n(Le??{x:0,y:0,width:0,height:0}),Ve=m2(pe,Ha,!0),it=Ve.map($n),nt=f2(Ve);if(Ze||!K)return{lineRect:nt};let Rt=performance.now();for(let Ft of K){let Ut=Ft.closest("a")?.parentElement||Ft;if(!pe.intersectsNode(Ut)){F(Ut);continue}let Zt=mR(Ut,pe),He=it,Vt=!1;if(Zt!==Ut){let On=new Map,$t=Nn=>{let mr=Math.round(Nn[0]+Nn[2]/2),qt=Math.round(Nn[1]+Nn[3]/2),Kn=`${mr},${qt}`;if(On.has(Kn))return On.get(Kn);let zs=!!document.elementFromPoint(mr,qt)?.closest('button,[role="button"],a[role="button"],svg,mat-icon');return On.set(Kn,zs),zs},Yn=it.filter(Nn=>!$t(Nn));Yn.length>0&&(He=Yn),Vt=$t(we)}Se(Zt,we,He,Rt-oe,{sentenceOnly:ce||Vt,keepBackgrounds:fe,highlightColor:Ce,...te})}return oe=Rt,{lineRect:nt}}let se,J,Ie=[];function Se(K,pe,le,me,ce=t){let fe=K instanceof HTMLElement?K:K.parentElement,{avoidGlobalSpaceTransformation:Ce,sentenceOnly:Ze,keepBackgrounds:te,highlightColor:Re,elementColor:Le,unsetColor:we}={...t,...ce},Ve=getComputedStyle(fe);Le||=uR(fe);let it=$n(fe.getBoundingClientRect()),nt=Ce?pe:Za(it,pe),Rt=Ce?le:le.map(Zt=>Za(it,Zt));se??=nt,J&&Math.abs(J[1]-nt[1])>8&&(Ie.push({start:[...J],current:[...J],target:$n({...u2(J),x:Cd(J)[1],width:0})}),se=nt,se[2]=0),J=[...nt];let Ft=g2(se,nt,me),Ut=[...Ft];se=Ze?void 0:[...Ft];for(let Zt in Ie){let He=Ie[Zt];if(Math.abs(He.current[2]-He.target[2])<.5){Ie.splice(Number(Zt),1);continue}let Vt=g2(He.current,He.target,me),On=He.start;Ft.push(...On),Ut.push(...Vt),He.current=Vt}if(Ve.display==="inline"){let Zt=Array.from(fe.getClientRects()).map($n).map(Yn=>Za(it,Yn)),He=Ve.direction==="rtl"?bR:yR,Vt=Ve.direction==="rtl"?Rt.at(-1):Rt.at(0),On=He(Zt,nt);Ft=Td(On,Ft),Ut=Td(On,Ut);let $t=He(Zt,Vt);Rt=[Td($t,[Vt[0],Rt[0][1],Rt.reduce((Yn,Nn)=>Yn+Nn[2]-Ha,Ha),Rt[0][3]])]}W(fe,{wordPositions:Ft,wordClipPositions:Ut,sentencePositions:Rt.flat(),elemColor:Le,elemMatrix:B(fe),unsetColor:we,isKeypoint:ce.isKeypoint},{sentenceOnly:Ze,keepBackgrounds:te,highlightColor:Re})}return{removeHighlights:Q,highlightElement:V,highlightVec:Se}}function dR(e){return e.nodeType===Node.ELEMENT_NODE?e:e.parentElement}function pR(e){let t=window.getComputedStyle(e).backgroundColor;if(!t||t==="transparent")return!1;let r=fR.exec(t);if(!r)return!0;let i=r[1].split(",").map(c=>parseFloat(c));return(i.length>=4?i[3]:1)>0}function mR(e,t){let r=dR(t.commonAncestorContainer);if(!r||r===e||!e.contains(r))return e;for(let i=r;i&&i!==e;i=i.parentElement)if(pR(i))return r;return e}function m2(e,t,r){let i=Array.from(e.getClientRects()).map(l2).map(d2(t,lR)),s=i[i.length-1];return r&&s&&(s.width-=t*2),i}function g2(e,t,r){let i=Math.min(.15*Math.sqrt(Math.max(1,r)),1),s=1-i;return[e[0]*s+t[0]*i,e[1]<=t[1]?e[1]*s+t[1]*i:t[1],e[2]*s+t[2]*i,e[3]<=t[1]?e[3]*s+t[3]*i:t[3]]}function gR(e,t,r){let i=e.textContent??"",s=t,c=r;for(;s<c&&/\s/.test(i.charAt(s));)s++;for(;c>s&&/\s/.test(i.charAt(c-1));)c--;return[s,c]}function $o(e,t,r){[t,r]=gR(e,t,r);let i=h2(e,t),s=h2(e,r),c=new Range;try{c.setStart(i.node,i.offset),c.setEnd(s.node,s.offset)}catch{}return c}function h2(e,t){let r=hR(e,NodeFilter.SHOW_TEXT),i=0,s=e;for(let c of r){if((c.textContent?.length??0)+i>t)return{node:c,offset:t-i};i+=c.textContent?.length||0,s=c}return{node:s,offset:s?.textContent?.length??0}}function*hR(e,t){let r=e.ownerDocument.createNodeIterator(e,t),i=r.nextNode();for(;i;)yield i,i=r.nextNode()}function Td(e,t){return[t[0]+e.totalXOffset-(t[1]===0?e.xMarginOffset:0),0,t[2]-2,t[3]]}function yR(e,t){let r=e.findIndex(l=>l[1]===t[1]),i=e.slice(0,Math.max(0,r)),s=i.length===0?e[0]?.[0]??0:0,c=i.reduce((l,d)=>l+d[2],0)+1;return{xMarginOffset:s,totalXOffset:c}}function bR(e,t){let r=e.findIndex(l=>l[1]===t[1]),i=e.slice(Math.max(0,r)+1),s=0,c=i.reduce((l,d)=>l+d[2],0)+1-(e[r]?.[0]??0);return{xMarginOffset:s,totalXOffset:c}}function xR(){let e=document.querySelectorAll("*");for(let t of e){let i=getComputedStyle(t).transform;if(i.startsWith("matrix")){let s=i.match(/matrix\(([^)]+)\)/)?.[1].split(",").map(parseFloat);if(s){let c=s[0],l=s[3];if(c!==1||l!==1)return!0}}}return!1}var cR,Ha,lR,vd,wd,fR,y2=O(()=>{"use strict";p();m();lt();p2();"CSS"in globalThis&&"paintWorklet"in globalThis.CSS&&CSS.paintWorklet.addModule(w.runtime.getURL("/houdini.js"));cR=!("CSS"in globalThis&&"paintWorklet"in globalThis.CSS),Ha=2,lR=1.1,vd=v["hglt-sec"],wd=v["hglt-prim"];fR=/rgba?\(([^)]+)\)/});var b2=O(()=>{"use strict";p();m();y2()});var SR,kd,x2=O(()=>{"use strict";p();m();Er();SR=St(()=>({currentWord:null})),kd=e=>{SR.setState({currentWord:e})}});function CR({targetY:e,currentY:t,element:r=window}){_d=e,!ir&&(Ki=t,qo=document.timeline.currentTime,or=0,ir=!0,requestAnimationFrame(i=>Rd(i,r)))}function Rd(e,t){let{autoScroll:r,autoScrollTemporary:i}=Hi();if(!(i&&r)){ir=!1;return}let c=_d-Ki;if(ir=Math.abs(c)>15||Math.abs(or)>10,!ir)return;if(Or){requestAnimationFrame(g=>Rd(g,t));return}let l=e-(typeof qo=="number"?qo:qo?qo.to("ms").value:0);qo=e;let d=Math.ceil(l*10);for(let g=0;g<d;g++)vR(l/d);_2({top:Ki},t),requestAnimationFrame(g=>Rd(g,t))}function vR(e){let t=e/1e3,r=_d-Ki,i=Math.sign(or)*or**2/2/Id>r,c=(r<0?!i:i)?Math.min(or**2/2/Id/Math.abs(r),1.1):1;or+=(i?-1:1)*Id*c*t,Ki+=or*t}function T2({top:e,behavior:t},{element:r=window}={}){t==="smooth"?CR({targetY:Math.max(e,0),currentY:r===window?window.scrollY:r.scrollTop,element:r}):_2({top:e,behavior:t},r)}function I2(){if(ir&&M2(),!Go)return;let{autoScrollTemporary:e}=Hi();e&&w2(!1),Xa(ec())}function Pr(){if(Ja)return;if(Md){Md=!1;return}if(Oa()&&Or&&!so)return;ir&&(ir=!1,or=0);let{autoScrollTemporary:e}=Hi();if(e&&Go){w2(!1);let t=ec();Xa(t)}else if(!e&&Go){let t=ec();Xa(t)}v2=performance.now()}function Ad(e){Go=e,e||(Zi=null,Lt.getState().setScrollIndicator(null))}function R2(){let{autoScroll:e,autoScrollTemporary:t}=Hi();return e&&t&&Go}function M2(){ir=!1,or=0}function wR(){Ja=!1,Zi=null,M2()}function _2(e,t=window){if(e?.behavior==="smooth"&&(console.warn("Smooth scroll breaks auto scroll...ignoring"),delete e.behavior),Or){v2=performance.now();return}so||(Ja=!0,t.scrollTo(e),Md=!0,setTimeout(()=>{Ja=!1},50))}function Xi(e){Zi=e;let{autoScrollTemporary:t}=Hi();if(!t&&Go){let r=ec();Xa(r)}}function ec(){let e=document.getElementById("scrollable-content");if(!e||Zi===null)return null;let t=e.scrollTop,r=e.clientHeight,i=Zi-t,s=50;return i<-s?"top":i>r+s?"bottom":null}function iV(){Lt.getState().enableAutoScroll(),wR()}var v2,Id,ir,or,qo,Ki,_d,Hi,w2,Xa,Md,Or,so,E2,k2,Ja,tc,Go,Zi,S2,C2,oV,A2=O(()=>{"use strict";p();m();Fi();Ng();Id=1e4,ir=!1,or=0;Hi=()=>{let e=Lt.getState();return{autoScroll:e.autoScroll,autoScrollTemporary:e.autoScrollTemporary}},w2=e=>{Lt.getState().setAutoScrollTemporary(e)},Xa=e=>{Lt.getState().setScrollIndicator(e)};Md=!1,Or=!1,so=!1,E2=0,k2=0,Ja=!1,tc=e=>e.pointerType==="touch";window.addEventListener("pointerdown",e=>{!tc(e)||Or||(Or=!0,E2=e.screenX??0,k2=e.screenY??0)});window.addEventListener("pointermove",e=>{if(!tc(e)||!Or||so)return;let t=e.screenX??0,r=e.screenY??0;so=Math.sqrt((t-E2)**2+(r-k2)**2)>32,so&&I2()});window.addEventListener("wheel",e=>{if(e.deltaY===0)return;let t=document.getElementById("scrollable-content");if(t){let r=e.target;if(!r||!t.contains(r))return}I2()},{passive:!0});window.addEventListener("pointerup",e=>{tc(e)&&(Or=!1,so=!1)});window.addEventListener("pointercancel",e=>{tc(e)&&(Or=!1,so=!1)});Go=!1,Zi=null;S2=()=>window.location.origin==="https://docs.google.com"&&window.location.pathname.startsWith("/document/d");C2=async e=>{let t=document.getElementById("scrollable-content");return e?document.querySelector(e)?.addEventListener("scroll",Pr):t?t.addEventListener("scroll",Pr):S2()?document.querySelector(".kix-appview-editor")?.addEventListener("scroll",Pr):window.addEventListener("scroll",Pr),()=>{e?document.querySelector(e)?.removeEventListener("scroll",Pr):t?t.removeEventListener("scroll",Pr):S2()?document.querySelector(".kix-appview-editor")?.removeEventListener("scroll",Pr):window.removeEventListener("scroll",Pr)}},oV=e=>{let t=0,r=10,i=()=>e.aborted?Promise.resolve(()=>{}):document.getElementById("scrollable-content")?C2():(t++,t<r?new Promise(c=>setTimeout(()=>i().then(c),100)):C2());return i()}});async function Nr(){try{let{fetch:e}=await import("./routes-VACTKLPN.js"),t=await e("/auth/get-id-token");if(!t?.idToken)throw new Error("No ID token received from auth service");return t.idToken}catch(e){throw TR.error("Failed to get auth token:",e),e}}async function Ji(){return{Authorization:`Bearer ${await Nr()}`,"Content-Type":"application/json"}}var TR,Ld=O(()=>{"use strict";p();m();Ke();TR=be("SidepanelLLMAuth")});async function Od(e,t){let i=`${Pd()}/v2/chats`,s={title:t,scope:"CHROME_EXTENSION",source:{type:"text",content:e}};try{let c=await Ji(),l=await fetch(i,{method:"POST",headers:c,body:JSON.stringify(s)});if(!l.ok){let g=await l.text();throw new Error(`HTTP ${l.status}: ${g}`)}return await l.json()}catch(c){throw ao.error("Failed to create chat:",c),c}}async function ER(e,t={},r,i,s,c){let d=`${Pd()}/v2/chats/${e}/summary`,g={format:t.format||"Paragraph",length:t.length||"Short"};try{let y=await Ji();y.Accept="text/event-stream",y["Cache-Control"]="no-cache";let b=await fetch(d,{method:"POST",headers:y,body:JSON.stringify(g),signal:c});if(!b.ok){ao.error("🔍 Summary response error:",{response:b});let k=await b.text();throw new Error(`HTTP ${b.status}: ${k}`)}if(!b.body)throw ao.error("🔍 Summary response error:",{response:b}),new Error("No response body for SSE stream");let E=b.body.getReader(),R=new TextDecoder;try{let k="",B="";for(;!c?.aborted;){let{done:N,value:F}=await E.read();if(F){let C=R.decode(F,{stream:!0}),_=B+C,{events:M,remaining:W}=nc(_);B=W;for(let $ of M){if(c?.aborted)return;if($.data&&$.data!=="[DONE]")try{let{message:Q}=JSON.parse($.data);Q.type==="summary"&&Q.body&&(k=Q.body,r(k))}catch(Q){ao.error("❌ Failed to parse summary chunk:",Q)}}}if(N){if(B.trim()){let{events:C}=nc(B+`

`);for(let _ of C)if(_.data&&_.data!=="[DONE]")try{let{message:M}=JSON.parse(_.data);M.type==="summary"&&M.body&&(k=M.body,r(k))}catch(M){ao.error("❌ Failed to parse final summary chunk:",M)}}s?.(k);break}}}finally{E.releaseLock()}}catch(y){throw ao.error("Failed to generate summary:",y),i?.(y),y}}async function Nd(e,t,r,i,s,c){let l=new URLSearchParams;t.response&&l.set("response",t.response),l.set("text",t.text);let g=`${Pd()}/v2/chats/${e}/message?${l.toString()}`;try{let y=await Ji();y.Accept="text/event-stream",y["Cache-Control"]="no-cache";let b=await fetch(g,{method:"GET",headers:y,signal:c});if(!b.ok){let k=await b.text();throw new Error(`HTTP ${b.status}: ${k}`)}if(!b.body)throw new Error("No response body for SSE stream");let E=b.body.getReader(),R=new TextDecoder;try{let k="";for(;!c?.aborted;){let{done:B,value:N}=await E.read();if(N){let F=R.decode(N,{stream:!0}),C=k+F,{events:_,remaining:M}=nc(C);k=M;for(let W of _){if(c?.aborted)return;W.data&&W.data!=="[DONE]"&&r(W.data)}}if(B){if(k.trim()){let{events:F}=nc(k+`

`);for(let C of F)C.data&&C.data!=="[DONE]"&&r(C.data)}s?.();break}}}finally{E.releaseLock()}}catch(y){throw ao.error("Failed to stream followup response:",y),i?.(y),y}}function nc(e){let t=[],r=e.split(`
`),i={},s=0;for(s=0;s<r.length;s++){let l=r[s];if(l.trim()===""){i.data!==void 0&&t.push(i),i={};continue}let d=l.indexOf(":");if(d===-1)continue;let g=l.substring(0,d).trim(),y=l.substring(d+1).trim();switch(g){case"data":i.data=y;break;case"event":i.event=y;break;case"id":i.id=y;break}}let c="";if(i.data!==void 0){let l=r.length-1;for(;l>0&&r[l].trim()!=="";)l--;r[l].trim()===""&&l++,c=r.slice(l).join(`
`)}return{events:t,remaining:c}}var ao,Pd,Dd=O(()=>{"use strict";p();m();Vo();Ke();Ld();ao=be("SidepanelLLMService"),Pd=()=>_n.llmService.baseUrl});function kR(e){let t=["network","fetch","connection","ECONNREFUSED","ENOTFOUND","ETIMEDOUT","Failed to fetch","NetworkError"],r=e.message.toLowerCase();return t.some(i=>r.includes(i.toLowerCase()))}function IR(e){return e.includes("LLM response timed out")}function RR(e){return e.name==="AbortError"||e.message.includes("abort")}function L2(e,t){return RR(e)?t==="summary"?"Summary generation was cancelled.":"Reply generation was cancelled.":kR(e)?"The network connection was lost.":t==="summary"?"Something went wrong while creating the summary.":"We're having trouble generating that reply."}function xV(e,t){return IR(e)?t==="summary"?"Something went wrong while creating the summary.":"We're having trouble generating that reply.":null}var P2=O(()=>{"use strict";p();m()});async function MR(e){let{question:t,chatId:r,summaryData:i,onData:s,onError:c,onComplete:l,onBeforeStreaming:d,onUpdateChatId:g}=e;if(!t.trim())throw Dr.warn("Empty question provided"),new Error("Question cannot be empty");try{let y=r;if(!y)if(i)try{let R="";if(Array.isArray(i.summary)?R=i.summary.join(`
`):R=i.summary.summary,R){let{chatId:k}=await Od(R);y=k,g(k)}else throw Dr.error("No summary text available to create chat"),new Error("No summary text available to create chat")}catch(R){throw Dr.error("Failed to create chat for existing summary:",R),R}else throw Dr.error("No summary data available - summary must be generated first"),new Error("No summary data available - summary must be generated first");let b=new AbortController;d(b);let E=`msg_${crypto.randomUUID()}`;return await Nd(y,{text:t.trim(),response:"markdown"},R=>{if(b.signal.aborted){Dr.debug("Chat streaming cancelled, ignoring data chunk");return}try{let k=JSON.parse(R);k.message?.body&&s({messageId:E,content:k.message.body,status:"streaming"})}catch{s({messageId:E,content:R,status:"streaming"})}},R=>{Dr.error("Failed to stream followup response:",R);let k=L2(R,"reply");s({messageId:E,content:k,status:"error"}),c(R)},()=>{if(b.signal.aborted){Dr.debug("Chat streaming cancelled, ignoring completion");return}s({messageId:E,status:"completed"}),l()},b.signal),E}catch(y){throw y instanceof Error&&y.name==="AbortError"||(Dr.error("Failed to handle question:",y),c(y instanceof Error?y:new Error("Unknown error occurred"))),y}}var Dr,O2=O(()=>{"use strict";p();m();Ke();P2();Dd();Dr=be("Chat")});var N2=O(()=>{"use strict";p();m()});var rc=O(()=>{"use strict";p();m();Dd();Ld();O2();N2()});var D2,B2,F2,Bd,U2,V2,$2,q2,G2,W2,z2,j2,Q2,Y2,K2,Fd,Z2,UV,H2=O(()=>{"use strict";p();m();D2=(r=>(r.DISABLED="disabled",r.ENABLED="enabled",r))(D2||{}),B2=(r=>(r.CONTROL="control",r.HYBRID="hybrid",r))(B2||{}),F2=(r=>(r.CONTROL="control",r.DISPLAY="display",r))(F2||{}),Bd=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(Bd||{}),U2=(r=>(r.CONTROL="control",r.ENABLED="introduce-autoplay",r))(U2||{}),V2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(V2||{}),$2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))($2||{}),q2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(q2||{}),G2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(G2||{}),W2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(W2||{}),z2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(z2||{}),j2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(j2||{}),Q2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(Q2||{}),Y2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(Y2||{}),K2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(K2||{}),Fd=(r=>(r.CONTROL="control",r.ADAPTIVE="adaptive",r))(Fd||{}),Z2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(Z2||{}),UV={oneClickUpsellNotif:Object.values(F2),ceParsingMode:Object.values(B2),sidePlayer:Object.values(D2),grafanaAnonymousTotalVisitLogging:Object.values(Bd),grafanaAnonymousUniqueVisitLogging:Object.values(Bd),introduceAiAutoplay:Object.values(U2),cevoicetyping:Object.values(V2),cevoicetypingFree:Object.values($2),ceVoiceMode:Object.values(q2),ceVoiceModeFree:Object.values(G2),ceVoiceModeOnByDefault:Object.values(W2),ceCursorDictation:Object.values(z2),ceQuestionRecommendation:Object.values(j2),micButtonRedesign:Object.values(Q2),ceMeetingNoteTaking:Object.values(Y2),ceDictationDuringMeetingCapture:Object.values(K2),voice_chat_voices_config:[],ceStreamingSynthesis:Object.values(Fd),cePdfListenButton:Object.values(Z2)}});var WV,X2,zV,J2=O(()=>{"use strict";p();m();lt();WV=["default","pink","red","orange","green"],X2=e=>{let t=`hglt-${e}-prim`,r=`hglt-${e}-sec`;return{primary:v[t],secondary:v[r],primaryLight:Do[t],secondaryLight:Do[r],primaryDark:ro[t],secondaryDark:ro[r]}},zV=X2("default")});var e3,t3=O(()=>{"use strict";p();m();e3=(e,t,{data:r})=>{if(!r)throw new Error("No audio provided");let i=URL.createObjectURL(new Blob([r])),s=new Audio(i);s.playbackRate=t;let c=null,l=!1,d=null,g=()=>{l&&!s.paused&&d&&(d({type:"progress",payload:{duration:s.currentTime}}),c=requestAnimationFrame(g))};return{play:async()=>{s.play(),l=!0,c=requestAnimationFrame(g)},pause:async()=>{s.pause(),l=!1,c&&(cancelAnimationFrame(c),c=null)},stop:async()=>{s.pause(),s.currentTime=0,l=!1,c&&(cancelAnimationFrame(c),c=null)},setupEvents:y=>(d=y,s.addEventListener("ended",()=>{l=!1,c&&(cancelAnimationFrame(c),c=null),y({type:"ended"})}),()=>{d=null,c&&(cancelAnimationFrame(c),c=null)}),seekTo:async y=>{s.currentTime=y},seekToCharIndex:async()=>{console.warn("seekToCharIndex is a no op for hdAudioPlayer")},getCurrentTime:()=>s.currentTime,getDuration:async()=>s.duration,destroy:async()=>{d=null,c&&(cancelAnimationFrame(c),c=null),s.pause(),s.removeAttribute("src"),s.load(),URL.revokeObjectURL(i)},setSpeed:async y=>{s.playbackRate=y}}}});function oc(e){let t=typeof e;if(t=="object"){if(Array.isArray(e))return"array";if(e===null)return"null"}return t}function n3(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}var Ud=O(()=>{"use strict";p();m()});function r3(e){let t=e.length*3/4;e[e.length-2]=="="?t-=2:e[e.length-1]=="="&&(t-=1);let r=new Uint8Array(t),i=0,s=0,c,l=0;for(let d=0;d<e.length;d++){if(c=ic[e.charCodeAt(d)],c===void 0)switch(e[d]){case"=":s=0;case`
`:case"\r":case"	":case" ":continue;default:throw Error("invalid base64 string.")}switch(s){case 0:l=c,s=1;break;case 1:r[i++]=l<<2|(c&48)>>4,l=c,s=2;break;case 2:r[i++]=(l&15)<<4|(c&60)>>2,l=c,s=3;break;case 3:r[i++]=(l&3)<<6|c,s=0;break}}if(s==1)throw Error("invalid base64 string.");return r.subarray(0,i)}function o3(e){let t="",r=0,i,s=0;for(let c=0;c<e.length;c++)switch(i=e[c],r){case 0:t+=sr[i>>2],s=(i&3)<<4,r=1;break;case 1:t+=sr[s|i>>4],s=(i&15)<<2,r=2;break;case 2:t+=sr[s|i>>6],t+=sr[i&63],r=0;break}return r&&(t+=sr[s],t+="=",r==1&&(t+="=")),t}var sr,ic,Vd=O(()=>{"use strict";p();m();sr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),ic=[];for(let e=0;e<sr.length;e++)ic[sr[e].charCodeAt(0)]=e;ic[45]=sr.indexOf("+");ic[95]=sr.indexOf("/")});var gt,ue,es=O(()=>{"use strict";p();m();(function(e){e.symbol=Symbol.for("protobuf-ts/unknown"),e.onRead=(r,i,s,c,l)=>{(t(i)?i[e.symbol]:i[e.symbol]=[]).push({no:s,wireType:c,data:l})},e.onWrite=(r,i,s)=>{for(let{no:c,wireType:l,data:d}of e.list(i))s.tag(c,l).raw(d)},e.list=(r,i)=>{if(t(r)){let s=r[e.symbol];return i?s.filter(c=>c.no==i):s}return[]},e.last=(r,i)=>e.list(r,i).slice(-1)[0];let t=r=>r&&Array.isArray(r[e.symbol])})(gt||(gt={}));(function(e){e[e.Varint=0]="Varint",e[e.Bit64=1]="Bit64",e[e.LengthDelimited=2]="LengthDelimited",e[e.StartGroup=3]="StartGroup",e[e.EndGroup=4]="EndGroup",e[e.Bit32=5]="Bit32"})(ue||(ue={}))});function i3(){let e=0,t=0;for(let i=0;i<28;i+=7){let s=this.buf[this.pos++];if(e|=(s&127)<<i,(s&128)==0)return this.assertBounds(),[e,t]}let r=this.buf[this.pos++];if(e|=(r&15)<<28,t=(r&112)>>4,(r&128)==0)return this.assertBounds(),[e,t];for(let i=3;i<=31;i+=7){let s=this.buf[this.pos++];if(t|=(s&127)<<i,(s&128)==0)return this.assertBounds(),[e,t]}throw new Error("invalid varint")}function ac(e,t,r){for(let c=0;c<28;c=c+7){let l=e>>>c,d=!(!(l>>>7)&&t==0),g=(d?l|128:l)&255;if(r.push(g),!d)return}let i=e>>>28&15|(t&7)<<4,s=t>>3!=0;if(r.push((s?i|128:i)&255),!!s){for(let c=3;c<31;c=c+7){let l=t>>>c,d=!!(l>>>7),g=(d?l|128:l)&255;if(r.push(g),!d)return}r.push(t>>>31&1)}}function $d(e){let t=e[0]=="-";t&&(e=e.slice(1));let r=1e6,i=0,s=0;function c(l,d){let g=Number(e.slice(l,d));s*=r,i=i*r+g,i>=sc&&(s=s+(i/sc|0),i=i%sc)}return c(-24,-18),c(-18,-12),c(-12,-6),c(-6),[t,i,s]}function cc(e,t){if(t>>>0<=2097151)return""+(sc*t+(e>>>0));let r=e&16777215,i=(e>>>24|t<<8)>>>0&16777215,s=t>>16&65535,c=r+i*6777216+s*6710656,l=i+s*8147497,d=s*2,g=1e7;c>=g&&(l+=Math.floor(c/g),c%=g),l>=g&&(d+=Math.floor(l/g),l%=g);function y(b,E){let R=b?String(b):"";return E?"0000000".slice(R.length)+R:R}return y(d,0)+y(l,d)+y(c,1)}function qd(e,t){if(e>=0){for(;e>127;)t.push(e&127|128),e=e>>>7;t.push(e)}else{for(let r=0;r<9;r++)t.push(e&127|128),e=e>>7;t.push(1)}}function s3(){let e=this.buf[this.pos++],t=e&127;if((e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<7,(e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<14,(e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<21,(e&128)==0)return this.assertBounds(),t;e=this.buf[this.pos++],t|=(e&15)<<28;for(let r=5;(e&128)!==0&&r<10;r++)e=this.buf[this.pos++];if((e&128)!=0)throw new Error("invalid varint");return this.assertBounds(),t>>>0}var sc,lc=O(()=>{"use strict";p();m();sc=65536*65536});function _R(){let e=new DataView(new ArrayBuffer(8));je=globalThis.BigInt!==void 0&&typeof e.getBigInt64=="function"&&typeof e.getBigUint64=="function"&&typeof e.setBigInt64=="function"&&typeof e.setBigUint64=="function"?{MIN:BigInt("-9223372036854775808"),MAX:BigInt("9223372036854775807"),UMIN:BigInt("0"),UMAX:BigInt("18446744073709551615"),C:BigInt,V:e}:void 0}function a3(e){if(!e)throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")}var je,c3,dc,uc,fc,ut,tt,co=O(()=>{"use strict";p();m();lc();_R();c3=/^-?[0-9]+$/,dc=4294967296,uc=2147483648,fc=class{constructor(t,r){this.lo=t|0,this.hi=r|0}isZero(){return this.lo==0&&this.hi==0}toNumber(){let t=this.hi*dc+(this.lo>>>0);if(!Number.isSafeInteger(t))throw new Error("cannot convert to safe number");return t}},ut=class e extends fc{static from(t){if(je)switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=="")throw new Error("string is no integer");t=je.C(t);case"number":if(t===0)return this.ZERO;t=je.C(t);case"bigint":if(!t)return this.ZERO;if(t<je.UMIN)throw new Error("signed value for ulong");if(t>je.UMAX)throw new Error("ulong too large");return je.V.setBigUint64(0,t,!0),new e(je.V.getInt32(0,!0),je.V.getInt32(4,!0))}else switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=t.trim(),!c3.test(t))throw new Error("string is no integer");let[r,i,s]=$d(t);if(r)throw new Error("signed value for ulong");return new e(i,s);case"number":if(t==0)return this.ZERO;if(!Number.isSafeInteger(t))throw new Error("number is no integer");if(t<0)throw new Error("signed value for ulong");return new e(t,t/dc)}throw new Error("unknown value "+typeof t)}toString(){return je?this.toBigInt().toString():cc(this.lo,this.hi)}toBigInt(){return a3(je),je.V.setInt32(0,this.lo,!0),je.V.setInt32(4,this.hi,!0),je.V.getBigUint64(0,!0)}};ut.ZERO=new ut(0,0);tt=class e extends fc{static from(t){if(je)switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=="")throw new Error("string is no integer");t=je.C(t);case"number":if(t===0)return this.ZERO;t=je.C(t);case"bigint":if(!t)return this.ZERO;if(t<je.MIN)throw new Error("signed long too small");if(t>je.MAX)throw new Error("signed long too large");return je.V.setBigInt64(0,t,!0),new e(je.V.getInt32(0,!0),je.V.getInt32(4,!0))}else switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=t.trim(),!c3.test(t))throw new Error("string is no integer");let[r,i,s]=$d(t);if(r){if(s>uc||s==uc&&i!=0)throw new Error("signed long too small")}else if(s>=uc)throw new Error("signed long too large");let c=new e(i,s);return r?c.negate():c;case"number":if(t==0)return this.ZERO;if(!Number.isSafeInteger(t))throw new Error("number is no integer");return t>0?new e(t,t/dc):new e(-t,-t/dc).negate()}throw new Error("unknown value "+typeof t)}isNegative(){return(this.hi&uc)!==0}negate(){let t=~this.hi,r=this.lo;return r?r=~r+1:t+=1,new e(r,t)}toString(){if(je)return this.toBigInt().toString();if(this.isNegative()){let t=this.negate();return"-"+cc(t.lo,t.hi)}return cc(this.lo,this.hi)}toBigInt(){return a3(je),je.V.setInt32(0,this.lo,!0),je.V.setInt32(4,this.hi,!0),je.V.getBigInt64(0,!0)}};tt.ZERO=new tt(0,0)});function u3(e){return e?Object.assign(Object.assign({},l3),e):l3}var l3,Gd,d3=O(()=>{"use strict";p();m();es();co();lc();l3={readUnknownField:!0,readerFactory:e=>new Gd(e)};Gd=class{constructor(t,r){this.varint64=i3,this.uint32=s3,this.buf=t,this.len=t.length,this.pos=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.textDecoder=r??new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})}tag(){let t=this.uint32(),r=t>>>3,i=t&7;if(r<=0||i<0||i>5)throw new Error("illegal tag: field no "+r+" wire type "+i);return[r,i]}skip(t){let r=this.pos;switch(t){case ue.Varint:for(;this.buf[this.pos++]&128;);break;case ue.Bit64:this.pos+=4;case ue.Bit32:this.pos+=4;break;case ue.LengthDelimited:let i=this.uint32();this.pos+=i;break;case ue.StartGroup:let s;for(;(s=this.tag()[1])!==ue.EndGroup;)this.skip(s);break;default:throw new Error("cant skip wire type "+t)}return this.assertBounds(),this.buf.subarray(r,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let t=this.uint32();return t>>>1^-(t&1)}int64(){return new tt(...this.varint64())}uint64(){return new ut(...this.varint64())}sint64(){let[t,r]=this.varint64(),i=-(t&1);return t=(t>>>1|(r&1)<<31)^i,r=r>>>1^i,new tt(t,r)}bool(){let[t,r]=this.varint64();return t!==0||r!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return new ut(this.sfixed32(),this.sfixed32())}sfixed64(){return new tt(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let t=this.uint32(),r=this.pos;return this.pos+=t,this.assertBounds(),this.buf.subarray(r,r+t)}string(){return this.textDecoder.decode(this.bytes())}}});function Oe(e,t){if(!e)throw new Error(t)}function Br(e){if(typeof e!="number")throw new Error("invalid int 32: "+typeof e);if(!Number.isInteger(e)||e>OR||e<NR)throw new Error("invalid int 32: "+e)}function lo(e){if(typeof e!="number")throw new Error("invalid uint 32: "+typeof e);if(!Number.isInteger(e)||e>PR||e<0)throw new Error("invalid uint 32: "+e)}function Wo(e){if(typeof e!="number")throw new Error("invalid float 32: "+typeof e);if(Number.isFinite(e)&&(e>AR||e<LR))throw new Error("invalid float 32: "+e)}var AR,LR,PR,OR,NR,ts=O(()=>{"use strict";p();m();AR=34028234663852886e22,LR=-34028234663852886e22,PR=4294967295,OR=2147483647,NR=-2147483648});function p3(e){return e?Object.assign(Object.assign({},f3),e):f3}var f3,Wd,m3=O(()=>{"use strict";p();m();co();lc();ts();f3={writeUnknownFields:!0,writerFactory:()=>new Wd};Wd=class{constructor(t){this.stack=[],this.textEncoder=t??new TextEncoder,this.chunks=[],this.buf=[]}finish(){this.chunks.push(new Uint8Array(this.buf));let t=0;for(let s=0;s<this.chunks.length;s++)t+=this.chunks[s].length;let r=new Uint8Array(t),i=0;for(let s=0;s<this.chunks.length;s++)r.set(this.chunks[s],i),i+=this.chunks[s].length;return this.chunks=[],r}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let t=this.finish(),r=this.stack.pop();if(!r)throw new Error("invalid state, fork stack empty");return this.chunks=r.chunks,this.buf=r.buf,this.uint32(t.byteLength),this.raw(t)}tag(t,r){return this.uint32((t<<3|r)>>>0)}raw(t){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(t),this}uint32(t){for(lo(t);t>127;)this.buf.push(t&127|128),t=t>>>7;return this.buf.push(t),this}int32(t){return Br(t),qd(t,this.buf),this}bool(t){return this.buf.push(t?1:0),this}bytes(t){return this.uint32(t.byteLength),this.raw(t)}string(t){let r=this.textEncoder.encode(t);return this.uint32(r.byteLength),this.raw(r)}float(t){Wo(t);let r=new Uint8Array(4);return new DataView(r.buffer).setFloat32(0,t,!0),this.raw(r)}double(t){let r=new Uint8Array(8);return new DataView(r.buffer).setFloat64(0,t,!0),this.raw(r)}fixed32(t){lo(t);let r=new Uint8Array(4);return new DataView(r.buffer).setUint32(0,t,!0),this.raw(r)}sfixed32(t){Br(t);let r=new Uint8Array(4);return new DataView(r.buffer).setInt32(0,t,!0),this.raw(r)}sint32(t){return Br(t),t=(t<<1^t>>31)>>>0,qd(t,this.buf),this}sfixed64(t){let r=new Uint8Array(8),i=new DataView(r.buffer),s=tt.from(t);return i.setInt32(0,s.lo,!0),i.setInt32(4,s.hi,!0),this.raw(r)}fixed64(t){let r=new Uint8Array(8),i=new DataView(r.buffer),s=ut.from(t);return i.setInt32(0,s.lo,!0),i.setInt32(4,s.hi,!0),this.raw(r)}int64(t){let r=tt.from(t);return ac(r.lo,r.hi,this.buf),this}sint64(t){let r=tt.from(t),i=r.hi>>31,s=r.lo<<1^i,c=(r.hi<<1|r.lo>>>31)^i;return ac(s,c,this.buf),this}uint64(t){let r=ut.from(t);return ac(r.lo,r.hi,this.buf),this}}});function y3(e){return e?Object.assign(Object.assign({},h3),e):h3}function b3(e){return e?Object.assign(Object.assign({},g3),e):g3}var g3,h3,x3=O(()=>{"use strict";p();m();g3={emitDefaultValues:!1,enumAsInteger:!1,useProtoFieldName:!1,prettySpaces:0},h3={ignoreUnknownFields:!1}});var pc,zd=O(()=>{"use strict";p();m();pc=Symbol.for("protobuf-ts/message-type")});function jd(e){let t=!1,r=[];for(let i=0;i<e.length;i++){let s=e.charAt(i);s=="_"?t=!0:/\d/.test(s)?(r.push(s),t=!0):t?(r.push(s.toUpperCase()),t=!1):i==0?r.push(s.toLowerCase()):r.push(s)}return r.join("")}var S3=O(()=>{"use strict";p();m()});function C3(e){var t,r,i,s;return e.localName=(t=e.localName)!==null&&t!==void 0?t:jd(e.name),e.jsonName=(r=e.jsonName)!==null&&r!==void 0?r:jd(e.name),e.repeat=(i=e.repeat)!==null&&i!==void 0?i:ns.NO,e.opt=(s=e.opt)!==null&&s!==void 0?s:e.repeat||e.oneof?!1:e.kind=="message",e}var G,Pt,ns,qn=O(()=>{"use strict";p();m();S3();(function(e){e[e.DOUBLE=1]="DOUBLE",e[e.FLOAT=2]="FLOAT",e[e.INT64=3]="INT64",e[e.UINT64=4]="UINT64",e[e.INT32=5]="INT32",e[e.FIXED64=6]="FIXED64",e[e.FIXED32=7]="FIXED32",e[e.BOOL=8]="BOOL",e[e.STRING=9]="STRING",e[e.BYTES=12]="BYTES",e[e.UINT32=13]="UINT32",e[e.SFIXED32=15]="SFIXED32",e[e.SFIXED64=16]="SFIXED64",e[e.SINT32=17]="SINT32",e[e.SINT64=18]="SINT64"})(G||(G={}));(function(e){e[e.BIGINT=0]="BIGINT",e[e.STRING=1]="STRING",e[e.NUMBER=2]="NUMBER"})(Pt||(Pt={}));(function(e){e[e.NO=0]="NO",e[e.PACKED=1]="PACKED",e[e.UNPACKED=2]="UNPACKED"})(ns||(ns={}))});function v3(e){if(typeof e!="object"||e===null||!e.hasOwnProperty("oneofKind"))return!1;switch(typeof e.oneofKind){case"string":return e[e.oneofKind]===void 0?!1:Object.keys(e).length==2;case"undefined":return Object.keys(e).length==1;default:return!1}}var w3=O(()=>{"use strict";p();m()});var mc,T3=O(()=>{"use strict";p();m();qn();w3();mc=class{constructor(t){var r;this.fields=(r=t.fields)!==null&&r!==void 0?r:[]}prepare(){if(this.data)return;let t=[],r=[],i=[];for(let s of this.fields)if(s.oneof)i.includes(s.oneof)||(i.push(s.oneof),t.push(s.oneof),r.push(s.oneof));else switch(r.push(s.localName),s.kind){case"scalar":case"enum":(!s.opt||s.repeat)&&t.push(s.localName);break;case"message":s.repeat&&t.push(s.localName);break;case"map":t.push(s.localName);break}this.data={req:t,known:r,oneofs:Object.values(i)}}is(t,r,i=!1){if(r<0)return!0;if(t==null||typeof t!="object")return!1;this.prepare();let s=Object.keys(t),c=this.data;if(s.length<c.req.length||c.req.some(l=>!s.includes(l))||!i&&s.some(l=>!c.known.includes(l)))return!1;if(r<1)return!0;for(let l of c.oneofs){let d=t[l];if(!v3(d))return!1;if(d.oneofKind===void 0)continue;let g=this.fields.find(y=>y.localName===d.oneofKind);if(!g||!this.field(d[d.oneofKind],g,i,r))return!1}for(let l of this.fields)if(l.oneof===void 0&&!this.field(t[l.localName],l,i,r))return!1;return!0}field(t,r,i,s){let c=r.repeat;switch(r.kind){case"scalar":return t===void 0?r.opt:c?this.scalars(t,r.T,s,r.L):this.scalar(t,r.T,r.L);case"enum":return t===void 0?r.opt:c?this.scalars(t,G.INT32,s):this.scalar(t,G.INT32);case"message":return t===void 0?!0:c?this.messages(t,r.T(),i,s):this.message(t,r.T(),i,s);case"map":if(typeof t!="object"||t===null)return!1;if(s<2)return!0;if(!this.mapKeys(t,r.K,s))return!1;switch(r.V.kind){case"scalar":return this.scalars(Object.values(t),r.V.T,s,r.V.L);case"enum":return this.scalars(Object.values(t),G.INT32,s);case"message":return this.messages(Object.values(t),r.V.T(),i,s)}break}return!0}message(t,r,i,s){return i?r.isAssignable(t,s):r.is(t,s)}messages(t,r,i,s){if(!Array.isArray(t))return!1;if(s<2)return!0;if(i){for(let c=0;c<t.length&&c<s;c++)if(!r.isAssignable(t[c],s-1))return!1}else for(let c=0;c<t.length&&c<s;c++)if(!r.is(t[c],s-1))return!1;return!0}scalar(t,r,i){let s=typeof t;switch(r){case G.UINT64:case G.FIXED64:case G.INT64:case G.SFIXED64:case G.SINT64:switch(i){case Pt.BIGINT:return s=="bigint";case Pt.NUMBER:return s=="number"&&!isNaN(t);default:return s=="string"}case G.BOOL:return s=="boolean";case G.STRING:return s=="string";case G.BYTES:return t instanceof Uint8Array;case G.DOUBLE:case G.FLOAT:return s=="number"&&!isNaN(t);default:return s=="number"&&Number.isInteger(t)}}scalars(t,r,i,s){if(!Array.isArray(t))return!1;if(i<2)return!0;if(Array.isArray(t)){for(let c=0;c<t.length&&c<i;c++)if(!this.scalar(t[c],r,s))return!1}return!0}mapKeys(t,r,i){let s=Object.keys(t);switch(r){case G.INT32:case G.FIXED32:case G.SFIXED32:case G.SINT32:case G.UINT32:return this.scalars(s.slice(0,i).map(c=>parseInt(c)),r,i);case G.BOOL:return this.scalars(s.slice(0,i).map(c=>c=="true"?!0:c=="false"?!1:c),r,i);default:return this.scalars(s,r,i,Pt.STRING)}}}});function Qt(e,t){switch(t){case Pt.BIGINT:return e.toBigInt();case Pt.NUMBER:return e.toNumber();default:return e.toString()}}var gc=O(()=>{"use strict";p();m();qn()});var hc,E3=O(()=>{"use strict";p();m();Ud();Vd();qn();co();ts();gc();hc=class{constructor(t){this.info=t}prepare(){var t;if(this.fMap===void 0){this.fMap={};let r=(t=this.info.fields)!==null&&t!==void 0?t:[];for(let i of r)this.fMap[i.name]=i,this.fMap[i.jsonName]=i,this.fMap[i.localName]=i}}assert(t,r,i){if(!t){let s=oc(i);throw(s=="number"||s=="boolean")&&(s=i.toString()),new Error(`Cannot parse JSON ${s} for ${this.info.typeName}#${r}`)}}read(t,r,i){this.prepare();let s=[];for(let[c,l]of Object.entries(t)){let d=this.fMap[c];if(!d){if(!i.ignoreUnknownFields)throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${c}`);continue}let g=d.localName,y;if(d.oneof){if(l===null&&(d.kind!=="enum"||d.T()[0]!=="google.protobuf.NullValue"))continue;if(s.includes(d.oneof))throw new Error(`Multiple members of the oneof group "${d.oneof}" of ${this.info.typeName} are present in JSON.`);s.push(d.oneof),y=r[d.oneof]={oneofKind:g}}else y=r;if(d.kind=="map"){if(l===null)continue;this.assert(n3(l),d.name,l);let b=y[g];for(let[E,R]of Object.entries(l)){this.assert(R!==null,d.name+" map value",null);let k;switch(d.V.kind){case"message":k=d.V.T().internalJsonRead(R,i);break;case"enum":if(k=this.enum(d.V.T(),R,d.name,i.ignoreUnknownFields),k===!1)continue;break;case"scalar":k=this.scalar(R,d.V.T,d.V.L,d.name);break}this.assert(k!==void 0,d.name+" map value",R);let B=E;d.K==G.BOOL&&(B=B=="true"?!0:B=="false"?!1:B),B=this.scalar(B,d.K,Pt.STRING,d.name).toString(),b[B]=k}}else if(d.repeat){if(l===null)continue;this.assert(Array.isArray(l),d.name,l);let b=y[g];for(let E of l){this.assert(E!==null,d.name,null);let R;switch(d.kind){case"message":R=d.T().internalJsonRead(E,i);break;case"enum":if(R=this.enum(d.T(),E,d.name,i.ignoreUnknownFields),R===!1)continue;break;case"scalar":R=this.scalar(E,d.T,d.L,d.name);break}this.assert(R!==void 0,d.name,l),b.push(R)}}else switch(d.kind){case"message":if(l===null&&d.T().typeName!="google.protobuf.Value"){this.assert(d.oneof===void 0,d.name+" (oneof member)",null);continue}y[g]=d.T().internalJsonRead(l,i,y[g]);break;case"enum":if(l===null)continue;let b=this.enum(d.T(),l,d.name,i.ignoreUnknownFields);if(b===!1)continue;y[g]=b;break;case"scalar":if(l===null)continue;y[g]=this.scalar(l,d.T,d.L,d.name);break}}}enum(t,r,i,s){if(t[0]=="google.protobuf.NullValue"&&Oe(r===null||r==="NULL_VALUE",`Unable to parse field ${this.info.typeName}#${i}, enum ${t[0]} only accepts null.`),r===null)return 0;switch(typeof r){case"number":return Oe(Number.isInteger(r),`Unable to parse field ${this.info.typeName}#${i}, enum can only be integral number, got ${r}.`),r;case"string":let c=r;t[2]&&r.substring(0,t[2].length)===t[2]&&(c=r.substring(t[2].length));let l=t[1][c];return typeof l>"u"&&s?!1:(Oe(typeof l=="number",`Unable to parse field ${this.info.typeName}#${i}, enum ${t[0]} has no value for "${r}".`),l)}Oe(!1,`Unable to parse field ${this.info.typeName}#${i}, cannot parse enum value from ${typeof r}".`)}scalar(t,r,i,s){let c;try{switch(r){case G.DOUBLE:case G.FLOAT:if(t===null)return 0;if(t==="NaN")return Number.NaN;if(t==="Infinity")return Number.POSITIVE_INFINITY;if(t==="-Infinity")return Number.NEGATIVE_INFINITY;if(t===""){c="empty string";break}if(typeof t=="string"&&t.trim().length!==t.length){c="extra whitespace";break}if(typeof t!="string"&&typeof t!="number")break;let l=Number(t);if(Number.isNaN(l)){c="not a number";break}if(!Number.isFinite(l)){c="too large or small";break}return r==G.FLOAT&&Wo(l),l;case G.INT32:case G.FIXED32:case G.SFIXED32:case G.SINT32:case G.UINT32:if(t===null)return 0;let d;if(typeof t=="number"?d=t:t===""?c="empty string":typeof t=="string"&&(t.trim().length!==t.length?c="extra whitespace":d=Number(t)),d===void 0)break;return r==G.UINT32?lo(d):Br(d),d;case G.INT64:case G.SFIXED64:case G.SINT64:if(t===null)return Qt(tt.ZERO,i);if(typeof t!="number"&&typeof t!="string")break;return Qt(tt.from(t),i);case G.FIXED64:case G.UINT64:if(t===null)return Qt(ut.ZERO,i);if(typeof t!="number"&&typeof t!="string")break;return Qt(ut.from(t),i);case G.BOOL:if(t===null)return!1;if(typeof t!="boolean")break;return t;case G.STRING:if(t===null)return"";if(typeof t!="string"){c="extra whitespace";break}try{encodeURIComponent(t)}catch(g){g="invalid UTF8";break}return t;case G.BYTES:if(t===null||t==="")return new Uint8Array(0);if(typeof t!="string")break;return r3(t)}}catch(l){c=l.message}this.assert(!1,s+(c?" - "+c:""),t)}}});var yc,k3=O(()=>{"use strict";p();m();Vd();co();qn();ts();yc=class{constructor(t){var r;this.fields=(r=t.fields)!==null&&r!==void 0?r:[]}write(t,r){let i={},s=t;for(let c of this.fields){if(!c.oneof){let y=this.field(c,s[c.localName],r);y!==void 0&&(i[r.useProtoFieldName?c.name:c.jsonName]=y);continue}let l=s[c.oneof];if(l.oneofKind!==c.localName)continue;let d=c.kind=="scalar"||c.kind=="enum"?Object.assign(Object.assign({},r),{emitDefaultValues:!0}):r,g=this.field(c,l[c.localName],d);Oe(g!==void 0),i[r.useProtoFieldName?c.name:c.jsonName]=g}return i}field(t,r,i){let s;if(t.kind=="map"){Oe(typeof r=="object"&&r!==null);let c={};switch(t.V.kind){case"scalar":for(let[g,y]of Object.entries(r)){let b=this.scalar(t.V.T,y,t.name,!1,!0);Oe(b!==void 0),c[g.toString()]=b}break;case"message":let l=t.V.T();for(let[g,y]of Object.entries(r)){let b=this.message(l,y,t.name,i);Oe(b!==void 0),c[g.toString()]=b}break;case"enum":let d=t.V.T();for(let[g,y]of Object.entries(r)){Oe(y===void 0||typeof y=="number");let b=this.enum(d,y,t.name,!1,!0,i.enumAsInteger);Oe(b!==void 0),c[g.toString()]=b}break}(i.emitDefaultValues||Object.keys(c).length>0)&&(s=c)}else if(t.repeat){Oe(Array.isArray(r));let c=[];switch(t.kind){case"scalar":for(let g=0;g<r.length;g++){let y=this.scalar(t.T,r[g],t.name,t.opt,!0);Oe(y!==void 0),c.push(y)}break;case"enum":let l=t.T();for(let g=0;g<r.length;g++){Oe(r[g]===void 0||typeof r[g]=="number");let y=this.enum(l,r[g],t.name,t.opt,!0,i.enumAsInteger);Oe(y!==void 0),c.push(y)}break;case"message":let d=t.T();for(let g=0;g<r.length;g++){let y=this.message(d,r[g],t.name,i);Oe(y!==void 0),c.push(y)}break}(i.emitDefaultValues||c.length>0||i.emitDefaultValues)&&(s=c)}else switch(t.kind){case"scalar":s=this.scalar(t.T,r,t.name,t.opt,i.emitDefaultValues);break;case"enum":s=this.enum(t.T(),r,t.name,t.opt,i.emitDefaultValues,i.enumAsInteger);break;case"message":s=this.message(t.T(),r,t.name,i);break}return s}enum(t,r,i,s,c,l){if(t[0]=="google.protobuf.NullValue")return!c&&!s?void 0:null;if(r===void 0){Oe(s);return}if(!(r===0&&!c&&!s))return Oe(typeof r=="number"),Oe(Number.isInteger(r)),l||!t[1].hasOwnProperty(r)?r:t[2]?t[2]+t[1][r]:t[1][r]}message(t,r,i,s){return r===void 0?s.emitDefaultValues?null:void 0:t.internalJsonWrite(r,s)}scalar(t,r,i,s,c){if(r===void 0){Oe(s);return}let l=c||s;switch(t){case G.INT32:case G.SFIXED32:case G.SINT32:return r===0?l?0:void 0:(Br(r),r);case G.FIXED32:case G.UINT32:return r===0?l?0:void 0:(lo(r),r);case G.FLOAT:Wo(r);case G.DOUBLE:return r===0?l?0:void 0:(Oe(typeof r=="number"),Number.isNaN(r)?"NaN":r===Number.POSITIVE_INFINITY?"Infinity":r===Number.NEGATIVE_INFINITY?"-Infinity":r);case G.STRING:return r===""?l?"":void 0:(Oe(typeof r=="string"),r);case G.BOOL:return r===!1?l?!1:void 0:(Oe(typeof r=="boolean"),r);case G.UINT64:case G.FIXED64:Oe(typeof r=="number"||typeof r=="string"||typeof r=="bigint");let d=ut.from(r);return d.isZero()&&!l?void 0:d.toString();case G.INT64:case G.SFIXED64:case G.SINT64:Oe(typeof r=="number"||typeof r=="string"||typeof r=="bigint");let g=tt.from(r);return g.isZero()&&!l?void 0:g.toString();case G.BYTES:return Oe(r instanceof Uint8Array),r.byteLength?o3(r):l?"":void 0}}}});function rs(e,t=Pt.STRING){switch(e){case G.BOOL:return!1;case G.UINT64:case G.FIXED64:return Qt(ut.ZERO,t);case G.INT64:case G.SFIXED64:case G.SINT64:return Qt(tt.ZERO,t);case G.DOUBLE:case G.FLOAT:return 0;case G.BYTES:return new Uint8Array(0);case G.STRING:return"";default:return 0}}var Qd=O(()=>{"use strict";p();m();qn();gc();co()});var bc,I3=O(()=>{"use strict";p();m();es();qn();gc();Qd();bc=class{constructor(t){this.info=t}prepare(){var t;if(!this.fieldNoToField){let r=(t=this.info.fields)!==null&&t!==void 0?t:[];this.fieldNoToField=new Map(r.map(i=>[i.no,i]))}}read(t,r,i,s){this.prepare();let c=s===void 0?t.len:t.pos+s;for(;t.pos<c;){let[l,d]=t.tag(),g=this.fieldNoToField.get(l);if(!g){let R=i.readUnknownField;if(R=="throw")throw new Error(`Unknown field ${l} (wire type ${d}) for ${this.info.typeName}`);let k=t.skip(d);R!==!1&&(R===!0?gt.onRead:R)(this.info.typeName,r,l,d,k);continue}let y=r,b=g.repeat,E=g.localName;switch(g.oneof&&(y=y[g.oneof],y.oneofKind!==E&&(y=r[g.oneof]={oneofKind:E})),g.kind){case"scalar":case"enum":let R=g.kind=="enum"?G.INT32:g.T,k=g.kind=="scalar"?g.L:void 0;if(b){let F=y[E];if(d==ue.LengthDelimited&&R!=G.STRING&&R!=G.BYTES){let C=t.uint32()+t.pos;for(;t.pos<C;)F.push(this.scalar(t,R,k))}else F.push(this.scalar(t,R,k))}else y[E]=this.scalar(t,R,k);break;case"message":if(b){let F=y[E],C=g.T().internalBinaryRead(t,t.uint32(),i);F.push(C)}else y[E]=g.T().internalBinaryRead(t,t.uint32(),i,y[E]);break;case"map":let[B,N]=this.mapEntry(g,t,i);y[E][B]=N;break}}}mapEntry(t,r,i){let s=r.uint32(),c=r.pos+s,l,d;for(;r.pos<c;){let[g,y]=r.tag();switch(g){case 1:t.K==G.BOOL?l=r.bool().toString():l=this.scalar(r,t.K,Pt.STRING);break;case 2:switch(t.V.kind){case"scalar":d=this.scalar(r,t.V.T,t.V.L);break;case"enum":d=r.int32();break;case"message":d=t.V.T().internalBinaryRead(r,r.uint32(),i);break}break;default:throw new Error(`Unknown field ${g} (wire type ${y}) in map entry for ${this.info.typeName}#${t.name}`)}}if(l===void 0){let g=rs(t.K);l=t.K==G.BOOL?g.toString():g}if(d===void 0)switch(t.V.kind){case"scalar":d=rs(t.V.T,t.V.L);break;case"enum":d=0;break;case"message":d=t.V.T().create();break}return[l,d]}scalar(t,r,i){switch(r){case G.INT32:return t.int32();case G.STRING:return t.string();case G.BOOL:return t.bool();case G.DOUBLE:return t.double();case G.FLOAT:return t.float();case G.INT64:return Qt(t.int64(),i);case G.UINT64:return Qt(t.uint64(),i);case G.FIXED64:return Qt(t.fixed64(),i);case G.FIXED32:return t.fixed32();case G.BYTES:return t.bytes();case G.UINT32:return t.uint32();case G.SFIXED32:return t.sfixed32();case G.SFIXED64:return Qt(t.sfixed64(),i);case G.SINT32:return t.sint32();case G.SINT64:return Qt(t.sint64(),i)}}}});var xc,R3=O(()=>{"use strict";p();m();es();qn();ts();co();xc=class{constructor(t){this.info=t}prepare(){if(!this.fields){let t=this.info.fields?this.info.fields.concat():[];this.fields=t.sort((r,i)=>r.no-i.no)}}write(t,r,i){this.prepare();for(let c of this.fields){let l,d,g=c.repeat,y=c.localName;if(c.oneof){let b=t[c.oneof];if(b.oneofKind!==y)continue;l=b[y],d=!0}else l=t[y],d=!1;switch(c.kind){case"scalar":case"enum":let b=c.kind=="enum"?G.INT32:c.T;if(g)if(Oe(Array.isArray(l)),g==ns.PACKED)this.packed(r,b,c.no,l);else for(let E of l)this.scalar(r,b,c.no,E,!0);else l===void 0?Oe(c.opt):this.scalar(r,b,c.no,l,d||c.opt);break;case"message":if(g){Oe(Array.isArray(l));for(let E of l)this.message(r,i,c.T(),c.no,E)}else this.message(r,i,c.T(),c.no,l);break;case"map":Oe(typeof l=="object"&&l!==null);for(let[E,R]of Object.entries(l))this.mapEntry(r,i,c,E,R);break}}let s=i.writeUnknownFields;s!==!1&&(s===!0?gt.onWrite:s)(this.info.typeName,t,r)}mapEntry(t,r,i,s,c){t.tag(i.no,ue.LengthDelimited),t.fork();let l=s;switch(i.K){case G.INT32:case G.FIXED32:case G.UINT32:case G.SFIXED32:case G.SINT32:l=Number.parseInt(s);break;case G.BOOL:Oe(s=="true"||s=="false"),l=s=="true";break}switch(this.scalar(t,i.K,1,l,!0),i.V.kind){case"scalar":this.scalar(t,i.V.T,2,c,!0);break;case"enum":this.scalar(t,G.INT32,2,c,!0);break;case"message":this.message(t,r,i.V.T(),2,c);break}t.join()}message(t,r,i,s,c){c!==void 0&&(i.internalBinaryWrite(c,t.tag(s,ue.LengthDelimited).fork(),r),t.join())}scalar(t,r,i,s,c){let[l,d,g]=this.scalarInfo(r,s);(!g||c)&&(t.tag(i,l),t[d](s))}packed(t,r,i,s){if(!s.length)return;Oe(r!==G.BYTES&&r!==G.STRING),t.tag(i,ue.LengthDelimited),t.fork();let[,c]=this.scalarInfo(r);for(let l=0;l<s.length;l++)t[c](s[l]);t.join()}scalarInfo(t,r){let i=ue.Varint,s,c=r===void 0,l=r===0;switch(t){case G.INT32:s="int32";break;case G.STRING:l=c||!r.length,i=ue.LengthDelimited,s="string";break;case G.BOOL:l=r===!1,s="bool";break;case G.UINT32:s="uint32";break;case G.DOUBLE:i=ue.Bit64,s="double";break;case G.FLOAT:i=ue.Bit32,s="float";break;case G.INT64:l=c||tt.from(r).isZero(),s="int64";break;case G.UINT64:l=c||ut.from(r).isZero(),s="uint64";break;case G.FIXED64:l=c||ut.from(r).isZero(),i=ue.Bit64,s="fixed64";break;case G.BYTES:l=c||!r.byteLength,i=ue.LengthDelimited,s="bytes";break;case G.FIXED32:i=ue.Bit32,s="fixed32";break;case G.SFIXED32:i=ue.Bit32,s="sfixed32";break;case G.SFIXED64:l=c||tt.from(r).isZero(),i=ue.Bit64,s="sfixed64";break;case G.SINT32:s="sint32";break;case G.SINT64:l=c||tt.from(r).isZero(),s="sint64";break}return[i,s,c||l]}}});function M3(e){let t=e.messagePrototype?Object.create(e.messagePrototype):Object.defineProperty({},pc,{value:e});for(let r of e.fields){let i=r.localName;if(!r.opt)if(r.oneof)t[r.oneof]={oneofKind:void 0};else if(r.repeat)t[i]=[];else switch(r.kind){case"scalar":t[i]=rs(r.T,r.L);break;case"enum":t[i]=0;break;case"map":t[i]={};break}}return t}var _3=O(()=>{"use strict";p();m();Qd();zd()});function bn(e,t,r){let i,s=r,c;for(let l of e.fields){let d=l.localName;if(l.oneof){let g=s[l.oneof];if(g?.oneofKind==null)continue;if(i=g[d],c=t[l.oneof],c.oneofKind=g.oneofKind,i==null){delete c[d];continue}}else if(i=s[d],c=t,i==null)continue;switch(l.repeat&&(c[d].length=i.length),l.kind){case"scalar":case"enum":if(l.repeat)for(let y=0;y<i.length;y++)c[d][y]=i[y];else c[d]=i;break;case"message":let g=l.T();if(l.repeat)for(let y=0;y<i.length;y++)c[d][y]=g.create(i[y]);else c[d]===void 0?c[d]=g.create(i):g.mergePartial(c[d],i);break;case"map":switch(l.V.kind){case"scalar":case"enum":Object.assign(c[d],i);break;case"message":let y=l.V.T();for(let b of Object.keys(i))c[d][b]=y.create(i[b]);break}break}}}var Yd=O(()=>{"use strict";p();m()});function P3(e,t,r){if(t===r)return!0;if(!t||!r)return!1;for(let i of e.fields){let s=i.localName,c=i.oneof?t[i.oneof][s]:t[s],l=i.oneof?r[i.oneof][s]:r[s];switch(i.kind){case"enum":case"scalar":let d=i.kind=="enum"?G.INT32:i.T;if(!(i.repeat?A3(d,c,l):O3(d,c,l)))return!1;break;case"map":if(!(i.V.kind=="message"?L3(i.V.T(),Sc(c),Sc(l)):A3(i.V.kind=="enum"?G.INT32:i.V.T,Sc(c),Sc(l))))return!1;break;case"message":let g=i.T();if(!(i.repeat?L3(g,c,l):g.equals(c,l)))return!1;break}}return!0}function O3(e,t,r){if(t===r)return!0;if(e!==G.BYTES)return!1;let i=t,s=r;if(i.length!==s.length)return!1;for(let c=0;c<i.length;c++)if(i[c]!=s[c])return!1;return!0}function A3(e,t,r){if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(!O3(e,t[i],r[i]))return!1;return!0}function L3(e,t,r){if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(!e.equals(t[i],r[i]))return!1;return!0}var Sc,N3=O(()=>{"use strict";p();m();qn();Sc=Object.values});var D3,DR,Gn,B3=O(()=>{"use strict";p();m();zd();qn();T3();E3();k3();I3();R3();_3();Yd();Ud();x3();N3();m3();d3();D3=Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})),DR=D3[pc]={},Gn=class{constructor(t,r,i){this.defaultCheckDepth=16,this.typeName=t,this.fields=r.map(C3),this.options=i??{},DR.value=this,this.messagePrototype=Object.create(null,D3),this.refTypeCheck=new mc(this),this.refJsonReader=new hc(this),this.refJsonWriter=new yc(this),this.refBinReader=new bc(this),this.refBinWriter=new xc(this)}create(t){let r=M3(this);return t!==void 0&&bn(this,r,t),r}clone(t){let r=this.create();return bn(this,r,t),r}equals(t,r){return P3(this,t,r)}is(t,r=this.defaultCheckDepth){return this.refTypeCheck.is(t,r,!1)}isAssignable(t,r=this.defaultCheckDepth){return this.refTypeCheck.is(t,r,!0)}mergePartial(t,r){bn(this,t,r)}fromBinary(t,r){let i=u3(r);return this.internalBinaryRead(i.readerFactory(t),t.byteLength,i)}fromJson(t,r){return this.internalJsonRead(t,y3(r))}fromJsonString(t,r){let i=JSON.parse(t);return this.fromJson(i,r)}toJson(t,r){return this.internalJsonWrite(t,b3(r))}toJsonString(t,r){var i;let s=this.toJson(t,r);return JSON.stringify(s,null,(i=r?.prettySpaces)!==null&&i!==void 0?i:0)}toBinary(t,r){let i=p3(r);return this.internalBinaryWrite(t,i.writerFactory(),i).finish()}internalJsonRead(t,r,i){if(t!==null&&typeof t=="object"&&!Array.isArray(t)){let s=i??this.create();return this.refJsonReader.read(t,s,r),s}throw new Error(`Unable to parse message ${this.typeName} from JSON ${oc(t)}.`)}internalJsonWrite(t,r){return this.refJsonWriter.write(t,r)}internalBinaryWrite(t,r,i){return this.refBinWriter.write(t,r,i),r}internalBinaryRead(t,r,i,s){let c=s??this.create();return this.refBinReader.read(t,c,i,r),c}}});var ar=O(()=>{"use strict";p();m();es();B3();Yd()});var Hd,F3,Xd,Kd,Jd,Zd,U3=O(()=>{"use strict";p();m();ar();ar();ar();ar();Hd=class extends Gn{constructor(){super("Response",[{no:1,name:"audioData",kind:"scalar",T:12},{no:2,name:"audioFormat",kind:"scalar",T:9},{no:3,name:"speechMarks",kind:"message",T:()=>Kd},{no:5,name:"contextToken",kind:"scalar",T:9}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.audioData=new Uint8Array(0),r.audioFormat="",r.contextToken="",t!==void 0&&bn(this,r,t),r}internalBinaryRead(t,r,i,s){let c=s??this.create(),l=t.pos+r;for(;t.pos<l;){let[d,g]=t.tag();switch(d){case 1:c.audioData=t.bytes();break;case 2:c.audioFormat=t.string();break;case 3:c.speechMarks=Kd.internalBinaryRead(t,t.uint32(),i,c.speechMarks);break;case 5:c.contextToken=t.string();break;default:let y=i.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${g}) for ${this.typeName}`);let b=t.skip(g);y!==!1&&(y===!0?gt.onRead:y)(this.typeName,c,d,g,b)}}return c}internalBinaryWrite(t,r,i){t.audioData.length&&r.tag(1,ue.LengthDelimited).bytes(t.audioData),t.audioFormat!==""&&r.tag(2,ue.LengthDelimited).string(t.audioFormat),t.speechMarks&&Kd.internalBinaryWrite(t.speechMarks,r.tag(3,ue.LengthDelimited).fork(),i).join(),t.contextToken!==""&&r.tag(5,ue.LengthDelimited).string(t.contextToken);let s=i.writeUnknownFields;return s!==!1&&(s==!0?gt.onWrite:s)(this.typeName,t,r),r}},F3=new Hd,Xd=class extends Gn{constructor(){super("Response.NestedChunk",[{no:1,name:"type",kind:"scalar",T:9},{no:2,name:"startTime",kind:"scalar",T:1},{no:3,name:"endTime",kind:"scalar",T:1},{no:4,name:"start",kind:"scalar",T:5},{no:5,name:"end",kind:"scalar",T:5},{no:6,name:"value",kind:"scalar",T:9},{no:7,name:"chunks",kind:"message",repeat:2,T:()=>Zd}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.type="",r.startTime=0,r.endTime=0,r.start=0,r.end=0,r.value="",r.chunks=[],t!==void 0&&bn(this,r,t),r}internalBinaryRead(t,r,i,s){let c=s??this.create(),l=t.pos+r;for(;t.pos<l;){let[d,g]=t.tag();switch(d){case 1:c.type=t.string();break;case 2:c.startTime=t.double();break;case 3:c.endTime=t.double();break;case 4:c.start=t.int32();break;case 5:c.end=t.int32();break;case 6:c.value=t.string();break;case 7:c.chunks.push(Zd.internalBinaryRead(t,t.uint32(),i));break;default:let y=i.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${g}) for ${this.typeName}`);let b=t.skip(g);y!==!1&&(y===!0?gt.onRead:y)(this.typeName,c,d,g,b)}}return c}internalBinaryWrite(t,r,i){t.type!==""&&r.tag(1,ue.LengthDelimited).string(t.type),t.startTime!==0&&r.tag(2,ue.Bit64).double(t.startTime),t.endTime!==0&&r.tag(3,ue.Bit64).double(t.endTime),t.start!==0&&r.tag(4,ue.Varint).int32(t.start),t.end!==0&&r.tag(5,ue.Varint).int32(t.end),t.value!==""&&r.tag(6,ue.LengthDelimited).string(t.value);for(let c=0;c<t.chunks.length;c++)Zd.internalBinaryWrite(t.chunks[c],r.tag(7,ue.LengthDelimited).fork(),i).join();let s=i.writeUnknownFields;return s!==!1&&(s==!0?gt.onWrite:s)(this.typeName,t,r),r}},Kd=new Xd,Jd=class extends Gn{constructor(){super("Response.Chunk",[{no:1,name:"type",kind:"scalar",T:9},{no:2,name:"startTime",kind:"scalar",T:1},{no:3,name:"endTime",kind:"scalar",T:1},{no:4,name:"start",kind:"scalar",T:5},{no:5,name:"end",kind:"scalar",T:5},{no:6,name:"value",kind:"scalar",T:9}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.type="",r.startTime=0,r.endTime=0,r.start=0,r.end=0,r.value="",t!==void 0&&bn(this,r,t),r}internalBinaryRead(t,r,i,s){let c=s??this.create(),l=t.pos+r;for(;t.pos<l;){let[d,g]=t.tag();switch(d){case 1:c.type=t.string();break;case 2:c.startTime=t.double();break;case 3:c.endTime=t.double();break;case 4:c.start=t.int32();break;case 5:c.end=t.int32();break;case 6:c.value=t.string();break;default:let y=i.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${g}) for ${this.typeName}`);let b=t.skip(g);y!==!1&&(y===!0?gt.onRead:y)(this.typeName,c,d,g,b)}}return c}internalBinaryWrite(t,r,i){t.type!==""&&r.tag(1,ue.LengthDelimited).string(t.type),t.startTime!==0&&r.tag(2,ue.Bit64).double(t.startTime),t.endTime!==0&&r.tag(3,ue.Bit64).double(t.endTime),t.start!==0&&r.tag(4,ue.Varint).int32(t.start),t.end!==0&&r.tag(5,ue.Varint).int32(t.end),t.value!==""&&r.tag(6,ue.LengthDelimited).string(t.value);let s=i.writeUnknownFields;return s!==!1&&(s==!0?gt.onWrite:s)(this.typeName,t,r),r}},Zd=new Jd});var tf,V3,nf,ef,$3=O(()=>{"use strict";p();m();ar();ar();ar();ar();tf=class extends Gn{constructor(){super("StreamChunkResponse",[{no:1,name:"chunk_index",kind:"scalar",T:5},{no:2,name:"audio_data",kind:"scalar",T:12},{no:3,name:"audio_format",kind:"scalar",T:9},{no:4,name:"audio_duration_ms",kind:"scalar",T:5},{no:5,name:"speech_marks",kind:"message",repeat:2,T:()=>ef},{no:6,name:"is_final",kind:"scalar",T:8},{no:7,name:"context_token",kind:"scalar",T:9}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.chunkIndex=0,r.audioData=new Uint8Array(0),r.audioFormat="",r.audioDurationMs=0,r.speechMarks=[],r.isFinal=!1,r.contextToken="",t!==void 0&&bn(this,r,t),r}internalBinaryRead(t,r,i,s){let c=s??this.create(),l=t.pos+r;for(;t.pos<l;){let[d,g]=t.tag();switch(d){case 1:c.chunkIndex=t.int32();break;case 2:c.audioData=t.bytes();break;case 3:c.audioFormat=t.string();break;case 4:c.audioDurationMs=t.int32();break;case 5:c.speechMarks.push(ef.internalBinaryRead(t,t.uint32(),i));break;case 6:c.isFinal=t.bool();break;case 7:c.contextToken=t.string();break;default:let y=i.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${g}) for ${this.typeName}`);let b=t.skip(g);y!==!1&&(y===!0?gt.onRead:y)(this.typeName,c,d,g,b)}}return c}internalBinaryWrite(t,r,i){t.chunkIndex!==0&&r.tag(1,ue.Varint).int32(t.chunkIndex),t.audioData.length&&r.tag(2,ue.LengthDelimited).bytes(t.audioData),t.audioFormat!==""&&r.tag(3,ue.LengthDelimited).string(t.audioFormat),t.audioDurationMs!==0&&r.tag(4,ue.Varint).int32(t.audioDurationMs);for(let c=0;c<t.speechMarks.length;c++)ef.internalBinaryWrite(t.speechMarks[c],r.tag(5,ue.LengthDelimited).fork(),i).join();t.isFinal!==!1&&r.tag(6,ue.Varint).bool(t.isFinal),t.contextToken!==""&&r.tag(7,ue.LengthDelimited).string(t.contextToken);let s=i.writeUnknownFields;return s!==!1&&(s==!0?gt.onWrite:s)(this.typeName,t,r),r}},V3=new tf,nf=class extends Gn{constructor(){super("WordMark",[{no:1,name:"value",kind:"scalar",T:9},{no:2,name:"start",kind:"scalar",T:5},{no:3,name:"end",kind:"scalar",T:5},{no:4,name:"start_time",kind:"scalar",T:5},{no:5,name:"end_time",kind:"scalar",T:5}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.value="",r.start=0,r.end=0,r.startTime=0,r.endTime=0,t!==void 0&&bn(this,r,t),r}internalBinaryRead(t,r,i,s){let c=s??this.create(),l=t.pos+r;for(;t.pos<l;){let[d,g]=t.tag();switch(d){case 1:c.value=t.string();break;case 2:c.start=t.int32();break;case 3:c.end=t.int32();break;case 4:c.startTime=t.int32();break;case 5:c.endTime=t.int32();break;default:let y=i.readUnknownField;if(y==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${g}) for ${this.typeName}`);let b=t.skip(g);y!==!1&&(y===!0?gt.onRead:y)(this.typeName,c,d,g,b)}}return c}internalBinaryWrite(t,r,i){t.value!==""&&r.tag(1,ue.LengthDelimited).string(t.value),t.start!==0&&r.tag(2,ue.Varint).int32(t.start),t.end!==0&&r.tag(3,ue.Varint).int32(t.end),t.startTime!==0&&r.tag(4,ue.Varint).int32(t.startTime),t.endTime!==0&&r.tag(5,ue.Varint).int32(t.endTime);let s=i.writeUnknownFields;return s!==!1&&(s==!0?gt.onWrite:s)(this.typeName,t,r),r}},ef=new nf});var rf=O(()=>{"use strict";p();m();U3();$3()});var Cc,of=O(()=>{"use strict";p();m();Cc=async(e,t)=>w.runtime.sendMessage({target:"offscreen",data:{type:e,...t}})});var BR,os,sf=O(()=>{"use strict";p();m();of();BR=({message:e,name:t,stack:r})=>({message:e,name:t,stack:r}),os=async(...e)=>{let[t,r]=e;await Cc("observability/log-error",{args:[BR(t),r]})}});var q3,FR,G3=O(()=>{"use strict";p();m();rf();sf();q3=e=>(t,r,i,s,c)=>{let l={ssml:r,voice:i.voiceId,forcedAudioFormat:"ogg"};return s.previousContext&&(l.backwardContext={type:"context_token",data:s.previousContext}),s.nextPlayable&&(l.forwardContext={type:"text",data:s.nextPlayable.text}),fetch(`${e}/v3/synthesis/get`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"X-Speechify-Client":"DesktopExtension","X-Speechify-Client-Version":w.runtime.getManifest().version,"x-speechify-synthesis-options":"sentence-splitting=false",Accept:"*/*"},body:JSON.stringify(l),signal:c}).then(d=>d.arrayBuffer()).then(d=>F3.fromBinary(new Uint8Array(d))).then(FR).catch(d=>{let g=d.status?`Audio Server Error status code: ${d.status}`:`Audio Server Error: ${d.message||d.name||"Unknown error"}`;throw os(new Error(g),{context:{url:e},type:"Audio Server"}),d})},FR=e=>{let t=new ArrayBuffer(e.audioData.length);return new Uint8Array(t).set(e.audioData),{audioData:t,audioFormat:e.audioFormat,speechMarks:e.speechMarks,contextToken:e.contextToken}}});function VR(e,t){let r=0,i=0,s=t;for(;s<e.length;){let c=e[s];if(r|=(c&127)<<i,s++,(c&128)===0)return{value:r,bytesRead:s-t};i+=7}return{value:0,bytesRead:0}}function $R(e){let t=e.map(d=>({type:"word",value:d.value,start:d.start,end:d.end,startTime:d.startTime,endTime:d.endTime})),r=t.length>0?t[0].start:0,i=t.length>0?t[t.length-1].end:0,s=t.length>0?t[0].startTime:0,c=t.length>0?t[t.length-1].endTime:0;return{type:"sentence",value:t.map(d=>d.value).join(" "),start:r,end:i,startTime:s,endTime:c,chunks:t}}function qR(e){let t=new ArrayBuffer(e.length);return new Uint8Array(t).set(e),t}function GR(){let e=new Uint8Array(0);return new TransformStream({transform(t,r){let i=new Uint8Array(e.length+t.length);for(i.set(e),i.set(t,e.length),e=i;e.length>0;){let{value:s,bytesRead:c}=VR(e,0);if(c===0)break;let l=c+s;if(e.length<l)break;let d=e.slice(c,l);e=e.slice(l);let g=V3.fromBinary(d),y=g.audioFormat,b=UR[y]||"mp3",E={audioData:qR(g.audioData),audioFormat:b,speechMarks:$R(g.speechMarks),audioChunkDurationMs:g.audioDurationMs,isFinal:g.isFinal,...g.contextToken?{contextToken:g.contextToken}:{}};r.enqueue(E)}},flush(){e.length>0&&os(new Error("Incomplete protobuf data at end of stream"),{context:{remainingBytes:e.length.toString()},type:"Streaming Audio"})}})}var UR,W3,z3=O(()=>{"use strict";p();m();rf();sf();UR={"audio/mpeg":"mp3","audio/mp3":"mp3","audio/ogg":"ogg","audio/wav":"wav","audio/wave":"wav",mp3:"mp3",ogg:"ogg",wav:"wav"};W3=e=>(t,r,i,s,c)=>{let l={ssml:r,voice:i.voiceId,forcedAudioFormat:"mp3"};s.previousContext&&(l.backwardContext={type:"context_token",data:s.previousContext}),s.nextPlayable&&(l.forwardContext={type:"text",data:s.nextPlayable.text});let d=GR();return new ReadableStream({async start(y){try{let b=await fetch(`${e}/v3/synthesis/stream`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"X-Speechify-Client":"DesktopExtension","X-Speechify-Client-Version":w.runtime.getManifest().version,Accept:"*/*"},body:JSON.stringify(l),signal:c});if(!b.ok)throw new Error(`Audio Server Error status code: ${b.status}`);if(!b.body)throw new Error("Streaming response has no body");let E=b.body.getReader();for(;;){let{done:R,value:k}=await E.read();if(R)break;y.enqueue(k)}y.close()}catch(b){if(b.name!=="AbortError"){let E=b.status?`Audio Server Error status code: ${b.status}`:`Audio Server Error: ${b.message||b.name||"Unknown error"}`;os(new Error(E),{context:{url:e},type:"Streaming Audio"})}y.error(b)}}}).pipeThrough(d)}});var WR,j3,Q3=O(()=>{"use strict";p();m();WR=()=>new Promise(e=>{let t=window.speechSynthesis.getVoices();t.length>0&&e(t),speechSynthesis.onvoiceschanged=()=>{speechSynthesis.onvoiceschanged=null,e(window.speechSynthesis.getVoices())}}),j3=(e,t,r)=>{let i=null,s=0,c=0,l=r,d=null,g=null,y=()=>{window.speechSynthesis.pause(),window.speechSynthesis.resume()},b=k=>{k.addEventListener("start",()=>g?.({type:"started"})),k.addEventListener("end",()=>g?.({type:"ended"})),k.addEventListener("error",()=>g?.({type:"error"})),k.addEventListener("boundary",B=>{s=c+B.charIndex+B.charLength,B.charIndex+32>=k.text.length-1&&(k.onend=()=>{d&&clearTimeout(d),g?.({type:"ended"})}),d&&clearTimeout(d),d=setTimeout(()=>{y()},4e3),g?.({type:"progress",payload:{charIndex:s}})})},E=async()=>{let k=await WR();return new Promise(B=>{let N=k.find(F=>F.name.toLowerCase()===t.voiceId.toLowerCase());if(!N)throw new Error("No voice found");c=s,i=new SpeechSynthesisUtterance(e.slice(c)),i.voice=N,i.lang="en-US",i.rate=l,b(i),window.speechSynthesis.cancel(),setTimeout(()=>{i&&window.speechSynthesis.speak(i),B()},50)})},R=async()=>{window.speechSynthesis.cancel(),g?.({type:"paused"})};return{play:E,pause:R,stop:async()=>window.speechSynthesis.cancel(),setupEvents:k=>(g=k,()=>{g=null}),seekTo:async()=>{console.warn("seek to time is a no-op for local player")},seekToCharIndex:async k=>{s=k},getCurrentTime:()=>{let k=s/5,N=60/(180*l);return k*N},destroy:async()=>{i=null,s=0,g=null,window.speechSynthesis.cancel(),d&&clearTimeout(d)},setSpeed:async k=>{l=k;let B=speechSynthesis.speaking;await R(),B&&g&&await E()}}}});var Y3,K3=O(()=>{"use strict";p();m();Y3=(e,t)=>{let r=new Audio;r.playbackRate=t;let i=new MediaSource;r.src=URL.createObjectURL(i);let s=null,c=[],l=!1,d=!1,g=!1,y=null,b=null,E=[],R=()=>{if(!(!s||s.updating)){if(c.length>0){let C=c.shift();try{s.appendBuffer(C)}catch(_){console.error("[StreamingAudioElementPlayer] appendBuffer failed during flush:",_),R()}return}if(l&&i.readyState==="open")try{i.endOfStream()}catch{}}},k=()=>{g&&r.paused&&r.play().catch(()=>{})},B=new Promise(C=>{i.addEventListener("sourceopen",()=>{s=i.addSourceBuffer("audio/mpeg"),d=!0,s.addEventListener("updateend",()=>{k(),R()}),C(),R()})});r.addEventListener("canplay",k);let N=C=>{if(E.length===0)return;let _=C*1e3;for(let M=E.length-1;M>=0;M--)if(_>=E[M].startTimeMs)return E[M].charEnd;return E[0].charStart},F=()=>{if(g&&!r.paused&&b){let C=N(r.currentTime);b({type:"progress",payload:{charIndex:C,duration:r.currentTime}}),y=requestAnimationFrame(F)}};return{appendChunk(C){if(C.speechMarks&&C.speechMarks.chunks)for(let M of C.speechMarks.chunks)E.push({charStart:M.start,charEnd:M.end,startTimeMs:M.startTime,endTimeMs:M.endTime});(async()=>{if(C.isFinal&&(l=!0),d||await B,C.audioData.byteLength>0)try{s&&!s.updating?s.appendBuffer(C.audioData):c.push(C.audioData)}catch(M){console.error("[StreamingAudioElementPlayer] appendBuffer failed:",M)}else l&&R()})()},play:async()=>{g=!0,r.playbackRate=t,s&&s.buffered.length>0&&await r.play().catch(()=>{}),y=requestAnimationFrame(F)},pause:async()=>{r.pause(),g=!1,y&&(cancelAnimationFrame(y),y=null)},stop:async()=>{r.pause(),r.currentTime=0,g=!1,y&&(cancelAnimationFrame(y),y=null)},setupEvents:C=>{b=C;let _=()=>{g=!1,y&&(cancelAnimationFrame(y),y=null),C({type:"ended"})};return r.addEventListener("ended",_),()=>{b=null,r.removeEventListener("ended",_),y&&(cancelAnimationFrame(y),y=null)}},seekTo:async C=>{r.currentTime=C},seekToCharIndex:async C=>{for(let _ of E)if(C>=_.charStart&&C<=_.charEnd){r.currentTime=_.startTimeMs/1e3;return}},getCurrentTime:()=>r.currentTime,destroy:async()=>{if(r.pause(),r.removeEventListener("canplay",k),g=!1,b=null,y&&(cancelAnimationFrame(y),y=null),c=[],s&&i.readyState==="open")try{s.abort(),i.removeSourceBuffer(s)}catch{}URL.revokeObjectURL(r.src),r.src="",s=null,E.length=0},setSpeed:async C=>{t=C,r.playbackRate=t}}}});var vc,Z3=O(()=>{"use strict";p();m();vc=e=>{let t=Symbol(),r=e.initial,i=e.context,s=i,c={state:[],event:[],transition:[]},l=new Map,d=new Map,g=(V,oe)=>{let de=[];for(let se of Object.keys(V))Object.is(V[se],oe[se])||de.push(se);return de},y=(V,oe,de)=>{let se=new Set;for(let J of V){let Ie=l.get(J);if(Ie){for(let Se of Ie)if(!se.has(Se)){se.add(Se);let K={},pe={};for(let le of Se.properties)K[le]=oe[le],pe[le]=de[le];Se.listener(K,pe)}}}},b=(V,oe)=>{let de=d.get(V);if(de)for(let se of de)se.listener(oe)},E=V=>(c.state.push(V),()=>{c.state=c.state.filter(oe=>oe!==V)}),R=(V,oe)=>{let de=Array.isArray(V)?V:[V],se={properties:de,listener:oe};for(let J of de)l.has(J)||l.set(J,[]),l.get(J).push(se);return()=>{for(let J of de){let Ie=l.get(J);if(Ie){let Se=Ie.indexOf(se);Se>-1&&Ie.splice(Se,1),Ie.length===0&&l.delete(J)}}}},k=V=>(c.event.push(V),()=>{c.event=c.event.filter(oe=>oe!==V)}),B=(V,oe)=>{let de={eventType:V,listener:oe};return d.has(V)||d.set(V,[]),d.get(V).push(de),()=>{let se=d.get(V);if(se){let J=se.indexOf(de);J>-1&&se.splice(J,1),se.length===0&&d.delete(V)}}},N=V=>(c.transition.push(V),()=>{c.transition=c.transition.filter(oe=>oe!==V)}),F=(V,oe)=>{if(V.length!==0)for(let de of V){let se=de(i,oe,$);if(se!==void 0){s={...i},i={...i,...se};let J=g(s,i);J.length>0&&y(J,s,i)}}},C=[],_=!1,M=async()=>{if(!_){for(_=!0;C.length>0;){let V=C.shift();if(!V)return;let oe=e.states[r],de=V.type,se=oe?.on?.[de];for(let J of c.event)J(V);if(b(de,V),se){for(let J of se)if(!(J.cond&&!J.cond(i,V))){if(J.actions&&F(J.actions,V),J.target&&J.target!==r){oe.exit&&F(oe.exit,V);let Ie=r;r=J.target;for(let K of c.transition)K([Ie,V,r]);for(let K of c.state)K(Ie,r);let Se=e.states[J.target];Se.entry&&F(Se.entry,V)}break}}if(oe=e.states[r],oe.always){let J=oe.always.flatMap(Se=>Se.actions??[]);F(J,V);let Ie=oe.always.find(Se=>Se.cond?.(i,V));if(Ie?.target&&Ie.target!==r){oe.exit&&F(oe.exit,V);let Se=r;r=Ie.target;for(let pe of c.state)pe(Se,r);for(let pe of c.transition)pe([Se,V,r]);let K=e.states[Ie.target];K.entry&&F(K.entry,V)}}}_=!1}},$={getSchema:()=>e,getSessionId:()=>t,getInitialState:()=>e.initial,getState:()=>r,getContext:()=>i,send:V=>{C.push(V),M()},onContextChange:R,onStateChange:E,onEvent:k,onEventType:B,onTransition:N},Q=e.states[r];return Q?.entry&&F(Q.entry,{}),$}});var X3=ee((lW,H3)=>{"use strict";p();m();H3.exports=function(t,r){if((typeof t=="string"||t instanceof String)&&typeof document<"u"){var i=document.createElement("DIV");i.innerHTML=t,t=(i.textContent||"").trim()}else typeof t=="object"&&t.textContent&&(t=(t.textContent||"").trim());return t}});var J3=ee(af=>{"use strict";p();m();af.endsWithChar=function(t,r){return r.length>1?r.indexOf(t.slice(-1))>-1:t.slice(-1)===r};af.endsWith=function(t,r){return t.slice(t.length-r.length)===r}});var e6=ee(Yt=>{"use strict";p();m();var cf,zR=["al","adj","assn","Ave","BSc","MSc","Cell","Ch","Co","cc","Corp","Dem","Dept","ed","eg","Eq","Eqs","est","est","etc","Ex","ext","Fig","fig","Figs","figs","i.e","ie","Inc","inc","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Sept","Oct","Nov","Dec","jr","mi","Miss","Mrs","Mr","Ms","Mol","mt","mts","no","Nos","PhD","MD","BA","MA","MM","pl","pop","pp","Prof","Dr","pt","Ref","Refs","Rep","repr","rev","Sec","Secs","Sgt","Col","Gen","Rep","Sen","Gov","Lt","Maj","Capt","St","Sr","sr","Jr","jr","Rev","Sun","Mon","Tu","Tue","Tues","Wed","Th","Thu","Thur","Thurs","Fri","Sat","trans","Univ","Viz","Vol","vs","v"];Yt.setAbbreviations=function(e){e?cf=e:cf=zR};var lf=Yt.isCapitalized=function(e){return/^[A-Z][a-z].*/.test(e)||jR(e)};Yt.isSentenceStarter=function(e){return lf(e)||/``|"|'/.test(e.substring(0,2))};Yt.isCommonAbbreviation=function(e){var t=e.replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi,"");return~cf.indexOf(t)};Yt.isTimeAbbreviation=function(e,t){if(e==="a.m."||e==="p.m."){var r=t.replace(/\W+/g,"").slice(-3).toLowerCase();if(r==="day")return!0}return!1};Yt.isDottedAbbreviation=function(e){var t=e.replace(/[\(\)\[\]\{\}]/g,"").match(/(.\.)*/);return t&&t[0].length>0};Yt.isCustomAbbreviation=function(e){return e.length<=3?!0:lf(e)};Yt.isNameAbbreviation=function(e,t){if(t.length>0){if(e<5&&t[0].length<6&&lf(t[0]))return!0;var r=t.filter(function(i){return/[A-Z]/.test(i.charAt(0))});return r.length>=3}return!1};var jR=Yt.isNumber=function(e,t){return t&&(e=e.slice(t-1,t+2)),!isNaN(e)};Yt.isPhoneNr=function(e){return e.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)};Yt.isURL=function(e){return e.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)};Yt.isConcatenated=function(e){var t=0;if((t=e.indexOf("."))>-1||(t=e.indexOf("!"))>-1||(t=e.indexOf("?"))>-1){var r=e.charAt(t+1);if(r.match(/[a-zA-Z].*/))return[e.slice(0,t),e.slice(t+1)]}return!1};Yt.isBoundaryChar=function(e){return e==="."||e==="!"||e==="?"}});var r6=ee(n6=>{"use strict";p();m();var QR=X3(),is=J3(),Ot=e6(),uf=" @~@ ",t6=uf.trim(),YR=new RegExp("\\S",""),KR=new RegExp("\\n+|[-#=_+*]{4,}","g"),ZR=new RegExp("\\S+|\\n","g");n6.sentences=function(e,t){if(!e||typeof e!="string"||!e.length)return[];if(!YR.test(e))return[];var r={newline_boundaries:!1,html_boundaries:!1,html_boundaries_tags:["p","div","ul","ol"],sanitize:!1,allowed_tags:!1,preserve_whitespace:!1,abbreviations:null};if(typeof t=="boolean")r.newline_boundaries=!0;else for(var i in t)r[i]=t[i];if(Ot.setAbbreviations(r.abbreviations),r.newline_boundaries&&(e=e.replace(KR,uf)),r.html_boundaries){var s="(<br\\s*\\/?>|<\\/("+r.html_boundaries_tags.join("|")+")>)",c=new RegExp(s,"g");e=e.replace(c,"$1"+uf)}(r.sanitize||r.allowed_tags)&&(r.allowed_tags||(r.allowed_tags=[""]),e=QR(e,{allowedTags:r.allowed_tags}));var l,d;r.preserve_whitespace?(d=e.split(/(<br\s*\/?>|\S+|\n+)/),l=d.filter(function(F,C){return C%2})):l=e.trim().match(ZR);var g=0,y=0,b=[],E=[],R=[];if(!l||!l.length)return[];for(var k=0,B=l.length;k<B;k++){if(g++,R.push(l[k]),~l[k].indexOf(",")&&(g=0),Ot.isBoundaryChar(l[k])||is.endsWithChar(l[k],"?!")||l[k]===t6){(r.newline_boundaries||r.html_boundaries)&&l[k]===t6&&R.pop(),E.push(R),g=0,R=[];continue}if((is.endsWithChar(l[k],'"')||is.endsWithChar(l[k],"”"))&&(l[k]=l[k].slice(0,-1)),is.endsWithChar(l[k],".")){if(k+1<B){if(l[k].length===2&&isNaN(l[k].charAt(0))||Ot.isCommonAbbreviation(l[k]))continue;if(Ot.isSentenceStarter(l[k+1])){if(Ot.isTimeAbbreviation(l[k],l[k+1])||Ot.isNameAbbreviation(g,l.slice(k,6))||Ot.isNumber(l[k+1])&&Ot.isCustomAbbreviation(l[k]))continue}else if(is.endsWith(l[k],"..")||Ot.isDottedAbbreviation(l[k])||Ot.isNameAbbreviation(g,l.slice(k,5)))continue}E.push(R),R=[],g=0;continue}(y=l[k].indexOf("."))>-1&&(Ot.isNumber(l[k],y)||Ot.isDottedAbbreviation(l[k])||Ot.isURL(l[k])||Ot.isPhoneNr(l[k]))||(b=Ot.isConcatenated(l[k]))&&(R.pop(),R.push(b[0]),E.push(R),R=[],g=0,R.push(b[1]))}R.length&&E.push(R),E=E.filter(function(F){return F.length>0});var N=E.slice(1).reduce(function(F,C){var _=F[F.length-1];return _.length===1&&/^.{1,2}[.]$/.test(_[0])&&!/[.]/.test(C[0])?(F.pop(),F.push(_.concat(C)),F):(F.push(C),F)},[E[0]]);return N.map(function(F,C){if(r.preserve_whitespace&&!r.newline_boundaries&&!r.html_boundaries){var _=F.length*2;return C===0&&(_+=1),d.splice(0,_).join("")}return F.join(" ")})}});var i6,uo,df,ff,wc,zo,o6,s6,pf,ss=O(()=>{"use strict";p();m();i6=Ee(r6(),1),uo=e=>(0,i6.sentences)(e,{preserve_whitespace:!0,html_boundaries:!1}),df=e=>/\s/.test(e),ff=e=>e&&!/\s/.test(e),wc=(e,t)=>{if(e.length===0||t<0)return null;let r=Math.min(t,e.length-1),i=uo(e),s=0;for(let c=0;c<i.length;c++){let l=i[c],d=s,g=s+l.length;if(r>=d&&r<g){let y=0,b=r-d;for(;df(l[b])&&b>0;)b--;for(let E=0;E<=b;E++)df(l[E])&&ff(l[E+1])&&y++;return[c,y]}s=g}return null},zo=(e,t)=>{let r=uo(e),i=r[t[0]];if(!i)return{sentenceCharIndex:{start:0,end:0},wordCharIndex:{start:0,end:0}};let s=r.slice(0,t[0]).join("").length,c=s+i.length,l=0,d=0;for(;l<t[1]&&d<i.length;)df(i[d])&&ff(i[d+1])&&l++,d++;let g=d;for(;d<i.length&&ff(i[d]);)d++;let y=d;return{sentenceCharIndex:{start:s,end:c},wordCharIndex:{start:g+s,end:y+s}}},o6=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/[\n\r\t]/g," "),s6=(e,t)=>{if(e.length<=t)return[e];let r=uo(e),i=[],s="";for(let c of r)if(s.length+c.length>t)if(s.length>0&&i.push(s),c.length>t){let l=c;for(;l.length>t;)i.push(l.substring(0,t)),l=l.substring(t);s=l}else s=c;else s+=c;return s.length>0&&i.push(s),i},pf=e=>{let r=uo(e).join("");return!/[.!?]$/.test(r.trim())&&r.trim().length>0?`<speak>${o6(r)}.</speak>`:`<speak>${o6(r)}</speak>`}});var a6,c6,l6=O(()=>{"use strict";p();m();ss();a6=(e,t,r)=>{let s=zo(t,e).wordCharIndex.start;for(let d of r.chunks)if(s>=d.start&&s<d.end)return d.startTime/1e3;let c=r.chunks[0],l=Number.POSITIVE_INFINITY;for(let d of r.chunks){let g=Math.min(Math.abs(s-d.start),Math.abs(s-d.end));g<l&&(l=g,c=d)}return c?c.startTime/1e3:0},c6=(e,t,r)=>{let i=e*1e3,s=0;for(let d=0;d<r.chunks.length;d++){if(r.chunks[d].startTime>i){s=Math.max(0,d-1);break}d===r.chunks.length-1&&(s=d)}let c=r.chunks[s];return c?wc(t,c.start)||[0,0]:[0,0]}});var HR,XR,JR,eM,u6,d6,f6,tM,nM,rM,oM,iM,p6,m6=O(()=>{"use strict";p();m();HR=()=>{let e=4,t="4g",r=10;try{if(navigator.deviceMemory!==void 0&&(e=navigator.deviceMemory),navigator.connection){let i=navigator.connection;i.effectiveType&&(t=i.effectiveType),i.downlink&&(r=i.downlink)}}catch(i){console.warn("Failed to detect device capabilities, using defaults:",i)}return{memoryGB:e,networkType:t,downlink:r}},XR=()=>{let t=HR(),r=Math.min(t.memoryGB/4,2),i=1;switch(t.networkType){case"slow-2g":case"2g":i=1.5;break;case"3g":i=1.25;break;case"4g":i=.75;break}let s=Math.round(10*r*i);return Math.max(5,Math.min(30,s))},JR=(e,t)=>({key:e,value:t,prev:null,next:null}),eM=e=>({capacity:e,size:0,head:null,tail:null,map:new Map}),u6=(e,t)=>{e.head===null?(e.head=t,e.tail=t):(t.next=e.head,e.head.prev=t,e.head=t),e.size++},d6=(e,t)=>{t.prev?t.prev.next=t.next:e.head=t.next,t.next?t.next.prev=t.prev:e.tail=t.prev,e.size--},f6=(e,t)=>{e.head!==t&&(d6(e,t),u6(e,t))},tM=(e,t)=>{if(e.tail===null)return;let r=e.tail,i=r.key;e.map.delete(i),t&&t(i),e.map.delete(r.key),d6(e,r),r.prev=null,r.next=null},nM=(e,t)=>{let r=e.map.get(t);return r?(f6(e,r),r.value):null},rM=(e,t,r,i)=>{let s=e.map.get(t);if(s){s.value=r,f6(e,s);return}let c=JR(t,r);e.size>=e.capacity&&tM(e,i),u6(e,c),e.map.set(t,c)},oM=(e,t)=>e.map.has(t),iM=e=>{e.head=null,e.tail=null,e.size=0,e.map.clear()},p6=()=>{let e=[],t=XR(),r=eM(t),i=b=>{e.forEach(E=>E(b))};return{getAudioFromCache:b=>nM(r,b),setAudioInCache:(b,E)=>{rM(r,b,E,i)},hasAudioInCache:b=>oM(r,b),ensureCapacity:b=>{b>r.capacity&&(r.capacity=b)},getCapacity:()=>r.capacity,onEvict:b=>(e.push(b),()=>{e=e.filter(E=>E!==b)}),clearCache:()=>{iM(r)}}}});var g6=O(()=>{"use strict";p();m()});var mf=O(()=>{"use strict";p();m();m6();g6()});var sM,fo,h6,Wn,gf=O(()=>{"use strict";p();m();mf();sM=p6(),fo=(e,t)=>`${e}::${t}`,h6=e=>{let t=e.lastIndexOf("::");if(t===-1)return{playableId:e,generation:0};let r=Number(e.slice(t+2));return{playableId:e.slice(0,t),generation:Number.isNaN(r)?0:r}},Wn=sM});var jo,hf=O(()=>{"use strict";p();m();jo=(e,t)=>t?t.voice&&t.voice.voiceId!==e.voice.voiceId?"invalidated-voice":t.text&&t.text!==e.text?"invalidated-text":null:null});var Qo,Tc=O(()=>{"use strict";p();m();Qo=Symbol("PlaceholderRef")});var y6,b6,x6,S6=O(()=>{"use strict";p();m();y6=async(e,t)=>{if(!e.every(s=>s.audioFormat===e[0].audioFormat))throw new Error("All audio results must be of the same type");if(e.length===0)throw new Error("Cannot merge empty audio array");if(e.length===1)return e[0];let i=new AudioContext;try{let s=await Promise.all(e.map(async N=>({audioBuffer:await i.decodeAudioData(N.audioData.slice()),speechMarks:N.speechMarks,context:N.context}))),c=s[0].audioBuffer.sampleRate,l=s.reduce((N,{audioBuffer:F})=>N+F.length,0),d=i.createBuffer(s[0].audioBuffer.numberOfChannels,l,c),g=0;s.forEach(({audioBuffer:N})=>{for(let F=0;F<N.numberOfChannels;F++){let C=N.getChannelData(F);d.getChannelData(F).set(C,g)}g+=N.length});let y=b6(d),b=[],E=0,R=0;e.forEach((N,F)=>{let{speechMarks:C}=N,M=s[F].audioBuffer.duration*1e3,W=R,$=t[F].length,Q=C.chunks.map(V=>({...V,startTime:V.startTime+W,endTime:V.endTime+W,start:V.start+E,end:V.end+E}));b.push(...Q),E+=$,R+=M});let k={type:"sentence",value:e.map(N=>N.speechMarks.value).join(""),start:0,end:E-1,startTime:0,endTime:R,chunks:b};return{audioData:y,audioFormat:"wav",speechMarks:k,context:e[0].context}}finally{await i.close()}},b6=e=>{let t=e.numberOfChannels,r=e.sampleRate,i=e.length,s=new ArrayBuffer(44+i*t*2),c=new DataView(s),l=(g,y)=>{for(let b=0;b<y.length;b++)c.setUint8(g+b,y.charCodeAt(b))};l(0,"RIFF"),c.setUint32(4,36+i*t*2,!0),l(8,"WAVE"),l(12,"fmt "),c.setUint32(16,16,!0),c.setUint16(20,1,!0),c.setUint16(22,t,!0),c.setUint32(24,r,!0),c.setUint32(28,r*t*2,!0),c.setUint16(32,t*2,!0),c.setUint16(34,16,!0),l(36,"data"),c.setUint32(40,i*t*2,!0);let d=44;for(let g=0;g<i;g++)for(let y=0;y<t;y++){let b=Math.max(-1,Math.min(1,e.getChannelData(y)[g]));c.setInt16(d,b<0?b*32768:b*32767,!0),d+=2}return s},x6=async e=>{if(e.length===0)throw new Error("Cannot merge empty stream chunks");if(e.length===1)return{audioData:e[0].audioData,audioFormat:e[0].audioFormat,speechMarks:e[0].speechMarks,context:e[0].contextToken};let t=new AudioContext;try{let r=await Promise.all(e.map(async k=>({audioBuffer:await t.decodeAudioData(k.audioData.slice()),chunk:k}))),i=r[0].audioBuffer.sampleRate,s=r.reduce((k,{audioBuffer:B})=>k+B.length,0),c=t.createBuffer(r[0].audioBuffer.numberOfChannels,s,i),l=0;r.forEach(({audioBuffer:k})=>{for(let B=0;B<k.numberOfChannels;B++){let N=k.getChannelData(B);c.getChannelData(B).set(N,l)}l+=k.length});let d=b6(c),g=c.duration*1e3,y=e.flatMap(k=>k.speechMarks.chunks),b=e[0],E=[...e].reverse().find(k=>k.speechMarks.chunks.length>0)??b,R=e.reduce((k,B)=>B.contextToken??k,void 0);return{audioData:d,audioFormat:"wav",speechMarks:{type:"sentence",value:e.map(k=>k.speechMarks.value).join(""),start:b.speechMarks.start,end:E.speechMarks.end,startTime:0,endTime:g,chunks:y},context:R}}finally{await t.close()}}});var v6=ee((HW,C6)=>{"use strict";p();m();var yf=class{constructor(t){this.value=t,this.next=void 0}},bf=class{constructor(){this.clear()}enqueue(t){let r=new yf(t);this._head?(this._tail.next=r,this._tail=r):(this._head=r,this._tail=r),this._size++}dequeue(){let t=this._head;if(t)return this._head=this._head.next,this._size--,t.value}clear(){this._head=void 0,this._tail=void 0,this._size=0}get size(){return this._size}*[Symbol.iterator](){let t=this._head;for(;t;)yield t.value,t=t.next}};C6.exports=bf});var T6=ee((ez,w6)=>{"use strict";p();m();var aM=v6(),cM=e=>{if(!((Number.isInteger(e)||e===1/0)&&e>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");let t=new aM,r=0,i=()=>{r--,t.size>0&&t.dequeue()()},s=async(d,g,...y)=>{r++;let b=(async()=>d(...y))();g(b);try{await b}catch{}i()},c=(d,g,...y)=>{t.enqueue(s.bind(null,d,g,...y)),(async()=>(await Promise.resolve(),r<e&&t.size>0&&t.dequeue()()))()},l=(d,...g)=>new Promise(y=>{c(d,y,...g)});return Object.defineProperties(l,{activeCount:{get:()=>r},pendingCount:{get:()=>t.size},clearQueue:{value:()=>{t.clear()}}}),l};w6.exports=cM});var k6,lM,uM,dM,fM,pM,mM,gM,hM,Ct,I6,E6,yM,bM,xM,R6,SM,CM,vM,wM,TM,M6,EM,kM,IM,RM,MM,_M,AM,LM,PM,OM,NM,DM,BM,FM,UM,VM,$M,qM,ne,_6=O(()=>{"use strict";p();m();l6();ss();gf();hf();Tc();S6();k6=Ee(T6(),1),lM=(e,t)=>{if(t.type!=="ENQUEUE_PLAYABLE"||!t.payload)return;let{playable:r,position:i}=t.payload,s=i??e.queue.length;return Array.isArray(r)?{queue:e.queue.toSpliced(s,0,...r)}:{queue:e.queue.toSpliced(s,0,r)}},uM=(e,t)=>{if(t.type!=="REMOVE_PLAYABLES"||!t.payload)return;let{startFromIndex:r,count:i}=t.payload,s=r??0,c=i??e.queue.length-s,l=e.queue.toSpliced(s,c);return e.playbackCursorIndex>=s?{playbackCursorIndex:Math.max(e.playbackCursorIndex-c,0),queue:l}:{queue:l}},dM=(e,t)=>{if(t.type!=="EDIT_ALL_PLAYABLES"||!t.payload)return;let{playablesToEdit:r,startFromIndex:i}=t.payload,s=i??0,c=e.queue.map((l,d)=>{if(d<s)return l;let g=r[d],y={...l,...g},b=jo(l,g);return b&&(y.readyState=b,y.generation=Ct(l)+1),y});return I6(e,c)?{queue:c,activeLoadRequestId:null}:{queue:c}},fM=(e,t)=>{if(t.type!=="EDIT_PLAYABLES"||!t.payload)return;let{playablesToEdit:r}=t.payload,i=Array.isArray(r)?r:[r],s=e.queue.slice();for(let c of i){let l=e.queue.findIndex(b=>b.id===c.playableId);if(l===-1)return;let d=e.queue[l],g=c.newPlayable,y=jo(d,g);s.splice(l,1,{...d,...g,readyState:y??d.readyState,generation:y?Ct(d)+1:Ct(d)})}return I6(e,s)?{queue:s,activeLoadRequestId:null}:{queue:s}},pM=(e,t)=>{if(t.type!=="AUDIO_CHUNK_LOAD_FAILED"||!t.payload)return;let{playableId:r}=t.payload,i=e.queue.findIndex(l=>l.id===r);if(i===-1)return;let s=e.queue[i];if(t.payload.generation!==void 0&&t.payload.generation!==Ct(s))return;let c=e.queue[i].readyState==="streaming";return{queue:e.queue.toSpliced(i,1,{...e.queue[i],readyState:"error"}),activeLoadRequestId:c?e.activeLoadRequestId:null,activeStreamingRequestId:c?null:e.activeStreamingRequestId}},mM=(e,t)=>{if(t.type!=="AUDIO_CHUNK_READY"||!t.payload)return;let{playableId:r,type:i}=t.payload,s=e.queue.findIndex(d=>d.id===r);if(s===-1)return;let c=e.queue[s];if(t.payload.generation!==void 0&&t.payload.generation!==Ct(c))return;i==="remote"&&Wn.setAudioInCache(fo(r,t.payload.generation??Ct(c)),{audioData:t.payload.audioData,audioFormat:t.payload.audioFormat,speechMarks:t.payload.speechMarks,context:t.payload.context});let l=e.queue[s].readyState==="streaming";return{activeLoadRequestId:l?e.activeLoadRequestId:null,activeStreamingRequestId:l?null:e.activeStreamingRequestId,queue:e.queue.toSpliced(s,1,{...e.queue[s],readyState:"ready"})}},gM=(e,t)=>{if(t.type!=="AUDIO_CHUNK_NOT_READY"||!t.payload)return;let{playableId:r}=t.payload,i=e.queue.findIndex(c=>c.id===r);if(i===-1)return;let s=e.queue[i];if(!(t.payload.generation!==void 0&&t.payload.generation!==Ct(s)))return{queue:e.queue.toSpliced(i,1,{...e.queue[i],readyState:"not-ready"})}},hM=e=>{let{queue:t,playbackCursorIndex:r}=e,i=t.findIndex((c,l)=>c.readyState!=="ready"&&c.readyState!=="streaming"&&c.ref!==Qo&&l>=r);return i===-1?t.length-1:i},Ct=e=>e?.generation??0,I6=(e,t)=>{let r=e.activeLoadRequestId;if(!r)return!1;let i=t.find(s=>s.id===r.id);return i&&Ct(i)!==r.generation?(r.controller.abort(),!0):!1},E6=4,yM=30,bM=3,xM=(e,t)=>{let r=e.queue[t]?.voice;return!e.configuration.getPrefetchPolicyFn||!r?null:e.configuration.getPrefetchPolicyFn({playbackRate:e.playbackRate,voice:r})},R6=e=>e?e.maxLookahead!=null?e.maxLookahead:e.bufferTargetSeconds!=null?yM:E6:E6,SM=(e,t)=>{let r=Wn.getAudioFromCache(fo(t.id,Ct(t)));return r?.speechMarks&&typeof r.speechMarks.endTime=="number"?r.speechMarks.endTime/1e3:t.duration>0?t.duration:e.configuration.predictDurationFn(t.text,t.voice)},CM=(e,t)=>{let r=0;for(let i=e.playbackCursorIndex+1;i<t;i++){let s=e.queue[i];s&&(s.readyState==="ready"||s.readyState==="streaming")&&(r+=SM(e,s))}return r},vM=(e,t,r)=>t-e.playbackCursorIndex>=R6(r)?!0:r?.bufferTargetSeconds!=null?CM(e,t)>=r.bufferTargetSeconds:!1,wM=e=>{if(!e)return;let t=Math.max(e.cacheSize??0,R6(e)+bM);Wn.ensureCapacity(t)},TM=(e,t,r,i)=>{let{queue:s}=e,c=s[r];if(vM(e,r,i)||c.readyState==="ready"||c.readyState==="streaming"||c.readyState==="error"&&(t.getState()==="paused"||r===e.playbackCursorIndex)||c.ref===Qo)return!0;if(e.activeLoadRequestId){let l=e.activeLoadRequestId.id===c.id,d=c.readyState==="invalidated-text"||c.readyState==="invalidated-voice";if(l&&!d)return!0}return!1},M6=(e,t,r,i,s)=>{let c={};return c.previousContext=Wn.getAudioFromCache(fo(i[s-1]?.id,Ct(i[s-1])))?.context,e===0?(c.previousPlayable=i[s-1],c.nextPlayable=t[e+1]?{...r,text:t[e+1]}:i[s+1]):e===t.length-1?(c.nextPlayable=i[s+1],c.previousPlayable=t[e-1]?{...r,text:t[e-1]}:i[s-1]):(c.previousPlayable={...r,text:t[e-1]},c.nextPlayable={...r,text:t[e+1]}),c},EM=e=>({audioData:e.audioData,audioFormat:e.audioFormat,speechMarks:e.speechMarks,context:e.contextToken}),kM=(e,t,r,i,s,c,l)=>{let d=M6(t,r,i,s.queue,c);return s.configuration.fetchAudioFn(pf(e),i.voice,d,l.signal).then(EM)},IM=(e,t,r)=>(e.send({type:"AUDIO_CHUNK_READY",payload:{type:"local",playableId:t.id,generation:Ct(t)}}),{activeLoadRequestId:null,loadingCursorIndex:r}),RM=(e,t,r)=>{let{queue:i}=e,s=i[r];if(!s)return;let c=Ct(s),l=e.queue.toSpliced(r,1,{...s,readyState:"loading"}),d=s6(s.text,1e3),g=new AbortController,y=(0,k6.default)(2),b=d.map((R,k)=>y(()=>kM(R,k,d,s,e,r,g))),E=Date.now();return Promise.all(b).then(R=>y6(R,d)).then(R=>{t.send({type:"AUDIO_CHUNK_READY",payload:{type:"remote",playableId:s.id,audioData:R.audioData,audioFormat:R.audioFormat,speechMarks:R.speechMarks,context:R.context,loadDurationMs:Date.now()-E,generation:c}})}).catch(R=>{R?.name!=="AbortError"&&t.send({type:"AUDIO_CHUNK_LOAD_FAILED",payload:{playableId:s.id,generation:c}})}),{activeLoadRequestId:{controller:g,id:s.id,generation:c},queue:l,loadingCursorIndex:r}},MM=(e,t)=>!(!e.configuration.fetchStreamingAudioFn||!e.configuration.streamingAudioPlayerFn||t!==e.playbackCursorIndex||e.activeStreamingRequestId&&e.activeStreamingRequestId.id===e.queue[t]?.id),_M=(e,t,r)=>{let{queue:i}=e,s=i[r];if(!s)return;let{fetchStreamingAudioFn:c,streamingAudioPlayerFn:l}=e.configuration;if(!c||!l)return;let d=Ct(s),g=new AbortController,y=M6(0,[s.text],s,i,r),b=c(pf(s.text),s.voice,y,g.signal),E=l(s.text,e.playbackRate);E.setupEvents(B=>{switch(B.type){case"progress":t.send({type:"AUDIO_PROGRESSED",payload:{playableId:s.id,charIndex:B.payload.charIndex}});break;case"ended":t.send({type:"AUDIO_PLAYBACK_ENDED"});break}});let R=b.getReader();return(async()=>{try{for(;;){let{done:B,value:N}=await R.read();if(B||g.signal.aborted)break;t.send({type:"STREAM_CHUNK_RECEIVED",payload:{playableId:s.id,chunk:N,generation:d}})}}catch(B){B?.name!=="AbortError"&&!g.signal.aborted&&t.send({type:"AUDIO_CHUNK_LOAD_FAILED",payload:{playableId:s.id,generation:d}})}finally{R.releaseLock()}})(),{playerForCurrentPlayable:E,activeStreamingRequestId:{controller:g,id:s.id,generation:d},streamingBuffer:{chunks:[],bufferedUpToCharIndex:-1,isComplete:!1,playableId:s.id},queue:e.queue.toSpliced(r,1,{...s,readyState:"streaming"}),loadingCursorIndex:r}},AM=(e,t,r)=>{if(t.type!=="STREAM_CHUNK_RECEIVED"||!t.payload)return;let{playableId:i,chunk:s}=t.payload,c=t.payload.generation;if(!e.streamingBuffer||e.streamingBuffer.playableId!==i||e.activeStreamingRequestId?.id!==i||t.payload.generation!==void 0&&e.activeStreamingRequestId?.generation!==t.payload.generation)return;let l=e.playerForCurrentPlayable;l&&"appendChunk"in l&&l.appendChunk(s);let d=[...e.streamingBuffer.chunks,s],g=s.speechMarks.end,y=s.isFinal;return y&&x6(d).then(b=>{r.send({type:"AUDIO_CHUNK_READY",payload:{type:"remote",playableId:i,audioData:b.audioData,audioFormat:b.audioFormat,speechMarks:b.speechMarks,context:b.context,generation:c}})}).catch(()=>{}),{streamingBuffer:{...e.streamingBuffer,chunks:d,bufferedUpToCharIndex:g,isComplete:y}}},LM=(e,t,r)=>{let{queue:i}=e;if(i.length===0)return;let s=hM(e),c=xM(e,s);if(wM(c),TM(e,r,s,c))return;let l=i[s],d=e.activeLoadRequestId;return d&&d.controller.abort(),l.voice.provider==="local"?IM(r,l,s):MM(e,s)?_M(e,r,s):RM(e,r,s)},PM=(e,t,r)=>{let{queue:i,playbackCursorIndex:s}=e,c=i[s];if(!(!c||c.readyState!=="ready"&&c.readyState!=="streaming")&&!e.playerForCurrentPlayable){let{provider:l}=c.voice;if(l==="local"){if(c.text.trim().length===0){r.send({type:"AUDIO_PLAYBACK_ENDED"});return}let y=e.configuration.localAudioPlayerFn(c.text,c.voice,e.playbackRate);return y.setupEvents(b=>{switch(b.type){case"progress":r.send({type:"AUDIO_PROGRESSED",payload:{playableId:c.id,charIndex:b.payload.charIndex}});break;case"ended":r.send({type:"AUDIO_PLAYBACK_ENDED"});break}}),y.setSpeed(e.playbackRate),{playerForCurrentPlayable:y}}let d=Wn.getAudioFromCache(fo(c.id,Ct(c)));if(!d){r.send({type:"AUDIO_CHUNK_NOT_READY",payload:{playableId:c.id}});return}let g=e.configuration.hdAudioPlayerFn(c.text,e.playbackRate,{data:d.audioData,format:d.audioFormat});return g.setupEvents(y=>{switch(y.type){case"progress":r.send({type:"AUDIO_PROGRESSED",payload:{playableId:c.id,duration:y.payload.duration}});break;case"ended":r.send({type:"AUDIO_PLAYBACK_ENDED"});break}}),g.setSpeed(e.playbackRate),{playerForCurrentPlayable:g}}},OM=(e,t,r)=>{if(t.type!=="AUDIO_PROGRESSED")return;let i=e.queue[e.playbackCursorIndex];if(t.payload?.duration){let s=Wn.getAudioFromCache(fo(i.id,Ct(i)));if(!s)return;let c=c6(t.payload.duration,i.text,s.speechMarks)??[0,0],l=e.currentPlaybackLocation?.position,d=e.currentPlaybackLocation?.ref,g=e.currentPlaybackLocation?.playableId;return l&&l[0]===c[0]&&l[1]===c[1]&&d===i.ref&&g===i.id?void 0:{currentPlaybackLocation:{playableId:i.id,position:c,...zo(i.text,c),ref:i.ref}}}if(t.payload?.charIndex!==void 0){let s=t.payload.charIndex,c=wc(i.text,s);if(!c)return;let l=e.currentPlaybackLocation?.position,d=e.currentPlaybackLocation?.ref,g=e.currentPlaybackLocation?.playableId;return l&&l[0]===c[0]&&l[1]===c[1]&&d===i.ref&&g===i.id?void 0:{currentPlaybackLocation:{playableId:i.id,position:c,...zo(i.text,c),ref:i.ref}}}},NM=(e,t,r)=>{if(t.type!=="AUDIO_PLAYBACK_ENDED")return;let i=e.playbackCursorIndex+1;return e.playerForCurrentPlayable?.destroy(),i>=e.queue.length&&r.send({type:"QUEUE_ENDED"}),{playbackCursorIndex:i,playerForCurrentPlayable:null,currentPlaybackLocation:null,activeStreamingRequestId:null,streamingBuffer:null}},DM=(e,t)=>{if(t.type==="QUEUE_ENDED")return{playbackCursorIndex:0,playerForCurrentPlayable:null,currentPlaybackLocation:null}},BM=e=>{if(!e.playerForCurrentPlayable)return;e.playerForCurrentPlayable.pause();let t=e.queue[e.playbackCursorIndex],r=e.activeStreamingRequestId;return r&&r.id===t?.id?(r.generation??0)===Ct(t)?void 0:(r.controller.abort(),e.playerForCurrentPlayable.destroy(),{playerForCurrentPlayable:null,activeStreamingRequestId:null,streamingBuffer:null}):(e.playerForCurrentPlayable.destroy(),{playerForCurrentPlayable:null})},FM=(e,t,r)=>{let i=e.playerForCurrentPlayable,s=e.currentPlaybackLocation;if(i){if(s){let c=e.queue[e.playbackCursorIndex];if(c.readyState==="streaming"||c.voice.provider==="local")i.seekToCharIndex(s.wordCharIndex.start);else{let l=Wn.getAudioFromCache(fo(c.id,Ct(c)));l&&i.seekTo(a6(s.position,c.text,l.speechMarks))}}i.play()}},UM=(e,t,r)=>{if(t.type!=="SEEK_TO_PLAYABLE"||!t.payload)return;let{playableId:i,position:s}=t.payload,c=e.queue.findIndex(g=>g.id===i),l=e.queue[c];if(c===-1)return;let d={playbackCursorIndex:c,currentPlaybackLocation:{playableId:i,position:s,...zo(l.text,s),ref:l.ref}};if(e.activeStreamingRequestId&&e.activeStreamingRequestId.id!==i){e.activeStreamingRequestId.controller.abort(),e.playerForCurrentPlayable?.pause(),e.playerForCurrentPlayable?.destroy(),d.activeStreamingRequestId=null,d.playerForCurrentPlayable=null,d.streamingBuffer=null;let g=e.queue.findIndex(y=>y.id===e.activeStreamingRequestId.id);g!==-1&&(d.queue=e.queue.toSpliced(g,1,{...e.queue[g],readyState:"not-ready"}))}return d},VM=(e,t)=>{t.type==="PAUSE"&&e.playerForCurrentPlayable&&e.playerForCurrentPlayable.pause()},$M=(e,t)=>{if(t.type==="SET_PLAYBACK_RATE"&&t.payload)return e.playerForCurrentPlayable?.setSpeed(t.payload),{playbackRate:t.payload}},qM=(e,t)=>{if(t.type==="CLEAR_QUEUE")return e.playerForCurrentPlayable&&(e.playerForCurrentPlayable.pause(),e.playerForCurrentPlayable.destroy()),e.activeStreamingRequestId&&e.activeStreamingRequestId.controller.abort(),{queue:[],playbackCursorIndex:0,loadingCursorIndex:0,playerForCurrentPlayable:null,currentPlaybackLocation:null,activeStreamingRequestId:null,streamingBuffer:null}},ne={enqueuePlayable:lM,removePlayables:uM,editPlayables:fM,editAllPlayables:dM,markPlayableAsErrored:pM,markPlayableAsReady:mM,markPlayableAsNotReady:gM,adjustLoadingCursor:LM,handleStreamChunkReceived:AM,setupPlayerForPlayable:PM,handleProgressEvent:OM,handleEndedEvent:NM,resetCurrentPlayablePlayer:BM,attemptToPlayPlayable:FM,seekToPlayable:UM,pausePlayback:VM,setPlaybackRate:$M,handleQueueEndedEvent:DM,clearQueue:qM}});var GM,WM,zM,jM,QM,xn,A6=O(()=>{"use strict";p();m();hf();GM=(e,t)=>e.queue.length>0,WM=(e,t)=>{let r=e.queue[e.playbackCursorIndex];if(!r)return!1;if(r.readyState==="ready")return!0;if(r.readyState==="streaming"){if(!e.streamingBuffer)return!1;let i=e.currentPlaybackLocation?.wordCharIndex?.start??0;return e.streamingBuffer.bufferedUpToCharIndex>=i}return!1},zM=(e,t)=>{let r=e.queue[e.playbackCursorIndex];if(!r||r.readyState==="ready")return!1;if(r.readyState==="streaming"){let i=e.streamingBuffer;return!(!!i&&i.playableId===r.id&&i.bufferedUpToCharIndex>=0)}return!0},jM=(e,t)=>e.queue[e.playbackCursorIndex]&&e.queue[e.playbackCursorIndex].readyState==="error",QM=(e,t)=>{let r=e.queue[e.playbackCursorIndex];if(!r)return!1;if(t.type==="EDIT_PLAYABLES"){if(!t.payload)return!1;let s=(Array.isArray(t.payload.playablesToEdit)?t.payload.playablesToEdit:[t.payload.playablesToEdit]).find(c=>c.playableId===r.id);return s?jo(r,s.newPlayable)!==null:!1}if(t.type==="EDIT_ALL_PLAYABLES"){if(!t.payload)return!1;let i=t.payload.startFromIndex??0;if(e.playbackCursorIndex<i)return!1;let s=t.payload.playablesToEdit[e.playbackCursorIndex];return jo(r,s)!==null}return!1},xn={isQueueNotEmpty:GM,isPlayableReady:WM,isPlayableNotReady:zM,isCurrentPlayableErrored:jM,willCurrentPlayableBeInvalidated:QM}});var L6,P6=O(()=>{"use strict";p();m();_6();A6();L6=e=>{let t=!!e.fetchStreamingAudioFn,r=!!e.streamingAudioPlayerFn;if(t!==r)throw new Error("fetchStreamingAudioFn and streamingAudioPlayerFn must both be provided for streaming playback.");let i={entry:[ne.resetCurrentPlayablePlayer],on:{PLAY:[{target:"buffering",cond:xn.isQueueNotEmpty,actions:[]}],ENQUEUE_PLAYABLE:[{actions:[ne.enqueuePlayable]}],EDIT_PLAYABLES:[{actions:[ne.editPlayables]}],EDIT_ALL_PLAYABLES:[{actions:[ne.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[ne.removePlayables]}],SEEK_TO_PLAYABLE:[{actions:[ne.seekToPlayable]}],SET_PLAYBACK_RATE:[{actions:[ne.setPlaybackRate]}],CLEAR_QUEUE:[{actions:[ne.clearQueue]}]}};return{id:Symbol(),initial:"idle",context:{queue:[],playbackCursorIndex:0,loadingCursorIndex:0,playbackRate:1,currentPlaybackLocation:null,activeLoadRequestId:null,activeStreamingRequestId:null,lastError:void 0,playerForCurrentPlayable:null,streamingBuffer:null,configuration:e},states:{idle:i,ended:i,playing:{always:[{target:"error",cond:xn.isCurrentPlayableErrored},{actions:[ne.adjustLoadingCursor]},{target:"buffering",cond:xn.isPlayableNotReady}],entry:[ne.adjustLoadingCursor,ne.setupPlayerForPlayable,ne.attemptToPlayPlayable],on:{PAUSE:[{target:"paused"}],SET_PLAYBACK_RATE:[{actions:[ne.setPlaybackRate]}],AUDIO_CHUNK_READY:[{actions:[ne.markPlayableAsReady]}],AUDIO_CHUNK_NOT_READY:[{actions:[ne.markPlayableAsNotReady]}],AUDIO_PLAYBACK_ENDED:[{actions:[ne.handleEndedEvent,ne.setupPlayerForPlayable,ne.attemptToPlayPlayable]}],PLAY_NEXT_PLAYABLE:[{actions:[ne.setupPlayerForPlayable,ne.attemptToPlayPlayable]}],AUDIO_CHUNK_LOAD_FAILED:[{actions:[ne.markPlayableAsErrored]}],AUDIO_PROGRESSED:[{actions:[ne.handleProgressEvent]}],STREAM_CHUNK_RECEIVED:[{actions:[ne.handleStreamChunkReceived]}],SEEK_TO_PLAYABLE:[{target:"buffering",actions:[ne.seekToPlayable]}],ENQUEUE_PLAYABLE:[{actions:[ne.enqueuePlayable]}],EDIT_PLAYABLES:[{cond:xn.willCurrentPlayableBeInvalidated,target:"buffering",actions:[ne.editPlayables]},{actions:[ne.editPlayables]}],EDIT_ALL_PLAYABLES:[{cond:xn.willCurrentPlayableBeInvalidated,target:"buffering",actions:[ne.editAllPlayables]},{actions:[ne.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[ne.removePlayables]}],QUEUE_ENDED:[{target:"ended",actions:[ne.handleQueueEndedEvent]}],CLEAR_QUEUE:[{actions:[ne.clearQueue]}]}},paused:{entry:[ne.pausePlayback,ne.resetCurrentPlayablePlayer],always:[{target:"error",cond:xn.isCurrentPlayableErrored},{actions:[ne.adjustLoadingCursor]}],on:{PLAY:[{target:"playing",cond:xn.isQueueNotEmpty}],SET_PLAYBACK_RATE:[{actions:[ne.setPlaybackRate]}],AUDIO_CHUNK_READY:[{actions:[ne.markPlayableAsReady]}],AUDIO_CHUNK_LOAD_FAILED:[{actions:[ne.markPlayableAsErrored]}],STREAM_CHUNK_RECEIVED:[{actions:[ne.handleStreamChunkReceived]}],SEEK_TO_PLAYABLE:[{actions:[ne.seekToPlayable]}],ENQUEUE_PLAYABLE:[{actions:[ne.enqueuePlayable]}],EDIT_PLAYABLES:[{actions:[ne.editPlayables]}],EDIT_ALL_PLAYABLES:[{actions:[ne.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[ne.removePlayables]}],CLEAR_QUEUE:[{actions:[ne.clearQueue]}]}},buffering:{entry:[ne.resetCurrentPlayablePlayer,ne.adjustLoadingCursor],always:[{target:"playing",cond:xn.isPlayableReady},{target:"error",cond:xn.isCurrentPlayableErrored}],on:{PAUSE:[{target:"paused"}],SET_PLAYBACK_RATE:[{actions:[ne.setPlaybackRate]}],AUDIO_CHUNK_READY:[{actions:[ne.markPlayableAsReady]}],AUDIO_CHUNK_LOAD_FAILED:[{actions:[ne.markPlayableAsErrored]}],STREAM_CHUNK_RECEIVED:[{actions:[ne.handleStreamChunkReceived]}],ENQUEUE_PLAYABLE:[{actions:[ne.enqueuePlayable,ne.adjustLoadingCursor]}],EDIT_PLAYABLES:[{actions:[ne.editPlayables,ne.adjustLoadingCursor]}],EDIT_ALL_PLAYABLES:[{actions:[ne.editAllPlayables,ne.adjustLoadingCursor]}],REMOVE_PLAYABLES:[{actions:[ne.removePlayables]}],SEEK_TO_PLAYABLE:[{actions:[ne.seekToPlayable,ne.adjustLoadingCursor]}],CLEAR_QUEUE:[{actions:[ne.clearQueue]}]}},error:{entry:[ne.resetCurrentPlayablePlayer],always:[{target:"playing",cond:xn.isPlayableReady}],on:{PLAY:[{target:"playing",cond:xn.isQueueNotEmpty}],AUDIO_CHUNK_READY:[{actions:[ne.markPlayableAsReady]}],SET_PLAYBACK_RATE:[{actions:[ne.setPlaybackRate]}],EDIT_PLAYABLES:[{actions:[ne.editPlayables,ne.adjustLoadingCursor]}],EDIT_ALL_PLAYABLES:[{actions:[ne.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[ne.removePlayables]}],CLEAR_QUEUE:[{actions:[ne.clearQueue]}]}}}}}});var O6=O(()=>{"use strict";p();m()});var Ec=O(()=>{"use strict";p();m();Z3();P6();O6()});var YM,KM,ZM,N6,xf=O(()=>{"use strict";p();m();Ec();YM=e=>{let t=`stateDiagram-v2
`;t+=` [*] --> ${e.initial}
`;for(let r in e.states){let i=e.states[r];if(i.on)for(let s in i.on){let c=i.on[s];if(c)for(let l of c)l.target&&(t+=` ${r} --> ${l.target}:${s}
`)}if(i.always)for(let s of i.always)s.target&&(t+=` ${r} --> ${s.target}:always if ${s.cond?.name}
`)}return t},KM=new Set(["AUDIO_PROGRESSED"]),ZM=e=>{let t=e.payload;if(!t)return"";if(typeof t!="object")return String(t);let r={};for(let[i,s]of Object.entries(t))s instanceof ArrayBuffer?r[i]=`ArrayBuffer(${s.byteLength})`:typeof s=="object"&&s!==null&&"audioData"in s?r[i]=`StreamChunk(${s.isFinal?"final":"partial"})`:r[i]=s;return JSON.stringify(r)},N6=e=>{let t=vc(e),r=t.getSchema(),i="[orator]";return t.onTransition(([s,c,l])=>{console.log(`${i} %c${String(s)} → ${String(l)}%c via ${c.type}`,"color: #f59e0b; font-weight: bold","")}),t.onEvent(s=>{if(KM.has(s.type))return;let c=ZM(s);console.log(`${i} %cevent%c ${s.type}${c?` ${c}`:""}`,"color: #3b82f6; font-weight: bold","",`| state: ${String(t.getState())}`)}),t.onStateChange((s,c)=>{let l=t.getContext();console.groupCollapsed(`${i} %cstate%c ${String(s)} → ${String(c)}`,"color: #10b981; font-weight: bold",""),console.log("playbackCursorIndex:",l.playbackCursorIndex),console.log("queue readyStates:",l.queue?.map(d=>d.readyState)),console.log("activeStreamingRequestId:",l.activeStreamingRequestId?.id??null),console.log("streamingBuffer:",l.streamingBuffer?{bufferedUpToCharIndex:l.streamingBuffer.bufferedUpToCharIndex,isComplete:l.streamingBuffer.isComplete,chunksCount:l.streamingBuffer.chunks.length}:null),console.log("playerForCurrentPlayable:",l.playerForCurrentPlayable?"set":"null"),console.groupEnd()}),{...t,getStateChart:()=>YM(r)}}});var D6,B6=O(()=>{"use strict";p();m();xf();Ec();gf();Tc();ss();mf();xf();Ec();Tc();ss();D6=(e,t)=>{let r=L6(e),i=t?N6(r):vc(r),s=l=>{let{playableId:d,generation:g}=h6(l);i.send({type:"AUDIO_CHUNK_NOT_READY",payload:{playableId:d,generation:g}})},c=Wn.onEvict(s);return{controls:{editOrEnqueuePlayables:l=>{let d=[];for(let g=0;g<l.length;g++){let y=l[g],b=i.getContext().queue.find(E=>E.id===y.id);if(b){b.text!==y.text&&d.push({playableId:y.id,newPlayable:{text:y.text}});continue}i.send({type:"ENQUEUE_PLAYABLE",payload:{playable:y,position:g}})}d.length>0&&i.send({type:"EDIT_PLAYABLES",payload:{playablesToEdit:d}})},enqueuePlayables:l=>{i.send({type:"ENQUEUE_PLAYABLE",payload:{playable:l}})},pause:()=>{i.send({type:"PAUSE"})},play:()=>{i.send({type:"PLAY"})},setSpeed:l=>{l>=.25&&l<=4.5&&i.send({type:"SET_PLAYBACK_RATE",payload:l})},stop:()=>{i.send({type:"STOP"})},seekNextSentence:()=>{let{currentPlaybackLocation:l,playbackCursorIndex:d}=i.getContext();if(!l)return;let g=l.position,y=uo(i.getContext().queue[d].text);if(g[0]+1>=y.length&&d<i.getContext().queue.length-1){let E=i.getContext().queue[d+1];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:E.id,position:[0,0]}})}else{let E=[Math.min(g[0]+1,y.length-1),0];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:l.playableId,position:E}})}},seekPreviousSentence:()=>{let{currentPlaybackLocation:l,playbackCursorIndex:d}=i.getContext();if(!l)return;let g=l.position;if(g[0]-1<0&&d>0){let b=i.getContext().queue[d-1],R=[uo(b.text).length-1,0];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:b.id,position:R}})}else{let b=[Math.max(g[0]-1,0),0];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:l.playableId,position:b}})}},setVoice:l=>{let g=i.getContext().queue.map(y=>({voice:l}));i.send({type:"EDIT_ALL_PLAYABLES",payload:{playablesToEdit:g}})},seekToPosition:(l,d)=>{i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:l,position:d}})},seekToProgress:l=>{let d=Math.min(Math.max(l,0),1),g=i.getContext().queue,b=g.reduce((R,k)=>R+k.duration,0)*d,E=0;for(let R=0;R<g.length;R++){let k=g[R];if(E=E+k.duration,E>=b){i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:k.id,position:[0,0]}});return}}},getCurrentTime:()=>{let d=i.getContext().queue.slice(0,i.getContext().playbackCursorIndex).reduce((E,R)=>E+R.duration,0),g=i.getContext().playerForCurrentPlayable;return g?(g.getCurrentTime()+d)/i.getContext().playbackRate:d/i.getContext().playbackRate},getTotalTime:()=>i.getContext().queue.reduce((d,g)=>d+g.duration,0)/i.getContext().playbackRate,hasPlaceholders:()=>i.getContext().queue.some(l=>l.ref===Qo)},createPlayableFromElement(l,d){let g=d(l);return{...g,duration:e.predictDurationFn(g.text,g.voice)}},createPlaceholderPlayable(l){return{id:l,text:"",ref:Qo,readyState:"not-ready",voice:{voiceId:"placeholder",provider:"local"},duration:0}},reset:()=>{i.send({type:"CLEAR_QUEUE"})},destroy:()=>{c()},machine:i}}});async function Sf(e){return HM.then(t=>t.features[e])}function Qz(e){let[t,r]=(0,kc.useState)({isLoading:!0});return(0,kc.useEffect)(()=>{Sf(e).then(i=>{r({isLoading:!1,variant:i})}).catch(i=>{r({isLoading:!1,error:i})})},[]),t}var kc,HM,F6=O(()=>{"use strict";p();m();An();kc=Ee(De()),HM=et("/feature-flags/get")});var Ic,Cf=O(()=>{"use strict";p();m();An();Ic=()=>et("/content/stop-playback-all-tabs")});var XM,JM,e_,U6,vf,t_,V6,$6=O(()=>{"use strict";p();m();eE();XM=180,JM=5,e_=XM*JM,U6=Pg("voiceSpeedTiming",{getInitialState:async()=>({})}),vf={};U6.getAll().then(e=>vf=e);U6.listen(e=>vf=e);t_=e=>e.trim().replace(/\s+/g," "),V6=(e,t)=>{let r=t_(e);if(r.length===0)return 0;if(!t||!t.voiceId)throw new Error("Voice must have a valid voiceId");let i=vf[t.voiceId],s=e_;return i&&i.length>0&&(s=i.reduce((l,d)=>l+d.cpm,0)/i.length),r.length/(s/60)}});var q6,G6=O(()=>{"use strict";p();m();q6=e=>{let t=e.engine==="speechSynth"?"local":e.engine;return{voiceId:e.slug??e.name.toLowerCase(),provider:t}}});function d_(){let e=[],t=null,r=null,i=b=>{let E=document.createElement("div");return E.style.cssText="position:absolute;pointer-events:none;border-radius:3px;",E.dataset.testid=b,E},s=(b,E,R)=>{b.style.background=E,b.style.mixBlendMode=R?"lighten":"multiply"},c=b=>{let E=[];for(let k of b){if(k.width===0)continue;let B=E.find(N=>Math.abs(N[0].top-k.top)<Math.max(k.height,N[0].height)*.5);B?B.push(k):E.push([k])}let R=[];for(let k of E){k.sort((N,F)=>N.left-F.left);let B=null;for(let N of k){let F=B?N.left-(B.x+B.width):0,C=Math.max(N.height,B?.height??N.height)*l_;if(B&&F<=C){let _=Math.max(B.x+B.width,N.right);B.x=Math.min(B.x,N.left),B.y=Math.min(B.y,N.top),B.width=_-B.x,B.height=Math.max(B.height,N.height)}else B={x:N.left,y:N.top,width:N.width,height:N.height},R.push(B)}}return R},l=(b,E,R,k)=>{b.style.display="block",b.style.left=`${k.x-R.left}px`,b.style.top=`${k.y-R.top}px`,b.style.width=`${k.width}px`,b.style.height=`${k.height}px`,b.parentElement!==E&&E.appendChild(b)},d=()=>{for(let b of e)b.style.display="none";t&&(t.style.display="none"),r=null};return{paint:(b,E,R,k)=>{let B=b.closest(".pdf-page");if(!B)return null;let N=B.getBoundingClientRect(),F=c(Array.from($o(b,E[0],E[1]).getClientRects()));if(!k)return d(),F[0]??null;let C=B.dataset[a_]==="dark",_=C?W6.dark:W6.light,M=Array.from($o(b,R[0],R[1]).getClientRects());for(let $=0;$<F.length;$++){let Q=e[$]??(e[$]=i("pdf-sentence-highlight"));s(Q,_.sentence,C),l(Q,B,N,F[$])}for(let $=F.length;$<e.length;$++)e[$].style.display="none";let W=M[0];if(W&&W.width>0){t??=i("pdf-word-highlight"),s(t,_.word,C);let $=W.x-N.left,Q=W.y-N.top,V=r!==null&&t.parentElement===B&&Math.abs(Q-r.y)<W.height*.5&&$>=r.x;t.style.transition=V?u_:"none",l(t,B,N,{x:W.x,y:W.y,width:W.width,height:W.height}),r={x:$,y:Q,width:W.width,height:W.height}}else t&&(t.style.display="none",r=null);return F[0]??null},clear:d,destroy:()=>{for(let b of e)b.remove();e.length=0,t?.remove(),t=null,r=null}}}var n_,Tf,r_,o_,i_,Rc,s_,a_,W6,c_,z6,l_,u_,f_,Mc,wf,j6,p_,m_,Ef,Lj,Fr,Pj,_c=O(()=>{"use strict";p();m();Er();Vo();Fi();b2();x2();A2();An();rc();H2();lt();J2();t3();G3();z3();Q3();K3();bd();B6();F6();Cf();$6();G6();n_=e=>{let t=D6({fetchAudioFn:async(d,g,y,b)=>{let E=await Nr();return q3(_n.audioServer.baseUrl)(E,d,g,y,b)},...e?{fetchStreamingAudioFn:(d,g,y,b)=>new ReadableStream({async start(E){try{let R=await Nr(),B=W3(_n.audioServer.baseUrl)(R,d,g,y,b).getReader();for(;;){let{done:N,value:F}=await B.read();if(N)break;E.enqueue(F)}E.close()}catch(R){E.error(R)}}}),streamingAudioPlayerFn:Y3}:{},hdAudioPlayerFn:e3,localAudioPlayerFn:j3,predictDurationFn:V6},!1),r=null,i=null,s=t.machine.onContextChange("queue",()=>{i==null&&(i=setTimeout(()=>{i=null,Rc.setState(d=>({duration:{...d.duration,totalTime:t.controls.getTotalTime()}}))},250))}),c=t.machine.onStateChange((d,g)=>{Rc.setState({state:g}),g==="playing"&&!r?(Ya(),r=p_(t),Ad(!0),et("/content/stop-playback-all-tabs").catch(()=>{})):(g==="idle"||g==="paused"||g==="ended")&&(Mc(),r?.(),r=null,Ad(!1),Xi(0))}),l=Lt.subscribe(d=>({voice:d.voice,playbackSpeed:d.playbackSpeed,isReady:d.isReady}),async(d,g)=>{d.isReady||await Va(),d.playbackSpeed!==g.playbackSpeed&&d.playbackSpeed!==null&&t.controls.setSpeed(d.playbackSpeed),d.voice!==g.voice&&d.voice!==null&&t.controls.setVoice(q6(d.voice))},{equalityFn:(d,g)=>d.voice?.slug===g.voice?.slug&&d.voice?.name===g.voice?.name&&d.playbackSpeed===g.playbackSpeed&&d.isReady===g.isReady});return{orator:t,cleanup:()=>{Mc(),r?.(),r=null,c(),s(),i!=null&&clearTimeout(i),l()}}},Tf=St(()=>({orator:null,cleanup:()=>{}})),r_=async()=>{let e=!1;try{e=await Sf("ceStreamingSynthesis")==="adaptive"}catch{}Tf.setState(n_(e))},o_=r_(),i_=async()=>(await o_,Ef.getState().orator),Rc=St(()=>({state:"idle",duration:{totalTime:0,currentTime:0}}));window.onbeforeunload=()=>{Tf.getState().cleanup(),Fr()};"CSS"in globalThis&&"paintWorklet"in globalThis.CSS&&CSS.paintWorklet.addModule(chrome.runtime.getURL("houdini.js"));s_=location.pathname.includes("pdf-viewer"),a_="sfBackground",W6={light:{word:Do["hglt-prim"],sentence:Do["hglt-sec"]},dark:{word:ro["hglt-prim"],sentence:ro["hglt-sec"]}},c_=!0,z6=null,l_=1,u_="left 0.12s ease";({highlightElement:f_,removeHighlights:Mc}=Ed("sidepanelHighlighting",{highlightColor:{word:{light:v["hglt-prim"],dark:v["hglt-prim"]},sentence:{light:v["hglt-sec"],dark:v["hglt-sec"]}}})),wf=e=>window===e,j6=(e,t)=>{if(!R2())return;let{y:r}=e,i=r;wf(t)||(i-=t.getBoundingClientRect().top);let s=i-(wf(t)?window.innerHeight:t.clientHeight)/2,c=wf(t)?window.scrollY:t.scrollTop,l=Math.max(c+s,0);T2({top:l,behavior:"smooth"},{element:t})},p_=e=>{let t={element:null,sentenceIndex:{start:0,end:0},wordIndex:{start:0,end:0}},r=null,i=s_?d_():null,s=null,c=(y,b,E)=>{s&&s.element===y&&s.start===b&&s.end===E||(s={element:y,start:b,end:E},kd(y?y.textContent?.slice(b,E)??null:null))},l=()=>{if(!i)return;let{element:y,sentenceIndex:b,wordIndex:E}=t;if(!y){i.clear(),c(null,0,0);return}let R=i.paint(y,[b.start,b.end],[E.start,E.end],c_);if(c(y,E.start,E.end),R){let k=document.getElementById("scrollable-content");if(k){let B=k.getBoundingClientRect(),N=R.y-B.top+k.scrollTop;Xi(N),j6(R,k)}}},d=e.machine.onContextChange("currentPlaybackLocation",(y,b)=>{if(b?.currentPlaybackLocation){let{ref:E,sentenceCharIndex:R,wordCharIndex:k}=b.currentPlaybackLocation;t={element:E,sentenceIndex:R,wordIndex:k},l()}Rc.setState(E=>({duration:{...E.duration,currentTime:e.controls.getCurrentTime()}}))}),g=()=>{let{element:y,sentenceIndex:b,wordIndex:E}=t;if(Mc(),y){let R=y.closest(".textLayer")??y,{lineRect:k}=f_(y,[R],[b.start,b.end],[E.start,E.end],{rectOnly:!1})??{};if(k){let B=document.getElementById("scrollable-content");if(B){let N=B.getBoundingClientRect(),F=k.y-N.top+B.scrollTop;Xi(F),j6(k,B)}}c(y,E.start,E.end)}else c(null,0,0);r=requestAnimationFrame(g)};return i?(z6=l,l()):g(),()=>{Mc(),z6=null,i?.destroy(),d(),Xi(0),kd(null),r&&cancelAnimationFrame(r)}},m_=Rc,Ef=Tf,Lj=async e=>{let t=await i_(),{id:r}=m_.getState();if(!t||r===e)return;let i=t.machine.getState();if(i==="idle"||i==="paused")return;let s=new AbortController,c=new Promise(l=>{let d=()=>{l(),s.signal.removeEventListener("abort",d)};s.signal.addEventListener("abort",d);let g=t.machine.onStateChange((y,b)=>{(b==="idle"||b==="paused")&&(l(),g(),s.signal.removeEventListener("abort",d),s.abort())});Fr(),t.reset()});return Promise.race([c,new Promise(l=>{let d=setTimeout(()=>{s.abort(),l()},2e3),g=()=>{clearTimeout(d),s.signal.removeEventListener("abort",g),l()};s.signal.addEventListener("abort",g)})])},Fr=()=>{let e=Ef.getState();return e.orator?.controls.pause(),!!e.orator},Pj=()=>{Ic(),Ef.getState().orator?.controls.play()}});var Q6,Y6,g_,kf,Ac,Uj,Vj,K6=O(()=>{"use strict";p();m();Er();Na();Q6="cliff",Y6="sidepanel-selected-realtime-voice-id",g_=()=>{try{return globalThis?.localStorage?.getItem(Y6)||Q6}catch{return Q6}},kf=St()(kr(e=>({showTranscriptTopFade:!1,showTranscriptBottomFade:!1,isPermissionModalOpen:!1,selectedRealtimeVoiceId:g_(),setShowTranscriptTopFade:t=>{e({showTranscriptTopFade:t})},setShowTranscriptBottomFade:t=>{e({showTranscriptBottomFade:t})},setIsPermissionModalOpen:t=>{e({isPermissionModalOpen:t})},setSelectedRealtimeVoiceId:t=>{e({selectedRealtimeVoiceId:t});try{globalThis?.localStorage?.setItem(Y6,t)}catch{}}}))),Ac=kf,Uj=()=>kf(e=>({isOpen:e.isPermissionModalOpen,setIsOpen:e.setIsPermissionModalOpen})),Vj=()=>kf(e=>({selectedVoiceId:e.selectedRealtimeVoiceId,setSelectedVoiceId:e.setSelectedRealtimeVoiceId}))});var j_={};XT(j_,{addChatMessage:()=>O_,appendAssistantTranscript:()=>k_,appendChatMessage:()=>B_,clearOverlay:()=>q_,clearTranscripts:()=>w_,completeChatMessage:()=>F_,incrementVoiceModeUsage:()=>$_,pauseOpenAIAudio:()=>L_,registerOpenAIAudioControls:()=>R_,resumeOpenAIAudio:()=>P_,setConversationStatus:()=>v_,setCurrentAssistantTranscript:()=>E_,setCurrentResponseId:()=>I_,setCurrentUserTranscript:()=>T_,setInitializerPromise:()=>__,setIsActive:()=>y_,setIsClientInitializing:()=>A_,setIsInitializing:()=>h_,setIsPermissionModalOpen:()=>G_,setMaxVoiceModeUsageOfToday:()=>U_,setMuted:()=>C_,setOverlay:()=>If,setRealtimeClient:()=>M_,setRecording:()=>S_,setShowTranscriptBottomFade:()=>z_,setShowTranscriptTopFade:()=>W_,setStream:()=>x_,setVoiceModePermission:()=>b_,setVoiceModeUsageOfToday:()=>V_,stopVoiceMode:()=>as,updateChatMessageContent:()=>N_,updateChatMessageFeedback:()=>D_});var h_,y_,b_,x_,as,S_,C_,v_,w_,T_,E_,k_,I_,R_,M_,__,A_,L_,P_,O_,N_,D_,B_,F_,U_,V_,$_,If,q_,G_,W_,z_,Rf=O(()=>{p();m();io();cd();_c();Cf();Ui();K6();h_=e=>{Be.getState().setIsInitializing(e)},y_=e=>{Be.getState().setIsActive(e)},b_=e=>{Be.getState().setVoiceModePermission(e)},x_=e=>{Be.getState().setStream(e)},as=()=>{Be.getState().stopVoiceMode()},S_=(e,t)=>{Be.getState().setRecording(e,t)},C_=e=>{Be.getState().setMuted(e)},v_=e=>{Be.getState().setConversationStatus(e)},w_=()=>{Be.getState().clearTranscripts()},T_=e=>{Be.getState().setCurrentUserTranscript(e)},E_=e=>{Be.getState().setCurrentAssistantTranscript(e)},k_=e=>{Be.getState().appendAssistantTranscript(e)},I_=e=>{Be.getState().setCurrentResponseId(e)},R_=e=>{Be.getState().setOpenAIAudioControls(e)},M_=e=>{Be.getState().setRealtimeClient(e)},__=e=>{Be.setState({initializePromise:e})},A_=e=>{Be.setState({isClientInitializing:e})},L_=()=>{let{openAIAudioControls:e,openAIAudioState:t}=Be.getState();t==="playing"&&e&&e.pause()},P_=()=>{Ic();let{openAIAudioControls:e,openAIAudioState:t}=Be.getState();t==="paused"&&e&&(Fr(),e.resume())},O_=async e=>{let{currentUrl:t}=Z.getState();if(!t)return;let r=Date.now(),i={id:e.id,type:e.type,content:e.content,timestamp:r,updatedAt:r,sources:e.sources,status:e.status??(e.type==="user"?"completed":"streaming"),...e.type==="user"&&t?{targetUrl:t}:{}};await Fa(i)},N_=async(e,t)=>{await oo(e,{content:t})},D_=async(e,t)=>{await oo(e,{feedback:t})},B_=async(e,t)=>{let{currentSessionState:r}=Z.getState();if(!r)return;let i=r.messages.find(c=>c.id===e);if(!i)return;let s=i.content+t;await oo(e,{content:s})},F_=async e=>{await oo(e,{status:"completed"})},U_=e=>{Be.getState().setMaxVoiceModeUsageOfToday(e)},V_=e=>{Be.getState().setVoiceModeUsageOfToday(e)},$_=()=>{Be.getState().incrementVoiceModeUsage()},If=e=>{Be.getState().setOverlay(e)},q_=()=>{Be.getState().setOverlay(null)},G_=e=>{Ac.getState().setIsPermissionModalOpen(e)},W_=e=>{Ac.getState().setShowTranscriptTopFade(e)},z_=e=>{Ac.getState().setShowTranscriptBottomFade(e)}});var Z6,H6=O(()=>{"use strict";p();m();Z6=["/","/settings","/settings/profile","/settings/voice","/settings/speed","/settings/listening","/settings/playback","/settings/playback/voice","/settings/features","/settings/features/highlighting","/settings/features/click-to-listen","/settings/features/hover-to-listen","/settings/features/auto-scroll","/settings/shortcuts","/settings/accessibility","/settings/accessibility-shortcuts","/settings/help","/settings/assistant","/settings/voice-typing"]});function X6(e){let t=e.startsWith("/")?e:`/${e}`;return t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function J6(e,t){if(t.startsWith("/"))return X6(t);let r=e.split("/").filter(Boolean),i=t.split("/");for(let s of i)if(s==="..")r.pop();else{if(s==="."||s==="")continue;r.push(s)}return"/"+r.join("/")||"/"}function Lc(e){return Z6.includes(e)}function Yo(e){let t=X6(e);if(Lc(t))return t;let r=t.split("/").filter(Boolean);for(;r.length>0;){r.pop();let i="/"+r.join("/")||"/";if(Lc(i))return i}return"/"}var Pc,Mf=O(()=>{"use strict";p();m();H6();Pc="/"});async function cs(){try{let e=Ur();if(e.currentRoute===null)return;await et("/sidepanel/router-state-changed",{currentRoute:e.currentRoute,canGoBack:e.canGoBack,timestamp:Date.now()})}catch{}}var ey,ty,Q_,ls,Y_,Oc,_f,on,dQ,fQ,pQ,Ur,ny,ry,mQ,gQ,oy=O(()=>{"use strict";p();m();Er();Na();Rf();Ui();Fg();Mf();ey=50,ty=()=>[],Q_=1e3,ls=e=>e.length===0?null:e[e.length-1]?.path??Pc,Y_=e=>e.length<2?null:e[e.length-2]?.path??null,Oc=null,_f=!1,on=St()(kr((e,t)=>({history:ty(),isInitialized:!1,isPending:!0,chatOpenedViaExternalAction:!1,navigate:r=>{let{history:i,isPending:s}=t(),c=ls(i),l=_f;_f=!1,Oc&&(clearTimeout(Oc),Oc=null);let d=J6(c??Pc,r),g=Yo(d);if(!s&&g===c)return;let y={path:g,timestamp:Date.now()};e(b=>{let E=[...b.history,y];return E.length>ey&&(E=E.slice(-ey)),{history:E,isPending:!1,chatOpenedViaExternalAction:g==="/"?s||l:b.chatOpenedViaExternalAction}}),cs()},goBack:()=>{let{history:r}=t();r.length<=1||(e(i=>({history:i.history.slice(0,-1)})),cs())},replace:r=>{let{history:i}=t(),s=ls(i),c=Lc(r)?r:Yo(r);c!==s&&(e(l=>{let d=[...l.history];return d[d.length-1]={path:c,timestamp:Date.now()},{history:d}}),cs())},reset:()=>{e({history:ty()}),cs()},initialize:()=>{let{isInitialized:r,history:i}=t();r||(e({isInitialized:!0}),i.length===0&&(Oc=setTimeout(()=>{let{history:s,isPending:c}=t();c&&s.length===0&&t().navigate(Pc)},Q_)),cs())}}))),dQ=()=>{let e=on(t=>t.history);return ls(e)},fQ=()=>on(e=>e.isPending),pQ=()=>on(e=>({navigate:e.navigate,goBack:e.goBack,replace:e.replace,canGoBack:e.history.length>1})),Ur=()=>{let e=on.getState(),t=e.history;return{currentRoute:ls(t),canGoBack:t.length>1,previousRoute:Y_(t),historyLength:t.length,isInitialized:e.isInitialized,isPending:e.isPending}},ny=e=>{on.getState().navigate(e)},ry=()=>{on.getState().goBack()},mQ=e=>{_f=!0,on.getState().navigate(e)},gQ=()=>on(e=>e.chatOpenedViaExternalAction);on.subscribe(e=>ls(e.history),(e,t)=>{if(t==="/"&&e!=="/"&&e!==null){let{isActive:r}=Be.getState();r&&(If(null),as())}})});var Ln,Af,iy=O(()=>{"use strict";p();m();Ke();Ua();oy();Mf();Ln=be("RouterRoutes","cyan"),Af=_r("router",{navigate:async({target:e,replace:t=!1})=>{Ln.info("📨 Received navigation request:",{target:e,replace:t});try{let r=Yo(e);Ln.info("🎯 Resolved route:",{original:e,resolved:r}),t?on.getState().replace(r):ny(r);let i=Ur();return{success:!0,navigatedTo:i.currentRoute,originalTarget:e,wasResolved:e!==i.currentRoute}}catch(r){return Ln.error("❌ Navigation failed:",r),{success:!1,error:r instanceof Error?r.message:String(r)}}},"go-back":async()=>{Ln.info("📨 Received go-back request");try{let e=Ur();if(!e.canGoBack)return{success:!1,error:"Cannot go back - at beginning of history",currentRoute:e.currentRoute};ry();let t=Ur();return{success:!0,previousRoute:e.currentRoute,currentRoute:t.currentRoute}}catch(e){return Ln.error("❌ Go back failed:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"get-state":async()=>{Ln.info("📨 Received get-state request");try{return{success:!0,...Ur()}}catch(e){return Ln.error("❌ Get state failed:",e),{success:!1,currentRoute:"/",canGoBack:!1,error:e instanceof Error?e.message:String(e)}}},replace:async({target:e})=>{Ln.info("📨 Received replace request:",{target:e});try{let t=Yo(e);on.getState().replace(t);let r=Ur();return{success:!0,replacedWith:r.currentRoute,originalTarget:e,wasResolved:e!==r.currentRoute}}catch(t){return Ln.error("❌ Replace failed:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},reset:async()=>{Ln.info("📨 Received reset request");try{return on.getState().reset(),{success:!0,currentRoute:Ur().currentRoute}}catch(e){return Ln.error("❌ Reset failed:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}}})});function Lf(e){let t=Date.now(),r=e.filter(i=>t-i.timestamp<=72e5);return r.length>1e3&&(r=r.sort((i,s)=>s.timestamp-i.timestamp).slice(0,1e3).sort((i,s)=>i.timestamp-s.timestamp)),r}function sy(e,t){if(!t)return-1;for(let r=e.length-1;r>=0;r--)if(e[r].sessionId===t)return r;return-1}function ay(e,t,r){for(let i=e.length-1;i>=0;i--){let s=e[i];if(s.source===t&&!s.isFinal&&(r===void 0||s.sessionId===r))return i}return-1}var cy=O(()=>{"use strict";p();m()});var kt,Pf,K_,X,Of,Nf,Nc,Df,Bf,Kt=O(()=>{"use strict";p();m();Er();Na();Ke();cy();kt=be("ScribeStore","cyan"),Pf=()=>`transcript-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,K_=()=>`chat-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,X=St()(kr((e,t)=>({captureState:"idle",tabId:null,errorMessage:null,transcripts:[],chatMessages:[],isGeneratingResponse:!1,tabSpeechStarted:!1,micSpeechStarted:!1,tabAudioLevel:0,micAudioLevel:0,inputValue:"",isTranscriptOpen:!1,isOnSummarize:!1,isSummaryLoading:!1,isReconnecting:!1,summary:null,summaryError:null,savedFileId:null,savedFolderId:null,savedMeetingTitle:null,dynamicQuestions:[],isLoadingDynamicQuestions:!1,meetingContext:null,recordingStartTime:null,recordingEndTime:null,userQuestionHistory:[],lastQuestionGenerationTime:null,activeSpeakerName:null,userLabel:null,showCSATPopup:!1,showActivateNotetakerPopup:!1,csatPopupDismissed:!1,showNewMeetingToast:!1,showMeetingNotesReadyToast:!1,showEmailSentToast:!1,emailRecipientsCount:0,setCaptureState:r=>{kt.info("Setting capture state:",r),e({captureState:r})},setTabId:r=>{kt.info("Setting tab ID:",r),e({tabId:r})},setErrorMessage:r=>{r&&kt.error("Capture error:",r),e({errorMessage:r})},addTranscript:r=>{let i=t().transcripts,s=r.sessionId,c=s?sy(i,s):-1,l;if(c>=0)l=[...i],l[c]={...i[c],text:r.text,timestamp:Date.now()};else{let d={id:Pf(),source:r.source,text:r.text,timestamp:Date.now(),isFinal:!0,speakerName:t().activeSpeakerName||void 0,sessionId:s||void 0};l=[...i,d]}l=Lf(l),e({transcripts:l}),kt.debug(`[${r.source.toUpperCase()}] Adding transcript:`,r.text)},setTranscripts:r=>{let i=r.map(s=>({id:Pf(),source:s.source,text:s.text,timestamp:s.timestamp??Date.now(),isFinal:s.isFinal??!0,speakerName:s.speakerName??void 0,sessionId:s.sessionId??void 0}));e({transcripts:Lf(i)}),kt.info(`Hydrated ${i.length} transcripts`)},updatePartialTranscript:(r,i,s)=>{e(c=>{let l=[...c.transcripts],d=ay(l,r,s);if(d>=0){let y=[...l];return y[d]={...l[d],text:i,timestamp:Date.now()},{transcripts:y}}let g={id:Pf(),source:r,text:i,timestamp:Date.now(),isFinal:!1,speakerName:t().activeSpeakerName||void 0,sessionId:s||void 0};return{transcripts:[...l,g]}})},clearTranscripts:()=>{kt.info("Clearing all transcripts"),e({transcripts:[]})},setActiveSpeakerName:r=>{kt.info("Setting active speaker:",r),e({activeSpeakerName:r})},setShowActivateNotetakerPopup:r=>{e({showActivateNotetakerPopup:r})},reset:()=>{kt.info("Resetting scribe store"),e({captureState:"idle",tabId:null,errorMessage:null,transcripts:[],chatMessages:[],isGeneratingResponse:!1,dynamicQuestions:[],isLoadingDynamicQuestions:!1,meetingContext:null,recordingStartTime:null,recordingEndTime:null,userQuestionHistory:[],lastQuestionGenerationTime:null,isSummaryLoading:!1,isReconnecting:!1,summary:null,summaryError:null,savedFileId:null,savedFolderId:null,savedMeetingTitle:null,tabAudioLevel:0,micAudioLevel:0})},setInputValue:r=>{e({inputValue:r})},setIsTranscriptOpen:r=>{e({isTranscriptOpen:r})},setIsOnSummarize:r=>{e({isOnSummarize:r})},setIsSummaryLoading:r=>{e({isSummaryLoading:r})},setIsReconnecting:r=>{e({isReconnecting:r})},setSummary:r=>{e({summary:r})},appendSummary:r=>{e(i=>({summary:(i.summary||"")+r}))},setSummaryError:r=>{e({summaryError:r})},setSavedFileId:r=>{e({savedFileId:r})},setSavedFolderId:r=>{e({savedFolderId:r})},setSavedMeetingTitle:r=>{e({savedMeetingTitle:r})},addChatMessage:r=>{let i=K_(),s={...r,id:i,timestamp:Date.now()};return kt.debug(`Adding chat message [${r.type}]:`,r.content.substring(0,50)),e(c=>({chatMessages:[...c.chatMessages,s]})),i},updateChatMessage:(r,i)=>{e(s=>({chatMessages:s.chatMessages.map(c=>c.id===r?{...c,content:i}:c)}))},setChatMessageStreaming:(r,i)=>{e(s=>({chatMessages:s.chatMessages.map(c=>c.id===r?{...c,isStreaming:i}:c)}))},clearChatMessages:()=>{kt.info("Clearing all chat messages"),e({chatMessages:[]})},setIsGeneratingResponse:r=>{e({isGeneratingResponse:r})},setDynamicQuestions:r=>{kt.debug("Setting dynamic questions:",r.length),e({dynamicQuestions:r})},setIsLoadingDynamicQuestions:r=>{e({isLoadingDynamicQuestions:r})},clearDynamicQuestions:()=>{kt.debug("Clearing dynamic questions"),e({dynamicQuestions:[],isLoadingDynamicQuestions:!1})},setMeetingContext:r=>{e({meetingContext:r})},setRecordingStartTime:r=>{kt.debug("Setting recording start time:",r),e({recordingStartTime:r})},setRecordingEndTime:r=>{kt.debug("Setting recording end time:",r),e({recordingEndTime:r})},addUserQuestion:r=>{kt.debug("Adding user question to history:",r),e(i=>({userQuestionHistory:[...i.userQuestionHistory,r].slice(-10)}))},clearUserQuestionHistory:()=>{kt.debug("Clearing user question history"),e({userQuestionHistory:[]})},setLastQuestionGenerationTime:r=>{e({lastQuestionGenerationTime:r})},setUserLabel:r=>{e({userLabel:r})},setShowCSATPopup:r=>{e(r?{showCSATPopup:r}:{showCSATPopup:r,csatPopupDismissed:!0})},setShowNewMeetingToast:r=>{e({showNewMeetingToast:r})},setShowMeetingNotesReadyToast:r=>{e({showMeetingNotesReadyToast:r})},setTabSpeechStarted:r=>{e({tabSpeechStarted:r})},setMicSpeechStarted:r=>{e({micSpeechStarted:r})},setTabAudioLevel:r=>{e({tabAudioLevel:r})},setMicAudioLevel:r=>{e({micAudioLevel:r})},setShowEmailSentToast:r=>{e({showEmailSentToast:r})},setEmailRecipientsCount:r=>{e({emailRecipientsCount:r})}}))),Of=()=>X(e=>e.captureState),Nf=()=>X(e=>e.errorMessage),Nc=()=>X(e=>e.transcripts.some(t=>t.text.trim().length>0)),Df=()=>X(e=>e.chatMessages),Bf=()=>X(e=>e.isGeneratingResponse)});function H_(e){if(!e)return null;let t=/meet\.google\.com\/([a-z]{3}-[a-z]{4}-[a-z]{3})/,r=e.match(t);return r?r[1]:null}async function X_(e){if(e!==void 0&&e===Ff&&Ko)return Ko;if(e!==void 0)try{let t=await w.tabs.get(e),r=H_(t.url);if(r)return Ko=r,Ff=e,r}catch(t){cr.warn("Failed to get tab URL for meeting_id:",t)}return Ko||(Ko=`session-${Z_()}`,Ff=e??null),Ko}async function Vr(e){return{meeting_id:await X_(e),meeting_provider:"google_meet",app_platform:"desktop_extension"}}async function ly(e,t){let i={...await Vr(t),generation_latency_ms:e};Dc?await Dc("Meeting Transcript Ready",i):cr.warn("Analytics logger not initialized. Event not logged:","Meeting Transcript Ready")}async function Uf(e,t){let i={...await Vr(t),generation_latency_ms:e};Dc?await Dc("Meeting Summary Ready",i):cr.warn("Analytics logger not initialized. Event not logged:","Meeting Summary Ready")}function Zo(e,t){return new Promise((r,i)=>{w.runtime.sendMessage({path:"meeting-capture/log-event",request:{body:{eventName:e,properties:t},meta:{}},hash:Math.random().toString(36).substring(7),isHermes:!0},()=>{w.runtime.lastError?i(w.runtime.lastError):r()})})}async function uy(e){let t=await Vr(e);try{await Zo("Meeting Transcript Viewed",t)}catch(r){cr.error("Failed to log Meeting Transcript Viewed:",r)}}async function dy(e){let t=await Vr(e);try{await Zo("Meeting Summary Viewed",t)}catch(r){cr.error("Failed to log Meeting Summary Viewed:",r)}}async function fy(e,t,r,i,s){let l={...await Vr(s),question_id:e,question_text:t,question_type:r,predefined_question_key:i};try{await Zo("Meeting Question Asked",l)}catch(d){cr.error("Failed to log Meeting Question Asked:",d)}}async function Vf(e,t,r,i,s){let l={...await Vr(s),question_id:e,answer_latency_ms:t,answer_success:r,error_code:i};try{await Zo("Meeting Answer Viewed",l)}catch(d){cr.error("Failed to log Meeting Answer Viewed:",d)}}async function py(e,t){let i={...await Vr(t),rating:e};try{await Zo("Meeting Capture Rated",i)}catch(s){cr.error("Failed to log Meeting Capture Rated:",s)}}async function my(e,t,r,i){let c={...await Vr(i),rating:e,feedback_text:t.trim()||null,feedback_options:r,has_feedback_text:t.trim().length>0,feedback_options_count:r.length};try{await Zo("Meeting Feedback Submitted",c)}catch(l){cr.error("Failed to log Meeting Feedback Submitted:",l)}}var cr,Z_,Ko,Ff,Dc,po=O(()=>{"use strict";p();m();oE();Ke();cr=be("ScribeAnalytics","purple"),Z_=()=>crypto.randomUUID();Ko=null,Ff=null;Dc=null});function hy(){let e=(0,$r.useRef)(null),t=(0,$r.useRef)(null),r=(0,$r.useRef)(null),i=(0,$r.useRef)(null),s=(0,$r.useCallback)(()=>{e.current?.abort(),e.current=null;let l=X.getState();t.current&&l.setChatMessageStreaming(t.current,!1),l.setIsGeneratingResponse(!1),t.current=null},[]);return{sendMessage:(0,$r.useCallback)(async(l,d)=>{let g=X.getState();if(g.isGeneratingResponse){Bc.debug("[REST] Already generating a response, skipping");return}e.current&&(e.current.abort(),e.current=null),r.current=Date.now(),i.current=d?.questionId||null,g.setIsGeneratingResponse(!0);let y=g.addChatMessage({type:"assistant",content:"",isStreaming:!0});t.current=y,g.setChatMessageStreaming(y,!0);let b=new AbortController;e.current=b;let E=setTimeout(()=>b.abort(),J_);try{let R=await Nr(),k={prompt:`${eA}

${l}`,model:"gpt-4.1-mini",stream:!0};d?.model&&(k.model=d.model);let B=await fetch(`${_n.voiceTyping.url}/ai-scribe-conversation`,{method:"POST",body:JSON.stringify(k),headers:{Authorization:`Bearer ${R}`,"Content-Type":"application/json","X-Speechify-Client":"DesktopExtension"},signal:b.signal});if(clearTimeout(E),e.current=null,!B.ok){let M=await B.text().catch(()=>"");throw new Error(`HTTP ${B.status}: ${B.statusText}${M?` - ${M}`:""}`)}if(!B.body)throw new Error("No response body available for streaming");let N=B.body.getReader(),F=new TextDecoder,C="",_="";try{for(;;){let{done:M,value:W}=await N.read();W&&(_+=F.decode(W,{stream:!0}));let $=_.indexOf(`

`);for(;$!==-1;){let Q=_.slice(0,$);_=_.slice($+2);let V=gy(Q);V!=null&&V.length>0&&(C+=V,t.current&&g.updateChatMessage(t.current,C)),$=_.indexOf(`

`)}if(M){if(_.trim()){let Q=gy(_);Q!=null&&Q.length>0&&(C+=Q,t.current&&g.updateChatMessage(t.current,C))}break}}}finally{N.releaseLock()}if(t.current&&g.setChatMessageStreaming(t.current,!1),g.setIsGeneratingResponse(!1),i.current&&r.current){let M=Date.now()-r.current;Vf(i.current,M,!0,null,g.tabId||void 0).catch(W=>{Bc.error("Failed to log Meeting Answer Viewed event:",W)})}t.current=null,r.current=null,i.current=null}catch(R){clearTimeout(E),e.current=null;let k=R instanceof Error?R:new Error(String(R)),B=k.name==="AbortError",N=B?"Request timed out. Please try again.":`Error: ${k.message}`,F=B?"timeout":"request_failed";if(Bc.error("[REST] Conversation request failed:",k),g.setIsGeneratingResponse(!1),t.current&&(g.updateChatMessage(t.current,N),g.setChatMessageStreaming(t.current,!1)),i.current&&r.current){let C=Date.now()-r.current;Vf(i.current,C,!1,F,g.tabId||void 0).catch(_=>{Bc.error("Failed to log Meeting Answer Viewed event:",_)})}t.current=null,r.current=null,i.current=null}},[]),disconnect:s,getCurrentMessageId:()=>t.current}}var $r,Bc,J_,eA,gy,yy=O(()=>{"use strict";p();m();$r=Ee(De());Vo();rc();Ke();Kt();po();Bc=be("OpenAIRestClient","green"),J_=3e4,eA=`You are a helpful meeting assistant. You have access to a live transcript of a meeting or video.

CRITICAL: Answer questions using 3-4 bullet points maximum. Synthesize and combine related ideas into single bullets rather than listing every detail separately.

Example of a GOOD response to "What did I miss about the product features?":
"- Three new features were introduced: artifacts, skills, and document generation, all aimed at improving productivity
- The speaker demonstrated how artifacts can be customized and shared across teams
- Skills allow you to train the system for specific tasks"

Example of a BAD response (too granular, too many bullets):
"- The speaker introduced new features
- The first feature is artifacts
- Artifacts are customizable
- Artifacts are shareable
- The second feature is skills
- Skills train the system"

Combine the essence of related ideas into single, meaningful bullets. No preambles like "Based on the transcript..."`,gy=e=>{let t=e.split(`
`),r=[];for(let i of t)i.startsWith("data: ")&&r.push(i.slice(6));return r.length===0?null:r.join(`
`)}});function qf(){let e=(0,us.useCallback)((s,c=!1)=>{let l=s.filter(d=>d.text.trim().length>0);if(c){let d=Date.now();l=l.filter(g=>d-g.timestamp<=by)}return l.length===0?null:l.map(d=>`[${d.source==="tab"?d.speakerName||"Other Speaker":"Me"}]: ${d.text}`).join(`

`)},[]),t=(0,us.useCallback)((s,c=by)=>{let l=Date.now();return s.filter(d=>d.text.trim().length>0&&l-d.timestamp<=c)},[]),r=(0,us.useCallback)(s=>{let c=e(s,!0);if(!c){let l=t(s,tA);l.length>0&&(c=l.map(d=>`[${d.source==="tab"?"Other Speaker":"User"}]: ${d.text}`).join(`

`))}return c||(c=e(s,!1)),c},[e,t]),i=(0,us.useCallback)(s=>{let c=e(s,!1),l=t(s,$f),d=null;if(l.length>0)d=l.map(g=>`[${g.source==="tab"?"Meeting Audio":"User"}]: ${g.text}`).join(`

`);else if(c)if(c.length>800){let g=c.length-800,y=c.indexOf(" ",g);d=c.slice(y>0?y+1:g)}else d=c;return{fullTranscript:c,recentTranscript:d}},[e,t]);return{formatTranscripts:e,getRecentTranscripts:t,formatForWhatDidIMiss:r,formatForMakeMeSoundSmart:i}}var us,by,tA,$f,Fc=O(()=>{"use strict";p();m();us=Ee(De()),by=30*1e3,tA=120*1e3,$f=60*1e3});function Gf(e,t,r){let i=ds[e];return t?i.needsRecentContext&&r?i.getPrompt(t,r):i.getPrompt(t):(nA.debug(`[PredefinedQuestions] No transcript content for question: ${e}`),null)}var nA,ds,Wf=O(()=>{"use strict";p();m();Ke();Fc();nA=be("PredefinedQuestions","green"),ds={"what-did-i-miss":{label:"What did I miss?",getPrompt:e=>`I wasn't paying attention recently. Here's what was said:

${e}

Summarize what I missed in 3-5 bullet points.

REQUIRED FORMAT (each bullet on its own line):
- **Topic**: One sentence summary
- **Topic**: One sentence summary

Focus on decisions, action items, and important updates.

If what was said is too short, you can say "There isn't too much information to summarize now. You can ask me when there is more information."
`},"summarize-meeting":{label:"Summarize the meeting so far",getPrompt:e=>`Here's the meeting transcript so far:

${e}

Provide a structured summary. REQUIRED FORMAT:

**Key Points:**
- Point one
- Point two

**Decisions:**
- Decision one

**Action Items:**
- **Person**: Task

Keep it concise. Skip empty sections. Each bullet MUST be on its own line.`},"make-me-sound-smart":{label:"Make me sound smart",needsRecentContext:!0,getPrompt:(e,t)=>`You are helping someone contribute meaningfully in a live meeting.

      FULL MEETING CONTEXT:
      ${e}

      LAST ~${$f/1e3} SECONDS OF DISCUSSION:
      ${t||e}

      INSTRUCTIONS:
      First, silently analyze:
      - What is the current topic or decision being discussed?
      - What positions or opinions have been stated?
      - What hasn't been addressed, questioned, or resolved?
      - Are there any assumptions being made that could be challenged?
      - Are there connections to earlier parts of the meeting that nobody has drawn?

      Then generate exactly 3 suggestions, one in each category:

      **Ask:** A specific, incisive question that surfaces something 
      the group hasn't considered. Reference specific details from the 
      conversation.

      **Suggest:** A concrete recommendation or next step related to 
      what's being discussed. Be specific, not generic.

      **Connect:** A point that ties the current discussion to something 
      mentioned earlier in the meeting, a broader trend, or a potential 
      implication the group may be overlooking.

      RULES:
      - Each suggestion should be 1 sentence max, written as a brief idea/angle, not a script to read verbatim. Avoid long sentence.
      - Use specific names, numbers, and details from the transcript
      - Never be generic. If you can't reference something specific from the discussion, the suggestion isn't good enough
      - If there isn't enough context yet, say so briefly`}}});function Ho(e){let t=hy(),r=t.disconnect,{formatTranscripts:i,formatForWhatDidIMiss:s,formatForMakeMeSoundSmart:c}=qf(),l=(0,fs.useCallback)(async(b,E,R="custom",k)=>{let B=X.getState(),N=crypto.randomUUID();if(B.addChatMessage({type:"user",content:b}),B.addUserQuestion(b),fy(N,b,R,k||null,B.tabId||void 0).catch(C=>{Sn.error("Failed to log Meeting Question Asked event:",C)}),!E){B.addChatMessage({type:"assistant",content:"No transcript available yet. Please wait for some conversation to happen."});return}let F=`${E}

User question: ${b}`;Sn.debug("=".repeat(60)),Sn.debug("[ScribeChat] FULL PROMPT BEING SENT TO AI:"),Sn.debug("=".repeat(60)),Sn.debug(F),Sn.debug("=".repeat(60)),await t.sendMessage(F,{questionId:N})},[e?.model,t]),d=(0,fs.useCallback)(async b=>{let E=X.getState(),{transcripts:R}=E,k=ds[b],B=null,N=null;if(b==="what-did-i-miss")B=s(R);else if(b==="make-me-sound-smart"){let C=c(R);B=C.fullTranscript,N=C.recentTranscript}else B=i(R,!1);Sn.debug(`[ScribeChat] Predefined question: "${k.label}"`),Sn.debug(`[ScribeChat] Total transcripts in store: ${R.length}`),Sn.debug(`[ScribeChat] Transcript content length: ${B?.length||0} chars`);let F=Gf(b,B,N||void 0);await l(k.label,F,"predefined",b)},[i,s,c,l]),g=(0,fs.useCallback)(async b=>{let E=X.getState(),{transcripts:R}=E,k=i(R,!1);Sn.debug(`[ScribeChat] Custom question: "${b}"`),Sn.debug(`[ScribeChat] Total transcripts in store: ${R.length}`),Sn.debug(`[ScribeChat] Transcript content length: ${k?.length||0} chars`);let B=k?`Here's the meeting transcript for context:

${k}`:null;await l(b,B)},[i,l]),y=(0,fs.useCallback)(()=>{X.getState().clearChatMessages(),r()},[r]);return{askPredefinedQuestion:d,askCustomQuestion:g,clearChat:y,predefinedQuestions:ds}}var fs,Sn,mo,Uc=O(()=>{"use strict";p();m();fs=Ee(De());Ke();Kt();yy();Fc();Wf();po();Sn=be("ScribeChat","green");mo=[{type:"what-did-i-miss",label:"What did I miss?"},{type:"make-me-sound-smart",label:"What can I ask?"}]});var gY,xy=O(()=>{"use strict";p();m();Ke();An();gY=be("OpenAI-Text-Client","green")});var SY,Sy=O(()=>{"use strict";p();m();Ke();SY=be("ContextExtractor","orange")});var Cy=O(()=>{"use strict";p();m()});var vy=O(()=>{"use strict";p();m();xy();Sy();Cy()});var aA,GY,wy=O(()=>{"use strict";p();m();aA=Ee(De());Vo();rc();Ke();vy();Kt();GY=be("TranscriptQuestions","purple")});var Ty=O(()=>{"use strict";p();m();Uc();wy();Fc();Wf()});function Ey(e,t){let r=null,i=null,s=(...c)=>{i=c,r&&clearTimeout(r),r=setTimeout(()=>{i&&(e(...i),i=null),r=null},t)};return s.cancel=()=>{r&&(clearTimeout(r),r=null),i=null},s.flush=()=>{r&&i&&(clearTimeout(r),e(...i),i=null,r=null)},s}var ky=O(()=>{"use strict";p();m()});function Iy(e){let t=new Map,i=Ey(()=>{for(let s of t.values())e(s.source,s.text,s.sessionId);t.clear()},lA);return(s,c,l)=>{let d=`${s}-${l||"default"}`;t.set(d,{source:s,text:c,sessionId:l}),i()}}var lA,Ry=O(()=>{"use strict";p();m();ky();lA=100});var zf,My=O(()=>{"use strict";p();m();An();zf=async e=>{let t=await w.tabs.query({active:!0,currentWindow:!0}),r=e?t.find(s=>s.id===e):t[0],i=r?.title||"Important Meeting";await et("/meeting-capture/start",{tabId:r?.id??e,tabTitle:i})}});var Ge,uA,dA,lr,jf,Qf,Vc,_y=O(()=>{"use strict";p();m();An();Ke();Ua();Kt();Ry();po();io();My();Ge=be("ScribeRoutes","cyan"),uA=(e,t)=>{let r=X.getState();if(["recording","starting"].includes(r.captureState))return;r.setSavedFileId(e),r.setSavedFolderId(t);let i=Z.getState().currentUrlMetadata?.tabId;(!(r.tabId&&i===r.tabId)||!r.isOnSummarize)&&r.setShowMeetingNotesReadyToast(!0)},dA=async(e,t)=>{let r=!1;try{r=await et("/library/wait-item-ready",{itemId:e})}catch(i){Ge.warn("[ScribeRoutes] Failed to wait for meeting note readiness:",i)}r||Ge.warn("[ScribeRoutes] Meeting note did not reach ready status in time, revealing anyway:",e),uA(e,t)},lr=null,jf="idle",Qf=null,Vc=_r("scribe",{"transcript-update":async({source:e,transcript:t,isFinal:r,sessionId:i})=>{Ge.info(`[ScribeRoutes] [${e.toUpperCase()}] Transcript update:`,{isFinal:r,length:t.length,preview:t.substring(0,50),sessionId:i});try{let s=X.getState();return r?(s.addTranscript({source:e,text:t,isFinal:!0,sessionId:i||void 0}),Ge.info(`[ScribeRoutes] Added final transcript, total: ${s.transcripts.length+1}`)):(Qf||(Qf=Iy((c,l,d)=>{X.getState().updatePartialTranscript(c,l,d)})),Qf(e,t,i||void 0)),{success:!0}}catch(s){return Ge.error("Failed to process transcript update:",s),{success:!1,error:s instanceof Error?s.message:String(s)}}},"capture-state-change":async({state:e,tabId:t,error:r})=>{Ge.info("[ScribeRoutes] Capture state change:",{state:e,tabId:t,error:r});try{let i=X.getState();if((jf==="recording"||jf==="stopping")&&e==="idle"&&(i.setIsOnSummarize(!0),Ge.info("[ScribeRoutes] Capture stopped, showing summarization")),i.setCaptureState(e),Ge.info("[ScribeRoutes] State updated to:",e),t!==void 0&&i.setTabId(t),r?r.includes("Extension has not been invoked for the current page")?i.setShowActivateNotetakerPopup(!0):i.setErrorMessage("Please try reopening the sidepanel"):(e==="recording"||e==="idle")&&(i.setShowActivateNotetakerPopup(!1),i.setErrorMessage(null)),["recording","starting"].includes(e)&&(i.setIsOnSummarize(!1),i.setShowActivateNotetakerPopup(!1)),e==="recording"){i.clearTranscripts(),i.clearChatMessages(),i.setSummary(null),i.setSummaryError(null),i.setSavedFileId(null),i.setSavedFolderId(null),i.setRecordingStartTime(Date.now());let s=Z.getState().currentUrlMetadata;if(s?.title){let c=s.title.replace("Meet - ","");i.setSavedMeetingTitle(c),Ge.info("[ScribeRoutes] Saved meeting title:",c)}else i.setSavedMeetingTitle("Important Meeting"),Ge.info("[ScribeRoutes] No title found, using default");Ge.info("[ScribeRoutes] Cleared transcripts, summary, and reset view for new session")}return e==="stopping"&&(i.setRecordingEndTime(Date.now()),i.setIsSummaryLoading(!0),i.setSummaryError(null),i.setIsTranscriptOpen(!1),i.clearTranscripts(),i.clearChatMessages(),lr=Date.now(),Ge.info("[ScribeRoutes] Capture stopping, waiting for meeting summary from offscreen")),(e==="idle"||e==="stopping")&&i.transcripts.length>0&&ly(0,i.tabId||void 0).catch(s=>{Ge.error("Failed to log Meeting Transcript Ready event:",s)}),jf=e,{success:!0}}catch(i){return Ge.error("Failed to process capture state change:",i),{success:!1,error:i instanceof Error?i.message:String(i)}}},reset:async()=>{Ge.info("Resetting scribe state");try{return X.getState().reset(),{success:!0}}catch(e){return Ge.error("Failed to reset scribe state:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"speech-start":async({source:e})=>{Ge.info("[ScribeRoutes] Speech start requested:",e);let t=X.getState();return e==="tab"?t.setTabSpeechStarted(!0):t.setMicSpeechStarted(!0),{success:!0}},"speech-end":async({source:e})=>{Ge.info("[ScribeRoutes] Speech end requested:",e);let t=X.getState();return e==="tab"?t.setTabSpeechStarted(!1):t.setMicSpeechStarted(!1),{success:!0}},"audio-level-update":async({source:e,level:t})=>{let r=X.getState(),i=Math.max(0,Math.min(100,Math.round(t)));return e==="tab"?r.setTabAudioLevel(i):r.setMicAudioLevel(i),{success:!0}},"meeting-summarization-result":async({summary:e,error:t,done:r})=>{let i=X.getState();if(Ge.info("[ScribeRoutes] Meeting summarization result received"),t)return i.setIsSummaryLoading(!1),Ge.warn("[ScribeRoutes] Meeting summarization failed:",t),i.setSummaryError(t),lr=null,{success:!1,error:t};if(r){if(i.setIsSummaryLoading(!1),i.setSummaryError(null),Ge.info("[ScribeRoutes] Meeting summarization streaming complete"),lr){let c=Date.now()-lr;Uf(c,i.tabId||void 0).catch(l=>{Ge.error("Failed to log Meeting Summary Ready event:",l)}),lr=null}return{success:!0,done:!0}}if(e&&e.trim().length>0){if(i.setIsSummaryLoading(!1),i.setSummary(e),i.setSummaryError(null),lr){let c=Date.now()-lr;Uf(c,i.tabId||void 0).catch(l=>{Ge.error("Failed to log Meeting Summary Ready event:",l)}),lr=null}return{success:!0,summary:e}}let s="Empty summary received from summarization service";return i.setIsSummaryLoading(!1),Ge.warn("[ScribeRoutes] "+s),i.setSummaryError(s),lr=null,{success:!1,error:s}},"meeting-summarization-chunk":async({chunk:e,replace:t})=>{let r=X.getState();return e&&e.length>0&&(t?r.setSummary(e):r.appendSummary(e)),{success:!0}},"meeting-summarization-reconnecting":async({isReconnecting:e})=>{let t=X.getState();return Ge.info("[ScribeRoutes] Summarization reconnecting:",e),t.setIsReconnecting(e),e&&t.setSummaryError(null),{success:!0}},"update-active-speaker":async({speaker:e})=>(X.getState().setActiveSpeakerName(e),{success:!0}),"update-user-label":async({userLabel:e})=>(X.getState().setUserLabel(e),{success:!0}),"update-summary-loading":async({isLoading:e})=>(X.getState().setIsSummaryLoading(e),{success:!0}),"meeting-item-saved":async({fileId:e,folderId:t})=>(Ge.info("[ScribeRoutes] Meeting item saved:",{fileId:e,folderId:t}),dA(e,t).catch(r=>{Ge.error("[ScribeRoutes] Failed to verify meeting note status:",r)}),{success:!0}),"meeting-started":async(e,t)=>{let r=X.getState(),i=t.meta?.tabId;return r.isOnSummarize?r.setShowNewMeetingToast(!0):r.captureState==="idle"&&(Ge.info("[ScribeRoutes] New meeting started - starting capture",{tabId:i}),zf(i)),{success:!0}},"meeting-focused":async(e,t)=>{let r=X.getState(),i=t.meta?.tabId;return!r.isOnSummarize&&r.captureState==="idle"&&(Ge.info("[ScribeRoutes] Meeting page focused and idle - starting capture",{tabId:i}),zf(i)),{success:!0}}})});var Yf=ee((Xo,ps)=>{"use strict";p();m();(function(){var e,t="4.18.1",r=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",l="Invalid `imports` option passed into `_.template`",d="__lodash_hash_undefined__",g=500,y="__lodash_placeholder__",b=1,E=2,R=4,k=1,B=2,N=1,F=2,C=4,_=8,M=16,W=32,$=64,Q=128,V=256,oe=512,de=30,se="...",J=800,Ie=16,Se=1,K=2,pe=3,le=1/0,me=9007199254740991,ce=17976931348623157e292,fe=NaN,Ce=4294967295,Ze=Ce-1,te=Ce>>>1,Re=[["ary",Q],["bind",N],["bindKey",F],["curry",_],["curryRight",M],["flip",oe],["partial",W],["partialRight",$],["rearg",V]],Le="[object Arguments]",we="[object Array]",Ve="[object AsyncFunction]",it="[object Boolean]",nt="[object Date]",Rt="[object DOMException]",Ft="[object Error]",Ut="[object Function]",Zt="[object GeneratorFunction]",He="[object Map]",Vt="[object Number]",On="[object Null]",$t="[object Object]",Yn="[object Promise]",Nn="[object Proxy]",mr="[object RegExp]",qt="[object Set]",Kn="[object String]",hi="[object Symbol]",zs="[object Undefined]",yi="[object WeakMap]",S8="[object WeakSet]",bi="[object ArrayBuffer]",vo="[object DataView]",Ul="[object Float32Array]",Vl="[object Float64Array]",$l="[object Int8Array]",ql="[object Int16Array]",Gl="[object Int32Array]",Wl="[object Uint8Array]",zl="[object Uint8ClampedArray]",jl="[object Uint16Array]",Ql="[object Uint32Array]",C8=/\b__p \+= '';/g,v8=/\b(__p \+=) '' \+/g,w8=/(__e\(.*?\)|\b__t\)) \+\n'';/g,e1=/&(?:amp|lt|gt|quot|#39);/g,t1=/[&<>"']/g,T8=RegExp(e1.source),E8=RegExp(t1.source),k8=/<%-([\s\S]+?)%>/g,I8=/<%([\s\S]+?)%>/g,n1=/<%=([\s\S]+?)%>/g,R8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M8=/^\w*$/,_8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yl=/[\\^$.*+?()[\]{}|]/g,A8=RegExp(Yl.source),Kl=/^\s+/,L8=/\s/,P8=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,O8=/\{\n\/\* \[wrapped with (.+)\] \*/,N8=/,? & /,D8=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r1=/[()=,{}\[\]\/\s]/,B8=/\\(\\)?/g,F8=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,o1=/\w*$/,U8=/^[-+]0x[0-9a-f]+$/i,V8=/^0b[01]+$/i,$8=/^\[object .+?Constructor\]$/,q8=/^0o[0-7]+$/i,G8=/^(?:0|[1-9]\d*)$/,W8=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,js=/($^)/,z8=/['\n\r\u2028\u2029\\]/g,Qs="\\ud800-\\udfff",j8="\\u0300-\\u036f",Q8="\\ufe20-\\ufe2f",Y8="\\u20d0-\\u20ff",i1=j8+Q8+Y8,s1="\\u2700-\\u27bf",a1="a-z\\xdf-\\xf6\\xf8-\\xff",K8="\\xac\\xb1\\xd7\\xf7",Z8="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",H8="\\u2000-\\u206f",X8=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c1="A-Z\\xc0-\\xd6\\xd8-\\xde",l1="\\ufe0e\\ufe0f",u1=K8+Z8+H8+X8,Zl="['’]",J8="["+Qs+"]",d1="["+u1+"]",Ys="["+i1+"]",f1="\\d+",e7="["+s1+"]",p1="["+a1+"]",m1="[^"+Qs+u1+f1+s1+a1+c1+"]",Hl="\\ud83c[\\udffb-\\udfff]",t7="(?:"+Ys+"|"+Hl+")",g1="[^"+Qs+"]",Xl="(?:\\ud83c[\\udde6-\\uddff]){2}",Jl="[\\ud800-\\udbff][\\udc00-\\udfff]",wo="["+c1+"]",h1="\\u200d",y1="(?:"+p1+"|"+m1+")",n7="(?:"+wo+"|"+m1+")",b1="(?:"+Zl+"(?:d|ll|m|re|s|t|ve))?",x1="(?:"+Zl+"(?:D|LL|M|RE|S|T|VE))?",S1=t7+"?",C1="["+l1+"]?",r7="(?:"+h1+"(?:"+[g1,Xl,Jl].join("|")+")"+C1+S1+")*",o7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",v1=C1+S1+r7,s7="(?:"+[e7,Xl,Jl].join("|")+")"+v1,a7="(?:"+[g1+Ys+"?",Ys,Xl,Jl,J8].join("|")+")",c7=RegExp(Zl,"g"),l7=RegExp(Ys,"g"),eu=RegExp(Hl+"(?="+Hl+")|"+a7+v1,"g"),u7=RegExp([wo+"?"+p1+"+"+b1+"(?="+[d1,wo,"$"].join("|")+")",n7+"+"+x1+"(?="+[d1,wo+y1,"$"].join("|")+")",wo+"?"+y1+"+"+b1,wo+"+"+x1,i7,o7,f1,s7].join("|"),"g"),d7=RegExp("["+h1+Qs+i1+l1+"]"),f7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,p7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],m7=-1,Ye={};Ye[Ul]=Ye[Vl]=Ye[$l]=Ye[ql]=Ye[Gl]=Ye[Wl]=Ye[zl]=Ye[jl]=Ye[Ql]=!0,Ye[Le]=Ye[we]=Ye[bi]=Ye[it]=Ye[vo]=Ye[nt]=Ye[Ft]=Ye[Ut]=Ye[He]=Ye[Vt]=Ye[$t]=Ye[mr]=Ye[qt]=Ye[Kn]=Ye[yi]=!1;var Qe={};Qe[Le]=Qe[we]=Qe[bi]=Qe[vo]=Qe[it]=Qe[nt]=Qe[Ul]=Qe[Vl]=Qe[$l]=Qe[ql]=Qe[Gl]=Qe[He]=Qe[Vt]=Qe[$t]=Qe[mr]=Qe[qt]=Qe[Kn]=Qe[hi]=Qe[Wl]=Qe[zl]=Qe[jl]=Qe[Ql]=!0,Qe[Ft]=Qe[Ut]=Qe[yi]=!1;var g7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},h7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},b7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},x7=parseFloat,S7=parseInt,w1=typeof global=="object"&&global&&global.Object===Object&&global,C7=typeof self=="object"&&self&&self.Object===Object&&self,ht=w1||C7||Function("return this")(),tu=typeof Xo=="object"&&Xo&&!Xo.nodeType&&Xo,Yr=tu&&typeof ps=="object"&&ps&&!ps.nodeType&&ps,T1=Yr&&Yr.exports===tu,nu=T1&&w1.process,dn=(function(){try{var P=Yr&&Yr.require&&Yr.require("util").types;return P||nu&&nu.binding&&nu.binding("util")}catch{}})(),E1=dn&&dn.isArrayBuffer,k1=dn&&dn.isDate,I1=dn&&dn.isMap,R1=dn&&dn.isRegExp,M1=dn&&dn.isSet,_1=dn&&dn.isTypedArray;function Ht(P,q,U){switch(U.length){case 0:return P.call(q);case 1:return P.call(q,U[0]);case 2:return P.call(q,U[0],U[1]);case 3:return P.call(q,U[0],U[1],U[2])}return P.apply(q,U)}function v7(P,q,U,re){for(var xe=-1,Ue=P==null?0:P.length;++xe<Ue;){var pt=P[xe];q(re,pt,U(pt),P)}return re}function Xt(P,q){for(var U=-1,re=P==null?0:P.length;++U<re&&q(P[U],U,P)!==!1;);return P}function w7(P,q){for(var U=P==null?0:P.length;U--&&q(P[U],U,P)!==!1;);return P}function A1(P,q){for(var U=-1,re=P==null?0:P.length;++U<re;)if(!q(P[U],U,P))return!1;return!0}function gr(P,q){for(var U=-1,re=P==null?0:P.length,xe=0,Ue=[];++U<re;){var pt=P[U];q(pt,U,P)&&(Ue[xe++]=pt)}return Ue}function Ks(P,q){var U=P==null?0:P.length;return!!U&&To(P,q,0)>-1}function ru(P,q,U){for(var re=-1,xe=P==null?0:P.length;++re<xe;)if(U(q,P[re]))return!0;return!1}function Xe(P,q){for(var U=-1,re=P==null?0:P.length,xe=Array(re);++U<re;)xe[U]=q(P[U],U,P);return xe}function hr(P,q){for(var U=-1,re=q.length,xe=P.length;++U<re;)P[xe+U]=q[U];return P}function ou(P,q,U,re){var xe=-1,Ue=P==null?0:P.length;for(re&&Ue&&(U=P[++xe]);++xe<Ue;)U=q(U,P[xe],xe,P);return U}function T7(P,q,U,re){var xe=P==null?0:P.length;for(re&&xe&&(U=P[--xe]);xe--;)U=q(U,P[xe],xe,P);return U}function iu(P,q){for(var U=-1,re=P==null?0:P.length;++U<re;)if(q(P[U],U,P))return!0;return!1}var E7=su("length");function k7(P){return P.split("")}function I7(P){return P.match(D8)||[]}function L1(P,q,U){var re;return U(P,function(xe,Ue,pt){if(q(xe,Ue,pt))return re=Ue,!1}),re}function Zs(P,q,U,re){for(var xe=P.length,Ue=U+(re?1:-1);re?Ue--:++Ue<xe;)if(q(P[Ue],Ue,P))return Ue;return-1}function To(P,q,U){return q===q?U7(P,q,U):Zs(P,P1,U)}function R7(P,q,U,re){for(var xe=U-1,Ue=P.length;++xe<Ue;)if(re(P[xe],q))return xe;return-1}function P1(P){return P!==P}function O1(P,q){var U=P==null?0:P.length;return U?cu(P,q)/U:fe}function su(P){return function(q){return q==null?e:q[P]}}function au(P){return function(q){return P==null?e:P[q]}}function N1(P,q,U,re,xe){return xe(P,function(Ue,pt,ze){U=re?(re=!1,Ue):q(U,Ue,pt,ze)}),U}function M7(P,q){var U=P.length;for(P.sort(q);U--;)P[U]=P[U].value;return P}function cu(P,q){for(var U,re=-1,xe=P.length;++re<xe;){var Ue=q(P[re]);Ue!==e&&(U=U===e?Ue:U+Ue)}return U}function lu(P,q){for(var U=-1,re=Array(P);++U<P;)re[U]=q(U);return re}function _7(P,q){return Xe(q,function(U){return[U,P[U]]})}function D1(P){return P&&P.slice(0,V1(P)+1).replace(Kl,"")}function Jt(P){return function(q){return P(q)}}function uu(P,q){return Xe(q,function(U){return P[U]})}function xi(P,q){return P.has(q)}function B1(P,q){for(var U=-1,re=P.length;++U<re&&To(q,P[U],0)>-1;);return U}function F1(P,q){for(var U=P.length;U--&&To(q,P[U],0)>-1;);return U}function A7(P,q){for(var U=P.length,re=0;U--;)P[U]===q&&++re;return re}var L7=au(g7),P7=au(h7);function O7(P){return"\\"+b7[P]}function N7(P,q){return P==null?e:P[q]}function Eo(P){return d7.test(P)}function D7(P){return f7.test(P)}function B7(P){for(var q,U=[];!(q=P.next()).done;)U.push(q.value);return U}function du(P){var q=-1,U=Array(P.size);return P.forEach(function(re,xe){U[++q]=[xe,re]}),U}function U1(P,q){return function(U){return P(q(U))}}function yr(P,q){for(var U=-1,re=P.length,xe=0,Ue=[];++U<re;){var pt=P[U];(pt===q||pt===y)&&(P[U]=y,Ue[xe++]=U)}return Ue}function Hs(P){var q=-1,U=Array(P.size);return P.forEach(function(re){U[++q]=re}),U}function F7(P){var q=-1,U=Array(P.size);return P.forEach(function(re){U[++q]=[re,re]}),U}function U7(P,q,U){for(var re=U-1,xe=P.length;++re<xe;)if(P[re]===q)return re;return-1}function V7(P,q,U){for(var re=U+1;re--;)if(P[re]===q)return re;return re}function ko(P){return Eo(P)?q7(P):E7(P)}function Tn(P){return Eo(P)?G7(P):k7(P)}function V1(P){for(var q=P.length;q--&&L8.test(P.charAt(q)););return q}var $7=au(y7);function q7(P){for(var q=eu.lastIndex=0;eu.test(P);)++q;return q}function G7(P){return P.match(eu)||[]}function W7(P){return P.match(u7)||[]}var z7=(function P(q){q=q==null?ht:br.defaults(ht.Object(),q,br.pick(ht,p7));var U=q.Array,re=q.Date,xe=q.Error,Ue=q.Function,pt=q.Math,ze=q.Object,fu=q.RegExp,j7=q.String,fn=q.TypeError,Xs=U.prototype,Q7=Ue.prototype,Io=ze.prototype,Js=q["__core-js_shared__"],ea=Q7.toString,$e=Io.hasOwnProperty,Y7=0,$1=(function(){var n=/[^.]+$/.exec(Js&&Js.keys&&Js.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),ta=Io.toString,K7=ea.call(ze),Z7=ht._,H7=fu("^"+ea.call($e).replace(Yl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),na=T1?q.Buffer:e,xr=q.Symbol,ra=q.Uint8Array,q1=na?na.allocUnsafe:e,oa=U1(ze.getPrototypeOf,ze),G1=ze.create,W1=Io.propertyIsEnumerable,ia=Xs.splice,z1=xr?xr.isConcatSpreadable:e,Si=xr?xr.iterator:e,Kr=xr?xr.toStringTag:e,sa=(function(){try{var n=eo(ze,"defineProperty");return n({},"",{}),n}catch{}})(),X7=q.clearTimeout!==ht.clearTimeout&&q.clearTimeout,J7=re&&re.now!==ht.Date.now&&re.now,ex=q.setTimeout!==ht.setTimeout&&q.setTimeout,aa=pt.ceil,ca=pt.floor,pu=ze.getOwnPropertySymbols,tx=na?na.isBuffer:e,j1=q.isFinite,nx=Xs.join,rx=U1(ze.keys,ze),mt=pt.max,Tt=pt.min,ox=re.now,ix=q.parseInt,Q1=pt.random,sx=Xs.reverse,mu=eo(q,"DataView"),Ci=eo(q,"Map"),gu=eo(q,"Promise"),Ro=eo(q,"Set"),wi=eo(q,"WeakMap"),Ti=eo(ze,"create"),la=wi&&new wi,Mo={},ax=to(mu),cx=to(Ci),lx=to(gu),ux=to(Ro),dx=to(wi),ua=xr?xr.prototype:e,Ei=ua?ua.valueOf:e,Y1=ua?ua.toString:e;function x(n){if(rt(n)&&!ve(n)&&!(n instanceof Ae)){if(n instanceof pn)return n;if($e.call(n,"__wrapped__"))return Km(n)}return new pn(n)}var _o=(function(){function n(){}return function(o){if(!Je(o))return{};if(G1)return G1(o);n.prototype=o;var a=new n;return n.prototype=e,a}})();function da(){}function pn(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}x.templateSettings={escape:k8,evaluate:I8,interpolate:n1,variable:"",imports:{_:x}},x.prototype=da.prototype,x.prototype.constructor=x,pn.prototype=_o(da.prototype),pn.prototype.constructor=pn;function Ae(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ce,this.__views__=[]}function fx(){var n=new Ae(this.__wrapped__);return n.__actions__=Gt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Gt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Gt(this.__views__),n}function px(){if(this.__filtered__){var n=new Ae(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function mx(){var n=this.__wrapped__.value(),o=this.__dir__,a=ve(n),f=o<0,h=a?n.length:0,S=kS(0,h,this.__views__),I=S.start,A=S.end,D=A-I,z=f?A:I-1,j=this.__iteratees__,Y=j.length,H=0,ae=Tt(D,this.__takeCount__);if(!a||!f&&h==D&&ae==D)return bm(n,this.__actions__);var ye=[];e:for(;D--&&H<ae;){z+=o;for(var ke=-1,ge=n[z];++ke<Y;){var _e=j[ke],Pe=_e.iteratee,nn=_e.type,At=Pe(ge);if(nn==K)ge=At;else if(!At){if(nn==Se)continue e;break e}}ye[H++]=ge}return ye}Ae.prototype=_o(da.prototype),Ae.prototype.constructor=Ae;function Zr(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var f=n[o];this.set(f[0],f[1])}}function gx(){this.__data__=Ti?Ti(null):{},this.size=0}function hx(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function yx(n){var o=this.__data__;if(Ti){var a=o[n];return a===d?e:a}return $e.call(o,n)?o[n]:e}function bx(n){var o=this.__data__;return Ti?o[n]!==e:$e.call(o,n)}function xx(n,o){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=Ti&&o===e?d:o,this}Zr.prototype.clear=gx,Zr.prototype.delete=hx,Zr.prototype.get=yx,Zr.prototype.has=bx,Zr.prototype.set=xx;function Zn(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var f=n[o];this.set(f[0],f[1])}}function Sx(){this.__data__=[],this.size=0}function Cx(n){var o=this.__data__,a=fa(o,n);if(a<0)return!1;var f=o.length-1;return a==f?o.pop():ia.call(o,a,1),--this.size,!0}function vx(n){var o=this.__data__,a=fa(o,n);return a<0?e:o[a][1]}function wx(n){return fa(this.__data__,n)>-1}function Tx(n,o){var a=this.__data__,f=fa(a,n);return f<0?(++this.size,a.push([n,o])):a[f][1]=o,this}Zn.prototype.clear=Sx,Zn.prototype.delete=Cx,Zn.prototype.get=vx,Zn.prototype.has=wx,Zn.prototype.set=Tx;function Hn(n){var o=-1,a=n==null?0:n.length;for(this.clear();++o<a;){var f=n[o];this.set(f[0],f[1])}}function Ex(){this.size=0,this.__data__={hash:new Zr,map:new(Ci||Zn),string:new Zr}}function kx(n){var o=Ta(this,n).delete(n);return this.size-=o?1:0,o}function Ix(n){return Ta(this,n).get(n)}function Rx(n){return Ta(this,n).has(n)}function Mx(n,o){var a=Ta(this,n),f=a.size;return a.set(n,o),this.size+=a.size==f?0:1,this}Hn.prototype.clear=Ex,Hn.prototype.delete=kx,Hn.prototype.get=Ix,Hn.prototype.has=Rx,Hn.prototype.set=Mx;function Hr(n){var o=-1,a=n==null?0:n.length;for(this.__data__=new Hn;++o<a;)this.add(n[o])}function _x(n){return this.__data__.set(n,d),this}function Ax(n){return this.__data__.has(n)}Hr.prototype.add=Hr.prototype.push=_x,Hr.prototype.has=Ax;function En(n){var o=this.__data__=new Zn(n);this.size=o.size}function Lx(){this.__data__=new Zn,this.size=0}function Px(n){var o=this.__data__,a=o.delete(n);return this.size=o.size,a}function Ox(n){return this.__data__.get(n)}function Nx(n){return this.__data__.has(n)}function Dx(n,o){var a=this.__data__;if(a instanceof Zn){var f=a.__data__;if(!Ci||f.length<r-1)return f.push([n,o]),this.size=++a.size,this;a=this.__data__=new Hn(f)}return a.set(n,o),this.size=a.size,this}En.prototype.clear=Lx,En.prototype.delete=Px,En.prototype.get=Ox,En.prototype.has=Nx,En.prototype.set=Dx;function K1(n,o){var a=ve(n),f=!a&&no(n),h=!a&&!f&&Tr(n),S=!a&&!f&&!h&&Oo(n),I=a||f||h||S,A=I?lu(n.length,j7):[],D=A.length;for(var z in n)(o||$e.call(n,z))&&!(I&&(z=="length"||h&&(z=="offset"||z=="parent")||S&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||er(z,D)))&&A.push(z);return A}function Z1(n){var o=n.length;return o?n[ku(0,o-1)]:e}function Bx(n,o){return Ea(Gt(n),Xr(o,0,n.length))}function Fx(n){return Ea(Gt(n))}function hu(n,o,a){(a!==e&&!In(n[o],a)||a===e&&!(o in n))&&Dn(n,o,a)}function ki(n,o,a){var f=n[o];(!($e.call(n,o)&&In(f,a))||a===e&&!(o in n))&&Dn(n,o,a)}function fa(n,o){for(var a=n.length;a--;)if(In(n[a][0],o))return a;return-1}function Ux(n,o,a,f){return Sr(n,function(h,S,I){o(f,h,a(h),I)}),f}function H1(n,o){return n&&Fn(o,yt(o),n)}function Vx(n,o){return n&&Fn(o,zt(o),n)}function Dn(n,o,a){o=="__proto__"&&sa?sa(n,o,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[o]=a}function yu(n,o){for(var a=-1,f=o.length,h=U(f),S=n==null;++a<f;)h[a]=S?e:Xu(n,o[a]);return h}function Xr(n,o,a){return n===n&&(a!==e&&(n=n<=a?n:a),o!==e&&(n=n>=o?n:o)),n}function mn(n,o,a,f,h,S){var I,A=o&b,D=o&E,z=o&R;if(a&&(I=h?a(n,f,h,S):a(n)),I!==e)return I;if(!Je(n))return n;var j=ve(n);if(j){if(I=RS(n),!A)return Gt(n,I)}else{var Y=Et(n),H=Y==Ut||Y==Zt;if(Tr(n))return Cm(n,A);if(Y==$t||Y==Le||H&&!h){if(I=D||H?{}:Vm(n),!A)return D?yS(n,Vx(I,n)):hS(n,H1(I,n))}else{if(!Qe[Y])return h?n:{};I=MS(n,Y,A)}}S||(S=new En);var ae=S.get(n);if(ae)return ae;S.set(n,I),gg(n)?n.forEach(function(ge){I.add(mn(ge,o,a,ge,n,S))}):pg(n)&&n.forEach(function(ge,_e){I.set(_e,mn(ge,o,a,_e,n,S))});var ye=z?D?Bu:Du:D?zt:yt,ke=j?e:ye(n);return Xt(ke||n,function(ge,_e){ke&&(_e=ge,ge=n[_e]),ki(I,_e,mn(ge,o,a,_e,n,S))}),I}function $x(n){var o=yt(n);return function(a){return X1(a,n,o)}}function X1(n,o,a){var f=a.length;if(n==null)return!f;for(n=ze(n);f--;){var h=a[f],S=o[h],I=n[h];if(I===e&&!(h in n)||!S(I))return!1}return!0}function J1(n,o,a){if(typeof n!="function")throw new fn(s);return Pi(function(){n.apply(e,a)},o)}function Ii(n,o,a,f){var h=-1,S=Ks,I=!0,A=n.length,D=[],z=o.length;if(!A)return D;a&&(o=Xe(o,Jt(a))),f?(S=ru,I=!1):o.length>=r&&(S=xi,I=!1,o=new Hr(o));e:for(;++h<A;){var j=n[h],Y=a==null?j:a(j);if(j=f||j!==0?j:0,I&&Y===Y){for(var H=z;H--;)if(o[H]===Y)continue e;D.push(j)}else S(o,Y,f)||D.push(j)}return D}var Sr=km(Bn),em=km(xu,!0);function qx(n,o){var a=!0;return Sr(n,function(f,h,S){return a=!!o(f,h,S),a}),a}function pa(n,o,a){for(var f=-1,h=n.length;++f<h;){var S=n[f],I=o(S);if(I!=null&&(A===e?I===I&&!tn(I):a(I,A)))var A=I,D=S}return D}function Gx(n,o,a,f){var h=n.length;for(a=Te(a),a<0&&(a=-a>h?0:h+a),f=f===e||f>h?h:Te(f),f<0&&(f+=h),f=a>f?0:yg(f);a<f;)n[a++]=o;return n}function tm(n,o){var a=[];return Sr(n,function(f,h,S){o(f,h,S)&&a.push(f)}),a}function xt(n,o,a,f,h){var S=-1,I=n.length;for(a||(a=AS),h||(h=[]);++S<I;){var A=n[S];o>0&&a(A)?o>1?xt(A,o-1,a,f,h):hr(h,A):f||(h[h.length]=A)}return h}var bu=Im(),nm=Im(!0);function Bn(n,o){return n&&bu(n,o,yt)}function xu(n,o){return n&&nm(n,o,yt)}function ma(n,o){return gr(o,function(a){return tr(n[a])})}function Jr(n,o){o=vr(o,n);for(var a=0,f=o.length;n!=null&&a<f;)n=n[kn(o[a++])];return a&&a==f?n:e}function rm(n,o,a){var f=o(n);return ve(n)?f:hr(f,a(n))}function Mt(n){return n==null?n===e?zs:On:Kr&&Kr in ze(n)?ES(n):FS(n)}function Su(n,o){return n>o}function Wx(n,o){return n!=null&&$e.call(n,o)}function zx(n,o){return n!=null&&o in ze(n)}function jx(n,o,a){return n>=Tt(o,a)&&n<mt(o,a)}function Cu(n,o,a){for(var f=a?ru:Ks,h=n[0].length,S=n.length,I=S,A=U(S),D=1/0,z=[];I--;){var j=n[I];I&&o&&(j=Xe(j,Jt(o))),D=Tt(j.length,D),A[I]=!a&&(o||h>=120&&j.length>=120)?new Hr(I&&j):e}j=n[0];var Y=-1,H=A[0];e:for(;++Y<h&&z.length<D;){var ae=j[Y],ye=o?o(ae):ae;if(ae=a||ae!==0?ae:0,!(H?xi(H,ye):f(z,ye,a))){for(I=S;--I;){var ke=A[I];if(!(ke?xi(ke,ye):f(n[I],ye,a)))continue e}H&&H.push(ye),z.push(ae)}}return z}function Qx(n,o,a,f){return Bn(n,function(h,S,I){o(f,a(h),S,I)}),f}function Ri(n,o,a){o=vr(o,n),n=Wm(n,o);var f=n==null?n:n[kn(hn(o))];return f==null?e:Ht(f,n,a)}function om(n){return rt(n)&&Mt(n)==Le}function Yx(n){return rt(n)&&Mt(n)==bi}function Kx(n){return rt(n)&&Mt(n)==nt}function Mi(n,o,a,f,h){return n===o?!0:n==null||o==null||!rt(n)&&!rt(o)?n!==n&&o!==o:Zx(n,o,a,f,Mi,h)}function Zx(n,o,a,f,h,S){var I=ve(n),A=ve(o),D=I?we:Et(n),z=A?we:Et(o);D=D==Le?$t:D,z=z==Le?$t:z;var j=D==$t,Y=z==$t,H=D==z;if(H&&Tr(n)){if(!Tr(o))return!1;I=!0,j=!1}if(H&&!j)return S||(S=new En),I||Oo(n)?Bm(n,o,a,f,h,S):wS(n,o,D,a,f,h,S);if(!(a&k)){var ae=j&&$e.call(n,"__wrapped__"),ye=Y&&$e.call(o,"__wrapped__");if(ae||ye){var ke=ae?n.value():n,ge=ye?o.value():o;return S||(S=new En),h(ke,ge,a,f,S)}}return H?(S||(S=new En),TS(n,o,a,f,h,S)):!1}function Hx(n){return rt(n)&&Et(n)==He}function vu(n,o,a,f){var h=a.length,S=h,I=!f;if(n==null)return!S;for(n=ze(n);h--;){var A=a[h];if(I&&A[2]?A[1]!==n[A[0]]:!(A[0]in n))return!1}for(;++h<S;){A=a[h];var D=A[0],z=n[D],j=A[1];if(I&&A[2]){if(z===e&&!(D in n))return!1}else{var Y=new En;if(f)var H=f(z,j,D,n,o,Y);if(!(H===e?Mi(j,z,k|B,f,Y):H))return!1}}return!0}function im(n){if(!Je(n)||PS(n))return!1;var o=tr(n)?H7:$8;return o.test(to(n))}function Xx(n){return rt(n)&&Mt(n)==mr}function Jx(n){return rt(n)&&Et(n)==qt}function eS(n){return rt(n)&&Aa(n.length)&&!!Ye[Mt(n)]}function sm(n){return typeof n=="function"?n:n==null?jt:typeof n=="object"?ve(n)?lm(n[0],n[1]):cm(n):Mg(n)}function wu(n){if(!Li(n))return rx(n);var o=[];for(var a in ze(n))$e.call(n,a)&&a!="constructor"&&o.push(a);return o}function tS(n){if(!Je(n))return BS(n);var o=Li(n),a=[];for(var f in n)f=="constructor"&&(o||!$e.call(n,f))||a.push(f);return a}function Tu(n,o){return n<o}function am(n,o){var a=-1,f=Wt(n)?U(n.length):[];return Sr(n,function(h,S,I){f[++a]=o(h,S,I)}),f}function cm(n){var o=Uu(n);return o.length==1&&o[0][2]?qm(o[0][0],o[0][1]):function(a){return a===n||vu(a,n,o)}}function lm(n,o){return $u(n)&&$m(o)?qm(kn(n),o):function(a){var f=Xu(a,n);return f===e&&f===o?Ju(a,n):Mi(o,f,k|B)}}function ga(n,o,a,f,h){n!==o&&bu(o,function(S,I){if(h||(h=new En),Je(S))nS(n,o,I,a,ga,f,h);else{var A=f?f(Gu(n,I),S,I+"",n,o,h):e;A===e&&(A=S),hu(n,I,A)}},zt)}function nS(n,o,a,f,h,S,I){var A=Gu(n,a),D=Gu(o,a),z=I.get(D);if(z){hu(n,a,z);return}var j=S?S(A,D,a+"",n,o,I):e,Y=j===e;if(Y){var H=ve(D),ae=!H&&Tr(D),ye=!H&&!ae&&Oo(D);j=D,H||ae||ye?ve(A)?j=A:st(A)?j=Gt(A):ae?(Y=!1,j=Cm(D,!0)):ye?(Y=!1,j=vm(D,!0)):j=[]:Oi(D)||no(D)?(j=A,no(A)?j=bg(A):(!Je(A)||tr(A))&&(j=Vm(D))):Y=!1}Y&&(I.set(D,j),h(j,D,f,S,I),I.delete(D)),hu(n,a,j)}function um(n,o){var a=n.length;if(a)return o+=o<0?a:0,er(o,a)?n[o]:e}function dm(n,o,a){o.length?o=Xe(o,function(S){return ve(S)?function(I){return Jr(I,S.length===1?S[0]:S)}:S}):o=[jt];var f=-1;o=Xe(o,Jt(he()));var h=am(n,function(S,I,A){var D=Xe(o,function(z){return z(S)});return{criteria:D,index:++f,value:S}});return M7(h,function(S,I){return gS(S,I,a)})}function rS(n,o){return fm(n,o,function(a,f){return Ju(n,f)})}function fm(n,o,a){for(var f=-1,h=o.length,S={};++f<h;){var I=o[f],A=Jr(n,I);a(A,I)&&_i(S,vr(I,n),A)}return S}function oS(n){return function(o){return Jr(o,n)}}function Eu(n,o,a,f){var h=f?R7:To,S=-1,I=o.length,A=n;for(n===o&&(o=Gt(o)),a&&(A=Xe(n,Jt(a)));++S<I;)for(var D=0,z=o[S],j=a?a(z):z;(D=h(A,j,D,f))>-1;)A!==n&&ia.call(A,D,1),ia.call(n,D,1);return n}function pm(n,o){for(var a=n?o.length:0,f=a-1;a--;){var h=o[a];if(a==f||h!==S){var S=h;er(h)?ia.call(n,h,1):Mu(n,h)}}return n}function ku(n,o){return n+ca(Q1()*(o-n+1))}function iS(n,o,a,f){for(var h=-1,S=mt(aa((o-n)/(a||1)),0),I=U(S);S--;)I[f?S:++h]=n,n+=a;return I}function Iu(n,o){var a="";if(!n||o<1||o>me)return a;do o%2&&(a+=n),o=ca(o/2),o&&(n+=n);while(o);return a}function Me(n,o){return Wu(Gm(n,o,jt),n+"")}function sS(n){return Z1(No(n))}function aS(n,o){var a=No(n);return Ea(a,Xr(o,0,a.length))}function _i(n,o,a,f){if(!Je(n))return n;o=vr(o,n);for(var h=-1,S=o.length,I=S-1,A=n;A!=null&&++h<S;){var D=kn(o[h]),z=a;if(D==="__proto__"||D==="constructor"||D==="prototype")return n;if(h!=I){var j=A[D];z=f?f(j,D,A):e,z===e&&(z=Je(j)?j:er(o[h+1])?[]:{})}ki(A,D,z),A=A[D]}return n}var mm=la?function(n,o){return la.set(n,o),n}:jt,cS=sa?function(n,o){return sa(n,"toString",{configurable:!0,enumerable:!1,value:td(o),writable:!0})}:jt;function lS(n){return Ea(No(n))}function gn(n,o,a){var f=-1,h=n.length;o<0&&(o=-o>h?0:h+o),a=a>h?h:a,a<0&&(a+=h),h=o>a?0:a-o>>>0,o>>>=0;for(var S=U(h);++f<h;)S[f]=n[f+o];return S}function uS(n,o){var a;return Sr(n,function(f,h,S){return a=o(f,h,S),!a}),!!a}function ha(n,o,a){var f=0,h=n==null?f:n.length;if(typeof o=="number"&&o===o&&h<=te){for(;f<h;){var S=f+h>>>1,I=n[S];I!==null&&!tn(I)&&(a?I<=o:I<o)?f=S+1:h=S}return h}return Ru(n,o,jt,a)}function Ru(n,o,a,f){var h=0,S=n==null?0:n.length;if(S===0)return 0;o=a(o);for(var I=o!==o,A=o===null,D=tn(o),z=o===e;h<S;){var j=ca((h+S)/2),Y=a(n[j]),H=Y!==e,ae=Y===null,ye=Y===Y,ke=tn(Y);if(I)var ge=f||ye;else z?ge=ye&&(f||H):A?ge=ye&&H&&(f||!ae):D?ge=ye&&H&&!ae&&(f||!ke):ae||ke?ge=!1:ge=f?Y<=o:Y<o;ge?h=j+1:S=j}return Tt(S,Ze)}function gm(n,o){for(var a=-1,f=n.length,h=0,S=[];++a<f;){var I=n[a],A=o?o(I):I;if(!a||!In(A,D)){var D=A;S[h++]=I===0?0:I}}return S}function hm(n){return typeof n=="number"?n:tn(n)?fe:+n}function en(n){if(typeof n=="string")return n;if(ve(n))return Xe(n,en)+"";if(tn(n))return Y1?Y1.call(n):"";var o=n+"";return o=="0"&&1/n==-le?"-0":o}function Cr(n,o,a){var f=-1,h=Ks,S=n.length,I=!0,A=[],D=A;if(a)I=!1,h=ru;else if(S>=r){var z=o?null:CS(n);if(z)return Hs(z);I=!1,h=xi,D=new Hr}else D=o?[]:A;e:for(;++f<S;){var j=n[f],Y=o?o(j):j;if(j=a||j!==0?j:0,I&&Y===Y){for(var H=D.length;H--;)if(D[H]===Y)continue e;o&&D.push(Y),A.push(j)}else h(D,Y,a)||(D!==A&&D.push(Y),A.push(j))}return A}function Mu(n,o){o=vr(o,n);var a=-1,f=o.length;if(!f)return!0;for(;++a<f;){var h=kn(o[a]);if(h==="__proto__"&&!$e.call(n,"__proto__")||(h==="constructor"||h==="prototype")&&a<f-1)return!1}var S=Wm(n,o);return S==null||delete S[kn(hn(o))]}function ym(n,o,a,f){return _i(n,o,a(Jr(n,o)),f)}function ya(n,o,a,f){for(var h=n.length,S=f?h:-1;(f?S--:++S<h)&&o(n[S],S,n););return a?gn(n,f?0:S,f?S+1:h):gn(n,f?S+1:0,f?h:S)}function bm(n,o){var a=n;return a instanceof Ae&&(a=a.value()),ou(o,function(f,h){return h.func.apply(h.thisArg,hr([f],h.args))},a)}function _u(n,o,a){var f=n.length;if(f<2)return f?Cr(n[0]):[];for(var h=-1,S=U(f);++h<f;)for(var I=n[h],A=-1;++A<f;)A!=h&&(S[h]=Ii(S[h]||I,n[A],o,a));return Cr(xt(S,1),o,a)}function xm(n,o,a){for(var f=-1,h=n.length,S=o.length,I={};++f<h;){var A=f<S?o[f]:e;a(I,n[f],A)}return I}function Au(n){return st(n)?n:[]}function Lu(n){return typeof n=="function"?n:jt}function vr(n,o){return ve(n)?n:$u(n,o)?[n]:Ym(qe(n))}var dS=Me;function wr(n,o,a){var f=n.length;return a=a===e?f:a,!o&&a>=f?n:gn(n,o,a)}var Sm=X7||function(n){return ht.clearTimeout(n)};function Cm(n,o){if(o)return n.slice();var a=n.length,f=q1?q1(a):new n.constructor(a);return n.copy(f),f}function Pu(n){var o=new n.constructor(n.byteLength);return new ra(o).set(new ra(n)),o}function fS(n,o){var a=o?Pu(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}function pS(n){var o=new n.constructor(n.source,o1.exec(n));return o.lastIndex=n.lastIndex,o}function mS(n){return Ei?ze(Ei.call(n)):{}}function vm(n,o){var a=o?Pu(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}function wm(n,o){if(n!==o){var a=n!==e,f=n===null,h=n===n,S=tn(n),I=o!==e,A=o===null,D=o===o,z=tn(o);if(!A&&!z&&!S&&n>o||S&&I&&D&&!A&&!z||f&&I&&D||!a&&D||!h)return 1;if(!f&&!S&&!z&&n<o||z&&a&&h&&!f&&!S||A&&a&&h||!I&&h||!D)return-1}return 0}function gS(n,o,a){for(var f=-1,h=n.criteria,S=o.criteria,I=h.length,A=a.length;++f<I;){var D=wm(h[f],S[f]);if(D){if(f>=A)return D;var z=a[f];return D*(z=="desc"?-1:1)}}return n.index-o.index}function Tm(n,o,a,f){for(var h=-1,S=n.length,I=a.length,A=-1,D=o.length,z=mt(S-I,0),j=U(D+z),Y=!f;++A<D;)j[A]=o[A];for(;++h<I;)(Y||h<S)&&(j[a[h]]=n[h]);for(;z--;)j[A++]=n[h++];return j}function Em(n,o,a,f){for(var h=-1,S=n.length,I=-1,A=a.length,D=-1,z=o.length,j=mt(S-A,0),Y=U(j+z),H=!f;++h<j;)Y[h]=n[h];for(var ae=h;++D<z;)Y[ae+D]=o[D];for(;++I<A;)(H||h<S)&&(Y[ae+a[I]]=n[h++]);return Y}function Gt(n,o){var a=-1,f=n.length;for(o||(o=U(f));++a<f;)o[a]=n[a];return o}function Fn(n,o,a,f){var h=!a;a||(a={});for(var S=-1,I=o.length;++S<I;){var A=o[S],D=f?f(a[A],n[A],A,a,n):e;D===e&&(D=n[A]),h?Dn(a,A,D):ki(a,A,D)}return a}function hS(n,o){return Fn(n,Vu(n),o)}function yS(n,o){return Fn(n,Fm(n),o)}function ba(n,o){return function(a,f){var h=ve(a)?v7:Ux,S=o?o():{};return h(a,n,he(f,2),S)}}function Ao(n){return Me(function(o,a){var f=-1,h=a.length,S=h>1?a[h-1]:e,I=h>2?a[2]:e;for(S=n.length>3&&typeof S=="function"?(h--,S):e,I&&_t(a[0],a[1],I)&&(S=h<3?e:S,h=1),o=ze(o);++f<h;){var A=a[f];A&&n(o,A,f,S)}return o})}function km(n,o){return function(a,f){if(a==null)return a;if(!Wt(a))return n(a,f);for(var h=a.length,S=o?h:-1,I=ze(a);(o?S--:++S<h)&&f(I[S],S,I)!==!1;);return a}}function Im(n){return function(o,a,f){for(var h=-1,S=ze(o),I=f(o),A=I.length;A--;){var D=I[n?A:++h];if(a(S[D],D,S)===!1)break}return o}}function bS(n,o,a){var f=o&N,h=Ai(n);function S(){var I=this&&this!==ht&&this instanceof S?h:n;return I.apply(f?a:this,arguments)}return S}function Rm(n){return function(o){o=qe(o);var a=Eo(o)?Tn(o):e,f=a?a[0]:o.charAt(0),h=a?wr(a,1).join(""):o.slice(1);return f[n]()+h}}function Lo(n){return function(o){return ou(Ig(kg(o).replace(c7,"")),n,"")}}function Ai(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var a=_o(n.prototype),f=n.apply(a,o);return Je(f)?f:a}}function xS(n,o,a){var f=Ai(n);function h(){for(var S=arguments.length,I=U(S),A=S,D=Po(h);A--;)I[A]=arguments[A];var z=S<3&&I[0]!==D&&I[S-1]!==D?[]:yr(I,D);if(S-=z.length,S<a)return Pm(n,o,xa,h.placeholder,e,I,z,e,e,a-S);var j=this&&this!==ht&&this instanceof h?f:n;return Ht(j,this,I)}return h}function Mm(n){return function(o,a,f){var h=ze(o);if(!Wt(o)){var S=he(a,3);o=yt(o),a=function(A){return S(h[A],A,h)}}var I=n(o,a,f);return I>-1?h[S?o[I]:I]:e}}function _m(n){return Jn(function(o){var a=o.length,f=a,h=pn.prototype.thru;for(n&&o.reverse();f--;){var S=o[f];if(typeof S!="function")throw new fn(s);if(h&&!I&&wa(S)=="wrapper")var I=new pn([],!0)}for(f=I?f:a;++f<a;){S=o[f];var A=wa(S),D=A=="wrapper"?Fu(S):e;D&&qu(D[0])&&D[1]==(Q|_|W|V)&&!D[4].length&&D[9]==1?I=I[wa(D[0])].apply(I,D[3]):I=S.length==1&&qu(S)?I[A]():I.thru(S)}return function(){var z=arguments,j=z[0];if(I&&z.length==1&&ve(j))return I.plant(j).value();for(var Y=0,H=a?o[Y].apply(this,z):j;++Y<a;)H=o[Y].call(this,H);return H}})}function xa(n,o,a,f,h,S,I,A,D,z){var j=o&Q,Y=o&N,H=o&F,ae=o&(_|M),ye=o&oe,ke=H?e:Ai(n);function ge(){for(var _e=arguments.length,Pe=U(_e),nn=_e;nn--;)Pe[nn]=arguments[nn];if(ae)var At=Po(ge),rn=A7(Pe,At);if(f&&(Pe=Tm(Pe,f,h,ae)),S&&(Pe=Em(Pe,S,I,ae)),_e-=rn,ae&&_e<z){var at=yr(Pe,At);return Pm(n,o,xa,ge.placeholder,a,Pe,at,A,D,z-_e)}var Rn=Y?a:this,rr=H?Rn[n]:n;return _e=Pe.length,A?Pe=US(Pe,A):ye&&_e>1&&Pe.reverse(),j&&D<_e&&(Pe.length=D),this&&this!==ht&&this instanceof ge&&(rr=ke||Ai(rr)),rr.apply(Rn,Pe)}return ge}function Am(n,o){return function(a,f){return Qx(a,n,o(f),{})}}function Sa(n,o){return function(a,f){var h;if(a===e&&f===e)return o;if(a!==e&&(h=a),f!==e){if(h===e)return f;typeof a=="string"||typeof f=="string"?(a=en(a),f=en(f)):(a=hm(a),f=hm(f)),h=n(a,f)}return h}}function Ou(n){return Jn(function(o){return o=Xe(o,Jt(he())),Me(function(a){var f=this;return n(o,function(h){return Ht(h,f,a)})})})}function Ca(n,o){o=o===e?" ":en(o);var a=o.length;if(a<2)return a?Iu(o,n):o;var f=Iu(o,aa(n/ko(o)));return Eo(o)?wr(Tn(f),0,n).join(""):f.slice(0,n)}function SS(n,o,a,f){var h=o&N,S=Ai(n);function I(){for(var A=-1,D=arguments.length,z=-1,j=f.length,Y=U(j+D),H=this&&this!==ht&&this instanceof I?S:n;++z<j;)Y[z]=f[z];for(;D--;)Y[z++]=arguments[++A];return Ht(H,h?a:this,Y)}return I}function Lm(n){return function(o,a,f){return f&&typeof f!="number"&&_t(o,a,f)&&(a=f=e),o=nr(o),a===e?(a=o,o=0):a=nr(a),f=f===e?o<a?1:-1:nr(f),iS(o,a,f,n)}}function va(n){return function(o,a){return typeof o=="string"&&typeof a=="string"||(o=yn(o),a=yn(a)),n(o,a)}}function Pm(n,o,a,f,h,S,I,A,D,z){var j=o&_,Y=j?I:e,H=j?e:I,ae=j?S:e,ye=j?e:S;o|=j?W:$,o&=~(j?$:W),o&C||(o&=~(N|F));var ke=[n,o,h,ae,Y,ye,H,A,D,z],ge=a.apply(e,ke);return qu(n)&&zm(ge,ke),ge.placeholder=f,jm(ge,n,o)}function Nu(n){var o=pt[n];return function(a,f){if(a=yn(a),f=f==null?0:Tt(Te(f),292),f&&j1(a)){var h=(qe(a)+"e").split("e"),S=o(h[0]+"e"+(+h[1]+f));return h=(qe(S)+"e").split("e"),+(h[0]+"e"+(+h[1]-f))}return o(a)}}var CS=Ro&&1/Hs(new Ro([,-0]))[1]==le?function(n){return new Ro(n)}:od;function Om(n){return function(o){var a=Et(o);return a==He?du(o):a==qt?F7(o):_7(o,n(o))}}function Xn(n,o,a,f,h,S,I,A){var D=o&F;if(!D&&typeof n!="function")throw new fn(s);var z=f?f.length:0;if(z||(o&=~(W|$),f=h=e),I=I===e?I:mt(Te(I),0),A=A===e?A:Te(A),z-=h?h.length:0,o&$){var j=f,Y=h;f=h=e}var H=D?e:Fu(n),ae=[n,o,a,f,h,j,Y,S,I,A];if(H&&DS(ae,H),n=ae[0],o=ae[1],a=ae[2],f=ae[3],h=ae[4],A=ae[9]=ae[9]===e?D?0:n.length:mt(ae[9]-z,0),!A&&o&(_|M)&&(o&=~(_|M)),!o||o==N)var ye=bS(n,o,a);else o==_||o==M?ye=xS(n,o,A):(o==W||o==(N|W))&&!h.length?ye=SS(n,o,a,f):ye=xa.apply(e,ae);var ke=H?mm:zm;return jm(ke(ye,ae),n,o)}function Nm(n,o,a,f){return n===e||In(n,Io[a])&&!$e.call(f,a)?o:n}function Dm(n,o,a,f,h,S){return Je(n)&&Je(o)&&(S.set(o,n),ga(n,o,e,Dm,S),S.delete(o)),n}function vS(n){return Oi(n)?e:n}function Bm(n,o,a,f,h,S){var I=a&k,A=n.length,D=o.length;if(A!=D&&!(I&&D>A))return!1;var z=S.get(n),j=S.get(o);if(z&&j)return z==o&&j==n;var Y=-1,H=!0,ae=a&B?new Hr:e;for(S.set(n,o),S.set(o,n);++Y<A;){var ye=n[Y],ke=o[Y];if(f)var ge=I?f(ke,ye,Y,o,n,S):f(ye,ke,Y,n,o,S);if(ge!==e){if(ge)continue;H=!1;break}if(ae){if(!iu(o,function(_e,Pe){if(!xi(ae,Pe)&&(ye===_e||h(ye,_e,a,f,S)))return ae.push(Pe)})){H=!1;break}}else if(!(ye===ke||h(ye,ke,a,f,S))){H=!1;break}}return S.delete(n),S.delete(o),H}function wS(n,o,a,f,h,S,I){switch(a){case vo:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case bi:return!(n.byteLength!=o.byteLength||!S(new ra(n),new ra(o)));case it:case nt:case Vt:return In(+n,+o);case Ft:return n.name==o.name&&n.message==o.message;case mr:case Kn:return n==o+"";case He:var A=du;case qt:var D=f&k;if(A||(A=Hs),n.size!=o.size&&!D)return!1;var z=I.get(n);if(z)return z==o;f|=B,I.set(n,o);var j=Bm(A(n),A(o),f,h,S,I);return I.delete(n),j;case hi:if(Ei)return Ei.call(n)==Ei.call(o)}return!1}function TS(n,o,a,f,h,S){var I=a&k,A=Du(n),D=A.length,z=Du(o),j=z.length;if(D!=j&&!I)return!1;for(var Y=D;Y--;){var H=A[Y];if(!(I?H in o:$e.call(o,H)))return!1}var ae=S.get(n),ye=S.get(o);if(ae&&ye)return ae==o&&ye==n;var ke=!0;S.set(n,o),S.set(o,n);for(var ge=I;++Y<D;){H=A[Y];var _e=n[H],Pe=o[H];if(f)var nn=I?f(Pe,_e,H,o,n,S):f(_e,Pe,H,n,o,S);if(!(nn===e?_e===Pe||h(_e,Pe,a,f,S):nn)){ke=!1;break}ge||(ge=H=="constructor")}if(ke&&!ge){var At=n.constructor,rn=o.constructor;At!=rn&&"constructor"in n&&"constructor"in o&&!(typeof At=="function"&&At instanceof At&&typeof rn=="function"&&rn instanceof rn)&&(ke=!1)}return S.delete(n),S.delete(o),ke}function Jn(n){return Wu(Gm(n,e,Xm),n+"")}function Du(n){return rm(n,yt,Vu)}function Bu(n){return rm(n,zt,Fm)}var Fu=la?function(n){return la.get(n)}:od;function wa(n){for(var o=n.name+"",a=Mo[o],f=$e.call(Mo,o)?a.length:0;f--;){var h=a[f],S=h.func;if(S==null||S==n)return h.name}return o}function Po(n){var o=$e.call(x,"placeholder")?x:n;return o.placeholder}function he(){var n=x.iteratee||nd;return n=n===nd?sm:n,arguments.length?n(arguments[0],arguments[1]):n}function Ta(n,o){var a=n.__data__;return LS(o)?a[typeof o=="string"?"string":"hash"]:a.map}function Uu(n){for(var o=yt(n),a=o.length;a--;){var f=o[a],h=n[f];o[a]=[f,h,$m(h)]}return o}function eo(n,o){var a=N7(n,o);return im(a)?a:e}function ES(n){var o=$e.call(n,Kr),a=n[Kr];try{n[Kr]=e;var f=!0}catch{}var h=ta.call(n);return f&&(o?n[Kr]=a:delete n[Kr]),h}var Vu=pu?function(n){return n==null?[]:(n=ze(n),gr(pu(n),function(o){return W1.call(n,o)}))}:id,Fm=pu?function(n){for(var o=[];n;)hr(o,Vu(n)),n=oa(n);return o}:id,Et=Mt;(mu&&Et(new mu(new ArrayBuffer(1)))!=vo||Ci&&Et(new Ci)!=He||gu&&Et(gu.resolve())!=Yn||Ro&&Et(new Ro)!=qt||wi&&Et(new wi)!=yi)&&(Et=function(n){var o=Mt(n),a=o==$t?n.constructor:e,f=a?to(a):"";if(f)switch(f){case ax:return vo;case cx:return He;case lx:return Yn;case ux:return qt;case dx:return yi}return o});function kS(n,o,a){for(var f=-1,h=a.length;++f<h;){var S=a[f],I=S.size;switch(S.type){case"drop":n+=I;break;case"dropRight":o-=I;break;case"take":o=Tt(o,n+I);break;case"takeRight":n=mt(n,o-I);break}}return{start:n,end:o}}function IS(n){var o=n.match(O8);return o?o[1].split(N8):[]}function Um(n,o,a){o=vr(o,n);for(var f=-1,h=o.length,S=!1;++f<h;){var I=kn(o[f]);if(!(S=n!=null&&a(n,I)))break;n=n[I]}return S||++f!=h?S:(h=n==null?0:n.length,!!h&&Aa(h)&&er(I,h)&&(ve(n)||no(n)))}function RS(n){var o=n.length,a=new n.constructor(o);return o&&typeof n[0]=="string"&&$e.call(n,"index")&&(a.index=n.index,a.input=n.input),a}function Vm(n){return typeof n.constructor=="function"&&!Li(n)?_o(oa(n)):{}}function MS(n,o,a){var f=n.constructor;switch(o){case bi:return Pu(n);case it:case nt:return new f(+n);case vo:return fS(n,a);case Ul:case Vl:case $l:case ql:case Gl:case Wl:case zl:case jl:case Ql:return vm(n,a);case He:return new f;case Vt:case Kn:return new f(n);case mr:return pS(n);case qt:return new f;case hi:return mS(n)}}function _S(n,o){var a=o.length;if(!a)return n;var f=a-1;return o[f]=(a>1?"& ":"")+o[f],o=o.join(a>2?", ":" "),n.replace(P8,`{
/* [wrapped with `+o+`] */
`)}function AS(n){return ve(n)||no(n)||!!(z1&&n&&n[z1])}function er(n,o){var a=typeof n;return o=o??me,!!o&&(a=="number"||a!="symbol"&&G8.test(n))&&n>-1&&n%1==0&&n<o}function _t(n,o,a){if(!Je(a))return!1;var f=typeof o;return(f=="number"?Wt(a)&&er(o,a.length):f=="string"&&o in a)?In(a[o],n):!1}function $u(n,o){if(ve(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||tn(n)?!0:M8.test(n)||!R8.test(n)||o!=null&&n in ze(o)}function LS(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function qu(n){var o=wa(n),a=x[o];if(typeof a!="function"||!(o in Ae.prototype))return!1;if(n===a)return!0;var f=Fu(a);return!!f&&n===f[0]}function PS(n){return!!$1&&$1 in n}var OS=Js?tr:sd;function Li(n){var o=n&&n.constructor,a=typeof o=="function"&&o.prototype||Io;return n===a}function $m(n){return n===n&&!Je(n)}function qm(n,o){return function(a){return a==null?!1:a[n]===o&&(o!==e||n in ze(a))}}function NS(n){var o=Ma(n,function(f){return a.size===g&&a.clear(),f}),a=o.cache;return o}function DS(n,o){var a=n[1],f=o[1],h=a|f,S=h<(N|F|Q),I=f==Q&&a==_||f==Q&&a==V&&n[7].length<=o[8]||f==(Q|V)&&o[7].length<=o[8]&&a==_;if(!(S||I))return n;f&N&&(n[2]=o[2],h|=a&N?0:C);var A=o[3];if(A){var D=n[3];n[3]=D?Tm(D,A,o[4]):A,n[4]=D?yr(n[3],y):o[4]}return A=o[5],A&&(D=n[5],n[5]=D?Em(D,A,o[6]):A,n[6]=D?yr(n[5],y):o[6]),A=o[7],A&&(n[7]=A),f&Q&&(n[8]=n[8]==null?o[8]:Tt(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=h,n}function BS(n){var o=[];if(n!=null)for(var a in ze(n))o.push(a);return o}function FS(n){return ta.call(n)}function Gm(n,o,a){return o=mt(o===e?n.length-1:o,0),function(){for(var f=arguments,h=-1,S=mt(f.length-o,0),I=U(S);++h<S;)I[h]=f[o+h];h=-1;for(var A=U(o+1);++h<o;)A[h]=f[h];return A[o]=a(I),Ht(n,this,A)}}function Wm(n,o){return o.length<2?n:Jr(n,gn(o,0,-1))}function US(n,o){for(var a=n.length,f=Tt(o.length,a),h=Gt(n);f--;){var S=o[f];n[f]=er(S,a)?h[S]:e}return n}function Gu(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var zm=Qm(mm),Pi=ex||function(n,o){return ht.setTimeout(n,o)},Wu=Qm(cS);function jm(n,o,a){var f=o+"";return Wu(n,_S(f,VS(IS(f),a)))}function Qm(n){var o=0,a=0;return function(){var f=ox(),h=Ie-(f-a);if(a=f,h>0){if(++o>=J)return arguments[0]}else o=0;return n.apply(e,arguments)}}function Ea(n,o){var a=-1,f=n.length,h=f-1;for(o=o===e?f:o;++a<o;){var S=ku(a,h),I=n[S];n[S]=n[a],n[a]=I}return n.length=o,n}var Ym=NS(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(_8,function(a,f,h,S){o.push(h?S.replace(B8,"$1"):f||a)}),o});function kn(n){if(typeof n=="string"||tn(n))return n;var o=n+"";return o=="0"&&1/n==-le?"-0":o}function to(n){if(n!=null){try{return ea.call(n)}catch{}try{return n+""}catch{}}return""}function VS(n,o){return Xt(Re,function(a){var f="_."+a[0];o&a[1]&&!Ks(n,f)&&n.push(f)}),n.sort()}function Km(n){if(n instanceof Ae)return n.clone();var o=new pn(n.__wrapped__,n.__chain__);return o.__actions__=Gt(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function $S(n,o,a){(a?_t(n,o,a):o===e)?o=1:o=mt(Te(o),0);var f=n==null?0:n.length;if(!f||o<1)return[];for(var h=0,S=0,I=U(aa(f/o));h<f;)I[S++]=gn(n,h,h+=o);return I}function qS(n){for(var o=-1,a=n==null?0:n.length,f=0,h=[];++o<a;){var S=n[o];S&&(h[f++]=S)}return h}function GS(){var n=arguments.length;if(!n)return[];for(var o=U(n-1),a=arguments[0],f=n;f--;)o[f-1]=arguments[f];return hr(ve(a)?Gt(a):[a],xt(o,1))}var WS=Me(function(n,o){return st(n)?Ii(n,xt(o,1,st,!0)):[]}),zS=Me(function(n,o){var a=hn(o);return st(a)&&(a=e),st(n)?Ii(n,xt(o,1,st,!0),he(a,2)):[]}),jS=Me(function(n,o){var a=hn(o);return st(a)&&(a=e),st(n)?Ii(n,xt(o,1,st,!0),e,a):[]});function QS(n,o,a){var f=n==null?0:n.length;return f?(o=a||o===e?1:Te(o),gn(n,o<0?0:o,f)):[]}function YS(n,o,a){var f=n==null?0:n.length;return f?(o=a||o===e?1:Te(o),o=f-o,gn(n,0,o<0?0:o)):[]}function KS(n,o){return n&&n.length?ya(n,he(o,3),!0,!0):[]}function ZS(n,o){return n&&n.length?ya(n,he(o,3),!0):[]}function HS(n,o,a,f){var h=n==null?0:n.length;return h?(a&&typeof a!="number"&&_t(n,o,a)&&(a=0,f=h),Gx(n,o,a,f)):[]}function Zm(n,o,a){var f=n==null?0:n.length;if(!f)return-1;var h=a==null?0:Te(a);return h<0&&(h=mt(f+h,0)),Zs(n,he(o,3),h)}function Hm(n,o,a){var f=n==null?0:n.length;if(!f)return-1;var h=f-1;return a!==e&&(h=Te(a),h=a<0?mt(f+h,0):Tt(h,f-1)),Zs(n,he(o,3),h,!0)}function Xm(n){var o=n==null?0:n.length;return o?xt(n,1):[]}function XS(n){var o=n==null?0:n.length;return o?xt(n,le):[]}function JS(n,o){var a=n==null?0:n.length;return a?(o=o===e?1:Te(o),xt(n,o)):[]}function eC(n){for(var o=-1,a=n==null?0:n.length,f={};++o<a;){var h=n[o];Dn(f,h[0],h[1])}return f}function Jm(n){return n&&n.length?n[0]:e}function tC(n,o,a){var f=n==null?0:n.length;if(!f)return-1;var h=a==null?0:Te(a);return h<0&&(h=mt(f+h,0)),To(n,o,h)}function nC(n){var o=n==null?0:n.length;return o?gn(n,0,-1):[]}var rC=Me(function(n){var o=Xe(n,Au);return o.length&&o[0]===n[0]?Cu(o):[]}),oC=Me(function(n){var o=hn(n),a=Xe(n,Au);return o===hn(a)?o=e:a.pop(),a.length&&a[0]===n[0]?Cu(a,he(o,2)):[]}),iC=Me(function(n){var o=hn(n),a=Xe(n,Au);return o=typeof o=="function"?o:e,o&&a.pop(),a.length&&a[0]===n[0]?Cu(a,e,o):[]});function sC(n,o){return n==null?"":nx.call(n,o)}function hn(n){var o=n==null?0:n.length;return o?n[o-1]:e}function aC(n,o,a){var f=n==null?0:n.length;if(!f)return-1;var h=f;return a!==e&&(h=Te(a),h=h<0?mt(f+h,0):Tt(h,f-1)),o===o?V7(n,o,h):Zs(n,P1,h,!0)}function cC(n,o){return n&&n.length?um(n,Te(o)):e}var lC=Me(eg);function eg(n,o){return n&&n.length&&o&&o.length?Eu(n,o):n}function uC(n,o,a){return n&&n.length&&o&&o.length?Eu(n,o,he(a,2)):n}function dC(n,o,a){return n&&n.length&&o&&o.length?Eu(n,o,e,a):n}var fC=Jn(function(n,o){var a=n==null?0:n.length,f=yu(n,o);return pm(n,Xe(o,function(h){return er(h,a)?+h:h}).sort(wm)),f});function pC(n,o){var a=[];if(!(n&&n.length))return a;var f=-1,h=[],S=n.length;for(o=he(o,3);++f<S;){var I=n[f];o(I,f,n)&&(a.push(I),h.push(f))}return pm(n,h),a}function zu(n){return n==null?n:sx.call(n)}function mC(n,o,a){var f=n==null?0:n.length;return f?(a&&typeof a!="number"&&_t(n,o,a)?(o=0,a=f):(o=o==null?0:Te(o),a=a===e?f:Te(a)),gn(n,o,a)):[]}function gC(n,o){return ha(n,o)}function hC(n,o,a){return Ru(n,o,he(a,2))}function yC(n,o){var a=n==null?0:n.length;if(a){var f=ha(n,o);if(f<a&&In(n[f],o))return f}return-1}function bC(n,o){return ha(n,o,!0)}function xC(n,o,a){return Ru(n,o,he(a,2),!0)}function SC(n,o){var a=n==null?0:n.length;if(a){var f=ha(n,o,!0)-1;if(In(n[f],o))return f}return-1}function CC(n){return n&&n.length?gm(n):[]}function vC(n,o){return n&&n.length?gm(n,he(o,2)):[]}function wC(n){var o=n==null?0:n.length;return o?gn(n,1,o):[]}function TC(n,o,a){return n&&n.length?(o=a||o===e?1:Te(o),gn(n,0,o<0?0:o)):[]}function EC(n,o,a){var f=n==null?0:n.length;return f?(o=a||o===e?1:Te(o),o=f-o,gn(n,o<0?0:o,f)):[]}function kC(n,o){return n&&n.length?ya(n,he(o,3),!1,!0):[]}function IC(n,o){return n&&n.length?ya(n,he(o,3)):[]}var RC=Me(function(n){return Cr(xt(n,1,st,!0))}),MC=Me(function(n){var o=hn(n);return st(o)&&(o=e),Cr(xt(n,1,st,!0),he(o,2))}),_C=Me(function(n){var o=hn(n);return o=typeof o=="function"?o:e,Cr(xt(n,1,st,!0),e,o)});function AC(n){return n&&n.length?Cr(n):[]}function LC(n,o){return n&&n.length?Cr(n,he(o,2)):[]}function PC(n,o){return o=typeof o=="function"?o:e,n&&n.length?Cr(n,e,o):[]}function ju(n){if(!(n&&n.length))return[];var o=0;return n=gr(n,function(a){if(st(a))return o=mt(a.length,o),!0}),lu(o,function(a){return Xe(n,su(a))})}function tg(n,o){if(!(n&&n.length))return[];var a=ju(n);return o==null?a:Xe(a,function(f){return Ht(o,e,f)})}var OC=Me(function(n,o){return st(n)?Ii(n,o):[]}),NC=Me(function(n){return _u(gr(n,st))}),DC=Me(function(n){var o=hn(n);return st(o)&&(o=e),_u(gr(n,st),he(o,2))}),BC=Me(function(n){var o=hn(n);return o=typeof o=="function"?o:e,_u(gr(n,st),e,o)}),FC=Me(ju);function UC(n,o){return xm(n||[],o||[],ki)}function VC(n,o){return xm(n||[],o||[],_i)}var $C=Me(function(n){var o=n.length,a=o>1?n[o-1]:e;return a=typeof a=="function"?(n.pop(),a):e,tg(n,a)});function ng(n){var o=x(n);return o.__chain__=!0,o}function qC(n,o){return o(n),n}function ka(n,o){return o(n)}var GC=Jn(function(n){var o=n.length,a=o?n[0]:0,f=this.__wrapped__,h=function(S){return yu(S,n)};return o>1||this.__actions__.length||!(f instanceof Ae)||!er(a)?this.thru(h):(f=f.slice(a,+a+(o?1:0)),f.__actions__.push({func:ka,args:[h],thisArg:e}),new pn(f,this.__chain__).thru(function(S){return o&&!S.length&&S.push(e),S}))});function WC(){return ng(this)}function zC(){return new pn(this.value(),this.__chain__)}function jC(){this.__values__===e&&(this.__values__=hg(this.value()));var n=this.__index__>=this.__values__.length,o=n?e:this.__values__[this.__index__++];return{done:n,value:o}}function QC(){return this}function YC(n){for(var o,a=this;a instanceof da;){var f=Km(a);f.__index__=0,f.__values__=e,o?h.__wrapped__=f:o=f;var h=f;a=a.__wrapped__}return h.__wrapped__=n,o}function KC(){var n=this.__wrapped__;if(n instanceof Ae){var o=n;return this.__actions__.length&&(o=new Ae(this)),o=o.reverse(),o.__actions__.push({func:ka,args:[zu],thisArg:e}),new pn(o,this.__chain__)}return this.thru(zu)}function ZC(){return bm(this.__wrapped__,this.__actions__)}var HC=ba(function(n,o,a){$e.call(n,a)?++n[a]:Dn(n,a,1)});function XC(n,o,a){var f=ve(n)?A1:qx;return a&&_t(n,o,a)&&(o=e),f(n,he(o,3))}function JC(n,o){var a=ve(n)?gr:tm;return a(n,he(o,3))}var ev=Mm(Zm),tv=Mm(Hm);function nv(n,o){return xt(Ia(n,o),1)}function rv(n,o){return xt(Ia(n,o),le)}function ov(n,o,a){return a=a===e?1:Te(a),xt(Ia(n,o),a)}function rg(n,o){var a=ve(n)?Xt:Sr;return a(n,he(o,3))}function og(n,o){var a=ve(n)?w7:em;return a(n,he(o,3))}var iv=ba(function(n,o,a){$e.call(n,a)?n[a].push(o):Dn(n,a,[o])});function sv(n,o,a,f){n=Wt(n)?n:No(n),a=a&&!f?Te(a):0;var h=n.length;return a<0&&(a=mt(h+a,0)),La(n)?a<=h&&n.indexOf(o,a)>-1:!!h&&To(n,o,a)>-1}var av=Me(function(n,o,a){var f=-1,h=typeof o=="function",S=Wt(n)?U(n.length):[];return Sr(n,function(I){S[++f]=h?Ht(o,I,a):Ri(I,o,a)}),S}),cv=ba(function(n,o,a){Dn(n,a,o)});function Ia(n,o){var a=ve(n)?Xe:am;return a(n,he(o,3))}function lv(n,o,a,f){return n==null?[]:(ve(o)||(o=o==null?[]:[o]),a=f?e:a,ve(a)||(a=a==null?[]:[a]),dm(n,o,a))}var uv=ba(function(n,o,a){n[a?0:1].push(o)},function(){return[[],[]]});function dv(n,o,a){var f=ve(n)?ou:N1,h=arguments.length<3;return f(n,he(o,4),a,h,Sr)}function fv(n,o,a){var f=ve(n)?T7:N1,h=arguments.length<3;return f(n,he(o,4),a,h,em)}function pv(n,o){var a=ve(n)?gr:tm;return a(n,_a(he(o,3)))}function mv(n){var o=ve(n)?Z1:sS;return o(n)}function gv(n,o,a){(a?_t(n,o,a):o===e)?o=1:o=Te(o);var f=ve(n)?Bx:aS;return f(n,o)}function hv(n){var o=ve(n)?Fx:lS;return o(n)}function yv(n){if(n==null)return 0;if(Wt(n))return La(n)?ko(n):n.length;var o=Et(n);return o==He||o==qt?n.size:wu(n).length}function bv(n,o,a){var f=ve(n)?iu:uS;return a&&_t(n,o,a)&&(o=e),f(n,he(o,3))}var xv=Me(function(n,o){if(n==null)return[];var a=o.length;return a>1&&_t(n,o[0],o[1])?o=[]:a>2&&_t(o[0],o[1],o[2])&&(o=[o[0]]),dm(n,xt(o,1),[])}),Ra=J7||function(){return ht.Date.now()};function Sv(n,o){if(typeof o!="function")throw new fn(s);return n=Te(n),function(){if(--n<1)return o.apply(this,arguments)}}function ig(n,o,a){return o=a?e:o,o=n&&o==null?n.length:o,Xn(n,Q,e,e,e,e,o)}function sg(n,o){var a;if(typeof o!="function")throw new fn(s);return n=Te(n),function(){return--n>0&&(a=o.apply(this,arguments)),n<=1&&(o=e),a}}var Qu=Me(function(n,o,a){var f=N;if(a.length){var h=yr(a,Po(Qu));f|=W}return Xn(n,f,o,a,h)}),ag=Me(function(n,o,a){var f=N|F;if(a.length){var h=yr(a,Po(ag));f|=W}return Xn(o,f,n,a,h)});function cg(n,o,a){o=a?e:o;var f=Xn(n,_,e,e,e,e,e,o);return f.placeholder=cg.placeholder,f}function lg(n,o,a){o=a?e:o;var f=Xn(n,M,e,e,e,e,e,o);return f.placeholder=lg.placeholder,f}function ug(n,o,a){var f,h,S,I,A,D,z=0,j=!1,Y=!1,H=!0;if(typeof n!="function")throw new fn(s);o=yn(o)||0,Je(a)&&(j=!!a.leading,Y="maxWait"in a,S=Y?mt(yn(a.maxWait)||0,o):S,H="trailing"in a?!!a.trailing:H);function ae(at){var Rn=f,rr=h;return f=h=e,z=at,I=n.apply(rr,Rn),I}function ye(at){return z=at,A=Pi(_e,o),j?ae(at):I}function ke(at){var Rn=at-D,rr=at-z,_g=o-Rn;return Y?Tt(_g,S-rr):_g}function ge(at){var Rn=at-D,rr=at-z;return D===e||Rn>=o||Rn<0||Y&&rr>=S}function _e(){var at=Ra();if(ge(at))return Pe(at);A=Pi(_e,ke(at))}function Pe(at){return A=e,H&&f?ae(at):(f=h=e,I)}function nn(){A!==e&&Sm(A),z=0,f=D=h=A=e}function At(){return A===e?I:Pe(Ra())}function rn(){var at=Ra(),Rn=ge(at);if(f=arguments,h=this,D=at,Rn){if(A===e)return ye(D);if(Y)return Sm(A),A=Pi(_e,o),ae(D)}return A===e&&(A=Pi(_e,o)),I}return rn.cancel=nn,rn.flush=At,rn}var Cv=Me(function(n,o){return J1(n,1,o)}),vv=Me(function(n,o,a){return J1(n,yn(o)||0,a)});function wv(n){return Xn(n,oe)}function Ma(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new fn(s);var a=function(){var f=arguments,h=o?o.apply(this,f):f[0],S=a.cache;if(S.has(h))return S.get(h);var I=n.apply(this,f);return a.cache=S.set(h,I)||S,I};return a.cache=new(Ma.Cache||Hn),a}Ma.Cache=Hn;function _a(n){if(typeof n!="function")throw new fn(s);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function Tv(n){return sg(2,n)}var Ev=dS(function(n,o){o=o.length==1&&ve(o[0])?Xe(o[0],Jt(he())):Xe(xt(o,1),Jt(he()));var a=o.length;return Me(function(f){for(var h=-1,S=Tt(f.length,a);++h<S;)f[h]=o[h].call(this,f[h]);return Ht(n,this,f)})}),Yu=Me(function(n,o){var a=yr(o,Po(Yu));return Xn(n,W,e,o,a)}),dg=Me(function(n,o){var a=yr(o,Po(dg));return Xn(n,$,e,o,a)}),kv=Jn(function(n,o){return Xn(n,V,e,e,e,o)});function Iv(n,o){if(typeof n!="function")throw new fn(s);return o=o===e?o:Te(o),Me(n,o)}function Rv(n,o){if(typeof n!="function")throw new fn(s);return o=o==null?0:mt(Te(o),0),Me(function(a){var f=a[o],h=wr(a,0,o);return f&&hr(h,f),Ht(n,this,h)})}function Mv(n,o,a){var f=!0,h=!0;if(typeof n!="function")throw new fn(s);return Je(a)&&(f="leading"in a?!!a.leading:f,h="trailing"in a?!!a.trailing:h),ug(n,o,{leading:f,maxWait:o,trailing:h})}function _v(n){return ig(n,1)}function Av(n,o){return Yu(Lu(o),n)}function Lv(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function Pv(n){return mn(n,R)}function Ov(n,o){return o=typeof o=="function"?o:e,mn(n,R,o)}function Nv(n){return mn(n,b|R)}function Dv(n,o){return o=typeof o=="function"?o:e,mn(n,b|R,o)}function Bv(n,o){return o==null||X1(n,o,yt(o))}function In(n,o){return n===o||n!==n&&o!==o}var Fv=va(Su),Uv=va(function(n,o){return n>=o}),no=om((function(){return arguments})())?om:function(n){return rt(n)&&$e.call(n,"callee")&&!W1.call(n,"callee")},ve=U.isArray,Vv=E1?Jt(E1):Yx;function Wt(n){return n!=null&&Aa(n.length)&&!tr(n)}function st(n){return rt(n)&&Wt(n)}function $v(n){return n===!0||n===!1||rt(n)&&Mt(n)==it}var Tr=tx||sd,qv=k1?Jt(k1):Kx;function Gv(n){return rt(n)&&n.nodeType===1&&!Oi(n)}function Wv(n){if(n==null)return!0;if(Wt(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Tr(n)||Oo(n)||no(n)))return!n.length;var o=Et(n);if(o==He||o==qt)return!n.size;if(Li(n))return!wu(n).length;for(var a in n)if($e.call(n,a))return!1;return!0}function zv(n,o){return Mi(n,o)}function jv(n,o,a){a=typeof a=="function"?a:e;var f=a?a(n,o):e;return f===e?Mi(n,o,e,a):!!f}function Ku(n){if(!rt(n))return!1;var o=Mt(n);return o==Ft||o==Rt||typeof n.message=="string"&&typeof n.name=="string"&&!Oi(n)}function Qv(n){return typeof n=="number"&&j1(n)}function tr(n){if(!Je(n))return!1;var o=Mt(n);return o==Ut||o==Zt||o==Ve||o==Nn}function fg(n){return typeof n=="number"&&n==Te(n)}function Aa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=me}function Je(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function rt(n){return n!=null&&typeof n=="object"}var pg=I1?Jt(I1):Hx;function Yv(n,o){return n===o||vu(n,o,Uu(o))}function Kv(n,o,a){return a=typeof a=="function"?a:e,vu(n,o,Uu(o),a)}function Zv(n){return mg(n)&&n!=+n}function Hv(n){if(OS(n))throw new xe(i);return im(n)}function Xv(n){return n===null}function Jv(n){return n==null}function mg(n){return typeof n=="number"||rt(n)&&Mt(n)==Vt}function Oi(n){if(!rt(n)||Mt(n)!=$t)return!1;var o=oa(n);if(o===null)return!0;var a=$e.call(o,"constructor")&&o.constructor;return typeof a=="function"&&a instanceof a&&ea.call(a)==K7}var Zu=R1?Jt(R1):Xx;function ew(n){return fg(n)&&n>=-me&&n<=me}var gg=M1?Jt(M1):Jx;function La(n){return typeof n=="string"||!ve(n)&&rt(n)&&Mt(n)==Kn}function tn(n){return typeof n=="symbol"||rt(n)&&Mt(n)==hi}var Oo=_1?Jt(_1):eS;function tw(n){return n===e}function nw(n){return rt(n)&&Et(n)==yi}function rw(n){return rt(n)&&Mt(n)==S8}var ow=va(Tu),iw=va(function(n,o){return n<=o});function hg(n){if(!n)return[];if(Wt(n))return La(n)?Tn(n):Gt(n);if(Si&&n[Si])return B7(n[Si]());var o=Et(n),a=o==He?du:o==qt?Hs:No;return a(n)}function nr(n){if(!n)return n===0?n:0;if(n=yn(n),n===le||n===-le){var o=n<0?-1:1;return o*ce}return n===n?n:0}function Te(n){var o=nr(n),a=o%1;return o===o?a?o-a:o:0}function yg(n){return n?Xr(Te(n),0,Ce):0}function yn(n){if(typeof n=="number")return n;if(tn(n))return fe;if(Je(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=Je(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=D1(n);var a=V8.test(n);return a||q8.test(n)?S7(n.slice(2),a?2:8):U8.test(n)?fe:+n}function bg(n){return Fn(n,zt(n))}function sw(n){return n?Xr(Te(n),-me,me):n===0?n:0}function qe(n){return n==null?"":en(n)}var aw=Ao(function(n,o){if(Li(o)||Wt(o)){Fn(o,yt(o),n);return}for(var a in o)$e.call(o,a)&&ki(n,a,o[a])}),xg=Ao(function(n,o){Fn(o,zt(o),n)}),Sg=Ao(function(n,o,a,f){Fn(o,zt(o),n,f)}),Hu=Ao(function(n,o,a,f){Fn(o,yt(o),n,f)}),cw=Jn(yu);function lw(n,o){var a=_o(n);return o==null?a:H1(a,o)}var uw=Me(function(n,o){n=ze(n);var a=-1,f=o.length,h=f>2?o[2]:e;for(h&&_t(o[0],o[1],h)&&(f=1);++a<f;)for(var S=o[a],I=zt(S),A=-1,D=I.length;++A<D;){var z=I[A],j=n[z];(j===e||In(j,Io[z])&&!$e.call(n,z))&&(n[z]=S[z])}return n}),dw=Me(function(n){return n.push(e,Dm),Ht(Cg,e,n)});function fw(n,o){return L1(n,he(o,3),Bn)}function pw(n,o){return L1(n,he(o,3),xu)}function mw(n,o){return n==null?n:bu(n,he(o,3),zt)}function gw(n,o){return n==null?n:nm(n,he(o,3),zt)}function hw(n,o){return n&&Bn(n,he(o,3))}function yw(n,o){return n&&xu(n,he(o,3))}function bw(n){return n==null?[]:ma(n,yt(n))}function xw(n){return n==null?[]:ma(n,zt(n))}function Xu(n,o,a){var f=n==null?e:Jr(n,o);return f===e?a:f}function Sw(n,o){return n!=null&&Um(n,o,Wx)}function Ju(n,o){return n!=null&&Um(n,o,zx)}var Cw=Am(function(n,o,a){o!=null&&typeof o.toString!="function"&&(o=ta.call(o)),n[o]=a},td(jt)),vw=Am(function(n,o,a){o!=null&&typeof o.toString!="function"&&(o=ta.call(o)),$e.call(n,o)?n[o].push(a):n[o]=[a]},he),ww=Me(Ri);function yt(n){return Wt(n)?K1(n):wu(n)}function zt(n){return Wt(n)?K1(n,!0):tS(n)}function Tw(n,o){var a={};return o=he(o,3),Bn(n,function(f,h,S){Dn(a,o(f,h,S),f)}),a}function Ew(n,o){var a={};return o=he(o,3),Bn(n,function(f,h,S){Dn(a,h,o(f,h,S))}),a}var kw=Ao(function(n,o,a){ga(n,o,a)}),Cg=Ao(function(n,o,a,f){ga(n,o,a,f)}),Iw=Jn(function(n,o){var a={};if(n==null)return a;var f=!1;o=Xe(o,function(S){return S=vr(S,n),f||(f=S.length>1),S}),Fn(n,Bu(n),a),f&&(a=mn(a,b|E|R,vS));for(var h=o.length;h--;)Mu(a,o[h]);return a});function Rw(n,o){return vg(n,_a(he(o)))}var Mw=Jn(function(n,o){return n==null?{}:rS(n,o)});function vg(n,o){if(n==null)return{};var a=Xe(Bu(n),function(f){return[f]});return o=he(o),fm(n,a,function(f,h){return o(f,h[0])})}function _w(n,o,a){o=vr(o,n);var f=-1,h=o.length;for(h||(h=1,n=e);++f<h;){var S=n==null?e:n[kn(o[f])];S===e&&(f=h,S=a),n=tr(S)?S.call(n):S}return n}function Aw(n,o,a){return n==null?n:_i(n,o,a)}function Lw(n,o,a,f){return f=typeof f=="function"?f:e,n==null?n:_i(n,o,a,f)}var wg=Om(yt),Tg=Om(zt);function Pw(n,o,a){var f=ve(n),h=f||Tr(n)||Oo(n);if(o=he(o,4),a==null){var S=n&&n.constructor;h?a=f?new S:[]:Je(n)?a=tr(S)?_o(oa(n)):{}:a={}}return(h?Xt:Bn)(n,function(I,A,D){return o(a,I,A,D)}),a}function Ow(n,o){return n==null?!0:Mu(n,o)}function Nw(n,o,a){return n==null?n:ym(n,o,Lu(a))}function Dw(n,o,a,f){return f=typeof f=="function"?f:e,n==null?n:ym(n,o,Lu(a),f)}function No(n){return n==null?[]:uu(n,yt(n))}function Bw(n){return n==null?[]:uu(n,zt(n))}function Fw(n,o,a){return a===e&&(a=o,o=e),a!==e&&(a=yn(a),a=a===a?a:0),o!==e&&(o=yn(o),o=o===o?o:0),Xr(yn(n),o,a)}function Uw(n,o,a){return o=nr(o),a===e?(a=o,o=0):a=nr(a),n=yn(n),jx(n,o,a)}function Vw(n,o,a){if(a&&typeof a!="boolean"&&_t(n,o,a)&&(o=a=e),a===e&&(typeof o=="boolean"?(a=o,o=e):typeof n=="boolean"&&(a=n,n=e)),n===e&&o===e?(n=0,o=1):(n=nr(n),o===e?(o=n,n=0):o=nr(o)),n>o){var f=n;n=o,o=f}if(a||n%1||o%1){var h=Q1();return Tt(n+h*(o-n+x7("1e-"+((h+"").length-1))),o)}return ku(n,o)}var $w=Lo(function(n,o,a){return o=o.toLowerCase(),n+(a?Eg(o):o)});function Eg(n){return ed(qe(n).toLowerCase())}function kg(n){return n=qe(n),n&&n.replace(W8,L7).replace(l7,"")}function qw(n,o,a){n=qe(n),o=en(o);var f=n.length;a=a===e?f:Xr(Te(a),0,f);var h=a;return a-=o.length,a>=0&&n.slice(a,h)==o}function Gw(n){return n=qe(n),n&&E8.test(n)?n.replace(t1,P7):n}function Ww(n){return n=qe(n),n&&A8.test(n)?n.replace(Yl,"\\$&"):n}var zw=Lo(function(n,o,a){return n+(a?"-":"")+o.toLowerCase()}),jw=Lo(function(n,o,a){return n+(a?" ":"")+o.toLowerCase()}),Qw=Rm("toLowerCase");function Yw(n,o,a){n=qe(n),o=Te(o);var f=o?ko(n):0;if(!o||f>=o)return n;var h=(o-f)/2;return Ca(ca(h),a)+n+Ca(aa(h),a)}function Kw(n,o,a){n=qe(n),o=Te(o);var f=o?ko(n):0;return o&&f<o?n+Ca(o-f,a):n}function Zw(n,o,a){n=qe(n),o=Te(o);var f=o?ko(n):0;return o&&f<o?Ca(o-f,a)+n:n}function Hw(n,o,a){return a||o==null?o=0:o&&(o=+o),ix(qe(n).replace(Kl,""),o||0)}function Xw(n,o,a){return(a?_t(n,o,a):o===e)?o=1:o=Te(o),Iu(qe(n),o)}function Jw(){var n=arguments,o=qe(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var eT=Lo(function(n,o,a){return n+(a?"_":"")+o.toLowerCase()});function tT(n,o,a){return a&&typeof a!="number"&&_t(n,o,a)&&(o=a=e),a=a===e?Ce:a>>>0,a?(n=qe(n),n&&(typeof o=="string"||o!=null&&!Zu(o))&&(o=en(o),!o&&Eo(n))?wr(Tn(n),0,a):n.split(o,a)):[]}var nT=Lo(function(n,o,a){return n+(a?" ":"")+ed(o)});function rT(n,o,a){return n=qe(n),a=a==null?0:Xr(Te(a),0,n.length),o=en(o),n.slice(a,a+o.length)==o}function oT(n,o,a){var f=x.templateSettings;a&&_t(n,o,a)&&(o=e),n=qe(n),o=Hu({},o,f,Nm);var h=Hu({},o.imports,f.imports,Nm),S=yt(h),I=uu(h,S);Xt(S,function(ge){if(r1.test(ge))throw new xe(l)});var A,D,z=0,j=o.interpolate||js,Y="__p += '",H=fu((o.escape||js).source+"|"+j.source+"|"+(j===n1?F8:js).source+"|"+(o.evaluate||js).source+"|$","g"),ae="//# sourceURL="+($e.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++m7+"]")+`
`;n.replace(H,function(ge,_e,Pe,nn,At,rn){return Pe||(Pe=nn),Y+=n.slice(z,rn).replace(z8,O7),_e&&(A=!0,Y+=`' +
__e(`+_e+`) +
'`),At&&(D=!0,Y+=`';
`+At+`;
__p += '`),Pe&&(Y+=`' +
((__t = (`+Pe+`)) == null ? '' : __t) +
'`),z=rn+ge.length,ge}),Y+=`';
`;var ye=$e.call(o,"variable")&&o.variable;if(!ye)Y=`with (obj) {
`+Y+`
}
`;else if(r1.test(ye))throw new xe(c);Y=(D?Y.replace(C8,""):Y).replace(v8,"$1").replace(w8,"$1;"),Y="function("+(ye||"obj")+`) {
`+(ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(A?", __e = _.escape":"")+(D?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Y+`return __p
}`;var ke=Rg(function(){return Ue(S,ae+"return "+Y).apply(e,I)});if(ke.source=Y,Ku(ke))throw ke;return ke}function iT(n){return qe(n).toLowerCase()}function sT(n){return qe(n).toUpperCase()}function aT(n,o,a){if(n=qe(n),n&&(a||o===e))return D1(n);if(!n||!(o=en(o)))return n;var f=Tn(n),h=Tn(o),S=B1(f,h),I=F1(f,h)+1;return wr(f,S,I).join("")}function cT(n,o,a){if(n=qe(n),n&&(a||o===e))return n.slice(0,V1(n)+1);if(!n||!(o=en(o)))return n;var f=Tn(n),h=F1(f,Tn(o))+1;return wr(f,0,h).join("")}function lT(n,o,a){if(n=qe(n),n&&(a||o===e))return n.replace(Kl,"");if(!n||!(o=en(o)))return n;var f=Tn(n),h=B1(f,Tn(o));return wr(f,h).join("")}function uT(n,o){var a=de,f=se;if(Je(o)){var h="separator"in o?o.separator:h;a="length"in o?Te(o.length):a,f="omission"in o?en(o.omission):f}n=qe(n);var S=n.length;if(Eo(n)){var I=Tn(n);S=I.length}if(a>=S)return n;var A=a-ko(f);if(A<1)return f;var D=I?wr(I,0,A).join(""):n.slice(0,A);if(h===e)return D+f;if(I&&(A+=D.length-A),Zu(h)){if(n.slice(A).search(h)){var z,j=D;for(h.global||(h=fu(h.source,qe(o1.exec(h))+"g")),h.lastIndex=0;z=h.exec(j);)var Y=z.index;D=D.slice(0,Y===e?A:Y)}}else if(n.indexOf(en(h),A)!=A){var H=D.lastIndexOf(h);H>-1&&(D=D.slice(0,H))}return D+f}function dT(n){return n=qe(n),n&&T8.test(n)?n.replace(e1,$7):n}var fT=Lo(function(n,o,a){return n+(a?" ":"")+o.toUpperCase()}),ed=Rm("toUpperCase");function Ig(n,o,a){return n=qe(n),o=a?e:o,o===e?D7(n)?W7(n):I7(n):n.match(o)||[]}var Rg=Me(function(n,o){try{return Ht(n,e,o)}catch(a){return Ku(a)?a:new xe(a)}}),pT=Jn(function(n,o){return Xt(o,function(a){a=kn(a),Dn(n,a,Qu(n[a],n))}),n});function mT(n){var o=n==null?0:n.length,a=he();return n=o?Xe(n,function(f){if(typeof f[1]!="function")throw new fn(s);return[a(f[0]),f[1]]}):[],Me(function(f){for(var h=-1;++h<o;){var S=n[h];if(Ht(S[0],this,f))return Ht(S[1],this,f)}})}function gT(n){return $x(mn(n,b))}function td(n){return function(){return n}}function hT(n,o){return n==null||n!==n?o:n}var yT=_m(),bT=_m(!0);function jt(n){return n}function nd(n){return sm(typeof n=="function"?n:mn(n,b))}function xT(n){return cm(mn(n,b))}function ST(n,o){return lm(n,mn(o,b))}var CT=Me(function(n,o){return function(a){return Ri(a,n,o)}}),vT=Me(function(n,o){return function(a){return Ri(n,a,o)}});function rd(n,o,a){var f=yt(o),h=ma(o,f);a==null&&!(Je(o)&&(h.length||!f.length))&&(a=o,o=n,n=this,h=ma(o,yt(o)));var S=!(Je(a)&&"chain"in a)||!!a.chain,I=tr(n);return Xt(h,function(A){var D=o[A];n[A]=D,I&&(n.prototype[A]=function(){var z=this.__chain__;if(S||z){var j=n(this.__wrapped__),Y=j.__actions__=Gt(this.__actions__);return Y.push({func:D,args:arguments,thisArg:n}),j.__chain__=z,j}return D.apply(n,hr([this.value()],arguments))})}),n}function wT(){return ht._===this&&(ht._=Z7),this}function od(){}function TT(n){return n=Te(n),Me(function(o){return um(o,n)})}var ET=Ou(Xe),kT=Ou(A1),IT=Ou(iu);function Mg(n){return $u(n)?su(kn(n)):oS(n)}function RT(n){return function(o){return n==null?e:Jr(n,o)}}var MT=Lm(),_T=Lm(!0);function id(){return[]}function sd(){return!1}function AT(){return{}}function LT(){return""}function PT(){return!0}function OT(n,o){if(n=Te(n),n<1||n>me)return[];var a=Ce,f=Tt(n,Ce);o=he(o),n-=Ce;for(var h=lu(f,o);++a<n;)o(a);return h}function NT(n){return ve(n)?Xe(n,kn):tn(n)?[n]:Gt(Ym(qe(n)))}function DT(n){var o=++Y7;return qe(n)+o}var BT=Sa(function(n,o){return n+o},0),FT=Nu("ceil"),UT=Sa(function(n,o){return n/o},1),VT=Nu("floor");function $T(n){return n&&n.length?pa(n,jt,Su):e}function qT(n,o){return n&&n.length?pa(n,he(o,2),Su):e}function GT(n){return O1(n,jt)}function WT(n,o){return O1(n,he(o,2))}function zT(n){return n&&n.length?pa(n,jt,Tu):e}function jT(n,o){return n&&n.length?pa(n,he(o,2),Tu):e}var QT=Sa(function(n,o){return n*o},1),YT=Nu("round"),KT=Sa(function(n,o){return n-o},0);function ZT(n){return n&&n.length?cu(n,jt):0}function HT(n,o){return n&&n.length?cu(n,he(o,2)):0}return x.after=Sv,x.ary=ig,x.assign=aw,x.assignIn=xg,x.assignInWith=Sg,x.assignWith=Hu,x.at=cw,x.before=sg,x.bind=Qu,x.bindAll=pT,x.bindKey=ag,x.castArray=Lv,x.chain=ng,x.chunk=$S,x.compact=qS,x.concat=GS,x.cond=mT,x.conforms=gT,x.constant=td,x.countBy=HC,x.create=lw,x.curry=cg,x.curryRight=lg,x.debounce=ug,x.defaults=uw,x.defaultsDeep=dw,x.defer=Cv,x.delay=vv,x.difference=WS,x.differenceBy=zS,x.differenceWith=jS,x.drop=QS,x.dropRight=YS,x.dropRightWhile=KS,x.dropWhile=ZS,x.fill=HS,x.filter=JC,x.flatMap=nv,x.flatMapDeep=rv,x.flatMapDepth=ov,x.flatten=Xm,x.flattenDeep=XS,x.flattenDepth=JS,x.flip=wv,x.flow=yT,x.flowRight=bT,x.fromPairs=eC,x.functions=bw,x.functionsIn=xw,x.groupBy=iv,x.initial=nC,x.intersection=rC,x.intersectionBy=oC,x.intersectionWith=iC,x.invert=Cw,x.invertBy=vw,x.invokeMap=av,x.iteratee=nd,x.keyBy=cv,x.keys=yt,x.keysIn=zt,x.map=Ia,x.mapKeys=Tw,x.mapValues=Ew,x.matches=xT,x.matchesProperty=ST,x.memoize=Ma,x.merge=kw,x.mergeWith=Cg,x.method=CT,x.methodOf=vT,x.mixin=rd,x.negate=_a,x.nthArg=TT,x.omit=Iw,x.omitBy=Rw,x.once=Tv,x.orderBy=lv,x.over=ET,x.overArgs=Ev,x.overEvery=kT,x.overSome=IT,x.partial=Yu,x.partialRight=dg,x.partition=uv,x.pick=Mw,x.pickBy=vg,x.property=Mg,x.propertyOf=RT,x.pull=lC,x.pullAll=eg,x.pullAllBy=uC,x.pullAllWith=dC,x.pullAt=fC,x.range=MT,x.rangeRight=_T,x.rearg=kv,x.reject=pv,x.remove=pC,x.rest=Iv,x.reverse=zu,x.sampleSize=gv,x.set=Aw,x.setWith=Lw,x.shuffle=hv,x.slice=mC,x.sortBy=xv,x.sortedUniq=CC,x.sortedUniqBy=vC,x.split=tT,x.spread=Rv,x.tail=wC,x.take=TC,x.takeRight=EC,x.takeRightWhile=kC,x.takeWhile=IC,x.tap=qC,x.throttle=Mv,x.thru=ka,x.toArray=hg,x.toPairs=wg,x.toPairsIn=Tg,x.toPath=NT,x.toPlainObject=bg,x.transform=Pw,x.unary=_v,x.union=RC,x.unionBy=MC,x.unionWith=_C,x.uniq=AC,x.uniqBy=LC,x.uniqWith=PC,x.unset=Ow,x.unzip=ju,x.unzipWith=tg,x.update=Nw,x.updateWith=Dw,x.values=No,x.valuesIn=Bw,x.without=OC,x.words=Ig,x.wrap=Av,x.xor=NC,x.xorBy=DC,x.xorWith=BC,x.zip=FC,x.zipObject=UC,x.zipObjectDeep=VC,x.zipWith=$C,x.entries=wg,x.entriesIn=Tg,x.extend=xg,x.extendWith=Sg,rd(x,x),x.add=BT,x.attempt=Rg,x.camelCase=$w,x.capitalize=Eg,x.ceil=FT,x.clamp=Fw,x.clone=Pv,x.cloneDeep=Nv,x.cloneDeepWith=Dv,x.cloneWith=Ov,x.conformsTo=Bv,x.deburr=kg,x.defaultTo=hT,x.divide=UT,x.endsWith=qw,x.eq=In,x.escape=Gw,x.escapeRegExp=Ww,x.every=XC,x.find=ev,x.findIndex=Zm,x.findKey=fw,x.findLast=tv,x.findLastIndex=Hm,x.findLastKey=pw,x.floor=VT,x.forEach=rg,x.forEachRight=og,x.forIn=mw,x.forInRight=gw,x.forOwn=hw,x.forOwnRight=yw,x.get=Xu,x.gt=Fv,x.gte=Uv,x.has=Sw,x.hasIn=Ju,x.head=Jm,x.identity=jt,x.includes=sv,x.indexOf=tC,x.inRange=Uw,x.invoke=ww,x.isArguments=no,x.isArray=ve,x.isArrayBuffer=Vv,x.isArrayLike=Wt,x.isArrayLikeObject=st,x.isBoolean=$v,x.isBuffer=Tr,x.isDate=qv,x.isElement=Gv,x.isEmpty=Wv,x.isEqual=zv,x.isEqualWith=jv,x.isError=Ku,x.isFinite=Qv,x.isFunction=tr,x.isInteger=fg,x.isLength=Aa,x.isMap=pg,x.isMatch=Yv,x.isMatchWith=Kv,x.isNaN=Zv,x.isNative=Hv,x.isNil=Jv,x.isNull=Xv,x.isNumber=mg,x.isObject=Je,x.isObjectLike=rt,x.isPlainObject=Oi,x.isRegExp=Zu,x.isSafeInteger=ew,x.isSet=gg,x.isString=La,x.isSymbol=tn,x.isTypedArray=Oo,x.isUndefined=tw,x.isWeakMap=nw,x.isWeakSet=rw,x.join=sC,x.kebabCase=zw,x.last=hn,x.lastIndexOf=aC,x.lowerCase=jw,x.lowerFirst=Qw,x.lt=ow,x.lte=iw,x.max=$T,x.maxBy=qT,x.mean=GT,x.meanBy=WT,x.min=zT,x.minBy=jT,x.stubArray=id,x.stubFalse=sd,x.stubObject=AT,x.stubString=LT,x.stubTrue=PT,x.multiply=QT,x.nth=cC,x.noConflict=wT,x.noop=od,x.now=Ra,x.pad=Yw,x.padEnd=Kw,x.padStart=Zw,x.parseInt=Hw,x.random=Vw,x.reduce=dv,x.reduceRight=fv,x.repeat=Xw,x.replace=Jw,x.result=_w,x.round=YT,x.runInContext=P,x.sample=mv,x.size=yv,x.snakeCase=eT,x.some=bv,x.sortedIndex=gC,x.sortedIndexBy=hC,x.sortedIndexOf=yC,x.sortedLastIndex=bC,x.sortedLastIndexBy=xC,x.sortedLastIndexOf=SC,x.startCase=nT,x.startsWith=rT,x.subtract=KT,x.sum=ZT,x.sumBy=HT,x.template=oT,x.times=OT,x.toFinite=nr,x.toInteger=Te,x.toLength=yg,x.toLower=iT,x.toNumber=yn,x.toSafeInteger=sw,x.toString=qe,x.toUpper=sT,x.trim=aT,x.trimEnd=cT,x.trimStart=lT,x.truncate=uT,x.unescape=dT,x.uniqueId=DT,x.upperCase=fT,x.upperFirst=ed,x.each=rg,x.eachRight=og,x.first=Jm,rd(x,(function(){var n={};return Bn(x,function(o,a){$e.call(x.prototype,a)||(n[a]=o)}),n})(),{chain:!1}),x.VERSION=t,Xt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){x[n].placeholder=x}),Xt(["drop","take"],function(n,o){Ae.prototype[n]=function(a){a=a===e?1:mt(Te(a),0);var f=this.__filtered__&&!o?new Ae(this):this.clone();return f.__filtered__?f.__takeCount__=Tt(a,f.__takeCount__):f.__views__.push({size:Tt(a,Ce),type:n+(f.__dir__<0?"Right":"")}),f},Ae.prototype[n+"Right"]=function(a){return this.reverse()[n](a).reverse()}}),Xt(["filter","map","takeWhile"],function(n,o){var a=o+1,f=a==Se||a==pe;Ae.prototype[n]=function(h){var S=this.clone();return S.__iteratees__.push({iteratee:he(h,3),type:a}),S.__filtered__=S.__filtered__||f,S}}),Xt(["head","last"],function(n,o){var a="take"+(o?"Right":"");Ae.prototype[n]=function(){return this[a](1).value()[0]}}),Xt(["initial","tail"],function(n,o){var a="drop"+(o?"":"Right");Ae.prototype[n]=function(){return this.__filtered__?new Ae(this):this[a](1)}}),Ae.prototype.compact=function(){return this.filter(jt)},Ae.prototype.find=function(n){return this.filter(n).head()},Ae.prototype.findLast=function(n){return this.reverse().find(n)},Ae.prototype.invokeMap=Me(function(n,o){return typeof n=="function"?new Ae(this):this.map(function(a){return Ri(a,n,o)})}),Ae.prototype.reject=function(n){return this.filter(_a(he(n)))},Ae.prototype.slice=function(n,o){n=Te(n);var a=this;return a.__filtered__&&(n>0||o<0)?new Ae(a):(n<0?a=a.takeRight(-n):n&&(a=a.drop(n)),o!==e&&(o=Te(o),a=o<0?a.dropRight(-o):a.take(o-n)),a)},Ae.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ae.prototype.toArray=function(){return this.take(Ce)},Bn(Ae.prototype,function(n,o){var a=/^(?:filter|find|map|reject)|While$/.test(o),f=/^(?:head|last)$/.test(o),h=x[f?"take"+(o=="last"?"Right":""):o],S=f||/^find/.test(o);h&&(x.prototype[o]=function(){var I=this.__wrapped__,A=f?[1]:arguments,D=I instanceof Ae,z=A[0],j=D||ve(I),Y=function(_e){var Pe=h.apply(x,hr([_e],A));return f&&H?Pe[0]:Pe};j&&a&&typeof z=="function"&&z.length!=1&&(D=j=!1);var H=this.__chain__,ae=!!this.__actions__.length,ye=S&&!H,ke=D&&!ae;if(!S&&j){I=ke?I:new Ae(this);var ge=n.apply(I,A);return ge.__actions__.push({func:ka,args:[Y],thisArg:e}),new pn(ge,H)}return ye&&ke?n.apply(this,A):(ge=this.thru(Y),ye?f?ge.value()[0]:ge.value():ge)})}),Xt(["pop","push","shift","sort","splice","unshift"],function(n){var o=Xs[n],a=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);x.prototype[n]=function(){var h=arguments;if(f&&!this.__chain__){var S=this.value();return o.apply(ve(S)?S:[],h)}return this[a](function(I){return o.apply(ve(I)?I:[],h)})}}),Bn(Ae.prototype,function(n,o){var a=x[o];if(a){var f=a.name+"";$e.call(Mo,f)||(Mo[f]=[]),Mo[f].push({name:o,func:a})}}),Mo[xa(e,F).name]=[{name:"wrapper",func:e}],Ae.prototype.clone=fx,Ae.prototype.reverse=px,Ae.prototype.value=mx,x.prototype.at=GC,x.prototype.chain=WC,x.prototype.commit=zC,x.prototype.next=jC,x.prototype.plant=YC,x.prototype.reverse=KC,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=ZC,x.prototype.first=x.prototype.head,Si&&(x.prototype[Si]=QC),x}),br=z7();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ht._=br,define(function(){return br})):Yr?((Yr.exports=br)._=br,tu._=br):ht._=br}).call(Xo)});function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ms.apply(null,arguments)}var gs=O(()=>{"use strict";p();m()});function Ay(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Ly=O(()=>{"use strict";p();m()});var fA,Py,Kf=O(()=>{"use strict";p();m();Ly();fA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Py=Ay(function(e){return fA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91})});function pA(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function mA(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Oy,Ny=O(()=>{"use strict";p();m();Oy=(function(){function e(r){var i=this;this._insertTag=function(s){var c;i.tags.length===0?i.insertionPoint?c=i.insertionPoint.nextSibling:i.prepend?c=i.container.firstChild:c=i.before:c=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,c),i.tags.push(s)},this.isSpeedy=r.speedy===void 0?!1:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mA(this));var s=this.tags[this.tags.length-1];if(0)var c;if(this.isSpeedy){var l=pA(s);try{l.insertRule(i,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e})()});var vt,hs,Fe,$c,Jo,ei,Dy,qc,By,Gc=O(()=>{"use strict";p();m();vt="-ms-",hs="-moz-",Fe="-webkit-",$c="comm",Jo="rule",ei="decl",Dy="@import",qc="@keyframes",By="@layer"});function Vy(e,t){return ct(e,0)^45?(((t<<2^ct(e,0))<<2^ct(e,1))<<2^ct(e,2))<<2^ct(e,3):0}function Wc(e){return e.trim()}function Zf(e,t){return(e=t.exec(e))?e[0]:e}function Ne(e,t,r){return e.replace(t,r)}function ys(e,t){return e.indexOf(t)}function ct(e,t){return e.charCodeAt(t)|0}function qr(e,t,r){return e.slice(t,r)}function Nt(e){return e.length}function ti(e){return e.length}function ni(e,t){return t.push(e),e}function Hf(e,t){return e.map(t).join("")}var Fy,go,Uy,ri=O(()=>{"use strict";p();m();Fy=Math.abs,go=String.fromCharCode,Uy=Object.assign});function bs(e,t,r,i,s,c,l){return{value:e,root:t,parent:r,type:i,props:s,children:c,line:zc,column:oi,length:l,return:""}}function ai(e,t){return Uy(bs("",null,null,"",null,null,0),e,{length:-e.length},t)}function qy(){return dt}function Gy(){return dt=Dt>0?ct(si,--Dt):0,oi--,dt===10&&(oi=1,zc--),dt}function Bt(){return dt=Dt<$y?ct(si,Dt++):0,oi++,dt===10&&(oi=1,zc++),dt}function Cn(){return ct(si,Dt)}function xs(){return Dt}function ci(e,t){return qr(si,e,t)}function ii(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jc(e){return zc=oi=1,$y=Nt(si=e),Dt=0,[]}function Qc(e){return si="",e}function li(e){return Wc(ci(Dt-1,Xf(e===91?e+2:e===40?e+1:e)))}function Wy(e){for(;(dt=Cn())&&dt<33;)Bt();return ii(e)>2||ii(dt)>3?"":" "}function zy(e,t){for(;--t&&Bt()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return ci(e,xs()+(t<6&&Cn()==32&&Bt()==32))}function Xf(e){for(;Bt();)switch(dt){case e:return Dt;case 34:case 39:e!==34&&e!==39&&Xf(dt);break;case 40:e===41&&Xf(e);break;case 92:Bt();break}return Dt}function jy(e,t){for(;Bt()&&e+dt!==57;)if(e+dt===84&&Cn()===47)break;return"/*"+ci(t,Dt-1)+"*"+go(e===47?e:Bt())}function Qy(e){for(;!ii(Cn());)Bt();return ci(e,Dt)}var zc,oi,$y,Dt,dt,si,Jf=O(()=>{"use strict";p();m();ri();zc=1,oi=1,$y=0,Dt=0,dt=0,si=""});function Zy(e){return Qc(Yc("",null,null,null,[""],e=jc(e),0,[0],e))}function Yc(e,t,r,i,s,c,l,d,g){for(var y=0,b=0,E=l,R=0,k=0,B=0,N=1,F=1,C=1,_=0,M="",W=s,$=c,Q=i,V=M;F;)switch(B=_,_=Bt()){case 40:if(B!=108&&ct(V,E-1)==58){ys(V+=Ne(li(_),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:V+=li(_);break;case 9:case 10:case 13:case 32:V+=Wy(B);break;case 92:V+=zy(xs()-1,7);continue;case 47:switch(Cn()){case 42:case 47:ni(gA(jy(Bt(),xs()),t,r),g);break;default:V+="/"}break;case 123*N:d[y++]=Nt(V)*C;case 125*N:case 59:case 0:switch(_){case 0:case 125:F=0;case 59+b:C==-1&&(V=Ne(V,/\f/g,"")),k>0&&Nt(V)-E&&ni(k>32?Ky(V+";",i,r,E-1):Ky(Ne(V," ","")+";",i,r,E-2),g);break;case 59:V+=";";default:if(ni(Q=Yy(V,t,r,y,b,s,d,M,W=[],$=[],E),c),_===123)if(b===0)Yc(V,t,Q,Q,W,c,E,d,$);else switch(R===99&&ct(V,3)===110?100:R){case 100:case 108:case 109:case 115:Yc(e,Q,Q,i&&ni(Yy(e,Q,Q,0,0,s,d,M,s,W=[],E),$),s,$,E,d,i?W:$);break;default:Yc(V,Q,Q,Q,[""],$,0,d,$)}}y=b=k=0,N=C=1,M=V="",E=l;break;case 58:E=1+Nt(V),k=B;default:if(N<1){if(_==123)--N;else if(_==125&&N++==0&&Gy()==125)continue}switch(V+=go(_),_*N){case 38:C=b>0?1:(V+="\f",-1);break;case 44:d[y++]=(Nt(V)-1)*C,C=1;break;case 64:Cn()===45&&(V+=li(Bt())),R=Cn(),b=E=Nt(M=V+=Qy(xs())),_++;break;case 45:B===45&&Nt(V)==2&&(N=0)}}return c}function Yy(e,t,r,i,s,c,l,d,g,y,b){for(var E=s-1,R=s===0?c:[""],k=ti(R),B=0,N=0,F=0;B<i;++B)for(var C=0,_=qr(e,E+1,E=Fy(N=l[B])),M=e;C<k;++C)(M=Wc(N>0?R[C]+" "+_:Ne(_,/&\f/g,R[C])))&&(g[F++]=M);return bs(e,t,r,s===0?Jo:d,g,y,b)}function gA(e,t,r){return bs(e,t,r,$c,go(qy()),qr(e,2,-2),0)}function Ky(e,t,r,i){return bs(e,t,r,ei,qr(e,0,i),qr(e,i+1,-1),i)}var Hy=O(()=>{"use strict";p();m();Gc();ri();Jf()});var Xy=O(()=>{"use strict";p();m()});function ho(e,t){for(var r="",i=ti(e),s=0;s<i;s++)r+=t(e[s],s,e,t)||"";return r}function Jy(e,t,r,i){switch(e.type){case By:if(e.children.length)break;case Dy:case ei:return e.return=e.return||e.value;case $c:return"";case qc:return e.return=e.value+"{"+ho(e.children,i)+"}";case Jo:e.value=e.props.join(",")}return Nt(r=ho(e.children,i))?e.return=e.value+"{"+r+"}":""}var e4=O(()=>{"use strict";p();m();Gc();ri()});function t4(e){var t=ti(e);return function(r,i,s,c){for(var l="",d=0;d<t;d++)l+=e[d](r,i,s,c)||"";return l}}function n4(e){return function(t){t.root||(t=t.return)&&e(t)}}var r4=O(()=>{"use strict";p();m();ri()});var o4=O(()=>{"use strict";p();m();Gc();ri();Hy();Xy();Jf();e4();r4()});var Kc=O(()=>{"use strict";p();m()});var i4=O(()=>{"use strict";p();m()});function a4(e,t){switch(Vy(e,t)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+hs+e+vt+e+e;case 6828:case 4268:return Fe+e+vt+e+e;case 6165:return Fe+e+vt+"flex-"+e+e;case 5187:return Fe+e+Ne(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+vt+"flex-$1$2")+e;case 5443:return Fe+e+vt+"flex-item-"+Ne(e,/flex-|-self/,"")+e;case 4675:return Fe+e+vt+"flex-line-pack"+Ne(e,/align-content|flex-|-self/,"")+e;case 5548:return Fe+e+vt+Ne(e,"shrink","negative")+e;case 5292:return Fe+e+vt+Ne(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Ne(e,"-grow","")+Fe+e+vt+Ne(e,"grow","positive")+e;case 4554:return Fe+Ne(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Ne(Ne(Ne(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Ne(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Ne(Ne(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4095:case 3583:case 4068:case 2532:return Ne(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch(ct(e,t+1)){case 109:if(ct(e,t+4)!==45)break;case 102:return Ne(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+hs+(ct(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ys(e,"stretch")?a4(Ne(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ct(e,t+1)!==115)break;case 6444:switch(ct(e,Nt(e)-3-(~ys(e,"!important")&&10))){case 107:return Ne(e,":",":"+Fe)+e;case 101:return Ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Fe+(ct(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+vt+"$2box$3")+e}break;case 5936:switch(ct(e,t+11)){case 114:return Fe+e+vt+Ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+vt+Ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+vt+Ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Fe+e+vt+e+e}return e}var hA,yA,bA,s4,xA,SA,CA,vA,ep,tp=O(()=>{"use strict";p();m();Ny();o4();Kc();i4();hA=function(t,r,i){for(var s=0,c=0;s=c,c=Cn(),s===38&&c===12&&(r[i]=1),!ii(c);)Bt();return ci(t,Dt)},yA=function(t,r){var i=-1,s=44;do switch(ii(s)){case 0:s===38&&Cn()===12&&(r[i]=1),t[i]+=hA(Dt-1,r,i);break;case 2:t[i]+=li(s);break;case 4:if(s===44){t[++i]=Cn()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=go(s)}while(s=Bt());return t},bA=function(t,r){return Qc(yA(jc(t),r))},s4=new WeakMap,xA=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,s=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!s4.get(i))&&!s){s4.set(t,!0);for(var c=[],l=bA(r,c),d=i.props,g=0,y=0;g<l.length;g++)for(var b=0;b<d.length;b++,y++)t.props[y]=c[g]?l[g].replace(/&\f/g,d[b]):d[b]+" "+l[g]}}},SA=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};CA=function(t,r,i,s){if(t.length>-1&&!t.return)switch(t.type){case ei:t.return=a4(t.value,t.length);break;case qc:return ho([ai(t,{value:Ne(t.value,"@","@"+Fe)})],s);case Jo:if(t.length)return Hf(t.props,function(c){switch(Zf(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ho([ai(t,{props:[Ne(c,/:(read-\w+)/,":"+hs+"$1")]})],s);case"::placeholder":return ho([ai(t,{props:[Ne(c,/:(plac\w+)/,":"+Fe+"input-$1")]}),ai(t,{props:[Ne(c,/:(plac\w+)/,":"+hs+"$1")]}),ai(t,{props:[Ne(c,/:(plac\w+)/,vt+"input-$1")]})],s)}return""})}},vA=[CA],ep=function(t){var r=t.key;if(!r)throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(N){var F=N.getAttribute("data-emotion");F.indexOf(" ")!==-1&&(document.head.appendChild(N),N.setAttribute("data-s",""))})}var s=t.stylisPlugins||vA,c={},l,d=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(N){for(var F=N.getAttribute("data-emotion").split(" "),C=1;C<F.length;C++)c[F[C]]=!0;d.push(N)});var g,y=[xA,SA];{var b,E=[Jy,n4(function(N){b.insert(N)})],R=t4(y.concat(s,E)),k=function(F){return ho(Zy(F),R)};g=function(F,C,_,M){b=_,k(F?F+"{"+C.styles+"}":C.styles),M&&(B.inserted[C.name]=!0)}}var B={key:r,sheet:new Oy({key:r,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:g};return B.sheet.hydrate(d),B}});var l4=ee(We=>{"use strict";p();m();var bt=typeof Symbol=="function"&&Symbol.for,np=bt?Symbol.for("react.element"):60103,rp=bt?Symbol.for("react.portal"):60106,Zc=bt?Symbol.for("react.fragment"):60107,Hc=bt?Symbol.for("react.strict_mode"):60108,Xc=bt?Symbol.for("react.profiler"):60114,Jc=bt?Symbol.for("react.provider"):60109,el=bt?Symbol.for("react.context"):60110,op=bt?Symbol.for("react.async_mode"):60111,tl=bt?Symbol.for("react.concurrent_mode"):60111,nl=bt?Symbol.for("react.forward_ref"):60112,rl=bt?Symbol.for("react.suspense"):60113,wA=bt?Symbol.for("react.suspense_list"):60120,ol=bt?Symbol.for("react.memo"):60115,il=bt?Symbol.for("react.lazy"):60116,TA=bt?Symbol.for("react.block"):60121,EA=bt?Symbol.for("react.fundamental"):60117,kA=bt?Symbol.for("react.responder"):60118,IA=bt?Symbol.for("react.scope"):60119;function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case np:switch(e=e.type,e){case op:case tl:case Zc:case Xc:case Hc:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case il:case ol:case Jc:return e;default:return t}}case rp:return t}}}function c4(e){return sn(e)===tl}We.AsyncMode=op;We.ConcurrentMode=tl;We.ContextConsumer=el;We.ContextProvider=Jc;We.Element=np;We.ForwardRef=nl;We.Fragment=Zc;We.Lazy=il;We.Memo=ol;We.Portal=rp;We.Profiler=Xc;We.StrictMode=Hc;We.Suspense=rl;We.isAsyncMode=function(e){return c4(e)||sn(e)===op};We.isConcurrentMode=c4;We.isContextConsumer=function(e){return sn(e)===el};We.isContextProvider=function(e){return sn(e)===Jc};We.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===np};We.isForwardRef=function(e){return sn(e)===nl};We.isFragment=function(e){return sn(e)===Zc};We.isLazy=function(e){return sn(e)===il};We.isMemo=function(e){return sn(e)===ol};We.isPortal=function(e){return sn(e)===rp};We.isProfiler=function(e){return sn(e)===Xc};We.isStrictMode=function(e){return sn(e)===Hc};We.isSuspense=function(e){return sn(e)===rl};We.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Zc||e===tl||e===Xc||e===Hc||e===rl||e===wA||typeof e=="object"&&e!==null&&(e.$$typeof===il||e.$$typeof===ol||e.$$typeof===Jc||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===EA||e.$$typeof===kA||e.$$typeof===IA||e.$$typeof===TA)};We.typeOf=sn});var d4=ee((FZ,u4)=>{"use strict";p();m();u4.exports=l4()});var b4=ee(($Z,y4)=>{"use strict";p();m();var ip=d4(),RA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},MA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_A={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sp={};sp[ip.ForwardRef]=_A;sp[ip.Memo]=g4;function f4(e){return ip.isMemo(e)?g4:sp[e.$$typeof]||RA}var AA=Object.defineProperty,LA=Object.getOwnPropertyNames,p4=Object.getOwnPropertySymbols,PA=Object.getOwnPropertyDescriptor,OA=Object.getPrototypeOf,m4=Object.prototype;function h4(e,t,r){if(typeof t!="string"){if(m4){var i=OA(t);i&&i!==m4&&h4(e,i,r)}var s=LA(t);p4&&(s=s.concat(p4(t)));for(var c=f4(e),l=f4(t),d=0;d<s.length;++d){var g=s[d];if(!MA[g]&&!(r&&r[g])&&!(l&&l[g])&&!(c&&c[g])){var y=PA(t,g);try{AA(e,g,y)}catch{}}}}return e}y4.exports=h4});function sl(e,t,r){var i="";return r.split(" ").forEach(function(s){e[s]!==void 0?t.push(e[s]+";"):i+=s+" "}),i}var NA,Ss,al,Cs=O(()=>{"use strict";p();m();NA=!0;Ss=function(t,r,i){var s=t.key+"-"+r.name;(i===!1||NA===!1)&&t.registered[s]===void 0&&(t.registered[s]=r.styles)},al=function(t,r,i){Ss(t,r,i);var s=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var c=r;do t.insert(r===c?"."+s:"",c,t.sheet,!0),c=c.next;while(c!==void 0)}}});function x4(e){for(var t=0,r,i=0,s=e.length;s>=4;++i,s-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(s){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var S4=O(()=>{"use strict";p();m()});var C4,v4=O(()=>{"use strict";p();m();C4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}});function w4(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var T4=O(()=>{"use strict";p();m()});function vs(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return zn={name:r.name,styles:r.styles,next:zn},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)zn={name:i.name,styles:i.styles,next:zn},i=i.next;var s=r.styles+";";return s}return FA(e,t,r)}case"function":{if(e!==void 0){var c=zn,l=r(e);return zn=c,vs(e,t,l)}break}case"string":if(0)var d,g;break}if(t==null)return r;var y=t[r];return y!==void 0?y:r}function FA(e,t,r){var i="";if(Array.isArray(r))for(var s=0;s<r.length;s++)i+=vs(e,t,r[s])+";";else for(var c in r){var l=r[c];if(typeof l!="object")t!=null&&t[l]!==void 0?i+=c+"{"+t[l]+"}":E4(l)&&(i+=ap(c)+":"+cl(c,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var d=0;d<l.length;d++)E4(l[d])&&(i+=ap(c)+":"+cl(c,l[d])+";");else{var g=vs(e,t,l);switch(c){case"animation":case"animationName":{i+=ap(c)+":"+g+";";break}default:i+=c+"{"+g+"}"}}}return i}var DA,BA,lp,E4,ap,cl,k4,I4,R4,M4,_4,cp,A4,zn,ws,Ts=O(()=>{"use strict";p();m();S4();v4();T4();DA=/[A-Z]|^ms/g,BA=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lp=function(t){return t.charCodeAt(1)===45},E4=function(t){return t!=null&&typeof t!="boolean"},ap=w4(function(e){return lp(e)?e:e.replace(DA,"-$&").toLowerCase()}),cl=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(BA,function(i,s,c){return zn={name:s,styles:c,next:zn},s})}return C4[t]!==1&&!lp(t)&&typeof r=="number"&&r!==0?r+"px":r};k4=/(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,I4=["normal","none","initial","inherit","unset"],R4=cl,M4=/^-ms-/,_4=/-(.)/g,cp={},cl=function(t,r){if(t==="content"&&(typeof r!="string"||I4.indexOf(r)===-1&&!k4.test(r)&&(r.charAt(0)!==r.charAt(r.length-1)||r.charAt(0)!=='"'&&r.charAt(0)!=="'")))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+r+"\"'`");var i=R4(t,r);return i!==""&&!lp(t)&&t.indexOf("-")!==-1&&cp[t]===void 0&&(cp[t]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+t.replace(M4,"ms-").replace(_4,function(s,c){return c.toUpperCase()})+"?")),i};A4=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ws=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var s=!0,c="";zn=void 0;var l=t[0];l==null||l.raw===void 0?(s=!1,c+=vs(i,r,l)):c+=l[0];for(var d=1;d<t.length;d++)c+=vs(i,r,t[d]),s&&(c+=l[d]);var g;A4.lastIndex=0;for(var y="",b;(b=A4.exec(c))!==null;)y+="-"+b[1];var E=x4(c)+y;return{name:E,styles:c,next:zn}}});var ll,UA,VA,ul,Es=O(()=>{"use strict";p();m();ll=Ee(De()),UA=function(t){return t()},VA=ll.useInsertionEffect?ll.useInsertionEffect:!1,ul=VA||UA});var Gr,Is,$A,bH,ks,qA,dl,up,L4=O(()=>{"use strict";p();m();Gr=Ee(De()),Is=Ee(De());tp();gs();Kc();Cs();Ts();Es();$A=!0,bH={}.hasOwnProperty,ks=Gr.createContext(typeof HTMLElement<"u"?ep({key:"speechify"}):null);ks.displayName="EmotionCacheContext";qA=ks.Provider,dl=function(t){return(0,Is.forwardRef)(function(r,i){var s=(0,Is.useContext)(ks);return t(r,s,i)})};$A||(dl=function(t){return function(r){var i=(0,Is.useContext)(ks);return i===null?(i=ep({key:"css"}),Gr.createElement(ks.Provider,{value:i},t(r,i))):t(r,i)}});up=Gr.createContext({})});function GA(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ws(t)}var fl,PH,yo,pl=O(()=>{"use strict";p();m();L4();fl=Ee(De());Cs();Es();Ts();tp();gs();Kc();PH=Ee(b4());yo=function(){var t=GA.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}});var Wr,WA,zA,P4,O4,jA,N4,D4=O(()=>{"use strict";p();m();gs();Wr=Ee(De());Kf();pl();Cs();Ts();Es();WA=Py,zA=function(t){return t!=="theme"},P4=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?WA:zA},O4=function(t,r,i){var s;if(r){var c=r.shouldForwardProp;s=t.__emotion_forwardProp&&c?function(l){return t.__emotion_forwardProp(l)&&c(l)}:c}return typeof s!="function"&&i&&(s=t.__emotion_forwardProp),s},jA=function(t){var r=t.cache,i=t.serialized,s=t.isStringTag;return Ss(r,i,s),ul(function(){return al(r,i,s)}),null},N4=function e(t,r){if(t===void 0)throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);var i=t.__emotion_real===t,s=i&&t.__emotion_base||t,c,l;r!==void 0&&(c=r.label,l=r.target);var d=O4(t,r,i),g=d||P4(s),y=!g("as");return function(){var b=arguments,E=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(c!==void 0&&E.push("label:"+c+";"),b[0]==null||b[0].raw===void 0)E.push.apply(E,b);else{E.push(b[0][0]);for(var R=b.length,k=1;k<R;k++)E.push(b[k],b[0][k])}var B=dl(function(N,F,C){var _=y&&N.as||s,M="",W=[],$=N;if(N.theme==null){$={};for(var Q in N)$[Q]=N[Q];$.theme=Wr.useContext(up)}typeof N.className=="string"?M=sl(F.registered,W,N.className):N.className!=null&&(M=N.className+" ");var V=ws(E.concat(W),F.registered,$);M+=F.key+"-"+V.name,l!==void 0&&(M+=" "+l);var oe=y&&d===void 0?P4(_):g,de={};for(var se in N)y&&se==="as"||oe(se)&&(de[se]=N[se]);return de.className=M,de.ref=C,Wr.createElement(Wr.Fragment,null,Wr.createElement(jA,{cache:F,serialized:V,isStringTag:typeof _=="string"}),Wr.createElement(_,de))});return B.displayName=c!==void 0?c:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",B.defaultProps=t.defaultProps,B.__emotion_real=B,B.__emotion_base=s,B.__emotion_styles=E,B.__emotion_forwardProp=d,Object.defineProperty(B,"toString",{value:function(){return"."+l}}),B.withComponent=function(N,F){return e(N,ms({},r,F,{shouldForwardProp:O4(B,F,!0)})).apply(void 0,E)},B}}});var KH,QA,L,an=O(()=>{"use strict";p();m();D4();gs();KH=Ee(De());Kf();Cs();Ts();Es();QA=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],L=N4.bind();QA.forEach(function(e){L[e]=L(e)})});var ui,di,YA,B4,ml,Rs=O(()=>{"use strict";p();m();an();ui=Ee(De()),di=2e3,YA=10,B4=L.div`
  top: 0;
  pointer-events: none;
  position: absolute;
  background-blend-mode: multiply;
  z-index: ${di};

  ${({show:e})=>e?"opacity: 1":"opacity: 0"};
  transition: opacity 0.15s ease;

  background: linear-gradient(
    ${({isTop:e})=>e?"180deg":"0deg"},
    ${({background:e})=>e} 0%,
    transparent 10%,
    transparent 100%
  );
`,ml=({color:e,element:t,repaintDependency:r,hide:i})=>{let[s,c]=(0,ui.useState)(!0),[l,d]=(0,ui.useState)(!0),[g,y]=(0,ui.useState)({width:t.clientWidth,height:t.clientHeight});return(0,ui.useEffect)(()=>{let b=()=>{let R=t.scrollHeight>t.clientHeight;c(R&&t.scrollTop>0),d(R&&t.clientHeight+t.scrollTop<t.scrollHeight-2),y({width:t.clientWidth-YA,height:t.clientHeight})},E=new MutationObserver(b);return E.observe(t,{childList:!0,subtree:!0,attributes:!0}),t.addEventListener("scroll",b),window.addEventListener("resize",b),b(),()=>{E.disconnect(),t.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[t,r]),u(T,null,u(B4,{isTop:!0,background:e,show:s&&!i?.top,style:g}),u(B4,{isTop:!1,show:l&&!i?.bottom,background:e,style:g}))}});function lX(e){return u(It,{viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.8333 8.33325C14.9128 8.33325 14.1666 9.07944 14.1666 9.99992C14.1666 10.9204 14.9128 11.6666 15.8333 11.6666C16.7538 11.6666 17.5 10.9204 17.5 9.99992C17.5 9.07944 16.7538 8.33325 15.8333 8.33325ZM9.99992 11.6666C9.07944 11.6666 8.33325 10.9204 8.33325 9.99992C8.33325 9.07944 9.07944 8.33325 9.99992 8.33325C10.9204 8.33325 11.6666 9.07944 11.6666 9.99992C11.6666 10.9204 10.9204 11.6666 9.99992 11.6666ZM2.5 9.99992C2.5 9.07944 3.24619 8.33325 4.16667 8.33325C5.08714 8.33325 5.83333 9.07944 5.83333 9.99992C5.83333 10.9204 5.08714 11.6666 4.16667 11.6666C3.24619 11.6666 2.5 10.9204 2.5 9.99992Z",fill:"currentColor"}))}function KA(e){return u("svg",{width:"44",height:"44",stroke:"currentColor",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",...e},u("g",null,u("circle",{cx:"22",cy:"22",r:"20",fill:"none",strokeWidth:"2"})))}function pX(e){return u(It,{viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99984 1.70001C9.65549 1.70001 9.34978 1.92036 9.24089 2.24703L8.48857 4.50401C8.20055 5.36804 7.71533 6.15315 7.07132 6.79716L6.36847 7.50001H3.33317C2.4127 7.50001 1.6665 8.2462 1.6665 9.16668V15.8333C1.6665 16.7538 2.4127 17.5 3.33317 17.5L7.49984 17.4667H13.7467C15.3416 17.4667 16.7082 16.3261 16.9935 14.757L17.9297 9.60793C18.205 8.09379 17.0418 6.70001 15.5028 6.70001H12.6109L12.9655 4.5722C13.2161 3.06868 12.0567 1.70001 10.5324 1.70001H9.99984ZM5.8665 9.10001V15.9H3.33317C3.29635 15.9 3.2665 15.8702 3.2665 15.8333V9.16668C3.2665 9.12986 3.29635 9.10001 3.33317 9.10001H5.8665ZM7.49984 15.8667H13.7467C14.5683 15.8667 15.2723 15.2791 15.4193 14.4708L16.3555 9.32171C16.4522 8.78972 16.0435 8.30001 15.5028 8.30001H11.6665C11.4313 8.30001 11.2081 8.19655 11.0561 8.01711C10.9041 7.83768 10.8387 7.60046 10.8774 7.36849L11.3873 4.30916C11.4729 3.79536 11.0899 3.32638 10.5761 3.30108L10.0065 5.00997C9.6399 6.10965 9.02234 7.10888 8.20269 7.92853L7.49984 8.63138V15.8667Z"}))}function mX(e){return u(It,{viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5001 2.53333V2.5H16.6668C17.5873 2.5 18.3335 3.24619 18.3335 4.16667V10.8333C18.3335 11.7538 17.5873 12.5 16.6668 12.5H13.6315L12.9287 13.2029C12.2846 13.8469 11.7994 14.632 11.5114 15.496L10.7591 17.753C10.6502 18.0797 10.3445 18.3 10.0001 18.3L9.46757 18.3C7.94332 18.3 6.78388 16.9313 7.03447 15.4278L7.38911 13.3H4.49716C2.9582 13.3 1.79499 11.9062 2.07028 10.3921L3.00648 5.24301C3.29177 3.67389 4.65841 2.53333 6.25325 2.53333L12.5001 2.53333ZM12.5001 4.13333L6.25325 4.13333C5.43166 4.13333 4.72764 4.72089 4.58067 5.52923L3.64448 10.6783C3.54775 11.2103 3.95645 11.7 4.49716 11.7L8.33347 11.7C8.56864 11.7 8.79189 11.8035 8.94389 11.9829C9.09589 12.1623 9.16125 12.3996 9.12259 12.6315L8.6127 15.6909C8.52707 16.2047 8.9101 16.6736 9.42389 16.6989L9.99352 14.99C10.3601 13.8904 10.9776 12.8911 11.7973 12.0715L12.5001 11.3686L12.5001 4.13333ZM14.1335 10.9H16.6668C16.7036 10.9 16.7335 10.8702 16.7335 10.8333V4.16667C16.7335 4.12985 16.7036 4.1 16.6668 4.1L14.1335 4.1L14.1335 10.9Z"}))}function gX(e){return u(It,{viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.0168 4.59663C18.4073 4.98716 18.4073 5.62033 18.0168 6.01084L8.62378 15.4033C8.43623 15.5908 8.18185 15.6962 7.91662 15.6961C7.65139 15.6961 7.39703 15.5907 7.20951 15.4032L1.98324 10.1758C1.59276 9.78519 1.59283 9.15202 1.9834 8.76154C2.37397 8.37106 3.00713 8.37113 3.39761 8.7617L7.91679 13.2819L16.6026 4.59658C16.9932 4.20607 17.6263 4.20609 18.0168 4.59663Z",fill:v["icn-txt-accent"]}))}function hX(e){return u(It,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.4238 6.41626C14.2593 4.65741 12.2641 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5898 6.41015 16.5 10 16.5C13.3367 16.5 16.0874 13.9849 16.4576 10.7477C16.5203 10.199 17.016 9.80501 17.5647 9.86775C18.1134 9.93048 18.5073 10.4262 18.4446 10.9749C17.9603 15.2106 14.365 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C12.7528 1.5 15.1988 2.80879 16.7514 4.83533V3.54052C16.7514 2.98823 17.1991 2.54052 17.7514 2.54052C18.3037 2.54052 18.7514 2.98823 18.7514 3.54052V7.41626C18.7514 7.96855 18.3037 8.41626 17.7514 8.41626L13.8756 8.41626C13.3233 8.41626 12.8756 7.96855 12.8756 7.41626C12.8756 6.86398 13.3233 6.41626 13.8756 6.41626L15.4238 6.41626Z",fill:"currentColor"}))}function yX(e){return u("svg",{width:"140",height:"140",viewBox:"0 0 140 140",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("g",{clipPath:"url(#clip0_5161_1858)"},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.90002 42.9138C1.97944 27.1559 2.51915 19.2769 10.9755 10.8414C19.4318 2.40579 27.252 1.88942 42.8922 0.856688C50.7115 0.340376 59.7525 0 70 0C80.2475 0 89.2885 0.340376 97.1078 0.856687C112.748 1.88942 120.568 2.40579 129.025 10.8414C137.481 19.2769 138.021 27.1559 139.1 42.9138C139.64 50.8046 140 59.863 140 70C140 79.5518 139.681 88.1461 139.192 95.7081C138.122 112.252 137.587 120.524 129.134 128.997C120.682 137.471 112.352 138.03 95.6931 139.149C88.0563 139.662 79.4427 140 70 140C60.5573 140 51.9437 139.662 44.3069 139.149C27.648 138.03 19.3185 137.471 10.8658 128.997C2.41318 120.524 1.87821 112.252 0.808262 95.7081C0.319199 88.1461 0 79.5518 0 70C0 59.863 0.359506 50.8045 0.90002 42.9138Z",fill:v["bg-sec-0-100"]}),u("path",{d:"M22.9036 51.7375C22.2724 48.5869 24.3149 45.521 27.4656 44.8898L55.7409 39.2252C57.3113 38.9106 58.9419 39.2573 60.2485 40.1835L74.6995 50.4274C75.9108 51.2861 76.748 52.5753 77.0396 54.0311L86.1891 99.7019C86.8203 102.853 84.7779 105.918 81.6272 106.55L41.4315 114.602C38.2808 115.234 35.215 113.191 34.5838 110.04L22.9036 51.7375Z",fill:"url(#paint0_linear_5161_1858)"}),u("path",{d:"M61.9277 29.9458C62.2616 26.8006 65.0819 24.5216 68.2271 24.8555L99.4008 28.1646C100.968 28.331 102.398 29.1363 103.353 30.3906L115.003 45.6938C115.888 46.8567 116.295 48.3139 116.141 49.7672L110.841 99.6974C110.507 102.843 107.686 105.122 104.541 104.788L60.2414 100.085C57.0962 99.7515 54.8172 96.9311 55.1511 93.7859L61.9277 29.9458Z",fill:v["bg-sec-0-70"]}),u("path",{d:"M77.292 52.5967L95.4755 75.7194",stroke:v["bg-sec-0-100"],strokeWidth:"8.01761",strokeLinecap:"round"}),u("path",{d:"M97.9453 55.0659L74.8227 73.2496",stroke:v["bg-sec-0-100"],strokeWidth:"8.01761",strokeLinecap:"round"})),u("defs",null,u("linearGradient",{id:"paint0_linear_5161_1858",x1:"83.9487",y1:"139.324",x2:"-15.0211",y2:"75.4955",gradientUnits:"userSpaceOnUse"},u("stop",{offset:"0.195387",stopColor:v["bg-sec-0-80"]}),u("stop",{offset:"0.760496",stopColor:v["bg-sec-0-70"]})),u("clipPath",{id:"clip0_5161_1858"},u("rect",{width:"140",height:"140",fill:v["icn-txt-prim"]}))))}function vX(e){return u(It,{viewBox:"0 0 20 20",fill:"none",width:"20",height:"20",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.0168 4.59687C18.4073 4.98741 18.4073 5.62057 18.0168 6.01108L8.62378 15.4035C8.43623 15.5911 8.18185 15.6964 7.91662 15.6964C7.65139 15.6964 7.39703 15.591 7.20951 15.4034L1.98324 10.176C1.59276 9.78543 1.59283 9.15227 1.9834 8.76179C2.37397 8.37131 3.00713 8.37138 3.39761 8.76194L7.91679 13.2821L16.6026 4.59683C16.9932 4.20631 17.6263 4.20633 18.0168 4.59687Z",fill:"currentColor"}))}var It,ZA,HA,uX,dX,fX,F4,bX,U4,dp,xX,SX,CX,wX,TX,EX,kX,IX,RX,MX,_X,AX,gl=O(()=>{"use strict";p();m();an();lt();It=L.svg`
  width: ${({width:e,size:t})=>parseInt(`${e??t??"20"}`)+"px"};
  height: ${({height:e,size:t})=>parseInt(`${e??t??"20"}`)+"px"};
  ${({color:e})=>e&&`color: ${e}`};
  fill: ${({fill:e})=>e??"currentColor"};
  ${({style:e})=>e&&`style: ${e}`};

  ${({onClick:e})=>e&&"cursor: pointer;"}
`;ZA=L(KA)`
  left: ${({left:e})=>e??"-6px"};
  pointer-events: none;
  position: absolute;
  top: ${({top:e})=>e??"-4px"};
  width: ${({size:e})=>e??"26px"};
  height: ${({size:e})=>e??"26px"};

  g {
    transform-origin: center;
    animation: spinner_rotation 2s linear infinite;
  }

  g circle {
    stroke-linecap: round;
    animation: spinner_dash 2s ease-in-out infinite;
  }

  @keyframes spinner_rotation {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner_dash {
    0% {
      stroke-dasharray: 0 330;
      stroke-dashoffset: 0;
    }

    47.5% {
      stroke-dasharray: 92 330;
      stroke-dashoffset: -35;
    }

    95%,
    100% {
      stroke-dasharray: 92 330;
      stroke-dashoffset: -119;
    }
  }
`,HA=e=>u(It,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",width:"20px",height:"20px",...e},u("g",{clipPath:"url(#clip0_2077_39339)"},u("circle",{cx:"10",cy:"10",r:"9.1",stroke:"currentColor",strokeWidth:"1.8"}),u("path",{d:"M13.6875 9.2422C14.2708 9.57899 14.2708 10.421 13.6875 10.7577L8.8125 13.5723C8.22917 13.9091 7.5 13.4881 7.5 12.8146L7.5 7.18539C7.5 6.51181 8.22917 6.09083 8.8125 6.42762L13.6875 9.2422Z",fill:"currentColor"})),u("defs",null,u("clipPath",{id:"clip0_2077_39339"},u("rect",{width:"20",height:"20",fill:"currentColor"})))),uX=e=>u(It,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",width:"20px",height:"20px",...e},u("g",{clipPath:"url(#clip0_2077_39337)"},u("circle",{cx:"10",cy:"10",r:"9.1",stroke:"currentColor",strokeWidth:"1.8"}),u("path",{d:"M6.5166 7.125C6.5166 6.64175 6.90835 6.25 7.3916 6.25H8.1416C8.62485 6.25 9.0166 6.64175 9.0166 7.125V12.875C9.0166 13.3582 8.62485 13.75 8.1416 13.75H7.3916C6.90835 13.75 6.5166 13.3582 6.5166 12.875V7.125Z",fill:"currentColor"}),u("path",{d:"M10.9909 7.125C10.9909 6.64175 11.3827 6.25 11.8659 6.25H12.6159C13.0992 6.25 13.4909 6.64175 13.4909 7.125V12.875C13.4909 13.3582 13.0992 13.75 12.6159 13.75H11.8659C11.3827 13.75 10.9909 13.3582 10.9909 12.875V7.125Z",fill:"currentColor"})),u("defs",null,u("clipPath",{id:"clip0_2077_39337"},u("rect",{width:"20",height:"20",fill:"currentColor"})))),dX=e=>u(T,null,u(ZA,{top:"-3px",left:"-3px"}),u(HA,{...e})),fX=e=>u(It,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.66692 1.99997C7.43968 1.99997 6.44478 2.99479 6.44469 4.22203L6.44452 6.44443H3.77778C2.79594 6.44443 2 7.24037 2 8.22221V16.2222C2 17.2041 2.79594 18 3.77778 18H11.7778C12.7596 18 13.5556 17.2041 13.5556 16.2222V13.5556H15.7775C17.0048 13.5556 17.9997 12.5607 17.9998 11.3334L18 4.22227C18 2.99494 17.0051 1.99997 15.7778 1.99997H8.66692ZM13.5556 11.7778H15.7775C16.023 11.7778 16.222 11.5788 16.222 11.3333L16.2222 4.22221C16.2222 3.97674 16.0232 3.77775 15.7778 3.77775H8.66692C8.42147 3.77775 8.22249 3.97672 8.22247 4.22216L8.2223 6.44443H11.7778C12.7596 6.44443 13.5556 7.24037 13.5556 8.22221V11.7778ZM3.77778 8.22221H11.7778V16.2222H3.77778L3.77778 8.22221Z",fill:"currentColor"}));F4=e=>u(It,{viewBox:"0 0 20 20",fill:"none",size:20,...e},u("path",{d:"M3.4594 7.62655C3.06887 8.01708 3.06887 8.65024 3.4594 9.04077C3.84992 9.43129 4.48309 9.43129 4.87361 9.04077L9.00147 4.91291V17.4999C9.00147 18.0522 9.44918 18.4999 10.0015 18.4999C10.5538 18.4999 11.0015 18.0522 11.0015 17.4999V4.91576L15.1265 9.04077C15.517 9.43129 16.1502 9.43129 16.5407 9.04077C16.9312 8.65024 16.9312 8.01708 16.5407 7.62655L10.7071 1.79301C10.3166 1.40249 9.68346 1.40249 9.29293 1.79302L3.4594 7.62655Z",fill:"currentColor"})),bX=e=>u(It,{viewBox:"0 0 20 20",fill:"none",width:"20",height:"20",...e},u("path",{d:"M10 6.66663L10 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u("path",{d:"M3.33301 8.33337L3.33301 10.8334",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u("path",{d:"M16.667 8.33337L16.667 10.8334",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u("path",{d:"M6.66699 4.16663L6.66699 12.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u("path",{d:"M13.333 5L13.333 12.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),U4=({...e})=>u(It,{viewBox:"0 0 12 12",fill:"none",size:12,...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.92417 6.57466C10.1585 6.80898 10.1585 7.18888 9.92417 7.42319L6.42404 10.9233C6.18973 11.1576 5.80983 11.1576 5.57552 10.9233L2.07539 7.42319C1.84108 7.18887 1.84108 6.80898 2.07539 6.57466C2.30971 6.34035 2.68961 6.34035 2.92392 6.57466L5.39893 9.04966L5.39893 1.49917C5.39893 1.1678 5.66755 0.89917 5.99893 0.89917C6.3303 0.89917 6.59893 1.1678 6.59893 1.49917V9.05137L9.07564 6.57466C9.30995 6.34035 9.68985 6.34035 9.92417 6.57466Z",fill:v["icn-txt-prim"]})),dp=e=>u(It,{viewBox:"0 0 12 10",width:"12",height:"10",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e},u("g",{clipPath:"url(#clip0_689_71660)"},u("path",{d:"M1.13492 0.0200195C0.735779 0.0200195 0.560351 0.306774 0.509258 0.588608C0.462969 0.824037 0.450195 1.1238 0.450195 1.46845C0.450195 4.22845 1.5943 5.47884 4.30625 5.47884H8.18894L9.58862 5.39892L7.83968 6.98368L6.53678 8.3047C6.4209 8.42434 6.35188 8.58232 6.35188 8.76406C6.35188 9.11716 6.61568 9.3766 6.98354 9.3766C7.14362 9.3766 7.30202 9.31018 7.44992 9.16606L11.3046 5.31724C11.4424 5.18423 11.5147 5.01255 11.5147 4.83549C11.5147 4.66322 11.4424 4.48569 11.3046 4.35854L7.44032 0.495333C7.30202 0.361857 7.14362 0.300217 6.98354 0.300217C6.61568 0.300217 6.35188 0.559668 6.35188 0.912753C6.35188 1.09451 6.42571 1.25142 6.53678 1.36732L7.83968 2.68626L9.59342 4.28061L8.18894 4.19588H4.38746C2.43851 4.19588 1.74488 3.39654 1.74488 1.42731C1.74488 1.10283 1.76667 0.876303 1.76667 0.650601C1.76667 0.275252 1.5071 0.0200195 1.13492 0.0200195Z",fill:"currentColor"})),u("defs",null,u("clipPath",{id:"clip0_689_71660"},u("rect",{width:"11.0645",height:"9.88338",fill:v["icn-txt-prim"],transform:"translate(0.450195 0.0205078)"})))),xX=e=>u(It,{viewBox:"0 0 32 32",fill:"none",width:"32",height:"32",size:32,...e},u("path",{d:"M22.1368 17.4951C22.4155 17.0185 23.0282 16.8582 23.5049 17.1367C23.9815 17.4154 24.1419 18.0281 23.8633 18.5049C22.4505 20.9225 19.9344 22.6256 17 22.9443V27H21L21.1026 27.0049C21.6067 27.0562 22 27.4823 22 28C22 28.5177 21.6067 28.9438 21.1026 28.9951L21 29H11C10.4478 29 10 28.5523 10 28C10 27.4477 10.4478 27 11 27H15V22.9434C13.294 22.7578 11.7283 22.1058 10.4395 21.1152L10.1368 20.873C9.44079 20.2894 8.83407 19.6034 8.34086 18.8379L8.13676 18.5049L8.08988 18.4141C7.87942 17.9529 8.04823 17.3981 8.49516 17.1367C8.94231 16.8754 9.5091 17.0004 9.80766 17.4102L9.86332 17.4951L10.0225 17.7539C10.4062 18.3495 10.8784 18.885 11.4219 19.3408L11.6573 19.5303C12.8559 20.4516 14.3617 21 16 21C18.6247 21 20.9131 19.5891 22.1368 17.4951Z",fill:"currentColor"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 3C18.7615 3 21 5.23858 21 8V14C21 16.7614 18.7615 19 16 19C13.2386 19 11 16.7614 11 14V8C11 5.23859 13.2386 3.00003 16 3ZM16 5C14.3432 5.00003 13 6.34316 13 8V14C13 15.6568 14.3432 17 16 17C17.6569 17 19 15.6569 19 14V8C19 6.34315 17.6569 5 16 5Z",fill:"currentColor"})),SX=e=>u(It,{viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",size:16,...e},u("path",{d:"M3 13L12 4M12 4H5M12 4V11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),CX=e=>u(It,{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...e},u("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}));wX=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7976 5.02809L15.062 4.29244C14.8678 4.09828 14.5534 4.09703 14.3577 4.28964L13.1016 5.52585L14.5401 6.9643L15.7935 5.73922C15.9926 5.54464 15.9945 5.22493 15.7976 5.02809ZM4.16563 14.3207L11.6762 6.9288L13.1097 8.36232L5.45547 15.8432C5.36205 15.9345 5.23661 15.9856 5.10599 15.9856L4.01636 15.9856V14.677C4.01636 14.5431 4.07014 14.4147 4.16563 14.3207ZM16.4762 2.87823C15.5054 1.90741 13.9333 1.90115 12.9548 2.86421L2.76272 12.8953C2.28525 13.3652 2.01636 14.0071 2.01636 14.677V17.1523C2.01636 17.6125 2.38945 17.9856 2.84969 17.9856L5.10599 17.9856C5.75912 17.9856 6.38631 17.73 6.8534 17.2735L17.1915 7.16953C18.1869 6.19664 18.1961 4.5981 17.2118 3.61388L16.4762 2.87823ZM10.5 16.0001C9.94773 16.0001 9.50002 16.4478 9.50002 17.0001C9.50002 17.5523 9.94773 18.0001 10.5 18.0001H17C17.5523 18.0001 18 17.5523 18 17.0001C18 16.4478 17.5523 16.0001 17 16.0001H10.5Z",fill:"currentColor"})),TX=e=>u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.99984V1.6665C11 1.11422 10.5523 0.666504 10 0.666504C9.44771 0.666504 9 1.11422 9 1.6665V2.99984H3.5C2.94772 2.99984 2.5 3.44755 2.5 3.99984C2.5 4.55212 2.94772 4.99984 3.5 4.99984H4.05344L4.61193 15.1644C4.69932 16.7549 6.01451 17.9998 7.60741 17.9998H12.3926C13.9855 17.9998 15.3007 16.7549 15.3881 15.1644L15.9466 4.99984H16.5C17.0523 4.99984 17.5 4.55212 17.5 3.99984C17.5 3.44755 17.0523 2.99984 16.5 2.99984H11ZM6.05645 4.99984L6.60892 15.0547C6.63805 15.5849 7.07644 15.9998 7.60741 15.9998H12.3926C12.9236 15.9998 13.362 15.5849 13.3911 15.0547L13.9435 4.99984H6.05645Z",fill:"currentColor"})),EX=e=>u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.90544 3.4001H11.0977L11.4871 4.19505C12.0056 5.25348 13.113 5.89287 14.2889 5.81264L15.1717 5.75241L16.268 7.65123L15.7744 8.38567C15.117 9.36387 15.117 10.6426 15.7744 11.6209L16.2677 12.3549L15.1712 14.2541L14.2889 14.1939C13.113 14.1137 12.0056 14.753 11.4871 15.8115L11.0982 16.6055H8.905L8.51605 15.8115C7.99761 14.753 6.89016 14.1137 5.7143 14.1939L4.83186 14.2541L3.7354 12.355L4.22877 11.6209C4.88617 10.6426 4.88617 9.36387 4.22877 8.38567L3.73512 7.65113L4.83135 5.7524L5.7143 5.81264C6.89016 5.89287 7.99761 5.25348 8.51605 4.19505L8.90544 3.4001ZM12.6059 2.38721C12.3305 1.82498 11.7679 1.6001 11.3016 1.6001H8.70156C8.23526 1.6001 7.67264 1.82498 7.39724 2.38721L6.89956 3.40325C6.70291 3.80472 6.28284 4.04725 5.83683 4.01682L4.70808 3.9398C4.08366 3.8972 3.60769 4.27185 3.37457 4.67562L2.07421 6.92792C1.8411 7.33168 1.75462 7.93121 2.10373 8.45067L2.7348 9.38969C2.98416 9.76073 2.98416 10.2458 2.7348 10.6168L2.10373 11.5559C1.75489 12.0749 1.84115 12.674 2.07416 13.0776L3.37541 15.3314C3.60842 15.735 4.08414 16.1093 4.70808 16.0667L5.83683 15.9897C6.28284 15.9593 6.70291 16.2018 6.89956 16.6033L7.39724 17.6193C7.67221 18.1807 8.23391 18.4055 8.6998 18.4055H11.3034C11.7693 18.4055 12.331 18.1807 12.6059 17.6193L13.1036 16.6033C13.3003 16.2018 13.7203 15.9593 14.1664 15.9897L15.2951 16.0667C15.9189 16.1093 16.3946 15.7351 16.6276 15.3316L17.929 13.0774C18.162 12.6738 18.2482 12.0748 17.8995 11.5559L17.2684 10.6168C17.019 10.2458 17.019 9.76073 17.2684 9.38969L17.8995 8.45067C18.2485 7.9313 18.1621 7.33188 17.929 6.92815L16.6284 4.67549C16.3953 4.27177 15.9194 3.89721 15.2951 3.9398L14.1664 4.01682C13.7203 4.04725 13.3003 3.80472 13.1036 3.40325L12.6059 2.38721ZM11.5343 10.0039C11.5343 10.8507 10.8478 11.5372 10.0009 11.5372C9.1541 11.5372 8.4676 10.8507 8.4676 10.0039C8.4676 9.15703 9.1541 8.47053 10.0009 8.47053C10.8478 8.47053 11.5343 9.15703 11.5343 10.0039ZM13.3343 10.0039C13.3343 11.8448 11.8419 13.3372 10.0009 13.3372C8.15999 13.3372 6.6676 11.8448 6.6676 10.0039C6.6676 8.16292 8.15999 6.67053 10.0009 6.67053C11.8419 6.67053 13.3343 8.16292 13.3343 10.0039Z",fill:"currentColor"})),kX=e=>u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{d:"M9.99992 3.59538C6.05085 3.59538 2.87223 6.74273 2.87223 10.5974C2.87223 11.6744 3.1192 12.6928 3.56017 13.6028C3.76087 14.0169 3.58782 14.5154 3.17365 14.7161C2.75948 14.9168 2.26103 14.7438 2.06032 14.3296C1.51225 13.1986 1.20557 11.9323 1.20557 10.5974C1.20557 5.79734 5.15549 1.92871 9.99992 1.92871C14.8444 1.92871 18.7943 5.79734 18.7943 10.5974C18.7943 11.8797 18.5113 13.0989 18.003 14.1957C17.8095 14.6132 17.3141 14.7949 16.8965 14.6014C16.4789 14.4079 16.2973 13.9125 16.4908 13.4949C16.8996 12.6127 17.1276 11.6322 17.1276 10.5974C17.1276 6.74273 13.949 3.59538 9.99992 3.59538Z",fill:"currentColor"}),u("path",{d:"M10.5892 11.4226L13.8645 8.14735C14.1899 7.82191 14.1899 7.29427 13.8645 6.96884C13.539 6.6434 13.0114 6.6434 12.686 6.96884L9.41066 10.2441C9.08523 10.5696 9.08523 11.0972 9.41066 11.4226C9.7361 11.7481 10.2637 11.7481 10.5892 11.4226Z",fill:"currentColor"}),u("path",{d:"M5.75269 14.9871C5.29245 14.9871 4.91935 15.3602 4.91935 15.8204C4.91935 16.2807 5.29245 16.6537 5.75269 16.6537H14.086C14.5463 16.6537 14.9194 16.2807 14.9194 15.8204C14.9194 15.3602 14.5463 14.9871 14.086 14.9871H5.75269Z",fill:"currentColor"})),IX=e=>u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{d:"M12.5 4.16675L6.66667 10.0001L12.5 15.8334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),RX=e=>u("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.99984V1.6665C11 1.11422 10.5523 0.666504 10 0.666504C9.44771 0.666504 9 1.11422 9 1.6665V2.99984H3.5C2.94772 2.99984 2.5 3.44755 2.5 3.99984C2.5 4.55212 2.94772 4.99984 3.5 4.99984H4.05344L4.61193 15.1644C4.69932 16.7549 6.01451 17.9998 7.60741 17.9998H12.3926C13.9855 17.9998 15.3007 16.7549 15.3881 15.1644L15.9466 4.99984H16.5C17.0523 4.99984 17.5 4.55212 17.5 3.99984C17.5 3.44755 17.0523 2.99984 16.5 2.99984H11ZM6.05645 4.99984L6.60892 15.0547C6.63805 15.5849 7.07644 15.9998 7.60741 15.9998H12.3926C12.9236 15.9998 13.362 15.5849 13.3911 15.0547L13.9435 4.99984H6.05645Z",fill:"currentColor"})),MX=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9C4 6.23858 6.23858 4 9 4C11.7614 4 14 6.23858 14 9ZM13.1927 14.606C12.0241 15.4814 10.5726 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.5721 15.4818 12.0231 14.6068 13.1916L17.7914 16.3762C18.1819 16.7668 18.1819 17.3999 17.7914 17.7904C17.4009 18.181 16.7677 18.181 16.3772 17.7904L13.1927 14.606Z",fill:"currentColor"})),_X=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...e},u("path",{d:"M3 13L12 4M12 4H5M12 4V11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),AX=e=>u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{d:"M11.0826 8.0992C11.0826 8.69751 10.5976 9.18254 9.9993 9.18254C9.40099 9.18254 8.91596 8.69751 8.91596 8.0992C8.91596 7.50089 9.40099 7.01587 9.9993 7.01587C10.5976 7.01587 11.0826 7.50089 11.0826 8.0992Z",fill:"currentColor"}),u("path",{d:"M9.9993 12.9996C10.5976 12.9996 11.0826 12.5145 11.0826 11.9162C11.0826 11.3179 10.5976 10.8329 9.9993 10.8329C9.40099 10.8329 8.91596 11.3179 8.91596 11.9162C8.91596 12.5145 9.40099 12.9996 9.9993 12.9996Z",fill:"currentColor"}),u("path",{d:"M7.49926 8.0992C7.49926 8.69751 7.01423 9.18254 6.41592 9.18254C5.81762 9.18254 5.33259 8.69751 5.33259 8.0992C5.33259 7.50089 5.81762 7.01587 6.41592 7.01587C7.01423 7.01587 7.49926 7.50089 7.49926 8.0992Z",fill:"currentColor"}),u("path",{d:"M6.41592 12.9996C7.01423 12.9996 7.49926 12.5145 7.49926 11.9162C7.49926 11.3179 7.01423 10.8329 6.41592 10.8329C5.81762 10.8329 5.33259 11.3179 5.33259 11.9162C5.33259 12.5145 5.81762 12.9996 6.41592 12.9996Z",fill:"currentColor"}),u("path",{d:"M14.666 8.0992C14.666 8.69751 14.181 9.18254 13.5827 9.18254C12.9844 9.18254 12.4993 8.69751 12.4993 8.0992C12.4993 7.50089 12.9844 7.01587 13.5827 7.01587C14.181 7.01587 14.666 7.50089 14.666 8.0992Z",fill:"currentColor"}),u("path",{d:"M13.5827 12.9996C14.181 12.9996 14.666 12.5145 14.666 11.9162C14.666 11.3179 14.181 10.8329 13.5827 10.8329C12.9844 10.8329 12.4993 11.3179 12.4993 11.9162C12.4993 12.5145 12.9844 12.9996 13.5827 12.9996Z",fill:"currentColor"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.99934 0.833008C5.45958 0.833008 5.83267 1.2061 5.83267 1.66634V3.33301L14.166 3.33301V1.66634C14.166 1.2061 14.5391 0.833008 14.9993 0.833008C15.4596 0.833008 15.8327 1.2061 15.8327 1.66634V3.33301C17.2134 3.33301 18.3327 4.45231 18.3327 5.83302L18.3326 14.1311C18.3326 15.3516 17.4496 16.3734 16.2326 16.465C14.8766 16.5671 12.8306 16.6663 9.99937 16.6663C7.16815 16.6663 5.12213 16.5671 3.76607 16.465C2.54904 16.3734 1.66601 15.3516 1.66602 14.1311L1.66606 5.83299C1.66607 4.4523 2.78532 3.33304 4.166 3.33301V1.66634C4.166 1.2061 4.5391 0.833008 4.99934 0.833008ZM4.99934 4.99967L4.16606 4.99967C3.70582 4.99967 3.33273 5.37277 3.33273 5.833L3.33268 14.1311C3.33268 14.5445 3.60683 14.7817 3.89121 14.8031C5.20281 14.9018 7.20697 14.9997 9.99937 14.9997C12.7918 14.9997 14.7959 14.9018 16.1074 14.8031C16.3918 14.7817 16.6659 14.5445 16.6659 14.1311L16.666 5.83301C16.666 5.37277 16.2929 4.99967 15.8327 4.99967H4.99934Z",fill:"currentColor"}))});function $4(e){let[t,r]=(0,hl.useState)(null);return(0,hl.useEffect)(()=>{if(!e)return;let i=()=>{let{scrollTop:d,scrollHeight:g,clientHeight:y}=e,b=d<=5,E=d+y>=g-5;r(b&&E?null:b?"top":E?"bottom":"center")},s=(0,V4.throttle)(i,250);e.addEventListener("scroll",i);let c=new MutationObserver(s);c.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!1});let l=new ResizeObserver(s);return l.observe(e),e.firstElementChild&&l.observe(e.firstElementChild),i(),()=>{e.removeEventListener("scroll",i),c.disconnect(),l.disconnect()}},[e]),t}var V4,hl,q4=O(()=>{"use strict";p();m();V4=Ee(Yf()),hl=Ee(De())});var VX,G4,W4,z4,j4,Q4=O(()=>{"use strict";p();m();an();lt();VX=L.svg`
  width: ${({width:e})=>e??"20px"};
  height: ${({height:e})=>e??"20px"};
  ${({color:e})=>e&&`color: ${e}`};
  fill: ${({fill:e})=>e??"currentColor"};
  ${({style:e})=>e&&`style: ${e}`};

  ${({onClick:e})=>e&&"cursor: pointer;"}
`,G4=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...e},u("rect",{width:"23.3333",height:"23.3333",rx:"5.18519",fill:"#2F43FA"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.43671 9.06186C6.91856 8.34956 7.33643 7.99736 7.96206 8.19301C8.34063 8.3114 8.49604 8.80027 8.34063 9.41369C8.06739 10.4923 7.96206 11.1114 7.96206 11.8483C8.92309 9.81061 10.6996 7.10237 11.4696 6.19147C12.0018 5.56187 12.7646 5.64216 13.0518 5.78259C13.5184 6.01078 13.543 6.50556 13.382 6.97873C12.2677 10.2524 12.2289 12.0008 12.0921 13.6994C12.7846 11.8155 13.6265 10.0435 14.6433 8.7955C15.0717 8.19692 15.8225 8.00902 16.2967 8.20347C16.771 8.39792 16.8791 8.86314 16.771 9.44612C16.4891 10.9664 16.3492 11.6789 16.3492 12.2679C16.8642 11.8694 17.2743 11.5328 18.2117 11.4559C19.1492 11.3789 21.0866 11.7565 21.0866 11.7565C21.0866 11.7565 19.9682 11.9487 19.3774 12.0953C18.1664 12.3957 17.7435 12.747 16.9595 13.9085C16.7317 14.2459 16.3492 14.5051 15.9183 14.4721C15.4874 14.4391 15.1981 14.1649 15.0717 13.7946C14.896 13.2799 14.8437 12.51 15.0717 10.8439C13.9548 12.5628 13.382 14.8979 12.6167 16.4463C12.421 16.8423 12.0868 17.2934 11.6339 17.2934C11.1811 17.2934 10.5938 17.1157 10.5175 15.7546C10.3222 12.2679 10.9734 9.49327 10.9734 9.49327C9.7051 11.5275 9.30005 12.7132 8.85889 13.3315C8.41773 13.9499 7.98966 14.4853 7.46895 14.4721C6.94824 14.4589 6.6452 13.87 6.57931 13.3315C6.51342 12.7931 6.49446 12.1054 6.68691 10.8439C6.18596 11.3506 5.74548 11.6938 4.95663 11.9087C4.16778 12.1236 3.2258 11.9868 2.13281 11.7565C3.2258 11.7565 5.06511 11.0894 6.43671 9.06186Z",fill:"white"})),W4=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.52783 5.83337C10.4903 5.83337 11.2778 5.04587 11.2778 4.08337C11.2778 3.12087 10.4903 2.33337 9.52783 2.33337C8.56533 2.33337 7.77783 3.12087 7.77783 4.08337C7.77783 5.04587 8.56533 5.83337 9.52783 5.83337ZM9.52783 7.58337C8.56533 7.58337 7.77783 8.37087 7.77783 9.33337C7.77783 10.2959 8.56533 11.0834 9.52783 11.0834C10.4903 11.0834 11.2778 10.2959 11.2778 9.33337C11.2778 8.37087 10.4903 7.58337 9.52783 7.58337ZM9.52783 12.8334C8.56533 12.8334 7.77783 13.6209 7.77783 14.5834C7.77783 15.5459 8.56533 16.3334 9.52783 16.3334C10.4903 16.3334 11.2778 15.5459 11.2778 14.5834C11.2778 13.6209 10.4903 12.8334 9.52783 12.8334Z",fill:"currentColor"})),z4=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",...e},u("path",{d:"M7.23364 17.8482H3.55864C3.12552 17.8482 2.75474 17.694 2.4463 17.3856C2.13786 17.0771 1.98364 16.7063 1.98364 16.2732V12.5982C2.56698 12.5691 3.06281 12.3539 3.47114 11.9529C3.87948 11.5519 4.08364 11.067 4.08364 10.4982C4.08364 9.92947 3.87948 9.44457 3.47114 9.04353C3.06281 8.64249 2.56698 8.42738 1.98364 8.39822V4.72322C1.98364 4.29009 2.13786 3.91931 2.4463 3.61087C2.75474 3.30244 3.12552 3.14822 3.55864 3.14822H7.23364C7.23364 2.56488 7.43613 2.06905 7.84111 1.66072C8.24624 1.25238 8.74207 1.04822 9.32861 1.04822C9.9153 1.04822 10.4128 1.25122 10.8211 1.65722C11.2295 2.06322 11.4336 2.56022 11.4336 3.14822H15.1086C15.5418 3.14822 15.9125 3.30244 16.221 3.61087C16.5294 3.91931 16.6836 4.29009 16.6836 4.72322V8.39822C17.267 8.39822 17.7628 8.60071 18.1711 9.00569C18.5795 9.41081 18.7836 9.90664 18.7836 10.4932C18.7836 11.0799 18.5806 11.5774 18.1746 11.9857C17.7686 12.3941 17.2716 12.5982 16.6836 12.5982V16.2732C16.6836 16.7063 16.5294 17.0771 16.221 17.3856C15.9125 17.694 15.5418 17.8482 15.1086 17.8482H11.4336C11.4045 17.2649 11.1902 16.7691 10.791 16.3607C10.3917 15.9524 9.90677 15.7482 9.33627 15.7482C8.76577 15.7482 8.28 15.9524 7.87895 16.3607C7.47791 16.7691 7.26281 17.2649 7.23364 17.8482ZM3.55864 16.2732H6.00864C6.30031 15.617 6.74875 15.1029 7.35395 14.731C7.95916 14.3592 8.61906 14.1732 9.33364 14.1732C10.0482 14.1732 10.7081 14.3592 11.3133 14.731C11.9185 15.1029 12.367 15.617 12.6586 16.2732H15.1086V11.0232H16.6836C16.8236 11.0232 16.9461 10.9707 17.0511 10.8657C17.1561 10.7607 17.2086 10.6382 17.2086 10.4982C17.2086 10.3582 17.3136 11.6532 17.2086 11.5482C17.1036 11.4432 16.8236 11.5482 16.6836 11.5482L15.1086 11.0232V4.72322H9.85864V3.14822C9.85864 3.00822 9.80614 2.88572 9.70114 2.78072C9.59614 2.67572 9.47364 2.62322 9.33364 2.62322C9.19364 2.62322 9.96364 1.99322 9.85864 2.09822C9.75364 2.20322 9.85864 3.00822 9.85864 3.14822V4.72322H3.55864V7.17322C4.21489 7.46488 4.72896 7.91332 5.10083 8.51853C5.4727 9.12374 5.65864 9.78363 5.65864 10.4982C5.65864 11.2304 5.4727 11.8984 5.10083 12.502C4.72896 13.1057 4.21489 13.5461 3.55864 13.8232V16.2732Z",fill:"currentColor"})),j4=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",...e},u("path",{d:"M5.99375 12.9719L8.75 11.3094L11.5063 12.9938L10.7844 9.84375L13.2125 7.74375L10.0188 7.45938L8.75 4.48438L7.48125 7.4375L4.2875 7.72187L6.71563 9.84375L5.99375 12.9719ZM3.34687 16.625L4.76875 10.4781L0 6.34375L6.3 5.79688L8.75 0L11.2 5.79688L17.5 6.34375L12.7312 10.4781L14.1531 16.625L8.75 13.3656L3.34687 16.625Z",fill:"currentColor"}))});var ie,bo=O(()=>{"use strict";p();m();ie={"heading-1":`
    font-family: system-ui;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.72px;
  `,"heading-2":`
    font-family: system-ui;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
    letter-spacing: -0.36px;
  `,"heading-3":`
    font-family: system-ui;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.2px;
  `,"heading-4":`
    font-family: system-ui;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    letter-spacing: -0.18px;
  `,"heading-5":`
    font-family: system-ui;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.08px;
  `,"heading-6":`
    font-family: system-ui;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.43;
    letter-spacing: -0.07px;
  `,"subheading-1":`
    font-family: system-ui;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.22;
    letter-spacing: -0.72px;
  `,"subheading-2":`
    font-family: system-ui;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.36px;
  `,"subheading-3":`
    font-family: system-ui;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
  `,"subheading-4":`
    font-family: system-ui;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.56;
    letter-spacing: -0.18px;
  `,"subheading-5":`
    font-family: system-ui;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.08px;
  `,"subheading-6":`
    font-family: system-ui;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: -0.07px;
  `,"subheading-7":`
    font-family: system-ui;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.06px;
  `,"body-5":`
    font-family: system-ui;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.08px;
  `,"body-6":`
    font-family: system-ui;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -0.07px;
  `,"body-3":`
    font-family: system-ui;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.2px;
  `,"body-7":`
    font-family: system-ui;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.06px;
  `}});var Y4,K4,ZX,HX,Z4,fp,XX,H4,X4,J4,e5,JX,eJ,t5=O(()=>{"use strict";p();m();an();lt();bo();Y4=L.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,K4=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
`,ZX=L.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,HX=L.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${v["sf-sec-0-80"]};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0;
  flex-shrink: 0;
  color: ${v["icn-txt-sec"]};

  &:hover {
    color: ${v["icn-txt-prim"]};
  }

  &:active {
    color: ${v["icn-txt-prim"]};
  }

  svg {
    width: 8px;
    height: 8px;
  }
`,Z4=L.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`,fp=L.div`
  ${ie["subheading-4"]};
  color: ${v["icn-txt-prim"]};
  text-align: center;
  white-space: pre-line;
`,XX=L.div`
  ${ie["body-5"]}
  color: ${v["icn-txt-prim"]};
`,H4=L.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 100%;
  gap: 16px;
  border-radius: 12px;
  border: 1.5px solid ${v["brdr-prim-10-80"]};
  background-color: ${v["toolbar-preview-background"]};

  svg {
    color: ${v["toolbar-preview-color"]};
  }
`,X4=L.div`
  width: 93px;
  height: 32px;
  background: ${v["toolbar-spacer-background"]};
  border-radius: 0px 16px 16px 0px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;

  svg {
    color: ${v["toolbar-spacer-color"]};
  }
`,J4=L.div`
  width: 2px;
  height: 16px;
  background: ${v["toolbar-separator"]};
  border-radius: 12px;
`,e5=L.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 600;
`,JX=L.div`
  display: flex;
  justify-content: center;
`,eJ=L.button`
  width: 100%;
  padding: 8px 16px;
  background: ${v["sf-prim-cta-electric-w"]};
  color: ${v["icn-txt-prim-inv"]};
  border: none;
  border-radius: 9999px;
  ${ie["heading-6"]}
  transition: background-color 0.2s;

  &:hover {
    background: ${v["sf-prim-cta-hov-electric-w"]};
  }

  &:active {
    background: ${v["sf-prim-cta-pres-electric-w"]};
  }
`});var Ms,pp=O(()=>{"use strict";p();m();lt();Q4();t5();Ms=({title:e="Activate AI Notetaking",action:t="record this meeting"})=>u(Y4,null,u(K4,null,u(fp,null,e)),u(Z4,null,u(H4,null,u(X4,null,u(j4,{color:v["toolbar-star-icon"]})),u(G4,null),u(z4,null),u(J4,null),u(e5,null,"U"),u(W4,null)),u(fp,null,"Click the Speechify icon",`
`,"in the toolbar to ",t)))});var yl,mp,gp,n5,r5,hp,o5,i5,s5,a5,gJ,hJ,c5,yJ,l5,yp,bJ,bp,xJ,xp,u5,SJ,CJ,d5,f5,p5,m5,g5,h5,vJ,_s,As,Ls,Ps,y5,b5,x5,S5,wJ,TJ,EJ,Sp,kJ,IJ,RJ,MJ,_J,C5,v5,w5,AJ,LJ,PJ,OJ,T5,NJ,DJ,BJ,FJ,E5,k5,I5,R5,M5,Cp,_5,A5,vp,Os,L5,P5,wp,O5,Tp,N5,D5,Ep,B5,F5,U5,V5,bl,$5,q5,G5,W5,z5,j5,Q5,Y5,K5,Z5,H5,X5,J5,XA,JA,e9,t9,n9,eL,tL,xl,Sl,Ns,Cl,vl,r9,wl,UJ,cn=O(()=>{"use strict";p();m();pl();an();Rs();lt();bo();yl=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${v["bg-prim-w-110"]};

  & > * {
    width: 100%;
    max-width: 600px;
  }
`,mp=L.div`
  flex: 1;
  min-height: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`,gp=L.div`
  display: flex;
  align-items: center;
  justify-content: ${({showTextCenter:e})=>e?"center":"space-between"};
  padding: 12px 16px;
  gap: 48px;
  max-width: unset;
  box-sizing: border-box;
  width: 100%;
`,n5=L.div`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
`,r5=L.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({isRecording:e})=>e?v["icn-txt-crit"]:v["icn-txt-tert"]};
  animation: ${({isRecording:e})=>e?"pulse 1.5s ease-in-out infinite":"none"};

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`,hp=L.div`
  ${ie["heading-5"]};
  color: ${v["icn-txt-prim"]};
  flex: ${({showTextCenter:e})=>e?"none":"1"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`,o5=L.div`
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;

  ${({isOpen:e})=>e&&`
    opacity: 1;
    transform: translateY(0);
  `}
`,i5=L.div`
  border: 1px solid ${v["brdr-prim-10-80"]};
  background-color: ${v["bg-prim-w-100"]};
  border-radius: 20px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,s5=L.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: none;
  border: none;
  gap: 8px;
  box-sizing: border-box;
`,a5=L.div`
  ${ie["subheading-5"]};
  color: ${v["icn-txt-prim"]};
`,gJ=L.div`
  ${ie["body-6"]};
  color: ${v["icn-txt-sec"]};
`,hJ=L.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,c5=L.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,yJ=L.span`
  transform: rotate(${({isOpen:e})=>e?"180deg":"0deg"});
  transition: transform 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  & > svg {
    color: ${v["icn-txt-tert"]};
  }
`,l5=L.div`
  flex: 1;
  min-height: 0;
  padding: 0px 12px;
  overflow-y: auto;
  background-color: ${v["bg-prim-w-100"]};
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 0 0 20px 20px;
  -webkit-user-select: text;
  user-select: text;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease-out, padding 0.25s ease-out;
  padding: 0;

  ${({isOpen:e})=>e&&`
    max-height: none;
    opacity: 1;
    padding: 12px;
  `}
`,yp=L.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,bJ=L.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${v["bg-blue"]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${ie["subheading-7"]};
  color: ${v["icn-txt-blue"]};
`,bp=L.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  ${({isSelf:e})=>e&&"align-items: flex-end;"}
`,xJ=L.div`
  ${ie["subheading-6"]};
  color: ${v["icn-txt-prim"]};
  -webkit-user-select: text;
  user-select: text;
`,xp=L.div`
  ${ie["body-6"]};
  color: ${v["icn-txt-prim"]};
  -webkit-user-select: text;
  user-select: text;
  ${({isSelf:e})=>e?`background-color: ${v["bg-sec-0-90"]}; border-radius: 20px; padding: 10px;`:"margin-right: 24px"}
`,u5=L.div`
  font-style: italic;
  color: ${v["icn-txt-tert"]};
`,SJ=L.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,CJ=L.div`
  padding-right: 12px;
  ${ie["body-6"]};
  color: ${v["icn-txt-prim"]};
`,d5=L.div`
  ${ie["body-6"]};
  color: ${v["icn-txt-sec"]};
  padding: 4px 0;
`,f5=L.button`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: ${v["sf-crit"]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,p5=L.div`
  width: 7.5px;
  height: 7.5px;
  border-radius: 1.875px;
  background-color: ${v["icn-txt-white"]};
`,m5=L.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`,g5=L.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  -webkit-user-select: text;
  user-select: text;
`,h5=L.div`
  padding: ${({type:e})=>e==="user"?"12px 16px":"0"};
  border-radius: 20px;
  ${ie["body-5"]};
  line-height: 1.5;
  align-self: ${({type:e})=>e==="user"?"flex-end":"flex-start"};
  background-color: ${({type:e})=>e==="user"?v["bg-sec-0-90"]:"transparent"};
  color: ${v["icn-txt-prim"]};
  -webkit-user-select: text;
  user-select: text;
  ${({type:e})=>e==="user"&&`
      max-width: 428px;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;
    `}
`,vJ=L.span`
  &::after {
    content: '...';
    animation: dots 1.5s steps(4, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: '';
    }
    40% {
      content: '.';
    }
    60% {
      content: '..';
    }
    80%,
    100% {
      content: '...';
    }
  }
`,_s=L.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,As=L.div`
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
`,Ls=L.div`
  color: ${v["icn-txt-prim"]};
  margin-bottom: 8px;
  ${ie["subheading-2"]};
`,Ps=L.div`
  color: ${v["icn-txt-prim"]};
  max-width: 312px;
  ${ie["body-5"]};
`,y5=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 9999px;
  background: ${v["sf-sec-0-100"]};
  color: ${v["icn-txt-prim"]};
  ${ie["subheading-5"]};
  cursor: pointer;
  transition: background-color 0.15s ease;
  margin-top: 16px;

  &:hover {
    background-color: ${v["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${v["sf-sec-pres-0-100"]};
  }
`,b5=L.div`
  padding: 16px;
  margin: 16px 0;
  box-sizing: border-box;
  width: 100%;
  color: ${v["icn-txt-prim"]};
  border-radius: 8px;
  ${ie["body-6"]};
`,x5=L.div`
  padding: 0px 12px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`,S5=L.div`
  width: 2px;
  height: 16px;
  border-radius: 999px;
  background: ${v["brdr-prim-10-80"]};
  ${({isHide:e})=>e&&"opacity: 0;"}
`,wJ=L.span`
  ${ie["subheading-5"]};
  color: ${v["icn-txt-prim"]};
  display: block;
  margin-bottom: 8px;
`,TJ=L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`,EJ=L.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,Sp=L.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
  padding: 10px 0px 10px 12px;
  border-radius: 20px;
  color: ${v["icn-txt-prim"]};
  ${ie["subheading-5"]};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};
  transition: background-color 0.15s ease, opacity 0.15s ease;

  &:hover {
    background-color: ${({disabled:e})=>e?v["bg-sec-0-90"]:v["sf-prim-hov-w-110"]};
    opacity: ${({disabled:e})=>e?.5:1};
  }

  &:active {
    background-color: ${({disabled:e})=>e?v["bg-sec-0-90"]:v["sf-prim-pres-w-110"]};
    opacity: ${({disabled:e})=>e?.5:1};
  }

  & > svg {
    min-width: 12px;
    min-height: 12px;
  }
`,kJ=L.div`
  height: 1px;
  background-color: ${v["brdr-prim-10-100"]};
  margin: 12px 0;
`,IJ=L.span`
  ${ie["body-5"]};
  color: ${v["icn-txt-sec"]};
  display: block;
  margin-bottom: 8px;
`,RJ=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${v["brdr-prim-10-100"]};
  background-color: ${v["bg-prim-w-100"]};
  color: ${v["icn-txt-prim"]};
  ${ie["subheading-5"]};
  cursor: ${({isLoading:e})=>e?"wait":"pointer"};
  opacity: ${({isLoading:e})=>e?.7:1};
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${v["sf-prim-w-100"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,MJ=L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 0;
`,_J=L.div`
  height: 16px;
  border-radius: 6px;
  background: ${v["bg-prim-w-90"]};
  width: ${({width:e})=>e||"80%"};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, ${v["bg-prim-w-80"]}, transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,C5=L.div`
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
`,v5=L.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  box-sizing: border-box;
`,w5=L.div`
  padding: 0px;
  display: flex;
  align-items: ${({hasText:e})=>e?"flex-end":"center"};
  gap: 8px;
`,AJ=L.label`
  overflow: hidden;
  display: flex;
  flex-direction: ${({hasText:e})=>e?"column":"row"};
  align-items: ${({hasText:e})=>e?"stretch":"center"};
  gap: 8px;
  flex-grow: 1;

  background-color: ${v["bg-sec-0-100"]};
  border-radius: 24px;

  padding: 6px 6px 6px 6px;
  ${({isMultiline:e})=>e?"padding-bottom: 4px":""};

  cursor: text;
  outline: 1px solid ${v["brdr-prim-10-80"]};
`,LJ=L.textarea`
  flex: 1;
  min-width: 0;
  scrollbar-gutter: stable;
  padding: 6px 6px 6px 16px;
  background: none;
  border: none;
  display: block;
  position: relative;
  z-index: 1;
  color: ${v["icn-txt-prim"]};
  ${ie["body-5"]};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
  cursor: text;
  line-height: 20px;
  field-sizing: content;
  resize: none;
  min-height: 34px;
  max-height: 144px;

  &::placeholder {
    color: ${v["icn-txt-tert"]};
  }
`,PJ=L.div`
  display: flex;
  align-items: center;
  justify-content: ${({hasText:e})=>e?"flex-end":"center"};
  gap: 4px;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  padding-top: ${({hasText:e})=>e?"4px":"0"};
`,OJ=L.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({hasText:e})=>e?v["sf-prim-cta"]:v["bg-prim-w-90"]};
  border: none;
  color: ${({hasText:e})=>e?v["icn-txt-white"]:v["icn-txt-tert"]};
  cursor: ${({hasText:e})=>e?"pointer":"default"};
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  padding: 0;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({hasText:e})=>e?v["sf-prim-cta-hov"]:v["bg-prim-w-90"]};
  }
`,T5=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: ${v["sf-sec-0-100"]};
  border: 1px solid ${v["brdr-prim-10-80"]};
  cursor: pointer;
  border-radius: 9999px;
  padding: 0;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${v["sf-sec-hov-0-100"]};
    border-color: ${v["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${v["sf-sec-pres-0-100"]};
    border-color: ${v["sf-sec-pres-0-100"]};
  }

  &:disabled {
    background-color: ${v["sf-sec-0-100"]};
    border-color: ${v["brdr-prim-10-80"]};
    pointer-events: none;

    span {
      background-color: ${v["icn-txt-quat"]};
    }
  }
`,NJ=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${v["icn-txt-tert"]};
  cursor: pointer;
  border-radius: 9999px;
  width: 20px;
  height: 20px;
  padding: 0;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${v["bg-prim-w-90"]};
    color: ${v["icn-txt-sec"]};
  }

  &:active {
    background-color: ${v["bg-prim-w-80"]};
  }
`,DJ=L.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  pointer-events: none;
  z-index: 1;
`,BJ=L.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: ${v["bg-tert-20-60"]};
  color: ${v["icn-txt-prim"]};
  ${ie["body-5"]};
`,FJ=L.span`
  ${ie["body-5"]};
  color: ${v["icn-txt-tert"]};
  display: flex;
  align-items: center;
  gap: 4px;
`,E5=L.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`,k5=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`,I5=L.div`
  display: flex;
  align-items: center;
`,R5=L.div`
  display: flex;
  align-items: center;
`,M5=L.div`
  ${ie["heading-5"]};
  color: ${v["icn-txt-prim"]};
`,Cp=L.button`
  padding: 6px 12px;
  border-radius: 10px;
  border: none;
  background-color: ${v["sf-prim-cta"]};
  color: ${v["icn-txt-white"]};
  ${ie["heading-6"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${v["sf-prim-cta-pres"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_5=L.div`
  padding: 16px;
  padding-bottom: ${({hasPopup:e})=>e?"180px":"16px"};
  min-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-user-select: text;
  user-select: text;

  & * {
    -webkit-user-select: text;
    user-select: text;
  }
`,A5=L.div`
  ${ie["body-5"]};
  color: ${v["icn-txt-prim"]};
  margin-bottom: 8px;
`,vp=L.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Os=L.div`
  height: 16px;
  border-radius: 6px;
  background: ${v["bg-prim-w-90"]};
  width: ${({width:e})=>e||"80%"};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, ${v["bg-prim-w-80"]}, transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,L5=L.div`
  padding: 16px;
  color: ${v["icn-txt-crit"]};
`,P5=L.div`
  ${ie["subheading-4"]};
  color: ${v["icn-txt-prim"]};
  margin-bottom: 8px;
`,wp=L.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  ${ie["body-6"]};
  color: ${v["icn-txt-sec"]};
`,O5=L.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 0;
  width: 100%;
  border-bottom: 2px solid ${v["brdr-prim-10-80"]};
  margin-bottom: 12px;
`,Tp=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  flex: 1;
  border-radius: 20px;
  border: none;
  background-color: ${v["sf-sec-0-100"]};
  color: ${v["icn-txt-prim"]};
  ${ie["subheading-6"]};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${v["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${v["sf-sec-pres-0-100"]};
  }
`,N5=L.div`
  display: flex;
  flex-direction: column;
`,D5=L.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${v["bg-prim-w-100"]};
  box-shadow:'0 -4px 32px 0 rgba(0, 0, 0, 0.16)'
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 20px 20px 0px 0px;
`,Ep=L.div`
  ${ie["subheading-4"]};
  color: ${v["icn-txt-prim"]};
  text-align: ${({align:e})=>e||"left"};
`,B5=L.div`
  display: flex;
  flex-direction: column;
`,F5=L.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`,U5=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 32px 24px 32px;
`,V5=L.div`
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
`,bl=L.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${v["sf-sec-0-80"]};

  & svg {
    color: ${v["icn-txt-sec"]};
  }

  &:hover {
    & svg {
      color: ${v["icn-txt-prim"]};
    }
  }
`,$5=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,q5=L.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.15s ease;
`,G5=L.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding: 0 16px 16px 16px;
  width: 100%;
  box-sizing: border-box;
`,W5=L.textarea`
  width: 100%;
  min-height: 160px;
  max-height: 160px;
  height: 160px;
  padding: 10px 12px;
  border: 1px solid ${v["brdr-prim-10-80"]};
  border-radius: 8px;
  background-color: ${v["bg-sec-0-90"]};
  color: ${v["icn-txt-prim"]};
  ${ie["body-6"]};
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${v["sf-prim-cta-electric-w"]};
  }

  &::placeholder {
    color: ${v["icn-txt-tert"]};
  }
`,z5=L.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,j5=L.div`
  padding: 8px 16px;
  border-radius: 9999px;
  cursor: pointer;
  background-color: ${({selected:e})=>e?v["bg-blue"]:v["sf-sec-0-80"]};
  color: ${({selected:e})=>e?v["icn-txt-blue"]:v["icn-txt-prim"]};
  border: 1px solid ${({selected:e})=>e?v["brdr-blue"]:v["sf-sec-0-80"]};
  ${ie["subheading-6"]};
  transition: all 0.15s ease;
  width: fit-content;

  &:hover {
    background-color: ${({selected:e})=>e?v["bg-blue"]:v["sf-sec-hov-0-80"]};
  }
`,Q5=L.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Y5=L.button`
  padding: 12px 36px;
  border-radius: 9999px;
  border: none;
  ${ie["heading-5"]};
  cursor: pointer;
  transition: background-color 0.15s ease, opacity 0.15s ease;
  width: 100%;
  max-width: 328px;

  background-color: ${v["sf-prim-cta"]};
  color: ${v["icn-txt-white"]};

  &:hover {
    background-color: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${v["sf-prim-cta-pres"]};
  }

  &:disabled {
    background-color: ${v["bg-sec-0-90"]};
    color: ${v["icn-txt-tert"]};
  }
`,K5=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 16px 16px 16px;
  width: 100%;
  box-sizing: border-box;
  height: 522px;
`,Z5=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,H5=L.div`
  ${ie["subheading-2"]};
  color: ${v["icn-txt-prim"]};
`,X5=L.div`
  ${ie["body-5"]};
  color: ${v["icn-txt-prim"]};
  text-align: center;
`,J5=L.button`
  padding: 12px 36px;
  border-radius: 9999px;
  border: none;
  ${ie["heading-5"]};
  cursor: pointer;
  background-color: ${v["sf-prim-cta"]};
  color: ${v["icn-txt-white"]};
  width: 100%;
  max-width: 328px;

  &:hover {
    background-color: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${v["sf-prim-cta-pres"]};
  }
`,XA=yo`
  from {
    transform: translateY(200%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,JA=yo`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(200%);
    opacity: 0;
  }
`,e9=L.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${di+1};

  position: absolute;
  width: 24px;
  height: 24px;
  left: calc(50% - 24px / 2);
  bottom: 8px;

  background: ${v["sf-prim-w-90"]};
  border-radius: 100%;
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;

  &:hover {
    background: ${v["sf-prim-hov-w-90"]};
  }

  &:active {
    background: ${v["sf-prim-pres-w-90"]};
  }

  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  transform: translateY(200%);
  opacity: 0;

  animation: ${({isExiting:e})=>e?JA:XA}
    ${({isExiting:e})=>e?"0.2s ease-in forwards":"0.3s ease-out forwards"};
`,t9=L.div`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
`,n9=L.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: ${di};
`,eL=yo`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,tL=yo`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,xl=L.div`
  position: fixed;
  top: 8px;
  left: 8px;
  right: 8px;
  z-index: 1000;
  animation: ${({isClosing:e})=>e?tL:eL} 0.3s ease-out forwards;
`,Sl=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: ${v["bg-prim-w-100"]};
  border-radius: 16px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
`,Ns=L.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Cl=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${v["icn-txt-prim"]};
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`,vl=L.div`
  ${ie["body-5"]};
  color: ${v["icn-txt-prim"]};
  flex: 1;
`,r9=L.button`
  padding: 4px 12px;
  background: ${v["sf-prim-cta"]};
  color: ${v["icn-txt-white"]};
  border: none;
  border-radius: 9999px;
  ${ie["heading-6"]};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background: ${v["sf-prim-cta-pres"]};
  }
`,wl=L.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${v["sf-sec-0-80"]};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0;
  flex-shrink: 0;
  color: ${v["icn-txt-sec"]};

  &:hover {
    color: ${v["icn-txt-prim"]};
  }

  &:active {
    color: ${v["icn-txt-prim"]};
  }

  svg {
    width: 8px;
    height: 8px;
  }
`,UJ=L.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  ${ie["body-5"]};
  color: ${v["icn-txt-prim"]};
`});var zr,o9,Pn,i9,s9,a9,c9,l9,Tl,ur=O(()=>{"use strict";p();m();zr=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...e},u("path",{d:"M8.8663 6.47946C8.8663 6.95811 8.47828 7.34613 7.99963 7.34613C7.52099 7.34613 7.13297 6.95811 7.13297 6.47946C7.13297 6.00081 7.52099 5.61279 7.99963 5.61279C8.47828 5.61279 8.8663 6.00081 8.8663 6.47946Z",fill:"currentColor"}),u("path",{d:"M7.99963 10.3998C8.47828 10.3998 8.8663 10.0117 8.8663 9.53309C8.8663 9.05444 8.47828 8.66642 7.99963 8.66642C7.52099 8.66642 7.13297 9.05444 7.13297 9.53309C7.13297 10.0117 7.52099 10.3998 7.99963 10.3998Z",fill:"currentColor"}),u("path",{d:"M5.9996 6.47946C5.9996 6.95811 5.61158 7.34613 5.13293 7.34613C4.65429 7.34613 4.26627 6.95811 4.26627 6.47946C4.26627 6.00081 4.65429 5.61279 5.13293 5.61279C5.61158 5.61279 5.9996 6.00081 5.9996 6.47946Z",fill:"currentColor"}),u("path",{d:"M5.13293 10.3998C5.61158 10.3998 5.9996 10.0117 5.9996 9.53309C5.9996 9.05444 5.61158 8.66642 5.13293 8.66642C4.65429 8.66642 4.26627 9.05444 4.26627 9.53309C4.26627 10.0117 4.65429 10.3998 5.13293 10.3998Z",fill:"currentColor"}),u("path",{d:"M11.733 6.47946C11.733 6.95811 11.345 7.34613 10.8663 7.34613C10.3877 7.34613 9.99967 6.95811 9.99967 6.47946C9.99967 6.00081 10.3877 5.61279 10.8663 5.61279C11.345 5.61279 11.733 6.00081 11.733 6.47946Z",fill:"currentColor"}),u("path",{d:"M10.8663 10.3998C11.345 10.3998 11.733 10.0117 11.733 9.53309C11.733 9.05444 11.345 8.66642 10.8663 8.66642C10.3877 8.66642 9.99967 9.05444 9.99967 9.53309C9.99967 10.0117 10.3877 10.3998 10.8663 10.3998Z",fill:"currentColor"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.99967 0.666504C4.36786 0.666504 4.66633 0.964981 4.66633 1.33317V2.6665L11.333 2.6665V1.33317C11.333 0.964981 11.6315 0.666504 11.9997 0.666504C12.3679 0.666504 12.6663 0.964981 12.6663 1.33317V2.6665C13.7709 2.66651 14.6663 3.56194 14.6663 4.66651L14.6663 11.305C14.6663 12.2814 13.9599 13.0988 12.9863 13.1721C11.9014 13.2538 10.2647 13.3332 7.99969 13.3332C5.73471 13.3332 4.0979 13.2538 3.01305 13.1721C2.03943 13.0988 1.333 12.2814 1.33301 11.305L1.33304 4.66649C1.33305 3.56194 2.22845 2.66653 3.333 2.6665V1.33317C3.333 0.964981 3.63148 0.666504 3.99967 0.666504ZM3.99967 3.99984L3.33304 3.99984C2.96485 3.99984 2.66638 4.29831 2.66638 4.6665L2.66634 11.305C2.66634 11.6357 2.88566 11.8254 3.11316 11.8426C4.16244 11.9216 5.76577 11.9998 7.99969 11.9998C10.2336 11.9998 11.8369 11.9216 12.8862 11.8426C13.1136 11.8254 13.3329 11.6357 13.333 11.305L13.333 4.66651C13.333 4.29831 13.0345 3.99984 12.6663 3.99984H3.99967Z",fill:"currentColor"})),o9=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.80958 1.81982C3.49312 1.81982 2.42593 2.88702 2.42593 4.20348V4.85253C2.42593 6.16898 3.49312 7.23618 4.80958 7.23618C6.12604 7.23618 7.19323 6.16898 7.19323 4.85253V4.20348C7.19323 2.88702 6.12604 1.81982 4.80958 1.81982ZM3.82593 4.20348C3.82593 3.66022 4.26632 3.21982 4.80958 3.21982C5.35284 3.21982 5.79323 3.66022 5.79323 4.20348V4.85253C5.79323 5.39578 5.35284 5.83618 4.80958 5.83618C4.26632 5.83618 3.82593 5.39578 3.82593 4.85253V4.20348Z",fill:"currentColor"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8246 1.81982C10.5133 1.81982 9.45034 2.88281 9.45034 4.19408V4.86193C9.45034 6.17319 10.5133 7.23618 11.8246 7.23618C13.1359 7.23618 14.1988 6.17319 14.1988 4.86193V4.19408C14.1988 2.88281 13.1359 1.81982 11.8246 1.81982ZM10.8503 4.19408C10.8503 3.65601 11.2865 3.21982 11.8246 3.21982C12.3627 3.21982 12.7989 3.65601 12.7989 4.19408V4.86193C12.7989 5.39999 12.3627 5.83618 11.8246 5.83618C11.2865 5.83618 10.8503 5.39999 10.8503 4.86193V4.19408Z",fill:"currentColor"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.0684959 12.318C0.556598 10.675 2.15661 8.93652 4.80958 8.93652C7.46255 8.93652 9.06256 10.675 9.55066 12.318C9.83758 13.2837 9.17888 14.1133 8.39819 14.3713C6.00958 15.1609 3.60958 15.1609 1.22097 14.3713C0.440276 14.1133 -0.218416 13.2837 0.0684959 12.318ZM4.80958 10.3365C2.86087 10.3365 1.74749 11.5824 1.41052 12.7167C1.39544 12.7674 1.40046 12.8175 1.43596 12.8751C1.47549 12.9392 1.55228 13.0063 1.66035 13.0421C3.76363 13.7373 5.85553 13.7373 7.95881 13.0421C8.06688 13.0063 8.14367 12.9392 8.1832 12.8751C8.2187 12.8175 8.22372 12.7674 8.20864 12.7167C7.87167 11.5824 6.7583 10.3365 4.80958 10.3365Z",fill:"currentColor"}),u("path",{d:"M11.7969 8.93652C11.3888 8.93652 11.0026 8.97716 10.6394 9.0532C10.261 9.13242 10.0184 9.50338 10.0976 9.88178C10.1769 10.2602 10.5478 10.5027 10.9262 10.4235C11.1921 10.3678 11.4821 10.3365 11.7969 10.3365C13.7251 10.3365 14.8194 11.5191 15.1605 12.5848C15.1754 12.6314 15.1719 12.6769 15.1378 12.732C15.0991 12.7946 15.0219 12.8619 14.9123 12.8968C13.8635 13.2312 12.8211 13.3958 11.7827 13.3943C11.3961 13.3937 11.0823 13.7067 11.0817 14.0933C11.0812 14.4799 11.3941 14.7937 11.7807 14.7943C12.9711 14.796 14.1575 14.6069 15.3376 14.2307C16.1241 13.9799 16.8079 13.1396 16.4939 12.1581C15.9862 10.5715 14.3937 8.93652 11.7969 8.93652Z",fill:"currentColor"})),Pn=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.21973 0.219667C6.51262 -0.0732245 6.9875 -0.0732223 7.28039 0.219672C7.57328 0.512567 7.57328 0.987441 7.28038 1.28033L4.81072 3.74997L7.28044 6.21967C7.57333 6.51256 7.57333 6.98743 7.28044 7.28033C6.98755 7.57322 6.51268 7.57322 6.21978 7.28033L3.75006 4.81063L1.28033 7.28033C0.987433 7.57322 0.512559 7.57322 0.219667 7.28033C-0.0732241 6.98743 -0.0732222 6.51256 0.219673 6.21967L2.68939 3.74997L0.219728 1.28033C-0.0731671 0.987441 -0.0731693 0.512567 0.219723 0.219672C0.512614 -0.0732223 0.987488 -0.0732245 1.28038 0.219667L3.75006 2.68932L6.21973 0.219667Z",fill:"currentColor"})),i9=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"26",viewBox:"0 0 27 26",fill:"none",...e},u("path",{d:"M11.9264 0.743246C12.4155 -0.247749 13.8287 -0.247749 14.3177 0.743246L17.65 7.49512L25.1011 8.57783C26.1947 8.73675 26.6314 10.0807 25.8401 10.8521L20.4484 16.1077L21.7212 23.5287C21.908 24.6179 20.7648 25.4485 19.7866 24.9343L13.1221 21.4306L6.45759 24.9343C5.47942 25.4485 4.33618 24.6179 4.52299 23.5287L5.7958 16.1077L0.404108 10.8521C-0.387248 10.0807 0.0494327 8.73675 1.14306 8.57783L8.59419 7.49512L11.9264 0.743246Z",fill:"currentColor"})),s9=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.6943 39.1054C7.527 26.9493 7.94334 20.8713 14.4668 14.3638C20.9903 7.85638 27.0229 7.45804 39.0883 6.66136C45.1203 6.26306 52.0948 6.00049 60 6.00049C67.9052 6.00049 74.8797 6.26306 80.9117 6.66136C92.9771 7.45804 99.0097 7.85638 105.533 14.3638C112.057 20.8713 112.473 26.9493 113.306 39.1055C113.723 45.1926 114 52.1805 114 60.0005C114 67.3691 113.754 73.9989 113.376 79.8324C112.551 92.5947 112.138 98.9759 105.618 105.513C99.0972 112.05 92.6716 112.481 79.8204 113.344C73.9292 113.74 67.2844 114 60 114C52.7156 114 46.0708 113.74 40.1796 113.344C27.3284 112.481 20.9028 112.05 14.3822 105.513C7.8616 98.9759 7.4489 92.5947 6.62352 79.8324C6.24624 73.9989 6 67.3691 6 60.0005C6 52.1805 6.27733 45.1926 6.6943 39.1054Z",fill:"currentColor"}),u("path",{d:"M68.956 46.3929L93.4229 24.6638",stroke:"#D3992C",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M30.4004 95.763C30.4004 95.763 50.267 83.6982 54.8673 74.0338",stroke:"#D3992C",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"}),u("circle",{cx:"61.3138",cy:"58.6217",r:"32.0298",transform:"rotate(21.916 61.3138 58.6217)",fill:"url(#paint0_linear_3969_40598)"}),u("mask",{id:"mask0_3969_40598",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"29",y:"26",width:"65",height:"65"},u("circle",{cx:"61.3138",cy:"58.6217",r:"32.0298",transform:"rotate(21.916 61.3138 58.6217)",fill:"url(#paint1_linear_3969_40598)"})),u("g",{mask:"url(#mask0_3969_40598)"},u("g",{filter:"url(#filter0_f_3969_40598)"},u("ellipse",{cx:"59.2624",cy:"42.8946",rx:"6.13428",ry:"2.66915",transform:"rotate(6.78408 59.2624 42.8946)",fill:"#FF2C6B"})),u("g",{filter:"url(#filter1_f_3969_40598)"},u("ellipse",{cx:"80.0436",cy:"36.6134",rx:"6.13428",ry:"2.66915",transform:"rotate(6.78408 80.0436 36.6134)",fill:"#FF2C6B"}))),u("path",{d:"M60.9961 52.3432C63.5283 54.6019 68.3865 56.5464 72.4932 55.8893C80.3152 54.6377 87.6199 45.1569 92.0002 38.9971",stroke:"url(#paint2_linear_3969_40598)",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M19.248 56.1499L32.3382 42.3971C32.9641 46.014 36.2467 51.8861 43.4357 53.0183C36.4807 61.1209 33.001 65.4291 25.2132 75.371C15.9599 71.507 16.0563 61.5383 19.248 56.1499Z",fill:"#FF2C6B",stroke:"#FF2C6B",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M46.8449 97.5548C46.8449 97.5548 79.0898 88.4404 56.5601 81.9134",stroke:"url(#paint3_linear_3969_40598)",strokeWidth:"3.6",strokeLinecap:"round",strokeLinejoin:"round"}),u("circle",{cx:"65.0388",cy:"34.6882",r:"2.23119",fill:"#1E1E1E"}),u("circle",{cx:"74.2673",cy:"32.4568",r:"2.23119",fill:"#1E1E1E"}),u("path",{d:"M68.1055 40.0522C69.9886 41.2284 72.3349 40.7573 73.8166 40.1528",stroke:"#1E1E1E",strokeWidth:"2.88",strokeLinecap:"round"}),u("defs",null,u("filter",{id:"filter0_f_3969_40598",x:"42.4523",y:"29.4353",width:"33.6207",height:"26.9186",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},u("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),u("feGaussianBlur",{stdDeviation:"5.35537",result:"effect1_foregroundBlur_3969_40598"})),u("filter",{id:"filter1_f_3969_40598",x:"63.2336",y:"23.154",width:"33.6207",height:"26.9186",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},u("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),u("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),u("feGaussianBlur",{stdDeviation:"5.35537",result:"effect1_foregroundBlur_3969_40598"})),u("linearGradient",{id:"paint0_linear_3969_40598",x1:"61.3138",y1:"26.5919",x2:"89.3398",y2:"88.7449",gradientUnits:"userSpaceOnUse"},u("stop",{stopColor:"#E4B84A"}),u("stop",{offset:"1",stopColor:"#E99E2D"})),u("linearGradient",{id:"paint1_linear_3969_40598",x1:"61.3138",y1:"26.5919",x2:"89.3398",y2:"88.7449",gradientUnits:"userSpaceOnUse"},u("stop",{stopColor:"#E4B84A"}),u("stop",{offset:"1",stopColor:"#E99E2D"})),u("linearGradient",{id:"paint2_linear_3969_40598",x1:"122.833",y1:"25.2437",x2:"61.0023",y2:"14.1137",gradientUnits:"userSpaceOnUse"},u("stop",{offset:"0.463876",stopColor:"#FFE5AB"}),u("stop",{offset:"0.897924",stopColor:"#E7AB41"})),u("linearGradient",{id:"paint3_linear_3969_40598",x1:"109.709",y1:"72.7932",x2:"90.0324",y2:"48.2992",gradientUnits:"userSpaceOnUse"},u("stop",{offset:"0.376171",stopColor:"#FFE5AB"}),u("stop",{offset:"0.827737",stopColor:"#E8A434"})))),a9=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",...e},u("path",{d:"M25.5 25.5C25.5 24.6716 24.8284 24 24 24C23.1716 24 22.5 24.6716 22.5 25.5V34.5C22.5 35.3284 23.1716 36 24 36C24.8284 36 25.5 35.3284 25.5 34.5V25.5Z",fill:"currentColor"}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 13.5C15 8.52944 19.0294 4.5 24 4.5C28.9706 4.5 33 8.52944 33 13.5V18C37.1421 18 40.5 21.3579 40.5 25.5V34.9509C40.5 37.9095 38.7332 40.7143 35.741 41.6215C32.8437 42.4999 28.5546 43.5 24 43.5C19.4454 43.5 15.1563 42.4999 12.259 41.6215C9.26676 40.7143 7.5 37.9095 7.5 34.9509V25.5C7.5 21.3579 10.8579 18 15 18V13.5ZM30 13.5V18H18V13.5C18 10.1863 20.6863 7.5 24 7.5C27.3137 7.5 30 10.1863 30 13.5ZM15 21C12.5147 21 10.5 23.0147 10.5 25.5V34.9509C10.5 36.7599 11.5592 38.2745 13.1295 38.7505C15.8747 39.5828 19.851 40.5 24 40.5C28.149 40.5 32.1253 39.5828 34.8705 38.7505C36.4408 38.2745 37.5 36.7599 37.5 34.9509V25.5C37.5 23.0147 35.4853 21 33 21H15Z",fill:"currentColor"})),c9=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L10 15.5858L19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289Z",fill:"currentColor"})),l9=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66692 0C5.43968 0 4.44478 0.994824 4.44469 2.22206L4.44452 4.44446H1.77778C0.79594 4.44446 0 5.2404 0 6.22224V14.2223C0 15.2041 0.79594 16 1.77778 16H9.7778C10.7596 16 11.5556 15.2041 11.5556 14.2223V11.5556H13.7775C15.0048 11.5556 15.9997 10.5607 15.9998 9.33343L16 2.2223C16 0.994969 15.0051 0 13.7778 0H6.66692ZM11.5556 9.7778H13.7775C14.023 9.7778 14.222 9.57883 14.222 9.33337L14.2222 2.22224C14.2222 1.97677 14.0232 1.77778 13.7778 1.77778H6.66692C6.42147 1.77778 6.22249 1.97675 6.22247 2.22219L6.2223 4.44446H9.7778C10.7596 4.44446 11.5556 5.2404 11.5556 6.22224V9.7778ZM1.77778 6.22224H9.7778V14.2223H1.77778L1.77778 6.22224Z",fill:"currentColor"})),Tl=e=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",...e},u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 2C16 0.895431 15.1046 0 14 0H2C0.89543 0 0 0.895433 0 2V10.8435C0 11.8149 0.701384 12.6537 1.66969 12.8117C6.43201 13.589 9.50216 13.6063 14.3329 12.8125C15.3002 12.6535 16 11.8151 16 10.8449L16 2ZM14 4.5041L8.45365 7.54106C8.18435 7.68852 7.85846 7.68852 7.58915 7.54106L2 4.48066L2 10.8392C6.54519 11.5805 9.39559 11.5964 14 10.8403L14 4.5041ZM8.0214 5.72557L2 2.42848V2L14 2V2.45192L8.0214 5.72557Z",fill:"currentColor"}))});var u9,d9=O(()=>{"use strict";p();m();cn();ur();lt();Kt();u9=()=>{let{tabId:e}=X(),t=()=>{e!=null&&typeof w<"u"&&w.tabs&&w.tabs.update(e,{active:!0})};return u(_s,null,u(As,null,u(zr,{color:v["icn-txt-sec"],width:"48",height:"48",style:{width:"48px",height:"48px"}})),u(Ls,null,"Another Meeting in Progress"),u(Ps,null,"Speechify can take notes only in one meeting at a time. Please, switch to the active meeting:"),u(y5,{onClick:t},"Switch to Meeting"))}});function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},xo.apply(this,arguments)}function E9(e){return"( *)("+(e===1?Lp:Pp)+") +"}function R9(e){return RegExp("^"+(e===1?k9:I9))}function M9(e){return RegExp("^"+(e===1?k9:I9)+"[^\\n]*(?:\\n(?!\\1"+(e===1?Lp:Pp)+" )[^\\n]*)*(\\n|$)","gm")}function _9(e){let t=e===1?Lp:Pp;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}function v9(e,t){let r=t===1,i=r?A9:L9,s=r?ZL:HL,c=r?YL:KL;return{t:l=>c.test(l),o:fi(function(l,d){let g=QL.exec(d.prevCapture);return g&&(d.list||!d.inline&&!d.simple)?i.exec(l=g[1]+l):null}),i:1,u(l,d,g){let y=r?+l[2]:void 0,b=l[0].replace(aL,`
`).match(s),E=!1;return{items:b.map(function(R,k){let B=c.exec(R)[0].length,N=RegExp("^ {1,"+B+"}","gm"),F=R.replace(N,"").replace(c,""),C=k===b.length-1,_=F.indexOf(`

`)!==-1||C&&E;E=_;let M=g.inline,W=g.list,$;g.list=!0,_?(g.inline=!1,$=Bs(F)+`

`):(g.inline=!0,$=Bs(F));let Q=d($,g);return g.inline=M,g.list=W,Q}),ordered:r,start:y}},l:(l,d,g)=>e(l.ordered?"ol":"ul",{key:g.key,start:l.type==="20"?l.start:void 0},l.items.map(function(y,b){return e("li",{key:b},d(y,g))}))}}function Bs(e){let t=e.length;for(;t>0&&e[t-1]<=" ";)t--;return e.slice(0,t)}function kl(e,t){return e.startsWith(t)}function eP(e,t,r){if(Array.isArray(r)){for(let i=0;i<r.length;i++)if(kl(e,r[i]))return!0;return!1}return r(e,t)}function Ds(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function tP(e){return DL.test(e)?"right":OL.test(e)?"center":NL.test(e)?"left":null}function w9(e,t,r,i){let s=r.inTable;r.inTable=!0;let c=[[]],l="";function d(){if(!l)return;let g=c[c.length-1];g.push.apply(g,t(l,r)),l=""}return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((g,y,b)=>{g.trim()==="|"&&(d(),i)?y!==0&&y!==b.length-1&&c.push([]):l+=g}),d(),r.inTable=s,c}function nP(e,t,r){r.inline=!0;let i=e[2]?e[2].replace(PL,"").split("|").map(tP):[],s=e[3]?(function(l,d,g){return l.trim().split(`
`).map(function(y){return w9(y,d,g,!0)})})(e[3],t,r):[],c=w9(e[1],t,r,!!s.length);return r.inline=!1,s.length?{align:i,cells:s,header:c,type:"25"}:{children:c,type:"21"}}function T9(e,t){return e.align[t]==null?{}:{textAlign:e.align[t]}}function fi(e){return e.inline=1,e}function jr(e){return fi(function(t,r){return r.inline?e.exec(t):null})}function Qr(e){return fi(function(t,r){return r.inline||r.simple?e.exec(t):null})}function dr(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function El(e){return fi(function(t){return e.exec(t)})}function oP(e){try{let t=decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"");if(rP.test(t))return null}catch{return null}return e}function jn(e){return e&&e.replace(GL,"$1")}function Il(e,t,r){let i=r.inline||!1,s=r.simple||!1;r.inline=!0,r.simple=!0;let c=e(t,r);return r.inline=i,r.simple=s,c}function iP(e,t,r){let i=r.inline||!1,s=r.simple||!1;r.inline=!1,r.simple=!0;let c=e(t,r);return r.inline=i,r.simple=s,c}function sP(e,t,r){let i=r.inline||!1;r.inline=!1;let s=e(t,r);return r.inline=i,s}function Mp(){return{}}function _p(){return null}function aP(...e){return e.filter(Boolean).join(" ")}function Ap(e,t,r){let i=e,s=t.split(".");for(;s.length&&(i=i[s[0]],i!==void 0);)s.shift();return i||r}function cP(e="",t={}){t.overrides=t.overrides||{},t.namedCodesToUnicode=t.namedCodesToUnicode?xo({},p9,t.namedCodesToUnicode):p9;let r=t.slugify||Ds,i=t.sanitizer||oP,s=t.createElement||Rl.createElement,c=[m9,g9,h9,t.enforceAtxHeadings?b9:y9,x9,C9,A9,L9],l=[...c,IL,kp,S9,Ip];function d(C,_,...M){let W=Ap(t.overrides,C+".props",{});return s((function($,Q){let V=Ap(Q,$);return V?typeof V=="function"||typeof V=="object"&&"render"in V?V:Ap(Q,$+".component",$):$})(C,t.overrides),xo({},_,W,{className:aP(_?.className,W.className)||void 0}),...M)}function g(C){C=C.replace(bL,"");let _=!1;t.forceInline?_=!0:t.forceBlock||(_=AL.test(C)===!1);let M=B(k(_?C:Bs(C).replace(zL,"")+`

`,{inline:_}));for(;typeof M[M.length-1]=="string"&&!M[M.length-1].trim();)M.pop();if(t.wrapper===null)return M;let W=t.wrapper||(_?"span":"div"),$;if(M.length>1||t.forceWrapper)$=M;else{if(M.length===1)return $=M[0],typeof $=="string"?d("span",{key:"outer"},$):$;$=null}return s(W,{key:"outer"},$)}function y(C,_){if(!_||!_.trim())return null;let M=_.match(iL);return M?M.reduce(function(W,$){let Q=$.indexOf("=");if(Q!==-1){let V=(function(J){return J.indexOf("-")!==-1&&J.match(CL)===null&&(J=J.replace(kL,function(Ie,Se){return Se.toUpperCase()})),J})($.slice(0,Q)).trim(),oe=(function(J){let Ie=J[0];return(Ie==='"'||Ie==="'")&&J.length>=2&&J[J.length-1]===Ie?J.slice(1,-1):J})($.slice(Q+1).trim()),de=f9[V]||V;if(de==="ref")return W;let se=W[de]=(function(J,Ie,Se,K){return Ie==="style"?(function(pe){let le=[],me="",ce=!1,fe=!1,Ce="";if(!pe)return le;for(let te=0;te<pe.length;te++){let Re=pe[te];if(Re!=='"'&&Re!=="'"||ce||(fe?Re===Ce&&(fe=!1,Ce=""):(fe=!0,Ce=Re)),Re==="("&&me.endsWith("url")?ce=!0:Re===")"&&ce&&(ce=!1),Re!==";"||fe||ce)me+=Re;else{let Le=me.trim();if(Le){let we=Le.indexOf(":");if(we>0){let Ve=Le.slice(0,we).trim(),it=Le.slice(we+1).trim();le.push([Ve,it])}}me=""}}let Ze=me.trim();if(Ze){let te=Ze.indexOf(":");if(te>0){let Re=Ze.slice(0,te).trim(),Le=Ze.slice(te+1).trim();le.push([Re,Le])}}return le})(Se).reduce(function(pe,[le,me]){return pe[le.replace(/(-[a-z])/g,ce=>ce[1].toUpperCase())]=K(me,J,le),pe},{}):oL.indexOf(Ie)!==-1?K(jn(Se),J,Ie):(Se.match(vL)&&(Se=jn(Se.slice(1,Se.length-1))),Se==="true"||Se!=="false"&&Se)})(C,V,oe,i);typeof se=="string"&&(kp.test(se)||Ip.test(se))&&(W[de]=g(se.trim()))}else $!=="style"&&(W[f9[$]||$]=!0);return W},{}):null}let b=[],E={},R={0:{t:[">"],o:dr(m9),i:1,u(C,_,M){let[,W,$]=C[0].replace(cL,"").match(lL);return{alert:W,children:_($,M)}},l(C,_,M){let W={key:M.key};return C.alert&&(W.className="markdown-alert-"+r(C.alert.toLowerCase(),Ds),C.children.unshift({attrs:{},children:[{type:"27",text:C.alert}],noInnerParse:!0,type:"11",tag:"header"})),d("blockquote",W,_(C.children,M))}},1:{o:El(uL),i:1,u:Mp,l:(C,_,M)=>d("br",{key:M.key})},2:{t:C=>{let _=C[0];return _==="-"||_==="*"||_==="_"},o:dr(dL),i:1,u:Mp,l:(C,_,M)=>d("hr",{key:M.key})},3:{t:["    "],o:dr(h9),i:0,u:C=>({lang:void 0,text:jn(Bs(C[0].replace(/^ {4}/gm,"")))}),l:(C,_,M)=>d("pre",{key:M.key},d("code",xo({},C.attrs,{className:C.lang?"lang-"+C.lang:""}),C.text))},4:{t:["```","~~~"],o:dr(g9),i:0,u:C=>({attrs:y("code",C[3]||""),lang:C[2]||void 0,text:C[4],type:"3"})},5:{t:["`"],o:Qr(fL),i:3,u:C=>({text:jn(C[2])}),l:(C,_,M)=>d("code",{key:M.key},C.text)},6:{t:["[^"],o:dr(gL),i:0,u:C=>(b.push({footnote:C[2],identifier:C[1]}),{}),l:_p},7:{t:["[^"],o:jr(hL),i:1,u:C=>({target:"#"+r(C[1],Ds),text:C[1]}),l:(C,_,M)=>d("a",{key:M.key,href:i(C.target,"a","href")},d("sup",{key:M.key},C.text))},8:{t:["[ ]","[x]"],o:jr(xL),i:1,u:C=>({completed:C[1].toLowerCase()==="x"}),l:(C,_,M)=>d("input",{checked:C.completed,key:M.key,readOnly:!0,type:"checkbox"})},9:{t:["#"],o:dr(t.enforceAtxHeadings?b9:y9),i:1,u:(C,_,M)=>({children:Il(_,C[2],M),id:r(C[2],Ds),level:C[1].length}),l:(C,_,M)=>d("h"+C.level,{id:C.id,key:M.key},_(C.children,M))},10:{o:dr(x9),i:0,u:(C,_,M)=>({children:Il(_,C[1],M),level:C[2]==="="?1:2,type:"9"})},11:{t:["<"],o:El(kp),i:1,u(C,_,M){let[,W]=C[3].match(jL),$=RegExp("^"+W,"gm"),Q=C[3].replace($,""),V=(oe=Q,l.some(Se=>Se.test(oe))?sP:Il);var oe;let de=C[1].toLowerCase(),se=rL.indexOf(de)!==-1,J=(se?de:C[1]).trim(),Ie={attrs:y(J,C[2]),noInnerParse:se,tag:J};if(M.inAnchor=M.inAnchor||de==="a",se)Ie.text=C[3];else{let Se=M.inHTML;M.inHTML=!0,Ie.children=V(_,Q,M),M.inHTML=Se}return M.inAnchor=!1,Ie},l:(C,_,M)=>d(C.tag,xo({key:M.key},C.attrs),C.text||(C.children?_(C.children,M):""))},13:{t:["<"],o:El(Ip),i:1,u(C){let _=C[1].trim();return{attrs:y(_,C[2]||""),tag:_}},l:(C,_,M)=>d(C.tag,xo({},C.attrs,{key:M.key}))},12:{t:["<!--"],o:El(S9),i:1,u:()=>({}),l:_p},14:{t:["!["],o:Qr(JL),i:1,u:C=>({alt:jn(C[1]),target:jn(C[2]),title:jn(C[3])}),l:(C,_,M)=>d("img",{key:M.key,alt:C.alt||void 0,title:C.title||void 0,src:i(C.target,"img","src")})},15:{t:["["],o:jr(XL),i:3,u:(C,_,M)=>({children:iP(_,C[1],M),target:jn(C[2]),title:jn(C[3])}),l:(C,_,M)=>d("a",{key:M.key,href:i(C.target,"a","href"),title:C.title},_(C.children,M))},16:{t:["<"],o:jr(EL),i:0,u:C=>({children:[{text:C[1],type:"27"}],target:C[1],type:"15"})},17:{t:(C,_)=>!_.inAnchor&&!t.disableAutoLink&&(kl(C,"http://")||kl(C,"https://")),o:jr(wL),i:0,u:C=>({children:[{text:C[1],type:"27"}],target:C[1],title:void 0,type:"15"})},18:{t:["<"],o:jr(TL),i:0,u(C){let _=C[1],M=C[1];return sL.test(M)||(M="mailto:"+M),{children:[{text:_.replace("mailto:",""),type:"27"}],target:M,type:"15"}}},20:v9(d,1),33:v9(d,2),19:{o:dr(pL),i:3,u:Mp,l:()=>`
`},21:{o:fi(function(C,_){if(_.inline||_.simple||_.inHTML&&C.indexOf(`

`)===-1&&_.prevCapture.indexOf(`

`)===-1)return null;let M="";C.split(`
`).every($=>($+=`
`,!c.some(Q=>Q.test($))&&(M+=$,!!$.trim())));let W=Bs(M);return W===""?null:[M,,W]}),i:3,u:Rp,l:(C,_,M)=>d("p",{key:M.key},_(C.children,M))},22:{t:["["],o:jr(RL),i:0,u:C=>(E[C[1]]={target:C[2],title:C[4]},{}),l:_p},23:{t:["!["],o:Qr(ML),i:0,u:C=>({alt:C[1]?jn(C[1]):void 0,ref:C[2]}),l:(C,_,M)=>E[C.ref]?d("img",{key:M.key,alt:C.alt,src:i(E[C.ref].target,"img","src"),title:E[C.ref].title}):null},24:{t:C=>C[0]==="["&&C.indexOf("](")===-1,o:jr(_L),i:0,u:(C,_,M)=>({children:_(C[1],M),fallbackChildren:C[0],ref:C[2]}),l:(C,_,M)=>E[C.ref]?d("a",{key:M.key,href:i(E[C.ref].target,"a","href"),title:E[C.ref].title},_(C.children,M)):d("span",{key:M.key},C.fallbackChildren)},25:{t:["|"],o:dr(C9),i:1,u:nP,l(C,_,M){let W=C;return d("table",{key:M.key},d("thead",null,d("tr",null,W.header.map(function($,Q){return d("th",{key:Q,style:T9(W,Q)},_($,M))}))),d("tbody",null,W.cells.map(function($,Q){return d("tr",{key:Q},$.map(function(V,oe){return d("td",{key:oe,style:T9(W,oe)},_(V,M))}))})))}},27:{o:fi(function(C,_){let M;return kl(C,":")&&(M=$L.exec(C)),M||WL.exec(C)}),i:4,u(C){let _=C[0];return{text:_.indexOf("&")===-1?_:_.replace(SL,(M,W)=>t.namedCodesToUnicode[W]||M)}},l:C=>C.text},28:{t:["**","__"],o:Qr(BL),i:2,u:(C,_,M)=>({children:_(C[2],M)}),l:(C,_,M)=>d("strong",{key:M.key},_(C.children,M))},29:{t:C=>{let _=C[0];return(_==="*"||_==="_")&&C[1]!==_},o:Qr(FL),i:3,u:(C,_,M)=>({children:_(C[2],M)}),l:(C,_,M)=>d("em",{key:M.key},_(C.children,M))},30:{t:["\\"],o:Qr(qL),i:1,u:C=>({text:C[1],type:"27"})},31:{t:["=="],o:Qr(UL),i:3,u:Rp,l:(C,_,M)=>d("mark",{key:M.key},_(C.children,M))},32:{t:["~~"],o:Qr(VL),i:3,u:Rp,l:(C,_,M)=>d("del",{key:M.key},_(C.children,M))}};t.disableParsingRawHTML===!0&&(delete R[11],delete R[13]);let k=(function(C){var _=Object.keys(C);function M(W,$){var Q=[];if($.prevCapture=$.prevCapture||"",W.trim())for(;W;)for(var V=0;V<_.length;){var oe=_[V],de=C[oe];if(!de.t||eP(W,$,de.t)){var se=de.o(W,$);if(se&&se[0]){W=W.substring(se[0].length);var J=de.u(se,M,$);$.prevCapture+=se[0],J.type||(J.type=oe),Q.push(J);break}V++}else V++}return $.prevCapture="",Q}return _.sort(function(W,$){return C[W].i-C[$].i||(W<$?-1:1)}),function(W,$){return M((function(Q){return Q.replace(mL,`
`).replace(yL,"").replace(LL,"    ")})(W),$)}})(R),B=(N=(function(C,_){return function(M,W,$){let Q=C[M.type].l;return _?_(()=>Q(M,W,$),M,W,$):Q(M,W,$)}})(R,t.renderRule),function C(_,M={}){if(Array.isArray(_)){let W=M.key,$=[],Q=!1;for(let V=0;V<_.length;V++){M.key=V;let oe=C(_[V],M),de=typeof oe=="string";de&&Q?$[$.length-1]+=oe:oe!==null&&$.push(oe),Q=de}return M.key=W,$}return N(_,C,M)});var N;let F=g(e);return b.length?d("div",null,F,d("footer",{key:"footer"},b.map(function(C){return d("div",{id:r(C.identifier,Ds),key:C.identifier},C.identifier,B(k(C.footnote,{inline:!0})))}))):F}var Rl,nL,f9,p9,rL,oL,iL,sL,aL,m9,cL,lL,uL,dL,g9,h9,fL,pL,mL,gL,hL,yL,bL,xL,y9,b9,x9,kp,SL,S9,CL,Ip,vL,wL,TL,EL,kL,C9,IL,RL,ML,_L,AL,LL,PL,OL,NL,DL,Ml,BL,FL,UL,VL,$L,qL,GL,WL,zL,jL,QL,Lp,Pp,k9,I9,YL,KL,ZL,HL,A9,L9,XL,JL,rP,Rp,P9,O9=O(()=>{"use strict";p();m();Rl=Ee(De(),1);nL=["children","options"],f9=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{class:"className",for:"htmlFor"}),p9={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},rL=["style","script","pre"],oL=["src","href","data","formAction","srcDoc","action"],iL=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,sL=/mailto:/i,aL=/\n{2,}$/,m9=/^(\s*>[\s\S]*?)(?=\n\n|$)/,cL=/^ *> ?/gm,lL=/^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,uL=/^ {2,}\n/,dL=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,g9=/^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,h9=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,fL=/^(`+)((?:\\`|(?!\1)`|[^`])+)\1/,pL=/^(?:\n *)*\n/,mL=/\r\n?/g,gL=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,hL=/^\[\^([^\]]+)]/,yL=/\f/g,bL=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,xL=/^\s*?\[(x|\s)\]/,y9=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,b9=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,x9=/^([^\n]+)\n *(=|-){3,} *\n/,kp=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,SL=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,S9=/^<!--[\s\S]*?(?:-->)/,CL=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,Ip=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,vL=/^\{.*\}$/,wL=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,TL=/^<([^ >]+@[^ >]+)>/,EL=/^<([^ >]+:\/[^ >]+)>/,kL=/-([a-z])?/gi,C9=/^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,IL=/^[^\n]+(?:  \n|\n{2,})/,RL=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,ML=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,_L=/^\[([^\]]*)\] ?\[([^\]]*)\]/,AL=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,LL=/\t/g,PL=/(^ *\||\| *$)/g,OL=/^ *:-+: *$/,NL=/^ *:-+ *$/,DL=/^ *-+: *$/,Ml="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)",BL=RegExp(`^([*_])\\1${Ml}\\1\\1(?!\\1)`),FL=RegExp(`^([*_])${Ml}\\1(?!\\1)`),UL=RegExp(`^(==)${Ml}\\1`),VL=RegExp(`^(~~)${Ml}\\1`),$L=/^(:[a-zA-Z0-9-_]+:)/,qL=/^\\([^0-9A-Za-z\s])/,GL=/\\([^0-9A-Za-z\s])/g,WL=/^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/,zL=/^\n+/,jL=/^([ \t]*)/,QL=/(?:^|\n)( *)$/,Lp="(?:\\d+\\.)",Pp="(?:[*+-])";k9=E9(1),I9=E9(2);YL=R9(1),KL=R9(2);ZL=M9(1),HL=M9(2);A9=_9(1),L9=_9(2);XL=RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),JL=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;rP=/(javascript|vbscript|data(?!:image)):/i;Rp=(e,t,r)=>({children:Il(t,e[2],r)});P9=e=>{let{children:t="",options:r}=e,i=(function(s,c){if(s==null)return{};var l,d,g={},y=Object.keys(s);for(d=0;d<y.length;d++)c.indexOf(l=y[d])>=0||(g[l]=s[l]);return g})(e,nL);return Rl.cloneElement(cP(t,r),i)}});function N9(e,t){let{charsPerFrame:r=3,frameInterval:i=16,enabled:s=!0}=t||{},[c,l]=(0,vn.useState)(0),d=(0,vn.useRef)(null),g=(0,vn.useRef)(0),y=(0,vn.useRef)(0),b=(0,vn.useRef)(0);return b.current=c,(0,vn.useEffect)(()=>{let E=b.current;if(!s){l(e.length),y.current=e.length;return}let R=e.length;if(R<E){l(R),y.current=R;return}if(E>=R){y.current=R;return}let k=B=>{if(B-g.current<i){d.current=requestAnimationFrame(k);return}g.current=B,l(N=>{let F=Math.min(N+r,R);return F>=R?R:(d.current=requestAnimationFrame(k),F)})};return d.current=requestAnimationFrame(k),()=>{d.current&&(cancelAnimationFrame(d.current),d.current=null)}},[e,s,r,i]),(0,vn.useEffect)(()=>{y.current=e.length},[e]),(0,vn.useMemo)(()=>({text:e.slice(0,c),isAnimating:s&&c<e.length}),[e,c,s])}var vn,D9=O(()=>{"use strict";p();m();vn=Ee(De())});var _l,lP,uP,dP,fP,Al,pP,mP,gP,hP,yP,bP,xP,SP,CP,vP,wP,Ll,Op=O(()=>{"use strict";p();m();_l=Ee(De());O9();pl();an();lt();bo();D9();lP=yo`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`,uP=L.div`
  position: relative;
  width: 100%;
  color: ${v["icn-txt-prim"]};
  text-align: left;
  -webkit-user-select: text;
  user-select: text;

  ${({isStreaming:e,isAnimating:t})=>e&&`
    /* Fade mask at the trailing edge while streaming */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 60px;
      height: 1.5em;
      pointer-events: none;
      background: linear-gradient(to right, transparent 0%, ${v["bg-prim-w-110"]} 100%);
      opacity: ${t?1:0};
      transition: opacity 0.3s ease-out;
      animation: ${t?lP:"none"} 1s ease-in-out infinite;
    }
  `}
`,dP=L.h1`
  ${ie["heading-2"]}

  color: var(--text-color-override, ${v["icn-txt-prim"]});

  margin: 0;
  padding: 8px 0 4px;

  &:first-child {
    padding-top: 4px;
  }
`,fP=L.h2`
  ${ie["heading-3"]}

  color: var(--text-color-override, ${v["icn-txt-prim"]});

  margin: 0;
  padding: 16px 0 0;
  &:first-child {
    padding-top: 0;
  }
`,Al=L.h3`
  ${ie["heading-4"]}

  color: var(--text-color-override, ${v["icn-txt-prim"]});

  margin: 0;
  padding: 16px 0 0;
  &:first-child {
    padding-top: 0;
  }
`,pP=L(Al)``,mP=L(Al)``,gP=L(Al)``,hP=L.p`
  ${ie["body-5"]}

  color: var(--text-color-override, ${v["icn-txt-prim"]});

  margin: 0;
  padding: 4px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:is(li > p) {
    padding-top: 0;
    padding-bottom: 0;
  }
`,yP=L.ul`
  ${ie["body-5"]}

  color: var(--text-color-override, ${v["icn-txt-prim"]});
  margin: 0;
  padding: 8px 0 0 20px;
  list-style-type: disc;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:is(li > ul) {
    padding-top: 0;
    padding-bottom: 0;
  }
`,bP=L.ol`
  ${ie["body-5"]}

  color: var(--text-color-override, ${v["icn-txt-prim"]});
  margin: 0;
  padding: 8px 0 0 40px;
  list-style-type: decimal;
  list-style-position: outside;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:is(li > ol) {
    padding-top: 0;
    padding-bottom: 0;
  }
`,xP=L.li`
  padding: 8px 0 0;
  margin: 0;

  &:first-child {
    padding-top: 0;
  }
`,SP=L.strong`
  font-weight: bold;
`,CP=L.em`
  font-style: italic;
`,vP=L.a`
  color: ${v["icn-txt-prim"]};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,wP=({href:e,children:t,...r})=>u(vP,{href:e,onClick:s=>{s.preventDefault(),e&&(typeof w<"u"&&w.tabs&&w.tabs.create?w.tabs.create({url:e}).catch(()=>{window.open(e,"_blank","noopener,noreferrer")}):window.open(e,"_blank","noopener,noreferrer"))},target:"_blank",rel:"noopener noreferrer",...r},t),Ll=(0,_l.forwardRef)(({content:e,className:t,streaming:r=!1},i)=>{let s=(0,_l.useMemo)(()=>({overrides:{h1:dP,h2:fP,h3:Al,h4:pP,h5:mP,h6:gP,p:hP,ul:yP,ol:bP,li:xP,strong:SP,em:CP,a:{component:wP}},forceBlock:!0}),[]),{text:c,isAnimating:l}=N9(e,{enabled:r,charsPerFrame:2,frameInterval:16});return u(uP,{ref:i,className:t,isStreaming:r,isAnimating:l},u(P9,{options:s},r?c:e))})});var bee,xee,See,Cee,vee,wee,Tee,Eee,kee,Iee,B9,Ree,Mee,_ee,Aee,Lee,Pee,Oee,Nee,Dee,Bee,TP,F9,Pl,Np,U9,V9,$9,q9,Dp=O(()=>{"use strict";p();m();an();Rs();lt();bo();bee=L.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 11;
  background-color: ${v["bg-prim-w-110"]};
`,xee=L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'ABC Diatype';
  ${ie["body-5"]};
  color: ${v["icn-txt-tert"]};
  gap: 24px;
  margin-top: ${e=>e.marginTop||"0px"};
  padding-bottom: ${e=>e.paddingBottom||"0px"};
  > span,
  > div {
    padding-left: ${e=>e.paddingLeft||"16px"};
  }
`,See=L.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0px;
`,Cee=L.ul`
  list-style-type: disc;
  margin: 0px;
  padding-left: 16px;
`,vee=L.li`
  font-style: italic;
`,wee=L.li`
  ${ie["subheading-6"]};
  color: ${v["icn-txt-tert"]};
  text-align: left;
  width: 100%;
  transition: all 0.2s ease;
  font-style: italic;
`,Tee=L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,Eee=L.div`
  height: 36px;
  background: linear-gradient(
    90deg,
    ${v["bg-sec-0-100"]} 25%,
    ${v["bg-tert-10-90"]} 50%,
    ${v["bg-sec-0-100"]} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
  border-radius: 8px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,kee=L.ul`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  padding: 0 16px;
  margin: 0;
`,Iee=L.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 1px 16px 12px;
  color: ${v["icn-txt-sec"]};
  z-index: ${di+1};
`,B9=L.button`
  position: relative;
  background: ${v["bg-sec-0-100"]};
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 44px;
  height: 44px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: ${v["icn-txt-prim"]};
  overflow: hidden;
  flex-shrink: 0;

  & > svg {
    z-index: 1;
  }

  ${({isActive:e})=>e?`background: ${v["sf-sec-pres-0-100"]}`:""};
`,Ree=L(B9)`
  &:hover {
    background-color: ${v["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${v["sf-sec-pres-0-100"]};
  }
`,Mee=L(B9)`
  background-color: ${v["sf-crit"]};

  &:hover {
    background-color: ${v["sf-crit-hov"]};
  }

  &:active {
    background-color: ${v["sf-crit-pres"]};
  }
`,_ee=L.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: height 0.1s ease-out;
  background-color: ${v["icn-txt-prim-electric"]};
`,Aee=L.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(50%, -50%);
`,Lee=L.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${v["bg-prim-w-110"]};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Pee=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`,Oee=L.div`
  ${ie["subheading-2"]};
  color: ${v["icn-txt-prim"]};
  text-align: center;
`,Nee=L.div`
  ${ie["body-5"]};
  color: ${v["icn-txt-prim"]};
  text-align: center;
  margin-top: 4px;
`,Dee=L.div`
  background-color: ${v["sf-prim-cta"]};
  border-radius: 8px;
  padding: 10px 24px;
  box-sizing: border-box;
  color: ${v["icn-txt-prim"]};
  ${ie["subheading-6"]};
  margin-top: 8px;

  &:hover {
    background-color: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${v["sf-prim-cta-pres"]};
  }
`,Bee=L.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;

  & [role='action-buttons'] {
    margin-top: auto;
  }
  & [role='bottom-content'] ~ [role='action-buttons'] {
    margin-top: 0;
  }
`,TP=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;TP.defaultProps={role:"bottom-content"};F9=L.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  position: relative;
`,Pl=L.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${v["icn-txt-prim"]};
`,Np=L.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2.5px;
  margin-top: -2.5px;
  width: 5px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation-timing-function: cubic-bezier(0.14, 1, 0.34, 1);
`,U9=L(Np)`
  animation: thinking-dot-first 1.5s infinite;

  @keyframes thinking-dot-first {
    0% {
      transform: translateX(-100%);
    }

    33% {
      transform: translateX(100%);
    }

    66% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`,V9=L(Np)`
  opacity: 0.5;

  animation: thinking-dot-second 1.5s infinite;

  @keyframes thinking-dot-second {
    0% {
      transform: translateX(0);
    }

    33% {
      transform: translateX(-100%);
    }

    66% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`,$9=L(Np)`
  animation: thinking-dot-third 1.5s infinite;

  @keyframes thinking-dot-third {
    0% {
      transform: translateX(100%);
    }

    33% {
      transform: translateX(0%);
    }

    66% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`,q9=L.div`
  ${ie["body-5"]};
  color: ${v["icn-txt-prim"]};
  display: flex;
  align-items: center;
  gap: 8px;
`});function G9(){return u(F9,{style:{marginRight:"4px"}},u(U9,null,u(Pl,null)),u(V9,null,u(Pl,null)),u($9,null,u(Pl,null)))}var W9=O(()=>{"use strict";p();m();Dp()});var z9,j9=O(()=>{"use strict";p();m();Op();cn();W9();Dp();z9=({messages:e,messagesRef:t})=>{let r=i=>u(h5,{key:i.id,type:i.type},i.isStreaming&&!i.content?u(q9,null,u(G9,null),"Thinking"):i.type==="assistant"?u(Ll,{content:i.content}):i.content);return u(g5,{className:"smoothScrollbar",ref:t},e.map(r))}});var Q9,Y9,K9=O(()=>{"use strict";p();m();lt();cn();ur();io();Q9=Ee(De()),Y9=()=>{let e=Yi();return(0,Q9.useMemo)(()=>e?.startsWith("https://meet.google.com/landing"),[e])?u(_s,null,u(As,null,u(zr,{color:v["icn-txt-sec"],width:"48",height:"48",style:{width:"48px",height:"48px"}})),u(Ls,null,"Start by Selecting a Meeting"),u(Ps,null,"To start using AI Notetaker, select a meeting. Chat with AI during the call and review AI notes afterwards.")):u(_s,null,u(As,null,u(a9,{color:v["icn-txt-sec"]})),u(Ls,null,"AI Notetaker is Private"),u(Ps,null,"Transcript and AI chat are visible only to you. However, it's a good practice to let others know you're using AI notetaker."))}});var Bp,Z9=O(()=>{"use strict";p();m();cn();Bp=({isRecording:e,isLoading:t,statusText:r,onStopCapture:i,showTextCenter:s=!1})=>s?u(gp,{showTextCenter:!0},u(hp,{showTextCenter:!0},r)):u(gp,null,u(n5,null,u(r5,{isRecording:e}),u(hp,null,r)),e&&u(f5,{onClick:i,disabled:t},u(p5,null)))});var H9,EP,Fp,X9,J9=O(()=>{"use strict";p();m();H9=Ee(De());an();lt();EP=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 18px;
  height: 18px;
`,Fp=L.span`
  width: 4px;
  height: ${({height:e})=>`${e}px`};
  border-radius: 9999px;
  background-color: ${({color:e})=>e||v["icn-txt-blue"]};
  transition: height 120ms ease-out, opacity 120ms ease-out;
  opacity: ${({active:e})=>e?1:.55};
`,X9=({active:e,level:t,color:r})=>{let i=(0,H9.useMemo)(()=>{let l=e?Math.min(1,Math.max(0,t/100)):0,y=4+18*Math.min(1,Math.pow(l,.35)*1.2);return[Math.max(4,Math.round(y*.7)),Math.max(4,Math.round(y*1.05)),Math.max(4,Math.round(y*.85))]},[e,t]);return u(EP,{"aria-hidden":"true"},u(Fp,{height:i[0],active:e,color:r}),u(Fp,{height:i[1],active:e,color:r}),u(Fp,{height:i[2],active:e,color:r}))}});var gte,eb,tb=O(()=>{"use strict";p();m();gte=async()=>{await new Promise(requestAnimationFrame),await new Promise(requestAnimationFrame)},eb=e=>{let t=window.getComputedStyle(e),r=`${t.fontSize} ${t.fontFamily}`,i=e.value,c=document.createElement("canvas").getContext("2d");return c.font=r,c.measureText(i).width}});var rb=ee((xte,nb)=>{"use strict";p();m();var kP=Vi(),IP=function(){return kP.Date.now()};nb.exports=IP});var ib=ee((vte,ob)=>{"use strict";p();m();var RP=/\s/;function MP(e){for(var t=e.length;t--&&RP.test(e.charAt(t)););return t}ob.exports=MP});var ab=ee((Ete,sb)=>{"use strict";p();m();var _P=ib(),AP=/^\s+/;function LP(e){return e&&e.slice(0,_P(e)+1).replace(AP,"")}sb.exports=LP});var db=ee((Rte,ub)=>{"use strict";p();m();var PP=ab(),cb=Gi(),OP=qi(),lb=NaN,NP=/^[-+]0x[0-9a-f]+$/i,DP=/^0b[01]+$/i,BP=/^0o[0-7]+$/i,FP=parseInt;function UP(e){if(typeof e=="number")return e;if(OP(e))return lb;if(cb(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=cb(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=PP(e);var r=DP.test(e);return r||BP.test(e)?FP(e.slice(2),r?2:8):NP.test(e)?lb:+e}ub.exports=UP});var mb=ee((Ate,pb)=>{"use strict";p();m();var VP=Gi(),Up=rb(),fb=db(),$P="Expected a function",qP=Math.max,GP=Math.min;function WP(e,t,r){var i,s,c,l,d,g,y=0,b=!1,E=!1,R=!0;if(typeof e!="function")throw new TypeError($P);t=fb(t)||0,VP(r)&&(b=!!r.leading,E="maxWait"in r,c=E?qP(fb(r.maxWait)||0,t):c,R="trailing"in r?!!r.trailing:R);function k(Q){var V=i,oe=s;return i=s=void 0,y=Q,l=e.apply(oe,V),l}function B(Q){return y=Q,d=setTimeout(C,t),b?k(Q):l}function N(Q){var V=Q-g,oe=Q-y,de=t-V;return E?GP(de,c-oe):de}function F(Q){var V=Q-g,oe=Q-y;return g===void 0||V>=t||V<0||E&&oe>=c}function C(){var Q=Up();if(F(Q))return _(Q);d=setTimeout(C,N(Q))}function _(Q){return d=void 0,R&&i?k(Q):(i=s=void 0,l)}function M(){d!==void 0&&clearTimeout(d),y=0,i=g=s=d=void 0}function W(){return d===void 0?l:_(Up())}function $(){var Q=Up(),V=F(Q);if(i=arguments,s=this,g=Q,V){if(d===void 0)return B(g);if(E)return clearTimeout(d),d=setTimeout(C,t),k(g)}return d===void 0&&(d=setTimeout(C,t)),l}return $.cancel=M,$.flush=W,$}pb.exports=WP});var gb,fr,zP,jP,QP,YP,hb,yb=O(()=>{"use strict";p();m();an();lt();bo();tb();gb=Ee(mb()),fr=Ee(De());gl();Rs();zP=L.label`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;

  background-color: ${v["bg-sec-0-100"]};
  border-radius: 24px;

  padding: 10px 8px 10px 16px;
  ${({isMultiline:e})=>e?"padding-bottom: 8px":""};

  cursor: ${e=>e.disabled?"not-allowed":"text"};
  outline: 1px solid ${v["brdr-prim-10-80"]};

  textarea {
    cursor: ${e=>e.disabled?"not-allowed":"text"};
  }
`,jP=L.textarea`
  width: calc(100% + 6px);
  scrollbar-gutter: stable;
  padding: 0 45px 0 0;
  background: none;
  border: none;
  display: block;
  color: ${v["icn-txt-prim"]};
  ${ie["body-5"]};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
  resize: none;
  max-height: 216px;
  cursor: text;

  ${({isMultiline:e})=>e?"padding-right: 8px;":""};

  &:disabled {
    cursor: not-allowed;
    color: ${v["icn-txt-tert"]};
  }

  &::placeholder {
    color: ${v["icn-txt-tert"]};
  }
`,QP=L.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${v["sf-prim-cta"]};
  border: none;
  color: ${v["icn-txt-white"]};
  cursor: pointer !important;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  padding: 0;

  &:hover {
    background-color: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${v["sf-prim-cta-pres"]};
  }
`,YP=L.div`
  position: absolute;
  right: 8px;
  bottom: 6px;

  ${({isMultiline:e})=>e?`
    position: static;
    align-self: flex-end;
  `:""}
`,hb=({onSubmit:e,placeholder:t,inputValue:r,setInputValue:i,disabled:s})=>{let c=(0,fr.useRef)(null),[l,d]=(0,fr.useState)(!1),[g,y]=(0,fr.useState)(!1),b=r.trim().length>0;(0,fr.useEffect)(()=>{i("")},[]);let E=(F,C)=>{if(i(C),!C){F.style.height="auto",F.style.marginTop="0",y(!1),d(!1);return}F.style.height="auto";let _=Math.min(Math.max(F.scrollHeight,24),168);F.style.height=_+"px",F.style.marginTop="0",F.scrollHeight>168&&(F.style.height=`${_+14}px`,F.style.marginTop="-14px"),requestAnimationFrame(()=>{let M=Math.round(F.scrollHeight/parseInt(window.getComputedStyle(F).lineHeight)),W=eb(F)>F.clientWidth-45;y(F.scrollHeight>168),l||d(M>1||W)})},R=F=>{let C=F.target;E(C,C.value)},k=(0,fr.useMemo)(()=>(0,gb.default)(F=>{F.trim()&&(e(F.trim()),c.current&&E(c.current,""))},200),[e]),B=F=>{F.key==="Enter"&&(F.shiftKey||(F.preventDefault(),k(r)))},N=F=>{b&&(F.preventDefault(),k(r))};return u(zP,{htmlFor:"question-input",isMultiline:l},g&&c.current&&u(ml,{color:v["bg-sec-0-100"],element:c.current}),u(jP,{id:"question-input",ref:c,rows:1,placeholder:t,value:r,onInput:R,onKeyDown:B,hasText:b,className:"smoothScrollbar",isMultiline:l,isScrollable:g,disabled:s}),u(YP,{isMultiline:l},b&&u(QP,{onClick:N},u(F4,null))))}});var bb,Vp,xb=O(()=>{"use strict";p();m();cn();J9();bb=Ee(De());Kt();yb();Vp=({inputValue:e,onInputChange:t,onSubmit:r,onToggleTranscript:i,disabled:s})=>{let c=X(k=>k.tabSpeechStarted),l=X(k=>k.micSpeechStarted),d=X(k=>k.tabAudioLevel),g=X(k=>k.micAudioLevel),y=e.trim().length>0,b=c||l,E=Math.max(d,g),R=(0,bb.useCallback)(()=>{i()},[i]);return u(C5,null,u(v5,null,u(w5,{hasText:y},u(T5,{onClick:R,"aria-label":"Voice input",disabled:s},u(X9,{active:b&&!s,level:E})),u(hb,{placeholder:"Ask anything",inputValue:e,onSubmit:r,setInputValue:t,disabled:s}))))}});var pi,Ol,KP,Sb,Cb=O(()=>{"use strict";p();m();po();lt();Ke();pi=Ee(De());Kt();ur();cn();Ol=be("ScribeCSATPopup"),KP=["Missed important details","Live answers weren’t helpful","Transcript hard to follow","Notes weren’t accurate","Suggestions weren’t relevant"],Sb=({isOpen:e,onClose:t})=>{let[r,i]=(0,pi.useState)(0),[s,c]=(0,pi.useState)(0),[l,d]=(0,pi.useState)(""),[g,y]=(0,pi.useState)("rating"),[b,E]=(0,pi.useState)([]),R=X(_=>_.tabId);if(!e)return null;let k=_=>{i(_),py(_,R||void 0).catch(M=>{Ol.error("Failed to log Meeting Capture Rated event:",M)}),_>3?(Ol.info("CSAT submitted:",{rating:_,feedback:l,selectedOptions:b}),t()):(y("feedback"),E([]))},B=_=>{c(_)},N=()=>{c(0)},F=_=>{E(M=>M.includes(_)?M.filter(W=>W!==_):[...M,_])},C=()=>{Ol.info("CSAT feedback submitted:",{rating:r,feedback:l,selectedOptions:b}),my(r,l,b,R||void 0).catch(_=>{Ol.error("Failed to log Meeting Feedback Submitted event:",_)}),i(0),d(""),y("done"),E([])};return u(D5,null,u(F5,null,u(V5,{onClick:t},u(bl,null,u(Pn,null)))),g==="rating"&&u(B5,null,u(U5,null,u(Ep,{align:"center"},"How helpful was the AI notetaker during this meeting?"),u($5,{onMouseLeave:N},[1,2,3,4,5].map(_=>u(q5,{key:_,filled:_<=(s||r),onClick:()=>k(_),onMouseEnter:()=>B(_),"aria-label":`Rate ${_} stars`},u(i9,{color:_<=(s||r)?v["icn-txt-accent"]:v["bg-tert-10-70"]})))))),g==="feedback"&&u(G5,null,u(Ep,null,"What we can do better next time?"),u(z5,null,KP.map(_=>u(j5,{key:_,selected:b.includes(_),onClick:()=>F(_)},_))),u(W5,{id:"feedback",placeholder:"(Optional) Tell us more about your experience",value:l,onChange:_=>d(_.target.value),className:"smoothScrollbar"}),u(Q5,null,u(Y5,{disabled:!l&&b.length===0,onClick:C},"Leave Feedback"))),g==="done"&&u(K5,null,u(s9,{color:v["sf-prim-hov-w-100"]}),u(Z5,null,u(H5,null,"Thank You!"),u(X5,null,"We appreciate you taking the time to share your thoughts.")),u(J5,{onClick:t},"Close")))}});var vb,wb,Tb,Eb,kb,Ib,Rb,Mb,_b,Ab,Lb,Pb,Ob,Nb,Db=O(()=>{"use strict";p();m();an();lt();bo();vb=L.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.16);
`,wb=L.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${v["bg-prim-w-100"]};
  box-shadow: 0 12px 48px -16px rgba(0, 0, 0, 0.24);
`,Tb=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-left: 20px;
`,Eb=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 16px 16px 8px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${v["icn-txt-prim"]};

  & svg {
    width: 14px;
    height: 14px;
    padding: 3px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`,kb=L.div`
  ${ie["subheading-4"]};
  color: ${v["icn-txt-prim"]};
`,Ib=L.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
`,Rb=L.div`
  ${ie["heading-6"]};
  color: ${v["icn-txt-prim"]};
  margin-bottom: 4px;
`,Mb=L.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  max-height: 160px;
  margin-bottom: 12px;
  overflow-y: auto;
  padding: 8px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${v["bg-prim-w-90"]};
  border: 1.5px solid
    ${({isFocused:e})=>e?v["sf-prim-cta"]:v["brdr-prim-foc"]};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  ${({isFocused:e})=>e&&`
      box-shadow: 0 0 0 1px ${v["sf-prim-cta"]};
    `}
`,_b=L.div`
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 4px 2px 8px;
  border-radius: 24px;
  background-color: ${v["bg-prim-w-100"]};
  border: 1px solid ${v["brdr-prim-10-80"]};
  color: ${v["icn-txt-prim"]};
  ${ie["subheading-6"]};
`,Ab=L.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${v["icn-txt-sec"]};
`,Lb=L.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pb=L.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${v["icn-txt-sec"]};
`,Ob=L.input`
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  padding: 4px 0;
  background: transparent;
  color: ${v["icn-txt-prim"]};
  ${ie["body-5"]};

  &::placeholder {
    color: ${v["icn-txt-tert"]};
  }
`,Nb=L.button`
  padding: 10px 24px;
  border-radius: 9999px;
  border: none;
  background-color: ${v["sf-prim-cta"]};
  color: ${v["icn-txt-white"]};
  ${ie["heading-6"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${v["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${v["sf-prim-cta-pres"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`});var wt,ZP,HP,$p,Bb=O(()=>{"use strict";p();m();wt=Ee(De());of();ur();Db();Kt();ZP=/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[A-Za-z0-9-]{1,63}(?:\.[A-Za-z0-9-]{1,63})+$/,HP=e=>{let t=e.length;for(;t>0&&e[t-1]===",";)t-=1;return e.slice(0,t)},$p=({isOpen:e,onClose:t,onChangeSendingEmail:r})=>{let{setEmailRecipientsCount:i,setShowEmailSentToast:s}=X(),c=(0,wt.useRef)(null),l=(0,wt.useRef)(null),d=(0,wt.useRef)(!1),[g,y]=(0,wt.useState)(!1),[b,E]=(0,wt.useState)(""),[R,k]=(0,wt.useState)([]),B=(0,wt.useCallback)(()=>{let M=l.current;M&&(M.scrollTop=M.scrollHeight,c.current?.focus())},[]),N=(0,wt.useCallback)(M=>{let W=HP(M.trim());return!W||!ZP.test(W)?!1:(k($=>$.some(Q=>Q.toLowerCase()===W.toLowerCase())?$:(d.current=!0,[...$,W])),E(""),!0)},[]),F=(0,wt.useCallback)(M=>{k(W=>W.filter($=>$!==M))},[]),C=(0,wt.useCallback)(M=>{(M.key==="Enter"||M.code==="Space")&&(M.preventDefault(),N(b))},[b,N]),_=(0,wt.useCallback)(async()=>{r(!0),t(),(await Cc("meeting-capture/send-email",{to:R}))?.result?.success?(i(R.length),s(!0),r(!1)):(console.error("Failed to send email:"),r(!1))},[R,t,i,s,r]);return(0,wt.useEffect)(()=>{if(!e){E(""),y(!1);return}let M=Q=>{Q.key==="Escape"&&t()},W=document.body.style.overflow;document.body.style.overflow="hidden",window.addEventListener("keydown",M);let $=window.setTimeout(()=>{c.current?.focus()},0);return()=>{document.body.style.overflow=W,window.removeEventListener("keydown",M),window.clearTimeout($)}},[e,t]),(0,wt.useEffect)(()=>{if(!e||!d.current)return;d.current=!1;let M=window.requestAnimationFrame(B);return()=>{window.cancelAnimationFrame(M)}},[R.length,e,B]),e?u(vb,{onClick:t},u(wb,{onClick:M=>M.stopPropagation()},u(Tb,null,u(kb,null,"Send via Email"),u(Eb,{"aria-label":"Close send via email modal",onClick:t},u(Pn,null))),u(Ib,null,u(Rb,null,"To:"),u(Mb,{ref:l,isFocused:g,onClick:()=>c.current?.focus()},R.map(M=>u(_b,{key:M},u(Ab,null,u(Tl,{width:12,height:10})),u(Lb,null,M),u(Pb,{"aria-label":`Remove ${M}`,type:"button",onClick:()=>F(M)},u(Pn,{width:7.5,height:7.5})))),u(Ob,{ref:c,autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,type:"email",value:b,onChange:M=>E(M.target.value),onFocus:()=>y(!0),onBlur:()=>y(!1),onKeyDown:C})),u(Nb,{disabled:R.length===0,onClick:_},"Send Email")))):null}});var Fb=O(()=>{"use strict";p();m();Bb()});function Ub({children:e,text:t,inline:r=!0,display:i="block",position:s="left",hideTooltip:c=!1}){let[l,d]=pr.default.useState(!1),g=pr.default.useCallback(()=>{c||d(!0)},[]),y=pr.default.useCallback(()=>{d(!1)},[]),b=pr.default.useMemo(()=>{if((0,pr.isValidElement)(e)){let E=e.props.onMouseEnter,R=e.props.onMouseLeave;return(0,pr.cloneElement)(e,{onMouseEnter:k=>{g(),E?.(k)},onMouseLeave:k=>{y(),R?.(k)}})}return e},[e,g,y]);return u(XP,{inline:r,display:i},b,u(JP,{visible:l,position:s},t))}var pr,XP,JP,Vb=O(()=>{"use strict";p();m();pr=Ee(De());an();lt();XP=L.div`
  position: relative;
  display: ${({inline:e=!0,display:t="block"})=>e?"inline-flex":t};

  align-items: center;
  gap: 4px;
`,JP=L.div`
  position: absolute;

  /* Tooltip arrow pointing right (towards the button) */
  &::after {
    content: '';
    position: absolute;
    border: 4px solid transparent;
  }

  ${({position:e="left"})=>e==="right"?`
      left: calc(100% + 8px); /* Position to the left of the button with 8px gap */
      top: 50%;
      transform: translateY(-50%);
      &::after {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right-color: ${v["bg-tert-inv-60-20"]};
      }`:e==="top"?`
        right: 0;
        top: -18px;
        transform: translateX(calc(50% - 11px)) translateY(-100%);
        &::after {
          top: 100%;
          left: calc(50% - 4px);
          border-top-color: ${v["bg-tert-inv-60-20"]};
        }`:e==="top-left"?`
        right: -2px;
        top: -18px;
        transform: translateY(-100%);
        &::after {
          top: 100%;
          right: 8px;
          border-top-color: ${v["bg-tert-inv-60-20"]};
        }`:e==="top-right"?`
        left: -2px;
        top: -18px;
        transform: translateY(-100%);
        &::after {
          top: 100%;
          left: 8px;
          border-top-color: ${v["bg-tert-inv-60-20"]};
        }`:e==="bottom"?`
        right: 0;
        top: 18px;
        transform: translateX(calc(50% - 11px)) translateY(50%);
        &::after {
          top: -8px;
          left: calc(50% - 4px);
          border-bottom-color: ${v["bg-tert-inv-60-20"]};
        }`:e==="bottom-left"?`
        right: -2px;
        top: 18px;
        transform: translateY(50%);
        &::after {
          top: -8px;
          right: 8px;
          border-bottom-color: ${v["bg-tert-inv-60-20"]};
        }`:e==="bottom-right"?`
        left: -2px;
        top: 18px;
        transform: translateY(50%);
        &::after {
          top: -8px;
          left: 8px;
          border-bottom-color: ${v["bg-tert-inv-60-20"]};
        }`:e==="bottom-center-right"?`
        left: 50%;
        top: 18px;
        transform: translateX(-4px) translateY(50%);
        &::after {
          top: -8px;
          left: 4px;
          border-bottom-color: ${v["bg-tert-inv-60-20"]};
        }`:`
      right: calc(100% + 8px); /* Position to the left of the button with 8px gap */
      top: 50%;
      transform: translateY(-50%);
      &::after {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left-color: ${v["bg-tert-inv-60-20"]};
      }`}

  background-color: ${v["bg-tert-inv-60-20"]};
  color: ${v["icn-txt-prim-inv"]};
  font-size: 0.75rem; /* 12px - body-7 */
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.00375rem;

  padding: 6px 12px 6px 8px; /* top/bottom 6px, left 8px, right 12px */
  border-radius: 4px;
  white-space: nowrap;

  /* Visibility and animation */
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease, visibility 0.2s ease;

  /* High z-index to ensure it appears above other elements */
  z-index: 1000;

  /* Prevent pointer events on the tooltip itself */
  pointer-events: none;
`});var Fs,$b,qb=O(()=>{"use strict";p();m();Fs=Ee(De());An();io();ur();Kt();cn();$b=()=>{let e=Ka(),t=X(c=>c.setShowNewMeetingToast),r=X(c=>c.showNewMeetingToast),i=(0,Fs.useCallback)(()=>{t(!1)},[t]),s=(0,Fs.useCallback)(async()=>{try{let c=e?.tabId??null;if(c){let g=(await w.tabs.query({active:!0,currentWindow:!0}))[0]?.title||"Important Meeting";await et("/meeting-capture/start",{tabId:c,tabTitle:g}),t(!1)}}catch(c){console.error("Failed to start meeting capture:",c)}},[e,t]);return(0,Fs.useEffect)(()=>{if(r){let c=setTimeout(()=>{i()},1e4);return()=>clearTimeout(c)}},[r,i]),r?u(xl,null,u(Sl,null,u(Ns,null,u(Cl,null,u(zr,null)),u(vl,null,"New meeting started")),u(r9,{onClick:s},"Take Notes"),u(wl,{onClick:i},u(Pn,null)))):null}});var Nl,Gb,Wb=O(()=>{"use strict";p();m();Nl=Ee(De());ur();cn();Gb=({isOpen:e,toastKeyValue:t,onClose:r})=>{let i=(0,Nl.useCallback)(()=>{r()},[r]);return(0,Nl.useEffect)(()=>{if(!e)return;let s=window.setTimeout(()=>{i()},1e4);return()=>{window.clearTimeout(s)}},[i,e,t]),e?u(xl,null,u(Sl,null,u(Ns,null,u(Cl,null,u(c9,null)),u(vl,null,"Summary copied to your clipboard")),u(Ns,null,u(wl,{onClick:i},u(Pn,null))))):null}});var Gne,qp,zb=O(()=>{"use strict";p();m();an();lt();Gne=L.button`
  width: 240px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid transparent;
  gap: 8px;
  padding: 12px 16px;
  background: ${e=>e.disabled?v["bg-sec-0-100"]:v["sf-prim-w-100"]};

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5%;
  color: ${e=>e.disabled?v["icn-txt-sec"]:v["icn-txt-prim"]};

  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${e=>e.disabled?v["bg-sec-0-100"]:v["sf-prim-hov-w-100"]};};
  }

  &:active {
    background-color: ${e=>e.disabled?v["bg-sec-0-100"]:v["sf-prim-pres-w-100"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,qp=L.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${v["brdr-sec-20-60"]};
  border-top: 2px solid ${v["brdr-tert-40-50"]};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`});var ot,Gp,jb,Qb=O(()=>{"use strict";p();m();ot=Ee(De());Op();Kt();cn();ur();Cb();Fb();Vo();Vb();po();Ke();pp();qb();Wb();zb();Gp=be("ScribeMeetingSummarization"),jb=({isOnSummarize:e})=>{let t=X(te=>te.transcripts),r=X(te=>te.recordingStartTime),i=X(te=>te.recordingEndTime),s=X(te=>te.isSummaryLoading),c=X(te=>te.isReconnecting),l=X(te=>te.summary),d=X(te=>te.summaryError),g=X(te=>te.showCSATPopup),y=X(te=>te.csatPopupDismissed),b=X(te=>te.setShowCSATPopup),E=X(te=>te.tabId),R=(0,ot.useRef)(!1),k=X(te=>te.savedFileId),B=X(te=>te.savedFolderId),N=X(te=>te.savedMeetingTitle),[F,C]=(0,ot.useState)(!1),[_,M]=(0,ot.useState)(!1),[W,$]=(0,ot.useState)(0),[Q,V]=(0,ot.useState)(!1),oe=(0,ot.useRef)(null),de=(0,ot.useMemo)(()=>{if(!r||!i)return null;let te=new Date(r),Re=new Date(i),we=(it=>{let nt={weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"};return it.toLocaleDateString("en-US",nt)})(te),Ve=Re.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});return`${we} – ${Ve}`},[r,i]),se=(0,ot.useMemo)(()=>{let te=new Set;t.forEach(we=>{we.speakerName?te.add(we.speakerName):we.source==="tab"&&te.add("Speaker")});let Re=Array.from(te).filter(we=>we!=="Unknown");if(Re.length===0)return null;let Le=we=>we.split(" ")[0];if(Re.length>4){let we=Re.slice(0,3).map(Le).join(", "),Ve=Re.slice(3),it=Ve.length,nt=Ve.join(", ");return{visibleNames:we,othersText:`+${it} others`,othersTooltip:nt}}return{visibleNames:Re.map(Le).join(", "),othersText:null,othersTooltip:null}},[t]),J=(0,ot.useCallback)(async()=>{if(k){let te=`${_n.app.baseUrl}/item/${k}`;B&&(te+=`?folder=${B}`),w.tabs.create({url:te,active:!0});return}w.tabs.create({url:_n.app.baseUrl,active:!0})},[k,B]),Ie=(0,ot.useCallback)(()=>{b(!1)},[b]),Se=(0,ot.useCallback)(()=>{C(!0)},[]),K=(0,ot.useCallback)(()=>{C(!1)},[]),pe=(0,ot.useCallback)(()=>{M(!1)},[]),le=(0,ot.useCallback)(async()=>{let te=oe.current;if(!l||!te)return;let Re=te.innerHTML,Le=te.innerText||te.textContent||l;try{if(navigator.clipboard&&"write"in navigator.clipboard){let we=new Blob([Re],{type:"text/html"}),Ve=new Blob([Le],{type:"text/plain"});await navigator.clipboard.write([new ClipboardItem({"text/html":we,"text/plain":Ve})])}else if(navigator.clipboard&&"writeText"in navigator.clipboard)await navigator.clipboard.writeText(Le);else throw new Error("Clipboard API not available")}catch(we){Gp.error("Failed to copy summary with Clipboard API:",we);try{let Ve=document.createElement("textarea");Ve.value=Le,Ve.style.position="fixed",Ve.style.opacity="0",document.body.appendChild(Ve),Ve.select(),document.execCommand("copy"),document.body.removeChild(Ve)}catch(Ve){Gp.error("All copy summary methods failed:",Ve);return}}M(!0),$(we=>we+1)},[l]),me=(0,ot.useMemo)(()=>N||"Important Meeting",[N]);if((0,ot.useEffect)(()=>{if(!s&&!y){let te=setTimeout(()=>{b(!0)},1e3);return()=>clearTimeout(te)}},[s,y,b]),(0,ot.useEffect)(()=>{e&&l&&!s&&!R.current&&(R.current=!0,dy(E||void 0).catch(te=>{Gp.error("Failed to log Meeting Summary Viewed event:",te)}))},[e,l,s,E]),!e)return null;let ce=s&&!l,fe=d&&!s&&!c,Ce=l&&!d,Ze=c&&!!l;return u(E5,null,u(k5,null,u(I5,null,u(M5,null,"Meeting ended")),u(R5,null,k?u(Cp,{onClick:J},"Open in Speechify"):!d&&u(Cp,{disabled:!0,style:{display:"inline-flex",alignItems:"center"}},u(qp,null),"Open in Speechify"))),u(_5,{className:"smoothScrollbar",hasPopup:g},ce&&u(T,null,u(A5,null,"Generating notes..."),u(vp,null,u(Os,{width:"100%"}),u(Os,{width:"80%"}))),fe&&u(L5,null,"Error: ",d),Ce&&u(N5,null,u(P5,null,me),de&&u(wp,null,u(zr,null)," ",de),se&&u(wp,null,u(o9,null)," ",se.visibleNames,se.othersText&&u(T,null," ",u(Ub,{text:se.othersTooltip,position:"top"},u("span",{style:{cursor:"default"}},se.othersText)))),u(O5,null,u(Tp,{onClick:le},u(l9,null),"Copy Notes"),u(Tp,{disabled:!k||Q,onClick:Se},Q?u(qp,null):u(T,null,u(Tl,null),"Send via Email"))),u("div",{ref:oe},u(Ll,{content:l})),Ze&&u(vp,null,u(Os,{width:"100%"}),u(Os,{width:"80%"}))),!Ce&&!s&&!c&&u(Ms,{title:"No transcripts available",action:"take notes this meeting"})),u($p,{isOpen:F,onClose:K,onChangeSendingEmail:V}),u(Gb,{isOpen:_,toastKeyValue:W,onClose:pe}),u(Sb,{isOpen:g,onClose:Ie}),u($b,null))}});var mi,Yb,Kb=O(()=>{"use strict";p();m();mi=Ee(De());gl();lt();Uc();cn();Yb=({isGenerating:e,hasTranscripts:t})=>{let[r,i]=(0,mi.useState)(!1),{askPredefinedQuestion:s}=Ho(),c=(0,mi.useCallback)(async y=>{g||await s(y)},[s]),l=(0,mi.useCallback)(()=>{i(!0)},[]),d=(0,mi.useCallback)(()=>{i(!1)},[]),g=e||!t;return u(x5,null,u(Sp,{onMouseEnter:l,onMouseLeave:d,onClick:()=>c(mo[0].type),disabled:g},u(dp,{width:12,height:12,color:v["icn-txt-sec"]}),mo[0].label),u(S5,{isHide:r}),u(Sp,{onMouseEnter:l,onMouseLeave:d,onClick:()=>c(mo[1].type),disabled:g},u(dp,{width:12,height:12,color:v["icn-txt-sec"]}),mo[1].label))}});var ln,eO,tO,Zb,Hb=O(()=>{"use strict";p();m();ln=Ee(De());Kt();cn();ur();po();Ke();eO=be("ScribeTranscriptAccordion"),tO=()=>u(u5,null,"Listening..."),Zb=({isOpen:e,onToggle:t})=>{let r=X(N=>N.tabSpeechStarted),i=X(N=>N.micSpeechStarted),s=X(N=>N.transcripts),c=X(N=>N.tabId),l=Nc(),d=(0,ln.useRef)(null),g=(0,ln.useRef)(null),y=(0,ln.useRef)(!0),b=(0,ln.useRef)(!1),E=(0,ln.useMemo)(()=>s.filter(N=>N.text.trim().length>0),[s]),R=(0,ln.useCallback)(()=>{let N=g.current;return N?N.scrollHeight-N.scrollTop-N.clientHeight<50:!0},[]),k=(0,ln.useCallback)(()=>{y.current=R()},[R]);return(0,ln.useEffect)(()=>{e&&(y.current=!0,l&&!b.current&&(b.current=!0,uy(c||void 0).catch(N=>{eO.error("Failed to log Meeting Transcript Viewed event:",N)})))},[e,l,c]),(0,ln.useEffect)(()=>{e&&E.length>0&&y.current&&requestAnimationFrame(()=>{d.current?.scrollIntoView({behavior:"instant"})})},[e,E]),u(o5,{isOpen:e},u(i5,null,u(s5,null,u(a5,null,"Meeting Transcript"),u(c5,null,u(bl,{onClick:t},u(Pn,null)))),u(l5,{ref:g,isOpen:e,className:"smoothScrollbar",onScroll:k},l||r||i?u(T,null,E.map(N=>{let F=N.source==="mic";return u(yp,{key:N.id},u(bp,{isSelf:F},u(xp,{isSelf:F},N.text)))}),(r||i)&&u(yp,null,u(bp,{isSelf:!1},u(xp,{isSelf:!1},u(tO,null)))),u("div",{ref:d})):u(d5,null,"Waiting for the conversation to begin. The transcript will show automatically."))))}});function rO(e){let[t,r]=(0,ft.useState)(!1),[i,s]=(0,ft.useState)(!1);return(0,ft.useEffect)(()=>{if(e)s(!0),r(!1);else if(i){r(!0);let c=setTimeout(()=>{s(!1),r(!1)},300);return()=>clearTimeout(c)}},[e,i]),{shouldRender:i,isExiting:t}}function Xb(){let e=Of(),t=Nf(),r=Df(),i=Bf(),s=Nc(),c=Yi(),[l,d]=(0,ft.useState)(null),g=$4(l),y=(0,ft.useCallback)(ce=>{d(ce)},[]),b=g!==null&&g!=="bottom",{shouldRender:E,isExiting:R}=rO(b),k=(0,ft.useCallback)(()=>{l&&l.scrollTo({top:l.scrollHeight,behavior:"smooth"})},[l]),{askCustomQuestion:B}=Ho(),N=X(ce=>ce.showActivateNotetakerPopup),F=X(ce=>ce.tabId),C=X(ce=>ce.inputValue),_=X(ce=>ce.setInputValue),M=X(ce=>ce.isTranscriptOpen),W=X(ce=>ce.setIsTranscriptOpen),$=X(ce=>ce.isOnSummarize),Q=Ka(),V=e==="recording",oe=e==="starting"||e==="stopping",de=C.trim().length>0,se=(0,ft.useMemo)(()=>c?.startsWith("https://meet.google.com/landing"),[Q]),J=(0,ft.useMemo)(()=>{let ce=Q?.tabId??null;return V&&!!F&&F!==ce},[F,V,Q]);(0,ft.useEffect)(()=>{(async()=>{try{let fe=await et("/meeting-capture/get-session");if(!fe?.success||!fe?.state)return;let Ce=X.getState();Ce.setCaptureState(fe.state),fe.state==="recording"&&(typeof fe.tabId=="number"&&Ce.setTabId(fe.tabId),Array.isArray(fe.transcripts)&&fe.transcripts.length>0&&Ce.setTranscripts(fe.transcripts),typeof fe.startTime=="number"&&Ce.setRecordingStartTime(fe.startTime))}catch(fe){nO.error("[ScribeView] Failed to hydrate session:",fe)}})()},[]),(0,ft.useEffect)(()=>{l&&(l.scrollTop=l.scrollHeight)},[r,l]);let Ie=(0,ft.useCallback)(async()=>{if(!J)try{await et("/meeting-capture/stop",{tabId:Q?.tabId??void 0,reason:"user_stopped"})}catch(ce){console.error("Failed to stop capture:",ce)}},[J,Q]),Se=(0,ft.useCallback)(ce=>{_(ce)},[_]),K=(0,ft.useCallback)(()=>{!de||i||(B(C.trim()),_(""),W(!1))},[C,de,i,B,_,W]),pe=(0,ft.useMemo)(()=>{let ce=Q?.title??document.title;switch(e){case"recording":return`${ce.replace("Meet -","Taking notes on")}`;case"starting":return"Starting...";case"stopping":return"Stopping...";case"error":return"Something went wrong";default:return"Waiting for meeting to start..."}},[e,J,Q,N,se]),le=(0,ft.useMemo)(()=>N||se||J,[N,se,J]),me=(0,ft.useCallback)(()=>{W(!M)},[M]);return $?u(yl,null,N?u(Ms,null):u(jb,{isOnSummarize:$})):J?u(yl,null,u(mp,null,u(Bp,{isRecording:!1,isLoading:!1,statusText:"AI Notetaker",onStopCapture:Us.noop,showTextCenter:!0}),u(u9,null),u(Vp,{inputValue:"",onInputChange:Us.noop,onSubmit:Us.noop,hasTranscripts:s,isRecording:!1,onToggleTranscript:Us.noop,disabled:!0}))):u(yl,null,N?u(Ms,null):u(mp,null,u(Bp,{isRecording:J?!1:V,isLoading:J?!1:oe,statusText:pe,onStopCapture:Ie,showTextCenter:se}),t&&u(b5,null,t),M&&u(Zb,{isOpen:M,onToggle:me}),!M&&(r.length===0?u(Y9,null):u(m5,null,u(t9,null,l&&u(n9,null,u(ml,{color:v["bg-prim-w-110"],element:l,hide:{top:!0}})),E&&u(e9,{isExiting:R,onClick:k,title:"Scroll to bottom"},u(U4,null)),u(z9,{messages:r,messagesRef:y})))),!de&&!M&&!se&&u(Yb,{isGenerating:i,hasTranscripts:s})),u(Vp,{inputValue:C,onInputChange:Se,onSubmit:K,hasTranscripts:s,isRecording:V,onToggleTranscript:me,disabled:le}))}var ft,Us,nO,Jb=O(()=>{"use strict";p();m();ft=Ee(De()),Us=Ee(Yf());Rs();gl();io();q4();An();lt();Ke();Uc();Kt();pp();d9();j9();K9();Z9();xb();Qb();Kb();cn();Hb();nO=be("ScribeView")});var e8=O(()=>{"use strict";p();m();Jb()});var t8=O(()=>{"use strict";p();m();Kt();Ty();_y();e8()});function moe(e){return Vs=e,$s.getState().initialize()}function Dl(e){let t=$s.getState(),r={};e.playbackSpeed!=null&&e.playbackSpeed!==t.playbackSpeed&&(r.playbackSpeed=e.playbackSpeed),e.voice!=null&&e.voice!==t.voice&&(r.voice=e.voice),Object.keys(r).length>0&&$s.setState(r)}var n8,Vs,$s,goe,hoe,r8=O(()=>{"use strict";p();m();Er();Ke();rE();n8=be("SharedSettingsStore","green"),Vs=null,$s=St()((e,t)=>({voice:null,playbackSpeed:null,voiceTypingSoundEffects:!0,isReady:!1,updateVoice:r=>e({voice:r}),updateSpeed:r=>e({playbackSpeed:r}),updateVoiceTypingSoundEffects:async r=>{let i=t().voiceTypingSoundEffects;e({voiceTypingSoundEffects:r});try{Vs&&await Vs("/user-settings/set-voice-typing-sound-effects",{soundEffectsEnabled:r})}catch(s){n8.error("Failed to save voiceTypingSoundEffects:",s),e({voiceTypingSoundEffects:i})}},initialize:async()=>{if(!(t().isReady||!Vs))try{let r=await Vs("/user-settings/get");e({voice:r.voice||null,playbackSpeed:r.playbackSpeed||null,voiceTypingSoundEffects:r["extension.voiceTyping.soundEffects"]??!0,isReady:!0})}catch(r){n8.error("Failed to initialize shared settings store:",r)}}}));goe=()=>$s(e=>e.voice),hoe=()=>$s(e=>e.playbackSpeed)});var qs,Gs,Wp=O(()=>{"use strict";p();m();Ke();Ua();r8();Fi();qs=be("SettingsRoutes","green"),Gs=_r("settings",{update:async({voice:e,playbackSpeed:t,extensionChatVoiceSpeed:r})=>{try{let i=Lt.getState();return i.isReady||await i.readinessPromise,i.updateSettings({voice:e,playbackSpeed:t}),Dl({voice:e,playbackSpeed:t}),r!==void 0&&Lt.setState({extensionChatVoiceSpeed:r}),{success:!0,updated:{voice:e!==void 0,playbackSpeed:t!==void 0,extensionChatVoiceSpeed:r!==void 0}}}catch(i){return qs.error("❌ Failed to update settings:",i),{success:!1,error:i instanceof Error?i.message:String(i)}}},"update-voice":async({voice:e})=>{try{let t=Lt.getState();return t.isReady||await t.readinessPromise,t.updateVoice(e),Dl({voice:e}),{success:!0,voice:e.name}}catch(t){return qs.error("❌ Failed to update voice:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},"update-speed":async({playbackSpeed:e})=>{try{let t=Lt.getState();return t.isReady||await t.readinessPromise,t.updateSpeed(e),Dl({playbackSpeed:e}),{success:!0,playbackSpeed:e}}catch(t){return qs.error("❌ Failed to update speed:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},"get-current":async()=>{try{let e=Lt.getState();return e.isReady||await e.readinessPromise,{voice:e.voice,playbackSpeed:e.playbackSpeed,isReady:e.isReady}}catch(e){return qs.error("❌ Failed to get current settings:",e),{voice:null,playbackSpeed:null,isReady:!1,error:e instanceof Error?e.message:String(e)}}},"orchestration-changed":async({domain:e})=>{try{let{invalidateCachedData:t}=await import("./cache-4CTPRWLZ.js"),{websiteFeaturesEmitter:r}=await import("./emitter-WYYRU56P.js");return t(e),await r.emit("orchestrationChanged",{domain:e}),{success:!0}}catch(t){return qs.error("Failed to handle orchestration change:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}}})});var Foe,o8=O(()=>{"use strict";p();m();Ke();Wp();Fi();Fi();Wp();Foe=be("SettingsFeature","green")});var s8,zp,i8,Qoe,a8=O(()=>{"use strict";p();m();Er();An();io();s8=St(()=>({totalDuration:null,currentTime:null,isLoading:!1})),zp=({totalDuration:e,currentTime:t,isLoading:r})=>{s8.setState({totalDuration:e,currentTime:t,isLoading:r})},i8=()=>{s8.setState({totalDuration:null,currentTime:null,isLoading:!1})},Qoe=async()=>{let{currentUrlMetadata:e}=Z.getState(),t=e?.tabId;if(t)try{let r=await et("/content/get-playback-duration",{tabId:t});r&&r.totalDuration>0?zp({totalDuration:r.totalDuration,currentTime:r.currentTime,isLoading:r.isLoading}):i8()}catch{i8()}}});var un,c8,jp,aie,l8=O(()=>{"use strict";p();m();bd();Rf();Ui();iy();_c();Ke();Ua();t8();o8();a8();un=be("SidepanelRoutes"),c8=_r("tab-info",{ping:async()=>({message:"pong from sidepanel"}),"stop-playback":async()=>{un.info("🛑 [SIDEPANEL-ROUTES] Received stop playback request");try{Ya();let{isActive:e}=Be.getState();return e&&(un.info("🎤 [SIDEPANEL-ROUTES] Stopping voice mode due to content playback"),as()),Fr()?(un.info("✅ [SIDEPANEL-ROUTES] Successfully paused sidepanel playback"),{success:!0,paused:!0}):(un.warn("⚠️ [SIDEPANEL-ROUTES] No orator instance available to stop"),{success:!1,error:"No orator instance available"})}catch(e){return un.error("❌ [SIDEPANEL-ROUTES] Error stopping sidepanel playback:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"content-available":async({url:e,hasContent:t})=>{un.info("📨 [SIDEPANEL-ROUTES] Received content availability update:",{url:e,hasContent:t,timestamp:new Date().toISOString()});try{let{default:r}=await import("./TabManager-7BX2YZYJ.js"),s=r.getInstance().getCurrentTab();if(un.info("Processing content availability:",{url:e,hasContent:t,currentTabUrl:s?.url,urlMatches:e===s?.url}),e===s?.url){un.info("✅ Updating sidepanel state - content available:",t);let{updateCurrentUrlState:c}=await import("./actions-JDSKL2RC.js");await c({hasContent:t,contentUpdatedAt:Date.now(),latestTitle:s?.title??""})}else un.debug("❌ URL mismatch - not updating state:",{messageUrl:e,currentUrl:s?.url});return{success:!0}}catch(r){return un.error("❌ [SIDEPANEL-ROUTES] Failed to process content availability update:",r),{success:!1,error:r instanceof Error?r.message:String(r)}}},"request-summarization":async()=>{un.info("📨 [SIDEPANEL-ROUTES] Received summarization request");try{let{default:e}=await import("./TabManager-7BX2YZYJ.js");return await e.getInstance().handleSummarizationRequest(),un.info("✅ [SIDEPANEL-ROUTES] Successfully processed summarization request"),{success:!0}}catch(e){return un.error("❌ [SIDEPANEL-ROUTES] Failed to process summarization request:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"playback-duration-update":async({totalDuration:e,currentTime:t,isLoading:r})=>{try{return zp({totalDuration:e,currentTime:t,isLoading:r}),{success:!0}}catch(i){return{success:!1,error:i instanceof Error?i.message:String(i)}}}}),jp={"tab-info":c8,settings:Gs,scribe:Vc,router:Af},aie={"tab-info":c8.resolvers,settings:Gs.resolvers,router:Af.resolvers,scribe:Vc.resolvers}});var Bl=ee(Ws=>{"use strict";p();m();Object.defineProperty(Ws,"__esModule",{value:!0});Ws.CodesEnum=void 0;var oO;(function(e){e.Success="success",e.NotFound="not-found",e.BadRequest="bad-request",e.Unauthorized="unauthorized",e.Unknown="unknown"})(oO=Ws.CodesEnum||(Ws.CodesEnum={}))});var Hp=ee(Qn=>{"use strict";p();m();Object.defineProperty(Qn,"__esModule",{value:!0});Qn.UnauthorizedError=Qn.BadRequestError=Qn.NotFoundError=Qn.UnknownError=void 0;var Fl=Bl(),Qp=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Fl.CodesEnum.Unknown}};Qn.UnknownError=Qp;var Yp=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Fl.CodesEnum.NotFound}};Qn.NotFoundError=Yp;var Kp=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Fl.CodesEnum.BadRequest}};Qn.BadRequestError=Kp;var Zp=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Fl.CodesEnum.Unauthorized}};Qn.UnauthorizedError=Zp});var f8=ee(wn=>{"use strict";p();m();var iO=wn&&wn.__createBinding||(Object.create?(function(e,t,r,i){i===void 0&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}):(function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]})),d8=wn&&wn.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&iO(t,e,r)},u8=wn&&wn.__awaiter||function(e,t,r,i){function s(c){return c instanceof r?c:new r(function(l){l(c)})}return new(r||(r=Promise))(function(c,l){function d(b){try{y(i.next(b))}catch(E){l(E)}}function g(b){try{y(i.throw(b))}catch(E){l(E)}}function y(b){b.done?c(b.value):s(b.value).then(d,g)}y((i=i.apply(e,t||[])).next())})};Object.defineProperty(wn,"__esModule",{value:!0});wn.createHermes=void 0;var So=Hp(),Co=Bl();d8(Bl(),wn);d8(Hp(),wn);function sO({transport:e,defaultMeta:t}){let r={};function i(l,d){var g,y;return u8(this,void 0,void 0,function*(){let b=yield e.fetch(l,{body:(g=d?.body)!==null&&g!==void 0?g:{},meta:Object.assign(Object.assign({},t??{}),(y=d?.meta)!==null&&y!==void 0?y:{})});if(!b?.meta.isSuccess)switch(b?.meta.code){case Co.CodesEnum.BadRequest:throw new So.BadRequestError("Invalid request",b);case Co.CodesEnum.NotFound:throw new So.NotFoundError("Requested resource was not found",b);case Co.CodesEnum.Unauthorized:throw new So.UnauthorizedError("Unauthorized to make that request",b);default:throw new So.UnknownError("Unknown error detected",b)}return b})}function s(l,d){if(r[l])throw new Error("Listener already exists on that path");r[l]=d}function c(l,d){return u8(this,void 0,void 0,function*(){let g={body:{},meta:{isSuccess:!0}},y=r[l];if(!y)return g.meta={isSuccess:!1,code:Co.CodesEnum.NotFound},g;try{yield y(d,g)}catch(b){if(g.meta.isSuccess=!1,b instanceof So.NotFoundError)g.meta.code=Co.CodesEnum.NotFound;else if(b instanceof So.BadRequestError)g.meta.code=Co.CodesEnum.BadRequest;else if(b instanceof So.UnauthorizedError)g.meta.code=Co.CodesEnum.Unauthorized;else throw b}return g})}return{fetch:i,listen:s,handleFetch:c}}wn.createHermes=sO});var p8=O(()=>{"use strict";p();m();_c()});var gi,m8,aO,Rie,cO,Xp,g8,Jp,h8=O(()=>{"use strict";p();m();tE();l8();gi=Ee(f8());p8();Ke();m8=be("Sidepanel Listener"),{handleFetch:aO,listen:Rie}=(0,gi.createHermes)({transport:{fetch:async()=>(console.error("Attempted to use unsupported fetch through hermes"),{body:{},meta:{isSuccess:!1}})}}),cO=(e={})=>({body:e,meta:{isSuccess:!0}}),Xp=(e,t)=>({body:t?{}:{message:t},meta:{isSuccess:!1,code:e}}),g8=({path:e,request:t,hash:r,isHermes:i,target:s},c,l)=>{if(!i||s!=="sidepanel")return;t={body:{...t?.body??{}},meta:{...t?.meta??{},tabId:c.tab?.id}};let d=Og({hash:r,label:"Sidepanel Listen",labelCSS:"color: #ff9500",logInfo:()=>{console.info("Sender",c),Pa(t)},path:e}),g=e.split("/").filter(Boolean),y=g[0];if(y in jp){let b=jp[y];if(!(g.slice(1).join("/")in b.resolvers)){d({isSuccess:!1,logInfo:()=>{console.info("Sender",c)}}),l(Xp(gi.CodesEnum.NotFound));return}return b.handleRequest(g.slice(1).join("/"),t.body,{meta:t.meta}).then(R=>{let k=cO(R);d({isSuccess:!0,logInfo:()=>{console.info("Sender",c),Pa(k)}}),l(k)}).catch(R=>{d({isSuccess:!1,logInfo:()=>{console.info("Sender",c),R?.message?console.error(R.message):console.error(R)}}),l(Xp(R.code??gi.CodesEnum.Unknown,R.message))}),!0}return aO(e,t).then(b=>{d({isSuccess:b.meta.isSuccess,logInfo:()=>{console.info("Sender",c),Pa(b)}}),l(b)}).catch(b=>{d({isSuccess:!1,logInfo:()=>{console.info("Sender",c),b?.message?console.error(b.message):console.error(b)}}),l(Xp(b.code??gi.CodesEnum.Unknown,b.message))}),!0};w.runtime.onMessage.addListener(g8);Jp=async()=>{try{w.runtime.onMessage.removeListener(g8)}catch(e){m8.error("Failed to remove message listener:",e)}try{Fr()}catch(e){m8.error("Failed to stop sidepanel playback during cleanup:",e)}};window.addEventListener("beforeunload",Jp);window.addEventListener("unload",Jp);window.addEventListener("pagehide",Jp)});var An=O(()=>{p();m();h8();Fg()});var y8,$ie,b8=O(()=>{"use strict";p();m();Ke();An();Bi();Ir();y8=be("Sidepanel Tab Store"),$ie=async()=>{let{currentUrl:e,currentUrlMetadata:t}=Z.getState();if(!e||!t?.tabId)return y8.warn("Cannot check content availability - missing URL or tab ID"),!1;try{let r=await et("/content/check-content-availability",{tabId:t.tabId}),i=!!r?.hasContent,s=r?.contentCount||0,c=i&&s>0,l=Z.getState();if(l.currentUrlState){let d={...l.currentUrlState,hasContent:c,contentCount:s};Z.setState({currentUrlState:d}),await Rr(e,d)}return c}catch(r){return y8.warn("Failed to check content availability:",r),!1}}});var jie,x8=O(()=>{"use strict";p();m();Ir();jie=e=>{Z.setState({config:e})}});var r2=O(()=>{p();m();$g();qg();Wg();zg();b8();x8();cd()});export{WV as a,X2 as b,J2 as c,Vi as d,N0 as e,Qi as f,VF as g,$F as h,qF as i,JI as j,nR as k,GF as l,rR as m,WF as n,zF as o,jF as p,QF as q,YF as r,X0 as s,XF as t,e2 as u,t2 as v,oU as w,Ya as x,bd as y,ld as z,Be as A,dO as B,fO as C,pO as D,mO as E,gO as F,hO as G,yO as H,bO as I,Ui as J,MO as K,_O as L,Vg as M,AO as N,LO as O,PO as P,OO as Q,VO as R,$O as S,qO as T,GO as U,WO as V,zO as W,eN as X,Gg as Y,tN as Z,nN as _,rN as $,oN as aa,iN as ba,sN as ca,aN as da,pN as ea,mN as fa,gN as ga,hN as ha,$ie as ia,jie as ja,r2 as ka,dU as la,Yi as ma,Ka as na,fU as oa,pU as pa,mU as qa,gU as ra,hU as sa,oR as ta,yU as ua,bU as va,io as wa,_n as xa,Vo as ya,s8 as za,i8 as Aa,Qoe as Ba,a8 as Ca,Ed as Da,$o as Ea,b2 as Fa,oV as Ga,iV as Ha,A2 as Ia,Nr as Ja,Ld as Ka,Od as La,ER as Ma,L2 as Na,xV as Oa,P2 as Pa,MR as Qa,rc as Ra,H2 as Sa,Cc as Ta,of as Ua,uo as Va,B6 as Wa,Sf as Xa,Qz as Ya,F6 as Za,Ic as _a,Cf as $a,q6 as ab,G6 as bb,i_ as cb,Rc as db,m_ as eb,Ef as fb,Lj as gb,Fr as hb,Pj as ib,_c as jb,Ac as kb,Uj as lb,Vj as mb,K6 as nb,h_ as ob,y_ as pb,b_ as qb,x_ as rb,as as sb,S_ as tb,C_ as ub,v_ as vb,w_ as wb,T_ as xb,E_ as yb,k_ as zb,I_ as Ab,R_ as Bb,M_ as Cb,__ as Db,A_ as Eb,L_ as Fb,P_ as Gb,O_ as Hb,N_ as Ib,D_ as Jb,B_ as Kb,F_ as Lb,U_ as Mb,V_ as Nb,$_ as Ob,If as Pb,q_ as Qb,G_ as Rb,W_ as Sb,z_ as Tb,j_ as Ub,Rf as Vb,Mf as Wb,on as Xb,dQ as Yb,fQ as Zb,pQ as _b,ny as $b,mQ as ac,gQ as bc,oy as cc,iy as dc,X as ec,Of as fc,Kt as gc,Yf as hc,Py as ic,Kf as jc,ep as kc,tp as lc,qA as mc,yo as nc,pl as oc,L as pc,an as qc,di as rc,ml as sc,Rs as tc,lX as uc,ZA as vc,HA as wc,uX as xc,dX as yc,fX as zc,pX as Ac,mX as Bc,gX as Cc,hX as Dc,yX as Ec,bX as Fc,U4 as Gc,dp as Hc,xX as Ic,SX as Jc,CX as Kc,vX as Lc,wX as Mc,TX as Nc,EX as Oc,kX as Pc,IX as Qc,RX as Rc,MX as Sc,_X as Tc,AX as Uc,gl as Vc,$4 as Wc,q4 as Xc,ie as Yc,bo as Zc,r5 as _c,xl as $c,Sl as ad,Ns as bd,Cl as cd,vl as dd,r9 as ed,wl as fd,cn as gd,Pn as hd,c9 as id,ur as jd,Ll as kd,Op as ld,xee as md,See as nd,wee as od,Tee as pd,Eee as qd,kee as rd,Aee as sd,q9 as td,Dp as ud,G9 as vd,W9 as wd,gte as xd,tb as yd,db as zd,mb as Ad,hb as Bd,yb as Cd,Ub as Dd,Vb as Ed,qp as Fd,zb as Gd,Xb as Hd,Jb as Id,t8 as Jd,$s as Kd,moe as Ld,goe as Md,hoe as Nd,r8 as Od,o8 as Pd,Rie as Qd,h8 as Rd,An as Sd};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-ZW2YZNO7.js.map
