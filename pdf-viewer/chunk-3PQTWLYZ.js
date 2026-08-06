(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as Cs}from"./chunk-GIS647TJ.js";import{a as ng}from"./chunk-YINUEIA6.js";import{a as t7,b as Z,c as r7,d as Se,e as tg,f as a,g as p,h as s,i as lt,j as m,m as n7,n as rg}from"./chunk-3TJIL3LD.js";var yg={};r7(yg,{useCallback:()=>s7,useContext:()=>c7,useDebugValue:()=>l7,useEffect:()=>o7,useErrorBoundary:()=>u7,useId:()=>f7,useImperativeHandle:()=>a7,useLayoutEffect:()=>gg,useMemo:()=>Hu,useReducer:()=>mg,useRef:()=>i7,useState:()=>dg});function so(e,t){lt.__h&&lt.__h(Xe,e,Fo||t),Fo=0;var r=Xe.__H||(Xe.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:ws}),r.__[e]}function dg(e){return Fo=1,mg(hg,e)}function mg(e,t,r){var i=so(An++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):hg(void 0,t),function(u){var f=i.__N?i.__N[0]:i.__[0],d=i.t(f,u);f!==d&&(i.__N=[d,i.__[1]],i.__c.setState({}))}],i.__c=Xe,!Xe.u)){Xe.u=!0;var c=Xe.shouldComponentUpdate;Xe.shouldComponentUpdate=function(u,f,d){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(S){return S.__c});if(y.every(function(S){return!S.__N}))return!c||c.call(this,u,f,d);var v=!1;return y.forEach(function(S){if(S.__N){var T=S.__[0];S.__=S.__N,S.__N=void 0,T!==S.__[0]&&(v=!0)}}),!(!v&&i.__c.props===u)&&(!c||c.call(this,u,f,d))}}return i.__N||i.__}function o7(e,t){var r=so(An++,3);!lt.__s&&Ku(r.__H,t)&&(r.__=e,r.i=t,Xe.__H.__h.push(r))}function gg(e,t){var r=so(An++,4);!lt.__s&&Ku(r.__H,t)&&(r.__=e,r.i=t,Xe.__h.push(r))}function i7(e){return Fo=5,Hu(function(){return{current:e}},[])}function a7(e,t,r){Fo=6,gg(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},r==null?r:r.concat(e))}function Hu(e,t){var r=so(An++,7);return Ku(r.__H,t)?(r.__V=e(),r.i=t,r.__h=e,r.__V):r.__}function s7(e,t){return Fo=8,Hu(function(){return e},t)}function c7(e){var t=Xe.context[e.__c],r=so(An++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(Xe)),t.props.value):e.__}function l7(e,t){lt.useDebugValue&&lt.useDebugValue(t?t(e):e)}function u7(e){var t=so(An++,10),r=dg();return t.__=e,Xe.componentDidCatch||(Xe.componentDidCatch=function(i,c){t.__&&t.__(i,c),r[1](i)}),[r[0],function(){r[1](void 0)}]}function f7(){var e=so(An++,11);if(!e.__){for(var t=Xe.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var r=t.__m||(t.__m=[0,0]);e.__="P"+r[0]+"-"+r[1]++}return e.__}function p7(){for(var e;e=pg.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_s),e.__H.__h.forEach(ju),e.__H.__h=[]}catch(t){e.__H.__h=[],lt.__e(t,e.__v)}}function d7(e){var t,r=function(){clearTimeout(i),fg&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,100);fg&&(t=requestAnimationFrame(r))}function _s(e){var t=Xe,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),Xe=t}function ju(e){var t=Xe;e.__c=e.__(),Xe=t}function Ku(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function hg(e,t){return typeof t=="function"?t(e):t}var An,Xe,zu,ig,Fo,pg,ws,ag,sg,cg,lg,ug,fg,xg=t7(()=>{"use strict";a();s();rg();Fo=0,pg=[],ws=[],ag=lt.__b,sg=lt.__r,cg=lt.diffed,lg=lt.__c,ug=lt.unmount;lt.__b=function(e){Xe=null,ag&&ag(e)},lt.__r=function(e){sg&&sg(e),An=0;var t=(Xe=e.__c).__H;t&&(zu===Xe?(t.__h=[],Xe.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=ws,r.__N=r.i=void 0})):(t.__h.forEach(_s),t.__h.forEach(ju),t.__h=[])),zu=Xe},lt.diffed=function(e){cg&&cg(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(pg.push(t)!==1&&ig===lt.requestAnimationFrame||((ig=lt.requestAnimationFrame)||d7)(p7)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==ws&&(r.__=r.__V),r.i=void 0,r.__V=ws})),zu=Xe=null},lt.__c=function(e,t){t.some(function(r){try{r.__h.forEach(_s),r.__h=r.__h.filter(function(i){return!i.__||ju(i)})}catch(i){t.some(function(c){c.__h&&(c.__h=[])}),t=[],lt.__e(i,r.__v)}}),lg&&lg(e,t)},lt.unmount=function(e){ug&&ug(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{_s(i)}catch(c){t=c}}),r.__H=void 0,t&&lt.__e(t,r.__v))};fg=typeof requestAnimationFrame=="function"});var Re=Z(Pe=>{"use strict";a();s();var de=(rg(),tg(n7)),At=(xg(),tg(yg));function Ig(e,t){for(var r in t)e[r]=t[r];return e}function Qu(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Yu(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function Es(e){this.props=e}function kg(e,t){function r(c){var u=this.props.ref,f=u==c.ref;return!f&&u&&(u.call?u(null):u.current=null),t?!t(this.props,c)||!f:Qu(this.props,c)}function i(c){return this.shouldComponentUpdate=r,de.createElement(e,c)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(Es.prototype=new de.Component).isPureReactComponent=!0,Es.prototype.shouldComponentUpdate=function(e,t){return Qu(this.props,e)||Qu(this.state,t)};var bg=de.options.__b;de.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),bg&&bg(e)};var m7=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Rg(e){function t(r){var i=Ig({},r);return delete i.ref,e(i,r.ref||null)}return t.$$typeof=m7,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var vg=function(e,t){return e==null?null:de.toChildArray(de.toChildArray(e).map(t))},Ag={map:vg,forEach:vg,count:function(e){return e?de.toChildArray(e).length:0},only:function(e){var t=de.toChildArray(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:de.toChildArray},g7=de.options.__e;de.options.__e=function(e,t,r,i){if(e.then){for(var c,u=t;u=u.__;)if((c=u.__c)&&c.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),c.__c(e,t)}g7(e,t,r,i)};var Sg=de.options.unmount;function Mg(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=Ig({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return Mg(i,t,r)})),e}function Lg(e,t,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return Lg(i,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}function Vi(){this.__u=0,this.t=null,this.__b=null}function Pg(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Og(e){var t,r,i;function c(u){if(t||(t=e()).then(function(f){r=f.default||f},function(f){i=f}),i)throw i;if(!r)throw t;return de.createElement(r,u)}return c.displayName="Lazy",c.__f=!0,c}function Uo(){this.u=null,this.o=null}de.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Sg&&Sg(e)},(Vi.prototype=new de.Component).__c=function(e,t){var r=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(r);var c=Pg(i.__v),u=!1,f=function(){u||(u=!0,r.__R=null,c?c(d):d())};r.__R=f;var d=function(){if(!--i.__u){if(i.state.__a){var v=i.state.__a;i.__v.__k[0]=Lg(v,v.__c.__P,v.__c.__O)}var S;for(i.setState({__a:i.__b=null});S=i.t.pop();)S.forceUpdate()}},y=t.__h===!0;i.__u++||y||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(f,f)},Vi.prototype.componentWillUnmount=function(){this.t=[]},Vi.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Mg(this.__b,r,i.__O=i.__P)}this.__b=null}var c=t.__a&&de.createElement(de.Fragment,null,e.fallback);return c&&(c.__h=null),[de.createElement(de.Fragment,null,t.__a?null:e.children),c]};var Cg=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};function h7(e){return this.getChildContext=function(){return e.context},e.children}function y7(e){var t=this,r=e.i;t.componentWillUnmount=function(){de.render(null,t.l),t.l=null,t.i=null},t.i&&t.i!==r&&t.componentWillUnmount(),e.__v?(t.l||(t.i=r,t.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(i){this.childNodes.push(i),t.i.appendChild(i)},insertBefore:function(i,c){this.childNodes.push(i),t.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),t.i.removeChild(i)}}),de.render(de.createElement(h7,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Ng(e,t){var r=de.createElement(y7,{__v:e,i:t});return r.containerInfo=t,r}(Uo.prototype=new de.Component).__a=function(e){var t=this,r=Pg(t.__v),i=t.o.get(e);return i[0]++,function(c){var u=function(){t.props.revealOrder?(i.push(c),Cg(t,e,i)):c()};r?r(u):u()}},Uo.prototype.render=function(e){this.u=null,this.o=new Map;var t=de.toChildArray(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Uo.prototype.componentDidUpdate=Uo.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){Cg(e,r,t)})};var Dg=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,x7=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,b7=typeof document<"u",v7=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Bg(e,t,r){return t.__k==null&&(t.textContent=""),de.render(e,t),typeof r=="function"&&r(),e?e.__c:null}function Fg(e,t,r){return de.hydrate(e,t),typeof r=="function"&&r(),e?e.__c:null}de.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(de.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var wg=de.options.event;function S7(){}function C7(){return this.cancelBubble}function w7(){return this.defaultPrevented}de.options.event=function(e){return wg&&(e=wg(e)),e.persist=S7,e.isPropagationStopped=C7,e.isDefaultPrevented=w7,e.nativeEvent=e};var Ug,_g={configurable:!0,get:function(){return this.class}},Eg=de.options.vnode;de.options.vnode=function(e){var t=e.type,r=e.props,i=r;if(typeof t=="string"){var c=t.indexOf("-")===-1;for(var u in i={},r){var f=r[u];b7&&u==="children"&&t==="noscript"||u==="value"&&"defaultValue"in r&&f==null||(u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&f===!0?f="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!v7(r.type)?u="oninput":/^onfocus$/i.test(u)?u="onfocusin":/^onblur$/i.test(u)?u="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(u)?u=u.toLowerCase():c&&x7.test(u)?u=u.replace(/[A-Z0-9]/g,"-$&").toLowerCase():f===null&&(f=void 0),/^oninput$/i.test(u)&&(u=u.toLowerCase(),i[u]&&(u="oninputCapture")),i[u]=f)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=de.toChildArray(r.children).forEach(function(d){d.props.selected=i.value.indexOf(d.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=de.toChildArray(r.children).forEach(function(d){d.props.selected=i.multiple?i.defaultValue.indexOf(d.props.value)!=-1:i.defaultValue==d.props.value})),e.props=i,r.class!=r.className&&(_g.enumerable="className"in r,r.className!=null&&(i.class=r.className),Object.defineProperty(i,"className",_g))}e.$$typeof=Dg,Eg&&Eg(e)};var Tg=de.options.__r;de.options.__r=function(e){Tg&&Tg(e),Ug=e.__c};var Vg={ReactCurrentDispatcher:{current:{readContext:function(e){return Ug.__n[e.__c].props.value}}}};function $g(e){return de.createElement.bind(null,e)}function Xu(e){return!!e&&e.$$typeof===Dg}function qg(e){return Xu(e)?de.cloneElement.apply(null,arguments):e}function Wg(e){return!!e.__k&&(de.render(null,e),!0)}function Gg(e){return e&&(e.base||e.nodeType===1&&e)||null}var zg=function(e,t){return e(t)},jg=function(e,t){return e(t)},Hg=de.Fragment;function Zu(e){e()}function Kg(e){return e}function Yg(){return[!1,Zu]}var Qg=At.useLayoutEffect;function Xg(e,t){var r=t(),i=At.useState({p:{__:r,h:t}}),c=i[0].p,u=i[1];return At.useLayoutEffect(function(){c.__=r,c.h=t,Yu(c.__,t())||u({p:c})},[e,r,t]),At.useEffect(function(){return Yu(c.__,c.h())||u({p:c}),e(function(){Yu(c.__,c.h())||u({p:c})})},[e]),r}var _7={useState:At.useState,useId:At.useId,useReducer:At.useReducer,useEffect:At.useEffect,useLayoutEffect:At.useLayoutEffect,useInsertionEffect:Qg,useTransition:Yg,useDeferredValue:Kg,useSyncExternalStore:Xg,startTransition:Zu,useRef:At.useRef,useImperativeHandle:At.useImperativeHandle,useMemo:At.useMemo,useCallback:At.useCallback,useContext:At.useContext,useDebugValue:At.useDebugValue,version:"17.0.2",Children:Ag,render:Bg,hydrate:Fg,unmountComponentAtNode:Wg,createPortal:Ng,createElement:de.createElement,createContext:de.createContext,createFactory:$g,cloneElement:qg,createRef:de.createRef,Fragment:de.Fragment,isValidElement:Xu,findDOMNode:Gg,Component:de.Component,PureComponent:Es,memo:kg,forwardRef:Rg,flushSync:jg,unstable_batchedUpdates:zg,StrictMode:Hg,Suspense:Vi,SuspenseList:Uo,lazy:Og,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Vg};Object.defineProperty(Pe,"Component",{enumerable:!0,get:function(){return de.Component}}),Object.defineProperty(Pe,"Fragment",{enumerable:!0,get:function(){return de.Fragment}}),Object.defineProperty(Pe,"createContext",{enumerable:!0,get:function(){return de.createContext}}),Object.defineProperty(Pe,"createElement",{enumerable:!0,get:function(){return de.createElement}}),Object.defineProperty(Pe,"createRef",{enumerable:!0,get:function(){return de.createRef}}),Pe.Children=Ag,Pe.PureComponent=Es,Pe.StrictMode=Hg,Pe.Suspense=Vi,Pe.SuspenseList=Uo,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vg,Pe.cloneElement=qg,Pe.createFactory=$g,Pe.createPortal=Ng,Pe.default=_7,Pe.findDOMNode=Gg,Pe.flushSync=jg,Pe.forwardRef=Rg,Pe.hydrate=Fg,Pe.isValidElement=Xu,Pe.lazy=Og,Pe.memo=kg,Pe.render=Bg,Pe.startTransition=Zu,Pe.unmountComponentAtNode=Wg,Pe.unstable_batchedUpdates=zg,Pe.useDeferredValue=Kg,Pe.useInsertionEffect=Qg,Pe.useSyncExternalStore=Xg,Pe.useTransition=Yg,Pe.version="17.0.2",Object.keys(At).forEach(function(e){e==="default"||Pe.hasOwnProperty(e)||Object.defineProperty(Pe,e,{enumerable:!0,get:function(){return At[e]}})})});var Ts=Z((hN,Zg)=>{"use strict";a();s();var E7=Array.isArray;Zg.exports=E7});var eh=Z((bN,Jg)=>{"use strict";a();s();var T7=typeof global=="object"&&global&&global.Object===Object&&global;Jg.exports=T7});var $i=Z((CN,th)=>{"use strict";a();s();var I7=eh(),k7=typeof self=="object"&&self&&self.Object===Object&&self,R7=I7||k7||Function("return this")();th.exports=R7});var Is=Z((EN,rh)=>{"use strict";a();s();var A7=$i(),M7=A7.Symbol;rh.exports=M7});var ah=Z((kN,ih)=>{"use strict";a();s();var nh=Is(),oh=Object.prototype,L7=oh.hasOwnProperty,P7=oh.toString,qi=nh?nh.toStringTag:void 0;function O7(e){var t=L7.call(e,qi),r=e[qi];try{e[qi]=void 0;var i=!0}catch{}var c=P7.call(e);return i&&(t?e[qi]=r:delete e[qi]),c}ih.exports=O7});var ch=Z((MN,sh)=>{"use strict";a();s();var N7=Object.prototype,D7=N7.toString;function B7(e){return D7.call(e)}sh.exports=B7});var Ju=Z((ON,fh)=>{"use strict";a();s();var lh=Is(),F7=ah(),U7=ch(),V7="[object Null]",$7="[object Undefined]",uh=lh?lh.toStringTag:void 0;function q7(e){return e==null?e===void 0?$7:V7:uh&&uh in Object(e)?F7(e):U7(e)}fh.exports=q7});var dh=Z((BN,ph)=>{"use strict";a();s();function W7(e){return e!=null&&typeof e=="object"}ph.exports=W7});var Wi=Z((VN,mh)=>{"use strict";a();s();var G7=Ju(),z7=dh(),j7="[object Symbol]";function H7(e){return typeof e=="symbol"||z7(e)&&G7(e)==j7}mh.exports=H7});var hh=Z((WN,gh)=>{"use strict";a();s();var K7=Ts(),Y7=Wi(),Q7=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X7=/^\w*$/;function Z7(e,t){if(K7(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Y7(e)?!0:X7.test(e)||!Q7.test(e)||t!=null&&e in Object(t)}gh.exports=Z7});var Gi=Z((jN,yh)=>{"use strict";a();s();function J7(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}yh.exports=J7});var bh=Z((YN,xh)=>{"use strict";a();s();var ew=Ju(),tw=Gi(),rw="[object AsyncFunction]",nw="[object Function]",ow="[object GeneratorFunction]",iw="[object Proxy]";function aw(e){if(!tw(e))return!1;var t=ew(e);return t==nw||t==ow||t==rw||t==iw}xh.exports=aw});var Sh=Z((ZN,vh)=>{"use strict";a();s();var sw=$i(),cw=sw["__core-js_shared__"];vh.exports=cw});var _h=Z((tD,wh)=>{"use strict";a();s();var ef=Sh(),Ch=(function(){var e=/[^.]+$/.exec(ef&&ef.keys&&ef.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function lw(e){return!!Ch&&Ch in e}wh.exports=lw});var Th=Z((oD,Eh)=>{"use strict";a();s();var uw=Function.prototype,fw=uw.toString;function pw(e){if(e!=null){try{return fw.call(e)}catch{}try{return e+""}catch{}}return""}Eh.exports=pw});var kh=Z((sD,Ih)=>{"use strict";a();s();var dw=bh(),mw=_h(),gw=Gi(),hw=Th(),yw=/[\\^$.*+?()[\]{}|]/g,xw=/^\[object .+?Constructor\]$/,bw=Function.prototype,vw=Object.prototype,Sw=bw.toString,Cw=vw.hasOwnProperty,ww=RegExp("^"+Sw.call(Cw).replace(yw,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _w(e){if(!gw(e)||mw(e))return!1;var t=dw(e)?ww:xw;return t.test(hw(e))}Ih.exports=_w});var Ah=Z((uD,Rh)=>{"use strict";a();s();function Ew(e,t){return e?.[t]}Rh.exports=Ew});var tf=Z((dD,Mh)=>{"use strict";a();s();var Tw=kh(),Iw=Ah();function kw(e,t){var r=Iw(e,t);return Tw(r)?r:void 0}Mh.exports=kw});var zi=Z((hD,Lh)=>{"use strict";a();s();var Rw=tf(),Aw=Rw(Object,"create");Lh.exports=Aw});var Nh=Z((bD,Oh)=>{"use strict";a();s();var Ph=zi();function Mw(){this.__data__=Ph?Ph(null):{},this.size=0}Oh.exports=Mw});var Bh=Z((CD,Dh)=>{"use strict";a();s();function Lw(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}Dh.exports=Lw});var Uh=Z((ED,Fh)=>{"use strict";a();s();var Pw=zi(),Ow="__lodash_hash_undefined__",Nw=Object.prototype,Dw=Nw.hasOwnProperty;function Bw(e){var t=this.__data__;if(Pw){var r=t[e];return r===Ow?void 0:r}return Dw.call(t,e)?t[e]:void 0}Fh.exports=Bw});var $h=Z((kD,Vh)=>{"use strict";a();s();var Fw=zi(),Uw=Object.prototype,Vw=Uw.hasOwnProperty;function $w(e){var t=this.__data__;return Fw?t[e]!==void 0:Vw.call(t,e)}Vh.exports=$w});var Wh=Z((MD,qh)=>{"use strict";a();s();var qw=zi(),Ww="__lodash_hash_undefined__";function Gw(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=qw&&t===void 0?Ww:t,this}qh.exports=Gw});var zh=Z((OD,Gh)=>{"use strict";a();s();var zw=Nh(),jw=Bh(),Hw=Uh(),Kw=$h(),Yw=Wh();function Vo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Vo.prototype.clear=zw;Vo.prototype.delete=jw;Vo.prototype.get=Hw;Vo.prototype.has=Kw;Vo.prototype.set=Yw;Gh.exports=Vo});var Hh=Z((BD,jh)=>{"use strict";a();s();function Qw(){this.__data__=[],this.size=0}jh.exports=Qw});var Yh=Z((VD,Kh)=>{"use strict";a();s();function Xw(e,t){return e===t||e!==e&&t!==t}Kh.exports=Xw});var ji=Z((WD,Qh)=>{"use strict";a();s();var Zw=Yh();function Jw(e,t){for(var r=e.length;r--;)if(Zw(e[r][0],t))return r;return-1}Qh.exports=Jw});var Zh=Z((jD,Xh)=>{"use strict";a();s();var e_=ji(),t_=Array.prototype,r_=t_.splice;function n_(e){var t=this.__data__,r=e_(t,e);if(r<0)return!1;var i=t.length-1;return r==i?t.pop():r_.call(t,r,1),--this.size,!0}Xh.exports=n_});var e0=Z((YD,Jh)=>{"use strict";a();s();var o_=ji();function i_(e){var t=this.__data__,r=o_(t,e);return r<0?void 0:t[r][1]}Jh.exports=i_});var r0=Z((ZD,t0)=>{"use strict";a();s();var a_=ji();function s_(e){return a_(this.__data__,e)>-1}t0.exports=s_});var o0=Z((tB,n0)=>{"use strict";a();s();var c_=ji();function l_(e,t){var r=this.__data__,i=c_(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}n0.exports=l_});var a0=Z((oB,i0)=>{"use strict";a();s();var u_=Hh(),f_=Zh(),p_=e0(),d_=r0(),m_=o0();function $o(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}$o.prototype.clear=u_;$o.prototype.delete=f_;$o.prototype.get=p_;$o.prototype.has=d_;$o.prototype.set=m_;i0.exports=$o});var c0=Z((sB,s0)=>{"use strict";a();s();var g_=tf(),h_=$i(),y_=g_(h_,"Map");s0.exports=y_});var f0=Z((uB,u0)=>{"use strict";a();s();var l0=zh(),x_=a0(),b_=c0();function v_(){this.size=0,this.__data__={hash:new l0,map:new(b_||x_),string:new l0}}u0.exports=v_});var d0=Z((dB,p0)=>{"use strict";a();s();function S_(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}p0.exports=S_});var Hi=Z((hB,m0)=>{"use strict";a();s();var C_=d0();function w_(e,t){var r=e.__data__;return C_(t)?r[typeof t=="string"?"string":"hash"]:r.map}m0.exports=w_});var h0=Z((bB,g0)=>{"use strict";a();s();var __=Hi();function E_(e){var t=__(this,e).delete(e);return this.size-=t?1:0,t}g0.exports=E_});var x0=Z((CB,y0)=>{"use strict";a();s();var T_=Hi();function I_(e){return T_(this,e).get(e)}y0.exports=I_});var v0=Z((EB,b0)=>{"use strict";a();s();var k_=Hi();function R_(e){return k_(this,e).has(e)}b0.exports=R_});var C0=Z((kB,S0)=>{"use strict";a();s();var A_=Hi();function M_(e,t){var r=A_(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}S0.exports=M_});var _0=Z((MB,w0)=>{"use strict";a();s();var L_=f0(),P_=h0(),O_=x0(),N_=v0(),D_=C0();function qo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}qo.prototype.clear=L_;qo.prototype.delete=P_;qo.prototype.get=O_;qo.prototype.has=N_;qo.prototype.set=D_;w0.exports=qo});var I0=Z((OB,T0)=>{"use strict";a();s();var E0=_0(),B_="Expected a function";function rf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(B_);var r=function(){var i=arguments,c=t?t.apply(this,i):i[0],u=r.cache;if(u.has(c))return u.get(c);var f=e.apply(this,i);return r.cache=u.set(c,f)||u,f};return r.cache=new(rf.Cache||E0),r}rf.Cache=E0;T0.exports=rf});var R0=Z((BB,k0)=>{"use strict";a();s();var F_=I0(),U_=500;function V_(e){var t=F_(e,function(i){return r.size===U_&&r.clear(),i}),r=t.cache;return t}k0.exports=V_});var M0=Z((VB,A0)=>{"use strict";a();s();var $_=R0(),q_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,W_=/\\(\\)?/g,G_=$_(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(q_,function(r,i,c,u){t.push(c?u.replace(W_,"$1"):i||r)}),t});A0.exports=G_});var P0=Z((WB,L0)=>{"use strict";a();s();function z_(e,t){for(var r=-1,i=e==null?0:e.length,c=Array(i);++r<i;)c[r]=t(e[r],r,e);return c}L0.exports=z_});var U0=Z((jB,F0)=>{"use strict";a();s();var O0=Is(),j_=P0(),H_=Ts(),K_=Wi(),Y_=1/0,N0=O0?O0.prototype:void 0,D0=N0?N0.toString:void 0;function B0(e){if(typeof e=="string")return e;if(H_(e))return j_(e,B0)+"";if(K_(e))return D0?D0.call(e):"";var t=e+"";return t=="0"&&1/e==-Y_?"-0":t}F0.exports=B0});var $0=Z((YB,V0)=>{"use strict";a();s();var Q_=U0();function X_(e){return e==null?"":Q_(e)}V0.exports=X_});var W0=Z((ZB,q0)=>{"use strict";a();s();var Z_=Ts(),J_=hh(),eE=M0(),tE=$0();function rE(e,t){return Z_(e)?e:J_(e,t)?[e]:eE(tE(e))}q0.exports=rE});var z0=Z((tF,G0)=>{"use strict";a();s();var nE=Wi(),oE=1/0;function iE(e){if(typeof e=="string"||nE(e))return e;var t=e+"";return t=="0"&&1/e==-oE?"-0":t}G0.exports=iE});var H0=Z((oF,j0)=>{"use strict";a();s();var aE=W0(),sE=z0();function cE(e,t){t=aE(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[sE(t[r++])];return r&&r==i?e:void 0}j0.exports=cE});var Y0=Z((sF,K0)=>{"use strict";a();s();var lE=H0();function uE(e,t,r){var i=e==null?void 0:lE(e,t);return i===void 0?r:i}K0.exports=uE});var iy=Z(oy=>{"use strict";a();s();var Wo=Re();function wE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _E=typeof Object.is=="function"?Object.is:wE,EE=Wo.useState,TE=Wo.useEffect,IE=Wo.useLayoutEffect,kE=Wo.useDebugValue;function RE(e,t){var r=t(),i=EE({inst:{value:r,getSnapshot:t}}),c=i[0].inst,u=i[1];return IE(function(){c.value=r,c.getSnapshot=t,cf(c)&&u({inst:c})},[e,r,t]),TE(function(){return cf(c)&&u({inst:c}),e(function(){cf(c)&&u({inst:c})})},[e]),kE(r),r}function cf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_E(e,r)}catch{return!0}}function AE(e,t){return t()}var ME=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?AE:RE;oy.useSyncExternalStore=Wo.useSyncExternalStore!==void 0?Wo.useSyncExternalStore:ME});var sy=Z((uU,ay)=>{"use strict";a();s();ay.exports=iy()});var ly=Z(cy=>{"use strict";a();s();var Ps=Re(),LE=sy();function PE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var OE=typeof Object.is=="function"?Object.is:PE,NE=LE.useSyncExternalStore,DE=Ps.useRef,BE=Ps.useEffect,FE=Ps.useMemo,UE=Ps.useDebugValue;cy.useSyncExternalStoreWithSelector=function(e,t,r,i,c){var u=DE(null);if(u.current===null){var f={hasValue:!1,value:null};u.current=f}else f=u.current;u=FE(function(){function y(A){if(!v){if(v=!0,S=A,A=i(A),c!==void 0&&f.hasValue){var F=f.value;if(c(F,A))return T=F}return T=A}if(F=T,OE(S,A))return F;var B=i(A);return c!==void 0&&c(F,B)?F:(S=A,T=B)}var v=!1,S,T,M=r===void 0?null:r;return[function(){return y(t())},M===null?void 0:function(){return y(M())}]},[t,r,i,c]);var d=NE(e,u[0],u[1]);return BE(function(){f.hasValue=!0,f.value=d},[d]),UE(d),d}});var fy=Z((hU,uy)=>{"use strict";a();s();uy.exports=ly()});var s2=Z((xCe,a2)=>{"use strict";a();s();function jI(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}a2.exports=jI});var xx=Z((Y_e,yx)=>{"use strict";a();s();yx.exports=function(t,r){if((typeof t=="string"||t instanceof String)&&typeof document<"u"){var i=document.createElement("DIV");i.innerHTML=t,t=(i.textContent||"").trim()}else typeof t=="object"&&t.textContent&&(t=(t.textContent||"").trim());return t}});var bx=Z(bp=>{"use strict";a();s();bp.endsWithChar=function(t,r){return r.length>1?r.indexOf(t.slice(-1))>-1:t.slice(-1)===r};bp.endsWith=function(t,r){return t.slice(t.length-r.length)===r}});var vx=Z(or=>{"use strict";a();s();var vp,Rk=["al","adj","assn","Ave","BSc","MSc","Cell","Ch","Co","cc","Corp","Dem","Dept","ed","eg","Eq","Eqs","est","est","etc","Ex","ext","Fig","fig","Figs","figs","i.e","ie","Inc","inc","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Sept","Oct","Nov","Dec","jr","mi","Miss","Mrs","Mr","Ms","Mol","mt","mts","no","Nos","PhD","MD","BA","MA","MM","pl","pop","pp","Prof","Dr","pt","Ref","Refs","Rep","repr","rev","Sec","Secs","Sgt","Col","Gen","Rep","Sen","Gov","Lt","Maj","Capt","St","Sr","sr","Jr","jr","Rev","Sun","Mon","Tu","Tue","Tues","Wed","Th","Thu","Thur","Thurs","Fri","Sat","trans","Univ","Viz","Vol","vs","v"];or.setAbbreviations=function(e){e?vp=e:vp=Rk};var Sp=or.isCapitalized=function(e){return/^[A-Z][a-z].*/.test(e)||Ak(e)};or.isSentenceStarter=function(e){return Sp(e)||/``|"|'/.test(e.substring(0,2))};or.isCommonAbbreviation=function(e){var t=e.replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi,"");return~vp.indexOf(t)};or.isTimeAbbreviation=function(e,t){if(e==="a.m."||e==="p.m."){var r=t.replace(/\W+/g,"").slice(-3).toLowerCase();if(r==="day")return!0}return!1};or.isDottedAbbreviation=function(e){var t=e.replace(/[\(\)\[\]\{\}]/g,"").match(/(.\.)*/);return t&&t[0].length>0};or.isCustomAbbreviation=function(e){return e.length<=3?!0:Sp(e)};or.isNameAbbreviation=function(e,t){if(t.length>0){if(e<5&&t[0].length<6&&Sp(t[0]))return!0;var r=t.filter(function(i){return/[A-Z]/.test(i.charAt(0))});return r.length>=3}return!1};var Ak=or.isNumber=function(e,t){return t&&(e=e.slice(t-1,t+2)),!isNaN(e)};or.isPhoneNr=function(e){return e.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)};or.isURL=function(e){return e.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)};or.isConcatenated=function(e){var t=0;if((t=e.indexOf("."))>-1||(t=e.indexOf("!"))>-1||(t=e.indexOf("?"))>-1){var r=e.charAt(t+1);if(r.match(/[a-zA-Z].*/))return[e.slice(0,t),e.slice(t+1)]}return!1};or.isBoundaryChar=function(e){return e==="."||e==="!"||e==="?"}});var wx=Z(Cx=>{"use strict";a();s();var Mk=xx(),da=bx(),Wt=vx(),Cp=" @~@ ",Sx=Cp.trim(),Lk=new RegExp("\\S",""),Pk=new RegExp("\\n+|[-#=_+*]{4,}","g"),Ok=new RegExp("\\S+|\\n","g");Cx.sentences=function(e,t){if(!e||typeof e!="string"||!e.length)return[];if(!Lk.test(e))return[];var r={newline_boundaries:!1,html_boundaries:!1,html_boundaries_tags:["p","div","ul","ol"],sanitize:!1,allowed_tags:!1,preserve_whitespace:!1,abbreviations:null};if(typeof t=="boolean")r.newline_boundaries=!0;else for(var i in t)r[i]=t[i];if(Wt.setAbbreviations(r.abbreviations),r.newline_boundaries&&(e=e.replace(Pk,Cp)),r.html_boundaries){var c="(<br\\s*\\/?>|<\\/("+r.html_boundaries_tags.join("|")+")>)",u=new RegExp(c,"g");e=e.replace(u,"$1"+Cp)}(r.sanitize||r.allowed_tags)&&(r.allowed_tags||(r.allowed_tags=[""]),e=Mk(e,{allowedTags:r.allowed_tags}));var f,d;r.preserve_whitespace?(d=e.split(/(<br\s*\/?>|\S+|\n+)/),f=d.filter(function(V,w){return w%2})):f=e.trim().match(Ok);var y=0,v=0,S=[],T=[],M=[];if(!f||!f.length)return[];for(var A=0,F=f.length;A<F;A++){if(y++,M.push(f[A]),~f[A].indexOf(",")&&(y=0),Wt.isBoundaryChar(f[A])||da.endsWithChar(f[A],"?!")||f[A]===Sx){(r.newline_boundaries||r.html_boundaries)&&f[A]===Sx&&M.pop(),T.push(M),y=0,M=[];continue}if((da.endsWithChar(f[A],'"')||da.endsWithChar(f[A],"”"))&&(f[A]=f[A].slice(0,-1)),da.endsWithChar(f[A],".")){if(A+1<F){if(f[A].length===2&&isNaN(f[A].charAt(0))||Wt.isCommonAbbreviation(f[A]))continue;if(Wt.isSentenceStarter(f[A+1])){if(Wt.isTimeAbbreviation(f[A],f[A+1])||Wt.isNameAbbreviation(y,f.slice(A,6))||Wt.isNumber(f[A+1])&&Wt.isCustomAbbreviation(f[A]))continue}else if(da.endsWith(f[A],"..")||Wt.isDottedAbbreviation(f[A])||Wt.isNameAbbreviation(y,f.slice(A,5)))continue}T.push(M),M=[],y=0;continue}(v=f[A].indexOf("."))>-1&&(Wt.isNumber(f[A],v)||Wt.isDottedAbbreviation(f[A])||Wt.isURL(f[A])||Wt.isPhoneNr(f[A]))||(S=Wt.isConcatenated(f[A]))&&(M.pop(),M.push(S[0]),T.push(M),M=[],y=0,M.push(S[1]))}M.length&&T.push(M),T=T.filter(function(V){return V.length>0});var B=T.slice(1).reduce(function(V,w){var P=V[V.length-1];return P.length===1&&/^.{1,2}[.]$/.test(P[0])&&!/[.]/.test(w[0])?(V.pop(),V.push(P.concat(w)),V):(V.push(w),V)},[T[0]]);return B.map(function(V,w){if(r.preserve_whitespace&&!r.newline_boundaries&&!r.html_boundaries){var P=V.length*2;return w===0&&(P+=1),d.splice(0,P).join("")}return V.join(" ")})}});var Fx=Z((AEe,Bx)=>{"use strict";a();s();var Tp=class{constructor(t){this.value=t,this.next=void 0}},Ip=class{constructor(){this.clear()}enqueue(t){let r=new Tp(t);this._head?(this._tail.next=r,this._tail=r):(this._head=r,this._tail=r),this._size++}dequeue(){let t=this._head;if(t)return this._head=this._head.next,this._size--,t.value}clear(){this._head=void 0,this._tail=void 0,this._size=0}get size(){return this._size}*[Symbol.iterator](){let t=this._head;for(;t;)yield t.value,t=t.next}};Bx.exports=Ip});var Vx=Z((PEe,Ux)=>{"use strict";a();s();var zk=Fx(),jk=e=>{if(!((Number.isInteger(e)||e===1/0)&&e>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");let t=new zk,r=0,i=()=>{r--,t.size>0&&t.dequeue()()},c=async(d,y,...v)=>{r++;let S=(async()=>d(...v))();y(S);try{await S}catch{}i()},u=(d,y,...v)=>{t.enqueue(c.bind(null,d,y,...v)),(async()=>(await Promise.resolve(),r<e&&t.size>0&&t.dequeue()()))()},f=(d,...y)=>new Promise(v=>{u(d,v,...y)});return Object.defineProperties(f,{activeCount:{get:()=>r},pendingCount:{get:()=>t.size},clearQueue:{value:()=>{t.clear()}}}),f};Ux.exports=jk});var Wp=Z((si,ga)=>{"use strict";a();s();(function(){var e,t="4.18.1",r=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",f="Invalid `imports` option passed into `_.template`",d="__lodash_hash_undefined__",y=500,v="__lodash_placeholder__",S=1,T=2,M=4,A=1,F=2,B=1,V=2,w=4,P=8,N=16,Q=32,j=64,X=128,$=256,ae=512,ye=30,me="...",oe=800,Ae=16,_e=1,Y=2,he=3,ue=1/0,xe=9007199254740991,Be=17976931348623157e292,Te=NaN,Me=4294967295,st=Me-1,et=Me>>>1,qe=[["ary",X],["bind",B],["bindKey",V],["curry",P],["curryRight",N],["flip",ae],["partial",Q],["partialRight",j],["rearg",$]],je="[object Arguments]",ot="[object Array]",Ht="[object AsyncFunction]",kt="[object Boolean]",wt="[object Date]",Bt="[object DOMException]",Kt="[object Error]",Yt="[object Function]",ir="[object GeneratorFunction]",tt="[object Map]",Qt="[object Number]",Vr="[object Null]",Xt="[object Object]",en="[object Promise]",$r="[object Proxy]",bn="[object RegExp]",Zt="[object Set]",tn="[object String]",Ci="[object Symbol]",Oa="[object Undefined]",wi="[object WeakMap]",w6="[object WeakSet]",_i="[object ArrayBuffer]",_o="[object DataView]",wl="[object Float32Array]",_l="[object Float64Array]",El="[object Int8Array]",Tl="[object Int16Array]",Il="[object Int32Array]",kl="[object Uint8Array]",Rl="[object Uint8ClampedArray]",Al="[object Uint16Array]",Ml="[object Uint32Array]",_6=/\b__p \+= '';/g,E6=/\b(__p \+=) '' \+/g,T6=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_d=/&(?:amp|lt|gt|quot|#39);/g,Ed=/[&<>"']/g,I6=RegExp(_d.source),k6=RegExp(Ed.source),R6=/<%-([\s\S]+?)%>/g,A6=/<%([\s\S]+?)%>/g,Td=/<%=([\s\S]+?)%>/g,M6=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L6=/^\w*$/,P6=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ll=/[\\^$.*+?()[\]{}|]/g,O6=RegExp(Ll.source),Pl=/^\s+/,N6=/\s/,D6=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,B6=/\{\n\/\* \[wrapped with (.+)\] \*/,F6=/,? & /,U6=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Id=/[()=,{}\[\]\/\s]/,V6=/\\(\\)?/g,$6=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kd=/\w*$/,q6=/^[-+]0x[0-9a-f]+$/i,W6=/^0b[01]+$/i,G6=/^\[object .+?Constructor\]$/,z6=/^0o[0-7]+$/i,j6=/^(?:0|[1-9]\d*)$/,H6=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Na=/($^)/,K6=/['\n\r\u2028\u2029\\]/g,Da="\\ud800-\\udfff",Y6="\\u0300-\\u036f",Q6="\\ufe20-\\ufe2f",X6="\\u20d0-\\u20ff",Rd=Y6+Q6+X6,Ad="\\u2700-\\u27bf",Md="a-z\\xdf-\\xf6\\xf8-\\xff",Z6="\\xac\\xb1\\xd7\\xf7",J6="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ev="\\u2000-\\u206f",tv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ld="A-Z\\xc0-\\xd6\\xd8-\\xde",Pd="\\ufe0e\\ufe0f",Od=Z6+J6+ev+tv,Ol="['’]",rv="["+Da+"]",Nd="["+Od+"]",Ba="["+Rd+"]",Dd="\\d+",nv="["+Ad+"]",Bd="["+Md+"]",Fd="[^"+Da+Od+Dd+Ad+Md+Ld+"]",Nl="\\ud83c[\\udffb-\\udfff]",ov="(?:"+Ba+"|"+Nl+")",Ud="[^"+Da+"]",Dl="(?:\\ud83c[\\udde6-\\uddff]){2}",Bl="[\\ud800-\\udbff][\\udc00-\\udfff]",Eo="["+Ld+"]",Vd="\\u200d",$d="(?:"+Bd+"|"+Fd+")",iv="(?:"+Eo+"|"+Fd+")",qd="(?:"+Ol+"(?:d|ll|m|re|s|t|ve))?",Wd="(?:"+Ol+"(?:D|LL|M|RE|S|T|VE))?",Gd=ov+"?",zd="["+Pd+"]?",av="(?:"+Vd+"(?:"+[Ud,Dl,Bl].join("|")+")"+zd+Gd+")*",sv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jd=zd+Gd+av,lv="(?:"+[nv,Dl,Bl].join("|")+")"+jd,uv="(?:"+[Ud+Ba+"?",Ba,Dl,Bl,rv].join("|")+")",fv=RegExp(Ol,"g"),pv=RegExp(Ba,"g"),Fl=RegExp(Nl+"(?="+Nl+")|"+uv+jd,"g"),dv=RegExp([Eo+"?"+Bd+"+"+qd+"(?="+[Nd,Eo,"$"].join("|")+")",iv+"+"+Wd+"(?="+[Nd,Eo+$d,"$"].join("|")+")",Eo+"?"+$d+"+"+qd,Eo+"+"+Wd,cv,sv,Dd,lv].join("|"),"g"),mv=RegExp("["+Vd+Da+Rd+Pd+"]"),gv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,hv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],yv=-1,Qe={};Qe[wl]=Qe[_l]=Qe[El]=Qe[Tl]=Qe[Il]=Qe[kl]=Qe[Rl]=Qe[Al]=Qe[Ml]=!0,Qe[je]=Qe[ot]=Qe[_i]=Qe[kt]=Qe[_o]=Qe[wt]=Qe[Kt]=Qe[Yt]=Qe[tt]=Qe[Qt]=Qe[Xt]=Qe[bn]=Qe[Zt]=Qe[tn]=Qe[wi]=!1;var Ye={};Ye[je]=Ye[ot]=Ye[_i]=Ye[_o]=Ye[kt]=Ye[wt]=Ye[wl]=Ye[_l]=Ye[El]=Ye[Tl]=Ye[Il]=Ye[tt]=Ye[Qt]=Ye[Xt]=Ye[bn]=Ye[Zt]=Ye[tn]=Ye[Ci]=Ye[kl]=Ye[Rl]=Ye[Al]=Ye[Ml]=!0,Ye[Kt]=Ye[Yt]=Ye[wi]=!1;var xv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},bv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cv=parseFloat,wv=parseInt,Hd=typeof global=="object"&&global&&global.Object===Object&&global,_v=typeof self=="object"&&self&&self.Object===Object&&self,_t=Hd||_v||Function("return this")(),Ul=typeof si=="object"&&si&&!si.nodeType&&si,Xn=Ul&&typeof ga=="object"&&ga&&!ga.nodeType&&ga,Kd=Xn&&Xn.exports===Ul,Vl=Kd&&Hd.process,yr=(function(){try{var L=Xn&&Xn.require&&Xn.require("util").types;return L||Vl&&Vl.binding&&Vl.binding("util")}catch{}})(),Yd=yr&&yr.isArrayBuffer,Qd=yr&&yr.isDate,Xd=yr&&yr.isMap,Zd=yr&&yr.isRegExp,Jd=yr&&yr.isSet,em=yr&&yr.isTypedArray;function ar(L,q,U){switch(U.length){case 0:return L.call(q);case 1:return L.call(q,U[0]);case 2:return L.call(q,U[0],U[1]);case 3:return L.call(q,U[0],U[1],U[2])}return L.apply(q,U)}function Ev(L,q,U,re){for(var be=-1,Fe=L==null?0:L.length;++be<Fe;){var bt=L[be];q(re,bt,U(bt),L)}return re}function sr(L,q){for(var U=-1,re=L==null?0:L.length;++U<re&&q(L[U],U,L)!==!1;);return L}function Tv(L,q){for(var U=L==null?0:L.length;U--&&q(L[U],U,L)!==!1;);return L}function tm(L,q){for(var U=-1,re=L==null?0:L.length;++U<re;)if(!q(L[U],U,L))return!1;return!0}function vn(L,q){for(var U=-1,re=L==null?0:L.length,be=0,Fe=[];++U<re;){var bt=L[U];q(bt,U,L)&&(Fe[be++]=bt)}return Fe}function Fa(L,q){var U=L==null?0:L.length;return!!U&&To(L,q,0)>-1}function $l(L,q,U){for(var re=-1,be=L==null?0:L.length;++re<be;)if(U(q,L[re]))return!0;return!1}function rt(L,q){for(var U=-1,re=L==null?0:L.length,be=Array(re);++U<re;)be[U]=q(L[U],U,L);return be}function Sn(L,q){for(var U=-1,re=q.length,be=L.length;++U<re;)L[be+U]=q[U];return L}function ql(L,q,U,re){var be=-1,Fe=L==null?0:L.length;for(re&&Fe&&(U=L[++be]);++be<Fe;)U=q(U,L[be],be,L);return U}function Iv(L,q,U,re){var be=L==null?0:L.length;for(re&&be&&(U=L[--be]);be--;)U=q(U,L[be],be,L);return U}function Wl(L,q){for(var U=-1,re=L==null?0:L.length;++U<re;)if(q(L[U],U,L))return!0;return!1}var kv=Gl("length");function Rv(L){return L.split("")}function Av(L){return L.match(U6)||[]}function rm(L,q,U){var re;return U(L,function(be,Fe,bt){if(q(be,Fe,bt))return re=Fe,!1}),re}function Ua(L,q,U,re){for(var be=L.length,Fe=U+(re?1:-1);re?Fe--:++Fe<be;)if(q(L[Fe],Fe,L))return Fe;return-1}function To(L,q,U){return q===q?qv(L,q,U):Ua(L,nm,U)}function Mv(L,q,U,re){for(var be=U-1,Fe=L.length;++be<Fe;)if(re(L[be],q))return be;return-1}function nm(L){return L!==L}function om(L,q){var U=L==null?0:L.length;return U?jl(L,q)/U:Te}function Gl(L){return function(q){return q==null?e:q[L]}}function zl(L){return function(q){return L==null?e:L[q]}}function im(L,q,U,re,be){return be(L,function(Fe,bt,He){U=re?(re=!1,Fe):q(U,Fe,bt,He)}),U}function Lv(L,q){var U=L.length;for(L.sort(q);U--;)L[U]=L[U].value;return L}function jl(L,q){for(var U,re=-1,be=L.length;++re<be;){var Fe=q(L[re]);Fe!==e&&(U=U===e?Fe:U+Fe)}return U}function Hl(L,q){for(var U=-1,re=Array(L);++U<L;)re[U]=q(U);return re}function Pv(L,q){return rt(q,function(U){return[U,L[U]]})}function am(L){return L&&L.slice(0,um(L)+1).replace(Pl,"")}function cr(L){return function(q){return L(q)}}function Kl(L,q){return rt(q,function(U){return L[U]})}function Ei(L,q){return L.has(q)}function sm(L,q){for(var U=-1,re=L.length;++U<re&&To(q,L[U],0)>-1;);return U}function cm(L,q){for(var U=L.length;U--&&To(q,L[U],0)>-1;);return U}function Ov(L,q){for(var U=L.length,re=0;U--;)L[U]===q&&++re;return re}var Nv=zl(xv),Dv=zl(bv);function Bv(L){return"\\"+Sv[L]}function Fv(L,q){return L==null?e:L[q]}function Io(L){return mv.test(L)}function Uv(L){return gv.test(L)}function Vv(L){for(var q,U=[];!(q=L.next()).done;)U.push(q.value);return U}function Yl(L){var q=-1,U=Array(L.size);return L.forEach(function(re,be){U[++q]=[be,re]}),U}function lm(L,q){return function(U){return L(q(U))}}function Cn(L,q){for(var U=-1,re=L.length,be=0,Fe=[];++U<re;){var bt=L[U];(bt===q||bt===v)&&(L[U]=v,Fe[be++]=U)}return Fe}function Va(L){var q=-1,U=Array(L.size);return L.forEach(function(re){U[++q]=re}),U}function $v(L){var q=-1,U=Array(L.size);return L.forEach(function(re){U[++q]=[re,re]}),U}function qv(L,q,U){for(var re=U-1,be=L.length;++re<be;)if(L[re]===q)return re;return-1}function Wv(L,q,U){for(var re=U+1;re--;)if(L[re]===q)return re;return re}function ko(L){return Io(L)?zv(L):kv(L)}function Lr(L){return Io(L)?jv(L):Rv(L)}function um(L){for(var q=L.length;q--&&N6.test(L.charAt(q)););return q}var Gv=zl(vv);function zv(L){for(var q=Fl.lastIndex=0;Fl.test(L);)++q;return q}function jv(L){return L.match(Fl)||[]}function Hv(L){return L.match(dv)||[]}var Kv=(function L(q){q=q==null?_t:wn.defaults(_t.Object(),q,wn.pick(_t,hv));var U=q.Array,re=q.Date,be=q.Error,Fe=q.Function,bt=q.Math,He=q.Object,Ql=q.RegExp,Yv=q.String,xr=q.TypeError,$a=U.prototype,Qv=Fe.prototype,Ro=He.prototype,qa=q["__core-js_shared__"],Wa=Qv.toString,Ue=Ro.hasOwnProperty,Xv=0,fm=(function(){var n=/[^.]+$/.exec(qa&&qa.keys&&qa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ga=Ro.toString,Zv=Wa.call(He),Jv=_t._,eS=Ql("^"+Wa.call(Ue).replace(Ll,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),za=Kd?q.Buffer:e,_n=q.Symbol,ja=q.Uint8Array,pm=za?za.allocUnsafe:e,Ha=lm(He.getPrototypeOf,He),dm=He.create,mm=Ro.propertyIsEnumerable,Ka=$a.splice,gm=_n?_n.isConcatSpreadable:e,Ti=_n?_n.iterator:e,Zn=_n?_n.toStringTag:e,Ya=(function(){try{var n=no(He,"defineProperty");return n({},"",{}),n}catch{}})(),tS=q.clearTimeout!==_t.clearTimeout&&q.clearTimeout,rS=re&&re.now!==_t.Date.now&&re.now,nS=q.setTimeout!==_t.setTimeout&&q.setTimeout,Qa=bt.ceil,Xa=bt.floor,Xl=He.getOwnPropertySymbols,oS=za?za.isBuffer:e,hm=q.isFinite,iS=$a.join,aS=lm(He.keys,He),vt=bt.max,Ot=bt.min,sS=re.now,cS=q.parseInt,ym=bt.random,lS=$a.reverse,Zl=no(q,"DataView"),Ii=no(q,"Map"),Jl=no(q,"Promise"),Ao=no(q,"Set"),ki=no(q,"WeakMap"),Ri=no(He,"create"),Za=ki&&new ki,Mo={},uS=oo(Zl),fS=oo(Ii),pS=oo(Jl),dS=oo(Ao),mS=oo(ki),Ja=_n?_n.prototype:e,Ai=Ja?Ja.valueOf:e,xm=Ja?Ja.toString:e;function b(n){if(ct(n)&&!ve(n)&&!(n instanceof ke)){if(n instanceof br)return n;if(Ue.call(n,"__wrapped__"))return b1(n)}return new br(n)}var Lo=(function(){function n(){}return function(o){if(!it(o))return{};if(dm)return dm(o);n.prototype=o;var l=new n;return n.prototype=e,l}})();function es(){}function br(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}b.templateSettings={escape:R6,evaluate:A6,interpolate:Td,variable:"",imports:{_:b}},b.prototype=es.prototype,b.prototype.constructor=b,br.prototype=Lo(es.prototype),br.prototype.constructor=br;function ke(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Me,this.__views__=[]}function gS(){var n=new ke(this.__wrapped__);return n.__actions__=Jt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Jt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Jt(this.__views__),n}function hS(){if(this.__filtered__){var n=new ke(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function yS(){var n=this.__wrapped__.value(),o=this.__dir__,l=ve(n),h=o<0,x=l?n.length:0,C=R4(0,x,this.__views__),E=C.start,I=C.end,O=I-E,G=h?I:E-1,z=this.__iteratees__,H=z.length,J=0,ie=Ot(O,this.__takeCount__);if(!l||!h&&x==O&&ie==O)return qm(n,this.__actions__);var ge=[];e:for(;O--&&J<ie;){G+=o;for(var we=-1,fe=n[G];++we<H;){var Ie=z[we],Le=Ie.iteratee,fr=Ie.type,Vt=Le(fe);if(fr==Y)fe=Vt;else if(!Vt){if(fr==_e)continue e;break e}}ge[J++]=fe}return ge}ke.prototype=Lo(es.prototype),ke.prototype.constructor=ke;function Jn(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var h=n[o];this.set(h[0],h[1])}}function xS(){this.__data__=Ri?Ri(null):{},this.size=0}function bS(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function vS(n){var o=this.__data__;if(Ri){var l=o[n];return l===d?e:l}return Ue.call(o,n)?o[n]:e}function SS(n){var o=this.__data__;return Ri?o[n]!==e:Ue.call(o,n)}function CS(n,o){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ri&&o===e?d:o,this}Jn.prototype.clear=xS,Jn.prototype.delete=bS,Jn.prototype.get=vS,Jn.prototype.has=SS,Jn.prototype.set=CS;function rn(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var h=n[o];this.set(h[0],h[1])}}function wS(){this.__data__=[],this.size=0}function _S(n){var o=this.__data__,l=ts(o,n);if(l<0)return!1;var h=o.length-1;return l==h?o.pop():Ka.call(o,l,1),--this.size,!0}function ES(n){var o=this.__data__,l=ts(o,n);return l<0?e:o[l][1]}function TS(n){return ts(this.__data__,n)>-1}function IS(n,o){var l=this.__data__,h=ts(l,n);return h<0?(++this.size,l.push([n,o])):l[h][1]=o,this}rn.prototype.clear=wS,rn.prototype.delete=_S,rn.prototype.get=ES,rn.prototype.has=TS,rn.prototype.set=IS;function nn(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var h=n[o];this.set(h[0],h[1])}}function kS(){this.size=0,this.__data__={hash:new Jn,map:new(Ii||rn),string:new Jn}}function RS(n){var o=ds(this,n).delete(n);return this.size-=o?1:0,o}function AS(n){return ds(this,n).get(n)}function MS(n){return ds(this,n).has(n)}function LS(n,o){var l=ds(this,n),h=l.size;return l.set(n,o),this.size+=l.size==h?0:1,this}nn.prototype.clear=kS,nn.prototype.delete=RS,nn.prototype.get=AS,nn.prototype.has=MS,nn.prototype.set=LS;function eo(n){var o=-1,l=n==null?0:n.length;for(this.__data__=new nn;++o<l;)this.add(n[o])}function PS(n){return this.__data__.set(n,d),this}function OS(n){return this.__data__.has(n)}eo.prototype.add=eo.prototype.push=PS,eo.prototype.has=OS;function Pr(n){var o=this.__data__=new rn(n);this.size=o.size}function NS(){this.__data__=new rn,this.size=0}function DS(n){var o=this.__data__,l=o.delete(n);return this.size=o.size,l}function BS(n){return this.__data__.get(n)}function FS(n){return this.__data__.has(n)}function US(n,o){var l=this.__data__;if(l instanceof rn){var h=l.__data__;if(!Ii||h.length<r-1)return h.push([n,o]),this.size=++l.size,this;l=this.__data__=new nn(h)}return l.set(n,o),this.size=l.size,this}Pr.prototype.clear=NS,Pr.prototype.delete=DS,Pr.prototype.get=BS,Pr.prototype.has=FS,Pr.prototype.set=US;function bm(n,o){var l=ve(n),h=!l&&io(n),x=!l&&!h&&Rn(n),C=!l&&!h&&!x&&Do(n),E=l||h||x||C,I=E?Hl(n.length,Yv):[],O=I.length;for(var G in n)(o||Ue.call(n,G))&&!(E&&(G=="length"||x&&(G=="offset"||G=="parent")||C&&(G=="buffer"||G=="byteLength"||G=="byteOffset")||sn(G,O)))&&I.push(G);return I}function vm(n){var o=n.length;return o?n[uu(0,o-1)]:e}function VS(n,o){return ms(Jt(n),to(o,0,n.length))}function $S(n){return ms(Jt(n))}function eu(n,o,l){(l!==e&&!Nr(n[o],l)||l===e&&!(o in n))&&qr(n,o,l)}function Mi(n,o,l){var h=n[o];(!(Ue.call(n,o)&&Nr(h,l))||l===e&&!(o in n))&&qr(n,o,l)}function ts(n,o){for(var l=n.length;l--;)if(Nr(n[l][0],o))return l;return-1}function qS(n,o,l,h){return En(n,function(x,C,E){o(h,x,l(x),E)}),h}function Sm(n,o){return n&&Gr(o,Et(o),n)}function WS(n,o){return n&&Gr(o,tr(o),n)}function qr(n,o,l){o=="__proto__"&&Ya?Ya(n,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[o]=l}function tu(n,o){for(var l=-1,h=o.length,x=U(h),C=n==null;++l<h;)x[l]=C?e:Du(n,o[l]);return x}function to(n,o,l){return n===n&&(l!==e&&(n=n<=l?n:l),o!==e&&(n=n>=o?n:o)),n}function vr(n,o,l,h,x,C){var E,I=o&S,O=o&T,G=o&M;if(l&&(E=x?l(n,h,x,C):l(n)),E!==e)return E;if(!it(n))return n;var z=ve(n);if(z){if(E=M4(n),!I)return Jt(n,E)}else{var H=Nt(n),J=H==Yt||H==ir;if(Rn(n))return zm(n,I);if(H==Xt||H==je||J&&!x){if(E=O||J?{}:u1(n),!I)return O?v4(n,WS(E,n)):b4(n,Sm(E,n))}else{if(!Ye[H])return x?n:{};E=L4(n,H,I)}}C||(C=new Pr);var ie=C.get(n);if(ie)return ie;C.set(n,E),U1(n)?n.forEach(function(fe){E.add(vr(fe,o,l,fe,n,C))}):B1(n)&&n.forEach(function(fe,Ie){E.set(Ie,vr(fe,o,l,Ie,n,C))});var ge=G?O?Su:vu:O?tr:Et,we=z?e:ge(n);return sr(we||n,function(fe,Ie){we&&(Ie=fe,fe=n[Ie]),Mi(E,Ie,vr(fe,o,l,Ie,n,C))}),E}function GS(n){var o=Et(n);return function(l){return Cm(l,n,o)}}function Cm(n,o,l){var h=l.length;if(n==null)return!h;for(n=He(n);h--;){var x=l[h],C=o[x],E=n[x];if(E===e&&!(x in n)||!C(E))return!1}return!0}function wm(n,o,l){if(typeof n!="function")throw new xr(c);return Fi(function(){n.apply(e,l)},o)}function Li(n,o,l,h){var x=-1,C=Fa,E=!0,I=n.length,O=[],G=o.length;if(!I)return O;l&&(o=rt(o,cr(l))),h?(C=$l,E=!1):o.length>=r&&(C=Ei,E=!1,o=new eo(o));e:for(;++x<I;){var z=n[x],H=l==null?z:l(z);if(z=h||z!==0?z:0,E&&H===H){for(var J=G;J--;)if(o[J]===H)continue e;O.push(z)}else C(o,H,h)||O.push(z)}return O}var En=Qm(Wr),_m=Qm(nu,!0);function zS(n,o){var l=!0;return En(n,function(h,x,C){return l=!!o(h,x,C),l}),l}function rs(n,o,l){for(var h=-1,x=n.length;++h<x;){var C=n[h],E=o(C);if(E!=null&&(I===e?E===E&&!ur(E):l(E,I)))var I=E,O=C}return O}function jS(n,o,l,h){var x=n.length;for(l=Ce(l),l<0&&(l=-l>x?0:x+l),h=h===e||h>x?x:Ce(h),h<0&&(h+=x),h=l>h?0:$1(h);l<h;)n[l++]=o;return n}function Em(n,o){var l=[];return En(n,function(h,x,C){o(h,x,C)&&l.push(h)}),l}function Rt(n,o,l,h,x){var C=-1,E=n.length;for(l||(l=O4),x||(x=[]);++C<E;){var I=n[C];o>0&&l(I)?o>1?Rt(I,o-1,l,h,x):Sn(x,I):h||(x[x.length]=I)}return x}var ru=Xm(),Tm=Xm(!0);function Wr(n,o){return n&&ru(n,o,Et)}function nu(n,o){return n&&Tm(n,o,Et)}function ns(n,o){return vn(o,function(l){return cn(n[l])})}function ro(n,o){o=In(o,n);for(var l=0,h=o.length;n!=null&&l<h;)n=n[Or(o[l++])];return l&&l==h?n:e}function Im(n,o,l){var h=o(n);return ve(n)?h:Sn(h,l(n))}function Ft(n){return n==null?n===e?Oa:Vr:Zn&&Zn in He(n)?k4(n):$4(n)}function ou(n,o){return n>o}function HS(n,o){return n!=null&&Ue.call(n,o)}function KS(n,o){return n!=null&&o in He(n)}function YS(n,o,l){return n>=Ot(o,l)&&n<vt(o,l)}function iu(n,o,l){for(var h=l?$l:Fa,x=n[0].length,C=n.length,E=C,I=U(C),O=1/0,G=[];E--;){var z=n[E];E&&o&&(z=rt(z,cr(o))),O=Ot(z.length,O),I[E]=!l&&(o||x>=120&&z.length>=120)?new eo(E&&z):e}z=n[0];var H=-1,J=I[0];e:for(;++H<x&&G.length<O;){var ie=z[H],ge=o?o(ie):ie;if(ie=l||ie!==0?ie:0,!(J?Ei(J,ge):h(G,ge,l))){for(E=C;--E;){var we=I[E];if(!(we?Ei(we,ge):h(n[E],ge,l)))continue e}J&&J.push(ge),G.push(ie)}}return G}function QS(n,o,l,h){return Wr(n,function(x,C,E){o(h,l(x),C,E)}),h}function Pi(n,o,l){o=In(o,n),n=m1(n,o);var h=n==null?n:n[Or(Cr(o))];return h==null?e:ar(h,n,l)}function km(n){return ct(n)&&Ft(n)==je}function XS(n){return ct(n)&&Ft(n)==_i}function ZS(n){return ct(n)&&Ft(n)==wt}function Oi(n,o,l,h,x){return n===o?!0:n==null||o==null||!ct(n)&&!ct(o)?n!==n&&o!==o:JS(n,o,l,h,Oi,x)}function JS(n,o,l,h,x,C){var E=ve(n),I=ve(o),O=E?ot:Nt(n),G=I?ot:Nt(o);O=O==je?Xt:O,G=G==je?Xt:G;var z=O==Xt,H=G==Xt,J=O==G;if(J&&Rn(n)){if(!Rn(o))return!1;E=!0,z=!1}if(J&&!z)return C||(C=new Pr),E||Do(n)?s1(n,o,l,h,x,C):T4(n,o,O,l,h,x,C);if(!(l&A)){var ie=z&&Ue.call(n,"__wrapped__"),ge=H&&Ue.call(o,"__wrapped__");if(ie||ge){var we=ie?n.value():n,fe=ge?o.value():o;return C||(C=new Pr),x(we,fe,l,h,C)}}return J?(C||(C=new Pr),I4(n,o,l,h,x,C)):!1}function e4(n){return ct(n)&&Nt(n)==tt}function au(n,o,l,h){var x=l.length,C=x,E=!h;if(n==null)return!C;for(n=He(n);x--;){var I=l[x];if(E&&I[2]?I[1]!==n[I[0]]:!(I[0]in n))return!1}for(;++x<C;){I=l[x];var O=I[0],G=n[O],z=I[1];if(E&&I[2]){if(G===e&&!(O in n))return!1}else{var H=new Pr;if(h)var J=h(G,z,O,n,o,H);if(!(J===e?Oi(z,G,A|F,h,H):J))return!1}}return!0}function Rm(n){if(!it(n)||D4(n))return!1;var o=cn(n)?eS:G6;return o.test(oo(n))}function t4(n){return ct(n)&&Ft(n)==bn}function r4(n){return ct(n)&&Nt(n)==Zt}function n4(n){return ct(n)&&vs(n.length)&&!!Qe[Ft(n)]}function Am(n){return typeof n=="function"?n:n==null?rr:typeof n=="object"?ve(n)?Pm(n[0],n[1]):Lm(n):J1(n)}function su(n){if(!Bi(n))return aS(n);var o=[];for(var l in He(n))Ue.call(n,l)&&l!="constructor"&&o.push(l);return o}function o4(n){if(!it(n))return V4(n);var o=Bi(n),l=[];for(var h in n)h=="constructor"&&(o||!Ue.call(n,h))||l.push(h);return l}function cu(n,o){return n<o}function Mm(n,o){var l=-1,h=er(n)?U(n.length):[];return En(n,function(x,C,E){h[++l]=o(x,C,E)}),h}function Lm(n){var o=wu(n);return o.length==1&&o[0][2]?p1(o[0][0],o[0][1]):function(l){return l===n||au(l,n,o)}}function Pm(n,o){return Eu(n)&&f1(o)?p1(Or(n),o):function(l){var h=Du(l,n);return h===e&&h===o?Bu(l,n):Oi(o,h,A|F)}}function os(n,o,l,h,x){n!==o&&ru(o,function(C,E){if(x||(x=new Pr),it(C))i4(n,o,E,l,os,h,x);else{var I=h?h(Iu(n,E),C,E+"",n,o,x):e;I===e&&(I=C),eu(n,E,I)}},tr)}function i4(n,o,l,h,x,C,E){var I=Iu(n,l),O=Iu(o,l),G=E.get(O);if(G){eu(n,l,G);return}var z=C?C(I,O,l+"",n,o,E):e,H=z===e;if(H){var J=ve(O),ie=!J&&Rn(O),ge=!J&&!ie&&Do(O);z=O,J||ie||ge?ve(I)?z=I:ut(I)?z=Jt(I):ie?(H=!1,z=zm(O,!0)):ge?(H=!1,z=jm(O,!0)):z=[]:Ui(O)||io(O)?(z=I,io(I)?z=q1(I):(!it(I)||cn(I))&&(z=u1(O))):H=!1}H&&(E.set(O,z),x(z,O,h,C,E),E.delete(O)),eu(n,l,z)}function Om(n,o){var l=n.length;if(l)return o+=o<0?l:0,sn(o,l)?n[o]:e}function Nm(n,o,l){o.length?o=rt(o,function(C){return ve(C)?function(E){return ro(E,C.length===1?C[0]:C)}:C}):o=[rr];var h=-1;o=rt(o,cr(pe()));var x=Mm(n,function(C,E,I){var O=rt(o,function(G){return G(C)});return{criteria:O,index:++h,value:C}});return Lv(x,function(C,E){return x4(C,E,l)})}function a4(n,o){return Dm(n,o,function(l,h){return Bu(n,h)})}function Dm(n,o,l){for(var h=-1,x=o.length,C={};++h<x;){var E=o[h],I=ro(n,E);l(I,E)&&Ni(C,In(E,n),I)}return C}function s4(n){return function(o){return ro(o,n)}}function lu(n,o,l,h){var x=h?Mv:To,C=-1,E=o.length,I=n;for(n===o&&(o=Jt(o)),l&&(I=rt(n,cr(l)));++C<E;)for(var O=0,G=o[C],z=l?l(G):G;(O=x(I,z,O,h))>-1;)I!==n&&Ka.call(I,O,1),Ka.call(n,O,1);return n}function Bm(n,o){for(var l=n?o.length:0,h=l-1;l--;){var x=o[l];if(l==h||x!==C){var C=x;sn(x)?Ka.call(n,x,1):du(n,x)}}return n}function uu(n,o){return n+Xa(ym()*(o-n+1))}function c4(n,o,l,h){for(var x=-1,C=vt(Qa((o-n)/(l||1)),0),E=U(C);C--;)E[h?C:++x]=n,n+=l;return E}function fu(n,o){var l="";if(!n||o<1||o>xe)return l;do o%2&&(l+=n),o=Xa(o/2),o&&(n+=n);while(o);return l}function Ee(n,o){return ku(d1(n,o,rr),n+"")}function l4(n){return vm(Bo(n))}function u4(n,o){var l=Bo(n);return ms(l,to(o,0,l.length))}function Ni(n,o,l,h){if(!it(n))return n;o=In(o,n);for(var x=-1,C=o.length,E=C-1,I=n;I!=null&&++x<C;){var O=Or(o[x]),G=l;if(O==="__proto__"||O==="constructor"||O==="prototype")return n;if(x!=E){var z=I[O];G=h?h(z,O,I):e,G===e&&(G=it(z)?z:sn(o[x+1])?[]:{})}Mi(I,O,G),I=I[O]}return n}var Fm=Za?function(n,o){return Za.set(n,o),n}:rr,f4=Ya?function(n,o){return Ya(n,"toString",{configurable:!0,enumerable:!1,value:Uu(o),writable:!0})}:rr;function p4(n){return ms(Bo(n))}function Sr(n,o,l){var h=-1,x=n.length;o<0&&(o=-o>x?0:x+o),l=l>x?x:l,l<0&&(l+=x),x=o>l?0:l-o>>>0,o>>>=0;for(var C=U(x);++h<x;)C[h]=n[h+o];return C}function d4(n,o){var l;return En(n,function(h,x,C){return l=o(h,x,C),!l}),!!l}function is(n,o,l){var h=0,x=n==null?h:n.length;if(typeof o=="number"&&o===o&&x<=et){for(;h<x;){var C=h+x>>>1,E=n[C];E!==null&&!ur(E)&&(l?E<=o:E<o)?h=C+1:x=C}return x}return pu(n,o,rr,l)}function pu(n,o,l,h){var x=0,C=n==null?0:n.length;if(C===0)return 0;o=l(o);for(var E=o!==o,I=o===null,O=ur(o),G=o===e;x<C;){var z=Xa((x+C)/2),H=l(n[z]),J=H!==e,ie=H===null,ge=H===H,we=ur(H);if(E)var fe=h||ge;else G?fe=ge&&(h||J):I?fe=ge&&J&&(h||!ie):O?fe=ge&&J&&!ie&&(h||!we):ie||we?fe=!1:fe=h?H<=o:H<o;fe?x=z+1:C=z}return Ot(C,st)}function Um(n,o){for(var l=-1,h=n.length,x=0,C=[];++l<h;){var E=n[l],I=o?o(E):E;if(!l||!Nr(I,O)){var O=I;C[x++]=E===0?0:E}}return C}function Vm(n){return typeof n=="number"?n:ur(n)?Te:+n}function lr(n){if(typeof n=="string")return n;if(ve(n))return rt(n,lr)+"";if(ur(n))return xm?xm.call(n):"";var o=n+"";return o=="0"&&1/n==-ue?"-0":o}function Tn(n,o,l){var h=-1,x=Fa,C=n.length,E=!0,I=[],O=I;if(l)E=!1,x=$l;else if(C>=r){var G=o?null:_4(n);if(G)return Va(G);E=!1,x=Ei,O=new eo}else O=o?[]:I;e:for(;++h<C;){var z=n[h],H=o?o(z):z;if(z=l||z!==0?z:0,E&&H===H){for(var J=O.length;J--;)if(O[J]===H)continue e;o&&O.push(H),I.push(z)}else x(O,H,l)||(O!==I&&O.push(H),I.push(z))}return I}function du(n,o){o=In(o,n);var l=-1,h=o.length;if(!h)return!0;for(;++l<h;){var x=Or(o[l]);if(x==="__proto__"&&!Ue.call(n,"__proto__")||(x==="constructor"||x==="prototype")&&l<h-1)return!1}var C=m1(n,o);return C==null||delete C[Or(Cr(o))]}function $m(n,o,l,h){return Ni(n,o,l(ro(n,o)),h)}function as(n,o,l,h){for(var x=n.length,C=h?x:-1;(h?C--:++C<x)&&o(n[C],C,n););return l?Sr(n,h?0:C,h?C+1:x):Sr(n,h?C+1:0,h?x:C)}function qm(n,o){var l=n;return l instanceof ke&&(l=l.value()),ql(o,function(h,x){return x.func.apply(x.thisArg,Sn([h],x.args))},l)}function mu(n,o,l){var h=n.length;if(h<2)return h?Tn(n[0]):[];for(var x=-1,C=U(h);++x<h;)for(var E=n[x],I=-1;++I<h;)I!=x&&(C[x]=Li(C[x]||E,n[I],o,l));return Tn(Rt(C,1),o,l)}function Wm(n,o,l){for(var h=-1,x=n.length,C=o.length,E={};++h<x;){var I=h<C?o[h]:e;l(E,n[h],I)}return E}function gu(n){return ut(n)?n:[]}function hu(n){return typeof n=="function"?n:rr}function In(n,o){return ve(n)?n:Eu(n,o)?[n]:x1(Ve(n))}var m4=Ee;function kn(n,o,l){var h=n.length;return l=l===e?h:l,!o&&l>=h?n:Sr(n,o,l)}var Gm=tS||function(n){return _t.clearTimeout(n)};function zm(n,o){if(o)return n.slice();var l=n.length,h=pm?pm(l):new n.constructor(l);return n.copy(h),h}function yu(n){var o=new n.constructor(n.byteLength);return new ja(o).set(new ja(n)),o}function g4(n,o){var l=o?yu(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function h4(n){var o=new n.constructor(n.source,kd.exec(n));return o.lastIndex=n.lastIndex,o}function y4(n){return Ai?He(Ai.call(n)):{}}function jm(n,o){var l=o?yu(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Hm(n,o){if(n!==o){var l=n!==e,h=n===null,x=n===n,C=ur(n),E=o!==e,I=o===null,O=o===o,G=ur(o);if(!I&&!G&&!C&&n>o||C&&E&&O&&!I&&!G||h&&E&&O||!l&&O||!x)return 1;if(!h&&!C&&!G&&n<o||G&&l&&x&&!h&&!C||I&&l&&x||!E&&x||!O)return-1}return 0}function x4(n,o,l){for(var h=-1,x=n.criteria,C=o.criteria,E=x.length,I=l.length;++h<E;){var O=Hm(x[h],C[h]);if(O){if(h>=I)return O;var G=l[h];return O*(G=="desc"?-1:1)}}return n.index-o.index}function Km(n,o,l,h){for(var x=-1,C=n.length,E=l.length,I=-1,O=o.length,G=vt(C-E,0),z=U(O+G),H=!h;++I<O;)z[I]=o[I];for(;++x<E;)(H||x<C)&&(z[l[x]]=n[x]);for(;G--;)z[I++]=n[x++];return z}function Ym(n,o,l,h){for(var x=-1,C=n.length,E=-1,I=l.length,O=-1,G=o.length,z=vt(C-I,0),H=U(z+G),J=!h;++x<z;)H[x]=n[x];for(var ie=x;++O<G;)H[ie+O]=o[O];for(;++E<I;)(J||x<C)&&(H[ie+l[E]]=n[x++]);return H}function Jt(n,o){var l=-1,h=n.length;for(o||(o=U(h));++l<h;)o[l]=n[l];return o}function Gr(n,o,l,h){var x=!l;l||(l={});for(var C=-1,E=o.length;++C<E;){var I=o[C],O=h?h(l[I],n[I],I,l,n):e;O===e&&(O=n[I]),x?qr(l,I,O):Mi(l,I,O)}return l}function b4(n,o){return Gr(n,_u(n),o)}function v4(n,o){return Gr(n,c1(n),o)}function ss(n,o){return function(l,h){var x=ve(l)?Ev:qS,C=o?o():{};return x(l,n,pe(h,2),C)}}function Po(n){return Ee(function(o,l){var h=-1,x=l.length,C=x>1?l[x-1]:e,E=x>2?l[2]:e;for(C=n.length>3&&typeof C=="function"?(x--,C):e,E&&Ut(l[0],l[1],E)&&(C=x<3?e:C,x=1),o=He(o);++h<x;){var I=l[h];I&&n(o,I,h,C)}return o})}function Qm(n,o){return function(l,h){if(l==null)return l;if(!er(l))return n(l,h);for(var x=l.length,C=o?x:-1,E=He(l);(o?C--:++C<x)&&h(E[C],C,E)!==!1;);return l}}function Xm(n){return function(o,l,h){for(var x=-1,C=He(o),E=h(o),I=E.length;I--;){var O=E[n?I:++x];if(l(C[O],O,C)===!1)break}return o}}function S4(n,o,l){var h=o&B,x=Di(n);function C(){var E=this&&this!==_t&&this instanceof C?x:n;return E.apply(h?l:this,arguments)}return C}function Zm(n){return function(o){o=Ve(o);var l=Io(o)?Lr(o):e,h=l?l[0]:o.charAt(0),x=l?kn(l,1).join(""):o.slice(1);return h[n]()+x}}function Oo(n){return function(o){return ql(X1(Q1(o).replace(fv,"")),n,"")}}function Di(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=Lo(n.prototype),h=n.apply(l,o);return it(h)?h:l}}function C4(n,o,l){var h=Di(n);function x(){for(var C=arguments.length,E=U(C),I=C,O=No(x);I--;)E[I]=arguments[I];var G=C<3&&E[0]!==O&&E[C-1]!==O?[]:Cn(E,O);if(C-=G.length,C<l)return n1(n,o,cs,x.placeholder,e,E,G,e,e,l-C);var z=this&&this!==_t&&this instanceof x?h:n;return ar(z,this,E)}return x}function Jm(n){return function(o,l,h){var x=He(o);if(!er(o)){var C=pe(l,3);o=Et(o),l=function(I){return C(x[I],I,x)}}var E=n(o,l,h);return E>-1?x[C?o[E]:E]:e}}function e1(n){return an(function(o){var l=o.length,h=l,x=br.prototype.thru;for(n&&o.reverse();h--;){var C=o[h];if(typeof C!="function")throw new xr(c);if(x&&!E&&ps(C)=="wrapper")var E=new br([],!0)}for(h=E?h:l;++h<l;){C=o[h];var I=ps(C),O=I=="wrapper"?Cu(C):e;O&&Tu(O[0])&&O[1]==(X|P|Q|$)&&!O[4].length&&O[9]==1?E=E[ps(O[0])].apply(E,O[3]):E=C.length==1&&Tu(C)?E[I]():E.thru(C)}return function(){var G=arguments,z=G[0];if(E&&G.length==1&&ve(z))return E.plant(z).value();for(var H=0,J=l?o[H].apply(this,G):z;++H<l;)J=o[H].call(this,J);return J}})}function cs(n,o,l,h,x,C,E,I,O,G){var z=o&X,H=o&B,J=o&V,ie=o&(P|N),ge=o&ae,we=J?e:Di(n);function fe(){for(var Ie=arguments.length,Le=U(Ie),fr=Ie;fr--;)Le[fr]=arguments[fr];if(ie)var Vt=No(fe),pr=Ov(Le,Vt);if(h&&(Le=Km(Le,h,x,ie)),C&&(Le=Ym(Le,C,E,ie)),Ie-=pr,ie&&Ie<G){var ft=Cn(Le,Vt);return n1(n,o,cs,fe.placeholder,l,Le,ft,I,O,G-Ie)}var Dr=H?l:this,un=J?Dr[n]:n;return Ie=Le.length,I?Le=q4(Le,I):ge&&Ie>1&&Le.reverse(),z&&O<Ie&&(Le.length=O),this&&this!==_t&&this instanceof fe&&(un=we||Di(un)),un.apply(Dr,Le)}return fe}function t1(n,o){return function(l,h){return QS(l,n,o(h),{})}}function ls(n,o){return function(l,h){var x;if(l===e&&h===e)return o;if(l!==e&&(x=l),h!==e){if(x===e)return h;typeof l=="string"||typeof h=="string"?(l=lr(l),h=lr(h)):(l=Vm(l),h=Vm(h)),x=n(l,h)}return x}}function xu(n){return an(function(o){return o=rt(o,cr(pe())),Ee(function(l){var h=this;return n(o,function(x){return ar(x,h,l)})})})}function us(n,o){o=o===e?" ":lr(o);var l=o.length;if(l<2)return l?fu(o,n):o;var h=fu(o,Qa(n/ko(o)));return Io(o)?kn(Lr(h),0,n).join(""):h.slice(0,n)}function w4(n,o,l,h){var x=o&B,C=Di(n);function E(){for(var I=-1,O=arguments.length,G=-1,z=h.length,H=U(z+O),J=this&&this!==_t&&this instanceof E?C:n;++G<z;)H[G]=h[G];for(;O--;)H[G++]=arguments[++I];return ar(J,x?l:this,H)}return E}function r1(n){return function(o,l,h){return h&&typeof h!="number"&&Ut(o,l,h)&&(l=h=e),o=ln(o),l===e?(l=o,o=0):l=ln(l),h=h===e?o<l?1:-1:ln(h),c4(o,l,h,n)}}function fs(n){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=wr(o),l=wr(l)),n(o,l)}}function n1(n,o,l,h,x,C,E,I,O,G){var z=o&P,H=z?E:e,J=z?e:E,ie=z?C:e,ge=z?e:C;o|=z?Q:j,o&=~(z?j:Q),o&w||(o&=~(B|V));var we=[n,o,x,ie,H,ge,J,I,O,G],fe=l.apply(e,we);return Tu(n)&&g1(fe,we),fe.placeholder=h,h1(fe,n,o)}function bu(n){var o=bt[n];return function(l,h){if(l=wr(l),h=h==null?0:Ot(Ce(h),292),h&&hm(l)){var x=(Ve(l)+"e").split("e"),C=o(x[0]+"e"+(+x[1]+h));return x=(Ve(C)+"e").split("e"),+(x[0]+"e"+(+x[1]-h))}return o(l)}}var _4=Ao&&1/Va(new Ao([,-0]))[1]==ue?function(n){return new Ao(n)}:qu;function o1(n){return function(o){var l=Nt(o);return l==tt?Yl(o):l==Zt?$v(o):Pv(o,n(o))}}function on(n,o,l,h,x,C,E,I){var O=o&V;if(!O&&typeof n!="function")throw new xr(c);var G=h?h.length:0;if(G||(o&=~(Q|j),h=x=e),E=E===e?E:vt(Ce(E),0),I=I===e?I:Ce(I),G-=x?x.length:0,o&j){var z=h,H=x;h=x=e}var J=O?e:Cu(n),ie=[n,o,l,h,x,z,H,C,E,I];if(J&&U4(ie,J),n=ie[0],o=ie[1],l=ie[2],h=ie[3],x=ie[4],I=ie[9]=ie[9]===e?O?0:n.length:vt(ie[9]-G,0),!I&&o&(P|N)&&(o&=~(P|N)),!o||o==B)var ge=S4(n,o,l);else o==P||o==N?ge=C4(n,o,I):(o==Q||o==(B|Q))&&!x.length?ge=w4(n,o,l,h):ge=cs.apply(e,ie);var we=J?Fm:g1;return h1(we(ge,ie),n,o)}function i1(n,o,l,h){return n===e||Nr(n,Ro[l])&&!Ue.call(h,l)?o:n}function a1(n,o,l,h,x,C){return it(n)&&it(o)&&(C.set(o,n),os(n,o,e,a1,C),C.delete(o)),n}function E4(n){return Ui(n)?e:n}function s1(n,o,l,h,x,C){var E=l&A,I=n.length,O=o.length;if(I!=O&&!(E&&O>I))return!1;var G=C.get(n),z=C.get(o);if(G&&z)return G==o&&z==n;var H=-1,J=!0,ie=l&F?new eo:e;for(C.set(n,o),C.set(o,n);++H<I;){var ge=n[H],we=o[H];if(h)var fe=E?h(we,ge,H,o,n,C):h(ge,we,H,n,o,C);if(fe!==e){if(fe)continue;J=!1;break}if(ie){if(!Wl(o,function(Ie,Le){if(!Ei(ie,Le)&&(ge===Ie||x(ge,Ie,l,h,C)))return ie.push(Le)})){J=!1;break}}else if(!(ge===we||x(ge,we,l,h,C))){J=!1;break}}return C.delete(n),C.delete(o),J}function T4(n,o,l,h,x,C,E){switch(l){case _o:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case _i:return!(n.byteLength!=o.byteLength||!C(new ja(n),new ja(o)));case kt:case wt:case Qt:return Nr(+n,+o);case Kt:return n.name==o.name&&n.message==o.message;case bn:case tn:return n==o+"";case tt:var I=Yl;case Zt:var O=h&A;if(I||(I=Va),n.size!=o.size&&!O)return!1;var G=E.get(n);if(G)return G==o;h|=F,E.set(n,o);var z=s1(I(n),I(o),h,x,C,E);return E.delete(n),z;case Ci:if(Ai)return Ai.call(n)==Ai.call(o)}return!1}function I4(n,o,l,h,x,C){var E=l&A,I=vu(n),O=I.length,G=vu(o),z=G.length;if(O!=z&&!E)return!1;for(var H=O;H--;){var J=I[H];if(!(E?J in o:Ue.call(o,J)))return!1}var ie=C.get(n),ge=C.get(o);if(ie&&ge)return ie==o&&ge==n;var we=!0;C.set(n,o),C.set(o,n);for(var fe=E;++H<O;){J=I[H];var Ie=n[J],Le=o[J];if(h)var fr=E?h(Le,Ie,J,o,n,C):h(Ie,Le,J,n,o,C);if(!(fr===e?Ie===Le||x(Ie,Le,l,h,C):fr)){we=!1;break}fe||(fe=J=="constructor")}if(we&&!fe){var Vt=n.constructor,pr=o.constructor;Vt!=pr&&"constructor"in n&&"constructor"in o&&!(typeof Vt=="function"&&Vt instanceof Vt&&typeof pr=="function"&&pr instanceof pr)&&(we=!1)}return C.delete(n),C.delete(o),we}function an(n){return ku(d1(n,e,C1),n+"")}function vu(n){return Im(n,Et,_u)}function Su(n){return Im(n,tr,c1)}var Cu=Za?function(n){return Za.get(n)}:qu;function ps(n){for(var o=n.name+"",l=Mo[o],h=Ue.call(Mo,o)?l.length:0;h--;){var x=l[h],C=x.func;if(C==null||C==n)return x.name}return o}function No(n){var o=Ue.call(b,"placeholder")?b:n;return o.placeholder}function pe(){var n=b.iteratee||Vu;return n=n===Vu?Am:n,arguments.length?n(arguments[0],arguments[1]):n}function ds(n,o){var l=n.__data__;return N4(o)?l[typeof o=="string"?"string":"hash"]:l.map}function wu(n){for(var o=Et(n),l=o.length;l--;){var h=o[l],x=n[h];o[l]=[h,x,f1(x)]}return o}function no(n,o){var l=Fv(n,o);return Rm(l)?l:e}function k4(n){var o=Ue.call(n,Zn),l=n[Zn];try{n[Zn]=e;var h=!0}catch{}var x=Ga.call(n);return h&&(o?n[Zn]=l:delete n[Zn]),x}var _u=Xl?function(n){return n==null?[]:(n=He(n),vn(Xl(n),function(o){return mm.call(n,o)}))}:Wu,c1=Xl?function(n){for(var o=[];n;)Sn(o,_u(n)),n=Ha(n);return o}:Wu,Nt=Ft;(Zl&&Nt(new Zl(new ArrayBuffer(1)))!=_o||Ii&&Nt(new Ii)!=tt||Jl&&Nt(Jl.resolve())!=en||Ao&&Nt(new Ao)!=Zt||ki&&Nt(new ki)!=wi)&&(Nt=function(n){var o=Ft(n),l=o==Xt?n.constructor:e,h=l?oo(l):"";if(h)switch(h){case uS:return _o;case fS:return tt;case pS:return en;case dS:return Zt;case mS:return wi}return o});function R4(n,o,l){for(var h=-1,x=l.length;++h<x;){var C=l[h],E=C.size;switch(C.type){case"drop":n+=E;break;case"dropRight":o-=E;break;case"take":o=Ot(o,n+E);break;case"takeRight":n=vt(n,o-E);break}}return{start:n,end:o}}function A4(n){var o=n.match(B6);return o?o[1].split(F6):[]}function l1(n,o,l){o=In(o,n);for(var h=-1,x=o.length,C=!1;++h<x;){var E=Or(o[h]);if(!(C=n!=null&&l(n,E)))break;n=n[E]}return C||++h!=x?C:(x=n==null?0:n.length,!!x&&vs(x)&&sn(E,x)&&(ve(n)||io(n)))}function M4(n){var o=n.length,l=new n.constructor(o);return o&&typeof n[0]=="string"&&Ue.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function u1(n){return typeof n.constructor=="function"&&!Bi(n)?Lo(Ha(n)):{}}function L4(n,o,l){var h=n.constructor;switch(o){case _i:return yu(n);case kt:case wt:return new h(+n);case _o:return g4(n,l);case wl:case _l:case El:case Tl:case Il:case kl:case Rl:case Al:case Ml:return jm(n,l);case tt:return new h;case Qt:case tn:return new h(n);case bn:return h4(n);case Zt:return new h;case Ci:return y4(n)}}function P4(n,o){var l=o.length;if(!l)return n;var h=l-1;return o[h]=(l>1?"& ":"")+o[h],o=o.join(l>2?", ":" "),n.replace(D6,`{
/* [wrapped with `+o+`] */
`)}function O4(n){return ve(n)||io(n)||!!(gm&&n&&n[gm])}function sn(n,o){var l=typeof n;return o=o??xe,!!o&&(l=="number"||l!="symbol"&&j6.test(n))&&n>-1&&n%1==0&&n<o}function Ut(n,o,l){if(!it(l))return!1;var h=typeof o;return(h=="number"?er(l)&&sn(o,l.length):h=="string"&&o in l)?Nr(l[o],n):!1}function Eu(n,o){if(ve(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||ur(n)?!0:L6.test(n)||!M6.test(n)||o!=null&&n in He(o)}function N4(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function Tu(n){var o=ps(n),l=b[o];if(typeof l!="function"||!(o in ke.prototype))return!1;if(n===l)return!0;var h=Cu(l);return!!h&&n===h[0]}function D4(n){return!!fm&&fm in n}var B4=qa?cn:Gu;function Bi(n){var o=n&&n.constructor,l=typeof o=="function"&&o.prototype||Ro;return n===l}function f1(n){return n===n&&!it(n)}function p1(n,o){return function(l){return l==null?!1:l[n]===o&&(o!==e||n in He(l))}}function F4(n){var o=xs(n,function(h){return l.size===y&&l.clear(),h}),l=o.cache;return o}function U4(n,o){var l=n[1],h=o[1],x=l|h,C=x<(B|V|X),E=h==X&&l==P||h==X&&l==$&&n[7].length<=o[8]||h==(X|$)&&o[7].length<=o[8]&&l==P;if(!(C||E))return n;h&B&&(n[2]=o[2],x|=l&B?0:w);var I=o[3];if(I){var O=n[3];n[3]=O?Km(O,I,o[4]):I,n[4]=O?Cn(n[3],v):o[4]}return I=o[5],I&&(O=n[5],n[5]=O?Ym(O,I,o[6]):I,n[6]=O?Cn(n[5],v):o[6]),I=o[7],I&&(n[7]=I),h&X&&(n[8]=n[8]==null?o[8]:Ot(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=x,n}function V4(n){var o=[];if(n!=null)for(var l in He(n))o.push(l);return o}function $4(n){return Ga.call(n)}function d1(n,o,l){return o=vt(o===e?n.length-1:o,0),function(){for(var h=arguments,x=-1,C=vt(h.length-o,0),E=U(C);++x<C;)E[x]=h[o+x];x=-1;for(var I=U(o+1);++x<o;)I[x]=h[x];return I[o]=l(E),ar(n,this,I)}}function m1(n,o){return o.length<2?n:ro(n,Sr(o,0,-1))}function q4(n,o){for(var l=n.length,h=Ot(o.length,l),x=Jt(n);h--;){var C=o[h];n[h]=sn(C,l)?x[C]:e}return n}function Iu(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var g1=y1(Fm),Fi=nS||function(n,o){return _t.setTimeout(n,o)},ku=y1(f4);function h1(n,o,l){var h=o+"";return ku(n,P4(h,W4(A4(h),l)))}function y1(n){var o=0,l=0;return function(){var h=sS(),x=Ae-(h-l);if(l=h,x>0){if(++o>=oe)return arguments[0]}else o=0;return n.apply(e,arguments)}}function ms(n,o){var l=-1,h=n.length,x=h-1;for(o=o===e?h:o;++l<o;){var C=uu(l,x),E=n[C];n[C]=n[l],n[l]=E}return n.length=o,n}var x1=F4(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(P6,function(l,h,x,C){o.push(x?C.replace(V6,"$1"):h||l)}),o});function Or(n){if(typeof n=="string"||ur(n))return n;var o=n+"";return o=="0"&&1/n==-ue?"-0":o}function oo(n){if(n!=null){try{return Wa.call(n)}catch{}try{return n+""}catch{}}return""}function W4(n,o){return sr(qe,function(l){var h="_."+l[0];o&l[1]&&!Fa(n,h)&&n.push(h)}),n.sort()}function b1(n){if(n instanceof ke)return n.clone();var o=new br(n.__wrapped__,n.__chain__);return o.__actions__=Jt(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function G4(n,o,l){(l?Ut(n,o,l):o===e)?o=1:o=vt(Ce(o),0);var h=n==null?0:n.length;if(!h||o<1)return[];for(var x=0,C=0,E=U(Qa(h/o));x<h;)E[C++]=Sr(n,x,x+=o);return E}function z4(n){for(var o=-1,l=n==null?0:n.length,h=0,x=[];++o<l;){var C=n[o];C&&(x[h++]=C)}return x}function j4(){var n=arguments.length;if(!n)return[];for(var o=U(n-1),l=arguments[0],h=n;h--;)o[h-1]=arguments[h];return Sn(ve(l)?Jt(l):[l],Rt(o,1))}var H4=Ee(function(n,o){return ut(n)?Li(n,Rt(o,1,ut,!0)):[]}),K4=Ee(function(n,o){var l=Cr(o);return ut(l)&&(l=e),ut(n)?Li(n,Rt(o,1,ut,!0),pe(l,2)):[]}),Y4=Ee(function(n,o){var l=Cr(o);return ut(l)&&(l=e),ut(n)?Li(n,Rt(o,1,ut,!0),e,l):[]});function Q4(n,o,l){var h=n==null?0:n.length;return h?(o=l||o===e?1:Ce(o),Sr(n,o<0?0:o,h)):[]}function X4(n,o,l){var h=n==null?0:n.length;return h?(o=l||o===e?1:Ce(o),o=h-o,Sr(n,0,o<0?0:o)):[]}function Z4(n,o){return n&&n.length?as(n,pe(o,3),!0,!0):[]}function J4(n,o){return n&&n.length?as(n,pe(o,3),!0):[]}function e9(n,o,l,h){var x=n==null?0:n.length;return x?(l&&typeof l!="number"&&Ut(n,o,l)&&(l=0,h=x),jS(n,o,l,h)):[]}function v1(n,o,l){var h=n==null?0:n.length;if(!h)return-1;var x=l==null?0:Ce(l);return x<0&&(x=vt(h+x,0)),Ua(n,pe(o,3),x)}function S1(n,o,l){var h=n==null?0:n.length;if(!h)return-1;var x=h-1;return l!==e&&(x=Ce(l),x=l<0?vt(h+x,0):Ot(x,h-1)),Ua(n,pe(o,3),x,!0)}function C1(n){var o=n==null?0:n.length;return o?Rt(n,1):[]}function t9(n){var o=n==null?0:n.length;return o?Rt(n,ue):[]}function r9(n,o){var l=n==null?0:n.length;return l?(o=o===e?1:Ce(o),Rt(n,o)):[]}function n9(n){for(var o=-1,l=n==null?0:n.length,h={};++o<l;){var x=n[o];qr(h,x[0],x[1])}return h}function w1(n){return n&&n.length?n[0]:e}function o9(n,o,l){var h=n==null?0:n.length;if(!h)return-1;var x=l==null?0:Ce(l);return x<0&&(x=vt(h+x,0)),To(n,o,x)}function i9(n){var o=n==null?0:n.length;return o?Sr(n,0,-1):[]}var a9=Ee(function(n){var o=rt(n,gu);return o.length&&o[0]===n[0]?iu(o):[]}),s9=Ee(function(n){var o=Cr(n),l=rt(n,gu);return o===Cr(l)?o=e:l.pop(),l.length&&l[0]===n[0]?iu(l,pe(o,2)):[]}),c9=Ee(function(n){var o=Cr(n),l=rt(n,gu);return o=typeof o=="function"?o:e,o&&l.pop(),l.length&&l[0]===n[0]?iu(l,e,o):[]});function l9(n,o){return n==null?"":iS.call(n,o)}function Cr(n){var o=n==null?0:n.length;return o?n[o-1]:e}function u9(n,o,l){var h=n==null?0:n.length;if(!h)return-1;var x=h;return l!==e&&(x=Ce(l),x=x<0?vt(h+x,0):Ot(x,h-1)),o===o?Wv(n,o,x):Ua(n,nm,x,!0)}function f9(n,o){return n&&n.length?Om(n,Ce(o)):e}var p9=Ee(_1);function _1(n,o){return n&&n.length&&o&&o.length?lu(n,o):n}function d9(n,o,l){return n&&n.length&&o&&o.length?lu(n,o,pe(l,2)):n}function m9(n,o,l){return n&&n.length&&o&&o.length?lu(n,o,e,l):n}var g9=an(function(n,o){var l=n==null?0:n.length,h=tu(n,o);return Bm(n,rt(o,function(x){return sn(x,l)?+x:x}).sort(Hm)),h});function h9(n,o){var l=[];if(!(n&&n.length))return l;var h=-1,x=[],C=n.length;for(o=pe(o,3);++h<C;){var E=n[h];o(E,h,n)&&(l.push(E),x.push(h))}return Bm(n,x),l}function Ru(n){return n==null?n:lS.call(n)}function y9(n,o,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&Ut(n,o,l)?(o=0,l=h):(o=o==null?0:Ce(o),l=l===e?h:Ce(l)),Sr(n,o,l)):[]}function x9(n,o){return is(n,o)}function b9(n,o,l){return pu(n,o,pe(l,2))}function v9(n,o){var l=n==null?0:n.length;if(l){var h=is(n,o);if(h<l&&Nr(n[h],o))return h}return-1}function S9(n,o){return is(n,o,!0)}function C9(n,o,l){return pu(n,o,pe(l,2),!0)}function w9(n,o){var l=n==null?0:n.length;if(l){var h=is(n,o,!0)-1;if(Nr(n[h],o))return h}return-1}function _9(n){return n&&n.length?Um(n):[]}function E9(n,o){return n&&n.length?Um(n,pe(o,2)):[]}function T9(n){var o=n==null?0:n.length;return o?Sr(n,1,o):[]}function I9(n,o,l){return n&&n.length?(o=l||o===e?1:Ce(o),Sr(n,0,o<0?0:o)):[]}function k9(n,o,l){var h=n==null?0:n.length;return h?(o=l||o===e?1:Ce(o),o=h-o,Sr(n,o<0?0:o,h)):[]}function R9(n,o){return n&&n.length?as(n,pe(o,3),!1,!0):[]}function A9(n,o){return n&&n.length?as(n,pe(o,3)):[]}var M9=Ee(function(n){return Tn(Rt(n,1,ut,!0))}),L9=Ee(function(n){var o=Cr(n);return ut(o)&&(o=e),Tn(Rt(n,1,ut,!0),pe(o,2))}),P9=Ee(function(n){var o=Cr(n);return o=typeof o=="function"?o:e,Tn(Rt(n,1,ut,!0),e,o)});function O9(n){return n&&n.length?Tn(n):[]}function N9(n,o){return n&&n.length?Tn(n,pe(o,2)):[]}function D9(n,o){return o=typeof o=="function"?o:e,n&&n.length?Tn(n,e,o):[]}function Au(n){if(!(n&&n.length))return[];var o=0;return n=vn(n,function(l){if(ut(l))return o=vt(l.length,o),!0}),Hl(o,function(l){return rt(n,Gl(l))})}function E1(n,o){if(!(n&&n.length))return[];var l=Au(n);return o==null?l:rt(l,function(h){return ar(o,e,h)})}var B9=Ee(function(n,o){return ut(n)?Li(n,o):[]}),F9=Ee(function(n){return mu(vn(n,ut))}),U9=Ee(function(n){var o=Cr(n);return ut(o)&&(o=e),mu(vn(n,ut),pe(o,2))}),V9=Ee(function(n){var o=Cr(n);return o=typeof o=="function"?o:e,mu(vn(n,ut),e,o)}),$9=Ee(Au);function q9(n,o){return Wm(n||[],o||[],Mi)}function W9(n,o){return Wm(n||[],o||[],Ni)}var G9=Ee(function(n){var o=n.length,l=o>1?n[o-1]:e;return l=typeof l=="function"?(n.pop(),l):e,E1(n,l)});function T1(n){var o=b(n);return o.__chain__=!0,o}function z9(n,o){return o(n),n}function gs(n,o){return o(n)}var j9=an(function(n){var o=n.length,l=o?n[0]:0,h=this.__wrapped__,x=function(C){return tu(C,n)};return o>1||this.__actions__.length||!(h instanceof ke)||!sn(l)?this.thru(x):(h=h.slice(l,+l+(o?1:0)),h.__actions__.push({func:gs,args:[x],thisArg:e}),new br(h,this.__chain__).thru(function(C){return o&&!C.length&&C.push(e),C}))});function H9(){return T1(this)}function K9(){return new br(this.value(),this.__chain__)}function Y9(){this.__values__===e&&(this.__values__=V1(this.value()));var n=this.__index__>=this.__values__.length,o=n?e:this.__values__[this.__index__++];return{done:n,value:o}}function Q9(){return this}function X9(n){for(var o,l=this;l instanceof es;){var h=b1(l);h.__index__=0,h.__values__=e,o?x.__wrapped__=h:o=h;var x=h;l=l.__wrapped__}return x.__wrapped__=n,o}function Z9(){var n=this.__wrapped__;if(n instanceof ke){var o=n;return this.__actions__.length&&(o=new ke(this)),o=o.reverse(),o.__actions__.push({func:gs,args:[Ru],thisArg:e}),new br(o,this.__chain__)}return this.thru(Ru)}function J9(){return qm(this.__wrapped__,this.__actions__)}var e5=ss(function(n,o,l){Ue.call(n,l)?++n[l]:qr(n,l,1)});function t5(n,o,l){var h=ve(n)?tm:zS;return l&&Ut(n,o,l)&&(o=e),h(n,pe(o,3))}function r5(n,o){var l=ve(n)?vn:Em;return l(n,pe(o,3))}var n5=Jm(v1),o5=Jm(S1);function i5(n,o){return Rt(hs(n,o),1)}function a5(n,o){return Rt(hs(n,o),ue)}function s5(n,o,l){return l=l===e?1:Ce(l),Rt(hs(n,o),l)}function I1(n,o){var l=ve(n)?sr:En;return l(n,pe(o,3))}function k1(n,o){var l=ve(n)?Tv:_m;return l(n,pe(o,3))}var c5=ss(function(n,o,l){Ue.call(n,l)?n[l].push(o):qr(n,l,[o])});function l5(n,o,l,h){n=er(n)?n:Bo(n),l=l&&!h?Ce(l):0;var x=n.length;return l<0&&(l=vt(x+l,0)),Ss(n)?l<=x&&n.indexOf(o,l)>-1:!!x&&To(n,o,l)>-1}var u5=Ee(function(n,o,l){var h=-1,x=typeof o=="function",C=er(n)?U(n.length):[];return En(n,function(E){C[++h]=x?ar(o,E,l):Pi(E,o,l)}),C}),f5=ss(function(n,o,l){qr(n,l,o)});function hs(n,o){var l=ve(n)?rt:Mm;return l(n,pe(o,3))}function p5(n,o,l,h){return n==null?[]:(ve(o)||(o=o==null?[]:[o]),l=h?e:l,ve(l)||(l=l==null?[]:[l]),Nm(n,o,l))}var d5=ss(function(n,o,l){n[l?0:1].push(o)},function(){return[[],[]]});function m5(n,o,l){var h=ve(n)?ql:im,x=arguments.length<3;return h(n,pe(o,4),l,x,En)}function g5(n,o,l){var h=ve(n)?Iv:im,x=arguments.length<3;return h(n,pe(o,4),l,x,_m)}function h5(n,o){var l=ve(n)?vn:Em;return l(n,bs(pe(o,3)))}function y5(n){var o=ve(n)?vm:l4;return o(n)}function x5(n,o,l){(l?Ut(n,o,l):o===e)?o=1:o=Ce(o);var h=ve(n)?VS:u4;return h(n,o)}function b5(n){var o=ve(n)?$S:p4;return o(n)}function v5(n){if(n==null)return 0;if(er(n))return Ss(n)?ko(n):n.length;var o=Nt(n);return o==tt||o==Zt?n.size:su(n).length}function S5(n,o,l){var h=ve(n)?Wl:d4;return l&&Ut(n,o,l)&&(o=e),h(n,pe(o,3))}var C5=Ee(function(n,o){if(n==null)return[];var l=o.length;return l>1&&Ut(n,o[0],o[1])?o=[]:l>2&&Ut(o[0],o[1],o[2])&&(o=[o[0]]),Nm(n,Rt(o,1),[])}),ys=rS||function(){return _t.Date.now()};function w5(n,o){if(typeof o!="function")throw new xr(c);return n=Ce(n),function(){if(--n<1)return o.apply(this,arguments)}}function R1(n,o,l){return o=l?e:o,o=n&&o==null?n.length:o,on(n,X,e,e,e,e,o)}function A1(n,o){var l;if(typeof o!="function")throw new xr(c);return n=Ce(n),function(){return--n>0&&(l=o.apply(this,arguments)),n<=1&&(o=e),l}}var Mu=Ee(function(n,o,l){var h=B;if(l.length){var x=Cn(l,No(Mu));h|=Q}return on(n,h,o,l,x)}),M1=Ee(function(n,o,l){var h=B|V;if(l.length){var x=Cn(l,No(M1));h|=Q}return on(o,h,n,l,x)});function L1(n,o,l){o=l?e:o;var h=on(n,P,e,e,e,e,e,o);return h.placeholder=L1.placeholder,h}function P1(n,o,l){o=l?e:o;var h=on(n,N,e,e,e,e,e,o);return h.placeholder=P1.placeholder,h}function O1(n,o,l){var h,x,C,E,I,O,G=0,z=!1,H=!1,J=!0;if(typeof n!="function")throw new xr(c);o=wr(o)||0,it(l)&&(z=!!l.leading,H="maxWait"in l,C=H?vt(wr(l.maxWait)||0,o):C,J="trailing"in l?!!l.trailing:J);function ie(ft){var Dr=h,un=x;return h=x=e,G=ft,E=n.apply(un,Dr),E}function ge(ft){return G=ft,I=Fi(Ie,o),z?ie(ft):E}function we(ft){var Dr=ft-O,un=ft-G,eg=o-Dr;return H?Ot(eg,C-un):eg}function fe(ft){var Dr=ft-O,un=ft-G;return O===e||Dr>=o||Dr<0||H&&un>=C}function Ie(){var ft=ys();if(fe(ft))return Le(ft);I=Fi(Ie,we(ft))}function Le(ft){return I=e,J&&h?ie(ft):(h=x=e,E)}function fr(){I!==e&&Gm(I),G=0,h=O=x=I=e}function Vt(){return I===e?E:Le(ys())}function pr(){var ft=ys(),Dr=fe(ft);if(h=arguments,x=this,O=ft,Dr){if(I===e)return ge(O);if(H)return Gm(I),I=Fi(Ie,o),ie(O)}return I===e&&(I=Fi(Ie,o)),E}return pr.cancel=fr,pr.flush=Vt,pr}var _5=Ee(function(n,o){return wm(n,1,o)}),E5=Ee(function(n,o,l){return wm(n,wr(o)||0,l)});function T5(n){return on(n,ae)}function xs(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new xr(c);var l=function(){var h=arguments,x=o?o.apply(this,h):h[0],C=l.cache;if(C.has(x))return C.get(x);var E=n.apply(this,h);return l.cache=C.set(x,E)||C,E};return l.cache=new(xs.Cache||nn),l}xs.Cache=nn;function bs(n){if(typeof n!="function")throw new xr(c);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function I5(n){return A1(2,n)}var k5=m4(function(n,o){o=o.length==1&&ve(o[0])?rt(o[0],cr(pe())):rt(Rt(o,1),cr(pe()));var l=o.length;return Ee(function(h){for(var x=-1,C=Ot(h.length,l);++x<C;)h[x]=o[x].call(this,h[x]);return ar(n,this,h)})}),Lu=Ee(function(n,o){var l=Cn(o,No(Lu));return on(n,Q,e,o,l)}),N1=Ee(function(n,o){var l=Cn(o,No(N1));return on(n,j,e,o,l)}),R5=an(function(n,o){return on(n,$,e,e,e,o)});function A5(n,o){if(typeof n!="function")throw new xr(c);return o=o===e?o:Ce(o),Ee(n,o)}function M5(n,o){if(typeof n!="function")throw new xr(c);return o=o==null?0:vt(Ce(o),0),Ee(function(l){var h=l[o],x=kn(l,0,o);return h&&Sn(x,h),ar(n,this,x)})}function L5(n,o,l){var h=!0,x=!0;if(typeof n!="function")throw new xr(c);return it(l)&&(h="leading"in l?!!l.leading:h,x="trailing"in l?!!l.trailing:x),O1(n,o,{leading:h,maxWait:o,trailing:x})}function P5(n){return R1(n,1)}function O5(n,o){return Lu(hu(o),n)}function N5(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function D5(n){return vr(n,M)}function B5(n,o){return o=typeof o=="function"?o:e,vr(n,M,o)}function F5(n){return vr(n,S|M)}function U5(n,o){return o=typeof o=="function"?o:e,vr(n,S|M,o)}function V5(n,o){return o==null||Cm(n,o,Et(o))}function Nr(n,o){return n===o||n!==n&&o!==o}var $5=fs(ou),q5=fs(function(n,o){return n>=o}),io=km((function(){return arguments})())?km:function(n){return ct(n)&&Ue.call(n,"callee")&&!mm.call(n,"callee")},ve=U.isArray,W5=Yd?cr(Yd):XS;function er(n){return n!=null&&vs(n.length)&&!cn(n)}function ut(n){return ct(n)&&er(n)}function G5(n){return n===!0||n===!1||ct(n)&&Ft(n)==kt}var Rn=oS||Gu,z5=Qd?cr(Qd):ZS;function j5(n){return ct(n)&&n.nodeType===1&&!Ui(n)}function H5(n){if(n==null)return!0;if(er(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Rn(n)||Do(n)||io(n)))return!n.length;var o=Nt(n);if(o==tt||o==Zt)return!n.size;if(Bi(n))return!su(n).length;for(var l in n)if(Ue.call(n,l))return!1;return!0}function K5(n,o){return Oi(n,o)}function Y5(n,o,l){l=typeof l=="function"?l:e;var h=l?l(n,o):e;return h===e?Oi(n,o,e,l):!!h}function Pu(n){if(!ct(n))return!1;var o=Ft(n);return o==Kt||o==Bt||typeof n.message=="string"&&typeof n.name=="string"&&!Ui(n)}function Q5(n){return typeof n=="number"&&hm(n)}function cn(n){if(!it(n))return!1;var o=Ft(n);return o==Yt||o==ir||o==Ht||o==$r}function D1(n){return typeof n=="number"&&n==Ce(n)}function vs(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=xe}function it(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function ct(n){return n!=null&&typeof n=="object"}var B1=Xd?cr(Xd):e4;function X5(n,o){return n===o||au(n,o,wu(o))}function Z5(n,o,l){return l=typeof l=="function"?l:e,au(n,o,wu(o),l)}function J5(n){return F1(n)&&n!=+n}function eC(n){if(B4(n))throw new be(i);return Rm(n)}function tC(n){return n===null}function rC(n){return n==null}function F1(n){return typeof n=="number"||ct(n)&&Ft(n)==Qt}function Ui(n){if(!ct(n)||Ft(n)!=Xt)return!1;var o=Ha(n);if(o===null)return!0;var l=Ue.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&Wa.call(l)==Zv}var Ou=Zd?cr(Zd):t4;function nC(n){return D1(n)&&n>=-xe&&n<=xe}var U1=Jd?cr(Jd):r4;function Ss(n){return typeof n=="string"||!ve(n)&&ct(n)&&Ft(n)==tn}function ur(n){return typeof n=="symbol"||ct(n)&&Ft(n)==Ci}var Do=em?cr(em):n4;function oC(n){return n===e}function iC(n){return ct(n)&&Nt(n)==wi}function aC(n){return ct(n)&&Ft(n)==w6}var sC=fs(cu),cC=fs(function(n,o){return n<=o});function V1(n){if(!n)return[];if(er(n))return Ss(n)?Lr(n):Jt(n);if(Ti&&n[Ti])return Vv(n[Ti]());var o=Nt(n),l=o==tt?Yl:o==Zt?Va:Bo;return l(n)}function ln(n){if(!n)return n===0?n:0;if(n=wr(n),n===ue||n===-ue){var o=n<0?-1:1;return o*Be}return n===n?n:0}function Ce(n){var o=ln(n),l=o%1;return o===o?l?o-l:o:0}function $1(n){return n?to(Ce(n),0,Me):0}function wr(n){if(typeof n=="number")return n;if(ur(n))return Te;if(it(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=it(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=am(n);var l=W6.test(n);return l||z6.test(n)?wv(n.slice(2),l?2:8):q6.test(n)?Te:+n}function q1(n){return Gr(n,tr(n))}function lC(n){return n?to(Ce(n),-xe,xe):n===0?n:0}function Ve(n){return n==null?"":lr(n)}var uC=Po(function(n,o){if(Bi(o)||er(o)){Gr(o,Et(o),n);return}for(var l in o)Ue.call(o,l)&&Mi(n,l,o[l])}),W1=Po(function(n,o){Gr(o,tr(o),n)}),G1=Po(function(n,o,l,h){Gr(o,tr(o),n,h)}),Nu=Po(function(n,o,l,h){Gr(o,Et(o),n,h)}),fC=an(tu);function pC(n,o){var l=Lo(n);return o==null?l:Sm(l,o)}var dC=Ee(function(n,o){n=He(n);var l=-1,h=o.length,x=h>2?o[2]:e;for(x&&Ut(o[0],o[1],x)&&(h=1);++l<h;)for(var C=o[l],E=tr(C),I=-1,O=E.length;++I<O;){var G=E[I],z=n[G];(z===e||Nr(z,Ro[G])&&!Ue.call(n,G))&&(n[G]=C[G])}return n}),mC=Ee(function(n){return n.push(e,a1),ar(z1,e,n)});function gC(n,o){return rm(n,pe(o,3),Wr)}function hC(n,o){return rm(n,pe(o,3),nu)}function yC(n,o){return n==null?n:ru(n,pe(o,3),tr)}function xC(n,o){return n==null?n:Tm(n,pe(o,3),tr)}function bC(n,o){return n&&Wr(n,pe(o,3))}function vC(n,o){return n&&nu(n,pe(o,3))}function SC(n){return n==null?[]:ns(n,Et(n))}function CC(n){return n==null?[]:ns(n,tr(n))}function Du(n,o,l){var h=n==null?e:ro(n,o);return h===e?l:h}function wC(n,o){return n!=null&&l1(n,o,HS)}function Bu(n,o){return n!=null&&l1(n,o,KS)}var _C=t1(function(n,o,l){o!=null&&typeof o.toString!="function"&&(o=Ga.call(o)),n[o]=l},Uu(rr)),EC=t1(function(n,o,l){o!=null&&typeof o.toString!="function"&&(o=Ga.call(o)),Ue.call(n,o)?n[o].push(l):n[o]=[l]},pe),TC=Ee(Pi);function Et(n){return er(n)?bm(n):su(n)}function tr(n){return er(n)?bm(n,!0):o4(n)}function IC(n,o){var l={};return o=pe(o,3),Wr(n,function(h,x,C){qr(l,o(h,x,C),h)}),l}function kC(n,o){var l={};return o=pe(o,3),Wr(n,function(h,x,C){qr(l,x,o(h,x,C))}),l}var RC=Po(function(n,o,l){os(n,o,l)}),z1=Po(function(n,o,l,h){os(n,o,l,h)}),AC=an(function(n,o){var l={};if(n==null)return l;var h=!1;o=rt(o,function(C){return C=In(C,n),h||(h=C.length>1),C}),Gr(n,Su(n),l),h&&(l=vr(l,S|T|M,E4));for(var x=o.length;x--;)du(l,o[x]);return l});function MC(n,o){return j1(n,bs(pe(o)))}var LC=an(function(n,o){return n==null?{}:a4(n,o)});function j1(n,o){if(n==null)return{};var l=rt(Su(n),function(h){return[h]});return o=pe(o),Dm(n,l,function(h,x){return o(h,x[0])})}function PC(n,o,l){o=In(o,n);var h=-1,x=o.length;for(x||(x=1,n=e);++h<x;){var C=n==null?e:n[Or(o[h])];C===e&&(h=x,C=l),n=cn(C)?C.call(n):C}return n}function OC(n,o,l){return n==null?n:Ni(n,o,l)}function NC(n,o,l,h){return h=typeof h=="function"?h:e,n==null?n:Ni(n,o,l,h)}var H1=o1(Et),K1=o1(tr);function DC(n,o,l){var h=ve(n),x=h||Rn(n)||Do(n);if(o=pe(o,4),l==null){var C=n&&n.constructor;x?l=h?new C:[]:it(n)?l=cn(C)?Lo(Ha(n)):{}:l={}}return(x?sr:Wr)(n,function(E,I,O){return o(l,E,I,O)}),l}function BC(n,o){return n==null?!0:du(n,o)}function FC(n,o,l){return n==null?n:$m(n,o,hu(l))}function UC(n,o,l,h){return h=typeof h=="function"?h:e,n==null?n:$m(n,o,hu(l),h)}function Bo(n){return n==null?[]:Kl(n,Et(n))}function VC(n){return n==null?[]:Kl(n,tr(n))}function $C(n,o,l){return l===e&&(l=o,o=e),l!==e&&(l=wr(l),l=l===l?l:0),o!==e&&(o=wr(o),o=o===o?o:0),to(wr(n),o,l)}function qC(n,o,l){return o=ln(o),l===e?(l=o,o=0):l=ln(l),n=wr(n),YS(n,o,l)}function WC(n,o,l){if(l&&typeof l!="boolean"&&Ut(n,o,l)&&(o=l=e),l===e&&(typeof o=="boolean"?(l=o,o=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&o===e?(n=0,o=1):(n=ln(n),o===e?(o=n,n=0):o=ln(o)),n>o){var h=n;n=o,o=h}if(l||n%1||o%1){var x=ym();return Ot(n+x*(o-n+Cv("1e-"+((x+"").length-1))),o)}return uu(n,o)}var GC=Oo(function(n,o,l){return o=o.toLowerCase(),n+(l?Y1(o):o)});function Y1(n){return Fu(Ve(n).toLowerCase())}function Q1(n){return n=Ve(n),n&&n.replace(H6,Nv).replace(pv,"")}function zC(n,o,l){n=Ve(n),o=lr(o);var h=n.length;l=l===e?h:to(Ce(l),0,h);var x=l;return l-=o.length,l>=0&&n.slice(l,x)==o}function jC(n){return n=Ve(n),n&&k6.test(n)?n.replace(Ed,Dv):n}function HC(n){return n=Ve(n),n&&O6.test(n)?n.replace(Ll,"\\$&"):n}var KC=Oo(function(n,o,l){return n+(l?"-":"")+o.toLowerCase()}),YC=Oo(function(n,o,l){return n+(l?" ":"")+o.toLowerCase()}),QC=Zm("toLowerCase");function XC(n,o,l){n=Ve(n),o=Ce(o);var h=o?ko(n):0;if(!o||h>=o)return n;var x=(o-h)/2;return us(Xa(x),l)+n+us(Qa(x),l)}function ZC(n,o,l){n=Ve(n),o=Ce(o);var h=o?ko(n):0;return o&&h<o?n+us(o-h,l):n}function JC(n,o,l){n=Ve(n),o=Ce(o);var h=o?ko(n):0;return o&&h<o?us(o-h,l)+n:n}function e8(n,o,l){return l||o==null?o=0:o&&(o=+o),cS(Ve(n).replace(Pl,""),o||0)}function t8(n,o,l){return(l?Ut(n,o,l):o===e)?o=1:o=Ce(o),fu(Ve(n),o)}function r8(){var n=arguments,o=Ve(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var n8=Oo(function(n,o,l){return n+(l?"_":"")+o.toLowerCase()});function o8(n,o,l){return l&&typeof l!="number"&&Ut(n,o,l)&&(o=l=e),l=l===e?Me:l>>>0,l?(n=Ve(n),n&&(typeof o=="string"||o!=null&&!Ou(o))&&(o=lr(o),!o&&Io(n))?kn(Lr(n),0,l):n.split(o,l)):[]}var i8=Oo(function(n,o,l){return n+(l?" ":"")+Fu(o)});function a8(n,o,l){return n=Ve(n),l=l==null?0:to(Ce(l),0,n.length),o=lr(o),n.slice(l,l+o.length)==o}function s8(n,o,l){var h=b.templateSettings;l&&Ut(n,o,l)&&(o=e),n=Ve(n),o=Nu({},o,h,i1);var x=Nu({},o.imports,h.imports,i1),C=Et(x),E=Kl(x,C);sr(C,function(fe){if(Id.test(fe))throw new be(f)});var I,O,G=0,z=o.interpolate||Na,H="__p += '",J=Ql((o.escape||Na).source+"|"+z.source+"|"+(z===Td?$6:Na).source+"|"+(o.evaluate||Na).source+"|$","g"),ie="//# sourceURL="+(Ue.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++yv+"]")+`
`;n.replace(J,function(fe,Ie,Le,fr,Vt,pr){return Le||(Le=fr),H+=n.slice(G,pr).replace(K6,Bv),Ie&&(I=!0,H+=`' +
__e(`+Ie+`) +
'`),Vt&&(O=!0,H+=`';
`+Vt+`;
__p += '`),Le&&(H+=`' +
((__t = (`+Le+`)) == null ? '' : __t) +
'`),G=pr+fe.length,fe}),H+=`';
`;var ge=Ue.call(o,"variable")&&o.variable;if(!ge)H=`with (obj) {
`+H+`
}
`;else if(Id.test(ge))throw new be(u);H=(O?H.replace(_6,""):H).replace(E6,"$1").replace(T6,"$1;"),H="function("+(ge||"obj")+`) {
`+(ge?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(O?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var we=Z1(function(){return Fe(C,ie+"return "+H).apply(e,E)});if(we.source=H,Pu(we))throw we;return we}function c8(n){return Ve(n).toLowerCase()}function l8(n){return Ve(n).toUpperCase()}function u8(n,o,l){if(n=Ve(n),n&&(l||o===e))return am(n);if(!n||!(o=lr(o)))return n;var h=Lr(n),x=Lr(o),C=sm(h,x),E=cm(h,x)+1;return kn(h,C,E).join("")}function f8(n,o,l){if(n=Ve(n),n&&(l||o===e))return n.slice(0,um(n)+1);if(!n||!(o=lr(o)))return n;var h=Lr(n),x=cm(h,Lr(o))+1;return kn(h,0,x).join("")}function p8(n,o,l){if(n=Ve(n),n&&(l||o===e))return n.replace(Pl,"");if(!n||!(o=lr(o)))return n;var h=Lr(n),x=sm(h,Lr(o));return kn(h,x).join("")}function d8(n,o){var l=ye,h=me;if(it(o)){var x="separator"in o?o.separator:x;l="length"in o?Ce(o.length):l,h="omission"in o?lr(o.omission):h}n=Ve(n);var C=n.length;if(Io(n)){var E=Lr(n);C=E.length}if(l>=C)return n;var I=l-ko(h);if(I<1)return h;var O=E?kn(E,0,I).join(""):n.slice(0,I);if(x===e)return O+h;if(E&&(I+=O.length-I),Ou(x)){if(n.slice(I).search(x)){var G,z=O;for(x.global||(x=Ql(x.source,Ve(kd.exec(x))+"g")),x.lastIndex=0;G=x.exec(z);)var H=G.index;O=O.slice(0,H===e?I:H)}}else if(n.indexOf(lr(x),I)!=I){var J=O.lastIndexOf(x);J>-1&&(O=O.slice(0,J))}return O+h}function m8(n){return n=Ve(n),n&&I6.test(n)?n.replace(_d,Gv):n}var g8=Oo(function(n,o,l){return n+(l?" ":"")+o.toUpperCase()}),Fu=Zm("toUpperCase");function X1(n,o,l){return n=Ve(n),o=l?e:o,o===e?Uv(n)?Hv(n):Av(n):n.match(o)||[]}var Z1=Ee(function(n,o){try{return ar(n,e,o)}catch(l){return Pu(l)?l:new be(l)}}),h8=an(function(n,o){return sr(o,function(l){l=Or(l),qr(n,l,Mu(n[l],n))}),n});function y8(n){var o=n==null?0:n.length,l=pe();return n=o?rt(n,function(h){if(typeof h[1]!="function")throw new xr(c);return[l(h[0]),h[1]]}):[],Ee(function(h){for(var x=-1;++x<o;){var C=n[x];if(ar(C[0],this,h))return ar(C[1],this,h)}})}function x8(n){return GS(vr(n,S))}function Uu(n){return function(){return n}}function b8(n,o){return n==null||n!==n?o:n}var v8=e1(),S8=e1(!0);function rr(n){return n}function Vu(n){return Am(typeof n=="function"?n:vr(n,S))}function C8(n){return Lm(vr(n,S))}function w8(n,o){return Pm(n,vr(o,S))}var _8=Ee(function(n,o){return function(l){return Pi(l,n,o)}}),E8=Ee(function(n,o){return function(l){return Pi(n,l,o)}});function $u(n,o,l){var h=Et(o),x=ns(o,h);l==null&&!(it(o)&&(x.length||!h.length))&&(l=o,o=n,n=this,x=ns(o,Et(o)));var C=!(it(l)&&"chain"in l)||!!l.chain,E=cn(n);return sr(x,function(I){var O=o[I];n[I]=O,E&&(n.prototype[I]=function(){var G=this.__chain__;if(C||G){var z=n(this.__wrapped__),H=z.__actions__=Jt(this.__actions__);return H.push({func:O,args:arguments,thisArg:n}),z.__chain__=G,z}return O.apply(n,Sn([this.value()],arguments))})}),n}function T8(){return _t._===this&&(_t._=Jv),this}function qu(){}function I8(n){return n=Ce(n),Ee(function(o){return Om(o,n)})}var k8=xu(rt),R8=xu(tm),A8=xu(Wl);function J1(n){return Eu(n)?Gl(Or(n)):s4(n)}function M8(n){return function(o){return n==null?e:ro(n,o)}}var L8=r1(),P8=r1(!0);function Wu(){return[]}function Gu(){return!1}function O8(){return{}}function N8(){return""}function D8(){return!0}function B8(n,o){if(n=Ce(n),n<1||n>xe)return[];var l=Me,h=Ot(n,Me);o=pe(o),n-=Me;for(var x=Hl(h,o);++l<n;)o(l);return x}function F8(n){return ve(n)?rt(n,Or):ur(n)?[n]:Jt(x1(Ve(n)))}function U8(n){var o=++Xv;return Ve(n)+o}var V8=ls(function(n,o){return n+o},0),$8=bu("ceil"),q8=ls(function(n,o){return n/o},1),W8=bu("floor");function G8(n){return n&&n.length?rs(n,rr,ou):e}function z8(n,o){return n&&n.length?rs(n,pe(o,2),ou):e}function j8(n){return om(n,rr)}function H8(n,o){return om(n,pe(o,2))}function K8(n){return n&&n.length?rs(n,rr,cu):e}function Y8(n,o){return n&&n.length?rs(n,pe(o,2),cu):e}var Q8=ls(function(n,o){return n*o},1),X8=bu("round"),Z8=ls(function(n,o){return n-o},0);function J8(n){return n&&n.length?jl(n,rr):0}function e7(n,o){return n&&n.length?jl(n,pe(o,2)):0}return b.after=w5,b.ary=R1,b.assign=uC,b.assignIn=W1,b.assignInWith=G1,b.assignWith=Nu,b.at=fC,b.before=A1,b.bind=Mu,b.bindAll=h8,b.bindKey=M1,b.castArray=N5,b.chain=T1,b.chunk=G4,b.compact=z4,b.concat=j4,b.cond=y8,b.conforms=x8,b.constant=Uu,b.countBy=e5,b.create=pC,b.curry=L1,b.curryRight=P1,b.debounce=O1,b.defaults=dC,b.defaultsDeep=mC,b.defer=_5,b.delay=E5,b.difference=H4,b.differenceBy=K4,b.differenceWith=Y4,b.drop=Q4,b.dropRight=X4,b.dropRightWhile=Z4,b.dropWhile=J4,b.fill=e9,b.filter=r5,b.flatMap=i5,b.flatMapDeep=a5,b.flatMapDepth=s5,b.flatten=C1,b.flattenDeep=t9,b.flattenDepth=r9,b.flip=T5,b.flow=v8,b.flowRight=S8,b.fromPairs=n9,b.functions=SC,b.functionsIn=CC,b.groupBy=c5,b.initial=i9,b.intersection=a9,b.intersectionBy=s9,b.intersectionWith=c9,b.invert=_C,b.invertBy=EC,b.invokeMap=u5,b.iteratee=Vu,b.keyBy=f5,b.keys=Et,b.keysIn=tr,b.map=hs,b.mapKeys=IC,b.mapValues=kC,b.matches=C8,b.matchesProperty=w8,b.memoize=xs,b.merge=RC,b.mergeWith=z1,b.method=_8,b.methodOf=E8,b.mixin=$u,b.negate=bs,b.nthArg=I8,b.omit=AC,b.omitBy=MC,b.once=I5,b.orderBy=p5,b.over=k8,b.overArgs=k5,b.overEvery=R8,b.overSome=A8,b.partial=Lu,b.partialRight=N1,b.partition=d5,b.pick=LC,b.pickBy=j1,b.property=J1,b.propertyOf=M8,b.pull=p9,b.pullAll=_1,b.pullAllBy=d9,b.pullAllWith=m9,b.pullAt=g9,b.range=L8,b.rangeRight=P8,b.rearg=R5,b.reject=h5,b.remove=h9,b.rest=A5,b.reverse=Ru,b.sampleSize=x5,b.set=OC,b.setWith=NC,b.shuffle=b5,b.slice=y9,b.sortBy=C5,b.sortedUniq=_9,b.sortedUniqBy=E9,b.split=o8,b.spread=M5,b.tail=T9,b.take=I9,b.takeRight=k9,b.takeRightWhile=R9,b.takeWhile=A9,b.tap=z9,b.throttle=L5,b.thru=gs,b.toArray=V1,b.toPairs=H1,b.toPairsIn=K1,b.toPath=F8,b.toPlainObject=q1,b.transform=DC,b.unary=P5,b.union=M9,b.unionBy=L9,b.unionWith=P9,b.uniq=O9,b.uniqBy=N9,b.uniqWith=D9,b.unset=BC,b.unzip=Au,b.unzipWith=E1,b.update=FC,b.updateWith=UC,b.values=Bo,b.valuesIn=VC,b.without=B9,b.words=X1,b.wrap=O5,b.xor=F9,b.xorBy=U9,b.xorWith=V9,b.zip=$9,b.zipObject=q9,b.zipObjectDeep=W9,b.zipWith=G9,b.entries=H1,b.entriesIn=K1,b.extend=W1,b.extendWith=G1,$u(b,b),b.add=V8,b.attempt=Z1,b.camelCase=GC,b.capitalize=Y1,b.ceil=$8,b.clamp=$C,b.clone=D5,b.cloneDeep=F5,b.cloneDeepWith=U5,b.cloneWith=B5,b.conformsTo=V5,b.deburr=Q1,b.defaultTo=b8,b.divide=q8,b.endsWith=zC,b.eq=Nr,b.escape=jC,b.escapeRegExp=HC,b.every=t5,b.find=n5,b.findIndex=v1,b.findKey=gC,b.findLast=o5,b.findLastIndex=S1,b.findLastKey=hC,b.floor=W8,b.forEach=I1,b.forEachRight=k1,b.forIn=yC,b.forInRight=xC,b.forOwn=bC,b.forOwnRight=vC,b.get=Du,b.gt=$5,b.gte=q5,b.has=wC,b.hasIn=Bu,b.head=w1,b.identity=rr,b.includes=l5,b.indexOf=o9,b.inRange=qC,b.invoke=TC,b.isArguments=io,b.isArray=ve,b.isArrayBuffer=W5,b.isArrayLike=er,b.isArrayLikeObject=ut,b.isBoolean=G5,b.isBuffer=Rn,b.isDate=z5,b.isElement=j5,b.isEmpty=H5,b.isEqual=K5,b.isEqualWith=Y5,b.isError=Pu,b.isFinite=Q5,b.isFunction=cn,b.isInteger=D1,b.isLength=vs,b.isMap=B1,b.isMatch=X5,b.isMatchWith=Z5,b.isNaN=J5,b.isNative=eC,b.isNil=rC,b.isNull=tC,b.isNumber=F1,b.isObject=it,b.isObjectLike=ct,b.isPlainObject=Ui,b.isRegExp=Ou,b.isSafeInteger=nC,b.isSet=U1,b.isString=Ss,b.isSymbol=ur,b.isTypedArray=Do,b.isUndefined=oC,b.isWeakMap=iC,b.isWeakSet=aC,b.join=l9,b.kebabCase=KC,b.last=Cr,b.lastIndexOf=u9,b.lowerCase=YC,b.lowerFirst=QC,b.lt=sC,b.lte=cC,b.max=G8,b.maxBy=z8,b.mean=j8,b.meanBy=H8,b.min=K8,b.minBy=Y8,b.stubArray=Wu,b.stubFalse=Gu,b.stubObject=O8,b.stubString=N8,b.stubTrue=D8,b.multiply=Q8,b.nth=f9,b.noConflict=T8,b.noop=qu,b.now=ys,b.pad=XC,b.padEnd=ZC,b.padStart=JC,b.parseInt=e8,b.random=WC,b.reduce=m5,b.reduceRight=g5,b.repeat=t8,b.replace=r8,b.result=PC,b.round=X8,b.runInContext=L,b.sample=y5,b.size=v5,b.snakeCase=n8,b.some=S5,b.sortedIndex=x9,b.sortedIndexBy=b9,b.sortedIndexOf=v9,b.sortedLastIndex=S9,b.sortedLastIndexBy=C9,b.sortedLastIndexOf=w9,b.startCase=i8,b.startsWith=a8,b.subtract=Z8,b.sum=J8,b.sumBy=e7,b.template=s8,b.times=B8,b.toFinite=ln,b.toInteger=Ce,b.toLength=$1,b.toLower=c8,b.toNumber=wr,b.toSafeInteger=lC,b.toString=Ve,b.toUpper=l8,b.trim=u8,b.trimEnd=f8,b.trimStart=p8,b.truncate=d8,b.unescape=m8,b.uniqueId=U8,b.upperCase=g8,b.upperFirst=Fu,b.each=I1,b.eachRight=k1,b.first=w1,$u(b,(function(){var n={};return Wr(b,function(o,l){Ue.call(b.prototype,l)||(n[l]=o)}),n})(),{chain:!1}),b.VERSION=t,sr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){b[n].placeholder=b}),sr(["drop","take"],function(n,o){ke.prototype[n]=function(l){l=l===e?1:vt(Ce(l),0);var h=this.__filtered__&&!o?new ke(this):this.clone();return h.__filtered__?h.__takeCount__=Ot(l,h.__takeCount__):h.__views__.push({size:Ot(l,Me),type:n+(h.__dir__<0?"Right":"")}),h},ke.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),sr(["filter","map","takeWhile"],function(n,o){var l=o+1,h=l==_e||l==he;ke.prototype[n]=function(x){var C=this.clone();return C.__iteratees__.push({iteratee:pe(x,3),type:l}),C.__filtered__=C.__filtered__||h,C}}),sr(["head","last"],function(n,o){var l="take"+(o?"Right":"");ke.prototype[n]=function(){return this[l](1).value()[0]}}),sr(["initial","tail"],function(n,o){var l="drop"+(o?"":"Right");ke.prototype[n]=function(){return this.__filtered__?new ke(this):this[l](1)}}),ke.prototype.compact=function(){return this.filter(rr)},ke.prototype.find=function(n){return this.filter(n).head()},ke.prototype.findLast=function(n){return this.reverse().find(n)},ke.prototype.invokeMap=Ee(function(n,o){return typeof n=="function"?new ke(this):this.map(function(l){return Pi(l,n,o)})}),ke.prototype.reject=function(n){return this.filter(bs(pe(n)))},ke.prototype.slice=function(n,o){n=Ce(n);var l=this;return l.__filtered__&&(n>0||o<0)?new ke(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),o!==e&&(o=Ce(o),l=o<0?l.dropRight(-o):l.take(o-n)),l)},ke.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ke.prototype.toArray=function(){return this.take(Me)},Wr(ke.prototype,function(n,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),h=/^(?:head|last)$/.test(o),x=b[h?"take"+(o=="last"?"Right":""):o],C=h||/^find/.test(o);x&&(b.prototype[o]=function(){var E=this.__wrapped__,I=h?[1]:arguments,O=E instanceof ke,G=I[0],z=O||ve(E),H=function(Ie){var Le=x.apply(b,Sn([Ie],I));return h&&J?Le[0]:Le};z&&l&&typeof G=="function"&&G.length!=1&&(O=z=!1);var J=this.__chain__,ie=!!this.__actions__.length,ge=C&&!J,we=O&&!ie;if(!C&&z){E=we?E:new ke(this);var fe=n.apply(E,I);return fe.__actions__.push({func:gs,args:[H],thisArg:e}),new br(fe,J)}return ge&&we?n.apply(this,I):(fe=this.thru(H),ge?h?fe.value()[0]:fe.value():fe)})}),sr(["pop","push","shift","sort","splice","unshift"],function(n){var o=$a[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);b.prototype[n]=function(){var x=arguments;if(h&&!this.__chain__){var C=this.value();return o.apply(ve(C)?C:[],x)}return this[l](function(E){return o.apply(ve(E)?E:[],x)})}}),Wr(ke.prototype,function(n,o){var l=b[o];if(l){var h=l.name+"";Ue.call(Mo,h)||(Mo[h]=[]),Mo[h].push({name:o,func:l})}}),Mo[cs(e,V).name]=[{name:"wrapper",func:e}],ke.prototype.clone=gS,ke.prototype.reverse=hS,ke.prototype.value=yS,b.prototype.at=j9,b.prototype.chain=H9,b.prototype.commit=K9,b.prototype.next=Y9,b.prototype.plant=X9,b.prototype.reverse=Z9,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=J9,b.prototype.first=b.prototype.head,Ti&&(b.prototype[Ti]=Q9),b}),wn=Kv();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(_t._=wn,define(function(){return wn})):Xn?((Xn.exports=wn)._=wn,Ul._=wn):_t._=wn}).call(si)});var z3=Z(ze=>{"use strict";a();s();var It=typeof Symbol=="function"&&Symbol.for,Kp=It?Symbol.for("react.element"):60103,Yp=It?Symbol.for("react.portal"):60106,zc=It?Symbol.for("react.fragment"):60107,jc=It?Symbol.for("react.strict_mode"):60108,Hc=It?Symbol.for("react.profiler"):60114,Kc=It?Symbol.for("react.provider"):60109,Yc=It?Symbol.for("react.context"):60110,Qp=It?Symbol.for("react.async_mode"):60111,Qc=It?Symbol.for("react.concurrent_mode"):60111,Xc=It?Symbol.for("react.forward_ref"):60112,Zc=It?Symbol.for("react.suspense"):60113,AA=It?Symbol.for("react.suspense_list"):60120,Jc=It?Symbol.for("react.memo"):60115,el=It?Symbol.for("react.lazy"):60116,MA=It?Symbol.for("react.block"):60121,LA=It?Symbol.for("react.fundamental"):60117,PA=It?Symbol.for("react.responder"):60118,OA=It?Symbol.for("react.scope"):60119;function gr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kp:switch(e=e.type,e){case Qp:case Qc:case zc:case Hc:case jc:case Zc:return e;default:switch(e=e&&e.$$typeof,e){case Yc:case Xc:case el:case Jc:case Kc:return e;default:return t}}case Yp:return t}}}function G3(e){return gr(e)===Qc}ze.AsyncMode=Qp;ze.ConcurrentMode=Qc;ze.ContextConsumer=Yc;ze.ContextProvider=Kc;ze.Element=Kp;ze.ForwardRef=Xc;ze.Fragment=zc;ze.Lazy=el;ze.Memo=Jc;ze.Portal=Yp;ze.Profiler=Hc;ze.StrictMode=jc;ze.Suspense=Zc;ze.isAsyncMode=function(e){return G3(e)||gr(e)===Qp};ze.isConcurrentMode=G3;ze.isContextConsumer=function(e){return gr(e)===Yc};ze.isContextProvider=function(e){return gr(e)===Kc};ze.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kp};ze.isForwardRef=function(e){return gr(e)===Xc};ze.isFragment=function(e){return gr(e)===zc};ze.isLazy=function(e){return gr(e)===el};ze.isMemo=function(e){return gr(e)===Jc};ze.isPortal=function(e){return gr(e)===Yp};ze.isProfiler=function(e){return gr(e)===Hc};ze.isStrictMode=function(e){return gr(e)===jc};ze.isSuspense=function(e){return gr(e)===Zc};ze.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zc||e===Qc||e===Hc||e===jc||e===Zc||e===AA||typeof e=="object"&&e!==null&&(e.$$typeof===el||e.$$typeof===Jc||e.$$typeof===Kc||e.$$typeof===Yc||e.$$typeof===Xc||e.$$typeof===LA||e.$$typeof===PA||e.$$typeof===OA||e.$$typeof===MA)};ze.typeOf=gr});var H3=Z((rMe,j3)=>{"use strict";a();s();j3.exports=z3()});var eb=Z((iMe,J3)=>{"use strict";a();s();var Xp=H3(),NA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},DA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},X3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zp={};Zp[Xp.ForwardRef]=BA;Zp[Xp.Memo]=X3;function K3(e){return Xp.isMemo(e)?X3:Zp[e.$$typeof]||NA}var FA=Object.defineProperty,UA=Object.getOwnPropertyNames,Y3=Object.getOwnPropertySymbols,VA=Object.getOwnPropertyDescriptor,$A=Object.getPrototypeOf,Q3=Object.prototype;function Z3(e,t,r){if(typeof t!="string"){if(Q3){var i=$A(t);i&&i!==Q3&&Z3(e,i,r)}var c=UA(t);Y3&&(c=c.concat(Y3(t)));for(var u=K3(e),f=K3(t),d=0;d<c.length;++d){var y=c[d];if(!DA[y]&&!(r&&r[y])&&!(f&&f[y])&&!(u&&u[y])){var v=VA(t,y);try{FA(e,y,v)}catch{}}}}return e}J3.exports=Z3});var Jb=Z((_Ne,Zb)=>{"use strict";a();s();var cO=$i(),lO=function(){return cO.Date.now()};Zb.exports=lO});var t6=Z((INe,e6)=>{"use strict";a();s();var uO=/\s/;function fO(e){for(var t=e.length;t--&&uO.test(e.charAt(t)););return t}e6.exports=fO});var n6=Z((ANe,r6)=>{"use strict";a();s();var pO=t6(),dO=/^\s+/;function mO(e){return e&&e.slice(0,pO(e)+1).replace(dO,"")}r6.exports=mO});var s6=Z((PNe,a6)=>{"use strict";a();s();var gO=n6(),o6=Gi(),hO=Wi(),i6=NaN,yO=/^[-+]0x[0-9a-f]+$/i,xO=/^0b[01]+$/i,bO=/^0o[0-7]+$/i,vO=parseInt;function SO(e){if(typeof e=="number")return e;if(hO(e))return i6;if(o6(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=o6(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=gO(e);var r=xO.test(e);return r||bO.test(e)?vO(e.slice(2),r?2:8):yO.test(e)?i6:+e}a6.exports=SO});var u6=Z((DNe,l6)=>{"use strict";a();s();var CO=Gi(),dd=Jb(),c6=s6(),wO="Expected a function",_O=Math.max,EO=Math.min;function TO(e,t,r){var i,c,u,f,d,y,v=0,S=!1,T=!1,M=!0;if(typeof e!="function")throw new TypeError(wO);t=c6(t)||0,CO(r)&&(S=!!r.leading,T="maxWait"in r,u=T?_O(c6(r.maxWait)||0,t):u,M="trailing"in r?!!r.trailing:M);function A(X){var $=i,ae=c;return i=c=void 0,v=X,f=e.apply(ae,$),f}function F(X){return v=X,d=setTimeout(w,t),S?A(X):f}function B(X){var $=X-y,ae=X-v,ye=t-$;return T?EO(ye,u-ae):ye}function V(X){var $=X-y,ae=X-v;return y===void 0||$>=t||$<0||T&&ae>=u}function w(){var X=dd();if(V(X))return P(X);d=setTimeout(w,B(X))}function P(X){return d=void 0,M&&i?A(X):(i=c=void 0,f)}function N(){d!==void 0&&clearTimeout(d),v=0,i=y=c=d=void 0}function Q(){return d===void 0?f:P(dd())}function j(){var X=dd(),$=V(X);if(i=arguments,c=this,y=X,$){if(d===void 0)return F(y);if(T)return clearTimeout(d),d=setTimeout(w,t),A(y)}return d===void 0&&(d=setTimeout(w,t)),f}return j.cancel=N,j.flush=Q,j}l6.exports=TO});var Sl=Z(Pa=>{"use strict";a();s();Object.defineProperty(Pa,"__esModule",{value:!0});Pa.CodesEnum=void 0;var rN;(function(e){e.Success="success",e.NotFound="not-found",e.BadRequest="bad-request",e.Unauthorized="unauthorized",e.Unknown="unknown"})(rN=Pa.CodesEnum||(Pa.CodesEnum={}))});var Sd=Z(Jr=>{"use strict";a();s();Object.defineProperty(Jr,"__esModule",{value:!0});Jr.UnauthorizedError=Jr.BadRequestError=Jr.NotFoundError=Jr.UnknownError=void 0;var Cl=Sl(),yd=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Cl.CodesEnum.Unknown}};Jr.UnknownError=yd;var xd=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Cl.CodesEnum.NotFound}};Jr.NotFoundError=xd;var bd=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Cl.CodesEnum.BadRequest}};Jr.BadRequestError=bd;var vd=class extends Error{constructor(t,r){super(t),this.response=r,this.code=Cl.CodesEnum.Unauthorized}};Jr.UnauthorizedError=vd});var v6=Z(Mr=>{"use strict";a();s();var nN=Mr&&Mr.__createBinding||(Object.create?(function(e,t,r,i){i===void 0&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}):(function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]})),b6=Mr&&Mr.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&nN(t,e,r)},x6=Mr&&Mr.__awaiter||function(e,t,r,i){function c(u){return u instanceof r?u:new r(function(f){f(u)})}return new(r||(r=Promise))(function(u,f){function d(S){try{v(i.next(S))}catch(T){f(T)}}function y(S){try{v(i.throw(S))}catch(T){f(T)}}function v(S){S.done?u(S.value):c(S.value).then(d,y)}v((i=i.apply(e,t||[])).next())})};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.createHermes=void 0;var Co=Sd(),wo=Sl();b6(Sl(),Mr);b6(Sd(),Mr);function oN({transport:e,defaultMeta:t}){let r={};function i(f,d){var y,v;return x6(this,void 0,void 0,function*(){let S=yield e.fetch(f,{body:(y=d?.body)!==null&&y!==void 0?y:{},meta:Object.assign(Object.assign({},t??{}),(v=d?.meta)!==null&&v!==void 0?v:{})});if(!S?.meta.isSuccess)switch(S?.meta.code){case wo.CodesEnum.BadRequest:throw new Co.BadRequestError("Invalid request",S);case wo.CodesEnum.NotFound:throw new Co.NotFoundError("Requested resource was not found",S);case wo.CodesEnum.Unauthorized:throw new Co.UnauthorizedError("Unauthorized to make that request",S);default:throw new Co.UnknownError("Unknown error detected",S)}return S})}function c(f,d){if(r[f])throw new Error("Listener already exists on that path");r[f]=d}function u(f,d){return x6(this,void 0,void 0,function*(){let y={body:{},meta:{isSuccess:!0}},v=r[f];if(!v)return y.meta={isSuccess:!1,code:wo.CodesEnum.NotFound},y;try{yield v(d,y)}catch(S){if(y.meta.isSuccess=!1,S instanceof Co.NotFoundError)y.meta.code=wo.CodesEnum.NotFound;else if(S instanceof Co.BadRequestError)y.meta.code=wo.CodesEnum.BadRequest;else if(S instanceof Co.UnauthorizedError)y.meta.code=wo.CodesEnum.Unauthorized;else throw S}return y})}return{fetch:i,listen:c,handleFetch:u}}Mr.createHermes=oN});a();s();a();s();a();s();var ao=e=>{e?.body&&console.info("Body",e.body),e?.meta&&console.info("Meta",e.meta)};async function og(e,t){return e.then(r=>(t({isSuccess:!0,logInfo:()=>{console.info("Sidepanel request"),ao(r)}}),r)).catch(r=>{throw t({isSuccess:!1,logInfo:()=>{console.info("Sidepanel request"),r?.message?console.error(r.message):console.error(r)}}),r})}a();s();a();s();var Br=Se(Re());a();s();var dE=Se(Y0());a();s();function fE(e){return{_ok:!0,value:e}}function pE(e){return{_ok:!1,error:e}}function nf(e){return async(...t)=>{try{return fE(await e(...t))}catch(r){return pE(r)}}}a();s();a();s();a();s();var Q0=ng({events:["failed","success"]}),of=async(e,t)=>{let r=new Error().stack;try{let i=await fetch(e,t),c=i.status>=200&&i.status<300?"success":"failed";return Q0.emit(c,{status:i.status,url:e}),i}catch(i){throw i instanceof Error&&(i.stack+=`

Caused by:
${r}`),Q0.emit("failed",{url:e,error:i}),Error(i)}};a();s();var ks={"*":{notSpecified:"Hi, my name is {{ name }}. I am an English voice from the {{ country }}."},en:{notSpecified:"Hi, my name is {{ name }}. I am an English voice from the {{ country }}."},"en-US":{notSpecified:"Hi, my name is {{ name }}. I am an American English voice from the United States."},"en-GB":{notSpecified:"Hi, my name is {{ name }}. I am a British English voice from the United Kingdom."},"en-AU":{notSpecified:"Hi, my name is {{ name }}. I am an Australian English voice from Australia."},"en-IN":{notSpecified:"Hi, my name is {{ name }}. I am an Indian English voice from India."},"en-NG":{notSpecified:"Hi, my name is {{ name }}. I am a Nigerian English voice from Nigeria."},"en-ZA":{notSpecified:"Hi, my name is {{ name }}. I am a South African English voice from South Africa."},"en-IE":{notSpecified:"Hi, my name is {{ name }}. I am an Irish English voice from Ireland."},de:{notSpecified:"Hallo, mein Name ist {{ name }}. Ich bin eine deutschsprachige Stimme."},"de-DE":{notSpecified:"Hallo, mein Name ist {{ name }}. Ich bin eine deutsche Stimme aus Deutschland."},"de-CH":{notSpecified:"Grüezi, ich heiße {{ name }}. Ich bin eine deutschsprachige Stimme aus der Schweiz."},pt:{notSpecified:"Olá, meu nome é {{ name }}. Sou uma voz em português."},"pt-BR":{notSpecified:"Olá, meu nome é {{ name }}. Sou uma voz em português do Brasil."},"pt-PT":{notSpecified:"Olá, o meu nome é {{ name }}. Sou uma voz portuguesa de Portugal."},es:{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz en español."},"es-ES":{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz española de España."},"es-MX":{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz mexicana de México."},"es-US":{notSpecified:"Hola, mi nombre es {{ name }}. Soy una voz en español de Estados Unidos."},it:{notSpecified:"Ciao, mi chiamo {{ name }}. Sono una voce italiana."},"it-IT":{notSpecified:"Ciao, mi chiamo {{ name }}. Sono una voce italiana dall'Italia."},fr:{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française."},"fr-FR":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française de France."},"fr-BE":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française de Belgique."},"fr-CA":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française du Canada."},"fr-CH":{notSpecified:"Bonjour, je m'appelle {{ name }}. Je suis une voix française de Suisse."},ja:{notSpecified:"こんにちは、私の名前は{{ name }}です。私は日本語の声です。"},"ja-JP":{notSpecified:"こんにちは、私の名前は{{ name }}です。私は日本の日本語の声です。"},zh:{notSpecified:"您好，我是{{ name }}。我是中文声音。"},"zh-CN":{notSpecified:"您好，我是{{ name }}。我是中国的中文声音。"},"zh-HK":{notSpecified:"您好，我是{{ name }}。我是香港的中文声音。"},"zh-TW":{notSpecified:"您好，我是{{ name }}。我是臺灣的中文聲音。"},da:{notSpecified:"Hej, jeg hedder {{ name }}. Jeg er en dansk stemme."},"da-DK":{notSpecified:"Hej, jeg hedder {{ name }}. Jeg er en dansk stemme fra Danmark."},fi:{notSpecified:"Hei, nimeni on {{ name }}. Olen ääni Suomesta."},"fi-FI":{notSpecified:"Hei, nimeni on {{ name }}. Olen suomalainen ääni Suomesta."},id:{notSpecified:"Halo, nama saya {{ name }}. Saya suara berbahasa Indonesia dari {{ country }}."},"id-ID":{notSpecified:"Halo, nama saya {{ name }}. Saya suara bahasa Indonesia dari Indonesia."},ms:{notSpecified:"Hai, nama saya {{ name }}. Saya suara berbahasa Melayu dari {{ country }}."},"ms-MY":{notSpecified:"Hai, nama saya {{ name }}. Saya suara bahasa Melayu dari Malaysia."},ne:{notSpecified:"नमस्कार, मेरो नाम {{ name }} हो। म {{ country }} बाट {{ language }} आवाज हुँ।"},"ne-NP":{notSpecified:"नमस्कार, मेरो नाम {{ name }} हो। म नेपालबाट नेपाली आवाज हुँ।"},ta:{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் {{ country }}-இல் இருந்து தமிழ் குரல்."},"ta-IN":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் இந்திய தமிழின் குரல்."},"ta-LK":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் இலங்கைத் தமிழின் குரல்."},"ta-MY":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் மலேசிய தமிழ் குரல்."},"ta-SG":{notSpecified:"வணக்கம், என் பெயர் {{ name }}. நான் சிங்கப்பூர் தமிழின் குரல்."},te:{notSpecified:"హలో, నా పేరు {{ name }}. నేను {{ country }} నుంచి తెలుగు స్వరం."},"te-IN":{notSpecified:"హలో, నా పేరు {{ name }}. నేను భారతదేశం నుండి తెలుగు స్వరం."},th:{notSpecified:"สวัสดี, ฉันชื่อ {{ name }}. ฉันเป็นเสียงภาษาไทยจาก {{ country }}."},"th-TH":{notSpecified:"สวัสดี, ฉันชื่อ {{ name }}. ฉันเป็นเสียงภาษาไทยจากประเทศไทย."},ur:{notSpecified:"سلام، میرا نام {{ name }} ہے۔ میں {{ country }} سے {{ language }} کی آواز ہوں۔"},"ur-IN":{notSpecified:"سلام، میرا نام {{ name }} ہے۔ میں ہندوستان کی اردو آواز ہوں۔"},"ur-PK":{notSpecified:"سلام، میرا نام {{ name }} ہے۔ میں پاکستان کی اردو آواز ہوں۔"},yue:{notSpecified:"你好，我叫{{ name }}。我係廣東話聲音。"},"yue-CN":{notSpecified:"你好，我叫{{ name }}。我係中國廣東話聲音。"},cmn:{notSpecified:"您好，我是{{ name }}。我是普通话声音。"},"cmn-CN":{notSpecified:"您好，我是{{ name }}。我是中国普通话声音。"},lt:{notSpecified:"Labas, mano vardas yra {{ name }}. Aš esu {{ country }} kalbos balsas."},"lt-LT":{notSpecified:"Labas, mano vardas yra {{ name }}. Aš esu Lietuvos kalbos balsas."},lv:{notSpecified:"Sveiki, mans vārds ir {{ name }}. Es esmu balss no {{ country }}."},"lv-LV":{notSpecified:"Sveiki, mans vārds ir {{ name }}. Es esmu balss no Latvijas."},sk:{notSpecified:"Ahoj, moje meno je {{ name }}. Som hlas zo Slovenska."},"sk-SK":{notSpecified:"Ahoj, moje meno je {{ name }}. Som slovenský hlas zo Slovenska."},sl:{notSpecified:"Pozdravljeni, moje ime je {{ name }}. Sem glas iz Slovenije."},"sl-SI":{notSpecified:"Pozdravljeni, moje ime je {{ name }}. Sem slovenski glas iz Slovenije."},ro:{notSpecified:"Salut, numele meu este {{ name }}. Sunt o voce din România."},"ro-RO":{notSpecified:"Salut, numele meu este {{ name }}. Sunt o voce din România."},ru:{notSpecified:"Здравствуйте, меня зовут {{ name }}. Я голос из России."},"ru-RU":{notSpecified:"Здравствуйте, меня зовут {{ name }}. Я русский голос из России."},uk:{notSpecified:"Привіт, мене звати {{ name }}. Я голос з України."},"uk-UA":{notSpecified:"Привіт, мене звати {{ name }}. Я український голос з України."},sv:{notSpecified:"Hej, jag heter {{ name }}. Jag är en svensk röst."},"sv-SE":{notSpecified:"Hej, jag heter {{ name }}. Jag är en svensk röst från Sverige."},af:{notSpecified:"Hallo, my naam is {{ name }}. Ek is 'n Afrikaanse stem van {{ country }}."},"af-ZA":{notSpecified:"Hallo, my naam is {{ name }}. Ek is 'n Afrikaanse stem van Suid-Afrika."},ar:{notSpecified:"مرحبًا، اسمي {{ name }}. أنا صوت باللغة العربية."},"ar-AE":{notSpecified:"مرحبًا، اسمي {{ name }}. أنا صوت من الإمارات العربية المتحدة."},"ar-IQ":{notSpecified:"مرحبًا، اسمي {{ name }}. أنا صوت من العراق."},bg:{notSpecified:"Здравейте, казвам се {{ name }}. Аз съм глас от България."},"bg-BG":{notSpecified:"Здравейте, казвам се {{ name }}. Аз съм български глас от България."},bn:{notSpecified:"হ্যালো, আমার নাম {{ name }}। আমি বাংলা ভাষার কণ্ঠ।"},"bn-IN":{notSpecified:"হ্যালো, আমার নাম {{ name }}। আমি ভারতের বাংলা ভাষার কণ্ঠ।"},ca:{notSpecified:"Hola, em dic {{ name }}. Sóc una veu en català."},"ca-ES":{notSpecified:"Hola, em dic {{ name }}. Sóc una veu catalana d'Espanya."},cs:{notSpecified:"Ahoj, jmenuji se {{ name }}. Jsem hlas z České republiky."},"cs-CZ":{notSpecified:"Ahoj, jmenuji se {{ name }}. Jsem český hlas z České republiky."},el:{notSpecified:"Γεια σας, με λένε {{ name }}. Είμαι φωνή από την Ελλάδα."},"el-GR":{notSpecified:"Γεια σας, με λένε {{ name }}. Είμαι ελληνική φωνή από την Ελλάδα."},et:{notSpecified:"Tere, minu nimi on {{ name }}. Olen hääl Eestist."},"et-EE":{notSpecified:"Tere, minu nimi on {{ name }}. Olen eestikeelne hääl Eestist."},fa:{notSpecified:"سلام، نام من {{ name }} است. من یک صدای فارسی هستم."},"fa-IR":{notSpecified:"سلام، نام من {{ name }} است. من یک صدای فارسی از ایران هستم."},fil:{notSpecified:"Kamusta, ang pangalan ko ay {{ name }}. Ako ay isang boses mula sa Pilipinas."},"fil-PH":{notSpecified:"Kamusta, ang pangalan ko ay {{ name }}. Ako ay isang boses mula sa Pilipinas."},ga:{notSpecified:"Dia duit, is mise {{ name }}. Is mé guth ó Éirinn."},"ga-IE":{notSpecified:"Dia duit, is mise {{ name }}. Is mé guth Éireannach ó Éirinn."},he:{notSpecified:"שלום, קוראים לי {{ name }}. אני קול בעברית."},"he-IL":{notSpecified:"שלום, קוראים לי {{ name }}. אני קול מעיר ישראל."},hi:{notSpecified:"नमस्ते, मेरा नाम {{ name }} है। मैं हिंदी आवाज़ हूँ।"},"hi-IN":{notSpecified:"नमस्ते, मेरा नाम {{ name }} है। मैं भारत की हिंदी आवाज़ हूँ।"},hr:{notSpecified:"Bok, ja sam {{ name }}. Ja sam glas iz Hrvatske."},"hr-HR":{notSpecified:"Bok, ja sam {{ name }}. Ja sam glas iz Hrvatske."},hu:{notSpecified:"Szia, a nevem {{ name }}. Egy magyar hang vagyok."},"hu-HU":{notSpecified:"Szia, a nevem {{ name }}. Egy magyar hang vagyok Magyarországról."},is:{notSpecified:"Halló, ég heiti {{ name }}. Ég er íslensk rödd."},"is-IS":{notSpecified:"Halló, ég heiti {{ name }}. Ég er íslensk rödd frá Íslandi."},ka:{notSpecified:"გამარჯობა, მე მქვია {{ name }}. მე ვარ ხმა საქართველოდან."},"ka-GE":{notSpecified:"გამარჯობა, მე მქვია {{ name }}. მე ვარ ქართული ხმა საქართველოდან."},kk:{notSpecified:"Сәлеметсіз бе, менің атым {{ name }}. Мен қазақ тілінің даусымын."},"kk-KZ":{notSpecified:"Сәлеметсіз бе, менің атым {{ name }}. Мен қазақ тілінің даусымын Қазақстаннан."},ko:{notSpecified:"안녕하세요, 제 이름은 {{ name }}입니다. 저는 한국어 목소리입니다."},"ko-KR":{notSpecified:"안녕하세요, 제 이름은 {{ name }}입니다. 저는 대한민국의 한국어 목소리입니다."},nl:{notSpecified:"Hallo, mijn naam is {{ name }}. Ik ben een Nederlandse stem."},"nl-BE":{notSpecified:"Hallo, mijn naam is {{ name }}. Ik ben een Nederlandse stem uit België."},"nl-NL":{notSpecified:"Hallo, mijn naam is {{ name }}. Ik ben een Nederlandse stem uit Nederland."},nb:{notSpecified:"Hei, jeg heter {{ name }}. Jeg er en norsk stemme."},"nb-NO":{notSpecified:"Hei, jeg heter {{ name }}. Jeg er en norsk stemme fra Norge."},pl:{notSpecified:"Cześć, mam na imię {{ name }}. Jestem głosem polskim."},"pl-PL":{notSpecified:"Cześć, mam na imię {{ name }}. Jestem polskim głosem z Polski."},si:{notSpecified:"හෙලෝ, මගේ නම {{ name }}. මම {{ country }} වෙතින් සිංහල හඬක්."},"si-LK":{notSpecified:"හෙලෝ, මගේ නම {{ name }}. මම ශ්‍රී ලංකාවේ සිංහල හඬක්."},sw:{notSpecified:"Habari, jina langu ni {{ name }}. Mimi ni sauti ya Kiswahili kutoka {{ country }}."},"sw-TZ":{notSpecified:"Habari, jina langu ni {{ name }}. Mimi ni sauti ya Kiswahili kutoka Tanzania."},tr:{notSpecified:"Merhaba, benim adım {{ name }}. Ben bir Türkçe sesim."},"tr-TR":{notSpecified:"Merhaba, benim adım {{ name }}. Ben Türkiye'den bir Türkçe sesim."},vi:{notSpecified:"Xin chào, tôi tên là {{ name }}. Tôi là giọng nói tiếng Việt."},"vi-VN":{notSpecified:"Xin chào, tôi tên là {{ name }}. Tôi là giọng nói tiếng Việt từ Việt Nam."}};var Ki="speechSynth",X0="local";var OF=nf(({audioServerUrl:e,idToken:t})=>of(e,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"X-Speechify-Client":Cs()?"SafariExtension":"DesktopExtension","X-Speechify-Client-Version":p.runtime.getManifest().version}}).then(r=>r.json())),Rs=e=>({displayName:e.name,localizedDisplayName:{},name:e.name,language:e.locale,engine:e.provider,gender:e.gender==="unspecified"?"notSpecified":e.gender,labels:e.tags,avatarImage:e.avatarUrl,previewAudio:e.previews?.[0]?.previewUrl,slug:e.slug}),mE=async(e,t)=>of(`${e}/public-voices/get-by-scopes`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"x-caller":"Speechify Chrome Extension"},body:JSON.stringify({scopes:["reader-app","reader-app:recommended"]})}).then(r=>r.json()),NF=nf(async(e,t)=>{let r=await mE(e,t),i=r["reader-app"],c=r["reader-app:recommended"],u=i.reduce((f,d)=>{let y=d.locale.split("-")[0];return f[y]||(f[y]=[]),f[y].push(d),f},{});return{config:{defaultVoice:Rs(i[0]),fallbackVoice:Rs(i[0])},labels:[],tabs:[{displayName:"Recommended",localizedDisplayName:{},categories:[{displayName:"All",localizedDisplayName:{},voices:c.map(Rs),localVoices:{languages:[]}}]},{displayName:"All",localizedDisplayName:{},categories:Object.keys(u).map(f=>({displayName:new Intl.DisplayNames(["en"],{type:"language"}).of(f),localizedDisplayName:{},voices:u[f].map(Rs),localVoices:{languages:[f]}}))}],voicePreviewTemplates:{}}});var gE="https://cdn.speechify.com",hE=e=>{let t=e.split("-")[1]||"US",r=/^\d+$/.test(t);return`${gE}/web/flags/${r?"XX":t}.svg`};var af=({language:e,...t})=>{let[r,i="US"]=e.split("-").filter(Boolean).map(d=>d.toLowerCase()),c=new Intl.DisplayNames([e],{type:"region"}),u=new Intl.DisplayNames([e],{type:"language"});return ks[r],(ks[r]??ks["*"]).notSpecified.replace("{{ name }}",t.name.startsWith("PVL:")?t.displayName:t.name).replace("{{ language }}",u.of(r)).replace("{{ country }}",c.of(i.toUpperCase()))};var DF=(e,t)=>["language","name","engine"].every(i=>{let c=e[i],u=t[i];return!c||!u?!0:(i==="engine"&&(c=c===X0?Ki:c,u=u===X0?Ki:u),(c||"").toLowerCase()===(u||"").toLowerCase())});var yE={en:"English",es:"Spanish",fr:"French",de:"German",it:"Italian",pt:"Portuguese",nl:"Dutch",pl:"Polish",ru:"Russian",ja:"Japanese",ko:"Korean",zh:"Chinese",ar:"Arabic",hi:"Hindi",tr:"Turkish",sv:"Swedish",da:"Danish",no:"Norwegian",fi:"Finnish",cs:"Czech",el:"Greek",he:"Hebrew",th:"Thai",vi:"Vietnamese",id:"Indonesian",uk:"Ukrainian",ro:"Romanian",hu:"Hungarian",bg:"Bulgarian",hr:"Croatian",sk:"Slovak",sl:"Slovenian",lt:"Lithuanian",lv:"Latvian",et:"Estonian",ms:"Malay",fil:"Filipino",ta:"Tamil",te:"Telugu",bn:"Bengali",mr:"Marathi",gu:"Gujarati",kn:"Kannada",ml:"Malayalam",pa:"Punjabi",ur:"Urdu",fa:"Persian",ca:"Catalan",ga:"Irish",cy:"Welsh",af:"Afrikaans",sw:"Swahili"},BF=e=>{let t=e.split("-")[0];return yE[t]||t.toUpperCase()},FF=e=>`${e.displayName}-${e.language}`,xE=(e,t)=>!e||!t?!1:e.displayName===t.displayName&&e.language===t.language,bE={"timbre:angry":"Intense","timbre:assertive-or-confident":"Bold","timbre:bright":"Bright","timbre:calm-or-relaxed":"Calm","timbre:cheerful":"Cheerful","timbre:deep":"Rich","timbre:direct":"Clear","timbre:energetic":"Energetic","timbre:high-pitch":"Crisp","timbre:neutral":"Neutral","timbre:professional":"Professional","timbre:relaxed":"Relaxed","timbre:sad":"Thoughtful","timbre:surprised":"Amazed","timbre:warm-or-friendly":"Inviting"},Z0=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),vE=e=>bE[e]||Z0(e.split(" ")[0]),SE=e=>!!e.personal,UF=e=>SE(e)?e.avatarImage||"":e.avatarImage||hE(e.language),CE=e=>{if(!e?.labels)return"";let t=e.labels.find(i=>i.includes("style:")),r=e.labels.find(i=>i.includes("timbre:"));if(t){let i=t.split(":")?.at(-1)?.split(" ")[0]||"";return Z0(i)}return r?vE(r):""},VF=(e,t)=>e.labels?.includes("label:founder")?"Founder":e.labels?.includes("label:partner")?"Official Voice":t.some(i=>i.slug===e.slug)?"Narrator":CE(e),$F=e=>!!(e.labels?.includes("label:founder")||e.labels?.includes("label:partner")),qF=(e,t=!1)=>e.engine===Ki?e.name.split(/ \(| -/)[0]:t?e.displayName:e.displayName.split(" ")[0],WF=e=>{let[t,r]=e.language.split("-");return r?r.toUpperCase():t.toUpperCase()},GF=(e,t)=>xE(t,e);a();s();var As=Se(Re()),J0=(0,As.createContext)(null);function KF({value:e,children:t}){return m(J0.Provider,{value:e},t)}function ey(){let e=(0,As.useContext)(J0);if(!e)throw new Error("useSettingsAdapter must be used within a SettingsAdapterProvider");return e}var Mn=null,Ms=null,sf=new Set,zr=e=>{Ms=e,sf.forEach(t=>t(e))},ty=()=>(Mn||(Mn=new Audio,Mn.addEventListener("ended",()=>{zr(null)}),Mn.addEventListener("error",()=>{zr(null)})),Mn);function eU(e,t){let{fetch:r,isPlaybackActive:i}=ey(),[c,u]=(0,Br.useState)(Ms===t),[f,d]=(0,Br.useState)(!1),y=(0,Br.useRef)(null);(0,Br.useEffect)(()=>{let M=A=>{u(A===t)};return sf.add(M),()=>{sf.delete(M)}},[t]);let v=(0,Br.useCallback)(()=>{y.current&&(y.current.abort(),y.current=null);let M=ty();M.pause(),M.currentTime=0,typeof speechSynthesis<"u"&&speechSynthesis.cancel(),zr(null),d(!1)},[]),S=(0,Br.useCallback)(async()=>{if(await i())return;let M=ty();if(v(),Ms!==t){d(!0),y.current=new AbortController;try{if(e.previewAudio){let A=await r("/tts/fetch-preview-url",{url:e.previewAudio});if(y.current?.signal.aborted)return;A?.audioData&&(M.src=A.audioData,await M.play(),zr(t)),d(!1);return}if(e.engine!==Ki){let F=`<speak>${af(e)}</speak>`,B=await r("/tts/get-audio",{ssml:F,voice:{name:e.name,displayName:e.displayName,language:e.language,engine:e.engine,gender:e.gender,localizedDisplayName:{}}});if(y.current?.signal.aborted)return;B?.audioData&&(M.src=B.audioData,await M.play(),zr(t)),d(!1);return}if(typeof speechSynthesis<"u"){let A=af(e),F=new SpeechSynthesisUtterance(A),B=speechSynthesis.getVoices().find(V=>V.name?.toLowerCase()===e.name?.toLowerCase());B&&(F.voice=B),speechSynthesis.cancel(),setTimeout(()=>{speechSynthesis.speak(F),zr(t),d(!1),F.addEventListener("end",()=>{zr(null)}),F.addEventListener("error",()=>{zr(null)})},250)}}catch(A){console.error("Failed to play voice preview:",A),d(!1),zr(null)}}},[e,t,v,r,i]),T=(0,Br.useCallback)(()=>{c?v():S()},[c,S,v]);return{isPlaying:c,isLoading:f,playPreview:S,stopPreview:v,togglePreview:T}}function Ls(){Ms!==null&&(Mn&&(Mn.pause(),Mn.currentTime=0),typeof speechSynthesis<"u"&&speechSynthesis.cancel(),zr(null))}a();s();a();s();a();s();a();s();a();s();var ry=e=>{let t,r=new Set,i=(S,T)=>{let M=typeof S=="function"?S(t):S;if(!Object.is(M,t)){let A=t;t=T??(typeof M!="object"||M===null)?M:Object.assign({},t,M),r.forEach(F=>F(t,A))}},c=()=>t,y={setState:i,getState:c,getInitialState:()=>v,subscribe:S=>(r.add(S),()=>r.delete(S)),destroy:()=>{(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},v=t=e(i,c,y);return y},ny=e=>e?ry(e):ry;var my=Se(Re(),1),gy=Se(fy(),1),{useDebugValue:VE}=my.default,{useSyncExternalStoreWithSelector:$E}=gy.default,py=!1,qE=e=>e;function WE(e,t=qE,r){(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&r&&!py&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),py=!0);let i=$E(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return VE(i),i}var dy=e=>{(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t=typeof e=="function"?ny(e):e,r=(i,c)=>WE(t,i,c);return Object.assign(r,t),r},pt=e=>e?dy(e):dy;a();s();var GE=e=>(t,r,i)=>{let c=i.subscribe;return i.subscribe=(f,d,y)=>{let v=f;if(d){let S=y?.equalityFn||Object.is,T=f(i.getState());v=M=>{let A=f(M);if(!S(T,A)){let F=T;d(T=A,F)}},y?.fireImmediately&&d(T,T)}return c(v)},e(t,r,i)},_r=GE;var K=pt()(_r(()=>({initialUrl:null,currentUrl:null,currentUrlState:null,currentUrlMetadata:null,config:null,activeSummaryControllers:new Map,activeChatControllers:new Map,questionInput:"",currentSessionState:null})));a();s();var Os=()=>crypto.randomUUID(),Yi=()=>({hasContent:!1,contentCount:0});a();s();var Hr=Se(Re());a();s();a();s();var ff=(e,t)=>t.some(r=>e instanceof r),hy,yy;function zE(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return yy||(yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var pf=new WeakMap,lf=new WeakMap,Ns=new WeakMap;function HE(e){let t=new Promise((r,i)=>{let c=()=>{e.removeEventListener("success",u),e.removeEventListener("error",f)},u=()=>{r(co(e.result)),c()},f=()=>{i(e.error),c()};e.addEventListener("success",u),e.addEventListener("error",f)});return Ns.set(t,e),t}function KE(e){if(pf.has(e))return;let t=new Promise((r,i)=>{let c=()=>{e.removeEventListener("complete",u),e.removeEventListener("error",f),e.removeEventListener("abort",f)},u=()=>{r(),c()},f=()=>{i(e.error||new DOMException("AbortError","AbortError")),c()};e.addEventListener("complete",u),e.addEventListener("error",f),e.addEventListener("abort",f)});pf.set(e,t)}var df={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return pf.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return co(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Sy(e){df=e(df)}function YE(e){return jE().includes(e)?function(...t){return e.apply(mf(this),t),co(this.request)}:function(...t){return co(e.apply(mf(this),t))}}function QE(e){return typeof e=="function"?YE(e):(e instanceof IDBTransaction&&KE(e),ff(e,zE())?new Proxy(e,df):e)}function co(e){if(e instanceof IDBRequest)return HE(e);if(lf.has(e))return lf.get(e);let t=QE(e);return t!==e&&(lf.set(e,t),Ns.set(t,e)),t}var mf=e=>Ns.get(e);function Cy(e,t,{blocked:r,upgrade:i,blocking:c,terminated:u}={}){let f=indexedDB.open(e,t),d=co(f);return i&&f.addEventListener("upgradeneeded",y=>{i(co(f.result),y.oldVersion,y.newVersion,co(f.transaction),y)}),r&&f.addEventListener("blocked",y=>r(y.oldVersion,y.newVersion,y)),d.then(y=>{u&&y.addEventListener("close",()=>u()),c&&y.addEventListener("versionchange",v=>c(v.oldVersion,v.newVersion,v))}).catch(()=>{}),d}var XE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],uf=new Map;function xy(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(uf.get(t))return uf.get(t);let r=t.replace(/FromIndex$/,""),i=t!==r,c=ZE.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(c||XE.includes(r)))return;let u=async function(f,...d){let y=this.transaction(f,c?"readwrite":"readonly"),v=y.store;return i&&(v=v.index(d.shift())),(await Promise.all([v[r](...d),c&&y.done]))[0]};return uf.set(t,u),u}Sy(e=>({...e,get:(t,r,i)=>xy(t,r)||e.get(t,r,i),has:(t,r)=>!!xy(t,r)||e.has(t,r)}));var JE=["continue","continuePrimaryKey","advance"],by={},gf=new WeakMap,wy=new WeakMap,eT={get(e,t){if(!JE.includes(t))return e[t];let r=by[t];return r||(r=by[t]=function(...i){gf.set(this,wy.get(this)[t](...i))}),r}};async function*tT(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let r=new Proxy(t,eT);for(wy.set(r,t),Ns.set(r,mf(t));t;)yield r,t=await(gf.get(r)||t.continue()),gf.delete(r)}function vy(e,t){return t===Symbol.asyncIterator&&ff(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&ff(e,[IDBIndex,IDBObjectStore])}Sy(e=>({...e,get(t,r,i){return vy(t,r)?tT:e.get(t,r,i)},has(t,r){return vy(t,r)||e.has(t,r)}}));var rT="sidepanel-db",Go="url-states",lo="sessions",nT=2,Ds=null,Ln=()=>Ds||(Ds=Cy(rT,nT,{upgrade(e){e.objectStoreNames.contains(Go)||e.createObjectStore(Go),e.objectStoreNames.contains(lo)||e.createObjectStore(lo).createIndex("by-startTime","startTime")}}),Ds),Bs=async e=>(await Ln()).get(Go,e),Pn=async(e,t)=>{await(await Ln()).put(Go,t,e)},hf=async e=>(await Ln()).get(lo,e),Mt=async e=>{await(await Ln()).put(lo,e,e.sessionId)},_y=async()=>(await(await Ln()).getAll(lo)).sort((r,i)=>i.startTime-r.startTime),Ey=async e=>{await(await Ln()).delete(lo,e)},Ty=async()=>{await(await Ln()).clear(lo)},Fs=async()=>{let e=await Ln(),t=await e.getAll(Go),r=await e.getAllKeys(Go),i=new Map;for(let c=0;c<r.length;c++){let u=r[c],f=t[c];f&&i.set(u,f)}return i};a();s();a();s();a();s();var yf=["Summarize the key points","What are the main takeaways?","What should I know about this?"],oT=200,iT=pt()(_r((e,t)=>({muted:!1,hasPermission:!1,mediaStream:null,isInitializing:!1,isActive:!1,isRecording:!1,recordingStartTime:null,isToolRunning:!1,isMessageStreaming:!1,conversationStatus:"connecting",currentUserTranscript:"",currentUserTranscriptItemId:"",currentAssistantTranscript:"",currentResponseId:"",isUserSpeaking:!1,maxVoiceModeUsageOfToday:oT,voiceModeUsageOfToday:0,overlay:null,questionRecommendations:yf,isLoadingQuestionRecommendations:!1,chatMessageLatestSources:[],openAIAudioControls:null,openAIAudioState:"idle",streamingResponseId:null,isClientInitializing:!1,initializePromise:null,realtimeClient:null,setVoiceModePermission:r=>{e({hasPermission:r})},setStream:r=>{e({mediaStream:r})},setMuted:r=>{e({muted:r})},setIsInitializing:r=>{e({isInitializing:r})},setIsActive:r=>{e({isActive:r})},setRecording:(r,i)=>{e({isRecording:r,recordingStartTime:r?i||Date.now():null})},setIsUserSpeaking:r=>{e({isUserSpeaking:r})},setIsToolRunning:r=>{e({isToolRunning:r})},stopVoiceMode:()=>{let{mediaStream:r,hasPermission:i,realtimeClient:c}=t();if(c)try{c.disconnect()}catch{}r&&r.getTracks().forEach(u=>u.stop()),e({isActive:!1,hasPermission:i,mediaStream:null,isRecording:!1,recordingStartTime:null,realtimeClient:null,openAIAudioControls:null,openAIAudioState:"idle",isInitializing:!1,conversationStatus:"connecting",streamingResponseId:null,isMessageStreaming:!1})},setConversationStatus:r=>{e({conversationStatus:r})},setCurrentUserTranscript:r=>{e({currentUserTranscript:r})},setCurrentUserTranscriptItemId:r=>{e({currentUserTranscriptItemId:r})},setCurrentAssistantTranscript:r=>{e({currentAssistantTranscript:r})},appendAssistantTranscript:r=>{let i=t().currentAssistantTranscript;e({currentAssistantTranscript:i+r})},setCurrentResponseId:r=>{e({currentResponseId:r})},clearTranscripts:()=>{e({currentUserTranscript:"",currentAssistantTranscript:"",currentResponseId:""})},setMaxVoiceModeUsageOfToday:r=>{e({maxVoiceModeUsageOfToday:r})},setVoiceModeUsageOfToday:r=>{e({voiceModeUsageOfToday:r})},incrementVoiceModeUsage:()=>{let r=t().voiceModeUsageOfToday;e({voiceModeUsageOfToday:r+1})},setOverlay:r=>{e({overlay:r})},setQuestionRecommendations:r=>{e({questionRecommendations:r})},setIsLoadingQuestionRecommendations:r=>{e({isLoadingQuestionRecommendations:r})},setIsMessageStreaming:r=>e({isMessageStreaming:r}),setLatestSources:r=>{e({chatMessageLatestSources:r})},setOpenAIAudioControls:r=>e({openAIAudioControls:r}),setOpenAIAudioState:r=>e({openAIAudioState:r}),setStreamingResponseId:r=>e({streamingResponseId:r}),setRealtimeClient:r=>e({realtimeClient:r})}))),fn=iT;a();s();a();s();a();s();var R={blue20:"#f0f1ff",blue30:"#8894fe",blue40:"#5263ff",blue50:"#262940",electric10:"#5c6ae5",electric10h:"#4853b5",electric10p:"#40499c",electric20:"#6977fa",electric20h:"#6672e3",electric20p:"#606bd1",electric30:"#4759f7",electric30h:"#4454e3",electric30p:"#3d4ac4",electric40:"#2f43fa",electric40h:"#3143e0",electric40p:"#2c3bc7",white:"#ffffff",gray0:"#f5f5f5",gray10:"#ececec",gray20:"#e0e0e0",gray30:"#bfbfbf",gray40:"#9f9f9f",gray50:"#7a7a7a",gray60:"#3d3d3d",gray70:"#363636",gray80:"#2e2e2e",gray90:"#262626",gray100:"#1f1f1f",gray110:"#121212",black:"#000000",green20:"#e6fcee",green30:"#23ae75",green40:"#00c270",green50:"#0b2e18",highlight20:"#e0e3ff",highlight30:"#abb3fe",highlight40:"#444766",highlight50:"#5666f0",orange20:"#fff1de",orange30:"#e68600",orange40:"#ff9500",orange50:"#3d2c13",red20:"#ffe7e5",red30:"#eb3830",red30h:"#d4362f",red30p:"#bd342d",red40:"#ff3c30",red40h:"#ed4c42",red40p:"#db463d",red50:"#3d1513"};var aT=["bg-prim-w-b","bg-prim-w-110","bg-prim-w-100","bg-prim-w-90","bg-prim-w-80","bg-prim-w-70","bg-prim-inv-b-w","bg-prim-cta","bg-sec-0-110","bg-sec-0-100","bg-sec-0-90","bg-sec-0-80","bg-sec-0-70","bg-sec-inv-100-0","bg-sec-cta","bg-tert-10-90","bg-tert-10-80","bg-tert-10-70","bg-tert-20-60","bg-tert-inv-60-20","bg-tert-inv-80-10","bg-accent","bg-blue","bg-alert","bg-success","bg-crit","bg-dimmer","sf-prim-cta","sf-prim-cta-hov","sf-prim-cta-pres","sf-prim-w-b","sf-prim-hov-w-b","sf-prim-pres-w-b","sf-prim-w-110","sf-prim-hov-w-110","sf-prim-pres-w-110","sf-prim-w-100","sf-prim-hov-w-100","sf-prim-pres-w-100","sf-prim-w-90","sf-prim-hov-w-90","sf-prim-pres-w-90","sf-prim-w-80","sf-prim-hov-w-80","sf-prim-pres-w-80","sf-sec-0-110","sf-sec-hov-0-110","sf-sec-pres-0-110","sf-sec-0-100","sf-sec-hov-0-100","sf-sec-pres-0-100","sf-sec-0-90","sf-sec-hov-0-90","sf-sec-pres-0-90","sf-sec-0-80","sf-sec-hov-0-80","sf-sec-pres-0-80","sf-act-electric-blue","sf-act-blue","sf-act-blue-80","sf-act-blue-70","sf-act-blue-60","sf-crit","sf-crit-hov","sf-crit-pres","sf-prim-cta-electric-w","sf-prim-cta-hov-electric-w","sf-prim-cta-pres-electric-w","brdr-prim-10-100","brdr-prim-10-80","brdr-prim-inv-80-10","brdr-prim-hov","brdr-prim-foc","brdr-prim-cta","brdr-sec-20-60","brdr-sec-cta","brdr-tert-40-50","brdr-quat-30-70","brdr-blue","brdr-crit","icn-txt-white","icn-txt-black","icn-txt-prim","icn-txt-prim-inv","icn-txt-sec","icn-txt-tert","icn-txt-quat","icn-txt-prim-electric","icn-txt-accent","icn-txt-blue","icn-txt-success","icn-txt-alert","icn-txt-crit","hglt-prim","hglt-sec","hglt-hov-sec","logo-speechify-logo","logo-speechify-logo-txt","hglt-default-prim","hglt-default-sec","hglt-pink-prim","hglt-pink-sec","hglt-red-prim","hglt-red-sec","hglt-orange-prim","hglt-orange-sec","hglt-green-prim","hglt-green-sec","bg-toolbar-preview","toolbar-star-icon","toolbar-preview-background","toolbar-preview-color","toolbar-spacer-background","toolbar-spacer-color","toolbar-separator"],pn={"bg-prim-w-b":R.black,"bg-prim-w-110":R.gray110,"bg-prim-w-100":R.gray100,"bg-prim-w-90":R.gray90,"bg-prim-w-80":R.gray80,"bg-prim-w-70":R.gray70,"bg-prim-inv-b-w":R.white,"bg-prim-cta":R.electric30,"bg-sec-0-110":R.gray110,"bg-sec-0-100":R.gray100,"bg-sec-0-90":R.gray90,"bg-sec-0-80":R.gray80,"bg-sec-0-70":R.gray70,"bg-sec-inv-100-0":R.gray0,"bg-sec-cta":R.electric10,"bg-tert-10-90":R.gray90,"bg-tert-10-80":R.gray80,"bg-tert-10-70":R.gray70,"bg-tert-20-60":R.gray60,"bg-tert-inv-60-20":R.gray20,"bg-tert-inv-80-10":R.gray10,"bg-accent":R.gray60,"bg-blue":R.blue50,"bg-alert":R.orange50,"bg-success":R.green50,"bg-crit":R.red50,"bg-dimmer":"rgba(0, 0, 0, 0.4)","sf-prim-cta":R.electric30,"sf-prim-cta-hov":R.electric30h,"sf-prim-cta-pres":R.electric30p,"sf-prim-w-b":R.black,"sf-prim-hov-w-b":R.gray110,"sf-prim-pres-w-b":R.gray90,"sf-prim-w-110":R.gray110,"sf-prim-hov-w-110":R.gray100,"sf-prim-pres-w-110":R.gray80,"sf-prim-w-100":R.gray100,"sf-prim-hov-w-100":R.gray90,"sf-prim-pres-w-100":R.gray70,"sf-prim-w-90":R.gray90,"sf-prim-hov-w-90":R.gray80,"sf-prim-pres-w-90":R.gray60,"sf-prim-w-80":R.gray80,"sf-prim-hov-w-80":R.gray70,"sf-prim-pres-w-80":R.gray60,"sf-sec-0-110":R.gray110,"sf-sec-hov-0-110":R.gray100,"sf-sec-pres-0-110":R.gray80,"sf-sec-0-100":R.gray100,"sf-sec-hov-0-100":R.gray90,"sf-sec-pres-0-100":R.gray70,"sf-sec-0-90":R.gray90,"sf-sec-hov-0-90":R.gray70,"sf-sec-pres-0-90":R.gray60,"sf-sec-0-80":R.gray80,"sf-sec-hov-0-80":R.gray70,"sf-sec-pres-0-80":R.gray60,"sf-act-electric-blue":R.blue30,"sf-act-blue":R.blue50,"sf-act-blue-80":R.gray80,"sf-act-blue-70":R.gray70,"sf-act-blue-60":R.gray60,"sf-crit":R.red30,"sf-crit-hov":R.red30h,"sf-crit-pres":R.red30p,"sf-prim-cta-electric-w":R.white,"sf-prim-cta-hov-electric-w":R.gray0,"sf-prim-cta-pres-electric-w":R.gray10,"brdr-prim-10-100":R.gray100,"brdr-prim-10-80":R.gray80,"brdr-prim-inv-80-10":R.gray10,"brdr-prim-hov":R.gray70,"brdr-prim-foc":R.white,"brdr-prim-cta":R.electric10,"brdr-sec-20-60":R.gray60,"brdr-sec-cta":R.electric10,"brdr-tert-40-50":R.gray40,"brdr-quat-30-70":R.gray70,"brdr-blue":R.blue30,"brdr-crit":R.red30,"icn-txt-white":R.white,"icn-txt-black":R.black,"icn-txt-prim":R.white,"icn-txt-prim-inv":R.black,"icn-txt-sec":R.gray40,"icn-txt-tert":R.gray50,"icn-txt-quat":R.gray60,"icn-txt-prim-electric":R.electric10,"icn-txt-accent":R.white,"icn-txt-blue":R.blue30,"icn-txt-success":R.green30,"icn-txt-alert":R.orange30,"icn-txt-crit":R.red30,"hglt-prim":R.highlight50,"hglt-sec":R.highlight40,"hglt-hov-sec":"#2c2d2ebf","logo-speechify-logo":R.white,"logo-speechify-logo-txt":R.white,"hglt-default-prim":R.highlight50,"hglt-default-sec":R.highlight40,"hglt-pink-prim":"#ab21be","hglt-pink-sec":"#5f4064","hglt-red-prim":"#b82929","hglt-red-sec":"#663231","hglt-orange-prim":"#a36319","hglt-orange-sec":"#4c3921","hglt-green-prim":"#218359","hglt-green-sec":"#254b3f","bg-toolbar-preview":"#35363A","toolbar-star-icon":"#F1F3F4","toolbar-preview-background":"#35363A","toolbar-preview-color":"#F1F3F4","toolbar-spacer-background":"#202124","toolbar-spacer-color":"#F1F3F4","toolbar-separator":"#4B4C4C"},zo={"bg-prim-w-b":R.white,"bg-prim-w-110":R.white,"bg-prim-w-100":R.white,"bg-prim-w-90":R.white,"bg-prim-w-80":R.white,"bg-prim-w-70":R.white,"bg-prim-inv-b-w":R.black,"bg-prim-cta":R.electric40,"bg-sec-0-110":R.gray0,"bg-sec-0-100":R.gray0,"bg-sec-0-90":R.gray0,"bg-sec-0-80":R.gray0,"bg-sec-0-70":R.gray0,"bg-sec-inv-100-0":R.gray100,"bg-sec-cta":R.electric20,"bg-tert-10-90":R.gray10,"bg-tert-10-80":R.gray10,"bg-tert-10-70":R.gray10,"bg-tert-20-60":R.gray20,"bg-tert-inv-60-20":R.gray60,"bg-tert-inv-80-10":R.gray80,"bg-accent":R.blue20,"bg-blue":R.blue20,"bg-alert":R.orange20,"bg-success":R.green20,"bg-crit":R.red20,"bg-dimmer":"rgba(24, 24, 28, 0.6)","brdr-prim-10-100":R.gray10,"brdr-prim-10-80":R.gray10,"brdr-prim-inv-80-10":R.gray80,"brdr-prim-hov":R.gray20,"brdr-prim-foc":R.gray100,"brdr-prim-cta":R.electric40,"brdr-sec-20-60":R.gray20,"brdr-sec-cta":R.electric20,"brdr-blue":R.electric40,"brdr-tert-40-50":R.gray40,"brdr-crit":R.red40,"brdr-quat-30-70":R.gray30,"sf-prim-cta":R.electric40,"sf-prim-cta-hov":R.electric40h,"sf-prim-cta-pres":R.electric40p,"sf-prim-w-b":R.white,"sf-prim-hov-w-b":R.gray0,"sf-prim-pres-w-b":R.gray10,"sf-prim-w-110":R.white,"sf-prim-hov-w-110":R.gray0,"sf-prim-pres-w-110":R.gray10,"sf-prim-w-100":R.white,"sf-prim-hov-w-100":R.gray0,"sf-prim-pres-w-100":R.gray10,"sf-prim-w-90":R.white,"sf-prim-hov-w-90":R.gray0,"sf-prim-pres-w-90":R.gray10,"sf-prim-w-80":R.white,"sf-prim-hov-w-80":R.gray0,"sf-prim-pres-w-80":R.gray10,"sf-sec-0-110":R.gray0,"sf-sec-hov-0-110":R.gray10,"sf-sec-pres-0-110":R.gray20,"sf-sec-0-100":R.gray0,"sf-sec-hov-0-100":R.gray10,"sf-sec-pres-0-100":R.gray20,"sf-sec-0-80":R.gray0,"sf-sec-hov-0-80":R.gray10,"sf-sec-pres-0-80":R.gray20,"sf-sec-0-90":R.gray0,"sf-sec-hov-0-90":R.gray10,"sf-sec-pres-0-90":R.gray20,"sf-act-electric-blue":R.electric40,"sf-act-blue":R.blue20,"sf-act-blue-60":R.blue20,"sf-act-blue-70":R.gray20,"sf-act-blue-80":R.blue20,"sf-crit":R.red40,"sf-crit-hov":R.red40h,"sf-crit-pres":R.red40p,"sf-prim-cta-electric-w":R.electric30,"sf-prim-cta-hov-electric-w":R.electric30h,"sf-prim-cta-pres-electric-w":R.electric30p,"icn-txt-white":R.white,"icn-txt-black":R.black,"icn-txt-prim":R.black,"icn-txt-prim-inv":R.white,"icn-txt-sec":R.gray50,"icn-txt-tert":R.gray40,"icn-txt-quat":R.gray30,"icn-txt-prim-electric":R.electric40,"icn-txt-accent":R.electric40,"icn-txt-blue":R.electric40,"icn-txt-success":R.green40,"icn-txt-alert":R.orange40,"icn-txt-crit":R.red40,"hglt-prim":R.highlight30,"hglt-sec":R.highlight20,"hglt-hov-sec":R.orange20,"logo-speechify-logo":R.electric40,"logo-speechify-logo-txt":R.black,"hglt-default-prim":R.highlight30,"hglt-default-sec":R.highlight20,"hglt-pink-prim":"#f093fc","hglt-pink-sec":"#fadafe","hglt-red-prim":"#ff7570","hglt-red-sec":"#ffe0dc","hglt-orange-prim":"#fbb559","hglt-orange-sec":"#feeace","hglt-green-prim":"#5de9a5","hglt-green-sec":"#c7fde8","bg-toolbar-preview":"transparent","toolbar-star-icon":"#5F6368","toolbar-preview-background":"transparent","toolbar-preview-color":"#5F6368","toolbar-spacer-background":"#F1F3F4","toolbar-spacer-color":"#5F6368","toolbar-separator":"#DCDCDC"},sT=["hglt-prim-light","hglt-sec-light","hglt-prim-dark","hglt-sec-dark"],cT=[...aT,...sT],lT=Object.fromEntries(cT.map(e=>[e,`var(--speechify-${e})`])),_=lT;a();s();a();s();a();s();var xf=class{value;next;constructor(t){this.value=t}},Qi=class{#e;#t;#r;constructor(){this.clear()}enqueue(t){let r=new xf(t);this.#e?(this.#t.next=r,this.#t=r):(this.#e=r,this.#t=r),this.#r++}dequeue(){let t=this.#e;if(t)return this.#e=this.#e.next,this.#r--,t.value}clear(){this.#e=void 0,this.#t=void 0,this.#r=0}get size(){return this.#r}*[Symbol.iterator](){let t=this.#e;for(;t;)yield t.value,t=t.next}};function bf(e){if(!((Number.isInteger(e)||e===Number.POSITIVE_INFINITY)&&e>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");let t=new Qi,r=0,i=()=>{r--,t.size>0&&t.dequeue()()},c=async(d,y,v)=>{r++;let S=(async()=>d(...v))();y(S);try{await S}catch{}i()},u=(d,y,v)=>{t.enqueue(c.bind(void 0,d,y,v)),(async()=>(await Promise.resolve(),r<e&&t.size>0&&t.dequeue()()))()},f=(d,...y)=>new Promise(v=>{u(d,v,y)});return Object.defineProperties(f,{activeCount:{get:()=>r},pendingCount:{get:()=>t.size},clearQueue:{value:()=>{t.clear()}}}),f}a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();function $e(e){return e!=null&&typeof e=="object"&&e["@@functional/placeholder"]===!0}function ee(e){return function t(r){return arguments.length===0||$e(r)?t:e.apply(this,arguments)}}function D(e){return function t(r,i){switch(arguments.length){case 0:return t;case 1:return $e(r)?t:ee(function(c){return e(r,c)});default:return $e(r)&&$e(i)?t:$e(r)?ee(function(c){return e(c,i)}):$e(i)?ee(function(c){return e(r,c)}):e(r,i)}}}a();s();a();s();function dr(e,t){e=e||[],t=t||[];var r,i=e.length,c=t.length,u=[];for(r=0;r<i;)u[u.length]=e[r],r+=1;for(r=0;r<c;)u[u.length]=t[r],r+=1;return u}a();s();a();s();function $t(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(r){return t.apply(this,arguments)};case 2:return function(r,i){return t.apply(this,arguments)};case 3:return function(r,i,c){return t.apply(this,arguments)};case 4:return function(r,i,c,u){return t.apply(this,arguments)};case 5:return function(r,i,c,u,f){return t.apply(this,arguments)};case 6:return function(r,i,c,u,f,d){return t.apply(this,arguments)};case 7:return function(r,i,c,u,f,d,y){return t.apply(this,arguments)};case 8:return function(r,i,c,u,f,d,y,v){return t.apply(this,arguments)};case 9:return function(r,i,c,u,f,d,y,v,S){return t.apply(this,arguments)};case 10:return function(r,i,c,u,f,d,y,v,S,T){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}a();s();function dn(e,t,r){return function(){for(var i=[],c=0,u=e,f=0;f<t.length||c<arguments.length;){var d;f<t.length&&(!$e(t[f])||c>=arguments.length)?d=t[f]:(d=arguments[c],c+=1),i[f]=d,$e(d)||(u-=1),f+=1}return u<=0?r.apply(this,i):$t(u,dn(e,i,r))}}var uT=D(function(t,r){return t===1?ee(r):$t(t,dn(t,[],r))}),dt=uT;a();s();a();s();function ce(e){return function t(r,i,c){switch(arguments.length){case 0:return t;case 1:return $e(r)?t:D(function(u,f){return e(r,u,f)});case 2:return $e(r)&&$e(i)?t:$e(r)?D(function(u,f){return e(u,i,f)}):$e(i)?D(function(u,f){return e(r,u,f)}):ee(function(u){return e(r,i,u)});default:return $e(r)&&$e(i)&&$e(c)?t:$e(r)&&$e(i)?D(function(u,f){return e(u,f,c)}):$e(r)&&$e(c)?D(function(u,f){return e(u,i,f)}):$e(i)&&$e(c)?D(function(u,f){return e(r,u,f)}):$e(r)?ee(function(u){return e(u,i,c)}):$e(i)?ee(function(u){return e(r,u,c)}):$e(c)?ee(function(u){return e(r,i,u)}):e(r,i,c)}}}a();s();a();s();a();s();var Tt=Array.isArray||function(t){return t!=null&&t.length>=0&&Object.prototype.toString.call(t)==="[object Array]"};a();s();function Xi(e){return e!=null&&typeof e["@@transducer/step"]=="function"}function Ze(e,t,r){return function(){if(arguments.length===0)return r();var i=arguments[arguments.length-1];if(!Tt(i)){for(var c=0;c<e.length;){if(typeof i[e[c]]=="function")return i[e[c]].apply(i,Array.prototype.slice.call(arguments,0,-1));c+=1}if(Xi(i)){var u=t.apply(null,Array.prototype.slice.call(arguments,0,-1));return u(i)}}return r.apply(this,arguments)}}a();s();a();s();a();s();var nt={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}};a();s();a();s();a();s();a();s();a();s();function uo(e,t){for(var r=0,i=t.length,c=Array(i);r<i;)c[r]=e(t[r]),r+=1;return c}a();s();a();s();a();s();function Nn(e){return Object.prototype.toString.call(e)==="[object String]"}var fT=ee(function(t){return Tt(t)?!0:!t||typeof t!="object"||Nn(t)?!1:t.length===0?!0:t.length>0?t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1):!1}),Zi=fT;a();s();var pT=(function(){function e(t){this.f=t}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(t){return t},e.prototype["@@transducer/step"]=function(t,r){return this.f(t,r)},e})();function Us(e){return new pT(e)}a();s();var dT=D(function(t,r){return $t(t.length,function(){return t.apply(r,arguments)})}),vf=dT;function mT(e,t,r){for(var i=0,c=r.length;i<c;){if(t=e["@@transducer/step"](t,r[i]),t&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}i+=1}return e["@@transducer/result"](t)}function Iy(e,t,r){for(var i=r.next();!i.done;){if(t=e["@@transducer/step"](t,i.value),t&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}i=r.next()}return e["@@transducer/result"](t)}function ky(e,t,r,i){return e["@@transducer/result"](r[i](vf(e["@@transducer/step"],e),t))}var Ry=typeof Symbol<"u"?Symbol.iterator:"@@iterator";function gt(e,t,r){if(typeof e=="function"&&(e=Us(e)),Zi(r))return mT(e,t,r);if(typeof r["fantasy-land/reduce"]=="function")return ky(e,t,r,"fantasy-land/reduce");if(r[Ry]!=null)return Iy(e,t,r[Ry]());if(typeof r.next=="function")return Iy(e,t,r);if(typeof r.reduce=="function")return ky(e,t,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}a();s();var gT=(function(){function e(t,r){this.xf=r,this.f=t}return e.prototype["@@transducer/init"]=nt.init,e.prototype["@@transducer/result"]=nt.result,e.prototype["@@transducer/step"]=function(t,r){return this.xf["@@transducer/step"](t,this.f(r))},e})(),hT=D(function(t,r){return new gT(t,r)}),Ay=hT;a();s();a();s();function ht(e,t){return Object.prototype.hasOwnProperty.call(t,e)}a();s();var My=Object.prototype.toString,yT=(function(){return My.call(arguments)==="[object Arguments]"?function(t){return My.call(t)==="[object Arguments]"}:function(t){return ht("callee",t)}})(),Sf=yT;var xT=!{toString:null}.propertyIsEnumerable("toString"),Ly=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Py=(function(){"use strict";return arguments.propertyIsEnumerable("length")})(),bT=function(t,r){for(var i=0;i<t.length;){if(t[i]===r)return!0;i+=1}return!1},vT=typeof Object.keys=="function"&&!Py?ee(function(t){return Object(t)!==t?[]:Object.keys(t)}):ee(function(t){if(Object(t)!==t)return[];var r,i,c=[],u=Py&&Sf(t);for(r in t)ht(r,t)&&(!u||r!=="length")&&(c[c.length]=r);if(xT)for(i=Ly.length-1;i>=0;)r=Ly[i],ht(r,t)&&!bT(c,r)&&(c[c.length]=r),i-=1;return c}),Er=vT;var ST=D(Ze(["fantasy-land/map","map"],Ay,function(t,r){switch(Object.prototype.toString.call(r)){case"[object Function]":return dt(r.length,function(){return t.call(this,r.apply(this,arguments))});case"[object Object]":return gt(function(i,c){return i[c]=t(r[c]),i},{},Er(r));default:return uo(t,r)}})),mr=ST;a();s();a();s();var Dn=Number.isInteger||function(t){return t<<0===t};a();s();var CT=D(function(t,r){var i=t<0?r.length+t:t;return Nn(r)?r.charAt(i):r[i]}),Bn=CT;a();s();var wT=ce(gt),jr=wT;a();s();a();s();var _T=D(function(t,r){return t&&r}),Cf=_T;a();s();a();s();a();s();a();s();var ET=D(function(t,r){return typeof r["fantasy-land/ap"]=="function"?r["fantasy-land/ap"](t):typeof t.ap=="function"?t.ap(r):typeof t=="function"?function(i){return t(i)(r(i))}:gt(function(i,c){return dr(i,mr(c,r))},[],t)}),$s=ET;a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();function fo(e){var t=Object.prototype.toString.call(e);return t==="[object Function]"||t==="[object AsyncFunction]"||t==="[object GeneratorFunction]"||t==="[object AsyncGeneratorFunction]"}a();s();a();s();var kT=D(function(t,r){var i=dt(t,r);return dt(t,function(){return gt($s,mr(i,arguments[0]),Array.prototype.slice.call(arguments,1))})}),Ef=kT;var RT=ee(function(t){return Ef(t.length,t)}),Ho=RT;var AT=D(function(t,r){return fo(t)?function(){return t.apply(this,arguments)&&r.apply(this,arguments)}:Ho(Cf)(t,r)}),Tf=AT;a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();var PT=ee(function(t){return!t}),If=PT;var OT=Ho(If),kf=OT;a();s();a();s();a();s();function Rf(e,t){return function(){return t.call(this,e.apply(this,arguments))}}a();s();a();s();function Fn(e,t){return function(){var r=arguments.length;if(r===0)return t();var i=arguments[r-1];return Tt(i)||typeof i[e]!="function"?t.apply(this,arguments):i[e].apply(i,Array.prototype.slice.call(arguments,0,r-1))}}a();s();var NT=ce(Fn("slice",function(t,r,i){return Array.prototype.slice.call(i,t,r)})),Tr=NT;var DT=ee(Fn("tail",Tr(1,1/0))),qs=DT;function Un(){if(arguments.length===0)throw new Error("pipe requires at least one argument");return $t(arguments[0].length,jr(Rf,arguments[0],qs(arguments)))}a();s();a();s();a();s();a();s();var BT=Bn(0),Ws=BT;a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();var ea=function(t){return(t<10?"0":"")+t},wY=typeof Date.prototype.toISOString=="function"?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+ea(t.getUTCMonth()+1)+"-"+ea(t.getUTCDate())+"T"+ea(t.getUTCHours())+":"+ea(t.getUTCMinutes())+":"+ea(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();var WT=ee(function(t){return dt(t.length,t)}),ta=WT;a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();function tI(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1,i=arguments.length;r<i;){var c=arguments[r];if(c!=null)for(var u in c)ht(u,c)&&(t[u]=c[u]);r+=1}return t}var ra=typeof Object.assign=="function"?Object.assign:tI;a();s();a();s();a();s();a();s();a();s();var nI=D(function(t,r){return r instanceof t||r!=null&&(r.constructor===t||t.name==="Object"&&typeof r=="object")}),Hs=nI;a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();var pI=D(function(t,r){return ra({},t,r)}),Uf=pI;a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();var Fge=typeof String.prototype.trim=="function";a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();a();s();function NI(e,{getInitialState:t},r=p.storage.local){let i=new Promise((B,V)=>r.get(e,w=>w[e]===void 0?t().then(P=>r.set({[e]:P},B)).catch(V):B())),c=()=>new Promise(B=>r.get(e,V=>B(V[e]??{}))),u=(B,V,w)=>new Promise(P=>r.set({[e]:{...B,[V]:w}},()=>P(B))),f=B=>new Promise(V=>r.set({[e]:B},V)),d=bf(1),y=async()=>i.then(()=>d(c)),v=B=>i.then(()=>d(c)).then(V=>V[B]),S=async B=>i.then(()=>d(()=>f(B))),T=async(B,V)=>i.then(()=>d(async()=>{let w=await c(),P=typeof V=="function"?V(w[B]):V,N=Tf(Hs(Object),kf(Array.isArray));return typeof V!="function"&&N(P)&&N(w)?u(w,B,Uf(w[B],P)):u(w,B,P)})),M=async()=>i.then(()=>d(async()=>f(await t()))),A=[],F=B=>(A.push(B),()=>{A=A.filter(V=>V!==B)});return p.storage.onChanged.addListener(B=>{Object.keys(B).includes(e)&&y().then(V=>{A.forEach(w=>w(V))})}),{get:v,getAll:y,set:T,setAll:S,reset:M,listen:F}}function Ys(e,{getInitialState:t}){return NI(e,{getInitialState:t})}var Ko=Ys("logger",{getInitialState:async()=>({enableRequestLogging:!0,enableLogging:!0})}),DI={red:"#E06C75",green:"#98C379",yellow:"#E5C07B",blue:"#61AFEF",purple:"#C678DD",cyan:"#56B6C2",orange:"#e08d6c",lime:"#a9c379"},Yy=Object.values(DI),BI=e=>Yy[Array.from(e).map(t=>t.charCodeAt(0)).reduce((t,r)=>t+r,0)%Yy.length],Qy=(e=10)=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(16).slice(0,e),Qs=!0;Ko.get("enableRequestLogging").then(e=>{e===!1&&(Qs=e)});function Xs({hash:e,label:t,labelCSS:r,path:i,logInfo:c}){let u=performance.now();return()=>{}}var Zs=!0;Ko.get("enableLogging").then(e=>{Zs=e});function le(e,t="blue"){let r=(i,c)=>(...u)=>{Zs&&console[i](e?`%c${e}:`:`%c${i[0].toUpperCase()}${i.slice(1)}:`,`color: ${pn[e?t:c]}; font-weight: bold;`,...u)};return{debug:r("debug","cyan"),info:r("info","green"),warn:r("warn","yellow"),error:r("error","red")}}globalThis.enableRequestLogging=async()=>{await Ko.set("enableRequestLogging",!0),Qs=!0};globalThis.disableRequestLogging=async()=>{await Ko.set("enableRequestLogging",!1),Qs=!1};globalThis.enableLogging=async()=>{await Ko.set("enableLogging",!0),Zs=!0};globalThis.disableLogging=async()=>{await Ko.set("enableLogging",!1),Zs=!1};var Xy=le("Sidepanel Tab Store"),N4e=async e=>{K.setState({initialUrl:e})},D4e=async(e,t)=>{let r=K.getState();if(e===r.currentUrl)return;let i=await Bs(e),c=i||Yi(),u=t;try{let d=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}")[e];d?.imageUrl&&(u={...t,imageUrl:d.imageUrl,imageExtractedAt:d.extractedAt})}catch(f){Xy.warn("Failed to load cached image for URL:",f)}K.setState({currentUrl:e,currentUrlState:c,currentUrlMetadata:u}),i||await Pn(e,c)},Zy=async(e,t)=>{let{currentUrl:r,currentUrlState:i}=K.getState(),c=t||r;if(!c)return;let u=i;if(t&&t!==r&&(u=await Bs(t)||null),!u)return;let f={...u,...e};c===r&&K.setState({currentUrlState:f}),await Pn(c,f)},B4e=e=>{let{currentUrlMetadata:t}=K.getState(),r={...t,...e};K.setState({currentUrlMetadata:r})},F4e=async()=>{let{currentUrl:e,currentUrlState:t,activeSummaryControllers:r,activeChatControllers:i,currentSessionState:c}=K.getState();if(!e)return;if(c){let f=r.get(c.sessionId);f&&(f.abort(),r.delete(c.sessionId),K.setState({activeSummaryControllers:new Map(r)}));let d=i.get(c.sessionId);d&&(d.abort(),i.delete(c.sessionId),K.setState({activeChatControllers:new Map(i)}))}let u={...Yi(),hasContent:t?.hasContent??!1,contentCount:t?.contentCount??0};K.setState({currentUrlState:u}),await Pn(e,u),fn.getState().setQuestionRecommendations(yf)},U4e=async()=>{let{currentUrl:e,activeSummaryControllers:t,activeChatControllers:r}=K.getState(),i=await Fs();for(let[c,u]of i.entries()){let f=t.get(c);f&&(f.abort(),t.delete(c));let d=r.get(c);d&&(d.abort(),r.delete(c));let y={...Yi(),hasContent:u?.hasContent??!1,contentCount:u?.contentCount??0};c===e&&K.setState({currentUrlState:y}),await Pn(c,y)}K.setState({activeSummaryControllers:new Map(t),activeChatControllers:new Map(r)}),Xy.info(`Cleared chat for ${i.size} URLs`)},V4e=async e=>{let{activeSummaryControllers:t,activeChatControllers:r}=K.getState(),i=await Bs(e);if(!i)return;let c=t.get(e);c&&(c.abort(),t.delete(e));let u=r.get(e);u&&(u.abort(),r.delete(e));let f={...Yi(),hasContent:i?.hasContent??!1,contentCount:i?.contentCount??0};await Pn(e,f);let{currentUrl:d}=K.getState();d===e&&K.setState({currentUrlState:f}),K.setState({activeSummaryControllers:new Map(t),activeChatControllers:new Map(r)})};a();s();var j4e=async(e,t)=>{let{currentUrl:r,currentSessionState:i}=K.getState();if(!r||!i)return;let c={extractedAt:Date.now(),summary:e,url:r,settings:t},u={...i,summaryData:c};K.setState({currentSessionState:u}),await Mt(u)},H4e=async e=>{let{currentSessionState:t}=K.getState();if(!t)return;let r={...t,isLoadingSummary:e,summaryFeedback:e?void 0:t.summaryFeedback};K.setState({currentSessionState:r}),await Mt(r)},K4e=async e=>{let{currentSessionState:t}=K.getState();if(!t)return;let r={...t,summaryFeedback:{isLiked:e,feedbackAt:Date.now()}};K.setState({currentSessionState:r}),await Mt(r)},Y4e=(e,t)=>{let{activeSummaryControllers:r}=K.getState();r.set(e,t),K.setState({activeSummaryControllers:new Map(r)})},Q4e=e=>{let{activeSummaryControllers:t}=K.getState(),r=t.get(e);r&&(r.abort(),t.delete(e),K.setState({activeSummaryControllers:new Map(t)}))},X4e=e=>{let{activeSummaryControllers:t}=K.getState(),r=t.get(e);return r?r.signal.aborted:!1};a();s();a();s();var Js=le("SessionActions"),Jy=async()=>{let{currentSessionState:e}=K.getState();e&&e.messages.length>0&&await Mt(e);let t=Os(),r=Date.now(),i={sessionId:t,startTime:r,messages:[],urls:[]};return K.setState({currentSessionState:i}),Js.debug("Started new session:",t),i},s9e=async e=>{let{currentSessionState:t}=K.getState();t&&t.messages.length>0&&await Mt(t);let r=await hf(e);return r?(K.setState({currentSessionState:r}),Js.debug("Loaded session:",e),r):null},Vf=async e=>{let{currentSessionState:t,currentUrl:r}=K.getState();if(t||(t=await Jy()),t.messages.some(u=>u.id===e.id))return;let i=t.messages.length===0&&e.type==="user",c={...t,messages:[...t.messages,e],urls:r&&!t.urls.includes(r)?[...t.urls,r]:t.urls,...i?{title:e.content}:{}};K.setState({currentSessionState:c}),await Mt(c)},$f=async(e,t)=>{let{currentSessionState:r}=K.getState();if(!r)return;let i=r.messages.map(u=>u.id===e?{...u,...t,updatedAt:Date.now()}:u),c={...r,messages:i};K.setState({currentSessionState:c}),await Mt(c)},c9e=async()=>_y(),l9e=async e=>{await Ey(e)},u9e=async()=>{let{currentSessionState:e,activeChatControllers:t,activeSummaryControllers:r}=K.getState();if(e){let i=new Map(t),c=new Map(r),u=i.get(e.sessionId);u&&(u.abort(),i.delete(e.sessionId));let f=c.get(e.sessionId);f&&(f.abort(),c.delete(e.sessionId)),K.setState({activeChatControllers:i,activeSummaryControllers:c})}await Ty(),K.setState({currentSessionState:null}),Js.info("Cleared all sessions")},f9e=async(e,t)=>{let r=await hf(e);if(!r)return;let i={...r,title:t};await Mt(i);let{currentSessionState:c}=K.getState();c?.sessionId===e&&K.setState({currentSessionState:i})},p9e=async e=>{let{currentSessionState:t}=K.getState();if(!t){let c={...await Jy(),questionRecommendations:e};K.setState({currentSessionState:c}),await Mt(c);return}let r={...t,questionRecommendations:e};K.setState({currentSessionState:r}),await Mt(r)},d9e=async()=>{let{currentSessionState:e,activeChatControllers:t,activeSummaryControllers:r}=K.getState();if(!e)return;let i=new Map(t),c=new Map(r),u=i.get(e.sessionId);u&&(u.abort(),i.delete(e.sessionId));let f=c.get(e.sessionId);f&&(f.abort(),c.delete(e.sessionId));let d={...e,messages:[],chatId:void 0,isChatStreaming:void 0,summaryData:void 0,summaryFeedback:void 0,isLoadingSummary:void 0};K.setState({currentSessionState:d,activeChatControllers:i,activeSummaryControllers:c}),await Mt(d),Js.info("Cleared chat for current session")},m9e=async e=>{let{currentSessionState:t}=K.getState();t&&(t.exitedVoiceMode=e,K.setState({currentSessionState:t}))};var w9e=async(e,t)=>{let{currentUrl:r}=K.getState(),i=t||r;if(!i)return"";let c=Os(),u=Date.now(),f={...e,id:c,timestamp:u,updatedAt:u,...e.type==="user"&&i?{targetUrl:i}:{}};return await Vf(f),c},e2=async(e,t)=>{await $f(e,t)},_9e=async e=>{let{currentSessionState:t}=K.getState();if(!t)return;let r={...t,chatId:e};K.setState({currentSessionState:r}),await Mt(r)},E9e=async e=>{let{currentSessionState:t}=K.getState();if(!t)return;let r={...t,isChatStreaming:e};K.setState({currentSessionState:r}),await Mt(r)},T9e=async()=>{let{currentSessionState:e,activeChatControllers:t}=K.getState();if(!e)return;let r=t.get(e.sessionId);r&&(r.abort(),t.delete(e.sessionId),K.setState({activeChatControllers:new Map(t)}));let i={...e,chatId:void 0,isChatStreaming:void 0};K.setState({currentSessionState:i}),await Mt(i)},I9e=(e,t)=>{let{activeChatControllers:r}=K.getState();r.set(e,t),K.setState({activeChatControllers:new Map(r)})},k9e=e=>{let{activeChatControllers:t}=K.getState(),r=t.get(e);r&&(r.abort(),t.delete(e),K.setState({activeChatControllers:new Map(t)}))},R9e=e=>{let{activeChatControllers:t}=K.getState(),r=t.get(e);return r?r.signal.aborted:!1},A9e=e=>{K.setState({questionInput:e})};a();s();var ec=le("Sidepanel Tab Store"),D9e=async(e,t)=>{let{currentUrl:r,currentUrlMetadata:i}=K.getState(),c=t||r;if(c){if(c===r){let u={...i,imageUrl:e,imageExtractedAt:Date.now()};K.setState({currentUrlMetadata:u})}try{let u=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}");u[c]={imageUrl:e,extractedAt:Date.now()},localStorage.setItem("sidepanel-image-cache",JSON.stringify(u))}catch(u){ec.warn("Failed to cache image URL for:",c,u)}}},B9e=()=>{let{currentUrl:e,currentUrlMetadata:t}=K.getState();if(!e)return null;if(t?.imageUrl)return t.imageUrl;try{let i=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}")[e];if(i?.imageUrl)return i.imageUrl}catch(r){ec.warn("Failed to read image cache:",r)}return null},F9e=()=>{let{currentUrl:e,currentUrlMetadata:t}=K.getState();if(!e)return!1;let r=1440*60*1e3,i=Date.now();if(t?.imageExtractedAt)return i-t.imageExtractedAt<r;try{let u=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}")[e];if(u?.extractedAt)return i-u.extractedAt<r}catch(c){ec.warn("Failed to check image cache validity:",c)}return!1},U9e=async()=>{let{currentUrl:e,currentUrlMetadata:t}=K.getState();if(!e)return;let r={...t,imageUrl:void 0,imageExtractedAt:void 0};K.setState({currentUrlMetadata:r});try{let i=JSON.parse(localStorage.getItem("sidepanel-image-cache")||"{}");delete i[e],localStorage.setItem("sidepanel-image-cache",JSON.stringify(i))}catch(i){ec.warn("Failed to clear image cache:",i)}};a();s();var t2=le("Sidepanel Tab Store"),H9e=async()=>{let{currentUrl:e,currentUrlMetadata:t}=K.getState();if(!e||!t?.tabId)return t2.warn("Cannot check content availability - missing URL or tab ID"),!1;try{let r=await Je("/content/check-content-availability",{tabId:t.tabId}),i=!!r?.hasContent,c=r?.contentCount||0,u=i&&c>0,f=K.getState();if(f.currentUrlState){let d={...f.currentUrlState,hasContent:u,contentCount:c};K.setState({currentUrlState:d}),await Pn(e,d)}return u}catch(r){return t2.warn("Failed to check content availability:",r),!1}};a();s();var Z9e=e=>{K.setState({config:e})};var g5e=()=>[K(t=>t.currentUrlState),Zy],qf=()=>K(e=>e.currentUrl),r2=()=>K(e=>e.currentUrlMetadata),h5e=()=>K(e=>e.config),y5e=()=>null,x5e=()=>K(e=>e.currentSessionState?.chatId),b5e=()=>{let e=K(i=>i.currentSessionState?.isChatStreaming),[t,r]=(0,Hr.useState)(!1);return(0,Hr.useEffect)(()=>{if(!e){r(!1);return}r(e)},[e]),t},v5e=e=>{let[t,r]=(0,Hr.useState)(!1);return(0,Hr.useEffect)(()=>{let i=()=>{let c=Date.now(),u=e.updatedAt+.5*60*1e3<=c,f=e.status==="streaming"&&!u;e.status==="streaming"&&u&&e2(e.id,{status:"completed"}),r(f)};if(i(),e.status==="streaming"){let c=setInterval(i,5e3);return()=>clearInterval(c)}},[e]),t},FI=()=>{let e=K(r=>r.currentSessionState);return{messages:(0,Hr.useMemo)(()=>e?.messages?[...e.messages].sort((r,i)=>r.timestamp-i.timestamp):[],[e]),loading:!1}},S5e=()=>{let e=qf(),[t,r]=(0,Hr.useState)(null);return(0,Hr.useEffect)(()=>{(async()=>{try{let c=await Fs();r(c)}catch{r(null)}})()},[e]),t},C5e=()=>{let{messages:e}=FI(),t=K(c=>c.currentSessionState),r=e.length>0,i=t?.summaryData!==void 0;return r||i};a();s();a();s();a();s();var UI={amplitude:{apiKey:"7cb368e0f04f1b8e6fc3ce1008c0011c"},cdn:{baseUrl:"https://cdn.speechify.com"},cloudFunctions:{baseUrl:"https://us-central1-speechifymobile.cloudfunctions.net"},platform:{cloudFunctionsBaseUrl:"https://us-central1-speechifymobile.cloudfunctions.net"},segment:{writeKey:"TNQ3krVkHTWg6Gx2PEkaCYEXaNrwbGXG"},summarizationProxyUrl:"https://us-central1-faro-cloud-proxy-production.cloudfunctions.net/gemini-summarization-proxy",llmService:{baseUrl:"https://llm.api.speechify.com"},audioServer:{baseUrl:"https://audio.api.speechify.com"},voiceTyping:{url:"https://ce-voice-typing.speechify.com"},app:{baseUrl:"https://app.speechify.com"}},n2=UI;var po=n2;a();s();a();s();a();s();a();s();var tc=class extends Error{code;constructor(t){super(t),this.code="unknown"}},oa=class extends Error{code;constructor(t){super(t),this.code="not-found"}},rc=class extends Error{code;constructor(t){super(t),this.code="bad-request"}},nc=class extends Error{code;constructor(t){super(t),this.code="unauthorized"}};a();s();var VI={red:"#E06C75",green:"#98C379",yellow:"#E5C07B",blue:"#61AFEF",purple:"#C678DD",cyan:"#56B6C2",orange:"#e08d6c",lime:"#a9c379"},G5e=Object.values(VI);function Vn(e,t){return{prefix:e,resolvers:t,handleRequest:async(r,i,c)=>{let u=r.split("/").filter(Boolean);if(!(u[0]in t))throw new oa("No resource found");let f=t[u[0]];return typeof f=="function"?f(i,c):f.handleFetch(u.slice(1).join("/"),i)}}}var o2=(e,t)=>{if(e==="success")throw new Error("Attempted to convert success code to error");return e==="bad-request"?new rc(t??"Bad request"):e==="not-found"?new oa(t??"Not found"):e==="unauthorized"?new nc(t??"Unauthorized"):new tc(t??"Unknown error detected")};async function $I(e,t){let r=Qy(6),i=Xs({hash:r,label:"Fetch",labelCSS:"color: #67cbff",logInfo:()=>ao(t),path:e}),c=new Promise((u,f)=>{p.runtime.sendMessage({path:e,request:t,hash:r,isHermes:!0},d=>{if(p.runtime.lastError)return f(new Error(p.runtime.lastError.message||"Connection to background failed"));if(!d)return f(new Error("No response received from background"));if(!d.meta?.isSuccess)return f(o2(d.meta?.code,d.body?.message));u(d)})});return og(c,i)}function Je(e,...t){return $I(e,{body:t[0]??{},meta:{}}).then(r=>r.body)}a();s();var Yo=le("SettingsStore","green"),WI=async()=>{try{let e=await Je("/user-settings/get"),t=e["extension.chat.enableDefaultVoiceMode"]??!1,r=e["extension.chat.autoPlayReplies"]??!1,i=e["extension.chat.voiceSpeed"]??1.2,c=e["extension.chat.summaryDepth"]||"medium",u=e["extension.chat.summaryMode"]||"paragraph",f=e["extension.voiceTyping.soundEffects"]??!0;return{voice:e.voice||null,playbackSpeed:e.playbackSpeed||null,autoScroll:e.autoScroll??!0,autoScrollTemporary:!0,extensionChatEnableDefaultVoiceMode:t,extensionChatAutoPlayReplies:r,extensionChatVoiceSpeed:i,extensionChatSummaryDepth:c,extensionChatSummaryMode:u,voiceTypingSoundEffects:f}}catch(e){throw Yo.error("❌ Failed to fetch initial settings:",e),new Error(`Failed to fetch settings: ${e instanceof Error?e.message:String(e)}`)}},St=pt()(_r((e,t)=>{let r=null,i=null;return{voice:null,playbackSpeed:null,autoScroll:!0,autoScrollTemporary:!0,scrollIndicator:null,extensionChatEnableDefaultVoiceMode:!1,extensionChatAutoPlayReplies:!1,extensionChatVoiceSpeed:1.2,extensionChatSummaryDepth:"medium",extensionChatSummaryMode:"paragraph",voiceTypingSoundEffects:!0,isReady:!1,readinessPromise:new Promise((f,d)=>{r=f,i=d}),error:null,updateVoice:f=>{e({voice:f})},updateSpeed:f=>{e({playbackSpeed:f})},updateSettings:f=>{e(d=>({voice:f.voice!==void 0?f.voice:d.voice,playbackSpeed:f.playbackSpeed!==void 0?f.playbackSpeed:d.playbackSpeed,autoScroll:f.autoScroll!==void 0?f.autoScroll:d.autoScroll}))},updateSummarySettings:async f=>{let d=[];f.length!==void 0&&d.push(t().updateExtensionChatSummaryDepth(f.length)),f.mode!==void 0&&d.push(t().updateExtensionChatSummaryMode(f.mode)),await Promise.all(d)},updateExtensionChatSetting:async(f,d)=>{let v=t()[f];e({[f]:d});try{let T={extensionChatEnableDefaultVoiceMode:"extension.chat.enableDefaultVoiceMode",extensionChatAutoPlayReplies:"extension.chat.autoPlayReplies",extensionChatVoiceSpeed:"extension.chat.voiceSpeed",extensionChatSummaryDepth:"extension.chat.summaryDepth",extensionChatSummaryMode:"extension.chat.summaryMode"}[f];await Je("/user-settings/set-extension-chat-settings",{[T]:d})}catch(S){Yo.error(`❌ Failed to save ${f}:`,S),e({[f]:v})}},updateExtensionChatEnableDefaultVoiceMode:async f=>t().updateExtensionChatSetting("extensionChatEnableDefaultVoiceMode",f),updateExtensionChatAutoPlayReplies:async f=>t().updateExtensionChatSetting("extensionChatAutoPlayReplies",f),updateExtensionChatVoiceSpeed:async f=>t().updateExtensionChatSetting("extensionChatVoiceSpeed",f),updateExtensionChatSummaryDepth:async f=>t().updateExtensionChatSetting("extensionChatSummaryDepth",f),updateExtensionChatSummaryMode:async f=>t().updateExtensionChatSetting("extensionChatSummaryMode",f),updateVoiceTypingSoundEffects:async f=>{let d=t().voiceTypingSoundEffects;e({voiceTypingSoundEffects:f});try{await Je("/user-settings/set-voice-typing-sound-effects",{soundEffectsEnabled:f})}catch(y){Yo.error("❌ Failed to save voiceTypingSoundEffects:",y),e({voiceTypingSoundEffects:d})}},setAutoScrollTemporary:f=>{e({autoScrollTemporary:f})},enableAutoScroll:()=>{e({autoScroll:!0,autoScrollTemporary:!0,scrollIndicator:null})},setScrollIndicator:f=>{t().scrollIndicator!==f&&e({scrollIndicator:f})},fetchAndUpdateAutoscrollState:async()=>{try{let{default:f}=await import("./TabManager-JZH3Q5ZT.js"),y=f.getInstance().getCurrentTab();if(!y?.id){Yo.warn("No current tab ID available for autoscroll state fetch");return}let v=await Je("/content/get-autoscroll-state",{tabId:y.id});e({autoScroll:v.autoScroll??t().autoScroll,autoScrollTemporary:v.autoScrollTemporary??t().autoScrollTemporary})}catch(f){Yo.error("❌ Failed to fetch and update autoscroll state:",f)}},initialize:async()=>{if(!t().isReady)try{let d=await WI();e({voice:d.voice,playbackSpeed:d.playbackSpeed,autoScroll:d.autoScroll,autoScrollTemporary:d.autoScrollTemporary,extensionChatEnableDefaultVoiceMode:d.extensionChatEnableDefaultVoiceMode,extensionChatAutoPlayReplies:d.extensionChatAutoPlayReplies,extensionChatVoiceSpeed:d.extensionChatVoiceSpeed,extensionChatSummaryDepth:d.extensionChatSummaryDepth,extensionChatSummaryMode:d.extensionChatSummaryMode,voiceTypingSoundEffects:d.voiceTypingSoundEffects,scrollIndicator:null,isReady:!0,error:null}),r?.()}catch(d){let y=d instanceof Error?d.message:String(d);Yo.error("❌ Failed to initialize settings store:",y),e({error:y,isReady:!1}),i?.(d instanceof Error?d:new Error(y))}}}})),GI=()=>St(e=>e.voice);var mCe=()=>St(e=>e.scrollIndicator);var ia=async()=>{let e=St.getState();e.isReady||await e.initialize()},i2=()=>{let e=St.getState();if(!e.isReady)throw new Error("Settings store is not ready. Call initSettingsStore() first.");if(e.voice===null||e.playbackSpeed===null)throw new Error("Settings store is ready but contains null values. This should not happen.");return{voice:e.voice,playbackSpeed:e.playbackSpeed,autoScroll:e.autoScroll,autoScrollTemporary:e.autoScrollTemporary,scrollIndicator:e.scrollIndicator,isReady:!0}},zI=async()=>(await ia(),i2());a();s();a();s();a();s();var Gf=Se(s2());var zf=e=>[e[0],e[0]+e[2]],Wf=e=>[e[1],e[1]+e[3]],HI=ta((e,t)=>Math.max(e[0],t[0])<Math.min(e[1],t[1])),c2=e=>({x:e.x,y:e.y,width:e.width,height:e.height}),Kr=e=>[e.x,e.y,e.width,e.height],l2=e=>({x:e[0],y:e[1],width:e[2],height:e[3]}),u2=(e,t)=>r=>({x:Math.max(r.x-e,0),y:r.y,width:r.width+e*2,height:r.height*t}),f2=e=>{let t=Un(Ws,Kr,Wf)(e),r=e.filter(Un(Kr,Wf,HI(t)));return{x:e[0].x,y:e[0].y,width:Math.max(...r.map(Un(Kr,zf,Gf.default)))-e[0].x,height:Math.max(...r.map(Un(Kr,Wf,Gf.default)))-e[0].y}},oc=(e,t)=>[Math.max(t[0]-e[0],0),Math.max(t[1]-e[1],0),Math.min(t[2],e[2]),Math.min(t[3],e[3])];"CSS"in globalThis&&"paintWorklet"in globalThis.CSS&&CSS.paintWorklet.addModule(p.runtime.getURL("/houdini.js"));var KI=!("CSS"in globalThis&&"paintWorklet"in globalThis.CSS),ic=2,YI=1.1,jf=_["hglt-sec"],Hf=_["hglt-prim"];function QI(e){let t=e instanceof HTMLElement?e:e.parentElement;return window.getComputedStyle(t).color}function Yf(e,t){let r=`--${e}ElemColor`,i=`--${e}ElemMatrix`,c=`--${e}HighlightWordInfo`,u=`--${e}HighlightWordClipInfo`,f=`--${e}HighlightSentenceInfo`,d=`--${e}SentenceHighlightColorDark`,y=`--${e}SentenceHighlightColorLight`,v=`--${e}WordHighlightColorDark`,S=`--${e}WordHighlightColorLight`,T=0,M=new Map,A=ik();function F(Y){let he={scaleX:1,scaleY:1,skewX:0,skewY:0,translateX:0,translateY:0};if(!A)return he;for(;Y;){let ue=window.getComputedStyle(Y),xe=ue.transform||ue.webkitTransform;if(xe&&xe!=="none"){let Be=xe.match(/^matrix\((.+)\)$/);if(Be){let Te=Be[1].split(", ").map(parseFloat);if(Te.length===6){let Me=Te[0],st=Te[3],et=Math.atan(Te[1]),qe=Math.atan(Te[2]),je=Te[4],ot=Te[5];return{scaleX:Me,scaleY:st,skewX:et,skewY:qe,translateX:je,translateY:ot}}}}Y=Y.parentElement}return he}function B(Y){let he=M.get(Y);if(he){let{ctx:xe,id:Be}=he;return xe.clearRect(0,0,Y.scrollWidth,Y.scrollHeight),{ctx:xe,id:Be}}return he={ctx:document.getCSSCanvasContext("2d",`${e}-highlighting-${T}`,Y.scrollWidth,Y.scrollHeight),id:`${e}-highlighting-${T}`},M.set(Y,he),T++,he}function V(Y){Y.style.removeProperty(r),Y.style.removeProperty(c),Y.style.removeProperty(u),Y.style.removeProperty(f),Y.style.removeProperty(d),Y.style.removeProperty(y),Y.style.removeProperty(v),Y.style.removeProperty(S),Y.style.removeProperty(i);let ue=Y.style.getPropertyValue("background-image").split(",").filter(xe=>!xe.includes(e)).join(",");ue===""?Y.style.removeProperty("background-image"):Y.style.setProperty("background-image",ue),Y.removeAttribute(`data-${e}-highlight`),Y.removeAttribute(`data-${e}-no-background`)}async function w(Y,{elemColor:he,elemMatrix:ue,sentencePositions:xe,wordPositions:Be,wordClipPositions:Te,highlightColor:Me,sentenceOnly:st,isKeypoint:et}){async function qe(){let{ctx:ot,id:Ht}=B(Y);Y.style.setProperty("background-image",`-webkit-canvas(${Ht})`);let{paint:kt}=await import("./houdini-2I4PEVIF.js"),wt=et?jf:Me.sentence,Bt=et?Hf:Me.word;st?kt(ot,{elemColor:he,elemMatrix:ue,sentencePositions:xe,sentenceColor:wt,wordColor:Bt}):kt(ot,{elemColor:he,elemMatrix:ue,wordPositions:Be,wordClipPositions:Te,sentencePositions:xe,sentenceColor:wt,wordColor:Bt})}function je(){if(Y.style.getPropertyValue("transform"))Y.style.removeProperty("transform");else{let ot=getComputedStyle(Y).transform;Y.style.setProperty("transform",ot==="none"?"translateZ(0)":ot)}}await qe(),je()}function P(Y,{elemColor:he,elemMatrix:ue,sentencePositions:xe,wordPositions:Be,wordClipPositions:Te,highlightColor:Me,sentenceOnly:st,unsetColor:et,isKeypoint:qe}){et&&(Y.style.color="unset"),Y.style.setProperty(r,he??null),Y.style.setProperty(f,xe?.join(",")??null);let je=Y.style.getPropertyValue("background-image");if(je!==""){let ot=je.split(",").filter(Ht=>!Ht.includes(e)).join(",");Y.style.setProperty("background-image",`${ot}, paint(${e})`)}else Y.style.setProperty("background-image",`paint(${e})`);qe?(Y.style.setProperty(d,jf),Y.style.setProperty(y,jf),Y.style.setProperty(v,Hf),Y.style.setProperty(S,Hf)):(Y.style.setProperty(d,Me.sentence.dark),Y.style.setProperty(y,Me.sentence.light),Y.style.setProperty(v,Me.word.dark),Y.style.setProperty(S,Me.word.light)),ue&&Y.style.setProperty(i,N(ue)),st?(Y.style.removeProperty(c),Y.style.removeProperty(u)):(Y.style.setProperty(c,Be?.join(",")??null),Y.style.setProperty(u,Te?.join(",")??null))}function N(Y){let{scaleX:he,scaleY:ue,skewX:xe,skewY:Be,translateX:Te,translateY:Me}=Y,st=Math.tan(xe),et=Math.tan(Be);return`${he},${ue},${st},${et},${Te},${Me}`}async function Q(Y,{wordPositions:he,wordClipPositions:ue,sentencePositions:xe,elemColor:Be,elemMatrix:Te,unsetColor:Me,isKeypoint:st}={},et=t){let qe={...t,...et},{keepBackgrounds:je}=qe;KI?await w(Y,{wordPositions:he,wordClipPositions:ue,sentencePositions:xe,elemColor:Be,elemMatrix:Te,isKeypoint:st,...qe}):P(Y,{wordPositions:he,wordClipPositions:ue,sentencePositions:xe,elemColor:Be,elemMatrix:Te,unsetColor:Me,isKeypoint:st,...qe}),Y.setAttribute(`data-${e}-highlight`,"true"),je||Y.setAttribute(`data-${e}-no-background`,"true")}let j=Y=>{let he=Array.from(Y?.querySelectorAll(`[data-${e}-highlight="true"], [data-${e}-no-background="true"], [style*="${f}"]`)??[]).filter(ue=>ue instanceof HTMLElement);for(let ue of he)V(ue)};async function X(Y=null){let he=Y??document.body,ue=Array.from(he.querySelectorAll(`[data-${e}-highlight="true"], [data-${e}-no-background="true"], [style*="${f}"]`)).filter(xe=>xe instanceof HTMLElement);j(document.body);for(let xe of ue)V(xe)}function $(Y,he,ue,xe,Be=t){let Te=Qo(Y,ue[0],ue[1]),Me=Qo(Y,xe[0],xe[1]);return ye(he,Te,Me,{...t,...Be})}let ae=performance.now();function ye(Y,he,ue,xe=t){let{sentenceOnly:Be,keepBackgrounds:Te,highlightColor:Me,rectOnly:st,...et}={...t,...xe},qe=p2(ue,ic);if(!Be&&(qe.length===0||qe[0].width===0))return;let je=qe[0],ot=Kr(je??{x:0,y:0,width:0,height:0}),Ht=p2(he,ic,!0),kt=Ht.map(Kr),wt=f2(Ht);if(st||!Y)return{lineRect:wt};let Bt=performance.now();for(let Kt of Y){let Yt=Kt.closest("a")?.parentElement||Kt;if(!he.intersectsNode(Yt)){V(Yt);continue}let ir=ek(Yt,he),tt=kt,Qt=!1;if(ir!==Yt){let Vr=new Map,Xt=$r=>{let bn=Math.round($r[0]+$r[2]/2),Zt=Math.round($r[1]+$r[3]/2),tn=`${bn},${Zt}`;if(Vr.has(tn))return Vr.get(tn);let Oa=!!document.elementFromPoint(bn,Zt)?.closest('button,[role="button"],a[role="button"],svg,mat-icon');return Vr.set(tn,Oa),Oa},en=kt.filter($r=>!Xt($r));en.length>0&&(tt=en),Qt=Xt(ot)}_e(ir,ot,tt,Bt-ae,{sentenceOnly:Be||Qt,keepBackgrounds:Te,highlightColor:Me,...et})}return ae=Bt,{lineRect:wt}}let me,oe,Ae=[];function _e(Y,he,ue,xe,Be=t){let Te=Y instanceof HTMLElement?Y:Y.parentElement,{avoidGlobalSpaceTransformation:Me,sentenceOnly:st,keepBackgrounds:et,highlightColor:qe,elementColor:je,unsetColor:ot}={...t,...Be},Ht=getComputedStyle(Te);je||=QI(Te);let kt=Kr(Te.getBoundingClientRect()),wt=Me?he:oc(kt,he),Bt=Me?ue:ue.map(ir=>oc(kt,ir));me??=wt,oe&&Math.abs(oe[1]-wt[1])>8&&(Ae.push({start:[...oe],current:[...oe],target:Kr({...l2(oe),x:zf(oe)[1],width:0})}),me=wt,me[2]=0),oe=[...wt];let Kt=d2(me,wt,xe),Yt=[...Kt];me=st?void 0:[...Kt];for(let ir in Ae){let tt=Ae[ir];if(Math.abs(tt.current[2]-tt.target[2])<.5){Ae.splice(Number(ir),1);continue}let Qt=d2(tt.current,tt.target,xe),Vr=tt.start;Kt.push(...Vr),Yt.push(...Qt),tt.current=Qt}if(Ht.display==="inline"){let ir=Array.from(Te.getClientRects()).map(Kr).map(en=>oc(kt,en)),tt=Ht.direction==="rtl"?ok:nk,Qt=Ht.direction==="rtl"?Bt.at(-1):Bt.at(0),Vr=tt(ir,wt);Kt=Kf(Vr,Kt),Yt=Kf(Vr,Yt);let Xt=tt(ir,Qt);Bt=[Kf(Xt,[Qt[0],Bt[0][1],Bt.reduce((en,$r)=>en+$r[2]-ic,ic),Bt[0][3]])]}Q(Te,{wordPositions:Kt,wordClipPositions:Yt,sentencePositions:Bt.flat(),elemColor:je,elemMatrix:F(Te),unsetColor:ot,isKeypoint:Be.isKeypoint},{sentenceOnly:st,keepBackgrounds:et,highlightColor:qe})}return{removeHighlights:X,highlightElement:$,highlightVec:_e}}function XI(e){return e.nodeType===Node.ELEMENT_NODE?e:e.parentElement}var ZI=/rgba?\(([^)]+)\)/;function JI(e){let t=window.getComputedStyle(e).backgroundColor;if(!t||t==="transparent")return!1;let r=ZI.exec(t);if(!r)return!0;let i=r[1].split(",").map(u=>parseFloat(u));return(i.length>=4?i[3]:1)>0}function ek(e,t){let r=XI(t.commonAncestorContainer);if(!r||r===e||!e.contains(r))return e;for(let i=r;i&&i!==e;i=i.parentElement)if(JI(i))return r;return e}function p2(e,t,r){let i=Array.from(e.getClientRects()).map(c2).map(u2(t,YI)),c=i[i.length-1];return r&&c&&(c.width-=t*2),i}function d2(e,t,r){let i=Math.min(.15*Math.sqrt(Math.max(1,r)),1),c=1-i;return[e[0]*c+t[0]*i,e[1]<=t[1]?e[1]*c+t[1]*i:t[1],e[2]*c+t[2]*i,e[3]<=t[1]?e[3]*c+t[3]*i:t[3]]}function tk(e,t,r){let i=e.textContent??"",c=t,u=r;for(;c<u&&/\s/.test(i.charAt(c));)c++;for(;u>c&&/\s/.test(i.charAt(u-1));)u--;return[c,u]}function Qo(e,t,r){[t,r]=tk(e,t,r);let i=m2(e,t),c=m2(e,r),u=new Range;try{u.setStart(i.node,i.offset),u.setEnd(c.node,c.offset)}catch{}return u}function m2(e,t){let r=rk(e,NodeFilter.SHOW_TEXT),i=0,c=e;for(let u of r){if((u.textContent?.length??0)+i>t)return{node:u,offset:t-i};i+=u.textContent?.length||0,c=u}return{node:c,offset:c?.textContent?.length??0}}function*rk(e,t){let r=e.ownerDocument.createNodeIterator(e,t),i=r.nextNode();for(;i;)yield i,i=r.nextNode()}function Kf(e,t){return[t[0]+e.totalXOffset-(t[1]===0?e.xMarginOffset:0),0,t[2]-2,t[3]]}function nk(e,t){let r=e.findIndex(f=>f[1]===t[1]),i=e.slice(0,Math.max(0,r)),c=i.length===0?e[0]?.[0]??0:0,u=i.reduce((f,d)=>f+d[2],0)+1;return{xMarginOffset:c,totalXOffset:u}}function ok(e,t){let r=e.findIndex(f=>f[1]===t[1]),i=e.slice(Math.max(0,r)+1),c=0,u=i.reduce((f,d)=>f+d[2],0)+1-(e[r]?.[0]??0);return{xMarginOffset:c,totalXOffset:u}}function ik(){let e=document.querySelectorAll("*");for(let t of e){let i=getComputedStyle(t).transform;if(i.startsWith("matrix")){let c=i.match(/matrix\(([^)]+)\)/)?.[1].split(",").map(parseFloat);if(c){let u=c[0],f=c[3];if(u!==1||f!==1)return!0}}}return!1}a();s();var ak=pt(()=>({currentWord:null})),Qf=e=>{ak.setState({currentWord:e})};a();s();var y2,Xf=1e4,gn=!1,mn=0,Xo,aa,ep;function sk({targetY:e,currentY:t,element:r=window}){ep=e,!gn&&(aa=t,Xo=document.timeline.currentTime,mn=0,gn=!0,requestAnimationFrame(i=>Zf(i,r)))}var ca=()=>{let e=St.getState();return{autoScroll:e.autoScroll,autoScrollTemporary:e.autoScrollTemporary}},x2=e=>{St.getState().setAutoScrollTemporary(e)},ac=e=>{St.getState().setScrollIndicator(e)};function Zf(e,t){let{autoScroll:r,autoScrollTemporary:i}=ca();if(!(i&&r)){gn=!1;return}let u=ep-aa;if(gn=Math.abs(u)>15||Math.abs(mn)>10,!gn)return;if(qn){requestAnimationFrame(y=>Zf(y,t));return}let f=e-(typeof Xo=="number"?Xo:Xo?Xo.to("ms").value:0);Xo=e;let d=Math.ceil(f*10);for(let y=0;y<d;y++)ck(f/d);E2({top:aa},t),requestAnimationFrame(y=>Zf(y,t))}function ck(e){let t=e/1e3,r=ep-aa,i=Math.sign(mn)*mn**2/2/Xf>r,u=(r<0?!i:i)?Math.min(mn**2/2/Xf/Math.abs(r),1.1):1;mn+=(i?-1:1)*Xf*u*t,aa+=mn*t}function b2({top:e,behavior:t},{element:r=window}={}){t==="smooth"?sk({targetY:Math.max(e,0),currentY:r===window?window.scrollY:r.scrollTop,element:r}):E2({top:e,behavior:t},r)}var Jf=!1,qn=!1,mo=!1,v2=0,S2=0,sc=!1,lc=e=>e.pointerType==="touch";window.addEventListener("pointerdown",e=>{!lc(e)||qn||(qn=!0,v2=e.screenX??0,S2=e.screenY??0)});window.addEventListener("pointermove",e=>{if(!lc(e)||!qn||mo)return;let t=e.screenX??0,r=e.screenY??0;mo=Math.sqrt((t-v2)**2+(r-S2)**2)>32,mo&&C2()});function C2(){if(gn&&_2(),!Zo)return;let{autoScrollTemporary:e}=ca();e&&x2(!1),ac(cc())}window.addEventListener("wheel",e=>{if(e.deltaY===0)return;let t=document.getElementById("scrollable-content");if(t){let r=e.target;if(!r||!t.contains(r))return}C2()},{passive:!0});window.addEventListener("pointerup",e=>{lc(e)&&(qn=!1,mo=!1)});window.addEventListener("pointercancel",e=>{lc(e)&&(qn=!1,mo=!1)});var Zo=!1,sa=null;function $n(){if(sc)return;if(Jf){Jf=!1;return}if(Cs()&&qn&&!mo)return;gn&&(gn=!1,mn=0);let{autoScrollTemporary:e}=ca();if(e&&Zo){x2(!1);let t=cc();ac(t)}else if(!e&&Zo){let t=cc();ac(t)}y2=performance.now()}function tp(e){Zo=e,e||(sa=null,St.getState().setScrollIndicator(null))}function w2(){let{autoScroll:e,autoScrollTemporary:t}=ca();return e&&t&&Zo}function _2(){gn=!1,mn=0}function lk(){sc=!1,sa=null,_2()}var g2=()=>window.location.origin==="https://docs.google.com"&&window.location.pathname.startsWith("/document/d");function E2(e,t=window){if(e?.behavior==="smooth"&&(console.warn("Smooth scroll breaks auto scroll...ignoring"),delete e.behavior),qn){y2=performance.now();return}mo||(sc=!0,t.scrollTo(e),Jf=!0,setTimeout(()=>{sc=!1},50))}var h2=async e=>{let t=document.getElementById("scrollable-content");return e?document.querySelector(e)?.addEventListener("scroll",$n):t?t.addEventListener("scroll",$n):g2()?document.querySelector(".kix-appview-editor")?.addEventListener("scroll",$n):window.addEventListener("scroll",$n),()=>{e?document.querySelector(e)?.removeEventListener("scroll",$n):t?t.removeEventListener("scroll",$n):g2()?document.querySelector(".kix-appview-editor")?.removeEventListener("scroll",$n):window.removeEventListener("scroll",$n)}},$Ce=e=>{let t=0,r=10,i=()=>e.aborted?Promise.resolve(()=>{}):document.getElementById("scrollable-content")?h2():(t++,t<r?new Promise(u=>setTimeout(()=>i().then(u),100)):h2());return i()};function la(e){sa=e;let{autoScrollTemporary:t}=ca();if(!t&&Zo){let r=cc();ac(r)}}function cc(){let e=document.getElementById("scrollable-content");if(!e||sa===null)return null;let t=e.scrollTop,r=e.clientHeight,i=sa-t,c=50;return i<-c?"top":i>r+c?"bottom":null}function qCe(){St.getState().enableAutoScroll(),lk()}a();s();a();s();a();s();var uk=le("SidepanelLLMAuth");async function Jo(){try{let{fetch:e}=await import("./routes-B2I6HDDM.js"),t=await e("/auth/get-id-token");if(!t?.idToken)throw new Error("No ID token received from auth service");return t.idToken}catch(e){throw uk.error("Failed to get auth token:",e),e}}var JCe=le("SidepanelLLMService");a();s();a();s();var u8e=le("Chat");a();s();a();s();var T2=(r=>(r.DISABLED="disabled",r.ENABLED="enabled",r))(T2||{}),I2=(r=>(r.CONTROL="control",r.HYBRID="hybrid",r))(I2||{}),k2=(r=>(r.CONTROL="control",r.DISPLAY="display",r))(k2||{}),rp=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(rp||{}),R2=(r=>(r.CONTROL="control",r.ENABLED="introduce-autoplay",r))(R2||{}),A2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(A2||{}),M2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(M2||{}),L2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(L2||{}),P2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(P2||{}),O2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(O2||{}),N2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(N2||{}),D2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(D2||{}),B2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(B2||{}),F2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(F2||{}),U2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(U2||{}),np=(r=>(r.CONTROL="control",r.ADAPTIVE="adaptive",r))(np||{}),V2=(r=>(r.CONTROL="control",r.ENABLED="enabled",r))(V2||{}),T8e={oneClickUpsellNotif:Object.values(k2),ceParsingMode:Object.values(I2),sidePlayer:Object.values(T2),grafanaAnonymousTotalVisitLogging:Object.values(rp),grafanaAnonymousUniqueVisitLogging:Object.values(rp),introduceAiAutoplay:Object.values(R2),cevoicetyping:Object.values(A2),cevoicetypingFree:Object.values(M2),ceVoiceMode:Object.values(L2),ceVoiceModeFree:Object.values(P2),ceVoiceModeOnByDefault:Object.values(O2),ceCursorDictation:Object.values(N2),ceQuestionRecommendation:Object.values(D2),micButtonRedesign:Object.values(B2),ceMeetingNoteTaking:Object.values(F2),ceDictationDuringMeetingCapture:Object.values(U2),voice_chat_voices_config:[],ceStreamingSynthesis:Object.values(np),cePdfListenButton:Object.values(V2)};a();s();var op=e=>{let t=`hglt-${e}-prim`,r=`hglt-${e}-sec`;return{primary:_[t],secondary:_[r],primaryLight:zo[t],secondaryLight:zo[r],primaryDark:pn[t],secondaryDark:pn[r]}},M8e=op("default");a();s();var $2=(e,t,{data:r})=>{if(!r)throw new Error("No audio provided");let i=URL.createObjectURL(new Blob([r])),c=new Audio(i);c.playbackRate=t;let u=null,f=!1,d=null,y=()=>{f&&!c.paused&&d&&(d({type:"progress",payload:{duration:c.currentTime}}),u=requestAnimationFrame(y))};return{play:async()=>{c.play(),f=!0,u=requestAnimationFrame(y)},pause:async()=>{c.pause(),f=!1,u&&(cancelAnimationFrame(u),u=null)},stop:async()=>{c.pause(),c.currentTime=0,f=!1,u&&(cancelAnimationFrame(u),u=null)},setupEvents:v=>(d=v,c.addEventListener("ended",()=>{f=!1,u&&(cancelAnimationFrame(u),u=null),v({type:"ended"})}),()=>{d=null,u&&(cancelAnimationFrame(u),u=null)}),seekTo:async v=>{c.currentTime=v},seekToCharIndex:async()=>{console.warn("seekToCharIndex is a no op for hdAudioPlayer")},getCurrentTime:()=>c.currentTime,getDuration:async()=>c.duration,destroy:async()=>{d=null,u&&(cancelAnimationFrame(u),u=null),c.pause(),c.removeAttribute("src"),c.load(),URL.revokeObjectURL(i)},setSpeed:async v=>{c.playbackRate=v}}};a();s();a();s();a();s();a();s();a();s();function uc(e){let t=typeof e;if(t=="object"){if(Array.isArray(e))return"array";if(e===null)return"null"}return t}function q2(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}a();s();var hn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),fc=[];for(let e=0;e<hn.length;e++)fc[hn[e].charCodeAt(0)]=e;fc[45]=hn.indexOf("+");fc[95]=hn.indexOf("/");function W2(e){let t=e.length*3/4;e[e.length-2]=="="?t-=2:e[e.length-1]=="="&&(t-=1);let r=new Uint8Array(t),i=0,c=0,u,f=0;for(let d=0;d<e.length;d++){if(u=fc[e.charCodeAt(d)],u===void 0)switch(e[d]){case"=":c=0;case`
`:case"\r":case"	":case" ":continue;default:throw Error("invalid base64 string.")}switch(c){case 0:f=u,c=1;break;case 1:r[i++]=f<<2|(u&48)>>4,f=u,c=2;break;case 2:r[i++]=(f&15)<<4|(u&60)>>2,f=u,c=3;break;case 3:r[i++]=(f&3)<<6|u,c=0;break}}if(c==1)throw Error("invalid base64 string.");return r.subarray(0,i)}function G2(e){let t="",r=0,i,c=0;for(let u=0;u<e.length;u++)switch(i=e[u],r){case 0:t+=hn[i>>2],c=(i&3)<<4,r=1;break;case 1:t+=hn[c|i>>4],c=(i&15)<<2,r=2;break;case 2:t+=hn[c|i>>6],t+=hn[i&63],r=0;break}return r&&(t+=hn[c],t+="=",r==1&&(t+="=")),t}a();s();var Ct;(function(e){e.symbol=Symbol.for("protobuf-ts/unknown"),e.onRead=(r,i,c,u,f)=>{(t(i)?i[e.symbol]:i[e.symbol]=[]).push({no:c,wireType:u,data:f})},e.onWrite=(r,i,c)=>{for(let{no:u,wireType:f,data:d}of e.list(i))c.tag(u,f).raw(d)},e.list=(r,i)=>{if(t(r)){let c=r[e.symbol];return i?c.filter(u=>u.no==i):c}return[]},e.last=(r,i)=>e.list(r,i).slice(-1)[0];let t=r=>r&&Array.isArray(r[e.symbol])})(Ct||(Ct={}));var se;(function(e){e[e.Varint=0]="Varint",e[e.Bit64=1]="Bit64",e[e.LengthDelimited=2]="LengthDelimited",e[e.StartGroup=3]="StartGroup",e[e.EndGroup=4]="EndGroup",e[e.Bit32=5]="Bit32"})(se||(se={}));a();s();a();s();a();s();function z2(){let e=0,t=0;for(let i=0;i<28;i+=7){let c=this.buf[this.pos++];if(e|=(c&127)<<i,(c&128)==0)return this.assertBounds(),[e,t]}let r=this.buf[this.pos++];if(e|=(r&15)<<28,t=(r&112)>>4,(r&128)==0)return this.assertBounds(),[e,t];for(let i=3;i<=31;i+=7){let c=this.buf[this.pos++];if(t|=(c&127)<<i,(c&128)==0)return this.assertBounds(),[e,t]}throw new Error("invalid varint")}function dc(e,t,r){for(let u=0;u<28;u=u+7){let f=e>>>u,d=!(!(f>>>7)&&t==0),y=(d?f|128:f)&255;if(r.push(y),!d)return}let i=e>>>28&15|(t&7)<<4,c=t>>3!=0;if(r.push((c?i|128:i)&255),!!c){for(let u=3;u<31;u=u+7){let f=t>>>u,d=!!(f>>>7),y=(d?f|128:f)&255;if(r.push(y),!d)return}r.push(t>>>31&1)}}var pc=65536*65536;function ip(e){let t=e[0]=="-";t&&(e=e.slice(1));let r=1e6,i=0,c=0;function u(f,d){let y=Number(e.slice(f,d));c*=r,i=i*r+y,i>=pc&&(c=c+(i/pc|0),i=i%pc)}return u(-24,-18),u(-18,-12),u(-12,-6),u(-6),[t,i,c]}function mc(e,t){if(t>>>0<=2097151)return""+(pc*t+(e>>>0));let r=e&16777215,i=(e>>>24|t<<8)>>>0&16777215,c=t>>16&65535,u=r+i*6777216+c*6710656,f=i+c*8147497,d=c*2,y=1e7;u>=y&&(f+=Math.floor(u/y),u%=y),f>=y&&(d+=Math.floor(f/y),f%=y);function v(S,T){let M=S?String(S):"";return T?"0000000".slice(M.length)+M:M}return v(d,0)+v(f,d)+v(u,1)}function ap(e,t){if(e>=0){for(;e>127;)t.push(e&127|128),e=e>>>7;t.push(e)}else{for(let r=0;r<9;r++)t.push(e&127|128),e=e>>7;t.push(1)}}function j2(){let e=this.buf[this.pos++],t=e&127;if((e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<7,(e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<14,(e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<21,(e&128)==0)return this.assertBounds(),t;e=this.buf[this.pos++],t|=(e&15)<<28;for(let r=5;(e&128)!==0&&r<10;r++)e=this.buf[this.pos++];if((e&128)!=0)throw new Error("invalid varint");return this.assertBounds(),t>>>0}var Ke;function mk(){let e=new DataView(new ArrayBuffer(8));Ke=globalThis.BigInt!==void 0&&typeof e.getBigInt64=="function"&&typeof e.getBigUint64=="function"&&typeof e.setBigInt64=="function"&&typeof e.setBigUint64=="function"?{MIN:BigInt("-9223372036854775808"),MAX:BigInt("9223372036854775807"),UMIN:BigInt("0"),UMAX:BigInt("18446744073709551615"),C:BigInt,V:e}:void 0}mk();function H2(e){if(!e)throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")}var K2=/^-?[0-9]+$/,hc=4294967296,gc=2147483648,yc=class{constructor(t,r){this.lo=t|0,this.hi=r|0}isZero(){return this.lo==0&&this.hi==0}toNumber(){let t=this.hi*hc+(this.lo>>>0);if(!Number.isSafeInteger(t))throw new Error("cannot convert to safe number");return t}},yt=class e extends yc{static from(t){if(Ke)switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=="")throw new Error("string is no integer");t=Ke.C(t);case"number":if(t===0)return this.ZERO;t=Ke.C(t);case"bigint":if(!t)return this.ZERO;if(t<Ke.UMIN)throw new Error("signed value for ulong");if(t>Ke.UMAX)throw new Error("ulong too large");return Ke.V.setBigUint64(0,t,!0),new e(Ke.V.getInt32(0,!0),Ke.V.getInt32(4,!0))}else switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=t.trim(),!K2.test(t))throw new Error("string is no integer");let[r,i,c]=ip(t);if(r)throw new Error("signed value for ulong");return new e(i,c);case"number":if(t==0)return this.ZERO;if(!Number.isSafeInteger(t))throw new Error("number is no integer");if(t<0)throw new Error("signed value for ulong");return new e(t,t/hc)}throw new Error("unknown value "+typeof t)}toString(){return Ke?this.toBigInt().toString():mc(this.lo,this.hi)}toBigInt(){return H2(Ke),Ke.V.setInt32(0,this.lo,!0),Ke.V.setInt32(4,this.hi,!0),Ke.V.getBigUint64(0,!0)}};yt.ZERO=new yt(0,0);var at=class e extends yc{static from(t){if(Ke)switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=="")throw new Error("string is no integer");t=Ke.C(t);case"number":if(t===0)return this.ZERO;t=Ke.C(t);case"bigint":if(!t)return this.ZERO;if(t<Ke.MIN)throw new Error("signed long too small");if(t>Ke.MAX)throw new Error("signed long too large");return Ke.V.setBigInt64(0,t,!0),new e(Ke.V.getInt32(0,!0),Ke.V.getInt32(4,!0))}else switch(typeof t){case"string":if(t=="0")return this.ZERO;if(t=t.trim(),!K2.test(t))throw new Error("string is no integer");let[r,i,c]=ip(t);if(r){if(c>gc||c==gc&&i!=0)throw new Error("signed long too small")}else if(c>=gc)throw new Error("signed long too large");let u=new e(i,c);return r?u.negate():u;case"number":if(t==0)return this.ZERO;if(!Number.isSafeInteger(t))throw new Error("number is no integer");return t>0?new e(t,t/hc):new e(-t,-t/hc).negate()}throw new Error("unknown value "+typeof t)}isNegative(){return(this.hi&gc)!==0}negate(){let t=~this.hi,r=this.lo;return r?r=~r+1:t+=1,new e(r,t)}toString(){if(Ke)return this.toBigInt().toString();if(this.isNegative()){let t=this.negate();return"-"+mc(t.lo,t.hi)}return mc(this.lo,this.hi)}toBigInt(){return H2(Ke),Ke.V.setInt32(0,this.lo,!0),Ke.V.setInt32(4,this.hi,!0),Ke.V.getBigInt64(0,!0)}};at.ZERO=new at(0,0);var Y2={readUnknownField:!0,readerFactory:e=>new sp(e)};function Q2(e){return e?Object.assign(Object.assign({},Y2),e):Y2}var sp=class{constructor(t,r){this.varint64=z2,this.uint32=j2,this.buf=t,this.len=t.length,this.pos=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.textDecoder=r??new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})}tag(){let t=this.uint32(),r=t>>>3,i=t&7;if(r<=0||i<0||i>5)throw new Error("illegal tag: field no "+r+" wire type "+i);return[r,i]}skip(t){let r=this.pos;switch(t){case se.Varint:for(;this.buf[this.pos++]&128;);break;case se.Bit64:this.pos+=4;case se.Bit32:this.pos+=4;break;case se.LengthDelimited:let i=this.uint32();this.pos+=i;break;case se.StartGroup:let c;for(;(c=this.tag()[1])!==se.EndGroup;)this.skip(c);break;default:throw new Error("cant skip wire type "+t)}return this.assertBounds(),this.buf.subarray(r,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let t=this.uint32();return t>>>1^-(t&1)}int64(){return new at(...this.varint64())}uint64(){return new yt(...this.varint64())}sint64(){let[t,r]=this.varint64(),i=-(t&1);return t=(t>>>1|(r&1)<<31)^i,r=r>>>1^i,new at(t,r)}bool(){let[t,r]=this.varint64();return t!==0||r!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return new yt(this.sfixed32(),this.sfixed32())}sfixed64(){return new at(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let t=this.uint32(),r=this.pos;return this.pos+=t,this.assertBounds(),this.buf.subarray(r,r+t)}string(){return this.textDecoder.decode(this.bytes())}};a();s();a();s();function Oe(e,t){if(!e)throw new Error(t)}var gk=34028234663852886e22,hk=-34028234663852886e22,yk=4294967295,xk=2147483647,bk=-2147483648;function Wn(e){if(typeof e!="number")throw new Error("invalid int 32: "+typeof e);if(!Number.isInteger(e)||e>xk||e<bk)throw new Error("invalid int 32: "+e)}function go(e){if(typeof e!="number")throw new Error("invalid uint 32: "+typeof e);if(!Number.isInteger(e)||e>yk||e<0)throw new Error("invalid uint 32: "+e)}function ei(e){if(typeof e!="number")throw new Error("invalid float 32: "+typeof e);if(Number.isFinite(e)&&(e>gk||e<hk))throw new Error("invalid float 32: "+e)}var X2={writeUnknownFields:!0,writerFactory:()=>new cp};function Z2(e){return e?Object.assign(Object.assign({},X2),e):X2}var cp=class{constructor(t){this.stack=[],this.textEncoder=t??new TextEncoder,this.chunks=[],this.buf=[]}finish(){this.chunks.push(new Uint8Array(this.buf));let t=0;for(let c=0;c<this.chunks.length;c++)t+=this.chunks[c].length;let r=new Uint8Array(t),i=0;for(let c=0;c<this.chunks.length;c++)r.set(this.chunks[c],i),i+=this.chunks[c].length;return this.chunks=[],r}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let t=this.finish(),r=this.stack.pop();if(!r)throw new Error("invalid state, fork stack empty");return this.chunks=r.chunks,this.buf=r.buf,this.uint32(t.byteLength),this.raw(t)}tag(t,r){return this.uint32((t<<3|r)>>>0)}raw(t){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(t),this}uint32(t){for(go(t);t>127;)this.buf.push(t&127|128),t=t>>>7;return this.buf.push(t),this}int32(t){return Wn(t),ap(t,this.buf),this}bool(t){return this.buf.push(t?1:0),this}bytes(t){return this.uint32(t.byteLength),this.raw(t)}string(t){let r=this.textEncoder.encode(t);return this.uint32(r.byteLength),this.raw(r)}float(t){ei(t);let r=new Uint8Array(4);return new DataView(r.buffer).setFloat32(0,t,!0),this.raw(r)}double(t){let r=new Uint8Array(8);return new DataView(r.buffer).setFloat64(0,t,!0),this.raw(r)}fixed32(t){go(t);let r=new Uint8Array(4);return new DataView(r.buffer).setUint32(0,t,!0),this.raw(r)}sfixed32(t){Wn(t);let r=new Uint8Array(4);return new DataView(r.buffer).setInt32(0,t,!0),this.raw(r)}sint32(t){return Wn(t),t=(t<<1^t>>31)>>>0,ap(t,this.buf),this}sfixed64(t){let r=new Uint8Array(8),i=new DataView(r.buffer),c=at.from(t);return i.setInt32(0,c.lo,!0),i.setInt32(4,c.hi,!0),this.raw(r)}fixed64(t){let r=new Uint8Array(8),i=new DataView(r.buffer),c=yt.from(t);return i.setInt32(0,c.lo,!0),i.setInt32(4,c.hi,!0),this.raw(r)}int64(t){let r=at.from(t);return dc(r.lo,r.hi,this.buf),this}sint64(t){let r=at.from(t),i=r.hi>>31,c=r.lo<<1^i,u=(r.hi<<1|r.lo>>>31)^i;return dc(c,u,this.buf),this}uint64(t){let r=yt.from(t);return dc(r.lo,r.hi,this.buf),this}};a();s();var J2={emitDefaultValues:!1,enumAsInteger:!1,useProtoFieldName:!1,prettySpaces:0},ex={ignoreUnknownFields:!1};function tx(e){return e?Object.assign(Object.assign({},ex),e):ex}function rx(e){return e?Object.assign(Object.assign({},J2),e):J2}a();s();var xc=Symbol.for("protobuf-ts/message-type");a();s();a();s();a();s();function lp(e){let t=!1,r=[];for(let i=0;i<e.length;i++){let c=e.charAt(i);c=="_"?t=!0:/\d/.test(c)?(r.push(c),t=!0):t?(r.push(c.toUpperCase()),t=!1):i==0?r.push(c.toLowerCase()):r.push(c)}return r.join("")}var W;(function(e){e[e.DOUBLE=1]="DOUBLE",e[e.FLOAT=2]="FLOAT",e[e.INT64=3]="INT64",e[e.UINT64=4]="UINT64",e[e.INT32=5]="INT32",e[e.FIXED64=6]="FIXED64",e[e.FIXED32=7]="FIXED32",e[e.BOOL=8]="BOOL",e[e.STRING=9]="STRING",e[e.BYTES=12]="BYTES",e[e.UINT32=13]="UINT32",e[e.SFIXED32=15]="SFIXED32",e[e.SFIXED64=16]="SFIXED64",e[e.SINT32=17]="SINT32",e[e.SINT64=18]="SINT64"})(W||(W={}));var qt;(function(e){e[e.BIGINT=0]="BIGINT",e[e.STRING=1]="STRING",e[e.NUMBER=2]="NUMBER"})(qt||(qt={}));var ua;(function(e){e[e.NO=0]="NO",e[e.PACKED=1]="PACKED",e[e.UNPACKED=2]="UNPACKED"})(ua||(ua={}));function nx(e){var t,r,i,c;return e.localName=(t=e.localName)!==null&&t!==void 0?t:lp(e.name),e.jsonName=(r=e.jsonName)!==null&&r!==void 0?r:lp(e.name),e.repeat=(i=e.repeat)!==null&&i!==void 0?i:ua.NO,e.opt=(c=e.opt)!==null&&c!==void 0?c:e.repeat||e.oneof?!1:e.kind=="message",e}a();s();a();s();function ox(e){if(typeof e!="object"||e===null||!e.hasOwnProperty("oneofKind"))return!1;switch(typeof e.oneofKind){case"string":return e[e.oneofKind]===void 0?!1:Object.keys(e).length==2;case"undefined":return Object.keys(e).length==1;default:return!1}}var bc=class{constructor(t){var r;this.fields=(r=t.fields)!==null&&r!==void 0?r:[]}prepare(){if(this.data)return;let t=[],r=[],i=[];for(let c of this.fields)if(c.oneof)i.includes(c.oneof)||(i.push(c.oneof),t.push(c.oneof),r.push(c.oneof));else switch(r.push(c.localName),c.kind){case"scalar":case"enum":(!c.opt||c.repeat)&&t.push(c.localName);break;case"message":c.repeat&&t.push(c.localName);break;case"map":t.push(c.localName);break}this.data={req:t,known:r,oneofs:Object.values(i)}}is(t,r,i=!1){if(r<0)return!0;if(t==null||typeof t!="object")return!1;this.prepare();let c=Object.keys(t),u=this.data;if(c.length<u.req.length||u.req.some(f=>!c.includes(f))||!i&&c.some(f=>!u.known.includes(f)))return!1;if(r<1)return!0;for(let f of u.oneofs){let d=t[f];if(!ox(d))return!1;if(d.oneofKind===void 0)continue;let y=this.fields.find(v=>v.localName===d.oneofKind);if(!y||!this.field(d[d.oneofKind],y,i,r))return!1}for(let f of this.fields)if(f.oneof===void 0&&!this.field(t[f.localName],f,i,r))return!1;return!0}field(t,r,i,c){let u=r.repeat;switch(r.kind){case"scalar":return t===void 0?r.opt:u?this.scalars(t,r.T,c,r.L):this.scalar(t,r.T,r.L);case"enum":return t===void 0?r.opt:u?this.scalars(t,W.INT32,c):this.scalar(t,W.INT32);case"message":return t===void 0?!0:u?this.messages(t,r.T(),i,c):this.message(t,r.T(),i,c);case"map":if(typeof t!="object"||t===null)return!1;if(c<2)return!0;if(!this.mapKeys(t,r.K,c))return!1;switch(r.V.kind){case"scalar":return this.scalars(Object.values(t),r.V.T,c,r.V.L);case"enum":return this.scalars(Object.values(t),W.INT32,c);case"message":return this.messages(Object.values(t),r.V.T(),i,c)}break}return!0}message(t,r,i,c){return i?r.isAssignable(t,c):r.is(t,c)}messages(t,r,i,c){if(!Array.isArray(t))return!1;if(c<2)return!0;if(i){for(let u=0;u<t.length&&u<c;u++)if(!r.isAssignable(t[u],c-1))return!1}else for(let u=0;u<t.length&&u<c;u++)if(!r.is(t[u],c-1))return!1;return!0}scalar(t,r,i){let c=typeof t;switch(r){case W.UINT64:case W.FIXED64:case W.INT64:case W.SFIXED64:case W.SINT64:switch(i){case qt.BIGINT:return c=="bigint";case qt.NUMBER:return c=="number"&&!isNaN(t);default:return c=="string"}case W.BOOL:return c=="boolean";case W.STRING:return c=="string";case W.BYTES:return t instanceof Uint8Array;case W.DOUBLE:case W.FLOAT:return c=="number"&&!isNaN(t);default:return c=="number"&&Number.isInteger(t)}}scalars(t,r,i,c){if(!Array.isArray(t))return!1;if(i<2)return!0;if(Array.isArray(t)){for(let u=0;u<t.length&&u<i;u++)if(!this.scalar(t[u],r,c))return!1}return!0}mapKeys(t,r,i){let c=Object.keys(t);switch(r){case W.INT32:case W.FIXED32:case W.SFIXED32:case W.SINT32:case W.UINT32:return this.scalars(c.slice(0,i).map(u=>parseInt(u)),r,i);case W.BOOL:return this.scalars(c.slice(0,i).map(u=>u=="true"?!0:u=="false"?!1:u),r,i);default:return this.scalars(c,r,i,qt.STRING)}}};a();s();a();s();function nr(e,t){switch(t){case qt.BIGINT:return e.toBigInt();case qt.NUMBER:return e.toNumber();default:return e.toString()}}var vc=class{constructor(t){this.info=t}prepare(){var t;if(this.fMap===void 0){this.fMap={};let r=(t=this.info.fields)!==null&&t!==void 0?t:[];for(let i of r)this.fMap[i.name]=i,this.fMap[i.jsonName]=i,this.fMap[i.localName]=i}}assert(t,r,i){if(!t){let c=uc(i);throw(c=="number"||c=="boolean")&&(c=i.toString()),new Error(`Cannot parse JSON ${c} for ${this.info.typeName}#${r}`)}}read(t,r,i){this.prepare();let c=[];for(let[u,f]of Object.entries(t)){let d=this.fMap[u];if(!d){if(!i.ignoreUnknownFields)throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${u}`);continue}let y=d.localName,v;if(d.oneof){if(f===null&&(d.kind!=="enum"||d.T()[0]!=="google.protobuf.NullValue"))continue;if(c.includes(d.oneof))throw new Error(`Multiple members of the oneof group "${d.oneof}" of ${this.info.typeName} are present in JSON.`);c.push(d.oneof),v=r[d.oneof]={oneofKind:y}}else v=r;if(d.kind=="map"){if(f===null)continue;this.assert(q2(f),d.name,f);let S=v[y];for(let[T,M]of Object.entries(f)){this.assert(M!==null,d.name+" map value",null);let A;switch(d.V.kind){case"message":A=d.V.T().internalJsonRead(M,i);break;case"enum":if(A=this.enum(d.V.T(),M,d.name,i.ignoreUnknownFields),A===!1)continue;break;case"scalar":A=this.scalar(M,d.V.T,d.V.L,d.name);break}this.assert(A!==void 0,d.name+" map value",M);let F=T;d.K==W.BOOL&&(F=F=="true"?!0:F=="false"?!1:F),F=this.scalar(F,d.K,qt.STRING,d.name).toString(),S[F]=A}}else if(d.repeat){if(f===null)continue;this.assert(Array.isArray(f),d.name,f);let S=v[y];for(let T of f){this.assert(T!==null,d.name,null);let M;switch(d.kind){case"message":M=d.T().internalJsonRead(T,i);break;case"enum":if(M=this.enum(d.T(),T,d.name,i.ignoreUnknownFields),M===!1)continue;break;case"scalar":M=this.scalar(T,d.T,d.L,d.name);break}this.assert(M!==void 0,d.name,f),S.push(M)}}else switch(d.kind){case"message":if(f===null&&d.T().typeName!="google.protobuf.Value"){this.assert(d.oneof===void 0,d.name+" (oneof member)",null);continue}v[y]=d.T().internalJsonRead(f,i,v[y]);break;case"enum":if(f===null)continue;let S=this.enum(d.T(),f,d.name,i.ignoreUnknownFields);if(S===!1)continue;v[y]=S;break;case"scalar":if(f===null)continue;v[y]=this.scalar(f,d.T,d.L,d.name);break}}}enum(t,r,i,c){if(t[0]=="google.protobuf.NullValue"&&Oe(r===null||r==="NULL_VALUE",`Unable to parse field ${this.info.typeName}#${i}, enum ${t[0]} only accepts null.`),r===null)return 0;switch(typeof r){case"number":return Oe(Number.isInteger(r),`Unable to parse field ${this.info.typeName}#${i}, enum can only be integral number, got ${r}.`),r;case"string":let u=r;t[2]&&r.substring(0,t[2].length)===t[2]&&(u=r.substring(t[2].length));let f=t[1][u];return typeof f>"u"&&c?!1:(Oe(typeof f=="number",`Unable to parse field ${this.info.typeName}#${i}, enum ${t[0]} has no value for "${r}".`),f)}Oe(!1,`Unable to parse field ${this.info.typeName}#${i}, cannot parse enum value from ${typeof r}".`)}scalar(t,r,i,c){let u;try{switch(r){case W.DOUBLE:case W.FLOAT:if(t===null)return 0;if(t==="NaN")return Number.NaN;if(t==="Infinity")return Number.POSITIVE_INFINITY;if(t==="-Infinity")return Number.NEGATIVE_INFINITY;if(t===""){u="empty string";break}if(typeof t=="string"&&t.trim().length!==t.length){u="extra whitespace";break}if(typeof t!="string"&&typeof t!="number")break;let f=Number(t);if(Number.isNaN(f)){u="not a number";break}if(!Number.isFinite(f)){u="too large or small";break}return r==W.FLOAT&&ei(f),f;case W.INT32:case W.FIXED32:case W.SFIXED32:case W.SINT32:case W.UINT32:if(t===null)return 0;let d;if(typeof t=="number"?d=t:t===""?u="empty string":typeof t=="string"&&(t.trim().length!==t.length?u="extra whitespace":d=Number(t)),d===void 0)break;return r==W.UINT32?go(d):Wn(d),d;case W.INT64:case W.SFIXED64:case W.SINT64:if(t===null)return nr(at.ZERO,i);if(typeof t!="number"&&typeof t!="string")break;return nr(at.from(t),i);case W.FIXED64:case W.UINT64:if(t===null)return nr(yt.ZERO,i);if(typeof t!="number"&&typeof t!="string")break;return nr(yt.from(t),i);case W.BOOL:if(t===null)return!1;if(typeof t!="boolean")break;return t;case W.STRING:if(t===null)return"";if(typeof t!="string"){u="extra whitespace";break}try{encodeURIComponent(t)}catch(y){y="invalid UTF8";break}return t;case W.BYTES:if(t===null||t==="")return new Uint8Array(0);if(typeof t!="string")break;return W2(t)}}catch(f){u=f.message}this.assert(!1,c+(u?" - "+u:""),t)}};a();s();var Sc=class{constructor(t){var r;this.fields=(r=t.fields)!==null&&r!==void 0?r:[]}write(t,r){let i={},c=t;for(let u of this.fields){if(!u.oneof){let v=this.field(u,c[u.localName],r);v!==void 0&&(i[r.useProtoFieldName?u.name:u.jsonName]=v);continue}let f=c[u.oneof];if(f.oneofKind!==u.localName)continue;let d=u.kind=="scalar"||u.kind=="enum"?Object.assign(Object.assign({},r),{emitDefaultValues:!0}):r,y=this.field(u,f[u.localName],d);Oe(y!==void 0),i[r.useProtoFieldName?u.name:u.jsonName]=y}return i}field(t,r,i){let c;if(t.kind=="map"){Oe(typeof r=="object"&&r!==null);let u={};switch(t.V.kind){case"scalar":for(let[y,v]of Object.entries(r)){let S=this.scalar(t.V.T,v,t.name,!1,!0);Oe(S!==void 0),u[y.toString()]=S}break;case"message":let f=t.V.T();for(let[y,v]of Object.entries(r)){let S=this.message(f,v,t.name,i);Oe(S!==void 0),u[y.toString()]=S}break;case"enum":let d=t.V.T();for(let[y,v]of Object.entries(r)){Oe(v===void 0||typeof v=="number");let S=this.enum(d,v,t.name,!1,!0,i.enumAsInteger);Oe(S!==void 0),u[y.toString()]=S}break}(i.emitDefaultValues||Object.keys(u).length>0)&&(c=u)}else if(t.repeat){Oe(Array.isArray(r));let u=[];switch(t.kind){case"scalar":for(let y=0;y<r.length;y++){let v=this.scalar(t.T,r[y],t.name,t.opt,!0);Oe(v!==void 0),u.push(v)}break;case"enum":let f=t.T();for(let y=0;y<r.length;y++){Oe(r[y]===void 0||typeof r[y]=="number");let v=this.enum(f,r[y],t.name,t.opt,!0,i.enumAsInteger);Oe(v!==void 0),u.push(v)}break;case"message":let d=t.T();for(let y=0;y<r.length;y++){let v=this.message(d,r[y],t.name,i);Oe(v!==void 0),u.push(v)}break}(i.emitDefaultValues||u.length>0||i.emitDefaultValues)&&(c=u)}else switch(t.kind){case"scalar":c=this.scalar(t.T,r,t.name,t.opt,i.emitDefaultValues);break;case"enum":c=this.enum(t.T(),r,t.name,t.opt,i.emitDefaultValues,i.enumAsInteger);break;case"message":c=this.message(t.T(),r,t.name,i);break}return c}enum(t,r,i,c,u,f){if(t[0]=="google.protobuf.NullValue")return!u&&!c?void 0:null;if(r===void 0){Oe(c);return}if(!(r===0&&!u&&!c))return Oe(typeof r=="number"),Oe(Number.isInteger(r)),f||!t[1].hasOwnProperty(r)?r:t[2]?t[2]+t[1][r]:t[1][r]}message(t,r,i,c){return r===void 0?c.emitDefaultValues?null:void 0:t.internalJsonWrite(r,c)}scalar(t,r,i,c,u){if(r===void 0){Oe(c);return}let f=u||c;switch(t){case W.INT32:case W.SFIXED32:case W.SINT32:return r===0?f?0:void 0:(Wn(r),r);case W.FIXED32:case W.UINT32:return r===0?f?0:void 0:(go(r),r);case W.FLOAT:ei(r);case W.DOUBLE:return r===0?f?0:void 0:(Oe(typeof r=="number"),Number.isNaN(r)?"NaN":r===Number.POSITIVE_INFINITY?"Infinity":r===Number.NEGATIVE_INFINITY?"-Infinity":r);case W.STRING:return r===""?f?"":void 0:(Oe(typeof r=="string"),r);case W.BOOL:return r===!1?f?!1:void 0:(Oe(typeof r=="boolean"),r);case W.UINT64:case W.FIXED64:Oe(typeof r=="number"||typeof r=="string"||typeof r=="bigint");let d=yt.from(r);return d.isZero()&&!f?void 0:d.toString();case W.INT64:case W.SFIXED64:case W.SINT64:Oe(typeof r=="number"||typeof r=="string"||typeof r=="bigint");let y=at.from(r);return y.isZero()&&!f?void 0:y.toString();case W.BYTES:return Oe(r instanceof Uint8Array),r.byteLength?G2(r):f?"":void 0}}};a();s();a();s();function fa(e,t=qt.STRING){switch(e){case W.BOOL:return!1;case W.UINT64:case W.FIXED64:return nr(yt.ZERO,t);case W.INT64:case W.SFIXED64:case W.SINT64:return nr(at.ZERO,t);case W.DOUBLE:case W.FLOAT:return 0;case W.BYTES:return new Uint8Array(0);case W.STRING:return"";default:return 0}}var Cc=class{constructor(t){this.info=t}prepare(){var t;if(!this.fieldNoToField){let r=(t=this.info.fields)!==null&&t!==void 0?t:[];this.fieldNoToField=new Map(r.map(i=>[i.no,i]))}}read(t,r,i,c){this.prepare();let u=c===void 0?t.len:t.pos+c;for(;t.pos<u;){let[f,d]=t.tag(),y=this.fieldNoToField.get(f);if(!y){let M=i.readUnknownField;if(M=="throw")throw new Error(`Unknown field ${f} (wire type ${d}) for ${this.info.typeName}`);let A=t.skip(d);M!==!1&&(M===!0?Ct.onRead:M)(this.info.typeName,r,f,d,A);continue}let v=r,S=y.repeat,T=y.localName;switch(y.oneof&&(v=v[y.oneof],v.oneofKind!==T&&(v=r[y.oneof]={oneofKind:T})),y.kind){case"scalar":case"enum":let M=y.kind=="enum"?W.INT32:y.T,A=y.kind=="scalar"?y.L:void 0;if(S){let V=v[T];if(d==se.LengthDelimited&&M!=W.STRING&&M!=W.BYTES){let w=t.uint32()+t.pos;for(;t.pos<w;)V.push(this.scalar(t,M,A))}else V.push(this.scalar(t,M,A))}else v[T]=this.scalar(t,M,A);break;case"message":if(S){let V=v[T],w=y.T().internalBinaryRead(t,t.uint32(),i);V.push(w)}else v[T]=y.T().internalBinaryRead(t,t.uint32(),i,v[T]);break;case"map":let[F,B]=this.mapEntry(y,t,i);v[T][F]=B;break}}}mapEntry(t,r,i){let c=r.uint32(),u=r.pos+c,f,d;for(;r.pos<u;){let[y,v]=r.tag();switch(y){case 1:t.K==W.BOOL?f=r.bool().toString():f=this.scalar(r,t.K,qt.STRING);break;case 2:switch(t.V.kind){case"scalar":d=this.scalar(r,t.V.T,t.V.L);break;case"enum":d=r.int32();break;case"message":d=t.V.T().internalBinaryRead(r,r.uint32(),i);break}break;default:throw new Error(`Unknown field ${y} (wire type ${v}) in map entry for ${this.info.typeName}#${t.name}`)}}if(f===void 0){let y=fa(t.K);f=t.K==W.BOOL?y.toString():y}if(d===void 0)switch(t.V.kind){case"scalar":d=fa(t.V.T,t.V.L);break;case"enum":d=0;break;case"message":d=t.V.T().create();break}return[f,d]}scalar(t,r,i){switch(r){case W.INT32:return t.int32();case W.STRING:return t.string();case W.BOOL:return t.bool();case W.DOUBLE:return t.double();case W.FLOAT:return t.float();case W.INT64:return nr(t.int64(),i);case W.UINT64:return nr(t.uint64(),i);case W.FIXED64:return nr(t.fixed64(),i);case W.FIXED32:return t.fixed32();case W.BYTES:return t.bytes();case W.UINT32:return t.uint32();case W.SFIXED32:return t.sfixed32();case W.SFIXED64:return nr(t.sfixed64(),i);case W.SINT32:return t.sint32();case W.SINT64:return nr(t.sint64(),i)}}};a();s();var wc=class{constructor(t){this.info=t}prepare(){if(!this.fields){let t=this.info.fields?this.info.fields.concat():[];this.fields=t.sort((r,i)=>r.no-i.no)}}write(t,r,i){this.prepare();for(let u of this.fields){let f,d,y=u.repeat,v=u.localName;if(u.oneof){let S=t[u.oneof];if(S.oneofKind!==v)continue;f=S[v],d=!0}else f=t[v],d=!1;switch(u.kind){case"scalar":case"enum":let S=u.kind=="enum"?W.INT32:u.T;if(y)if(Oe(Array.isArray(f)),y==ua.PACKED)this.packed(r,S,u.no,f);else for(let T of f)this.scalar(r,S,u.no,T,!0);else f===void 0?Oe(u.opt):this.scalar(r,S,u.no,f,d||u.opt);break;case"message":if(y){Oe(Array.isArray(f));for(let T of f)this.message(r,i,u.T(),u.no,T)}else this.message(r,i,u.T(),u.no,f);break;case"map":Oe(typeof f=="object"&&f!==null);for(let[T,M]of Object.entries(f))this.mapEntry(r,i,u,T,M);break}}let c=i.writeUnknownFields;c!==!1&&(c===!0?Ct.onWrite:c)(this.info.typeName,t,r)}mapEntry(t,r,i,c,u){t.tag(i.no,se.LengthDelimited),t.fork();let f=c;switch(i.K){case W.INT32:case W.FIXED32:case W.UINT32:case W.SFIXED32:case W.SINT32:f=Number.parseInt(c);break;case W.BOOL:Oe(c=="true"||c=="false"),f=c=="true";break}switch(this.scalar(t,i.K,1,f,!0),i.V.kind){case"scalar":this.scalar(t,i.V.T,2,u,!0);break;case"enum":this.scalar(t,W.INT32,2,u,!0);break;case"message":this.message(t,r,i.V.T(),2,u);break}t.join()}message(t,r,i,c,u){u!==void 0&&(i.internalBinaryWrite(u,t.tag(c,se.LengthDelimited).fork(),r),t.join())}scalar(t,r,i,c,u){let[f,d,y]=this.scalarInfo(r,c);(!y||u)&&(t.tag(i,f),t[d](c))}packed(t,r,i,c){if(!c.length)return;Oe(r!==W.BYTES&&r!==W.STRING),t.tag(i,se.LengthDelimited),t.fork();let[,u]=this.scalarInfo(r);for(let f=0;f<c.length;f++)t[u](c[f]);t.join()}scalarInfo(t,r){let i=se.Varint,c,u=r===void 0,f=r===0;switch(t){case W.INT32:c="int32";break;case W.STRING:f=u||!r.length,i=se.LengthDelimited,c="string";break;case W.BOOL:f=r===!1,c="bool";break;case W.UINT32:c="uint32";break;case W.DOUBLE:i=se.Bit64,c="double";break;case W.FLOAT:i=se.Bit32,c="float";break;case W.INT64:f=u||at.from(r).isZero(),c="int64";break;case W.UINT64:f=u||yt.from(r).isZero(),c="uint64";break;case W.FIXED64:f=u||yt.from(r).isZero(),i=se.Bit64,c="fixed64";break;case W.BYTES:f=u||!r.byteLength,i=se.LengthDelimited,c="bytes";break;case W.FIXED32:i=se.Bit32,c="fixed32";break;case W.SFIXED32:i=se.Bit32,c="sfixed32";break;case W.SFIXED64:f=u||at.from(r).isZero(),i=se.Bit64,c="sfixed64";break;case W.SINT32:c="sint32";break;case W.SINT64:f=u||at.from(r).isZero(),c="sint64";break}return[i,c,u||f]}};a();s();function ix(e){let t=e.messagePrototype?Object.create(e.messagePrototype):Object.defineProperty({},xc,{value:e});for(let r of e.fields){let i=r.localName;if(!r.opt)if(r.oneof)t[r.oneof]={oneofKind:void 0};else if(r.repeat)t[i]=[];else switch(r.kind){case"scalar":t[i]=fa(r.T,r.L);break;case"enum":t[i]=0;break;case"map":t[i]={};break}}return t}a();s();function Ir(e,t,r){let i,c=r,u;for(let f of e.fields){let d=f.localName;if(f.oneof){let y=c[f.oneof];if(y?.oneofKind==null)continue;if(i=y[d],u=t[f.oneof],u.oneofKind=y.oneofKind,i==null){delete u[d];continue}}else if(i=c[d],u=t,i==null)continue;switch(f.repeat&&(u[d].length=i.length),f.kind){case"scalar":case"enum":if(f.repeat)for(let v=0;v<i.length;v++)u[d][v]=i[v];else u[d]=i;break;case"message":let y=f.T();if(f.repeat)for(let v=0;v<i.length;v++)u[d][v]=y.create(i[v]);else u[d]===void 0?u[d]=y.create(i):y.mergePartial(u[d],i);break;case"map":switch(f.V.kind){case"scalar":case"enum":Object.assign(u[d],i);break;case"message":let v=f.V.T();for(let S of Object.keys(i))u[d][S]=v.create(i[S]);break}break}}}a();s();function cx(e,t,r){if(t===r)return!0;if(!t||!r)return!1;for(let i of e.fields){let c=i.localName,u=i.oneof?t[i.oneof][c]:t[c],f=i.oneof?r[i.oneof][c]:r[c];switch(i.kind){case"enum":case"scalar":let d=i.kind=="enum"?W.INT32:i.T;if(!(i.repeat?ax(d,u,f):lx(d,u,f)))return!1;break;case"map":if(!(i.V.kind=="message"?sx(i.V.T(),_c(u),_c(f)):ax(i.V.kind=="enum"?W.INT32:i.V.T,_c(u),_c(f))))return!1;break;case"message":let y=i.T();if(!(i.repeat?sx(y,u,f):y.equals(u,f)))return!1;break}}return!0}var _c=Object.values;function lx(e,t,r){if(t===r)return!0;if(e!==W.BYTES)return!1;let i=t,c=r;if(i.length!==c.length)return!1;for(let u=0;u<i.length;u++)if(i[u]!=c[u])return!1;return!0}function ax(e,t,r){if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(!lx(e,t[i],r[i]))return!1;return!0}function sx(e,t,r){if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(!e.equals(t[i],r[i]))return!1;return!0}var ux=Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})),vk=ux[xc]={},Yr=class{constructor(t,r,i){this.defaultCheckDepth=16,this.typeName=t,this.fields=r.map(nx),this.options=i??{},vk.value=this,this.messagePrototype=Object.create(null,ux),this.refTypeCheck=new bc(this),this.refJsonReader=new vc(this),this.refJsonWriter=new Sc(this),this.refBinReader=new Cc(this),this.refBinWriter=new wc(this)}create(t){let r=ix(this);return t!==void 0&&Ir(this,r,t),r}clone(t){let r=this.create();return Ir(this,r,t),r}equals(t,r){return cx(this,t,r)}is(t,r=this.defaultCheckDepth){return this.refTypeCheck.is(t,r,!1)}isAssignable(t,r=this.defaultCheckDepth){return this.refTypeCheck.is(t,r,!0)}mergePartial(t,r){Ir(this,t,r)}fromBinary(t,r){let i=Q2(r);return this.internalBinaryRead(i.readerFactory(t),t.byteLength,i)}fromJson(t,r){return this.internalJsonRead(t,tx(r))}fromJsonString(t,r){let i=JSON.parse(t);return this.fromJson(i,r)}toJson(t,r){return this.internalJsonWrite(t,rx(r))}toJsonString(t,r){var i;let c=this.toJson(t,r);return JSON.stringify(c,null,(i=r?.prettySpaces)!==null&&i!==void 0?i:0)}toBinary(t,r){let i=Z2(r);return this.internalBinaryWrite(t,i.writerFactory(),i).finish()}internalJsonRead(t,r,i){if(t!==null&&typeof t=="object"&&!Array.isArray(t)){let c=i??this.create();return this.refJsonReader.read(t,c,r),c}throw new Error(`Unable to parse message ${this.typeName} from JSON ${uc(t)}.`)}internalJsonWrite(t,r){return this.refJsonWriter.write(t,r)}internalBinaryWrite(t,r,i){return this.refBinWriter.write(t,r,i),r}internalBinaryRead(t,r,i,c){let u=c??this.create();return this.refBinReader.read(t,u,i,r),u}};var pp=class extends Yr{constructor(){super("Response",[{no:1,name:"audioData",kind:"scalar",T:12},{no:2,name:"audioFormat",kind:"scalar",T:9},{no:3,name:"speechMarks",kind:"message",T:()=>up},{no:5,name:"contextToken",kind:"scalar",T:9}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.audioData=new Uint8Array(0),r.audioFormat="",r.contextToken="",t!==void 0&&Ir(this,r,t),r}internalBinaryRead(t,r,i,c){let u=c??this.create(),f=t.pos+r;for(;t.pos<f;){let[d,y]=t.tag();switch(d){case 1:u.audioData=t.bytes();break;case 2:u.audioFormat=t.string();break;case 3:u.speechMarks=up.internalBinaryRead(t,t.uint32(),i,u.speechMarks);break;case 5:u.contextToken=t.string();break;default:let v=i.readUnknownField;if(v==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${y}) for ${this.typeName}`);let S=t.skip(y);v!==!1&&(v===!0?Ct.onRead:v)(this.typeName,u,d,y,S)}}return u}internalBinaryWrite(t,r,i){t.audioData.length&&r.tag(1,se.LengthDelimited).bytes(t.audioData),t.audioFormat!==""&&r.tag(2,se.LengthDelimited).string(t.audioFormat),t.speechMarks&&up.internalBinaryWrite(t.speechMarks,r.tag(3,se.LengthDelimited).fork(),i).join(),t.contextToken!==""&&r.tag(5,se.LengthDelimited).string(t.contextToken);let c=i.writeUnknownFields;return c!==!1&&(c==!0?Ct.onWrite:c)(this.typeName,t,r),r}},fx=new pp,dp=class extends Yr{constructor(){super("Response.NestedChunk",[{no:1,name:"type",kind:"scalar",T:9},{no:2,name:"startTime",kind:"scalar",T:1},{no:3,name:"endTime",kind:"scalar",T:1},{no:4,name:"start",kind:"scalar",T:5},{no:5,name:"end",kind:"scalar",T:5},{no:6,name:"value",kind:"scalar",T:9},{no:7,name:"chunks",kind:"message",repeat:2,T:()=>fp}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.type="",r.startTime=0,r.endTime=0,r.start=0,r.end=0,r.value="",r.chunks=[],t!==void 0&&Ir(this,r,t),r}internalBinaryRead(t,r,i,c){let u=c??this.create(),f=t.pos+r;for(;t.pos<f;){let[d,y]=t.tag();switch(d){case 1:u.type=t.string();break;case 2:u.startTime=t.double();break;case 3:u.endTime=t.double();break;case 4:u.start=t.int32();break;case 5:u.end=t.int32();break;case 6:u.value=t.string();break;case 7:u.chunks.push(fp.internalBinaryRead(t,t.uint32(),i));break;default:let v=i.readUnknownField;if(v==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${y}) for ${this.typeName}`);let S=t.skip(y);v!==!1&&(v===!0?Ct.onRead:v)(this.typeName,u,d,y,S)}}return u}internalBinaryWrite(t,r,i){t.type!==""&&r.tag(1,se.LengthDelimited).string(t.type),t.startTime!==0&&r.tag(2,se.Bit64).double(t.startTime),t.endTime!==0&&r.tag(3,se.Bit64).double(t.endTime),t.start!==0&&r.tag(4,se.Varint).int32(t.start),t.end!==0&&r.tag(5,se.Varint).int32(t.end),t.value!==""&&r.tag(6,se.LengthDelimited).string(t.value);for(let u=0;u<t.chunks.length;u++)fp.internalBinaryWrite(t.chunks[u],r.tag(7,se.LengthDelimited).fork(),i).join();let c=i.writeUnknownFields;return c!==!1&&(c==!0?Ct.onWrite:c)(this.typeName,t,r),r}},up=new dp,mp=class extends Yr{constructor(){super("Response.Chunk",[{no:1,name:"type",kind:"scalar",T:9},{no:2,name:"startTime",kind:"scalar",T:1},{no:3,name:"endTime",kind:"scalar",T:1},{no:4,name:"start",kind:"scalar",T:5},{no:5,name:"end",kind:"scalar",T:5},{no:6,name:"value",kind:"scalar",T:9}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.type="",r.startTime=0,r.endTime=0,r.start=0,r.end=0,r.value="",t!==void 0&&Ir(this,r,t),r}internalBinaryRead(t,r,i,c){let u=c??this.create(),f=t.pos+r;for(;t.pos<f;){let[d,y]=t.tag();switch(d){case 1:u.type=t.string();break;case 2:u.startTime=t.double();break;case 3:u.endTime=t.double();break;case 4:u.start=t.int32();break;case 5:u.end=t.int32();break;case 6:u.value=t.string();break;default:let v=i.readUnknownField;if(v==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${y}) for ${this.typeName}`);let S=t.skip(y);v!==!1&&(v===!0?Ct.onRead:v)(this.typeName,u,d,y,S)}}return u}internalBinaryWrite(t,r,i){t.type!==""&&r.tag(1,se.LengthDelimited).string(t.type),t.startTime!==0&&r.tag(2,se.Bit64).double(t.startTime),t.endTime!==0&&r.tag(3,se.Bit64).double(t.endTime),t.start!==0&&r.tag(4,se.Varint).int32(t.start),t.end!==0&&r.tag(5,se.Varint).int32(t.end),t.value!==""&&r.tag(6,se.LengthDelimited).string(t.value);let c=i.writeUnknownFields;return c!==!1&&(c==!0?Ct.onWrite:c)(this.typeName,t,r),r}},fp=new mp;a();s();var hp=class extends Yr{constructor(){super("StreamChunkResponse",[{no:1,name:"chunk_index",kind:"scalar",T:5},{no:2,name:"audio_data",kind:"scalar",T:12},{no:3,name:"audio_format",kind:"scalar",T:9},{no:4,name:"audio_duration_ms",kind:"scalar",T:5},{no:5,name:"speech_marks",kind:"message",repeat:2,T:()=>gp},{no:6,name:"is_final",kind:"scalar",T:8},{no:7,name:"context_token",kind:"scalar",T:9}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.chunkIndex=0,r.audioData=new Uint8Array(0),r.audioFormat="",r.audioDurationMs=0,r.speechMarks=[],r.isFinal=!1,r.contextToken="",t!==void 0&&Ir(this,r,t),r}internalBinaryRead(t,r,i,c){let u=c??this.create(),f=t.pos+r;for(;t.pos<f;){let[d,y]=t.tag();switch(d){case 1:u.chunkIndex=t.int32();break;case 2:u.audioData=t.bytes();break;case 3:u.audioFormat=t.string();break;case 4:u.audioDurationMs=t.int32();break;case 5:u.speechMarks.push(gp.internalBinaryRead(t,t.uint32(),i));break;case 6:u.isFinal=t.bool();break;case 7:u.contextToken=t.string();break;default:let v=i.readUnknownField;if(v==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${y}) for ${this.typeName}`);let S=t.skip(y);v!==!1&&(v===!0?Ct.onRead:v)(this.typeName,u,d,y,S)}}return u}internalBinaryWrite(t,r,i){t.chunkIndex!==0&&r.tag(1,se.Varint).int32(t.chunkIndex),t.audioData.length&&r.tag(2,se.LengthDelimited).bytes(t.audioData),t.audioFormat!==""&&r.tag(3,se.LengthDelimited).string(t.audioFormat),t.audioDurationMs!==0&&r.tag(4,se.Varint).int32(t.audioDurationMs);for(let u=0;u<t.speechMarks.length;u++)gp.internalBinaryWrite(t.speechMarks[u],r.tag(5,se.LengthDelimited).fork(),i).join();t.isFinal!==!1&&r.tag(6,se.Varint).bool(t.isFinal),t.contextToken!==""&&r.tag(7,se.LengthDelimited).string(t.contextToken);let c=i.writeUnknownFields;return c!==!1&&(c==!0?Ct.onWrite:c)(this.typeName,t,r),r}},px=new hp,yp=class extends Yr{constructor(){super("WordMark",[{no:1,name:"value",kind:"scalar",T:9},{no:2,name:"start",kind:"scalar",T:5},{no:3,name:"end",kind:"scalar",T:5},{no:4,name:"start_time",kind:"scalar",T:5},{no:5,name:"end_time",kind:"scalar",T:5}])}create(t){let r=globalThis.Object.create(this.messagePrototype);return r.value="",r.start=0,r.end=0,r.startTime=0,r.endTime=0,t!==void 0&&Ir(this,r,t),r}internalBinaryRead(t,r,i,c){let u=c??this.create(),f=t.pos+r;for(;t.pos<f;){let[d,y]=t.tag();switch(d){case 1:u.value=t.string();break;case 2:u.start=t.int32();break;case 3:u.end=t.int32();break;case 4:u.startTime=t.int32();break;case 5:u.endTime=t.int32();break;default:let v=i.readUnknownField;if(v==="throw")throw new globalThis.Error(`Unknown field ${d} (wire type ${y}) for ${this.typeName}`);let S=t.skip(y);v!==!1&&(v===!0?Ct.onRead:v)(this.typeName,u,d,y,S)}}return u}internalBinaryWrite(t,r,i){t.value!==""&&r.tag(1,se.LengthDelimited).string(t.value),t.start!==0&&r.tag(2,se.Varint).int32(t.start),t.end!==0&&r.tag(3,se.Varint).int32(t.end),t.startTime!==0&&r.tag(4,se.Varint).int32(t.startTime),t.endTime!==0&&r.tag(5,se.Varint).int32(t.endTime);let c=i.writeUnknownFields;return c!==!1&&(c==!0?Ct.onWrite:c)(this.typeName,t,r),r}},gp=new yp;a();s();a();s();var xp=async(e,t)=>p.runtime.sendMessage({target:"offscreen",data:{type:e,...t}});var Sk=({message:e,name:t,stack:r})=>({message:e,name:t,stack:r}),pa=async(...e)=>{let[t,r]=e;await xp("observability/log-error",{args:[Sk(t),r]})};var dx=e=>(t,r,i,c,u)=>{let f={ssml:r,voice:i.voiceId,forcedAudioFormat:"ogg"};return c.previousContext&&(f.backwardContext={type:"context_token",data:c.previousContext}),c.nextPlayable&&(f.forwardContext={type:"text",data:c.nextPlayable.text}),fetch(`${e}/v3/synthesis/get`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"X-Speechify-Client":"DesktopExtension","X-Speechify-Client-Version":p.runtime.getManifest().version,"x-speechify-synthesis-options":"sentence-splitting=false",Accept:"*/*"},body:JSON.stringify(f),signal:u}).then(d=>d.arrayBuffer()).then(d=>fx.fromBinary(new Uint8Array(d))).then(Ck).catch(d=>{let y=d.status?`Audio Server Error status code: ${d.status}`:`Audio Server Error: ${d.message||d.name||"Unknown error"}`;throw pa(new Error(y),{context:{url:e},type:"Audio Server"}),d})},Ck=e=>{let t=new ArrayBuffer(e.audioData.length);return new Uint8Array(t).set(e.audioData),{audioData:t,audioFormat:e.audioFormat,speechMarks:e.speechMarks,contextToken:e.contextToken}};a();s();var wk={"audio/mpeg":"mp3","audio/mp3":"mp3","audio/ogg":"ogg","audio/wav":"wav","audio/wave":"wav",mp3:"mp3",ogg:"ogg",wav:"wav"};function _k(e,t){let r=0,i=0,c=t;for(;c<e.length;){let u=e[c];if(r|=(u&127)<<i,c++,(u&128)===0)return{value:r,bytesRead:c-t};i+=7}return{value:0,bytesRead:0}}function Ek(e){let t=e.map(d=>({type:"word",value:d.value,start:d.start,end:d.end,startTime:d.startTime,endTime:d.endTime})),r=t.length>0?t[0].start:0,i=t.length>0?t[t.length-1].end:0,c=t.length>0?t[0].startTime:0,u=t.length>0?t[t.length-1].endTime:0;return{type:"sentence",value:t.map(d=>d.value).join(" "),start:r,end:i,startTime:c,endTime:u,chunks:t}}function Tk(e){let t=new ArrayBuffer(e.length);return new Uint8Array(t).set(e),t}function Ik(){let e=new Uint8Array(0);return new TransformStream({transform(t,r){let i=new Uint8Array(e.length+t.length);for(i.set(e),i.set(t,e.length),e=i;e.length>0;){let{value:c,bytesRead:u}=_k(e,0);if(u===0)break;let f=u+c;if(e.length<f)break;let d=e.slice(u,f);e=e.slice(f);let y=px.fromBinary(d),v=y.audioFormat,S=wk[v]||"mp3",T={audioData:Tk(y.audioData),audioFormat:S,speechMarks:Ek(y.speechMarks),audioChunkDurationMs:y.audioDurationMs,isFinal:y.isFinal,...y.contextToken?{contextToken:y.contextToken}:{}};r.enqueue(T)}},flush(){e.length>0&&pa(new Error("Incomplete protobuf data at end of stream"),{context:{remainingBytes:e.length.toString()},type:"Streaming Audio"})}})}var mx=e=>(t,r,i,c,u)=>{let f={ssml:r,voice:i.voiceId,forcedAudioFormat:"mp3"};c.previousContext&&(f.backwardContext={type:"context_token",data:c.previousContext}),c.nextPlayable&&(f.forwardContext={type:"text",data:c.nextPlayable.text});let d=Ik();return new ReadableStream({async start(v){try{let S=await fetch(`${e}/v3/synthesis/stream`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"X-Speechify-Client":"DesktopExtension","X-Speechify-Client-Version":p.runtime.getManifest().version,Accept:"*/*"},body:JSON.stringify(f),signal:u});if(!S.ok)throw new Error(`Audio Server Error status code: ${S.status}`);if(!S.body)throw new Error("Streaming response has no body");let T=S.body.getReader();for(;;){let{done:M,value:A}=await T.read();if(M)break;v.enqueue(A)}v.close()}catch(S){if(S.name!=="AbortError"){let T=S.status?`Audio Server Error status code: ${S.status}`:`Audio Server Error: ${S.message||S.name||"Unknown error"}`;pa(new Error(T),{context:{url:e},type:"Streaming Audio"})}v.error(S)}}}).pipeThrough(d)};a();s();var kk=()=>new Promise(e=>{let t=window.speechSynthesis.getVoices();t.length>0&&e(t),speechSynthesis.onvoiceschanged=()=>{speechSynthesis.onvoiceschanged=null,e(window.speechSynthesis.getVoices())}}),gx=(e,t,r)=>{let i=null,c=0,u=0,f=r,d=null,y=null,v=()=>{window.speechSynthesis.pause(),window.speechSynthesis.resume()},S=A=>{A.addEventListener("start",()=>y?.({type:"started"})),A.addEventListener("end",()=>y?.({type:"ended"})),A.addEventListener("error",()=>y?.({type:"error"})),A.addEventListener("boundary",F=>{c=u+F.charIndex+F.charLength,F.charIndex+32>=A.text.length-1&&(A.onend=()=>{d&&clearTimeout(d),y?.({type:"ended"})}),d&&clearTimeout(d),d=setTimeout(()=>{v()},4e3),y?.({type:"progress",payload:{charIndex:c}})})},T=async()=>{let A=await kk();return new Promise(F=>{let B=A.find(V=>V.name.toLowerCase()===t.voiceId.toLowerCase());if(!B)throw new Error("No voice found");u=c,i=new SpeechSynthesisUtterance(e.slice(u)),i.voice=B,i.lang="en-US",i.rate=f,S(i),window.speechSynthesis.cancel(),setTimeout(()=>{i&&window.speechSynthesis.speak(i),F()},50)})},M=async()=>{window.speechSynthesis.cancel(),y?.({type:"paused"})};return{play:T,pause:M,stop:async()=>window.speechSynthesis.cancel(),setupEvents:A=>(y=A,()=>{y=null}),seekTo:async()=>{console.warn("seek to time is a no-op for local player")},seekToCharIndex:async A=>{c=A},getCurrentTime:()=>{let A=c/5,B=60/(180*f);return A*B},destroy:async()=>{i=null,c=0,y=null,window.speechSynthesis.cancel(),d&&clearTimeout(d)},setSpeed:async A=>{f=A;let F=speechSynthesis.speaking;await M(),F&&y&&await T()}}};a();s();var hx=(e,t)=>{let r=new Audio;r.playbackRate=t;let i=new MediaSource;r.src=URL.createObjectURL(i);let c=null,u=[],f=!1,d=!1,y=!1,v=null,S=null,T=[],M=()=>{if(!(!c||c.updating)){if(u.length>0){let w=u.shift();try{c.appendBuffer(w)}catch(P){console.error("[StreamingAudioElementPlayer] appendBuffer failed during flush:",P),M()}return}if(f&&i.readyState==="open")try{i.endOfStream()}catch{}}},A=()=>{y&&r.paused&&r.play().catch(()=>{})},F=new Promise(w=>{i.addEventListener("sourceopen",()=>{c=i.addSourceBuffer("audio/mpeg"),d=!0,c.addEventListener("updateend",()=>{A(),M()}),w(),M()})});r.addEventListener("canplay",A);let B=w=>{if(T.length===0)return;let P=w*1e3;for(let N=T.length-1;N>=0;N--)if(P>=T[N].startTimeMs)return T[N].charEnd;return T[0].charStart},V=()=>{if(y&&!r.paused&&S){let w=B(r.currentTime);S({type:"progress",payload:{charIndex:w,duration:r.currentTime}}),v=requestAnimationFrame(V)}};return{appendChunk(w){if(w.speechMarks&&w.speechMarks.chunks)for(let N of w.speechMarks.chunks)T.push({charStart:N.start,charEnd:N.end,startTimeMs:N.startTime,endTimeMs:N.endTime});(async()=>{if(w.isFinal&&(f=!0),d||await F,w.audioData.byteLength>0)try{c&&!c.updating?c.appendBuffer(w.audioData):u.push(w.audioData)}catch(N){console.error("[StreamingAudioElementPlayer] appendBuffer failed:",N)}else f&&M()})()},play:async()=>{y=!0,r.playbackRate=t,c&&c.buffered.length>0&&await r.play().catch(()=>{}),v=requestAnimationFrame(V)},pause:async()=>{r.pause(),y=!1,v&&(cancelAnimationFrame(v),v=null)},stop:async()=>{r.pause(),r.currentTime=0,y=!1,v&&(cancelAnimationFrame(v),v=null)},setupEvents:w=>{S=w;let P=()=>{y=!1,v&&(cancelAnimationFrame(v),v=null),w({type:"ended"})};return r.addEventListener("ended",P),()=>{S=null,r.removeEventListener("ended",P),v&&(cancelAnimationFrame(v),v=null)}},seekTo:async w=>{r.currentTime=w},seekToCharIndex:async w=>{for(let P of T)if(w>=P.charStart&&w<=P.charEnd){r.currentTime=P.startTimeMs/1e3;return}},getCurrentTime:()=>r.currentTime,destroy:async()=>{if(r.pause(),r.removeEventListener("canplay",A),y=!1,S=null,v&&(cancelAnimationFrame(v),v=null),u=[],c&&i.readyState==="open")try{c.abort(),i.removeSourceBuffer(c)}catch{}URL.revokeObjectURL(r.src),r.src="",c=null,T.length=0},setSpeed:async w=>{t=w,r.playbackRate=t}}};a();s();a();s();a();s();var Ec=e=>{let t=Symbol(),r=e.initial,i=e.context,c=i,u={state:[],event:[],transition:[]},f=new Map,d=new Map,y=($,ae)=>{let ye=[];for(let me of Object.keys($))Object.is($[me],ae[me])||ye.push(me);return ye},v=($,ae,ye)=>{let me=new Set;for(let oe of $){let Ae=f.get(oe);if(Ae){for(let _e of Ae)if(!me.has(_e)){me.add(_e);let Y={},he={};for(let ue of _e.properties)Y[ue]=ae[ue],he[ue]=ye[ue];_e.listener(Y,he)}}}},S=($,ae)=>{let ye=d.get($);if(ye)for(let me of ye)me.listener(ae)},T=$=>(u.state.push($),()=>{u.state=u.state.filter(ae=>ae!==$)}),M=($,ae)=>{let ye=Array.isArray($)?$:[$],me={properties:ye,listener:ae};for(let oe of ye)f.has(oe)||f.set(oe,[]),f.get(oe).push(me);return()=>{for(let oe of ye){let Ae=f.get(oe);if(Ae){let _e=Ae.indexOf(me);_e>-1&&Ae.splice(_e,1),Ae.length===0&&f.delete(oe)}}}},A=$=>(u.event.push($),()=>{u.event=u.event.filter(ae=>ae!==$)}),F=($,ae)=>{let ye={eventType:$,listener:ae};return d.has($)||d.set($,[]),d.get($).push(ye),()=>{let me=d.get($);if(me){let oe=me.indexOf(ye);oe>-1&&me.splice(oe,1),me.length===0&&d.delete($)}}},B=$=>(u.transition.push($),()=>{u.transition=u.transition.filter(ae=>ae!==$)}),V=($,ae)=>{if($.length!==0)for(let ye of $){let me=ye(i,ae,j);if(me!==void 0){c={...i},i={...i,...me};let oe=y(c,i);oe.length>0&&v(oe,c,i)}}},w=[],P=!1,N=async()=>{if(!P){for(P=!0;w.length>0;){let $=w.shift();if(!$)return;let ae=e.states[r],ye=$.type,me=ae?.on?.[ye];for(let oe of u.event)oe($);if(S(ye,$),me){for(let oe of me)if(!(oe.cond&&!oe.cond(i,$))){if(oe.actions&&V(oe.actions,$),oe.target&&oe.target!==r){ae.exit&&V(ae.exit,$);let Ae=r;r=oe.target;for(let Y of u.transition)Y([Ae,$,r]);for(let Y of u.state)Y(Ae,r);let _e=e.states[oe.target];_e.entry&&V(_e.entry,$)}break}}if(ae=e.states[r],ae.always){let oe=ae.always.flatMap(_e=>_e.actions??[]);V(oe,$);let Ae=ae.always.find(_e=>_e.cond?.(i,$));if(Ae?.target&&Ae.target!==r){ae.exit&&V(ae.exit,$);let _e=r;r=Ae.target;for(let he of u.state)he(_e,r);for(let he of u.transition)he([_e,$,r]);let Y=e.states[Ae.target];Y.entry&&V(Y.entry,$)}}}P=!1}},j={getSchema:()=>e,getSessionId:()=>t,getInitialState:()=>e.initial,getState:()=>r,getContext:()=>i,send:$=>{w.push($),N()},onContextChange:M,onStateChange:T,onEvent:A,onEventType:F,onTransition:B},X=e.states[r];return X?.entry&&V(X.entry,{}),j};a();s();a();s();a();s();a();s();var Ex=Se(wx(),1),ho=e=>(0,Ex.sentences)(e,{preserve_whitespace:!0,html_boundaries:!1});var wp=e=>/\s/.test(e),_p=e=>e&&!/\s/.test(e),Tc=(e,t)=>{if(e.length===0||t<0)return null;let r=Math.min(t,e.length-1),i=ho(e),c=0;for(let u=0;u<i.length;u++){let f=i[u],d=c,y=c+f.length;if(r>=d&&r<y){let v=0,S=r-d;for(;wp(f[S])&&S>0;)S--;for(let T=0;T<=S;T++)wp(f[T])&&_p(f[T+1])&&v++;return[u,v]}c=y}return null},ti=(e,t)=>{let r=ho(e),i=r[t[0]];if(!i)return{sentenceCharIndex:{start:0,end:0},wordCharIndex:{start:0,end:0}};let c=r.slice(0,t[0]).join("").length,u=c+i.length,f=0,d=0;for(;f<t[1]&&d<i.length;)wp(i[d])&&_p(i[d+1])&&f++,d++;let y=d;for(;d<i.length&&_p(i[d]);)d++;let v=d;return{sentenceCharIndex:{start:c,end:u},wordCharIndex:{start:y+c,end:v+c}}},_x=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/[\n\r\t]/g," "),Tx=(e,t)=>{if(e.length<=t)return[e];let r=ho(e),i=[],c="";for(let u of r)if(c.length+u.length>t)if(c.length>0&&i.push(c),u.length>t){let f=u;for(;f.length>t;)i.push(f.substring(0,t)),f=f.substring(t);c=f}else c=u;else c+=u;return c.length>0&&i.push(c),i},Ep=e=>{let r=ho(e).join("");return!/[.!?]$/.test(r.trim())&&r.trim().length>0?`<speak>${_x(r)}.</speak>`:`<speak>${_x(r)}</speak>`};var Ix=(e,t,r)=>{let c=ti(t,e).wordCharIndex.start;for(let d of r.chunks)if(c>=d.start&&c<d.end)return d.startTime/1e3;let u=r.chunks[0],f=Number.POSITIVE_INFINITY;for(let d of r.chunks){let y=Math.min(Math.abs(c-d.start),Math.abs(c-d.end));y<f&&(f=y,u=d)}return u?u.startTime/1e3:0},kx=(e,t,r)=>{let i=e*1e3,c=0;for(let d=0;d<r.chunks.length;d++){if(r.chunks[d].startTime>i){c=Math.max(0,d-1);break}d===r.chunks.length-1&&(c=d)}let u=r.chunks[c];return u?Tc(t,u.start)||[0,0]:[0,0]};a();s();a();s();var Nk=()=>{let e=4,t="4g",r=10;try{if(navigator.deviceMemory!==void 0&&(e=navigator.deviceMemory),navigator.connection){let i=navigator.connection;i.effectiveType&&(t=i.effectiveType),i.downlink&&(r=i.downlink)}}catch(i){console.warn("Failed to detect device capabilities, using defaults:",i)}return{memoryGB:e,networkType:t,downlink:r}},Dk=()=>{let t=Nk(),r=Math.min(t.memoryGB/4,2),i=1;switch(t.networkType){case"slow-2g":case"2g":i=1.5;break;case"3g":i=1.25;break;case"4g":i=.75;break}let c=Math.round(10*r*i);return Math.max(5,Math.min(30,c))},Bk=(e,t)=>({key:e,value:t,prev:null,next:null}),Fk=e=>({capacity:e,size:0,head:null,tail:null,map:new Map}),Rx=(e,t)=>{e.head===null?(e.head=t,e.tail=t):(t.next=e.head,e.head.prev=t,e.head=t),e.size++},Ax=(e,t)=>{t.prev?t.prev.next=t.next:e.head=t.next,t.next?t.next.prev=t.prev:e.tail=t.prev,e.size--},Mx=(e,t)=>{e.head!==t&&(Ax(e,t),Rx(e,t))},Uk=(e,t)=>{if(e.tail===null)return;let r=e.tail,i=r.key;e.map.delete(i),t&&t(i),e.map.delete(r.key),Ax(e,r),r.prev=null,r.next=null},Vk=(e,t)=>{let r=e.map.get(t);return r?(Mx(e,r),r.value):null},$k=(e,t,r,i)=>{let c=e.map.get(t);if(c){c.value=r,Mx(e,c);return}let u=Bk(t,r);e.size>=e.capacity&&Uk(e,i),Rx(e,u),e.map.set(t,u)},qk=(e,t)=>e.map.has(t),Wk=e=>{e.head=null,e.tail=null,e.size=0,e.map.clear()},Lx=()=>{let e=[],t=Dk(),r=Fk(t),i=S=>{e.forEach(T=>T(S))};return{getAudioFromCache:S=>Vk(r,S),setAudioInCache:(S,T)=>{$k(r,S,T,i)},hasAudioInCache:S=>qk(r,S),ensureCapacity:S=>{S>r.capacity&&(r.capacity=S)},getCapacity:()=>r.capacity,onEvict:S=>(e.push(S),()=>{e=e.filter(T=>T!==S)}),clearCache:()=>{Wk(r)}}};var Gk=Lx(),yo=(e,t)=>`${e}::${t}`,Px=e=>{let t=e.lastIndexOf("::");if(t===-1)return{playableId:e,generation:0};let r=Number(e.slice(t+2));return{playableId:e.slice(0,t),generation:Number.isNaN(r)?0:r}},Qr=Gk;a();s();var ri=(e,t)=>t?t.voice&&t.voice.voiceId!==e.voice.voiceId?"invalidated-voice":t.text&&t.text!==e.text?"invalidated-text":null:null;a();s();var ni=Symbol("PlaceholderRef");a();s();var Ox=async(e,t)=>{if(!e.every(c=>c.audioFormat===e[0].audioFormat))throw new Error("All audio results must be of the same type");if(e.length===0)throw new Error("Cannot merge empty audio array");if(e.length===1)return e[0];let i=new AudioContext;try{let c=await Promise.all(e.map(async B=>({audioBuffer:await i.decodeAudioData(B.audioData.slice()),speechMarks:B.speechMarks,context:B.context}))),u=c[0].audioBuffer.sampleRate,f=c.reduce((B,{audioBuffer:V})=>B+V.length,0),d=i.createBuffer(c[0].audioBuffer.numberOfChannels,f,u),y=0;c.forEach(({audioBuffer:B})=>{for(let V=0;V<B.numberOfChannels;V++){let w=B.getChannelData(V);d.getChannelData(V).set(w,y)}y+=B.length});let v=Nx(d),S=[],T=0,M=0;e.forEach((B,V)=>{let{speechMarks:w}=B,N=c[V].audioBuffer.duration*1e3,Q=M,j=t[V].length,X=w.chunks.map($=>({...$,startTime:$.startTime+Q,endTime:$.endTime+Q,start:$.start+T,end:$.end+T}));S.push(...X),T+=j,M+=N});let A={type:"sentence",value:e.map(B=>B.speechMarks.value).join(""),start:0,end:T-1,startTime:0,endTime:M,chunks:S};return{audioData:v,audioFormat:"wav",speechMarks:A,context:e[0].context}}finally{await i.close()}},Nx=e=>{let t=e.numberOfChannels,r=e.sampleRate,i=e.length,c=new ArrayBuffer(44+i*t*2),u=new DataView(c),f=(y,v)=>{for(let S=0;S<v.length;S++)u.setUint8(y+S,v.charCodeAt(S))};f(0,"RIFF"),u.setUint32(4,36+i*t*2,!0),f(8,"WAVE"),f(12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,t,!0),u.setUint32(24,r,!0),u.setUint32(28,r*t*2,!0),u.setUint16(32,t*2,!0),u.setUint16(34,16,!0),f(36,"data"),u.setUint32(40,i*t*2,!0);let d=44;for(let y=0;y<i;y++)for(let v=0;v<t;v++){let S=Math.max(-1,Math.min(1,e.getChannelData(v)[y]));u.setInt16(d,S<0?S*32768:S*32767,!0),d+=2}return c},Dx=async e=>{if(e.length===0)throw new Error("Cannot merge empty stream chunks");if(e.length===1)return{audioData:e[0].audioData,audioFormat:e[0].audioFormat,speechMarks:e[0].speechMarks,context:e[0].contextToken};let t=new AudioContext;try{let r=await Promise.all(e.map(async A=>({audioBuffer:await t.decodeAudioData(A.audioData.slice()),chunk:A}))),i=r[0].audioBuffer.sampleRate,c=r.reduce((A,{audioBuffer:F})=>A+F.length,0),u=t.createBuffer(r[0].audioBuffer.numberOfChannels,c,i),f=0;r.forEach(({audioBuffer:A})=>{for(let F=0;F<A.numberOfChannels;F++){let B=A.getChannelData(F);u.getChannelData(F).set(B,f)}f+=A.length});let d=Nx(u),y=u.duration*1e3,v=e.flatMap(A=>A.speechMarks.chunks),S=e[0],T=[...e].reverse().find(A=>A.speechMarks.chunks.length>0)??S,M=e.reduce((A,F)=>F.contextToken??A,void 0);return{audioData:d,audioFormat:"wav",speechMarks:{type:"sentence",value:e.map(A=>A.speechMarks.value).join(""),start:S.speechMarks.start,end:T.speechMarks.end,startTime:0,endTime:y,chunks:v},context:M}}finally{await t.close()}};var qx=Se(Vx(),1),Hk=(e,t)=>{if(t.type!=="ENQUEUE_PLAYABLE"||!t.payload)return;let{playable:r,position:i}=t.payload,c=i??e.queue.length;return Array.isArray(r)?{queue:e.queue.toSpliced(c,0,...r)}:{queue:e.queue.toSpliced(c,0,r)}},Kk=(e,t)=>{if(t.type!=="REMOVE_PLAYABLES"||!t.payload)return;let{startFromIndex:r,count:i}=t.payload,c=r??0,u=i??e.queue.length-c,f=e.queue.toSpliced(c,u);return e.playbackCursorIndex>=c?{playbackCursorIndex:Math.max(e.playbackCursorIndex-u,0),queue:f}:{queue:f}},Yk=(e,t)=>{if(t.type!=="EDIT_ALL_PLAYABLES"||!t.payload)return;let{playablesToEdit:r,startFromIndex:i}=t.payload,c=i??0,u=e.queue.map((f,d)=>{if(d<c)return f;let y=r[d],v={...f,...y},S=ri(f,y);return S&&(v.readyState=S,v.generation=Lt(f)+1),v});return Wx(e,u)?{queue:u,activeLoadRequestId:null}:{queue:u}},Qk=(e,t)=>{if(t.type!=="EDIT_PLAYABLES"||!t.payload)return;let{playablesToEdit:r}=t.payload,i=Array.isArray(r)?r:[r],c=e.queue.slice();for(let u of i){let f=e.queue.findIndex(S=>S.id===u.playableId);if(f===-1)return;let d=e.queue[f],y=u.newPlayable,v=ri(d,y);c.splice(f,1,{...d,...y,readyState:v??d.readyState,generation:v?Lt(d)+1:Lt(d)})}return Wx(e,c)?{queue:c,activeLoadRequestId:null}:{queue:c}},Xk=(e,t)=>{if(t.type!=="AUDIO_CHUNK_LOAD_FAILED"||!t.payload)return;let{playableId:r}=t.payload,i=e.queue.findIndex(f=>f.id===r);if(i===-1)return;let c=e.queue[i];if(t.payload.generation!==void 0&&t.payload.generation!==Lt(c))return;let u=e.queue[i].readyState==="streaming";return{queue:e.queue.toSpliced(i,1,{...e.queue[i],readyState:"error"}),activeLoadRequestId:u?e.activeLoadRequestId:null,activeStreamingRequestId:u?null:e.activeStreamingRequestId}},Zk=(e,t)=>{if(t.type!=="AUDIO_CHUNK_READY"||!t.payload)return;let{playableId:r,type:i}=t.payload,c=e.queue.findIndex(d=>d.id===r);if(c===-1)return;let u=e.queue[c];if(t.payload.generation!==void 0&&t.payload.generation!==Lt(u))return;i==="remote"&&Qr.setAudioInCache(yo(r,t.payload.generation??Lt(u)),{audioData:t.payload.audioData,audioFormat:t.payload.audioFormat,speechMarks:t.payload.speechMarks,context:t.payload.context});let f=e.queue[c].readyState==="streaming";return{activeLoadRequestId:f?e.activeLoadRequestId:null,activeStreamingRequestId:f?null:e.activeStreamingRequestId,queue:e.queue.toSpliced(c,1,{...e.queue[c],readyState:"ready"})}},Jk=(e,t)=>{if(t.type!=="AUDIO_CHUNK_NOT_READY"||!t.payload)return;let{playableId:r}=t.payload,i=e.queue.findIndex(u=>u.id===r);if(i===-1)return;let c=e.queue[i];if(!(t.payload.generation!==void 0&&t.payload.generation!==Lt(c)))return{queue:e.queue.toSpliced(i,1,{...e.queue[i],readyState:"not-ready"})}},eR=e=>{let{queue:t,playbackCursorIndex:r}=e,i=t.findIndex((u,f)=>u.readyState!=="ready"&&u.readyState!=="streaming"&&u.ref!==ni&&f>=r);return i===-1?t.length-1:i},Lt=e=>e?.generation??0,Wx=(e,t)=>{let r=e.activeLoadRequestId;if(!r)return!1;let i=t.find(c=>c.id===r.id);return i&&Lt(i)!==r.generation?(r.controller.abort(),!0):!1},$x=4,tR=30,rR=3,nR=(e,t)=>{let r=e.queue[t]?.voice;return!e.configuration.getPrefetchPolicyFn||!r?null:e.configuration.getPrefetchPolicyFn({playbackRate:e.playbackRate,voice:r})},Gx=e=>e?e.maxLookahead!=null?e.maxLookahead:e.bufferTargetSeconds!=null?tR:$x:$x,oR=(e,t)=>{let r=Qr.getAudioFromCache(yo(t.id,Lt(t)));return r?.speechMarks&&typeof r.speechMarks.endTime=="number"?r.speechMarks.endTime/1e3:t.duration>0?t.duration:e.configuration.predictDurationFn(t.text,t.voice)},iR=(e,t)=>{let r=0;for(let i=e.playbackCursorIndex+1;i<t;i++){let c=e.queue[i];c&&(c.readyState==="ready"||c.readyState==="streaming")&&(r+=oR(e,c))}return r},aR=(e,t,r)=>t-e.playbackCursorIndex>=Gx(r)?!0:r?.bufferTargetSeconds!=null?iR(e,t)>=r.bufferTargetSeconds:!1,sR=e=>{if(!e)return;let t=Math.max(e.cacheSize??0,Gx(e)+rR);Qr.ensureCapacity(t)},cR=(e,t,r,i)=>{let{queue:c}=e,u=c[r];if(aR(e,r,i)||u.readyState==="ready"||u.readyState==="streaming"||u.readyState==="error"&&(t.getState()==="paused"||r===e.playbackCursorIndex)||u.ref===ni)return!0;if(e.activeLoadRequestId){let f=e.activeLoadRequestId.id===u.id,d=u.readyState==="invalidated-text"||u.readyState==="invalidated-voice";if(f&&!d)return!0}return!1},zx=(e,t,r,i,c)=>{let u={};return u.previousContext=Qr.getAudioFromCache(yo(i[c-1]?.id,Lt(i[c-1])))?.context,e===0?(u.previousPlayable=i[c-1],u.nextPlayable=t[e+1]?{...r,text:t[e+1]}:i[c+1]):e===t.length-1?(u.nextPlayable=i[c+1],u.previousPlayable=t[e-1]?{...r,text:t[e-1]}:i[c-1]):(u.previousPlayable={...r,text:t[e-1]},u.nextPlayable={...r,text:t[e+1]}),u},lR=e=>({audioData:e.audioData,audioFormat:e.audioFormat,speechMarks:e.speechMarks,context:e.contextToken}),uR=(e,t,r,i,c,u,f)=>{let d=zx(t,r,i,c.queue,u);return c.configuration.fetchAudioFn(Ep(e),i.voice,d,f.signal).then(lR)},fR=(e,t,r)=>(e.send({type:"AUDIO_CHUNK_READY",payload:{type:"local",playableId:t.id,generation:Lt(t)}}),{activeLoadRequestId:null,loadingCursorIndex:r}),pR=(e,t,r)=>{let{queue:i}=e,c=i[r];if(!c)return;let u=Lt(c),f=e.queue.toSpliced(r,1,{...c,readyState:"loading"}),d=Tx(c.text,1e3),y=new AbortController,v=(0,qx.default)(2),S=d.map((M,A)=>v(()=>uR(M,A,d,c,e,r,y))),T=Date.now();return Promise.all(S).then(M=>Ox(M,d)).then(M=>{t.send({type:"AUDIO_CHUNK_READY",payload:{type:"remote",playableId:c.id,audioData:M.audioData,audioFormat:M.audioFormat,speechMarks:M.speechMarks,context:M.context,loadDurationMs:Date.now()-T,generation:u}})}).catch(M=>{M?.name!=="AbortError"&&t.send({type:"AUDIO_CHUNK_LOAD_FAILED",payload:{playableId:c.id,generation:u}})}),{activeLoadRequestId:{controller:y,id:c.id,generation:u},queue:f,loadingCursorIndex:r}},dR=(e,t)=>!(!e.configuration.fetchStreamingAudioFn||!e.configuration.streamingAudioPlayerFn||t!==e.playbackCursorIndex||e.activeStreamingRequestId&&e.activeStreamingRequestId.id===e.queue[t]?.id),mR=(e,t,r)=>{let{queue:i}=e,c=i[r];if(!c)return;let{fetchStreamingAudioFn:u,streamingAudioPlayerFn:f}=e.configuration;if(!u||!f)return;let d=Lt(c),y=new AbortController,v=zx(0,[c.text],c,i,r),S=u(Ep(c.text),c.voice,v,y.signal),T=f(c.text,e.playbackRate);T.setupEvents(F=>{switch(F.type){case"progress":t.send({type:"AUDIO_PROGRESSED",payload:{playableId:c.id,charIndex:F.payload.charIndex}});break;case"ended":t.send({type:"AUDIO_PLAYBACK_ENDED"});break}});let M=S.getReader();return(async()=>{try{for(;;){let{done:F,value:B}=await M.read();if(F||y.signal.aborted)break;t.send({type:"STREAM_CHUNK_RECEIVED",payload:{playableId:c.id,chunk:B,generation:d}})}}catch(F){F?.name!=="AbortError"&&!y.signal.aborted&&t.send({type:"AUDIO_CHUNK_LOAD_FAILED",payload:{playableId:c.id,generation:d}})}finally{M.releaseLock()}})(),{playerForCurrentPlayable:T,activeStreamingRequestId:{controller:y,id:c.id,generation:d},streamingBuffer:{chunks:[],bufferedUpToCharIndex:-1,isComplete:!1,playableId:c.id},queue:e.queue.toSpliced(r,1,{...c,readyState:"streaming"}),loadingCursorIndex:r}},gR=(e,t,r)=>{if(t.type!=="STREAM_CHUNK_RECEIVED"||!t.payload)return;let{playableId:i,chunk:c}=t.payload,u=t.payload.generation;if(!e.streamingBuffer||e.streamingBuffer.playableId!==i||e.activeStreamingRequestId?.id!==i||t.payload.generation!==void 0&&e.activeStreamingRequestId?.generation!==t.payload.generation)return;let f=e.playerForCurrentPlayable;f&&"appendChunk"in f&&f.appendChunk(c);let d=[...e.streamingBuffer.chunks,c],y=c.speechMarks.end,v=c.isFinal;return v&&Dx(d).then(S=>{r.send({type:"AUDIO_CHUNK_READY",payload:{type:"remote",playableId:i,audioData:S.audioData,audioFormat:S.audioFormat,speechMarks:S.speechMarks,context:S.context,generation:u}})}).catch(()=>{}),{streamingBuffer:{...e.streamingBuffer,chunks:d,bufferedUpToCharIndex:y,isComplete:v}}},hR=(e,t,r)=>{let{queue:i}=e;if(i.length===0)return;let c=eR(e),u=nR(e,c);if(sR(u),cR(e,r,c,u))return;let f=i[c],d=e.activeLoadRequestId;return d&&d.controller.abort(),f.voice.provider==="local"?fR(r,f,c):dR(e,c)?mR(e,r,c):pR(e,r,c)},yR=(e,t,r)=>{let{queue:i,playbackCursorIndex:c}=e,u=i[c];if(!(!u||u.readyState!=="ready"&&u.readyState!=="streaming")&&!e.playerForCurrentPlayable){let{provider:f}=u.voice;if(f==="local"){if(u.text.trim().length===0){r.send({type:"AUDIO_PLAYBACK_ENDED"});return}let v=e.configuration.localAudioPlayerFn(u.text,u.voice,e.playbackRate);return v.setupEvents(S=>{switch(S.type){case"progress":r.send({type:"AUDIO_PROGRESSED",payload:{playableId:u.id,charIndex:S.payload.charIndex}});break;case"ended":r.send({type:"AUDIO_PLAYBACK_ENDED"});break}}),v.setSpeed(e.playbackRate),{playerForCurrentPlayable:v}}let d=Qr.getAudioFromCache(yo(u.id,Lt(u)));if(!d){r.send({type:"AUDIO_CHUNK_NOT_READY",payload:{playableId:u.id}});return}let y=e.configuration.hdAudioPlayerFn(u.text,e.playbackRate,{data:d.audioData,format:d.audioFormat});return y.setupEvents(v=>{switch(v.type){case"progress":r.send({type:"AUDIO_PROGRESSED",payload:{playableId:u.id,duration:v.payload.duration}});break;case"ended":r.send({type:"AUDIO_PLAYBACK_ENDED"});break}}),y.setSpeed(e.playbackRate),{playerForCurrentPlayable:y}}},xR=(e,t,r)=>{if(t.type!=="AUDIO_PROGRESSED")return;let i=e.queue[e.playbackCursorIndex];if(t.payload?.duration){let c=Qr.getAudioFromCache(yo(i.id,Lt(i)));if(!c)return;let u=kx(t.payload.duration,i.text,c.speechMarks)??[0,0],f=e.currentPlaybackLocation?.position,d=e.currentPlaybackLocation?.ref,y=e.currentPlaybackLocation?.playableId;return f&&f[0]===u[0]&&f[1]===u[1]&&d===i.ref&&y===i.id?void 0:{currentPlaybackLocation:{playableId:i.id,position:u,...ti(i.text,u),ref:i.ref}}}if(t.payload?.charIndex!==void 0){let c=t.payload.charIndex,u=Tc(i.text,c);if(!u)return;let f=e.currentPlaybackLocation?.position,d=e.currentPlaybackLocation?.ref,y=e.currentPlaybackLocation?.playableId;return f&&f[0]===u[0]&&f[1]===u[1]&&d===i.ref&&y===i.id?void 0:{currentPlaybackLocation:{playableId:i.id,position:u,...ti(i.text,u),ref:i.ref}}}},bR=(e,t,r)=>{if(t.type!=="AUDIO_PLAYBACK_ENDED")return;let i=e.playbackCursorIndex+1;return e.playerForCurrentPlayable?.destroy(),i>=e.queue.length&&r.send({type:"QUEUE_ENDED"}),{playbackCursorIndex:i,playerForCurrentPlayable:null,currentPlaybackLocation:null,activeStreamingRequestId:null,streamingBuffer:null}},vR=(e,t)=>{if(t.type==="QUEUE_ENDED")return{playbackCursorIndex:0,playerForCurrentPlayable:null,currentPlaybackLocation:null}},SR=e=>{if(!e.playerForCurrentPlayable)return;e.playerForCurrentPlayable.pause();let t=e.queue[e.playbackCursorIndex],r=e.activeStreamingRequestId;return r&&r.id===t?.id?(r.generation??0)===Lt(t)?void 0:(r.controller.abort(),e.playerForCurrentPlayable.destroy(),{playerForCurrentPlayable:null,activeStreamingRequestId:null,streamingBuffer:null}):(e.playerForCurrentPlayable.destroy(),{playerForCurrentPlayable:null})},CR=(e,t,r)=>{let i=e.playerForCurrentPlayable,c=e.currentPlaybackLocation;if(i){if(c){let u=e.queue[e.playbackCursorIndex];if(u.readyState==="streaming"||u.voice.provider==="local")i.seekToCharIndex(c.wordCharIndex.start);else{let f=Qr.getAudioFromCache(yo(u.id,Lt(u)));f&&i.seekTo(Ix(c.position,u.text,f.speechMarks))}}i.play()}},wR=(e,t,r)=>{if(t.type!=="SEEK_TO_PLAYABLE"||!t.payload)return;let{playableId:i,position:c}=t.payload,u=e.queue.findIndex(y=>y.id===i),f=e.queue[u];if(u===-1)return;let d={playbackCursorIndex:u,currentPlaybackLocation:{playableId:i,position:c,...ti(f.text,c),ref:f.ref}};if(e.activeStreamingRequestId&&e.activeStreamingRequestId.id!==i){e.activeStreamingRequestId.controller.abort(),e.playerForCurrentPlayable?.pause(),e.playerForCurrentPlayable?.destroy(),d.activeStreamingRequestId=null,d.playerForCurrentPlayable=null,d.streamingBuffer=null;let y=e.queue.findIndex(v=>v.id===e.activeStreamingRequestId.id);y!==-1&&(d.queue=e.queue.toSpliced(y,1,{...e.queue[y],readyState:"not-ready"}))}return d},_R=(e,t)=>{t.type==="PAUSE"&&e.playerForCurrentPlayable&&e.playerForCurrentPlayable.pause()},ER=(e,t)=>{if(t.type==="SET_PLAYBACK_RATE"&&t.payload)return e.playerForCurrentPlayable?.setSpeed(t.payload),{playbackRate:t.payload}},TR=(e,t)=>{if(t.type==="CLEAR_QUEUE")return e.playerForCurrentPlayable&&(e.playerForCurrentPlayable.pause(),e.playerForCurrentPlayable.destroy()),e.activeStreamingRequestId&&e.activeStreamingRequestId.controller.abort(),{queue:[],playbackCursorIndex:0,loadingCursorIndex:0,playerForCurrentPlayable:null,currentPlaybackLocation:null,activeStreamingRequestId:null,streamingBuffer:null}},te={enqueuePlayable:Hk,removePlayables:Kk,editPlayables:Qk,editAllPlayables:Yk,markPlayableAsErrored:Xk,markPlayableAsReady:Zk,markPlayableAsNotReady:Jk,adjustLoadingCursor:hR,handleStreamChunkReceived:gR,setupPlayerForPlayable:yR,handleProgressEvent:xR,handleEndedEvent:bR,resetCurrentPlayablePlayer:SR,attemptToPlayPlayable:CR,seekToPlayable:wR,pausePlayback:_R,setPlaybackRate:ER,handleQueueEndedEvent:vR,clearQueue:TR};a();s();var IR=(e,t)=>e.queue.length>0,kR=(e,t)=>{let r=e.queue[e.playbackCursorIndex];if(!r)return!1;if(r.readyState==="ready")return!0;if(r.readyState==="streaming"){if(!e.streamingBuffer)return!1;let i=e.currentPlaybackLocation?.wordCharIndex?.start??0;return e.streamingBuffer.bufferedUpToCharIndex>=i}return!1},RR=(e,t)=>{let r=e.queue[e.playbackCursorIndex];if(!r||r.readyState==="ready")return!1;if(r.readyState==="streaming"){let i=e.streamingBuffer;return!(!!i&&i.playableId===r.id&&i.bufferedUpToCharIndex>=0)}return!0},AR=(e,t)=>e.queue[e.playbackCursorIndex]&&e.queue[e.playbackCursorIndex].readyState==="error",MR=(e,t)=>{let r=e.queue[e.playbackCursorIndex];if(!r)return!1;if(t.type==="EDIT_PLAYABLES"){if(!t.payload)return!1;let c=(Array.isArray(t.payload.playablesToEdit)?t.payload.playablesToEdit:[t.payload.playablesToEdit]).find(u=>u.playableId===r.id);return c?ri(r,c.newPlayable)!==null:!1}if(t.type==="EDIT_ALL_PLAYABLES"){if(!t.payload)return!1;let i=t.payload.startFromIndex??0;if(e.playbackCursorIndex<i)return!1;let c=t.payload.playablesToEdit[e.playbackCursorIndex];return ri(r,c)!==null}return!1},kr={isQueueNotEmpty:IR,isPlayableReady:kR,isPlayableNotReady:RR,isCurrentPlayableErrored:AR,willCurrentPlayableBeInvalidated:MR};var jx=e=>{let t=!!e.fetchStreamingAudioFn,r=!!e.streamingAudioPlayerFn;if(t!==r)throw new Error("fetchStreamingAudioFn and streamingAudioPlayerFn must both be provided for streaming playback.");let i={entry:[te.resetCurrentPlayablePlayer],on:{PLAY:[{target:"buffering",cond:kr.isQueueNotEmpty,actions:[]}],ENQUEUE_PLAYABLE:[{actions:[te.enqueuePlayable]}],EDIT_PLAYABLES:[{actions:[te.editPlayables]}],EDIT_ALL_PLAYABLES:[{actions:[te.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[te.removePlayables]}],SEEK_TO_PLAYABLE:[{actions:[te.seekToPlayable]}],SET_PLAYBACK_RATE:[{actions:[te.setPlaybackRate]}],CLEAR_QUEUE:[{actions:[te.clearQueue]}]}};return{id:Symbol(),initial:"idle",context:{queue:[],playbackCursorIndex:0,loadingCursorIndex:0,playbackRate:1,currentPlaybackLocation:null,activeLoadRequestId:null,activeStreamingRequestId:null,lastError:void 0,playerForCurrentPlayable:null,streamingBuffer:null,configuration:e},states:{idle:i,ended:i,playing:{always:[{target:"error",cond:kr.isCurrentPlayableErrored},{actions:[te.adjustLoadingCursor]},{target:"buffering",cond:kr.isPlayableNotReady}],entry:[te.adjustLoadingCursor,te.setupPlayerForPlayable,te.attemptToPlayPlayable],on:{PAUSE:[{target:"paused"}],SET_PLAYBACK_RATE:[{actions:[te.setPlaybackRate]}],AUDIO_CHUNK_READY:[{actions:[te.markPlayableAsReady]}],AUDIO_CHUNK_NOT_READY:[{actions:[te.markPlayableAsNotReady]}],AUDIO_PLAYBACK_ENDED:[{actions:[te.handleEndedEvent,te.setupPlayerForPlayable,te.attemptToPlayPlayable]}],PLAY_NEXT_PLAYABLE:[{actions:[te.setupPlayerForPlayable,te.attemptToPlayPlayable]}],AUDIO_CHUNK_LOAD_FAILED:[{actions:[te.markPlayableAsErrored]}],AUDIO_PROGRESSED:[{actions:[te.handleProgressEvent]}],STREAM_CHUNK_RECEIVED:[{actions:[te.handleStreamChunkReceived]}],SEEK_TO_PLAYABLE:[{target:"buffering",actions:[te.seekToPlayable]}],ENQUEUE_PLAYABLE:[{actions:[te.enqueuePlayable]}],EDIT_PLAYABLES:[{cond:kr.willCurrentPlayableBeInvalidated,target:"buffering",actions:[te.editPlayables]},{actions:[te.editPlayables]}],EDIT_ALL_PLAYABLES:[{cond:kr.willCurrentPlayableBeInvalidated,target:"buffering",actions:[te.editAllPlayables]},{actions:[te.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[te.removePlayables]}],QUEUE_ENDED:[{target:"ended",actions:[te.handleQueueEndedEvent]}],CLEAR_QUEUE:[{actions:[te.clearQueue]}]}},paused:{entry:[te.pausePlayback,te.resetCurrentPlayablePlayer],always:[{target:"error",cond:kr.isCurrentPlayableErrored},{actions:[te.adjustLoadingCursor]}],on:{PLAY:[{target:"playing",cond:kr.isQueueNotEmpty}],SET_PLAYBACK_RATE:[{actions:[te.setPlaybackRate]}],AUDIO_CHUNK_READY:[{actions:[te.markPlayableAsReady]}],AUDIO_CHUNK_LOAD_FAILED:[{actions:[te.markPlayableAsErrored]}],STREAM_CHUNK_RECEIVED:[{actions:[te.handleStreamChunkReceived]}],SEEK_TO_PLAYABLE:[{actions:[te.seekToPlayable]}],ENQUEUE_PLAYABLE:[{actions:[te.enqueuePlayable]}],EDIT_PLAYABLES:[{actions:[te.editPlayables]}],EDIT_ALL_PLAYABLES:[{actions:[te.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[te.removePlayables]}],CLEAR_QUEUE:[{actions:[te.clearQueue]}]}},buffering:{entry:[te.resetCurrentPlayablePlayer,te.adjustLoadingCursor],always:[{target:"playing",cond:kr.isPlayableReady},{target:"error",cond:kr.isCurrentPlayableErrored}],on:{PAUSE:[{target:"paused"}],SET_PLAYBACK_RATE:[{actions:[te.setPlaybackRate]}],AUDIO_CHUNK_READY:[{actions:[te.markPlayableAsReady]}],AUDIO_CHUNK_LOAD_FAILED:[{actions:[te.markPlayableAsErrored]}],STREAM_CHUNK_RECEIVED:[{actions:[te.handleStreamChunkReceived]}],ENQUEUE_PLAYABLE:[{actions:[te.enqueuePlayable,te.adjustLoadingCursor]}],EDIT_PLAYABLES:[{actions:[te.editPlayables,te.adjustLoadingCursor]}],EDIT_ALL_PLAYABLES:[{actions:[te.editAllPlayables,te.adjustLoadingCursor]}],REMOVE_PLAYABLES:[{actions:[te.removePlayables]}],SEEK_TO_PLAYABLE:[{actions:[te.seekToPlayable,te.adjustLoadingCursor]}],CLEAR_QUEUE:[{actions:[te.clearQueue]}]}},error:{entry:[te.resetCurrentPlayablePlayer],always:[{target:"playing",cond:kr.isPlayableReady}],on:{PLAY:[{target:"playing",cond:kr.isQueueNotEmpty}],AUDIO_CHUNK_READY:[{actions:[te.markPlayableAsReady]}],SET_PLAYBACK_RATE:[{actions:[te.setPlaybackRate]}],EDIT_PLAYABLES:[{actions:[te.editPlayables,te.adjustLoadingCursor]}],EDIT_ALL_PLAYABLES:[{actions:[te.editAllPlayables]}],REMOVE_PLAYABLES:[{actions:[te.removePlayables]}],CLEAR_QUEUE:[{actions:[te.clearQueue]}]}}}}};var LR=e=>{let t=`stateDiagram-v2
`;t+=` [*] --> ${e.initial}
`;for(let r in e.states){let i=e.states[r];if(i.on)for(let c in i.on){let u=i.on[c];if(u)for(let f of u)f.target&&(t+=` ${r} --> ${f.target}:${c}
`)}if(i.always)for(let c of i.always)c.target&&(t+=` ${r} --> ${c.target}:always if ${c.cond?.name}
`)}return t},PR=new Set(["AUDIO_PROGRESSED"]),OR=e=>{let t=e.payload;if(!t)return"";if(typeof t!="object")return String(t);let r={};for(let[i,c]of Object.entries(t))c instanceof ArrayBuffer?r[i]=`ArrayBuffer(${c.byteLength})`:typeof c=="object"&&c!==null&&"audioData"in c?r[i]=`StreamChunk(${c.isFinal?"final":"partial"})`:r[i]=c;return JSON.stringify(r)},Hx=e=>{let t=Ec(e),r=t.getSchema(),i="[orator]";return t.onTransition(([c,u,f])=>{console.log(`${i} %c${String(c)} → ${String(f)}%c via ${u.type}`,"color: #f59e0b; font-weight: bold","")}),t.onEvent(c=>{if(PR.has(c.type))return;let u=OR(c);console.log(`${i} %cevent%c ${c.type}${u?` ${u}`:""}`,"color: #3b82f6; font-weight: bold","",`| state: ${String(t.getState())}`)}),t.onStateChange((c,u)=>{let f=t.getContext();console.groupCollapsed(`${i} %cstate%c ${String(c)} → ${String(u)}`,"color: #10b981; font-weight: bold",""),console.log("playbackCursorIndex:",f.playbackCursorIndex),console.log("queue readyStates:",f.queue?.map(d=>d.readyState)),console.log("activeStreamingRequestId:",f.activeStreamingRequestId?.id??null),console.log("streamingBuffer:",f.streamingBuffer?{bufferedUpToCharIndex:f.streamingBuffer.bufferedUpToCharIndex,isComplete:f.streamingBuffer.isComplete,chunksCount:f.streamingBuffer.chunks.length}:null),console.log("playerForCurrentPlayable:",f.playerForCurrentPlayable?"set":"null"),console.groupEnd()}),{...t,getStateChart:()=>LR(r)}};var Kx=(e,t)=>{let r=jx(e),i=t?Hx(r):Ec(r),c=f=>{let{playableId:d,generation:y}=Px(f);i.send({type:"AUDIO_CHUNK_NOT_READY",payload:{playableId:d,generation:y}})},u=Qr.onEvict(c);return{controls:{editOrEnqueuePlayables:f=>{let d=[];for(let y=0;y<f.length;y++){let v=f[y],S=i.getContext().queue.find(T=>T.id===v.id);if(S){S.text!==v.text&&d.push({playableId:v.id,newPlayable:{text:v.text}});continue}i.send({type:"ENQUEUE_PLAYABLE",payload:{playable:v,position:y}})}d.length>0&&i.send({type:"EDIT_PLAYABLES",payload:{playablesToEdit:d}})},enqueuePlayables:f=>{i.send({type:"ENQUEUE_PLAYABLE",payload:{playable:f}})},pause:()=>{i.send({type:"PAUSE"})},play:()=>{i.send({type:"PLAY"})},setSpeed:f=>{f>=.25&&f<=4.5&&i.send({type:"SET_PLAYBACK_RATE",payload:f})},stop:()=>{i.send({type:"STOP"})},seekNextSentence:()=>{let{currentPlaybackLocation:f,playbackCursorIndex:d}=i.getContext();if(!f)return;let y=f.position,v=ho(i.getContext().queue[d].text);if(y[0]+1>=v.length&&d<i.getContext().queue.length-1){let T=i.getContext().queue[d+1];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:T.id,position:[0,0]}})}else{let T=[Math.min(y[0]+1,v.length-1),0];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:f.playableId,position:T}})}},seekPreviousSentence:()=>{let{currentPlaybackLocation:f,playbackCursorIndex:d}=i.getContext();if(!f)return;let y=f.position;if(y[0]-1<0&&d>0){let S=i.getContext().queue[d-1],M=[ho(S.text).length-1,0];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:S.id,position:M}})}else{let S=[Math.max(y[0]-1,0),0];i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:f.playableId,position:S}})}},setVoice:f=>{let y=i.getContext().queue.map(v=>({voice:f}));i.send({type:"EDIT_ALL_PLAYABLES",payload:{playablesToEdit:y}})},seekToPosition:(f,d)=>{i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:f,position:d}})},seekToProgress:f=>{let d=Math.min(Math.max(f,0),1),y=i.getContext().queue,S=y.reduce((M,A)=>M+A.duration,0)*d,T=0;for(let M=0;M<y.length;M++){let A=y[M];if(T=T+A.duration,T>=S){i.send({type:"SEEK_TO_PLAYABLE",payload:{playableId:A.id,position:[0,0]}});return}}},getCurrentTime:()=>{let d=i.getContext().queue.slice(0,i.getContext().playbackCursorIndex).reduce((T,M)=>T+M.duration,0),y=i.getContext().playerForCurrentPlayable;return y?(y.getCurrentTime()+d)/i.getContext().playbackRate:d/i.getContext().playbackRate},getTotalTime:()=>i.getContext().queue.reduce((d,y)=>d+y.duration,0)/i.getContext().playbackRate,hasPlaceholders:()=>i.getContext().queue.some(f=>f.ref===ni)},createPlayableFromElement(f,d){let y=d(f);return{...y,duration:e.predictDurationFn(y.text,y.voice)}},createPlaceholderPlayable(f){return{id:f,text:"",ref:ni,readyState:"not-ready",voice:{voiceId:"placeholder",provider:"local"},duration:0}},reset:()=>{i.send({type:"CLEAR_QUEUE"})},destroy:()=>{u()},machine:i}};a();s();var Yx=Se(Re()),NR=Je("/feature-flags/get");async function Qx(e){return NR.then(t=>t.features[e])}a();s();var kp=()=>Je("/content/stop-playback-all-tabs");a();s();var DR=180,BR=5,FR=DR*BR;var Xx=Ys("voiceSpeedTiming",{getInitialState:async()=>({})}),Rp={};Xx.getAll().then(e=>Rp=e);Xx.listen(e=>Rp=e);var UR=e=>e.trim().replace(/\s+/g," ");var Zx=(e,t)=>{let r=UR(e);if(r.length===0)return 0;if(!t||!t.voiceId)throw new Error("Voice must have a valid voiceId");let i=Rp[t.voiceId],c=FR;return i&&i.length>0&&(c=i.reduce((f,d)=>f+d.cpm,0)/i.length),r.length/(c/60)};a();s();var Jx=e=>{let t=e.engine==="speechSynth"?"local":e.engine;return{voiceId:e.slug??e.name.toLowerCase(),provider:t}};var VR=e=>{let t=Kx({fetchAudioFn:async(d,y,v,S)=>{let T=await Jo();return dx(po.audioServer.baseUrl)(T,d,y,v,S)},...e?{fetchStreamingAudioFn:(d,y,v,S)=>new ReadableStream({async start(T){try{let M=await Jo(),F=mx(po.audioServer.baseUrl)(M,d,y,v,S).getReader();for(;;){let{done:B,value:V}=await F.read();if(B)break;T.enqueue(V)}T.close()}catch(M){T.error(M)}}}),streamingAudioPlayerFn:hx}:{},hdAudioPlayerFn:$2,localAudioPlayerFn:gx,predictDurationFn:Zx},!1),r=null,i=null,c=t.machine.onContextChange("queue",()=>{i==null&&(i=setTimeout(()=>{i=null,Ic.setState(d=>({duration:{...d.duration,totalTime:t.controls.getTotalTime()}}))},250))}),u=t.machine.onStateChange((d,y)=>{Ic.setState({state:y}),y==="playing"&&!r?(Ls(),r=QR(t),tp(!0),Je("/content/stop-playback-all-tabs").catch(()=>{})):(y==="idle"||y==="paused"||y==="ended")&&(Ac(),r?.(),r=null,tp(!1),la(0))}),f=St.subscribe(d=>({voice:d.voice,playbackSpeed:d.playbackSpeed,isReady:d.isReady}),async(d,y)=>{d.isReady||await ia(),d.playbackSpeed!==y.playbackSpeed&&d.playbackSpeed!==null&&t.controls.setSpeed(d.playbackSpeed),d.voice!==y.voice&&d.voice!==null&&t.controls.setVoice(Jx(d.voice))},{equalityFn:(d,y)=>d.voice?.slug===y.voice?.slug&&d.voice?.name===y.voice?.name&&d.playbackSpeed===y.playbackSpeed&&d.isReady===y.isReady});return{orator:t,cleanup:()=>{Ac(),r?.(),r=null,u(),c(),i!=null&&clearTimeout(i),f()}}},Mp=pt(()=>({orator:null,cleanup:()=>{}})),$R=async()=>{let e=!1;try{e=await Qx("ceStreamingSynthesis")==="adaptive"}catch{}Mp.setState(VR(e))},qR=$R(),rIe=async()=>(await qR,Lp.getState().orator),Ic=pt(()=>({state:"idle",duration:{totalTime:0,currentTime:0}}));window.onbeforeunload=()=>{Mp.getState().cleanup(),oi()};"CSS"in globalThis&&"paintWorklet"in globalThis.CSS&&CSS.paintWorklet.addModule(chrome.runtime.getURL("houdini.js"));var WR=location.pathname.includes("pdf-viewer"),GR="sfBackground",kc={light:{word:zo["hglt-prim"],sentence:zo["hglt-sec"]},dark:{word:pn["hglt-prim"],sentence:pn["hglt-sec"]}},zR=e=>{let t=op(e);kc.light={word:t.primaryLight,sentence:t.secondaryLight},kc.dark={word:t.primaryDark,sentence:t.secondaryDark}},t3=!0,Rc=null,nIe=e=>{t3=e,Rc?.()},oIe=e=>{zR(e),Rc?.()},jR=1,HR="left 0.12s ease";function KR(){let e=[],t=null,r=null,i=S=>{let T=document.createElement("div");return T.style.cssText="position:absolute;pointer-events:none;border-radius:3px;",T.dataset.testid=S,T},c=(S,T,M)=>{S.style.background=T,S.style.mixBlendMode=M?"lighten":"multiply"},u=S=>{let T=[];for(let A of S){if(A.width===0)continue;let F=T.find(B=>Math.abs(B[0].top-A.top)<Math.max(A.height,B[0].height)*.5);F?F.push(A):T.push([A])}let M=[];for(let A of T){A.sort((B,V)=>B.left-V.left);let F=null;for(let B of A){let V=F?B.left-(F.x+F.width):0,w=Math.max(B.height,F?.height??B.height)*jR;if(F&&V<=w){let P=Math.max(F.x+F.width,B.right);F.x=Math.min(F.x,B.left),F.y=Math.min(F.y,B.top),F.width=P-F.x,F.height=Math.max(F.height,B.height)}else F={x:B.left,y:B.top,width:B.width,height:B.height},M.push(F)}}return M},f=(S,T,M,A)=>{S.style.display="block",S.style.left=`${A.x-M.left}px`,S.style.top=`${A.y-M.top}px`,S.style.width=`${A.width}px`,S.style.height=`${A.height}px`,S.parentElement!==T&&T.appendChild(S)},d=()=>{for(let S of e)S.style.display="none";t&&(t.style.display="none"),r=null};return{paint:(S,T,M,A)=>{let F=S.closest(".pdf-page");if(!F)return null;let B=F.getBoundingClientRect(),V=u(Array.from(Qo(S,T[0],T[1]).getClientRects()));if(!A)return d(),V[0]??null;let w=F.dataset[GR]==="dark",P=w?kc.dark:kc.light,N=Array.from(Qo(S,M[0],M[1]).getClientRects());for(let j=0;j<V.length;j++){let X=e[j]??(e[j]=i("pdf-sentence-highlight"));c(X,P.sentence,w),f(X,F,B,V[j])}for(let j=V.length;j<e.length;j++)e[j].style.display="none";let Q=N[0];if(Q&&Q.width>0){t??=i("pdf-word-highlight"),c(t,P.word,w);let j=Q.x-B.left,X=Q.y-B.top,$=r!==null&&t.parentElement===F&&Math.abs(X-r.y)<Q.height*.5&&j>=r.x;t.style.transition=$?HR:"none",f(t,F,B,{x:Q.x,y:Q.y,width:Q.width,height:Q.height}),r={x:j,y:X,width:Q.width,height:Q.height}}else t&&(t.style.display="none",r=null);return V[0]??null},clear:d,destroy:()=>{for(let S of e)S.remove();e.length=0,t?.remove(),t=null,r=null}}}var{highlightElement:YR,removeHighlights:Ac}=Yf("sidepanelHighlighting",{highlightColor:{word:{light:_["hglt-prim"],dark:_["hglt-prim"]},sentence:{light:_["hglt-sec"],dark:_["hglt-sec"]}}}),Ap=e=>window===e,e3=(e,t)=>{if(!w2())return;let{y:r}=e,i=r;Ap(t)||(i-=t.getBoundingClientRect().top);let c=i-(Ap(t)?window.innerHeight:t.clientHeight)/2,u=Ap(t)?window.scrollY:t.scrollTop,f=Math.max(u+c,0);b2({top:f,behavior:"smooth"},{element:t})},QR=e=>{let t={element:null,sentenceIndex:{start:0,end:0},wordIndex:{start:0,end:0}},r=null,i=WR?KR():null,c=null,u=(v,S,T)=>{c&&c.element===v&&c.start===S&&c.end===T||(c={element:v,start:S,end:T},Qf(v?v.textContent?.slice(S,T)??null:null))},f=()=>{if(!i)return;let{element:v,sentenceIndex:S,wordIndex:T}=t;if(!v){i.clear(),u(null,0,0);return}let M=i.paint(v,[S.start,S.end],[T.start,T.end],t3);if(u(v,T.start,T.end),M){let A=document.getElementById("scrollable-content");if(A){let F=A.getBoundingClientRect(),B=M.y-F.top+A.scrollTop;la(B),e3(M,A)}}},d=e.machine.onContextChange("currentPlaybackLocation",(v,S)=>{if(S?.currentPlaybackLocation){let{ref:T,sentenceCharIndex:M,wordCharIndex:A}=S.currentPlaybackLocation;t={element:T,sentenceIndex:M,wordIndex:A},f()}Ic.setState(T=>({duration:{...T.duration,currentTime:e.controls.getCurrentTime()}}))}),y=()=>{let{element:v,sentenceIndex:S,wordIndex:T}=t;if(Ac(),v){let M=v.closest(".textLayer")??v,{lineRect:A}=YR(v,[M],[S.start,S.end],[T.start,T.end],{rectOnly:!1})??{};if(A){let F=document.getElementById("scrollable-content");if(F){let B=F.getBoundingClientRect(),V=A.y-B.top+F.scrollTop;la(V),e3(A,F)}}u(v,T.start,T.end)}else u(null,0,0);r=requestAnimationFrame(y)};return i?(Rc=f,f()):y(),()=>{Ac(),Rc=null,i?.destroy(),d(),la(0),Qf(null),r&&cancelAnimationFrame(r)}},iIe=Ic,Lp=Mp;var oi=()=>{let e=Lp.getState();return e.orator?.controls.pause(),!!e.orator},aIe=()=>{kp(),Lp.getState().orator?.controls.play()};a();s();var r3="cliff",n3="sidepanel-selected-realtime-voice-id",XR=()=>{try{return globalThis?.localStorage?.getItem(n3)||r3}catch{return r3}},pIe=pt()(_r(e=>({showTranscriptTopFade:!1,showTranscriptBottomFade:!1,isPermissionModalOpen:!1,selectedRealtimeVoiceId:XR(),setShowTranscriptTopFade:t=>{e({showTranscriptTopFade:t})},setShowTranscriptBottomFade:t=>{e({showTranscriptBottomFade:t})},setIsPermissionModalOpen:t=>{e({isPermissionModalOpen:t})},setSelectedRealtimeVoiceId:t=>{e({selectedRealtimeVoiceId:t});try{globalThis?.localStorage?.setItem(n3,t)}catch{}}})));var Mc=()=>{fn.getState().stopVoiceMode()};var o3=e=>{fn.getState().setOverlay(e)};a();s();a();s();a();s();a();s();var i3=["/","/settings","/settings/profile","/settings/voice","/settings/speed","/settings/listening","/settings/playback","/settings/playback/voice","/settings/features","/settings/features/highlighting","/settings/features/click-to-listen","/settings/features/hover-to-listen","/settings/features/auto-scroll","/settings/shortcuts","/settings/accessibility","/settings/accessibility-shortcuts","/settings/help","/settings/assistant","/settings/voice-typing"];var Pc="/";function a3(e){let t=e.startsWith("/")?e:`/${e}`;return t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function s3(e,t){if(t.startsWith("/"))return a3(t);let r=e.split("/").filter(Boolean),i=t.split("/");for(let c of i)if(c==="..")r.pop();else{if(c==="."||c==="")continue;r.push(c)}return"/"+r.join("/")||"/"}function Lc(e){return i3.includes(e)}function ii(e){let t=a3(e);if(Lc(t))return t;let r=t.split("/").filter(Boolean);for(;r.length>0;){r.pop();let i="/"+r.join("/")||"/";if(Lc(i))return i}return"/"}var c3=50,l3=()=>[],ZR=1e3,Nc=e=>e.length===0?null:e[e.length-1]?.path??Pc,JR=e=>e.length<2?null:e[e.length-2]?.path??null,Oc=null,u3=!1,Gn=pt()(_r((e,t)=>({history:l3(),isInitialized:!1,isPending:!0,chatOpenedViaExternalAction:!1,navigate:r=>{let{history:i,isPending:c}=t(),u=Nc(i),f=u3;u3=!1,Oc&&(clearTimeout(Oc),Oc=null);let d=s3(u??Pc,r),y=ii(d);if(!c&&y===u)return;let v={path:y,timestamp:Date.now()};e(S=>{let T=[...S.history,v];return T.length>c3&&(T=T.slice(-c3)),{history:T,isPending:!1,chatOpenedViaExternalAction:y==="/"?c||f:S.chatOpenedViaExternalAction}}),ma()},goBack:()=>{let{history:r}=t();r.length<=1||(e(i=>({history:i.history.slice(0,-1)})),ma())},replace:r=>{let{history:i}=t(),c=Nc(i),u=Lc(r)?r:ii(r);u!==c&&(e(f=>{let d=[...f.history];return d[d.length-1]={path:u,timestamp:Date.now()},{history:d}}),ma())},reset:()=>{e({history:l3()}),ma()},initialize:()=>{let{isInitialized:r,history:i}=t();r||(e({isInitialized:!0}),i.length===0&&(Oc=setTimeout(()=>{let{history:c,isPending:u}=t();u&&c.length===0&&t().navigate(Pc)},ZR)),ma())}})));var zn=()=>{let e=Gn.getState(),t=e.history;return{currentRoute:Nc(t),canGoBack:t.length>1,previousRoute:JR(t),historyLength:t.length,isInitialized:e.isInitialized,isPending:e.isPending}},f3=e=>{Gn.getState().navigate(e)},p3=()=>{Gn.getState().goBack()};async function ma(){try{let e=zn();if(e.currentRoute===null)return;await Je("/sidepanel/router-state-changed",{currentRoute:e.currentRoute,canGoBack:e.canGoBack,timestamp:Date.now()})}catch{}}Gn.subscribe(e=>Nc(e.history),(e,t)=>{if(t==="/"&&e!=="/"&&e!==null){let{isActive:r}=fn.getState();r&&(o3(null),Mc())}});var Ur=le("RouterRoutes","cyan");var Pp=Vn("router",{navigate:async({target:e,replace:t=!1})=>{Ur.info("📨 Received navigation request:",{target:e,replace:t});try{let r=ii(e);Ur.info("🎯 Resolved route:",{original:e,resolved:r}),t?Gn.getState().replace(r):f3(r);let i=zn();return{success:!0,navigatedTo:i.currentRoute,originalTarget:e,wasResolved:e!==i.currentRoute}}catch(r){return Ur.error("❌ Navigation failed:",r),{success:!1,error:r instanceof Error?r.message:String(r)}}},"go-back":async()=>{Ur.info("📨 Received go-back request");try{let e=zn();if(!e.canGoBack)return{success:!1,error:"Cannot go back - at beginning of history",currentRoute:e.currentRoute};p3();let t=zn();return{success:!0,previousRoute:e.currentRoute,currentRoute:t.currentRoute}}catch(e){return Ur.error("❌ Go back failed:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"get-state":async()=>{Ur.info("📨 Received get-state request");try{return{success:!0,...zn()}}catch(e){return Ur.error("❌ Get state failed:",e),{success:!1,currentRoute:"/",canGoBack:!1,error:e instanceof Error?e.message:String(e)}}},replace:async({target:e})=>{Ur.info("📨 Received replace request:",{target:e});try{let t=ii(e);Gn.getState().replace(t);let r=zn();return{success:!0,replacedWith:r.currentRoute,originalTarget:e,wasResolved:e!==r.currentRoute}}catch(t){return Ur.error("❌ Replace failed:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},reset:async()=>{Ur.info("📨 Received reset request");try{return Gn.getState().reset(),{success:!0,currentRoute:zn().currentRoute}}catch(e){return Ur.error("❌ Reset failed:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}}});a();s();a();s();a();s();function Op(e){let t=Date.now(),r=e.filter(i=>t-i.timestamp<=72e5);return r.length>1e3&&(r=r.sort((i,c)=>c.timestamp-i.timestamp).slice(0,1e3).sort((i,c)=>i.timestamp-c.timestamp)),r}function d3(e,t){if(!t)return-1;for(let r=e.length-1;r>=0;r--)if(e[r].sessionId===t)return r;return-1}function m3(e,t,r){for(let i=e.length-1;i>=0;i--){let c=e[i];if(c.source===t&&!c.isFinal&&(r===void 0||c.sessionId===r))return i}return-1}var Dt=le("ScribeStore","cyan"),Np=()=>`transcript-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,eA=()=>`chat-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,We=pt()(_r((e,t)=>({captureState:"idle",tabId:null,errorMessage:null,transcripts:[],chatMessages:[],isGeneratingResponse:!1,tabSpeechStarted:!1,micSpeechStarted:!1,tabAudioLevel:0,micAudioLevel:0,inputValue:"",isTranscriptOpen:!1,isOnSummarize:!1,isSummaryLoading:!1,isReconnecting:!1,summary:null,summaryError:null,savedFileId:null,savedFolderId:null,savedMeetingTitle:null,dynamicQuestions:[],isLoadingDynamicQuestions:!1,meetingContext:null,recordingStartTime:null,recordingEndTime:null,userQuestionHistory:[],lastQuestionGenerationTime:null,activeSpeakerName:null,userLabel:null,showCSATPopup:!1,showActivateNotetakerPopup:!1,csatPopupDismissed:!1,showNewMeetingToast:!1,showMeetingNotesReadyToast:!1,showEmailSentToast:!1,emailRecipientsCount:0,setCaptureState:r=>{Dt.info("Setting capture state:",r),e({captureState:r})},setTabId:r=>{Dt.info("Setting tab ID:",r),e({tabId:r})},setErrorMessage:r=>{r&&Dt.error("Capture error:",r),e({errorMessage:r})},addTranscript:r=>{let i=t().transcripts,c=r.sessionId,u=c?d3(i,c):-1,f;if(u>=0)f=[...i],f[u]={...i[u],text:r.text,timestamp:Date.now()};else{let d={id:Np(),source:r.source,text:r.text,timestamp:Date.now(),isFinal:!0,speakerName:t().activeSpeakerName||void 0,sessionId:c||void 0};f=[...i,d]}f=Op(f),e({transcripts:f}),Dt.debug(`[${r.source.toUpperCase()}] Adding transcript:`,r.text)},setTranscripts:r=>{let i=r.map(c=>({id:Np(),source:c.source,text:c.text,timestamp:c.timestamp??Date.now(),isFinal:c.isFinal??!0,speakerName:c.speakerName??void 0,sessionId:c.sessionId??void 0}));e({transcripts:Op(i)}),Dt.info(`Hydrated ${i.length} transcripts`)},updatePartialTranscript:(r,i,c)=>{e(u=>{let f=[...u.transcripts],d=m3(f,r,c);if(d>=0){let v=[...f];return v[d]={...f[d],text:i,timestamp:Date.now()},{transcripts:v}}let y={id:Np(),source:r,text:i,timestamp:Date.now(),isFinal:!1,speakerName:t().activeSpeakerName||void 0,sessionId:c||void 0};return{transcripts:[...f,y]}})},clearTranscripts:()=>{Dt.info("Clearing all transcripts"),e({transcripts:[]})},setActiveSpeakerName:r=>{Dt.info("Setting active speaker:",r),e({activeSpeakerName:r})},setShowActivateNotetakerPopup:r=>{e({showActivateNotetakerPopup:r})},reset:()=>{Dt.info("Resetting scribe store"),e({captureState:"idle",tabId:null,errorMessage:null,transcripts:[],chatMessages:[],isGeneratingResponse:!1,dynamicQuestions:[],isLoadingDynamicQuestions:!1,meetingContext:null,recordingStartTime:null,recordingEndTime:null,userQuestionHistory:[],lastQuestionGenerationTime:null,isSummaryLoading:!1,isReconnecting:!1,summary:null,summaryError:null,savedFileId:null,savedFolderId:null,savedMeetingTitle:null,tabAudioLevel:0,micAudioLevel:0})},setInputValue:r=>{e({inputValue:r})},setIsTranscriptOpen:r=>{e({isTranscriptOpen:r})},setIsOnSummarize:r=>{e({isOnSummarize:r})},setIsSummaryLoading:r=>{e({isSummaryLoading:r})},setIsReconnecting:r=>{e({isReconnecting:r})},setSummary:r=>{e({summary:r})},appendSummary:r=>{e(i=>({summary:(i.summary||"")+r}))},setSummaryError:r=>{e({summaryError:r})},setSavedFileId:r=>{e({savedFileId:r})},setSavedFolderId:r=>{e({savedFolderId:r})},setSavedMeetingTitle:r=>{e({savedMeetingTitle:r})},addChatMessage:r=>{let i=eA(),c={...r,id:i,timestamp:Date.now()};return Dt.debug(`Adding chat message [${r.type}]:`,r.content.substring(0,50)),e(u=>({chatMessages:[...u.chatMessages,c]})),i},updateChatMessage:(r,i)=>{e(c=>({chatMessages:c.chatMessages.map(u=>u.id===r?{...u,content:i}:u)}))},setChatMessageStreaming:(r,i)=>{e(c=>({chatMessages:c.chatMessages.map(u=>u.id===r?{...u,isStreaming:i}:u)}))},clearChatMessages:()=>{Dt.info("Clearing all chat messages"),e({chatMessages:[]})},setIsGeneratingResponse:r=>{e({isGeneratingResponse:r})},setDynamicQuestions:r=>{Dt.debug("Setting dynamic questions:",r.length),e({dynamicQuestions:r})},setIsLoadingDynamicQuestions:r=>{e({isLoadingDynamicQuestions:r})},clearDynamicQuestions:()=>{Dt.debug("Clearing dynamic questions"),e({dynamicQuestions:[],isLoadingDynamicQuestions:!1})},setMeetingContext:r=>{e({meetingContext:r})},setRecordingStartTime:r=>{Dt.debug("Setting recording start time:",r),e({recordingStartTime:r})},setRecordingEndTime:r=>{Dt.debug("Setting recording end time:",r),e({recordingEndTime:r})},addUserQuestion:r=>{Dt.debug("Adding user question to history:",r),e(i=>({userQuestionHistory:[...i.userQuestionHistory,r].slice(-10)}))},clearUserQuestionHistory:()=>{Dt.debug("Clearing user question history"),e({userQuestionHistory:[]})},setLastQuestionGenerationTime:r=>{e({lastQuestionGenerationTime:r})},setUserLabel:r=>{e({userLabel:r})},setShowCSATPopup:r=>{e(r?{showCSATPopup:r}:{showCSATPopup:r,csatPopupDismissed:!0})},setShowNewMeetingToast:r=>{e({showNewMeetingToast:r})},setShowMeetingNotesReadyToast:r=>{e({showMeetingNotesReadyToast:r})},setTabSpeechStarted:r=>{e({tabSpeechStarted:r})},setMicSpeechStarted:r=>{e({micSpeechStarted:r})},setTabAudioLevel:r=>{e({tabAudioLevel:r})},setMicAudioLevel:r=>{e({micAudioLevel:r})},setShowEmailSentToast:r=>{e({showEmailSentToast:r})},setEmailRecipientsCount:r=>{e({emailRecipientsCount:r})}})));a();s();a();s();var lA=Se(Re());a();s();var y3=Se(Re());a();s();var Bp=le("ScribeAnalytics","purple"),tA=()=>crypto.randomUUID();function rA(e){if(!e)return null;let t=/meet\.google\.com\/([a-z]{3}-[a-z]{4}-[a-z]{3})/,r=e.match(t);return r?r[1]:null}var ai=null,Dp=null;async function nA(e){if(e!==void 0&&e===Dp&&ai)return ai;if(e!==void 0)try{let t=await p.tabs.get(e),r=rA(t.url);if(r)return ai=r,Dp=e,r}catch(t){Bp.warn("Failed to get tab URL for meeting_id:",t)}return ai||(ai=`session-${tA()}`,Dp=e??null),ai}async function g3(e){return{meeting_id:await nA(e),meeting_provider:"google_meet",app_platform:"desktop_extension"}}var Dc=null;async function h3(e,t){let i={...await g3(t),generation_latency_ms:e};Dc?await Dc("Meeting Transcript Ready",i):Bp.warn("Analytics logger not initialized. Event not logged:","Meeting Transcript Ready")}async function Fp(e,t){let i={...await g3(t),generation_latency_ms:e};Dc?await Dc("Meeting Summary Ready",i):Bp.warn("Analytics logger not initialized. Event not logged:","Meeting Summary Ready")}var yke=le("OpenAIRestClient","green");a();s();var oA=Se(Re()),Ske=30*1e3,Cke=120*1e3,iA=60*1e3;a();s();var kke=le("PredefinedQuestions","green");var Vke=le("ScribeChat","green");a();s();var mA=Se(Re());a();s();a();s();var jke=le("OpenAI-Text-Client","green");a();s();var Xke=le("ContextExtractor","orange");a();s();var vRe=le("TranscriptQuestions","purple");a();s();a();s();a();s();function b3(e,t){let r=null,i=null,c=(...u)=>{i=u,r&&clearTimeout(r),r=setTimeout(()=>{i&&(e(...i),i=null),r=null},t)};return c.cancel=()=>{r&&(clearTimeout(r),r=null),i=null},c.flush=()=>{r&&i&&(clearTimeout(r),e(...i),i=null,r=null)},c}var hA=100;function v3(e){let t=new Map,i=b3(()=>{for(let c of t.values())e(c.source,c.text,c.sessionId);t.clear()},hA);return(c,u,f)=>{let d=`${c}-${f||"default"}`;t.set(d,{source:c,text:u,sessionId:f}),i()}}a();s();var Vp=async e=>{let t=await p.tabs.query({active:!0,currentWindow:!0}),r=e?t.find(c=>c.id===e):t[0],i=r?.title||"Important Meeting";await Je("/meeting-capture/start",{tabId:r?.id??e,tabTitle:i})};var Ge=le("ScribeRoutes","cyan"),yA=(e,t)=>{let r=We.getState();if(["recording","starting"].includes(r.captureState))return;r.setSavedFileId(e),r.setSavedFolderId(t);let i=K.getState().currentUrlMetadata?.tabId;(!(r.tabId&&i===r.tabId)||!r.isOnSummarize)&&r.setShowMeetingNotesReadyToast(!0)},xA=async(e,t)=>{let r=!1;try{r=await Je("/library/wait-item-ready",{itemId:e})}catch(i){Ge.warn("[ScribeRoutes] Failed to wait for meeting note readiness:",i)}r||Ge.warn("[ScribeRoutes] Meeting note did not reach ready status in time, revealing anyway:",e),yA(e,t)},yn=null,$p="idle",qp=null;var Bc=Vn("scribe",{"transcript-update":async({source:e,transcript:t,isFinal:r,sessionId:i})=>{Ge.info(`[ScribeRoutes] [${e.toUpperCase()}] Transcript update:`,{isFinal:r,length:t.length,preview:t.substring(0,50),sessionId:i});try{let c=We.getState();return r?(c.addTranscript({source:e,text:t,isFinal:!0,sessionId:i||void 0}),Ge.info(`[ScribeRoutes] Added final transcript, total: ${c.transcripts.length+1}`)):(qp||(qp=v3((u,f,d)=>{We.getState().updatePartialTranscript(u,f,d)})),qp(e,t,i||void 0)),{success:!0}}catch(c){return Ge.error("Failed to process transcript update:",c),{success:!1,error:c instanceof Error?c.message:String(c)}}},"capture-state-change":async({state:e,tabId:t,error:r})=>{Ge.info("[ScribeRoutes] Capture state change:",{state:e,tabId:t,error:r});try{let i=We.getState();if(($p==="recording"||$p==="stopping")&&e==="idle"&&(i.setIsOnSummarize(!0),Ge.info("[ScribeRoutes] Capture stopped, showing summarization")),i.setCaptureState(e),Ge.info("[ScribeRoutes] State updated to:",e),t!==void 0&&i.setTabId(t),r?r.includes("Extension has not been invoked for the current page")?i.setShowActivateNotetakerPopup(!0):i.setErrorMessage("Please try reopening the sidepanel"):(e==="recording"||e==="idle")&&(i.setShowActivateNotetakerPopup(!1),i.setErrorMessage(null)),["recording","starting"].includes(e)&&(i.setIsOnSummarize(!1),i.setShowActivateNotetakerPopup(!1)),e==="recording"){i.clearTranscripts(),i.clearChatMessages(),i.setSummary(null),i.setSummaryError(null),i.setSavedFileId(null),i.setSavedFolderId(null),i.setRecordingStartTime(Date.now());let c=K.getState().currentUrlMetadata;if(c?.title){let u=c.title.replace("Meet - ","");i.setSavedMeetingTitle(u),Ge.info("[ScribeRoutes] Saved meeting title:",u)}else i.setSavedMeetingTitle("Important Meeting"),Ge.info("[ScribeRoutes] No title found, using default");Ge.info("[ScribeRoutes] Cleared transcripts, summary, and reset view for new session")}return e==="stopping"&&(i.setRecordingEndTime(Date.now()),i.setIsSummaryLoading(!0),i.setSummaryError(null),i.setIsTranscriptOpen(!1),i.clearTranscripts(),i.clearChatMessages(),yn=Date.now(),Ge.info("[ScribeRoutes] Capture stopping, waiting for meeting summary from offscreen")),(e==="idle"||e==="stopping")&&i.transcripts.length>0&&h3(0,i.tabId||void 0).catch(c=>{Ge.error("Failed to log Meeting Transcript Ready event:",c)}),$p=e,{success:!0}}catch(i){return Ge.error("Failed to process capture state change:",i),{success:!1,error:i instanceof Error?i.message:String(i)}}},reset:async()=>{Ge.info("Resetting scribe state");try{return We.getState().reset(),{success:!0}}catch(e){return Ge.error("Failed to reset scribe state:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"speech-start":async({source:e})=>{Ge.info("[ScribeRoutes] Speech start requested:",e);let t=We.getState();return e==="tab"?t.setTabSpeechStarted(!0):t.setMicSpeechStarted(!0),{success:!0}},"speech-end":async({source:e})=>{Ge.info("[ScribeRoutes] Speech end requested:",e);let t=We.getState();return e==="tab"?t.setTabSpeechStarted(!1):t.setMicSpeechStarted(!1),{success:!0}},"audio-level-update":async({source:e,level:t})=>{let r=We.getState(),i=Math.max(0,Math.min(100,Math.round(t)));return e==="tab"?r.setTabAudioLevel(i):r.setMicAudioLevel(i),{success:!0}},"meeting-summarization-result":async({summary:e,error:t,done:r})=>{let i=We.getState();if(Ge.info("[ScribeRoutes] Meeting summarization result received"),t)return i.setIsSummaryLoading(!1),Ge.warn("[ScribeRoutes] Meeting summarization failed:",t),i.setSummaryError(t),yn=null,{success:!1,error:t};if(r){if(i.setIsSummaryLoading(!1),i.setSummaryError(null),Ge.info("[ScribeRoutes] Meeting summarization streaming complete"),yn){let u=Date.now()-yn;Fp(u,i.tabId||void 0).catch(f=>{Ge.error("Failed to log Meeting Summary Ready event:",f)}),yn=null}return{success:!0,done:!0}}if(e&&e.trim().length>0){if(i.setIsSummaryLoading(!1),i.setSummary(e),i.setSummaryError(null),yn){let u=Date.now()-yn;Fp(u,i.tabId||void 0).catch(f=>{Ge.error("Failed to log Meeting Summary Ready event:",f)}),yn=null}return{success:!0,summary:e}}let c="Empty summary received from summarization service";return i.setIsSummaryLoading(!1),Ge.warn("[ScribeRoutes] "+c),i.setSummaryError(c),yn=null,{success:!1,error:c}},"meeting-summarization-chunk":async({chunk:e,replace:t})=>{let r=We.getState();return e&&e.length>0&&(t?r.setSummary(e):r.appendSummary(e)),{success:!0}},"meeting-summarization-reconnecting":async({isReconnecting:e})=>{let t=We.getState();return Ge.info("[ScribeRoutes] Summarization reconnecting:",e),t.setIsReconnecting(e),e&&t.setSummaryError(null),{success:!0}},"update-active-speaker":async({speaker:e})=>(We.getState().setActiveSpeakerName(e),{success:!0}),"update-user-label":async({userLabel:e})=>(We.getState().setUserLabel(e),{success:!0}),"update-summary-loading":async({isLoading:e})=>(We.getState().setIsSummaryLoading(e),{success:!0}),"meeting-item-saved":async({fileId:e,folderId:t})=>(Ge.info("[ScribeRoutes] Meeting item saved:",{fileId:e,folderId:t}),xA(e,t).catch(r=>{Ge.error("[ScribeRoutes] Failed to verify meeting note status:",r)}),{success:!0}),"meeting-started":async(e,t)=>{let r=We.getState(),i=t.meta?.tabId;return r.isOnSummarize?r.setShowNewMeetingToast(!0):r.captureState==="idle"&&(Ge.info("[ScribeRoutes] New meeting started - starting capture",{tabId:i}),Vp(i)),{success:!0}},"meeting-focused":async(e,t)=>{let r=We.getState(),i=t.meta?.tabId;return!r.isOnSummarize&&r.captureState==="idle"&&(Ge.info("[ScribeRoutes] Meeting page focused and idle - starting capture",{tabId:i}),Vp(i)),{success:!0}}});a();s();a();s();var bl=Se(Re()),eN=Se(Wp());a();s();a();s();a();s();a();s();function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ha.apply(null,arguments)}var Kn=Se(Re());a();s();a();s();function S3(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var bA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,C3=S3(function(e){return bA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});a();s();a();s();var Hn=Se(Re()),Ea=Se(Re());a();s();a();s();function vA(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function SA(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var w3=(function(){function e(r){var i=this;this._insertTag=function(c){var u;i.tags.length===0?i.insertionPoint?u=i.insertionPoint.nextSibling:i.prepend?u=i.container.firstChild:u=i.before:u=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(c,u),i.tags.push(c)},this.isSpeedy=r.speedy===void 0?!1:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(SA(this));var c=this.tags[this.tags.length-1];if(0)var u;if(this.isSpeedy){var f=vA(c);try{f.insertRule(i,f.cssRules.length)}catch{}}else c.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e})();a();s();var Pt="-ms-",ya="-moz-",De="-webkit-",Fc="comm",ci="rule",li="decl";var _3="@import";var Uc="@keyframes";var E3="@layer";a();s();var T3=Math.abs,xo=String.fromCharCode,I3=Object.assign;function k3(e,t){return mt(e,0)^45?(((t<<2^mt(e,0))<<2^mt(e,1))<<2^mt(e,2))<<2^mt(e,3):0}function Vc(e){return e.trim()}function Gp(e,t){return(e=t.exec(e))?e[0]:e}function Ne(e,t,r){return e.replace(t,r)}function xa(e,t){return e.indexOf(t)}function mt(e,t){return e.charCodeAt(t)|0}function jn(e,t,r){return e.slice(t,r)}function Gt(e){return e.length}function ui(e){return e.length}function fi(e,t){return t.push(e),e}function zp(e,t){return e.map(t).join("")}a();s();a();s();var $c=1,pi=1,R3=0,zt=0,xt=0,mi="";function ba(e,t,r,i,c,u,f){return{value:e,root:t,parent:r,type:i,props:c,children:u,line:$c,column:pi,length:f,return:""}}function gi(e,t){return I3(ba("",null,null,"",null,null,0),e,{length:-e.length},t)}function A3(){return xt}function M3(){return xt=zt>0?mt(mi,--zt):0,pi--,xt===10&&(pi=1,$c--),xt}function jt(){return xt=zt<R3?mt(mi,zt++):0,pi++,xt===10&&(pi=1,$c++),xt}function Rr(){return mt(mi,zt)}function va(){return zt}function hi(e,t){return jn(mi,e,t)}function di(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qc(e){return $c=pi=1,R3=Gt(mi=e),zt=0,[]}function Wc(e){return mi="",e}function yi(e){return Vc(hi(zt-1,jp(e===91?e+2:e===40?e+1:e)))}function L3(e){for(;(xt=Rr())&&xt<33;)jt();return di(e)>2||di(xt)>3?"":" "}function P3(e,t){for(;--t&&jt()&&!(xt<48||xt>102||xt>57&&xt<65||xt>70&&xt<97););return hi(e,va()+(t<6&&Rr()==32&&jt()==32))}function jp(e){for(;jt();)switch(xt){case e:return zt;case 34:case 39:e!==34&&e!==39&&jp(xt);break;case 40:e===41&&jp(e);break;case 92:jt();break}return zt}function O3(e,t){for(;jt()&&e+xt!==57;)if(e+xt===84&&Rr()===47)break;return"/*"+hi(t,zt-1)+"*"+xo(e===47?e:jt())}function N3(e){for(;!di(Rr());)jt();return hi(e,zt)}function F3(e){return Wc(Gc("",null,null,null,[""],e=qc(e),0,[0],e))}function Gc(e,t,r,i,c,u,f,d,y){for(var v=0,S=0,T=f,M=0,A=0,F=0,B=1,V=1,w=1,P=0,N="",Q=c,j=u,X=i,$=N;V;)switch(F=P,P=jt()){case 40:if(F!=108&&mt($,T-1)==58){xa($+=Ne(yi(P),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:$+=yi(P);break;case 9:case 10:case 13:case 32:$+=L3(F);break;case 92:$+=P3(va()-1,7);continue;case 47:switch(Rr()){case 42:case 47:fi(CA(O3(jt(),va()),t,r),y);break;default:$+="/"}break;case 123*B:d[v++]=Gt($)*w;case 125*B:case 59:case 0:switch(P){case 0:case 125:V=0;case 59+S:w==-1&&($=Ne($,/\f/g,"")),A>0&&Gt($)-T&&fi(A>32?B3($+";",i,r,T-1):B3(Ne($," ","")+";",i,r,T-2),y);break;case 59:$+=";";default:if(fi(X=D3($,t,r,v,S,c,d,N,Q=[],j=[],T),u),P===123)if(S===0)Gc($,t,X,X,Q,u,T,d,j);else switch(M===99&&mt($,3)===110?100:M){case 100:case 108:case 109:case 115:Gc(e,X,X,i&&fi(D3(e,X,X,0,0,c,d,N,c,Q=[],T),j),c,j,T,d,i?Q:j);break;default:Gc($,X,X,X,[""],j,0,d,j)}}v=S=A=0,B=w=1,N=$="",T=f;break;case 58:T=1+Gt($),A=F;default:if(B<1){if(P==123)--B;else if(P==125&&B++==0&&M3()==125)continue}switch($+=xo(P),P*B){case 38:w=S>0?1:($+="\f",-1);break;case 44:d[v++]=(Gt($)-1)*w,w=1;break;case 64:Rr()===45&&($+=yi(jt())),M=Rr(),S=T=Gt(N=$+=N3(va())),P++;break;case 45:F===45&&Gt($)==2&&(B=0)}}return u}function D3(e,t,r,i,c,u,f,d,y,v,S){for(var T=c-1,M=c===0?u:[""],A=ui(M),F=0,B=0,V=0;F<i;++F)for(var w=0,P=jn(e,T+1,T=T3(B=f[F])),N=e;w<A;++w)(N=Vc(B>0?M[w]+" "+P:Ne(P,/&\f/g,M[w])))&&(y[V++]=N);return ba(e,t,r,c===0?ci:d,y,v,S)}function CA(e,t,r){return ba(e,t,r,Fc,xo(A3()),jn(e,2,-2),0)}function B3(e,t,r,i){return ba(e,t,r,li,jn(e,0,i),jn(e,i+1,-1),i)}a();s();function bo(e,t){for(var r="",i=ui(e),c=0;c<i;c++)r+=t(e[c],c,e,t)||"";return r}function U3(e,t,r,i){switch(e.type){case E3:if(e.children.length)break;case _3:case li:return e.return=e.return||e.value;case Fc:return"";case Uc:return e.return=e.value+"{"+bo(e.children,i)+"}";case ci:e.value=e.props.join(",")}return Gt(r=bo(e.children,i))?e.return=e.value+"{"+r+"}":""}a();s();function V3(e){var t=ui(e);return function(r,i,c,u){for(var f="",d=0;d<t;d++)f+=e[d](r,i,c,u)||"";return f}}function $3(e){return function(t){t.root||(t=t.return)&&e(t)}}a();s();a();s();var wA=function(t,r,i){for(var c=0,u=0;c=u,u=Rr(),c===38&&u===12&&(r[i]=1),!di(u);)jt();return hi(t,zt)},_A=function(t,r){var i=-1,c=44;do switch(di(c)){case 0:c===38&&Rr()===12&&(r[i]=1),t[i]+=wA(zt-1,r,i);break;case 2:t[i]+=yi(c);break;case 4:if(c===44){t[++i]=Rr()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=xo(c)}while(c=jt());return t},EA=function(t,r){return Wc(_A(qc(t),r))},q3=new WeakMap,TA=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,c=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!q3.get(i))&&!c){q3.set(t,!0);for(var u=[],f=EA(r,u),d=i.props,y=0,v=0;y<f.length;y++)for(var S=0;S<d.length;S++,v++)t.props[v]=u[y]?f[y].replace(/&\f/g,d[S]):d[S]+" "+f[y]}}},IA=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function W3(e,t){switch(k3(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+ya+e+Pt+e+e;case 6828:case 4268:return De+e+Pt+e+e;case 6165:return De+e+Pt+"flex-"+e+e;case 5187:return De+e+Ne(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Pt+"flex-$1$2")+e;case 5443:return De+e+Pt+"flex-item-"+Ne(e,/flex-|-self/,"")+e;case 4675:return De+e+Pt+"flex-line-pack"+Ne(e,/align-content|flex-|-self/,"")+e;case 5548:return De+e+Pt+Ne(e,"shrink","negative")+e;case 5292:return De+e+Pt+Ne(e,"basis","preferred-size")+e;case 6060:return De+"box-"+Ne(e,"-grow","")+De+e+Pt+Ne(e,"grow","positive")+e;case 4554:return De+Ne(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return Ne(Ne(Ne(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return Ne(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return Ne(Ne(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4095:case 3583:case 4068:case 2532:return Ne(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(e)-1-t>6)switch(mt(e,t+1)){case 109:if(mt(e,t+4)!==45)break;case 102:return Ne(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+ya+(mt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xa(e,"stretch")?W3(Ne(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(mt(e,t+1)!==115)break;case 6444:switch(mt(e,Gt(e)-3-(~xa(e,"!important")&&10))){case 107:return Ne(e,":",":"+De)+e;case 101:return Ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+De+(mt(e,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Pt+"$2box$3")+e}break;case 5936:switch(mt(e,t+11)){case 114:return De+e+Pt+Ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Pt+Ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Pt+Ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return De+e+Pt+e+e}return e}var kA=function(t,r,i,c){if(t.length>-1&&!t.return)switch(t.type){case li:t.return=W3(t.value,t.length);break;case Uc:return bo([gi(t,{value:Ne(t.value,"@","@"+De)})],c);case ci:if(t.length)return zp(t.props,function(u){switch(Gp(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return bo([gi(t,{props:[Ne(u,/:(read-\w+)/,":"+ya+"$1")]})],c);case"::placeholder":return bo([gi(t,{props:[Ne(u,/:(plac\w+)/,":"+De+"input-$1")]}),gi(t,{props:[Ne(u,/:(plac\w+)/,":"+ya+"$1")]}),gi(t,{props:[Ne(u,/:(plac\w+)/,Pt+"input-$1")]})],c)}return""})}},RA=[kA],Hp=function(t){var r=t.key;if(!r)throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(B){var V=B.getAttribute("data-emotion");V.indexOf(" ")!==-1&&(document.head.appendChild(B),B.setAttribute("data-s",""))})}var c=t.stylisPlugins||RA,u={},f,d=[];f=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(B){for(var V=B.getAttribute("data-emotion").split(" "),w=1;w<V.length;w++)u[V[w]]=!0;d.push(B)});var y,v=[TA,IA];{var S,T=[U3,$3(function(B){S.insert(B)})],M=V3(v.concat(c,T)),A=function(V){return bo(F3(V),M)};y=function(V,w,P,N){S=P,A(V?V+"{"+w.styles+"}":w.styles),N&&(F.inserted[w.name]=!0)}}var F={key:r,sheet:new w3({key:r,container:f,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:u,registered:{},insert:y};return F.sheet.hydrate(d),F};a();s();var qA=!0;function tl(e,t,r){var i="";return r.split(" ").forEach(function(c){e[c]!==void 0?t.push(e[c]+";"):i+=c+" "}),i}var Sa=function(t,r,i){var c=t.key+"-"+r.name;(i===!1||qA===!1)&&t.registered[c]===void 0&&(t.registered[c]=r.styles)},rl=function(t,r,i){Sa(t,r,i);var c=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var u=r;do t.insert(r===u?"."+c:"",u,t.sheet,!0),u=u.next;while(u!==void 0)}};a();s();a();s();function tb(e){for(var t=0,r,i=0,c=e.length;c>=4;++i,c-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(c){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}a();s();var rb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};a();s();function nb(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var WA=/[A-Z]|^ms/g,GA=/_EMO_([^_]+?)_([^]*?)_EMO_/g,td=function(t){return t.charCodeAt(1)===45},ob=function(t){return t!=null&&typeof t!="boolean"},Jp=nb(function(e){return td(e)?e:e.replace(WA,"-$&").toLowerCase()}),nl=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(GA,function(i,c,u){return Xr={name:c,styles:u,next:Xr},c})}return rb[t]!==1&&!td(t)&&typeof r=="number"&&r!==0?r+"px":r};ib=/(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,ab=["normal","none","initial","inherit","unset"],sb=nl,cb=/^-ms-/,lb=/-(.)/g,ed={},nl=function(t,r){if(t==="content"&&(typeof r!="string"||ab.indexOf(r)===-1&&!ib.test(r)&&(r.charAt(0)!==r.charAt(r.length-1)||r.charAt(0)!=='"'&&r.charAt(0)!=="'")))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+r+"\"'`");var i=sb(t,r);return i!==""&&!td(t)&&t.indexOf("-")!==-1&&ed[t]===void 0&&(ed[t]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+t.replace(cb,"ms-").replace(lb,function(c,u){return u.toUpperCase()})+"?")),i};var ib,ab,sb,cb,lb,ed;function Ca(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return Xr={name:r.name,styles:r.styles,next:Xr},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)Xr={name:i.name,styles:i.styles,next:Xr},i=i.next;var c=r.styles+";";return c}return zA(e,t,r)}case"function":{if(e!==void 0){var u=Xr,f=r(e);return Xr=u,Ca(e,t,f)}break}case"string":if(0)var d,y;break}if(t==null)return r;var v=t[r];return v!==void 0?v:r}function zA(e,t,r){var i="";if(Array.isArray(r))for(var c=0;c<r.length;c++)i+=Ca(e,t,r[c])+";";else for(var u in r){var f=r[u];if(typeof f!="object")t!=null&&t[f]!==void 0?i+=u+"{"+t[f]+"}":ob(f)&&(i+=Jp(u)+":"+nl(u,f)+";");else if(Array.isArray(f)&&typeof f[0]=="string"&&(t==null||t[f[0]]===void 0))for(var d=0;d<f.length;d++)ob(f[d])&&(i+=Jp(u)+":"+nl(u,f[d])+";");else{var y=Ca(e,t,f);switch(u){case"animation":case"animationName":{i+=Jp(u)+":"+y+";";break}default:i+=u+"{"+y+"}"}}}return i}var ub=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Xr,wa=function(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var c=!0,u="";Xr=void 0;var f=t[0];f==null||f.raw===void 0?(c=!1,u+=Ca(i,r,f)):u+=f[0];for(var d=1;d<t.length;d++)u+=Ca(i,r,t[d]),c&&(u+=f[d]);var y;ub.lastIndex=0;for(var v="",S;(S=ub.exec(u))!==null;)v+="-"+S[1];var T=tb(u)+v;return{name:T,styles:u,next:Xr}};a();s();var ol=Se(Re()),jA=function(t){return t()},HA=ol.useInsertionEffect?ol.useInsertionEffect:!1,il=HA||jA;var KA=!0,DMe={}.hasOwnProperty,_a=Hn.createContext(typeof HTMLElement<"u"?Hp({key:"speechify"}):null);_a.displayName="EmotionCacheContext";var YA=_a.Provider;var al=function(t){return(0,Ea.forwardRef)(function(r,i){var c=(0,Ea.useContext)(_a);return t(r,c,i)})};KA||(al=function(t){return function(r){var i=(0,Ea.useContext)(_a);return i===null?(i=Hp({key:"css"}),Hn.createElement(_a.Provider,{value:i},t(r,i))):t(r,i)}});var rd=Hn.createContext({});var sl=Se(Re());var XMe=Se(eb());function QA(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return wa(t)}var vo=function(){var t=QA.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var XA=C3,ZA=function(t){return t!=="theme"},fb=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?XA:ZA},pb=function(t,r,i){var c;if(r){var u=r.shouldForwardProp;c=t.__emotion_forwardProp&&u?function(f){return t.__emotion_forwardProp(f)&&u(f)}:u}return typeof c!="function"&&i&&(c=t.__emotion_forwardProp),c};var JA=function(t){var r=t.cache,i=t.serialized,c=t.isStringTag;return Sa(r,i,c),il(function(){return rl(r,i,c)}),null},db=function e(t,r){if(t===void 0)throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);var i=t.__emotion_real===t,c=i&&t.__emotion_base||t,u,f;r!==void 0&&(u=r.label,f=r.target);var d=pb(t,r,i),y=d||fb(c),v=!y("as");return function(){var S=arguments,T=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(u!==void 0&&T.push("label:"+u+";"),S[0]==null||S[0].raw===void 0)T.push.apply(T,S);else{T.push(S[0][0]);for(var M=S.length,A=1;A<M;A++)T.push(S[A],S[0][A])}var F=al(function(B,V,w){var P=v&&B.as||c,N="",Q=[],j=B;if(B.theme==null){j={};for(var X in B)j[X]=B[X];j.theme=Kn.useContext(rd)}typeof B.className=="string"?N=tl(V.registered,Q,B.className):B.className!=null&&(N=B.className+" ");var $=wa(T.concat(Q),V.registered,j);N+=V.key+"-"+$.name,f!==void 0&&(N+=" "+f);var ae=v&&d===void 0?fb(P):y,ye={};for(var me in B)v&&me==="as"||ae(me)&&(ye[me]=B[me]);return ye.className=N,ye.ref=w,Kn.createElement(Kn.Fragment,null,Kn.createElement(JA,{cache:V,serialized:$,isStringTag:typeof P=="string"}),Kn.createElement(P,ye))});return F.displayName=u!==void 0?u:"Styled("+(typeof c=="string"?c:c.displayName||c.name||"Component")+")",F.defaultProps=t.defaultProps,F.__emotion_real=F,F.__emotion_base=c,F.__emotion_styles=T,F.__emotion_forwardProp=d,Object.defineProperty(F,"toString",{value:function(){return"."+f}}),F.withComponent=function(B,V){return e(B,ha({},r,V,{shouldForwardProp:pb(F,V,!0)})).apply(void 0,T)},F}};var dLe=Se(Re());var eM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],k=db.bind();eM.forEach(function(e){k[e]=k(e)});var mb=Se(Re()),xi=2e3;var CLe=k.div`
  top: 0;
  pointer-events: none;
  position: absolute;
  background-blend-mode: multiply;
  z-index: ${xi};

  ${({show:e})=>e?"opacity: 1":"opacity: 0"};
  transition: opacity 0.15s ease;

  background: linear-gradient(
    ${({isTop:e})=>e?"180deg":"0deg"},
    ${({background:e})=>e} 0%,
    transparent 10%,
    transparent 100%
  );
`;a();s();var kLe=k.svg`
  width: ${({width:e,size:t})=>parseInt(`${e??t??"20"}`)+"px"};
  height: ${({height:e,size:t})=>parseInt(`${e??t??"20"}`)+"px"};
  ${({color:e})=>e&&`color: ${e}`};
  fill: ${({fill:e})=>e??"currentColor"};
  ${({style:e})=>e&&`style: ${e}`};

  ${({onClick:e})=>e&&"cursor: pointer;"}
`;function tM(e){return m("svg",{width:"44",height:"44",stroke:"currentColor",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",...e},m("g",null,m("circle",{cx:"22",cy:"22",r:"20",fill:"none",strokeWidth:"2"})))}var RLe=k(tM)`
  left: ${({left:e})=>e??"-6px"};
  pointer-events: none;
  position: absolute;
  top: ${({top:e})=>e??"-4px"};
  width: ${({size:e})=>e??"26px"};
  height: ${({size:e})=>e??"26px"};

  g {
    transform-origin: center;
    animation: spinner_rotation 2s linear infinite;
  }

  g circle {
    stroke-linecap: round;
    animation: spinner_dash 2s ease-in-out infinite;
  }

  @keyframes spinner_rotation {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner_dash {
    0% {
      stroke-dasharray: 0 330;
      stroke-dashoffset: 0;
    }

    47.5% {
      stroke-dasharray: 92 330;
      stroke-dashoffset: -35;
    }

    95%,
    100% {
      stroke-dasharray: 92 330;
      stroke-dashoffset: -119;
    }
  }
`;a();s();var rM=Se(Wp()),gb=Se(Re());a();s();a();s();var FLe=k.svg`
  width: ${({width:e})=>e??"20px"};
  height: ${({height:e})=>e??"20px"};
  ${({color:e})=>e&&`color: ${e}`};
  fill: ${({fill:e})=>e??"currentColor"};
  ${({style:e})=>e&&`style: ${e}`};

  ${({onClick:e})=>e&&"cursor: pointer;"}
`;a();s();a();s();var ne={"heading-1":`
    font-family: system-ui;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.72px;
  `,"heading-2":`
    font-family: system-ui;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
    letter-spacing: -0.36px;
  `,"heading-3":`
    font-family: system-ui;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.2px;
  `,"heading-4":`
    font-family: system-ui;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    letter-spacing: -0.18px;
  `,"heading-5":`
    font-family: system-ui;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.08px;
  `,"heading-6":`
    font-family: system-ui;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.43;
    letter-spacing: -0.07px;
  `,"subheading-1":`
    font-family: system-ui;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.22;
    letter-spacing: -0.72px;
  `,"subheading-2":`
    font-family: system-ui;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.36px;
  `,"subheading-3":`
    font-family: system-ui;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
  `,"subheading-4":`
    font-family: system-ui;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.56;
    letter-spacing: -0.18px;
  `,"subheading-5":`
    font-family: system-ui;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.08px;
  `,"subheading-6":`
    font-family: system-ui;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: -0.07px;
  `,"subheading-7":`
    font-family: system-ui;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.06px;
  `,"body-5":`
    font-family: system-ui;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.08px;
  `,"body-6":`
    font-family: system-ui;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -0.07px;
  `,"body-3":`
    font-family: system-ui;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.2px;
  `,"body-7":`
    font-family: system-ui;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.06px;
  `};var nM=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,oM=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
`,KLe=k.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,YLe=k.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${_["sf-sec-0-80"]};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0;
  flex-shrink: 0;
  color: ${_["icn-txt-sec"]};

  &:hover {
    color: ${_["icn-txt-prim"]};
  }

  &:active {
    color: ${_["icn-txt-prim"]};
  }

  svg {
    width: 8px;
    height: 8px;
  }
`,iM=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`,aM=k.div`
  ${ne["subheading-4"]};
  color: ${_["icn-txt-prim"]};
  text-align: center;
  white-space: pre-line;
`,QLe=k.div`
  ${ne["body-5"]}
  color: ${_["icn-txt-prim"]};
`,sM=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 100%;
  gap: 16px;
  border-radius: 12px;
  border: 1.5px solid ${_["brdr-prim-10-80"]};
  background-color: ${_["toolbar-preview-background"]};

  svg {
    color: ${_["toolbar-preview-color"]};
  }
`,cM=k.div`
  width: 93px;
  height: 32px;
  background: ${_["toolbar-spacer-background"]};
  border-radius: 0px 16px 16px 0px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;

  svg {
    color: ${_["toolbar-spacer-color"]};
  }
`,lM=k.div`
  width: 2px;
  height: 16px;
  background: ${_["toolbar-separator"]};
  border-radius: 12px;
`,uM=k.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 600;
`,XLe=k.div`
  display: flex;
  justify-content: center;
`,ZLe=k.button`
  width: 100%;
  padding: 8px 16px;
  background: ${_["sf-prim-cta-electric-w"]};
  color: ${_["icn-txt-prim-inv"]};
  border: none;
  border-radius: 9999px;
  ${ne["heading-6"]}
  transition: background-color 0.2s;

  &:hover {
    background: ${_["sf-prim-cta-hov-electric-w"]};
  }

  &:active {
    background: ${_["sf-prim-cta-pres-electric-w"]};
  }
`;a();s();a();s();var fM=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${_["bg-prim-w-110"]};

  & > * {
    width: 100%;
    max-width: 600px;
  }
`,pM=k.div`
  flex: 1;
  min-height: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`,dM=k.div`
  display: flex;
  align-items: center;
  justify-content: ${({showTextCenter:e})=>e?"center":"space-between"};
  padding: 12px 16px;
  gap: 48px;
  max-width: unset;
  box-sizing: border-box;
  width: 100%;
`,mM=k.div`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
`,gM=k.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({isRecording:e})=>e?_["icn-txt-crit"]:_["icn-txt-tert"]};
  animation: ${({isRecording:e})=>e?"pulse 1.5s ease-in-out infinite":"none"};

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`,hM=k.div`
  ${ne["heading-5"]};
  color: ${_["icn-txt-prim"]};
  flex: ${({showTextCenter:e})=>e?"none":"1"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`,yM=k.div`
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;

  ${({isOpen:e})=>e&&`
    opacity: 1;
    transform: translateY(0);
  `}
`,xM=k.div`
  border: 1px solid ${_["brdr-prim-10-80"]};
  background-color: ${_["bg-prim-w-100"]};
  border-radius: 20px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,bM=k.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: none;
  border: none;
  gap: 8px;
  box-sizing: border-box;
`,vM=k.div`
  ${ne["subheading-5"]};
  color: ${_["icn-txt-prim"]};
`,yPe=k.div`
  ${ne["body-6"]};
  color: ${_["icn-txt-sec"]};
`,xPe=k.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,SM=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,bPe=k.span`
  transform: rotate(${({isOpen:e})=>e?"180deg":"0deg"});
  transition: transform 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  & > svg {
    color: ${_["icn-txt-tert"]};
  }
`,CM=k.div`
  flex: 1;
  min-height: 0;
  padding: 0px 12px;
  overflow-y: auto;
  background-color: ${_["bg-prim-w-100"]};
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 0 0 20px 20px;
  -webkit-user-select: text;
  user-select: text;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease-out, padding 0.25s ease-out;
  padding: 0;

  ${({isOpen:e})=>e&&`
    max-height: none;
    opacity: 1;
    padding: 12px;
  `}
`,wM=k.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,vPe=k.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${_["bg-blue"]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${ne["subheading-7"]};
  color: ${_["icn-txt-blue"]};
`,_M=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  ${({isSelf:e})=>e&&"align-items: flex-end;"}
`,SPe=k.div`
  ${ne["subheading-6"]};
  color: ${_["icn-txt-prim"]};
  -webkit-user-select: text;
  user-select: text;
`,EM=k.div`
  ${ne["body-6"]};
  color: ${_["icn-txt-prim"]};
  -webkit-user-select: text;
  user-select: text;
  ${({isSelf:e})=>e?`background-color: ${_["bg-sec-0-90"]}; border-radius: 20px; padding: 10px;`:"margin-right: 24px"}
`,TM=k.div`
  font-style: italic;
  color: ${_["icn-txt-tert"]};
`,CPe=k.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,wPe=k.div`
  padding-right: 12px;
  ${ne["body-6"]};
  color: ${_["icn-txt-prim"]};
`,IM=k.div`
  ${ne["body-6"]};
  color: ${_["icn-txt-sec"]};
  padding: 4px 0;
`,kM=k.button`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: ${_["sf-crit"]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,RM=k.div`
  width: 7.5px;
  height: 7.5px;
  border-radius: 1.875px;
  background-color: ${_["icn-txt-white"]};
`,AM=k.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`,MM=k.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  -webkit-user-select: text;
  user-select: text;
`,LM=k.div`
  padding: ${({type:e})=>e==="user"?"12px 16px":"0"};
  border-radius: 20px;
  ${ne["body-5"]};
  line-height: 1.5;
  align-self: ${({type:e})=>e==="user"?"flex-end":"flex-start"};
  background-color: ${({type:e})=>e==="user"?_["bg-sec-0-90"]:"transparent"};
  color: ${_["icn-txt-prim"]};
  -webkit-user-select: text;
  user-select: text;
  ${({type:e})=>e==="user"&&`
      max-width: 428px;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;
    `}
`,_Pe=k.span`
  &::after {
    content: '...';
    animation: dots 1.5s steps(4, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: '';
    }
    40% {
      content: '.';
    }
    60% {
      content: '..';
    }
    80%,
    100% {
      content: '...';
    }
  }
`,hb=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,yb=k.div`
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
`,xb=k.div`
  color: ${_["icn-txt-prim"]};
  margin-bottom: 8px;
  ${ne["subheading-2"]};
`,bb=k.div`
  color: ${_["icn-txt-prim"]};
  max-width: 312px;
  ${ne["body-5"]};
`,PM=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 9999px;
  background: ${_["sf-sec-0-100"]};
  color: ${_["icn-txt-prim"]};
  ${ne["subheading-5"]};
  cursor: pointer;
  transition: background-color 0.15s ease;
  margin-top: 16px;

  &:hover {
    background-color: ${_["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${_["sf-sec-pres-0-100"]};
  }
`,OM=k.div`
  padding: 16px;
  margin: 16px 0;
  box-sizing: border-box;
  width: 100%;
  color: ${_["icn-txt-prim"]};
  border-radius: 8px;
  ${ne["body-6"]};
`,NM=k.div`
  padding: 0px 12px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`,DM=k.div`
  width: 2px;
  height: 16px;
  border-radius: 999px;
  background: ${_["brdr-prim-10-80"]};
  ${({isHide:e})=>e&&"opacity: 0;"}
`,EPe=k.span`
  ${ne["subheading-5"]};
  color: ${_["icn-txt-prim"]};
  display: block;
  margin-bottom: 8px;
`,TPe=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`,IPe=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,BM=k.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
  padding: 10px 0px 10px 12px;
  border-radius: 20px;
  color: ${_["icn-txt-prim"]};
  ${ne["subheading-5"]};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};
  transition: background-color 0.15s ease, opacity 0.15s ease;

  &:hover {
    background-color: ${({disabled:e})=>e?_["bg-sec-0-90"]:_["sf-prim-hov-w-110"]};
    opacity: ${({disabled:e})=>e?.5:1};
  }

  &:active {
    background-color: ${({disabled:e})=>e?_["bg-sec-0-90"]:_["sf-prim-pres-w-110"]};
    opacity: ${({disabled:e})=>e?.5:1};
  }

  & > svg {
    min-width: 12px;
    min-height: 12px;
  }
`,kPe=k.div`
  height: 1px;
  background-color: ${_["brdr-prim-10-100"]};
  margin: 12px 0;
`,RPe=k.span`
  ${ne["body-5"]};
  color: ${_["icn-txt-sec"]};
  display: block;
  margin-bottom: 8px;
`,APe=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${_["brdr-prim-10-100"]};
  background-color: ${_["bg-prim-w-100"]};
  color: ${_["icn-txt-prim"]};
  ${ne["subheading-5"]};
  cursor: ${({isLoading:e})=>e?"wait":"pointer"};
  opacity: ${({isLoading:e})=>e?.7:1};
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background-color: ${_["sf-prim-w-100"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,MPe=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 0;
`,LPe=k.div`
  height: 16px;
  border-radius: 6px;
  background: ${_["bg-prim-w-90"]};
  width: ${({width:e})=>e||"80%"};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, ${_["bg-prim-w-80"]}, transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,FM=k.div`
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
`,UM=k.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  box-sizing: border-box;
`,VM=k.div`
  padding: 0px;
  display: flex;
  align-items: ${({hasText:e})=>e?"flex-end":"center"};
  gap: 8px;
`,PPe=k.label`
  overflow: hidden;
  display: flex;
  flex-direction: ${({hasText:e})=>e?"column":"row"};
  align-items: ${({hasText:e})=>e?"stretch":"center"};
  gap: 8px;
  flex-grow: 1;

  background-color: ${_["bg-sec-0-100"]};
  border-radius: 24px;

  padding: 6px 6px 6px 6px;
  ${({isMultiline:e})=>e?"padding-bottom: 4px":""};

  cursor: text;
  outline: 1px solid ${_["brdr-prim-10-80"]};
`,OPe=k.textarea`
  flex: 1;
  min-width: 0;
  scrollbar-gutter: stable;
  padding: 6px 6px 6px 16px;
  background: none;
  border: none;
  display: block;
  position: relative;
  z-index: 1;
  color: ${_["icn-txt-prim"]};
  ${ne["body-5"]};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
  cursor: text;
  line-height: 20px;
  field-sizing: content;
  resize: none;
  min-height: 34px;
  max-height: 144px;

  &::placeholder {
    color: ${_["icn-txt-tert"]};
  }
`,NPe=k.div`
  display: flex;
  align-items: center;
  justify-content: ${({hasText:e})=>e?"flex-end":"center"};
  gap: 4px;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  padding-top: ${({hasText:e})=>e?"4px":"0"};
`,DPe=k.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({hasText:e})=>e?_["sf-prim-cta"]:_["bg-prim-w-90"]};
  border: none;
  color: ${({hasText:e})=>e?_["icn-txt-white"]:_["icn-txt-tert"]};
  cursor: ${({hasText:e})=>e?"pointer":"default"};
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  padding: 0;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({hasText:e})=>e?_["sf-prim-cta-hov"]:_["bg-prim-w-90"]};
  }
`,$M=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: ${_["sf-sec-0-100"]};
  border: 1px solid ${_["brdr-prim-10-80"]};
  cursor: pointer;
  border-radius: 9999px;
  padding: 0;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${_["sf-sec-hov-0-100"]};
    border-color: ${_["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${_["sf-sec-pres-0-100"]};
    border-color: ${_["sf-sec-pres-0-100"]};
  }

  &:disabled {
    background-color: ${_["sf-sec-0-100"]};
    border-color: ${_["brdr-prim-10-80"]};
    pointer-events: none;

    span {
      background-color: ${_["icn-txt-quat"]};
    }
  }
`,BPe=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${_["icn-txt-tert"]};
  cursor: pointer;
  border-radius: 9999px;
  width: 20px;
  height: 20px;
  padding: 0;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${_["bg-prim-w-90"]};
    color: ${_["icn-txt-sec"]};
  }

  &:active {
    background-color: ${_["bg-prim-w-80"]};
  }
`,FPe=k.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  pointer-events: none;
  z-index: 1;
`,UPe=k.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: ${_["bg-tert-20-60"]};
  color: ${_["icn-txt-prim"]};
  ${ne["body-5"]};
`,VPe=k.span`
  ${ne["body-5"]};
  color: ${_["icn-txt-tert"]};
  display: flex;
  align-items: center;
  gap: 4px;
`,qM=k.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`,WM=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`,GM=k.div`
  display: flex;
  align-items: center;
`,zM=k.div`
  display: flex;
  align-items: center;
`,jM=k.div`
  ${ne["heading-5"]};
  color: ${_["icn-txt-prim"]};
`,HM=k.button`
  padding: 6px 12px;
  border-radius: 10px;
  border: none;
  background-color: ${_["sf-prim-cta"]};
  color: ${_["icn-txt-white"]};
  ${ne["heading-6"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${_["sf-prim-cta-pres"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,KM=k.div`
  padding: 16px;
  padding-bottom: ${({hasPopup:e})=>e?"180px":"16px"};
  min-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-user-select: text;
  user-select: text;

  & * {
    -webkit-user-select: text;
    user-select: text;
  }
`,YM=k.div`
  ${ne["body-5"]};
  color: ${_["icn-txt-prim"]};
  margin-bottom: 8px;
`,QM=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,XM=k.div`
  height: 16px;
  border-radius: 6px;
  background: ${_["bg-prim-w-90"]};
  width: ${({width:e})=>e||"80%"};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, ${_["bg-prim-w-80"]}, transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,ZM=k.div`
  padding: 16px;
  color: ${_["icn-txt-crit"]};
`,JM=k.div`
  ${ne["subheading-4"]};
  color: ${_["icn-txt-prim"]};
  margin-bottom: 8px;
`,eL=k.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  ${ne["body-6"]};
  color: ${_["icn-txt-sec"]};
`,tL=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 0;
  width: 100%;
  border-bottom: 2px solid ${_["brdr-prim-10-80"]};
  margin-bottom: 12px;
`,rL=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  flex: 1;
  border-radius: 20px;
  border: none;
  background-color: ${_["sf-sec-0-100"]};
  color: ${_["icn-txt-prim"]};
  ${ne["subheading-6"]};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${_["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${_["sf-sec-pres-0-100"]};
  }
`,nL=k.div`
  display: flex;
  flex-direction: column;
`,oL=k.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${_["bg-prim-w-100"]};
  box-shadow:'0 -4px 32px 0 rgba(0, 0, 0, 0.16)'
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 20px 20px 0px 0px;
`,iL=k.div`
  ${ne["subheading-4"]};
  color: ${_["icn-txt-prim"]};
  text-align: ${({align:e})=>e||"left"};
`,aL=k.div`
  display: flex;
  flex-direction: column;
`,sL=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`,cL=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 32px 24px 32px;
`,lL=k.div`
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
`,vb=k.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${_["sf-sec-0-80"]};

  & svg {
    color: ${_["icn-txt-sec"]};
  }

  &:hover {
    & svg {
      color: ${_["icn-txt-prim"]};
    }
  }
`,uL=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,fL=k.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.15s ease;
`,pL=k.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding: 0 16px 16px 16px;
  width: 100%;
  box-sizing: border-box;
`,dL=k.textarea`
  width: 100%;
  min-height: 160px;
  max-height: 160px;
  height: 160px;
  padding: 10px 12px;
  border: 1px solid ${_["brdr-prim-10-80"]};
  border-radius: 8px;
  background-color: ${_["bg-sec-0-90"]};
  color: ${_["icn-txt-prim"]};
  ${ne["body-6"]};
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${_["sf-prim-cta-electric-w"]};
  }

  &::placeholder {
    color: ${_["icn-txt-tert"]};
  }
`,mL=k.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`,gL=k.div`
  padding: 8px 16px;
  border-radius: 9999px;
  cursor: pointer;
  background-color: ${({selected:e})=>e?_["bg-blue"]:_["sf-sec-0-80"]};
  color: ${({selected:e})=>e?_["icn-txt-blue"]:_["icn-txt-prim"]};
  border: 1px solid ${({selected:e})=>e?_["brdr-blue"]:_["sf-sec-0-80"]};
  ${ne["subheading-6"]};
  transition: all 0.15s ease;
  width: fit-content;

  &:hover {
    background-color: ${({selected:e})=>e?_["bg-blue"]:_["sf-sec-hov-0-80"]};
  }
`,hL=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,yL=k.button`
  padding: 12px 36px;
  border-radius: 9999px;
  border: none;
  ${ne["heading-5"]};
  cursor: pointer;
  transition: background-color 0.15s ease, opacity 0.15s ease;
  width: 100%;
  max-width: 328px;

  background-color: ${_["sf-prim-cta"]};
  color: ${_["icn-txt-white"]};

  &:hover {
    background-color: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${_["sf-prim-cta-pres"]};
  }

  &:disabled {
    background-color: ${_["bg-sec-0-90"]};
    color: ${_["icn-txt-tert"]};
  }
`,xL=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 16px 16px 16px;
  width: 100%;
  box-sizing: border-box;
  height: 522px;
`,bL=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,vL=k.div`
  ${ne["subheading-2"]};
  color: ${_["icn-txt-prim"]};
`,SL=k.div`
  ${ne["body-5"]};
  color: ${_["icn-txt-prim"]};
  text-align: center;
`,CL=k.button`
  padding: 12px 36px;
  border-radius: 9999px;
  border: none;
  ${ne["heading-5"]};
  cursor: pointer;
  background-color: ${_["sf-prim-cta"]};
  color: ${_["icn-txt-white"]};
  width: 100%;
  max-width: 328px;

  &:hover {
    background-color: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${_["sf-prim-cta-pres"]};
  }
`,wL=vo`
  from {
    transform: translateY(200%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,_L=vo`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(200%);
    opacity: 0;
  }
`,EL=k.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${xi+1};

  position: absolute;
  width: 24px;
  height: 24px;
  left: calc(50% - 24px / 2);
  bottom: 8px;

  background: ${_["sf-prim-w-90"]};
  border-radius: 100%;
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;

  &:hover {
    background: ${_["sf-prim-hov-w-90"]};
  }

  &:active {
    background: ${_["sf-prim-pres-w-90"]};
  }

  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  transform: translateY(200%);
  opacity: 0;

  animation: ${({isExiting:e})=>e?_L:wL}
    ${({isExiting:e})=>e?"0.2s ease-in forwards":"0.3s ease-out forwards"};
`,TL=k.div`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
`,IL=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: ${xi};
`,kL=vo`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,RL=vo`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,Sb=k.div`
  position: fixed;
  top: 8px;
  left: 8px;
  right: 8px;
  z-index: 1000;
  animation: ${({isClosing:e})=>e?RL:kL} 0.3s ease-out forwards;
`,Cb=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: ${_["bg-prim-w-100"]};
  border-radius: 16px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.16);
`,wb=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_b=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${_["icn-txt-prim"]};
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`,Eb=k.div`
  ${ne["body-5"]};
  color: ${_["icn-txt-prim"]};
  flex: 1;
`,AL=k.button`
  padding: 4px 12px;
  background: ${_["sf-prim-cta"]};
  color: ${_["icn-txt-white"]};
  border: none;
  border-radius: 9999px;
  ${ne["heading-6"]};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background: ${_["sf-prim-cta-pres"]};
  }
`,Tb=k.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${_["sf-sec-0-80"]};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0;
  flex-shrink: 0;
  color: ${_["icn-txt-sec"]};

  &:hover {
    color: ${_["icn-txt-prim"]};
  }

  &:active {
    color: ${_["icn-txt-prim"]};
  }

  svg {
    width: 8px;
    height: 8px;
  }
`,$Pe=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  ${ne["body-5"]};
  color: ${_["icn-txt-prim"]};
`;a();s();a();s();a();s();var dl=Se(Re());a();s();var fl=Se(Re(),1);function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},So.apply(this,arguments)}var ML=["children","options"];var Ib=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{class:"className",for:"htmlFor"}),kb={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},LL=["style","script","pre"],PL=["src","href","data","formAction","srcDoc","action"],OL=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,NL=/mailto:/i,DL=/\n{2,}$/,Rb=/^(\s*>[\s\S]*?)(?=\n\n|$)/,BL=/^ *> ?/gm,FL=/^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,UL=/^ {2,}\n/,VL=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Ab=/^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,Mb=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,$L=/^(`+)((?:\\`|(?!\1)`|[^`])+)\1/,qL=/^(?:\n *)*\n/,WL=/\r\n?/g,GL=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,zL=/^\[\^([^\]]+)]/,jL=/\f/g,HL=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,KL=/^\s*?\[(x|\s)\]/,Lb=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Pb=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Ob=/^([^\n]+)\n *(=|-){3,} *\n/,od=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,YL=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,Nb=/^<!--[\s\S]*?(?:-->)/,QL=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,id=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,XL=/^\{.*\}$/,ZL=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,JL=/^<([^ >]+@[^ >]+)>/,eP=/^<([^ >]+:\/[^ >]+)>/,tP=/-([a-z])?/gi,Db=/^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,rP=/^[^\n]+(?:  \n|\n{2,})/,nP=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,oP=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,iP=/^\[([^\]]*)\] ?\[([^\]]*)\]/,aP=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,sP=/\t/g,cP=/(^ *\||\| *$)/g,lP=/^ *:-+: *$/,uP=/^ *:-+ *$/,fP=/^ *-+: *$/,pl="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)",pP=RegExp(`^([*_])\\1${pl}\\1\\1(?!\\1)`),dP=RegExp(`^([*_])${pl}\\1(?!\\1)`),mP=RegExp(`^(==)${pl}\\1`),gP=RegExp(`^(~~)${pl}\\1`),hP=/^(:[a-zA-Z0-9-_]+:)/,yP=/^\\([^0-9A-Za-z\s])/,xP=/\\([^0-9A-Za-z\s])/g,bP=/^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/,vP=/^\n+/,SP=/^([ \t]*)/,CP=/(?:^|\n)( *)$/,ud="(?:\\d+\\.)",fd="(?:[*+-])";function Vb(e){return"( *)("+(e===1?ud:fd)+") +"}var $b=Vb(1),qb=Vb(2);function Wb(e){return RegExp("^"+(e===1?$b:qb))}var wP=Wb(1),_P=Wb(2);function Gb(e){return RegExp("^"+(e===1?$b:qb)+"[^\\n]*(?:\\n(?!\\1"+(e===1?ud:fd)+" )[^\\n]*)*(\\n|$)","gm")}var EP=Gb(1),TP=Gb(2);function zb(e){let t=e===1?ud:fd;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}var jb=zb(1),Hb=zb(2);function Bb(e,t){let r=t===1,i=r?jb:Hb,c=r?EP:TP,u=r?wP:_P;return{t:f=>u.test(f),o:bi(function(f,d){let y=CP.exec(d.prevCapture);return y&&(d.list||!d.inline&&!d.simple)?i.exec(f=y[1]+f):null}),i:1,u(f,d,y){let v=r?+f[2]:void 0,S=f[0].replace(DL,`
`).match(c),T=!1;return{items:S.map(function(M,A){let F=u.exec(M)[0].length,B=RegExp("^ {1,"+F+"}","gm"),V=M.replace(B,"").replace(u,""),w=A===S.length-1,P=V.indexOf(`

`)!==-1||w&&T;T=P;let N=y.inline,Q=y.list,j;y.list=!0,P?(y.inline=!1,j=Ia(V)+`

`):(y.inline=!0,j=Ia(V));let X=d(j,y);return y.inline=N,y.list=Q,X}),ordered:r,start:v}},l:(f,d,y)=>e(f.ordered?"ol":"ul",{key:y.key,start:f.type==="20"?f.start:void 0},f.items.map(function(v,S){return e("li",{key:S},d(v,y))}))}}var IP=RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),kP=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;function Ia(e){let t=e.length;for(;t>0&&e[t-1]<=" ";)t--;return e.slice(0,t)}function ll(e,t){return e.startsWith(t)}function RP(e,t,r){if(Array.isArray(r)){for(let i=0;i<r.length;i++)if(ll(e,r[i]))return!0;return!1}return r(e,t)}function Ta(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function AP(e){return fP.test(e)?"right":lP.test(e)?"center":uP.test(e)?"left":null}function Fb(e,t,r,i){let c=r.inTable;r.inTable=!0;let u=[[]],f="";function d(){if(!f)return;let y=u[u.length-1];y.push.apply(y,t(f,r)),f=""}return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((y,v,S)=>{y.trim()==="|"&&(d(),i)?v!==0&&v!==S.length-1&&u.push([]):f+=y}),d(),r.inTable=c,u}function MP(e,t,r){r.inline=!0;let i=e[2]?e[2].replace(cP,"").split("|").map(AP):[],c=e[3]?(function(f,d,y){return f.trim().split(`
`).map(function(v){return Fb(v,d,y,!0)})})(e[3],t,r):[],u=Fb(e[1],t,r,!!c.length);return r.inline=!1,c.length?{align:i,cells:c,header:u,type:"25"}:{children:u,type:"21"}}function Ub(e,t){return e.align[t]==null?{}:{textAlign:e.align[t]}}function bi(e){return e.inline=1,e}function Yn(e){return bi(function(t,r){return r.inline?e.exec(t):null})}function Qn(e){return bi(function(t,r){return r.inline||r.simple?e.exec(t):null})}function xn(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function cl(e){return bi(function(t){return e.exec(t)})}var LP=/(javascript|vbscript|data(?!:image)):/i;function PP(e){try{let t=decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"");if(LP.test(t))return null}catch{return null}return e}function Zr(e){return e&&e.replace(xP,"$1")}function ul(e,t,r){let i=r.inline||!1,c=r.simple||!1;r.inline=!0,r.simple=!0;let u=e(t,r);return r.inline=i,r.simple=c,u}function OP(e,t,r){let i=r.inline||!1,c=r.simple||!1;r.inline=!1,r.simple=!0;let u=e(t,r);return r.inline=i,r.simple=c,u}function NP(e,t,r){let i=r.inline||!1;r.inline=!1;let c=e(t,r);return r.inline=i,c}var ad=(e,t,r)=>({children:ul(t,e[2],r)});function sd(){return{}}function cd(){return null}function DP(...e){return e.filter(Boolean).join(" ")}function ld(e,t,r){let i=e,c=t.split(".");for(;c.length&&(i=i[c[0]],i!==void 0);)c.shift();return i||r}function BP(e="",t={}){t.overrides=t.overrides||{},t.namedCodesToUnicode=t.namedCodesToUnicode?So({},kb,t.namedCodesToUnicode):kb;let r=t.slugify||Ta,i=t.sanitizer||PP,c=t.createElement||fl.createElement,u=[Rb,Ab,Mb,t.enforceAtxHeadings?Pb:Lb,Ob,Db,jb,Hb],f=[...u,rP,od,Nb,id];function d(w,P,...N){let Q=ld(t.overrides,w+".props",{});return c((function(j,X){let $=ld(X,j);return $?typeof $=="function"||typeof $=="object"&&"render"in $?$:ld(X,j+".component",j):j})(w,t.overrides),So({},P,Q,{className:DP(P?.className,Q.className)||void 0}),...N)}function y(w){w=w.replace(HL,"");let P=!1;t.forceInline?P=!0:t.forceBlock||(P=aP.test(w)===!1);let N=F(A(P?w:Ia(w).replace(vP,"")+`

`,{inline:P}));for(;typeof N[N.length-1]=="string"&&!N[N.length-1].trim();)N.pop();if(t.wrapper===null)return N;let Q=t.wrapper||(P?"span":"div"),j;if(N.length>1||t.forceWrapper)j=N;else{if(N.length===1)return j=N[0],typeof j=="string"?d("span",{key:"outer"},j):j;j=null}return c(Q,{key:"outer"},j)}function v(w,P){if(!P||!P.trim())return null;let N=P.match(OL);return N?N.reduce(function(Q,j){let X=j.indexOf("=");if(X!==-1){let $=(function(oe){return oe.indexOf("-")!==-1&&oe.match(QL)===null&&(oe=oe.replace(tP,function(Ae,_e){return _e.toUpperCase()})),oe})(j.slice(0,X)).trim(),ae=(function(oe){let Ae=oe[0];return(Ae==='"'||Ae==="'")&&oe.length>=2&&oe[oe.length-1]===Ae?oe.slice(1,-1):oe})(j.slice(X+1).trim()),ye=Ib[$]||$;if(ye==="ref")return Q;let me=Q[ye]=(function(oe,Ae,_e,Y){return Ae==="style"?(function(he){let ue=[],xe="",Be=!1,Te=!1,Me="";if(!he)return ue;for(let et=0;et<he.length;et++){let qe=he[et];if(qe!=='"'&&qe!=="'"||Be||(Te?qe===Me&&(Te=!1,Me=""):(Te=!0,Me=qe)),qe==="("&&xe.endsWith("url")?Be=!0:qe===")"&&Be&&(Be=!1),qe!==";"||Te||Be)xe+=qe;else{let je=xe.trim();if(je){let ot=je.indexOf(":");if(ot>0){let Ht=je.slice(0,ot).trim(),kt=je.slice(ot+1).trim();ue.push([Ht,kt])}}xe=""}}let st=xe.trim();if(st){let et=st.indexOf(":");if(et>0){let qe=st.slice(0,et).trim(),je=st.slice(et+1).trim();ue.push([qe,je])}}return ue})(_e).reduce(function(he,[ue,xe]){return he[ue.replace(/(-[a-z])/g,Be=>Be[1].toUpperCase())]=Y(xe,oe,ue),he},{}):PL.indexOf(Ae)!==-1?Y(Zr(_e),oe,Ae):(_e.match(XL)&&(_e=Zr(_e.slice(1,_e.length-1))),_e==="true"||_e!=="false"&&_e)})(w,$,ae,i);typeof me=="string"&&(od.test(me)||id.test(me))&&(Q[ye]=y(me.trim()))}else j!=="style"&&(Q[Ib[j]||j]=!0);return Q},{}):null}let S=[],T={},M={0:{t:[">"],o:xn(Rb),i:1,u(w,P,N){let[,Q,j]=w[0].replace(BL,"").match(FL);return{alert:Q,children:P(j,N)}},l(w,P,N){let Q={key:N.key};return w.alert&&(Q.className="markdown-alert-"+r(w.alert.toLowerCase(),Ta),w.children.unshift({attrs:{},children:[{type:"27",text:w.alert}],noInnerParse:!0,type:"11",tag:"header"})),d("blockquote",Q,P(w.children,N))}},1:{o:cl(UL),i:1,u:sd,l:(w,P,N)=>d("br",{key:N.key})},2:{t:w=>{let P=w[0];return P==="-"||P==="*"||P==="_"},o:xn(VL),i:1,u:sd,l:(w,P,N)=>d("hr",{key:N.key})},3:{t:["    "],o:xn(Mb),i:0,u:w=>({lang:void 0,text:Zr(Ia(w[0].replace(/^ {4}/gm,"")))}),l:(w,P,N)=>d("pre",{key:N.key},d("code",So({},w.attrs,{className:w.lang?"lang-"+w.lang:""}),w.text))},4:{t:["```","~~~"],o:xn(Ab),i:0,u:w=>({attrs:v("code",w[3]||""),lang:w[2]||void 0,text:w[4],type:"3"})},5:{t:["`"],o:Qn($L),i:3,u:w=>({text:Zr(w[2])}),l:(w,P,N)=>d("code",{key:N.key},w.text)},6:{t:["[^"],o:xn(GL),i:0,u:w=>(S.push({footnote:w[2],identifier:w[1]}),{}),l:cd},7:{t:["[^"],o:Yn(zL),i:1,u:w=>({target:"#"+r(w[1],Ta),text:w[1]}),l:(w,P,N)=>d("a",{key:N.key,href:i(w.target,"a","href")},d("sup",{key:N.key},w.text))},8:{t:["[ ]","[x]"],o:Yn(KL),i:1,u:w=>({completed:w[1].toLowerCase()==="x"}),l:(w,P,N)=>d("input",{checked:w.completed,key:N.key,readOnly:!0,type:"checkbox"})},9:{t:["#"],o:xn(t.enforceAtxHeadings?Pb:Lb),i:1,u:(w,P,N)=>({children:ul(P,w[2],N),id:r(w[2],Ta),level:w[1].length}),l:(w,P,N)=>d("h"+w.level,{id:w.id,key:N.key},P(w.children,N))},10:{o:xn(Ob),i:0,u:(w,P,N)=>({children:ul(P,w[1],N),level:w[2]==="="?1:2,type:"9"})},11:{t:["<"],o:cl(od),i:1,u(w,P,N){let[,Q]=w[3].match(SP),j=RegExp("^"+Q,"gm"),X=w[3].replace(j,""),$=(ae=X,f.some(_e=>_e.test(ae))?NP:ul);var ae;let ye=w[1].toLowerCase(),me=LL.indexOf(ye)!==-1,oe=(me?ye:w[1]).trim(),Ae={attrs:v(oe,w[2]),noInnerParse:me,tag:oe};if(N.inAnchor=N.inAnchor||ye==="a",me)Ae.text=w[3];else{let _e=N.inHTML;N.inHTML=!0,Ae.children=$(P,X,N),N.inHTML=_e}return N.inAnchor=!1,Ae},l:(w,P,N)=>d(w.tag,So({key:N.key},w.attrs),w.text||(w.children?P(w.children,N):""))},13:{t:["<"],o:cl(id),i:1,u(w){let P=w[1].trim();return{attrs:v(P,w[2]||""),tag:P}},l:(w,P,N)=>d(w.tag,So({},w.attrs,{key:N.key}))},12:{t:["<!--"],o:cl(Nb),i:1,u:()=>({}),l:cd},14:{t:["!["],o:Qn(kP),i:1,u:w=>({alt:Zr(w[1]),target:Zr(w[2]),title:Zr(w[3])}),l:(w,P,N)=>d("img",{key:N.key,alt:w.alt||void 0,title:w.title||void 0,src:i(w.target,"img","src")})},15:{t:["["],o:Yn(IP),i:3,u:(w,P,N)=>({children:OP(P,w[1],N),target:Zr(w[2]),title:Zr(w[3])}),l:(w,P,N)=>d("a",{key:N.key,href:i(w.target,"a","href"),title:w.title},P(w.children,N))},16:{t:["<"],o:Yn(eP),i:0,u:w=>({children:[{text:w[1],type:"27"}],target:w[1],type:"15"})},17:{t:(w,P)=>!P.inAnchor&&!t.disableAutoLink&&(ll(w,"http://")||ll(w,"https://")),o:Yn(ZL),i:0,u:w=>({children:[{text:w[1],type:"27"}],target:w[1],title:void 0,type:"15"})},18:{t:["<"],o:Yn(JL),i:0,u(w){let P=w[1],N=w[1];return NL.test(N)||(N="mailto:"+N),{children:[{text:P.replace("mailto:",""),type:"27"}],target:N,type:"15"}}},20:Bb(d,1),33:Bb(d,2),19:{o:xn(qL),i:3,u:sd,l:()=>`
`},21:{o:bi(function(w,P){if(P.inline||P.simple||P.inHTML&&w.indexOf(`

`)===-1&&P.prevCapture.indexOf(`

`)===-1)return null;let N="";w.split(`
`).every(j=>(j+=`
`,!u.some(X=>X.test(j))&&(N+=j,!!j.trim())));let Q=Ia(N);return Q===""?null:[N,,Q]}),i:3,u:ad,l:(w,P,N)=>d("p",{key:N.key},P(w.children,N))},22:{t:["["],o:Yn(nP),i:0,u:w=>(T[w[1]]={target:w[2],title:w[4]},{}),l:cd},23:{t:["!["],o:Qn(oP),i:0,u:w=>({alt:w[1]?Zr(w[1]):void 0,ref:w[2]}),l:(w,P,N)=>T[w.ref]?d("img",{key:N.key,alt:w.alt,src:i(T[w.ref].target,"img","src"),title:T[w.ref].title}):null},24:{t:w=>w[0]==="["&&w.indexOf("](")===-1,o:Yn(iP),i:0,u:(w,P,N)=>({children:P(w[1],N),fallbackChildren:w[0],ref:w[2]}),l:(w,P,N)=>T[w.ref]?d("a",{key:N.key,href:i(T[w.ref].target,"a","href"),title:T[w.ref].title},P(w.children,N)):d("span",{key:N.key},w.fallbackChildren)},25:{t:["|"],o:xn(Db),i:1,u:MP,l(w,P,N){let Q=w;return d("table",{key:N.key},d("thead",null,d("tr",null,Q.header.map(function(j,X){return d("th",{key:X,style:Ub(Q,X)},P(j,N))}))),d("tbody",null,Q.cells.map(function(j,X){return d("tr",{key:X},j.map(function($,ae){return d("td",{key:ae,style:Ub(Q,ae)},P($,N))}))})))}},27:{o:bi(function(w,P){let N;return ll(w,":")&&(N=hP.exec(w)),N||bP.exec(w)}),i:4,u(w){let P=w[0];return{text:P.indexOf("&")===-1?P:P.replace(YL,(N,Q)=>t.namedCodesToUnicode[Q]||N)}},l:w=>w.text},28:{t:["**","__"],o:Qn(pP),i:2,u:(w,P,N)=>({children:P(w[2],N)}),l:(w,P,N)=>d("strong",{key:N.key},P(w.children,N))},29:{t:w=>{let P=w[0];return(P==="*"||P==="_")&&w[1]!==P},o:Qn(dP),i:3,u:(w,P,N)=>({children:P(w[2],N)}),l:(w,P,N)=>d("em",{key:N.key},P(w.children,N))},30:{t:["\\"],o:Qn(yP),i:1,u:w=>({text:w[1],type:"27"})},31:{t:["=="],o:Qn(mP),i:3,u:ad,l:(w,P,N)=>d("mark",{key:N.key},P(w.children,N))},32:{t:["~~"],o:Qn(gP),i:3,u:ad,l:(w,P,N)=>d("del",{key:N.key},P(w.children,N))}};t.disableParsingRawHTML===!0&&(delete M[11],delete M[13]);let A=(function(w){var P=Object.keys(w);function N(Q,j){var X=[];if(j.prevCapture=j.prevCapture||"",Q.trim())for(;Q;)for(var $=0;$<P.length;){var ae=P[$],ye=w[ae];if(!ye.t||RP(Q,j,ye.t)){var me=ye.o(Q,j);if(me&&me[0]){Q=Q.substring(me[0].length);var oe=ye.u(me,N,j);j.prevCapture+=me[0],oe.type||(oe.type=ae),X.push(oe);break}$++}else $++}return j.prevCapture="",X}return P.sort(function(Q,j){return w[Q].i-w[j].i||(Q<j?-1:1)}),function(Q,j){return N((function(X){return X.replace(WL,`
`).replace(jL,"").replace(sP,"    ")})(Q),j)}})(M),F=(B=(function(w,P){return function(N,Q,j){let X=w[N.type].l;return P?P(()=>X(N,Q,j),N,Q,j):X(N,Q,j)}})(M,t.renderRule),function w(P,N={}){if(Array.isArray(P)){let Q=N.key,j=[],X=!1;for(let $=0;$<P.length;$++){N.key=$;let ae=w(P[$],N),ye=typeof ae=="string";ye&&X?j[j.length-1]+=ae:ae!==null&&j.push(ae),X=ye}return N.key=Q,j}return B(P,w,N)});var B;let V=y(e);return S.length?d("div",null,V,d("footer",{key:"footer"},S.map(function(w){return d("div",{id:r(w.identifier,Ta),key:w.identifier},w.identifier,F(A(w.footnote,{inline:!0})))}))):V}var Kb=e=>{let{children:t="",options:r}=e,i=(function(c,u){if(c==null)return{};var f,d,y={},v=Object.keys(c);for(d=0;d<v.length;d++)u.indexOf(f=v[d])>=0||(y[f]=c[f]);return y})(e,ML);return fl.cloneElement(BP(t,r),i)};a();s();var Ar=Se(Re());function Yb(e,t){let{charsPerFrame:r=3,frameInterval:i=16,enabled:c=!0}=t||{},[u,f]=(0,Ar.useState)(0),d=(0,Ar.useRef)(null),y=(0,Ar.useRef)(0),v=(0,Ar.useRef)(0),S=(0,Ar.useRef)(0);return S.current=u,(0,Ar.useEffect)(()=>{let T=S.current;if(!c){f(e.length),v.current=e.length;return}let M=e.length;if(M<T){f(M),v.current=M;return}if(T>=M){v.current=M;return}let A=F=>{if(F-y.current<i){d.current=requestAnimationFrame(A);return}y.current=F,f(B=>{let V=Math.min(B+r,M);return V>=M?M:(d.current=requestAnimationFrame(A),V)})};return d.current=requestAnimationFrame(A),()=>{d.current&&(cancelAnimationFrame(d.current),d.current=null)}},[e,c,r,i]),(0,Ar.useEffect)(()=>{v.current=e.length},[e]),(0,Ar.useMemo)(()=>({text:e.slice(0,u),isAnimating:c&&u<e.length}),[e,u,c])}var FP=vo`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`,UP=k.div`
  position: relative;
  width: 100%;
  color: ${_["icn-txt-prim"]};
  text-align: left;
  -webkit-user-select: text;
  user-select: text;

  ${({isStreaming:e,isAnimating:t})=>e&&`
    /* Fade mask at the trailing edge while streaming */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 60px;
      height: 1.5em;
      pointer-events: none;
      background: linear-gradient(to right, transparent 0%, ${_["bg-prim-w-110"]} 100%);
      opacity: ${t?1:0};
      transition: opacity 0.3s ease-out;
      animation: ${t?FP:"none"} 1s ease-in-out infinite;
    }
  `}
`,VP=k.h1`
  ${ne["heading-2"]}

  color: var(--text-color-override, ${_["icn-txt-prim"]});

  margin: 0;
  padding: 8px 0 4px;

  &:first-child {
    padding-top: 4px;
  }
`,$P=k.h2`
  ${ne["heading-3"]}

  color: var(--text-color-override, ${_["icn-txt-prim"]});

  margin: 0;
  padding: 16px 0 0;
  &:first-child {
    padding-top: 0;
  }
`,ml=k.h3`
  ${ne["heading-4"]}

  color: var(--text-color-override, ${_["icn-txt-prim"]});

  margin: 0;
  padding: 16px 0 0;
  &:first-child {
    padding-top: 0;
  }
`,qP=k(ml)``,WP=k(ml)``,GP=k(ml)``,zP=k.p`
  ${ne["body-5"]}

  color: var(--text-color-override, ${_["icn-txt-prim"]});

  margin: 0;
  padding: 4px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:is(li > p) {
    padding-top: 0;
    padding-bottom: 0;
  }
`,jP=k.ul`
  ${ne["body-5"]}

  color: var(--text-color-override, ${_["icn-txt-prim"]});
  margin: 0;
  padding: 8px 0 0 20px;
  list-style-type: disc;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:is(li > ul) {
    padding-top: 0;
    padding-bottom: 0;
  }
`,HP=k.ol`
  ${ne["body-5"]}

  color: var(--text-color-override, ${_["icn-txt-prim"]});
  margin: 0;
  padding: 8px 0 0 40px;
  list-style-type: decimal;
  list-style-position: outside;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:is(li > ol) {
    padding-top: 0;
    padding-bottom: 0;
  }
`,KP=k.li`
  padding: 8px 0 0;
  margin: 0;

  &:first-child {
    padding-top: 0;
  }
`,YP=k.strong`
  font-weight: bold;
`,QP=k.em`
  font-style: italic;
`,XP=k.a`
  color: ${_["icn-txt-prim"]};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,ZP=({href:e,children:t,...r})=>m(XP,{href:e,onClick:c=>{c.preventDefault(),e&&(typeof p<"u"&&p.tabs&&p.tabs.create?p.tabs.create({url:e}).catch(()=>{window.open(e,"_blank","noopener,noreferrer")}):window.open(e,"_blank","noopener,noreferrer"))},target:"_blank",rel:"noopener noreferrer",...r},t),Qb=(0,dl.forwardRef)(({content:e,className:t,streaming:r=!1},i)=>{let c=(0,dl.useMemo)(()=>({overrides:{h1:VP,h2:$P,h3:ml,h4:qP,h5:WP,h6:GP,p:zP,ul:jP,ol:HP,li:KP,strong:YP,em:QP,a:{component:ZP}},forceBlock:!0}),[]),{text:u,isAnimating:f}=Yb(e,{enabled:r,charsPerFrame:2,frameInterval:16});return m(UP,{ref:i,className:t,isStreaming:r,isAnimating:f},m(Kb,{options:c},r?u:e))});a();s();a();s();var vOe=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 11;
  background-color: ${_["bg-prim-w-110"]};
`,SOe=k.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'ABC Diatype';
  ${ne["body-5"]};
  color: ${_["icn-txt-tert"]};
  gap: 24px;
  margin-top: ${e=>e.marginTop||"0px"};
  padding-bottom: ${e=>e.paddingBottom||"0px"};
  > span,
  > div {
    padding-left: ${e=>e.paddingLeft||"16px"};
  }
`,COe=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0px;
`,wOe=k.ul`
  list-style-type: disc;
  margin: 0px;
  padding-left: 16px;
`,_Oe=k.li`
  font-style: italic;
`,EOe=k.li`
  ${ne["subheading-6"]};
  color: ${_["icn-txt-tert"]};
  text-align: left;
  width: 100%;
  transition: all 0.2s ease;
  font-style: italic;
`,TOe=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,IOe=k.div`
  height: 36px;
  background: linear-gradient(
    90deg,
    ${_["bg-sec-0-100"]} 25%,
    ${_["bg-tert-10-90"]} 50%,
    ${_["bg-sec-0-100"]} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
  border-radius: 8px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,kOe=k.ul`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  padding: 0 16px;
  margin: 0;
`,ROe=k.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 1px 16px 12px;
  color: ${_["icn-txt-sec"]};
  z-index: ${xi+1};
`,Xb=k.button`
  position: relative;
  background: ${_["bg-sec-0-100"]};
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 44px;
  height: 44px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: ${_["icn-txt-prim"]};
  overflow: hidden;
  flex-shrink: 0;

  & > svg {
    z-index: 1;
  }

  ${({isActive:e})=>e?`background: ${_["sf-sec-pres-0-100"]}`:""};
`,AOe=k(Xb)`
  &:hover {
    background-color: ${_["sf-sec-hov-0-100"]};
  }

  &:active {
    background-color: ${_["sf-sec-pres-0-100"]};
  }
`,MOe=k(Xb)`
  background-color: ${_["sf-crit"]};

  &:hover {
    background-color: ${_["sf-crit-hov"]};
  }

  &:active {
    background-color: ${_["sf-crit-pres"]};
  }
`,LOe=k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: height 0.1s ease-out;
  background-color: ${_["icn-txt-prim-electric"]};
`,POe=k.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(50%, -50%);
`,OOe=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${_["bg-prim-w-110"]};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,NOe=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`,DOe=k.div`
  ${ne["subheading-2"]};
  color: ${_["icn-txt-prim"]};
  text-align: center;
`,BOe=k.div`
  ${ne["body-5"]};
  color: ${_["icn-txt-prim"]};
  text-align: center;
  margin-top: 4px;
`,FOe=k.div`
  background-color: ${_["sf-prim-cta"]};
  border-radius: 8px;
  padding: 10px 24px;
  box-sizing: border-box;
  color: ${_["icn-txt-prim"]};
  ${ne["subheading-6"]};
  margin-top: 8px;

  &:hover {
    background-color: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${_["sf-prim-cta-pres"]};
  }
`,UOe=k.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;

  & [role='action-buttons'] {
    margin-top: auto;
  }
  & [role='bottom-content'] ~ [role='action-buttons'] {
    margin-top: 0;
  }
`,JP=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;JP.defaultProps={role:"bottom-content"};var eO=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  position: relative;
`,tO=k.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${_["icn-txt-prim"]};
`,pd=k.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2.5px;
  margin-top: -2.5px;
  width: 5px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation-timing-function: cubic-bezier(0.14, 1, 0.34, 1);
`,rO=k(pd)`
  animation: thinking-dot-first 1.5s infinite;

  @keyframes thinking-dot-first {
    0% {
      transform: translateX(-100%);
    }

    33% {
      transform: translateX(100%);
    }

    66% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`,nO=k(pd)`
  opacity: 0.5;

  animation: thinking-dot-second 1.5s infinite;

  @keyframes thinking-dot-second {
    0% {
      transform: translateX(0);
    }

    33% {
      transform: translateX(-100%);
    }

    66% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`,oO=k(pd)`
  animation: thinking-dot-third 1.5s infinite;

  @keyframes thinking-dot-third {
    0% {
      transform: translateX(100%);
    }

    33% {
      transform: translateX(0%);
    }

    66% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`,iO=k.div`
  ${ne["body-5"]};
  color: ${_["icn-txt-prim"]};
  display: flex;
  align-items: center;
  gap: 8px;
`;a();s();var aO=Se(Re());a();s();a();s();a();s();var sO=Se(Re());var hNe=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 18px;
  height: 18px;
`,yNe=k.span`
  width: 4px;
  height: ${({height:e})=>`${e}px`};
  border-radius: 9999px;
  background-color: ${({color:e})=>e||_["icn-txt-blue"]};
  transition: height 120ms ease-out, opacity 120ms ease-out;
  opacity: ${({active:e})=>e?1:.55};
`;var RO=Se(Re());a();s();a();s();var kO=Se(u6()),gl=Se(Re());var HNe=k.label`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;

  background-color: ${_["bg-sec-0-100"]};
  border-radius: 24px;

  padding: 10px 8px 10px 16px;
  ${({isMultiline:e})=>e?"padding-bottom: 8px":""};

  cursor: ${e=>e.disabled?"not-allowed":"text"};
  outline: 1px solid ${_["brdr-prim-10-80"]};

  textarea {
    cursor: ${e=>e.disabled?"not-allowed":"text"};
  }
`,KNe=k.textarea`
  width: calc(100% + 6px);
  scrollbar-gutter: stable;
  padding: 0 45px 0 0;
  background: none;
  border: none;
  display: block;
  color: ${_["icn-txt-prim"]};
  ${ne["body-5"]};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
  resize: none;
  max-height: 216px;
  cursor: text;

  ${({isMultiline:e})=>e?"padding-right: 8px;":""};

  &:disabled {
    cursor: not-allowed;
    color: ${_["icn-txt-tert"]};
  }

  &::placeholder {
    color: ${_["icn-txt-tert"]};
  }
`,YNe=k.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${_["sf-prim-cta"]};
  border: none;
  color: ${_["icn-txt-white"]};
  cursor: pointer !important;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  padding: 0;

  &:hover {
    background-color: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${_["sf-prim-cta-pres"]};
  }
`,QNe=k.div`
  position: absolute;
  right: 8px;
  bottom: 6px;

  ${({isMultiline:e})=>e?`
    position: static;
    align-self: flex-end;
  `:""}
`;a();s();var ka=Se(Re());a();s();var AO=Se(Re());var bDe=le("ScribeCSATPopup");a();s();a();s();var yl=Se(Re());a();s();var MO=k.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.16);
`,LO=k.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${_["bg-prim-w-100"]};
  box-shadow: 0 12px 48px -16px rgba(0, 0, 0, 0.24);
`,PO=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-left: 20px;
`,OO=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 16px 16px 8px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${_["icn-txt-prim"]};

  & svg {
    width: 14px;
    height: 14px;
    padding: 3px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`,NO=k.div`
  ${ne["subheading-4"]};
  color: ${_["icn-txt-prim"]};
`,DO=k.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
`,BO=k.div`
  ${ne["heading-6"]};
  color: ${_["icn-txt-prim"]};
  margin-bottom: 4px;
`,FO=k.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  max-height: 160px;
  margin-bottom: 12px;
  overflow-y: auto;
  padding: 8px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${_["bg-prim-w-90"]};
  border: 1.5px solid
    ${({isFocused:e})=>e?_["sf-prim-cta"]:_["brdr-prim-foc"]};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  ${({isFocused:e})=>e&&`
      box-shadow: 0 0 0 1px ${_["sf-prim-cta"]};
    `}
`,UO=k.div`
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 4px 2px 8px;
  border-radius: 24px;
  background-color: ${_["bg-prim-w-100"]};
  border: 1px solid ${_["brdr-prim-10-80"]};
  color: ${_["icn-txt-prim"]};
  ${ne["subheading-6"]};
`,VO=k.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${_["icn-txt-sec"]};
`,$O=k.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,qO=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${_["icn-txt-sec"]};
`,WO=k.input`
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  padding: 4px 0;
  background: transparent;
  color: ${_["icn-txt-prim"]};
  ${ne["body-5"]};

  &::placeholder {
    color: ${_["icn-txt-tert"]};
  }
`,GO=k.button`
  padding: 10px 24px;
  border-radius: 9999px;
  border: none;
  background-color: ${_["sf-prim-cta"]};
  color: ${_["icn-txt-white"]};
  ${ne["heading-6"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${_["sf-prim-cta-hov"]};
  }

  &:active {
    background-color: ${_["sf-prim-cta-pres"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;a();s();var md=Se(Re());var WDe=k.div`
  position: relative;
  display: ${({inline:e=!0,display:t="block"})=>e?"inline-flex":t};

  align-items: center;
  gap: 4px;
`,GDe=k.div`
  position: absolute;

  /* Tooltip arrow pointing right (towards the button) */
  &::after {
    content: '';
    position: absolute;
    border: 4px solid transparent;
  }

  ${({position:e="left"})=>e==="right"?`
      left: calc(100% + 8px); /* Position to the left of the button with 8px gap */
      top: 50%;
      transform: translateY(-50%);
      &::after {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right-color: ${_["bg-tert-inv-60-20"]};
      }`:e==="top"?`
        right: 0;
        top: -18px;
        transform: translateX(calc(50% - 11px)) translateY(-100%);
        &::after {
          top: 100%;
          left: calc(50% - 4px);
          border-top-color: ${_["bg-tert-inv-60-20"]};
        }`:e==="top-left"?`
        right: -2px;
        top: -18px;
        transform: translateY(-100%);
        &::after {
          top: 100%;
          right: 8px;
          border-top-color: ${_["bg-tert-inv-60-20"]};
        }`:e==="top-right"?`
        left: -2px;
        top: -18px;
        transform: translateY(-100%);
        &::after {
          top: 100%;
          left: 8px;
          border-top-color: ${_["bg-tert-inv-60-20"]};
        }`:e==="bottom"?`
        right: 0;
        top: 18px;
        transform: translateX(calc(50% - 11px)) translateY(50%);
        &::after {
          top: -8px;
          left: calc(50% - 4px);
          border-bottom-color: ${_["bg-tert-inv-60-20"]};
        }`:e==="bottom-left"?`
        right: -2px;
        top: 18px;
        transform: translateY(50%);
        &::after {
          top: -8px;
          right: 8px;
          border-bottom-color: ${_["bg-tert-inv-60-20"]};
        }`:e==="bottom-right"?`
        left: -2px;
        top: 18px;
        transform: translateY(50%);
        &::after {
          top: -8px;
          left: 8px;
          border-bottom-color: ${_["bg-tert-inv-60-20"]};
        }`:e==="bottom-center-right"?`
        left: 50%;
        top: 18px;
        transform: translateX(-4px) translateY(50%);
        &::after {
          top: -8px;
          left: 4px;
          border-bottom-color: ${_["bg-tert-inv-60-20"]};
        }`:`
      right: calc(100% + 8px); /* Position to the left of the button with 8px gap */
      top: 50%;
      transform: translateY(-50%);
      &::after {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left-color: ${_["bg-tert-inv-60-20"]};
      }`}

  background-color: ${_["bg-tert-inv-60-20"]};
  color: ${_["icn-txt-prim-inv"]};
  font-size: 0.75rem; /* 12px - body-7 */
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.00375rem;

  padding: 6px 12px 6px 8px; /* top/bottom 6px, left 8px, right 12px */
  border-radius: 4px;
  white-space: nowrap;

  /* Visibility and animation */
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: opacity 0.2s ease, visibility 0.2s ease;

  /* High z-index to ensure it appears above other elements */
  z-index: 1000;

  /* Prevent pointer events on the tooltip itself */
  pointer-events: none;
`;a();s();var f6=Se(Re());a();s();var p6=Se(Re());a();s();var uBe=k.button`
  width: 240px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid transparent;
  gap: 8px;
  padding: 12px 16px;
  background: ${e=>e.disabled?_["bg-sec-0-100"]:_["sf-prim-w-100"]};

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5%;
  color: ${e=>e.disabled?_["icn-txt-sec"]:_["icn-txt-prim"]};

  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${e=>e.disabled?_["bg-sec-0-100"]:_["sf-prim-hov-w-100"]};};
  }

  &:active {
    background-color: ${e=>e.disabled?_["bg-sec-0-100"]:_["sf-prim-pres-w-100"]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,HO=k.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${_["brdr-sec-20-60"]};
  border-top: 2px solid ${_["brdr-tert-40-50"]};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var NBe=le("ScribeMeetingSummarization");a();s();var d6=Se(Re());a();s();var xl=Se(Re());var eFe=le("ScribeTranscriptAccordion");var PFe=le("ScribeView");a();s();a();s();a();s();var m6=le("SharedSettingsStore","green"),Ra=null,Aa=pt()((e,t)=>({voice:null,playbackSpeed:null,voiceTypingSoundEffects:!0,isReady:!1,updateVoice:r=>e({voice:r}),updateSpeed:r=>e({playbackSpeed:r}),updateVoiceTypingSoundEffects:async r=>{let i=t().voiceTypingSoundEffects;e({voiceTypingSoundEffects:r});try{Ra&&await Ra("/user-settings/set-voice-typing-sound-effects",{soundEffectsEnabled:r})}catch(c){m6.error("Failed to save voiceTypingSoundEffects:",c),e({voiceTypingSoundEffects:i})}},initialize:async()=>{if(!(t().isReady||!Ra))try{let r=await Ra("/user-settings/get");e({voice:r.voice||null,playbackSpeed:r.playbackSpeed||null,voiceTypingSoundEffects:r["extension.voiceTyping.soundEffects"]??!0,isReady:!0})}catch(r){m6.error("Failed to initialize shared settings store:",r)}}}));function rUe(e){return Ra=e,Aa.getState().initialize()}function vl(e){let t=Aa.getState(),r={};e.playbackSpeed!=null&&e.playbackSpeed!==t.playbackSpeed&&(r.playbackSpeed=e.playbackSpeed),e.voice!=null&&e.voice!==t.voice&&(r.voice=e.voice),Object.keys(r).length>0&&Aa.setState(r)}var nUe=()=>Aa(e=>e.voice),oUe=()=>Aa(e=>e.playbackSpeed);var Ma=le("SettingsRoutes","green");var La=Vn("settings",{update:async({voice:e,playbackSpeed:t,extensionChatVoiceSpeed:r})=>{try{let i=St.getState();return i.isReady||await i.readinessPromise,i.updateSettings({voice:e,playbackSpeed:t}),vl({voice:e,playbackSpeed:t}),r!==void 0&&St.setState({extensionChatVoiceSpeed:r}),{success:!0,updated:{voice:e!==void 0,playbackSpeed:t!==void 0,extensionChatVoiceSpeed:r!==void 0}}}catch(i){return Ma.error("❌ Failed to update settings:",i),{success:!1,error:i instanceof Error?i.message:String(i)}}},"update-voice":async({voice:e})=>{try{let t=St.getState();return t.isReady||await t.readinessPromise,t.updateVoice(e),vl({voice:e}),{success:!0,voice:e.name}}catch(t){return Ma.error("❌ Failed to update voice:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},"update-speed":async({playbackSpeed:e})=>{try{let t=St.getState();return t.isReady||await t.readinessPromise,t.updateSpeed(e),vl({playbackSpeed:e}),{success:!0,playbackSpeed:e}}catch(t){return Ma.error("❌ Failed to update speed:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}},"get-current":async()=>{try{let e=St.getState();return e.isReady||await e.readinessPromise,{voice:e.voice,playbackSpeed:e.playbackSpeed,isReady:e.isReady}}catch(e){return Ma.error("❌ Failed to get current settings:",e),{voice:null,playbackSpeed:null,isReady:!1,error:e instanceof Error?e.message:String(e)}}},"orchestration-changed":async({domain:e})=>{try{let{invalidateCachedData:t}=await import("./cache-3YCLTJ6U.js"),{websiteFeaturesEmitter:r}=await import("./emitter-IFQXPVVM.js");return t(e),await r.emit("orchestrationChanged",{domain:e}),{success:!0}}catch(t){return Ma.error("Failed to handle orchestration change:",t),{success:!1,error:t instanceof Error?t.message:String(t)}}}});var xUe=le("SettingsFeature","green");a();s();var h6=pt(()=>({totalDuration:null,currentTime:null,isLoading:!1})),gd=({totalDuration:e,currentTime:t,isLoading:r})=>{h6.setState({totalDuration:e,currentTime:t,isLoading:r})},g6=()=>{h6.setState({totalDuration:null,currentTime:null,isLoading:!1})},LUe=async()=>{let{currentUrlMetadata:e}=K.getState(),t=e?.tabId;if(t)try{let r=await Je("/content/get-playback-duration",{tabId:t});r&&r.totalDuration>0?gd({totalDuration:r.totalDuration,currentTime:r.currentTime,isLoading:r.isLoading}):g6()}catch{g6()}};var hr=le("SidepanelRoutes");var y6=Vn("tab-info",{ping:async()=>({message:"pong from sidepanel"}),"stop-playback":async()=>{hr.info("🛑 [SIDEPANEL-ROUTES] Received stop playback request");try{Ls();let{isActive:e}=fn.getState();return e&&(hr.info("🎤 [SIDEPANEL-ROUTES] Stopping voice mode due to content playback"),Mc()),oi()?(hr.info("✅ [SIDEPANEL-ROUTES] Successfully paused sidepanel playback"),{success:!0,paused:!0}):(hr.warn("⚠️ [SIDEPANEL-ROUTES] No orator instance available to stop"),{success:!1,error:"No orator instance available"})}catch(e){return hr.error("❌ [SIDEPANEL-ROUTES] Error stopping sidepanel playback:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"content-available":async({url:e,hasContent:t})=>{hr.info("📨 [SIDEPANEL-ROUTES] Received content availability update:",{url:e,hasContent:t,timestamp:new Date().toISOString()});try{let{default:r}=await import("./TabManager-JZH3Q5ZT.js"),c=r.getInstance().getCurrentTab();if(hr.info("Processing content availability:",{url:e,hasContent:t,currentTabUrl:c?.url,urlMatches:e===c?.url}),e===c?.url){hr.info("✅ Updating sidepanel state - content available:",t);let{updateCurrentUrlState:u}=await import("./actions-RNRUR2N3.js");await u({hasContent:t,contentUpdatedAt:Date.now(),latestTitle:c?.title??""})}else hr.debug("❌ URL mismatch - not updating state:",{messageUrl:e,currentUrl:c?.url});return{success:!0}}catch(r){return hr.error("❌ [SIDEPANEL-ROUTES] Failed to process content availability update:",r),{success:!1,error:r instanceof Error?r.message:String(r)}}},"request-summarization":async()=>{hr.info("📨 [SIDEPANEL-ROUTES] Received summarization request");try{let{default:e}=await import("./TabManager-JZH3Q5ZT.js");return await e.getInstance().handleSummarizationRequest(),hr.info("✅ [SIDEPANEL-ROUTES] Successfully processed summarization request"),{success:!0}}catch(e){return hr.error("❌ [SIDEPANEL-ROUTES] Failed to process summarization request:",e),{success:!1,error:e instanceof Error?e.message:String(e)}}},"playback-duration-update":async({totalDuration:e,currentTime:t,isLoading:r})=>{try{return gd({totalDuration:e,currentTime:t,isLoading:r}),{success:!0}}catch(i){return{success:!1,error:i instanceof Error?i.message:String(i)}}}}),hd={"tab-info":y6,settings:La,scribe:Bc,router:Pp},jUe={"tab-info":y6.resolvers,settings:La.resolvers,router:Pp.resolvers,scribe:Bc.resolvers};var Si=Se(v6());a();s();var S6=le("Sidepanel Listener"),{handleFetch:iN,listen:dVe}=(0,Si.createHermes)({transport:{fetch:async()=>(console.error("Attempted to use unsupported fetch through hermes"),{body:{},meta:{isSuccess:!1}})}}),aN=(e={})=>({body:e,meta:{isSuccess:!0}}),Cd=(e,t)=>({body:t?{}:{message:t},meta:{isSuccess:!1,code:e}}),C6=({path:e,request:t,hash:r,isHermes:i,target:c},u,f)=>{if(!i||c!=="sidepanel")return;t={body:{...t?.body??{}},meta:{...t?.meta??{},tabId:u.tab?.id}};let d=Xs({hash:r,label:"Sidepanel Listen",labelCSS:"color: #ff9500",logInfo:()=>{console.info("Sender",u),ao(t)},path:e}),y=e.split("/").filter(Boolean),v=y[0];if(v in hd){let S=hd[v];if(!(y.slice(1).join("/")in S.resolvers)){d({isSuccess:!1,logInfo:()=>{console.info("Sender",u)}}),f(Cd(Si.CodesEnum.NotFound));return}return S.handleRequest(y.slice(1).join("/"),t.body,{meta:t.meta}).then(M=>{let A=aN(M);d({isSuccess:!0,logInfo:()=>{console.info("Sender",u),ao(A)}}),f(A)}).catch(M=>{d({isSuccess:!1,logInfo:()=>{console.info("Sender",u),M?.message?console.error(M.message):console.error(M)}}),f(Cd(M.code??Si.CodesEnum.Unknown,M.message))}),!0}return iN(e,t).then(S=>{d({isSuccess:S.meta.isSuccess,logInfo:()=>{console.info("Sender",u),ao(S)}}),f(S)}).catch(S=>{d({isSuccess:!1,logInfo:()=>{console.info("Sender",u),S?.message?console.error(S.message):console.error(S)}}),f(Cd(S.code??Si.CodesEnum.Unknown,S.message))}),!0};p.runtime.onMessage.addListener(C6);var wd=async()=>{try{p.runtime.onMessage.removeListener(C6)}catch(e){S6.error("Failed to remove message listener:",e)}try{oi()}catch(e){S6.error("Failed to stop sidepanel playback during cleanup:",e)}};window.addEventListener("beforeunload",wd);window.addEventListener("unload",wd);window.addEventListener("pagehide",wd);export{pn as a,zo as b,_ as c,le as d,op as e,dg as f,o7 as g,i7 as h,xg as i,Re as j,pt as k,Je as l,K as m,Os as n,Yi as o,N4e as p,D4e as q,Zy as r,B4e as s,F4e as t,U4e as u,V4e as v,j4e as w,H4e as x,K4e as y,Y4e as z,Q4e as A,X4e as B,Jy as C,s9e as D,Vf as E,$f as F,c9e as G,l9e as H,u9e as I,f9e as J,p9e as K,d9e as L,m9e as M,w9e as N,e2 as O,_9e as P,E9e as Q,T9e as R,I9e as S,k9e as T,R9e as U,A9e as V,D9e as W,B9e as X,F9e as Y,U9e as Z,$i as _,$0 as $,Ki as aa,DF as ba,BF as ca,FF as da,xE as ea,SE as fa,UF as ga,CE as ha,VF as ia,$F as ja,qF as ka,WF as la,GF as ma,KF as na,ey as oa,eU as pa,Ls as qa,po as ra,Yf as sa,Qo as ta,ak as ua,ho as va,Tx as wa,Zx as xa,Jx as ya,rIe as za,nIe as Aa,oIe as Ba,iIe as Ca,Lp as Da,oi as Ea,aIe as Fa,Wp as Ga,vo as Ha,k as Ia,ne as Ja,s6 as Ka,u6 as La,Aa as Ma,rUe as Na,nUe as Oa,oUe as Pa,g6 as Qa,LUe as Ra,dVe as Sa,H9e as Ta,Z9e as Ua,g5e as Va,qf as Wa,r2 as Xa,h5e as Ya,y5e as Za,x5e as _a,b5e as $a,v5e as ab,FI as bb,S5e as cb,C5e as db,St as eb,GI as fb,mCe as gb,ia as hb,zI as ib,$Ce as jb,qCe as kb};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-3PQTWLYZ.js.map
