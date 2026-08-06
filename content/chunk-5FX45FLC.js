(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as co,b as go,c as O}from"./chunk-SIYTHBJW.js";import{a as uo,b as po,c as fo,d as mo}from"./chunk-3NSPD6E4.js";import{a as bo}from"./chunk-L6KF6DLO.js";import{C as G,D as T}from"./chunk-EIQQL76B.js";import{a as lo}from"./chunk-4HHZO7SF.js";import{a as ao}from"./chunk-UYXV6EG6.js";import{d as oo}from"./chunk-IQTXTTBF.js";import{bd as Z,cd as H,jc as Q,jf as to,kf as eo,lf as no,mf as io,of as ro,vf as so,wf as V,yg as xo,zg as ho}from"./chunk-324T2OUF.js";import{a as J,e as q,f as x,g as h,i as n,l as r,n as d,q as L}from"./chunk-KJ3NFIHV.js";import{a as u,b as C,c as M,d as D,f as Lo}from"./chunk-H3LCZSHS.js";import{M as K}from"./chunk-FLMM6JC5.js";import{g as P,i as o,j as w,n as S}from"./chunk-CAO5DZGK.js";S();P();Lo();S();P();var Go=n.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 320px;
  z-index: 10000;
`,Oo=n.div`
  background: ${r["bg-prim-w-100"]};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
`,Ro=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,Yo=n.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`,Wo=n(ao)`
  cursor: pointer;
  fill: ${r["icn-txt-sec"]};
  position: absolute;
  right: 16px;
  top: 16px;

  &:hover {
    fill: ${r["icn-txt-prim"]};
  }
`,_o=n.div`
  color: ${r["icn-txt-prim"]};
  ${L["subheading-5"]}
  margin-bottom: 16px;
`,vo=n.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  ${L["body-6"]}

  &:last-child {
    margin-bottom: 0;
  }
`,yo=n(vo)`
  background: ${r["sf-prim-cta"]};
  color: white;

  &:hover {
    background: ${r["sf-prim-cta-hov"]};
  }

  &:active {
    background: ${r["sf-prim-cta-pres"]};
  }
`,No=n(vo)`
  background: transparent;
  color: ${r["icn-txt-prim"]};

  &:hover {
    background: ${r["bg-sec-0-90"]};
  }

  &:active {
    background: ${r["bg-sec-0-80"]};
  }
`;function Po({onDisableSession:t,onDisablePermanent:i,onCancel:y}){let l=window.location.hostname.replace(/^www\./,"");return o(Go,{onClick:s=>s.stopPropagation(),onMouseEnter:s=>s.stopPropagation(),onMouseLeave:s=>s.stopPropagation()},o(Oo,null,o(Ro,null,o(Yo,null,o(Z,null),o(H,null))),o(Wo,{onClick:y}),o(_o,null,"Turn Off Voice Dictation for ",l,"?"),o(yo,{onClick:t},"Yes, for this session"),o(yo,{onClick:i},"Yes, from now on"),o(No,{onClick:y},"No, don't turn it off")))}var Fo="0px 4px 6px 0px rgba(0, 0, 0, 0.32)",jo=h`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Ao=h`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`,Xo=h`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,zo=h`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`,Uo=n.button`
  align-items: center;
  background-color: ${d["sf-prim-w-100"]};
  color: ${d["bg-prim-inv-b-w"]};
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: ${({expanded:t})=>t?"32px":"48px"};
  justify-content: center;
  padding: 0;
  width: ${({expanded:t})=>t?"32px":"48px"};
  &:hover {
    svg g {
      opacity: 0.75;
    }
  }
`,Ko=n.div`
  align-items: center;
  background-color: ${d["sf-prim-w-100"]};
  border: none;
  border-radius: 9999px;
  box-shadow: ${Fo};
  color: ${d["bg-prim-inv-b-w"]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 48px;
  gap: 8px;
  will-change: height, transform, opacity;
  transition: height 0.2s ease-out;

  /* Slide in/out animations based on mode */
  ${({mode:t,isExiting:i})=>t==="standalone"?i?x`
          animation: ${Ao} 0.2s ease-out forwards;
        `:x`
        opacity: 0;
        transform: translateX(100%);
        animation: ${jo} 0.2s ease-out forwards;
        animation-delay: 0.1s;
      `:i?x`
        animation: ${zo} 0.2s ease-out forwards;
      `:x`
      opacity: 0;
      transform: translateY(-100%);
      animation: ${Xo} 0.2s ease-out forwards;
      animation-delay: 0.1s;
    `};

  padding-top: ${({expanded:t})=>t?"8px":"0"};

  height: ${({expanded:t,isHovered:i})=>t?"120px":i?"96px":"48px"};

  justify-content: ${({expanded:t,isHovered:i})=>t||i?"flex-start":"center"};
`,Jo=n.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 100%;
  color: ${d["bg-prim-inv-b-w"]};
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  padding: 0;
  width: 32px;

  &:hover {
    background-color: ${d["bg-sec-0-80"]};
  }
`,wo=n.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`,qo=n.div`
  position: fixed;
  top: calc(50vh - 48px);
  right: 18px;
  z-index: 2147483643;
`,Qo=n.div`
  position: relative;
`;function Mt({mode:t,shadowRoot:i,className:y=""}){let l=no(),{shortcuts:s}=lo(),So=to(e=>l.status==="recording"?e:0),Co=M(null),k=eo(),R=go(),p=bo(),{voiceDictation:Y}=Q(),E=co(e=>e.isVisible),W=O(e=>e.isDisabledForSession),[_,Do]=u(!1),a=l.status==="initializing"||l.status==="finalizing",f=l.status==="recording",N=l.status==="error",c=f||a,[F,$]=u(!1),m=M(),[To,j]=u(!1),[ko,A]=u(!1),[I,b]=u(!1);C(()=>{(async()=>{let g=await ro();Do(g)})()},[]);let X=D(()=>{if(!R||W||Y===!1)return!1;let e=xo()&&!ho()&&_,g=k&&k.inputtableElement!==null;return e||g?t==="standalone"?!E&&!p:!p:!1},[k,R,p,Y,_,E,W,t]),Eo=()=>{O.getState().disableForSession(),K("destroy",{},"mic-button"),b(!1)},$o=async()=>{let e=window.location.hostname.replace(/^www\./,""),{setVoiceDictation:g}=await import("./settings-5DAUUGBY.js");await g(!1,e),b(!1)},Io=()=>{f||(m.current=setTimeout(()=>{$(!0)},500))},Bo=()=>{m.current&&clearTimeout(m.current),I||$(!1)};C(()=>()=>{m.current&&clearTimeout(m.current)},[]),C(()=>{if(!X){b(!1),$(!1),j(!0);let e=setTimeout(()=>{A(!1)},200);return()=>clearTimeout(e)}j(!1),A(!0)},[X]);let v=D(()=>(s["voice-typing"]?.shortcut??"").trim().length>0,[s]),z=D(()=>{if(t==="standalone"&&i)return J({key:"mic-button-emotion-cache",container:i})},[t,i]),B=t==="standalone"?"mic_button_standalone":"mic_button_embedded";if(!ko)return null;let Mo=o(Ko,{expanded:c,isHovered:F&&!f&&!a,mode:t,isExiting:To,onMouseEnter:Io,onMouseLeave:Bo},c&&o(T,{text:o(w,null,v?"Tap to Stop":"Stop Recording"," ",v&&o(G,{keys:s["voice-typing"]?.shortcut||""}))},o(uo,{tabIndex:-1,disabled:a,style:a?{opacity:.5,cursor:"not-allowed"}:void 0,onClick:e=>{e.preventDefault(),a||V({source:B})}})),!c&&o(T,{text:o(w,null,v?"Tap to Speak":"Click to Speak"," ",v&&o(G,{keys:s["voice-typing"]?.shortcut||""}))},o(Uo,{expanded:!1,ref:Co,onClick:()=>{N&&io(),so(!1,B)},tabIndex:-1},N?o("div",null,"!"):o(po,null))),a&&o(wo,null,o(mo,null)),f&&o(wo,null,o(fo,{level:So})),(F&&!f&&!a||c)&&!I&&o(T,{text:c?"Discard Recording":"Disable"},o(Jo,{disabled:a,style:a?{opacity:.5,cursor:"not-allowed"}:void 0,onClick:e=>{e.preventDefault(),e.stopPropagation(),!a&&(c?V({cancel:!0,source:B}):b(!0))}},o(oo,null))),I&&o(Po,{onDisableSession:Eo,onDisablePermanent:$o,onCancel:()=>b(!1)}),c&&o("div",{style:{width:"2px"}})),U=o(t==="standalone"?qo:Qo,{className:y},Mo);return t==="standalone"&&z?o(q,{value:z},U):U}export{Mt as a};
//# sourceMappingURL=chunk-5FX45FLC.js.map
