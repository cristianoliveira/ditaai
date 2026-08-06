(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{Yc as S}from"./chunk-324T2OUF.js";import"./chunk-JJ7NA4NT.js";import{$ as k,a as M,ba as D,e as w,g as y,i as d,l,m as h}from"./chunk-KJ3NFIHV.js";import{g as L}from"./chunk-H3LCZSHS.js";import"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as E,g as C,i as t,n as v}from"./chunk-CAO5DZGK.js";v();C();var T=E(L());var m="speechify-meeting-notes-ready-toast",R=1e4,B=y`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,O=y`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,P=d.div`
  position: fixed;
  top: 12px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 2147483647;
  animation: ${({isClosing:o})=>o?O:B} 0.3s ease-out forwards;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    sans-serif;
  pointer-events: none;
`,Y=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  pointer-events: auto;
  background: ${({isSiteDarkMode:o})=>o?l["bg-prim-w-100"]:h["bg-prim-w-100"]};
  border-radius: 16px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
  white-space: nowrap;
`,_=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"12",viewBox:"0 0 18 12",fill:"none"},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L7 9.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z",fill:"currentColor"})),$=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({isSiteDarkMode:o})=>o?l["icn-txt-prim"]:h["icn-txt-prim"]};
  flex-shrink: 0;
`,N=({url:o,onClose:s,onMouseEnter:e,onMouseLeave:p})=>{let c=()=>{window.open(o,"_blank"),s()};return t(P,{isSiteDarkMode:!0},t(Y,{isSiteDarkMode:!0,onMouseEnter:e,onMouseLeave:p},t($,{isSiteDarkMode:!0},t(_,null)),t(D,{font:"body-5",style:{color:l["icn-txt-prim"]}},"Meeting notes are ready"),t(S,{onClick:c,style:{padding:"4px 12px",marginLeft:"8px",flexShrink:0}},"Open in Speechify"),t(k,{onClick:s,style:{flexShrink:0}})))},K=o=>{let s=document.getElementById(m);s&&s.remove();let e=document.createElement("div");e.id=m,e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.zIndex="2147483647",e.style.pointerEvents="none",document.body.appendChild(e);let p=e.attachShadow({mode:"open"}),n=document.createElement("div");n.id=`${m}-root`,n.style.pointerEvents="auto",p.appendChild(n);let c=M({key:`${m}-emotion-cache`,container:n}),i,g=0,r=R,u=!1,f=()=>{i!==void 0&&(window.clearTimeout(i),i=void 0)},a=()=>{u||(u=!0,f(),e.remove())},x=()=>{f(),g=Date.now(),i=window.setTimeout(a,r)},b=()=>{i!==void 0&&(r=Math.max(0,r-(Date.now()-g)),f())},I=()=>{if(!(u||i!==void 0)){if(r<=0){a();return}x()}},A=()=>{a()};return x(),(0,T.render)(t(w,{value:c},t(N,{url:o,onClose:A,onMouseEnter:b,onMouseLeave:I})),n),a};export{K as showMeetingNotesReadyToast};
//# sourceMappingURL=MeetingNotesReadyToast-QUHBAVDV.js.map
