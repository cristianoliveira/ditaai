(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{b as fo,c as ho}from"./chunk-L6KF6DLO.js";import{a as j}from"./chunk-4JXL3YI4.js";import{a as go}from"./chunk-DGL3OLHJ.js";import{b as mo}from"./chunk-EIQQL76B.js";import{a as xo}from"./chunk-4HHZO7SF.js";import{d as zt,e as Ut,n as Mt}from"./chunk-IQTXTTBF.js";import{a as mt,e as xt}from"./chunk-VDM2FHV6.js";import{a as bo}from"./chunk-BMN72JVI.js";import{$b as Lt,$c as ke,Ae as no,E as de,Fe as oe,G as It,Ge as io,He as lo,Je as so,Ke as ao,Ma as ve,Me as ro,Na as we,Oa as st,Ob as Rt,Oe as ue,Pa as at,Pe as ne,Qe as co,Rc as x,Re as po,Se as uo,Tc as $t,Ud as pe,Ue as Z,Wa as kt,Xa as Ce,Ye as gt,_b as S,_c as Ie,a as Cn,ac as rt,cc as Nt,ec as Ot,f as St,fe as jt,ge as qt,he as Wt,ic as _t,id as Gt,ie as Kt,jc as Be,je as ct,kc as dt,ke as Yt,le as Vt,ob as At,oe as Xt,pe as Jt,qe as pt,re as Qt,sb as Se,se as ut,te as Zt,u as Bt,ue as Ht,ve as eo,wg as Ae,xe as to,ye as oo}from"./chunk-324T2OUF.js";import{h as Sn}from"./chunk-JJ7NA4NT.js";import{i as t,l as o}from"./chunk-KJ3NFIHV.js";import{g as te}from"./chunk-H3LCZSHS.js";import{y as Te}from"./chunk-FLMM6JC5.js";import{d as ce}from"./chunk-Y6YYRFL5.js";import{d as J,f as O,g as v,i as e,j as M,n as w}from"./chunk-CAO5DZGK.js";w();v();var wn=J(Cn());w();v();var Q=J(te()),vo=J(Sn());w();v();var yo=t.button`
  background: ${o["sf-prim-w-80"]};
  border: unset;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  outline: unset;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  width: 20px;

  & > svg {
    fill: ${o["icn-txt-sec"]};
  }

  &:hover {
    & > svg {
      fill: ${o["icn-txt-prim"]};
    }
  }
`,Ei=t.div`
  align-items: center;
  background: ${o["bg-sec-0-100"]};
  border-radius: 4px;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 6px;

  svg {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    padding: 0.834px 0px 0.561px 0px;
    width: 20px;
  }
`,Ci=t.div`
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
`,Re=t.div`
  align-items: flex-start;
  align-self: stretch;
  background: radial-gradient(
      43.11% 51.96% at 30.5% 59.96%,
      rgba(45, 214, 92, 0.08) 0%,
      rgba(53, 143, 78, 0) 100%
    ),
    radial-gradient(
      61.75% 102.86% at 76.75% 70.46%,
      rgba(226, 41, 197, 0.12) 0%,
      rgba(205, 62, 182, 0) 100%
    ),
    radial-gradient(
      96.95% 118.17% at 73% 26.15%,
      rgba(48, 138, 221, 0.2) 0%,
      rgba(29, 41, 53, 0) 100%
    ),
    linear-gradient(155deg, rgba(145, 205, 255, 0.12) 0%, rgba(145, 205, 255, 0) 102.86%), #111112;
  backdrop-filter: blur(21px);
  border-radius: 8px;
  box-shadow: 0px 0px 12px 2px rgba(61, 144, 243, 0.25);
  display: flex;
  gap: 8px;
  padding: 33px 20px 25px 22px;
`,Le=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 16px;
  max-width: 268px;
`,Ne=t.div`
  align-items: center;
  border-radius: 10px;
  top: 4px;
  color: #747580;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.12px;
  line-height: 16px;
  padding: 4px;
  position: absolute;
  right: 8px;
`,Oe=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`,_e=t.div`
  align-items: flex-start;
  align-self: stretch;
  color: ${o["icn-txt-prim"]};
  display: flex;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  gap: 6px;
  letter-spacing: 0.12px;
  line-height: 16px;

  div {
    width: 16px;
    height: 16px;
  }
`,$e=t.div`
  color: ${o["icn-txt-prim"]};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.16px;
`,Si=t.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  padding: 20px 0 16px 24px;

  height: min(636px, 90vh);
  overflow-y: auto;

  &.scrollable {
    & > div:nth-child(2) {
      overflow: visible;
    }
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #8791a0;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,In=t.div`
  position: absolute;
  right: 16px;
  top: -4px;
`,kn=t(mo)`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  justify-content: flex-start;
`,An=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 656px;

  svg {
    width: 14px;
    height: 14px;
  }
`,Bi=t(Mt)`
  @media (max-width: 1140px) {
    width: 32px;
    height: 32px;
  }
`,Ii=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-shrink: 0;
  gap: 6px;
  margin-bottom: 20px;
  padding: 0 12px;

  @media (max-width: 1140px) {
    padding: 0 7px;
  }
`,ki=t.div`
  align-items: flex-start;
  background-color: ${o["bg-sec-0-100"]};
  border-radius: 20px;
  color: ${o["icn-txt-prim"]};
  display: inline-flex;
  font-family: system-ui, sans-serif;
  position: relative;
  z-index: 2147483646;
`,Y=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 20px;
  padding: 24px 0px 16px 0;
  overflow: auto;
  scrollbar-width: none;
`,W=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
`,ge=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  width: 388px;
  height: 140px;
`,me=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 16px;
  width: 420px;
`,ft=t(me)`
  padding: 0px;
  position: relative;
`,De=t.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`,Ai=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-110"]};
  border-bottom-left-radius: 20px;
  border-right: 1px solid ${o["brdr-quat-30-70"]};
  border-top-left-radius: 20px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  height: min(624px, 90vh);
  overflow-y: auto;
  padding: 20px 12px 12px 12px;
  width: 220px;

  @media (max-width: 1140px) {
    width: 46px;

    .sidebar_header {
      display: none;
    }

    .sidebar_upsell {
      padding: 0;

      span {
        display: none;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #8791a0;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,Ri=t.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Li=t.div`
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  color: ${o["icn-txt-sec"]};
  cursor: pointer;

  display: flex;
  gap: 8px;
  padding: 6px 12px;

  img {
    border-radius: 2px;
    height: 20px;
    overflow: hidden;
    width: 20px;
  }

  svg {
    fill: ${o["icn-txt-sec"]};
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${o["sf-prim-hov-w-110"]};
    color: ${o["icn-txt-prim"]};

    svg {
      fill: ${o["icn-txt-prim"]};
    }
  }

  ${({active:n})=>n&&`
    background-color: ${o["sf-prim-pres-w-110"]};
    color: ${o["icn-txt-prim"]};

    svg {
      fill: ${o["icn-txt-prim"]};
    }
  `}

  @media (max-width: 1140px) {
    padding: 6px;

    & img {
      margin-left: auto;
      margin-right: auto;
    }

    & > svg {
      margin-left: auto;
      margin-right: auto;
    }

    & > div {
      display: none;
    }
  }
`,Ni=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  justify-content: space-between;
`,Oi=t.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 168px;
  text-align: left;
`,_i=t.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Rn=t.button`
  background: unset;
  border: unset;
  color: ${o["icn-txt-prim"]};
  cursor: pointer;
  display: flex;
  outline: unset;
  padding: 0;

  > svg {
    width: 20px !important;
    height: 20px !important;
  }
`,$i=({onClose:n,title:s})=>e(An,null,e(kn,null,s),e(In,null,e(Rn,{"aria-label":Ie("CLOSE_SETTINGS_WINDOW"),"data-testid":ke.CLOSE_SETTINGS_WINDOW,onClick:n},e(Ut,null)))),To=t.button`
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    radial-gradient(
      113.68% 113.68% at 84.82% -14.29%,
      rgba(255, 230, 0, 0.8) 0%,
      rgba(255, 149, 0, 0) 100%
    ),
    radial-gradient(
      97.58% 151.79% at -6.25% 114.29%,
      rgba(255, 26, 150, 0.4) 0%,
      rgba(250, 0, 255, 0.03) 84.18%,
      rgba(250, 0, 255, 0) 100%
    ),
    linear-gradient(283deg, #ffa82f 0.25%, #ff795b 100%);
  background-blend-mode: overlay, normal, normal, normal;
  border: none;
  border-radius: 10px;
  color: ${o["icn-txt-prim-inv"]};
  cursor: pointer;
  display: flex;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.14px;

  gap: 8px;
  height: 40px;
  justify-content: center;
  letter-spacing: 0.14px;
  line-height: 20px;
  margin-top: 4px;
  padding: 6px 20px 6px 16px;

  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }
`,Ge=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 16px;
  width: 388px;
  position: relative;
`,ze=t.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  justify-content: center;
  gap: 4px;
`,Ue=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,Me=t.div`
  color: ${o["icn-txt-prim"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
  text-align: left;
`,je=t.div`
  color: ${o["icn-txt-sec"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 16px;
  text-align: left;
`,qe=t.div`
  background: ${o["bg-prim-inv-b-w"]};
  border-radius: 10.5px;
  height: 126px;
  margin-left: 4px;
  margin-top: ${({offset:n})=>n}px;
  position: absolute;
  overflow: hidden;
  width: 280px;
`,se=t(pe)`
  border-radius: 10.5px;
  width: 100%;
`,Gi=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 168px;
  overflow: hidden;
  overflow-y: visible;
  padding: 16px;
  position: relative;
  scrollbar-width: none;
  width: 388px;
  z-index: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`,zi=t.div`
  align-items: center;
  align-self: stretch;
  background: ${o["bg-sec-0-100"]};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 6px 8px;

  img {
    border-radius: 2px;
    height: 18px;
    overflow: hidden;
    width: 18px;
  }

  svg {
    &:last-of-type {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &:hover {
    background: #2a2a2a;
  }
`,Ui=t.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`,Mi=t.div`
  align-items: center;
  color: ${o["icn-txt-prim"]};
  display: flex;
  flex: 1 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  gap: 6px;
  letter-spacing: 0.14px;
  line-height: 20px;
`,xe=t.div`
  color: ${o["icn-txt-blue"]};
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.14px;
  font-family: system-ui;
`,ji=t.div`
  align-items: center;
  color: ${o["icn-txt-sec"]};
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: system-ui;
  letter-spacing: 0.14px;
  line-height: 20px;
  text-align: center;
`,fe=t.div`
  background: linear-gradient(180deg, rgba(17, 17, 18, 0) 0%, rgba(17, 17, 18, 0.5) 100%);
  bottom: 0;
  height: 18px;
  left: 0;
  position: absolute;
  width: 100%;
`,We=t.div`
  background: #fff;
  border-radius: 10.5px;
  right: 16px;
  top: 50px;
  position: absolute;
  padding: 8px;
  color: ${o["icn-txt-prim-inv"]};
`,Ke=t(ne)`
  cursor: not-allowed !important;
  opacity: 0.5;
  :hover {
    opacity: 0.5 !important;
  }
`;var Ln=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 420px;
`,Nn=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,On=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 12px;
  justify-content: center;
`,_n=t.input`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  width: 33%;

  ::-webkit-slider-runnable-track {
    height: 5px;
    background: ${o["bg-tert-20-60"]};
    border-radius: 16px;
  }

  ::-moz-range-track {
    height: 5px;
    background: ${o["bg-tert-20-60"]};
    border-radius: 16px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    width: 10px;
    background-color: ${o["sf-act-electric-blue"]};
    border-radius: 50%;
    transform: translateY(-25%);
  }

  ::-moz-range-thumb {
    height: 10px;
    width: 10px;
    background-color: ${o["sf-act-electric-blue"]};
    border-radius: 50%;
    transform: translateY(-25%);
  }
`,$n=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 16px;
  width: 420px;
`,ht=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
`,Gn=t.div`
  align-self: stretch;
  color: ${o["icn-txt-sec"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.12px;
`,bt=t.div`
  align-self: stretch;
  color: ${o["icn-txt-prim"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
`,zn=()=>{let{dyslexicFont:n,fontSize:s}=Ot(),[r,u]=(0,Q.useState)(!1),[c,l]=(0,Q.useState)((s??1)*100);(0,Q.useEffect)(()=>{p(c)},[c]),(0,Q.useEffect)(()=>{s!==1&&u(!0)},[s,u]);let p=(0,Q.useCallback)((0,vo.default)(y=>{if(y===100){Ce(1);return}Ce(y/100),x("extension_dyslexic_font_set",{value:y/100})},400),[]),i=(0,Q.useCallback)(()=>{kt(!n),x("extension_dyslexic_font_clicked",{enabled:!n})},[n]),f=(0,Q.useCallback)(()=>{x("extension_font_clicked",{enabled:!r}),u(!r),r&&l(100),Ce(1)},[r]);return e(Y,null,e($n,{onClick:i},e(ht,null,e(bt,null,"Dyslexic Font"),e(Gn,null,"Turns all websites font from original to Open Dyslexic")),e(j,{checked:n,onChange:i})),e(Ln,null,e(On,{onClick:f},e(ht,null,e(bt,null,"Font Size")),e(j,{checked:r,onChange:f})),r&&e(Nn,null,e(ht,null,e(bt,null,"Font Strength")),e(_n,{min:100,max:200,type:"range",value:c,onInput:y=>{let h=Number(y.target.value??100);l(h)}}))))},wo=zn;w();v();var C=J(te());var Un=Bt("FeaturePanel","green"),Mn=t(Re)`
  background-image: url('${O.runtime.getURL("/images/feature-bg.png")}');
  border-radius: 8px;
  box-shadow: none;
  justify-content: space-between;
`,Do=t.div`
  background: ${o["bg-prim-inv-b-w"]};
  border-radius: 10.5px;
  height: 126px;
  overflow: hidden;
  ${({asTooltip:n})=>n?"position: absolute; top: 72px;":""};
  left: 0;
  width: 280px;
  z-index: 1;
`,Po=t(pe)`
  border-radius: 10.5px;
  width: 100%;
`,Fo=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 168px;
  overflow: hidden;
  overflow-y: visible;
  padding: 16px;
  position: relative;
  scrollbar-width: none;
  width: 388px;
  z-index: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`,yt=t.div`
  align-items: center;
  align-self: stretch;
  background: ${o["bg-sec-0-100"]};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 6px 8px;

  img {
    border-radius: 2px;
    height: 18px;
    overflow: hidden;
    width: 18px;
  }

  svg {
    &:last-of-type {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &:hover {
    background: ${o["sf-prim-hov-w-100"]};
  }
`,Eo=t.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`,ae=t.div`
  align-items: center;
  color: ${o["icn-txt-prim"]};
  display: flex;
  flex: 1 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  gap: 6px;
  letter-spacing: 0.14px;
  line-height: 20px;
`,jn=t(Y)`
  padding: 24px 24px 16px 0;
`,Co=t.div`
  align-items: center;
  color: ${o["icn-txt-sec"]};
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: system-ui;
  letter-spacing: 0.14px;
  line-height: 20px;
  text-align: center;
`,ie={"/highlighting":{animation:"highlight",title:"Text Highlighting",bannerItems:["Highlights text as you listen","Allows you to focus on spoken text","Improves your comprehension","Helps to read more without distraction"]},"/clicktolisten":{animation:"clicktolisten",title:"Click to Listen",bannerItems:["While listening, click on sentence you want to hear","Jump between sentences","Listen to documents faster"]},"/hovertolisten":{animation:"hovertolisten",title:"Hover to Listen",bannerItems:["Quick way to start listening","Focus and listen on what you find interesting","Hover any beginning of the paragraph to start listening"]},"/autoscroll":{animation:"autoscroll",title:"Auto Scroll",bannerItems:["Page scrolls as you listen to text to keep you focused on what you listen","Helpful solution for long articles","Improves accessibility during your listening"]},"/dictation":{animation:"voice-typing",title:"Cursor Voice Typing",bannerItems:["See a small pill appear near your cursor to start voice typing.","Helps you type faster and more accurately.","Always available where you need it."]},"/voicedictation":{animation:"voice-typing",title:"Voice Dictation",bannerItems:["Voice typing in pill player when input is focused","Works alongside or instead of cursor dictation","Always available where you need it"]}},qn=()=>{let n=Ae(),{autoScroll:s,clickToListen:r,highlighting:u,hoverToListen:c}=Be(n),{route:l}=St(Ye,["route"]),p=ce(),{autoScroll:i,clickToListen:f,cursorDictationEnabled:y,voiceDictation:h,highlighting:m,hoverToListen:L,enabledOnDomains:k,disabledOnDomains:A,isFeatureDisabledOnDomain:z}=_t(l),E=fo(),[g,R]=(0,C.useState)(new Date().getTime()),[T,X]=(0,C.useState)({}),[$,a]=(0,C.useState)(),[P,N]=(0,C.useState)(!1),[B,K]=(0,C.useState)(!1),H=(0,C.useCallback)(async()=>{x("extension_widget_settings_clicked",{item:"Auto Scroll",value:!i}),we(!i)},[i,s]),le=(0,C.useCallback)(async()=>{x("extension_widget_settings_clicked",{item:"Click to listen",value:!f}),S.toggleFeatureGlobally("sentence-player",!f)},[f,r]),be=(0,C.useCallback)(async()=>{x("extension_widget_settings_clicked",{item:"Highlight",value:!m}),ve(!m)},[m,u]),ot=(0,C.useCallback)(async()=>{x("extension_widget_settings_clicked",{item:"Hover to listen",value:!L});try{await S.toggleFeatureGlobally("hover-player",!L),await S.toggleFeatureGlobally("paragraph-player",!L)}catch(d){Un.error("Failed to toggle paragraph play features",d)}},[L,c]),ye=(0,C.useCallback)(async()=>{let d=!y;x("extension_widget_settings_clicked",{item:"Cursor Dictation",value:d}),await st(d)},[y]),nt=(0,C.useCallback)(async()=>{let d=!h;x("extension_widget_settings_clicked",{item:"Voice Dictation",value:d}),await at(d)},[h]),ee=(0,C.useRef)(),V=(0,C.useMemo)(()=>{switch(l){case"/highlighting":return m;case"/clicktolisten":return f;case"/hovertolisten":return L;case"/autoscroll":return i;case"/dictation":return y;case"/voicedictation":return h}},[l,i,f,m,L,y,h]);(0,C.useEffect)(()=>{(async()=>{let _={},lt=[...A,...k,p];for(let Et of lt){let{icon:Ct}=await de("/helpers/get-domain-icon",{domain:Et});Ct&&(_[Et]=Ct)}X(_)})()},[A,k,p]);let Ee=()=>{ee.current&&clearTimeout(ee.current)};(0,C.useEffect)(()=>()=>{Ee()},[]),(0,C.useEffect)(()=>{(async()=>{let{"pill-settings":{"hidden-feature-banners":_=[]}={}}=await O.storage.local.get(["pill-settings"]);a(_)})()},[]),(0,C.useEffect)(()=>{R(new Date().getTime())},[l]);let b=(0,C.useCallback)(async(d,_)=>{switch(l){case"/highlighting":await ve(!_,d);break;case"/clicktolisten":await S.toggleFeatureOnDomain("sentence-player",!_,d);break;case"/hovertolisten":await S.toggleFeatureOnDomain("hover-player",!_,d),await S.toggleFeatureOnDomain("paragraph-player",!_,d);break;case"/autoscroll":await we(!_,d);break;case"/dictation":await st(!_,d);break;case"/voicedictation":await at(!_,d);break}},[l]),I=(0,C.useCallback)(async(d,_)=>{for(let lt of d)await b(lt,_),await Se(100)},[l]),U=()=>{switch(l){case"/highlighting":be();break;case"/clicktolisten":le();break;case"/hovertolisten":ot();break;case"/autoscroll":H();break;case"/dictation":ye();break;case"/voicedictation":nt();break}},q=async()=>{if(["autoscroll","clicktolisten","dictation","highlighting","hovertolisten"].includes(l.split("/").pop())){let _=[...$||[],l];a(_),await O.storage.local.set({"pill-settings":{"hidden-feature-banners":_}})}},it=()=>{Ee(),ee.current=setTimeout(()=>{N(!0)},600)},Pn=()=>{Ee(),N(!1)},Fn=()=>{K(!0)},En=()=>{K(!1)};return l==="/dictation"&&!E?null:e(jn,null,$&&$.indexOf(l)===-1&&e(Mn,null,e(Le,null,e($e,null,"What is ",ie[l].title,"?"),e(Oe,null,ie[l].bannerItems.map(d=>e(_e,{key:d},e("div",null,e(ue,null)),d)))),e(Do,null,e(Po,{alt:"Feature demonstration",src:`${ie[l].animation}.gif?${g}`})),e(Ne,{onClick:q},"Hide")),e(Ge,null,e(ze,{onMouseEnter:it,onMouseLeave:Pn},e(Ue,null,e(Me,null,ie[l].title),$&&$.indexOf(l)!==-1&&e(Z,{className:"fill-current color-[#8791A0]"})),e(je,null,V?"Enabled":"Disabled"," on all websites")),e(j,{checked:!!V,onChange:U}),P&&$&&$.indexOf(l)>-1&&e(Do,{asTooltip:!0},e(Po,{alt:"Feature demonstration",src:`${ie[l].animation}.gif?${g}`}))),V&&A.length===0&&!z&&e(W,null,e(ae,null,"Always disabled on:"),e(ge,null,e(Co,null,ie[l].title," is currently enabled on all websites."))),V&&(A.length>0||z)&&e(W,null,e(Eo,null,e(ae,null,"Always disabled on:"),e(xe,{onClick:()=>I(A,!1)},"Remove all")),e(ft,null,e(Fo,{className:"scrollable"},z&&e(yt,null,T[p]?e("img",{alt:"Disabled on",src:T[p]}):e(oe,null),e(ae,null,p.replace("www.","")),e(Ke,{onMouseEnter:Fn,onMouseLeave:En})),A.map(d=>e(yt,{key:d},T[d]?e("img",{alt:"Disabled on",src:T[d]}):e(oe,null),e(ae,null,d.replace("www.","")),e(ne,{onClick:()=>b(d,!1)})))),e(fe,null),B&&e(We,null,ie[l].title," is not available on this site."))),!V&&k.length===0&&e(W,null,e(ae,null,"Always enabled on:"),e(ge,null,e(Co,null,ie[l].title," is currently disabled on all websites."))),!V&&k.length>0&&e(W,null,e(Eo,null,e(ae,null,"Always enabled on:"),e(xe,{onClick:()=>I(k,!0)},"Remove all")),e(ft,null,e(Fo,{className:"scrollable"},k.map(d=>e(yt,{key:d},T[d]?e("img",{alt:"Enabled on",src:T[d]}):e(oe,null),e(ae,null,d.replace("www.","")),e(ne,{onClick:()=>b(d,!0)})))),e(fe,null))))},re=qn;w();v();var Je=J(te());w();v();var Ve=n=>{let r=document.getElementById(gt)?.shadowRoot;if(r){let u=r.querySelectorAll(".scrollable");for(let c of u)if(n.composedPath().some(i=>i===c))return}n.preventDefault()},Wn=()=>{let n=document.getElementById(gt);n&&n.shadowRoot?(window.addEventListener("wheel",Ve,{passive:!1}),window.addEventListener("touchmove",Ve,{passive:!1})):setTimeout(Wn,100)},Xe=n=>{let s=window.open(n,"_blank","noopener noreferrer");s&&(s.opener=null)},Cl=()=>{window.removeEventListener("wheel",Ve),window.removeEventListener("touchmove",Ve)};var Kn=["Convert any text into audio","50+ premium voices","Faster listening speed (1.1x & above)","No ads"],Yn=()=>{let n=ho(),s=go(),r=t.div`
    align-items: center;
    background-color: #2f2f32;
    border-radius: 50%;
    display: flex;
    height: 48px;
    justify-content: center;
    overflow: hidden;
    width: 48px;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  `,u=t.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
  `,c=t.button`
    align-items: center;
    background-color: ${o["bg-sec-0-100"]};
    border-radius: 4px;
    border: 1px solid ${o["brdr-quat-30-70"]};
    color: ${o["icn-txt-sec"]};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    gap: 8px;
    letter-spacing: 0.14px;
    line-height: 20px;
    padding: 6px 16px 6px 14px;
  `,l=t.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
  `,p=t.div`
    color: ${o["icn-txt-sec"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.14px;
  `,i=t.div`
    color: ${o["icn-txt-prim"]};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.16px;
  `,f=t.div`
    align-items: center;
    background: radial-gradient(
        60.48% 67.89% at 15.6% 24.18%,
        rgba(214, 45, 45, 0.08) 0%,
        rgba(247, 245, 189, 0.06) 100%
      ),
      radial-gradient(
        54.16% 116.64% at 75.12% 95.05%,
        rgba(226, 41, 97, 0.12) 0%,
        rgba(205, 62, 88, 0) 100%
      ),
      radial-gradient(
        99.36% 97.72% at 77.02% 37.09%,
        rgba(221, 152, 48, 0.2) 0%,
        rgba(29, 41, 53, 0) 100%
      ),
      linear-gradient(155deg, rgba(145, 205, 255, 0.12) 0%, rgba(145, 205, 255, 0) 102.86%), #111112;
    backdrop-filter: blur(21px);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    width: 420px;
  `,y=t.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    gap: 12px;
  `,h=t.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
  `,m=t.div`
    align-items: flex-start;
    align-self: stretch;
    color: ${o["icn-txt-sec"]};
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    gap: 6px;
    letter-spacing: 0.14px;
    line-height: 20px;
  `,L=t(To)`
    border: none;
    margin-top: 16px;
    width: 260px;
  `,k=(0,Je.useMemo)(()=>!n||!It(n)||n?.status==="expired",[n]),A=()=>{Xe("https://app.speechify.com/settings")},z=(0,Je.useCallback)(()=>{x("extension_usage_settings_upgrade_clicked",{location:"general-tab"}),Gt("pill_player_settings_upsell","global",!0)},[]);return e(Y,null,e(W,null,e(De,null,"Profile"),e(me,null,e(l,null,e(r,null,s?.photoURL&&e("img",{src:s.photoURL,alt:"Profile"})),e(u,null,e(i,null,s?.displayName||""),e(p,null,s?.email||"")),e(c,{"aria-label":Ie("EDIT_PROFILE"),"data-testid":ke.EDIT_PROFILE,onClick:A},e(to,null),"Edit")))),e(W,null,e(De,null,"Subscription"),e(me,null,k?e(Ht,null):e(so,null),e(u,null,e(i,null,k?"Basic":"Premium"),e(p,null,"Current plan"))),k&&e(f,null,e(y,null,e(po,null),e(u,null,e(i,null,"Premium"),e(h,null,Kn.map(E=>e(m,{key:E},e(ue,null),E))))),e(L,{onClick:z},e(co,{color:o["icn-txt-black"]}),"Upgrade to Premium"))))},Bo=Yn;w();v();var D=J(te());w();v();var Vn={chatgpt:e(Xt,null),claude:e(Jt,null),deepseek:e(Qt,null),gemini:e(ut,null),grok:e(pt,null),grokx:e(pt,null),perplexity:e(Zt,null),facebook:e(oo,null),gmail:e(Kt,null),googledocs:e(no,null),linkedin:e(jt,null),google:e(ct,null),openevidence:e(lo,null),outlook:e(Yt,null),reddit:e(qt,null),whatsapp:e(uo,null),x:e(Wt,null),youtube:e(Vt,null),googleaistudio:e(ut,null),notebooklm:e(ct,null)},Qe=Object.fromEntries(Object.keys(mt).map(n=>{let s=mt[n];return[n,{configFeature:s.configFeature,icon:Vn[n],title:s.title,features:s.features,url:s.url,sortOrder:s.sortOrder}]}));var G=Object.keys(Qe).sort((n,s)=>(Qe[n].sortOrder||0)-(Qe[s].sortOrder||0)).reduce((n,s)=>(n[s]=Qe[s],n),{});var Xn=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 16px;
  padding: 24px 0px 16px 0;
`,Jn=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 16px;
  width: 388px;
  position: relative;
`,Qn=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`,Zn=t.div`
  align-self: stretch;
  color: ${o["icn-txt-sec"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.12px;
`,Hn=t.div`
  align-self: stretch;
  color: ${o["icn-txt-prim"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
`,Io=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Tt=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  cursor: ${({disabled:n})=>n?"default":"pointer"};
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 16px;
  width: 388px;
  position: relative;
`,Ze=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,vt=t.div`
  align-self: stretch;
  color: ${({disabled:n})=>n?o["icn-txt-quat"]:o["icn-txt-prim"]};
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.14px;
  line-height: 20px;
  text-align: left;
`,He=t(qe)`
  top: ${({top:n})=>n}px;
  left: 0;
  margin-top: 0px;
  z-index: 2;
`;var ei=()=>{let n=(0,D.useMemo)(()=>Ae(),[window.location.hostname]),{autoScroll:s,clickToListen:r,highlighting:u,hoverToListen:c,pillPlayer:l,embeddedPlayer:p}=Be(n),i=(0,D.useMemo)(()=>bo(),[]),f=Lt.useConfig(),[y,h]=(0,D.useState)(new Date().getTime()),[m,L]=(0,D.useState)(),[k,A]=(0,D.useState)(!0),[z,E]=(0,D.useState)(!0),[g,R]=(0,D.useState)(),[T,X]=(0,D.useState)(),$=(0,D.useMemo)(()=>rt()["embedded-player"]?.lifecycles?.length>0,[]),a=(0,D.useCallback)(()=>{x("extension_widget_settings_clicked",{domain:n,item:"Auto Scroll",value:!s}),we(!s,n)},[s]),P=(0,D.useCallback)(()=>{x("extension_widget_settings_clicked",{domain:n,item:"Click to listen",value:!r}),S.toggleFeatureOnDomain("sentence-player",!r)},[r]),N=(0,D.useCallback)(()=>{x("extension_widget_settings_clicked",{domain:n,item:"Highlight",value:!u}),ve(!u,n)},[u]),B=(0,D.useCallback)(()=>{x("extension_widget_settings_clicked",{domain:n,item:"Hover to listen",value:!c}),S.toggleFeatureOnDomain("hover-player",!c)},[c]),K=(0,D.useCallback)(()=>{x("extension_widget_settings_clicked",{domain:n,item:"Pill player",value:!l}),S.toggleFeatureOnDomain("pill-player",!l)},[l,i]),H=(0,D.useCallback)(async()=>{x("extension_widget_settings_clicked",{domain:n,item:"Listening Bar",value:!p}),S.toggleFeatureOnDomain("embedded-player",!p)},[p]),le=(0,D.useRef)(),be=()=>{le.current&&clearTimeout(le.current)};(0,D.useEffect)(()=>{let b=rt(),I=b["sentence-player"].config.config,U=b["hover-player"].config.config;return I?.disabled===!0?A(!1):Rt().then(q=>A(q)),U?.disabled===!0?E(!1):At().then(q=>E(q)),()=>{be()}},[]),(0,D.useEffect)(()=>{let{features:b,playButtonKey:I}=xt(n)??{};I&&X(I),b&&R(b)},[n]),(0,D.useEffect)(()=>{h(new Date().getTime())},[m]);let ot=(0,D.useCallback)((b,I)=>T?Te([b,"config","playButtons",T,I],f)??!0:!1,[T,f]),ye=(0,D.useRef)(!1),nt=(b,I)=>{if(!T||ye.current)return;ye.current=!0;let U=S.playButtons.get(b,T,I);S.playButtons.set(b,T,I,!U),x(U?"extension_usage_settings_play_button_enabled":"extension_usage_settings_play_button_disabled",{for:T,feature:I}),setTimeout(()=>{ye.current=!1},100)},ee=b=>{be(),le.current=setTimeout(()=>{L(b)},600)},V=()=>{be(),L(void 0)};return e(Xn,{className:"scrollable"},e(Io,null,[{key:"highlight",title:"Text Highlighting",isDisabled:!1,onToggle:N,isChecked:u},{key:"clickToListen",title:"Click to Listen",isDisabled:!k,onToggle:P,isChecked:r},{key:"hoverToListen",title:"Hover to Listen",isDisabled:!z,onToggle:B,isChecked:c},{key:"autoScroll",title:"Auto Scroll",isDisabled:!1,onToggle:a,isChecked:s}].map(({key:b,title:I,isDisabled:U,onToggle:q,isChecked:it})=>e(Tt,{key:b,disabled:U},e(Ze,{onMouseEnter:()=>ee(b),onMouseLeave:V},e(vt,{disabled:U},I),e(Z,{className:"fill-current color-[#8791A0]"})),e(j,{disabled:U,checked:U?!1:it,onChange:q}),m===b&&e(He,{offset:0,top:52},e(se,{alt:"Feature demonstration",src:`${m}.gif?${y}`})))),e(Tt,{disabled:!$},e(Ze,{onMouseEnter:()=>ee("inlinePlayer"),onMouseLeave:V},e(vt,{disabled:!$},"Listening Bar"),e(Z,{className:"fill-current color-[#8791A0]"})),e(j,{checked:$?p:!1,disabled:!$,onChange:H}),m==="inlinePlayer"&&e(He,{offset:0,top:52},e(se,{alt:"Feature demonstration",src:"tooltip-inline-player.png"}))),i&&e(Tt,{disabled:!1},e(Ze,{onMouseEnter:()=>ee("pillPlayer"),onMouseLeave:V},e(vt,{disabled:!1},"Side Player"),e(Z,{className:"fill-current color-[#8791A0]"})),e(j,{disabled:!1,checked:l,onChange:K}),m==="pillPlayer"&&e(He,{offset:0,top:52},e(se,{alt:"Feature demonstration",src:"tooltip-side-player.png"})))),g&&Object.entries(g).filter(([b,{enabled:I}])=>I).length>0&&e(Io,null,Object.entries(g).filter(([b,{enabled:I}])=>I).map(([b,{title:I,description:U,img:q}])=>e(Jn,{key:b},e(Qn,{onMouseEnter:()=>q?ee(q):void 0,onMouseLeave:V},e(Ze,null,e(Hn,null,I),q&&e(Z,{className:"fill-current color-[#8791A0]"})),e(Zn,null,U)),e(j,{checked:T&&ot(G[T].configFeature,b),onChange:()=>{T&&nt(G[T].configFeature,b)}}),q&&m===q&&e(He,{offset:0,top:72},e(se,{alt:"Feature demonstration",src:`playButtons/${m}.png`}))))))},ko=ei;w();v();var et=J(te());var ti={"play-pause-new":{description:"Play/Pause"},"open-screenshot-mode":{description:"Open Screenshot Mode"},"voice-typing":{description:"Start Voice Typing"}},oi=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ni=t.div`
  color: ${o["icn-txt-sec"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.14px;
  margin-bottom: 8px;
`,ii=t.span`
  color: ${o["icn-txt-sec"]};
  cursor: pointer;
  text-decoration: underline;
`,li=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  width: 320px;
`,si=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 20px;
`,ai=t.div`
  color: ${o["icn-txt-prim"]};
  flex: 1 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.14px;
  line-height: 16px;
`,Ao=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-100"]};
  border: 1px solid ${o["brdr-prim-10-80"]};
  border-radius: 4px;
  color: ${o["icn-txt-sec"]};
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.14px;
  line-height: 16px;
  padding: 6px 10px;
  text-align: center;
`,ri=()=>{let{shortcuts:n}=xo(),s=(0,et.useRef)(),r=()=>{s.current&&clearTimeout(s.current)};(0,et.useEffect)(()=>()=>{r()},[]);let u=()=>{$t("Keyboard Shortcuts",()=>de("/keyboard-shortcuts/open-shortcuts-url"))};return e(Y,null,e(oi,null,e(ni,null,"Edit your shortcuts"," ",e(ii,{onClick:u},"in browser extension settings")," ","page."),e(li,null,Object.entries(ti).map(([c,l])=>e(si,{key:c},e(ai,null,l.description),e("div",{style:{display:"flex",gap:"8px"}},n[c]?.shortcut&&Array.from(n[c].shortcut.split("+")).map((p,i)=>e(Ao,{key:i,onClick:u},p)),!n[c]?.shortcut&&e(Ao,{onClick:u},"Not Set")))))))},Ro=ri;w();v();var F=J(te());w();v();var Lo=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 8px;
  max-width: 280px;
`,wt=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  margin-left: 290px;
  position: absolute;
  width: 365px;
`,No=t.div`
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid ${o["brdr-quat-30-70"]};
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 12px;
  padding-bottom: 12px;
`,Oo=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`,_o=t.div`
  align-items: left;
  align-self: stretch;
  background: ${o["bg-sec-0-100"]};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 12px;
`,$o=t.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 4px;
  justify-content: center;
`,Go=t.div`
  align-self: stretch;
  color: ${o["icn-txt-sec"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 16px;
  max-width: 240px;
`,zo=t.div`
  background: #fff;
  border-radius: 10.5px;
  height: 126px;
  overflow: hidden;
  margin-left: 18px;
  margin-top: ${({offset:n})=>n}px;
  width: 280px;
  z-index: 1;
`,Uo=t(pe)`
  border-radius: 10.5px;
  width: 100%;
`,Mo=t.div`
  align-self: stretch;
  color: ${o["icn-txt-prim"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
`,jo=t.div`
  align-items: flex-start;
  align-self: stretch;
  color: ${o["icn-txt-prim"]};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  gap: 6px;
  justify-content: center;
  letter-spacing: 0.14px;
  line-height: 20px;
  padding: 12px 8px;
`,qo=t.div`
  align-items: center;
  align-self: stretch;
  color: ${o["icn-txt-prim"]};
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  gap: 8px;
  letter-spacing: 0.14px;
  line-height: 20px;
  padding: 12px 12px 8px 12px;
`,Wo=t.div`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 2.5px 0px 2.496px 0px;
  width: 20px;
`,Ko=t(Re)`
  background-image: url('${O.runtime.getURL("/images/feature-play-buttons-bg.png")}');
  padding: 33px 20px 31px 22px;
  box-shadow: none;
  border-radius: 12px;
`,Yo=t(Le)`
  gap: 40px;
`,Vo=t(_e)`
  text-wrap: nowrap;
`,Xo=t(Y)`
  padding: 24px 24px 0 0;
`,Jo=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1 0 0;
  gap: 20px;
  overflow: hidden;
  overflow-y: auto;
  padding-bottom: 20px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,Qo=t.div`
  align-items: center;
  align-self: stretch;
  background: ${o["sf-prim-w-110"]};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  max-width: 280px;
  padding: 10px 4px 10px 12px;

  &:hover {
    background: ${o["sf-prim-hov-w-110"]};
  }

  ${({selected:n})=>n&&`
    background: ${o["sf-prim-pres-w-110"]};
  `}
`,Zo=t.div`
  align-items: flex-start;
  border-radius: 50px;
  display: flex;
  gap: 10px;
  padding: 2px;
`,Ho=t.div`
  align-items: center;
  display: flex;
  flex: 1 0 0;
  gap: 12px;
`,en=t.div`
  align-items: center;
  background: ${o["bg-sec-0-100"]};
  border-radius: 4px;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 6px;

  svg {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    padding: 0.834px 0px 0.561px 0px;
    width: 20px;
  }
`,tn=t.div`
  color: ${o["icn-txt-prim"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
`,on=t.div`
  align-items: center;
  align-self: stretch;
  background: ${({active:n})=>n?o["sf-prim-pres-w-110"]:o["sf-prim-w-110"]};
  background: ${o["sf-prim-w-110"]};
  border-bottom-right-radius: 20px;
  color: ${o["icn-txt-prim"]};
  cursor: pointer;
  display: flex;
  flex: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  gap: 12px;
  justify-content: center;
  letter-spacing: 0.14px;
  line-height: 20px;
  padding: 16px 40px;

  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    background: ${o["sf-prim-hov-w-110"]};
  }
`,nn=t.div`
  align-items: center;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px 12px 20px 0px;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  flex: none;
  gap: 16px;
  justify-content: center;
  padding: 20px 24px;
`,ln=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`,sn=t.div`
  align-items: center;
  background: ${({disabled:n})=>n?"#414146":"#6B78FC"};
  border-radius: 8px;
  color: ${({disabled:n})=>n?o["icn-txt-tert"]:o["icn-txt-prim"]};
  cursor: ${({disabled:n})=>n?"default":"pointer"};
  display: flex;
  gap: 8px;
  height: 36px;
  justify-content: center;
  padding: 2px 16px;
  width: 140px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.14px;
  line-height: 20px;
`,an=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 12px;
`,rn=t.div`
  align-items: center;
  color: ${o["icn-txt-sec"]};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  gap: 6px;
  justify-content: center;
  letter-spacing: 0.14px;
  line-height: 20px;
  padding: 2px 6px;
`,dn=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 4px;
`,cn=t.input`
  background: ${o["bg-sec-0-100"]};
  border: none;
  color: ${o["icn-txt-prim"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.14px;
  line-height: 20px;
  outline: none;
  padding: 8px 12px 8px 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8791a0;
  }
`,pn=t.div`
  align-items: center;
  align-self: stretch;
  background: ${o["bg-sec-0-100"]};
  border-radius: 6px;
  border: 1px solid #6870cc;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 12px;
  padding: 0 12px;
  position: relative;
`,un=t.div`
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: space-between;
`,gn=t.div`
  align-items: center;
  color: ${o["icn-txt-prim"]};
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  gap: 6px;
  letter-spacing: 0.14px;
  line-height: 20px;
`,mn=t.div`
  align-items: flex-start;
  color: ${o["icn-txt-prim"]};
  display: flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  gap: 6px;
  line-height: 24px;
`;var di=["Embedded into websites for easier access","Help you listen more without launching plugin","Customize according to your preferences"],ci=()=>{let n=Nt.useConfig(),[s,r]=(0,F.useState)(),[u,c]=(0,F.useState)(0),[l,p]=(0,F.useState)(),[i,f]=(0,F.useState)(null),[y,h]=(0,F.useState)({}),m=(0,F.useRef)(),L=()=>{m.current&&clearTimeout(m.current)};(0,F.useEffect)(()=>{(async()=>{let{"pill-settings":{"hidden-feature-banners":P=[]}={}}=await O.storage.local.get(["pill-settings"]);p(P)})()},[]);let k=(0,F.useCallback)(()=>{if(!i)return;let a=G[i].url;if(window.location.href.includes(a)){let N=Te([G[i].configFeature,"config","user","playButtons",i],n)??{};h(N)}else S.playButtons.getForUrl(a,G[i].configFeature,i).then(h)},[i,n]);(0,F.useEffect)(()=>{k()},[i,n]);let A=(0,F.useCallback)(a=>Te([a],y)??!0,[i,n,y]),z=a=>{Xe(a)},E=a=>{f(a)},g=async()=>{let a=[...l||[],"playbuttons"];p(a),await O.storage.local.set({"pill-settings":{"hidden-feature-banners":a}})},R=(0,F.useRef)(!1),T=(a,P)=>{if(!i||R.current)return;R.current=!0;let N=G[i].url,B=window.location.href.includes(N),K=A(P);B?S.playButtons.set(a,i,P,!K):S.playButtons.setForUrl(N,a,i,P,!K).then(H=>{h({...H})}),x(K?"extension_usage_settings_play_button_enabled":"extension_usage_settings_play_button_disabled",{for:i,feature:P}),setTimeout(()=>{R.current=!1},250)},X=(a,P,N)=>{L(),m.current=setTimeout(()=>{switch(r(a),P){case 0:c(N===1?-50:-110);break;case 1:c(-50);break;default:c(-50-(P-1)*60)}},600)},$=()=>{L(),r(void 0)};return e(Xo,null,l&&l.indexOf("playbuttons")===-1&&e(Ko,null,e(Yo,null,e($e,null,"What are Play Buttons?"),e(Oe,null,di.map(a=>e(Vo,{key:a},e("div",null,e(ue,null)),a)))),e(Ne,{onClick:g},"Hide")),e(Jo,null,e(Lo,{className:"scrollable"},Object.entries(G).filter(([a,{features:P}])=>P&&Object.values(P).some(N=>N.enabled)).map(([a,{icon:P,title:N}])=>e(Qo,{key:a,onClick:()=>E(a),selected:a===i},e(Ho,null,e(en,null,P),e(tn,null,N)),e(Zo,null,e(eo,null))))),!i&&e(wt,null),i&&e(wt,null,e(qo,null,e(Wo,null,G[i].icon),G[i].title),e(No,null,e(Oo,null,i&&Object.entries(G[i].features??{}).filter(([a,{enabled:P}])=>P).map(([a,{title:P,description:N,img:B}],K)=>e(_o,{key:a,onMouseEnter:()=>B?X(B,K,Object.entries(G[i].features??{}).filter(([H,{enabled:le}])=>le).length):void 0,onMouseLeave:$},e($o,null,e(Mo,null,P),e(Go,null,N)),e(j,{checked:A(a),onChange:()=>T(G[i].configFeature,a)}))))),e(jo,{onClick:()=>z(G[i].url)},"Go to ",G[i].title,e(io,null)),s&&e(zo,{offset:u},e(Uo,{alt:"Feature demonstration",src:`playButtons/${s}.png`})))))},na=()=>{let[n,s]=(0,F.useState)(!1),[r,u]=(0,F.useState)(!1),[c,l]=(0,F.useState)(!1),[p,i]=(0,F.useState)(!1),[f,y]=(0,F.useState)(""),h=(0,F.useRef)(null),m=(0,F.useRef)(null);(0,F.useEffect)(()=>()=>{m.current&&clearTimeout(m.current)},[]),(0,F.useEffect)(()=>{c&&h.current&&h.current.focus()},[c]),(0,F.useEffect)(()=>{p&&(m.current=setTimeout(()=>{i(!1),l(!1),y("")},2e3))},[p]);let L=()=>{c||(s(!0),m.current=setTimeout(()=>{s(!1),l(!0)},250))},k=()=>{l(!1)},A=()=>{if(!r)return;let R=new URL(f).hostname;x("extension_play_button_requested",{hostname:R,url:f}),i(!0)},z=g=>{let R=g.target.value.trim();y(R),u(E(R))},E=g=>{if(!g)return!1;let R=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return!g.startsWith("http://")&&!g.startsWith("https://")?R.test("https://"+g):R.test(g)};return c?e(nn,null,e(ln,null,e(mn,null,"Request Play Button on Site"),e(rn,{onClick:k},"Close")),p&&e(un,null,e(gn,null,e(ro,null),"Your request has been sent")),!p&&e(an,null,e(dn,null,e(pn,null,e(cn,{onChange:z,placeholder:"https://",ref:h,value:f}))),e(sn,{disabled:!r,onClick:A},"Send Request"))):e(on,{active:n,onClick:L},"Request Play Button on a Site",e(ao,null))},xn=ci;w();v();var he=J(te());w();v();var Fe=J(te());var Dt=t.div`
  align-items: center;
  color: ${o["icn-txt-prim"]};
  display: flex;
  flex: 1 0 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  gap: 6px;
  letter-spacing: 0.14px;
  line-height: 20px;
`,fn=t.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tt=t(De)`
  font-size: 14px;
  line-height: 20px;
`,Pt=t.div`
  align-items: center;
  color: ${o["icn-txt-sec"]};
  display: flex;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  font-family: system-ui;
  gap: 6px;
  letter-spacing: 0.1px;
  line-height: 20px;
  text-align: center;
`,pi=t(qe)`
  left: 0;
  top: 70px;
  z-index: 2;
`,hn=t(me)`
  width: 388px;
  padding-bottom: 0;
  position: relative;
`,bn=t.div`
  align-items: flex-start;
  background: ${o["bg-sec-0-110"]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 168px;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0;
  width: 388px;
  padding-bottom: 16px;
`,Ft=t.div`
  align-items: center;
  align-self: stretch;
  background: ${o["sf-prim-w-100"]};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 6px 8px;

  img {
    border-radius: 2px;
    height: 18px;
    overflow: hidden;
    width: 18px;
  }

  svg {
    &:last-of-type {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &:hover {
    background: ${o["sf-prim-hov-w-100"]};
  }
`,ui=n=>{let{id:s,name:r,description:u,withCloseHint:c=!1,isPlayerAvailable:l,togglePlayer:p,disabledDomains:i,enabledDomains:f,handleDomainTrashClick:y,domainIcons:h,isPlayerDisabledOnDomain:m,disabled:L}=n,k=ce(),A=(0,Fe.useRef)(),[z,E]=(0,Fe.useState)(),[g,R]=(0,Fe.useState)(!1),T=()=>{A.current&&clearTimeout(A.current)},X=()=>{T(),A.current=setTimeout(()=>{E(`tooltip-${s}`)},600)},$=()=>{T(),E(void 0)},a=async(B,K)=>{for(let H of B)await y(H,K),await Se(100)},P=()=>{R(!0)},N=()=>{R(!1)};return e(M,null,e(Ge,{onClick:p},e(ze,{onMouseEnter:X,onMouseLeave:$},e(Ue,null,e(Me,null,r),e(Z,{className:"fill-current color-[#8791A0]"})),e(je,null,u)),e(j,{disabled:L,checked:l,onChange:p}),z&&e(pi,{offset:0},e(se,{alt:"Feature demonstration",src:`${z}.png`}))),l&&i.length===0&&!m&&e(W,null,e(tt,null,"Always disabled on:"),e(ge,null,e(Pt,null,r," is currently enabled on all websites."),c&&e(Pt,null,"Hide player on any website by clicking",e(yo,{style:{cursor:"default"}},e(zt,null)),"."))),l&&(i.length>0||m)&&e(W,null,e(fn,null,e(tt,null,"Always disabled on:"),e(xe,{onClick:()=>a(i,!0)},"Remove all")),e(hn,null,e(bn,{className:"scrollable"},m&&e(Ft,null,h[k]?e("img",{alt:"Disabled on",src:h[k]}):e(oe,null),e(Dt,null,k.replace("www.","")),e(Ke,{onMouseEnter:P,onMouseLeave:N})),i.map(B=>e(Ft,{key:B},h[B]?e("img",{alt:"Disabled on",src:h[B]}):e(oe,null),e(Dt,null,B.replace("www.","")),e(ne,{onClick:()=>y(B,!0)})))),e(fe,null),g&&e(We,null,r," is not available on this site."))),!l&&f.length===0&&e(W,null,e(tt,null,"Always enabled on:"),e(ge,null,e(Pt,null,r," is currently disabled on all websites"))),!l&&f.length>0&&e(W,null,e(fn,null,e(tt,null,"Always enabled on:"),e(xe,{onClick:()=>a(f,!1)},"Remove all")),e(hn,null,e(bn,{className:"scrollable"},f.map(B=>e(Ft,{key:B},h[B]?e("img",{alt:"Enbabled on",src:h[B]}):e(oe,null),e(Dt,null,B.replace("www.","")),e(ne,{onClick:()=>y(B,!1)})))),e(fe,null))))},yn=ui;var gi=t(Y)`
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  flex: 1 0 0;
  scrollbar-width: none;
`,mi=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,xi=t.div`
  background: #373737;
  height: 1px;
  min-height: 1px;
  max-height: 1px;
  width: 100%;
  margin-bottom: 8px;
  margin-top: -12px;
`,fi=()=>{let n=ce(),{isPlayerDisabledOnDomain:s,isPlayerGlobalEnabled:r,enabledOnDomains:u,disabledOnDomains:c}=dt("pill-player"),{isPlayerDisabledOnDomain:l,isPlayerGlobalEnabled:p,enabledOnDomains:i,disabledOnDomains:f}=dt("embedded-player"),[y,h]=(0,he.useState)({});return(0,he.useEffect)(()=>{(async()=>{let g={},R=[...u,...c,...i,...i,n];for(let T of R){let{icon:X}=await de("/helpers/get-domain-icon",{domain:T});X&&(g[T]=X)}h(g)})()},[u,c,f,i,n]),e(gi,null,e(mi,{className:"scrollable"},[{id:"side-player",name:"Side Player",description:"Main way to start listening with Speechify",withCloseHint:!0,isPlayerAvailable:r,togglePlayer:async()=>{x("extension_widget_settings_clicked",{item:"Pill Player",value:!r}),S.toggleFeatureGlobally("pill-player",!r)},disabledDomains:c,enabledDomains:u,handleDomainTrashClick:async(E,g)=>{x("extension_widget_settings_clicked",{domain:E,item:"Pill player",value:g}),await S.toggleFeatureOnDomain("pill-player",g,E)},isPlayerDisabledOnDomain:s},{id:"inline-player",name:"Listening Bar",description:"Player that’s built-in the content you’re reading",isPlayerAvailable:p,togglePlayer:async()=>{x("extension_widget_settings_clicked",{item:"Listening Bar",value:!p}),S.toggleFeatureGlobally("embedded-player",!p)},disabledDomains:f,enabledDomains:i,handleDomainTrashClick:async(E,g)=>{x("extension_widget_settings_clicked",{domain:E,item:"Listening Bar",value:g}),await S.toggleFeatureOnDomain("embedded-player",g,E)},isPlayerDisabledOnDomain:l}].map((E,g)=>e(he.default.Fragment,{key:E.id},g>0&&e(xi,null),e(yn,{...E,domainIcons:y})))))},Tn=fi;var vn="/host",Dn=Object.freeze({route:vn,defaultRoute:vn}),Ye=new wn.Store({...Dn});function _a(){Ye.set(()=>({...Dn}))}var hi={"/all":{name:"General",Component:Bo},"/autoscroll":{name:"Auto Scroll",Component:re},"/clicktolisten":{name:"Click to Listen",Component:re},"/highlighting":{name:"Text Highlighting",Component:re},"/dictation":{name:"Cursor Voice Typing",Component:re},"/voicedictation":{name:"Voice Dictation",Component:re},"/host":{name:"Host",Component:ko},"/hovertolisten":{name:"Hover to Listen",Component:re},"/playbuttons":{name:"Play Buttons",Component:xn},"/keyboardshortcuts":{name:"Keyboard Shortcuts",Component:Ro},"/accessibility":{name:"Accessibility",Component:wo},"/visibility":{name:"Player Visibility",Component:Tn}};function $a(n){Ye.set(()=>({route:n}))}function Ga(n){return hi[n]??{}}export{Ci as a,Si as b,kn as c,Bi as d,Ii as e,ki as f,Ai as g,Ri as h,Li as i,Ni as j,Oi as k,_i as l,$i as m,To as n,Wn as o,Xe as p,Cl as q,na as r,vn as s,Ye as t,_a as u,$a as v,Ga as w};
//# sourceMappingURL=chunk-QFGIV4B7.js.map
