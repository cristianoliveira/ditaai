(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{b as $}from"./chunk-SJAKNTE2.js";import{Ad as _,Zf as N,_f as L,md as v,vb as x,wb as R,xd as A,yd as b,zb as M}from"./chunk-324T2OUF.js";import{a as k}from"./chunk-JJ7NA4NT.js";import{i as l,q as I}from"./chunk-KJ3NFIHV.js";import{g as w}from"./chunk-H3LCZSHS.js";import{M as y}from"./chunk-FLMM6JC5.js";import{d as E,g as t,i as s,n as i}from"./chunk-CAO5DZGK.js";i();t();var X=l.div`
  ${({isThemeSwitching:o})=>o?`* {
        transition-duration: ${x}ms !important;
        transition-property: all;
        transition-timing-function: ease;
      }`:""}
`,K=o=>{let{isThemeSwitching:n,initialized:e}=R();return e?s(X,{isThemeSwitching:n,...o}):null};i();t();async function ro(o){b.getHasSidepanel()?await N(o):y("show-side-player-settings",{route:o??"/settings"})}async function ao(){b.getHasSidepanel()?await L():y("hide-side-player-settings")}i();t();var d=E(w());i();t();var Z=l.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${_+1};
`,j=l.div`
  position: absolute;
  padding: 4px;
  border-radius: 6px;
  font-family: system-ui;
  ${I["body-7"]};
  color: ${({isDarkMode:o})=>M({isDarkMode:o,color:"icn-txt-prim-inv"})};
  display: flex;
  gap: 6px;
  white-space: nowrap;
  ${({animate:o})=>o?"transition: all 0.33s cubic-bezier(0.14, 1, 0.34, 1);":""};

  opacity: ${({visible:o})=>o?1:0};
  ${({visible:o})=>!o&&"pointer-events: none;"}

  ${({isOnTop:o})=>o?"top: -16px; left: 50%; transform: translate(-50%, -100%)":"top: 50%; transform: translateY(-50%)"};

  ${({showOnRight:o,isOnTop:n,visible:e})=>n?"":o?`left: ${e?"100%":"calc(100% - 10px)"}; margin-left: 4px;`:`right: ${e?"100%":"calc(100% + 10px)"}; margin-right: 4px;`}

  ${({isDarkMode:o})=>o?"background: #FFFFFF;":"background: #1E1E1F99; backdrop-filter: blur(24px);"};
`,g={TooltipWrapper:Z,Tooltip:j};i();t();var r=E(w());var a=k(()=>({skipAnimation:!1})),O=()=>{let[o,n]=(0,r.useState)(!1),e=(0,r.useRef)(),p=(0,r.useRef)(),u=(0,r.useCallback)(()=>{v.dismiss("inline-player-first-time-popup");let f=a.getState().skipAnimation;clearTimeout(a.getState().timeoutId),p.current=window.setTimeout(()=>{n(!0),e.current=window.setTimeout(()=>{a.setState({skipAnimation:!0})},330)},f?0:500)},[]),S=(0,r.useCallback)(()=>{clearTimeout(p.current),n(!1),a.setState({timeoutId:window.setTimeout(()=>{clearTimeout(e.current),a.setState({skipAnimation:!1})},1500)})},[]);return{showTooltip:o,onMouseEnter:u,onMouseLeave:S}};var _o=({children:o,disabled:n,text:e,visible:p=!0,forceShow:u=!1,style:S,tooltipStyle:f,className:D,isOnTop:F})=>{let C=a(h=>h.skipAnimation),W=A(h=>h.showOnRight),{onMouseLeave:H,onMouseEnter:Y,showTooltip:z}=O(),G=$(),[T,P]=(0,d.useState)(!1),U=()=>P(!0);(0,d.useEffect)(()=>{T&&setTimeout(()=>{P(!1)},500)},[T]);let B=p&&(z&&!T||u)&&!n&&!!e;return s(g.TooltipWrapper,{onClick:U,onMouseLeave:H,onMouseEnter:Y,style:S,className:D},s(g.Tooltip,{visible:B,"aria-roledescription":"tooltip",showOnRight:W,isOnTop:F,isDarkMode:G,style:f,animate:!C},e),o)};export{K as a,ro as b,ao as c,_o as d};
//# sourceMappingURL=chunk-IS5AWJ72.js.map
