(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as C,b as $e,c as O,d as H,e as Ne,f as ee,g as z,h as $,i as _e,j as Ue,k as Be,l as de,m as Me,n as Oe,o as Ve,p as Fe,q as Ge,r as We,s as Ye,t as ze}from"./chunk-EWVOKJA2.js";import{a as Ke,b as qe,e as Je,f as Xe,g as Qe}from"./chunk-PEN7TN3N.js";import"./chunk-S3AZHVK7.js";import"./chunk-HDEJOTQX.js";import"./chunk-VBM62247.js";import"./chunk-SJAKNTE2.js";import"./chunk-VDM2FHV6.js";import{a as te,b as je}from"./chunk-6TIQUZ7N.js";import{E as P,Qc as ce,Ud as De,Uf as Z,ad as Ae,b as Q,hd as I,if as Re,ma as ae,mb as ve,u as ye}from"./chunk-324T2OUF.js";import"./chunk-JJ7NA4NT.js";import{$ as ke,D as we,I as Ie,J as Pe,P as Ce,X as Le,Y as Te,Z as Ee,a as xe,e as Se,i as t,n as o,q as Y,r as le,y as be}from"./chunk-KJ3NFIHV.js";import{g as se}from"./chunk-H3LCZSHS.js";import{I as G,K as W,M as he}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{d as re,f as y,g as u,i as e,j as v,k as fe,m as ut,n as g}from"./chunk-CAO5DZGK.js";g();u();ut();g();u();function Ze(){let i=ae.on("update",n=>{de({voice:n.voice??null,playbackSpeed:n.playbackSpeed})}),r=ae.on("speedUpdate",({playbackSpeed:n})=>{de({playbackSpeed:n})});return()=>{i(),r()}}g();u();var E=re(se());g();u();var f=re(se());var ie=ye("ContentSettingsAdapter"),et=({children:i})=>{let r=C(p=>p.navigate),n=C(p=>p.goBack),d=C(p=>p.history.length)>1,[s,k]=(0,f.useState)(!1),[S,x]=(0,f.useState)(!0),[b,A]=(0,f.useState)(!1),[w,N]=(0,f.useState)(null),[l,L]=(0,f.useState)("auto"),[T,V]=(0,f.useState)("default"),[K,q]=(0,f.useState)(null),[J,me]=(0,f.useState)(null),[c,D]=(0,f.useState)(null);(0,f.useEffect)(()=>{let p=new AbortController,R=window.location.href;me(R);try{let M=new URL(R).hostname;q(M);let ne=document.querySelector('link[rel="icon"]')??document.querySelector('link[rel="shortcut icon"]');D(ne?.href??`https://${M}/favicon.ico`)}catch{q(null)}return Promise.all([P("/auth/get-user"),P("/auth/get-cached-subscription"),P("/theme/get-preference"),P("/user-settings/get")]).then(([M,ne,pt,mt])=>{if(p.signal.aborted)return;let U=M?.user,ge=!!U&&!U?.isAnonymous&&!!U?.email;k(ge),A(ne?.subscription?.isPremium??!1),ge&&U&&N({displayName:U.displayName??null,email:U.email??null,photoURL:U.photoURL??null}),L(pt?.preference??"auto"),V(mt?.highlightColorKey??"default")}).catch(M=>{p.signal.aborted||ie.error("Failed to load settings data",M)}).finally(()=>{p.signal.aborted||x(!1)}),()=>{p.abort()}},[]);let _=(0,f.useCallback)(()=>{he("hide-side-player-settings"),Re("sidepanel-help").catch(p=>{ie.error("Failed to trigger screenshot mode",p)})},[]),B=(0,f.useCallback)(p=>{window.open(p,"_blank")},[]),F=(0,f.useCallback)(()=>{r("/settings/upgrade")},[r]),X=(0,f.useCallback)(p=>{if(L(p),P("/theme/set-preference",{preference:p}).catch(R=>{ie.error("Failed to persist theme preference",R)}),p==="light")Z("light",T);else if(p==="dark")Z("dark",T);else{let R=window.matchMedia("(prefers-color-scheme: dark)").matches;Z(R?"dark":"light",T)}},[T]),ue=(0,f.useCallback)(p=>{V(p),P("/user-settings/set-basic-settings-value",{key:"highlightColorKey",value:p}).catch(R=>{ie.error("Failed to persist highlight color",R)})},[]),dt=(0,f.useMemo)(()=>({navigate:r,goBack:n,canGoBack:d,domain:K,tabUrl:J,favIconUrl:c,tabId:void 0,isAuthenticated:s,isLoading:S,isPremium:b,user:w,fetch:P,canTriggerScreenshotMode:!0,triggerScreenshotMode:_,openExternalUrl:B,openUpgrade:F,appBaseUrl:"https://app.speechify.com",themePreference:l,applyTheme:X,highlightColorKey:T,setHighlightColor:ue,playbackDuration:null,isPlaybackActive:ce,headerTitleOnly:!0,sectionVariant:"ghost",cardVariant:"outlined"}),[r,n,d,K,J,c,s,S,b,w,_,B,F,l,X,T,ue,ce]);return e($e,{value:dt},i)};g();u();g();u();var gt=[{route:"/settings/listening",label:"Listening",icon:be},{route:"/settings/voice-typing",label:"Voice Typing",icon:Ce},{route:"/settings/accessibility",label:"Accessibility",icon:Ie},{route:"/settings/help",label:"Help",icon:Pe}];function ot({currentRoute:i,onNavigate:r}){let{domain:n,favIconUrl:a,user:d,isPremium:s,openUpgrade:k}=O(),S=()=>{r("/settings/profile")};return e(ft,null,e(ht,null,e(Le,null),e(Te,null)),e(xt,null,e(St,null,"Settings for this website"),e(yt,{isActive:i==="/settings",onClick:()=>r("/settings")},a&&e(vt,{src:a,alt:""}),e(bt,null,n||"Unknown"))),e(wt,null),e(It,null,gt.map(({route:x,label:b,icon:A})=>e(tt,{key:x,isActive:i===x||x==="/settings/accessibility"&&i==="/settings/accessibility-shortcuts",onClick:()=>r(x)},e(it,null,e(A,null)),e(Pt,null,b)))),e(Ct,null),e(Lt,null,e(tt,{isActive:i==="/settings/profile",onClick:S},e(it,{style:{color:o["bg-tert-20-60"]}},d?.photoURL?e(Tt,{src:d.photoURL,alt:""}):e(we,{size:24})),e(Et,null,e(kt,null,d?.displayName||d?.email||"Account"),s&&e(At,null,"Premium"))),!s&&e(Dt,{onClick:k},e(Rt,null,e(Ee,null)),e("span",null,"Upgrade to Premium"))))}var ft=t.div`
  width: 240px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${o["brdr-prim-10-80"]};
  padding: 24px 12px 12px;
  overflow-y: auto;
  background-color: ${o["bg-sec-0-110"]};
`,ht=t.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px 32px;
  color: ${o["logo-speechify-logo-txt"]};
`,xt=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,St=t.div`
  ${Y["subheading-6"]}
  color: ${o["icn-txt-sec"]};
  padding: 0 10px;
`,yt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  ${Y["subheading-6"]}
  color: ${o["icn-txt-prim"]};
  background: ${({isActive:i})=>i?o["sf-prim-w-100"]:"transparent"};
  ${({isActive:i})=>!i&&`&:hover { background: ${o["sf-sec-hov-0-110"]}; }`}
`,vt=t.img`
  width: 16px;
  height: 16px;
  border-radius: 2px;
`,bt=t.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wt=t.div`
  height: 1px;
  background: ${o["brdr-prim-10-80"]};
  margin: 24px 0;
`,It=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,tt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  ${Y["subheading-6"]}
  color: ${o["icn-txt-prim"]};
  background: ${({isActive:i})=>i?o["sf-prim-w-100"]:"transparent"};
  ${({isActive:i})=>!i&&`&:hover { background: ${o["sf-sec-hov-0-110"]}; }`}
`,it=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${o["icn-txt-sec"]};

  svg {
    width: 20px;
    height: 20px;
  }
`,Pt=t.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ct=t.div`
  flex: 1;
`,Lt=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Tt=t.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
`,Et=t.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,kt=t.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,At=t.span`
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.05px;
  color: ${o["icn-txt-white"]};
  background: ${o["bg-prim-cta"]};
  padding: 0 4px;
  border-radius: 4px;
  flex-shrink: 0;
`,Dt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  ${Y["subheading-6"]}
  color: ${o["icn-txt-blue"]};
  &:hover {
    background: ${o["sf-sec-hov-0-110"]};
  }
`,Rt=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${o["icn-txt-blue"]};
`;function nt({currentRoute:i,onNavigate:r,children:n}){return e(v,null,e(ot,{currentRoute:i,onNavigate:r}),e($t,null,n))}var $t=t.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${o["bg-prim-w-100"]};
  padding-top: 24px;
  --settings-scroll-px: 24px;
  --settings-header-height: 24px;

  > * {
    background-color: transparent !important;
  }
`;g();u();g();u();function rt(){return e(ee.SettingsItem,{separatorType:"none"},e(ee.SettingsItemContent,null,e(ee.SettingsItemTitle,null,"Extension Theme")),e(_e,null))}function st(){return e($.ContainerWhite,null,e(H,{title:"Accessibility"}),e($.ScrollableContent,null,e(z,null,e(rt,null)),e(z,null,e(Ge,null)),e(We,{variant:"bordered"})))}g();u();function at(){let{domain:i,favIconUrl:r}=O(),{features:n,isLoading:a}=Ne(),d=e(v,null,"Settings for ",r&&e($.FavIcon,{src:r,alt:""}),i);return e($.ContainerWhite,null,e(H,{title:d}),e($.ScrollableContent,null,a&&n.length===0?e($.LoadingContainer,null,"Loading settings..."):e(z,null,n.map(s=>e(Ue,{key:s.key,feature:s})))))}g();u();var m=re(se());var h={baseOffset:120,topCardScale:1.2,secondCardScale:1.1,lastCardScale:1.1,defaultScale:1,secondCardOffset:-125,lastCardOffset:125,visibilityThreshold:3,animationDuration:500,intervalDuration:4e3},Nt=[{icon:Xe,title:"200+ highest quality voices",description:"Including official Speechify celebrity partners"},{icon:Je,title:"Up to 4.5x listening speed",description:"To help you become a speed reader"},{icon:qe,title:"Advanced AI",description:"Enhance your learning with AI powers"}];function _t(){let i=(0,m.useRef)(()=>{let n=new Date,a=n.getDay(),d=n.getDate()-a+(a===0?-6:1),s=new Date(n.setDate(d));return s.setHours(0,0,0,0),s}),r=(0,m.useRef)(i.current());return(0,m.useCallback)(()=>{let d=(Date.now()-r.current.getTime())/1e3,s=16197/(10080*60);return Math.min(19856,Math.max(3659,Math.round(3659+d*s))).toLocaleString("en-US")},[])}function Ut({item:i,isMiddleCard:r,isTransitioning:n}){let a=(0,m.useRef)(null),d=Ke(),s=i.animation==="premiumvoices"?d:i.animation;return(0,m.useEffect)(()=>{a.current&&(r&&!n?a.current.play():(a.current.pause(),a.current.currentTime=0))},[r,n]),e("div",{style:{position:"relative",width:"220px",height:"100px",borderRadius:"16px",background:"linear-gradient(93deg, #384BE7 2.89%, #101036 252.14%)",overflow:"hidden"}},e("video",{ref:a,src:y.runtime.getURL(`images/paywall/animations/${s}.mp4`),style:{width:"220px",height:"100px"},muted:!0,playsInline:!0,loop:!1,controls:!1}))}function lt(){let{openExternalUrl:i,goBack:r}=O(),n=_t(),[a,d]=(0,m.useState)(2),[s,k]=(0,m.useState)(2),[S,x]=(0,m.useState)(!1),[b,A]=(0,m.useState)(!1),[w,N]=(0,m.useState)(!1),l=(0,m.useRef)(null),L=(0,m.useCallback)(()=>{l.current&&clearInterval(l.current),l.current=setInterval(()=>{k(a),x(!0),d(c=>(c+1)%I.length),setTimeout(()=>x(!1),h.animationDuration)},h.intervalDuration)},[a]);(0,m.useEffect)(()=>(A(!0),()=>A(!1)),[]),(0,m.useEffect)(()=>(L(),()=>{l.current&&clearInterval(l.current)}),[L]);let T=(0,m.useCallback)(c=>c===0?0:c===1?h.secondCardOffset:c===I.length-1?h.lastCardOffset:c<=I.length/2?-(h.baseOffset*2)-(c-2)*h.baseOffset:h.baseOffset*2+(I.length-c-2)*h.baseOffset,[]),V=(0,m.useCallback)(c=>c===0?h.topCardScale:c===1?h.secondCardScale:c===I.length-1?h.lastCardScale:h.defaultScale,[]),K=(0,m.useCallback)(c=>Math.abs(c)<=h.baseOffset*h.visibilityThreshold,[]),q=()=>{N(!0),setTimeout(()=>{N(!1),r()},300)},J=()=>{let c=new URLSearchParams({extensionId:y.runtime.id,source:"side_player_settings_upgrade"});i(`https://speechify.com/onboarding/sso/?${c.toString()}`)};return e("div",{style:{display:"flex",width:"100%",height:"100%",opacity:w?0:b?1:0,transform:w?"none":b?"translateX(0)":"translateX(25%)",transition:w?"opacity 300ms ease-in-out":"transform 300ms ease-in-out, opacity 300ms ease-in-out",visibility:!b&&!w?"hidden":"visible",position:"relative"}},e(Bt,{onClick:q},e(Qe,null)),e(Mt,null,e(Ot,null,e(Vt,null,"Get Your Reading Superpowers"),e(Ft,null,"Join 30+ Million Listeners in Transforming How You Consume Content")),e(Gt,null,Nt.map(({icon:c,title:D,description:_})=>e(Wt,{key:D},e(c,null),e(Yt,null,e(zt,null,D),e(jt,null,_))))),e(Kt,null,e(qt,{onClick:J},"Try for Free"),e(Jt,null,e(De,{alt:"New premium users",src:"paywall/avatars.png",width:52,height:24}),e(Xt,null,n()," joined Premium this week")))),e(Qt,null,I.map((c,D)=>{let _=(D-s+I.length)%I.length,B=(D-a+I.length)%I.length,F=T(S?_:B),X=V(S?_:B);return e("div",{key:D,style:{position:"absolute",width:"220px",height:"100px",transition:"transform 0.5s ease-in-out",transform:`translateY(${F}px) scale(${X})`,visibility:K(F)?"visible":"hidden"}},e(Ut,{item:c,isMiddleCard:B===0,isTransitioning:S}))})))}var Bt=t.div`
  ${le};
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  cursor: pointer;
  color: ${o["icn-txt-sec"]};
  z-index: 1;

  &:hover {
    color: ${o["icn-txt-prim"]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,Mt=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 20px;
  padding: 48px 32px 36px;
  overflow-y: auto;
  min-width: 0;
`,Ot=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 340px;
  width: 100%;
`,Vt=t.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: ${o["icn-txt-prim"]};
`,Ft=t.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${o["icn-txt-sec"]};
`,Gt=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 340px;
  width: 100%;
`,Wt=t.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  svg {
    margin-top: 4px;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    color: ${o["icn-txt-prim"]};
  }
`,Yt=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,zt=t.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.14px;
  color: ${o["icn-txt-prim"]};
`,jt=t.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
  color: ${o["icn-txt-sec"]};
`,Kt=t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 340px;
  width: 100%;
`,qt=t.button`
  ${le};
  align-self: stretch;
  background: ${o["bg-prim-cta"]};
  border-radius: 12px;
  color: ${o["icn-txt-white"]};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.14px;
  padding: 10px 24px;
  text-align: center;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
`,Jt=t.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 8px;
  justify-content: center;
`,Xt=t.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.12px;
  color: ${o["icn-txt-sec"]};
`,Qt=t.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${o["bg-sec-0-100"]};
  overflow: hidden;
  border-radius: 0 16px 16px 0;
`;function ct({root:i}){let r=C(l=>l.isVisible),n=C(l=>l.currentRoute),a=C(l=>l.reset),d=C(l=>l.navigate),s=C(l=>l.setVisible),k=(0,E.useMemo)(()=>xe({key:"sp-settings",container:i}),[i]),S=(0,E.useCallback)(async(l,L)=>{a(),L?.route&&L.route!=="/settings"&&d(L.route),s(!0)},[a,d,s]),x=(0,E.useCallback)(async()=>{s(!1)},[s]);(0,E.useEffect)(()=>{let l="side-player-settings";return G("show-side-player-settings",S,l),G("hide-side-player-settings",x,l),()=>{W("show-side-player-settings",S),W("hide-side-player-settings",x)}},[S,x]),Ae(()=>{s(!1)},r);let b=(0,E.useCallback)(()=>s(!1),[s]),A=(0,E.useCallback)(l=>{a(),d(l)},[a,d]);if(!r)return null;let w=n==="/settings/upgrade",N=()=>{switch(n){case"/settings/listening":return e(Ve,null);case"/settings/voice-typing":return e(Fe,null);case"/settings/accessibility":case"/settings/accessibility-shortcuts":return e(st,null);case"/settings/help":return e(Me,null);case"/settings/profile":return e(Oe,null);case"/settings/speed":return e(ze,null);case"/settings/voice":return e(Ye,null);case"/settings/upgrade":return e(lt,null);default:return e(at,null)}};return e(Se,{value:k},e(et,null,e(Zt,null,e(Ht,{onClick:b}),e(ei,{isExpanded:w},e(ti,null,e(ke,{onClick:b,"aria-label":"Close settings"})),w?N():e(nt,{currentRoute:n,onNavigate:A},N())))))}var Zt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ht=t.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`,ei=t.div`
  position: relative;
  width: ${({isExpanded:i})=>i?"840px":"720px"};
  max-width: calc(100vw - 32px);
  height: 580px;
  max-height: 90vh;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.32);
  font-family: var(--speechify-font-family, system-ui, -apple-system, sans-serif);
  background-color: ${o["bg-prim-w-110"]};
  color: ${o["icn-txt-prim"]};
  display: flex;
  transition: width 300ms ease-in-out;
`,ti=t.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;var j=null,oe=null;function pe(){j&&(W("close-side-player-settings",j),j=null),oe&&(oe(),oe=null),Q.destroyHost(te)}var ii=async()=>{await ve(),await Be(P),pe(),oe=Ze(),Q.acquireShadow(te,{hostStyles:"position: fixed; top: 0; left: 0; width: 0; height: 0; z-index: 2147483647;"});let i=document.createElement("div");return fe(e(ct,{root:i}),i),Q.mountRoot(te,je,i),j=async()=>{pe()},G("close-side-player-settings",j,"side-player-settings"),pe},Xo=ii;export{Xo as default};
//# sourceMappingURL=init-W4P56GUZ.js.map
