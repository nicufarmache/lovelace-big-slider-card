/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$2=e$3.trustedTypes,h$1=r$2?r$2.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r$1=document,u=()=>r$1.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E$1=new WeakMap,C=r$1.createTreeWalker(r$1,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$1).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z$1(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$1,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$1.get(t.strings);return void 0===i&&E$1.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}let Z$1 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}};const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$1.litHtmlVersions)&&void 0!==t$2?t$2:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

var t,r;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r||(r={}));function O(){return (O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}function E(e){return e.substr(0,e.indexOf("."))}function j(e){return e.substr(e.indexOf(".")+1)}var Z=["closed","locked","off"],ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i},ce={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function me(e,t){if(e in ce)return ce[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return "mdi:bell-plus";case"armed_night":return "mdi:bell-sleep";case"disarmed":return "mdi:bell-outline";case"triggered":return "mdi:bell-ring";default:return "mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return "closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return "mdi:emoticon-dead";case"sleeping":return "mdi:sleep";case"initializing":return "mdi:timer-sand";default:return "mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var le=function(e){ne(window,"haptic",e);},de=function(e,t,r){void 0===r&&(r=!1),r?history.replaceState(null,"",t):history.pushState(null,"",t),ne(window,"location-changed",{replace:r});},fe=function(e,t,r){void 0===r&&(r=!0);var n,i=E(t),a="group"===i?"homeassistant":i;switch(i){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off";}return e.callService(a,n,{entity_id:t})},ge=function(e,t){var r=Z.includes(e.states[t].state);return fe(e,t,r)},be=function(e,t,r,n,i){var a;if(i&&r.double_tap_action?a=r.double_tap_action:n&&r.hold_action?a=r.hold_action:!n&&r.tap_action&&(a=r.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(function(e){return e.user===t.user.id})||confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?"))switch(a.action){case"more-info":(a.entity||r.entity||r.camera_image)&&(ne(e,"hass-more-info",{entityId:a.entity?a.entity:r.entity?r.entity:r.camera_image}),a.haptic&&le(a.haptic));break;case"navigate":a.navigation_path&&(de(0,a.navigation_path),a.haptic&&le(a.haptic));break;case"url":a.url_path&&window.open(a.url_path),a.haptic&&le(a.haptic);break;case"toggle":r.entity&&(ge(t,r.entity),a.haptic&&le(a.haptic));break;case"call-service":if(!a.service)return;var o=a.service.split(".",2),u=o[0],c=o[1],m=O({},a.service_data);"entity"===m.entity_id&&(m.entity_id=r.entity),t.callService(u,c,m,a.target),a.haptic&&le(a.haptic);break;case"fire-dom-event":ne(e,"ll-custom",a),a.haptic&&le(a.haptic);}};function _e(e,t,r){if(t.has("config")||r)return !0;if(e.config.entity){var n=t.get("hass");return !n||n.states[e.config.entity]!==e.hass.states[e.config.entity]}return !1}var ke=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null},xe={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},De={binary_sensor:function(e,t){var r="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return r?"mdi:battery":"mdi:battery-outline";case"battery_charging":return r?"mdi:battery":"mdi:battery-charging";case"cold":return r?"mdi:thermometer":"mdi:snowflake";case"connectivity":return r?"mdi:server-network-off":"mdi:server-network";case"door":return r?"mdi:door-closed":"mdi:door-open";case"garage_door":return r?"mdi:garage":"mdi:garage-open";case"power":return r?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return r?"mdi:check-circle":"mdi:alert-circle";case"smoke":return r?"mdi:check-circle":"mdi:smoke";case"heat":return r?"mdi:thermometer":"mdi:fire";case"light":return r?"mdi:brightness-5":"mdi:brightness-7";case"lock":return r?"mdi:lock":"mdi:lock-open";case"moisture":return r?"mdi:water-off":"mdi:water";case"motion":return r?"mdi:walk":"mdi:run";case"occupancy":return r?"mdi:home-outline":"mdi:home";case"opening":return r?"mdi:square":"mdi:square-outline";case"plug":return r?"mdi:power-plug-off":"mdi:power-plug";case"presence":return r?"mdi:home-outline":"mdi:home";case"running":return r?"mdi:stop":"mdi:play";case"sound":return r?"mdi:music-note-off":"mdi:music-note";case"update":return r?"mdi:package":"mdi:package-up";case"vibration":return r?"mdi:crop-portrait":"mdi:vibrate";case"window":return r?"mdi:window-closed":"mdi:window-open";default:return r?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return me("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in xe)return xe[t];if("battery"===t){var r=Number(e.state);if(isNaN(r))return "mdi:battery-unknown";var n=10*Math.round(r/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var i=e.attributes.unit_of_measurement;return "°C"===i||"°F"===i?"mdi:thermometer":me("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?me("input_datetime"):"mdi:calendar":"mdi:clock"}},Se=function(e){if(!e)return "mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=E(e.entity_id);return t in De?De[t](e):me(t,e.state)};

class SlideGesture {
  #el;
  #touchActions;
  #startX = 0;
  #startY = 0;
  #lastTotalX = 0;
  #lastTotalY = 0;
  #callback;
  #shouldPreventScroll = false
  #stopScrollDirection;
  #boundHandleScroll;
  #boundHandleEvt;

  constructor(el, callback, { touchActions, stopScrollDirection } = {}){
    this.#el = el;
    this.#touchActions = touchActions;
    this.#callback = callback;
    this.#stopScrollDirection = stopScrollDirection;
    this.#boundHandleScroll = this.#handleScroll.bind(this);
    this.#boundHandleEvt = this.#handleEvt.bind(this);
    this.addListeners();
  }

  addListeners() {
    this.#el.addEventListener("pointerdown", this.#boundHandleEvt);
    this.#el.addEventListener("pointermove", this.#boundHandleEvt);
    this.#el.addEventListener("pointerup", this.#boundHandleEvt);
    this.#el.addEventListener("pointercancel", this.#boundHandleEvt);
    window.addEventListener("touchmove", this.#boundHandleScroll, {passive:false});
    if(this.#touchActions) this.#el.style.touchAction = this.#touchActions;
  }

  removeListeners() {
    this.#el.removeEventListener("pointerdown", this.#boundHandleEvt);
    this.#el.removeEventListener("pointermove", this.#boundHandleEvt);
    this.#el.removeEventListener("pointerup", this.#boundHandleEvt);
    this.#el.removeEventListener("pointercancel", this.#boundHandleEvt);
    window.removeEventListener("touchmove", this.#boundHandleScroll);
    if(this.#touchActions) this.#el.style.touchAction = null;
  }

  #preventTouchScroll() {
    this.#shouldPreventScroll = true;
  }

  #allowTouchScroll() {
    this.#shouldPreventScroll = false;
  }

  #handleScroll(evt) {
    if(this.#shouldPreventScroll){
      evt.preventDefault();
    }
  }

  #handleEvt(evt) {  
    if (evt.type === 'pointerdown') {
      this.#el.setPointerCapture(evt.pointerId);
      this.#startX = evt.pageX;
      this.#startY = evt.pageY;
    }

    if (this.#el.hasPointerCapture(evt.pointerId) && evt.type !== 'pointercancel' && (typeof this.#callback) === 'function') {
      const relativeX = evt.pageX - this.#startX;
      const relativeY = evt.pageY - this.#startY;

      if ( this.#stopScrollDirection === 'horizontal' && Math.abs(relativeX / relativeY) > 1 ) {
        this.#preventTouchScroll();
      }
      if ( this.#stopScrollDirection === 'vertical' && Math.abs(relativeX / relativeY) < 1 ) {
        this.#preventTouchScroll();
      }

      this.#callback(evt, {
        startX: this.#startX,
        startY: this.#startY,
        relativeX,
        relativeY,
        totalX: relativeX + this.#lastTotalX,
        totalY: relativeY + this.#lastTotalY,
      });
    }
  
    if (evt.type === 'pointerup') {
      this.#lastTotalX = + this.#lastTotalX + evt.pageX - this.#startX;
      this.#lastTotalY = + this.#lastTotalY + evt.pageY - this.#startY;
      this.#el.releasePointerCapture(evt.pointerId);
      this.#allowTouchScroll();
    }

    if (evt.type === 'pointercancel') {
      this.#callback(evt, {
        startX: this.#startX,
        startY: this.#startY,
        relativeX: 0,
        relativeY: 0,
        totalX: this.#lastTotalX,
        totalY: this.#lastTotalY,
      });
      this.#el.releasePointerCapture(evt.pointerId);
      this.#allowTouchScroll();
    }
  }
}

const CARD_VERSION = '1.1.3';
const DEFAULT_ATTRIBUTE = 'brightness';
const SETTLE_TIME = 3000;
const HOLD_TIME = 600;
const MIN_SLIDE_TIME = 0;
const TAP_THRESHOLD = 5;
const MIN = 0;
const MAX = 100;

var common$1 = {
	version: "Version",
	invalid_configuration: "Invalid configuration",
	show_warning: "Show Warning",
	no_entity_set: "Entity not set",
	no_entity: "Entity not available",
	on: "On",
	off: "Off"
};
var en = {
	common: common$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common$1,
    default: en
});

var common = {
	version: "Versiunea",
	invalid_configuration: "Configurație invalidă",
	show_warning: "Show Warning",
	no_entity_set: "Entitatea nu e setată",
	no_entity: "Entitatea nu e disponibilă",
	on: "Pornit",
	off: "Oprit"
};
var ro = {
	common: common
};

var ro$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common,
    default: ro
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages = {
    en: en$1,
    ro: ro$1,
};
function localize(string, search = '', replace = '') {
    const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');
    let translated;
    try {
        translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
    }
    catch (e) {
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    }
    if (translated === undefined)
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}

var _a;
/* eslint no-console: 0 */
console.info(`%c  BIG-SLIDER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `, 'color: orange; font-weight: bold; background: black', 'color: white; font-weight: bold; background: dimgray');
// This puts your card into the UI card picker dialog
window.customCards = (_a = window.customCards) !== null && _a !== void 0 ? _a : [];
window.customCards.push({
    type: 'big-slider-card',
    name: 'Big Slider Card',
    description: 'Big slider card for light entities.',
});
let BigSliderCard = class BigSliderCard extends s {
    static getStubConfig() {
        return {};
    }
    constructor() {
        super();
        this._handleContextMenu = (ev) => {
            const e = ev !== null && ev !== void 0 ? ev : window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        };
        this._handlePointer = (evt, extra) => {
            var _a;
            this.mousePos = { x: evt.pageX, y: evt.pageY };
            const minSlideTime = (_a = this.config.min_slide_time) !== null && _a !== void 0 ? _a : MIN_SLIDE_TIME;
            if (evt.type === 'pointerdown') {
                this._press();
                this.isTap = true;
                this.isHold = false;
                this.holdTimer = window.setTimeout(this._setHold, this.config.hold_time);
                this.trackingStartTime = Date.now();
                this._resetTrack();
            }
            if (['pointerdown', 'pointermove', 'pointerup'].includes(evt.type)) {
                this._updateValue();
            }
            if (evt.type === 'pointermove') {
                if (this.isTap && (Math.abs(extra.relativeX) < TAP_THRESHOLD && Math.abs(extra.relativeY) < TAP_THRESHOLD))
                    return;
                this.isTap = false;
                clearTimeout(this.holdTimer);
                this._stopUpdates();
            }
            if (evt.type === 'pointercancel') {
                clearTimeout(this.holdTimer);
                this._unpress();
                this._startUpdates();
            }
            if (evt.type === 'pointerup') {
                clearTimeout(this.holdTimer);
                this._unpress();
                this._startUpdates();
                if (this.isTap) {
                    this._handleTap();
                    return;
                }
                if ((Date.now() - this.trackingStartTime) > minSlideTime) {
                    this._setValue();
                    this._startUpdates(true);
                }
            }
        };
        this._setHold = () => {
            this.isTap = false;
            this.isHold = true;
            be(this, this.hass, this.config, true, false);
        };
        this._handleTap = () => {
            var _a;
            clearTimeout(this.holdTimer);
            if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tap_action) {
                if (!this.isHold) {
                    be(this, this.hass, this.config, false, false);
                }
            }
        };
        this.mouseStartPos = { x: 0, y: 0 };
        this.mousePos = { x: 0, y: 0 };
        this.containerWidth = 0;
        this.oldValue = 0;
        this.currentValue = 30;
        this.stateObj = null;
        this.isTap = false;
        this.isHold = false;
        this.holdTimer = 0;
        this._shouldUpdate = true;
        this.updateTimeout = 0;
        this.pressTimeout = 0;
        this.trackingStartTime = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('contextmenu', this._handleContextMenu);
        this.slideGesture = new SlideGesture(this, this._handlePointer.bind(this), {
            touchActions: 'pan-y',
            stopScrollDirection: 'horizontal'
        });
    }
    disconnectedCallback() {
        this.removeEventListener('contextmenu', this._handleContextMenu);
        this.slideGesture.removeListeners();
        super.disconnectedCallback();
    }
    _log(text) {
        console.log(`%c  BIG-SLIDER-CARD ${this._getName()} %c ${text} `, 'color: orange; font-weight: bold; background: black', '');
    }
    _updateValue() {
        const width = this.containerWidth;
        const dx = this.mousePos.x - this.mouseStartPos.x;
        const percentage = Math.round(100 * dx / width);
        this.currentValue = this.oldValue + percentage;
        this._checklimits();
        this._updateSlider();
    }
    _resetTrack() {
        this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
        this.oldValue = this.currentValue;
    }
    _press() {
        var _a;
        if (this.pressTimeout)
            clearTimeout(this.pressTimeout);
        this.pressTimeout = window.setTimeout(() => this.setAttribute('pressed', ''), (_a = this.config.min_slide_time) !== null && _a !== void 0 ? _a : MIN_SLIDE_TIME);
        this.setAttribute('half-pressed', '');
    }
    _unpress() {
        if (this.pressTimeout)
            clearTimeout(this.pressTimeout);
        this.removeAttribute('pressed');
        this.removeAttribute('half-pressed');
    }
    _checklimits() {
        var _a, _b;
        const min = (_a = this.config.min) !== null && _a !== void 0 ? _a : MIN;
        const max = (_b = this.config.max) !== null && _b !== void 0 ? _b : MAX;
        if (this.currentValue < min) {
            this.currentValue = min;
            this._resetTrack();
        }
        if (this.currentValue > max) {
            this.currentValue = max;
            this._resetTrack();
        }
    }
    _updateSlider() {
        var _a;
        this.style.setProperty('--bsc-percent', this.currentValue + '%');
        const percentage = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('percentage');
        percentage && (percentage.innerText = Math.round(this.currentValue) + '%');
    }
    _updateColors() {
        var _a, _b, _c, _d, _e;
        let color = 'var(--bsc-color)';
        let brightness = '0%';
        let brightnessUI = '50%';
        let isOn = false;
        if (this.stateObj) {
            if (this.stateObj.state == 'on') {
                const stateColor = (_b = (_a = this.stateObj.attributes) === null || _a === void 0 ? void 0 : _a.rgb_color) !== null && _b !== void 0 ? _b : [255, 255, 255];
                const stateBrightness = (_d = (_c = this.stateObj.attributes) === null || _c === void 0 ? void 0 : _c.brightness) !== null && _d !== void 0 ? _d : 255;
                isOn = true;
                if (stateColor) {
                    color = `rgb(${stateColor.join(',')})`;
                }
                if (stateBrightness) {
                    brightness = `${Math.ceil(100 * stateBrightness / 255)}%`;
                    brightnessUI = `${Math.ceil(100 * stateBrightness / 510 + 50)}%`;
                }
            }
            else {
                color = 'var(--bsc-off-color)';
            }
        }
        const percentage = (_e = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _e === void 0 ? void 0 : _e.getElementById('percentage');
        if (!isOn) {
            percentage && (percentage.innerText = localize('common.off'));
        }
        this.style.setProperty('--bsc-entity-color', color);
        this.style.setProperty('--bsc-brightness', brightness);
        this.style.setProperty('--bsc-brightness-ui', brightnessUI);
        if (this.config.icon_color && isOn) {
            this.style.setProperty('--bsc-icon-color', this.config.icon_color);
        }
        if (this.config.icon_color && !isOn) {
            this.style.removeProperty('--bsc-icon-color');
        }
    }
    _getValue() {
        var _a, _b, _c, _d, _e, _f;
        if (!this._shouldUpdate)
            return;
        if (!this.stateObj)
            return;
        const attr = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.attribute) !== null && _b !== void 0 ? _b : DEFAULT_ATTRIBUTE;
        let _value = 0;
        if (this.stateObj.state == 'unavailable') {
            this.config.min = 0;
            this.config.max = 0;
            this.style.setProperty('--bsc-opacity', '0.5');
        }
        else {
            this.config.min = this.config.original_min;
            this.config.max = this.config.original_max;
            this.style.removeProperty('--bsc-opacity');
        }
        if (this.stateObj.state != 'on') {
            _value = (_c = this.config.min) !== null && _c !== void 0 ? _c : MIN;
        }
        else {
            switch (attr) {
                case 'brightness':
                    _value = Math.round(100 * ((_d = this.stateObj.attributes.brightness) !== null && _d !== void 0 ? _d : 255) / 255);
                    break;
                case 'red':
                case 'green':
                case 'blue':
                    const rgb = (_e = this.stateObj.attributes.rgb_color) !== null && _e !== void 0 ? _e : [255, 255, 255];
                    if (attr === 'red')
                        _value = rgb[0];
                    if (attr === 'green')
                        _value = rgb[1];
                    if (attr === 'blue')
                        _value = rgb[2];
                    _value = Math.ceil(100 * _value / 255);
                    break;
                case 'hue':
                case 'saturation':
                    const hs = (_f = this.stateObj.attributes.hs_color) !== null && _f !== void 0 ? _f : [100, 100];
                    if (attr === 'hue')
                        _value = hs[0];
                    if (attr === 'saturation')
                        _value = hs[1];
                    break;
            }
        }
        this.currentValue = _value;
        this._updateSlider();
    }
    _setValue() {
        var _a, _b, _c;
        let value = this.currentValue;
        let attr = (_a = this.config.attribute) !== null && _a !== void 0 ? _a : DEFAULT_ATTRIBUTE;
        let on = true;
        let _value;
        switch (attr) {
            case 'brightness':
                value = Math.ceil(value / 100.0 * 255);
                if (!value)
                    on = false;
                break;
            case 'red':
            case 'green':
            case 'blue':
                _value = (_b = this.stateObj.attributes.rgb_color) !== null && _b !== void 0 ? _b : [255, 255, 255];
                if (attr === 'red')
                    _value[0] = value;
                if (attr === 'green')
                    _value[1] = value;
                if (attr === 'blue')
                    _value[2] = value;
                value = _value;
                attr = 'rgb_color';
                break;
            case 'hue':
            case 'saturation':
                _value = (_c = this.stateObj.attributes.hs_color) !== null && _c !== void 0 ? _c : [100, 100];
                if (attr === 'hue')
                    _value[0] = value;
                if (attr === 'saturation')
                    _value[1] = value;
                value = _value;
                attr = 'hs_color';
                break;
        }
        const params = {
            entity_id: this.stateObj.entity_id,
        };
        if (on) {
            params[attr] = value;
            if (this.config.transition) {
                params.transition = this.config.transition;
            }
            this.hass.callService('light', 'turn_on', params);
        }
        else {
            this.hass.callService('light', 'turn_off', params);
        }
    }
    // https://lit-element.polymer-project.org/guide/properties#accessors-custom
    setConfig(config) {
        if (!config) {
            throw new Error(localize('common.invalid_configuration'));
        }
        if (!config.entity) {
            throw new Error(localize('common.no_entity_set'));
        }
        if (config.test_gui) {
            ke().setEditMode(true);
        }
        this.config = Object.assign({ attribute: DEFAULT_ATTRIBUTE, tap_action: {
                action: 'toggle',
                haptic: 'light',
            }, hold_time: HOLD_TIME, settle_time: SETTLE_TIME, min: MIN, max: MAX }, config);
        this.config.original_min = this.config.min;
        this.config.original_max = this.config.max;
    }
    _stopUpdates() {
        var _a, _b, _c;
        if (this.updateTimeout)
            clearTimeout(this.updateTimeout);
        if (!this._shouldUpdate)
            return;
        (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('slider')) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.remove('animate');
        this._shouldUpdate = false;
    }
    _startUpdates(settle = false) {
        if (this.updateTimeout)
            clearTimeout(this.updateTimeout);
        this.updateTimeout = window.setTimeout(() => {
            var _a, _b, _c;
            this._shouldUpdate = true;
            (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('slider')) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.add('animate');
            this.requestUpdate();
        }, settle ? this.config.settle_time : 0);
    }
    // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
    shouldUpdate(changedProps) {
        if (!this.config) {
            return false;
        }
        return _e(this, changedProps, false);
    }
    updated() {
        var _a, _b, _c;
        this.containerWidth = (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('container')) === null || _b === void 0 ? void 0 : _b.clientWidth) !== null && _c !== void 0 ? _c : 0;
        this._getValue();
        this._updateColors();
    }
    // https://lit-element.polymer-project.org/guide/templates
    render() {
        var _a, _b, _c, _d, _e;
        if (!(this.config)) {
            this.stateObj = null;
        }
        if (!(this.config.entity)) {
            this.stateObj = null;
        }
        if (!(this.config.entity && (this.config.entity in this.hass.states))) {
            this.stateObj = null;
            return this._showError(`${localize('common.no_entity')}: ${this.config.entity}`);
        }
        this.stateObj = this.config.entity && this.hass.states[this.config.entity];
        const name = this._getName();
        const icon = (_a = this.config.icon) !== null && _a !== void 0 ? _a : Se(this.stateObj);
        const colorize = (_b = (this.config.colorize && true)) !== null && _b !== void 0 ? _b : false;
        const showPercentage = (_c = (this.config.show_percentage && true)) !== null && _c !== void 0 ? _c : false;
        const boldText = (_d = (this.config.bold_text && true)) !== null && _d !== void 0 ? _d : false;
        this._setStyleProperty('--bsc-background', this.config.background_color);
        this._setStyleProperty('--bsc-primary-text-color', this.config.text_color);
        this._setStyleProperty('--bsc-slider-color', this.config.color);
        this._setStyleProperty('--bsc-border-color', this.config.border_color);
        this._setStyleProperty('--bsc-border-radius', this.config.border_radius);
        this._setStyleProperty('--bsc-border-style', this.config.border_style);
        this._setStyleProperty('--bsc-border-width', this.config.border_width);
        this._setStyleProperty('--bsc-height', this.config.height, (height) => `${height}px`);
        return x `
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${colorize ? 'colorize' : ''}"></div>
        <ha-icon .icon="${icon}" id="icon"></ha-icon>
        <div id="content">
          <p id="label" class="${boldText ? 'bold' : ''}">
            <span id="name">${(_e = this.config.name) !== null && _e !== void 0 ? _e : name}</span>
            <span id="percentage" class="${showPercentage ? '' : 'hide'}"></span>
          </p>
        </div>
      </ha-card>
    `;
    }
    _setStyleProperty(name, value, transform = (value) => value) {
        if (value !== undefined && value !== null && value !== '') {
            this.style.setProperty(name, transform(value));
        }
    }
    _getName() {
        var _a, _b, _c;
        if ((_b = (_a = this.stateObj) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.friendly_name) {
            return this.stateObj.attributes.friendly_name;
        }
        else if ((_c = this.stateObj) === null || _c === void 0 ? void 0 : _c.entity_id) {
            return j(this.stateObj.entity_id);
        }
        else {
            return '???';
        }
    }
    _showWarning(warning) {
        return x `
      <hui-warning>${warning}</hui-warning>
    `;
    }
    _showError(error) {
        const errorCard = document.createElement('hui-error-card');
        errorCard.setConfig({
            type: 'error',
            error,
            // origConfig: this.config,
        });
        return x `
      ${errorCard}
    `;
    }
    // https://lit-element.polymer-project.org/guide/styles
    static get styles() {
        return i$2 `
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 60px);
        --bsc-opacity: 1;


        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        transform: scale(0.99);
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
      }

      .hide {
        display: none
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        opacity: 0.3;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition: background-color 1s ease, filter 1s ease;
      }

      #slider.animate {
        transition: right 1s ease, background-color 1s ease, filter 1s ease;
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: color 0.3s ease-out;
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 72px;
        box-sizing: border-box;
      }

      #label {
        display: flex;
        flex-direction: column;
      }

      #label.bold {
        font-weight: bold;
      }

      #name {
        color: var(--bsc-primary-text-color)
      }

      #percentage {
        color: var(--bsc-secondary-text-color)
      }
    `;
    }
};
__decorate([
    n$1({ attribute: false })
], BigSliderCard.prototype, "hass", void 0);
__decorate([
    t$1()
], BigSliderCard.prototype, "config", void 0);
BigSliderCard = __decorate([
    e$1('big-slider-card')
], BigSliderCard);

export { BigSliderCard };
