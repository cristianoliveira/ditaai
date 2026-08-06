(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{f as p,g as l,i as o,l as t}from"./chunk-KJ3NFIHV.js";import{g as y}from"./chunk-H3LCZSHS.js";import{d as C,g as m,i as e,n as g}from"./chunk-CAO5DZGK.js";g();m();var h=C(y());var V=l`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,I=o.button`
  align-items: center;
  background-color: ${t["sf-crit"]};
  border: none;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  padding: 0;
  width: 32px;
  opacity: 0;
  animation: ${V} 0.1s ease-in-out forwards;
  animation-delay: 0.1s;
  &::before {
    content: '';
    width: ${({innerRectSize:i})=>i??10}px;
    height: ${({innerRectSize:i})=>i??10}px;
    background-color: ${t["bg-prim-inv-b-w"]};
    display: block;
    border-radius: 2px;
  }
`,Z=({darkMode:i=!1,...n})=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},e("g",{opacity:"1"},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0034 3.06669C10.4636 3.06669 10.8367 3.43979 10.8367 3.90002V8.90002C10.8367 9.36026 10.4636 9.73336 10.0034 9.73336C9.54314 9.73336 9.17004 9.36026 9.17004 8.90002V3.90002C9.17004 3.43979 9.54314 3.06669 10.0034 3.06669ZM7.50338 3.90002C7.50338 2.51931 8.62267 1.40002 10.0034 1.40002C11.3841 1.40002 12.5034 2.51931 12.5034 3.90002V8.90002C12.5034 10.2807 11.3841 11.4 10.0034 11.4C8.62267 11.4 7.50338 10.2807 7.50338 8.90002V3.90002ZM5.83671 6.40002C5.83671 5.93979 5.46361 5.56669 5.00338 5.56669C4.54314 5.56669 4.17004 5.93979 4.17004 6.40002V8.90002C4.17004 11.8388 6.34313 14.2699 9.17004 14.6743V16.4L7.50338 16.4001C7.04314 16.4001 6.67004 16.7732 6.67004 17.2334C6.67004 17.6936 7.04314 18.0667 7.50338 18.0667H12.5034C12.9636 18.0667 13.3367 17.6936 13.3367 17.2334C13.3367 16.7732 12.9636 16.4001 12.5034 16.4001H10.8367V14.6743C13.6636 14.2699 15.8367 11.8388 15.8367 8.90002V6.40002C15.8367 5.93979 15.4636 5.56669 15.0034 5.56669C14.5431 5.56669 14.17 5.93979 14.17 6.40002V8.90002C14.17 11.2012 12.3046 13.0667 10.0034 13.0667C7.70219 13.0667 5.83671 11.2012 5.83671 8.90002V6.40002Z",fill:i?t["icn-txt-black"]:t["icn-txt-white"]}))),k=o.svg`
  width: 22px;
  height: 24px;
  g rect {
    will-change: height, y;
    transition: height 0.1s ease-in-out, y 0.1s ease-in-out;
  }
`,A=({level:i,darkMode:n=!1,...f})=>{let x=(0,h.useMemo)(()=>[[.6,.9,1,.7],[.8,.7,.9,1],[1,.8,.7,.9],[.7,1,.8,.6],[.9,.6,1,.8],[.7,.9,.6,1]],[]),w=(0,h.useMemo)(()=>Math.floor(Math.random()*x.length),[i]),b=x[w],d=[8,12,16,8],v=[8,6,4,8],a=d.map((c,s)=>Math.max(4,c*b[s]*i)),r=v.map((c,s)=>{let u=d[s]-a[s];return c+u/2});return e(k,{width:"22",height:"24",viewBox:"0 0 22 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...f},e("g",{clipPath:"url(#clip0_574_2414)"},e("rect",{x:"0.5",y:r[0],width:"3",height:a[0],rx:"1.5",fill:n?t["icn-txt-black"]:t["icn-txt-white"]}),e("rect",{x:"6.5",y:r[1],width:"3",height:a[1],rx:"1.5",fill:n?t["icn-txt-black"]:t["icn-txt-white"]}),e("rect",{x:"12.5",y:r[2],width:"3",height:a[2],rx:"1.5",fill:n?t["icn-txt-black"]:t["icn-txt-white"]}),e("rect",{x:"18.5",y:r[3],width:"3",height:a[3],rx:"1.5",fill:n?t["icn-txt-black"]:t["icn-txt-white"]})),e("defs",null,e("clipPath",{id:"clip0_574_2414"},e("rect",{width:"21",height:"24",fill:n?t["icn-txt-black"]:t["icn-txt-white"],transform:"translate(0.5)"}))))},P=p`
  --wave-duration: 1040ms;
  --wave-stagger: 130ms;
  --bar-min-scale: 0.25; /* 4px / 16px = 0.25 */
  --bar-max-scale: 1; /* 16px / 16px = 1 */
`,F=l`
  0%, 100% {
    transform: translateZ(0) scaleY(var(--bar-min-scale));
  }
  50% {
    transform: translateZ(0) scaleY(var(--bar-max-scale));
  }
`,W=o.div`
  ${P}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 24px;
  width: 27px; /* 5 bars * 3px + 4 gaps * 3px = 27px */
`,S=o.div`
  width: 3px;
  height: 16px; /* Base height, scaled by scaleY */
  border-radius: 1.5px;
  background-color: ${({darkMode:i})=>i?t["icn-txt-black"]:t["icn-txt-white"]};

  transform: translateZ(0) scaleY(var(--bar-min-scale));
  will-change: transform;
  backface-visibility: hidden;
  contain: layout paint;

  transform-origin: center center;

  animation: ${F} var(--wave-duration) ease-in-out infinite;
  animation-delay: calc(${({index:i})=>i} * var(--wave-stagger));
`,Y=({darkMode:i=!1})=>e(W,null,[0,1,2,3,4].map(n=>e(S,{key:n,index:n,darkMode:i})));export{I as a,Z as b,A as c,Y as d};
//# sourceMappingURL=chunk-3NSPD6E4.js.map
