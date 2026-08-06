(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as Wo,b as mi,c as Se,d as nt,e as qt,f as zo}from"./chunk-S3AZHVK7.js";import{a as kt,b as Zt}from"./chunk-VBM62247.js";import{b as Je,c as Xe}from"./chunk-VDM2FHV6.js";import{$ as gt,B as ho,Sf as Uo,Tf as jt,W as mt,_ as Gt,aa as bo,ba as ft,ca as xo,ea as vo,fa as je,ga as Co,ha as Io,ia as St,ja as Ze,ka as ht,la as qe,u as ut}from"./chunk-324T2OUF.js";import{a as pt,h as yo}from"./chunk-JJ7NA4NT.js";import{$ as Mo,A as bt,B as xt,C as vt,D as Ct,E as ke,F as To,G as Vo,H as Po,K as Eo,L as Lo,M as Ro,N as Ao,O as It,Q as No,R as Do,S as Fo,T as $o,U as Oo,V as Bo,W as Yt,aa as _o,g as So,i as c,n as l,q as N,u as wo,v as ko,w as Be,x as yt,z as we}from"./chunk-KJ3NFIHV.js";import{g as $}from"./chunk-H3LCZSHS.js";import{b as wt}from"./chunk-Y6YYRFL5.js";import{b as fo}from"./chunk-NUSU6NTI.js";import{d as D,f as m,g as i,i as t,j as u,n as r}from"./chunk-CAO5DZGK.js";r();i();var Ko=ut("SharedSettingsStore","green"),it=null,he=pt()((e,n)=>({voice:null,playbackSpeed:null,voiceTypingSoundEffects:!0,isReady:!1,updateVoice:o=>e({voice:o}),updateSpeed:o=>e({playbackSpeed:o}),updateVoiceTypingSoundEffects:async o=>{let s=n().voiceTypingSoundEffects;e({voiceTypingSoundEffects:o});try{it&&await it("/user-settings/set-voice-typing-sound-effects",{soundEffectsEnabled:o})}catch(a){Ko.error("Failed to save voiceTypingSoundEffects:",a),e({voiceTypingSoundEffects:s})}},initialize:async()=>{if(!(n().isReady||!it))try{let o=await it("/user-settings/get");e({voice:o.voice||null,playbackSpeed:o.playbackSpeed||null,voiceTypingSoundEffects:o["extension.voiceTyping.soundEffects"]??!0,isReady:!0})}catch(o){Ko.error("Failed to initialize shared settings store:",o)}}}));function ma(e){return it=e,he.getState().initialize()}function ga(e){let n=he.getState(),o={};e.playbackSpeed!=null&&e.playbackSpeed!==n.playbackSpeed&&(o.playbackSpeed=e.playbackSpeed),e.voice!=null&&e.voice!==n.voice&&(o.voice=e.voice),Object.keys(o).length>0&&he.setState(o)}var Jt=()=>he(e=>e.voice),Xt=()=>he(e=>e.playbackSpeed);r();i();var Tt="/settings",ba=pt()((e,n)=>({currentRoute:Tt,history:[Tt],isVisible:!1,navigate:o=>{let s=n();if(o==="../"||o===".."){s.goBack();return}e({currentRoute:o,history:[...s.history,o]})},goBack:()=>{let o=n();if(o.history.length<=1)return;let s=o.history.slice(0,-1);e({currentRoute:s[s.length-1],history:s})},reset:()=>e({currentRoute:Tt,history:[Tt]}),setVisible:o=>e({isVisible:o})}));r();i();r();i();var Vt=D($()),Go=(0,Vt.createContext)(null);function Ia({value:e,children:n}){return t(Go.Provider,{value:e},n)}function P(){let e=(0,Vt.useContext)(Go);if(!e)throw new Error("useSettingsAdapter must be used within a SettingsAdapterProvider");return e}r();i();var Yo=D($());function Qe(){let{fetch:e}=P();return{handleEditShortcuts:(0,Yo.useCallback)(async()=>{try{await e("/keyboard-shortcuts/open-shortcuts-url")}catch(o){console.error("Failed to open shortcuts page:",o)}},[e])}}r();i();var Pt=D($());var Me=()=>{let{fetch:e,tabUrl:n}=P(),[o,s]=(0,Pt.useState)({});return(0,Pt.useEffect)(()=>{let a=null,d=async()=>{try{let f=await e("/keyboard-shortcuts/force-get-command-list");s(f)}catch(f){console.error("Failed to fetch shortcuts:",f)}};return d(),(n?.includes("chrome://extensions/shortcuts")??!1)&&(a=setInterval(d,1e3)),()=>{a&&clearInterval(a)}},[e,n]),{shortcuts:o}};r();i();var He=c.span`
  ${({font:e})=>N[e||"body-7"]}
  color: ${l["icn-txt-blue"]};
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;r();i();r();i();var _e=D($());r();i();var fi=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${l["icn-txt-sec"]};

  &:hover {
    color: ${l["icn-txt-prim"]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Si=c.div`
  position: absolute;
  left: 0;
  top: 52px;
  width: 280px;
  background: ${l["bg-prim-inv-b-w"]};
  border-radius: 10px;
  overflow: hidden;
  z-index: 100;
  opacity: ${({visible:e})=>e?1:0};
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: opacity 0.15s ease, visibility 0.15s ease;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
`,hi=c.img`
  width: 100%;
  height: auto;
  display: block;
`,yi=c.video`
  width: 100%;
  height: auto;
  display: block;
`,rt={TooltipTrigger:fi,TooltipContainer:Si,TooltipImage:hi,TooltipVideo:yi};function Ue({imageSrc:e,videoSrc:n,alt:o="Feature demonstration",delay:s=600}){let[a,d]=(0,_e.useState)(!1),[y,f]=(0,_e.useState)(Date.now()),p=(0,_e.useRef)(),x=()=>{p.current=setTimeout(()=>{f(Date.now()),d(!0)},s)},h=()=>{p.current&&clearTimeout(p.current),d(!1)};(0,_e.useEffect)(()=>()=>{p.current&&clearTimeout(p.current)},[]);let S=b=>b.startsWith("http")?b:m.runtime.getURL(`/images/${b}?${y}`),g=()=>n?t(rt.TooltipVideo,{src:S(n),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-label":o}):e?t(rt.TooltipImage,{src:S(e),alt:o}):null;return t(u,null,t(rt.TooltipTrigger,{type:"button",onMouseEnter:x,onMouseLeave:h,"aria-label":"More information"},t(ko,null)),t(rt.TooltipContainer,{visible:a},g()))}r();i();r();i();r();i();var bi=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,xi=c.div`
  ${N["heading-6"]}
  color: ${l["icn-txt-prim"]};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,vi=c.div`
  display: flex;
  flex-direction: column;
  ${({variant:e="solid"})=>e==="solid"?`
        background: ${l["bg-prim-w-100"]};
        border-radius: 12px;
      `:e==="outlined"?`
        background: ${l["bg-prim-w-90"]};
        border-radius: 12px;
        border: 1px solid ${l["brdr-prim-10-80"]};
        --section-item-hover: ${l["sf-prim-hov-w-90"]};
      `:e==="bordered"?`
        border-radius: 12px;
        border: 1px solid ${l["brdr-prim-10-80"]};
      `:`
      --section-item-px: 0px;
    `}
`,Ci=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px var(--section-item-px, 12px);
  opacity: ${({disabled:e})=>e?.3:1};
  pointer-events: ${({disabled:e})=>e?"none":"auto"};
  position: relative;
  cursor: ${({isLink:e})=>e?"pointer":"default"};

  /* Separator as ::after pseudo-element */
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5px;
    height: 1px;
    background: ${l["brdr-prim-10-80"]};
    left: ${({separatorType:e})=>e==="none"?"0":e==="icon"?"40px":"12px"};
    right: 0;
    display: ${({separatorType:e})=>e==="none"?"none":"block"};
    transition: opacity 0.2s ease;
  }

  /* Hide separator for last child */
  &:last-child::after {
    display: none;
  }

  /* Hover effects only for link items */
  ${({isLink:e})=>e&&`
    &:hover {
      background: var(--section-item-hover, ${l["sf-prim-hov-w-100"]});
    }

    /* Border radius for first item */
    &:first-child:hover {
      border-radius: 12px 12px 0 0;
    }

    /* Border radius for last item */
    &:last-child:hover {
      border-radius: 0 0 12px 12px;
    }

    /* Border radius for only item (both first and last) */
    &:first-child:last-child:hover {
      border-radius: 12px;
    }

    /* Hide current separator when hovered */
    &:hover::after {
      opacity: 0;
    }

    /* Hide previous sibling's separator when current is hovered */
    &:has(+ &:hover)::after {
      opacity: 0;
    }
  `}
`,Ii=c.div`
  height: 1px;
  background: ${l["brdr-prim-10-80"]};
  margin: 0 12px;
`,wi=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,ki=c.div`
  ${N["subheading-6"]}
  color: ${l["icn-txt-prim"]};
  display: flex;
  align-items: center;
  gap: 6px;
`,Ti=c.div`
  ${N["body-7"]}
  color: ${l["icn-txt-sec"]};
`,Vi=c.span`
  display: inline-flex;
  color: ${l["icn-txt-sec"]};
`,T={SectionContainer:bi,SectionTitle:xi,SectionContent:vi,SettingsItem:Ci,SettingsItemSeparator:Ii,SettingsItemContent:wi,SettingsItemTitle:ki,SettingsItemDescription:Ti,InfoIconWrapper:Vi};function Z({title:e,children:n,variant:o}){let{sectionVariant:s}=P(),a=o??s??"solid";return t(T.SectionContainer,null,e&&t(T.SectionTitle,null,e),t(T.SectionContent,{role:"group",variant:a},n))}r();i();r();i();var We=c.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  margin: -2px 0;
`,Re=c.div`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  background: ${l["bg-sec-0-80"]};
  border: 1px solid ${l["brdr-sec-20-60"]};
  border-radius: 6px;
  ${N["body-7"]}
  color: ${l["icn-txt-prim"]};
  text-align: center;
  display: flex;
  justify-content: center;
  line-height: 24px;
`,ze=c(Re)`
  width: auto;
  padding: 0 8px;
  white-space: nowrap;
`;var jo=c.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`,Pi=c(jo)`
  background-color: ${l["bg-sec-0-110"]};
`,Ei=c(jo)`
  background-color: ${l["bg-prim-w-100"]};
`,Li=c.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px var(--settings-scroll-px, 16px) 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;
`,Ri=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  ${N["body-6"]}
  color: ${l["icn-txt-sec"]};
`,Ai=c.img`
  width: 18px;
  height: 18px;
  border-radius: 2px;
`,ie={Container:Pi,ContainerWhite:Ei,ScrollableContent:Li,LoadingContainer:Ri,FavIcon:Ai};r();i();r();i();r();i();function Zo(e=!0){let{user:n}=P();return e?n?.photoURL??null:null}r();i();var Ni=c.div`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  padding: 0 var(--settings-scroll-px, 16px);
  height: var(--settings-header-height, 48px);
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
`,Di=c.div`
  display: flex;
  align-items: center;
  padding: 0 var(--settings-scroll-px, 16px);
  height: var(--settings-header-height, 48px);
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
`,Fi=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,$i=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Oi=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Bi=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${l["icn-txt-prim"]};
  padding: 0;
`,Mi=c.h1`
  ${N["heading-5"]}
  color: ${l["icn-txt-prim"]};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,_i=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background: ${l["bg-sec-0-80"]};
  }
`,Ui=c.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l["bg-tert-20-60"]};
  overflow: hidden;
`,Wi=c.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`,pe={HeaderContainer:Ni,TitleOnlyContainer:Di,LeftSlot:Fi,CenterSlot:$i,RightSlot:Oi,ExpandedSlot:Wi,BackButton:Bi,Title:Mi,ProfileButton:_i,ProfilePlaceholder:Ui};function oe({title:e,onBack:n,showProfile:o=!0,showBack:s=!0,onClose:a,rightContent:d,isExpanded:y,expandedContent:f}){let p=Zo(o),{navigate:x,onCloseSettings:h,headerTitleOnly:S}=P(),g=a??h,b=s&&!g&&!S,C=()=>{x("/settings/profile")};if(S)return t(pe.TitleOnlyContainer,null,t(pe.Title,null,e));if(y&&f)return t(pe.HeaderContainer,null,t(pe.ExpandedSlot,null,f));let I=d!==void 0,k=g?t(Mo,{onClick:g,"aria-label":"Close settings"}):null,L=()=>g&&I?k:b?t(pe.BackButton,{onClick:n,"aria-label":"Go back"},t(_o,null)):null,O=()=>S?null:d!==void 0?d:g?k:o&&t(pe.ProfileButton,{"aria-label":"Profile",onClick:C},p?t("img",{src:p,alt:"Profile"}):t(pe.ProfilePlaceholder,null,t(Ct,{size:24})));return t(pe.HeaderContainer,null,t(pe.LeftSlot,null,L()),t(pe.CenterSlot,null,t(pe.Title,null,e)),t(pe.RightSlot,null,O()))}r();i();var qo="https://help.speechify.com/en/collections/2750947-speechify-for-chrome",Jo="open-screenshot-mode",Xo="videos/screenshot.mp4";r();i();var Te=D($());var zi=e=>{try{let{hostname:n,pathname:o}=new URL(e);if(n==="docs.google.com"&&o){let s=o.split("/")[1];if(s)return`${n}/${s}`}return n.replace(/^www\./,"")}catch{return""}},Qo=()=>{let[e,n]=(0,Te.useState)(!1),[o,s]=(0,Te.useState)([]),[a,d]=(0,Te.useState)(!0),{fetch:y,tabUrl:f}=P(),p=f?zi(f):"";(0,Te.useEffect)(()=>{(async()=>{d(!0);try{let S=await y("/user-settings/get");s(S.reportedDomains||[])}catch(S){console.error("Failed to fetch reported domains:",S)}finally{d(!1)}})()},[f]),(0,Te.useEffect)(()=>{p&&o.length>0?n(o.includes(p)):n(!1)},[p,o]);let x=(0,Te.useCallback)(async()=>{if(!(!p||e))try{await y("/user-settings/add-reported-domain",{domain:p}),n(!0),s(h=>[...h,p])}catch(h){console.error("Failed to report domain:",h)}},[p,e]);return{isReported:e,reportDomain:x,currentDomain:p,isLoading:a}};r();i();var Ki=["chrome://","chrome-extension://","about:","edge://","brave://","opera://","vivaldi://","file://"],Ho=()=>{let{tabUrl:e}=P();return e?Ki.some(o=>e.toLowerCase().startsWith(o))?{isAvailable:!1,tooltipMessage:"Screenshot mode is not available on this page"}:{isAvailable:!0,tooltipMessage:null}:{isAvailable:!1,tooltipMessage:"No active page"}};r();i();r();i();var Gi=c.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Yi=c.img`
  width: 16px;
  height: 16px;
  border-radius: 2px;
`,ji=c(T.SettingsItem)`
  align-items: center;
  gap: 8px;
`,Zi=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${l["icn-txt-sec"]};
`,qi=c.span`
  ${N["subheading-6"]}
  color: ${l["icn-txt-prim"]};
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
`,en=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l["icn-txt-quat"]};
`,Ji=c(en)`
  color: ${l["icn-txt-prim"]};
  align-self: start;
`,Xi=c(T.SettingsItem)`
  align-items: center;
`,K={SectionTitleWithIcon:Gi,WebsiteIcon:Yi,NavItem:ji,NavItemIcon:Zi,NavItemText:qi,NavItemChevron:en,ExternalLinkIconWrapper:Ji,CenteredSettingsItem:Xi};var Qi=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  background: ${l["sf-prim-cta-electric-w"]};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  ${N["heading-6"]}
  color: ${l["icn-txt-prim-inv"]};
  transition: background-color 0.15s ease, opacity 0.15s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: ${l["sf-prim-cta-hov-electric-w"]};
  }

  &:active:not(:disabled) {
    background: ${l["sf-prim-cta-pres-electric-w"]};
  }

  &:focus-visible {
    outline: 2px solid ${l["brdr-prim-cta"]};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Hi=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`,er=c(K.NavItemText)`
  color: ${l["icn-txt-blue"]};
`,tr=c(K.NavItemIcon)`
  color: ${l["icn-txt-blue"]};
`,Q={NavItem:K.NavItem,NavItemIcon:K.NavItemIcon,NavItemText:K.NavItemText,NavItemChevron:K.NavItemChevron,ExternalLinkIconWrapper:K.ExternalLinkIconWrapper,CenteredSettingsItem:K.CenteredSettingsItem,TryItButton:Qi,TryItButtonIcon:Hi,ReportedNavItemText:er,AccentNavItemIcon:tr,ShortcutKey:Re,ShortcutKeyNotSet:ze,ShortcutKeys:We};var tn=()=>{let{navigate:e,canTriggerScreenshotMode:n,triggerScreenshotMode:o,openExternalUrl:s,cardVariant:a="solid"}=P(),{shortcuts:d}=Me(),{handleEditShortcuts:y}=Qe(),{isReported:f,reportDomain:p,isLoading:x}=Qo(),{isAvailable:h,tooltipMessage:S}=Ho(),g=()=>{e("/settings")},b=()=>{!h||!n||o()},C=async()=>{f||x||await p()},I=()=>{s(qo)},k=d[Jo]?.shortcut;return t(ie.Container,null,t(oe,{title:"Help",showProfile:!1,onBack:g}),t(ie.ScrollableContent,null,t(Z,null,t(Q.CenteredSettingsItem,null,t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Screenshot and Listen",t(Ue,{videoSrc:Xo,alt:"Screenshot feature demo"})),t(T.SettingsItemDescription,null,"Select an area that contains text and listen to it.")),t(Q.TryItButton,{onClick:b,disabled:!h,title:S||void 0},t(Q.TryItButtonIcon,null,t(Eo,null)),"Try it")),t(Q.CenteredSettingsItem,{separatorType:"none"},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Keyboard Shortcut"),t(T.SettingsItemDescription,null,"Faster than ever. ",t(He,{onClick:y},"Edit here →"))),t(Q.ShortcutKeys,null,k?k.split("+").map((L,O)=>t(Q.ShortcutKey,{key:O},L)):t(Q.ShortcutKeyNotSet,null,"Not Set")))),t(Z,{title:"Still can't listen?",variant:a},t(Q.NavItem,{isLink:!f,separatorType:"icon",onClick:f?void 0:C,disabled:x},f?t(Q.AccentNavItemIcon,null,t(Ao,null)):t(Q.NavItemIcon,null,t(Lo,null)),f?t(Q.ReportedNavItemText,null,"Site Reported"):t(Q.NavItemText,null,"Report Site")),t(Q.NavItem,{isLink:!0,separatorType:"none",onClick:I},t(Q.NavItemIcon,null,t(Ro,null)),t(Q.NavItemText,null,"Open Help Center",t(Q.ExternalLinkIconWrapper,null,t(ke,null)))))))};r();i();r();i();r();i();var or=c(K.NavItem)`
  gap: 12px;
`,nr=c.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${l["bg-tert-20-60"]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: ${l["bg-sec-0-80"]};
  }
`,ir=c.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l["bg-tert-20-60"]};
  overflow: hidden;
`,rr=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,sr=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ar=c.span`
  ${N["heading-5"]}
  color: ${l["icn-txt-prim"]};
`,lr=c.span`
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.05px;

  color: ${l["icn-txt-white"]};
  background: ${l["bg-prim-cta"]};
  padding: 0 4px;
  border-radius: 4px;
`,cr=c.span`
  ${N["body-6"]}
  color: ${l["icn-txt-sec"]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,X={ProfileCard:or,ProfileAvatar:nr,ProfileAvatarPlaceholder:ir,ProfileInfo:rr,ProfileNameRow:sr,ProfileName:ar,PremiumBadge:lr,ProfileEmail:cr,NavItem:K.NavItem,NavItemIcon:K.NavItemIcon,NavItemText:K.NavItemText,ExternalLinkIconWrapper:K.ExternalLinkIconWrapper};var dr="https://speechify.com/privacy/",pr="https://speechify.com/terms/";function on({hideBackButton:e}={}){let{navigate:n,isPremium:o,user:s,appBaseUrl:a,openExternalUrl:d,cardVariant:y="solid"}=P(),f=s?.displayName,p=s?.email,x=s?.photoURL,h=()=>{n("../")},S=()=>{let C=`${a}/settings`;d(C)},g=()=>{d(dr)},b=()=>{d(pr)};return t(ie.Container,null,t(oe,{title:"Profile",onBack:h,showProfile:!1,showBack:!e}),t(ie.ScrollableContent,null,t(Z,{variant:y},t(X.ProfileCard,{isLink:!0,onClick:S},x?t(X.ProfileAvatar,null,t("img",{src:x,alt:"Profile"})):t(X.ProfileAvatarPlaceholder,null,t(Ct,{size:56})),t(X.ProfileInfo,null,t(X.ProfileNameRow,null,t(X.ProfileName,null,f||"User"),o&&t(X.PremiumBadge,null,"Premium")),p&&t(X.ProfileEmail,null,p)),t(X.ExternalLinkIconWrapper,null,t(ke,null)))),t(Z,{variant:y},t(X.NavItem,{isLink:!0,separatorType:"icon",onClick:g},t(X.NavItemIcon,null,t(To,null)),t(X.NavItemText,null,"Privacy Policy",t(X.ExternalLinkIconWrapper,null,t(ke,null)))),t(X.NavItem,{isLink:!0,separatorType:"none",onClick:b},t(X.NavItemIcon,null,t(Vo,null)),t(X.NavItemText,null,"Terms & Conditions",t(X.ExternalLinkIconWrapper,null,t(ke,null)))))))}r();i();r();i();r();i();r();i();r();i();var ur=c.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  flex-shrink: 0;
`,mr=c.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${l["sf-prim-cta"]};
  }

  &:checked + span:before {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,gr=c.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${l["bg-tert-20-60"]};
  transition: 0.2s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`,Et={ToggleContainer:ur,ToggleInput:mr,ToggleSlider:gr};function ye({checked:e,onChange:n,disabled:o=!1,id:s,style:a}){return t(Et.ToggleContainer,{style:a},t(Et.ToggleInput,{type:"checkbox",id:s,checked:e,disabled:o,onChange:d=>n(d.target.checked)}),t(Et.ToggleSlider,null))}r();i();var H=D($());var Lt={USER:"user"},re=null;function nn(){let{fetch:e}=P(),[n,o]=(0,H.useState)(null),[s,a]=(0,H.useState)(!0),[d,y]=(0,H.useState)(!0),f=(0,H.useRef)(!1),p=(0,H.useCallback)(()=>re?(o(re.userSettings),!0):!1,[]),x=(0,H.useCallback)(async()=>{if(!f.current){f.current=!0;try{let I=await e("/user-settings/get"),O=(await e("/orchestration/get-global-layer-config",{layer:Lt.USER}))?.["sentence-player"]?.status!=="inactive";a(O),re={userSettings:{...I,clickToJump:O},timestamp:Date.now()},o(I),y(!1)}catch{y(!1)}finally{f.current=!1}}},[e]);(0,H.useEffect)(()=>{p()&&y(!1),x()},[p,x]);let h=(0,H.useCallback)(async()=>{try{await e("/sidepanel/broadcast-feature-change",{broadcastToAll:!0})}catch{}},[e]),S=(0,H.useCallback)(async()=>{let k=!(n?.highlighting??!0);o(L=>({...L,highlighting:k})),re&&(re={...re,userSettings:{...re.userSettings,highlighting:k}}),await e("/user-settings/set-highlighting",{highlighting:k}),h(),x()},[n,x,h,e]),g=(0,H.useCallback)(async()=>{let k=!(n?.autoScroll??!0);o(L=>({...L,autoScroll:k})),re&&(re={...re,userSettings:{...re.userSettings,autoScroll:k}}),await e("/user-settings/set-auto-scroll",{autoScroll:k}),h(),x()},[n,x,h,e]),b=(0,H.useCallback)(async()=>{let I=s,k=!I;a(k),re&&(re={...re,userSettings:{...re.userSettings,clickToJump:k}});try{let L=await e("/orchestration/get-all-config-for-layer",{layer:Lt.USER}),B=Object.keys(L||{}).filter(V=>V!=="*").map(async V=>{let W=L[V];if(W&&W["sentence-player"]){let{["sentence-player"]:te,...q}=W;await e("/orchestration/set-layer-config",{layer:Lt.USER,config:q,domain:V})}});await Promise.all(B);let F=L?.["*"]||{};await e("/orchestration/set-layer-config",{layer:Lt.USER,config:{...F,"sentence-player":{status:k?"active":"inactive"}},domain:"*"}),h(),x()}catch{a(I)}},[s,x,h,e]),C=(0,H.useMemo)(()=>{if(!n)return[];let I=n?.highlighting??!0,k=n?.autoScroll??!0;return[{key:"highlight",title:"Text Highlighting",description:"Real-time text highlights while listening.",tooltipVideo:"videos/text_highlighting.mp4",enabled:I,onToggle:S},{key:"autoScroll",title:"Auto-Scroll",description:"Follows the reading automatically.",tooltipVideo:"videos/autoscroll.mp4",enabled:k,onToggle:g},{key:"clickToJump",title:"Click to Jump",description:"Move between sentences by clicking during playback.",tooltipVideo:"videos/click_to_listen.mp4",enabled:s,onToggle:b}]},[n,s,S,g,b]);return{features:C,isLoading:d&&C.length===0}}r();i();var Ae=D($());r();i();var Qt=32,Sr=c.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 12px;
  background: ${({variant:e})=>e==="solid"?l["sf-sec-0-90"]:"transparent"};
  border: none;
  border-radius: ${({variant:e})=>e==="solid"?"10px":"0"};
  ${N["subheading-6"]}
  color: ${l["icn-txt-prim"]};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  min-width: ${({minWidth:e})=>e??"auto"};
  width: 100%;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${l["icn-txt-sec"]};
    transition: transform 0.15s ease;
    transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
    flex-shrink: 0;
  }

  &:hover:not(:disabled) {
    background: ${({variant:e})=>e==="solid"?l["sf-sec-hov-0-90"]:l["sf-prim-hov-w-100"]};
    border-radius: ${({variant:e})=>e==="solid"?"10px":"8px"};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }

  &: active,
    ${({isOpen:e})=>e&&`
    span {
      opacity: 0.5;
    }
  `};
`,hr=c.div`
  position: relative;
  margin: -8px 0;
  align-self: center;
`,yr=c.div`
  position: absolute;
  top: calc(100% - 6px);
  ${({menuAnchor:e})=>e==="top-right"?"right: -6px":"left: -6px"};
  opacity: ${({isOpen:e})=>e?1:0};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-8px)"};
  z-index: 10;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 6px 16px -6px rgba(0, 0, 0, 0.64);
`,br=c.div`
  background: ${l["sf-sec-0-90"]};
  padding: 4px;
  border: 0.5px solid ${l["sf-sec-0-80"]};
  transition: all 0.15s ease;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${l["sf-sec-0-80"]};
    border-radius: 4px;
  }
`,xr=c.div`
  padding: 6px 8px;
  color: ${({selected:e})=>e?l["icn-txt-blue"]:l["icn-txt-prim"]};
  ${N["subheading-6"]};
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;
  border-radius: 16px;
  white-space: nowrap;
  min-height: ${Qt}px;
  box-sizing: border-box;
  flex-shrink: 0;

  &:hover {
    background: ${l["sf-sec-hov-0-80"]};
    border-radius: 16px;
  }

  .check-icon {
    display: flex;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: ${l["icn-txt-blue"]};
    opacity: ${({selected:e})=>e?1:0};
  }

  .item-label {
    flex: 1;
    min-width: 0;
  }

  .chevron-icon {
    display: flex;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: ${l["icn-txt-tert"]};
  }
`,vr=c.div`
  position: absolute;
  ${({side:e,offsetX:n})=>e==="right"?`left: calc(${n}px - 2px)`:`right: calc(${n}px - 2px)`};
  top: ${({top:e})=>e-10}px;
  background: ${l["sf-sec-0-90"]};
  padding: 4px;
  border-radius: 12px;
  border: 0.5px solid ${l["sf-sec-0-80"]};
  box-shadow: 0px 6px 16px -6px rgba(0, 0, 0, 0.64);
  z-index: 11;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${l["sf-sec-0-80"]};
    border-radius: 4px;
  }
`,se={DropdownMenusWrapper:yr,DropdownContainer:hr,DropdownButton:Sr,DropdownMenu:br,DropdownMenuItem:xr,SubmenuWrapper:vr};r();i();var rn=`
  font-family: Georgia;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -2%;
  color: ${l["icn-txt-prim"]};
`,sn=c.div`
  ${rn};
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({color:e})=>e};
  border-radius: 6px;
  width: 40px;
  height: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  &.selected {
    outline-offset: 1px;
    outline: 2px solid ${({color:e})=>e};
  }
`,an=c(se.DropdownMenusWrapper)`
  width: 64px;
  box-sizing: border-box;
  top: calc(100% - 2px) !important;
  right: 0 !important;
  left: 0;

  [role='presentation'] {
    gap: 10px;
    padding: 12px;
  }
`,ln=c(se.DropdownButton)`
  span {
    ${rn};
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({highlightColor:e})=>e};
    border-radius: 6px;
  }

  &:hover {
    background: transparent !important;
    opacity: 0.75;
  }
`;var Cr=Uo.map(e=>({label:"Aa",value:e})),Ht=()=>{let{highlightColorKey:e,setHighlightColor:n,fetch:o}=P(),[s,a]=(0,Ae.useState)(!1),d=(0,Ae.useRef)(null);kt([d],()=>{s&&a(!1)});let y=(0,Ae.useMemo)(()=>jt(e).primary,[e]),f=(0,Ae.useCallback)(async p=>{n(p),a(!1);try{await o("/user-settings/set-basic-settings-value",{key:"highlightColorKey",value:p})}catch(x){console.error("Failed to set highlight color:",x)}},[n,o]);return t(se.DropdownContainer,{ref:d},t(ln,{isOpen:s,highlightColor:y,onClick:()=>a(p=>!p)},t("span",null,"Aa"),t(yt,null)),t(an,{isOpen:s,menuAnchor:"top-right"},t(se.DropdownMenu,{role:"presentation"},Cr.map(p=>t(sn,{key:p.value,color:jt(p.value).primary,className:p.value===e?"selected":"",onClick:()=>f(p.value)},p.label)))))};r();i();var Rt=D($()),cn=D(yo());function At(e,n){let o=(0,Rt.useMemo)(()=>(0,cn.default)(e,100,{leading:!0,trailing:!1}),[e]);return{handleToggle:(0,Rt.useCallback)(a=>{a&&(a.stopPropagation(),a.nativeEvent.stopImmediatePropagation()),n||o()},[n,o])}}function Ir({feature:e}){let{handleToggle:n}=At(e.onToggle,!1),o=e.tooltipImage?{imageSrc:e.tooltipImage}:e.tooltipVideo?{videoSrc:e.tooltipVideo}:null;return t(T.SettingsItem,{onClick:n},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,e.title,o&&t(T.InfoIconWrapper,null,t(Ue,{...o}))),t(T.SettingsItemDescription,null,e.description)),t(ye,{checked:e.enabled,onChange:()=>n()}))}function dn(){let{navigate:e}=P(),{features:n,isLoading:o}=nn(),s=()=>{e("../")};return t(ie.Container,null,t(oe,{title:"Listening",onBack:s,showProfile:!1}),t(ie.ScrollableContent,null,t(Z,null,t(T.SettingsItem,null,t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Cursor Color"),t(T.SettingsItemDescription,null,"Real-time text highlights while listening.")),t(Ht,null)),o?t(ie.LoadingContainer,null,"Loading settings..."):n.map(a=>t(Ir,{key:a.key,feature:a})))))}r();i();r();i();r();i();var un="voice-typing";r();i();var mn=()=>{let e=he(o=>o.voiceTypingSoundEffects);return{soundEffects:e,toggleSoundEffects:()=>{he.getState().updateVoiceTypingSoundEffects(!e)}}};r();i();var et={CenteredSettingsItem:K.CenteredSettingsItem,ShortcutKey:Re,ShortcutKeyNotSet:ze,ShortcutKeys:We};var gn=()=>{let{navigate:e}=P(),{shortcuts:n}=Me(),{handleEditShortcuts:o}=Qe(),{soundEffects:s,toggleSoundEffects:a}=mn(),d=()=>{e("/settings")},y=n[un]?.shortcut;return t(ie.Container,null,t(oe,{title:"Voice Typing",showProfile:!1,onBack:d}),t(ie.ScrollableContent,null,t(Z,null,t(et.CenteredSettingsItem,{onClick:a},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Dictation Sound Effects"),t(T.SettingsItemDescription,null,"Short beep on launch and stop of dictation.")),t(ye,{checked:s,onChange:a})),t(et.CenteredSettingsItem,{separatorType:"none"},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Keyboard Shortcut"),t(T.SettingsItemDescription,null,"Start and stop dictation."," ",t(He,{onClick:o},"Edit here →"))),t(et.ShortcutKeys,null,y?y.split("+").map((f,p)=>t(et.ShortcutKey,{key:p},f)):t(et.ShortcutKeyNotSet,null,"Not Set"))))))};r();i();r();i();var Pe=D($());r();i();var be=D($());var Ne=null,Nt=null,eo=new Set,ve=e=>{Nt=e,eo.forEach(n=>n(e))},fn=()=>(Ne||(Ne=new Audio,Ne.addEventListener("ended",()=>{ve(null)}),Ne.addEventListener("error",()=>{ve(null)})),Ne);function Dt(e,n){let{fetch:o,isPlaybackActive:s}=P(),[a,d]=(0,be.useState)(Nt===n),[y,f]=(0,be.useState)(!1),p=(0,be.useRef)(null);(0,be.useEffect)(()=>{let g=b=>{d(b===n)};return eo.add(g),()=>{eo.delete(g)}},[n]);let x=(0,be.useCallback)(()=>{p.current&&(p.current.abort(),p.current=null);let g=fn();g.pause(),g.currentTime=0,typeof speechSynthesis<"u"&&speechSynthesis.cancel(),ve(null),f(!1)},[]),h=(0,be.useCallback)(async()=>{if(await s())return;let g=fn();if(x(),Nt!==n){f(!0),p.current=new AbortController;try{if(e.previewAudio){let b=await o("/tts/fetch-preview-url",{url:e.previewAudio});if(p.current?.signal.aborted)return;b?.audioData&&(g.src=b.audioData,await g.play(),ve(n)),f(!1);return}if(e.engine!==mt){let C=`<speak>${Gt(e)}</speak>`,I=await o("/tts/get-audio",{ssml:C,voice:{name:e.name,displayName:e.displayName,language:e.language,engine:e.engine,gender:e.gender,localizedDisplayName:{}}});if(p.current?.signal.aborted)return;I?.audioData&&(g.src=I.audioData,await g.play(),ve(n)),f(!1);return}if(typeof speechSynthesis<"u"){let b=Gt(e),C=new SpeechSynthesisUtterance(b),I=speechSynthesis.getVoices().find(k=>k.name?.toLowerCase()===e.name?.toLowerCase());I&&(C.voice=I),speechSynthesis.cancel(),setTimeout(()=>{speechSynthesis.speak(C),ve(n),f(!1),C.addEventListener("end",()=>{ve(null)}),C.addEventListener("error",()=>{ve(null)})},250)}}catch(b){console.error("Failed to play voice preview:",b),f(!1),ve(null)}}},[e,n,x,o,s]),S=(0,be.useCallback)(()=>{a?x():h()},[a,h,x]);return{isPlaying:a,isLoading:y,playPreview:h,stopPreview:x,togglePreview:S}}function De(){Nt!==null&&(Ne&&(Ne.pause(),Ne.currentTime=0),typeof speechSynthesis<"u"&&speechSynthesis.cancel(),ve(null))}r();i();var _=D($());r();i();var st=[{id:"professional",label:"Professional",tags:["use-case:work","use-case:news"]},{id:"narration",label:"Narration",tags:["use-case:audiobook","use-case:movie","use-case:non-fiction"]},{id:"conversational",label:"Conversational",tags:["use-case:podcast","use-case:social-media","use-case:advertisement"]},{id:"educational",label:"Educational",tags:["use-case:e-learning","use-case:audiobook"]},{id:"acting",label:"Acting",tags:["use-case:gaming","use-case:animation","use-case:movie","use-case:advertisement"]},{id:"meditation",label:"Meditation",tags:["use-case:meditation"]}],wr=(e,n)=>!!e?.some(o=>n.includes(o)),Ft=(e,n)=>{let o=st.find(s=>s.id===n);return o?wr(e,o.tags):!1};r();i();var ue=D($());var kr=50,Ke=e=>e.engine===mt?e.name:e.slug||e.name.replace("PVL:",""),Tr=(e,n)=>Ke(e)===Ke(n);function Sn(e){let{fetch:n}=P(),[o,s]=(0,ue.useState)([]),[a,d]=(0,ue.useState)(!0);(0,ue.useEffect)(()=>{(async()=>{try{d(!0);let b=await n("/user-settings/get");s(b.favoriteVoices||[])}catch(b){console.error("Failed to fetch favorite voices:",b),s([])}finally{d(!1)}})()},[n]);let y=(0,ue.useMemo)(()=>o.map(g=>e.find(b=>Ke(b)===g)).filter(Boolean),[o,e]),f=(0,ue.useCallback)(g=>{let b=Ke(g);return o.includes(b)},[o]),p=(0,ue.useCallback)(async g=>{let b=g.map(Ke).filter(Boolean),C=[...new Set(b)];s(C),await n("/user-settings/set-favorite-voices",{favoriteVoices:C})},[n]),x=(0,ue.useCallback)(async g=>{let b=o.map(I=>e.find(k=>Ke(k)===I)).filter(Boolean),C=[g,...b].slice(0,kr);await p(C)},[o,e,p]),h=(0,ue.useCallback)(async g=>{let C=o.map(I=>e.find(k=>Ke(k)===I)).filter(Boolean).filter(I=>!Tr(I,g));await p(C)},[o,e,p]),S=(0,ue.useCallback)(async g=>{f(g)?await h(g):await x(g)},[f,x,h]);return{favoriteVoiceIds:o,favoriteVoices:y,isFavorite:f,addToFavorites:x,removeFromFavorites:h,toggleFavorite:S,isLoading:a}}r();i();var Ge=D($());var hn=6;function yn(e){let{fetch:n}=P(),[o,s]=(0,Ge.useState)([]),[a,d]=(0,Ge.useState)(!0);(0,Ge.useEffect)(()=>{let f=async()=>{try{d(!0);let p=await n("/user-settings/get-voice-selection-history");if(!p||!e.length){s([]);return}let x=p.map(h=>e.find(S=>gt(h,S))).filter(h=>!!h).slice(0,hn);s(x)}catch(p){console.error("Failed to fetch voice selection history:",p),s([])}finally{d(!1)}};e.length>0&&f()},[e,n]);let y=(0,Ge.useCallback)(f=>{s(p=>{if(p.length>0&&p[0].id===f.id)return p;let x=p.filter(h=>h.id!==f.id);return[f,...x].slice(0,hn)})},[]);return{recentVoices:o,isLoading:a,addToRecents:y}}async function Vr(e){let[n,o,s]=await Promise.all([e("/remote-config/get-voice-list"),e("/user-settings/get-client-voices"),e("/personal-voices/get-personal-voices",{forceRefetch:!0})]),a=n.tabs.find(S=>S.displayName==="All"),d=n.tabs.find(S=>S.displayName==="Recommended"),y=(S,g=!0)=>({...S,id:ft(S),premium:g}),f=a?.categories?.flatMap(S=>S.voices.filter(g=>g.avatarImage).map(g=>y(g)))??[],p=(o||[]).map(S=>({...S,id:ft(S),free:!0})),x=(s||[]).map(S=>({...S,id:ft(S),personal:!0})),h=d?.categories?.flatMap(S=>S.voices.filter(g=>g.avatarImage).map(g=>y(g))).slice(0,6)??[];return{allVoices:[...f,...p,...x],featuredVoices:h,clonedVoices:x}}function bn(){let{fetch:e,isPremium:n,tabId:o}=P(),[s,a]=(0,_.useState)(!0),[d,y]=(0,_.useState)([]),[f,p]=(0,_.useState)([]),[x,h]=(0,_.useState)([]),[S,g]=(0,_.useState)(""),[b,C]=(0,_.useState)(!1),[I,k]=(0,_.useState)(void 0),[L,O]=(0,_.useState)(void 0),B=Jt(),F=he(w=>w.updateVoice),V=(0,_.useMemo)(()=>n?d:d.filter(w=>!w.premium),[d,n]),{favoriteVoices:W,isFavorite:te,toggleFavorite:q}=Sn(V),{recentVoices:ce,addToRecents:le,isLoading:de}=yn(V);(0,_.useEffect)(()=>{Vr(e).then(w=>{y(w.allVoices),p(w.featuredVoices),h(w.clonedVoices)}).catch(w=>{console.error("Failed to fetch voice list:",w)}).finally(()=>{a(!1)})},[e]),(0,_.useEffect)(()=>{if(de||ce.length>0||!B)return;let w=d.find(R=>gt(B,R));w&&le(w)},[de,ce,B,d,le]);let E=(0,_.useMemo)(()=>d.filter(w=>{if(S.trim()){let R=S.toLowerCase();if(!(w.displayName.toLowerCase().includes(R)||w.language.toLowerCase().includes(R)||(Se(w.language.split("-")[0])?.toLowerCase().includes(R)??!1)))return!1}return!(L&&!Ft(w.labels,L))}),[d,S,L]),Y=(0,_.useMemo)(()=>d.filter(w=>{if(S.trim()){let R=S.toLowerCase();if(!(w.displayName.toLowerCase().includes(R)||w.language.toLowerCase().includes(R)||(Se(w.language.split("-")[0])?.toLowerCase().includes(R)??!1)))return!1}return!(I&&!(w.language.startsWith(I)||w.language===I))}),[d,S,I]),A=(0,_.useMemo)(()=>{let w=new Set;for(let R of E)w.add(R.language);return qt.filter(R=>R.locales.some(J=>w.has(J))).map(R=>({value:R.lang,label:Se(R.lang)||R.lang,items:R.locales.filter(J=>w.has(J)).map(J=>({value:J,label:nt(J)||J}))}))},[E]),j=(0,_.useMemo)(()=>st.filter(w=>Y.some(R=>Ft(R.labels,w.id))).map(w=>({value:w.id,label:w.label})),[Y]),z=!!S.trim()||!!I||!!L,$e=(0,_.useMemo)(()=>{let w=new Map;for(let Ie of d){if(Ie.personal)continue;let ot=Ie.language.split("-")[0],Kt=bo(ot);w.has(Kt)||w.set(Kt,[]),w.get(Kt).push(Ie)}let R=new Map,J=w.get("English");J&&R.set("English",J);let ui=Array.from(w.entries()).filter(([Ie])=>Ie!=="English").sort(([Ie],[ot])=>Ie.localeCompare(ot));for(let[Ie,ot]of ui)R.set(Ie,ot);return R},[d,x]),Oe=(0,_.useMemo)(()=>d.filter(w=>{if(S.trim()){let R=S.toLowerCase();if(!(w.displayName.toLowerCase().includes(R)||w.language.toLowerCase().includes(R)||(Se(w.language.split("-")[0])?.toLowerCase().includes(R)??!1)))return!1}return!(I&&!(w.language.startsWith(I)||w.language===I)||L&&!Ft(w.labels,L))}),[d,S,I,L]),U=(0,_.useMemo)(()=>qt.map(w=>({lang:w.lang,locales:w.locales,voices:Oe.filter(R=>{let J=w.locales.includes(R.language);return z?J:J&&!vo(R)})})),[Oe,z]),ge=(0,_.useCallback)(w=>{C(w),w||g("")},[]),fe=(0,_.useCallback)(async w=>{if(!(!n&&w.premium)&&!xo(B,w))try{F(w),le(w),await e("/user-settings/set-voice",{voice:w})}catch(R){console.error("Failed to set voice:",R)}},[B,F,le,n,e]),Le=(0,_.useCallback)(async()=>{try{await e("/content/show-paywall",{...o?{tabId:o}:{},variant:"premium_voices",source:o?"sidepanel_voice_switch":"content_voice_switch"})}catch{}},[o,e]);return{isLoading:s,isPremium:n,featuredVoices:f,favoriteVoices:W,clonedVoices:x,recentVoices:ce,allVoicesByLanguage:$e,selectedVoice:B,selectVoice:fe,showPremiumPaywall:Le,searchQuery:S,setSearchQuery:g,filteredVoices:Oe,isFavorite:te,toggleFavorite:q,isSearchExpanded:b,setSearchExpanded:ge,selectedLocale:I,setSelectedLocale:k,availableLanguages:A,selectedContentType:L,setSelectedContentType:O,availableContentTypes:j,hasFiltersActive:z,filteredVoicesByLocale:U}}r();i();var vn=D($());r();i();r();i();var to=["M 90 10 C 115.4878 10.0578 137.506 21.2689 152.2129 40.3497 C 166.5126 58.9011 171.8853 84.8185 166.8297 107.6195 C 161.7226 130.6591 145.001 150.5515 123.6438 160.9633 C 102.0667 171.4828 76.9193 171.0464 55.1314 160.9633 C 33.0044 150.7235 17.699 131.9918 12.0222 108.4525 C 6.2749 84.6199 10.5228 59.5361 25.9011 40.3497 C 41.3162 21.1173 64.919 9.0725 90 10 Z  ","M89.2367 10.0119C113.461 10.3197 137.6 17.6659 153.138 36.2528C169.098 55.3446 174.303 81.1051 168.989 105.415C163.612 130.015 148.621 152.532 125.527 162.569C103.33 172.216 78.6408 164.986 57.0386 154.072C36.0719 143.479 17.8842 127.561 11.4942 104.956C4.68939 80.8838 7.41856 53.9582 23.267 34.603C38.9093 15.4996 64.5481 9.69833 89.2367 10.0119Z","M89.1936 11.2181C112.755 12.7304 132.43 27.053 147.105 45.5481C161.726 63.9743 172.046 86.5188 167.205 109.537C162.274 132.979 144.666 151.741 122.74 161.391C101.715 170.645 77.9293 168.063 57.3309 157.895C37.009 147.863 22.1603 130.224 15.6385 108.52C8.44601 84.583 6.07147 57.4015 21.1437 37.4634C36.5683 17.0591 63.6677 9.57975 89.1936 11.2181Z","M88.5283 11.0239C112.949 11.5839 134.965 23.9414 150.527 42.7699C166.477 62.0676 177.345 86.8103 171.236 111.09C165.252 134.869 143.575 150.047 121.079 159.805C99.8766 169.002 76.4054 170.609 55.1979 161.423C32.8174 151.73 13.9171 134.243 7.64761 110.673C1.11679 86.12 6.84717 59.5687 22.8583 39.8422C38.708 20.3146 63.3846 10.4473 88.5283 11.0239Z","M84.8829 5.02128C110.352 4.37891 133.571 18.343 149.494 38.2311C165.457 58.1704 173.318 83.743 167.891 108.702C162.396 133.971 145.132 155.269 121.678 166.161C98.6186 176.87 71.6218 175.834 49.2198 163.812C27.9425 152.393 15.6405 130.323 10.8115 106.663C6.13818 83.7648 10.4703 60.2771 24.234 41.3904C38.8404 21.3474 60.0902 5.64661 84.8829 5.02128Z","M87.722 11.0085C112.54 11.2567 137.559 17.9968 153.557 36.9716C170.057 56.5424 175.951 83.3623 169.639 108.17C163.505 132.277 144.856 150.822 122.058 160.772C100.337 170.251 75.9069 168.627 54.5227 158.412C33.0453 148.153 16.3642 130.146 9.95837 107.222C3.13308 82.7971 4.27333 55.362 20.215 35.6381C36.0562 16.0384 62.5222 10.7565 87.722 11.0085Z","M87.3439 10.123C111.023 10.9486 133.976 18.7079 149.496 36.6104C165.853 55.4786 174.327 80.4274 169.541 104.936C164.571 130.381 148.401 153.242 124.675 163.693C101.775 173.78 75.8225 167.721 53.7471 155.939C32.9437 144.837 18.0339 126.157 11.7513 103.428C5.04516 79.1684 3.66418 51.6352 19.5086 32.0781C35.249 12.6494 62.3544 9.25163 87.3439 10.123Z","M84.841 6.00001C109.966 5.98475 132.559 19.4435 148.501 38.8623C164.763 58.6714 175.115 83.945 169.329 108.913C163.562 133.795 143.006 151.546 119.876 162.38C97.1021 173.048 70.6348 177.075 48.2392 165.634C26.3704 154.461 15.7393 130.587 10.6279 106.568C5.6305 83.0842 7.02224 58.2583 21.2784 38.9396C36.1861 18.7379 59.7343 6.01526 84.841 6.00001Z","M86.9407 10.0009C110.563 10.1273 130.783 24.7939 145.517 43.2587C160.258 61.7314 170.4 84.7808 164.965 107.78C159.571 130.603 139.945 145.986 118.829 156.188C97.6717 166.408 73.4256 172.184 52.1096 162.3C30.4727 152.267 17.4054 130.3 12.6149 106.936C7.96398 84.2531 13.4828 61.0024 27.5722 42.6272C42.0279 23.774 63.1837 9.87366 86.9407 10.0009Z","M90.3692 10.0007C114.309 9.93544 139.537 14.7558 154.475 33.4635C169.423 52.1826 168.789 77.9155 163.204 101.21C157.711 124.123 145.705 145.248 124.985 156.467C103.013 168.364 76.3182 171.35 53.8483 160.423C31.4696 149.54 18.55 126.501 13.3327 102.169C8.21125 78.2854 11.0341 52.554 26.6994 33.8115C41.9877 15.5201 66.53 10.0656 90.3692 10.0007Z"];r();i();var Pr=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${l["bg-prim-w-100"]};
`,Er=So`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Lr=c.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 6px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  &[data-loaded='true'] {
    animation: ${Er} 0.25s ease-out;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: ${l["icn-txt-quat"]};
    border: 2px solid transparent;
    background-clip: padding-box;
    min-height: 100px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`,Rr=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  ${N["body-6"]}
  color: ${l["icn-txt-sec"]};

  box-sizing: border-box;
  height: calc(100% - 48px);
`,Ar=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: visible;
`,Nr=c.div`
  ${N["heading-6"]}
  color: ${l["icn-txt-prim"]};
  padding-left: 4px;
`,Dr=c.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 100%));
  gap: 12px;
  overflow: visible;
`,Fr=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background: transparent;
  position: relative;
  overflow: visible;
`,$r=c.div`
  position: absolute;
  inset: -22px;
  display: block;
  border-radius: 100%;
  transform: scale(0.85);
  transition: background-color 0.2s ease;
  background-color: ${({isPlaying:e,isSelected:n,variant:o})=>e?l["bg-prim-cta"]:n?o==="featured"?l["sf-act-blue"]:l["bg-prim-w-100"]:l["bg-sec-0-80"]};
`,Or=c.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`,Br=c.div`
  position: relative;
  cursor: pointer;
  overflow: visible;

  &:hover .avatar-background {
    background-color: ${l["bg-sec-0-80"]};
  }

  &:hover .avatar-background[data-playing='true'] {
    background-color: ${l["bg-prim-cta"]};
  }
`,Mr=c.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.15s ease;
  cursor: pointer;
  color: white;

  svg {
    width: ${({size:e})=>e==="large"?"20px":"16px"};
    height: ${({size:e})=>e==="large"?"20px":"16px"};
  }
`,_r=c.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${({size:e})=>e??20}px;
  height: ${({size:e})=>e??20}px;
  background: ${l["icn-txt-prim-electric"]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${({noBorder:e})=>e?"":`border: 2px solid ${l["bg-sec-0-110"]};`}
`,Ur=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Wr=c.span`
  ${N["subheading-5"]}
  color: ${l["icn-txt-prim"]};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 2px;

  svg {
    flex-shrink: 0;
  }
`,zr=c.span`
  ${N["body-6"]}
  color: ${l["icn-txt-sec"]};
  text-align: center;
`,Kr=c.div`
  display: flex;
  flex-direction: column;
  background: ${l["bg-prim-w-100"]};
  border-radius: 12px;
  overflow: visible;
`,Gr=c.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  height: 66px;
  width: 100%;
  box-sizing: border-box;
  background: ${({isSelected:e})=>e?l["sf-act-blue"]:"transparent"};
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
  border-radius: 16px;
  overflow: visible;

  &:hover {
    background: ${({isSelected:e})=>e?l["sf-act-blue"]:l["sf-prim-hov-w-90"]};
  }

  ${({isSelected:e})=>e&&`
    & [role='separator'], &+div [role='separator'] {
      display: none;
    }
  `}

  &:hover [role='separator'], &:hover+div [role='separator'] {
    display: none;
  }

  ${({isLocked:e})=>e&&`
    cursor: pointer;
    background: transparent !important;
    &:hover {
      background: transparent !important;
    }
  `}
`,Yr=c.div`
  position: relative;
  cursor: pointer;
  overflow: visible;

  &:hover .avatar-background {
    background-color: ${l["bg-prim-w-100"]};
  }

  &:hover .avatar-background[data-playing='true'] {
    background-color: ${l["bg-prim-cta"]};
  }
`,jr=c.div`
  flex: 1;
  min-width: 0;
  gap: 2px;
`,Zr=c.div`
  ${N["subheading-5"]}
  color: ${l["icn-txt-prim"]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 2px;

  svg {
    flex-shrink: 0;
  }
`,qr=c.div`
  ${N["body-6"]}
  color: ${l["icn-txt-sec"]};
`,Jr=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l["bg-blue"]};
  opacity: ${({visible:e})=>e?1:0};
`,Xr=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l["icn-txt-prim"]};
  opacity: ${({visible:e})=>e?1:0};
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 1;
  }
`,Qr=c.div`
  height: 1px;
  background: ${l["brdr-prim-10-80"]};
  position: absolute;
  left: 76px;
  right: 0;
  top: -0.5px;
`,Hr=c.div`
  width: 100%;
`,es=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px 0 4px;
`,ts=c.span`
  ${N["heading-6"]}
  color: ${l["icn-txt-prim"]};
`,os=c.div`
  margin-top: 4px;
  width: 100%;
  overflow: auto;
  display: flex;
  gap: 8px;
  padding: 0 0 12px 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`,ns=c.div`
  display: flex;
  gap: 4px;
`,oo=c.div`
  color: ${l["icn-txt-prim"]};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${l["sf-prim-hov-w-90"]};
  }

  &:active {
    background: ${l["sf-prim-pres-w-90"]};
  }

  ${({disabled:e})=>e?"opacity: 0.3 !important; pointer-events: none;":""}
`,is=c(oo)`
  transform: rotate(180deg);
`,rs=c(oo)``,ss=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 12px;
  cursor: pointer;
  flex-shrink: 0;

  background: ${l["sf-prim-w-90"]};

  &:hover {
    background: ${l["sf-prim-hov-w-90"]};
  }

  &:active {
    background: ${l["sf-prim-pres-w-90"]};
  }

  ${({isSelected:e})=>e?`background: ${l["sf-act-blue"]} !important;`:""}
`,as=c.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${l["bg-sec-0-80"]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,ls=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${N["subheading-6"]}
  color: ${l["icn-txt-sec"]};
  background: ${l["bg-sec-0-80"]};
`,cs=c.div``,ds=c.div`
  ${N["subheading-6"]}
  color: ${l["icn-txt-prim"]};
`,ps=c.div`
  ${N["subheading-7"]}
  color: ${l["icn-txt-sec"]};
`,us=c.div`
  text-align: right;
  flex-grow: 1;
  width: 16px;
  height: 16px;
  position: relative;
`,ms=c.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${({size:e})=>e??20}px;
  height: ${({size:e})=>e??20}px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({size:e})=>e??20}px;
    height: ${({size:e})=>e??20}px;
  }
`,gs=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
`,fs=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: ${l["icn-txt-prim"]};

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.7;
  }
`,Ss=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  border-radius: 10px;
  padding: 0 12px;
  box-sizing: border-box;
  background: ${l["sf-prim-w-90"]};
  flex: 1;
  overflow: hidden;

  svg {
    color: ${l["icn-txt-tert"]};
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
`,hs=c.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0;
  ${N["body-6"]}
  color: ${l["icn-txt-prim"]};

  &::placeholder {
    color: ${l["icn-txt-tert"]};
  }
`,ys=c.button`
  ${N["subheading-6"]}
  color: ${l["icn-txt-prim"]};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    opacity: 0.7;
  }
`,bs=c.div`
  position: relative;
  max-width: calc(100% - 140px);

  .dropdown {
    width: 100%;
  }
`,xs=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  gap: 12px;
  ${N["subheading-6"]}
  color: ${l["icn-txt-sec"]};
  text-align: center;
`,v={Container:Pr,ScrollableContent:Lr,LoadingContainer:Rr,Section:Ar,SectionTitle:Nr,VoiceGrid:Dr,FeaturedVoiceCard:Fr,FeaturedAvatarContainer:Br,PlayOverlay:Mr,FeaturedCheckBadge:_r,VoiceNameAndLabelContainer:Ur,VoiceName:Wr,VoiceLabel:zr,VoiceList:Kr,VoiceListItem:Gr,VoiceListAvatarContainer:Yr,VoiceListInfo:jr,VoiceListName:Zr,VoiceListMeta:qr,VoiceListCheck:Jr,FavoriteIconWrapper:Xr,Separator:Qr,AnimatedAvatarBackground:$r,AnimatedAvatarImg:Or,LockBadge:ms,RecentWrapper:Hr,RecentHeader:es,RecentHeaderTitle:ts,RecentVoicesWrapper:os,RecentArrows:ns,RecentArrow:oo,RecentArrowLeft:is,RecentArrowRight:rs,RecentVoiceItem:ss,RecentVoiceAvatar:as,RecentVoiceAvatarFallback:ls,RecentVoiceInfo:cs,RecentVoiceName:ds,RecentVoiceLocale:ps,RecentIconWrapper:us,FilterBar:gs,FilterDropdownContainer:bs,EmptySearchState:xs,HeaderSearchButton:fs,HeaderSearchBar:Ss,HeaderSearchInput:hs,HeaderSearchCancelButton:ys};r();i();var $t=D($());function xn({isPlaying:e,id:n}){let[o,s]=(0,$t.useState)(0);return(0,$t.useEffect)(()=>{if(!e){s(0);return}let d=setTimeout(()=>{if(to.length<=o+1){s(0);return}s(o+1)},o===0?0:300);return()=>clearTimeout(d)},[o,e]),t("svg",{width:0,height:0,viewBox:"0 0 178 178",style:{position:"absolute",overflow:"visible"}},t("clipPath",{id:n},t("path",{d:to[o],fill:"currentColor",style:{transition:"0.3s linear"}})))}function Ot({isPlaying:e,isSelected:n,avatarImage:o,displayName:s,size:a,uniqueId:d,variant:y}){let f=a/136;return t("div",{style:{width:a,height:a}},t(xn,{isPlaying:e,id:d}),t("div",{style:{position:"absolute",transform:`scale(${f}) translate(-50%, -50%)`,top:a-136/2,left:a-136/2}},t("div",{style:{position:"relative",width:136,height:136}},t(v.AnimatedAvatarBackground,{className:"avatar-background",isPlaying:e,isSelected:n,variant:y,"data-playing":e,style:{WebkitClipPath:`url(#${d})`,clipPath:`url(#${d})`}},t(v.AnimatedAvatarImg,{src:o,alt:s,width:140,height:140})))))}r();i();var Bt=e=>e.replace(/[^a-zA-Z0-9-_]/g,"_").replace(/^[0-9-]/,"_$&");function Cn({voice:e,featuredVoices:n,selectedVoice:o,onSelect:s,isPremium:a,onLockedClick:d}){let[y,f]=(0,vn.useState)(!1),{isPlaying:p,isLoading:x,togglePreview:h}=Dt(e,e.id),S=qe(e,o),g=Io(e,n),b=St(e),C=!a&&!!e.premium,I=`featured-voice-${Bt(e.id)}`,k=()=>{if(C){d?.();return}s(e),h()};return t(v.FeaturedVoiceCard,null,t(v.FeaturedAvatarContainer,{onClick:k,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)},t(Ot,{isPlaying:p,isSelected:S,avatarImage:je(e),displayName:e.displayName,size:64,uniqueId:I,variant:"featured"}),!C&&!p&&t(v.PlayOverlay,{visible:y||x,size:"large"},x?t(vt,null):t(xt,null)),C?t(v.LockBadge,{size:20},t(It,{size:20})):S&&!y&&!p&&t(v.FeaturedCheckBadge,{size:20},t(we,{size:14}))),t(v.VoiceNameAndLabelContainer,null,t(v.VoiceName,null,Ze(e,!1),b&&t(bt,null)),t(v.VoiceLabel,null,g)))}r();i();var In=D($());function lt({voice:e,selectedVoice:n,onSelect:o,isFavorite:s,onToggleFavorite:a,isPremium:d,onLockedClick:y,children:f}){let[p,x]=(0,In.useState)(!1),{isPlaying:h,isLoading:S,togglePreview:g}=Dt(e,e.id),b=qe(e,n),C=St(e),I=Co(e),k=ht(e),L=!d&&!!e.premium,O=!L&&(p||s),B=`list-voice-${Bt(e.id)}`,F=()=>{if(L){y?.();return}De(),o(e),g()};return t(v.VoiceListItem,{isSelected:b,isLocked:L,onClick:F,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1)},t(v.VoiceListAvatarContainer,null,t(Ot,{isPlaying:h,isSelected:b,avatarImage:je(e),displayName:e.displayName,size:48,uniqueId:B,variant:"list"}),!L&&!h&&t(v.PlayOverlay,{visible:p||S,size:"medium"},S?t(vt,null):t(xt,null)),L?t(v.LockBadge,{size:18},t(It,{size:18})):b&&t(v.FeaturedCheckBadge,{size:16},t(we,{size:11}))),t(v.VoiceListInfo,null,t(v.VoiceListName,null,Ze(e,!0),C&&t(bt,null)),t(v.VoiceListMeta,null,k,I&&` ∙ ${I}`)),t(v.FavoriteIconWrapper,{visible:O,onClick:V=>{L||(V.stopPropagation(),a(e))}},t(Po,{filled:s})),f)}r();i();var Tn=D($());r();i();function wn({voice:e,selectedVoice:n,onSelect:o}){let s=qe(e,n),a=Ze(e,!1),d=ht(e),y=je(e),f=()=>{De(),o(e)},p=!y&&e.personal;return t(v.RecentVoiceItem,{isSelected:s,onClick:f},t(v.RecentVoiceAvatar,null,p?t(v.RecentVoiceAvatarFallback,null,a.charAt(0)):t("img",{src:y,alt:a})),t(v.RecentVoiceInfo,null,t(v.RecentVoiceName,null,a),t(v.RecentVoiceLocale,null,d)),t(v.RecentIconWrapper,null,s&&t(v.FeaturedCheckBadge,{size:16,noBorder:!0},t(we,{size:11}))))}r();i();var Ve=D($());function kn({scrollRef:e}){let[n,o]=(0,Ve.useState)(!1),[s,a]=(0,Ve.useState)(!0),d=zo(e,10),y=(0,Ve.useCallback)((x=0)=>{let h=e.current;if(!h)return;let S=h.scrollLeft+x;a(!(S>0)),o(!(S+h.offsetWidth<h.scrollWidth))},[e]);(0,Ve.useEffect)(()=>{if(!e.current)return;let x=()=>y();return e.current.addEventListener("scroll",x),()=>e.current?.removeEventListener("scroll",x)},[e,y]),(0,Ve.useEffect)(()=>{y()},[d,y]);let f=(0,Ve.useCallback)(x=>{if(!e.current)return;let h=150*x;e.current.scrollBy({left:h,behavior:"smooth"}),y(h)},[e,y]),p=!(s&&n);return t(v.RecentHeader,null,t(v.RecentHeaderTitle,null,"Recent"),p&&t(v.RecentArrows,null,t(v.RecentArrowLeft,{disabled:s,onClick:()=>f(-1)},t(Be,null)),t(v.RecentArrowRight,{disabled:n,onClick:()=>f(1)},t(Be,null))))}function Vn({voices:e,selectedVoice:n,onSelect:o}){let s=(0,Tn.useRef)(null);return e.length===0?null:t(v.RecentWrapper,null,t(kn,{scrollRef:s}),t(v.RecentVoicesWrapper,{ref:s},e.map(a=>t(wn,{key:`recent-${a.id}`,voice:a,selectedVoice:n,onSelect:o}))))}r();i();var no=D($());r();i();r();i();var ne=D($());function Mt({value:e,options:n,onChange:o,variant:s="ghost",minWidth:a,menuAnchor:d="top-right",disabled:y=!1,dropdownClassName:f,renderOption:p,buttonClassName:x,dropdownMenuWrapperClassName:h}){let[S,g]=(0,ne.useState)(!1),[b,C]=(0,ne.useState)(null),I=(0,ne.useRef)(null),k=(0,ne.useRef)(null),L=(0,ne.useRef)(null),O=(0,ne.useMemo)(()=>{let E=n.find(Y=>Y.value===e);if(E)return E;for(let Y of n){let A=Y.items?.find(j=>j.value===e);if(A)return{value:A.value,label:`${Y.label} - ${A.label}`}}},[n,e]),B=()=>{y||g(E=>(E&&C(null),!E))},F=(0,ne.useCallback)(E=>{o(E),g(!1),C(null)},[o]),V=(0,ne.useCallback)(E=>{E.items&&E.items.length>1?C(E):C(null)},[]),W=(0,ne.useCallback)(E=>{E.items&&E.items.length===1?F(E.items[0].value):F(E.value)},[F]),te=(0,ne.useCallback)(E=>!!(E.value===e||E.items?.some(Y=>Y.value===e)),[e]),q=(0,ne.useMemo)(()=>{if(!b)return 0;let E=n.findIndex(A=>A.value===b.value),Y=k.current?.scrollTop||0;return E*(Qt+2)+4-Y},[b,n]),ce=(0,ne.useMemo)(()=>{if(!b||!k.current)return"right";let E=k.current.getBoundingClientRect();return window.innerWidth-E.right>=180?"right":"left"},[b]);kt([I],()=>{S&&(g(!1),C(null))});let{width:le}=Zt(k.current),{height:de}=Zt(L.current);return t(se.DropdownContainer,{ref:I,className:f},t(se.DropdownButton,{ref:L,onClick:B,isOpen:S,variant:s,minWidth:a,disabled:y,className:x},t("span",null,O?.label),t(yt,null)),t(se.DropdownMenusWrapper,{isOpen:S,menuAnchor:d,className:h},t(se.DropdownMenu,{ref:k},n.map(E=>{if(p)return p({isSelected:te(E),onClick:()=>W(E),option:E});let Y=E.items&&E.items.length>1;return t(se.DropdownMenuItem,{key:String(E.value),selected:te(E),hasSubmenu:!!Y,onClick:()=>W(E),onMouseEnter:()=>V(E)},t("span",{className:"check-icon"},t(we,{size:20})),t("span",{className:"item-label"},E.label),Y&&t("span",{className:"chevron-icon"},t(Be,null)))}))),b?.items&&t(se.SubmenuWrapper,{top:q+de,side:ce,offsetX:le},b.items.map(E=>t(se.DropdownMenuItem,{key:String(E.value),selected:E.value===e,onClick:()=>F(E.value)},t("span",{className:"check-icon"},t(we,{size:20})),t("span",{className:"item-label"},E.label)))))}function vs(e,n){return e.some(o=>o.value===n||o.items?.some(s=>s.value===n))}function Cs(e,n){if(!n||vs(e,n))return e;if(n.includes("-")){let s=n.split("-")[0];return[...e,{value:s,label:Se(s)||s,items:[{value:n,label:nt(n)||n}]}]}return[...e,{value:n,label:Se(n)||n}]}function Is(e,n){if(!n||e.some(s=>s.value===n))return e;let o=st.find(s=>s.id===n)?.label||n;return[...e,{value:n,label:o}]}function ws(e,n){if(e){for(let o of n){if(o.value===e)return o.label;let s=o.items?.find(a=>a.value===e);if(s)return`${o.label} - ${s.label}`}if(e.includes("-")){let o=e.split("-")[0],s=Se(o)||o,a=nt(e)||e;return`${s} - ${a}`}return Se(e)||e}}function Pn({selectedLocale:e,setSelectedLocale:n,availableLanguages:o,selectedContentType:s,setSelectedContentType:a,availableContentTypes:d}){let y=(0,no.useMemo)(()=>Cs(o,e),[o,e]),f=(0,no.useMemo)(()=>Is(d,s),[d,s]),p=ws(e,y),x=[{value:"",label:"Language"},...y],h=[{value:"",label:"Content Type"},...f],S=b=>{n(b||void 0)},g=b=>{a(b||void 0)};return t(v.FilterBar,null,t(v.FilterDropdownContainer,null,t(Mt,{value:e||"",options:x,onChange:S,variant:"solid",minWidth:"140px",menuAnchor:"top-left",disabled:y.length===0,dropdownClassName:"dropdown"})),t(v.FilterDropdownContainer,null,t(Mt,{value:s||"",options:h,onChange:g,variant:"solid",minWidth:"140px",menuAnchor:"top-left",disabled:f.length===0,dropdownClassName:"dropdown"})))}var ks=200;function En(){let{navigate:e}=P(),{isLoading:n,isPremium:o,featuredVoices:s,favoriteVoices:a,clonedVoices:d,recentVoices:y,allVoicesByLanguage:f,selectedVoice:p,selectVoice:x,showPremiumPaywall:h,isFavorite:S,toggleFavorite:g,searchQuery:b,setSearchQuery:C,filteredVoices:I,isSearchExpanded:k,setSearchExpanded:L,selectedLocale:O,setSelectedLocale:B,availableLanguages:F,selectedContentType:V,setSelectedContentType:W,availableContentTypes:te,hasFiltersActive:q,filteredVoicesByLocale:ce}=bn(),le=(0,Pe.useRef)(null),[de,E]=(0,Pe.useState)(!1);(0,Pe.useEffect)(()=>()=>{De()},[]);let Y=()=>{De(),e("../")},A=U=>{De(),x(U)},j=(0,Pe.useCallback)(()=>{k||(L(!0),E(!1),setTimeout(()=>{E(!0),setTimeout(()=>le.current?.focus(),0)},ks))},[k,L]),z=(0,Pe.useCallback)(()=>{L(!1),E(!1)},[L]),$e=t(v.HeaderSearchButton,{onClick:j,"aria-label":"Search voices"},t(Yt,null)),Oe=t(u,null,t(v.HeaderSearchBar,{isExpanded:k},t(Yt,null),de&&t(v.HeaderSearchInput,{ref:le,value:b,onChange:U=>C(U.target.value),placeholder:"Search for languages, accents"})),de&&t(v.HeaderSearchCancelButton,{onClick:z},"Cancel"));return t(v.Container,null,t(oe,{title:"Select Voice",onBack:Y,showProfile:!1,rightContent:k?void 0:$e,isExpanded:k,expandedContent:Oe}),!n&&t(Pn,{selectedLocale:O,setSelectedLocale:B,availableLanguages:F,selectedContentType:V,setSelectedContentType:W,availableContentTypes:te}),t(v.ScrollableContent,{className:"smoothScrollbar","data-loaded":!n},n?t(v.LoadingContainer,null,t(wo,null)):q?I.length===0?t(v.EmptySearchState,null,"No results for “",b||O||V,"”"):ce.map(({lang:U,voices:ge})=>ge.length>0?t(v.Section,{key:U},t(v.SectionTitle,null,Se(U)),t(v.VoiceList,null,ge.map((fe,Le)=>t(lt,{key:fe.id,voice:fe,selectedVoice:p,onSelect:A,isFavorite:S(fe),onToggleFavorite:g,isPremium:o,onLockedClick:h},Le>0&&t(v.Separator,{role:"separator"}))))):null):t(u,null,t(Vn,{voices:y,selectedVoice:p,onSelect:A}),s.length>0&&t(v.Section,null,t(v.SectionTitle,null,"Featured"),t(v.VoiceGrid,null,s.map(U=>t(Cn,{key:U.id,voice:U,featuredVoices:s,selectedVoice:p,onSelect:A,isPremium:o,onLockedClick:h})))),a.length>0&&t(v.Section,null,t(v.SectionTitle,null,"Favorites"),t(v.VoiceList,null,a.map((U,ge)=>t(lt,{key:`favorite-${U.id}`,voice:U,selectedVoice:p,onSelect:A,isFavorite:!0,onToggleFavorite:g,isPremium:o,onLockedClick:h},ge>0&&t(v.Separator,{role:"separator"}))))),d.length>0&&t(v.Section,null,t(v.SectionTitle,null,"Cloned"),t(v.VoiceList,null,d.map((U,ge)=>t(lt,{key:`cloned-${U.id}`,voice:U,selectedVoice:p,onSelect:A,isFavorite:S(U),onToggleFavorite:g,isPremium:o,onLockedClick:h},ge>0&&t(v.Separator,{role:"separator"}))))),Array.from(f.entries()).map(([U,ge])=>t(v.Section,{key:U},t(v.SectionTitle,null,U),t(v.VoiceList,null,ge.map((fe,Le)=>t(lt,{key:fe.id,voice:fe,selectedVoice:p,onSelect:A,isFavorite:S(fe),onToggleFavorite:g,isPremium:o,onLockedClick:h},Le>0&&t(v.Separator,{role:"separator"})))))))))}r();i();r();i();var Xn=D($());r();i();var ee=D($());var Rn=D(yo());var io=.5,Ts=4.5,Ln=.05,Vs=1e3,Ps=[.8,1,1.2],Es=[.8,1,1.2,1.5,2,2.5];function Ls(e,n,o){return Math.min(Math.max(e,n),o)}var An=()=>{let{fetch:e,isPremium:n}=P(),o=Xt(),s=he(F=>F.updateSpeed),[a,d]=(0,ee.useState)(!1),[y,f]=(0,ee.useState)(!0),p=(0,ee.useRef)(Date.now()),x=(0,ee.useMemo)(()=>n?Ts:fo,[n]),h=(0,ee.useMemo)(()=>n?Es:Ps,[n]);(0,ee.useEffect)(()=>{(async()=>{try{let V=await e("/user-settings/get");d(V.autoSpeedUp??!1)}catch{}finally{f(!1)}})()},[e]);let S=(0,ee.useMemo)(()=>(0,Rn.default)(async F=>{await e("/user-settings/set-playback-speed",{playbackSpeed:F})},150),[e]),g=(0,ee.useCallback)(F=>{let V=Ls(F,io,x);s(V),S(V)},[x,s,S]),b=(0,ee.useCallback)(F=>{s(F);let V=Date.now();V-p.current>Vs&&(p.current=V,g(F))},[s,g]),C=(0,ee.useCallback)(()=>g((o??1)-Ln),[o,g]),I=(0,ee.useCallback)(()=>g((o??1)+Ln),[o,g]),k=(0,ee.useCallback)(async()=>{let F=!a;d(F);try{await e("/user-settings/set-auto-speed-up",{autoSpeedUp:F})}catch{d(!F)}},[a,e]),L=(o??1)<=io,O=(o??1)>=x,B=(o??1)>=x;return{playbackSpeed:o??1,updatePlaybackSpeed:g,handleMouseMove:b,onDecrement:C,onIncrement:I,isAtMin:L,isAtMax:O,isLocked:B,speedButtons:h,autoSpeedUp:a,isAutoSpeedUpLoading:y,toggleAutoSpeedUp:k,isPremium:n,maxSpeed:x,minSpeed:io}};r();i();var jn=D(Wo()),Wt=D($());r();i();var _t=D($()),Kn=D(mi());r();i();var Wn=D($());r();i();var Nn=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("circle",{cx:"8",cy:"8",r:"8",fill:"#1E1E1E"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3.5C6.89543 3.5 6 4.39543 6 5.5V6.5H10V5.5C10 4.39543 9.10457 3.5 8 3.5ZM11 6.5V5.5C11 3.84315 9.65685 2.5 8 2.5C6.34315 2.5 5 3.84315 5 5.5V6.5C4.44772 6.5 4 6.94772 4 7.5V11.5C4 12.0523 4.44772 12.5 5 12.5H11C11.5523 12.5 12 12.0523 12 11.5V7.5C12 6.94772 11.5523 6.5 11 6.5Z",fill:"#AFB9C8"}));r();i();var Dn=c.div`
  padding: 6px 0;
`,Fn=c.div`
  -webkit-user-drag: none;
  user-drag: none;

  position: relative;
  height: 286px;
  width: 48px;

  cursor: pointer;
  border-radius: 8px;

  gap: 1px;
`,$n=c.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  position: relative;
`,On=c.div`
  background: ${({isLocked:e})=>e?l["bg-sec-0-80"]:l["bg-sec-0-90"]};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  padding: 4px 8px;

  ${({isFirst:e})=>e?"border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;":""}

  ${({isLast:e})=>e?"border-top-left-radius: 8px; border-top-right-radius: 8px;":""}
`,Bn=c.div`
  height: 2px;
  cursor: pointer;
  background-color: ${l["brdr-sec-20-60"]};
  border-radius: 9999px;
  transition: background-color 0.2s ease;

  width: ${({stepWidth:e})=>e}px;

  ${({isLocked:e})=>e?`
        opacity: 0.75;
      `:`
        &:hover {
          background-color: ${l["icn-txt-prim-electric"]};
        }
      `}
`,Mn=c.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,_n=c.div`
  position: absolute;
  bottom: 1px;
  margin: 0 2px;
  box-sizing: border-box;

  width: 44px;
  padding: 3px;
  border-radius: 8px;

  background: ${({isIncreased:e})=>e?"linear-gradient(315deg, #EA6AFF 0%, #6B78FC 100%)":l["bg-prim-cta"]};
`,Un=c.div`
  padding-top: 4px;
  padding-bottom: 4px;

  border-radius: 12px;
  cursor: grab;

  background-color: ${l["icn-txt-white"]};
`;var ro={HIDDEN:0,NORMAL:24,PROMINENT:36},Rs=e=>{let n=e%2===1,o=n&&(e-1)/2%2===1;return n?o?ro.PROMINENT:ro.NORMAL:ro.HIDDEN},zn=Wn.default.memo(function({steps:n,isLocked:o,isFirst:s,isLast:a,onLockedInteraction:d}){return t(On,{onPointerDown:()=>{o&&d()},isFirst:s,isLast:a,isLocked:o},n.map((y,f)=>{let p=Rs(f);return a&&f===n.length-1?null:t(Bn,{isLocked:o,stepWidth:p,key:`speed-picker-step-${y}`})}),o&&t(Mn,null,t(Nn,null)))});var As=(e,n)=>{let o=(n-e)/10;return Array.from({length:8},(s,a)=>(0,Kn.default)(e+o*(a+1),2))},Gn=_t.default.memo(function({onLockedInteraction:n,sectionRanges:o,isPremium:s}){let a=(0,_t.useMemo)(()=>o.map(d=>As(d.min,d.max)),[o]);return t($n,null,a.map((d,y)=>t(zn,{key:`speed-picker-section-${y}`,steps:d,isFirst:y===0,isLast:y===a.length-1,isLocked:!s&&y>=2,onLockedInteraction:n})))});r();i();var Ut=D(Wo()),G=D($());var Ns=e=>{let n=me.length,o=100/n,s=(0,Ut.default)(Math.floor(e/o),0,n-1);if(s===n-1){let{min:f,max:p}=me[s];return f+(e-o*(n-1))/o*(p-f)}let{min:a,max:d}=me[s],y=e%o;return a+y/o*(d-a)},Ds=166,Yn=({sliderRef:e,maxPlaybackSpeed:n,minPlaybackSpeed:o,playbackSpeed:s,onMouseMove:a,onPlaybackSpeedChange:d})=>{let[y,f]=(0,G.useState)(!1),[p,x]=(0,G.useState)(!1),h=(0,G.useRef)(!1),S=(0,G.useRef)(0),g=(0,G.useRef)(s),b=(0,G.useRef)(null),C=(0,G.useCallback)(V=>{if(b.current){let W=b.current.height,te=V-b.current.top,q=(0,Ut.default)((W-te)/W*100,0,100),ce=Ns(q),le=Math.round(ce*20)/20,de=(0,Ut.default)(le,o,n);h.current?a(de):d(de)}},[d,a,o,n]),I=(0,G.useCallback)(V=>{h.current=!0,f(!0),C(V)},[C]),k=(0,G.useCallback)(V=>{h.current=!1,f(!1),C(V.clientY)},[]),L=(0,G.useCallback)(V=>{V.preventDefault(),V.stopPropagation(),I(V.clientY),e.current?.setPointerCapture(V.pointerId)},[I]),O=(0,G.useCallback)(V=>{k(V),e.current?.releasePointerCapture(V.pointerId)},[k]),B=(0,G.useCallback)(V=>{h.current&&C(V)},[C]),F=(0,G.useCallback)(V=>{h.current&&(V.preventDefault(),B(V.touches[0].clientY))},[B]);return(0,G.useLayoutEffect)(()=>{let V=setTimeout(()=>{e.current&&(b.current=e.current.getBoundingClientRect())},350);return()=>clearTimeout(V)},[]),(0,G.useEffect)(()=>{let V=W=>{B(W.clientY)};return e.current?.addEventListener("pointermove",V,{passive:!0}),e.current?.addEventListener("pointerup",k,{passive:!0}),()=>{e.current?.removeEventListener("pointermove",V),e.current?.removeEventListener("pointerup",k)}},[B,k,F]),(0,G.useEffect)(()=>{if(g.current===s)return;if(h.current){x(!1),g.current=s,S.current=performance.now?.()??Date.now();return}let V=performance.now?.()??Date.now(),te=V-(S.current||0)>Ds;x(te),g.current=s,S.current=V},[s]),{handlePointerDown:L,handlePointerUp:O,isDragging:y,shouldDelay:p}};var me=[{min:.4,max:1},{min:1,max:1.5},{min:1.5,max:3},{min:3,max:4.5}],Fs=({playbackSpeed:e,maxPlaybackSpeed:n,minPlaybackSpeed:o,onPlaybackSpeedChange:s,onMouseMove:a,isIncreased:d,isPremium:y,onLockedInteraction:f=()=>{}})=>{let p=(0,Wt.useRef)(null),x=(0,Wt.useMemo)(()=>(0,jn.default)((()=>{let I=me.find(V=>e>=V.min&&e<=V.max);if(!I)return e<=me[0].min?0:100;let{min:k,max:L}=I,O=me.indexOf(I),B=100/me.length*O,F=(e-k)/(L-k)*(100/me.length);return B+F})(),6,100),[e]),{handlePointerDown:h,handlePointerUp:S,isDragging:g,shouldDelay:b}=Yn({maxPlaybackSpeed:n,minPlaybackSpeed:o,onMouseMove:a,onPlaybackSpeedChange:s,playbackSpeed:e,sliderRef:p});return t(Dn,null,t(Fn,{ref:p,role:"slider","aria-label":"Playback Speed","aria-valuenow":e,"aria-valuemin":me[0].min,"aria-valuemax":me[me.length-1].max,tabIndex:0,onPointerDown:h,onPointerUp:S},t(Gn,{onLockedInteraction:f,sectionRanges:me,isPremium:y}),t(_n,{isIncreased:d,style:{height:`${x}%`,transitionProperty:g?"none":"height",transitionDuration:g?"0ms":"600ms",transitionTimingFunction:"cubic-bezier(0.14, 1, 0.34, 1)",transitionDelay:g?"0ms":b?"166ms":"0ms"}},t(Un,null))))},Zn=Fs;r();i();var $s=c.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${l["bg-prim-w-100"]};
`,Os=c.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;
`,Bs=c.div`
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 12px 0;
  width: calc(100% - 24px);
  max-width: 280px;
  align-self: center;
`,Ms=c.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  gap: 32px;
  max-width: 184px;
  justify-content: center;
  flex: 1;
  min-width: 0;
`,_s=c.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  gap: 4px;
`,Us=c.div`
  ${N["heading-4"]}
  color: ${l["icn-txt-prim"]};
  text-align: center;
`,Ws=c.div`
  ${N["subheading-7"]}
  color: ${l["icn-txt-sec"]};
  text-align: center;
`,zs=c.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
`,Ks=c.span`
  ${N["heading-2"]}
  color: ${l["icn-txt-prim"]};
  text-align: center;
  min-width: 60px;
`,Gs=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${l["bg-sec-0-90"]};
  color: ${l["icn-txt-prim"]};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.4:1};
  transition: background 0.2s ease;
  padding: 0;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: ${l["sf-prim-hov-w-90"]};
  }

  &:active:not(:disabled) {
    background: ${l["sf-prim-pres-w-90"]};
  }
`,Ys=c.div`
  display: grid;
  grid-template-columns: repeat(${({columnCount:e})=>e}, 1fr);
  gap: 8px;
  width: 100%;
  padding-top: 10px;
`,js=c.button`
  ${N["subheading-6"]}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 9999px;
  border: none;
  background: ${({isActive:e})=>e?l["bg-prim-cta"]:l["bg-sec-0-90"]};
  color: ${({isActive:e})=>e?l["icn-txt-white"]:l["icn-txt-prim"]};
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 0;

  &:hover {
    background: ${({isActive:e})=>e?l["bg-prim-cta"]:l["sf-prim-hov-w-90"]};
  }
`,ae={Container:$s,ScrollableContent:Os,FixedWidthContainer:Bs,ControlPanelContainer:Ms,Header:_s,SpeedTitle:Us,DurationText:Ws,SpeedControls:zs,SpeedValue:Ks,SpeedButton:Gs,SpeedButtonsGrid:Ys,PresetButton:js};r();i();function qn(e){return e<1?"Slow":e<1.5?"Normal":e<3?"Fast":"Speed Reader"}function so(e){return`${parseFloat(e.toFixed(2))}x`}function Jn(e){if(e<=0)return"";let n=Math.ceil(e/60),o=Math.floor(n/60),s=n%60;return o>0?s>=30?`${o+1} hour`:`${o} hour`:`${Math.max(1,n)} min`}function Qn(){let{navigate:e,playbackDuration:n}=P(),{playbackSpeed:o,updatePlaybackSpeed:s,handleMouseMove:a,onDecrement:d,onIncrement:y,isAtMin:f,isAtMax:p,isLocked:x,speedButtons:h,autoSpeedUp:S,toggleAutoSpeedUp:g,isPremium:b,maxSpeed:C,minSpeed:I}=An(),k=(0,Xn.useMemo)(()=>n===null?null:Jn(n),[n]),L=()=>{e("../")};return t(ae.Container,null,t(oe,{title:"Speed",onBack:L,showProfile:!1}),t(ae.ScrollableContent,null,t(Z,null,t(ae.FixedWidthContainer,null,t(ae.ControlPanelContainer,null,t(ae.Header,null,t(ae.SpeedTitle,null,qn(o)),t(ae.DurationText,null,k?`Duration: ~${k}`:"​")),t(ae.SpeedControls,null,t(ae.SpeedButton,{disabled:f,onClick:d,"aria-label":"Decrease speed"},t(No,null)),t(ae.SpeedValue,null,so(o)),t(ae.SpeedButton,{disabled:p,onClick:y,"aria-label":"Increase speed"},t(Do,null))),t(ae.SpeedButtonsGrid,{columnCount:3},h.map(O=>t(ae.PresetButton,{key:O,isActive:parseFloat(o.toFixed(2))===O,onClick:()=>s(O)},so(O))))),t(Zn,{onMouseMove:a,onPlaybackSpeedChange:s,playbackSpeed:o,maxPlaybackSpeed:C,minPlaybackSpeed:I,isIncreased:S&&!x,isPremium:b}))),t(Z,null,t(ae.FixedWidthContainer,{onClick:g},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Increase automatically"),t(T.SettingsItemDescription,null,"Speed up as you go every 500 words")),t(ye,{checked:S,onChange:g,style:{width:"44px",margin:"0 2px"}})))))}r();i();r();i();r();i();r();i();r();i();r();i();var M=D($());r();i();r();i();var Fe=new Map;function ao(e){return Fe.get(e)}function Hn(e,n){Fe.set(e,n)}function ei(e,n,o){let s=Fe.get(e);if(!s)return;let d=(Array.isArray(n)?n:[n]).reduce((y,f)=>({...y,[f]:{...s.orchestrationConfig?.[f],status:o}}),{});Fe.set(e,{...s,orchestrationConfig:{...s.orchestrationConfig,...d}})}function ti(e,n,o){let s=Fe.get(e);s&&Fe.set(e,{...s,playButtonValues:{...s.playButtonValues,[n]:o}})}function oi(e){for(let[n,o]of Fe)Xe(n)&&Fe.set(n,{...o,autoplayEnabled:e})}r();i();r();i();r();i();var ct={CONFIG:"config",USER:"user"};async function Zs(e,n,o){let s={};for(let a of n.features)try{let d=await o("/orchestration/get-play-button-value",{domain:e,configFeature:n.configFeature,playButtonKey:n.key,featureKey:a.key});s[a.key]=d}catch{s[a.key]=null}return s}async function qs(e){try{return(await e("/user-settings/get-autoplay-flag")).value??!1}catch{return!1}}async function lo(e,n,o){let s=await o("/orchestration/get-layer-config",{layer:ct.USER,domain:e}),a=null;if(n)try{a=await o("/orchestration/resolve-config-for-url",{url:n})}catch{a=null}let d=Je(e),y={},f=null;d&&(y=await Zs(e,d,o)),Xe(e)&&(f=await qs(o));let p={settingsLoaded:!0,orchestrationConfig:s,configLayerConfig:a,playButtonValues:y,autoplayEnabled:f};return Hn(e,p),p}r();i();function Ee(e,n){if(!e)return!0;let o=e[n];return o?.status?o.status==="active":!0}function dt(e,n){if(!e)return!1;let o=e[n];return o?(o.lifecycles?.length??0)>0:!1}async function ni(e,n,o=!1){try{await n("/sidepanel/broadcast-feature-change",o?{broadcastToAll:!0}:{domain:e})}catch{}}async function zt(e,n,o,s,a){let d=Array.isArray(n)?n:[n],y=Ee(o,d[0]),f=a??(y?"inactive":"active");ei(e,d,f);let p=await s("/orchestration/get-all-config-for-layer",{layer:ct.USER}),x=d.reduce((h,S)=>(h[S]={...o?.[S],...p[e]?.[S],status:f},h),{});return await s("/orchestration/set-layer-config",{layer:ct.USER,config:{...p[e],...x},domain:e}),ni(e,s),f}async function co(e,n,o,s){let a=Je(e);if(!a)return o;let d=!o;return ti(e,n,d),s("/orchestration/set-play-button-value",{domain:e,configFeature:a.configFeature,playButtonKey:a.key,featureKey:n,value:d}).catch(()=>{}),d}async function po(e,n,o){let s=!n;return oi(s),await o("/user-settings/set-autoplay-flag",{value:s}),ni(e,o),s}r();i();var uo=ho({events:["orchestrationChanged"]});var Js=ut("WebsiteFeatures","green");function Xs(){let e=P(),{fetch:n,tabUrl:o,favIconUrl:s}=e,[a,d]=(0,M.useState)(null),[y,f]=(0,M.useState)(s),[p,x]=(0,M.useState)(!1),[h,S]=(0,M.useState)(null),[g,b]=(0,M.useState)(null),[C,I]=(0,M.useState)({}),[k,L]=(0,M.useState)(null),[O,B]=(0,M.useState)(!0),[F,V]=(0,M.useState)(!1),W=(0,M.useRef)(null);(0,M.useEffect)(()=>{(async()=>{try{let z=(await n("/feature-flags/get"))?.features?.sidePlayer;V(z==="enabled")}catch{V(!1)}})()},[n]),(0,M.useEffect)(()=>{d(o?wt(o):null)},[o]),(0,M.useEffect)(()=>{f(s)},[s]);let te=(0,M.useCallback)(A=>{x(A.settingsLoaded),S(A.orchestrationConfig),b(A.configLayerConfig),I(A.playButtonValues),L(A.autoplayEnabled)},[]),q=(0,M.useCallback)(async(A,j)=>{if(W.current!==A){W.current=A;try{let z=await lo(A,j,n);W.current===A&&(te(z),B(!1))}catch{B(!1)}finally{W.current===A&&(W.current=null)}}},[te,n]);(0,M.useEffect)(()=>{if(!a){x(!1),S(null),b(null),I({}),L(null),B(!1);return}let A=ao(a);A?(te(A),B(!1),q(a,o??void 0)):(B(!0),q(a,o??void 0))},[a,o,te,q]),(0,M.useEffect)(()=>uo.on("orchestrationChanged",({domain:A})=>{A===a&&a&&q(a,o??void 0)}),[a,o,q]);let ce=(0,M.useCallback)(async A=>{if(!a)return;let j=await zt(a,A,h,n);S(z=>({...z,[A]:{...z?.[A],status:j}})),q(a,o??void 0)},[a,o,h,q,n]),le=(0,M.useCallback)(async A=>{if(!a)return;let j=C[A]??!0,z=await co(a,A,j,n);I($e=>({...$e,[A]:z}))},[a,C,n]),de=(0,M.useCallback)(async()=>{if(!a)return;let j=await po(a,k??!1,n);L(j)},[a,k,n]),E=(0,M.useCallback)(async()=>{if(!a)return;let j=Ee(h,"hover-player")||Ee(h,"paragraph-player")?"inactive":"active";try{await zt(a,["hover-player","paragraph-player"],h,n,j)}catch(z){Js.error("Failed to toggle paragraph play features",z)}S(z=>({...z,"hover-player":{...z?.["hover-player"],status:j},"paragraph-player":{...z?.["paragraph-player"],status:j}})),q(a,o??void 0)},[a,o,h,q,n]),Y=(0,M.useMemo)(()=>{if(!p||!a)return[];let A=Je(a),j=Xe(a),z=a==="docs.google.com"||a.endsWith(".docs.google.com"),$e=Ee(h,"embedded-player"),Oe=Ee(h,"hover-player"),U=F?"side-player":"pill-player",ge=Ee(h,U),fe=!dt(g,"embedded-player"),Le=!dt(g,"hover-player")&&!dt(g,"paragraph-player"),w=[];if(A)for(let R of A.features){let J=C[R.key];w.push({key:R.key,title:R.title,description:R.description,tooltipImage:R.img&&!R.video?`playButtons/${R.img}.png`:void 0,tooltipVideo:R.video,enabled:J??!0,disabled:!1,onToggle:()=>le(R.key)})}if(j&&w.push({key:"autoplayAnswers",title:"Autoplay Answers",description:"Listen to the answer automatically as it's generated.",tooltipVideo:"videos/ai_chat_autoplay.mp4",enabled:k??!1,disabled:!1,onToggle:()=>de()}),w.push({key:"pillPlayer",title:F?"Side Player":"Pill Player",description:"Main player for playback, voices, and settings.",tooltipVideo:"videos/side_player.mp4",enabled:ge,disabled:!1,onToggle:()=>ce(U)}),w.push({key:"embeddedPlayer",title:"Listening Bar",description:"Built into the text you're reading.",tooltipVideo:"videos/embedded_player.mp4",enabled:fe?!1:$e,disabled:fe,onToggle:()=>ce("embedded-player")}),!z){let R=Ee(h,"paragraph-player");w.push({key:"paragraphPlay",title:"Paragraph Play",description:"Hover a paragraph, click to listen from it.",tooltipVideo:"videos/hover_to_listen.mp4",enabled:Le?!1:Oe||R,disabled:Le,onToggle:()=>E()})}return w},[p,a,h,g,C,k,ce,E,le,de,F]);return{domain:a,favIconUrl:y,features:Y,isLoading:O&&Y.length===0}}r();i();r();i();r();i();r();i();var tt=D($());function ii(){let{themePreference:e,applyTheme:n}=P(),[o,s]=(0,tt.useState)(e);(0,tt.useEffect)(()=>{s(e)},[e]);let a=(0,tt.useCallback)(d=>{s(d),n(d)},[n]);return{preference:o,handleThemeChange:a}}r();i();var ri=[{value:"auto",icon:Oo,label:"Auto"},{value:"page-based",icon:Bo,label:"Page-based"},{value:"light",icon:Fo,label:"Light"},{value:"dark",icon:$o,label:"Dark"}];r();i();var Qs=c.div`
  background: ${l["bg-sec-0-90"]};
  border-radius: 6px;
  padding: 2px;
  display: flex;
  gap: 4px;
`,Hs=c.button`
  background: ${({isSelected:e})=>e?l["bg-prim-w-70"]:"transparent"};
  border-radius: 5px;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: ${({isSelected:e})=>e?l["icn-txt-prim"]:l["icn-txt-sec"]};
  transition: background 0.15s ease, color 0.15s ease;

  ${({isSelected:e})=>!e&&`
    &:hover {
      background: ${l["sf-sec-hov-0-90"]};
      color: ${l["icn-txt-prim"]};
    }
  `}
`,mo={ButtonGroup:Qs,ButtonOption:Hs};function ea(){let{preference:e,handleThemeChange:n}=ii();return t(mo.ButtonGroup,null,ri.map(({value:o,icon:s,label:a})=>t(mo.ButtonOption,{key:o,isSelected:e===o,onClick:()=>n(o),title:a},t(s,null))))}r();i();var ai=D($());function ta({feature:e}){let{handleToggle:n}=At(e.onToggle,e.disabled),o=(0,ai.useMemo)(()=>{if(e.tooltipImage)return{imageSrc:e.tooltipImage};if(e.tooltipVideo)return{videoSrc:e.tooltipVideo}},[e]);return t(T.SettingsItem,{disabled:e.disabled,onClick:n},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,e.title,o&&t(T.InfoIconWrapper,null,t(Ue,{...o}))),t(T.SettingsItemDescription,null,e.description)),t(ye,{checked:e.disabled?!1:e.enabled,onChange:()=>n(),disabled:e.disabled}))}r();i();r();i();var oa=c.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100px;
  height: 5px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${l["bg-prim-cta"]} 0%,
    ${l["bg-prim-cta"]} ${({fillPercentage:e})=>e}%,
    ${l["bg-tert-20-60"]} ${({fillPercentage:e})=>e}%,
    ${l["bg-tert-20-60"]} 100%
  );
  border-radius: 16px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    width: 10px;
    background-color: ${l["bg-prim-cta"]};
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 10px;
    width: 10px;
    background-color: ${l["bg-prim-cta"]};
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`,na=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`,ia=c.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Ce={FontStrengthSlider:oa,ShortcutKeys:We,ShortcutKey:Re,ShortcutKeyNotSet:ze,EditLinkIcon:na,ShortcutsSectionHeader:ia};r();i();var go=D($());r();i();r();i();r();i();r();i();var _h=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  width: calc(100% - 124px);
`,Uh=c.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  background: ${l["bg-sec-0-80"]};
`,Wh=c.span`
  ${N["heading-6"]}
  color: ${l["icn-txt-prim"]};
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`,zh=c.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`,Kh=c.span`
  ${N["heading-6"]}
  color: ${l["icn-txt-prim"]};
`,Gh=c.sup`
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
  color: ${l["icn-txt-tert"]};
  vertical-align: super;
  align-self: flex-start;
`;r();i();r();i();r();i();r();i();var xe=D($());r();i();var Ye=D($());var li=()=>{let{fetch:e}=P(),[n,o]=(0,Ye.useState)(!1),[s,a]=(0,Ye.useState)(!1),[d,y]=(0,Ye.useState)(),[f,p]=(0,Ye.useState)(!0);return(0,Ye.useEffect)(()=>{(async()=>{try{let b=await e("/user-settings/get");o(b.dyslexicFont??!1);let C=b.fontSize??1;a(C!==1),y(Math.round(C*100))}catch(b){console.error("Failed to fetch accessibility settings:",b)}finally{p(!1)}})()},[e]),{dyslexicFont:n,fontSizeEnabled:s,fontStrength:d,isLoading:f,setDyslexicFont:async g=>{let b=n;o(g);try{await e("/user-settings/set-dyslexic-font",{dyslexicFont:g})}catch(C){console.error("Failed to set dyslexic font:",C),o(b)}},setFontSizeEnabled:async g=>{let b=s;if(a(g),!g){y(100);try{await e("/user-settings/set-font-size",{fontSize:1})}catch(C){console.error("Failed to reset font size:",C),a(b)}}},setFontStrength:async g=>{y(g);try{await e("/user-settings/set-font-size",{fontSize:g/100})}catch(b){console.error("Failed to set font size:",b)}}}};r();i();var ci=[{key:"play-pause-new",label:"Play/Pause"},{key:"open-screenshot-mode",label:"Screenshot and Listen"},{key:"save-to-library",label:"Save To Library"},{key:"voice-typing",label:"Voice Typing"}],di=100;function pi(){let{dyslexicFont:e,fontSizeEnabled:n,fontStrength:o,setDyslexicFont:s,setFontSizeEnabled:a,setFontStrength:d}=li(),[y,f]=(0,xe.useState)(o),p=o!==void 0;(0,xe.useEffect)(()=>{p&&f(o)},[p,o]);let x=(0,xe.useRef)(),h=(0,xe.useCallback)(C=>{clearTimeout(x.current),x.current=setTimeout(()=>d(C),400)},[d]),S=(0,xe.useCallback)(()=>{s(!e)},[e,s]),g=(0,xe.useCallback)(()=>{let C=!n;a(C),C||f(di)},[n,a]),b=(0,xe.useCallback)(C=>{let I=parseInt(C.target.value,10);f(I),h(I)},[h]);return{dyslexicFont:e,fontSizeEnabled:n,localFontStrength:y,handleDyslexicFontToggle:S,handleFontSizeToggle:g,handleFontStrengthChange:b}}function aa(){let{dyslexicFont:e,fontSizeEnabled:n,localFontStrength:o,handleDyslexicFontToggle:s,handleFontSizeToggle:a,handleFontStrengthChange:d}=pi();return t(u,null,t(T.SettingsItem,{onClick:s},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Dyslexic Font"),t(T.SettingsItemDescription,null,"Turns all websites font to Open Dyslexic.")),t(ye,{checked:e,onChange:s})),t(T.SettingsItem,{onClick:a,separatorType:n?"none":"default"},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Font Size"),t(T.SettingsItemDescription,null,"Customize the size of the text on webpages.")),t(ye,{checked:n,onChange:a})),n&&t(T.SettingsItem,{separatorType:"none"},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,"Font Strength")),t(Ce.FontStrengthSlider,{type:"range",min:"100",max:"200",value:o,fillPercentage:(o??100)-100,onChange:d})))}r();i();function la({variant:e}){let{shortcuts:n}=Me(),{handleEditShortcuts:o}=Qe();return t(Z,{variant:e,title:t(Ce.ShortcutsSectionHeader,null,t("span",null,"Shortcuts"),t(He,{onClick:o,font:"subheading-6"},"Edit",t(Ce.EditLinkIcon,null,t(ke,null))))},ci.map(({key:s,label:a})=>t(T.SettingsItem,{key:s},t(T.SettingsItemContent,null,t(T.SettingsItemTitle,null,a)),t(Ce.ShortcutKeys,null,n[s]?.shortcut?n[s].shortcut.split("+").map((d,y)=>t(Ce.ShortcutKey,{key:y},d)):t(Ce.ShortcutKeyNotSet,null,"Not Set")))))}export{ba as a,Ia as b,P as c,oe as d,Xs as e,T as f,Z as g,ie as h,ea as i,ta as j,ma as k,ga as l,tn as m,on as n,dn as o,gn as p,aa as q,la as r,En as s,Qn as t};
//# sourceMappingURL=chunk-EWVOKJA2.js.map
