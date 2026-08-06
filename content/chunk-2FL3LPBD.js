(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{b as $}from"./chunk-FESGJ6GY.js";import{k as S}from"./chunk-ER3BBI6X.js";import{a as R}from"./chunk-436MFEND.js";import{b as T}from"./chunk-2MJTQY6T.js";import{$g as E,Lc as L,Mc as k,Nc as P,e as v,ee as N}from"./chunk-324T2OUF.js";import{i as B}from"./chunk-KJ3NFIHV.js";import{g as G}from"./chunk-H3LCZSHS.js";import{M as h}from"./chunk-FLMM6JC5.js";import{d as q,g as y,i as u,n as I}from"./chunk-CAO5DZGK.js";I();y();var n=q(G());var H=B(v)`
  position: relative;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  gap: 6px;
  margin-left: 8px;
  padding: 4px ${({paddingX:o})=>o};
  border-radius: 6px;

  &:hover {
    background-color: ${({styleThemes:o})=>o.hoverBackgroundColor};

    > button {
      ${({styleThemes:o})=>o.hoverButtonColor?`border: 1.8px solid ${o.hoverButtonColor}`:""};
      color: ${({styleThemes:o})=>o.hoverButtonColor};
    }
  }

  > button {
    background: none;
    border: 1.8px solid ${({styleThemes:o})=>o.buttonColor};
    color: ${({styleThemes:o})=>o.buttonColor};
  }

  &:active {
    background-color: ${({styleThemes:o})=>o.activeBackgroundColor};
  }
`;function Y({messageViewElement:o,enabled:F,getContent:i,setupContentObserver:s,lightTheme:A,darkTheme:D,fontFamily:M,paddingX:O="6px",hideLabel:_=!1}){let{usePlayingState:Q,useCurrentContent:W}=k,X=N(o),[a,c]=(0,n.useState)(null),{play:f,pause:g}=L,d=Q(),m=W(),e=!!m&&m?.id===a?.id,l=!!e&&d==="playing",p=!!e&&d==="buffering",z=!!e&&d==="errored",b=(0,n.useRef)(e);b.current=e,(0,n.useEffect)(()=>{let t=!1;return(async()=>{let r=await i(o);t||c(r)})(),()=>{t=!0}},[o,i]),(0,n.useEffect)(()=>!o||!s?void 0:s(o,async({checkIfActive:r})=>{if(!o.isConnected||r&&!b.current)return;let j=await i(o);c(j)}),[o,s,i]);let U=(0,n.useCallback)(async t=>{if(o&&(t.stopPropagation(),T()||h("browser-action",{animate:!1},"pill-player"),E("individual-post-button-hint"),!p)){if(l)return g();if(e)return f();if(!e&&a){let r=P(a,!0);c(r)}}},[p,l,e,f,g,a,o]),C=$(U);if(!F)return null;let x=X?D:A;return u(H,{styleThemes:x,paddingX:O,onClick:C},u(S,{isLoading:p,isLoadingFailed:z,isPlaying:l,iconSize:"20px",onClick:C}),!_&&u(R,{color:x.buttonColor,fontSize:"14px",fontFamily:M,letterSpacing:"0.2px",medium:!0},l?"Pause":"Listen"))}export{Y as a};
//# sourceMappingURL=chunk-2FL3LPBD.js.map
