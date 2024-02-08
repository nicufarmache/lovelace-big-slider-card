function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;let e=class{#t;#e;#i=0;#s=0;#o=0;#r=0;#n;#l=!1;#a;#h;#c;constructor(t,e,{touchActions:i,stopScrollDirection:s="both"}={}){this.#t=t,this.#e=i,this.#n=e,this.#a=s,this.#h=this.#d.bind(this),this.#c=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#c),this.#t.addEventListener("pointermove",this.#c),this.#t.addEventListener("pointerup",this.#c),this.#t.addEventListener("pointercancel",this.#c),window.addEventListener("touchmove",this.#h,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#c),this.#t.removeEventListener("pointermove",this.#c),this.#t.removeEventListener("pointerup",this.#c),this.#t.removeEventListener("pointercancel",this.#c),window.removeEventListener("touchmove",this.#h),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#l=!0}#_(){this.#l=!1}#d(t){this.#l&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#s=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#n){const e=t.pageX-this.#i,i=t.pageY-this.#s,s=Math.abs(e/i)>1,o=Math.abs(e/i)<1;"horizontal"===this.#a&&s&&this.#p(),"vertical"===this.#a&&o&&this.#p(),"both"===this.#a&&this.#p(),this.#n(t,{startX:this.#i,startY:this.#s,relativeX:e,relativeY:i,totalX:e+this.#o,totalY:i+this.#r})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#i,this.#r=+this.#r+t.pageY-this.#s,this.#t.releasePointerCapture(t.pointerId),this.#_()),"pointercancel"===t.type&&(this.#n(t,{startX:this.#i,startY:this.#s,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#r}),this.#t.releasePointerCapture(t.pointerId),this.#_())}};const i={type:"custom:big-slider-card",attribute:"brightness",tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};var s={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",on:"On",off:"Off"},o={common:s},r={version:"Versiunea",invalid_configuration:"Configurație invalidă",show_warning:"Show Warning",no_entity_set:"Entitatea nu e setată",no_entity:"Entitatea nu e disponibilă",on:"Pornit",off:"Oprit"},n={common:r};const l={en:Object.freeze({__proto__:null,common:s,default:o}),ro:Object.freeze({__proto__:null,common:r,default:n})};function a(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce(((t,e)=>t[e]),l[s])}catch(e){o=t.split(".").reduce(((t,e)=>t[e]),l.en)}return void 0===o&&(o=t.split(".").reduce(((t,e)=>t[e]),l.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},c=(t,e,i)=>{e.constructor.createProperty(i,t)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function d(t){return function(t){return(e,i)=>void 0!==i?c(t,e,i):h(t,e)}({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var u,p;null===(u=window.HTMLSlotElement)||void 0===u||u.prototype.assignedElements;const _=window,v=_.trustedTypes,g=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,f="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,b="?"+m,y=`<${b}>`,$=document,A=()=>$.createComment(""),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,P=/>/g,T=RegExp(`>|${S}(?:([^\\s"'>=/]+)(${S}*=${S}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),L=new WeakMap,N=$.createTreeWalker($,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==g?g.createHTML(e):e}const I=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=x;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,a=n.exec(i),null!==a);)c=n.lastIndex,n===x?"!--"===a[1]?n=C:void 0!==a[1]?n=P:void 0!==a[2]?(H.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=T):void 0!==a[3]&&(n=T):n===T?">"===a[0]?(n=null!=o?o:x,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?T:'"'===a[3]?U:k):n===U||n===k?n=T:n===C||n===P?n=x:(n=T,o=void 0);const d=n===T&&t[e+1].startsWith("/>")?" ":"";r+=n===x?i+y:h>=0?(s.push(l),i.slice(0,h)+f+i.slice(h)+m+d):i+m+(-2===h?(s.push(void 0),e):d)}return[V(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[a,h]=I(t,e);if(this.el=j.createElement(a,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=N.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(f)||e.startsWith(m)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+f).split(m),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?q:"@"===e[1]?G:W})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),N.nextNode(),l.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)l.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var o,r,n,l;if(e===O)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=w(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Co)&&void 0!==n?n:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=z(t,a._$AS(t,e.values),a,s)),e}class D{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);N.currentNode=o;let r=N.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new B(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new K(r,this,t)),this._$AV.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(r=N.nextNode(),n++)}return N.currentNode=$,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),w(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==O&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&w(this._$AH)?this._$AA.nextSibling.data=t:this.$($.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=j.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new D(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new j(t)),e}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new B(this.k(A()),this.k(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=z(this,t,e,0),r=!w(t)||t!==this._$AH&&t!==O,r&&(this._$AH=t);else{const s=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=z(this,s[i+n],e,n),l===O&&(l=this._$AH[n]),r||(r=!w(l)||l!==this._$AH[n]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[n+1]),this._$AH[n]=l}r&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const Y=v?v.emptyScript:"";class q extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class G extends W{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:R)===O)return;const s=this._$AH,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const J=_.litHtmlPolyfillSupport;null==J||J(j,B),(null!==(p=_.litHtmlVersions)&&void 0!==p?p:_.litHtmlVersions=[]).push("2.8.0");const Z=window,F=Z.ShadowRoot&&(void 0===Z.ShadyCSS||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),tt=new WeakMap;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let et=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=tt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tt.set(e,t))}return t}toString(){return this.cssText}};const it=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new et(i,t,Q)},st=(t,e)=>{F?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=Z.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},ot=F?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new et("string"==typeof t?t:t+"",void 0,Q))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var rt;const nt=window,lt=nt.trustedTypes,at=lt?lt.emptyScript:"",ht=nt.reactiveElementPolyfillSupport,ct={toAttribute(t,e){switch(e){case Boolean:t=t?at:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},dt=(t,e)=>e!==t&&(e==e||t==t),ut={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:dt},pt="finalized";class _t extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ut}static finalize(){if(this.hasOwnProperty(pt))return!1;this[pt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ot(t))}else void 0!==t&&e.push(ot(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return st(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ut){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:ct).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:ct;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt,gt;_t[pt]=!0,_t.elementProperties=new Map,_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},null==ht||ht({ReactiveElement:_t}),(null!==(rt=nt.reactiveElementVersions)&&void 0!==rt?rt:nt.reactiveElementVersions=[]).push("1.6.3");class ft extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new B(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return O}}ft.finalized=!0,ft._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:ft});const mt=globalThis.litElementPolyfillSupport;null==mt||mt({LitElement:ft}),(null!==(gt=globalThis.litElementVersions)&&void 0!==gt?gt:globalThis.litElementVersions=[]).push("3.3.3");class bt extends ft{constructor(){super(...arguments),this._config=i,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t,e){const i=e.filter((t=>"light"===t.split(".")[0])).sort();return{type:"custom:big-slider-card",entity:i[Math.floor(Math.random()*i.length)]}}setConfig(t){if(!t)throw new Error(a("common.invalid_configuration"));if(!t.entity)throw new Error(a("common.no_entity_set"));if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this._config=Object.assign(Object.assign({},i),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,i,s,o,r,n;this._entity&&(this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._name=null!==(n=null!==(r=null!==(i=this._config.name)&&void 0!==i?i:null===(o=null===(s=this._state)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==r?r:this._entity.split(".")[1])&&void 0!==n?n:"")}_log(t){console.log(`%c  BIG-SLIDER-CARD ${this._name} %c ${t} `,"color: orange; font-weight: bold; background: black","")}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new e(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout((()=>this.setAttribute("pressed","")),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,s=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i,this._resetTrack()),this.currentValue>s&&(this.currentValue=s,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");e&&(e.innerText=Math.round(this.currentValue)+"%")}_updateColors(){var t,e,i,s,o;let r="var(--bsc-color)",n="0%",l="50%",h=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],a=null!==(s=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==s?s:255;h=!0,o&&(r=`rgb(${o.join(",")})`),a&&(n=`${Math.ceil(100*a/255)}%`,l=`${Math.ceil(100*a/510+50)}%`)}else r="var(--bsc-off-color)";const c=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");h||c&&(c.innerText=a("common.off")),this.style.setProperty("--bsc-entity-color",r),this.style.setProperty("--bsc-brightness",n),this.style.setProperty("--bsc-brightness-ui",l),this._config.icon_color&&h&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!h&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,e,i,s,o;if(!this._shouldUpdate)return;if(!this._state)return;const r=null===(t=this._config)||void 0===t?void 0:t.attribute;let n=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)n=null!==(e=this._config.min)&&void 0!==e?e:0;else switch(r){case"brightness":n=Math.round(100*(null!==(i=this._state.attributes.brightness)&&void 0!==i?i:255)/255);break;case"red":case"green":case"blue":const t=null!==(s=this._state.attributes.rgb_color)&&void 0!==s?s:[255,255,255];"red"===r&&(n=t[0]),"green"===r&&(n=t[1]),"blue"===r&&(n=t[2]),n=Math.ceil(100*n/255);break;case"hue":case"saturation":const e=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===r&&(n=e[0]),"saturation"===r&&(n=e[1])}this.currentValue=n,this._updateSlider()}_setValue(){var t,e;if(!this._state)return;let i,s=this.currentValue,o=this._config.attribute,r=!0;switch(o){case"brightness":s=Math.ceil(s/100*255),s||(r=!1);break;case"red":case"green":case"blue":i=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===o&&(i[0]=s),"green"===o&&(i[1]=s),"blue"===o&&(i[2]=s),s=i,o="rgb_color";break;case"hue":case"saturation":i=null!==(e=this._state.attributes.hs_color)&&void 0!==e?e:[100,100],"hue"===o&&(i[0]=s),"saturation"===o&&(i[1]=s),s=i,o="hs_color"}const n={entity_id:this._state.entity_id};r?(n[o]=s,this._config.transition&&(n.transition=this._config.transition),this._hass.callService("light","turn_on",n)):this._hass.callService("light","turn_off",n)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout((()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()}),t?this._config.settle_time:0)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,e,i,s,o;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${a("common.no_entity")}: ${this._entity}`);const r=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,n=null!==(s=this._config.show_percentage&&!0)&&void 0!==s&&s,l=null!==(o=this._config.bold_text&&!0)&&void 0!==o&&o;return this._setStyleProperty("--bsc-background",this._config.background_color),this._setStyleProperty("--bsc-primary-text-color",this._config.text_color),this._setStyleProperty("--bsc-slider-color",this._config.color),this._setStyleProperty("--bsc-border-color",this._config.border_color),this._setStyleProperty("--bsc-border-radius",this._config.border_radius),this._setStyleProperty("--bsc-border-style",this._config.border_style),this._setStyleProperty("--bsc-border-width",this._config.border_width),this._setStyleProperty("--bsc-height",this._config.height,(t=>`${t}px`)),M`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${r?"colorize":""}"></div>
        <ha-state-icon
        id="icon"
              .icon=${this._config.icon}
              .state=${this._state}
              .hass=${this._hass}
              .stateObj=${this._state}
              data-domain=${this._entity.split(".")[0]}
              data-state=${(t=>null!=t?t:R)
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._status)}
            ></ha-state-icon>
        <div id="content">
          <p id="label" class="${l?"bold":""}">
            <span id="name">${this._name}</span>
            <span id="percentage" class="${n?"":"hide"}"></span>
          </p>
        </div>
      </ha-card>
    `}_setStyleProperty(t,e,i=(t=>t)){null!=e&&""!==e&&this.style.setProperty(t,i(e))}_showWarning(t){return M`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),M`
      ${e}
    `}static get styles(){return it`
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
    `}}var yt;t([d()],bt.prototype,"_config",void 0),t([d()],bt.prototype,"_entity",void 0),t([d()],bt.prototype,"_state",void 0),t([d()],bt.prototype,"_status",void 0),t([d()],bt.prototype,"_name",void 0),console.info(`%c  BIG-SLIDER-CARD \n%c  ${a("common.version")} 1.1.5    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("big-slider-card",bt),window.customCards=null!==(yt=window.customCards)&&void 0!==yt?yt:[],window.customCards.push({type:"big-slider-card",name:"Big Slider Card",description:"Big slider card for light entities."});
