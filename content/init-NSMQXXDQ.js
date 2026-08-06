(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as k,b as O,c as j,d as G}from"./chunk-3NSPD6E4.js";import{C as y,D as C}from"./chunk-EIQQL76B.js";import{a as L}from"./chunk-4HHZO7SF.js";import"./chunk-UYXV6EG6.js";import{d as b}from"./chunk-IQTXTTBF.js";import"./chunk-ER3BBI6X.js";import"./chunk-436MFEND.js";import"./chunk-UBYLRYAE.js";import{jf as A,kf as $,lf as B,qa as F,tg as K,vf as z,wf as w,wg as U,yb as N}from"./chunk-324T2OUF.js";import"./chunk-JJ7NA4NT.js";import{a as R,e as V,g as _,i as c,l as r}from"./chunk-KJ3NFIHV.js";import{a as h,d as f,f as H,g as tt}from"./chunk-H3LCZSHS.js";import"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as X,g as p,i as t,j as a,k as D,m as Z,n as m}from"./chunk-CAO5DZGK.js";m();p();Z();m();p();var Y=X(tt());H();var J=_`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,et=c.div`
  position: absolute;
  top: ${({cursorPosition:o})=>o.y-16}px;
  left: ${({cursorPosition:o})=>o.x-8}px;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: ${({darkMode:o})=>o?r["icn-txt-white"]:r["icn-txt-black"]};
  transition-property: height, width, transform;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease-in-out;
  will-change: transform;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  padding: 0;
  margin: 0;
  gap: 4px;
  padding: 2px;
  transform-origin: center center;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.32);
  opacity: 0;
  animation: ${J} 0.3s ease-in-out forwards;
  ${({state:o})=>{switch(o){case"inactive":return`
          height: 16px;
          width: 16px;
          background: transparent;
          transform: translate(0, 0);
          box-shadow: none;
          .dot {
            height: 8px;
            width: 8px;
          }
        `;case"hovered":return`
          height: 20px;
          width: 20px;
          transform: translate(-2px, -4px);

          .dot {
            height: 16px;
            width: 16px;
          }
        `;case"active":return`
          height: 20px;
          width: 60px;
          transform: translate(-2px, -4px);
          button {
            height: 16px;
            width: 16px;
          }
          > svg {
            width: 20px;
            height: 16px;
          }
          .dot {
            opacity: 0;
          }
        `;case"waiting":return`
          height: 20px;
          width: 60px;
          transform: translate(-2px, -4px);
          button {
            height: 16px;
            width: 16px;
            opacity: 0.5;
            cursor: not-allowed;
          }
          .dot {
            opacity: 0;
          }
        `}}}
`,it=c.div`
  position: absolute;
  will-change: width, height;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 100%;
  z-index: 0;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
  background: ${({darkMode:o})=>o?r["icn-txt-white"]:r["icn-txt-black"]};
`,rt=c.button`
  background: ${({darkMode:o})=>o?r["icn-txt-white"]:r["icn-txt-black"]};
  height: 16px;
  width: 16px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  opacity: 0;
  animation: ${J} 0.3s ease-in-out forwards;
`,W=c.button`
  background: ${({darkMode:o})=>o?r["bg-tert-inv-80-10"]:r["bg-tert-10-80"]};
  height: 16px;
  width: 16px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;function q({root:o}){let n=B(),l=A(),i=N(),{shortcuts:s}=L(),[d,v]=h(!1),[P,T]=h(!1),[I,S]=h(!1);(0,Y.useEffect)(()=>{let e=null;return d?e=setTimeout(()=>{S(!0)},1e3):(S(!1),e&&clearTimeout(e)),()=>{e&&clearTimeout(e)}},[d]);let g=n.status==="initializing"||n.status==="finalizing",x=n.status==="recording",E=f(()=>g?"waiting":x||P?"active":d?"hovered":"inactive",[g,x,P,d]),u=f(()=>(s["voice-typing"]?.shortcut??"").trim().length>0,[s]),Q=f(()=>R({key:"dictation-emotion-cache",container:o}),[o]),M=$(e=>e.cursorPosition);return M?t(V,{value:Q},t(et,{onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),state:E,darkMode:i,cursorPosition:M},t(it,{className:"dot",darkMode:i}),E==="hovered"&&t(C,{isTop:!0,disabled:!I,text:t(a,null,u?"Tap to Speak 2":"Click to Speak"," ",u&&t(y,{keys:s["voice-typing"]?.shortcut||""}))},t(rt,{darkMode:i,onPointerDownCapture:e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),T(!0),z(!1,"caret_pill"),setTimeout(()=>{T(!1)},300)}},t(O,{darkMode:i}))),g&&t(a,null,t(k,{innerRectSize:6,disabled:!0,style:{opacity:.5,cursor:"not-allowed"}}),t(G,{darkMode:i}),t(W,{darkMode:i,disabled:!0,style:{opacity:.5,cursor:"not-allowed"}},t(b,null))),x&&t(a,null,t(C,{isTop:!0,disabled:!I,text:t(a,null,u?"Tap to Stop":"Stop Recording"," ",u&&t(y,{keys:s["voice-typing"]?.shortcut||""}))},t(k,{innerRectSize:6,onPointerDown:e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),w({source:"caret_pill"})}})),t(j,{level:l,darkMode:i}),t(W,{darkMode:i,onPointerDown:e=>{e.preventDefault(),e.stopPropagation(),w({cancel:!0,source:"caret_pill"})}},t(b,null))))):null}function nt(){let o=document.createElement("div");o.id="speechify-cursor-dictation-button",o.style.cssText="z-index: 2147483644; position: absolute; top: 0; left: 0; height: 0; width: 0;",document.body.appendChild(o);let n=o.attachShadow({mode:"open"});return D(t(q,{root:n}),n),()=>{o.remove()}}async function at(){if(!(await K("ceCursorDictation")==="enabled"))return()=>{};let l=await F(),i=U();return(l.pillPlayer?.domainFeatures?.[i]??{}).cursorDictationEnabled??l.cursorDictationEnabled??!0?nt():()=>{}}export{at as default,nt as renderCursorDictationButton};
//# sourceMappingURL=init-NSMQXXDQ.js.map
