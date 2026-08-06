(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as F}from"./chunk-VBM62247.js";import{$g as m,Bd as b,Wd as A,Yc as M,ah as S,dd as P,od as W,tc as V,vc as B}from"./chunk-324T2OUF.js";import{_ as k,a as T,b as E,ba as y,c as L,d as O,i as f,n as v,r as _}from"./chunk-KJ3NFIHV.js";import{g as J}from"./chunk-H3LCZSHS.js";import{d as U,g as n,i as t,n as i}from"./chunk-CAO5DZGK.js";i();n();i();n();function Z(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function Y(e,r,o){var s=[],l=E(e,s,o);return s.length<2?o:l+r(s)}var j=function(r){var o=T(r);o.sheet.speedy=function(w){if(this.ctr!==0)throw new Error("speedy must be changed before any rules are inserted");this.isSpeedy=w},o.compat=!0;var s=function(){for(var C=arguments.length,p=new Array(C),a=0;a<C;a++)p[a]=arguments[a];var h=O(p,o.registered,void 0);return L(o,h,!1),o.key+"-"+h.name},l=function(){for(var C=arguments.length,p=new Array(C),a=0;a<C;a++)p[a]=arguments[a];var h=O(p,o.registered),D="animation-"+h.name;return Z(o,{name:h.name,styles:"@keyframes "+D+"{"+h.styles+"}"}),D},c=function(){for(var C=arguments.length,p=new Array(C),a=0;a<C;a++)p[a]=arguments[a];var h=O(p,o.registered);Z(o,h)},I=function(){for(var C=arguments.length,p=new Array(C),a=0;a<C;a++)p[a]=arguments[a];return Y(o.registered,s,Q(p))};return{css:s,cx:I,injectGlobal:c,keyframes:l,hydrate:function(C){C.forEach(function(p){o.inserted[p]=!0})},flush:function(){o.registered={},o.inserted={},o.sheet.flush()},sheet:o.sheet,cache:o,getRegisteredStyles:E.bind(null,o.registered),merge:Y.bind(null,o.registered,s)}},Q=function e(r){for(var o="",s=0;s<r.length;s++){var l=r[s];if(l!=null){var c=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))c=e(l);else{c="";for(var I in l)l[I]&&I&&(c&&(c+=" "),c+=I)}break}default:c=l}c&&(o&&(o+=" "),o+=c)}}return o};var u=j({key:"speechify"}),v1=u.flush,x1=u.hydrate,P1=u.cx,I1=u.merge,O1=u.getRegisteredStyles,b1=u.injectGlobal,N1=u.keyframes,E1=u.css,G1=u.sheet,R1=u.cache;i();n();i();n();var z=()=>t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.44974 8.96232C6.05988 8.07071 6.589 7.62984 7.38119 7.87474C7.86056 8.02294 8.05734 8.63488 7.86056 9.40272C7.51457 10.7528 7.38119 11.5278 7.38119 12.4502C8.59809 9.89955 10.8476 6.50955 11.8226 5.36934C12.4964 4.58124 13.4623 4.68175 13.826 4.85753C14.4168 5.14316 14.448 5.76249 14.2441 6.35479C12.8332 10.4525 12.784 12.6411 12.6108 14.7673C13.4877 12.4092 14.5538 10.1911 15.8412 8.62891C16.3836 7.87964 17.3344 7.64444 17.9349 7.88784C18.5354 8.13124 18.6722 8.71357 18.5354 9.44332C18.1784 11.3463 18.0013 12.2382 18.0013 12.9754C18.6534 12.4767 19.1726 12.0553 20.3597 11.959C21.5468 11.8627 24 12.3353 24 12.3353C24 12.3353 22.5838 12.5759 21.8357 12.7593C20.3023 13.1354 19.7667 13.5752 18.7741 15.029C18.4856 15.4514 18.0013 15.7758 17.4557 15.7345C16.9101 15.6933 16.5437 15.35 16.3836 14.8865C16.1612 14.2422 16.095 13.2785 16.3836 11.1929C14.9694 13.3446 14.2441 16.2675 13.275 18.2058C13.0273 18.7014 12.6041 19.2661 12.0307 19.2661C11.4572 19.2661 10.7136 19.0437 10.617 17.3399C10.3697 12.9754 11.1942 9.50233 11.1942 9.50233C9.58829 12.0486 9.07541 13.5329 8.5168 14.3069C7.95818 15.0808 7.41614 15.7511 6.7568 15.7345C6.09747 15.718 5.71375 14.9809 5.63031 14.3069C5.54688 13.6329 5.52287 12.772 5.76656 11.1929C5.13224 11.8272 4.57449 12.2568 3.57562 12.5258C2.57674 12.7948 1.38397 12.6236 0 12.3353C1.38397 12.3353 3.71298 11.5003 5.44974 8.96232Z",fill:v["icn-txt-accent"]}));var H=(e,r)=>r?e?"toast-out 0.3s ease-out forwards":"toast-in 0.3s ease-out forwards":"none",t1=f.div`
  position: fixed;
  top: 16px;
  left: 50%;
  z-index: 1000;

  background: ${v["bg-prim-w-100"]};
  border-radius: 20px;
  padding: 8px 8px 8px 12px;
  box-shadow: 0px 8px 24px 0px #00000029;

  display: flex;
  align-items: center;
  gap: 16px;
  will-change: transform;
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
  animation: ${({isClosing:e,isVisible:r})=>H(e,r)};

  @keyframes toast-in {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes toast-out {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
`,o1=f.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,e1=f.button`
  ${_};
  width: 20px;
  height: 20px;

  svg {
    color: ${v["icn-txt-sec"]};
  }

  &:hover {
    svg {
      color: ${v["icn-txt-prim"]};
    }
  }
`,r1=({onClick:e,removeNotification:r,content:o,buttonText:s})=>t(t1,{isClosing:!1,isVisible:!0},t(o1,null,t(z,null),t(y,{font:"body-5"},o)),t(M,{size:"small",onClick:e,style:{padding:"4px 12px"}},s),t(e1,{onClick:r},t(k,{backgroundColor:v["brdr-prim-10-80"]}))),X1=({onClick:e,content:r,buttonText:o="Scroll & Play"})=>{m("recommend-scroll"),S({id:"recommend-scroll",priority:151,timeSensitive:!0,showOnMobile:!1,duration:0,global:!0,render:({dismiss:s})=>t(r1,{content:r,buttonText:o,removeNotification:s,onClick:()=>{s(),e()}})})};i();n();var X=U(J());i();n();var N=e=>t("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t("path",{d:"M14.1992 6.75543C15.1576 7.30873 15.1576 8.69196 14.1992 9.24526L5.57422 14.2249C4.61589 14.7782 3.41797 14.0866 3.41797 12.98L3.41797 3.0207C3.41797 1.91411 4.61589 1.22249 5.57422 1.77579L14.1992 6.75543Z",fill:"currentColor"}));i();n();var x=f(y)`
  display: flex;
  align-items: center;
  gap: 6px;
`;var n1=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K=313,i1=-40,s1=-20,a1=()=>{let e=(0,X.useRef)(null),r=()=>{m("gdocs-onboarding-click-to-listen")},[o]=V(),[,s]=B(o);if(!s)return r(),null;let{x:l,y:c}=s.getBoundingClientRect();return F([e],r),t(W,{ref:e,position:{top:c+s1,left:l-K+i1}},t(P,{width:K,onClose:r,arrowDirection:"right",arrowStyles:{top:28},showDismiss:!0},t(n1,null,t("div",null,t(y,{font:"body-5"},"During listening, hover over any"),t(x,{font:"body-5"},"paragraph and click",t(N,null)," to switch to it.")),t(A,{src:"google-docs/google_docs.webm"}))))},gt=async()=>{await m("gdocs-onboarding-click-to-listen"),await S({id:"gdocs-onboarding-click-to-listen",priority:151,duration:0,showOnMobile:!0,timeSensitive:!0,redesigned:!0,global:!0,render:()=>t(a1,null)})};i();n();var l1=()=>t(P,{width:272,onClose:()=>{m("gdocs-onboarding-play")},arrowDirection:"right",arrowStyles:{top:28},showDismiss:!0},t(x,{font:"body-5"},"Click",t(N,null),"to listen to your"),t(y,{font:"body-5"},"document from the beginning.")),Nt=async()=>{await m("gdocs-onboarding-play"),await S({id:"gdocs-onboarding-play",priority:151,duration:0,showOnMobile:!0,timeSensitive:!0,redesigned:!0,verticalAdjustment:b().PLAY_BUTTON_OFFSET,hasHorizontalAnchor:!0,render:()=>t(l1,null)})};i();n();i();n();var $=e=>t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t("path",{d:"M15.741 10.6587C16.7019 10.6587 17.4934 11.0154 18.042 11.6792C18.5882 12.3403 18.8843 13.2942 18.8843 14.4709C18.8842 15.64 18.5912 16.6001 18.0469 17.27C17.5 17.9431 16.7081 18.3113 15.741 18.3113C14.7742 18.3112 13.9821 17.9449 13.4338 17.2737C12.8882 16.6055 12.5941 15.6474 12.594 14.4758C12.594 13.2988 12.8919 12.3439 13.4399 11.6816C13.9902 11.0169 14.7824 10.6587 15.741 10.6587ZM10.4919 10.7271C10.8392 10.7271 11.1287 10.8318 11.3318 11.0334C11.5349 11.2352 11.637 11.5205 11.637 11.8538V17.2395C11.6368 17.5362 11.5376 17.7902 11.355 17.9707C11.1724 18.1511 10.9174 18.2478 10.6238 18.2478C10.3303 18.2478 10.0738 18.1518 9.89014 17.9719C9.70625 17.7916 9.60583 17.5367 9.60571 17.2395V12.7607L8.88794 13.2588L8.88916 13.26C8.80403 13.3193 8.72593 13.364 8.64258 13.3931C8.55792 13.4225 8.4734 13.4333 8.37769 13.4333C7.96017 13.4333 7.64797 13.1168 7.64771 12.6887C7.64771 12.5422 7.67633 12.4055 7.74536 12.2798C7.81421 12.1545 7.91911 12.0463 8.05786 11.9502L9.39087 11.042H9.39209C9.79565 10.7695 10.1255 10.7271 10.4919 10.7271ZM9.54224 1.69141C12.339 1.69141 14.8146 3.05516 16.3464 5.15088V3.28442C16.3464 2.7736 16.7609 2.35919 17.2717 2.35913C17.7826 2.35913 18.197 2.77356 18.197 3.28442V7.45068C18.197 7.96149 17.7825 8.37598 17.2717 8.37598H13.1055C12.5946 8.37598 12.1802 7.96149 12.1802 7.45068C12.1802 6.93982 12.5946 6.52539 13.1055 6.52539H15.0476C13.8732 4.7286 11.8467 3.54077 9.54224 3.54077C5.91131 3.54101 2.96777 6.48455 2.96753 10.1155C2.96753 12.6429 4.39379 14.8395 6.48926 15.9407C6.94123 16.1784 7.11496 16.7373 6.87744 17.1895C6.6398 17.6417 6.08088 17.8153 5.62866 17.5776C2.94891 16.1694 1.11816 13.357 1.11816 10.1155C1.1184 5.46283 4.88959 1.69164 9.54224 1.69141ZM15.741 12.3054C15.4225 12.3055 15.161 12.4638 14.9719 12.8108C14.779 13.1652 14.6655 13.7138 14.6655 14.4709C14.6656 15.2328 14.7786 15.7887 14.9719 16.1494C15.1617 16.5032 15.4239 16.6645 15.741 16.6646C16.0605 16.6646 16.3209 16.5034 16.5088 16.1506C16.7005 15.7905 16.8127 15.2358 16.8127 14.4758C16.8127 13.7132 16.6995 13.1627 16.5076 12.8083C16.3198 12.462 16.0595 12.3054 15.741 12.3054Z",fill:"currentColor"})),q=e=>t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t("path",{d:"M8.96265 10.6587C8.00408 10.6587 7.21189 11.0169 6.66162 11.6816C6.11359 12.3439 5.81567 13.2988 5.81567 14.4758C5.81576 15.6473 6.10986 16.6055 6.65552 17.2737C7.20373 17.9449 7.99595 18.3112 8.96265 18.3113C9.92972 18.3113 10.7217 17.943 11.2686 17.27C11.8129 16.6001 12.1059 15.64 12.106 14.4709C12.106 13.2942 11.8099 12.3403 11.2637 11.6792C10.7151 11.0154 9.92356 10.6587 8.96265 10.6587ZM3.71362 10.7271C3.34716 10.7271 3.01734 10.7695 2.61377 11.042H2.61255L1.27954 11.9502C1.14079 12.0463 1.03589 12.1545 0.967041 12.2798C0.898014 12.4055 0.869385 12.5422 0.869385 12.6887C0.869646 13.1168 1.18185 13.4333 1.59937 13.4333C1.6951 13.4333 1.77958 13.4226 1.86426 13.3931C1.94762 13.364 2.02569 13.3194 2.11084 13.26L2.10962 13.2588L2.82739 12.7607V17.2395C2.82751 17.5367 2.92793 17.7916 3.11182 17.9719C3.2955 18.1519 3.552 18.2478 3.84546 18.2478C4.13911 18.2478 4.39409 18.1511 4.57666 17.9707C4.75931 17.7902 4.85852 17.5362 4.85864 17.2395V11.8538C4.85864 11.5205 4.75661 11.2352 4.55347 11.0334C4.35037 10.8318 4.06088 10.7271 3.71362 10.7271ZM10.7095 1.69141C7.91264 1.69149 5.43707 3.05504 3.90527 5.15088V3.28442C3.90527 2.77356 3.49084 2.35913 2.97998 2.35913C2.46938 2.35944 2.05591 2.77375 2.05591 3.28442V7.45068C2.05598 7.9613 2.46942 8.37567 2.97998 8.37598H7.14746C7.65817 8.37584 8.07268 7.96141 8.07275 7.45068C8.07275 6.9399 7.65821 6.52552 7.14746 6.52539H5.2041C6.37845 4.72848 8.40493 3.54085 10.7095 3.54077C14.3406 3.54077 17.2839 6.48441 17.2842 10.1155C17.2842 12.6429 15.8591 14.8395 13.7637 15.9407C13.3114 16.1783 13.1378 16.7372 13.3755 17.1895C13.6132 17.6416 14.1721 17.8153 14.6243 17.5776C17.3038 16.1693 19.1348 13.3569 19.1348 10.1155C19.1345 5.46268 15.3623 1.69141 10.7095 1.69141ZM8.96265 12.3054C9.28119 12.3054 9.5415 12.462 9.72925 12.8083C9.92119 13.1627 10.0344 13.7132 10.0344 14.4758C10.0344 15.2358 9.92219 15.7905 9.73047 16.1506C9.54262 16.5034 9.28221 16.6646 8.96265 16.6646C8.64562 16.6645 8.38333 16.5032 8.1936 16.1494C8.00027 15.7887 7.88726 15.2328 7.88721 14.4709C7.88721 13.7138 8.00065 13.1652 8.1936 12.8108C8.38264 12.4639 8.64419 12.3055 8.96265 12.3054Z",fill:"currentColor"}));var C1=f.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p1=()=>t(P,{width:226,onClose:()=>{m("gdocs-onboarding-skip-sentences")},arrowDirection:"right",arrowStyles:{top:28},title:"Skip Sentences",showDismiss:!0},t(C1,null,t(x,{font:"body-5"},"Click",t(q,null),"to skip forward."),t(x,{font:"body-5"},"Click",t($,null),"to skip backward."))),Ft=async()=>{await m("gdocs-onboarding-skip-sentences"),await S({id:"gdocs-onboarding-skip-sentences",priority:151,duration:0,showOnMobile:!0,timeSensitive:!0,redesigned:!0,verticalAdjustment:b().SKIP_SENTENCES_OFFSET,hasHorizontalAnchor:!0,render:()=>t(p1,null)})};export{E1 as a,r1 as b,X1 as c,gt as d,Nt as e,Ft as f};
//# sourceMappingURL=chunk-BMWEWJGH.js.map
