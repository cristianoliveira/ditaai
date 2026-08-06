(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{a as qn,b as Un,c as $n,f as Wn,h as Vn,j as zn,k as Gn,l as Kn}from"./chunk-QUDRWGSM.js";import{a as Fn}from"./chunk-6NGJBYOA.js";import"./chunk-MX4B3ZXQ.js";import"./chunk-VHR3YMWS.js";import{a as Bn}from"./chunk-SP7JKGLV.js";import{a as Be}from"./chunk-4JXL3YI4.js";import{a as jn}from"./chunk-KND3LZ4C.js";import{a as ee,b as Tn,d as kn,e as Ln,f as An}from"./chunk-BMWEWJGH.js";import"./chunk-VBM62247.js";import{b as Mn}from"./chunk-RERBL2EJ.js";import"./chunk-SJAKNTE2.js";import"./chunk-DGL3OLHJ.js";import{a as Nn}from"./chunk-BNLUYRWA.js";import{a as wn}from"./chunk-WZISEHT3.js";import{d as Cn}from"./chunk-S3CZJONR.js";import"./chunk-WER3GEG4.js";import{h as $,m as D}from"./chunk-ER3BBI6X.js";import{a as H}from"./chunk-436MFEND.js";import"./chunk-UBYLRYAE.js";import{a as je,b as Yn}from"./chunk-OL6C3BKH.js";import"./chunk-2MJTQY6T.js";import{$g as qe,A as bt,Ab as mn,Bb as St,C as an,Cb as hn,Dd as _n,E as G,Fc as vn,Jd as Pn,M as ln,Mc as Sn,Nf as Ct,Od as Rn,Of as xt,Pf as Ne,Q as cn,Qf as Fe,Rf as U,S as fn,Yc as wt,Yg as Qn,Zd as En,Zg as Jn,ac as yn,ah as Xn,b as Me,ch as Zn,db as dn,e as J,gb as gn,h as sn,hf as Dn,md as le,nb as pn,pd as xn,qd as On,rb as vt,t as un,td as In,ug as Ot,z as yt}from"./chunk-324T2OUF.js";import{a as Ae}from"./chunk-JJ7NA4NT.js";import{a as rn,ba as bn,ca as ae,e as on,i as v,j as ht,l as m,n as ue}from"./chunk-KJ3NFIHV.js";import{a as Le,b as z,d as nn,f as se,g as P}from"./chunk-H3LCZSHS.js";import{M as tn}from"./chunk-FLMM6JC5.js";import"./chunk-Y6YYRFL5.js";import"./chunk-664ANS6R.js";import"./chunk-NUSU6NTI.js";import{b as M,d as k,f as b,g as f,i as a,j as h,k as Se,m as en,n as d}from"./chunk-CAO5DZGK.js";var _r=M((vc,Ir)=>{"use strict";d();f();var yi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Ir.exports=yi});var Dr=M((Cc,Er)=>{"use strict";d();f();var bi=_r();function Pr(){}function Rr(){}Rr.resetWarningCache=Pr;Er.exports=function(){function e(o,r,i,s,l,u){if(u!==bi){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rr,resetWarningCache:Pr};return n.PropTypes=n,n}});var pe=M((Pc,Tr)=>{d();f();Tr.exports=Dr()();var Ic,_c});var Lr=M((Dc,kr)=>{"use strict";d();f();function vi(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var o=0;o<n;o++)if(e[o]!==t[o])return!1;return!0}kr.exports=vi});var Nr=M((Lc,Mr)=>{"use strict";d();f();var Ar=(function(){function e(t,n){var o=[],r=!0,i=!1,s=void 0;try{for(var l=t[Symbol.iterator](),u;!(r=(u=l.next()).done)&&(o.push(u.value),!(n&&o.length===n));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&l.return&&l.return()}finally{if(i)throw s}}return o}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})();Mr.exports=function(e){var t=e.data,n=e.multiSection;function o(u){for(u===null?u=0:u++;u<t.length&&t[u]===0;)u++;return u===t.length?null:u}function r(u){for(u===null?u=t.length-1:u--;u>=0&&t[u]===0;)u--;return u===-1?null:u}function i(u){var c=Ar(u,2),g=c[0],p=c[1];return n?p===null||p===t[g]-1?(g=o(g),g===null?[null,null]:[g,0]):[g,p+1]:t===0||p===t-1?[null,null]:p===null?[null,0]:[null,p+1]}function s(u){var c=Ar(u,2),g=c[0],p=c[1];return n?p===null||p===0?(g=r(g),g===null?[null,null]:[g,t[g]-1]):[g,p-1]:t===0||p===0?[null,null]:p===null?[null,t-1]:[null,p-1]}function l(u){return i(u)[1]===null}return{next:i,prev:s,isLast:l}}});var Br=M((Nc,Fr)=>{"use strict";d();f();var Si=Object.prototype.propertyIsEnumerable;function wi(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Ci(e){var t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t.filter(function(n){return Si.call(e,n)})}Fr.exports=Object.assign||function(e,t){for(var n,o,r=wi(e),i=1;i<arguments.length;i++){n=arguments[i],o=Ci(Object(n));for(var s=0;s<o.length;s++)r[o[s]]=n[o[s]]}return r}});var Ur=M((Qe,qr)=>{"use strict";d();f();Object.defineProperty(Qe,"__esModule",{value:!0});var xi=(function(){function e(t,n){var o=[],r=!0,i=!1,s=void 0;try{for(var l=t[Symbol.iterator](),u;!(r=(u=l.next()).done)&&(o.push(u.value),!(n&&o.length===n));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&l.return&&l.return()}finally{if(i)throw s}}return o}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})();function Oi(e){return e&&e.__esModule?e:{default:e}}function jr(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var Ii=Br(),_i=Oi(Ii),Pi=function(t){return t};Qe.default=function(e){var t=Array.isArray(e)&&e.length===2?e:[e,null],n=xi(t,2),o=n[0],r=n[1];return function(i){for(var s=arguments.length,l=Array(s>1?s-1:0),u=1;u<s;u++)l[u-1]=arguments[u];var c=l.map(function(g){return o[g]}).filter(Pi);return typeof c[0]=="string"||typeof r=="function"?{key:i,className:r?r.apply(void 0,jr(c)):c.join(" ")}:{key:i,style:_i.default.apply(void 0,[{}].concat(jr(c)))}}};qr.exports=Qe.default});var Je=M(kt=>{"use strict";d();f();Object.defineProperty(kt,"__esModule",{value:!0});kt.default=Ri;function Oe(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oe=function(n){return typeof n}:Oe=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oe(e)}function Ri(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(e===t)return!1;var o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!0;var i={},s,l;for(s=0,l=n.length;s<l;s++)i[n[s]]=!0;for(s=0,l=o.length;s<l;s++){var u=o[s],c=e[u],g=t[u];if(c!==g){if(!i[u]||c===null||g===null||Oe(c)!=="object"||Oe(g)!=="object")return!0;var p=Object.keys(c),S=Object.keys(g);if(p.length!==S.length)return!0;for(var y=0,w=p.length;y<w;y++){var O=p[y];if(c[O]!==g[O])return!0}}}return!1}});var Kr=M(He=>{"use strict";d();f();Object.defineProperty(He,"__esModule",{value:!0});He.default=void 0;var $r=Di(P()),Xe=Vr(pe()),Ei=Vr(Je());function Vr(e){return e&&e.__esModule?e:{default:e}}function zr(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return zr=function(){return e},e}function Di(e){if(e&&e.__esModule)return e;if(e===null||Ie(e)!=="object"&&typeof e!="function")return{default:e};var t=zr();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}function Ie(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ie=function(n){return typeof n}:Ie=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ie(e)}function Ti(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wr(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ki(e,t,n){return t&&Wr(e.prototype,t),n&&Wr(e,n),e}function Li(e){return function(){var t=Ze(e),n;if(Ni()){var o=Ze(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return Ai(this,n)}}function Ai(e,t){return t&&(Ie(t)==="object"||typeof t=="function")?t:Mi(e)}function Mi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ni(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ze(e){return Ze=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ze(e)}function Fi(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Lt(e,t)}function Lt(e,t){return Lt=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},Lt(e,t)}function Bi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gr=(function(e){Fi(n,e);var t=Li(n);function n(){return Ti(this,n),t.apply(this,arguments)}return ki(n,[{key:"shouldComponentUpdate",value:function(r){return(0,Ei.default)(r,this.props)}},{key:"render",value:function(){var r=this.props,i=r.section,s=r.renderSectionTitle,l=r.theme,u=r.sectionKeyPrefix,c=s(i);return c?$r.default.createElement("div",l("".concat(u,"title"),"sectionTitle"),c):null}}]),n})($r.Component);He.default=Gr;Bi(Gr,"propTypes",{section:Xe.default.any.isRequired,renderSectionTitle:Xe.default.func.isRequired,theme:Xe.default.func.isRequired,sectionKeyPrefix:Xe.default.string.isRequired})});var eo=M(tt=>{"use strict";d();f();Object.defineProperty(tt,"__esModule",{value:!0});tt.default=void 0;var Yr=qi(P()),K=Xr(pe()),ji=Xr(Je());function Xr(e){return e&&e.__esModule?e:{default:e}}function Zr(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Zr=function(){return e},e}function qi(e){if(e&&e.__esModule)return e;if(e===null||_e(e)!=="object"&&typeof e!="function")return{default:e};var t=Zr();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}function _e(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_e=function(n){return typeof n}:_e=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_e(e)}function At(){return At=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},At.apply(this,arguments)}function Qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Ui(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qr(Object(n),!0).forEach(function(o){oe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qr(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function $i(e,t){if(e==null)return{};var n=Wi(e,t),o,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Wi(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,i;for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Vi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jr(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function zi(e,t,n){return t&&Jr(e.prototype,t),n&&Jr(e,n),e}function Gi(e){return function(){var t=et(e),n;if(Yi()){var o=et(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return Ki(this,n)}}function Ki(e,t){return t&&(_e(t)==="object"||typeof t=="function")?t:me(e)}function me(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Yi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function et(e){return et=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},et(e)}function Qi(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Mt(e,t)}function Mt(e,t){return Mt=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},Mt(e,t)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Hr=(function(e){Qi(n,e);var t=Gi(n);function n(){var o;Vi(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=t.call.apply(t,[this].concat(i)),oe(me(o),"storeItemReference",function(l){l!==null&&(o.item=l)}),oe(me(o),"onMouseEnter",function(l){var u=o.props,c=u.sectionIndex,g=u.itemIndex;o.props.onMouseEnter(l,{sectionIndex:c,itemIndex:g})}),oe(me(o),"onMouseLeave",function(l){var u=o.props,c=u.sectionIndex,g=u.itemIndex;o.props.onMouseLeave(l,{sectionIndex:c,itemIndex:g})}),oe(me(o),"onMouseDown",function(l){var u=o.props,c=u.sectionIndex,g=u.itemIndex;o.props.onMouseDown(l,{sectionIndex:c,itemIndex:g})}),oe(me(o),"onClick",function(l){var u=o.props,c=u.sectionIndex,g=u.itemIndex;o.props.onClick(l,{sectionIndex:c,itemIndex:g})}),o}return zi(n,[{key:"shouldComponentUpdate",value:function(r){return(0,ji.default)(r,this.props,["renderItemData"])}},{key:"render",value:function(){var r=this.props,i=r.isHighlighted,s=r.item,l=r.renderItem,u=r.renderItemData,c=$i(r,["isHighlighted","item","renderItem","renderItemData"]);return delete c.sectionIndex,delete c.itemIndex,typeof c.onMouseEnter=="function"&&(c.onMouseEnter=this.onMouseEnter),typeof c.onMouseLeave=="function"&&(c.onMouseLeave=this.onMouseLeave),typeof c.onMouseDown=="function"&&(c.onMouseDown=this.onMouseDown),typeof c.onClick=="function"&&(c.onClick=this.onClick),Yr.default.createElement("li",At({role:"option"},c,{ref:this.storeItemReference}),l(s,Ui({isHighlighted:i},u)))}}]),n})(Yr.Component);tt.default=Hr;oe(Hr,"propTypes",{sectionIndex:K.default.number,isHighlighted:K.default.bool.isRequired,itemIndex:K.default.number.isRequired,item:K.default.any.isRequired,renderItem:K.default.func.isRequired,renderItemData:K.default.object.isRequired,onMouseEnter:K.default.func,onMouseLeave:K.default.func,onMouseDown:K.default.func,onClick:K.default.func})});var io=M(it=>{"use strict";d();f();Object.defineProperty(it,"__esModule",{value:!0});it.default=void 0;var Nt=Zi(P()),j=Bt(pe()),Ji=Bt(eo()),Xi=Bt(Je());function Bt(e){return e&&e.__esModule?e:{default:e}}function ro(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return ro=function(){return e},e}function Zi(e){if(e&&e.__esModule)return e;if(e===null||Pe(e)!=="object"&&typeof e!="function")return{default:e};var t=ro();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}function Pe(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pe=function(n){return typeof n}:Pe=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pe(e)}function nt(){return nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},nt.apply(this,arguments)}function to(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Hi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?to(Object(n),!0).forEach(function(o){ot(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function es(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function no(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ts(e,t,n){return t&&no(e.prototype,t),n&&no(e,n),e}function ns(e){return function(){var t=rt(e),n;if(os()){var o=rt(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return rs(this,n)}}function rs(e,t){return t&&(Pe(t)==="object"||typeof t=="function")?t:oo(e)}function oo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function os(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function rt(e){return rt=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},rt(e)}function is(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ft(e,t)}function Ft(e,t){return Ft=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},Ft(e,t)}function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var jt=(function(e){is(n,e);var t=ns(n);function n(){var o;es(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=t.call.apply(t,[this].concat(i)),ot(oo(o),"storeHighlightedItemReference",function(l){o.props.onHighlightedItemChange(l===null?null:l.item)}),o}return ts(n,[{key:"shouldComponentUpdate",value:function(r){return(0,Xi.default)(r,this.props,["itemProps"])}},{key:"render",value:function(){var r=this,i=this.props,s=i.items,l=i.itemProps,u=i.renderItem,c=i.renderItemData,g=i.sectionIndex,p=i.highlightedItemIndex,S=i.getItemId,y=i.theme,w=i.keyPrefix,O=g===null?w:"".concat(w,"section-").concat(g,"-"),C=typeof l=="function";return Nt.default.createElement("ul",nt({role:"listbox"},y("".concat(O,"items-list"),"itemsList")),s.map(function(x,I){var N=I===0,_=I===p,F="".concat(O,"item-").concat(I),V=C?l({sectionIndex:g,itemIndex:I}):l,q=Hi({id:S(g,I),"aria-selected":_},y(F,"item",N&&"itemFirst",_&&"itemHighlighted"),{},V);return _&&(q.ref=r.storeHighlightedItemReference),Nt.default.createElement(Ji.default,nt({},q,{sectionIndex:g,isHighlighted:_,itemIndex:I,item:x,renderItem:u,renderItemData:c}))}))}}]),n})(Nt.Component);it.default=jt;ot(jt,"propTypes",{items:j.default.array.isRequired,itemProps:j.default.oneOfType([j.default.object,j.default.func]),renderItem:j.default.func.isRequired,renderItemData:j.default.object.isRequired,sectionIndex:j.default.number,highlightedItemIndex:j.default.number,onHighlightedItemChange:j.default.func.isRequired,getItemId:j.default.func.isRequired,theme:j.default.func.isRequired,keyPrefix:j.default.string.isRequired});ot(jt,"defaultProps",{sectionIndex:null})});var fo=M(at=>{"use strict";d();f();Object.defineProperty(at,"__esModule",{value:!0});at.default=void 0;var ne=ls(P()),E=Re(pe()),ss=Re(Nr()),us=Re(Ur()),as=Re(Kr()),so=Re(io());function Re(e){return e&&e.__esModule?e:{default:e}}function co(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return co=function(){return e},e}function ls(e){if(e&&e.__esModule)return e;if(e===null||he(e)!=="object"&&typeof e!="function")return{default:e};var t=co();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}function uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function qt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uo(Object(n),!0).forEach(function(o){Y(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uo(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function cs(e,t){return ps(e)||gs(e,t)||ds(e,t)||fs()}function fs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ds(e,t){if(e){if(typeof e=="string")return ao(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ao(e,t)}}function ao(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function gs(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],o=!0,r=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(o=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));o=!0);}catch(u){r=!0,i=u}finally{try{!o&&s.return!=null&&s.return()}finally{if(r)throw i}}return n}}function ps(e){if(Array.isArray(e))return e}function he(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?he=function(n){return typeof n}:he=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},he(e)}function ms(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lo(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function hs(e,t,n){return t&&lo(e.prototype,t),n&&lo(e,n),e}function ys(e){return function(){var t=ut(e),n;if(vs()){var o=ut(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return bs(this,n)}}function bs(e,t){return t&&(he(t)==="object"||typeof t=="function")?t:te(e)}function te(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ut(e){return ut=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ut(e)}function Ss(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ut(e,t)}function Ut(e,t){return Ut=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},Ut(e,t)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var st={},ws=function(t){return ne.default.createElement("input",t)},Cs=function(t){var n=t.containerProps,o=t.children;return ne.default.createElement("div",n,o)},xs={container:"react-autowhatever__container",containerOpen:"react-autowhatever__container--open",input:"react-autowhatever__input",inputOpen:"react-autowhatever__input--open",inputFocused:"react-autowhatever__input--focused",itemsContainer:"react-autowhatever__items-container",itemsContainerOpen:"react-autowhatever__items-container--open",itemsList:"react-autowhatever__items-list",item:"react-autowhatever__item",itemFirst:"react-autowhatever__item--first",itemHighlighted:"react-autowhatever__item--highlighted",sectionContainer:"react-autowhatever__section-container",sectionContainerFirst:"react-autowhatever__section-container--first",sectionTitle:"react-autowhatever__section-title"},$t=(function(e){Ss(n,e);var t=ys(n);function n(o){var r;return ms(this,n),r=t.call(this,o),Y(te(r),"storeInputReference",function(i){i!==null&&(r.input=i);var s=r.props.inputProps.ref;s&&(typeof s=="function"?s(i):he(s)==="object"&&Object.prototype.hasOwnProperty.call(s,"current")&&(s.current=i))}),Y(te(r),"storeItemsContainerReference",function(i){i!==null&&(r.itemsContainer=i)}),Y(te(r),"onHighlightedItemChange",function(i){r.highlightedItem=i}),Y(te(r),"getItemId",function(i,s){if(s===null)return null;var l=r.props.id,u=i===null?"":"section-".concat(i);return"react-autowhatever-".concat(l,"-").concat(u,"-item-").concat(s)}),Y(te(r),"onFocus",function(i){var s=r.props.inputProps;r.setState({isInputFocused:!0}),s.onFocus&&s.onFocus(i)}),Y(te(r),"onBlur",function(i){var s=r.props.inputProps;r.setState({isInputFocused:!1}),s.onBlur&&s.onBlur(i)}),Y(te(r),"onKeyDown",function(i){var s=r.props,l=s.inputProps,u=s.highlightedSectionIndex,c=s.highlightedItemIndex,g=i.keyCode;switch(g){case 40:case 38:{var p=g===40?"next":"prev",S=r.sectionIterator[p]([u,c]),y=cs(S,2),w=y[0],O=y[1];l.onKeyDown(i,{newHighlightedSectionIndex:w,newHighlightedItemIndex:O});break}default:l.onKeyDown(i,{highlightedSectionIndex:u,highlightedItemIndex:c})}}),r.highlightedItem=null,r.state={isInputFocused:!1},r.setSectionsItems(o),r.setSectionIterator(o),r.setTheme(o),r}return hs(n,[{key:"componentDidMount",value:function(){this.ensureHighlightedItemIsVisible()}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){r.items!==this.props.items&&this.setSectionsItems(r),(r.items!==this.props.items||r.multiSection!==this.props.multiSection)&&this.setSectionIterator(r),r.theme!==this.props.theme&&this.setTheme(r)}},{key:"componentDidUpdate",value:function(){this.ensureHighlightedItemIsVisible()}},{key:"setSectionsItems",value:function(r){r.multiSection&&(this.sectionsItems=r.items.map(function(i){return r.getSectionItems(i)}),this.sectionsLengths=this.sectionsItems.map(function(i){return i.length}),this.allSectionsAreEmpty=this.sectionsLengths.every(function(i){return i===0}))}},{key:"setSectionIterator",value:function(r){this.sectionIterator=(0,ss.default)({multiSection:r.multiSection,data:r.multiSection?this.sectionsLengths:r.items.length})}},{key:"setTheme",value:function(r){this.theme=(0,us.default)(r.theme)}},{key:"renderSections",value:function(){var r=this;if(this.allSectionsAreEmpty)return null;var i=this.theme,s=this.props,l=s.id,u=s.items,c=s.renderItem,g=s.renderItemData,p=s.renderSectionTitle,S=s.highlightedSectionIndex,y=s.highlightedItemIndex,w=s.itemProps;return u.map(function(O,C){var x="react-autowhatever-".concat(l,"-"),I="".concat(x,"section-").concat(C,"-"),N=C===0;return ne.default.createElement("div",i("".concat(I,"container"),"sectionContainer",N&&"sectionContainerFirst"),ne.default.createElement(as.default,{section:O,renderSectionTitle:p,theme:i,sectionKeyPrefix:I}),ne.default.createElement(so.default,{items:r.sectionsItems[C],itemProps:w,renderItem:c,renderItemData:g,sectionIndex:C,highlightedItemIndex:S===C?y:null,onHighlightedItemChange:r.onHighlightedItemChange,getItemId:r.getItemId,theme:i,keyPrefix:x,ref:r.storeItemsListReference}))})}},{key:"renderItems",value:function(){var r=this.props.items;if(r.length===0)return null;var i=this.theme,s=this.props,l=s.id,u=s.renderItem,c=s.renderItemData,g=s.highlightedSectionIndex,p=s.highlightedItemIndex,S=s.itemProps;return ne.default.createElement(so.default,{items:r,itemProps:S,renderItem:u,renderItemData:c,highlightedItemIndex:g===null?p:null,onHighlightedItemChange:this.onHighlightedItemChange,getItemId:this.getItemId,theme:i,keyPrefix:"react-autowhatever-".concat(l,"-")})}},{key:"ensureHighlightedItemIsVisible",value:function(){var r=this.highlightedItem;if(r){var i=this.itemsContainer,s=r.offsetParent===i?r.offsetTop:r.offsetTop-i.offsetTop,l=i.scrollTop;s<l?l=s:s+r.offsetHeight>l+i.offsetHeight&&(l=s+r.offsetHeight-i.offsetHeight),l!==i.scrollTop&&(i.scrollTop=l)}}},{key:"render",value:function(){var r=this.theme,i=this.props,s=i.id,l=i.multiSection,u=i.renderInputComponent,c=i.renderItemsContainer,g=i.highlightedSectionIndex,p=i.highlightedItemIndex,S=this.state.isInputFocused,y=l?this.renderSections():this.renderItems(),w=y!==null,O=this.getItemId(g,p),C="react-autowhatever-".concat(s),x=qt({role:"combobox","aria-haspopup":"listbox","aria-owns":C,"aria-expanded":w},r("react-autowhatever-".concat(s,"-container"),"container",w&&"containerOpen"),{},this.props.containerProps),I=u(qt({type:"text",value:"",autoComplete:"off","aria-autocomplete":"list","aria-controls":C,"aria-activedescendant":O},r("react-autowhatever-".concat(s,"-input"),"input",w&&"inputOpen",S&&"inputFocused"),{},this.props.inputProps,{onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.props.inputProps.onKeyDown&&this.onKeyDown,ref:this.storeInputReference})),N=c({containerProps:qt({id:C,role:"listbox"},r("react-autowhatever-".concat(s,"-items-container"),"itemsContainer",w&&"itemsContainerOpen"),{ref:this.storeItemsContainerReference}),children:y});return ne.default.createElement("div",x,I,N)}}]),n})(ne.Component);at.default=$t;Y($t,"propTypes",{id:E.default.string,multiSection:E.default.bool,renderInputComponent:E.default.func,renderItemsContainer:E.default.func,items:E.default.array.isRequired,renderItem:E.default.func,renderItemData:E.default.object,renderSectionTitle:E.default.func,getSectionItems:E.default.func,containerProps:E.default.object,inputProps:E.default.object,itemProps:E.default.oneOfType([E.default.object,E.default.func]),highlightedSectionIndex:E.default.number,highlightedItemIndex:E.default.number,theme:E.default.oneOfType([E.default.object,E.default.array])});Y($t,"defaultProps",{id:"1",multiSection:!1,renderInputComponent:ws,renderItemsContainer:Cs,renderItem:function(){throw new Error("`renderItem` must be provided")},renderItemData:st,renderSectionTitle:function(){throw new Error("`renderSectionTitle` must be provided")},getSectionItems:function(){throw new Error("`getSectionItems` must be provided")},containerProps:st,inputProps:st,itemProps:st,highlightedSectionIndex:null,highlightedItemIndex:null,theme:xs})});var go=M(ye=>{"use strict";d();f();Object.defineProperty(ye,"__esModule",{value:!0});ye.mapToAutowhateverTheme=ye.defaultTheme=void 0;var Os={container:"react-autosuggest__container",containerOpen:"react-autosuggest__container--open",input:"react-autosuggest__input",inputOpen:"react-autosuggest__input--open",inputFocused:"react-autosuggest__input--focused",suggestionsContainer:"react-autosuggest__suggestions-container",suggestionsContainerOpen:"react-autosuggest__suggestions-container--open",suggestionsList:"react-autosuggest__suggestions-list",suggestion:"react-autosuggest__suggestion",suggestionFirst:"react-autosuggest__suggestion--first",suggestionHighlighted:"react-autosuggest__suggestion--highlighted",sectionContainer:"react-autosuggest__section-container",sectionContainerFirst:"react-autosuggest__section-container--first",sectionTitle:"react-autosuggest__section-title"};ye.defaultTheme=Os;var Is=function(t){var n={};for(var o in t)switch(o){case"suggestionsContainer":n.itemsContainer=t[o];break;case"suggestionsContainerOpen":n.itemsContainerOpen=t[o];break;case"suggestion":n.item=t[o];break;case"suggestionFirst":n.itemFirst=t[o];break;case"suggestionHighlighted":n.itemHighlighted=t[o];break;case"suggestionsList":n.itemsList=t[o];break;default:n[o]=t[o]}return n};ye.mapToAutowhateverTheme=Is});var Oo=M(ct=>{"use strict";d();f();Object.defineProperty(ct,"__esModule",{value:!0});ct.default=void 0;var Wt=Ps(P()),L=zt(pe()),po=zt(Lr()),_s=zt(fo()),Co=go();function zt(e){return e&&e.__esModule?e:{default:e}}function xo(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return xo=function(){return e},e}function Ps(e){if(e&&e.__esModule)return e;if(e===null||Ee(e)!=="object"&&typeof e!="function")return{default:e};var t=xo();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}function Ee(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ee=function(n){return typeof n}:Ee=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ee(e)}function mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mo(Object(n),!0).forEach(function(o){T(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mo(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Rs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yo(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Es(e,t,n){return t&&yo(e.prototype,t),n&&yo(e,n),e}function Ds(e){return function(){var t=lt(e),n;if(ks()){var o=lt(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return Ts(this,n)}}function Ts(e,t){return t&&(Ee(t)==="object"||typeof t=="function")?t:A(e)}function A(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ks(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function lt(e){return lt=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},lt(e)}function Ls(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Vt(e,t)}function Vt(e,t){return Vt=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},Vt(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var As=function(){return!0},Ms=function(t){return t.trim().length>0},Ns=function(t){var n=t.containerProps,o=t.children;return Wt.default.createElement("div",n,o)},bo="suggestions-revealed",Fs="suggestions-updated",Bs="suggestion-selected",vo="input-focused",So="input-changed",js="input-blurred",wo="escape-pressed",Gt=(function(e){Ls(n,e);var t=Ds(n);function n(o){var r,i=o.alwaysRenderSuggestions;return Rs(this,n),r=t.call(this),T(A(r),"onDocumentMouseDown",function(s){r.justClickedOnSuggestionsContainer=!1;for(var l=s.detail&&s.detail.target||s.target;l!==null&&l!==document;){if(l.getAttribute&&l.getAttribute("data-suggestion-index")!==null)return;if(l===r.suggestionsContainer){r.justClickedOnSuggestionsContainer=!0;return}l=l.parentNode}}),T(A(r),"storeAutowhateverRef",function(s){s!==null&&(r.autowhatever=s)}),T(A(r),"onSuggestionMouseEnter",function(s,l){var u=l.sectionIndex,c=l.itemIndex;r.updateHighlightedSuggestion(u,c),s.target===r.pressedSuggestion&&(r.justSelectedSuggestion=!0),r.justMouseEntered=!0,setTimeout(function(){r.justMouseEntered=!1})}),T(A(r),"highlightFirstSuggestion",function(){r.updateHighlightedSuggestion(r.props.multiSection?0:null,0)}),T(A(r),"onDocumentMouseUp",function(){r.pressedSuggestion&&!r.justSelectedSuggestion&&r.input.focus(),r.pressedSuggestion=null}),T(A(r),"onSuggestionMouseDown",function(s){r.justSelectedSuggestion||(r.justSelectedSuggestion=!0,r.pressedSuggestion=s.target)}),T(A(r),"onSuggestionsClearRequested",function(){var s=r.props.onSuggestionsClearRequested;s&&s()}),T(A(r),"onSuggestionSelected",function(s,l){var u=r.props,c=u.alwaysRenderSuggestions,g=u.onSuggestionSelected,p=u.onSuggestionsFetchRequested;g&&g(s,l);var S=r.props.shouldKeepSuggestionsOnSelect(l.suggestion);c||S?p({value:l.suggestionValue,reason:Bs}):r.onSuggestionsClearRequested(),r.resetHighlightedSuggestion()}),T(A(r),"onSuggestionClick",function(s){var l=r.props,u=l.alwaysRenderSuggestions,c=l.focusInputOnSuggestionClick,g=r.getSuggestionIndices(r.findSuggestionElement(s.target)),p=g.sectionIndex,S=g.suggestionIndex,y=r.getSuggestion(p,S),w=r.props.getSuggestionValue(y);r.maybeCallOnChange(s,w,"click"),r.onSuggestionSelected(s,{suggestion:y,suggestionValue:w,suggestionIndex:S,sectionIndex:p,method:"click"});var O=r.props.shouldKeepSuggestionsOnSelect(y);u||O||r.closeSuggestions(),c===!0?r.input.focus():r.onBlur(),setTimeout(function(){r.justSelectedSuggestion=!1})}),T(A(r),"onBlur",function(){var s=r.props,l=s.inputProps,u=s.shouldRenderSuggestions,c=l.value,g=l.onBlur,p=r.getHighlightedSuggestion(),S=u(c,js);r.setState({isFocused:!1,highlightedSectionIndex:null,highlightedSuggestionIndex:null,highlightedSuggestion:null,valueBeforeUpDown:null,isCollapsed:!S}),g&&g(r.blurEvent,{highlightedSuggestion:p})}),T(A(r),"onSuggestionMouseLeave",function(s){r.resetHighlightedSuggestion(!1),r.justSelectedSuggestion&&s.target===r.pressedSuggestion&&(r.justSelectedSuggestion=!1)}),T(A(r),"onSuggestionTouchStart",function(){r.justSelectedSuggestion=!0}),T(A(r),"onSuggestionTouchMove",function(){r.justSelectedSuggestion=!1,r.pressedSuggestion=null,r.input.focus()}),T(A(r),"itemProps",function(s){var l=s.sectionIndex,u=s.itemIndex;return{"data-section-index":l,"data-suggestion-index":u,onMouseEnter:r.onSuggestionMouseEnter,onMouseLeave:r.onSuggestionMouseLeave,onMouseDown:r.onSuggestionMouseDown,onTouchStart:r.onSuggestionTouchStart,onTouchMove:r.onSuggestionTouchMove,onClick:r.onSuggestionClick}}),T(A(r),"renderSuggestionsContainer",function(s){var l=s.containerProps,u=s.children,c=r.props.renderSuggestionsContainer;return c({containerProps:l,children:u,query:r.getQuery()})}),r.state={isFocused:!1,isCollapsed:!i,highlightedSectionIndex:null,highlightedSuggestionIndex:null,highlightedSuggestion:null,valueBeforeUpDown:null},r.justPressedUpDown=!1,r.justMouseEntered=!1,r.pressedSuggestion=null,r}return Es(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.onDocumentMouseDown),document.addEventListener("mouseup",this.onDocumentMouseUp),this.input=this.autowhatever.input,this.suggestionsContainer=this.autowhatever.itemsContainer}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){var i=this.state.highlightedSuggestionIndex===0&&this.props.highlightFirstSuggestion&&!r.highlightFirstSuggestion;(0,po.default)(r.suggestions,this.props.suggestions)?r.highlightFirstSuggestion&&r.suggestions.length>0&&this.justPressedUpDown===!1&&this.justMouseEntered===!1?this.highlightFirstSuggestion():i&&this.resetHighlightedSuggestion():this.willRenderSuggestions(r,Fs)?(this.state.isCollapsed&&!this.justSelectedSuggestion&&this.revealSuggestions(),i&&this.resetHighlightedSuggestion()):this.resetHighlightedSuggestion()}},{key:"componentDidUpdate",value:function(r,i){var s=this.props,l=s.suggestions,u=s.onSuggestionHighlighted,c=s.highlightFirstSuggestion;if(!(0,po.default)(l,r.suggestions)&&l.length>0&&c){this.highlightFirstSuggestion();return}if(u){var g=this.getHighlightedSuggestion(),p=i.highlightedSuggestion;g!=p&&u({suggestion:g})}}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.onDocumentMouseDown),document.removeEventListener("mouseup",this.onDocumentMouseUp)}},{key:"updateHighlightedSuggestion",value:function(r,i,s){var l=this;this.setState(function(u){var c=u.valueBeforeUpDown;return i===null?c=null:c===null&&typeof s<"u"&&(c=s),{highlightedSectionIndex:r,highlightedSuggestionIndex:i,highlightedSuggestion:i===null?null:l.getSuggestion(r,i),valueBeforeUpDown:c}})}},{key:"resetHighlightedSuggestion",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.setState(function(i){var s=i.valueBeforeUpDown;return{highlightedSectionIndex:null,highlightedSuggestionIndex:null,highlightedSuggestion:null,valueBeforeUpDown:r?null:s}})}},{key:"revealSuggestions",value:function(){this.setState({isCollapsed:!1})}},{key:"closeSuggestions",value:function(){this.setState({highlightedSectionIndex:null,highlightedSuggestionIndex:null,highlightedSuggestion:null,valueBeforeUpDown:null,isCollapsed:!0})}},{key:"getSuggestion",value:function(r,i){var s=this.props,l=s.suggestions,u=s.multiSection,c=s.getSectionSuggestions;return u?c(l[r])[i]:l[i]}},{key:"getHighlightedSuggestion",value:function(){var r=this.state,i=r.highlightedSectionIndex,s=r.highlightedSuggestionIndex;return s===null?null:this.getSuggestion(i,s)}},{key:"getSuggestionValueByIndex",value:function(r,i){var s=this.props.getSuggestionValue;return s(this.getSuggestion(r,i))}},{key:"getSuggestionIndices",value:function(r){var i=r.getAttribute("data-section-index"),s=r.getAttribute("data-suggestion-index");return{sectionIndex:typeof i=="string"?parseInt(i,10):null,suggestionIndex:parseInt(s,10)}}},{key:"findSuggestionElement",value:function(r){var i=r;do{if(i.getAttribute&&i.getAttribute("data-suggestion-index")!==null)return i;i=i.parentNode}while(i!==null);throw console.error("Clicked element:",r),new Error("Couldn't find suggestion element")}},{key:"maybeCallOnChange",value:function(r,i,s){var l=this.props.inputProps,u=l.value,c=l.onChange;i!==u&&c(r,{newValue:i,method:s})}},{key:"willRenderSuggestions",value:function(r,i){var s=r.suggestions,l=r.inputProps,u=r.shouldRenderSuggestions,c=l.value;return s.length>0&&u(c,i)}},{key:"getQuery",value:function(){var r=this.props.inputProps,i=r.value,s=this.state.valueBeforeUpDown;return(s===null?i:s).trim()}},{key:"render",value:function(){var r=this,i=this.props,s=i.suggestions,l=i.renderInputComponent,u=i.onSuggestionsFetchRequested,c=i.renderSuggestion,g=i.inputProps,p=i.multiSection,S=i.renderSectionTitle,y=i.id,w=i.getSectionSuggestions,O=i.theme,C=i.getSuggestionValue,x=i.alwaysRenderSuggestions,I=i.highlightFirstSuggestion,N=i.containerProps,_=this.state,F=_.isFocused,V=_.isCollapsed,q=_.highlightedSectionIndex,Z=_.highlightedSuggestionIndex,De=_.valueBeforeUpDown,Te=x?As:this.props.shouldRenderSuggestions,ie=g.value,Qt=g.onFocus,Jt=g.onKeyDown,Mo=this.willRenderSuggestions(this.props,"render"),ke=x||F&&!V&&Mo,No=ke?s:[],Fo=ho({},g,{onFocus:function(R){if(!r.justSelectedSuggestion&&!r.justClickedOnSuggestionsContainer){var Q=Te(ie,vo);r.setState({isFocused:!0,isCollapsed:!Q}),Qt&&Qt(R),Q&&u({value:ie,reason:vo})}},onBlur:function(R){if(r.justClickedOnSuggestionsContainer){r.input.focus();return}r.blurEvent=R,r.justSelectedSuggestion||(r.onBlur(),r.onSuggestionsClearRequested())},onChange:function(R){var Q=R.target.value,ve=Te(Q,So);r.maybeCallOnChange(R,Q,"type"),r.suggestionsContainer&&(r.suggestionsContainer.scrollTop=0),r.setState(ho({},I?{}:{highlightedSectionIndex:null,highlightedSuggestionIndex:null,highlightedSuggestion:null},{valueBeforeUpDown:null,isCollapsed:!ve})),ve?u({value:Q,reason:So}):r.onSuggestionsClearRequested()},onKeyDown:function(R,Q){var ve=R.keyCode;switch(ve){case 40:case 38:if(V)Te(ie,bo)&&(u({value:ie,reason:bo}),r.revealSuggestions(),R.preventDefault());else if(s.length>0){var Xt=Q.newHighlightedSectionIndex,dt=Q.newHighlightedItemIndex,gt;dt===null?gt=De===null?ie:De:gt=r.getSuggestionValueByIndex(Xt,dt),r.updateHighlightedSuggestion(Xt,dt,ie),r.maybeCallOnChange(R,gt,ve===40?"down":"up"),R.preventDefault()}r.justPressedUpDown=!0,setTimeout(function(){r.justPressedUpDown=!1});break;case 13:{if(R.keyCode===229)break;var pt=r.getHighlightedSuggestion();if(ke&&!x&&r.closeSuggestions(),pt!=null){R.preventDefault();var Zt=C(pt);r.maybeCallOnChange(R,Zt,"enter"),r.onSuggestionSelected(R,{suggestion:pt,suggestionValue:Zt,suggestionIndex:Z,sectionIndex:q,method:"enter"}),r.justSelectedSuggestion=!0,setTimeout(function(){r.justSelectedSuggestion=!1})}break}case 27:{ke&&R.preventDefault();var Ht=ke&&!x;if(De===null){if(!Ht){var mt="";r.maybeCallOnChange(R,mt,"escape"),Te(mt,wo)?u({value:mt,reason:wo}):r.onSuggestionsClearRequested()}}else r.maybeCallOnChange(R,De,"escape");Ht?(r.onSuggestionsClearRequested(),r.closeSuggestions()):r.resetHighlightedSuggestion();break}}Jt&&Jt(R)}}),Bo={query:this.getQuery()};return Wt.default.createElement(_s.default,{multiSection:p,items:No,renderInputComponent:l,renderItemsContainer:this.renderSuggestionsContainer,renderItem:c,renderItemData:Bo,renderSectionTitle:S,getSectionItems:w,highlightedSectionIndex:q,highlightedItemIndex:Z,containerProps:N,inputProps:Fo,itemProps:this.itemProps,theme:(0,Co.mapToAutowhateverTheme)(O),id:y,ref:this.storeAutowhateverRef})}}]),n})(Wt.Component);ct.default=Gt;T(Gt,"propTypes",{suggestions:L.default.array.isRequired,onSuggestionsFetchRequested:function(t,n){var o=t[n];if(typeof o!="function")throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp")},onSuggestionsClearRequested:function(t,n){var o=t[n];if(t.alwaysRenderSuggestions===!1&&typeof o!="function")throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp")},shouldKeepSuggestionsOnSelect:L.default.func,onSuggestionSelected:L.default.func,onSuggestionHighlighted:L.default.func,renderInputComponent:L.default.func,renderSuggestionsContainer:L.default.func,getSuggestionValue:L.default.func.isRequired,renderSuggestion:L.default.func.isRequired,inputProps:function(t,n){var o=t[n];if(!o)throw new Error("'inputProps' must be passed.");if(!Object.prototype.hasOwnProperty.call(o,"value"))throw new Error("'inputProps' must have 'value'.");if(!Object.prototype.hasOwnProperty.call(o,"onChange"))throw new Error("'inputProps' must have 'onChange'.")},shouldRenderSuggestions:L.default.func,alwaysRenderSuggestions:L.default.bool,multiSection:L.default.bool,renderSectionTitle:function(t,n){var o=t[n];if(t.multiSection===!0&&typeof o!="function")throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp")},getSectionSuggestions:function(t,n){var o=t[n];if(t.multiSection===!0&&typeof o!="function")throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp")},focusInputOnSuggestionClick:L.default.bool,highlightFirstSuggestion:L.default.bool,theme:L.default.object,id:L.default.string,containerProps:L.default.object});T(Gt,"defaultProps",{renderSuggestionsContainer:Ns,shouldRenderSuggestions:Ms,alwaysRenderSuggestions:!1,multiSection:!1,shouldKeepSuggestionsOnSelect:function(){return!1},focusInputOnSuggestionClick:!0,highlightFirstSuggestion:!1,theme:Co.defaultTheme,id:"1",containerProps:{}})});var _o=M((lf,Io)=>{"use strict";d();f();Io.exports=Oo().default});d();f();en();d();f();se();d();f();d();f();var ce=e=>a(ae,{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",...e},a("path",{d:"M0.920898 10.4531C0.688477 10.6855 0.681641 11.082 0.920898 11.3145C1.16016 11.5469 1.55664 11.5469 1.78906 11.3145L6.16406 6.93945L10.5391 11.3145C10.7715 11.5469 11.1748 11.5537 11.4072 11.3145C11.6396 11.0752 11.6396 10.6855 11.4072 10.4531L7.03223 6.07129L11.4072 1.69629C11.6396 1.46387 11.6465 1.06738 11.4072 0.834961C11.168 0.595703 10.7715 0.595703 10.5391 0.834961L6.16406 5.20996L1.78906 0.834961C1.55664 0.595703 1.15332 0.588867 0.920898 0.834961C0.688477 1.07422 0.688477 1.46387 0.920898 1.69629L5.2959 6.07129L0.920898 10.4531Z"}));d();f();var Ue=e=>a(ae,{viewBox:"0 0 13 13",xmlns:"http://www.w3.org/2000/svg",...e,fill:"currentColor"},a("path",{d:"M1.23438 5.95361C1.43327 5.95361 1.59831 5.89014 1.72949 5.76318C1.86491 5.632 1.93262 5.46484 1.93262 5.26172V4.86182L1.79932 3.07178L3.12598 4.46191L4.80176 6.15674C4.93294 6.29215 5.09798 6.35986 5.29688 6.35986C5.5127 6.35986 5.68831 6.29215 5.82373 6.15674C5.96338 6.02132 6.0332 5.84782 6.0332 5.63623C6.0332 5.5389 6.01416 5.44792 5.97607 5.36328C5.94222 5.27865 5.89144 5.20247 5.82373 5.13477L4.13525 3.44629L2.73877 2.12598L4.54785 2.25293H4.99219C5.19531 2.25293 5.36247 2.18945 5.49365 2.0625C5.62484 1.93132 5.69043 1.76416 5.69043 1.56104C5.69043 1.35791 5.62484 1.19076 5.49365 1.05957C5.36247 0.928385 5.19531 0.862793 4.99219 0.862793H1.66602C1.30632 0.862793 1.02702 0.96224 0.828125 1.16113C0.629232 1.36003 0.529785 1.63721 0.529785 1.99268V5.26172C0.529785 5.46061 0.597493 5.62565 0.73291 5.75684C0.868327 5.88802 1.03548 5.95361 1.23438 5.95361ZM7.67725 12.479H11.0034C11.3631 12.479 11.6424 12.3796 11.8413 12.1807C12.0402 11.9818 12.1396 11.7025 12.1396 11.3428V8.07373C12.1396 7.87484 12.0719 7.7098 11.9365 7.57861C11.8053 7.44743 11.6382 7.38184 11.4351 7.38184C11.2362 7.38184 11.069 7.44743 10.9336 7.57861C10.8024 7.7098 10.7368 7.87484 10.7368 8.07373V8.47363L10.8701 10.27L9.54346 8.87354L7.86768 7.18506C7.73649 7.04541 7.57145 6.97559 7.37256 6.97559C7.15674 6.97559 6.979 7.04329 6.83936 7.17871C6.70394 7.31413 6.63623 7.48975 6.63623 7.70557C6.63623 7.8029 6.65316 7.89388 6.68701 7.97852C6.7251 8.05892 6.77799 8.13509 6.8457 8.20703L8.53418 9.88916L9.93066 11.2158L8.12158 11.0825H7.67725C7.47835 11.0825 7.31331 11.1481 7.18213 11.2793C7.05094 11.4105 6.98535 11.5755 6.98535 11.7744C6.98535 11.9775 7.05094 12.1447 7.18213 12.2759C7.31331 12.4113 7.47835 12.479 7.67725 12.479Z"}));d();f();var $e=e=>a(ae,{viewBox:"0 0 12 13",xmlns:"http://www.w3.org/2000/svg",...e},a("path",{d:"M1.18213 6.13135H4.51465C4.84049 6.13135 5.09229 6.04248 5.27002 5.86475C5.45199 5.68278 5.54297 5.42887 5.54297 5.10303V1.7959C5.54297 1.62663 5.48584 1.48486 5.37158 1.37061C5.25732 1.25212 5.11133 1.19287 4.93359 1.19287C4.76009 1.19287 4.61621 1.25 4.50195 1.36426C4.3877 1.47852 4.33057 1.6224 4.33057 1.7959V2.25928L4.45752 4.24609L2.97217 2.67822L1.18848 0.881836C1.07422 0.767578 0.932454 0.710449 0.763184 0.710449C0.576986 0.710449 0.422526 0.767578 0.299805 0.881836C0.177083 0.996094 0.115723 1.14632 0.115723 1.33252C0.115723 1.41715 0.130534 1.49756 0.160156 1.57373C0.19401 1.6499 0.238444 1.71761 0.293457 1.77686L2.08984 3.56055L3.65771 5.0459L1.66455 4.92529H1.18213C1.00863 4.92529 0.86263 4.98242 0.744141 5.09668C0.629883 5.20671 0.570638 5.35059 0.566406 5.52832C0.566406 5.70605 0.623535 5.85205 0.737793 5.96631C0.856283 6.07633 1.00439 6.13135 1.18213 6.13135ZM7.02832 12.2251C7.20182 12.2251 7.3457 12.1659 7.45996 12.0474C7.57422 11.9331 7.63135 11.7892 7.63135 11.6157V11.0889L7.49805 9.10205L8.98975 10.6699L10.8052 12.5044C10.9194 12.6187 11.0612 12.6758 11.2305 12.6758C11.4167 12.6758 11.5711 12.6187 11.6938 12.5044C11.8166 12.3901 11.8779 12.2399 11.8779 12.0537C11.8779 11.9691 11.861 11.8887 11.8271 11.8125C11.7975 11.7363 11.7531 11.6686 11.6938 11.6094L9.86572 9.7876L8.3042 8.30225L10.2974 8.42285H10.8369C11.0104 8.42285 11.1543 8.36784 11.2686 8.25781C11.387 8.14355 11.4463 7.99756 11.4463 7.81982C11.4463 7.64632 11.387 7.50244 11.2686 7.38818C11.1543 7.27393 11.0104 7.2168 10.8369 7.2168H7.44727C7.11719 7.2168 6.86117 7.30778 6.6792 7.48975C6.50146 7.66748 6.4126 7.91927 6.4126 8.24512V11.6157C6.4126 11.785 6.46973 11.9289 6.58398 12.0474C6.70247 12.1659 6.85059 12.2251 7.02832 12.2251Z"}));var Hn=v(J)`
  padding: 16px 16px 20px 16px;
  background: ${m["bg-sec-0-100"]};
  border-radius: 10px;
  font-family: system-ui;
`,jo=v(J)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`,er=v.div`
  padding: 16px 16px 20px 16px;
  background: ${m["bg-sec-0-100"]};
  border-radius: 10px;
  font-family: system-ui;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 75vw;
  height: 100%;
  max-height: 50vh;
  color: ${m["icn-txt-prim"]};
  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  > * {
    width: 100%;
  }
`,tr=({isMinimized:e,onClick:t,onClose:n})=>a(jo,null,a("div",null,a(H,{fontSize:"14px"},"Debugging Tools")),a(J,{style:{gap:"8px"}},a($,{background:"transparent",onClick:t},e?a(Ue,null):a($e,null)),a($,{background:"transparent",onClick:n,padding:"2px"},a(ce,null))));d();f();d();f();var It=k(P());var We=un("cluster_data",{getInitialState:async()=>({})}),qo=async(e,t,n)=>{let o={clusters:t,readable:n,...Ne()};try{let i={...await We.getAll(),[e]:o};await We.setAll(i)}catch(r){console.error(r)}},nr=async()=>{let e=await We.getAll(),t=new Blob([JSON.stringify(e)],{type:"application/json"}),n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download="dataset.json",o.click(),URL.revokeObjectURL(n)},rr=async()=>{await We.setAll({})},W=Ae(()=>({clusters:[],readableNodes:[],readable:!1}));function Uo(e,t,n,o){let{x:r,y:i,width:s,height:l}=xt(e,o),u=document.createElement("div");Object.assign(u.style,{position:"absolute",zIndex:"999999",isolate:"isolate",left:`${r}px`,top:`${i}px`,width:`${s}px`,height:`${l}px`,border:"2px solid black",backgroundColor:t?"rgba(28, 236, 28, 0.2)":"rgba(105, 104, 104, 0.2)"}),u.classList.add("speechify-cluster");let c=document.createElement("form");c.classList.add("cluster-form"),Object.assign(c.style,{background:"white",padding:"8px",margin:"8px",width:"auto",display:"none",color:"black",zIndex:"999999999"});let g=document.createElement("label");g.textContent="Critical";let p=document.createElement("input");p.type="checkbox",p.checked=t,Object.assign(p.style,{appearance:"checkbox"}),p.onchange=()=>{W.setState(C=>({clusters:C.clusters.map(x=>x.cluster===e?{...x,critical:!x.critical}:x)}))};let S=document.createElement("label");S.textContent="Type";let y=document.createElement("select");["ad","article","article_paragraph","avatar","button_group","button_individual","calendar","carousel","code_block","comment","comment_group","cookie_text","email","faq","showcase","showcase_item","hero","featured","filters","forum_post","heading","media","metadata","navigation","navigation_item","navigation_tabs","product_card","product_description","review","search","search_results","sidebar","social_post","social_share","table","other"].forEach(C=>{let x=document.createElement("option");x.value=C,x.textContent=C,y.appendChild(x)}),y.value=n,y.onchange=C=>{W.setState(x=>({clusters:x.clusters.map(I=>I.cluster===e?{...I,type:C.target.value}:I)}))};let w=()=>{e.forEach(C=>{o[C].node.style.outline="2px dashed red"})},O=()=>{e.forEach(C=>{o[C].node.style.outline=""})};c.append(S,y,g,p),u.appendChild(c),u.onmouseenter=C=>{let{clientX:x,clientY:I}=C;document.elementsFromPoint(x,I).find(F=>{if(F.classList.contains("speechify-cluster")){let q=F.getBoundingClientRect(),Z=u.getBoundingClientRect();return q.width*q.height<Z.width*Z.height}return!1})||(c.style.display="flex",u.style.zIndex="999999999",w())},u.onmousemove=C=>{let{clientX:x,clientY:I}=C;document.elementsFromPoint(x,I).find(F=>{if(F.classList.contains("speechify-cluster")){let q=F.getBoundingClientRect(),Z=u.getBoundingClientRect();return q.width*q.height<Z.width*Z.height}return!1})&&(O(),u.style.zIndex="99999",c.style.display="none")},u.onmouseleave=()=>{c.style.display="none",u.style.zIndex="999999",O()},document.body.appendChild(u)}function $o(){document.querySelectorAll(".speechify-cluster").forEach(e=>e.remove())}function Wo(){let e=document.createElement("button");return e.id="add-to-dataset",e.innerText="Save to Dataset",Object.assign(e.style,{background:"#3A72E0",color:"white",border:"none",cursor:"pointer",outline:"none",padding:"8px"}),e}function Vo(){let e=document.createElement("button");return e.id="add-fold-to-dataset",e.innerText="Save clusters in viewport",Object.assign(e.style,{background:"#3A72E0",color:"white",border:"none",cursor:"pointer",outline:"none",padding:"8px"}),e}function zo(){let e=document.createElement("button");return e.id="refresh-dataset",e.innerText="Refresh Clusters",Object.assign(e.style,{background:"#231F20",color:"white",border:"none",cursor:"pointer",outline:"none",padding:"8px"}),e}function Go(e,t){let n=document.createElement("div");n.id="speechify-page-toolbar",n.className="speechify-toolbar",Object.assign(n.style,{position:"fixed",bottom:"32px",right:"64px",display:"flex",alignItems:"center",gap:"8px",zIndex:"99999999",background:"white",padding:"8px",borderRadius:"4px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",color:"black"});let o=zo();o.onclick=e;let r=Wo();r.onclick=t(!1);let i=Vo();i.onclick=t(!0);let s=document.createElement("label");s.textContent="Readable?";let l=document.createElement("input");return l.type="checkbox",l.checked=W.getState().readable,l.style.appearance="checkbox",l.onchange=u=>{W.setState(()=>({readable:u.target.checked}))},n.append(s,l,o,r,i),n}function Ko(e,t){return t.filter(n=>{let{x:o,y:r,width:i,height:s}=xt(n.cluster,e),l=window.scrollX,u=window.scrollY,c=window.innerWidth,g=window.innerHeight,p=i*s,S=Math.min(o+i,l+c)-Math.max(o,l),y=Math.min(r+s,u+g)-Math.max(r,u);return Math.max(0,S)*Math.max(0,y)/p>=.7})}function _t({enabled:e}){(0,It.useEffect)(()=>{(async()=>{if(e){let o=await U.getIsPageReadable(),r=U.getAllReadableNodes(!0),i=Array.from(U.getAllClusters(r,!0)),s=Fe(r,i),l=await Ct({...Ne(),clusters:i.map(p=>({features:s.extract(p)}))});W.setState({readableNodes:r,clusters:i.map((p,S)=>{let y=l[S].label;return{cluster:p,critical:y,type:"article"}}),readable:o});let g=Go(async p=>{let S=p.target;W.setState({readableNodes:[],clusters:[]}),S.innerText="Refreshing...",setTimeout(async()=>{let y=await U.getIsPageReadable(),w=U.getAllReadableNodes(!0),O=U.getAllClusters(w,!0),C=Fe(w,O),x=await Ct({...Ne(),clusters:O.map(I=>({features:C.extract(I)}))});W.setState({readableNodes:w,clusters:O.map((I,N)=>{let _=x[N].label;return{cluster:I,critical:_,type:"article"}}),readable:y}),S.innerText="Refresh Clusters"},250)},p=>async S=>{let y=S.target,{clusters:w,readableNodes:O,readable:C}=W.getState(),x=p?Ko(O,w):w,I=Fe(O,x.map(_=>_.cluster)),N=x.map(({cluster:_,critical:F,type:V})=>({critical:F,type:V,features:I.extract(_)}));console.groupCollapsed("Saving to dataset"),console.log("viewport",{width:window.innerWidth,height:window.innerHeight}),console.log("readable",W.getState().readable);for(let _=0;_<x.length;_++){let F=x[_].cluster.map(V=>O[V].node);console.group(`Cluster ${_}`),console.log("clusterNodes:",F),console.log("clusterData",N[_]),console.groupEnd()}console.groupEnd(),await qo(window.location.href,N,C),y.innerText="Saved!",setTimeout(()=>{y.innerText=p?"Save clusters in viewport":"Save to Dataset"},1e3)});document.body.appendChild(g)}else W.setState({readableNodes:[],clusters:[]}),document.getElementById("speechify-page-toolbar")?.remove()})()},[e]);let[t,n]=W(o=>[o.clusters,o.readableNodes]);return(0,It.useEffect)(()=>(t.forEach(o=>{Uo(o.cluster,o.critical,o.type,n)}),$o),[t,n]),null}d();f();se();var Ve="speechify-marked-active",Yo=()=>{try{let e=document.styleSheets[0];e.insertRule(`.${Ve} { background: rgba(255, 0, 0, 0.2); }`,e.cssRules.length)}catch{}},Qo=e=>{e.classList.add(Ve)},Jo=()=>{document.querySelectorAll(`.${Ve}`).forEach(e=>e.classList.remove(Ve))};Yo();function Pt({enabled:e}){let{activeElement:t}=pn();return z(()=>{Jo(),e&&t instanceof HTMLElement&&Qo(t)},[t,e]),null}d();f();se();var or=k(P());var fe="speechify-marked-parser",Xo=()=>{try{let e=new CSSStyleSheet;e.insertRule(`.${fe} { background: rgba(0, 100, 100, 0.2) !important; }`,e.cssRules.length),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}catch{}};Xo();function ir({enabled:e}){let[t,n]=(0,or.useState)("hybrid");z(()=>(e?U.getParsedElements({useHybridParsingMode:t==="hybrid",invalidateCache:!0,shouldParseShadowRoot:!1,startingNodeElement:document.body}).then(r=>r.forEach(i=>i.classList?.add(fe))):document.querySelectorAll(`.${fe}`).forEach(i=>i.classList?.remove(fe)),()=>{document.querySelectorAll(`.${fe}`).forEach(i=>i.classList?.remove(fe))}),[e,t]);let o=()=>{let r=Pn(),i=JSON.stringify(r.map(s=>({tagName:s.tagName,content:s.textContent})));navigator.clipboard.writeText(i)};return e?a("div",null,a(D,{onClick:o},"Copy Parsed Elements as JSON"),a("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"}},a(H,null,"Hybrid Parsing Mode"),a(Be,{checked:t==="hybrid",onChange:r=>n(r?"hybrid":"standard")}))):null}d();f();var sr=k(P());function ur({enabled:e}){return(0,sr.useEffect)(()=>(vt.setState(e),()=>vt.setState(!1)),[e]),null}d();f();en();se();var Zo=v(J)`
  background: ${m["bg-sec-0-100"]};
  max-width: 620px;
  border-radius: 10px;
  gap: 16px;
  font-family: system-ui;
  line-height: 1.3;
  padding: ${({expanded:e})=>e?"16px":"8px"};
`,lr=()=>{if(document.querySelector("#speechify-view-div"))return document.querySelector("#speechify-view-div");let e=document.createElement("div");return e.id="speechify-view-div",e.style.zIndex="9999999999",document.body.appendChild(e),e},Ho=async e=>{let t=await vn(e),n=lr();t.forEach(o=>{let{text:r,ref:i}=e.converter(o),s=i.ref;if(an(s))return;let l=s instanceof Element?s.getBoundingClientRect():gn(s),u=document.createElement("div");u.style.position="absolute",u.style.display="block",u.style.top=`${l.top+window.scrollY}px`,u.style.left=`${l.left+window.scrollX-48}px`,u.style.zIndex="9999999999",Se(a(ei,{text:r}),u),n.appendChild(u)})},ar=()=>{let e=lr();if(!e)return;Array.from(e.children).forEach(n=>Se(()=>null,n))},ei=({text:e})=>{let[t,n]=Le(!0);return a(Zo,{expanded:!t},a($,{background:"transparent",onClick:()=>n(!t)},t?a(Ue,null):a($e,null)),!t&&a(H,null,e))};function Rt({enabled:e}){let t=Sn.useCurrentContent();return z(()=>{if(t)return e&&Ho(t),e||ar(),ar},[t,e]),null}var ti={"Display Current View":{enabled:!1,render:Rt},"Mark Active Element":{enabled:!1,render:Pt},"Mark parsed elements":{enabled:!1,render:ir},"Readability Dataset Mode":{enabled:!1,render:_t},"Theme sample points":{enabled:!1,render:ur}},ze=Ae(e=>({actions:ti,updateAction:(t,n)=>{e(o=>({...o,actions:{...o.actions,[t]:{...o.actions[t],enabled:n.enabled}}}))}}));d();f();d();f();var fr=k(P()),dr=k(P());d();f();var de=k(P());var ni=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${m["bg-dimmer"]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999999;
`,ri=v.div`
  padding: 16px 16px 20px 16px;
  background: ${m["bg-prim-w-b"]};
  border-radius: 10px;
  font-family: system-ui;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 50vw;
  height: 50vh;
  color: ${m["icn-txt-prim"]};
  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  pre {
    width: 80%;
    align-self: center;
    height: 100%;
    overflow: scroll;
    margin: 1rem;
    background: ${m["bg-prim-w-b"]};
    border-radius: 10px;
    font-size: 0.8rem;
  }

  .url {
    color: ${m["icn-txt-crit"]};
    font-weight: bold;
    padding: 0.25rem;
    border-radius: 0.25rem;
  }
`;function cr({root:e}){let[t,n]=(0,de.useState)(null),o=(0,de.useCallback)(()=>{e.remove()},[e]);return(0,de.useEffect)(()=>{n(yn())},[]),a(ni,null,a(ri,null,a($,{background:"transparent",onClick:o,style:{position:"absolute",top:"1rem",right:"1rem"}},a(ce,null)),a("h3",null,"(Remote) Page Config for this site: ",a("span",{className:"url"},window.location.host)),t?a("pre",null,a("code",null,JSON.stringify(t,null,2))):null))}var oi=v(D)`
  text-align: center;
  background: ${m["sf-prim-cta"]};
  color: white;
`,ii="speechify-page-config-debugger-modal";function gr(){let e=(0,fr.useCallback)(()=>{let t=document.createElement("div");t.id=ii,(0,dr.render)(a(cr,{root:t}),t),document.body.appendChild(t)},[]);return a(oi,{onClick:e,xAlign:"center",color:m["icn-txt-prim"]},"View Page Config")}d();f();var re=k(P());se();var si=v(D)`
  background: ${m["icn-txt-alert"]};
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
`;function pr(){let[e,t]=(0,re.useState)(null),n=(0,re.useMemo)(()=>e?e.resource.wordsLeft>0:!1,[e]),o=(0,re.useCallback)(async()=>{let i=await fn();t(i)},[t]);z(()=>{o()},[o]);let r=(0,re.useCallback)(async()=>{if(!n)return;let i=e?.resource.wordsLeft??0;await G("/debugger/exhaust-premium-words",{wordsLeft:i}),await o()},[n]);return a(si,{onClick:r,disabled:!n,xAlign:"center"},n?"Exhaust Premium Words":"Cannot Exhaust Premium Words")}d();f();var X=k(P());d();f();var Ge=v(e=>a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a("path",{d:"M3.20183 11.9635C2.92839 12.2369 2.91537 12.7252 3.20834 13.0116C3.4948 13.2981 3.98308 13.2916 4.25652 13.0182L8.24089 9.02727L12.2318 13.0182C12.5117 13.2981 12.9935 13.2981 13.28 13.0116C13.5599 12.7187 13.5664 12.2434 13.28 11.9635L9.29558 7.97258L13.28 3.98821C13.5664 3.70826 13.5664 3.22649 13.28 2.94003C12.987 2.66008 12.5117 2.65357 12.2318 2.93352L8.24089 6.92441L4.25652 2.93352C3.98308 2.66008 3.48829 2.64706 3.20834 2.94003C2.92188 3.22649 2.92839 3.71477 3.20183 3.98821L7.19272 7.97258L3.20183 11.9635Z",fill:m["icn-txt-prim"]})))`
  cursor: pointer;
  margin-right: 8px;
  margin-top: 8px;
  fill: currentColor;
`;d();f();var ge=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${m["bg-dimmer"]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999999;
`;var mr=v(D)`
  margin-bottom: 0.5rem;
  background: ${m["icn-txt-alert"]};
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
`,ui=v.div`
  color: ${m["icn-txt-prim"]};
  background-color: ${m["bg-prim-w-b"]};
  border-radius: 6px;
  padding: 0.5rem;
  position: relative;
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
  }

  th {
    background-color: #f2f2f2;
  }

  td {
    text-align: left;
  }
`;function hr(){let[e,t]=(0,X.useState)([]),[n,o]=(0,X.useState)(!1),[r,i]=(0,X.useState)(null),s=(0,X.useCallback)(async()=>{let u=await Promise.all(mn.map(async g=>{let p=await Zn(g),S=await hn(g);return{hintId:g,displayCount:p?.displayCount||0,dismissedByUser:p?.dismissedByUser||!1,enabled:S}}));t(u);let c=await G("/auth/get-user");c&&i(Number.parseInt(c.user.createdAt))},[]);(0,X.useEffect)(()=>{s()},[]);let l=(0,X.useCallback)(async u=>{await Jn.set(u,c=>({...c,displayCount:0,dismissedByUser:!1,lastDisplayedAt:null})),s(),window.confirm("Listening hint state has been resetted, do you want to refresh the page?")&&window.location.reload()},[]);return a(h,null,a(mr,{onClick:()=>o(!0)},a("span",null,"Open Listening Hint Debugger")),n&&a(ge,null,a(ui,null,a($,{background:"black",onClick:()=>o(!1),style:{position:"absolute",top:"1rem",right:"1rem"}},a(Ge,null)),a("h3",null,"Listening Hints Debugger"),a("hr",null),r!==null&&a("p",null,a("strong",null,"User Created At:")," ",new Date(r).toLocaleDateString(),a("br",null),a("strong",null,"Is created after ",St.toLocaleDateString()," ","threshold:")," ",r??St.getTime()<=0?"✅ yes":"❌ no"),a("table",null,a("thead",null,a("tr",null,a("td",null,"Listening Hint ID"),a("td",null,"enabled"),a("td",null,"displayCount"),a("td",null,"dismissedByUser"),a("td",null))),a("tbody",null,e.map(u=>a("tr",{key:u.hintId},a("td",null,u.hintId),a("td",null,u.enabled?"true":"false"),a("td",null,u.displayCount),a("td",null,u.dismissedByUser?"true":"false"),a("td",null,a(mr,{onClick:()=>l(u.hintId)},"Reset")))))))))}d();f();var we=k(P());se();var ai=v(D)`
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
`;function yr(){let[e,t]=(0,we.useState)(null),n=(0,we.useCallback)(async()=>{let r=await cn();t(r&&r.uid&&!ln(r))},[t]);z(()=>{n()},[n]);let o=(0,we.useCallback)(async()=>{await G("/auth/log-out"),await G("/debugger/clear-storage"),window.confirm("Successfully logged out and cleared storage. Do you want to refresh the page?")&&window.location.reload(),t(!1)},[n]);return a(ai,{onClick:o,disabled:!e,xAlign:"center"},e?"Log out and clear storage":"Sign in first to log out!")}d();f();var Tt=k(P());var li=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0 16px 16px;
  box-sizing: border-box;
`,ci=v.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ke=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ye=v.label`
  min-width: 120px;
  font-size: 14px;
`,fi=v.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${ue["brdr-sec-20-60"]};
  flex: 1;
`,br=v.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${ue["brdr-sec-20-60"]};
  flex: 1;
`,di=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`,gi=v.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
`,pi=v.pre`
  background: ${ue["bg-prim-w-110"]};
  color: ${ue["icn-txt-prim"]};
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
  max-height: 200px;
  font-size: 12px;
  border: 1px solid ${ue["brdr-sec-20-60"]};
`,Et=({checked:e,label:t,setChecked:n})=>a(gi,{onClick:()=>n(!e)},a(zn,{checked:e}),a(bn,{font:"subheading-6"},t)),Dt={"no-client-voices":{customDisplayFunction:Cn},"ocr-error-popup":{component:En,isGlobal:!0},"gdocs-onboarding-play":{customDisplayFunction:Ln},"gdocs-onboarding-skip-sentences":{customDisplayFunction:An},"gdocs-onboarding-click-to-listen":{customDisplayFunction:kn},"recommend-scroll":{isGlobal:!0,component:()=>a(Tn,{content:"To start playback, we need to process the text on page 1",buttonText:"Scroll & Play",removeNotification:()=>qe("recommend-scroll"),onClick:()=>qe("recommend-scroll")})},"hide-extension-popup":{customDisplayFunction:Kn},"enable-back-popup":{customDisplayFunction:Gn},"new-version-popup":{customDisplayFunction:()=>le.show({id:"new-version-popup",render:()=>a(Wn,null)})},"screenshot-hint-popup":{component:Dn},"saved-to-library":{customDisplayFunction:Rn},"player-error":{customDisplayFunction:()=>le.show({id:"player-error",render:()=>a(Vn,null)})},"feedback-form":{customDisplayFunction:Mn},"inline-player-first-time-popup":{customDisplayFunction:()=>le.show({id:"inline-player-first-time-popup",render:()=>a($n,null)})},"force-login":{customDisplayFunction:In},"individual-post-button-hint":{component:Nn},"introduce-ai-autoplay":{customDisplayFunction:()=>le.show({id:"introduce-ai-autoplay",render:()=>a(Un,null)})},"introduce-ai-button":{customDisplayFunction:()=>le.show({id:"introduce-ai-button",render:()=>a(qn,null)})},"auth-success":{component:xn,isGlobal:!0},"trial-upgrade":{component:()=>a(wn,{removeNotification:()=>qe("trial-upgrade")})},"subscription-expired":{customDisplayFunction:Fn},"http-highlight-unsupported":{customDisplayFunction:jn},"rate-limit":{customDisplayFunction:Bn}};function vr(e){return!!e?.customDisplayFunction}function Sr({onMinimizeClick:e}){let[t,n]=(0,Tt.useState)(!1),[o,r]=(0,Tt.useState)({component:!1,duration:0,id:"individual-post-button-hint",priority:151,showOnMobile:!1,timeSensitive:!0,redesigned:!0}),i=Object.values(sn).filter(u=>Dt[u]),s=(u,c)=>{if(r(g=>({...g,[u]:c})),u==="id"){let g=Dt[c];if(vr(g))return;let p=g?.isComponent??!1;r(S=>({...S,component:p,global:g?.isGlobal}))}},l=async()=>{try{let{id:u}=o,c=Dt[u];if(vr(c)){c.customDisplayFunction(),n(!1);return}let g=c?.component;if(!g){alert(`No component found for notification ID: ${u}`);return}n(!1),e(),await Xn({...o,render:()=>a(g,null),global:c?.isGlobal})}catch(u){console.error("Error queuing notification:",u)}};return a(h,null,a(wt,{onClick:()=>n(!0)},"Notifications"),t&&a(ge,null,a(On,{onClose:()=>n(!1),width:600,noAnimation:!0,isOpen:!0},a(li,null,a("h3",null,"Notification Debugger"),a(ci,null,a(Ke,null,a(Ye,null,"Notification:"),a(br,{value:o.id,onChange:u=>s("id",u.target.value)},i.map(u=>a("option",{key:u,value:u},u)))),a(Ke,null,a(Ye,null,"Duration (ms):"),a(fi,{type:"number",value:o.duration,onChange:u=>s("duration",parseInt(u.target.value,10)||0)})),a(Ke,null,a(Ye,null,"Priority:"),a(br,{value:o.priority,onChange:u=>s("priority",u.target.value)},Object.entries(Qn).map(([u,c])=>a("option",{key:u,value:c},u)))),a(Ke,null,a(Ye,null,"Options:"),a(di,null,a(Et,{checked:o.component,label:"Component",setChecked:u=>s("component",u)}),a(Et,{checked:o.showOnMobile,label:"Show on Mobile",setChecked:u=>s("showOnMobile",u)}),a(Et,{checked:o.timeSensitive,label:"Time Sensitive",setChecked:u=>s("timeSensitive",u)})))),a(pi,null,JSON.stringify(o,null,2)),a("div",null,a(wt,{size:"large",onClick:l,style:{marginTop:"16px"}},"Queue Notification"))))))}d();f();var wr=k(P());var mi=v(D)`
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
`;function Cr(){let e=(0,wr.useCallback)(async()=>{U.printDebugInformation()},[]);return a(mi,{onClick:e,xAlign:"center"},"Spatial Parsing - Print Debug Info in console")}d();f();var xr=k(P());var hi=v(D)`
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
`;function Or(){let e=(0,xr.useCallback)(async()=>{nr().then(()=>{rr()}).catch(t=>console.error(t))},[]);return a(hi,{onClick:e,xAlign:"center"},"Export Readability Data")}d();f();var ko=k(P()),Lo=k(P());d();f();var B=k(P());d();f();var be=k(P());d();f();d();f();var Ce=class e{static getDescendantProperty(t,n,o=[]){let r,i,s,l,u,c;if(n){if(s=n.indexOf("."),s===-1?r=n:(r=n.slice(0,s),i=n.slice(s+1)),l=t[r],l!==null&&typeof l<"u")if(!i&&(typeof l=="string"||typeof l=="number"))o.push(l);else if(Object.prototype.toString.call(l)==="[object Array]")for(u=0,c=l.length;u<c;u++)e.getDescendantProperty(l[u],i,o);else i&&e.getDescendantProperty(l,i,o)}else o.push(t);return o}};var xe=class e{constructor(t=[],n=[],o={}){Array.isArray(n)||(o=n,n=[]),this.haystack=t,this.keys=n,this.options=Object.assign({caseSensitive:!1,sort:!1},o)}search(t=""){if(t==="")return this.haystack;let n=[];for(let o=0;o<this.haystack.length;o++){let r=this.haystack[o];if(this.keys.length===0){let i=e.isMatch(r,t,this.options.caseSensitive);i&&n.push({item:r,score:i})}else for(let i=0;i<this.keys.length;i++){let s=Ce.getDescendantProperty(r,this.keys[i]),l=!1;for(let u=0;u<s.length;u++){let c=e.isMatch(s[u],t,this.options.caseSensitive);if(c){l=!0,n.push({item:r,score:c});break}}if(l)break}}return this.options.sort&&n.sort((o,r)=>o.score-r.score),n.map(o=>o.item)}static isMatch(t,n,o){t=String(t),n=String(n),o||(t=t.toLocaleLowerCase(),n=n.toLocaleLowerCase());let r=e.nearestIndexesFor(t,n);return r?t===n?1:r.length>1?2+(r[r.length-1]-r[0]):2+r[0]:!1}static nearestIndexesFor(t,n){let o=n.split(""),r=[];return e.indexesOfFirstLetter(t,n).forEach((s,l)=>{let u=s+1;r[l]=[s];for(let c=1;c<o.length;c++){let g=o[c];if(u=t.indexOf(g,u),u===-1){r[l]=!1;break}r[l].push(u),u++}}),r=r.filter(s=>s!==!1),r.length?r.sort((s,l)=>s.length===1?s[0]-l[0]:(s=s[s.length-1]-s[0],l=l[l.length-1]-l[0],s-l))[0]:!1}static indexesOfFirstLetter(t,n){let o=n[0];return t.split("").map((r,i)=>r!==o?!1:i).filter(r=>r!==!1)}};var Po=k(_o());function qs(e){return((t,...n)=>t.key==="Enter"&&e(t,...n))}var Us=v.div`
  ${({isForRedesignedVoiceSelection:e})=>e?`
      display: flex;
      align-items: center;
      > div {
        flex: 1;
      }
      border-bottom: 1px solid ${m["brdr-sec-20-60"]};
      background-color: ${m["bg-prim-w-b"]};
`:""}

  > div {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  input {
    box-sizing: border-box;
    background: url('${b.runtime.getURL("/images/search-icon.svg")}') no-repeat scroll 9px 9px;
    background-size: 16px;

    ${({color:e,isForRedesignedVoiceSelection:t})=>t?`
        background-position: 16px center;
        background-color: ${m["bg-prim-w-b"]};

        padding-left: 40px;
        padding-top: 12px;
        padding-bottom: 12px;

        color: ${e??m["icn-txt-prim"]};

        border: none;
      `:`
        background-color: ${m["bg-sec-0-100"]};
        padding: 8px;
        padding-left: 30px;
        color: ${e??m["icn-txt-prim"]};
        border: 1px solid ${m["brdr-sec-20-60"]};
        border-radius: 4px;
      `}
    outline: none;
    width: 100%;
    font-size: 12px;
    line-height: 16px;

    &::placeholder {
      font-size: 12px;
      line-height: 16px;
      color: ${m["icn-txt-sec"]};
    }
  }

  @media (max-width: 500px) {
    input {
      font-size: 16px;
      background-color: #e4eaf1;
      color: #1c2c40;
      line-height: 20px;
      border: none;
      border-radius: 8px;
      padding: 8px 40px;

      &::placeholder {
        font-size: 16px;
        line-height: 20px;
        color: #587393;
      }
    }
  }

  > div > div:empty {
    display: none;
  }

  > div > div {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% - 5px);
    background: ${m["bg-prim-w-b"]};
    z-index: 5000;
    border: none;
    border-top: none;
    max-height: 400px;
    overflow-y: auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 5px 5px;

    max-height: ${({suggestionsMaxHeight:e})=>e};
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: ${m["bg-sec-0-100"]};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${m["icn-txt-quat"]};
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    > ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    > ul > li {
      padding: 0;
      > button {
        background: ${m["bg-prim-w-b"]};
        color: ${m["icn-txt-prim"]};

        padding: 12px 28px;
        border: none;
        margin: none;
        outline: none;

        text-align: left;
        cursor: pointer;
        width: 100%;
      }

      &:hover > button,
      &:focus > button,
      &.react-autosuggest__suggestion--highlighted > button {
        background: ${m["bg-sec-0-100"]};
      }
    }
  }
`,$s=v(Ge)`
  margin-top: 0px;
  margin-right: 0.75rem;
`,Ro=({suggestions:e,value:t,placeholder:n,onChange:o,onBlur:r,onFocus:i=()=>{},suggestionsMaxHeight:s,color:l,isForRedesignedVoiceSelection:u,...c})=>{let[g,p]=(0,be.useState)([]),S=(0,be.useMemo)(()=>new xe(e,[]),[e]);return(0,be.useEffect)(()=>{t===""&&Array.isArray(e)&&p(e)},[t,e]),a(Us,{color:l,suggestionsMaxHeight:s,isForRedesignedVoiceSelection:u},a(Po.default,{suggestions:g,renderSuggestion:y=>a("button",{type:"button",onClick:w=>dn(o(y))(w),onKeyDown:qs(()=>o(y))},y),inputProps:{value:t,onChange:(y,{newValue:w,method:O})=>!["down","up"].includes(O)&&typeof o=="function"&&o(w),onBlur:(y,w)=>typeof r=="function"&&r(w?.highlightedSuggestion??""),onFocus:i,placeholder:n,...c},shouldRenderSuggestions:y=>e.indexOf(y)===-1,getSuggestionValue:y=>y,onSuggestionsClearRequested:()=>p([]),onSuggestionsFetchRequested:({value:y,reason:w})=>w!=="suggestions-revealed"&&p(S.search(y).sort((O,C)=>O.toLowerCase().localeCompare(C.toLowerCase())))}),u&&t.length>=1&&a($s,{onClick:()=>o("")}))};function To({root:e}){let t=(0,B.useCallback)(()=>{e.remove()},[e]),[n,o]=(0,B.useState)("");return a(ge,null,a(er,null,a($,{background:"transparent",onClick:t,style:{position:"absolute",top:"1rem",right:"1rem"}},a(ce,null)),a("h1",null,"View and Edit Feature Flag"),a(Ro,{placeholder:"Search for feature flag",suggestions:Object.values(yt),value:n,onChange:r=>o(r),suggestionsMaxHeight:"250px",color:"#587393",style:{width:"100%",marginBottom:"1rem"},onBlur:r=>r}),a("div",{className:ee`
            display: grid;
            grid-template-columns: 2fr minmax(0, 3fr);

            gap: 1rem;
            width: 100%;
            > * {
              font-weight: bold;
              font-size: 1.1rem;
              color: ${m["icn-txt-prim-electric"]};
            }
          `},a("div",null,"AB Test Name"),a("div",null,"Variant")),a(Ws,{searchQuery:n})))}var Ws=({searchQuery:e})=>{let[t,n]=(0,B.useState)(null),o=(0,B.useMemo)(()=>{if(!t)return{};let r=new Set(Object.values(yt));return Object.fromEntries(Object.entries(t).filter(([i])=>r.has(i)?e.length===0?!0:i.includes(e):!1))},[t,e]);return(0,B.useEffect)(()=>{(async()=>{let{features:r}=await G("/feature-flags/get");Object.keys(r).forEach(i=>{ht.featureFlagOverrides&&Ot(i)&&(r[i]=ht.featureFlagOverrides[i])}),n(r)})()},[]),t===null?a("div",{className:ee`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2rem;
        `},a(_n,null)):a("div",{className:ee`
        height: 100%;
        overflow-y: auto;
        width: 100%;
        min-width: min(1000px, 100%);
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 1rem;
        align-items: flex-start;
        > * {
          word-break: break-word;
        }
      `},Object.entries(o).map(([r,i])=>a(Vs,{key:r,k:r,v:i})))},Eo="80px",Do="8px",Vs=({k:e,v:t})=>{let[n,o]=(0,B.useState)(t),r=(0,B.useMemo)(()=>Ot(e),[e]),i=(0,B.useMemo)(()=>t!==n,[t,n]),s=(0,B.useCallback)(async u=>{await G("/debugger/set-feature-flag",{featureFlagName:e,variant:u}),window.confirm("Successfully set feature flag. Do you want to refresh the page?")&&window.location.reload()},[]),l=u=>{t!==u&&(o(u),s(u))};return e in bt?a(h,null,a("div",{className:ee`
            display: flex;
            align-items: center;

            label {
              align-self: flex-start;
              font-size: 0.8rem;
              color: ${m["icn-txt-prim"]};
              margin-left: 0.5rem;
              font-weight: bold;
              padding: 0.1rem 0.2rem;
              background: ${m["sf-crit"]};
              border-radius: 0.5rem;
            }
          `},a("span",null,e),r&&a("label",null,"overriden")),a("div",{className:ee`
            width: calc(100% - ${Eo});
          `},a("select",{disabled:r,title:`${e}-variant-select`,name:"variant",value:n,onChange:u=>l(u.target.value),className:ee`
              width: 100%;
              color: ${m["icn-txt-prim"]};
              background: ${m["bg-prim-w-b"]};
              border-radius: 0.5rem !important;
              border-color: #f2f3ff80 !important;
              border-width: 2px !important;
              border-style: solid !important;
              background-image: none !important; // linkedin does weird thing on label
            `},bt[e].map(u=>a("option",{key:u,value:u},u))))):a(h,null,a("div",null,e),a("div",{className:ee`
          width: 100%;
          display: flex;
          justify-content: space-between;
          input {
            flex: 1;
            width: 100%;
            border-radius: 0.5rem !important;
            border-color: #f2f3ff80 !important;
            border-width: 2px !important;
            border-style: solid !important;
            background: ${m["bg-prim-w-b"]} !important;
            color: ${m["icn-txt-prim"]};
          }
          button {
            width: calc(${Eo} - ${Do} * 2);
            margin: 0 ${Do};
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button:disabled {
            opacity: 0.5;
          }
        `},a("input",{value:n,onChange:u=>o(u.target.value)}),a(D,{disabled:!i,onClick:()=>s(n)},"Save")))};var zs=v(D)`
  margin: 0;
  text-align: center;
  &:disabled {
    cursor: not-allowed;
  }
  background: ${m["sf-crit"]};
`,Gs="speechify-debugger-modal";function Ao(){let e=(0,ko.useCallback)(()=>{let t=document.createElement("div");t.id=Gs,(0,Lo.render)(a(To,{root:t}),t),document.body.appendChild(t)},[]);return a(zs,{onClick:e,xAlign:"center",color:m["icn-txt-prim"]},"View and Edit Feature Flags")}var Ks=v(J)`
  gap: 8px;
  flex-direction: column;
  padding: 16px 0px;
  margin-bottom: 16px;
`;function Kt({onMinimizeClick:e}){let{actions:t,updateAction:n}=ze(o=>({actions:o.actions,updateAction:o.updateAction}));return a(Ks,null,Object.entries(t).map(([o,{enabled:r}])=>a(J,{key:o,style:{gap:"8px",justifyContent:"space-between",marginTop:"8px"}},a(H,{fontSize:"14px"},o),a(Be,{checked:r,onChange:()=>n(o,{enabled:!r})}))),a(gr,null),a(Sr,{onMinimizeClick:e}),a(Ao,null),a(yr,null),a(Cr,null),a(Or,null),a(pr,null),a(hr,null))}function Yt({root:e}){let{actions:t}=ze(l=>({actions:l.actions})),[n,o]=Le(!0),r=()=>o(!n),i=()=>tn("destroy",{},"debugger"),s=nn(()=>rn({key:"debugger-emotion-cache",container:e}),[e]);return a(on,{value:s},a(Hn,{column:!0},!n&&a(h,null,Object.entries(t).map(([,{enabled:l,render:u}])=>u({enabled:l})),a(Kt,{onMinimizeClick:r})),a(tr,{isMinimized:n,onClick:r,onClose:i})))}function Ys(){Me.acquireShadow(je,{hostStyles:"position: fixed; bottom: 32px; left: 32px; z-index: 999999999"});let e=document.createElement("div");return Se(a(Yt,{root:e}),e),Me.mountRoot(je,Yn,e),()=>{Me.destroyRoot(je)}}export{Ys as default};
//# sourceMappingURL=init-U3TU6I2O.js.map
