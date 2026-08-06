(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{c as re}from"./chunk-6TIQUZ7N.js";import{c as ne}from"./chunk-U7E5TNAI.js";import{d as te}from"./chunk-HV2NOGAN.js";import{a as ee}from"./chunk-BMN72JVI.js";import{c as oe}from"./chunk-OL6C3BKH.js";import{c as J}from"./chunk-KPAXU6SY.js";import{b as Q}from"./chunk-ESYC46NE.js";import{c as W}from"./chunk-2MJTQY6T.js";import{Lc as j,Mf as G,N as B,Pg as ce,Q as F,Qd as Y,Qg as le,Rc as h,Rg as d,Sg as E,Tb as H,Tg as me,Ub as K,Ug as de,Vb as V,Vf as z,_b as f,_d as U,_e as $,af as q,b as O,dc as g,gd as X,ib as N,k as D,kg as ie,lg as w,mb as k,mg as b,ng as ae,og as C,pg as S,sg as se}from"./chunk-324T2OUF.js";import{k as M,n as Z}from"./chunk-JJ7NA4NT.js";import{n as R}from"./chunk-KJ3NFIHV.js";import"./chunk-H3LCZSHS.js";import{M as A}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{f as r,g as i,n as a}from"./chunk-CAO5DZGK.js";a();i();a();i();var Ce=[oe,J,Q,D,te,Y,X,Z,U,ne,$,M,re];function fe(){for(let e of Ce)e()}a();i();a();i();a();i();var pe=e=>{let t=new Uint8Array(e),o="";for(let n=0;n<t.length;n+=32768)o+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(o)};var Se="speechify:pdf-redirect-cache:",v="speechify:pdf-redirect-cache-index",ve=300*1e3,xe=e=>`${Se}${e}`,ue=e=>Date.now()-e>ve;async function Pe(e){let t=Object.entries(e).filter(([,o])=>ue(o)).map(([o])=>o);return t.length&&await r.storage.local.remove(t),Object.fromEntries(Object.entries(e).filter(([,o])=>!ue(o)))}async function he(e,t){let o=xe(e),n={data:pe(t),ts:Date.now()},s=await r.storage.local.get(v),c=await Pe(s[v]??{});c[o]=n.ts,await r.storage.local.set({[o]:n,[v]:c})}var Ee="speechify-pdf-launcher",x=()=>location.pathname.toLowerCase().endsWith(".pdf")||K()||document.contentType==="application/pdf"||!!(document.body&&le(document)),Le=()=>{let e=new URL(location.href);return e.hash="",e.toString()},Ie=async e=>{let t=await fetch(e,{credentials:"include",cache:"force-cache"});t.ok&&await he(e,await t.arrayBuffer())};function P(){if(!x()||document.getElementById(Ee))return;let e=Le(),t=document.createElement("div");t.id=Ee;let o=t.attachShadow({mode:"open"});o.innerHTML=`
    <style>
      .wrap {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2147483647;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .bar {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 10px 12px 10px 14px;
        border-radius: 9999px;
        background: #484848;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 20px 0px;
        color: #fff;
        font: 500 16px system-ui, -apple-system, sans-serif;
        cursor: pointer;
        transition: opacity 0.15s ease;
      }
      .bar:hover { background: ${R["bg-tert-10-70"]}; }
      .bar.loading { cursor: default; opacity: 0.75; }
      .play {
        width: 20px;
        height: 20px;
        flex: 0 0 auto;
        display: block;
      }
      .bar.loading .play { animation: speechify-pdf-spin 1s linear infinite; }
      @keyframes speechify-pdf-spin {
        to { transform: rotate(360deg); }
      }
      .close {
        all: unset;
        width: 20px;
        height: 20px;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.1s ease-in-out;
      }
      .close svg { display: block; width: 20px; height: 20px; }
      .wrap:hover .close { opacity: 1; pointer-events: auto; }
    </style>
    <div class="wrap">
      <div class="bar" role="button" aria-label="Listen to this PDF with Speechify">
        <span class="label">Listen</span>
        <svg class="play" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6.85417 10.9583L10.75 8.47917C10.9306 8.36333 11.0208 8.20243 11.0208 7.99646C11.0208 7.79049 10.9306 7.63194 10.75 7.52083L6.85417 5.04167C6.65972 4.93056 6.46875 4.92729 6.28125 5.03188C6.09375 5.13646 6 5.29944 6 5.52083V10.4792C6 10.7006 6.09375 10.8635 6.28125 10.9681C6.46875 11.0727 6.65972 11.0694 6.85417 10.9583ZM8.00583 16C6.90472 16 5.86806 15.7917 4.89583 15.375C3.92361 14.9583 3.07292 14.3854 2.34375 13.6562C1.61458 12.9271 1.04167 12.0767 0.625 11.105C0.208333 10.1333 0 9.09514 0 7.99042C0 6.88569 0.208333 5.85069 0.625 4.88542C1.04167 3.92014 1.61458 3.07292 2.34375 2.34375C3.07292 1.61458 3.92333 1.04167 4.895 0.625C5.86667 0.208333 6.90486 0 8.00958 0C9.11431 0 10.1493 0.208333 11.1146 0.625C12.0799 1.04167 12.9271 1.61458 13.6562 2.34375C14.3854 3.07292 14.9583 3.92167 15.375 4.89C15.7917 5.85847 16 6.89319 16 7.99417C16 9.09528 15.7917 10.1319 15.375 11.1042C14.9583 12.0764 14.3854 12.9271 13.6562 13.6562C12.9271 14.3854 12.0783 14.9583 11.11 15.375C10.1415 15.7917 9.10681 16 8.00583 16ZM8 14.5C9.80556 14.5 11.3403 13.8681 12.6042 12.6042C13.8681 11.3403 14.5 9.80556 14.5 8C14.5 6.19444 13.8681 4.65972 12.6042 3.39583C11.3403 2.13194 9.80556 1.5 8 1.5C6.19444 1.5 4.65972 2.13194 3.39583 3.39583C2.13194 4.65972 1.5 6.19444 1.5 8C1.5 9.80556 2.13194 11.3403 3.39583 12.6042C4.65972 13.8681 6.19444 14.5 8 14.5Z" fill="#F1F1F1" />
        </svg>
      </div>
      <button class="close" type="button" aria-label="Hide the Speechify Listen button">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#484848" />
          <path d="M12.3884 6.38843C12.6813 6.09555 13.156 6.09556 13.4489 6.38843C13.7418 6.68132 13.7418 7.15608 13.4489 7.44897L10.9792 9.9187L13.4489 12.3884C13.7418 12.6813 13.7418 13.1561 13.4489 13.449C13.156 13.7418 12.6812 13.7418 12.3884 13.449L9.91864 10.9792L7.44891 13.449C7.15602 13.7419 6.68126 13.7419 6.38837 13.449C6.09548 13.1561 6.09547 12.6813 6.38837 12.3884L8.85809 9.9187L6.38837 7.44897C6.09551 7.15609 6.09551 6.68131 6.38837 6.38843C6.68125 6.09554 7.15602 6.09556 7.44891 6.38843L9.91864 8.85815L12.3884 6.38843Z" fill="#F1F1F1" />
        </svg>
      </button>
    </div>
  `;let n=o.querySelector(".bar"),s=o.querySelector(".close"),c=()=>{if(!n||n.classList.contains("loading"))return;let l;try{l=r.runtime.getURL("pdf-viewer/pdf-viewer.html")}catch(be){H.error("Failed to get PDF viewer URL",{error:be});let _=n.querySelector(".label");_&&(_.textContent="Refresh the page to continue");return}n.classList.add("loading");let m=n.querySelector(".label");m&&(m.textContent="Preparing…"),Ie(e).catch(()=>{}).finally(()=>{window.location.href=`${l}?file=${encodeURIComponent(e)}&autoplay=1`})};n?.addEventListener("click",c),s?.addEventListener("click",l=>{l.stopPropagation(),t.remove()}),(document.documentElement||document).appendChild(t)}a();i();var ye=2e3;async function ge(){let e=W();if(ee()){await f.forceManageInitPillPlayer(!e),e||await g(ye);return}e||(await f.toggleFeatureOnDomain("pill-player",!0),await g(ye))}(async()=>!x()||!await V()||(P(),document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>P(),{once:!0})))();r.runtime.onMessage.addListener(e=>{e.type==="SHOW_MEETING_NOTES_TOAST"&&e.url&&import("./MeetingNotesReadyToast-QUHBAVDV.js").then(({showMeetingNotesReadyToast:t})=>{t(e.url)})});async function _e(){fe(),De(),Oe(),we();let[e,t]=await Promise.all([z(),ie()]),o=G();Be().catch(()=>{}),w.setCleanupFn(()=>{e(),t(),o()})}var L,Ae=[{domain:"wattpad.com",check:(e,t)=>{let o=parseInt(e.match(/[0-9]+/)?.[0]??""),n=parseInt(t.match(/[0-9]+/)?.[0]??"");return o===n}},{domain:"mail.google.com",check:(e,t)=>{let o=new URL(e),s=new URL(t).hash.split(/\/|\?/)[1]??"",c=o.hash.split(/\/|\?/)[1]??"";return!!(c.endsWith("=new")||c===s)}},{domain:"x.com",check:(e,t)=>t.includes("/compose/post")||e.includes("/compose/post")},{domain:"linear.app",check:(e,t)=>{let o=s=>{try{return new URL(s).pathname.split("/").slice(0,4).join("/")}catch{return null}},n=o(e);return n!==null&&n===o(t)}}];N(async(e,t)=>{e===t||(we(),ce())||d(e,t,"chat.deepseek.com")||d(e,t,"www.perplexity.ai")||d(e,t,"www.perplexity.ai","/search/new")||d(e,t,"chat.openai.com")||d(e,t,"chatgpt.com")||((E(e,t,"chat.openai.com")||E(e,t,"chatgpt.com")||E(e,t,"chat.deepseek.com"))&&w.setIsResetFromRoot(!0),me(e,t))||Ae.some(n=>window.location.href.includes(n.domain)&&n.check(e??"",t??""))||(L&&(clearTimeout(L),cancelAnimationFrame(L)),ae())});var I=!1;function Oe(){S("/browser-action",async()=>{I||(I=!0,await q()||await ge(),h("extension_browser_action_clicked",{}),C.getIsHidden()?C.showExtension():(await A("browser-action",{isFromExtensionIconClick:!0}),await f.toggleFeatureOnDomain("side-player",!0),(window.getSelection()?.toString()??"").length>0&&j.play()),I=!1)}),S("/health-check",async(e,t)=>{t.body.healthCheck=!0})}async function De(){await k();let e=document.createElement("div");e.style.fontFamily="system-ui",e.style.visibility="hidden",e.innerHTML="asd",document.body.appendChild(e),setTimeout(()=>e?.remove(),0)}var T="adobe_extension_detected",y="adobe_extension_last_check",Re=1440*60*1e3;async function Be(){try{let[e,t]=await Promise.all([F(),se("ceAdobeExtensionProbe")]);if(!B(e)||!t)return;let o=await r.storage.local.get([y,T]),n=o[y];if(n&&Date.now()-n<Re)return;let s=await new Promise(l=>{let m=new Image;m.onload=()=>l(!0),m.onerror=()=>l(!1),m.src=t}),c=o[T];if(c!==void 0&&c===s){await r.storage.local.set({[y]:Date.now()});return}await r.storage.local.set({[y]:Date.now(),[T]:s}),h("extension_adobe_extension_detected",{detected:s}).catch(()=>{})}catch{}}function we(){if(de()){let t=window.location.hostname.split("."),o=t.length>2?t.slice(0,-2).join("."):"root";h("extension_adobe_domain_visited",{subdomain:o}).catch(()=>{})}}var Fe=()=>{r.runtime.connect().onDisconnect.addListener(()=>{setTimeout(()=>{!!r.runtime?.id?b():b().finally(()=>{O.destroyAll()})},1e3)})};_e();Fe();
//# sourceMappingURL=main.js.map
