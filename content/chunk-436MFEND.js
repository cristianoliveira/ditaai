(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as x}from"./chunk-UBYLRYAE.js";import{c as s,d as c,e as m}from"./chunk-324T2OUF.js";import{g as p,i as e,l as o}from"./chunk-KJ3NFIHV.js";import{g as a,i,n as l}from"./chunk-CAO5DZGK.js";l();a();var u=()=>p`
 0% {
   background: ${o["bg-prim-inv-b-w"]};
 }
 33% {
  background: ${o["sf-act-electric-blue"]};
 }
 66% {
  background: ${o["sf-act-electric-blue"]};
 }
 100% {
  background: ${o["bg-prim-inv-b-w"]};
 }
`,f=s([["color",{property:"color"}],["fontSize",{property:"font-size"}],["bold",()=>"font-weight: 700"],["semiBold",()=>"font-weight: 600"],["medium",()=>"font-weight: 500"],["regular",()=>"font-weight: 400"],["lineHeight",{property:"line-height"}],["fixedWidthNumbers",()=>"font-variant-numeric: tabular-nums"],["align",{property:"text-align",default:"center"}],["lowerCase",()=>"text-transform: lowercase"],["upperCase",()=>"text-transform: uppercase"],["capitalize",()=>"text-transform: capitalize"],["lineClamp",({lineClamp:t})=>`-webkit-line-clamp: ${t};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;`],["letterSpacing",({letterSpacing:t})=>`letter-spacing: ${t}`]]),r=e(c)`
  font-family: ${({fontFamily:t})=>t??"system-ui"};
  color: ${({color:t})=>t??o["icn-txt-prim"]};
  ${f}
`.withComponent("span"),k=e(r)`
  color: ${()=>o["icn-txt-prim"]};
`,C=e(r)`
  color: ${({color:t})=>t??o["icn-txt-sec"]};
`,z=e(r)`
  color: #6a6a6a;
`,P=e(r)`
  color: ${({color:t})=>t??"#4c4c4c"};
`;var S=r.withComponent("h1"),v=e(r)`
  cursor: pointer;
  color: ${({color:t})=>t??o["icn-txt-prim"]};
  text-decoration: none;
`.withComponent("a"),n=e.span`
  width: 6px;
  height: 6px;
  border-radius: 100%;

  background: ${o["sf-act-electric-blue"]};
  animation: ${u} 1.2s infinite;

  &:nth-of-type(2) {
    animation-delay: -0.8s;
  }

  &:nth-of-type(3) {
    animation-delay: -1.6s;
  }
`,D=({duration:t,...d})=>t.isLoading===!0?i(m,{separation:"6px",padding:"6px"},i(n,null),i(n,null),i(n,null)):i(r,{...d},x("short")(t.duration));export{r as a,D as b};
//# sourceMappingURL=chunk-436MFEND.js.map
