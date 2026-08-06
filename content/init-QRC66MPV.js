(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as Me,b as Ve,s as Ae}from"./chunk-EWVOKJA2.js";import{a as oo}from"./chunk-RJPI4S3F.js";import{a as ye}from"./chunk-CC6NY6VZ.js";import{a as vo,b as Qt,c as he}from"./chunk-SIYTHBJW.js";import{a as Ce,b as Se,c as Pe}from"./chunk-AXUCRUBY.js";import{a as Fi}from"./chunk-S3AZHVK7.js";import{a as ve,b as to,c as Dt,d as w}from"./chunk-IS5AWJ72.js";import{a as Ht}from"./chunk-DR42MPFY.js";import{a as ge,c as Ct}from"./chunk-L6KF6DLO.js";import{b as Ee,c as we,d as St,e as K,g as Ie,i as Te,j as Le,l as Re}from"./chunk-QUDRWGSM.js";import"./chunk-MX4B3ZXQ.js";import{a as fe}from"./chunk-VHR3YMWS.js";import{a as Jt}from"./chunk-VBM62247.js";import{c as bo}from"./chunk-RERBL2EJ.js";import{a as de,b as V}from"./chunk-SJAKNTE2.js";import"./chunk-DGL3OLHJ.js";import{a as W}from"./chunk-4HHZO7SF.js";import{a as U,b as ue}from"./chunk-FESGJ6GY.js";import{d as Jo}from"./chunk-S3CZJONR.js";import"./chunk-WER3GEG4.js";import"./chunk-VDM2FHV6.js";import{a as me}from"./chunk-UBYLRYAE.js";import{$c as v,$e as ee,$g as Eo,Bd as dt,Cd as Ho,D as Ni,Dg as gt,E as j,Ea as Uo,G as nt,Kf as Xt,Lc as lt,Lf as pe,Mc as T,Mg as eo,Pd as ut,Qa as Wo,Qc as xo,Rc as D,Sa as at,Sc as ct,Vd as te,Y as Zo,Zf as xe,_c as R,_f as be,ad as jt,af as ie,b as Mt,ce as oe,ch as Oe,ec as qt,fc as jo,g as Wt,if as re,jc as Xo,jf as ne,kd as At,kf as se,ld as Z,lf as $,ma as st,md as it,nd as kt,nf as ae,of as le,og as ke,qa as Kt,qb as Ko,u as Fo,ud as pt,vd as mt,vf as ce,wb as zo,wd as Qo,wf as ft,wg as De,xd as S,xg as _e,yd as E,yg as Q,zb as N,zd as q,zg as Be}from"./chunk-324T2OUF.js";import{a as Bo,h as Go,i as Yo,j as Vt}from"./chunk-JJ7NA4NT.js";import{$ as zt,a as Oo,ba as J,e as No,i as f,j as yo,n as C,o as $o,p as Po,q as Yt,r as X,t as qo}from"./chunk-KJ3NFIHV.js";import{g as y}from"./chunk-H3LCZSHS.js";import{F as _o,M as Ut,j as ko}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import{b as Do}from"./chunk-NUSU6NTI.js";import{d as h,f as c,g as e,i as t,j as a,k as Ao,m as Oi,n as i}from"./chunk-CAO5DZGK.js";i();e();Oi();i();e();var Gi=276,$i=()=>Q()&&document.querySelector(".docs-companion-app-switcher-container")?.getBoundingClientRect().width||0,_t,Zi=()=>{let o=typeof _t?.y=="number"?`${_t?.y}px`:`calc(50% - ${Gi/2}px)`,r=`${_t?.x??12+$i()}px`;return`
    position: fixed;
    z-index: 2147483645; 
    top: ${o};
    right: ${r};
    padding: 12px;
  `},Ne=async o=>{_t===void 0&&(_t=(await Kt()).sidePlayerPosition||null),o.style.cssText=Zi()};i();e();var ho=h(y());i();e();i();e();var Fe=({fillColor:o=C["sf-sec-0-80"],...r})=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t("rect",{width:"16",height:"16",rx:"8",fill:o}),t("rect",{x:"0.25",y:"0.25",width:"15.5",height:"15.5",rx:"7.75",stroke:o,strokeOpacity:"0.05",strokeWidth:"0.5"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.91084 5.11079C10.1452 4.87648 10.5251 4.87648 10.7594 5.1108C10.9937 5.34511 10.9937 5.72501 10.7594 5.95932L8.78363 7.93504L10.7594 9.91079C10.9937 10.1451 10.9937 10.525 10.7594 10.7593C10.5251 10.9936 10.1452 10.9936 9.91088 10.7593L7.9351 8.78356L5.95932 10.7593C5.72501 10.9936 5.34511 10.9936 5.11079 10.7593C4.87648 10.525 4.87648 10.1451 5.1108 9.91079L7.08657 7.93504L5.11084 5.95932C4.87652 5.72501 4.87652 5.34511 5.11084 5.1108C5.34515 4.87648 5.72505 4.87648 5.95936 5.11079L7.9351 7.08651L9.91084 5.11079Z",fill:"currentColor"}));var Ui=f.button`
  ${X};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0 -2px;
  cursor: pointer;
  color: ${({isDarkMode:o})=>N({color:"icn-txt-sec",isDarkMode:o})};
  transition: all 0.5s cubic-bezier(0.14, 1, 0.34, 1);

  ${({visible:o})=>o?"opacity: 1; transform: rotate(0); transition: all 0.5s cubic-bezier(0.14, 1, 0.34, 1);":"opacity: 0; transform: rotate(-15deg); transition: all 0.15s cubic-bezier(0.14, 1, 0.34, 1);"};

  &:hover {
    color: ${({isDarkMode:o})=>N({color:"icn-txt-prim",isDarkMode:o})};
  }
`,Wi=f.div`
  display: flex;
  outline: 0.5px solid #2d2d2f0d;
  width: 16px;
  height: 16px;
  border-radius: 100%;
`,Ge=({visible:o})=>{let r=V();return t(Ui,{"data-testid":v.PILL_PLAYER_TURN_OFF_SPEECHIFY_BUTTON,isDarkMode:r,onClick:Re,visible:o},t(Wi,null,t(Fe,{fillColor:N({isDarkMode:r,color:"sf-sec-0-80"})})))};i();e();i();e();var wo=h(y());var Ki=["playing","buffering"],$e=()=>{let o=S(p=>p.isPDF),r=T.useTime(),n=T.usePlayingState(),s=(0,wo.useMemo)(()=>Ki.includes(n),[n]);return{duration:(0,wo.useMemo)(()=>{if(r.isLoading===!0)return{isLoading:!0};let p=r.totalEstimatedDuration,l=r.currentTime,d=Math.max(0,p-l),u=d===0&&!s?p:d,g=Math.floor(u/3600),x=Math.floor(u%3600/60),P=o?"":me("short")(u);return{isLoading:!1,hours:g,minutes:x,durationText:P}},[s,r])}};i();e();var Y=()=>{let{status:o}=$();return["recording","initializing"].includes(o)};i();e();var Ze=`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;var Ue=h(y()),Yi=f.div`
  ${Ze}
  position: relative;
  isolation: isolate;
  color: ${({isDarkMode:o})=>N({color:"icn-txt-prim",isDarkMode:o})};
  font-family: Inter;
  font-weight: 600;
  line-height: 1;
  font-size: 10px;
  white-space: nowrap;
  height: 10px;

  &::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    color: transparent;
    -webkit-text-stroke: 2px
      ${({isDarkMode:o})=>N({color:"icn-txt-prim-inv",isDarkMode:o})};
    text-shadow: 0px 1px 4px #00000029;
    z-index: -1;
    pointer-events: none;
  }
`,We=()=>{let o=V(),{duration:r}=$e(),n=T.useTime(),s=T.usePlayingState(),m=Y(),p=S(u=>u.isDictationPopupActive),l=m||p,d=(0,Ue.useMemo)(()=>{if(!(s==="playing"||s==="buffering")&&!(s==="paused")||l||r.isLoading||n.totalEstimatedDuration===0)return null;let{durationText:x,hours:P,minutes:b}=r;return P===0?x?`${x.split(":")[0]}:${x.split(":")[1]}`:"":`${P}h ${b<10?"0":""}${b}m`},[r,l,s,n]);return t(Yi,{"data-testid":v.DURATION,"data-text":d??"",isDarkMode:o},d)};i();e();i();e();var io=h(y());i();e();var Ke=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M9.10449 3.2959C9.10444 3.1907 9.07104 3.1273 9.05176 3.10254C9.04315 3.09153 9.03675 3.08789 9.03516 3.08691C9.0349 3.08676 9.0298 3.08349 9.01367 3.08105C8.31379 2.9752 7.26027 2.87207 5.80762 2.87207C4.35538 2.87208 3.30237 2.97523 2.60254 3.08105C2.58721 3.08337 2.58176 3.08647 2.58105 3.08691C2.57982 3.08765 2.57349 3.09098 2.56445 3.10254C2.5452 3.12717 2.51177 3.19043 2.51172 3.2959V9.19238L3.50098 8.39941C3.76704 8.18621 4.09753 8.06939 4.43848 8.06934C6.34828 8.06934 7.30222 8.05027 8.67188 7.95312C8.90114 7.93686 9.10449 7.73758 9.10449 7.46875V3.2959ZM10.5947 7.66113C10.5101 8.54797 9.84533 9.27769 8.96875 9.42676L8.77832 9.44922C8.09554 9.49765 7.51124 9.52624 6.875 9.54395V10.915C6.875 11.1839 7.07837 11.3831 7.30762 11.3994C8.67727 11.4966 9.63121 11.5156 11.541 11.5156C11.8819 11.5157 12.2125 11.6326 12.4785 11.8457L13.4678 12.6387V6.74219C13.4676 6.63701 13.4343 6.57342 13.415 6.54883C13.4061 6.53752 13.3997 6.53393 13.3984 6.5332C13.3972 6.53247 13.3912 6.52951 13.377 6.52734C12.7486 6.43234 11.8355 6.34025 10.6045 6.32227V7.46875L10.5947 7.66113ZM10.6045 4.82422C11.5494 4.8372 12.3279 4.88937 12.9521 4.95898L13.6016 5.04395C14.433 5.1697 14.9677 5.90225 14.9678 6.74316V12.9863L14.9531 13.1895C14.8074 14.1766 13.6189 14.6812 12.8008 14.0254L11.541 13.0156C9.61658 13.0156 8.62226 12.9963 7.20117 12.8955L7.01074 12.873C6.1342 12.7239 5.46944 11.9942 5.38477 11.1074L5.375 10.915V9.56543C5.08668 9.56696 4.77697 9.56934 4.43848 9.56934L3.17871 10.5791C2.36056 11.2349 1.17205 10.7303 1.02637 9.74316L1.01172 9.53906V3.2959C1.01182 2.45499 1.54645 1.72341 2.37793 1.59766L3.02734 1.5127C3.74445 1.43272 4.6649 1.37208 5.80762 1.37207C7.3311 1.37207 8.46007 1.47996 9.23828 1.59766L9.39062 1.62793C10.0848 1.8026 10.5399 2.41755 10.5977 3.13965L10.6045 3.2959V4.82422Z",fill:"currentColor"}));i();e();var H=()=>{let o=Xt(r=>r.currentRoute);if(o==="/")return"chat";if(o==="/settings/voice")return"voices";if(o==="/settings/speed")return"speed";if(o?.startsWith("/settings"))return"settings"};i();e();var Ye=h(y()),zi=f.button`
  ${X}

  position: relative;
  width: 28px;
  height: 28px;
  color: ${C["icn-txt-prim"]};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: all 0.5s cubic-bezier(0.14, 1, 0.34, 1);

  &:hover {
    color: ${C["icn-txt-prim-electric"]};
  }

  &:disabled {
    color: ${C["icn-txt-prim"]} !important;
    opacity: 0.3;
  }

  ${({active:o})=>o?`color: ${C["icn-txt-prim-electric"]};`:""}
`,I=(0,Ye.forwardRef)(({icon:o,...r},n)=>t(zi,{ref:n,...r},o,t(Ht,null)));var qi=Fo("SidePlayerChatButton"),ze=()=>{let o=H(),r=$(d=>d.status==="recording"),n=St(),{isDictationPopupActive:s,hasSidepanel:m}=S(),p=(0,io.useCallback)(async()=>{if(o==="chat")return be();D("extension_sidepanel_summarize_btn_clicked",{source:"side_player"}),ct("summarize");try{await xe("/")}catch(d){qi.error("Failed to open side panel",d)}},[o]),l=(0,io.useMemo)(()=>Q()||r||s?!0:n,[n,r,s]);return m?t(w,{text:"Talk to Assistant",visible:!l},t(I,{"aria-label":R("SUMMARIZE_BUTTON"),"data-testid":v.SUMMARIZE_BUTTON,icon:t(Ke,null),onClick:U(p),active:o==="chat",disabled:l})):null};i();e();i();e();i();e();var L=Bo(()=>({transcript:null,previousTranscript:"",cursorPosition:0,liveCursorPosition:0,isCopied:!1})),ji=o=>L.setState({transcript:o}),Xi=o=>L.setState({previousTranscript:o}),Ji=o=>L.setState({cursorPosition:o}),Qi=o=>L.setState({isCopied:o}),Hi=o=>{let{cursorPosition:r,previousTranscript:n}=L.getState();L.setState({transcript:n.slice(0,r)+o+n.slice(r,n.length),liveCursorPosition:r+o.length})},tr=()=>{L.setState({transcript:null,previousTranscript:""}),E.setIsDictationPopupActive(!1),ft()},M={setTranscript:ji,setPreviousTranscript:Xi,setCursorPosition:Ji,updateTranscriptOnCurrentCursorPosition:Hi,setCopied:Qi,exitDictationMode:tr};var ro=()=>{let{isDictationPopupActive:o}=S();return async()=>{await ft({source:"side_player",cancel:!0}),setTimeout(()=>{ae(null)},100),o&&(M.setTranscript(null),M.setPreviousTranscript(""))}};i();e();var je=h(y());i();e();var no=h(y()),qe=()=>{let[o,r]=(0,no.useState)(!1);return(0,no.useEffect)(()=>{(async()=>{let s=await le();r(s)})()},[]),{isGdocsEditable:o}};var z=()=>{let{isGdocsEditable:o}=qe(),r=se(),n=ge(),s=Qt(),m=he(d=>d.isDisabledForSession),{voiceDictation:p}=Xo();return{isDictationAvailable:(0,je.useMemo)(()=>{if(!s||m||p===!1)return!1;let d=Q()&&!Be()&&o,u=r&&r.inputtableElement!==null;return d||u?!n:!1},[r,s,n,p,o,m])}};i();e();var Xe=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("g",{clipPath:"url(#clip0_3161_29314)"},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",fill:"currentColor"}),t("path",{d:"M11.8989 6.52683C12.2113 6.21442 12.2113 5.70788 11.8989 5.39546C11.5865 5.08303 11.08 5.08302 10.7675 5.39544L7.10486 9.05797L5.23287 7.18598C4.92045 6.87356 4.41392 6.87356 4.1015 7.18598C3.78908 7.4984 3.78908 8.00493 4.1015 8.31735L6.53917 10.755C6.85158 11.0674 7.35811 11.0674 7.67053 10.755L11.8989 6.52683Z",fill:C["icn-txt-white"]})),t("defs",null,t("clipPath",{id:"clip0_3161_29314"},t("rect",{width:"16",height:"16",rx:"8",fill:C["icn-txt-white"]}))));i();e();function or(o){return t("svg",{width:"44",height:"44",stroke:C["icn-txt-prim"],viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",...o},t("g",null,t("circle",{cx:"22",cy:"22",r:"20",fill:"none",strokeWidth:"4"})))}var ht=f(or)`
  width: 16px;
  height: 16px;

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
`;i();e();var Je=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M12.8213 6.18359C13.2385 6.1837 13.5762 6.52224 13.5762 6.93945V7.20605C13.5762 10.0239 11.4762 12.3492 8.75586 12.7061V14.4092L9.99512 14.4023C10.4123 14.3998 10.7532 14.7362 10.7559 15.1533C10.7584 15.5705 10.422 15.9114 10.0049 15.9141L6.00488 15.9385C5.58761 15.941 5.24665 15.6038 5.24414 15.1865C5.2418 14.7695 5.57814 14.4295 5.99512 14.4268L7.24414 14.4189V12.6992C4.55031 12.3184 2.47754 10.0049 2.47754 7.20605V6.93945C2.47754 6.52223 2.8162 6.18369 3.2334 6.18359C3.65068 6.18359 3.98926 6.52217 3.98926 6.93945V7.20605C3.98926 9.43628 5.79714 11.244 8.02734 11.2441C10.2576 11.2441 12.0654 9.43631 12.0654 7.20605V6.93945C12.0654 6.52223 12.4041 6.18369 12.8213 6.18359ZM8 0.943359C9.65685 0.943359 11 2.28651 11 3.94336V7C11 8.65685 9.65685 10 8 10C6.34315 9.99999 5 8.65685 5 7V3.94336C5 2.28651 6.34315 0.943366 8 0.943359ZM8 2.4541C7.17771 2.45411 6.51074 3.12107 6.51074 3.94336V7C6.51074 7.82229 7.17771 8.48925 8 8.48926C8.82229 8.48926 9.48926 7.82229 9.48926 7V3.94336C9.48926 3.12107 8.82229 2.4541 8 2.4541Z",fill:"currentColor"}));i();e();var Qe="rotate-keyframes",er=`
  @keyframes ${Qe} {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Io={rotate:{name:Qe,animation:er}};var xt=h(y());i();e();var t1=h(y());i();e();var He=h(y());i();e();var ir=f.kbd`
  font-family: system-ui;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  min-width: 16px;
  box-sizing: border-box;
  background: ${({isDarkMode:o})=>o?"#C8C8C899":"#3C3C3E80"};
  backdrop-filter: blur(32px);
  color: ${({isDarkMode:o})=>N({isDarkMode:o,color:"icn-txt-prim-inv"})};
  border-radius: 2px;
  padding: 0 3px;
`,rr=f.div`
  display: inline-flex;
  gap: 2px;
`,To={KeyHint:ir,KeyHintsWrapper:rr};var _=({keys:o,overrideDarkMode:r})=>{let n=(0,He.useMemo)(()=>o.split("+"),[o]),s=de();return t(To.KeyHintsWrapper,null,n.map(m=>t(To.KeyHint,{isDarkMode:r??s,key:m},m)))};i();e();var F=f.div`
  display: flex;
  gap: 6px;
  ${({hasShortcut:o})=>o?"padding-left: 2px;":""};
`;var o1=()=>{let{shortcuts:o}=W(),r=Y(),n=V(),s=(0,t1.useMemo)(()=>(o["voice-typing"]?.shortcut??"").trim().length>0,[o]);return t(F,{hasShortcut:s},r?"Stop Recording":"Dictate",s&&t(_,{keys:o["voice-typing"]?.shortcut||"",overrideDarkMode:n}))};i();e();i();e();var e1=o=>t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.66692 2C7.43968 2 6.44478 2.99482 6.44469 4.22206L6.44452 6.44446H3.77778C2.79594 6.44446 2 7.2404 2 8.22224V16.2223C2 17.2041 2.79594 18 3.77778 18H11.7778C12.7596 18 13.5556 17.2041 13.5556 16.2223V13.5556H15.7775C17.0048 13.5556 17.9997 12.5607 17.9998 11.3334L18 4.2223C18 2.99497 17.0051 2 15.7778 2H8.66692ZM13.5556 11.7778H15.7775C16.023 11.7778 16.222 11.5788 16.222 11.3334L16.2222 4.22224C16.2222 3.97677 16.0232 3.77778 15.7778 3.77778H8.66692C8.42147 3.77778 8.22249 3.97675 8.22247 4.22219L8.2223 6.44446H11.7778C12.7596 6.44446 13.5556 7.2404 13.5556 8.22224V11.7778ZM3.77778 8.22224H11.7778V16.2223H3.77778L3.77778 8.22224Z",fill:"currentColor"}));var yt=h(y()),a1=h(y());i();e();var Ot=h(y());var nr=f.div`
  width: 100%;
  height: 144px;
`,sr=f.textarea`
  ${qo};
  ${Yt["body-5"]};
  ${Pe};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border: 3px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  font-family: 'system-ui';

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0 10px 12px;
  border-radius: 8px;

  background: ${C["bg-sec-0-90"]};
  color: ${C["icn-txt-prim"]};

  &::placeholder {
    color: ${C["icn-txt-sec"]};
  }

  &:focus {
    outline: 1.5px solid ${C["brdr-blue"]};
  }

  &:read-only {
    outline: none;
    cursor: default;
  }

  &:disabled {
    opacity: 0.5;
  }
`,i1=o=>{let r=Y(),n=L(l=>l.transcript),s=L(l=>l.liveCursorPosition),{isDictationAvailable:m}=z(),p=(0,Ot.useRef)(null);return(0,Ot.useEffect)(()=>{let l=p.current;return l?Ko(l,["input","click","keyup","select","focus"],()=>{M.setCursorPosition(l.selectionStart)}):void 0},[]),(0,Ot.useEffect)(()=>{let l=p.current;if(!l)return;let d=Math.floor(s/l.value.length*10)/10,u=(l.scrollHeight-l.clientHeight)*d;l.scrollTo({top:u,behavior:"smooth"})},[s]),t(nr,null,t(sr,{ref:p,readOnly:r,disabled:m,value:n||"",placeholder:"Ready for your note — just start speaking...",onChange:l=>M.setTranscript(l.target.value),id:"dictation-text",...o}))};i();e();i();e();var r1=o=>t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.0178 4.59675C18.4083 4.98728 18.4083 5.62045 18.0178 6.01096L8.62475 15.4034C8.4372 15.5909 8.18283 15.6963 7.9176 15.6963C7.65237 15.6962 7.39801 15.5909 7.21048 15.4033L1.98422 10.1759C1.59374 9.78531 1.59381 9.15215 1.98438 8.76166C2.37494 8.37118 3.00811 8.37125 3.39859 8.76182L7.91777 13.282L16.6036 4.5967C16.9941 4.20619 17.6273 4.20621 18.0178 4.59675Z",fill:"currentColor"}));var n1=h(y()),ar=f.button`
  ${X};
  font-family: 'system-ui';
  ${Yt["subheading-6"]};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${C["icn-txt-prim"]};
  padding: 6px 4px;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }

  ${({isActive:o})=>o?`color: ${C["icn-txt-prim-electric"]};`:""}

  &:disabled {
    color: ${C["icn-txt-quat"]};
    opacity: 1 !important;
  }
`,s1=({icon:o,isActive:r,label:n,onClick:s,disabled:m})=>{let p=(0,n1.useMemo)(()=>r?t(r1,null):o,[o,r]);return t(ar,{onClick:s,isActive:r,disabled:m},p,n)};i();e();var lr=f(pt)`
  position: absolute;
  top: ${dt().DICTATION}px;
  ${({showOnRight:o})=>o?`left: ${q}px`:`right: ${q}px`};
  background: ${C["bg-prim-w-100"]};
  box-shadow: 0px 4px 24px 0 #00000029;
  border-radius: 20px;
  width: 280px;
`,cr=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px;
`,pr=f.div`
  padding: 0 12px 12px;
`,mr=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
`,Nt={Wrapper:lr,Heading:cr,Content:pr,ButtonsSection:mr};var l1=()=>{let o=T.usePlayingState(),r=S(b=>b.showOnRight),n=S(b=>b.isDictationPopupActive),s=S(b=>b.portalPlaceholderElement),m=L(b=>b.transcript),{isDictationAvailable:p}=z(),l=L(b=>b.isCopied),d=(0,yt.useRef)(null),u=(0,yt.useRef)();(0,yt.useEffect)(()=>(clearTimeout(u.current),u.current=window.setTimeout(()=>M.setCopied(!1),2e3),()=>clearTimeout(u.current)),[l]);let g=()=>{m&&(navigator.clipboard.writeText(m),M.setCopied(!0))},x=()=>{M.exitDictationMode()},P=o==="playing"||o==="buffering";return(0,yt.useEffect)(()=>{P&&x()},[P]),(0,a1.createPortal)(t(Nt.Wrapper,{showOnRight:r,ref:d,isOpen:n},t(Nt.Heading,null,t(J,{font:"heading-5"},"Voice Typing"),t(zt,{onClick:x})),t(Nt.Content,null,t(i1,null),t(Nt.ButtonsSection,null,t(s1,{icon:t(e1,null),label:l?"Copied":"Copy",onClick:g,isActive:l,disabled:!m||p})))),s)};i();e();var Pt=h(y()),p1=()=>{let[o,r]=(0,Pt.useState)(!1),{isDictationAvailable:n}=z(),s=(0,Pt.useRef)();return(0,Pt.useEffect)(()=>{if(!n){r(!1),clearTimeout(s.current);return}return(async()=>{let{dictationHint:p}=await Kt();(p?.lastSeen?(Date.now()-new Date(p.lastSeen).getTime())/(1e3*60*60):1/0)>24&&(clearTimeout(s.current),r(!0),await at("dictationHint",{lastSeen:new Date}),s.current=window.setTimeout(()=>{r(!1)},2e3))})(),()=>clearTimeout(s.current)},[n]),{showHint:o,turnOffHint:()=>r(!1)}};var dr=f.div`
  position: relative;
`,ur=f(I)`
  &.rotate {
    ${Io.rotate.animation};
    animation: ${Io.rotate.name} 1s linear infinite;
  }
  &.is-dictating {
    color: ${C["sf-prim-cta"]} !important;
    &:hover {
      color: ${C["sf-prim-cta-hov"]} !important;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,m1=()=>{let{isDictationAvailable:o}=z(),r=$(k=>k.status),n=$(k=>k.transcript),s=L(k=>k.transcript),m=L(k=>k.liveCursorPosition),p=L(k=>k.previousTranscript),l=S(k=>k.isDictationPopupActive),d=r==="initializing"||r==="finalizing",u=Y(),g=ro(),{showHint:x,turnOffHint:P}=p1(),b=(0,xt.useCallback)(()=>{u?g():E.setIsDictationPopupActive(!1)},[u]);jt(b),(0,xt.useEffect)(()=>{if(r==="idle"){M.setPreviousTranscript(s||"");return}n&&r==="recording"&&l&&!o&&M.updateTranscriptOnCurrentCursorPosition(n)},[n,p,r,s,l]);let G=async()=>{await ft(),s&&(o||(M.setCursorPosition(m),navigator.clipboard.writeText(s),M.setPreviousTranscript(s),M.setCopied(!0)))},A=async()=>{if(!d){if(P(),l||(await E.cleanupAllSidePlayerPopups(),M.exitDictationMode()),r==="recording"){G();return}await ce(!1,"side_player")}},O=(0,xt.useMemo)(()=>d?t(ht,null):u?t(Xe,null):t(Je,null),[d,u]);return t(dr,null,t(w,{text:t(o1,null),forceShow:x,visible:!d},t(ur,{onClick:U(A),icon:O,className:`${u?"is-dictating":""} ${d?"rotate":""}`,active:x})),t(l1,null))};i();e();var g1=h(y());i();e();var Lo=h(y());var d1=()=>{let o=T.usePlayingState(),{shortcuts:r}=W(),{isScreenshotModeOnly:n}=K(),s=V(),m=(0,Lo.useMemo)(()=>r["play-pause-new"]?.shortcut||r["play-pause"]?.shortcut,[r]),p=(0,Lo.useMemo)(()=>{switch(o){case"playing":return"Pause";case"buffering":return"Stop";default:return"Play"}},[o]);if(n){let l=r["open-screenshot-mode"]?.shortcut,d=mt();return!l||d?null:t("div",null,t(F,{hasShortcut:!!l},"No text detected. Try"," ",t(_,{keys:l,overrideDarkMode:s})),t("div",{style:{paddingLeft:l?"2px":0}},"to capture text and listen."))}return t("div",{style:{paddingLeft:m?"2px":0}},p," ",m&&t(_,{keys:m,overrideDarkMode:s}))};i();e();i();e();var ao=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("g",{clipPath:"url(#clip0_3808_85193)"},t("path",{d:"M8 0C12.4183 1.47263e-07 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 1.47259e-07 12.4183 0 8C1.93277e-07 3.58172 3.58172 1.93283e-07 8 0ZM8 10.2998C7.40321 10.2998 6.91921 10.7841 6.91895 11.3809C6.91899 11.9778 7.40308 12.4619 8 12.4619C8.59696 12.4619 9.08101 11.9778 9.08105 11.3809C9.08079 10.7841 8.59682 10.2998 8 10.2998ZM8 3.5C7.39296 3.50008 6.91358 4.0157 6.95703 4.62109L7.23828 8.50098C7.26723 8.90039 7.59956 9.20988 8 9.20996C8.40043 9.20986 8.73278 8.90038 8.76172 8.50098L9.04297 4.62109C9.08642 4.01571 8.60702 3.50011 8 3.5Z",fill:"currentColor"})),t("defs",null,t("clipPath",{id:"clip0_3808_85193"},t("rect",{width:"16",height:"16",fill:"white"}))));i();e();var u1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("mask",{id:"path-1-inside-1_3161_28672",fill:"white"},t("path",{d:"M6.06641 2.16602C6.58187 2.16602 7 2.58414 7 3.09961V12.8994C6.99996 13.4148 6.58185 13.833 6.06641 13.833H4.43359C3.91815 13.833 3.50004 13.4149 3.5 12.8994V3.09961C3.5 2.58414 3.91813 2.16602 4.43359 2.16602H6.06641ZM11.5664 2.16602C12.0819 2.16602 12.5 2.58414 12.5 3.09961V12.8994C12.5 13.4148 12.0819 13.833 11.5664 13.833H9.93359C9.41815 13.833 9.00004 13.4149 9 12.8994V3.09961C9 2.58414 9.41813 2.16602 9.93359 2.16602H11.5664Z"})),t("path",{d:"M6.06641 2.16602C6.58187 2.16602 7 2.58414 7 3.09961V12.8994C6.99996 13.4148 6.58185 13.833 6.06641 13.833H4.43359C3.91815 13.833 3.50004 13.4149 3.5 12.8994V3.09961C3.5 2.58414 3.91813 2.16602 4.43359 2.16602H6.06641ZM11.5664 2.16602C12.0819 2.16602 12.5 2.58414 12.5 3.09961V12.8994C12.5 13.4148 12.0819 13.833 11.5664 13.833H9.93359C9.41815 13.833 9.00004 13.4149 9 12.8994V3.09961C9 2.58414 9.41813 2.16602 9.93359 2.16602H11.5664Z",fill:"currentColor"}),t("path",{d:"M7 12.8994L8.75 12.8995V12.8994H7ZM3.5 12.8994H1.75V12.8995L3.5 12.8994ZM12.5 12.8994L14.25 12.8995V12.8994H12.5ZM9 12.8994H7.25L7.25 12.8995L9 12.8994ZM6.06641 2.16602V3.91602C5.61537 3.91602 5.25 3.55064 5.25 3.09961H7H8.75C8.75 1.61765 7.54837 0.416016 6.06641 0.416016V2.16602ZM7 3.09961H5.25V12.8994H7H8.75V3.09961H7ZM7 12.8994L5.25 12.8993C5.25003 12.4484 5.61523 12.083 6.06641 12.083V13.833V15.583C7.54847 15.583 8.7499 14.3813 8.75 12.8995L7 12.8994ZM6.06641 13.833V12.083H4.43359V13.833V15.583H6.06641V13.833ZM4.43359 13.833V12.083C4.88477 12.083 5.24997 12.4484 5.25 12.8993L3.5 12.8994L1.75 12.8995C1.7501 14.3813 2.95153 15.583 4.43359 15.583V13.833ZM3.5 12.8994H5.25V3.09961H3.5H1.75V12.8994H3.5ZM3.5 3.09961H5.25C5.25 3.55064 4.88463 3.91602 4.43359 3.91602V2.16602V0.416016C2.95163 0.416016 1.75 1.61765 1.75 3.09961H3.5ZM4.43359 2.16602V3.91602H6.06641V2.16602V0.416016H4.43359V2.16602ZM11.5664 2.16602V3.91602C11.1154 3.91602 10.75 3.55064 10.75 3.09961H12.5H14.25C14.25 1.61765 13.0484 0.416016 11.5664 0.416016V2.16602ZM12.5 3.09961H10.75V12.8994H12.5H14.25V3.09961H12.5ZM12.5 12.8994L10.75 12.8993C10.75 12.4484 11.1152 12.083 11.5664 12.083V13.833V15.583C13.0485 15.583 14.2499 14.3813 14.25 12.8995L12.5 12.8994ZM11.5664 13.833V12.083H9.93359V13.833V15.583H11.5664V13.833ZM9.93359 13.833V12.083C10.3848 12.083 10.75 12.4484 10.75 12.8993L9 12.8994L7.25 12.8995C7.2501 14.3813 8.45153 15.583 9.93359 15.583V13.833ZM9 12.8994H10.75V3.09961H9H7.25V12.8994H9ZM9 3.09961H10.75C10.75 3.55064 10.3846 3.91602 9.93359 3.91602V2.16602V0.416016C8.45163 0.416016 7.25 1.61765 7.25 3.09961H9ZM9.93359 2.16602V3.91602H11.5664V2.16602V0.416016H9.93359V2.16602Z",fill:"currentColor",mask:"url(#path-1-inside-1_3161_28672)"}));i();e();var Ro=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M14.1992 6.75543C15.1576 7.30873 15.1576 8.69196 14.1992 9.24526L5.57422 14.2249C4.61589 14.7782 3.41797 14.0866 3.41797 12.98L3.41797 3.0207C3.41797 1.91411 4.61589 1.22249 5.57422 1.77579L14.1992 6.75543Z",fill:"currentColor"}));i();e();var f1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M8.0127 1.98828C9.85729 1.98828 11.5071 2.81911 12.6094 4.125V3.50684C12.6096 3.06764 12.966 2.71191 13.4053 2.71191C13.8444 2.71207 14.2 3.06773 14.2002 3.50684V6.20312C14.2001 6.64231 13.8445 6.99887 13.4053 6.99902H10.709C10.2697 6.999 9.91322 6.64239 9.91309 6.20312C9.91314 5.76379 10.2696 5.40725 10.709 5.40723H11.5928C10.7885 4.29894 9.4845 3.5791 8.0127 3.5791C5.5712 3.57935 3.59205 5.55851 3.5918 8C3.59193 10.4416 5.57113 12.4216 8.0127 12.4219C10.2822 12.4219 12.1534 10.7105 12.4053 8.50879C12.4553 8.07252 12.8498 7.75984 13.2861 7.80957C13.7225 7.85948 14.036 8.25309 13.9863 8.68945C13.6436 11.6856 11.1003 14.0127 8.0127 14.0127C4.69234 14.0124 2.00111 11.3204 2.00098 8C2.00123 4.67971 4.69241 1.98853 8.0127 1.98828Z",fill:"currentColor"}));var C1=({disabled:o})=>{let r=T.usePlayingState(),n=oo(d=>d.isLoading),s=r==="buffering"||gt()&&n,m=r==="playing",p=r==="errored",l=r==="ended";return o?t(Ro,null):s?t(ht,null):m?t(u1,null):p?t(ao,null):l?t(f1,null):t(Ro,null)};var Cr=f(I)`
  ${({hasError:o})=>o?`
        color: ${C["sf-crit"]};

        &:hover {
          color: ${C["sf-crit-hov"]};
        }
        `:""};
`,{pause:Sr,play:gr,stop:hr}=lt,h1=()=>{let o=St(),{playbackInitialized:r}=oo(),n=T.usePlayingState(),s=n==="playing"?v.PAUSE_BUTTON:v.PLAY_BUTTON,m=$(G=>G.status==="recording"),p=S(G=>G.isDictationPopupActive),{isScreenshotModeOnly:l}=K(),{shortcuts:d}=W(),u=d["open-screenshot-mode"]?.shortcut,g=(0,g1.useMemo)(()=>m||p?!0:o,[o,m,p]),P=ue(()=>{if(Qo(),n==="playing")return Sr();if(n==="buffering")return hr();if(gt()&&!r){Ut("start-kindle-playback",{},"side-player");return}return gr()}),b=mt();return t(w,{text:t(d1,null),visible:!g||l&&!!u&&!b},t(Cr,{"data-testid":s,disabled:g,icon:t(C1,{disabled:g}),onClick:P,hasError:n==="errored",onMouseEnter:kt.onPlayButtonEnter,onMouseLeave:kt.onPlayButtonLeave}))};i();e();i();e();i();e();var y1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("g",{clipPath:"url(#clip0_6348_619)"},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8 0.800049C13.2419 0.800049 13.6 1.15822 13.6 1.60005V3.20005H15.2C15.6419 3.20005 16 3.55822 16 4.00005C16 4.44188 15.6419 4.80005 15.2 4.80005H13.6V6.40005C13.6 6.84188 13.2419 7.20005 12.8 7.20005C12.3582 7.20005 12 6.84188 12 6.40005V4.80005H10.4C9.9582 4.80005 9.60002 4.44188 9.60002 4.00005C9.60002 3.55822 9.9582 3.20005 10.4 3.20005H12V1.60005C12 1.15822 12.3582 0.800049 12.8 0.800049ZM4.53336 3.20005C4.23881 3.20005 4.00002 3.43883 4.00002 3.73338L4.00005 12.6072L7.59693 10.509C7.84601 10.3637 8.15403 10.3637 8.40311 10.509L12 12.6072V9.60005C12 9.15822 12.3582 8.80005 12.8 8.80005C13.2418 8.80005 13.6 9.15822 13.6 9.60005V14C13.6 14.2865 13.4469 14.5511 13.1985 14.6937C12.9501 14.8364 12.6444 14.8354 12.3969 14.691L8.00002 12.1262L3.60315 14.691C3.35572 14.8354 3.05 14.8364 2.80161 14.6937C2.55321 14.5511 2.40005 14.2865 2.40005 14L2.40002 3.73339C2.40002 2.55518 3.35515 1.60005 4.53336 1.60005H8C8.44183 1.60005 8.8 1.95822 8.8 2.40005C8.8 2.84188 8.44183 3.20005 8 3.20005H4.53336Z",fill:"currentColor"})),t("defs",null,t("clipPath",{id:"clip0_6348_619"},t("rect",{width:"16",height:"16",fill:"currentColor"})))),P1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.53324 1.59998C3.35503 1.59998 2.3999 2.5551 2.3999 3.73331L2.39993 13.9999C2.39993 14.2864 2.55309 14.551 2.80148 14.6937C3.04988 14.8363 3.3556 14.8353 3.60303 14.691L7.9999 12.1261L12.3968 14.691C12.6442 14.8353 12.95 14.8363 13.1984 14.6937C13.4467 14.551 13.5999 14.2864 13.5999 13.9999L13.5999 3.7333C13.5999 2.5551 12.6447 1.59998 11.4665 1.59998H4.53324ZM11.3529 5.67914C11.6653 5.36672 11.6653 4.86019 11.3529 4.54777C11.0404 4.23535 10.5339 4.23535 10.2215 4.54777L7.19274 7.57652L5.77848 6.16225C5.46606 5.84983 4.95953 5.84983 4.64711 6.16225C4.33469 6.47467 4.33469 6.9812 4.64711 7.29362L6.62706 9.27357C6.77709 9.4236 6.98057 9.50789 7.19275 9.50789C7.40492 9.50789 7.6084 9.4236 7.75843 9.27357L11.3529 5.67914Z",fill:C["icn-txt-success"]}));var v1=()=>{let{saveToMobileStatus:o}=ut("Pill Player"),r=o==="saved";return o==="saving"?t(ht,null):r?t(P1,null):t(y1,null)};i();e();var E1=h(y());var w1=()=>{let{shortcuts:o}=W(),{saveToMobileStatus:r}=ut("Pill Player"),n=r==="saved",s=(0,E1.useMemo)(()=>(o["save-to-library"]?.shortcut??"").trim().length>0,[o]);return t(F,{hasShortcut:s},n?"View in Library ↗":"Save to Library",s&&!n&&t(_,{keys:o["save-to-library"]?.shortcut||""}))};var yr=()=>document.querySelector("#docs-title-input-label-inner")?.textContent,I1=o=>{let r=yo.speechifyWebApp.baseUrl;Po(`${r}?importService=google-drive&importFilename=${o}`)},Pr=f(I)`
  &.saved {
    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.5;
    }
  }
`,T1=()=>{let{saveToMobileStatus:o,saveToMobile:r}=ut("Pill Player"),{docTitle:n}=fe(),s=o==="saved",m=o==="saving",p=()=>{if(_e()&&n)I1(n);else if(Q()){let u=yr();if(!u){_o(new Error("No google docs title while clicking on save to library button"));return}I1(u)}else r()},l=()=>{m||(s?Po($o("library",yo.speechifyWebApp.baseUrl)):p())},d=m?v.SIDE_PLAYER_SAVE_TO_LIBRARY_SAVING:s?v.SIDE_PLAYER_SAVE_TO_LIBRARY_SAVED:v.SIDE_PLAYER_SAVE_TO_LIBRARY;return t(w,{text:!m&&t(w1,null)},t(Pr,{className:s?"saved":"","aria-label":R("SAVE_TO_LIBRARY"),"data-testid":d,icon:t(v1,null),onClick:U(l)}))};i();e();var bt=h(y()),xr=f.div`
  background: ${C["bg-prim-w-100"]};
  padding: ${({noPadding:o})=>o?"0":"2px 0"};
  border-radius: 9999px;
  box-shadow: 0px 3px 12px 0 #0000001f;
  position: relative;
  box-sizing: border-box;

  transition: all 0.33s cubic-bezier(0.17, 0.89, 0.32, 1.27);

  ${({isVisible:o=!0,height:r="auto"})=>o?`height: ${r}; opacity: 1;`:"height: 0; padding: 0; box-shadow: none; opacity: 0;"}
`,vt=({children:o,isVisible:r=!0,height:n="auto",noPadding:s})=>{let[m,p]=(0,bt.useState)(!1),[l,d]=(0,bt.useState)(!1),[u,g]=(0,bt.useState)(o);(0,bt.useEffect)(()=>{r?(g(o),requestAnimationFrame(()=>{p(!0),requestAnimationFrame(()=>d(!0))})):d(!1)},[r,o]);let x=()=>{r||(g(o),p(!1))};return m?t(xr,{isVisible:l,height:n,onTransitionEnd:x,noPadding:s},u):null};var L1=()=>{let o=Qt(),r=gt();return t(vt,null,t(h1,null),!r&&t(T1,null),!eo()&&!r&&t(ze,null),o&&t(m1,null))};i();e();i();e();i();e();var R1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("g",{clipPath:"url(#clip0_4934_10413)"},t("path",{d:"M1.59961 9.09961C2.09663 9.09961 2.49994 9.50202 2.5 9.99902V12.6992H4.7998C5.29686 12.6992 5.7002 13.1026 5.7002 13.5996C5.69994 14.0964 5.2967 14.499 4.7998 14.499H2.39941C1.46071 14.4988 0.700195 13.7376 0.700195 12.7988V9.99902C0.700259 9.50209 1.10268 9.09972 1.59961 9.09961ZM14.3994 9.89941C14.8964 9.89941 15.2996 10.3019 15.2998 10.7988V12.7988C15.2998 13.7377 14.5385 14.499 13.5996 14.499H11.2002C10.7033 14.499 10.3001 14.0964 10.2998 13.5996C10.2998 13.1026 10.7031 12.6992 11.2002 12.6992H13.5V10.7988C13.5002 10.302 13.9026 9.89962 14.3994 9.89941ZM12.7393 0.0195312C13.3649 0.0195312 13.9172 0.428553 14.0986 1.02734L14.1631 1.24219H14.6279C15.4078 1.24238 16.0419 1.8715 16.0479 2.65137L16.0762 6.34863C16.0811 7.017 15.6138 7.61766 14.9316 7.74512C12.6224 8.17656 10.3895 8.17565 8.08008 7.74316C7.40623 7.61696 6.94157 7.02866 6.93652 6.36816L6.9082 2.67285C6.90218 1.88439 7.53964 1.24219 8.32812 1.24219H8.96387L9.06836 0.954102C9.27241 0.392906 9.80618 0.0195312 10.4033 0.0195312H12.7393ZM4 1.49902C4.49697 1.49913 4.89941 1.90242 4.89941 2.39941C4.89927 2.89628 4.49688 3.29872 4 3.29883H2.5V5.99902C2.5 6.49608 2.09667 6.89941 1.59961 6.89941C1.10264 6.89931 0.700195 6.49602 0.700195 5.99902V3.19922C0.700195 2.26046 1.46071 1.49923 2.39941 1.49902H4ZM10.2432 2.28809C10.1311 2.59635 9.83777 2.80176 9.50977 2.80176H8.46973L8.49512 6.23242C10.5259 6.598 12.4842 6.59871 14.5146 6.23438L14.4893 2.80176H13.585C13.2413 2.80176 12.9376 2.57689 12.8379 2.24805L12.6357 1.5791H10.502L10.2432 2.28809ZM11.584 2.85352C12.3875 2.85352 13.0389 3.50512 13.0391 4.30859C13.0391 5.11222 12.3876 5.76367 11.584 5.76367C10.7805 5.76356 10.1289 5.11215 10.1289 4.30859C10.1291 3.50519 10.7806 2.85363 11.584 2.85352Z",fill:"currentColor"})),t("defs",null,t("clipPath",{id:"clip0_4934_10413"},t("rect",{width:"16",height:"16",fill:"currentColor"})))),M1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M1.59961 9.10059C2.09666 9.10059 2.49999 9.50393 2.5 10.001V12.7012H4.7998C5.29679 12.7012 5.70008 13.1036 5.7002 13.6006C5.7002 14.0976 5.29686 14.501 4.7998 14.501H2.39941C1.46071 14.5008 0.700195 13.7395 0.700195 12.8008V10.001C0.700206 9.50399 1.10265 9.10069 1.59961 9.10059ZM14.3994 9.90039C14.8965 9.90039 15.2998 10.3037 15.2998 10.8008V12.8008C15.2998 13.7397 14.5385 14.501 13.5996 14.501H11.2002C10.7031 14.501 10.2998 14.0976 10.2998 13.6006C10.2999 13.1036 10.7032 12.7012 11.2002 12.7012H13.5V10.8008C13.5 10.3039 13.9025 9.9006 14.3994 9.90039ZM13.2549 0.964844C13.6064 0.613385 14.1759 0.613385 14.5273 0.964844C14.8786 1.31633 14.8787 1.8859 14.5273 2.2373L12.6182 4.14551L14.5273 6.05566C14.8787 6.4071 14.8787 6.97665 14.5273 7.32812C14.1759 7.67959 13.6064 7.67957 13.2549 7.32812L11.3447 5.41895L9.43652 7.32812C9.08505 7.6796 8.51456 7.6796 8.16309 7.32812C7.81197 6.9767 7.81192 6.40706 8.16309 6.05566L10.0723 4.14551L8.16309 2.2373C7.81186 1.88595 7.81204 1.31631 8.16309 0.964844C8.51455 0.613385 9.08505 0.613385 9.43652 0.964844L11.3447 2.87305L13.2549 0.964844ZM4 1.50098C4.49683 1.50108 4.89919 1.90359 4.89941 2.40039C4.89941 2.89738 4.49697 3.30068 4 3.30078H2.5V6.00098C2.49989 6.49794 2.0966 6.90039 1.59961 6.90039C1.10271 6.90029 0.700301 6.49788 0.700195 6.00098V3.20117C0.700206 2.26243 1.46072 1.50119 2.39941 1.50098H4Z",fill:"currentColor"}));var V1=h(y());var A1=()=>{let{exitScreenshotMode:o}=oe(),r=(0,V1.useCallback)(async()=>{o(),at("screenshotHint",{lastSeen:new Date})},[]),n=V();return jt(r),t(w,{"aria-label":R("OCR_CLOSE_ICON"),"data-testid":v.OCR_CLOSE_ICON,text:t(F,{hasShortcut:!0},"Exit Screenshot Mode ",t(_,{keys:"Esc",overrideDarkMode:n}))},t(I,{onClick:r,icon:t(M1,null)}))};i();e();var k1=()=>{let{shortcuts:o}=W(),r=o["open-screenshot-mode"]?.shortcut,n=V(),s=U(async()=>{ct("screenshot"),Ut("init",{},"screenshot-mode"),await re("side-player")});return t(w,{"aria-label":R("OCR_ICON"),"data-testid":v.OCR_ICON,text:t(F,{hasShortcut:!!r},"Screenshot to Listen",r&&t(_,{keys:r,overrideDarkMode:n}))},t(I,{onClick:s,icon:t(R1,null)}))};var D1=()=>{let{isInScreenshotMode:o}=K();return t(vt,{noPadding:!0},o?t(A1,null):t(k1,null))};i();e();i();e();var Et=()=>{let o=S(g=>g.hasPlayed),r=S(g=>g.isDictationPopupActive),{totalEstimatedDuration:n}=T.useTime(),s=Y(),{isInScreenshotMode:m,isScreenshotModeOnly:p}=K(),l=o&&n>0&&(p?m:!0)&&!r,d=s;return{height:d?"60px":"144px",showDictationSection:d,showPlaybackSection:l}};var $t=h(y());i();e();i();e();var B1=h(Fi()),ot=h(y()),lo=["1.59961","4.7998","8","11.2002","14.3984"],O1=[{start:"4",end:"12"},{start:"5",end:"11"},{start:"6",end:"10"},{start:"7",end:"9"},{start:"8",end:"8.0001"}],_1={start:"8",end:"8.0001"},N1=(o,r)=>{let n=lo[o],s=O1[r];return`M${n} ${s.start}L${n} ${s.end}`},br=o=>N1(o,Math.floor(Math.random()*O1.length)),rt=lo.map((o,r)=>`M${lo[r]} ${_1.start}L${lo[r]} ${_1.end}`),F1=({animate:o,...r})=>{let n=(0,ot.useRef)(),[s,m]=(0,ot.useState)(rt),[p,l]=(0,ot.useState)(!0);return(0,ot.useEffect)(()=>{(()=>{let u=-rt.length,g=setInterval(()=>{if(u>=rt.length*2){l(!1),clearInterval(g);return}let x=rt.map((P,b)=>{let G=(0,B1.default)(Math.abs(b-u),0,rt.length-1);return N1(b,G)});m(x),u++},75)})()},[]),(0,ot.useEffect)(()=>{if(!p){if(!o){m(rt);return}return n.current=window.setInterval(()=>{m(rt.map((d,u)=>br(u)))},150),()=>clearInterval(n.current)}},[o,p]),t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:C["icn-txt-prim"],...r},s.map((d,u)=>t("path",{key:u,d,strokeWidth:"1.6",strokeLinecap:"round",stroke:"currentColor",style:{transition:`d ${p?.15:.3}s ease-in-out`}})))};var vr=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`,G1=()=>{let o=$(n=>n.status),r=ne();return t(vr,null,t(F1,{animate:o==="recording"&&r>.1}))};i();e();i();e();var $1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M8.06152 1.92188C8.50319 1.92188 8.86106 2.28008 8.86133 2.72168V3.69238H12.5615C13.0034 3.69238 13.3613 4.05036 13.3613 4.49219C13.3613 4.93402 13.0034 5.29199 12.5615 5.29199H12.3184L11.9131 12.5742C11.86 13.528 11.0705 14.2744 10.1152 14.2744H6.00781C5.05268 14.2743 4.26305 13.5279 4.20996 12.5742L3.80469 5.29199H3.56152C3.1197 5.29199 2.76172 4.93402 2.76172 4.49219C2.76172 4.05036 3.1197 3.69238 3.56152 3.69238H7.26172V2.72168C7.26198 2.28008 7.61986 1.92188 8.06152 1.92188ZM5.80762 12.4854C5.81351 12.5912 5.90179 12.6747 6.00781 12.6748H10.1152C10.2214 12.6748 10.3095 12.5913 10.3154 12.4854L10.7158 5.29199H5.40723L5.80762 12.4854Z",fill:"currentColor"}));var Z1=h(y());var U1=()=>{let{isDictationAvailable:o}=z(),r=L(l=>l.transcript),n=ro(),s=V(),m=(0,Z1.useMemo)(()=>t(F,{hasShortcut:!0},"Cancel Dictation ",t(_,{keys:"Esc",overrideDarkMode:s})),[]),p=o?!1:!r;return t(w,{text:m,visible:!p},t(I,{onClick:n,icon:t($1,null),disabled:p}))};i();e();var K1=h(y());i();e();var W1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M9.20182 1.17188C9.48761 1.17208 9.74866 1.33432 9.87466 1.59082L10.3327 2.52344C10.5164 2.89824 10.9085 3.12488 11.3249 3.09668L12.3561 3.02539L12.4625 3.02637C12.708 3.04422 12.9319 3.18234 13.0573 3.39941L14.3854 5.69824C14.5284 5.94604 14.5185 6.25365 14.359 6.49121L13.7809 7.35059C13.5478 7.69741 13.5484 8.15073 13.7809 8.49707L14.359 9.35645C14.5185 9.59402 14.5285 9.90254 14.3854 10.1504L13.0582 12.4482C12.9151 12.6957 12.6433 12.8406 12.358 12.8213L11.3249 12.752C10.9086 12.7236 10.5156 12.9497 10.3317 13.3252L9.87564 14.2559C9.74968 14.5127 9.48883 14.6757 9.20279 14.6758L6.54949 14.6748C6.26327 14.6748 6.00257 14.5119 5.87664 14.2549L5.42059 13.3242L5.41961 13.3252C5.23594 12.9505 4.84382 12.7238 4.42743 12.752L3.38837 12.8223C3.10301 12.8414 2.83118 12.696 2.68818 12.4482L1.36397 10.1533C1.22079 9.90528 1.23144 9.59701 1.39131 9.35938L1.97139 8.49707C2.20402 8.15031 2.20366 7.69761 1.97139 7.35156L1.39131 6.4873C1.2317 6.2497 1.22085 5.94125 1.36397 5.69336L2.68916 3.39941C2.83239 3.15133 3.10454 3.00668 3.39033 3.02637L4.42743 3.09668C4.84347 3.12492 5.23565 2.89928 5.41961 2.52441L5.87566 1.5918C6.00147 1.33458 6.26318 1.17102 6.54949 1.1709L9.20182 1.17188ZM6.76726 3.18262L6.76628 3.18359C6.3145 4.10562 5.34988 4.66453 4.32489 4.59473L4.32391 4.59375L3.75361 4.55469L2.89717 6.03809L3.2165 6.51367C3.78957 7.36654 3.78807 8.48176 3.21552 9.33398V9.33496L2.89619 9.80762L3.75361 11.293L4.32587 11.2549C5.34992 11.1855 6.31531 11.7424 6.76726 12.6641L6.76628 12.665L7.01628 13.1748L8.73502 13.1758L8.98502 12.665C9.43678 11.7431 10.4022 11.184 11.4274 11.2539L11.9938 11.292L12.8522 9.80469L12.5358 9.33496C11.9628 8.48217 11.9632 7.36691 12.5358 6.51465L12.8532 6.04199L11.9928 4.55371L11.4274 4.59375H11.4264C10.4022 4.66322 9.43696 4.10622 8.98502 3.18457L8.73307 2.66992H7.01726L6.76726 3.18262ZM8.14616 5.27148C9.49077 5.4081 10.5397 6.54414 10.5397 7.9248L10.526 8.19727C10.3894 9.54176 9.2542 10.5907 7.8737 10.5908L7.60026 10.5771C6.34556 10.4494 5.34788 9.45204 5.22039 8.19727L5.20672 7.9248C5.20672 6.45209 6.40101 5.25788 7.8737 5.25781L8.14616 5.27148ZM7.8737 6.67969C7.18648 6.67976 6.62859 7.23756 6.62859 7.9248C6.62876 8.6119 7.18658 9.16887 7.8737 9.16895C8.56072 9.16877 9.11766 8.61183 9.11783 7.9248C9.11783 7.23763 8.56083 6.67986 7.8737 6.67969Z",fill:"currentColor"}));var co=({buttonProps:o})=>{let r=H(),n=S(l=>l.hasSidepanel),s=Me(l=>l.isVisible),m=n?r==="settings":s,p=(0,K1.useCallback)(async()=>{if(ct("settings"),D("extension_usage_settings_clicked",{source:"side_player"}),n&&r==="settings")return Dt();if(!n&&s)return Dt();try{await to("/settings")}catch{}},[n,r,s]);return t(w,{text:"Settings"},t(I,{"aria-label":R("PILL_PLAYER_SETTINGS"),"data-testid":v.PILL_PLAYER_SETTINGS,onClick:U(p),active:m,icon:t(W1,null),...o}))};i();e();i();e();var Y1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M7.16992 8.52637C6.40307 8.52641 5.76931 8.81294 5.3291 9.34473C4.89068 9.87451 4.65234 10.6385 4.65234 11.5801C4.65242 12.5173 4.88769 13.2838 5.32422 13.8184C5.76279 14.3553 6.39656 14.6484 7.16992 14.6484C7.94358 14.6484 8.57713 14.3538 9.01465 13.8154C9.45013 13.2795 9.6845 12.5114 9.68457 11.5762C9.68457 10.6348 9.44775 9.87167 9.01074 9.34277C8.57186 8.81175 7.93866 8.52637 7.16992 8.52637ZM2.9707 8.58105C2.67753 8.58105 2.41368 8.615 2.09082 8.83301H2.08984L1.02344 9.55957C0.912434 9.63642 0.828514 9.72305 0.773438 9.82324C0.718215 9.92384 0.695312 10.0332 0.695312 10.1504C0.695521 10.4929 0.945286 10.7461 1.2793 10.7461C1.35588 10.7461 1.42347 10.7375 1.49121 10.7139C1.5579 10.6906 1.62036 10.6549 1.68848 10.6074L1.6875 10.6064L2.26172 10.208V13.791C2.26182 14.0288 2.34214 14.2327 2.48926 14.377C2.6362 14.5209 2.84141 14.5977 3.07617 14.5977C3.31109 14.5977 3.51508 14.5203 3.66113 14.376C3.80725 14.2316 3.88662 14.0284 3.88672 13.791V9.48242C3.88672 9.21583 3.80509 8.98755 3.64258 8.82617C3.4801 8.66485 3.24851 8.58105 2.9707 8.58105ZM8.56738 1.35254C6.32992 1.3526 4.34946 2.44345 3.12402 4.12012V2.62695C3.12402 2.21826 2.79248 1.88672 2.38379 1.88672C1.97531 1.88696 1.64453 2.21841 1.64453 2.62695V5.95996C1.64459 6.36845 1.97534 6.69995 2.38379 6.7002H5.71777C6.12634 6.70009 6.45795 6.36854 6.45801 5.95996C6.45801 5.55134 6.12637 5.21983 5.71777 5.21973H4.16309C5.10257 3.7822 6.72375 2.8321 8.56738 2.83203C11.4723 2.83203 13.827 5.18694 13.8271 8.0918C13.8271 10.1137 12.6871 11.871 11.0107 12.752C10.649 12.9421 10.5101 13.3892 10.7002 13.751C10.8903 14.1127 11.3375 14.2516 11.6992 14.0615C13.8428 12.9349 15.3076 10.6849 15.3076 8.0918C15.3074 4.36956 12.2897 1.35254 8.56738 1.35254ZM7.16992 9.84375C7.42476 9.84375 7.63301 9.96899 7.7832 10.2461C7.93676 10.5296 8.02734 10.97 8.02734 11.5801C8.0273 12.188 7.93755 12.6318 7.78418 12.9199C7.6339 13.2021 7.42558 13.3311 7.16992 13.3311C6.9163 13.331 6.70647 13.202 6.55469 12.9189C6.40002 12.6303 6.30961 12.1856 6.30957 11.5762C6.30957 10.9705 6.40033 10.5316 6.55469 10.248C6.70592 9.9705 6.91516 9.8438 7.16992 9.84375Z",fill:"currentColor"}));var z1=()=>{let o=()=>{lt.seekPrevious()};return t(w,{text:"Skip Backward"},t(I,{"aria-label":R("SKIP_SENTENCE_BACKWARD"),"data-testid":v.SKIP_SENTENCE_BACKWARD,onClick:o,icon:t(Y1,null)}))};i();e();i();e();var q1=o=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{d:"M12.5928 8.52637C13.3615 8.52637 13.9947 8.81173 14.4336 9.34277C14.8706 9.87167 15.1074 10.6348 15.1074 11.5762C15.1074 12.5114 14.873 13.2795 14.4375 13.8154C14 14.3539 13.3664 14.6484 12.5928 14.6484C11.8194 14.6484 11.1856 14.3553 10.7471 13.8184C10.3105 13.2838 10.0753 12.5173 10.0752 11.5801C10.0752 10.6385 10.3135 9.87451 10.752 9.34473C11.1922 8.81295 11.8259 8.5264 12.5928 8.52637ZM8.39355 8.58105C8.67135 8.58106 8.90296 8.66484 9.06543 8.82617C9.22794 8.98755 9.30957 9.21583 9.30957 9.48242V13.791C9.30947 14.0284 9.2301 14.2316 9.08398 14.376C8.93794 14.5203 8.73394 14.5976 8.49902 14.5977C8.26427 14.5977 8.05905 14.5209 7.91211 14.377C7.765 14.2327 7.68467 14.0288 7.68457 13.791V10.208L7.11035 10.6064L7.11133 10.6074C7.04322 10.6549 6.98074 10.6906 6.91406 10.7139C6.84633 10.7375 6.77872 10.7461 6.70215 10.7461C6.36814 10.7461 6.11837 10.4929 6.11816 10.1504C6.11816 10.0331 6.14106 9.92384 6.19629 9.82324C6.25137 9.72305 6.33529 9.63642 6.44629 9.55957L7.5127 8.83301H7.51367C7.83652 8.61501 8.10039 8.58105 8.39355 8.58105ZM7.63379 1.35254C9.87122 1.35254 11.8517 2.44355 13.0771 4.12012V2.62695C13.0771 2.21829 13.4087 1.88677 13.8174 1.88672C14.2261 1.88672 14.5576 2.21826 14.5576 2.62695V5.95996C14.5576 6.3686 14.226 6.7002 13.8174 6.7002H10.4844C10.0757 6.7002 9.7442 6.3686 9.74414 5.95996C9.74414 5.55127 10.0757 5.21973 10.4844 5.21973H12.0381C11.0985 3.78229 9.4774 2.83203 7.63379 2.83203C4.72905 2.83222 2.37421 5.18706 2.37402 8.0918C2.37402 10.1138 3.51503 11.871 5.19141 12.752C5.55298 12.9421 5.69197 13.3893 5.50195 13.751C5.31184 14.1128 4.86471 14.2516 4.50293 14.0615C2.35912 12.9349 0.894531 10.6851 0.894531 8.0918C0.894721 4.36968 3.91167 1.35273 7.63379 1.35254ZM12.5928 9.84375C12.338 9.84379 12.1288 9.97048 11.9775 10.248C11.8232 10.5316 11.7324 10.9705 11.7324 11.5762C11.7325 12.1856 11.8229 12.6303 11.9775 12.9189C12.1293 13.202 12.3391 13.331 12.5928 13.3311C12.8484 13.3311 13.0567 13.2021 13.207 12.9199C13.3604 12.6318 13.4502 12.188 13.4502 11.5801C13.4502 10.97 13.3596 10.5296 13.2061 10.2461C13.0559 9.96898 12.8476 9.84375 12.5928 9.84375Z",fill:"currentColor"}));var j1=()=>{let o=()=>{lt.seekNext()};return t(w,{text:"Skip Forward"},t(I,{"aria-label":R("SKIP_SENTENCE_FORWARD"),"data-testid":v.SKIP_SENTENCE_FORWARD,onClick:o,icon:t(q1,null)}))};i();e();var ui=h(y()),fi=h(y());i();e();var X1=h(y());var Mo=(o,r=!0)=>{let n=parseFloat((o??1).toFixed(2)).toString();return n.length>3&&r?n:`${n}×`},po=(o=!0)=>{let r=S(s=>s.playbackSpeed);return(0,X1.useMemo)(()=>Mo(r??1,o),[r,o])};i();e();i();e();var wt=h(y());var J1=()=>{let o=(0,wt.useRef)(),[r,n]=(0,wt.useState)(!1);return(0,wt.useEffect)(()=>{let s=st.on("speedUpdate",({isAutoIncrease:m})=>{m&&(n(!0),o.current=window.setTimeout(()=>{n(!1)},3e3))});return()=>{s(),o.current&&clearTimeout(o.current)}},[]),{showSpeedRampAnimation:r}};i();e();var Q1=()=>t("div",{style:{width:"10px",height:"12px",position:"relative"}},t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 17",width:"14",height:"17",preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"100%"}},t("defs",null,t("radialGradient",{id:"speedRampGradient",spreadMethod:"pad",gradientUnits:"userSpaceOnUse",cx:"-4.809000015258789",cy:"-0.949999988079071",r:"10.190258807587085",fx:"-4.809000015258789",fy:"-0.949999988079071"},t("stop",{offset:"0%",stopColor:"rgb(234,106,255)"}),t("stop",{offset:"50%",stopColor:"rgb(171,113,253)"}),t("stop",{offset:"100%",stopColor:"rgb(107,120,252)"}))),t("g",{className:"arrow-1"},t("path",{fill:"url(#speedRampGradient)",d:"M-0.7070000171661377,-2.7070000171661377 C-0.3160000145435333,-3.0980000495910645 0.3160000145435333,-3.0980000495910645 0.7070000171661377,-2.7070000171661377 C0.7070000171661377,-2.7070000171661377 4.706999778747559,1.2929999828338623 4.706999778747559,1.2929999828338623 C5.0980000495910645,1.684000015258789 5.0980000495910645,2.315999984741211 4.706999778747559,2.7070000171661377 C4.315999984741211,3.0980000495910645 3.684000015258789,3.0980000495910645 3.2929999828338623,2.7070000171661377 C3.2929999828338623,2.7070000171661377 0,-0.5860000252723694 0,-0.5860000252723694 C0,-0.5860000252723694 -3.2929999828338623,2.7070000171661377 -3.2929999828338623,2.7070000171661377 C-3.684000015258789,3.0980000495910645 -4.315999984741211,3.0980000495910645 -4.706999778747559,2.7070000171661377 C-5.0980000495910645,2.315999984741211 -5.0980000495910645,1.684000015258789 -4.706999778747559,1.2929999828338623 C-4.706999778747559,1.2929999828338623 -0.7070000171661377,-2.7070000171661377 -0.7070000171661377,-2.7070000171661377z"})),t("g",{className:"arrow-2"},t("path",{fill:"url(#speedRampGradient)",d:"M-0.7070000171661377,-2.7070000171661377 C-0.3160000145435333,-3.0980000495910645 0.3160000145435333,-3.0980000495910645 0.7070000171661377,-2.7070000171661377 C0.7070000171661377,-2.7070000171661377 4.706999778747559,1.2929999828338623 4.706999778747559,1.2929999828338623 C5.0980000495910645,1.684000015258789 5.0980000495910645,2.315999984741211 4.706999778747559,2.7070000171661377 C4.315999984741211,3.0980000495910645 3.684000015258789,3.0980000495910645 3.2929999828338623,2.7070000171661377 C3.2929999828338623,2.7070000171661377 0,-0.5860000252723694 0,-0.5860000252723694 C0,-0.5860000252723694 -3.2929999828338623,2.7070000171661377 -3.2929999828338623,2.7070000171661377 C-3.684000015258789,3.0980000495910645 -4.315999984741211,3.0980000495910645 -4.706999778747559,2.7070000171661377 C-5.0980000495910645,2.315999984741211 -5.0980000495910645,1.684000015258789 -4.706999778747559,1.2929999828338623 C-4.706999778747559,1.2929999828338623 -0.7070000171661377,-2.7070000171661377 -0.7070000171661377,-2.7070000171661377z"}))),t("style",null,`
          .arrow-1 {
            transform: translate(7px, 4.992px);
            opacity: 0;
            animation: fadeInUp 1.017s cubic-bezier(0.34, 1, 0.14, 1) forwards;
            will-change: transform, opacity;
          }
          
          .arrow-2 {
            transform: translate(7px, 11.008px);
            opacity: 0;
            animation: fadeInUpDelayed 1.017s cubic-bezier(0.34, 1, 0.14, 1) forwards ;
            will-change: transform, opacity;
          }
          
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translate(7px, 14.492px);
            }
            24.6% {
              opacity: 0;
              transform: translate(7px, 14.492px);
            }
            41% {
              opacity: 1;
              transform: translate(7px, 4.992px);
            }
            100% {
              opacity: 1;
              transform: translate(7px, 4.992px);
            }
          }
          
          @keyframes fadeInUpDelayed {
            0% {
              opacity: 0;
              transform: translate(7px, 14.492px);
            }
            16.4% {
              opacity: 0;
              transform: translate(7px, 14.492px);
            }
            57.4% {
              opacity: 1;
              transform: translate(7px, 11.008px);
            }
            100% {
              opacity: 1;
              transform: translate(7px, 11.008px);
            }
          }
        `)),H1=o=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 17",width:"10px",height:"12px",preserveAspectRatio:"xMidYMid meet",style:{transform:"translate3d(0px, 0px, 0px)"},...o},t("defs",null,t("clipPath",{id:"__lottie_element_2"},t("rect",{width:"14",height:"17",x:"0",y:"0"})),t("radialGradient",{id:"__lottie_element_6",spreadMethod:"pad",gradientUnits:"userSpaceOnUse",cx:"-4.809000015258789",cy:"-0.949999988079071",r:"10.190258807587085",fx:"-4.809000015258789",fy:"-0.949999988079071"},t("stop",{offset:"0%",stopColor:"rgb(234,106,255)"}),t("stop",{offset:"50%",stopColor:"rgb(171,113,253)"}),t("stop",{offset:"100%",stopColor:"rgb(107,120,252)"})),t("radialGradient",{id:"__lottie_element_10",spreadMethod:"pad",gradientUnits:"userSpaceOnUse",cx:"-4.809000015258789",cy:"-0.949999988079071",r:"10.190258807587085",fx:"-4.809000015258789",fy:"-0.949999988079071"},t("stop",{offset:"0%",stopColor:"rgb(234,106,255)"}),t("stop",{offset:"50%",stopColor:"rgb(171,113,253)"}),t("stop",{offset:"100%",stopColor:"rgb(107,120,252)"}))),t("g",{clipPath:"url(#__lottie_element_2)"},t("g",{style:{display:"block"},transform:"matrix(1,0,0,1,7,4.992006301879883)",opacity:"0.9999964252267889"},t("g",{opacity:"1",transform:"matrix(1,0,0,1,0,0)"},t("path",{fill:"url(#__lottie_element_10)",fillOpacity:"1",d:" M-0.7070000171661377,-2.7070000171661377 C-0.3160000145435333,-3.0980000495910645 0.3160000145435333,-3.0980000495910645 0.7070000171661377,-2.7070000171661377 C0.7070000171661377,-2.7070000171661377 4.706999778747559,1.2929999828338623 4.706999778747559,1.2929999828338623 C5.0980000495910645,1.684000015258789 5.0980000495910645,2.315999984741211 4.706999778747559,2.7070000171661377 C4.315999984741211,3.0980000495910645 3.684000015258789,3.0980000495910645 3.2929999828338623,2.7070000171661377 C3.2929999828338623,2.7070000171661377 0,-0.5860000252723694 0,-0.5860000252723694 C0,-0.5860000252723694 -3.2929999828338623,2.7070000171661377 -3.2929999828338623,2.7070000171661377 C-3.684000015258789,3.0980000495910645 -4.315999984741211,3.0980000495910645 -4.706999778747559,2.7070000171661377 C-5.0980000495910645,2.315999984741211 -5.0980000495910645,1.684000015258789 -4.706999778747559,1.2929999828338623 C-4.706999778747559,1.2929999828338623 -0.7070000171661377,-2.7070000171661377 -0.7070000171661377,-2.7070000171661377z"}))),t("g",{style:{display:"block"},transform:"matrix(1,0,0,1,7,11.008002281188965)",opacity:"0.9999971755766903"},t("g",{opacity:"1",transform:"matrix(1,0,0,1,0,0)"},t("path",{fill:"url(#__lottie_element_6)",fillOpacity:"1",d:" M-0.7070000171661377,-2.7070000171661377 C-0.3160000145435333,-3.0980000495910645 0.3160000145435333,-3.0980000495910645 0.7070000171661377,-2.7070000171661377 C0.7070000171661377,-2.7070000171661377 4.706999778747559,1.2929999828338623 4.706999778747559,1.2929999828338623 C5.0980000495910645,1.684000015258789 5.0980000495910645,2.315999984741211 4.706999778747559,2.7070000171661377 C4.315999984741211,3.0980000495910645 3.684000015258789,3.0980000495910645 3.2929999828338623,2.7070000171661377 C3.2929999828338623,2.7070000171661377 0,-0.5860000252723694 0,-0.5860000252723694 C0,-0.5860000252723694 -3.2929999828338623,2.7070000171661377 -3.2929999828338623,2.7070000171661377 C-3.684000015258789,3.0980000495910645 -4.315999984741211,3.0980000495910645 -4.706999778747559,2.7070000171661377 C-5.0980000495910645,2.315999984741211 -5.0980000495910645,1.684000015258789 -4.706999778747559,1.2929999828338623 C-4.706999778747559,1.2929999828338623 -0.7070000171661377,-2.7070000171661377 -0.7070000171661377,-2.7070000171661377z"})))));var Er=f.div`
  width: 10px;
  height: 12px;
  position: absolute;
  right: 0px;
  top: -4px;
`,ti=()=>{let{showSpeedRampAnimation:o}=J1();return t(Er,null,o?t(Q1,null):t(H1,null))};i();e();var mi=h(y());i();e();var wr=f(pt)`
  position: absolute;
  top: ${dt().SECONDARY_SECTION_OFFSET}px;
  ${({showOnRight:o})=>o?`left: ${q}px`:`right: ${q}px`};
  background: ${C["bg-prim-w-100"]};
  box-shadow: 0px 4px 24px 0 #00000029;
  border-radius: 20px;
  width: 232px;
`,Ir=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 16px;
`,Tr=f.div`
  width: 100%;
  background: ${C["brdr-prim-10-80"]};
  height: 1px;
  margin: 12px 0;
`,Ft={Wrapper:wr,Content:Ir,Divider:Tr};i();e();i();e();var ei=h(Go());var Gt=h(y());var oi=.5,Lr=4.5,It=()=>{let o=S(p=>p.playbackSpeed),r=Ct(),n=(0,Gt.useMemo)(()=>r&&nt(r)&&r.status!=="expired"?Lr:Do,[r]),s=(0,Gt.useCallback)((0,ei.default)(p=>Uo(p,n),500),[n]);return{updatePlaybackSpeed:(0,Gt.useCallback)(p=>{let l=ko(oi,n,p);E.setPlaybackSpeed(l),s(l)},[n]),maxSpeed:n,minSpeed:oi,playbackSpeed:o}};var si=h(y());i();e();var ii=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M8.79995 3.99922C8.79995 3.55739 8.44178 3.19922 7.99995 3.19922C7.55812 3.19922 7.19995 3.55739 7.19995 3.99922V7.19922L3.99995 7.19922C3.55812 7.19922 3.19995 7.55739 3.19995 7.99922C3.19995 8.44105 3.55812 8.79922 3.99995 8.79922H7.19995V11.9992C7.19995 12.441 7.55812 12.7992 7.99995 12.7992C8.44178 12.7992 8.79995 12.441 8.79995 11.9992V8.79922H12C12.4418 8.79922 12.8 8.44105 12.8 7.99922C12.8 7.55739 12.4418 7.19922 12 7.19922L8.79995 7.19922V3.99922Z",fill:"currentColor"})),ri=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M3.99995 7.19922C3.55812 7.19922 3.19995 7.55739 3.19995 7.99922C3.19995 8.44105 3.55812 8.79922 3.99995 8.79922L12 8.79922C12.4418 8.79922 12.8 8.44105 12.8 7.99922C12.8 7.55739 12.4418 7.19922 12 7.19922H3.99995Z",fill:"currentColor"})),ni=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("g",{opacity:"0.5"},t("path",{d:"M9.23157 5.76843C9.23157 6.44861 8.68018 7 8 7C7.31982 7 6.76843 6.44861 6.76843 5.76843C6.76843 5.08826 7.31982 4.53687 8 4.53687C8.68018 4.53687 9.23157 5.08826 9.23157 5.76843Z",fill:C["icn-txt-tert"]}),t("path",{d:"M8.8 8.58838C8.8 8.14655 8.44183 7.78838 8 7.78838C7.55817 7.78838 7.2 8.14655 7.2 8.58838L7.2 11C7.2 11.4418 7.55817 11.8 8 11.8C8.44183 11.8 8.8 11.4418 8.8 11V8.58838Z",fill:C["icn-txt-tert"]}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 13.4C10.9823 13.4 13.4 10.9823 13.4 8C13.4 5.01766 10.9823 2.6 8 2.6C5.01766 2.6 2.6 5.01766 2.6 8C2.6 10.9823 5.01766 13.4 8 13.4Z",fill:C["icn-txt-tert"]})));var Rr=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Mr=f.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
`,ai=()=>{let{autoSpeedUp:o}=qt(),{playbackSpeed:r,maxSpeed:n}=It(),s=r>=n,m=(0,si.useMemo)(()=>{if(s)return"You reached your speed limit";let l=Ce(r);return t(a,null,"Speed up as you go",t("br",null),"every ",l," words")},[r,s]),p=l=>{l?.stopPropagation(),Wo(!o)};return t(Rr,null,t(Mr,{onClick:p},t(Le,{disabled:s,checked:o,onChange:()=>p()}),t(J,{font:"subheading-6"},"Increase automatically")),t(w,{text:m,isOnTop:!0},t(ni,null)))};i();e();var Vr=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
`,li=()=>{let{maxSpeed:o,minSpeed:r,updatePlaybackSpeed:n,playbackSpeed:s}=It(),m=po(!1);return t(Vr,null,t(At,{style:{width:32},disabled:s<=r,onClick:()=>n(s-.05)},t(ri,null)),t(J,{font:"heading-3"},m),t(At,{style:{width:32},disabled:s>=o,onClick:()=>n(s+.05)},t(ii,null)))};i();e();var Ar=[.8,1,1.2,1.5,2,2.5],kr=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,ci=()=>{let{updatePlaybackSpeed:o}=It();return t(kr,null,Ar.map(r=>t(At,{key:`speed-picker-${r}`,onClick:()=>o(r)},Mo(r))))};i();e();var Dr=f.div`
  width: 20px;
  height: 20px;
`,_r=f.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`,pi=({onClose:o})=>t(_r,null,t(Dr,null),t(J,{font:"heading-5"},"Speed"),t(zt,{onClick:o}));var di=({buttonRef:o})=>{let r=S(p=>p.showOnRight),n=S(p=>p.isSpeedPickerOpen),s=(0,mi.useRef)(null),m=()=>{E.setIsSpeedPickerOpen(!1)};return Jt([s,o],m),t(Ft.Wrapper,{showOnRight:r,ref:s,isOpen:n},t(pi,{onClose:m}),t(Ft.Content,null,t(li,null),t(Ft.Divider,null),t(ci,null),t(Ft.Divider,null),t(ai,null)))};var Br=f(I)`
  font-family: 'system-ui';
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
`,Ci=()=>{let o=H(),r=S(d=>d.portalPlaceholderElement),{autoSpeedUp:n}=qt(),s=po(),m=(0,ui.useRef)(null),p=S(d=>d.isSpeedPickerOpen),l=()=>{E.cleanupAllSidePlayerPopups(),D("extension_usage_speed_controller_opened",{source:"side_player"}),p||E.setIsSpeedPickerOpen(!0)};return t(a,null,t(w,{text:"Change Speed",style:{position:"relative"}},t(Br,{"aria-label":R("PLAYBACK_SPEED_MENU_BUTTON"),"data-testid":v.PLAYBACK_SPEED_MENU_BUTTON,icon:s,onClick:l,ref:m,active:p||o==="speed"}),n&&t(ti,null)),(0,fi.createPortal)(t(di,{buttonRef:m}),r))};i();e();var uo=h(y()),Pi=h(y());i();e();i();e();var Si=o=>t("svg",{viewBox:"0 0 20 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...o},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.29194 12.3983C2.11916 11.5946 3.24111 11.1431 4.41097 11.1431H11.4685C12.6384 11.1431 13.7603 11.5946 14.5875 12.3983C15.4148 13.202 15.8795 14.2921 15.8795 15.4287V17.143C15.8795 17.6164 15.4845 18.0001 14.9973 18.0001C14.5101 18.0001 14.1151 17.6164 14.1151 17.143V15.4287C14.1151 14.7467 13.8363 14.0927 13.3399 13.6105C12.8436 13.1282 12.1704 12.8573 11.4685 12.8573H4.41097C3.70905 12.8573 3.03588 13.1282 2.53955 13.6105C2.04322 14.0927 1.76439 14.7467 1.76439 15.4287V17.143C1.76439 17.6164 1.36942 18.0001 0.882194 18.0001C0.394972 18.0001 0 17.6164 0 17.143V15.4287C0 14.2921 0.464726 13.202 1.29194 12.3983Z"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.93831 2.57241C6.47665 2.57241 5.29173 3.72366 5.29173 5.1438C5.29173 6.56394 6.47665 7.71519 7.93831 7.71519C9.39998 7.71519 10.5849 6.56394 10.5849 5.1438C10.5849 3.72366 9.39998 2.57241 7.93831 2.57241ZM3.52734 5.1438C3.52734 2.7769 5.5022 0.858154 7.93831 0.858154C10.3744 0.858154 12.3493 2.7769 12.3493 5.1438C12.3493 7.5107 10.3744 9.42945 7.93831 9.42945C5.5022 9.42945 3.52734 7.5107 3.52734 5.1438Z"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9655 1.50193C14.3101 1.16725 14.8687 1.16734 15.2131 1.50212C15.9715 2.23918 16.3976 3.23872 16.3976 4.28093C16.3976 5.32314 15.9715 6.32268 15.2131 7.05975C14.8687 7.39453 14.3101 7.39461 13.9655 7.05993C13.6209 6.72525 13.6209 6.18255 13.9653 5.84777C14.3929 5.43217 14.6332 4.86858 14.6332 4.28093C14.6332 3.69328 14.3929 3.12969 13.9653 2.7141C13.6209 2.37932 13.6209 1.83661 13.9655 1.50193Z"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0202 0.250956C17.3648 -0.0837235 17.9233 -0.0836416 18.2678 0.251139C19.3771 1.32923 20.0003 2.79123 20.0003 4.31565C20.0003 5.84007 19.3771 7.30207 18.2678 8.38016C17.9233 8.71494 17.3648 8.71502 17.0202 8.38034C16.6756 8.04566 16.6755 7.50296 17.02 7.16818C17.7985 6.41156 18.2359 5.38551 18.2359 4.31565C18.2359 3.24579 17.7985 2.21974 17.02 1.46312C16.6755 1.12834 16.6756 0.585636 17.0202 0.250956Z"}));var Or=f(ao)`
  color: ${C["sf-crit"]};
`,gi=()=>{let o=jo();return S(n=>n.hasClientVoices)?o&&o.avatarImage?t(te,{alt:"Selected Voice",flag:o.avatarImage,variant:"circle"}):t(Si,null):t(Or,null)};i();e();var mo=h(y());i();e();var B=h(y());var hi=({children:o,onClose:r})=>{let[n,s]=(0,B.useState)(!1),[m,p]=(0,B.useState)(!0),[l,d]=(0,B.useState)(!1),[u,g]=(0,B.useState)(null);(0,B.useEffect)(()=>{let A=new AbortController;return Promise.all([j("/auth/get-user"),j("/auth/get-cached-subscription")]).then(([O,k])=>{if(A.signal.aborted)return;let et=O?.user,Vo=!!et&&!et?.isAnonymous&&!!et?.email;s(Vo),d(k?.subscription?.isPremium??!1),Vo&&et&&g({displayName:et.displayName??null,email:et.email??null,photoURL:et.photoURL??null})}).catch(()=>{}).finally(()=>{A.signal.aborted||p(!1)}),()=>{A.abort()}},[]);let x=(0,B.useCallback)(A=>{(A==="../"||A==="..")&&r()},[r]),P=(0,B.useCallback)(A=>{window.open(A,"_blank")},[]),b=(0,B.useCallback)(()=>{let A=new URLSearchParams({extensionId:c.runtime.id,source:"side_player_voice_picker_upgrade"});P(`https://speechify.com/onboarding/sso/?${A.toString()}`)},[P]),G=(0,B.useMemo)(()=>({navigate:x,goBack:r,canGoBack:!0,domain:null,tabUrl:window.location.href,favIconUrl:null,tabId:void 0,isAuthenticated:n,isLoading:m,isPremium:l,user:u,fetch:j,canTriggerScreenshotMode:!1,triggerScreenshotMode:()=>{},openExternalUrl:P,openUpgrade:b,appBaseUrl:"https://app.speechify.com",themePreference:"auto",applyTheme:()=>{},highlightColorKey:"default",setHighlightColor:()=>{},playbackDuration:null,isPlaybackActive:xo,onCloseSettings:r}),[x,r,n,m,l,u,P,xo]);return t(Ve,{value:G},o)};var yi=({buttonRef:o})=>{let r=S(p=>p.showOnRight),n=S(p=>p.isVoicePickerOpen),s=(0,mo.useRef)(null),m=(0,mo.useCallback)(()=>{E.setIsVoicePickerOpen(!1)},[]);return Jt([s,o],m),t(Nr,{showOnRight:r,ref:s,isOpen:n},t(hi,{onClose:m},t(Ae,null)))},Nr=f(pt)`
  position: absolute;
  top: ${dt().TOP}px;
  ${({showOnRight:o})=>o?`left: ${q}px`:`right: ${q}px`};
  background: ${C["bg-prim-w-100"]};
  box-shadow: 0px 4px 24px 0 #00000029;
  border-radius: 20px;
  width: 360px;
  height: 540px;
  max-height: calc(100vh - 120px);
  overflow: hidden;
`;var Fr=f.button`
  ${X};

  position: relative;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  background: unset !important;

  img {
    width: 20px;
    height: 20px;
    background: ${C["bg-tert-10-80"]};
    transition: background 0.5s cubic-bezier(0.14, 1, 0.34, 1);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &:has(svg) {
    &:hover {
      color: ${C["icn-txt-prim-electric"]};
    }
  }

  &:hover {
    img {
      background: ${C["icn-txt-prim-electric"]};
    }
  }

  ${({active:o})=>o?`
    &:has(svg) {
        color: ${C["icn-txt-prim-electric"]};
    }

    img {
      background: ${C["icn-txt-prim-electric"]};
    }
  `:""}
`,xi=()=>{let o=H(),r=Ct(),n=S(P=>P.hasSidepanel),s=S(P=>P.hasClientVoices),m=S(P=>P.isVoicePickerOpen),p=S(P=>P.portalPlaceholderElement),l=!!r&&nt(r),d=(0,uo.useRef)(null),u=!s&&!l,g=n?o==="voices":m,x=(0,uo.useCallback)(()=>{if(n){if(o==="voices")return Dt();D("extension_usage_voice_opened",{source:"side_player"}),to("/settings/voice").catch(()=>{});return}E.cleanupAllSidePlayerPopups(),D("extension_usage_voice_opened",{source:"side_player"}),m||E.setIsVoicePickerOpen(!0)},[n,o,m]);return t(a,null,t(w,{text:u?"No Free Voices":"Change Voice"},t(Fr,{active:g,"aria-label":R("VOICE_MENU_BUTTON"),"data-testid":v.VOICE_MENU_BUTTON,onClick:x,ref:d},t(gi,null),t(Ht,null))),!n&&p&&(0,Pi.createPortal)(t(yi,{buttonRef:d}),p))};var bi=({isHover:o})=>{let{height:r,showDictationSection:n,showPlaybackSection:s}=Et(),[m,p]=(0,$t.useState)(!1),l=S(O=>O.isSpeedPickerOpen),d=S(O=>O.isVoicePickerOpen),u=Xt(O=>O.isOpen),g=T.usePlayingState(),{current:x}=Wt(),P=g==="playing"||g==="buffering";(0,$t.useEffect)(()=>{P&&E.setHasPlayed(!0)},[P]),(0,$t.useEffect)(()=>{let O;return o?p(!0):O=window.setTimeout(()=>p(!1),2e3),()=>clearTimeout(O)},[o]);let b=l||d||u,G=x?.id==="gdocs-onboarding-skip-sentences",A=(m||b||G)&&s;return t(vt,{isVisible:n||A,height:r},n?t(a,null,t(G1,null),t(U1,null)):A&&t(a,null,t(z1,null),t(j1,null),t(xi,null),t(Ci,null),t(co,null)))};i();e();var Gr=f.div`
  transition: all 0.5s cubic-bezier(0.14, 1, 0.34, 1);

  button {
    color: ${({isDarkMode:o})=>N({isDarkMode:o,color:"icn-txt-tert"})};

    &:hover {
      color: ${({isDarkMode:o})=>N({isDarkMode:o,color:"icn-txt-prim-electric"})};
    }
  }

  ${({visible:o})=>o?"opacity: 1; transition: all 0.5s cubic-bezier(0.14, 1, 0.34, 1);":"opacity: 0; transition: all 0.15s cubic-bezier(0.14, 1, 0.34, 1);"};
`,vi=({visible:o})=>{let r=V(),{showDictationSection:n,showPlaybackSection:s}=Et();return n||s?null:t(Gr,{visible:o,isDarkMode:r},t(co,{buttonProps:{style:{width:"20px",height:"20px"}}}))};i();e();var Tt=h(y());var Ei=()=>{let o=(0,Tt.useRef)(void 0);(0,Tt.useEffect)(()=>{(async()=>{let{playbackSpeed:n}=await j("/user-settings/get");o.current=n,E.setPlaybackSpeed(n)})()},[]),(0,Tt.useLayoutEffect)(()=>{let r=st.on("update",n=>{n.playbackSpeed!==o.current&&(E.setPlaybackSpeed(n.playbackSpeed),o.current=n.playbackSpeed)});return()=>{r()}},[])};i();e();var fo=h(y());var wi=()=>{let o=Ct(),r=T.useTime(),n=T.usePlayingState(),s=!r.isLoading&&r.totalEstimatedDuration>0,m=n==="playing"||n==="buffering",p=(0,fo.useMemo)(()=>o?o.status==="expired"||!nt(o):!1,[o]);(0,fo.useEffect)(()=>{let l=new AbortController;return p&&(async()=>{let u=await Zo();if(!l.signal.aborted&&(S.setState({hasClientVoices:u}),!u&&s&&!m)){if((await Oe("no-client-voices")).dismissedByUser)return;Jo(),D("extension_no_client_voices_notification_shown",{action:"open"})}})(),()=>l.abort()},[p,s,m])};i();e();i();e();var Ii=h(y());var Ti=o=>{(0,Ii.useEffect)(()=>{let r=()=>{it.show({id:"introduce-ai-autoplay",render:()=>t(Ee,null)}),D("extension_usage_new_user_eduction_prompt_shown",{prompt:"introduce-ai-autoplay"})};o==="introduce-ai-autoplay"&&r()},[o])};i();e();var Co=h(y());var Li=()=>{let o=mt(),r=St(),n=Z(g=>g.hover.playButton),s=Z(g=>g.hover.popupArea),m=Z(g=>g.activePopup?.id),p=Z(g=>g.phase),l=(0,Co.useRef)(),d=m==="inline-player-first-time-popup"&&p!=="idle",u=o&&r&&(n||s&&d);(0,Co.useEffect)(()=>(u?(clearTimeout(l.current),it.show({id:"inline-player-first-time-popup",render:()=>t(we,null)})):l.current=window.setTimeout(()=>{it.dismiss("inline-player-first-time-popup")},500),()=>{clearTimeout(l.current)}),[u])};var Ri=o=>{Te(),Li(),Ti(o),Ie()};i();e();var Mi=h(Ni()),Lt=h(y());var So=12,$r=144,Vi=o=>{let{initialized:r}=zo(),n=S(d=>d.hasPlayed),[s,m]=(0,Lt.useState)(!1),p=(0,Lt.useRef)(),{showPlaybackSection:l}=Et();return(0,Lt.useEffect)(()=>{if(!o||!r)return;let d=(0,Mi.default)(u=>{kt.onMouseMove();let{clientX:g,clientY:x}=u,P=o.getBoundingClientRect();(!n||!p.current)&&(p.current=P.height),m(g>=P.left-So&&g<=P.right+So&&x>=P.top-So&&x<=P.top+(l?p.current||0:P.height)+So+(l?$r:0))},16);return document.addEventListener("mousemove",d),()=>document.removeEventListener("mousemove",d)},[o,l,n,r]),{isHover:s}};i();e();var Ai=h(Go()),Rt=h(y());var ki=o=>{let{current:r}=Wt(),n=Z(u=>u.phase),s=S(u=>u.isSpeedPickerOpen),m=S(u=>u.isDictationPopupActive),l=!s&&!m&&!(n!=="idle"||!!r),d=(0,Rt.useCallback)(u=>{S.setState({showOnRight:u.left<window.innerWidth/2})},[]);return(0,Rt.useEffect)(()=>{if(!l){o.style.cursor="default";return}o.style.cursor="move";let u=ye(o,{onDrag:d});return()=>u()},[o,l]),(0,Rt.useEffect)(()=>{let u=(0,Ai.default)(async()=>{let{right:x,top:P}=o.style;at("sidePlayerPosition",{x:parseInt(x),y:parseInt(P)})},500),g=new MutationObserver(u);return g.observe(o,{attributes:!0,attributeFilter:["style"]}),()=>g.disconnect()},[o]),(0,Rt.useEffect)(()=>{let u=async()=>{document.hidden||st.once("update",({sidePlayerPosition:g})=>{g&&(o.style.top=`${g.y}px`,o.style.right=`${g.x}px`)})};return document.addEventListener("visibilitychange",u),()=>{document.removeEventListener("visibilitychange",u)}},[o]),{isDraggingEnabled:l}};i();e();var go=h(y());var Di=()=>{let o=(0,go.useMemo)(()=>De(),[window.location.host]);(0,go.useEffect)(()=>{(async()=>{let{icon:n}=await j("/helpers/get-domain-icon",{domain:o});n&&E.setHostIcon(n)})()},[o])};var Zr=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 28px;
  visibility: ${({isVisible:o})=>o?"visible":"hidden"};
  cursor: ${({isDraggingEnabled:o})=>o?"move":"default"};
  position: relative;
`,_i=({root:o,triggerSource:r})=>{let n=(0,ho.useRef)(null),{isHover:s}=Vi(n.current);Ei(),Di(),wi(),Ri(r),pe();let m=(0,ho.useMemo)(()=>Oo({key:"player-emotion-cache",container:o}),[o]),{isDraggingEnabled:p}=ki(o),{isScreenshotModeOnly:l,isInScreenshotMode:d}=K(),u=Z(b=>b.activePopup?.id),g=Z(b=>b.phase),x=u==="hide-extension-popup"&&g!=="idle",P=l||d;return t(No,{value:m},t(ve,null,t("div",{ref:b=>b&&E.setPortalPlaceholderElement(b)}),t(Zr,{ref:n,"data-testid":v.SIDE_PLAYER,isVisible:!x,isDraggingEnabled:p},t(We,null),t(L1,null),t(bi,{isHover:s}),P&&t(D1,null),t(vi,{visible:s}),t(Ge,{visible:s})),t(Ho,null)))};var xc=()=>eo(),Ur=async({isPDF:o}={},r,n,s,m)=>{if(ke.getIsHidden())return;if(!await ie())return Bi;if(m?.aborted)return;let l=await ee();E.setHasSidepanel(l),Mt.acquireShadow(Vt,{hostStyles:"position: absolute; bottom: 0; right: 0;"}),Mt.destroyRoot(Vt);let d=document.createElement("div");return await Ne(d),E.setIsPDF(o||!1),Ao(t(_i,{root:d,triggerSource:r}),d),Mt.mountRoot(Vt,Yo,d,{deferMs:100,abortSignal:m,onMounted:()=>{vo.getState().setVisible(!0)}}),Se(),await Eo("feedback-form"),bo(),()=>{Bi()}},Bi=()=>{Mt.destroyRoot(Vt),vo.getState().setVisible(!1),bo(),Eo(),it.reset()},bc=Ur;export{bc as default,Bi as destroySidePlayer,xc as getIsChatButtonHidden};
//# sourceMappingURL=init-QRC66MPV.js.map
