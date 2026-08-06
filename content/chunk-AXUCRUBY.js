(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{Ea as d,Gf as u,L as m,qa as c}from"./chunk-324T2OUF.js";import{b as a}from"./chunk-NUSU6NTI.js";import{g as o,n as r}from"./chunk-CAO5DZGK.js";r();o();var b,x=200,h=.05,w=[{min:.5,max:1,time:3},{min:1.1,max:1.5,time:4},{min:1.6,max:2,time:5},{min:2.1,max:2.5,time:10},{min:2.6,max:3,time:20},{min:3.1,max:3.5,time:20},{min:3.6,max:4,time:25},{min:4.1,max:4.5,time:25}],g=600,f=e=>Math.round(e/50)*50,k=e=>Math.round(e*10)/10,y=e=>{let t=k(e),n=w.find(i=>t>=i.min&&t<=i.max);if(!n)return g;let s=x*t,E=Math.round(s*n.time);return f(E)};async function L(){b?.(),b=u.on("consumed",async()=>{let{autoSpeedUp:e,playbackSpeed:t}=await c(),n=await m();if(!e||!n)return;let s=y(t);n>=s&&await _(t)})}var _=async e=>d(e+h,a,!0);r();o();var W=`
  scrollbar-gutter: stable both-edges;

  &::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  &:hover::-webkit-scrollbar {
    opacity: 1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #343537;
    border-radius: 9999px;
  }


  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;r();o();export{y as a,L as b,W as c};
//# sourceMappingURL=chunk-AXUCRUBY.js.map
