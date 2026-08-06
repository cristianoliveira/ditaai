(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as ue,b as fe,d as ye}from"./chunk-IS5AWJ72.js";import{a as Ce}from"./chunk-HDEJOTQX.js";import{a as U}from"./chunk-DR42MPFY.js";import{v as ce}from"./chunk-QFGIV4B7.js";import"./chunk-L6KF6DLO.js";import"./chunk-4JXL3YI4.js";import"./chunk-SJAKNTE2.js";import"./chunk-DGL3OLHJ.js";import"./chunk-EIQQL76B.js";import"./chunk-4HHZO7SF.js";import"./chunk-UYXV6EG6.js";import{a as de}from"./chunk-FESGJ6GY.js";import{a as pe}from"./chunk-SXEFPN62.js";import"./chunk-IQTXTTBF.js";import"./chunk-VDM2FHV6.js";import"./chunk-ER3BBI6X.js";import"./chunk-436MFEND.js";import{a as N}from"./chunk-UBYLRYAE.js";import"./chunk-BMN72JVI.js";import{b as ae}from"./chunk-2MJTQY6T.js";import{$c as F,Cc as O,Dc as X,Lc as V,M as te,Mc as b,Q as re,Rc as I,Wc as le,_b as se,_c as R,e as A,hb as ne,kb as ie,xd as me}from"./chunk-324T2OUF.js";import"./chunk-JJ7NA4NT.js";import{a as $,ba as _,e as D,i as c,j as B,l as oe,n as m,q as M,r as w}from"./chunk-KJ3NFIHV.js";import{a as ee,f as qe,g as k}from"./chunk-H3LCZSHS.js";import{M as T}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as P,g as r,i as e,j as f,k as K,m as We,n}from"./chunk-CAO5DZGK.js";n();r();We();n();r();var Ne=P(k());n();r();var W=P(k());n();r();qe();n();r();var S=P(k());n();r();var ge=({strokeLineCap:o,...t})=>e("path",{d:"M 1,1 L 99,1",fillOpacity:"0",strokeWidth:"0.5",stroke:m["brdr-sec-20-60"],strokeLinecap:o??"square",...t}),Z=({percent:o,strokeColor:t,strokeLineCap:i,...l})=>e("svg",{viewBox:"0 0 100 2",preserveAspectRatio:"none","aria-label":R("SEEKBAR"),"data-testid":F.SEEKBAR,style:{width:"100%",cursor:"pointer",height:"16px"},...l},e(ge,{strokeLineCap:i}),e(ge,{stroke:t,strokeLineCap:i,style:{strokeDashoffset:"0.2px",strokeDasharray:`${Math.max(o-.2,0)}px, 100px`}}));var J=c(A)`
  position: absolute;
  left: 0;
  right: 0;

  &:hover .seek-handle {
    display: flex;
  }
`,je=c(A)`
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 0 8px;
`,be=oe["icn-txt-prim"],Q=c("div")`
  display: none;
  width: 10px;
  height: 10px;
  background: transparent;
  border-radius: 50%;
  pointer-events: none;

  position: absolute;
  top: 16px;
  transform: translateY(-50%);
  ${({isDragging:o})=>o&&"display: flex !important;"}
`,Ke=c(A)`
  &:hover .seek-handle {
    display: flex;
  }
`,Y=({ariaElement:o,time:t,isRemainTime:i=!1})=>e(_,{font:"subheading-6","aria-label":R(o),style:{whiteSpace:"nowrap",fontVariant:"tabular-nums"}},i?"-":"",N("short")(t)),ve=({customStyle:o,currentTime:t,duration:i,onChange:l,onMouseUp:d,...s})=>{let p=(0,S.useRef)(null),y=Math.max(i-t,0),[a,L]=(0,S.useState)(!1),g=Math.min(t/Math.max(i,1)*100,100),E=(0,S.useCallback)(u=>{let h=p.current?.base?.getBoundingClientRect();return h?Math.max(0,(u.clientX-h.x)/h.width*i):0},[p,i]),v=(0,S.useCallback)(u=>{s.disabledSeek||(u.stopPropagation(),l(E(u)),L(!0))},[a,E,l]);return(0,S.useEffect)(()=>{if(!a)return;let u=h=>l(E(h));return window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)},[a,E,l]),(0,S.useEffect)(()=>{if(!a)return;let u=h=>{L(!1),typeof d=="function"&&d(E(h)),window.removeEventListener("mouseup",u)};return window.addEventListener("mouseup",u),()=>window.removeEventListener("mouseup",u)},[a,E,l]),o?.position?o?.position==="top"?e(J,{yAlign:!0,relative:!0,...s,style:{top:0}},e(Z,{ref:p,percent:g,strokeColor:be,onMouseDown:v}),e(Q,{style:{left:`${g}%`,width:"10px",top:"8px"},className:"seek-handle",isDragging:a,background:o?.seekHandleColor})):e(J,{yAlign:!0,relative:!0,...s,style:{bottom:0}},o.withTimeLabel&&e(je,{relative:!0,align:!0},e(Y,{ariaElement:"CURRENT_TIME",time:t}),e(Y,{ariaElement:"REMAIN_TIME",time:y,isRemainTime:!0})),e(J,{yAlign:!0,relative:!0,...s,style:{bottom:0}},e(Z,{ref:p,percent:g,strokeColor:be,onMouseDown:v}),e(Q,{className:"seek-handle",style:{left:`${g}%`,top:"8px",background:"transparent"},isDragging:a,background:o?.seekHandleColor}))):e(A,{separation:"6px",yAlign:!0,...s},e(Y,{ariaElement:"CURRENT_TIME",time:t}),e(Ke,{yAlign:!0,relative:!0},e(Z,{ref:p,percent:g,strokeColor:o?.seekbarColor??m["icn-txt-prim"],strokeLineCap:"round",onMouseDown:v,style:{width:"100%",cursor:"pointer",padding:"8px 0",height:"16px"}}),e(Q,{style:{left:`${g>0?`${g<100?g:"98.5"}%`:"6px"}`},className:"seek-handle",isDragging:a,background:o?.seekHandleColor})),e(Y,{ariaElement:"REMAIN_TIME",time:y,isRemainTime:!0}))};var{seekTo:Xe}=V,Se=({duration:o,...t})=>{let i=b.useProgress(),l=b.useTime(),[d,s]=ee(null),p=l.isLoading?Math.floor((i??0)*o):l.currentTime;return e(ve,{currentTime:d??p,duration:o,onChange:async a=>{a<=o&&s(Math.round(a))},onMouseUp:a=>{if(Xe(a/o),X(b.getPlayingState()))s(null);else{let L=V.registerHook("PLAYBACK_STATE_CHANGED",async({state:g})=>{X(g)&&(s(null),L())})}},...t})};n();r();var G=()=>{let o=b.useCurrentContent();return["EmbeddedPlayer","PillPlayer"].includes(o?.metadata.source??"")};n();r();var Qe=c.div`
  ${M["subheading-5"]};
  color: ${m["icn-txt-prim"]};
  display: flex;
  gap: 8px;
  align-items: center;
`,xe=({duration:o})=>e(Qe,null,"Listen",e(_,{font:"body-7",color:"icn-txt-tert"},"•"),N("long")(o));n();r();n();r();var x=P(k()),Le=P(k()),He=({anchorElement:o,open:t,children:i,onClose:l})=>{let d=(0,x.useRef)(null),[s,p]=(0,x.useState)({left:0,top:0,width:0,height:0}),y=new ResizeObserver(v=>{let u=v[0];if(u&&u.contentRect&&u.contentRect.width){let{width:h,height:j}=u.contentRect;p(ze=>({...ze,width:h,height:j}))}}),a=()=>{if(o){let{left:v,top:u,width:h,height:j}=o.getBoundingClientRect();p({left:v,top:u,width:h,height:j})}},L=new MutationObserver(()=>{a()});(0,x.useEffect)(()=>(o&&(y.observe(o),L.observe(document.body,{childList:!0,subtree:!0})),window.addEventListener("resize",a),a(),()=>{y.disconnect(),L.disconnect(),window.removeEventListener("resize",a)}),[o]),(0,x.useEffect)(()=>{let v=u=>{d.current&&!d.current.contains(u.target)&&o&&!o.contains(u.target)&&l()};return t&&document.addEventListener("mouseup",v),()=>{document.removeEventListener("mouseup",v)}},[t,o,l]);let g=(0,x.useMemo)(()=>$({key:"menu-cache",container:d.current}),[d.current]),E=(0,x.useMemo)(()=>({top:s.top+s.height/2+window.scrollY,left:s.left+s.width/2+window.scrollX}),[s]);return!t||!o?null:(0,Le.createPortal)(e("div",{ref:d,style:{position:"absolute",zIndex:1e3,...E}},e(D,{value:g},i)),document.body)},we=He;var z=P(k());n();r();var Ee=o=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.6364 2.61879C18.9879 2.26732 18.9879 1.69747 18.6364 1.346C18.2849 0.994529 17.7151 0.994529 17.3636 1.346L14.9269 3.78274C13.4728 2.95781 11.7916 2.48679 10.0005 2.48679C5.34186 2.48679 1.42744 5.67293 0.317383 9.98499C0.843831 12.03 2.001 13.8217 3.56916 15.1404L1.3636 17.346C1.01213 17.6975 1.01213 18.2673 1.3636 18.6188C1.71508 18.9703 2.28492 18.9703 2.6364 18.6188L5.07019 16.185C6.52512 17.0113 8.20768 17.4831 10.0004 17.4831C14.659 17.4831 18.5735 14.297 19.6835 9.98494C19.1567 7.93855 17.9983 6.14574 16.4285 4.82672L18.6364 2.61879ZM13.5948 5.11478C12.5092 4.58441 11.2893 4.28679 10.0005 4.28679C6.34639 4.28679 3.24688 6.67893 2.18993 9.98498C2.68248 11.5256 3.61861 12.8678 4.84771 13.8619L13.5948 5.11478ZM6.40203 14.8532L15.1499 6.10533C16.3806 7.09971 17.318 8.44291 17.811 9.98494C16.754 13.291 13.6545 15.6831 10.0004 15.6831C8.70995 15.6831 7.48864 15.3848 6.40203 14.8532Z",fill:"currentColor"}));n();r();var Pe=o=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("circle",{cx:"10.0002",cy:"9.66667",r:"1.66667",fill:"currentColor"}),e("path",{d:"M10.0002 17.3333C9.07969 17.3333 8.3335 16.5871 8.3335 15.6667C8.3335 14.7462 9.07969 14 10.0002 14C10.9206 14 11.6668 14.7462 11.6668 15.6667C11.6668 16.5871 10.9206 17.3333 10.0002 17.3333Z",fill:"currentColor"}),e("path",{d:"M10.0002 5.83333C9.07969 5.83333 8.3335 5.08714 8.3335 4.16667C8.3335 3.24619 9.07969 2.5 10.0002 2.5C10.9206 2.5 11.6668 3.24619 11.6668 4.16667C11.6668 5.08714 10.9206 5.83333 10.0002 5.83333Z",fill:"currentColor"}));n();r();var ke=o=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.90544 3.39998H11.0977L11.4871 4.19493C12.0056 5.25336 13.113 5.89274 14.2889 5.81252L15.1717 5.75229L16.268 7.65111L15.7744 8.38555C15.117 9.36375 15.117 10.6425 15.7744 11.6207L16.2677 12.3547L15.1712 14.254L14.2889 14.1938C13.113 14.1135 12.0056 14.7529 11.4871 15.8113L11.0982 16.6054H8.905L8.51605 15.8113C7.99761 14.7529 6.89016 14.1135 5.7143 14.1938L4.83186 14.254L3.7354 12.3548L4.22877 11.6207C4.88617 10.6425 4.88617 9.36375 4.22877 8.38555L3.73512 7.65101L4.83135 5.75228L5.7143 5.81252C6.89016 5.89275 7.99761 5.25336 8.51605 4.19493L8.90544 3.39998ZM12.6059 2.38709C12.3305 1.82486 11.7679 1.59998 11.3016 1.59998H8.70156C8.23526 1.59998 7.67264 1.82486 7.39724 2.38709L6.89956 3.40313C6.70291 3.8046 6.28284 4.04712 5.83683 4.01669L4.70808 3.93968C4.08366 3.89708 3.60769 4.27173 3.37457 4.67549L2.07421 6.9278C1.8411 7.33156 1.75462 7.93108 2.10373 8.45055L2.7348 9.38957C2.98416 9.76061 2.98416 10.2457 2.7348 10.6167L2.10373 11.5557C1.75489 12.0748 1.84115 12.6739 2.07416 13.0775L3.37541 15.3313C3.60842 15.7349 4.08414 16.1092 4.70808 16.0666L5.83683 15.9896C6.28284 15.9592 6.70291 16.2017 6.89956 16.6032L7.39724 17.6192C7.67221 18.1806 8.23391 18.4054 8.6998 18.4054H11.3034C11.7693 18.4054 12.331 18.1805 12.6059 17.6192L13.1036 16.6032C13.3003 16.2017 13.7203 15.9592 14.1664 15.9896L15.2951 16.0666C15.9189 16.1092 16.3946 15.735 16.6276 15.3314L17.929 13.0773C18.162 12.6737 18.2482 12.0747 17.8995 11.5557L17.2684 10.6167C17.019 10.2457 17.019 9.76061 17.2684 9.38957L17.8995 8.45055C18.2485 7.93118 18.1621 7.33175 17.929 6.92803L16.6284 4.67537C16.3953 4.27165 15.9194 3.89709 15.2951 3.93968L14.1664 4.01669C13.7203 4.04712 13.3003 3.8046 13.1036 3.40313L12.6059 2.38709ZM11.5343 10.0037C11.5343 10.8506 10.8478 11.5371 10.0009 11.5371C9.1541 11.5371 8.4676 10.8506 8.4676 10.0037C8.4676 9.15691 9.1541 8.47041 10.0009 8.47041C10.8478 8.47041 11.5343 9.15691 11.5343 10.0037ZM13.3343 10.0037C13.3343 11.8447 11.8419 13.3371 10.0009 13.3371C8.15999 13.3371 6.6676 11.8447 6.6676 10.0037C6.6676 8.16279 8.15999 6.67041 10.0009 6.67041C11.8419 6.67041 13.3343 8.16279 13.3343 10.0037Z",fill:"currentColor"}));var r1=c.button`
  ${w};
  color: ${m["icn-txt-prim"]};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }

  ${({isOpen:o})=>o?"opacity: 0.5":""};
`,n1=c.div`
  position: absolute;
  top: -20px;
  left: -20px;
  transform: translateY(-100%);

  background: ${m["bg-prim-w-90"]};
  outline: 1px solid ${m["brdr-prim-10-80"]};
  border-radius: 20px;
  box-shadow: 0px 4px 12px -4px #00000029;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Me=c.button`
  ${w};
  ${M["subheading-6"]};
  position: relative;
  color: ${m["icn-txt-prim"]};
  padding: 6px 8px;
  width: 122px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 16px;

  svg {
    color: ${m["icn-txt-sec"]};
  }

  &:hover {
    background: ${m["sf-prim-hov-w-90"]};
  }

  &:active {
    background: ${m["sf-prim-pres-w-90"]};
  }
`,Re=({configure:o})=>{let[t,i]=(0,z.useState)(!1),l=(0,z.useRef)(null),d=Ce(),s=()=>{i(!1)},p=de(()=>{se.toggleFeatureOnDomain("embedded-player",!1),i(!1),I("extension_usage_hide_player",{site:o.site})}),y=async()=>{if(I("extension_usage_settings_clicked",{source:"embedded_player"}),i(!1),d){try{await fe("/settings")}catch{}return}ce("/visibility"),T("show-settings-modal")};return e(f,null,e(r1,{ref:l,onClick:()=>i(!t),isOpen:t},e(Pe,null)),l&&e(we,{anchorElement:l.current,open:t,onClose:s},e(n1,null,e(Me,{onClick:y},e(ke,null),"Settings",e(U,null)),e(Me,{onClick:p},e(Ee,null),"Hide Player"))))};n();r();var Ie=P(k());n();r();var Te=o=>e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{d:"M23.7334 18.3094C25.5112 17.283 25.5112 14.717 23.7334 13.6906L11.7334 6.76237C9.95562 5.73597 7.7334 7.01897 7.7334 9.07177V22.9282C7.7334 24.981 9.95562 26.264 11.7334 25.2376L23.7334 18.3094Z",fill:"currentColor"})),Ae=o=>e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{d:"M9.33317 5.33337C7.86041 5.33337 6.6665 6.52728 6.6665 8.00004V24C6.6665 25.4728 7.86041 26.6667 9.33317 26.6667H11.9998C13.4726 26.6667 14.6665 25.4728 14.6665 24V8.00004C14.6665 6.52728 13.4726 5.33337 11.9998 5.33337H9.33317Z",fill:"currentColor"}),e("path",{d:"M19.9998 5.33337C18.5271 5.33337 17.3332 6.52728 17.3332 8.00004V24C17.3332 25.4728 18.5271 26.6667 19.9998 26.6667H22.6665C24.1393 26.6667 25.3332 25.4728 25.3332 24V8.00004C25.3332 6.52728 24.1393 5.33337 22.6665 5.33337H19.9998Z",fill:"currentColor"})),Be=o=>e("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.4945 2.6752C19.2757 2.45641 18.9789 2.3335 18.6695 2.3335H9.33081C9.02139 2.3335 8.72464 2.45641 8.50585 2.6752L2.6752 8.50585C2.45641 8.72464 2.3335 9.02139 2.3335 9.33081V18.6695C2.3335 18.9789 2.45641 19.2757 2.6752 19.4945L8.50585 25.3251C8.72464 25.5439 9.02139 25.6668 9.33081 25.6668H18.6695C18.9789 25.6668 19.2757 25.5439 19.4945 25.3251L25.3251 19.4945C25.5439 19.2757 25.6668 18.9789 25.6668 18.6695V9.33081C25.6668 9.02139 25.5439 8.72464 25.3251 8.50585L19.4945 2.6752ZM18.1863 4.66683L23.3335 9.81406V18.1863L18.1863 23.3335H9.81405L4.66683 18.1863V9.81406L9.81406 4.66683H18.1863Z",fill:"currentColor"}),e("path",{d:"M12.5944 9.09633C12.5345 8.27946 13.1811 7.58373 14.0002 7.58373C14.8192 7.58373 15.4658 8.27946 15.4059 9.09632L14.9392 15.4611C14.9031 15.953 14.4934 16.3337 14.0002 16.3337C13.5069 16.3337 13.0973 15.953 13.0612 15.4611L12.5944 9.09633Z",fill:"currentColor"}),e("path",{d:"M15.3999 19.0166C15.3999 19.7898 14.7731 20.4166 13.9999 20.4166C13.2267 20.4166 12.5999 19.7898 12.5999 19.0166C12.5999 18.2434 13.2267 17.6166 13.9999 17.6166C14.7731 17.6166 15.3999 18.2434 15.3999 19.0166Z",fill:"currentColor"})),Ve=o=>e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{d:"M15.8115 3C8.63188 3.00007 2.81152 8.82034 2.81152 16C2.81152 23.1797 8.63188 28.9999 15.8115 29C21.84 28.9999 26.9078 24.8969 28.3799 19.333C28.5209 18.7993 28.2026 18.2526 27.6689 18.1113C27.1351 17.9701 26.5875 18.2884 26.4463 18.8223C25.2004 23.5305 20.9098 26.9999 15.8115 27C9.73645 26.9999 4.81152 22.0751 4.81152 16C4.81152 9.92491 9.73645 5.00007 15.8115 5C20.0874 5.00005 23.7941 7.44125 25.6143 11.0078H21.5C20.9477 11.0078 20.5 11.4555 20.5 12.0078C20.5 12.5601 20.9477 13.0078 21.5 13.0078H28C28.5521 13.0076 29 12.56 29 12.0078V5.50781C29 4.95565 28.5521 4.50801 28 4.50781C27.4477 4.50781 27 4.95553 27 5.50781V9.37988C24.7361 5.56208 20.5744 3.00005 15.8115 3Z",fill:"currentColor"}));var i1=c.button`
  ${w};
  width: 32px;
  height: 32px;

  color: ${m["icn-txt-prim"]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${m["icn-txt-prim-electric"]};
  }

  &:active {
    color: ${m["icn-txt-prim-electric"]};
  }

  &:disabled {
    opacity: 0.3;
    color: ${m["icn-txt-prim"]} !important;
    cursor: not-allowed;
  }

  ${({hoverDisabled:o})=>o?`color: ${m["icn-txt-prim"]} !important; cursor: default;`:""};
`,s1=c(pe)`
  width: 28px;
  height: 28px;
  circle {
    stroke-width: 3px;
  }
`,l1=()=>{let o=G(),t=b.usePlayingState(),i=o&&t==="playing",l=o&&t==="buffering",d=o&&t==="errored",s=o&&t==="ended";return d?e(Be,null):l?e(s1,null):i?e(Ae,null):s?e(Ve,null):e(Te,null)},Ge=()=>{let o=b.usePlayingState(),t=G(),i=me(g=>g.isDictationPopupActive),{play:l,pause:d}=V,s=t&&o==="playing",p=t&&o==="buffering",y=t&&o==="ended",a=t&&o==="errored",L=(0,Ie.useCallback)(async()=>{if(s)return d();t||await T("restart-page-content",{animate:!1},"standard-player"),ae()||T("browser-action",{animate:!1},"pill-player"),o!=="playing"&&l(),le({triggeredFrom:"EmbeddedPlayer"})},[t,o,y,l,d,s]);return e(i1,{hoverDisabled:p||a,disabled:i,"aria-label":R("EMBED_PLAYER_PLAY_BUTTON"),"data-testid":F.EMBED_PLAYER_PLAY_BUTTON,onClick:L},e(l1,null))};n();r();n();r();var $e=o=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 1C16.5523 1 17 1.44772 17 2V4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17V8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V6H13C12.4477 6 12 5.55228 12 5C12 4.44771 12.4477 4 13 4H15V2C15 1.44772 15.4477 1 16 1ZM5.66667 4C5.29848 4 5 4.29848 5 4.66667L5.00003 15.7589L9.49613 13.1362C9.80749 12.9546 10.1925 12.9546 10.5039 13.1362L15 15.7589V12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12V17.5C17 17.858 16.8086 18.1888 16.4981 18.3671C16.1876 18.5454 15.8054 18.5442 15.4961 18.3637L10 15.1577L4.50391 18.3637C4.19462 18.5442 3.81247 18.5454 3.50198 18.3671C3.19148 18.1888 3.00004 17.858 3.00004 17.5L3 4.66667C3 3.19391 4.1939 2 5.66667 2H9.99997C10.5523 2 11 2.44772 11 3C11 3.55228 10.5523 4 9.99997 4H5.66667Z",fill:"currentColor"}));var a1=c.div`
  ${w};
  ${M["subheading-6"]};
  color: ${m["icn-txt-prim"]};
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  outline: 1px solid ${m["brdr-prim-10-80"]};
  background: ${m["sf-prim-w-90"]};
  border-radius: 20px;
  position: relative;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }
`,De=()=>e(a1,{onClick:async()=>{I("extension_import_on_embedded_player");let t=await re();if(t&&!te(t)){let i=`${B.speechifyWebApp.baseUrl}/importUrl?url=${encodeURIComponent(window.location.href)}`;window.open(i,"_blank")}else window.open(B.speechifyWebApp.baseUrl,"_blank","noopener")}},e($e,null),"Save Story to Library",e(U,null));n();r();n();r();var _e=()=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.44974 8.96208C6.05988 8.07046 6.589 7.6296 7.38119 7.8745C7.86056 8.02269 8.05734 8.63464 7.86056 9.40248C7.51457 10.7526 7.38119 11.5276 7.38119 12.4499C8.59809 9.89931 10.8476 6.50931 11.8226 5.36909C12.4964 4.581 13.4623 4.6815 13.826 4.85729C14.4168 5.14292 14.448 5.76225 14.2441 6.35454C12.8332 10.4523 12.784 12.6408 12.6108 14.767C13.4877 12.409 14.5538 10.1908 15.8412 8.62867C16.3836 7.8794 17.3344 7.64419 17.9349 7.88759C18.5354 8.13099 18.6722 8.71333 18.5354 9.44307C18.1784 11.3461 18.0013 12.238 18.0013 12.9752C18.6534 12.4764 19.1726 12.0551 20.3597 11.9588C21.5468 11.8624 24 12.335 24 12.335C24 12.335 22.5838 12.5757 21.8357 12.7591C20.3023 13.1351 19.7667 13.5749 18.7741 15.0288C18.4856 15.4512 18.0013 15.7755 17.4557 15.7343C16.9101 15.693 16.5437 15.3498 16.3836 14.8862C16.1612 14.2419 16.095 13.2782 16.3836 11.1927C14.9694 13.3444 14.2441 16.2672 13.275 18.2055C13.0273 18.7011 12.6041 19.2659 12.0307 19.2659C11.4572 19.2659 10.7136 19.0434 10.617 17.3396C10.3697 12.9752 11.1942 9.50209 11.1942 9.50209C9.58829 12.0484 9.07541 13.5326 8.5168 14.3066C7.95818 15.0806 7.41614 15.7508 6.7568 15.7343C6.09747 15.7177 5.71375 14.9806 5.63031 14.3066C5.54688 13.6326 5.52287 12.7718 5.76656 11.1927C5.13224 11.827 4.57449 12.2566 3.57562 12.5256C2.57674 12.7946 1.38397 12.6234 0 12.335C1.38397 12.335 3.71298 11.5001 5.44974 8.96208Z",fill:m["logo-speechify-logo"]}));var m1=c.button`
  ${w};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }
`,Oe=()=>e(ye,{text:"Open Speechify library",isOnTop:!0,style:{zIndex:1},tooltipStyle:{top:"-4px"}},e(m1,{onClick:()=>{window.open(B.speechifyWebApp.baseUrl,"_blank")}},e(_e,null)));var d1=c.div`
  margin: 16px 0;
  min-width: 360px;
  max-width: 100%;

  background-color: ${m["bg-prim-w-100"]};
  padding: 16px;
  box-sizing: border-box;
  border-radius: 9999px;
  box-shadow: 0px 3px 12px 0px #00000014;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,p1=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,c1=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Fe=({configure:o,importEnabled:t=!1})=>{let[i,l]=(0,W.useState)(!1),d=G(),s=b.usePlayingState(),p=O(),y=d&&s==="playing";(0,W.useEffect)(()=>{d?y&&l(!0):l(!1)},[y,d]);let a=d&&!p.isLoading?p.duration:0;return e(ue,null,e(d1,null,e(p1,null,e(Ge,null),i?e(Se,{style:{marginLeft:"8px"},duration:a}):e(xe,{duration:a})),e(c1,null,t&&!i&&e(De,null),e(Re,{configure:o}),e(Oe,null))))};function Ue({container:o,importEnabled:t,config:i}){let l=(0,Ne.useMemo)(()=>$({key:"player-emotion-cache",container:o}),[o]);return O().isLoading===!0?null:e(D,{value:l},e(Fe,{configure:i,importEnabled:!!t}))}var H="speechify-embedded-player",q;function Ze(){let o=document.querySelector(`#${H}`);q&&q.disconnect(),o&&(K(()=>null,o),o.remove())}async function u1(o){let t=o.inlinePlayerContentSelector?o.inlinePlayerContentSelector:o.inlinePlayerSelector,i=t.indexOf("::prepend")!==-1,l=t.indexOf("::before")!==-1,d=i?t.replace("::prepend",""):l?t.replace("::before",""):t,s=ne(d);if(s&&s.parentNode){let p=document.createElement("div");p.id=H,p.style.cssText=o.inlinePlayerStyle??"width: 100%; max-width: 1200px; margin: 0 auto;";let y=p.attachShadow({mode:"open"});i?s.parentNode.prepend(p):s.parentNode.insertBefore(p,l?s:s.nextElementSibling);let a=document.createElement("div");a.id="speechify-embedded-player-root",y.appendChild(a),o.inlinePlayerContentStyle&&(a.style.cssText=o.inlinePlayerContentStyle),K(e(Ue,{container:a,importEnabled:o.importEnabled,config:o}),a)}return()=>{}}async function Ye(o){if(await ie(o?.awaitedElement??""),!document.querySelector(`#${H}`))return o?.site?u1(o):()=>{}}async function f1(o){let t=await Ye(o);return q=new MutationObserver(()=>Ye(o)),q.observe(document,{subtree:!0,childList:!0}),()=>{t&&t(),Ze&&Ze()}}export{f1 as default};
//# sourceMappingURL=init-V7IL5OBL.js.map
