(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as qe}from"./chunk-FFEPHFWQ.js";import{a as je}from"./chunk-SXEFPN62.js";import"./chunk-IQTXTTBF.js";import{a as ae}from"./chunk-ESYC46NE.js";import{$c as ye,Cg as Xe,Dc as Ye,Eg as Ke,Fg as Je,Gg as Qe,Hg as et,Ig as tt,Jg as nt,Lc as X,Lg as rt,Mc as Y,Mg as ot,Ng as it,Og as at,Pc as Ue,Rb as Ge,Rc as $e,Sb as Fe,Wc as ze,_c as pe,b as De,ef as Ze,gc as We,ib as Be,nb as Ve,nc as he,sg as Pe,y as ke,yg as Z}from"./chunk-324T2OUF.js";import{a as He,h as Tt}from"./chunk-JJ7NA4NT.js";import{a as ge,e as Me,i as j,n as ie}from"./chunk-KJ3NFIHV.js";import{b as z,f as wt,g as Ot}from"./chunk-H3LCZSHS.js";import{H as be,I as Le,K as Ne,p as _e}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as Ae,g as v,i as u,k as Ce,m as vt,n as w}from"./chunk-CAO5DZGK.js";w();v();w();v();var Oe=Ae(Tt());vt();w();v();var Re=e=>{let t=Math.min(...e.map(o=>o.x)),r=Math.min(...e.map(o=>o.y)),f=Math.max(...e.map(o=>o.x+o.width)),i=Math.max(...e.map(o=>o.y+o.height)),y=f-t,S=i-r;return new DOMRect(t,r,y,S)},K=({rect:e,horizontalPadding:t,verticalPadding:r})=>new DOMRect(e.x-t,e.y-r,e.width+2*t,e.height+2*r);w();v();var C=Ae(Ot());wt();w();v();var lt="speechify-hover-player-icon";w();v();var st=e=>u("svg",{width:"80%",height:"80%",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{d:"M23.7334 18.3094C25.5112 17.283 25.5112 14.717 23.7334 13.6906L11.7334 6.76237C9.95562 5.73597 7.7334 7.01897 7.7334 9.07177V22.9282C7.7334 24.981 9.95562 26.264 11.7334 25.2376L23.7334 18.3094Z",fill:"currentColor"})),ct=e=>u("svg",{width:"70%",height:"70%",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u("path",{d:"M9.33317 5.33337C7.86041 5.33337 6.6665 6.52728 6.6665 8.00004V24C6.6665 25.4728 7.86041 26.6667 9.33317 26.6667H11.9998C13.4726 26.6667 14.6665 25.4728 14.6665 24V8.00004C14.6665 6.52728 13.4726 5.33337 11.9998 5.33337H9.33317Z",fill:"currentColor"}),u("path",{d:"M19.9998 5.33337C18.5271 5.33337 17.3332 6.52728 17.3332 8.00004V24C17.3332 25.4728 18.5271 26.6667 19.9998 26.6667H22.6665C24.1393 26.6667 25.3332 25.4728 25.3332 24V8.00004C25.3332 6.52728 24.1393 5.33337 22.6665 5.33337H19.9998Z",fill:"currentColor"})),dt=j(je)`
  width: 60%;
  height: 60%;
  circle {
    stroke-width: 4px;
  }
`;var{usePlayingState:At,useCurrentContent:Ct}=Y;var _t=2147483640,bt=j.button`
  position: absolute;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  pointer-events: all;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .fadeOut {
    animation-name: fadeOut;
    animation-duration: ${200}ms;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  .fadeIn {
    animation-name: fadeIn;
    animation-timing-function: ease-out;
    animation-duration: ${100}ms;
    animation-fill-mode: forwards;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ie["bg-prim-w-100"]};
    color: ${ie["icn-txt-prim"]};
    box-shadow: 0px 3px 12px 0 #0000001f;
    border-radius: 9999px;

    &:hover {
      color: ${ie["icn-txt-prim-electric"]};
    }
  }
`,bn=j(qe)`
  height: ${({size:e})=>e};
  left: -${4}px;
  top: -${4}px;
  width: ${({size:e})=>e};
  g circle {
    stroke-width: 3;
  }
`,Ie=e=>[e.ariaLabel,...Array.from(e.children).map(t=>Ie(t))].join(""),Lt=(e,t)=>e?e===t.element||"isConnected"in e&&!e.isConnected&&Ie(e)===Ie(t.element):!1,Nt=(e,t)=>{let r=(0,C.useCallback)(f=>setTimeout(()=>{t(i=>i.filter(y=>f.instanceId!==y.instanceId))},200),[]);z(()=>{let f=e.filter(i=>!i.destroyingTimeout&&i.hoverPlayerState==="Initial").map(i=>i.instanceId);f.length>0&&t(i=>i.map(y=>f.includes(y.instanceId)?{...y,destroyingTimeout:r(y)}:y))},[e,r])};function ut({hoveredParagraph:e,emotionCache:t,onPlaybackStarted:r}){let f=We(),i=At(),y=Ct(),{activeElement:S}=Ve(),[o,O]=(0,C.useState)(),[h,P]=(0,C.useState)([]);Nt(h,P),z(()=>{i!=="paused"&&i!=="stopped"&&r()},[i]);let H=(0,C.useCallback)(s=>{O(c=>c&&s(c)),P(c=>{let T=!1,G=c.map(b=>{let I=s(b);return T=T||I!==b,I});return T?G:c})},[]),_=(0,C.useCallback)((s,c)=>H(T=>T.instanceId!==s?T:c(T)),[]);z(()=>{!e&&o&&(O(void 0),P(s=>[o,...s]))},[e,o]),z(()=>{e&&(e.reactKey!==o?.hoveredParagraph.reactKey?(o&&P(s=>[o,...s].filter(c=>c.hoveredParagraph.reactKey!==e.reactKey)),O({instanceId:Ge(),hoveredParagraph:e,hoverPlayerState:"Initial",destroyingTimeout:void 0,buttonRef:(0,C.createRef)()})):e!==o.hoveredParagraph&&O(s=>s&&{...s,hoveredParagraph:e}))},[e,o]),z(()=>{i==="buffering"||i==="seeking"||H(s=>s.hoverPlayerState!=="BufferingInProgress"?s:{...s,hoverPlayerState:"Initial"})},[i,H,o,h]);let N=(0,C.useCallback)(async()=>{if(!o||(r(),_(o.instanceId,c=>({...c,hoverPlayerState:"BufferingStarting"})),await Ze(),!o.hoveredParagraph.id))return;X.seekToPosition(o.hoveredParagraph.id,[0,0]),Ye(Y.getPlayingState())||X.play(),$e("extension_hover_player_button_clicked",{isClonedVoice:f}),ze({triggeredFrom:"HoverPlayer"}),_(o.instanceId,c=>({...c,hoverPlayerState:"BufferingInProgress"}))},[o,O,y]),M={x:window.scrollX,y:window.scrollY},V=(0,C.useMemo)(()=>[o,...h].filter(Boolean),[[o,h]]);return u(Me,{value:t},V.map(s=>{let c=s===o,{getPlayerIconRect:T}=s.hoveredParagraph,G=i==="buffering"||i==="seeking",b=h.some(te=>te.hoverPlayerState!=="Initial"),I=s.hoverPlayerState!=="Initial"||G&&c&&!b,A=T();if(!A)return null;let E=Lt(S,s.hoveredParagraph),D=E&&(i==="playing"||i==="buffering"||i==="seeking")&&!I,ee=()=>{c&&(D?X.pause():E?X.play():N())};return u(C.default.Fragment,{key:s.hoveredParagraph.reactKey},u("div",{"aria-label":pe("HOVER_PLAYER"),"data-testid":c?ye.HOVER_PLAYER:void 0,style:{position:"absolute",left:`${A.left+M.x-4}px`,top:`${A.top+M.y}px`,width:`${A.width+8}px`,height:`${A.height+8}px`,zIndex:_t}},u(bt,{"aria-label":pe("HOVER_PLAYER_BUTTON"),"data-testid":c?ye.HOVER_PLAYER_BUTTON:void 0,onClick:ee,ref:s.buttonRef},u("div",{id:c?lt:void 0,style:{width:`${A.width}px`,height:`${A.height}px`},className:["icon",c||I?"fadeIn":"fadeOut"].join(" ")},I?u(dt,null):D?u(ct,null):u(st,null)))))}))}w();v();w();v();var Ht=/^\s*$/,mt=e=>e.nodeType===Node.TEXT_NODE&&!Ht.test(e.textContent??""),gt=e=>{if(!e)return null;if(mt(e))return e;for(let t of Array.from(e.childNodes)){if(mt(t))return t;let r=gt(t);if(r!==null)return r}return null};function*ht(e){if(e.nodeType===Node.TEXT_NODE){let t=e.textContent?.trim().split(" ")??"";for(let r of t)yield{node:e,word:r}}else for(let t=0;t<e.childNodes.length;t++)yield*ht(e.childNodes[t])}var Ee=(e,t)=>{if(!e||!gt(e))return null;let r=document.createRange(),f=ht(e),i=null,y="",S=0,o=1;for(;o<=t;){let O=f.next();if(O.done)return o<t&&r.setEnd(i,Math.min(S+y.length,i?.textContent?.length??0)),null;let{node:h,word:P}=O.value;if(!(!h||!P)){if(i!==h&&(S=0),o===1&&r.setStart(h,S),o===t){let H=(h.textContent?.indexOf(P,S)??0)+P.length;r.setEnd(h,Math.min(H,h.textContent?.length??0))}S+=P.length+1,y=P,i=h,o++}}return r};var q=He(Fe({hoveredParagraph:null,shouldShowHint:!1},e=>({updateHoveredParagraph:t=>e(r=>({...r,hoveredParagraph:t})),updateShouldShowHint:t=>e(r=>({...r,shouldShowHint:t}))}))),ve=({wasLifecycleAudioLoadedTriggered:e,id:t,element:r,ref:f,index:i})=>{if(!r)return null;let y=Ee(r,1),S=Ee(r,3),o=()=>(y??r).getBoundingClientRect(),O=()=>(S??r).getBoundingClientRect(),h=Z();if(h){let E=r.firstElementChild??r;O=()=>E.getBoundingClientRect();let F=null;o=()=>{let D=E?.getBoundingClientRect();return D.height>0&&D.width>0&&(F=D),F}}let P=window.getComputedStyle(r),H=parseFloat(P.fontSize||"16")||16,_=Math.max(H,20),N=O(),M=h?36:16,V=new DOMRect(N.x-M,N.y,N.width+M,N.height),s=()=>{let E=o();if(!E)return null;let F=(E.height-_)/2;return new DOMRect(V.x-_,E.top+F,_,_)},c=()=>{let E=o();return E?new DOMRect(E.x,E.top+E.height,N.width+4,N.height):null},T=s();if(!T)return null;let G=K({rect:T,horizontalPadding:4,verticalPadding:4}),b=Re([N,V,G]);e&&(b=Re([b,r.getBoundingClientRect()]));let I=K({rect:b,horizontalPadding:4,verticalPadding:0}),A=S?.toString();return{element:r,getUnderlineRect:c,elementFontSize:H,firstThreeWords:A,getFirstThreeWordsRect:O,hoverAreaRect:I,hoverPlayerSize:_,getPlayerIconRect:s,id:t,ref:f,index:i,get reactKey(){return`${t}-${A}-${i}`}}};var pt="speechify-hover-player-container",B=null,yt=ge({key:"hover-player-emotion-cache"}),we=()=>{},Gt="h1 h2 h3 h4 h5 h6 select textarea button label audio video dialog embed menu nav noframes noscript object script style svg aside footer #footer pre summary form input iframe img map meta link title track area base basefont col colgroup head html param source table tbody td tfoot th thead tr",Ft="span a li ol ul dd dl dt h1 h2 h3 h4 h5 h6 select textarea button label audio video dialog embed menu nav noframes noscript object script style svg aside footer #footer pre summary form input iframe img map meta link title track area base basefont col colgroup head html param source table tbody td tfoot th thead tr",Wt=e=>e.nodeType===Node.ELEMENT_NODE;async function Yt(){return(await Pe("ceHoverPlayerIgnoredTags")||Gt).split(" ").map(t=>t.toLowerCase())}async function Ut(){return(await Pe("ceHoverPlayerTopLevelIgnoredTags")||Ft).split(" ").map(t=>t.toLowerCase())}function Pt(e,t){return e.clientX>t.x&&e.clientX<t.x+t.width&&e.clientY>t.y&&e.clientY<t.y+t.height}function $t(){let t=document.getElementById("speechify-hint-tooltip-shadow-root")?.shadowRoot?.getElementById("speechify-hint-tooltip");if(t)return t.getBoundingClientRect()}var Te=!1,zt=()=>{let e=async()=>{Te=!0,Ne("audio-loading",e)};Le("audio-loading",e,"hover-player")};zt();async function le(e){["boot","init"].includes(e)||(Te=!0);let t=[],{shadowRoot:r}=De.acquireShadow(ae);B=r.querySelector(`#${pt}`),B||(B=document.createElement("div"),B.id=pt,yt=ge({key:"hover-player-emotion-cache",container:B}),r.appendChild(B));let{updateHoveredParagraph:f,updateShouldShowHint:i}=q.getState(),y=await Ut(),S=await Yt(),o=n=>Z()?!0:!(!n||!Wt(n)||y.includes(n.tagName.toLowerCase())||n.querySelector(S.join(","))!==null||(n.textContent?.trim().split(/\s+/).length??0)<=10||n.closest("a, button, form")),O=()=>{i(!1)},h=n=>{if(!B){be(new Error("hover-player renderHoverPlayer is called with no container"),{type:"hover-player"});return}Ce(u(ut,{hoveredParagraph:n,emotionCache:yt,onPlaybackStarted:()=>O()}),B)},P=()=>{h(null)},H=async()=>{if(!t||t.length===0)return;we();let n=(0,Oe.default)(a=>{let d=t.map(({element:l,id:g,ref:x,index:p})=>ve({wasLifecycleAudioLoadedTriggered:Te,element:l,id:g,ref:x,index:p})).filter(l=>!!l).find(({hoverAreaRect:l})=>Pt(a,l));if(q.getState().shouldShowHint){if(!d)return;let l=$t(),g=l&&K({rect:l,horizontalPadding:10,verticalPadding:10});if(g&&Pt(a,g))return}f(d??null)},16);window.addEventListener("mousemove",n),we=()=>{window.removeEventListener("mousemove",n)}},_=async n=>{let a=[],d=ke(n),l=!d&&(n?.options?.sideEffects??!1),{orator:g}=Y.getState();l&&!d||(g&&(a=g.machine.getContext().queue.map((p,R)=>({element:p.ref.ref,id:p.id,ref:p.ref,index:R})).filter(({element:p})=>o(p))),_e(a,t)||(t=a,H()))},N=await Ue("PLAYABLE_CONTENT_UPDATED",async({changed:n})=>{n&&n.metadata.source!=="Selection Player"&&_(n)}),{currentContent:M,orator:V}=Y.getState();M&&_(M);let s=null;V&&(s=V.machine.onContextChange("queue",()=>{let{currentContent:n}=Y.getState();n&&_(n)}));function c(n,a=20,d=4){if(!n)return!0;let g=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,{acceptNode:re=>re.nodeValue?.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}).nextNode();if(!g)return!0;let x=g.nodeValue,p=x.trim().split(/\s+/).slice(0,d).join(" ");if(!p)return!0;let R=x.indexOf(p);if(R===-1)return!0;let L=document.createRange();L.setStart(g,R),L.setEnd(g,R+p.length);let m=L.getBoundingClientRect();if(m.bottom<=0||m.top>=window.innerHeight||m.right<=0||m.left>=window.innerWidth)return!0;let W=[{x:m.left+m.width*.25,y:m.top+m.height*.5},{x:m.left+m.width*.5,y:m.top+m.height*.5},{x:m.left+m.width*.75,y:m.top+m.height*.5}],Se=0;for(let re of W){let fe=document.elementFromPoint(re.x,re.y),ue=!1,oe=fe;for(;oe&&!ue;){if(oe===n){ue=!0;break}oe=oe.parentElement}let me=fe?window.getComputedStyle(fe):null,Et=me?.pointerEvents==="none"||me?.visibility==="hidden"||parseFloat(me?.opacity||"1")<.1;!ue&&!Et&&Se++}return Se/W.length*100>=a}function T(n){if(!n?.element)return!1;try{let a=n.element,d=a.getBoundingClientRect(),l=n.ref?.highlightInfo?.scrollElement??(he()?document.querySelector(he()):null);if(l){let g=l.getBoundingClientRect();return d.top>=g.top&&d.bottom<=g.bottom}return!c(a,20)}catch(a){return console.error("Error in isElementVisible Hover Player:",a),!1}}let G='input, button, select, textarea, a, [role="checkbox"], [role="radio"], [role="button"], [role="switch"]';function b(n,a=0,d=0){let l=n.getPlayerIconRect();if(!l)return null;let g=l.left+l.width/2+a,x=l.top+l.height/2+d,p=[{x:g,y:x},{x:l.left+l.width*.25+a,y:x},{x:l.left+l.width*.75+a,y:x}];for(let R of p){if(R.x<0||R.y<0||R.x>=window.innerWidth||R.y>=window.innerHeight)continue;let L=document.elementsFromPoint(R.x,R.y);for(let m of L){if(m.id===ae||m.closest(`#${ae}`))continue;let W=m.closest(G);if(W&&!(n.element.contains(W)||W.contains(n.element)))return W}}return null}let I=null,A=!1,E=q.subscribe((n,a)=>{if(a?.hoveredParagraph!==n?.hoveredParagraph){if(n?.hoveredParagraph&&T(n.hoveredParagraph)){let d=n.hoveredParagraph,l=d.getPlayerIconRect(),g=b(d),x=0,p=0;if(g&&l){let R=g.getBoundingClientRect();if(p=R.bottom-l.top+4,b(d,0,p)&&(p=0,x=R.left-l.right-4,b(d,x,0))){P();return}}if((x!==0||p!==0)&&l){let R=d.getPlayerIconRect;d.getPlayerIconRect=()=>{let L=R();return L?new DOMRect(L.x+x,L.y+p,L.width,L.height):null}}I=n.hoveredParagraph.getFirstThreeWordsRect()??null,h(d)}else P();n?.hoveredParagraph?.element!==a?.hoveredParagraph?.element&&(a?.hoveredParagraph?.element&&(ce.unobserve(a?.hoveredParagraph?.element),de.unobserve(a?.hoveredParagraph?.element)),n?.hoveredParagraph?.element&&(ce.observe(n?.hoveredParagraph?.element),de.observe(n?.hoveredParagraph?.element)))}}),F=(0,Oe.default)(()=>{A=!1;let{hoveredParagraph:n}=q.getState();n&&(I=n.getFirstThreeWordsRect(),T(n)||P())},100),D=()=>{A=!0,F()};window.addEventListener("scroll",D);let ee=()=>{let{hoveredParagraph:n}=q.getState();if(!n)return;let a=n.getFirstThreeWordsRect();if(!a||!(a.x!==I?.x||a.y!==I?.y||a.width!==I?.width||a.height!==I?.height))return;let l=ve({wasLifecycleAudioLoadedTriggered:!1,element:n.element,id:n.id,ref:n.ref,index:n.index});f(l),I=a},te=!1,It=n=>{te=n[0].isIntersecting},ce=new ResizeObserver(ee),de=new IntersectionObserver(It),ne,xe=()=>{!A&&te&&ee(),ne=requestAnimationFrame(xe)};return ne=requestAnimationFrame(xe),()=>{O(),ne&&cancelAnimationFrame(ne),window.removeEventListener("scroll",D),ce.disconnect(),de.disconnect(),N(),E(),we(),s&&s(),P()}}var Zt=()=>!(ot()||tt()||Je()||Ke()||Qe()||Xe()||it()||nt()||et()||at()||rt());var Q={"paragraph-player":!1,"hover-player":!1},J=()=>Object.values(Q).filter(Boolean).length,qt=e=>J()===1&&Q[e],se=[],Rt=e=>{qt(e)&&(se.forEach(t=>t()),se=[]),Q[e]=!1};async function jt(e,t,r){let f=r.name;if(f==="paragraph-player"&&Z()&&e?.playButtons?.googledocs?.paragraphPlayer===!1||f==="hover-player"&&!Zt())return;if(J()>0)return Q[f]=!0,()=>Rt(f);Q[f]=!0;let i=await le(t);if(J()===0){i();return}if(se.push(i),se.push(Be(async()=>{i(),i=await le(t),J()===0&&i()})),J()!==0)return()=>Rt(f)}export{jt as default};
//# sourceMappingURL=init-CMYN5GW7.js.map
