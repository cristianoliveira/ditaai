(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as k}from"./chunk-MX4B3ZXQ.js";import{a as K}from"./chunk-VHR3YMWS.js";import{$c as F,$g as N,Ag as z,Dg as j,Lc as W,Mc as P,Mg as Z,Nd as I,Rc as C,Wd as $,Yc as y,ac as U,ah as J,bg as Y,cg as X,dd as m,dg as _,ec as L,eg as R,kd as b,md as p,od as M,og as S,vd as G,wd as V,wg as q,xd as O}from"./chunk-324T2OUF.js";import{ba as a,i as s,n as l,s as B}from"./chunk-KJ3NFIHV.js";import{g as E}from"./chunk-H3LCZSHS.js";import{d as g,g as e,i as o,n}from"./chunk-CAO5DZGK.js";n();e();n();e();var H=g(E());n();e();var Q=()=>{let t=P.useCurrentContent(),i=P.useTime();return{noTextDetected:!!t&&i.isLoading===!1&&i.totalEstimatedDuration<=0}};var oo=()=>{let t=O(v=>v.isPDF),{noTextDetected:i}=Q(),{docTitle:r}=K(),c=P.useTime(),u=P.usePlayingState(),f=u==="playing"||u==="buffering";return(0,H.useMemo)(()=>t||z()?!0:j()?!1:!(c.totalEstimatedDuration>0)&&(!r||i&&!f),[c,i,r,t,f])};var co=["docs-support","google-drive-support","individual-posts-player","kindle-support","gmail-support"],uo=()=>{let t=U();return co.some(i=>{let r=t[i];return r&&r.status==="active"})},to=()=>{let{screenshotMode:t}=L();return{isScreenshotModeOnly:oo()&&(!uo()||Z()),isInScreenshotMode:!!t?.isDraggable}};n();e();var w=g(E()),fo=()=>{let{updateAvailable:t}=_();return o(m,{width:230,title:"New Version Available",onClose:()=>{t&&(C("extension_update_dismissed",{version:t.version,critical:t.critical}),X(t.version)),p.dismiss("new-version-popup")}},o(a,{font:"body-5",style:{marginTop:"8px"}},"Update to get the latest features and improvements."),o(y,{size:"small",onClick:()=>{t&&(C("extension_update_clicked",{version:t.version,critical:t.critical}),Y())},style:{width:"100%",marginTop:"12px"}},"Update"))},st=()=>{let t=(0,w.useRef)(!1),{isInScreenshotMode:i}=to(),{updateAvailable:r,isLoading:c,isDismissed:u}=_(),f=!c&&!!r&&!u&&!i;(0,w.useEffect)(()=>{if(f&&!t.current){t.current=!0,p.show({id:"new-version-popup",render:()=>o(fo,null)});return}!f&&t.current&&(t.current=!1,p.dismiss("new-version-popup"))},[f])};n();e();var no=g(E()),ho=()=>o(m,{width:220,title:"Can't Play Audio",onClose:()=>p.dismiss("player-error")},o(a,{font:"body-5",style:{marginTop:"8px"}},"The audio couldn't load.",o("br",null),"Please refresh to try again."),o(y,{size:"small",onClick:()=>{window.location.reload()},style:{width:"100%",marginTop:"12px"}},"Refresh")),yt=()=>{let t=P.usePlayingState();(0,no.useEffect)(()=>{if(t!=="errored"&&p.dismiss("player-error"),!["stopped","paused"].includes(t))return()=>{P.getPlayingState()==="errored"&&p.show({id:"player-error",render:()=>o(ho,null)})}},[t])};n();e();n();e();var ro=g(E()),yo=s.div`
  display: flex;
  align-items: center;
`,Po=s.img`
  padding: 2px;
  border-radius: 4px;
  width: 12px;
  height: 12px;
`,A=({suffix:t})=>{let i=O(c=>c.hostIcon),r=(0,ro.useMemo)(()=>q(),[window.location.host]);return o(yo,null,i&&o(Po,{src:i})," ",r,t)};n();e();n();e();n();e();n();e();var io=t=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",...t},o("path",{d:"M5.65269 8.81335C5.30602 9.16001 4.74602 9.16001 4.39935 8.81335L1.20824 5.62223C0.861576 5.27557 0.861576 4.71557 1.20824 4.3689C1.55491 4.02223 2.11491 4.02223 2.46158 4.3689L5.02158 6.9289L11.1371 0.813345C11.4838 0.466678 12.0438 0.466678 12.3905 0.813345C12.7371 1.16001 12.7371 1.72001 12.3905 2.06668L5.65269 8.81335Z",fill:"currentColor"})),so=t=>o("svg",{width:"11",height:"3",viewBox:"0 0 11 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o("path",{d:"M1.5 1.5H9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}));var Co=s.div`
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,go=s.input`
  ${B};
  width: 16px;
  height: 16px;
  border-radius: 4px;
  cursor: pointer;

  background-color: transparent;
  border: 1.5px solid ${l["brdr-tert-40-50"]};

  outline: none;

  &:hover {
    border-color: ${l["brdr-blue"]};
    background-color: ${l["bg-accent"]};
  }

  &:checked {
    background-color: ${l["sf-act-electric-blue"]};
    border-color: ${l["sf-act-electric-blue"]};
  }

  &:checked:hover {
    background-color: ${l["sf-act-electric-blue"]};
  }

  &:focus-visible {
    box-shadow: none;
  }

  ${({subchecked:t})=>t&&`
      background-color: ${l["sf-act-electric-blue"]};
      border-color: ${l["sf-act-electric-blue"]};

      &:hover {
        background-color: ${l["sf-act-electric-blue"]};
      }

      &:focus-visible {
        background-color: ${l["sf-act-electric-blue"]};
      }
    `}

  &:disabled {
    opacity: 0.5;
  }
`,Eo=s(io)`
  position: absolute;
  top: 4px;
  left: 1px;
  height: 9px;
  pointer-events: none;
  color: ${l["icn-txt-prim-inv"]};
`,So=s(so)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%']};
  pointer-events: none;
  color: ${l["icn-txt-prim-inv"]};
`,x={CheckboxWrapper:Co,CheckboxInput:go,Tick:Eo,Strike:So};var po=({checked:t,onChange:i,subchecked:r,"data-testid":c,...u})=>o(x.CheckboxWrapper,null,o(x.CheckboxInput,{"data-testid":c,type:"checkbox",checked:t,subchecked:r,onClick:f=>f.stopPropagation(),onChange:i,...u}),t?o(x.Tick,null):r?o(x.Strike,null):null);var ao=g(E());var To=s.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,xo=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bo=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  cursor: pointer;
`,Oo=()=>{let[t,i]=(0,ao.useState)(!1),r=()=>{t&&R.setShouldSkipEnableBackPopup(!0),N("enable-back-popup")},c=async()=>{r(),S.showExtension()};return o(M,{position:"top-right"},o(m,{width:288,onClose:r},o(xo,null,o(a,{font:"subheading-5"},o("div",null,"The extension is now turned off for"),o(A,null)),o(a,{font:"body-6",color:"icn-txt-sec"},"Speechify will stay disabled on this site until you enable it from the toolbar or use a shortcut.")),o(bo,{onClick:()=>i(u=>!u)},o(po,{checked:t,onChange:()=>i(u=>!u),"data-testid":F.ENABLE_BACK_DONT_SHOW_AGAIN}),o(a,{font:"body-6"},"Don't show this again")),o(To,null,o(y,{onClick:c},"Enable Now"),o(k,{onClick:r},"Got It"))))},D=async()=>{await R.getShouldSkipEnableBackPopup()||(await N("enable-back-popup"),J({id:"enable-back-popup",priority:151,showOnMobile:!1,timeSensitive:!1,redesigned:!0,render:()=>o(Oo,null),global:!0}))};var Io=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`,ko=()=>{let t=()=>{p.dismiss("hide-extension-popup")};return o(m,{width:240,onClose:t},o(a,{font:"subheading-5"},o("div",null,"Turn off Speechify for"),o(A,{suffix:"?"})),o(Io,null,o(b,{onClick:()=>{p.dismiss("hide-extension-popup"),S.hideExtension(!0),D()}},"Yes, for this session"),o(b,{onClick:async()=>{let c=window.location.hostname,u=window.location.pathname;p.dismiss("hide-extension-popup"),await S.hideExtension(),C("extension_pill_player_dismissed",{type:"domain",domain:c,pathname:u}),D()}},"Yes, from now on"),o(b,{onClick:t},"No, don't turn it off")))},he=()=>{p.show({id:"hide-extension-popup",render:()=>o(ko,null),horizontalAdjustment:0,alwaysOnTop:!0})};n();e();var lo=()=>{let t=()=>{I("SKIP_CHATS_POPUP",!0),p.dismiss("introduce-ai-button")};return o(m,{width:272,onClose:t,title:"Listen to Responses"},o(a,{font:"body-5",style:{marginTop:"8px"}},"Play and Pause any response in your chat by clicking the button."),o(y,{style:{marginTop:"12px",width:"100%"},size:"small",onClick:t},"OK, Got it"))};n();e();var wo=s.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,Ge=()=>{let t=f=>{p.dismiss("introduce-ai-autoplay"),C("extension_usage_new_user_education_prompt_interacted",{prompt:"introduce-ai-autoplay",action:f})},i=()=>{t("close")},r=f=>{I("SHOULD_SHOW_AUTOPLAY",f)};return o(m,{width:272,onClose:i,title:"Autoplay Responses"},o(a,{font:"body-5",style:{marginTop:"8px"}},"Speechify can automatically read out chat responses as soon as they're generated."),o(wo,null,o(y,{onClick:()=>{r(!0),setTimeout(()=>{W.play(),t("turn-on")},500)}},"Turn On Autoplay"),o(k,{onClick:async()=>{r(!1),!1||p.show({id:"introduce-ai-button",render:()=>o(lo,null)}),t("keep-off")}},"Keep Off")))};n();e();var mo=g(E());var Ao=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Je=()=>{let t=(0,mo.useMemo)(()=>G(),[]);if(!t)return null;let{description:i,videoSrc:r}=t;return o(m,{width:312,onClose:V,showHeader:!1},o(Ao,null,o(a,{font:"body-5"},i),o($,{src:r,style:{border:`1px solid ${l["brdr-prim-10-80"]}`},autoPlay:!0,muted:!0,replayDelay:2e3})))};export{lo as a,Ge as b,Je as c,oo as d,to as e,fo as f,st as g,ho as h,yt as i,po as j,D as k,he as l};
//# sourceMappingURL=chunk-QUDRWGSM.js.map
