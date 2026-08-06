(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as Mr}from"./chunk-CC6NY6VZ.js";import{a as Lr}from"./chunk-5FX45FLC.js";import{a as Lt}from"./chunk-SIYTHBJW.js";import"./chunk-3NSPD6E4.js";import{a as $r}from"./chunk-AITVU6KW.js";import{a as No,b as Ao,c as Dr,d as Mt,e as to,f as Ur,g as Fr}from"./chunk-MMYKA6XZ.js";import{b as kr}from"./chunk-AXUCRUBY.js";import"./chunk-S3AZHVK7.js";import{a as Wr}from"./chunk-DR42MPFY.js";import"./chunk-QFGIV4B7.js";import{c as _r}from"./chunk-L6KF6DLO.js";import{a as lt}from"./chunk-MX4B3ZXQ.js";import{a as nt,d as Ar}from"./chunk-VHR3YMWS.js";import"./chunk-SP7JKGLV.js";import"./chunk-4JXL3YI4.js";import"./chunk-VBM62247.js";import{c as Rt}from"./chunk-RERBL2EJ.js";import"./chunk-SJAKNTE2.js";import{a as pr}from"./chunk-DGL3OLHJ.js";import{A as Br,C as fo,D as O,a as dr,b as fr,c as gr,d as hr,e as yr,f as Bt,g as Nt,h as At,i as D,j as rt,k as it,l as kt,m as Pr,n as Sr,o as br,p as Cr,q as xr,r as Er,s as Tr,t as Ir,u as co,v as vr,w as Or,x as _t,y as wr,z as Rr}from"./chunk-EIQQL76B.js";import{a as go}from"./chunk-4HHZO7SF.js";import"./chunk-UYXV6EG6.js";import{a as Bo,b as cr}from"./chunk-FESGJ6GY.js";import{a as Nr}from"./chunk-FFEPHFWQ.js";import"./chunk-I3KFPWHY.js";import"./chunk-WZISEHT3.js";import{a as Ne,b as Ae}from"./chunk-S3CZJONR.js";import"./chunk-WER3GEG4.js";import{a as _e,b as Le,d as Me,e as Xo,f as De,h as Ue,i as Fe,j as Zo,k as $e,l as We,m as Ve,n as Ge,o as Ye,p as ze,q as Ke,r as jo,s as qe}from"./chunk-IQTXTTBF.js";import"./chunk-VDM2FHV6.js";import{a as rr,b as ir,c as nr,d as sr,g as lr,h as ur,l as wt,m as mr}from"./chunk-ER3BBI6X.js";import{a as po}from"./chunk-436MFEND.js";import{a as ar}from"./chunk-UBYLRYAE.js";import{a as at}from"./chunk-BMN72JVI.js";import"./chunk-2MJTQY6T.js";import{$c as y,$e as Je,$g as E,Dd as ke,Dg as mt,E as ye,G as Ot,Lc as mo,M as Pe,Mc as x,Md as q,Mg as pt,Nd as X,Pd as Jo,Rc as w,Rd as Qo,Sa as Yo,Sb as Ee,Sc as A,Sd as Xe,Td as Z,Vd as Ze,Ve as ot,Wd as Ho,We as tt,Xe as et,Y as Se,Yc as zo,Yf as st,Zc as we,Zf as Vr,_b as Te,_c as b,_g as Yr,af as Qe,ah as _,b as Io,bd as Re,bg as Gr,bh as zr,cd as Be,ce as je,ch as Kr,db as wo,dg as ut,e as M,ec as oo,f as fe,fc as Ie,ff as He,g as Oo,gf as or,hc as ve,id as qo,if as tr,lf as er,ma as Go,qa as be,sb as Ce,u as he,xg as ho,yb as xe,yg as j}from"./chunk-324T2OUF.js";import{a as Vo,l as Ro,m as Oe}from"./chunk-JJ7NA4NT.js";import{a as pe,ba as z,ca as Ko,e as ce,f as de,g as vo,i as m,j as ge,l as u,m as H,p as uo,q as K}from"./chunk-KJ3NFIHV.js";import{g as v}from"./chunk-H3LCZSHS.js";import{F as me,M as To}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{b as Gn,d as I,f as d,g as r,i as o,j as p,k as ue,m as Yn,n as i}from"./chunk-CAO5DZGK.js";var ri=Gn((Al,ei)=>{i();r();function jn(){}ei.exports=jn});i();r();Yn();i();r();var S=I(v());i();r();var J=I(v()),zn=["click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","wheel"];function ct(t=zn){let[e,s]=(0,J.useState)(null),n=(0,J.useRef)(t);n.current=t;let a=(0,J.useCallback)(l=>{l.target?.className?.includes?.("react-switch-")||(l.stopPropagation(),l.stopImmediatePropagation())},[]);return(0,J.useEffect)(()=>{if(e)return n.current.forEach(l=>e.addEventListener(l,a)),()=>n.current.forEach(l=>e.removeEventListener(l,a))},[e,a]),s}i();r();var qr=I(v()),yo=t=>{let e=x.useTime(),s=x.useCurrentCursor();return(0,qr.useMemo)(()=>{if(t)return"save-only";let n=e.isLoading,a=e.totalEstimatedDuration>0,l=s?.ref?.ref,f=l&&!l?.isConnected;return a||f||n||j()?"content":"screenshot-only"},[e,s])};i();r();var Po=I(v());var Xr=t=>{let e=(0,Po.useRef)(void 0);(0,Po.useEffect)(()=>{(async()=>{let{playbackSpeed:n}=await ye("/user-settings/get");e.current=n,t(n)})()},[]),(0,Po.useLayoutEffect)(()=>{let s=Go.on("update",n=>{n.playbackSpeed!==e.current&&(t(n.playbackSpeed),e.current=n.playbackSpeed)});return()=>{s()}},[])};i();r();var Jr=I(v());i();r();function ko(){let t=()=>{X("SKIP_CHATS_POPUP",!0),E("introduce-ai-button")},e=xe(),s=!e;return o(Z,{width:272,onClose:t,isSiteDarkMode:e},o(z,{font:"subheading-4",style:{color:s?u["icn-txt-prim"]:H["icn-txt-prim"]}},"Listen to Responses"),o(z,{font:"body-5",style:{marginTop:"8px",color:s?u["icn-txt-prim"]:H["icn-txt-prim"]}},"Play and Pause any response in your chat by clicking the button."),o(we,{style:{marginTop:"12px",width:"100%"},size:"medium",onClick:t},"OK, Got it"))}i();r();var dt=I(v());var jr=Vo(()=>!1),Zr=t=>jr.setState(t);function ft(){let t=jr();(0,dt.useEffect)(()=>{let l=()=>{q("SHOULD_SHOW_AUTOPLAY").then(f=>Zr(!!f))};return l(),document.addEventListener("visibilitychange",l),()=>{document.removeEventListener("visibilitychange",l)}},[]);let e=l=>{A("auto-play",l.toString()),X("SHOULD_SHOW_AUTOPLAY",l),Zr(l)},s=()=>e(!1),n=()=>e(!0),a=(0,dt.useCallback)(()=>{e(!t)},[t]);return{isEnabled:t,toggle:a,turnOff:s,turnOn:n}}i();r();var Kn=m.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  justify-content: space-between;
`;function Dt(){let{turnOn:t,turnOff:e}=ft(),s=f=>{E("introduce-ai-autoplay"),w("extension_usage_new_user_education_prompt_interacted",{prompt:"introduce-ai-autoplay",action:f})},n=()=>{s("close")},a=async()=>{e(),await q("SKIP_CHATS_POPUP")||await _({component:!0,duration:0,id:"introduce-ai-button",priority:101,showOnMobile:!1,timeSensitive:!0,redesigned:!0,render:()=>o(ko,null)}),s("keep-off")};return o(Z,{width:272,onClose:n},o(z,{font:"subheading-4"},"Autoplay Responses"),o(z,{font:"body-5",style:{marginTop:"8px"}},"Speechify can automatically read out chat responses as soon as they’re generated."),o(Kn,null,o(zo,{style:{flexGrow:1},onClick:()=>{t(),setTimeout(()=>{mo.play(),s("turn-on")},500)},size:"medium"},"Turn On Autoplay"),o(lt,{style:{padding:0,color:u["icn-txt-sec"]},onClick:a},"Keep Off")))}var qn=({enabled:t,onClick:e})=>o(hr,{enabled:t,onClick:e},t?o(_e,null):o(Le,null),o("span",null,t?"On":"Off"));function Xn({showOnRight:t,triggerSource:e}){let{isEnabled:s,toggle:n}=ft(),{current:a}=Oo(),{current:l,NotificationBoard:f}=Oo({componentOnly:!0});(0,Jr.useEffect)(()=>{let P=async()=>{await E("screenshot-initial-hint-popup"),await E("introduce-ai-autoplay"),await _({component:!0,duration:0,id:"introduce-ai-autoplay",priority:151,showOnMobile:!1,timeSensitive:!0,redesigned:!0,render:()=>o(Dt,null)}),w("extension_usage_new_user_eduction_prompt_shown",{prompt:"introduce-ai-autoplay"})};e==="introduce-ai-autoplay"&&P()},[e]);let g=async()=>{await _({component:!0,duration:0,redesigned:!0,id:"introduce-ai-button",priority:101,showOnMobile:!1,timeSensitive:!0,render:()=>o(ko,null)})};return o(p,null,o(O,{visible:!0,showOnRight:t,text:"Autoplay responses"},o(qn,{enabled:s,onClick:async()=>{a?.id==="introduce-ai-button"&&await E("introduce-ai-button");let P=await q("SKIP_CHATS_POPUP");s&&!P&&g(),n()}})),o(it,{showOnRight:t,showAnchor:!0,topOffset:12,visible:l?.id==="introduce-ai-autoplay"},o(rt,null,o(f,null))))}var Qr=Xn;i();r();i();r();var Ut=I(v()),Zn=["playing","buffering"],Hr=({isPDF:t})=>{let e=x.useTime(),s=x.usePlayingState(),n=(0,Ut.useMemo)(()=>Zn.includes(s),[s]);return{duration:(0,Ut.useMemo)(()=>{if(e.isLoading===!0)return{isLoading:!0};let l=e.totalEstimatedDuration,f=e.currentTime,g=Math.max(0,l-f),h=g===0&&!n?l:g,P=Math.floor(h/3600),c=Math.floor(h%3600/60),T=t?"":ar("short")(h);return{isLoading:!1,hours:P,minutes:c,durationText:T}},[n,e])}};var oi=({isPDF:t})=>{let{duration:e}=Hr({isPDF:t});if(t||e.isLoading===!0)return null;let{hours:s,minutes:n,durationText:a}=e;return a?s===0?o(Bt,null,o(At,{"aria-label":b("DURATION IN MINS"),"data-testid":y.DURATION_MINS,className:"left"},a?a.split(":")[0]:""," "),a?o(yr,null,":"):null,o(At,{"aria-label":b("DURATION IN SECS"),"data-testid":y.DURATION_SECS,className:"right"},a?a.split(":")[1]:""," ")):o(Bt,null,o(po,{bold:!0,fontSize:"12px",lineHeight:"20px",fixedWidthNumbers:!0},s,o(Nt,{"aria-label":b("DURATION IN HOURS"),"data-testid":y.DURATION_HOURS},"h"),n<10?"0":"",n,o(Nt,{"aria-label":b("DURATION IN MINS"),"data-testid":y.DURATION_MINS},"m"))):null};i();r();async function ht(){let t=window.location.hostname,e=window.location.pathname;at()&&await Te.toggleFeatureOnDomain("pill-player",!1),w("extension_pill_player_dismissed",{type:"domain",domain:t,pathname:e})}i();r();var pi=I(ri());i();r();i();r();var ii=m.div`
  background-color: ${u["bg-prim-w-110"]};
  border-radius: 12px;
  color: ${u["icn-txt-prim"]};
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  width: 548px;
  padding-bottom: 48px;
  position: relative;
  box-shadow: 0px 12px 48px -16px rgba(0, 0, 0, 0.24);
`,ni=m.div`
  align-items: center;
  background-color: rgba(5, 7, 11, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2147483645;
`,si=m.div`
  background: #fff;
  border-radius: 12px;
  height: 240px;
  overflow: hidden;
  width: 306px;
  z-index: 1;
`,ai=m.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`,li=m.div`
  text-align: center;
`,ui=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;var mi=({handleSubmit:t})=>o(ui,null,o(li,null,o(z,{font:"subheading-2"},"Player Hidden"),o(z,{font:"body-5",style:{marginTop:"8px"}},"To bring the player back, click on the extension",o("br",null),"icon in your browser’s toolbar.")),o(si,null,o(Ho,{src:"turn-on-extension-animation.webm",autoPlay:!0,muted:!0})),o(zo,{type:"submit",style:{width:"160px"},size:"large",onClick:t,"data-testid":y.GOT_IT},"Got it"));i();r();var Lo=Vo(Ee({isModalShown:!1},t=>({showModal:()=>t({isModalShown:!0}),hideModal:()=>t({isModalShown:!1})})));var ci=()=>{let t=Lo(l=>l.isModalShown),e=Lo(l=>l.hideModal),s=async()=>{await ht(),await X("SKIP_CLOSE_PILL_PLAYER_MODAL",!0),e()},n=()=>{s().catch(()=>{})},a=l=>{l?.target===l?.currentTarget&&n()};return st(document.querySelector("#speechify-pill-player"),t?n:pi.default),t?o(ni,{onClick:a},o(ii,null,o(ai,{onClick:n},o(Xo,{style:{cursor:"pointer"}})),o(mi,{handleSubmit:n}))):null};i();r();var N=I(v());function di({checkIsMouseOut:t,onMouseOut:e,delayMs:s=150}){let n=(0,N.useRef)(t);n.current=t;let a=(0,N.useRef)(e);a.current=e;let[l,f]=(0,N.useState)(!0),[g,h]=(0,N.useState)(!1),[P,c]=(0,N.useState)(!1),T=(0,N.useRef)(null);(0,N.useEffect)(()=>(g?(T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{c(!0),T.current=null},s)):(T.current&&(clearTimeout(T.current),T.current=null),c(!1)),()=>{T.current&&clearTimeout(T.current)}),[g,s]),(0,N.useEffect)(()=>{if(!l)return;let k=window.setTimeout(()=>h(!1),250);return()=>clearTimeout(k)},[l]),(0,N.useEffect)(()=>{g||a.current()},[g]);let R=(0,N.useCallback)(()=>{n.current()&&f(!0)},[]),W=(0,N.useCallback)(()=>{h(!0),f(!1)},[]);return{isMouseOver:g,isMouseOverDelayed:P,handleMouseOver:W,handleMouseOut:R,setIsMouseOut:f}}i();r();i();r();var fi=({removeNotification:t,onRefresh:e})=>o($r,{removeNotification:t},o(M,{column:!0,xAlign:!0,separation:"12px"},o(M,{yAlign:"start",separation:"12px"},o(Hn,null,o(rr,{color:"#FA0F19"})),o(Qn,null,"The player didn’t load correctly. Please refresh it.")),o(Jn,{onClick:()=>{t(),e?.()}},"Refresh"))),Jn=m(mr)`
  font-family: var(--font-family)
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;

  width: 100%;
  justify-content: center;
`,Qn=m(po)`
  font-family: var(--font-family)
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
`,Hn=m("div")`
  width: 20px;
  height: 20px;
`;var gi=I(v());function hi(){let t=x.usePlayingState();(0,gi.useEffect)(()=>{if(t!=="errored"&&E("player-error"),!["stopped","paused"].includes(t))return()=>{x.getPlayingState()==="errored"&&_({id:"player-error",priority:100,duration:0,showOnMobile:!0,timeSensitive:!0,render:({dismiss:e})=>o(fi,{removeNotification:e})})}},[t])}i();r();var bi=I(v());i();r();var Pi=I(v());i();r();var os=m.div(({isSiteDarkMode:t})=>{let e=t?H:u;return{...Qo(K["body-5"]),color:e["icn-txt-prim"],fontFamily:"system-ui, sans-serif"}}),yi={Description:os};var Si=()=>{let t=et(),e=(0,Pi.useMemo)(()=>ot(),[]);if(!e)return null;let{description:s,icon:n,videoSrc:a}=e;return o(Z,{width:312,onClose:tt,headerIcon:n,showDismiss:!0,isSiteDarkMode:t},o(yi.Description,{isSiteDarkMode:t},s),o(Ho,{src:a,style:{marginTop:"8px"},autoPlay:!0,muted:!0,replayDelay:2e3}))};var ts=async()=>{let{inlinePlayerNotification:t}=await be(!0);return t?He(new Date(t.lastSeen),new Date)>=5:!0},Ci=t=>{let e=x.useTime().totalEstimatedDuration>0,s=async()=>{e||(await E("inline-player-first-time-popup"),!(ot()&&await ts()))||await _({id:"inline-player-first-time-popup",priority:151,showOnMobile:!1,timeSensitive:!1,redesigned:!0,render:()=>o(Si,null)})};(0,bi.useEffect)(()=>{t==="browser-action"&&s()},[t])};i();r();var Mo=I(v());function Ft(){let t=l=>{E("no-client-voices"),Yr("no-client-voices"),w("extension_no_client_voices_notification_shown",{action:l})},e=l=>{l.key==="Escape"&&t("escape")};(0,Mo.useEffect)(()=>(window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}),[]);let s=()=>{t("close")},n=(0,Mo.useCallback)(()=>{let l=Ae();if(!l){w("extension_no_client_voices_notification_shown",{action:"no download url"});return}uo(l),t("download")},[]),a=(0,Mo.useCallback)(()=>{t("upgrade"),qo("pill_player_settings_upsell","global",!0)},[]);return o(M,{xAlign:!0,column:!0,separation:"8px"},o(D.Container,null,o(D.Header,null,o(D.HeaderLogo,null,o(Re,null),o(Be,null))),o(D.Body,null,"We couldn’t find any free voices on your device. To begin listening:",o(D.DownloadButton,{onClick:n},"Download Language Pack",o(D.DownloadButtonIcon,null,o(Ke,null))),o(D.UpsellButton,{onClick:a},o(jo,null),o("span",null,"Upgrade to Premium"))),o(D.Footer,null,"To dismiss hint — press",o(D.Key,null,"esc"))),o(D.AbsoluteCloseIcon,{onClick:s}))}i();r();var Yt=I(v());i();r();var L=I(v());function yt(){let[t,e]=(0,L.useState)(!1),[s,n]=(0,L.useState)(!1),a=(0,L.useRef)(!1),l=x.useTime(),f=x.useCurrentContent(),{shortcuts:g}=go(),h=(0,L.useMemo)(()=>{let c=g["open-screenshot-mode"]?.shortcut,R=(s?`No Text Detected.
Try Capture & Listen.`:"Capture & Listen").split(`
`).map((W,k)=>o(L.Fragment,{key:k},k>0&&o("br",null),W));return o("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o("div",null,R),c&&o(fo,{keys:c}))},[s,g]),P=(0,L.useCallback)(()=>{e(!1)},[]);return(0,L.useEffect)(()=>{let c;return f&&(l.isLoading===!1&&l.totalEstimatedDuration<=0?(n(!0),a.current||(a.current=!0,e(!0),c=setTimeout(()=>{P()},3e3))):n(!1)),()=>{c&&clearTimeout(c)}},[f,l]),{closeTooltip:P,forceShowTooltip:t,noTextDetected:s,tooltipContent:h}}i();r();i();r();var Ni=I(v());i();r();var $t=I(v());var es=100,rs=100,is=50,Ei=50,Ti=50;function Ii({className:t,counterClockwise:e,dashRatio:s,pathRadius:n,strokeWidth:a,xOffset:l=0,yOffset:f=0}){return o("path",{className:t,d:ns({pathRadius:n,counterClockwise:e,positionX:Ei+l,positionY:Ti+f}),fillOpacity:0,strokeWidth:a,style:Object.assign({},ss({pathRadius:n,dashRatio:s,counterClockwise:e}))})}function ns({pathRadius:t,counterClockwise:e,positionX:s=Ei,positionY:n=Ti}){let a=t,l=e?1:0;return`
      M ${s},${n}
      m 0,-${a}
      a ${a},${a} ${l} 1 1 0,${2*a}
      a ${a},${a} ${l} 1 1 0,-${2*a}
    `}function ss({counterClockwise:t,dashRatio:e,pathRadius:s}){let n=Math.PI*2*s,a=(1-e)*n;return{strokeDasharray:`${n}px ${n}px`,strokeDashoffset:`${t?-a:a}px`}}var as=m.div`
  width: ${({size:t})=>t??"24px"};
  height: ${({size:t})=>t??"24px"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`,ls=m.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;

  .CircularProgressBarPath {
    stroke: #4759f7;

    &.AiCircularProgressBarPath {
      stroke: url(#aiProgressGradient);
    }
  }

  .CircularProgressBarTrail {
    stroke: #2d2d2f;
  }
  .CircularProgressBarBackground {
    fill: #4759f7;

    &.AiCircularProgressBarBackground {
      fill: url(#aiProgressGradient);
    }
  }

  &:hover {
    .CircularProgressBarPath {
      stroke: #4454e3;

      &.AiCircularProgressBarPath {
        stroke: url(#aiProgressGradientHover);
      }
    }
    .CircularProgressBarBackground {
      fill: #4454e3;

      &.AiCircularProgressBarBackground {
        fill: url(#aiProgressGradientHover);
      }
    }
  }

  &:active {
    .CircularProgressBarPath {
      stroke: #3d4ac4;

      &.AiCircularProgressBarPath {
        stroke: url(#aiProgressGradientActive);
      }
    }
    .CircularProgressBarBackground {
      fill: #3d4ac4;

      &.AiCircularProgressBarBackground {
        fill: url(#aiProgressGradientActive);
      }
    }
  }
`,us=m(Ii)`
  stroke-linecap: round;
`,ms=m(Ii)`
  transition: stroke-dashoffset 0.5s ease 0s;
`,ps=t=>{let{circleRatio:e=1,counterClockwise:s=!1,maxValue:n=100,minValue:a=0,strokeWidth:l=24,value:f=0,size:g="24px",variant:h="speechify"}=t,P=(0,$t.useMemo)(()=>is-l/2,[l]),c=(0,$t.useMemo)(()=>(Math.min(Math.max(f,a),n)-a)/(n-a),[f,a,n]);return o(as,{size:g},o(ls,{viewBox:`0 0 ${es} ${rs}`,"data-test-id":"CircularProgressbar"},o("defs",null,o("linearGradient",{id:"aiProgressGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o("stop",{offset:"0%",stopColor:"#EA6AFF"}),o("stop",{offset:"100%",stopColor:"#6B78FC"})),o("linearGradient",{id:"aiProgressGradientHover",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o("stop",{offset:"0%",stopColor:"#E055F5"}),o("stop",{offset:"100%",stopColor:"#5F6DEF"})),o("linearGradient",{id:"aiProgressGradientActive",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o("stop",{offset:"0%",stopColor:"#D640EB"}),o("stop",{offset:"100%",stopColor:"#5362E2"}))),o(us,{counterClockwise:s,dashRatio:e,pathRadius:P,strokeWidth:l,className:"CircularProgressBarTrail"}),o(ms,{counterClockwise:s,dashRatio:c*e,pathRadius:P,strokeWidth:l,className:["CircularProgressBarPath",h==="ai"?"AiCircularProgressBarPath":""].filter(Boolean).join(" ")})))},vi=ps;i();r();i();r();var Oi=t=>o("svg",{"aria-label":b("PILL_PLAYER_REPEAT_ICON"),"data-testid":y.PILL_PLAYER_REPEAT_ICON,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o("g",{id:"icons/20"},o("path",{id:"Union",fillRule:"evenodd",clipRule:"evenodd",d:"M12.3391 5.13296C11.4074 3.72588 9.81131 2.79995 8.00001 2.79995C5.12813 2.79995 2.80001 5.12807 2.80001 7.99995C2.80001 10.8718 5.12813 13.1999 8.00001 13.1999C10.6694 13.2 12.87 11.1879 13.1661 8.5981C13.2162 8.15913 13.6128 7.84396 14.0518 7.89415C14.4907 7.94434 14.8059 8.34088 14.7557 8.77985C14.3683 12.1684 11.492 14.7999 8.00001 14.7999C4.24447 14.7999 1.20001 11.7555 1.20001 7.99995C1.20001 4.24441 4.24447 1.19995 8.00001 1.19995C10.2023 1.19995 12.159 2.24698 13.4011 3.86822V2.83237C13.4011 2.39054 13.7593 2.03237 14.2011 2.03237C14.6429 2.03237 15.0011 2.39054 15.0011 2.83237V5.93296C15.0011 6.37479 14.6429 6.73296 14.2011 6.73296L11.1005 6.73296C10.6587 6.73296 10.3005 6.37479 10.3005 5.93296C10.3005 5.49113 10.6587 5.13296 11.1005 5.13296L12.3391 5.13296Z",fill:"white"})));var wi=(t,e,s,n)=>t==="playing"?sr:n&&e&&s?ze:n&&!e?ke:t==="errored"?ir:t==="ended"?Oi:nr,Ri=(t,e,s,n)=>t==="playing"?"pause":n&&e&&s?"stop":n&&!e?"loading":t==="errored"?"alert":t==="ended"?"repeat":"play";i();r();i();r();var Wt=()=>u["sf-prim-cta"],Bi=m(M)`
  // Reset button styles
  outline: none;
  border: none;

  background-color: ${({background:t,secondary:e})=>e?"transparent":t??Wt()};
  padding: ${({padding:t})=>t??"8px 16px"};
  cursor: pointer;
  border-radius: ${({borderRadius:t})=>t??"8px"};
  box-shadow: rgba(109, 117, 141, 0.2) 0 0 2px;
  color: ${({color:t,secondary:e,background:s})=>e?s??Wt():t??u["icn-txt-prim"]};
  ${({secondary:t,background:e})=>t&&`border: 2px solid ${e??Wt()}`};

  // For a tag
  text-decoration: none;
  box-sizing: border-box;
`.withComponent("button");var Vt=m(Bi)`
  border-radius: 20px;

  margin: 0;
  padding: 8px 12px;

  font-size: 12px;
  height: 40px; // Fixed height necessary for animations
  width: 100%;
`;Vt.defaultProps={xAlign:!0,yAlign:!0};var Gt=()=>u["sf-prim-cta"],cs=()=>vo`
 0% {
   transform: scale(.95);
   box-shadow: 0 0 0 0 ${Gt()}80;
 }
 70% {
   transform: scale(1);
   box-shadow: 0 0 0 12px ${Gt()}00;
 }
 100% {
   transform: scale(.95);
   box-shadow: 0 0 0 0 ${Gt()}00;
 }
`,ds=()=>de`
  animation: ${cs()} 1.5s infinite;
`,fs=m(Vt)`
  ${({expanded:t,simple:e,minimal:s,pill:n,isPlayIconActive:a})=>t?"margin-right: 12px;":e?"width: 28px !important; height: 28px; border-radius: 50%;":s?"width: 36px !important; height: 36px; border-radius: 50%;":n?"width: 32px !important; height: 32px; border-radius: 50%;"+(a?"> svg { transform: translateX(1px); }":""):"width: 48px !important; height: 48px; border-radius: 50%;"};

  > span {
    white-space: nowrap;
  }

  svg {
    transition: 0.2s min-width;
    min-width: ${({expanded:t})=>t?"18px":"28px"};
    color: ${({centerWhite:t})=>t?u["icn-txt-white"]:u["icn-txt-prim-inv"]};
  }

  ${({glow:t})=>t&&ds};

  &:hover {
    scale: ${({minimal:t})=>t?"1.11":""};
  }
`,gs=m.div`
  position: absolute;
  width: 36px;
  height: 36px;
`,Ai=({children:t,expanded:e,glow:s,minimal:n,onClick:a,onMouseEnter:l,onMouseLeave:f,pill:g,progress:h=0,simple:P,state:c,playingHasStarted:T,variant:R="speechify",disabled:W,...k})=>{let[V,ro]=(0,Ni.useState)(!1),Uo=wi(c,g,V,k.isLoading),bo=Ri(c,g,V,k.isLoading)==="play",Co=b(c==="playing"?"PAUSE_BUTTON":"PLAY_BUTTON"),io=c==="playing"?y.PAUSE_BUTTON:y.PLAY_BUTTON;return o(p,null,o(fs,{"aria-label":Co,"data-testid":io,expanded:e,glow:s&&e,minimal:n,onClick:wo(a),onMouseEnter:()=>{ro(!0),l?.()},onMouseLeave:()=>{ro(!1),f?.()},onTouchEnd:wo(a),pill:g,simple:P,isPlayIconActive:bo,...k},g&&T&&!W&&o(gs,null,o(vi,{maxValue:100,minValue:0,size:"36px",strokeWidth:8,value:h*100,variant:R})),o(Uo,{size:P?"16px":n||g?"20px":"24px"}),t),k.isLoading&&!V&&o(Nr,{variant:R}))};var hs=u["sf-prim-cta"],ys=u["sf-prim-cta-hov"],Ps=u["sf-prim-cta-pres"],ki="linear-gradient(180deg, #EA6AFF 0%, #6B78FC 100%)",Ss="linear-gradient(180deg, #E055F5 0%, #5F6DEF 100%)",bs="linear-gradient(180deg, #D640EB 0%, #5362E2 100%)",Cs="transparent",xs=u["sf-sec-hov-0-90"],_i=u["sf-sec-pres-0-90"],Es=u["icn-txt-accent"],Ts=u["icn-txt-accent"],Is=u["icn-txt-accent"],vs=u["sf-prim-cta"],Os=`
  background: ${u["bg-tert-20-60"]}; 
  cursor: default;

  & > svg {
    fill: ${u["icn-txt-tert"]};
  }

  &:hover, &:active {
    background: ${u["bg-tert-20-60"]} !important;

    & > svg {
      fill: ${u["icn-txt-tert"]} !important;
    }
  }
`,Li=m(Ai)`
  > svg {
    ${({playingHasStarted:t})=>t&&`fill: ${Es};`}
    max-height: ${({state:t})=>t==="playing"?"16px":"18px"};
  }

  background: ${({variant:t})=>t==="ai"?ki:hs};
  ${({playingHasStarted:t})=>t&&`background: ${Cs};`}
  ${({disabled:t,isLoading:e})=>t||e?Os:""}
  ${({isLoading:t})=>t?`& > svg {
        fill: ${u["icn-txt-prim"]};
      }`:""}

  ${({isLoading:t,variant:e})=>t&&`background: ${e==="ai"?ki:vs};`}

  &:hover {
    background: ${({playingHasStarted:t,variant:e})=>t?xs:e==="ai"?Ss:ys};

    & > svg {
      ${({playingHasStarted:t})=>t&&`fill: ${Ts};`}
    }
  }

  &:active {
    background: ${({variant:t})=>t==="ai"?bs:Ps};

    ${({playingHasStarted:t})=>t&&`background: ${_i};`}

    & > svg {
      ${({playingHasStarted:t})=>t&&`fill: ${Is};`}
    }

    .CircularProgressBarTrail {
      stroke: ${_i};
    }
  }
`;var ws=Ne()==="mac";function Mi({isPDF:t,onClick:e,showSettingsOnRight:s}){let n=yo(!!t),{noTextDetected:a,tooltipContent:l}=yt(),{docTitle:f}=nt(),{shortcuts:g}=go(),h=x.useTime(),P=x.useProgress(),c=x.usePlayingState(),T=x.useCurrentContent()?.metadata.source,R=er(no=>no.status==="recording"),{pause:W,play:k,stop:V}=mo,ro=(0,Yt.useMemo)(()=>{let no=g["play-pause-new"]?.shortcut||g["play-pause"]?.shortcut,G;switch(c){case"playing":G="Pause";break;case"buffering":G="Stop";break;default:G="Play"}return o(p,null,G," ",no&&o(fo,{keys:no}))},[ws,c,g]),bo=cr(()=>(e?.(),c==="playing"?W():c==="buffering"?V():k())),Co=c==="playing"||c==="paused"&&P>0,io=c==="playing"||c==="buffering",C=h.totalEstimatedDuration>0,Fo=(0,Yt.useMemo)(()=>R?!0:!C&&(t||!f||a&&!io),[C,t,f,a,io,R]);return o(O,{showOnRight:s,text:Fo||t?null:n==="screenshot-only"?l:ro,isPlayButton:!0},o(Li,{centerWhite:!0,duration:h.isLoading===!0?0:h.totalEstimatedDuration,onClick:bo,pill:!0,progress:P,state:c,isLoading:c==="buffering",disabled:Fo,playingHasStarted:Co,variant:T==="Keypoints"?"ai":"speechify"}))}i();r();var U=I(v());function zt({children:t,isCollapsed:e}){let[s,n]=(0,U.useState)(t),a=(0,U.useRef)(null),[l,f]=(0,U.useState)("auto");(0,U.useEffect)(()=>{if(!a.current)return;let P=()=>{let R=a.current?.getBoundingClientRect().height;f(R?R+"px":"auto")},c=new MutationObserver(P);c.observe(a.current,{childList:!0});let T=setTimeout(P,kt);return()=>{c.disconnect(),clearTimeout(T)}},[t]);let g=(0,U.useRef)();(0,U.useEffect)(()=>(clearTimeout(g.current),e?n(t):g.current=window.setTimeout(()=>n(t),kt/2),()=>clearTimeout(g.current)),[e,t]);let h=(0,U.useCallback)(P=>{mt()&&P.target.closest("button")&&P.preventDefault()},[]);return o(p,null,o(Pr,{height:l,relative:!0,onMouseDown:h,"data-visible-player":"true"},s),o(Sr,{ref:a,height:"auto","data-testid":y.IGNORED,isDraggingEnabled:!1},t))}i();r();var $i=I(v());i();r();var Bs=()=>document.querySelector("#docs-title-input-label-inner")?.textContent,Di=t=>{let e=ge.speechifyWebApp.baseUrl;uo(`${e}?importService=google-drive&importFilename=${t}`)},Ui=({background:t,children:e,logEventOnClick:s,source:n,...a})=>{let{saveToMobile:l,SaveToMobileIcon:f,SaveToMobilePillIcon:g}=Jo(n),{docTitle:h}=nt(),P=()=>{if(ho()&&h)Di(h);else if(j()){let c=Bs();if(!c){me(new Error("No google docs title while clicking on save to library button"));return}Di(c)}else l()};return o(ur,{onClick:Bo(c=>{wo(P)(c),s&&s()}),background:t??"transparent",...a},n==="Pill Player"||n==="PDF"?o(g,null):o(f,null),e)},Fi=m(Ui)`
  width: 32px;
  height: 32px;

  & > svg {
    height: 20px !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px !important;
  }

  &:hover {
    background-color: ${u["sf-sec-hov-0-80"]};
  }

  &:active {
    background-color: ${u["sf-sec-pres-0-80"]};
  }
`,ic=lr(Ui);function Wi({isPDF:t,showSettingsOnRight:e}){let{shortcuts:s}=go(),{saveToMobileStatus:n}=Jo("Pill Player"),a=(0,$i.useMemo)(()=>{if(n==="saving")return"Saving file to your library";let l=s["save-to-library"]?.shortcut;return n==="saved"?o(p,null,"View in Library",o(qe,{style:{marginLeft:"6px",marginBottom:"2px"}})):n==="failed"?"Error saving to library":o(p,null,"Save to Library ",l&&o(fo,{keys:l}))},[n,s]);return o(O,{showOnRight:e,text:a},o(Fi,{"aria-label":b("SAVE_TO_LIBRARY"),"data-testid":y.SAVE_TO_LIBRARY,boxShadow:"none",color:u["icn-txt-prim"],logEventOnClick:()=>{A("bookmark"),X("SHOULD_SHOW_BOOKMARK_FEATURE_HINT",!1)},source:t?"PDF":"Pill Player"}))}i();r();var Vi=I(v());var As=m(gr)`
  &:hover {
    svg {
      opacity: 0.75;
    }
  }

  &:active {
    svg {
      opacity: 0.5;
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,ks=m.div`
  ${K["body-7"]};
  color: ${u["icn-txt-prim"]};
  display: flex;
  align-items: center;
  gap: 8px;
`,Gi=({showTooltipOnRight:t})=>{let{exitScreenshotMode:e}=je(),s=(0,Vi.useCallback)(async()=>{e(),Yo("screenshotHint",{lastSeen:new Date})},[]);return o(O,{verticalAlignment:60,showOnRight:t,text:o(ks,null,"Exit Capture and Listen",o(Xe.Key,null,"Esc"))},o(As,{"aria-label":b("OCR_CLOSE_ICON"),"data-testid":y.OCR_CLOSE_ICON,onClick:s},o($e,null)))};i();r();var rn=I(v());i();r();var _s=u["sf-sec-hov-0-80"],Kt=u["sf-sec-pres-0-80"],Yi=`
  &:hover {
    background-color: ${_s};
  }

  &:active {
    background-color: ${Kt};
  }
`,zi=m.button`
  background: unset;
  border-radius: 50%;
  border: unset;
  cursor: pointer;
  height: 32px;
  outline: unset;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  width: 32px;

  & > svg {
    height: 96% !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 96% !important;
  }

  & > img {
    height: 80% !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80% !important;
  }

  ${Yi}

  ${({active:t})=>t&&`background-color: ${Kt};`}
`,Ls=m(zi)`
  background: unset !important;
  img {
    &:hover {
      background: ${u["sf-prim-w-90"]};
    }

    ${({active:t})=>t?`background: ${u["sf-prim-w-80"]};`:""}
  }
`,eo=({onClick:t,...e})=>o(zi,{onClick:Bo(t),...e}),Ki=({onClick:t,...e})=>o(Ls,{onClick:Bo(t),...e}),qt=m(wt)`
  background: unset;
  border: unset;
  border-radius: 50%;
  box-shadow: none;
  cursor: pointer;
  min-height: 16px;
  min-width: 16px;
  outline: unset;
  height: 16px;
  width: 16px;
  padding: 0;

  & > svg {
    height: 16px;
    width: 16px;
  }

  ${Yi}
`,qi=m(eo)`
  opacity: ${({disabled:t})=>t?.5:1};

  & > svg {
    height: 20px !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px !important;
  }
`,Xi=m(eo)`
  & > svg {
    height: 20px !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px !important;
  }
`,Zi=m(eo)`
  & > svg {
    height: 20px !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px !important;
  }
`,ji=m(eo)`
  & > svg {
    height: 20px !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px !important;
  }
`,Ji=m(eo)`
  & > svg {
    height: 24px !important;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 24px !important;
  }
`,Qi=m.button`
  display: flex;
  background: ${u["sf-prim-w-80"]};
  border: unset;
  border-radius: 50%;
  cursor: pointer;
  outline: unset;
  padding: 0;

  & > svg path {
    fill: ${u["icn-txt-sec"]};
    height: 20px !important;
    width: 20px !important;
  }

  &:hover {
    background: ${u["sf-prim-w-80"]};
    & > svg path {
      fill: ${u["icn-txt-prim"]};
    }
  }
`,Hi=m(wt)`
  width: 48px;
  height: 48px;
  background: unset;

  &:hover {
    & > svg {
      opacity: 0.75;
    }
  }

  &:active {
    background-color: ${Kt};
  }

  & > svg {
    height: 20px;
    width: 20px;
    fill: ${u["icn-txt-prim"]};
  }
`;i();r();var Zt=I(v());i();r();var Ms=m.div(({isDarkMode:t})=>{let e=t?H:u;return{...Qo(K["body-5"]),display:"flex",flexDirection:"column",gap:"10px",color:e["icn-txt-prim"]}}),on=m.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,tn=()=>{let t=et();return o(Z,{width:312,onClose:()=>{E("screenshot-initial-hint-popup"),Yo("screenshotInitialHint",{lastSeen:new Date})},showDismiss:!0,isSiteDarkMode:t},o(Ms,{isDarkMode:t},o(on,null,"No text detected, but you can click"),o(on,null,o(Zo,null),"to select text and listen to it.")))};var Xt=()=>E("screenshot-initial-hint-popup"),en=t=>{let e=yo(t),{screenshotInitialHint:s}=oo(),{isLoading:n}=x.useTime(),a=async()=>{await Xt(),await Ce(100);let{time:{totalEstimatedDuration:l,isLoading:f}}=x.getState();t||l>0||f||s?.lastSeen&&or(new Date(s.lastSeen),new Date)||await _({id:"screenshot-initial-hint-popup",priority:101,showOnMobile:!1,timeSensitive:!1,redesigned:!0,render:()=>o(tn,null)})};(0,Zt.useEffect)(()=>{pt()||j()||ho()||(n?Xt():a())},[n]),(0,Zt.useEffect)(()=>()=>{Xt()},[e])};function jt({disabled:t,showTooltipOnRight:e,isPDF:s}){en(!!s);let{closeTooltip:n,tooltipContent:a}=yt(),l=(0,rn.useCallback)(async()=>{await E("screenshot-hint-popup"),await E("screenshot-initial-hint-popup"),A("screenshot"),n(),!t&&(To("init",{},"screenshot-mode"),await tr("pill-player"))},[t]);return o(O,{disabled:!!t,showOnRight:e,text:a},o(qi,{"aria-label":b("OCR_ICON"),"data-testid":y.OCR_ICON,disabled:!!t,onClick:l},o(Zo,null)))}i();r();i();r();var Do=I(v());i();r();var nn=t=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9C4 6.23858 6.23858 4 9 4C11.7614 4 14 6.23858 14 9ZM13.1927 14.606C12.0241 15.4814 10.5726 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.5721 15.4818 12.0231 14.6068 13.1916L17.7914 16.3762C18.1819 16.7668 18.1819 17.3999 17.7914 17.7904C17.4009 18.181 16.7677 18.181 16.3772 17.7904L13.1927 14.606Z",fill:"currentColor"}));i();r();var Ds=({isInputFocused:t})=>`
  width: 312px;
  background: ${u["bg-prim-w-90"]} !important;
  outline: 1.5px solid ${u["brdr-prim-10-80"]};

  svg {
    color: ${u["icn-txt-tert"]};
  }

  &:hover {
    outline-color: ${u["brdr-prim-hov"]};
  }

  ${t?`
    outline: 1.5px solid ${u["brdr-prim-foc"]} !important;
    svg {
      color: ${u["icn-txt-prim"]};
    }
  `:""}

`,Us=m.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  width: 36px;
  box-sizing: border-box;
  background: ${u["sf-sec-0-90"]};
  transition: 0.2s width;

  svg {
    color: ${u["icn-txt-prim"]};
    flex-shrink: 0;
  }

  &:hover {
    background: ${u["sf-sec-hov-0-90"]};
  }

  &:active {
    background: ${u["sf-sec-pres-0-90"]};
  }

  ${({isExpanded:t,isInputFocused:e})=>t?Ds({isInputFocused:e}):""}
`,Fs=m.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 12px;

  button {
    padding: 0;
  }
`,Jt={Search:Us,SearchWrapper:Fs};var $s=m("input")`
  box-sizing: border-box;
  background-color: transparent;
  color: ${u["icn-txt-prim"]};
  ${K["body-6"]}
  font-family: system-ui, sans-serif;
  border: none;
  outline: none;
  width: 100%;
  padding: 0;
  height: 20px;

  &::placeholder {
    color: ${u["icn-txt-tert"]};
  }
`,sn=()=>{let{searchExpanded:t}=No(),e=(0,Do.useRef)(null),[s,n]=(0,Do.useState)(!0),[a,l]=(0,Do.useState)(!1),{search:f}=No(),g=()=>{t||(Ao.toggleSearch(!0),n(!1),setTimeout(()=>{n(!0),setTimeout(()=>e.current?.focus(),0)},200))},h=()=>{Ao.toggleSearch(!1),Ao.setSearch("")};return o(Jt.SearchWrapper,{isExpanded:t},o(Jt.Search,{isExpanded:t,isInputFocused:a,onClick:g},o(nn,null),t&&s&&o($s,{id:"voices-search","aria-label":"Search voices",ref:e,value:f,onChange:P=>Ao.setSearch(P.target.value),autoFocus:!0,onFocus:()=>l(!0),onBlur:()=>l(!1),placeholder:"Search for languages, accents"})),t&&s&&o(lt,{onClick:h},"Cancel"))};var Ws=m.button`
  background: unset;
  border: unset;
  color: ${u["icn-txt-prim"]};
  cursor: pointer;
  display: flex;
  outline: unset;
  padding: 0;
  margin-top: 4px;

  > svg {
    width: 20px !important;
    height: 20px !important;
    color: ${u["icn-txt-prim"]};

    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.5;
    }
  }
`,nf=m.button`
  background: unset;
  border: unset;
  cursor: pointer;
  display: flex;
  outline: unset;
  align-items: flex-start;
  gap: 0px;
  padding: 0px;
  margin-top: 0px;
`,Vs=m.div`
  position: absolute;
  right: ${({alignLeft:t})=>t?"4px":"16px"};
  top: ${({hasTitle:t,showSearch:e})=>t?e?"16px":"8px":"16px"};
`,Gs=m.div`
  align-items: center;
  align-self: stretch;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  padding: ${({hasTitle:t})=>t?"12px 16px":"20px 16px 4px"};
  position: relative;
  min-height: 44px;
  box-sizing: border-box;
  position: relative;
  ${({showSearch:t})=>t?"height: 60px;":""}
`,an=({alignLeft:t,onClose:e,showSearch:s=!1,titleContent:n})=>{let{searchExpanded:a}=No();return o(Gs,{hasTitle:!!n,showSearch:s},s&&o(sn,null),!a&&o(fr,{alignLeft:t},n),!a&&o(Vs,{alignLeft:t,hasTitle:!!n,showSearch:s},o(Ws,{"data-testId":"Close Side Panel",onClick:e},o(Xo,null))))};i();r();var ln=m.div`
  font-family: system-ui, sans-serif;
  height: 100%;
  ${({isPopupDesign:t})=>t?"":"min-width: 240px;"}
  padding: 0;
  width: 100%;
`,Ys=(t,e)=>t?.startsWith("/help")?"top: 80px;":t?.startsWith("/featureprompt/skipsentences")?"top: 46px;":e?"bottom: -8px;":"top: -12px;",un=m(M)`
  animation: ${({visible:t=!1})=>t?dr:void 0} 0.2s ease-out;
  background: ${u["bg-sec-0-100"]};
  border-radius: 12px;
  box-shadow: 0px 0px 0px 0px rgba(106, 120, 252, 0.5), 0px 0px 2px 0px rgba(106, 120, 252, 0.49),
    0px 0px 3px 0px rgba(106, 120, 252, 0.43), 0px 0px 4px 0px rgba(106, 120, 252, 0.25),
    0px 0px 4px 0px rgba(106, 120, 252, 0.07), 0px 0px 5px 0px rgba(106, 120, 252, 0.01);
  ${({isPopupDesign:t})=>t?"box-shadow: none;":""};
  cursor: default;
  ${({showOnRight:t=!1})=>t?"left: 60px;":"right: 60px;"}
  ${({route:t,showPointer:e})=>!t?.startsWith("/voices")&&!e&&"overflow: hidden;"}
  position: absolute;
  ${({showOnBottom:t,route:e})=>Ys(e,t)}
  visibility: ${({visible:t=!1})=>t?"visible":"hidden"};

  ${({showPointer:t,showOnRight:e})=>t?`
      &::after {
        content: '';
        position: absolute;
        top: 28px;
        ${e?`
              left: -8px;
              border-right: 8px solid #1e1e1e;
            `:`
              right: -8px;
              border-left: 8px solid #1e1e1e;
            `}
        transform: translateY(-50%);
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
      }
    `:""}
`;i();r();var cn=I(v());i();r();var So=I(v());var mn=()=>{let t=(0,So.useRef)(),[e,s]=(0,So.useState)(!1);return(0,So.useEffect)(()=>{let n=Go.on("speedUpdate",({isAutoIncrease:a})=>{a&&(s(!0),t.current=window.setTimeout(()=>{s(!1)},3e3))});return()=>{n(),t.current&&clearTimeout(t.current)}},[]),{showSpeedRampAnimation:e}};i();r();var zs=()=>o("div",{style:{width:"14px",height:"17px",position:"relative"}},o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 17",width:"14",height:"17",preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"100%"}},o("defs",null,o("radialGradient",{id:"speedRampGradient",spreadMethod:"pad",gradientUnits:"userSpaceOnUse",cx:"-4.809000015258789",cy:"-0.949999988079071",r:"10.190258807587085",fx:"-4.809000015258789",fy:"-0.949999988079071"},o("stop",{offset:"0%",stopColor:"rgb(234,106,255)"}),o("stop",{offset:"50%",stopColor:"rgb(171,113,253)"}),o("stop",{offset:"100%",stopColor:"rgb(107,120,252)"}))),o("g",{className:"arrow-1"},o("path",{fill:"url(#speedRampGradient)",d:"M-0.7070000171661377,-2.7070000171661377 C-0.3160000145435333,-3.0980000495910645 0.3160000145435333,-3.0980000495910645 0.7070000171661377,-2.7070000171661377 C0.7070000171661377,-2.7070000171661377 4.706999778747559,1.2929999828338623 4.706999778747559,1.2929999828338623 C5.0980000495910645,1.684000015258789 5.0980000495910645,2.315999984741211 4.706999778747559,2.7070000171661377 C4.315999984741211,3.0980000495910645 3.684000015258789,3.0980000495910645 3.2929999828338623,2.7070000171661377 C3.2929999828338623,2.7070000171661377 0,-0.5860000252723694 0,-0.5860000252723694 C0,-0.5860000252723694 -3.2929999828338623,2.7070000171661377 -3.2929999828338623,2.7070000171661377 C-3.684000015258789,3.0980000495910645 -4.315999984741211,3.0980000495910645 -4.706999778747559,2.7070000171661377 C-5.0980000495910645,2.315999984741211 -5.0980000495910645,1.684000015258789 -4.706999778747559,1.2929999828338623 C-4.706999778747559,1.2929999828338623 -0.7070000171661377,-2.7070000171661377 -0.7070000171661377,-2.7070000171661377z"})),o("g",{className:"arrow-2"},o("path",{fill:"url(#speedRampGradient)",d:"M-0.7070000171661377,-2.7070000171661377 C-0.3160000145435333,-3.0980000495910645 0.3160000145435333,-3.0980000495910645 0.7070000171661377,-2.7070000171661377 C0.7070000171661377,-2.7070000171661377 4.706999778747559,1.2929999828338623 4.706999778747559,1.2929999828338623 C5.0980000495910645,1.684000015258789 5.0980000495910645,2.315999984741211 4.706999778747559,2.7070000171661377 C4.315999984741211,3.0980000495910645 3.684000015258789,3.0980000495910645 3.2929999828338623,2.7070000171661377 C3.2929999828338623,2.7070000171661377 0,-0.5860000252723694 0,-0.5860000252723694 C0,-0.5860000252723694 -3.2929999828338623,2.7070000171661377 -3.2929999828338623,2.7070000171661377 C-3.684000015258789,3.0980000495910645 -4.315999984741211,3.0980000495910645 -4.706999778747559,2.7070000171661377 C-5.0980000495910645,2.315999984741211 -5.0980000495910645,1.684000015258789 -4.706999778747559,1.2929999828338623 C-4.706999778747559,1.2929999828338623 -0.7070000171661377,-2.7070000171661377 -0.7070000171661377,-2.7070000171661377z"}))),o("style",null,`
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
        `)),pn=zs;var dn=({showOnRight:t,route:e,toggleRoute:s})=>{let{autoSpeedUp:n,playbackSpeed:a}=oo(),{showSpeedRampAnimation:l}=mn(),f=()=>{w("extension_usage_speed_controller_opened",{source:"pill_player"}),s("/speed")},g=(0,cn.useMemo)(()=>{let h=parseFloat((a??1).toFixed(2)).toString();return h.length>3?h:`${h}x`},[a]);return o(O,{showOnRight:t,text:"Set Speed"},o(eo,{"aria-label":b("PLAYBACK_SPEED_MENU_BUTTON"),"data-testid":y.PLAYBACK_SPEED_MENU_BUTTON,active:e==="/speed",onClick:f},o(po,{bold:!0,fontSize:"14px",lineHeight:"20px"},g)),n&&o(wr,null,l?o(pn,null):o(Ye,null)))};i();r();var Pt=I(v());i();r();var fn=t=>o(Ko,{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-label":b("LISTENING_BAR_SUMMARIZE_SIDEPANEL"),"data-testid":y.LISTENING_BAR_SUMMARIZE_SIDEPANEL,...t},o("path",{d:"M10 6.66663L10 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o("path",{d:"M3.33301 8.33337L3.33301 10.8334",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o("path",{d:"M16.667 8.33337L16.667 10.8334",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o("path",{d:"M6.66699 4.16663L6.66699 12.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o("path",{d:"M13.333 5L13.333 12.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}));var Ks=he("PillPlayerSummarizeButton"),qs=m(O)`
  & [aria-roledescription='tooltip'] {
    right: 58px;
  }
`,gn=(0,Pt.forwardRef)(function({isDisabled:e=!1,onClick:s,showOnRight:n=!1},a){let l=pr(),{updateAvailable:f}=ut(),g=!l||Pe(l),h=(0,Pt.useCallback)(async()=>{w("extension_sidepanel_summarize_btn_clicked",{source:"pill_player"}),A("summarize");try{await Vr("/")}catch(c){Ks.error("🔴 [PILL-PLAYER] Failed to open side panel or request summarization:",c)}s?.()},[s]);return g||e?null:o(xr,{ref:a,style:{marginBottom:f?58:0}},o(qs,{visible:!0,showOnRight:n,text:"Talk to Assistant",disableRelative:!0},o(Hi,{"aria-label":b("SUMMARIZE_BUTTON"),"data-testid":y.SUMMARIZE_BUTTON,onClick:h},o(fn,{style:{width:22,height:22}}),o(Wr,null))))});i();r();i();r();function Qt(){return o(Ko,{width:"18",height:"20",viewBox:"0 0 18 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M11.0049 0.461452C11.0049 0.0159997 11.5435 -0.207084 11.8585 0.107898L15.0656 3.31501C15.2608 3.51027 15.2608 3.82685 15.0656 4.02211L11.8585 7.22922C11.5435 7.5442 11.0049 7.32112 11.0049 6.87567V4.31028C8.8951 3.58012 6.45125 4.06198 4.75705 5.75618C3.58074 6.93248 2.98925 8.46796 2.98143 10.005C2.97862 10.5573 2.52864 11.0027 1.97636 10.9999C1.42408 10.9971 0.978651 10.5471 0.981459 9.99487C0.99185 7.95088 1.78005 5.90475 3.34283 4.34197C5.42221 2.26259 8.35342 1.55518 11.0049 2.22499V0.461452Z"}),o("path",{d:"M6.99465 17.7754V19.5384C6.99465 19.9839 6.45608 20.207 6.1411 19.892L2.93399 16.6849C2.73873 16.4896 2.73873 16.173 2.93399 15.9778L6.1411 12.7707C6.45608 12.4557 6.99465 12.6788 6.99465 13.1242V15.6898C9.10524 16.4217 11.5508 15.9402 13.2459 14.2451C14.4225 13.0685 15.014 11.5325 15.0216 9.99506C15.0243 9.44278 15.4742 8.99726 16.0264 8.99996C16.5787 9.00266 17.0242 9.45256 17.0215 10.0048C17.0115 12.0494 16.2233 14.0961 14.6602 15.6593C12.5799 17.7396 9.64704 18.4467 6.99465 17.7754Z"}))}var Xs="background: linear-gradient(0, #111112 0%, #2F220E 40%, #5A4015 100%);",Zs="background: linear-gradient(0, #111112 0%, #2D0606 40%, #690E0E 100%);",js=vo`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,Js=vo`
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
`,Qs=m.button`
  animation: ${Js} 0s linear 300ms forwards, ${js} 0.2s ease-in-out 300ms forwards;
  border-radius: 100px 100px 0 0;
  border: none;
  cursor: pointer;
  display: block;
  height: 78px;
  margin-bottom: -20px;
  opacity: 0;
  outline: none;
  padding: 0px;
  position: absolute;
  top: -58px;
  visibility: hidden;
  width: 48px;

  > div {
    color: ${({unsupported:t})=>t?" #FF463C":"#FBB13B"};
    margin-top: -20px;
    transition: opacity 0.2s ease-in-out;

    > span {
      font-size: 11px;
      font-weight: 700;
    }
  }

  &:hover {
    > div {
      opacity: 0.8;
    }
  }

  ${({unsupported:t})=>t?Zs:Xs}
`;function Ht({isInScreenshotMode:t}){let{updateAvailable:e,isLoading:s}=ut();return s||!e||t?null:o(Qs,{unsupported:e.critical,onClick:()=>{w("extension_update_clicked",{version:e.version,critical:e.critical}),Gr()}},o("div",null,o(Qt,null),o("span",null,"Update")))}i();r();var hn=({hasClientVoices:t,route:e,showOnRight:s,toggleRoute:n,isPremium:a})=>{let l=Ie(),f=x.usePlayingState(),g=()=>{w("extension_usage_voice_opened",{source:"pill_player"}),n("/voices")},h=()=>t?l&&l.avatarImage?o(Ze,{alt:"Selected Voice",flag:l.avatarImage,variant:"circle"}):o(Rr,null):o(Br,null);return o(O,{showOnRight:s,text:!t&&!a?"No Free Voices":"Change Voice"},o(Ki,{"aria-label":b("VOICE_MENU_BUTTON"),"data-testid":y.VOICE_MENU_BUTTON,active:e==="/voices",onClick:g,disabled:f==="buffering"},h()))};var yn=["/featureprompt","/help","/speed","/voices"];function Hs({animate:t,isPDF:e,noSaveToMobile:s,hideSummaryButton:n,root:a,triggerSource:l}){let[f,g]=(0,S.useState)(!0),[h,P]=(0,S.useState)(!1),[c,T]=(0,S.useState)(!1),[R,W]=(0,S.useState)(!1),[k,V]=(0,S.useState)(!1),[ro,Uo]=(0,S.useState)(!1),bo=ct(),Co=ct(),{hidePlayerPill:io,route:C}=fe(Dr,["route","hidePlayerPill"]),Fo=(0,S.useRef)(null),oe=(0,S.useCallback)(()=>h?!1:!yn.some(B=>C.startsWith(B)),[C,h]),{isMouseOver:no,isMouseOverDelayed:G,handleMouseOver:Sn,handleMouseOut:bn,setIsMouseOut:Cn}=di({checkIsMouseOut:oe,onMouseOut:()=>{to("/")},delayMs:800});hi(),Ci(l),(0,S.useEffect)(()=>{Je().then(Uo)},[]);let $o=(0,S.useMemo)(()=>new Audio,[]),{autoSpeedUp:xn,screenshotMode:En,hasSeenSettingsModal:Tn}=oo(),te=ve(),{current:bt,NotificationBoard:In}=Oo(),so=_r(),{isDraggable:Ct}=En??{isDraggable:!1,helpMode:!1},ao=(0,S.useMemo)(()=>!G&&!h,[G,h]),ee=(0,S.useMemo)(()=>G||h,[G,h]),{seekNext:vn,seekPrevious:On,pause:wn}=mo,Rn=x.useTimeLoading(),Y=x.usePlayingState(),Bn=l!=="init"&&t,Nn=(0,S.useMemo)(()=>pe({key:"player-emotion-cache",container:a}),[a]),xt=(0,S.useMemo)(()=>so?so.status==="expired"||!Ot(so):!1,[so]),Wo=Fr(C),Et=(0,S.useMemo)(()=>Ur(C),[C]),re=x.useTime(),ie=!re.isLoading&&re.totalEstimatedDuration>0,Tt=Y==="playing"||Y==="buffering";(0,S.useEffect)(()=>{xt&&(async()=>{let lo=await Se();if(g(lo),!lo&&ie&&!Tt){if(await E("no-client-voices"),(await Kr("no-client-voices")).dismissedByUser)return;await _({duration:0,id:"no-client-voices",priority:151,showOnMobile:!1,timeSensitive:!0,render:()=>o(Ft,null)}),w("extension_no_client_voices_notification_shown",{action:"open"})}})()},[xt,ie,Tt]),(0,S.useEffect)(()=>{if(!e)return()=>{$o.pause()}},[e]),(0,S.useEffect)(()=>{(Y==="playing"||Y==="buffering"||Y==="errored")&&$o.pause()},[Y]),(0,S.useEffect)(()=>{if(Y==="playing"&&mt()){if(C==="/featureprompt/skipsentences"||te)return;to("/featureprompt/skipsentences")}},[te,C,Y]);let xo=C!=="/voices"&&C!=="/speed";(0,S.useEffect)(()=>{if(!xo)return;let B=Mr(a,{onDrag:An});return()=>B()},[a,xo]),(0,S.useEffect)(()=>{let B=lo=>{lo.type==="OPEN_SIDE_PANEL"||lo.type==="SIDE_PANEL_OPENED"?V(!0):lo.type==="SIDE_PANEL_CLOSED"&&V(!1)};return d.runtime.onMessage.addListener(B),()=>d.runtime.onMessage.removeListener(B)},[]);let It=(0,S.useCallback)(B=>{E("inline-player-first-time-popup"),to(B===C?"/":B)},[C]),An=(0,S.useCallback)(B=>{W(B.top>window.innerHeight/2),T(B.left<window.innerWidth/2)},[xo]);(0,S.useLayoutEffect)(()=>{a.style.bottom="15%"});let[kn,ne]=(0,S.useState)(1);Xr(ne);let _n=()=>C.startsWith("/voices")?{audioPlayer:$o,hasClientVoices:f,route:C,showOnRight:c}:C.startsWith("/speed")?{playbackSpeed:kn,setPlaybackSpeed:ne}:{},se=()=>{yn.some(B=>C.startsWith(B))&&Cn(!0),to("/")};st(a,se);let Ln=async()=>{if(A("close"),!at())return To("browser-action",{animate:!1},"pill-player");await q("SKIP_CLOSE_PILL_PLAYER_MODAL")?await ht():(wn(),$o.pause(),Lo.getState().showModal())},Mn=(0,S.useCallback)(()=>{On(),C==="/featureprompt/skipsentences"&&to("/")},[C]),Dn=(0,S.useCallback)(()=>{vn(),C==="/featureprompt/skipsentences"&&to("/")},[C]),Un=(0,S.useCallback)(()=>{A("upgrade_icon"),qo("pill_player_upsell")},[]),Fn=!n&&!j()&&!k&&ro;if(io)return null;let vt=yo(e||!1),Eo=vt==="content",ae=vt==="screenshot-only"&&!Eo,$n=(vt==="save-only"||!ao)&&!(ae||Ct)&&!s,le=bt?["screenshot-initial-hint-popup","screenshot-hint-popup"].includes(bt.id):!1,Wn=le?52:0,Vn=Eo;return o(ce,{value:Nn},o(ci,null),o(Er,{animate:!!Bn},Fn&&o(gn,{isDisabled:!f,ref:Fo,showOnRight:c}),o(br,{onMouseOver:Sn,onMouseOut:bn,isDraggingEnabled:xo},o(Ht,{isInScreenshotMode:Ct}),o(Cr,{showContentButtons:Eo,isDurationLoading:Rn,isDraggingEnabled:xo},o(vr,null,o(it,{showAnchor:le,topOffset:Wn,ref:Co,showOnRight:c,visible:!!bt},o(rt,null,o(In,null))),o(un,{isCollapsed:ao,ref:bo,route:C,showPointer:C.startsWith("/featureprompt"),showOnRight:c,showOnBottom:R,isPopupDesign:Wo.isPopupDesign,visible:!!Et},o(ln,{isPopupDesign:Wo.isPopupDesign},!Wo.isPopupDesign&&o(an,{alignLeft:C.startsWith("/featureprompt"),onClose:se,showSearch:C==="/voices",titleContent:Wo.titleContent??""}),Et&&o(Et,{..._n()}))),o(zt,{isCollapsed:ao},o(Ir,null,o(oi,{isPDF:!!e}),o(Mi,{...!f&&{isDisabled:!0},isPDF:e,showSettingsOnRight:c,onClick:tt}),!e&&Eo&&Tt&&o(p,null,o(M,{yAlign:!0,style:{position:"relative"}},o(O,{disableRelative:!0,showOnRight:c,text:"Skip Backward"},o(qt,{"aria-label":b("SKIP_SENTENCE_BACKWARD"),"data-testid":y.SKIP_SENTENCE_BACKWARD,onClick:Mn},o(Fe,null))),o(O,{disableRelative:!0,showOnRight:c,text:"Skip Forward"},o(qt,{"aria-label":b("SKIP_SENTENCE_FORWARD"),"data-testid":y.SKIP_SENTENCE_FORWARD,onClick:Dn},o(De,null))))),o(_t,null)),!e&&Eo&&o(co,{style:xn?{overflow:"visible"}:{}},o(hn,{hasClientVoices:f,route:C,showOnRight:c,toggleRoute:It,isPremium:!!so&&Ot(so)}),o(dn,{route:C,toggleRoute:It,showOnRight:c})),ae&&o(jt,{isPDF:!!e,disabled:Ct,showTooltipOnRight:c}),$n&&o(Wi,{showSettingsOnRight:c,isPDF:e}),!e&&!ao&&o(co,null,o(O,{showOnRight:c,text:"Get Help"},o(ji,{"aria-label":b("REPORT_A_PROBLEM"),"data-testid":y.REPORT_A_PROBLEM,active:C==="/help",onClick:()=>{A("report"),It("/help")}},o(Ue,null)))),(!ao||ee)&&Vn&&o(_t,null),!ao&&o(Tr,{className:"pill-player-bottom-section"},o(co,null,o(O,{showOnRight:c,text:"Open Library"},o(Ji,{"aria-label":b("VIEW_LIBRARY"),"data-testid":y.VIEW_LIBRARY,onClick:()=>{A("library"),uo("https://app.speechify.com")}},o(Ge,null))),o(O,{showOnRight:c,text:"Settings"},o(Xi,{"aria-label":b("PILL_PLAYER_SETTINGS"),"data-testid":y.PILL_PLAYER_SETTINGS,onClick:()=>{A("settings"),w("extension_usage_settings_clicked",{source:"pill_player"}),To("show-settings-modal")}},Tn?o(Ve,null):o(We,null)))),xt&&o(co,null,o(O,{showOnRight:c,text:"Upgrade to Premium"},o(Zi,{"aria-label":b("PILL_PLAYER_UPGRADE_TO_PREMIUM_BUTTON"),"data-testid":y.PILL_PLAYER_UPGRADE_TO_PREMIUM_BUTTON,onClick:Un},o(jo,null)))),ee&&o(co,{className:"dismiss"},o(Qi,{"aria-label":b("PILL_PLAYER_TURN_OFF_SPEECHIFY_BUTTON"),"data-testid":y.PILL_PLAYER_TURN_OFF_SPEECHIFY_BUTTON,onClick:Ln},o(Me,null)))))))),o(oa,{setIsBottomIconsHovered:P,state:Y,isMouseOver:no,showSettingsOnRight:c,route:C,triggerSource:l})))}var oa=({setIsBottomIconsHovered:t,isMouseOver:e,showSettingsOnRight:s,route:n,triggerSource:a})=>{let{screenshotMode:l}=oo(),f=l?.isDraggable,g=pt();return o(Or,{showAutoToggle:g,onMouseEnter:()=>e&&t(!0),onMouseLeave:()=>setTimeout(()=>t(!1),250)},f&&o(Gi,{showTooltipOnRight:s}),g&&o(Qr,{route:n,showOnRight:s,triggerSource:a}),o(Lr,{mode:"embedded"}))},Pn=Hs;var ta=342,ea=`position: fixed; z-index: 2147483645; top:calc(50% - ${ta/2}px); right: 18px; height: fit-content; font-size: initial;`,ra=async(t={},e,s,n,a)=>{if(await Qe())return St();let{hidePlayerPill:f,isPDF:g,noSaveToMobile:h,hideSummaryButton:P}=t;if(a?.aborted)return;if(zr().current?.id==="force-login"||e==="init"&&f)return St();Io.destroyHost(Ro),Io.acquireShadow(Ro,{hostStyles:"position: absolute; bottom: 0; right: 0;"}),Mt();let T=document.createElement("div");T.style.cssText=ea;let R=ho()&&!!Ar().docTitle;return ue(o(Pn,{animate:s.animate!==!1,isPDF:g||R,noSaveToMobile:h,hideSummaryButton:P,root:T,triggerSource:e}),T),Io.mountRoot(Ro,Oe,T,{deferMs:100,abortSignal:a,onMounted:()=>{Lt.getState().setVisible(!0)}}),kr(),await E("feedback-form"),Rt(),St()};function St(){return()=>{Mt(),Io.destroyRoot(Ro),Lt.getState().setVisible(!1),Rt(),E()}}var Xg=ra;export{Xg as default,St as destroyPillPlayer};
//# sourceMappingURL=init-GGGL42SZ.js.map
