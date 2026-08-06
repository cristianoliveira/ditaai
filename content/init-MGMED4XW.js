(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as R,b as Y,c as z,d as me,e as N,f as F,g as ue,h as xe,i as ge,j as he}from"./chunk-PEN7TN3N.js";import"./chunk-HDEJOTQX.js";import"./chunk-SJAKNTE2.js";import{Ud as fe,_c as W,b as G,ed as b,fd as de,hd as C,jd as pe}from"./chunk-324T2OUF.js";import"./chunk-JJ7NA4NT.js";import{a as ae,e as ce,i as t,l as A}from"./chunk-KJ3NFIHV.js";import{g as D}from"./chunk-H3LCZSHS.js";import{I as ee,K as te,M as T}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as O,f as h,g as l,i as e,k as le,m as nt,n as a}from"./chunk-CAO5DZGK.js";a();l();nt();a();l();var m=O(D());a();l();var $=o=>{let c=document.getElementById(b)?.shadowRoot;if(c){let i=c.querySelectorAll(".scrollable");for(let r of i)if(o.composedPath().some(x=>x===r))return}o.preventDefault()},ne=()=>{let o=document.getElementById(b);o&&o.shadowRoot?(window.addEventListener("wheel",$,{passive:!1}),window.addEventListener("touchmove",$,{passive:!1})):setTimeout(ne,100)},ye=()=>{window.removeEventListener("wheel",$),window.removeEventListener("touchmove",$)};a();l();var q=O(D());a();l();var j=t.div`
  align-items: flex-start;
  display: flex;
  cursor: pointer;
  gap: 0px;
  padding: 16px;
  position: absolute;
  right: 0;
  z-index: 50;
`,ve=t.div`
  align-items: center;
  background-color: ${({showOverlay:o})=>o?"rgba(5, 7, 11, 0.5)":"transparent"};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2147483645;
`;a();l();var we=t.div`
  align-items: flex-start;
  background-color: #111112;
  border-radius: 12px;
  color: ${A["icn-txt-prim"]};
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  overflow: hidden;
  position: relative;
  width: 420px;
  z-index: 2147483647;
`,Ce=t.div`
  align-self: stretch;
  background: linear-gradient(273deg, #384be7 -15.85%, #101036 124.01%);
  box-shadow: 0px 13.793px 20.69px 0px rgba(33, 55, 252, 0.1);
  height: 164px;
  overflow: hidden;
`,Se=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`,Le=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`,be=t.div`
  align-self: stretch;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`,Pe=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Te=t.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.14px;
  line-height: 20px;
`,Ae=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Me=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 12px;
`,Ie=t.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
`,ke=t.div`
  align-items: center;
  align-self: stretch;
  background: #4759f7;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  font-family: system-ui, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  gap: 0px;
  justify-content: center;
  line-height: 24px;
  padding: 16px 40px;

  &:focus {
    background: #3d4ac4;
  }

  &:hover {
    background: #4454e3;
  }
`;var ie={increased_listening_speeds:{animation:"increasespeed",title:"Upgrade to Increase Your Listening Speed",benefitsTitle:"Get all reading superpowers from day one:"},premium_voices:{animation:"premiumvoices",title:"Upgrade to Listen with Premium Voices",benefitsTitle:"Get all reading superpowers from day one:"}},ot=[{icon:e(F,{style:{width:"20px",height:"20px"}}),title:"Listen with 200+ AI voices",excludedVariants:["premium_voices"]},{icon:e(N,{style:{width:"20px",height:"20px"}}),title:"Up to 4.5x listening speed",excludedVariants:["increased_listening_speeds"]},{icon:e(Y,{style:{width:"20px",height:"20px"}}),title:"Summarize your documents",excludedVariants:[]},{icon:e(xe,{style:{width:"20px",height:"20px"}}),title:"Skip headers, footers, and more",excludedVariants:[]},{icon:e(he,{style:{width:"20px",height:"20px"}}),title:"Turn anything into audio",excludedVariants:[]},{icon:e(me,{style:{width:"20px",height:"20px"}}),title:"Download files to listen offline",excludedVariants:[]},{icon:e(ge,{style:{width:"20px",height:"20px"}}),title:"Rely on fast 24/7 support",excludedVariants:[]}];function Oe({onCloseClick:o,onUpgradeClick:u,variant:c}){let i=(0,q.useRef)(null),r=R(),f=c==="premium_voices"?r:ie[c]?.animation;return(0,q.useEffect)(()=>{i.current&&i.current.play()},[c]),e(we,null,e(j,{onClick:o},e(z,null)),e(Ce,null,e("video",{ref:i,src:h.runtime.getURL(`images/paywall/animations/${f}.mp4`),autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{marginTop:"-10px",width:"100%"}})),e(Se,null,e(Le,null,e(be,null,ie[c]?.title),e(Pe,null,e(Te,null,ie[c]?.benefitsTitle),e(Ae,null,ot.filter(s=>!s.excludedVariants.includes(c)).map((s,x)=>e(Me,{key:`benefit-${x}`},s.icon,e(Ie,null,s.title)))))),e(ke,{"aria-label":W("PAYWALL_BUTTON"),onClick:u},"Try for Free")))}a();l();var p=O(D());a();l();var De=O(D()),rt=()=>{let u=(0,De.useRef)((()=>{let i=new Date,r=i.getDay(),f=i.getDate()-r+(r===0?-6:1),s=new Date(i.setDate(f));return s.setHours(0,0,0,0),s})());return()=>{let s=(new Date().getTime()-u.current.getTime())/1e3,L=16197/(10080*60),g=3659+s*L;return g=Math.min(19856,Math.max(3659,Math.round(g))),g.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})}},Ee=rt;a();l();var J=O(D());var _e=({item:o,isMiddleCard:u,isTransitioning:c})=>{let i=(0,J.useRef)(null),r=R(),f=o.animation==="premiumvoices"?r:o.animation;return(0,J.useEffect)(()=>{i.current&&(u&&!c?i.current.play():(i.current.pause(),i.current.currentTime=0))},[u,c]),e("div",{style:{position:"relative",width:"260px",height:"120px",borderRadius:"19.2px",background:"linear-gradient(93deg, #384BE7 2.89%, #101036 252.14%)",overflow:"hidden"}},e("video",{ref:i,src:h.runtime.getURL(`images/paywall/animations/${f}.mp4`),style:{width:"260px",height:"120px"},muted:!0,playsInline:!0,loop:!1,controls:!1}))};a();l();var Ue=t.div`
  align-items: flex-start;
  background-color: #111112;
  border-radius: 20px;
  color: ${A["icn-txt-prim"]};
  display: flex;
  font-family: system-ui, sans-serif;
  overflow: hidden;
  position: relative;
  width: 925px;
  z-index: 2147483647;
`,Ve=t.div`
  align-items: flex-start;
  display: flex;
  cursor: pointer;
  gap: 0px;
  padding: 16px;
  position: absolute;
`,Ge=t.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 32px;
  padding: 98px 60px 90px 60px;
`,We=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 340px;
`,Re=t.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
`,Ye=t.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,ze=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 340px;
`,Ne=t.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 12px;

  svg {
    margin-top: 6px;
  }
`,Fe=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,$e=t.div`
  align-self: stretch;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.16px;
  line-height: 24px;
`,je=t.div`
  align-self: stretch;
  color: #9899a6;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.14px;
  line-height: 20px;
`,qe=t.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 340px;
`,Je=t.button`
  align-items: center;
  align-self: stretch;
  background: #4759f7;
  border-radius: 12px;
  border-width: 0px;
  color: ${A["icn-txt-prim"]};
  cursor: pointer;
  display: flex;
  font-family: system-ui, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  gap: 0px;
  justify-content: center;
  letter-spacing: 0.16px;
  line-height: 24px;
  padding: 12px 104px;

  &:focus {
    background: #3d4ac4;
  }

  &:hover {
    background: #4454e3;
  }
`,Ke=t.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 8px;
  justify-content: center;
`,Xe=t.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  line-height: 20px;
`,Qe=t.div`
  align-items: center;
  background: ${A["bg-sec-0-100"]};
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 20px;
  height: 624px;
  justify-content: center;
  padding: 16px 0px;
`;var E={baseOffset:150,topCardScale:1.2,secondCardScale:1.1,lastCardScale:1.1,defaultScale:1,secondCardOffset:-155,lastCardOffset:155,visibilityThreshold:3,animationDuration:500,intervalDuration:4e3},st=[{icon:F,title:"200+ highest quality voices",description:"Including official Speechify celebrity partners"},{icon:N,title:"Up to 4.5x listening speed",description:"To help you become a speed reader"},{icon:Y,title:"Advanced AI",description:"Enhance your learning with AI powers"}];function Ze({isSettingsUpsell:o,onCloseClick:u,onPreviousClick:c,onUpgradeClick:i}){let r=Ee(),[f,s]=(0,p.useState)(2),[x,L]=(0,p.useState)(!1),[P,g]=(0,p.useState)(!1),[M,_]=(0,p.useState)(!1),[K,U]=(0,p.useState)(2),y=(0,p.useRef)(null),I=(0,p.useCallback)(()=>{y.current&&clearInterval(y.current),y.current=setInterval(()=>{U(f),_(!0),s(n=>(n+1)%C.length),setTimeout(()=>_(!1),E.animationDuration)},E.intervalDuration)},[f]);(0,p.useEffect)(()=>(L(!0),()=>L(!1)),[]),(0,p.useEffect)(()=>(I(),()=>{y.current&&clearInterval(y.current)}),[I]);let X=()=>{g(!0),setTimeout(()=>{g(!1),c()},300)},V=(0,p.useCallback)(n=>{let{baseOffset:d,secondCardOffset:v,lastCardOffset:w}=E;return n===0?0:n===1?v:n===C.length-1?w:n<=C.length/2?-(d*2)-(n-2)*d:d*2+(C.length-n-2)*d},[]),k=(0,p.useCallback)(n=>{let{topCardScale:d,secondCardScale:v,lastCardScale:w,defaultScale:B}=E;return n===0?d:n===1?v:n===C.length-1?w:B},[]),Q=(0,p.useCallback)(n=>{let{baseOffset:d,visibilityThreshold:v}=E,w=d*v;return Math.abs(n)<=w},[]);return e(Ue,null,e("div",{style:{display:"flex",height:"100%",opacity:P?0:o&&x?1:o?0:1,position:"relative",transform:P?"none":o&&x?"translateX(0)":o?"translateX(25%)":"none",transition:P?"opacity 300ms ease-in-out":o?"transform 300ms ease-in-out, opacity 300ms ease-in-out":"none",visibility:o&&!x?"hidden":"visible",width:"100%"}},o&&e(Ve,{onClick:X},e(ue,null)),e(j,{onClick:u},e(z,null)),e(Ge,null,e(We,null,e(Re,null,"Get Your Reading Superpowers"),e(Ye,null,"Join 30+ Million Listeners in Transforming How You Consume Content")),e(ze,null,st.map(({icon:n,title:d,description:v})=>e(Ne,{key:d},e(n,null),e(Fe,null,e($e,null,d),e(je,null,v))))),e(qe,null,e(Je,{"aria-label":W("PAYWALL_BUTTON"),onClick:i},"Try for Free"),e(Ke,null,e(fe,{alt:"New premium users",src:"paywall/avatars.png",width:52,height:24}),e(Xe,null,r()," joined Premium this week")))),e(Qe,null,C.map((n,d)=>{let v=(d-K+C.length)%C.length,w=(d-f+C.length)%C.length,B=V(v),Z=V(w),H=k(v),He=k(w),se=M?B:Z,et=M?H:He,tt=w===0;return e("div",{key:d,style:{position:"absolute",width:"260px",height:"120px",transition:"transform 0.5s ease-in-out",transform:`translateY(${se}px) scale(${et})`,visibility:Q(se)?"visible":"hidden"}},e(_e,{item:n,isMiddleCard:tt,isTransitioning:M}))}))))}function oe({isSettingsUpsell:o,root:u,source:c="",variant:i="global"}){let[r,f]=(0,m.useState)(o),[s,x]=(0,m.useState)(!0),[L,P]=(0,m.useState)(c),[g,M]=(0,m.useState)(i);(0,m.useEffect)(()=>{let n=async()=>{x(!1)},d=async(v,w)=>{let{isSettingsUpsell:B,source:Z,variant:H}=w||{isSettingsUpsell:!1,variant:"global",source:""};f(B),x(!0),P(Z||""),M(H)};return ee("close-paywall-modal",n,"paywall-modal"),ee("show-paywall-modal",d,"paywall-modal"),()=>{te("close-paywall-modal",n),te("show-paywall-modal",d)}},[s,x]),(0,m.useEffect)(()=>{if(s)return ne(),window.addEventListener("keydown",U),()=>{window.removeEventListener("keydown",U),ye()}},[s]),(0,m.useEffect)(()=>{s&&T("hide-settings-modal",{},"settings-modal")},[s]);let _=(0,m.useMemo)(()=>!r,[r]),K=(0,m.useMemo)(()=>{if(L)return L;switch(g){case"global":return"paywall_modal_global";case"increased_listening_speeds":return"paywall_modal_increased_listening_speeds";case"premium_voices":return"paywall_modal_premium_voices"}},[L,g]),U=n=>{n.key==="Escape"&&y()},y=()=>{x(!1)},I=()=>{r&&T("close-settings-modal",{},"settings-modal"),y()},X=n=>{n.target===n.currentTarget&&(r&&T("close-settings-modal",{},"settings-modal"),y())},V=()=>{T("show-settings-modal",{},"settings-modal"),y()},k=()=>{r&&T("close-settings-modal",{},"settings-modal"),y(),pe(K)},Q=(0,m.useMemo)(()=>ae({key:"paywall-emotion-cache",container:u}),[u]),re=(0,m.useMemo)(()=>{switch(g){case"global":return e(Ze,{isSettingsUpsell:r,onCloseClick:I,onPreviousClick:V,onUpgradeClick:k});case"increased_listening_speeds":case"premium_voices":return e(Oe,{onCloseClick:I,onUpgradeClick:k,variant:g});default:return null}},[r,g]);return s?e(ce,{value:Q},e(ve,{showOverlay:_,onClick:X},re)):null}var lt=`
  position: fixed;
  z-index: 2147483647;
  top:0; 
  left: 0;
  height: fit-content;
  font-size: initial;
`,at=()=>()=>{G.destroyHost(b)},ct=async(o,u,c)=>{G.acquireShadow(b,{hostStyles:"position: absolute; bottom: 0; right: 0;"});let i=document.createElement("div");i.style.cssText=lt;let{isSettingsUpsell:r,variant:f,source:s}=c||{isSettingsUpsell:!1,variant:"global",source:""};return le(e(oe,{isSettingsUpsell:r,root:i,source:s,variant:f}),i),G.mountRoot(b,de,i),at()},Ln=ct;export{Ln as default};
//# sourceMappingURL=init-MGMED4XW.js.map
