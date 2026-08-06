(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as Xo,c as Pe}from"./chunk-AXUCRUBY.js";import{a as Ho,b as Ki,c as Z,d as Ze,e as ie,f as ot}from"./chunk-S3AZHVK7.js";import{v as Qo}from"./chunk-QFGIV4B7.js";import{c as te}from"./chunk-L6KF6DLO.js";import{a as et}from"./chunk-SP7JKGLV.js";import{a as Jo}from"./chunk-4JXL3YI4.js";import{a as Ko}from"./chunk-VBM62247.js";import{a as To}from"./chunk-I3KFPWHY.js";import{j as $o,t as ue,u as Fo,v as Wo}from"./chunk-IQTXTTBF.js";import{a as qo}from"./chunk-436MFEND.js";import{a as Yo}from"./chunk-UBYLRYAE.js";import{$ as wo,$c as U,Ce as No,D as Yi,De as Oo,E as ye,Ea as Vo,Ed as Mo,Ee as Uo,F as uo,Fa as Po,G as oe,Ga as Lo,H as fo,Hf as zo,I as go,Ia as ko,If as Go,Jf as jo,Kc as we,Mc as W,O as ho,Q as So,Qa as Io,R as xo,Rc as Do,T as Co,Td as _o,U as bo,V as qi,W as J,X as yo,Z as vo,_ as Ne,_a as Ro,_c as Ao,a as zi,da as Oe,e as mo,ea as pe,ec as O,id as Ve,if as Zo,kd as me,lc as ve,mc as Eo,me as Bo}from"./chunk-324T2OUF.js";import{a as be,h as ji}from"./chunk-JJ7NA4NT.js";import{ba as E,i as s,l as c,q as L}from"./chunk-KJ3NFIHV.js";import{b as Be,f as Gi,g as w}from"./chunk-H3LCZSHS.js";import{M as po,j as lo}from"./chunk-FLMM6JC5.js";import{d as Ue}from"./chunk-Y6YYRFL5.js";import{a as co,b as ao}from"./chunk-NUSU6NTI.js";import{b as Zi,d as C,g as i,i as o,j as u,n as r}from"./chunk-CAO5DZGK.js";var hi=Zi((Ra,gi)=>{r();i();var Br=qi(),Nr=0;function Or(e){var n=++Nr;return Br(e)+n}gi.exports=Or});r();i();var Wi=C(zi());r();i();var rt=C(w());var nt=s.div`
  border-radius: 9999px;
  background: ${c["bg-sec-0-70"]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
`,Xi=s(nt)`
  transform: rotate(180deg);
`,tt=s(E)`
  display: flex;
  align-items: center;
  gap: 4px;
`;function it(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.96625 4.75971C4.25915 4.46682 4.73402 4.46682 5.02691 4.75971L7.80632 7.53912C7.94697 7.67977 8.02599 7.87054 8.02599 8.06945C8.02599 8.26836 7.94697 8.45913 7.80632 8.59978L5.02691 11.3792C4.73402 11.6721 4.25914 11.6721 3.96625 11.3792C3.67336 11.0863 3.67336 10.6114 3.96625 10.3185L6.21533 8.06944L3.96625 5.82037C3.67336 5.52748 3.67336 5.0526 3.96625 4.75971ZM8.51499 4.75971C8.80788 4.46682 9.28276 4.46682 9.57565 4.75971L12.3551 7.53912C12.4957 7.67977 12.5747 7.87054 12.5747 8.06945C12.5747 8.26836 12.4957 8.45913 12.3551 8.59978L9.57565 11.3792C9.28275 11.6721 8.80788 11.6721 8.51499 11.3792C8.22209 11.0863 8.2221 10.6114 8.51499 10.3185L10.7641 8.06945L8.51499 5.82037C8.2221 5.52748 8.2221 5.0526 8.51499 4.75971Z",fill:"white"}))}function ze(){return(0,rt.useEffect)(()=>{ko()},[]),o(_o,{onClose:()=>Le("/"),width:219,showDismiss:!0},o(tt,{font:"body-5"},"Click",o(nt,null,o(it,null)),"to skip forward."),o(tt,{font:"body-5",style:{marginTop:"8px"}},"Click",o(Xi,null,o(it,null)),"to skip backward."))}r();i();var fe=C(w());r();i();var Ji=s.div`
  width: 258px;
  box-sizing: border-box;
  padding: 0 8px 8px;
  display: flex;
  flex-direction: column;
`,Qi=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 6px;
  background: ${({actionDone:e})=>e?c["bg-success"]:c["bg-sec-0-80"]};

  path {
    fill: ${({actionDone:e})=>e?c["icn-txt-success"]:c["icn-txt-prim"]};
  }
`,Hi=s.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 12px;

  .chevron-right {
    color: ${c["icn-txt-tert"]};
  }

  &:hover {
    background: ${c["sf-sec-hov-0-100"]};
  }

  &:active {
    background: ${c["sf-sec-pres-0-100"]};
  }

  ${({actionDone:e})=>e?"background: transparent !important; cursor: default;":""}
`,er=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,or=s.div`
  align-self: baseline;
`,re={ButtonsList:Ji,Button:Hi,HelpCenterArrowWrapper:or,ButtonContent:er,IconButton:Qi};var tr="https://help.speechify.com/en/collections/2750947-speechify-for-chrome",st=()=>{let{reportedDomains:e}=O(),n=(0,fe.useMemo)(()=>e?.includes(Ue()),[e]),t=(0,fe.useCallback)(()=>{Le("/")},[]),l=(0,fe.useMemo)(()=>{let a=()=>{Do("extension_usage_broken_site_reported"),Ro(Ue())},p=d=>{po("show-settings-modal"),Qo(d)};return[{icon:o($o,null),label:"Capture & Listen",onClick:()=>Zo("broken-site-menu")},{icon:o(Bo,null),label:"Accessibility",onClick:()=>p("/accessibility")},{icon:o(No,null),label:"Keyboard Shortcuts",onClick:()=>p("/keyboardshortcuts")},{icon:n?o(Wo,null):o(Oo,null),label:n?"Website Reported":"Report Site",onClick:a,disabled:n,actionDone:n,preventClose:!0},{icon:o(Uo,null),label:"Open Help Center",onClick:()=>window.open(tr,"_blank","noopener"),suffixIcon:o(re.HelpCenterArrowWrapper,null,o(Fo,null))}]},[n]);return o(re.ButtonsList,null,l.map(({icon:a,label:p,onClick:d,suffixIcon:m,actionDone:g,preventClose:S})=>o(re.Button,{key:p,actionDone:g,onClick:()=>{g||(d(),S||t())}},o(re.ButtonContent,null,o(re.IconButton,{actionDone:g},a),o(E,{font:"subheading-6"},p),m),!g&&o(ue,{className:"chevron-right"}))))};r();i();var _=C(w());var zt=C(ji());r();i();var ke=C(w());r();i();var lt=s.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 16px 40px 24px;
`,ct=s.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 0px;
  justify-content: flex-end;
  padding: 0px 4px;
  width: 48px;

  .react-switch-bg {
    background: ${({checked:e})=>e?"radial-gradient(263.4% 263.4% at -38.15% -15%, #ea6aff 22.4%, #6b78fc 66.49%) !important":"initial"};
  }

  .react-switch-handle {
    background: ${c["icn-txt-white"]} !important;
  }
`,at=s.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  gap: 4px;
  width: 216px;
`,dt=s.div`
  align-self: stretch;
  color: ${c["icn-txt-prim"]};
  ${L["subheading-6"]};
`,pt=s.div`
  align-self: stretch;
  color: ${c["icn-txt-sec"]};
  ${L["body-7"]};
`;var ir=({isLocked:e,playbackSpeed:n})=>{let{autoSpeedUp:t}=O(),l=(0,ke.useMemo)(()=>e?"You reached your speed limit":`Speed up as you go every ${Xo(n||1.1)} words`,[e,n]),a=(0,ke.useCallback)(()=>Io(!t),[t]);return o(lt,null,o(at,null,o(dt,null,"Increase Speed Automatically"),o(pt,null,l)),o(ct,{checked:!!t},o(Jo,{width:40,height:24,"aria-label":Ao("AUTOMATIC_PLAYBACK_SPEED_UP_SWITCH"),"data-testid":U.AUTOMATIC_PLAYBACK_SPEED_UP_SWITCH,checked:t,disabled:e,onChange:a})))},mt=ir;r();i();var je=C(w());r();i();var ut=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},o("g",{clipPath:"url(#clip0_20322_3343)"},o("rect",{width:"16",height:"16",rx:"8",fill:"#1E1E1E"}),o("circle",{cx:"8.00006",cy:"8.00006",r:"6.02545",fill:"#1E1E1E"}),o("path",{d:"M7.2 5.5V7H8.8V5.5C8.8 5.05817 8.44183 4.7 8 4.7C7.55817 4.7 7.2 5.05817 7.2 5.5Z",fill:"#AFB9C8"}),o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.7 7H6V5.5C6 4.39543 6.89543 3.5 8 3.5C9.10457 3.5 10 4.39543 10 5.5V7H10.3C10.9627 7 11.5 7.53726 11.5 8.2V10.7371C11.5 11.3999 10.9627 11.9371 10.3 11.9371H5.7C5.03726 11.9371 4.5 11.3999 4.5 10.7371V8.2C4.5 7.53726 5.03726 7 5.7 7Z",fill:"#AFB9C8"})),o("defs",null,o("clipPath",{id:"clip0_20322_3343"},o("rect",{width:"16",height:"16",rx:"8",fill:"white"})))),ft=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("g",{id:"icons/20"},o("path",{id:"Vector",d:"M9 9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H9H11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H11H9Z",fill:"currentColor"}))),gt=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("g",{id:"icons/20"},o("path",{id:"Vector",fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H9V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H11V3Z",fill:"currentColor"})));r();i();var Ge=C(w()),rr=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 10px;

  gap: 8px;
  width: 100%;
`,St=({updatePlaybackSpeed:e})=>{let n=te(),t=(0,Ge.useMemo)(()=>n&&oe(n)&&n.status!=="expired",[n]),l=(0,Ge.useMemo)(()=>t?[.8,1,1.2,1.5,2,2.5]:[.8,1,1.2],[t]);return o(rr,null,l.map(a=>o(me,{key:a,onClick:()=>e(a)},parseFloat(a.toFixed(2)),"x")))};r();i();var xt=s.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Ct=s.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  padding: 12px 0;
`,bt=s.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
`,yt=s.div`
  ${L["heading-2"]};
  color: ${c["icn-txt-prim"]};
  text-align: center;
  width: 80px;
`,vt=s.div`
  align-self: stretch;
  color: ${c["icn-txt-sec"]};
  ${L["subheading-7"]}
  text-align: center;
`,wt=s.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  gap: 4px;
`,Vt=s.div`
  align-items: center;
  align-self: stretch;
  color: ${c["icn-txt-prim"]};
  display: flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  gap: 4px;
  justify-content: center;
  letter-spacing: 0.16px;
  line-height: 24px;
  text-align: center;
`;var nr=e=>{let n={Slow:[.4,1],Normal:[1,1.5],Fast:[1.5,3],"Speed Reader":[3,4.6]};for(let[t,[l,a]]of Object.entries(n))if(e>=l&&e<a)return t;return"Invalid Speed"},sr=({maxPlaybackSpeed:e,minPlaybackSpeed:n,updatePlaybackSpeed:t,playbackSpeed:l})=>{let a=(0,je.useCallback)(()=>t(l-.05),[l,t]),p=(0,je.useCallback)(()=>t(l+.05),[l,t]),d=W.useTime(),m=d.isLoading===!0?0:d.totalEstimatedDuration,g=Yo("short")(m);return o(Ct,null,o(wt,null,o(Vt,null,nr(l)),o(vt,null,"Duration: ~",g)),o(xt,null,o(bt,null,o(me,{iconOnly:!0,disabled:l===n,onClick:a},o(ft,null)),o(yt,{"data-testid":U.PLAYBACK_SPEED_PANEL_SPEED_VALUE},parseFloat(l.toFixed(2)),"x"),o(me,{iconOnly:!0,disabled:l===e,onClick:p},o(gt,null))),o(St,{updatePlaybackSpeed:t})))},Pt=sr;r();i();var Bt=C(Ho()),Re=C(w());r();i();var Ft=C(Ki()),ge=C(w());r();i();var Mt=C(w());r();i();var Lt=s.div`
  background: ${({isLocked:e})=>e?c["bg-tert-10-70"]:c["bg-sec-0-90"]};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  padding: 4px 8px;

  ${({isFirst:e})=>e?"border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;":""}

  ${({isLast:e})=>e?"border-top-left-radius: 8px; border-top-right-radius: 8px;":""}
`,kt=s.div`
  height: 2px;
  cursor: pointer;
  background-color: ${c["brdr-sec-20-60"]};
  border-radius: 9999px;
  transition: background-color 0.2s ease;

  width: ${({stepWidth:e})=>e}px;

  ${({isLocked:e})=>e?`
        opacity: 0.75;
      `:`
        &:hover {
          background-color: ${c["icn-txt-prim-electric"]};
        }
      `}
`,It=s.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,Rt=s.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  position: relative;
`,Et=s.div`
  padding: 6px 0;
`,Dt=s.div`
  -webkit-user-drag: none;
  user-drag: none;

  position: relative;
  height: 286px;
  width: 48px;

  cursor: pointer;
  border-radius: 8px;

  // display: flex;
  gap: 1px;
`,At=s.div`
  position: absolute;
  bottom: 1px;
  margin: 0 2px;
  box-sizing: border-box;

  width: 44px;
  padding: 3px;
  border-radius: 8px;

  background: ${({isIncreased:e})=>e?"linear-gradient(315deg, #EA6AFF 0%, #6B78FC 100%)":c["bg-prim-cta"]};
`,Tt=s.div`
  padding-top: 4px;
  padding-bottom: 4px;

  border-radius: 12px;
  cursor: grab;

  background-color: ${c["icn-txt-white"]};
`;var Ye={HIDDEN:0,NORMAL:24,PROMINENT:36},lr=e=>{let n=e%2===1,t=n&&(e-1)/2%2===1;return n?t?Ye.PROMINENT:Ye.NORMAL:Ye.HIDDEN},$t=Mt.default.memo(function({steps:n,isLocked:t,isFirst:l,isLast:a,onLockedInteraction:p}){return o(Lt,{onPointerDown:()=>{t&&p()},isFirst:l,isLast:a,isLocked:t},n.map((d,m)=>{let g=lr(m);return a&&m===n.length-1?null:o(kt,{isLocked:t,stepWidth:g,key:`speed-picker-step-${d}`})}),t&&o(It,null,o(ut,null)))});var cr=(e,n)=>{let t=(n-e)/10;return Array.from({length:8},(l,a)=>(0,Ft.default)(e+t*(a+1),2))},Wt=ge.default.memo(function({onLockedInteraction:n,sectionRanges:t}){let l=(0,ge.useMemo)(()=>t.map(d=>cr(d.min,d.max)),[t]),a=te(),p=(0,ge.useMemo)(()=>a&&oe(a)&&a.status!=="expired",[a]);return o(Rt,null,l.map((d,m)=>o($t,{key:`speed-picker-section-${m}`,steps:d,isFirst:m===0,isLast:m===l.length-1,isLocked:!p&&m>=2,onLockedInteraction:n})))});r();i();var Ie=C(Ho()),P=C(w());var ar=e=>{let n=T.length,t=100/n,l=(0,Ie.default)(Math.floor(e/t),0,n-1);if(l===n-1){let{min:m,max:g}=T[l];return m+(e-t*(n-1))/t*(g-m)}let{min:a,max:p}=T[l],d=e%t;return a+d/t*(p-a)},dr=166,_t=({sliderRef:e,maxPlaybackSpeed:n,minPlaybackSpeed:t,playbackSpeed:l,onMouseMove:a,onPlaybackSpeedChange:p})=>{let[d,m]=(0,P.useState)(!1),[g,S]=(0,P.useState)(!1),x=(0,P.useRef)(!1),y=(0,P.useRef)(0),v=(0,P.useRef)(l),k=(0,P.useRef)(null),I=(0,P.useCallback)(b=>{if(k.current){let A=k.current.height,X=b-k.current.top,Ni=(0,Ie.default)((A-X)/A*100,0,100),Oi=ar(Ni),Ui=Math.round(Oi*20)/20,so=(0,Ie.default)(Ui,t,n);x.current?a(so):p(so)}},[p,a,t,n]),D=(0,P.useCallback)(b=>{x.current=!0,m(!0),I(b)},[I]),R=(0,P.useCallback)(b=>{x.current=!1,m(!1),I(b.clientY)},[]),$=(0,P.useCallback)(b=>{b.preventDefault(),b.stopPropagation(),D(b.clientY),e.current?.setPointerCapture(b.pointerId)},[D]),V=(0,P.useCallback)(b=>{R(b),e.current?.releasePointerCapture(b.pointerId)},[R]),F=(0,P.useCallback)(b=>{x.current&&I(b)},[I]),N=(0,P.useCallback)(b=>{x.current&&(b.preventDefault(),F(b.touches[0].clientY))},[F]);return(0,P.useLayoutEffect)(()=>{let b=setTimeout(()=>{e.current&&(k.current=e.current.getBoundingClientRect())},350);return()=>clearTimeout(b)},[]),(0,P.useEffect)(()=>{let b=A=>{F(A.clientY)};return e.current?.addEventListener("pointermove",b,{passive:!0}),e.current?.addEventListener("pointerup",R,{passive:!0}),()=>{e.current?.removeEventListener("pointermove",b),e.current?.removeEventListener("pointerup",R)}},[F,R,N]),(0,P.useEffect)(()=>{if(v.current===l)return;if(x.current){S(!1),v.current=l,y.current=performance.now?.()??Date.now();return}let b=performance.now?.()??Date.now(),X=b-(y.current||0)>dr;S(X),v.current=l,y.current=b},[l]),{handlePointerDown:$,handlePointerUp:V,isDragging:d,shouldDelay:g}};var T=[{min:.4,max:1},{min:1,max:1.5},{min:1.5,max:3},{min:3,max:4.5}],pr=({playbackSpeed:e,maxPlaybackSpeed:n,minPlaybackSpeed:t,onPlaybackSpeedChange:l,onMouseMove:a,isIncreased:p,onLockedInteraction:d=()=>{}})=>{let m=(0,Re.useRef)(null),g=(0,Re.useMemo)(()=>(0,Bt.default)((()=>{let I=T.find(N=>e>=N.min&&e<=N.max);if(!I)return e<=T[0].min?0:100;let{min:D,max:R}=I,$=T.indexOf(I),V=100/T.length*$,F=(e-D)/(R-D)*(100/T.length);return V+F})(),6,100),[e]),{handlePointerDown:S,handlePointerUp:x,isDragging:y,shouldDelay:v}=_t({maxPlaybackSpeed:n,minPlaybackSpeed:t,onMouseMove:a,onPlaybackSpeedChange:l,playbackSpeed:e,sliderRef:m});return o(Et,null,o(Dt,{ref:m,role:"slider","aria-label":"Playback Speed","aria-valuenow":e,"aria-valuemin":T[0].min,"aria-valuemax":T[T.length-1].max,tabIndex:0,onPointerDown:S,onPointerUp:x},o(Wt,{onLockedInteraction:d,sectionRanges:T}),o(At,{isIncreased:p,style:{height:`${g}%`,transitionProperty:y?"none":"height",transitionDuration:y?"0ms":"600ms",transitionTimingFunction:"cubic-bezier(0.14, 1, 0.34, 1)",transitionDelay:y?"0ms":v?"166ms":"0ms"}},o(Tt,null))))},Nt=pr;r();i();var Ot=C(w());var Ut=s.div`
  align-items: center;
  display: flex;
  gap: 48px;
  justify-content: center;
`,Zt=s.div`
  align-items: flex-start;
  background: ${c["bg-sec-0-100"]};
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;var k1=s.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.32);
  color: #1e1e1e;
  font-size: 12px;
  ${({showOnRight:e=!1})=>e?"left: 50px;":"right: 48px"};
  line-height: 16px;
  padding: 4px 8px;
  position: absolute;
  text-align: center;
  top: 20%;
  width: max-content;
  max-width: 200px;
`,I1=s.div`
  position: relative;
  opacity: ${({visible:e})=>e?1:0};
  ${({visible:e})=>!e&&"pointer-events: none;"}
  transition: opacity 0.15s ease-in-out;
`;var qe=.5,ur=4.5,fr=1e3,gr=({playbackSpeed:e,setPlaybackSpeed:n})=>{let{autoSpeedUp:t}=O(),l=te(),a=(0,_.useRef)(Date.now()),p=(0,_.useMemo)(()=>l&&oe(l)&&l.status!=="expired"?ur:ao,[l]),d=(0,_.useMemo)(()=>e>=p,[e,p]),m=(0,_.useCallback)((0,zt.default)(y=>Vo(y,p),150),[p]),g=(0,_.useCallback)(y=>{let v=lo(qe,p,y);n(v),m(v)},[p]),S=()=>{Ve("speed_picker","increased_listening_speeds")},x=(0,_.useCallback)(y=>{n(y);let v=Date.now();v-a.current>fr&&(a.current=v,g(y))},[g]);return o(u,null,o(Zt,null,o(Ut,null,o(Pt,{maxPlaybackSpeed:p,minPlaybackSpeed:qe,updatePlaybackSpeed:g,playbackSpeed:e}),o(Nt,{onLockedInteraction:S,onMouseMove:x,onPlaybackSpeedChange:g,playbackSpeed:e,maxPlaybackSpeed:p,minPlaybackSpeed:qe,isIncreased:!!t&&!d}))),o(mt,{isLocked:d,playbackSpeed:e}))},Gt=gr;r();i();var jt=C(w());var hr=s(mo)`
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
`,Yt=()=>{let{state:e}=W.usePlayingState();return(0,jt.useEffect)(()=>{["playing","buffering"].includes(e)&&(Kt(!1),qt(!0))},[e]),o(hr,{column:!0,xAlign:!0,separation:"32px"},o(qo,{align:!0},"This website is unsupported"))};r();i();r();i();var Je=C(w());r();i();var z=C(w());r();i();var Xt=e=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1384 6.88837C13.4313 6.59548 13.9061 6.59548 14.199 6.88837C14.4919 7.18127 14.4919 7.65614 14.199 7.94903L11.7294 10.4187L14.1991 12.8884C14.492 13.1813 14.492 13.6561 14.1991 13.949C13.9062 14.2419 13.4313 14.2419 13.1384 13.949L10.6687 11.4793L8.19897 13.949C7.90607 14.2419 7.4312 14.2419 7.13831 13.949C6.84542 13.6561 6.84542 13.1813 7.13831 12.8884L9.60803 10.4187L7.13837 7.94903C6.84547 7.65614 6.84547 7.18127 7.13836 6.88837C7.43125 6.59548 7.90613 6.59548 8.19902 6.88837L10.6687 9.35802L13.1384 6.88837Z",fill:"currentColor"}));r();i();var Qt=C(w());r();i();var Jt=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.0168 4.59677C18.4073 4.98731 18.4073 5.62047 18.0168 6.01098L8.62378 15.4034C8.43623 15.591 8.18185 15.6963 7.91662 15.6963C7.65139 15.6963 7.39703 15.5909 7.20951 15.4033L1.98324 10.1759C1.59276 9.78533 1.59283 9.15217 1.9834 8.76169C2.37397 8.37121 3.00713 8.37128 3.39761 8.76184L7.91679 13.282L16.6026 4.59673C16.9932 4.20622 17.6263 4.20623 18.0168 4.59677Z",fill:"currentColor"}));r();i();var Sr=s.div`
  position: relative;
`,xr=s.div`
  ${L["subheading-6"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 12px;
  min-width: 140px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  color: ${c["icn-txt-prim"]};
  background: ${c["sf-sec-0-90"]};

  &:hover {
    background: ${c["sf-sec-hov-0-90"]};
  }

  &:active {
    background: ${c["sf-sec-pres-0-90"]};
  }

  ${({isOpen:e})=>e?`background: ${c["sf-sec-hov-0-90"]} !important;`:""}

  ${({hasSelectedOption:e})=>e?`
    color: ${c["icn-txt-blue"]};
    background: ${c["sf-act-blue"]};
  `:""}
`,Cr=s.div`
  display: flex;
  align-items: center;

  ${({isOpen:e})=>e?"transform: rotate(180deg);":""}
`,br=s.div`
  overflow: hidden;
  border-radius: 12px;
  position: absolute;
  z-index: 9999;
  transform: translateY(100%);

  ${({isSubmenu:e,showSubmenuOnRight:n})=>e?`left: ${n?"-3px":"-1px"}`:"0"};
  ${({isSubmenu:e,showSubmenuOnRight:n,top:t})=>e?`transform: translateX(${n?"100%":"-100%"}); top: ${t}px;`:"bottom: -4px;"}
`,yr=s.div`
  overflow: auto;
  min-width: 180px;
  max-height: 300px;
  ${Pe};
  box-sizing: border-box;
  padding: 4px 0;
  background: ${c["bg-prim-w-90"]};
  border-radius: 12px;
  color: ${c["icn-txt-prim"]};
  display: flex;
  flex-direction: column;
  gap: 2px;

  &::-webkit-scrollbar {
    width: 4px;
  }
`,Ke=40,vr=s.div`
  position: relative;
  white-space: nowrap;
  ${L["subheading-6"]};
  color: ${c["icn-txt-prim"]};
  display: flex;
  padding: 10px 12px;
  gap: 12px;
  justify-content: space-between;
  background: ${c["sf-prim-w-90"]};
  cursor: pointer;
  border-radius: 8px;
  height: ${Ke}px;
  box-sizing: border-box;

  &:hover {
    background: ${c["sf-prim-hov-w-90"]};
  }

  &:active {
    background: ${c["sf-prim-pres-w-90"]};
  }

  ${({isSelected:e})=>e?`background: ${c["sf-prim-hov-w-90"]}`:""}
`,wr=s.div`
  width: 20px;
  height: 20px;
`,Vr=s.div`
  display: flex;
  gap: 8px;
`,Pr=s.div`
  color: ${c["icn-txt-tert"]};
  display: flex;
  align-items: center;
  transform: rotate(270deg);
`,M={ExpandIcon:Cr,Dropdown:xr,Wrapper:Sr,DowndownList:yr,DropdownItem:vr,DropdownItemLabel:Vr,ChevronIconWrapper:Pr,CheckMarkPlaceholder:wr,DowndownListWrapper:br};var Xe=({item:e,selectedOption:n,renderDropdownLabel:t,onSelection:l,setSubmenuItem:a,submenuItem:p})=>{let d=(0,Qt.useMemo)(()=>e.value===n||!!n&&!!e.items?.find(({value:S})=>S===n),[e,n]),m=()=>{if(!e.items||e.items.length===1){p?.items?.includes(e)||a(void 0);return}a(e)},g=S=>{S.stopPropagation(),l(e.value)};return o(M.DropdownItem,{isSelected:d,onMouseUp:g,onMouseEnter:m},o(M.DropdownItemLabel,null,d?o(Jt,null):o(M.CheckMarkPlaceholder,null),t(e)),e.items&&e.items?.length>1&&o(M.ChevronIconWrapper,null,o(ve,null)))};var Ht=({selectedOption:e,onSelection:n,placeholder:t,items:l,renderDropdownLabel:a,showSubmenuOnRight:p})=>{let d=(0,z.useRef)(null),[m,g]=(0,z.useState)(!1),[S,x]=(0,z.useState)(),y=V=>{V.stopPropagation(),n(void 0)},v=!!e,k=(0,z.useMemo)(()=>l.findIndex(({value:V})=>S?.value===V)*(Ke+2)+4-(d.current?.scrollTop||0),[S,l]),I=()=>{g(!1),x(void 0)},D=()=>g(!0),R=V=>{n(V),I()},$=(0,z.useRef)(null);return Ko([$],I),o(M.Wrapper,{ref:$},o(M.Dropdown,{isOpen:m,hasSelectedOption:v,tabIndex:0,onClick:m?I:D},t,v?o(Xt,{onClick:y}):o(M.ExpandIcon,{isOpen:m},o(ve,null))),o("div",{style:{position:"relative"}},m&&o(M.DowndownListWrapper,null,o(M.DowndownList,{ref:d},l.map(V=>o(Xe,{item:V,key:V.value,selectedOption:e,renderDropdownLabel:a,onSelection:R,setSubmenuItem:x,submenuItem:S})))),S?.items&&o(M.DowndownListWrapper,{isSubmenu:!0,top:k,showSubmenuOnRight:p},o(M.DowndownList,null,S.items.map(V=>o(Xe,{item:V,key:V.value,selectedOption:e,renderDropdownLabel:a,onSelection:R,setSubmenuItem:x,submenuItem:S}))))))};r();i();r();i();var h=be(()=>({showOnRight:!1,allVoices:[],featuredVoices:[],freeVoices:[],clonedVoices:[],premiumVoices:[],favoriteVoices:[],recentVoices:[],hasAccessToPremiumVoices:!1,selectedVoice:void 0,selectedLocale:void 0,search:"",searchExpanded:!1})),Lr=e=>h.setState({selectedLocale:e}),kr=e=>h.setState({search:e}),Ir=e=>h.setState({searchExpanded:e}),Rr=(e,n)=>{Po(e,{isUserSelection:n})},he=({displayName:e,language:n})=>`${e}-${n}`,G={setSelectedLocale:Lr,setSearch:kr,toggleSearch:Ir,setSelectedVoice:Rr};var ei=()=>{let{selectedLocale:e,showOnRight:n}=h(),t=(0,Je.useMemo)(()=>[{value:void 0},...ie.map(p=>({value:p.lang,items:p.locales.map(d=>({value:d}))}))],[]),l=(0,Je.useMemo)(()=>{if(!e)return"Language";if(ie.find(m=>e===m.lang))return Z(e);let[p,d]=e?.split("-")||"";return`${Z(p)} - ${d.toUpperCase()}`},[e]),a=p=>p.value?p.items?Z(p.value)||"":Ze(p.value)||"":"Any";return o(Ht,{showSubmenuOnRight:n,items:t,onSelection:G.setSelectedLocale,placeholder:l,selectedOption:e,renderDropdownLabel:a})};var Er=s.div`
  padding-left: 44px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  flex-grow: 1;
`,oi=()=>o(Er,null,o(ei,null));r();i();var ae=C(w());r();i();var ti=C(w());var Ee=e=>{let{hasAccessToPremiumVoices:n}=h();return(0,ti.useMemo)(()=>n?e:e.filter(t=>!t.premium),[e,n])};r();i();var to=C(w());r();i();var ne=(e,n)=>e.id===n.id;r();i();var Q=C(w());r();i();Gi();r();i();var ii=C(Yi());var Dr=(0,ii.default)(et,1e4),Qe=ho(async({voice:e,format:n,ssml:t})=>{try{let l=ye("/tts/get-audio",{ssml:t,audioFormat:co()?"mp3":void 0,voice:e});if("message"in l)throw new Error(l.message);return l}catch(l){throw l.message==="You have been rate limited"&&(Dr(),Qe.invalidateCache([{voice:e,format:n,ssml:t}])),l}},{argsToKey:({voice:e,ssml:n,format:t})=>e.language+e.engine+e.name+n+t});var ri=be(()=>({playingId:void 0})),j=e=>ri.setState({playingId:e}),De=(e,n)=>{let{audioPlayer:t}=h(),l=W.getPlayingState(),{playingId:a}=ri();return Be(()=>{["playing","buffering","errored"].includes(l)&&j(void 0)},[l]),Be(()=>{let m=()=>{j(void 0)};return t&&t.addEventListener("ended",m),()=>{t&&t.removeEventListener("ended",m)}},[t]),{isPlaying:a===n,playPreview:()=>{if(t&&(t.pause(),speechSynthesis.cancel(),j(void 0)),!t)return;if(e.previewAudio){t.src=e.previewAudio,t.play().then(()=>j(n));return}if(e.engine!==J)return Qe({voice:e,ssml:`<speak>${Ne(e)}</speak>`}).then(({audioData:g})=>{t.src=g,t.play().then(()=>j(n))});let m=new SpeechSynthesisUtterance(Ne(e));m.voice=speechSynthesis.getVoices().find(g=>g.name?.toLowerCase()===e.name?.toLowerCase())??null,speechSynthesis.cancel(),setTimeout(()=>{speechSynthesis.speak(m),j(n),m.addEventListener("end",()=>j(void 0))},250)},stopPreview:()=>{t?t.pause():speechSynthesis.cancel(),j(void 0)}}};r();i();var He=e=>e.engine===J?e.name:e.slug||e.name.replace("PVL:",""),Ar=50,ni=()=>{let{favoriteVoices:e}=h(),n=async a=>{let p=a.map(He).filter(Boolean),d=[...new Set(p)];await Lo(d)};return{addToFavorites:async a=>{await n([a,...e].slice(0,Ar))},removeFromFavorites:async a=>{await n(e.filter(p=>!ne(p,a)))}}};r();i();var se=e=>({handleFreeUserVoiceClick:async()=>{let t=!!e.premium,l=await xo(),a=go(l);if(!t)return!0;if(a)return!1;if(!uo(l)&&t&&(fo(l)||l.status==="expired")){let p=await So();return p?.uid&&await ye("/user-settings/set-pending-upgrade-voice",{voice:e,uid:p.uid}),await To(!0),await Ve("popup_voice_switch","premium_voices"),!1}return!0}});r();i();var si=C(w());var Y=e=>{let{selectedVoice:n}=h();return{isSelected:(0,si.useMemo)(()=>n?ne(n,e):!1,[n,e])}};r();i();var ci=C(w());r();i();var li=e=>Mo(e.split(":")?.at(-1)?.split(" ")[0]||"");var Ae=e=>(0,ci.useMemo)(()=>{let t=e?.labels?.find(a=>a.includes("style:")),l=e?.labels?.find(a=>a.includes("timbre:"));return t?li(t):l?Oe(l):""},[e]);r();i();var ai=({filled:e})=>e?o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M15.2741 2.10139C14.2036 1.86318 13.1292 2.06127 12.189 2.52243C11.3756 2.9214 10.634 3.52644 9.99922 4.29212C9.36479 3.5266 8.62351 2.92162 7.81046 2.52264C6.8705 2.06138 5.7962 1.86323 4.72569 2.1015C3.63326 2.34465 2.69906 3.00994 2.03913 3.98881C0.306957 6.55814 0.961614 9.53359 2.37547 11.849C3.80429 14.1889 6.22085 16.3047 9.0202 17.7602C9.63545 18.08 10.3622 18.0801 10.9775 17.7604C13.7781 16.305 16.1953 14.1891 17.6245 11.8492C19.0387 9.53363 19.6933 6.55817 17.9612 3.98883C17.3012 3.00969 16.3667 2.34448 15.2741 2.10139Z",fill:c["icn-txt-prim"]})):o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1889 2.52243C13.129 2.06127 14.2035 1.86318 15.274 2.10139C16.3666 2.34448 17.301 3.00969 17.9611 3.98883C19.6932 6.55817 19.0385 9.53363 17.6243 11.8492C16.1952 14.1891 13.778 16.305 10.9774 17.7604C10.3621 18.0801 9.63533 18.08 9.02007 17.7602C6.22073 16.3047 3.80417 14.1889 2.37535 11.849C0.961492 9.53359 0.306835 6.55814 2.03901 3.98881L2.86817 4.54781L2.03901 3.98881C2.69894 3.00994 3.63314 2.34465 4.72557 2.1015C5.79608 1.86323 6.87037 2.06138 7.81034 2.52264C8.62338 2.92162 9.36466 3.5266 9.9991 4.29212C10.6339 3.52644 11.3755 2.9214 12.1889 2.52243ZM14.8396 4.05364C14.2891 3.93115 13.6784 4.01942 13.0697 4.31804C12.2752 4.70772 11.4888 5.45205 10.869 6.54595C10.6915 6.85934 10.3591 7.05303 9.99892 7.053C9.63872 7.05298 9.30637 6.85925 9.12886 6.54584C8.50931 5.452 7.72327 4.70775 6.92926 4.3181C6.32076 4.0195 5.71039 3.93124 5.16009 4.05373C4.61006 4.17615 4.09657 4.51463 3.69734 5.10681C2.58304 6.75966 2.87555 8.8305 4.08228 10.8067C5.28541 12.777 7.39962 14.6635 9.94267 15.9857C9.97972 16.0049 10.0181 16.0049 10.0551 15.9857C12.5994 14.6635 14.7141 12.777 15.9175 10.8067C17.1245 8.83049 17.417 6.75963 16.3027 5.10678C15.9035 4.51458 15.3899 4.17608 14.8396 4.05364Z",fill:"currentColor"}));r();i();var yi=C(w());r();i();var di=()=>o("svg",{width:"21",height:"22",viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M19.3298 9.00727C20.8901 9.89293 20.8901 12.1071 19.3298 12.9927L4.01064 21.6883C2.45035 22.5739 0.500001 21.4669 0.500001 19.6956L0.500002 2.30444C0.500002 0.533122 2.45036 -0.57395 4.01064 0.311709L19.3298 9.00727Z",fill:"currentColor"}));r();i();var Tr=s.div`
  position: relative;
  cursor: pointer;
`,Mr=s.div`
  display: ${({visible:e})=>e?"block":"none"};
`,$r=s.div`
  position: absolute;
  top: 0;
  left: -0.5px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: black;
  opacity: 0.4;
`,Fr=s.div`
  position: absolute;
  top: 50%;
  left: calc(50% + 3px);
  transform: translate(-50%, -50%);
  border-radius: 100%;
  color: ${c["icn-txt-white"]};
  width: 21px;
  height: 22px;
`,Wr=s.div`
  position: absolute;
  inset: -22px;
  display: block;
  border-radius: 100%;
  transform: scale(0.85);
  transition: background-color 0.2s ease;

  ${({background:e,hasRegularAvatar:n})=>n?`background-color: ${e};`:""}

  ${({isPlaying:e})=>e?`background-color: ${c["bg-prim-cta"]};`:""}
`,_r=s.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;

  ${({hasRegularAvatar:e})=>!e&&`
      transform: scale(1.3);
      top: 0;
    `}
`,q={PlayIconWrapper:Fr,PlayIconOverlay:$r,PlayContainer:Mr,VoiceAvatar:Tr,VoiceImage:Wr,AvatarImg:_r};r();i();r();i();var pi=()=>o("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("g",{clipPath:"url(#clip0_266_6657)"},o("rect",{x:"2.66669",y:"2",width:"20",height:"20",rx:"10",fill:c["icn-txt-prim-inv"]}),o("path",{d:"M11.6667 8.875V10.75H13.6667V8.875C13.6667 8.32272 13.219 7.875 12.6667 7.875C12.1144 7.875 11.6667 8.32272 11.6667 8.875Z",fill:c["icn-txt-prim"]}),o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6667 22C18.1895 22 22.6667 17.5228 22.6667 12C22.6667 6.47715 18.1895 2 12.6667 2C7.14384 2 2.66669 6.47715 2.66669 12C2.66669 17.5228 7.14384 22 12.6667 22ZM9.79169 10.75H10.1667V8.875C10.1667 7.49429 11.286 6.375 12.6667 6.375C14.0474 6.375 15.1667 7.49429 15.1667 8.875V10.75H15.5417C16.3701 10.75 17.0417 11.4216 17.0417 12.25V15.4214C17.0417 16.2498 16.3701 16.9214 15.5417 16.9214H9.79169C8.96326 16.9214 8.29169 16.2498 8.29169 15.4214V12.25C8.29169 11.4216 8.96326 10.75 9.79169 10.75Z",fill:c["icn-txt-prim"]})),o("rect",{x:"1.66669",y:"1",width:"22",height:"22",rx:"11",stroke:c["sf-prim-w-100"],strokeWidth:"2"}),o("defs",null,o("clipPath",{id:"clip0_266_6657"},o("rect",{x:"2.66669",y:"2",width:"20",height:"20",rx:"10",fill:c["icn-txt-prim"]}))));r();i();var Te=({regular:e})=>e?o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",fill:c["icn-txt-prim-electric"]}),o("path",{d:"M11.8986 6.52683C12.2111 6.21442 12.2111 5.70788 11.8987 5.39546C11.5862 5.08303 11.0797 5.08302 10.7673 5.39544L7.10462 9.05797L5.23263 7.18598C4.92021 6.87356 4.41368 6.87356 4.10126 7.18598C3.78884 7.4984 3.78884 8.00493 4.10126 8.31735L6.53892 10.755C6.85134 11.0674 7.35786 11.0674 7.67028 10.755L11.8986 6.52683Z",fill:c["icn-txt-white"]})):o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("g",{clipPath:"url(#clip0_229_1981)"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:c["icn-txt-prim-electric"]}),o("path",{d:"M16.6413 10.2461C17.0132 9.87418 17.0132 9.27116 16.6413 8.89923C16.2694 8.52729 15.6664 8.52728 15.2944 8.8992L10.9341 13.2594L8.70556 11.0308C8.33363 10.6589 7.73062 10.6589 7.35869 11.0308C6.98676 11.4027 6.98676 12.0057 7.35869 12.3777L10.2607 15.2797C10.6326 15.6516 11.2356 15.6516 11.6075 15.2797L16.6413 10.2461Z",fill:c["icn-txt-white"]})),o("rect",{x:"1",y:"1",width:"22",height:"22",rx:"11",stroke:c["brdr-prim-10-100"],strokeWidth:"2"}),o("defs",null,o("clipPath",{id:"clip0_229_1981"},o("rect",{x:"2",y:"2",width:"20",height:"20",rx:"10",fill:c["icn-txt-white"]}))));var mi=e=>e==="large"?"width: 24px; height: 24px;":e==="medium"?"width: 20px; height: 20px;":"",ui=s.div`
  position: absolute;
  bottom: -2px;
  right: -1px;
  ${({size:e})=>mi(e)};
  ${({size:e})=>`svg { ${mi(e)}}`};
`,fi=({voice:e,isSelected:n,size:t})=>{let{hasAccessToPremiumVoices:l}=h(),a=!!e.premium;return!l&&a?o(ui,{size:t},o(pi,null)):n?o(ui,{size:t},o(Te,null)):null};r();i();var eo=C(w()),Ci=C(hi());r();i();var Me=C(w()),Si=["M 90 10 C 115.4878 10.0578 137.506 21.2689 152.2129 40.3497 C 166.5126 58.9011 171.8853 84.8185 166.8297 107.6195 C 161.7226 130.6591 145.001 150.5515 123.6438 160.9633 C 102.0667 171.4828 76.9193 171.0464 55.1314 160.9633 C 33.0044 150.7235 17.699 131.9918 12.0222 108.4525 C 6.2749 84.6199 10.5228 59.5361 25.9011 40.3497 C 41.3162 21.1173 64.919 9.0725 90 10 Z  ","M89.2367 10.0119C113.461 10.3197 137.6 17.6659 153.138 36.2528C169.098 55.3446 174.303 81.1051 168.989 105.415C163.612 130.015 148.621 152.532 125.527 162.569C103.33 172.216 78.6408 164.986 57.0386 154.072C36.0719 143.479 17.8842 127.561 11.4942 104.956C4.68939 80.8838 7.41856 53.9582 23.267 34.603C38.9093 15.4996 64.5481 9.69833 89.2367 10.0119Z","M89.1936 11.2181C112.755 12.7304 132.43 27.053 147.105 45.5481C161.726 63.9743 172.046 86.5188 167.205 109.537C162.274 132.979 144.666 151.741 122.74 161.391C101.715 170.645 77.9293 168.063 57.3309 157.895C37.009 147.863 22.1603 130.224 15.6385 108.52C8.44601 84.583 6.07147 57.4015 21.1437 37.4634C36.5683 17.0591 63.6677 9.57975 89.1936 11.2181Z","M88.5283 11.0239C112.949 11.5839 134.965 23.9414 150.527 42.7699C166.477 62.0676 177.345 86.8103 171.236 111.09C165.252 134.869 143.575 150.047 121.079 159.805C99.8766 169.002 76.4054 170.609 55.1979 161.423C32.8174 151.73 13.9171 134.243 7.64761 110.673C1.11679 86.12 6.84717 59.5687 22.8583 39.8422C38.708 20.3146 63.3846 10.4473 88.5283 11.0239Z","M84.8829 5.02128C110.352 4.37891 133.571 18.343 149.494 38.2311C165.457 58.1704 173.318 83.743 167.891 108.702C162.396 133.971 145.132 155.269 121.678 166.161C98.6186 176.87 71.6218 175.834 49.2198 163.812C27.9425 152.393 15.6405 130.323 10.8115 106.663C6.13818 83.7648 10.4703 60.2771 24.234 41.3904C38.8404 21.3474 60.0902 5.64661 84.8829 5.02128Z","M87.722 11.0085C112.54 11.2567 137.559 17.9968 153.557 36.9716C170.057 56.5424 175.951 83.3623 169.639 108.17C163.505 132.277 144.856 150.822 122.058 160.772C100.337 170.251 75.9069 168.627 54.5227 158.412C33.0453 148.153 16.3642 130.146 9.95837 107.222C3.13308 82.7971 4.27333 55.362 20.215 35.6381C36.0562 16.0384 62.5222 10.7565 87.722 11.0085Z","M87.3439 10.123C111.023 10.9486 133.976 18.7079 149.496 36.6104C165.853 55.4786 174.327 80.4274 169.541 104.936C164.571 130.381 148.401 153.242 124.675 163.693C101.775 173.78 75.8225 167.721 53.7471 155.939C32.9437 144.837 18.0339 126.157 11.7513 103.428C5.04516 79.1684 3.66418 51.6352 19.5086 32.0781C35.249 12.6494 62.3544 9.25163 87.3439 10.123Z","M84.841 6.00001C109.966 5.98475 132.559 19.4435 148.501 38.8623C164.763 58.6714 175.115 83.945 169.329 108.913C163.562 133.795 143.006 151.546 119.876 162.38C97.1021 173.048 70.6348 177.075 48.2392 165.634C26.3704 154.461 15.7393 130.587 10.6279 106.568C5.6305 83.0842 7.02224 58.2583 21.2784 38.9396C36.1861 18.7379 59.7343 6.01526 84.841 6.00001Z","M86.9407 10.0009C110.563 10.1273 130.783 24.7939 145.517 43.2587C160.258 61.7314 170.4 84.7808 164.965 107.78C159.571 130.603 139.945 145.986 118.829 156.188C97.6717 166.408 73.4256 172.184 52.1096 162.3C30.4727 152.267 17.4054 130.3 12.6149 106.936C7.96398 84.2531 13.4828 61.0024 27.5722 42.6272C42.0279 23.774 63.1837 9.87366 86.9407 10.0009Z","M90.3692 10.0007C114.309 9.93544 139.537 14.7558 154.475 33.4635C169.423 52.1826 168.789 77.9155 163.204 101.21C157.711 124.123 145.705 145.248 124.985 156.467C103.013 168.364 76.3182 171.35 53.8483 160.423C31.4696 149.54 18.55 126.501 13.3327 102.169C8.21125 78.2854 11.0341 52.554 26.6994 33.8115C41.9877 15.5201 66.53 10.0656 90.3692 10.0007Z"],xi=({isPlaying:e,id:n})=>{let[t,l]=(0,Me.useState)(0);return(0,Me.useEffect)(()=>{if(!e){l(0);return}let p=setTimeout(()=>{if(Si.length<=t+1){l(0);return}l(t+1)},t===0?0:300);return()=>clearTimeout(p)},[t,e]),o("svg",{width:178,height:178,viewBox:"0 0 178 178"},o("clipPath",{id:n},o("path",{d:Si[t],fill:"currentColor",style:{transition:"0.3s linear"}})))};var Se=136,bi=({voice:e,isPlaying:n,size:t,background:l})=>{let a=(0,eo.useMemo)(()=>(0,Ci.default)(),[]),p=!!e.avatarImage&&!pe(e),d=(0,eo.useMemo)(()=>t==="large"?64:t==="medium"?48:32,[t]),m=d/Se;return o("div",{style:{width:d,height:d}},o("div",{style:{position:"absolute",transform:`scale(${m}) translate(-50%, -50%)`,top:d-Se/2,left:d-Se/2}},o("div",{style:{position:"relative",width:Se,height:Se}},o(q.VoiceImage,{isPlaying:n,background:l,hasRegularAvatar:p,style:{WebkitClipPath:`url(#${a})`,clipPath:`url(#${a})`}},o(xi,{isPlaying:n,id:a}),o(q.AvatarImg,{hasRegularAvatar:p,alt:e.name,src:e.avatarImage||yo(e.language),width:140,height:140})))))};var le=({onClick:e,voice:n,size:t,isPlaying:l=!1,showIcons:a=!0,background:p,showPlayIcon:d=!0})=>{let{hasAccessToPremiumVoices:m}=h(),{isSelected:g}=Y(n),S=!!n.premium,[x,y]=(0,yi.useState)(!1),v=!S||m,k=I=>{e&&(I.stopPropagation(),e())};return o(q.VoiceAvatar,{onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),onClick:k},o(bi,{isPlaying:l,voice:n,size:t,background:p}),!l&&!!e&&d&&o(q.PlayContainer,{visible:v&&x},o(q.PlayIconOverlay,null),o(q.PlayIconWrapper,null,o(di,null))),a&&o(fi,{voice:n,isSelected:g,size:t}))};r();i();var oo=C(w());r();i();var vi=e=>o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o("path",{d:"M6.7501 3.65226C7.19599 3.29357 7.41893 3.11423 7.6664 3.04548C7.88467 2.98484 8.11533 2.98484 8.3336 3.04548C8.58107 3.11423 8.80401 3.29357 9.2499 3.65226L9.53007 3.87763C9.66494 3.98613 9.73237 4.04037 9.8058 4.08441C9.87101 4.12353 9.93966 4.15659 10.0109 4.18319C10.0911 4.21314 10.1756 4.23204 10.3445 4.26984L10.6954 4.34836C11.2538 4.47333 11.533 4.53582 11.7411 4.68643C11.9246 4.81927 12.0684 4.99962 12.1571 5.20807C12.2576 5.44441 12.2564 5.73054 12.254 6.30279L12.2524 6.66234C12.2517 6.83544 12.2513 6.92198 12.2627 7.00685C12.2728 7.08222 12.2897 7.15651 12.3134 7.22879C12.34 7.31017 12.3778 7.38799 12.4536 7.54362L12.611 7.86691C12.8615 8.38144 12.9867 8.6387 12.9986 8.89526C13.0092 9.12155 12.9579 9.34643 12.8502 9.54574C12.7281 9.7717 12.5036 9.94915 12.0547 10.304L11.7727 10.527C11.6369 10.6344 11.569 10.6881 11.5097 10.7498C11.4571 10.8047 11.4095 10.8643 11.3678 10.9278C11.3207 10.9994 11.2835 11.0775 11.2091 11.2338L11.0544 11.5584C10.8083 12.075 10.6853 12.3333 10.4921 12.5026C10.3218 12.652 10.114 12.752 9.891 12.7921C9.63822 12.8376 9.35954 12.7727 8.80217 12.643L8.45197 12.5615C8.28338 12.5223 8.19909 12.5027 8.11382 12.4948C8.0381 12.4879 7.9619 12.4879 7.88618 12.4948C7.80091 12.5027 7.71662 12.5223 7.54803 12.5615L7.19783 12.643C6.64046 12.7727 6.36178 12.8376 6.109 12.7921C5.88603 12.752 5.67821 12.652 5.50786 12.5026C5.31473 12.3333 5.19168 12.075 4.94558 11.5584L4.79095 11.2338C4.71651 11.0775 4.67929 10.9994 4.63224 10.9278C4.59046 10.8643 4.54294 10.8047 4.4903 10.7498C4.43103 10.6881 4.36313 10.6344 4.22735 10.527L3.94529 10.304C3.49637 9.94915 3.27191 9.7717 3.14982 9.54574C3.04213 9.34643 2.9908 9.12155 3.00135 8.89526C3.01331 8.6387 3.13855 8.38144 3.38903 7.86691L3.5464 7.54362C3.62217 7.38799 3.66005 7.31017 3.68665 7.22879C3.71027 7.15651 3.72722 7.08222 3.7373 7.00685C3.74865 6.92198 3.74828 6.83544 3.74755 6.66235L3.74603 6.30279C3.7436 5.73054 3.74239 5.44441 3.84293 5.20807C3.93161 4.99962 4.07543 4.81927 4.25892 4.68643C4.46697 4.53582 4.74619 4.47333 5.30463 4.34836L5.65551 4.26984C5.82443 4.23204 5.90888 4.21314 5.9891 4.18319C6.06034 4.15659 6.12899 4.12353 6.1942 4.08441C6.26763 4.04037 6.33506 3.98613 6.46993 3.87763L6.7501 3.65226Z",fill:c["icn-txt-prim"]}),o("path",{d:"M5.75 8.29999L7.25 9.79999L10.25 6.79999",stroke:c["icn-txt-prim-inv"],strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}));var Ur=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ce=({voice:e,style:n,showFull:t=!1})=>{let l=(0,oo.useMemo)(()=>e.labels?.includes("label:founder")||e.labels?.includes("label:partner"),[e.labels]),a=(0,oo.useMemo)(()=>e.engine===J?e.name.split(/ \(| -/)[0]:t?e.displayName:e.displayName.split(" ")[0],[e,t]);return o(Ur,{style:n,"data-testid":`${U.VOICE_NAME_TEXT(a)}`,"data-local-voice":e.engine===J?"true":"false"},a,l&&o(vi,null))};r();i();var Zr=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-left: 8px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 10px;

  background: ${c["sf-prim-w-100"]};

  &:hover {
    background: ${c["sf-sec-hov-0-90"]};
  }

  &:active {
    background: ${c["sf-sec-pres-0-90"]};
  }

  ${({isSelected:e})=>e?`background: ${c["sf-act-blue"]} !important`:""}
  ${({hasPremium:e})=>e?"":`background: ${c["sf-prim-w-100"]} !important`}
`,zr=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px 10px 0;
  border-bottom: 0.5px solid ${c["brdr-prim-10-80"]};
`,Gr=s.div`
  flex-grow: 1;
  width: 100%;
`,jr=s.div`
  text-align: right;
  flex-grow: 1;
  width: 20px;
  height: 20px;

  color: ${c["icn-txt-sec"]};

  &:hover {
    color: ${c["icn-txt-prim"]};
  }
`,Yr=s.div`
  padding: 4px 8px;
  ${L["heading-6"]};
  color: ${c["icn-txt-prim"]};
  background: ${c["bg-prim-w-100"]};
  position: sticky;
  top: 0;
  z-index: 1;
`,xe={Header:Yr,Icon:jr,VoiceItem:Zr,VoiceInfo:Gr,VoiceInfoWrapper:zr};var $e=({voice:e})=>{let n=(0,Q.useMemo)(()=>we(),[]),{isSelected:t}=Y(e),{hasAccessToPremiumVoices:l,favoriteVoices:a}=h(),{playPreview:p,stopPreview:d,isPlaying:m}=De(e,n),S=!!!e.premium||l,[x,y]=(0,Q.useState)(!1),v=Ae(e),k=(0,Q.useMemo)(()=>t?c["bg-prim-w-100"]:x?c["bg-prim-w-100"]:c["bg-sec-0-80"],[t,x]),{handleFreeUserVoiceClick:I}=se(e),D=async()=>{if(!await I())return;G.setSelectedVoice(e,!0),W.getPlayingState()!=="playing"&&(m?d():p())},R=(0,Q.useMemo)(()=>!!a?.find(A=>ne(A,e)),[a,e]),{addToFavorites:$,removeFromFavorites:V}=ni(),F=A=>{A.preventDefault(),A.stopPropagation(),R?V(e):$(e)},N=(0,Q.useMemo)(()=>{let[A,X]=e.language.split("-");return X?X.toUpperCase():A.toUpperCase()},[e]),b=S&&(R||x);return o(xe.VoiceItem,{onClick:D,hasPremium:S,isSelected:t,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),"aria-selected":t,"data-checked":t},o(le,{size:"medium",showIcons:!0,voice:e,background:k,isPlaying:m,onClick:D,showPlayIcon:!1}),o(xe.VoiceInfoWrapper,null,o(xe.VoiceInfo,null,o(E,{font:"subheading-5",color:"icn-txt-prim"},o(ce,{showFull:!0,voice:e,style:{gap:"2px",justifyContent:"flex-start"}})),o(E,{font:"body-6",color:"icn-txt-sec"},N," ",v&&`∙ ${v}`)),b&&o(xe.Icon,{onClick:F},o(ai,{filled:R}))))};r();i();r();i();var wi=()=>o("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("g",{clipPath:"url(#clip0_266_6488)"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.771446 36.7833C1.69666 23.2765 2.15927 16.5231 9.40756 9.29259C16.6558 2.0621 23.3588 1.6195 36.7648 0.734304C43.467 0.291751 51.2164 0 60 0C68.7836 0 76.533 0.291751 83.2352 0.734303C96.6412 1.6195 103.344 2.0621 110.592 9.29259C117.841 16.5231 118.303 23.2765 119.229 36.7833C119.692 43.5468 120 51.3112 120 60C120 68.1873 119.726 75.5538 119.307 82.0355C118.39 96.2158 117.932 103.306 110.686 110.569C103.441 117.832 96.3017 118.312 82.0226 119.271C75.4768 119.711 68.0938 120 60 120C51.9062 120 44.5232 119.711 37.9774 119.271C23.6983 118.312 16.5587 117.832 9.31357 110.569C2.06844 103.306 1.60989 96.2158 0.692796 82.0355C0.273599 75.5538 0 68.1873 0 60C0 51.3111 0.308148 43.5467 0.771446 36.7833Z",fill:"#252627"}),o("path",{d:"M88.6672 24.3774C99.4949 33.8446 100.854 50.2746 91.6111 61.4026L91.1656 61.9251C81.6984 72.7527 65.2692 74.1125 54.1412 64.8696L53.6179 64.4235C42.9623 55.1065 41.4762 39.0467 50.2415 27.9327L50.6734 27.399C60.0633 16.0944 76.8401 14.5421 88.1447 23.9319L88.6672 24.3774ZM82.4416 30.7981C74.9289 24.5579 63.7797 25.5895 57.5396 33.1022C51.2996 40.6148 52.3317 51.7633 59.8443 58.0034C67.3569 64.2433 78.5048 63.2118 84.7449 55.6995C90.985 48.1869 89.954 37.0383 82.4416 30.7981Z",fill:"url(#paint0_linear_266_6488)"}),o("path",{d:"M48.0616 65.0728C49.6654 63.2965 52.3847 63.1014 54.2256 64.6305L54.3874 64.7649C56.2172 66.2848 56.5333 68.9728 55.106 70.8758L37.0889 94.8957C35.0535 97.6093 31.1613 98.0669 28.5519 95.8995C25.9574 93.7445 25.6789 89.863 27.9392 87.3597L48.0616 65.0728Z",fill:"url(#paint1_linear_266_6488)"}),o("path",{d:"M62.5476 35.8062L79.7367 52.9953",stroke:"#424242",strokeWidth:"7.43802",strokeLinecap:"round"}),o("path",{d:"M79.7371 35.8062L62.548 52.9953",stroke:"#424242",strokeWidth:"7.43802",strokeLinecap:"round"})),o("defs",null,o("linearGradient",{id:"paint0_linear_266_6488",x1:"46.5575",y1:"111.978",x2:"47.8749",y2:"-8.18024",gradientUnits:"userSpaceOnUse"},o("stop",{offset:"0.202777",stopColor:"#353535"}),o("stop",{offset:"0.602023",stopColor:"#474747"})),o("linearGradient",{id:"paint1_linear_266_6488",x1:"12.971",y1:"123.56",x2:"-7.56908",y2:"87.3829",gradientUnits:"userSpaceOnUse"},o("stop",{offset:"0.202777",stopColor:"#353535"}),o("stop",{offset:"0.602023",stopColor:"#474747"})),o("clipPath",{id:"clip0_266_6488"},o("rect",{width:"120",height:"120",fill:"white"}))));var qr=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,Vi=()=>{let{search:e}=h();return o(qr,null,o(wi,null),o(E,{font:"subheading-6",color:"icn-txt-sec"},"No results for “",e,"”"))};r();i();var Kr=s.div`
  margin-top: ${({isFiltered:e})=>e?"0":"8px"};
`,Xr=s.div`
  padding: 4px 8px;
  ${L["heading-6"]};
  color: ${c["icn-txt-prim"]};
  background: ${c["bg-prim-w-100"]};
  position: sticky;
  top: 0;
  z-index: 1;
`,Jr=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Qr=s.div``,Ce={Wrapper:Kr,Header:Xr,LocaleSectionsList:Jr,VoiceItemWrapper:Qr};var Pi=()=>{let{allVoices:e,search:n,selectedLocale:t}=h(),l=(0,to.useMemo)(()=>e.filter(d=>{let m=t?d.language.startsWith(t)||d.language===t:!0,g=n?d.language.toLowerCase().includes(n.toLowerCase())||Z(d.language.split("-")[0])?.toLowerCase().includes(n.toLowerCase())||d.displayName.toLowerCase().includes(n.toLowerCase()):!0;return m&&g}),[e,t,n]),a=!!t||!!n,p=(0,to.useMemo)(()=>ie.map(d=>({localeData:d,voices:l.filter(m=>{let g=d.locales.includes(m.language);return a?g:g&&!pe(m)})})),[l,a]);return n&&l.length===0?o(Vi,null):o(Ce.Wrapper,{isFiltered:a},o(Ce.LocaleSectionsList,null,p.map(({localeData:d,voices:m})=>m.length?o(Ce.VoiceItemWrapper,null,o(Ce.Header,null,Z(d.lang)),m.map(g=>o($e,{key:`regular-${g.displayName}`,voice:g}))):null)))};r();i();r();i();var Fe=C(w());r();i();var Hr=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,en=s.span`
  ${L["subheading-5"]};
  color: ${c["icn-txt-prim"]};
  margin-top: 8px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  svg {
    display: inline;
    margin-left: 2px;
    vertical-align: -3px;
  }
`,Li=({voice:e})=>o(Hr,null,o(en,null,o(ce,{voice:e})));r();i();var on=s.div`
  font-family: system-ui, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px 12px;
  height: 132px;
  box-sizing: border-box;
`,tn=s.div`
  ${L["body-6"]};
  color: ${c["icn-txt-sec"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`,rn=s.div`
  ${L["heading-6"]};
  color: ${c["icn-txt-prim"]};
  padding: 4px 8px;
`,nn=s.div`
  padding: 0;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 4px;
`,sn=s.div``,H={Wrapper:sn,VoicesListGrid:nn,Header:rn,VoiceItem:on,VoiceLabel:tn};var ki=({voice:e})=>{let n=(0,Fe.useMemo)(()=>we(),[]),{playPreview:t,stopPreview:l,isPlaying:a}=De(e,n),p=Ae(e),{isSelected:d}=Y(e),{featuredVoices:m}=h(),g=(0,Fe.useMemo)(()=>{let v=m.some(({slug:k})=>e.slug===k);return e.labels?.includes("label:founder")?"Founder":e.labels?.includes("label:partner")?"Official Voice":v?"Narrator":p},[e,m,p]),{handleFreeUserVoiceClick:S}=se(e),x=async()=>{if(!await S())return;G.setSelectedVoice(e,!0),W.getPlayingState()!=="playing"&&(a?l():t())},y=(0,Fe.useMemo)(()=>a?c["bg-prim-cta"]:d?c["bg-blue"]:c["bg-sec-0-80"],[d,a]);return o(H.VoiceItem,null,o(le,{voice:e,onClick:x,isPlaying:a,size:"large",background:y}),o(Li,{voice:e}),o(H.VoiceLabel,null,g))};var Ii=()=>{let{featuredVoices:e}=h(),n=e.slice(0,6);return o(H.Wrapper,null,o(H.Header,null,"Featured"),o(H.VoicesListGrid,null,n.map(t=>o(ki,{key:`featured-${t.name}`,voice:t}))))};r();i();var Di=C(w());r();i();var ln=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 12px;
  cursor: pointer;
  flex-shrink: 0;

  background: ${c["sf-sec-0-90"]};

  &:hover {
    background: ${c["sf-sec-hov-0-90"]};
  }

  &:active {
    background: ${c["sf-sec-pres-0-90"]};
  }

  ${({isSelected:e})=>e?`background: ${c["sf-act-blue"]} !important`:""}
`,cn=s.div``,an=s.div`
  text-align: right;
  flex-grow: 1;
  width: 16px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`,Ri=({voice:e})=>{let{isSelected:n}=Y(e),{handleFreeUserVoiceClick:t}=se(e),l=async()=>{await t()&&G.setSelectedVoice(e,!0)},a=e.language.split("-")[0].toUpperCase();return o(ln,{isSelected:n,onClick:l},o(le,{voice:e,size:"small",showIcons:!1,background:c["bg-prim-w-100"]}),o(cn,null,o(E,{font:"subheading-6",color:"icn-txt-prim"},o(ce,{voice:e})),o(E,{font:"subheading-7",color:"icn-txt-sec"},a)),o(an,null,n&&o(Te,{regular:!0})))};r();i();var B=C(w());r();i();var dn=s.div`
  width: 100%;
`,pn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 4px 4px 8px;
`,mn=s.div`
  margin-top: 4px;
  width: 100%;
  overflow: auto;
  display: flex;
  gap: 8px;
  padding: 0 8px 12px 8px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`,un=s.div`
  display: flex;
  gap: 8px;
`,io=s.div`
  color: ${c["icn-txt-prim"]};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }

  ${({disabled:e})=>e?"opacity: 0.2 !important; pointer-events: none;":""}
`,fn=s(io)`
  transform: rotate(180deg);
`,gn=s(io)``,K={Wrapper:dn,Header:pn,VoicesWrapper:mn,Arrows:un,Arrow:io,ArrowLeftButton:fn,ArrowRightButton:gn};var Ei=({scrollRef:e})=>{let[n,t]=(0,B.useState)(!1),[l,a]=(0,B.useState)(!1),p=ot(e,10),d=(0,B.useCallback)((S=0)=>{let x=e.current;if(!x)return;let y=x.scrollLeft+S;a(!(y>0)),t(!(y+x.offsetWidth<x.scrollWidth))},[]);(0,B.useEffect)(()=>{if(!e.current)return;let S=()=>d();return e.current.addEventListener("scroll",S),()=>e.current?.removeEventListener("scroll",S)},[]),(0,B.useEffect)(()=>{d()},[p,d]);let m=(0,B.useCallback)(S=>{if(!e.current)return;let x=150*S;e.current.scrollBy({left:x,behavior:"smooth"}),d(x)},[d]),g=!(l&&n);return o(K.Header,null,o(E,{font:"heading-6"},"Recents"),g&&o(K.Arrows,null,o(K.ArrowLeftButton,{disabled:l,onClick:()=>m(-1)},o(ue,null)),o(K.ArrowRightButton,{disabled:n,onClick:()=>m(1)},o(ue,null))))};var Ai=()=>{let e=(0,Di.useRef)(null),{recentVoices:n}=h(),t=Ee(n);return o(K.Wrapper,null,o(Ei,{scrollRef:e}),o(K.VoicesWrapper,{ref:e},t.map(l=>o(Ri,{voice:l,key:`recent-${l.name}`}))))};r();i();var hn=s.div`
  margin-top: 8px;
`,Sn=s.div`
  padding: 4px 8px;
  ${L["heading-6"]};
  color: ${c["icn-txt-prim"]};
  background: ${c["bg-prim-w-100"]};
  position: sticky;
  top: 0;
  z-index: 1;
`,xn=s.div``,ro=({voices:e,heading:n})=>o(hn,null,o(Sn,null,n),o(xn,null,e.map(t=>o($e,{key:`${n}-${t.displayName}`,voice:t}))));r();i();var ee=C(w());r();i();var We=C(w());function Ti(){let{allVoices:e,clonedVoices:n}=h(),t=(0,We.useRef)(!1);(0,We.useEffect)(()=>{let l=Go.subscribe(({history:a})=>{if(e&&t.current){let p=a.map(d=>d.name.startsWith("PVL:")&&n.some(m=>d.name===m.name)?d:e.find(m=>wo(d,m))).filter(d=>!!d);h.setState({recentVoices:p.slice(0,6).map(d=>({...d,id:`${d.displayName}-${d.language}`}))})}});return jo().then(()=>{t.current=!0}),l},[e,n])}var Mi=({audioPlayer:e,showOnRight:n})=>{let{favoriteVoices:t,voice:l,voiceState:a}=O(),{allVoices:p}=h(),d=a?.isResolved??!1,m=a?.hasAccessToPremiumVoices??!1;Ti(),(0,ee.useEffect)(()=>{(async()=>{let[S,x,y]=await Promise.all([bo(),vo(),Co({forceRefetch:!0})]),v=(V,F)=>V?.categories?.flatMap(N=>N.voices.filter(({avatarImage:b})=>!!b).map(b=>({...b,id:he(b),premium:F})))??[],k=S.tabs.find(V=>V.displayName==="All"),I=S.tabs.find(V=>V.displayName==="Recommended"),D=v(k,!0),R=x.map(V=>({...V,free:!0,id:he(V)})),$=y.map(V=>({...V,personal:!0,id:he(V)}));h.setState({allVoices:[...D,...R,...$],featuredVoices:v(I,!0),freeVoices:R,clonedVoices:$,premiumVoices:D})})()},[]),(0,ee.useEffect)(()=>{let g=zo.on("updated",({personalVoiceList:S})=>{h.setState({clonedVoices:S.map(x=>({...x,category:"personal",id:`${x.displayName}-${x.language}`}))})});return()=>g()}),(0,ee.useEffect)(()=>{!l||!d||h.setState({selectedVoice:{...l,id:he(l)}})},[l,d]),(0,ee.useEffect)(()=>{let g=t?.map(S=>p.find(x=>He(x)===S)).filter(Boolean)||[];h.setState({favoriteVoices:g})},[p,t]),(0,ee.useEffect)(()=>{h.setState({audioPlayer:e,showOnRight:n})},[e,n]),(0,ee.useEffect)(()=>{h.setState({hasAccessToPremiumVoices:m})},[m])};r();i();var Cn=s.div`
  padding: 0;
  width: 400px;
  height: ${({height:e})=>e}px;
  overflow: hidden auto;
  ${Pe};
`,bn=s.div`
  overflow: hidden;
  border-radius: 0 0 12px 0;
`,yn=s.div`
  width: 100%;
  height: 100%;
`,_e={VoicesSelectorWrapper:Cn,ScrollableListWrapper:yn,Wrapper:bn};var no=450,$i=24,Fi=({audioPlayer:e,showOnRight:n})=>{Mi({audioPlayer:e,showOnRight:n});let t=(0,ae.useRef)(null),{selectedLocale:l,search:a}=h(),{favoriteVoices:p,recentVoices:d,clonedVoices:m}=h(),{height:g}=Eo(),S=l||a,[x,y]=(0,ae.useState)(no),v=t.current?.getBoundingClientRect().top||0,k=Ee(p);return(0,ae.useEffect)(()=>{!t.current||!v||(v+no+$i>g?y(g-v-$i):y(no))},[g,v]),o(_e.Wrapper,{"data-testid":U.VOICE_AND_SPEED_PANEL},o(_e.VoicesSelectorWrapper,{ref:t,height:x},o(_e.ScrollableListWrapper,null,!S&&o(u,null,d.length>0&&o(Ai,null),o(Ii,null),k.length>0&&o(ro,{heading:"Favorites",voices:k}),m.length>0&&o(ro,{heading:"Cloned",voices:m})),o(Pi,null))))};var _i={route:"/",defaultRoute:"/",collapseState:"collapsed",allowCollapse:!0,isPlayerMinimized:!1},de=new Wi.Store({..._i});function x2(){de.set(()=>({..._i}))}function Le(e){de.set(()=>({route:e}))}var Bi={"/help":{titleContent:"Get Help",render:st},"/featureprompt/skipsentences":{isPopupDesign:!0,render:ze},"/speed":{titleContent:"",render:Gt},"/unsupported":{titleContent:"Unsupported Website",render:Yt},"/voices":{titleContent:o(oi,null),render:Fi}};function C2(e){return Bi[e]?.render}function b2(e){return Bi[e]??{}}function qt(e){de.get().allowCollapseModified||de.set(()=>({allowCollapse:e,collapseState:"expanded"}))}function Kt(e){de.get().allowCollapseModified||de.set(()=>({hidePlayerPill:e}))}export{h as a,G as b,de as c,x2 as d,Le as e,C2 as f,b2 as g};
//# sourceMappingURL=chunk-MMYKA6XZ.js.map
