(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{b as D}from"./chunk-2MJTQY6T.js";import{Bc as N,Dd as _,Ec as F,Oc as B,_b as M,kb as v,sb as G,yb as I,zb as f}from"./chunk-324T2OUF.js";import"./chunk-JJ7NA4NT.js";import{_ as k,ba as R,i as C,l as a,m as A}from"./chunk-KJ3NFIHV.js";import{g as w}from"./chunk-H3LCZSHS.js";import{M as T}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as L,g as l,i as r,k as d,m as J,n as s}from"./chunk-CAO5DZGK.js";s();l();J();s();l();var y=L(w());s();l();var g=L(w()),H=20,ee="p, li, div, span",O=e=>n=>!(e.ignoredSelectors?.some(o=>n.classList.contains(o))||e.ignoredSelectorForCodeSegment&&e.ignoredTagForCodeSegment&&n.classList.contains(e.ignoredSelectorForCodeSegment)&&n.tagName.toLowerCase()===e.ignoredTagForCodeSegment),P=e=>{let n="";return e.childNodes.forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){let t=window.getComputedStyle(o);t.display!=="none"&&t.visibility!=="hidden"&&(n+=P(o))}else o.nodeType===Node.TEXT_NODE&&(n+=o.textContent)}),n},te=e=>e instanceof Node?P(e).trim():e.text,oe=e=>e.replace(/\s+/g," ").trim(),ne=e=>oe(P(e)),q=e=>{let n=e.parentElement,o=getComputedStyle(e,null),t=n?getComputedStyle(n,null):null;return o.display!=="none"&&o.visibility!=="hidden"&&t?.getPropertyValue("display")!=="none"},re=(e,n)=>{let o=Array.from(e.querySelectorAll(ee)).filter(t=>!q(t)||!O(n)(t)||t.closest('button, [role="button"], #speechify-google-gen-ai-player-root')?!1:ne(t).length>=H);return o.filter(t=>!o.some(i=>i!==t&&t.contains(i)))},ie=e=>{let n=Array.from(document.querySelectorAll(e.contentSelector)),o=document.querySelector(e.contentMainSelector);return(n.length?n:o?re(o,e):[]).filter(q).filter(O(e))},V=e=>{let[n,o]=(0,g.useState)(null),t=document.querySelector(e.contentMainSelector);return(0,g.useEffect)(()=>{(async()=>{let m={getContent:await B(async()=>({content:ie(e),chunksAfter:0,chunksBefore:0})),converter:i=>({text:te(i),ref:{ref:i}}),options:{autoplay:!0,sideEffects:!1},metadata:{source:"GoogleGenAIResult"}};o(m)})()},[t]),{currentContent:n}};s();l();var K=()=>r("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{marginLeft:"1px"}},r("path",{d:"M6.6875 3.24223C7.27083 3.57902 7.27083 4.42099 6.6875 4.75777L1.8125 7.57236C1.22917 7.90914 0.5 7.48816 0.5 6.81458L0.5 1.18542C0.5 0.511842 1.22917 0.0908579 1.8125 0.427646L6.6875 3.24223Z",fill:a["icn-txt-prim"]})),$=()=>r("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M0.512817 1.125C0.512817 0.641751 0.904568 0.25 1.38782 0.25H2.13782C2.62107 0.25 3.01282 0.641751 3.01282 1.125V6.875C3.01282 7.35825 2.62107 7.75 2.13782 7.75H1.38782C0.904568 7.75 0.512817 7.35825 0.512817 6.875V1.125Z",fill:a["icn-txt-prim"]}),r("path",{d:"M4.98716 1.125C4.98716 0.641751 5.37891 0.25 5.86216 0.25H6.61216C7.09541 0.25 7.48716 0.641751 7.48716 1.125V6.875C7.48716 7.35825 7.09541 7.75 6.61216 7.75H5.86216C5.37891 7.75 4.98716 7.35825 4.98716 6.875V1.125Z",fill:a["icn-txt-prim"]}));var le=C.div`
  display: flex;
  gap: 4px;
  padding: 6px 10px 6px 6px;
  align-items: center;
  background: ${({isDarkMode:e})=>f({isDarkMode:e,color:"bg-blue"})};
  border-radius: 9999px;
  cursor: pointer;

  .close-icon {
    display: none;
    color: ${({isDarkMode:e})=>f({isDarkMode:e,color:"icn-txt-sec"})};
  }

  &:hover {
    padding-right: 6px;

    .close-icon {
      display: block;
    }
  }
`,se=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({isDarkMode:e})=>f({isDarkMode:e,color:"sf-prim-cta"})};
  width: 20px;
  height: 20px;
  border-radius: 100%;
`,ae=({isPlaying:e,isLoading:n})=>n?r(_,{color:a["icn-txt-white"],width:"12px",height:"12px"}):e?r($,null):r(K,null),Q=({config:{selectors:e,playButtons:n}})=>{let o=I(),t=n?.google?.listenToAnswer===!1,[m,i]=(0,y.useState)(!t),{currentContent:S}=V(e),{state:h,play:Z,pause:U,queueAndPlayContent:X,isActive:u}=F(S),{duration:j}=N(S,u),p=u&&h==="playing",b=u&&h==="buffering",z=async c=>{if(c.preventDefault(),c.stopPropagation(),D()||T("browser-action",{animate:!1},"pill-player"),!u)return X();if(!b){if(p)return U();if(!p)return Z()}},Y=c=>{c.stopPropagation(),M.playButtons.set("google-gen-ai-result","google","listenToAnswer",!1),i(!1)};return(0,y.useEffect)(()=>{i(!t)},[t]),m?r(le,{onClick:c=>z(c),isDarkMode:o},!j.isLoading&&r(se,{isDarkMode:o},r(ae,{isLoading:b,isPlaying:p})),r(R,{font:"subheading-6",style:{color:o?a["icn-txt-prim"]:A["icn-txt-prim"]},className:"label"},p?"Pause":"Listen"),r(k,{className:"close-icon",backgroundColor:"transparent",onClick:Y})):null};var W="speechify-google-gen-ai-player-root";async function ce(e){let n=e.selectors;await v(n.mainSelector),me(),await G(800);let o=document.querySelector(`${n.mainSelector}`);if(o){let t=document.createElement("span");t.id=W,t.style.display="flex",t.style.marginTop="10px",t.style.marginBottom="10px",o.appendChild(t),d(r(Q,{config:e}),t)}}var me=()=>{let e=document.querySelector(`#${W}`);e&&(e.remove(),d(null,e))};export{ce as default};
//# sourceMappingURL=init-EZSTJGXF.js.map
