/*! *****************************************************************************
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
function t(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${i}`);class r{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=r.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],n=h.exec(e)[2],s=n.toLowerCase()+"$lit$",i=t.getAttribute(s);t.removeAttribute(s);const r=i.split(o);this.parts.push({type:"attribute",index:d,name:n,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,i=e.split(o),r=i.length-1;for(let e=0;e<r;e++){let n,o=i[e];if(""===o)n=l();else{const t=h.exec(o);null!==t&&a(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++d})}""===i[r]?(s.insertBefore(l(),t),n.push(t)):t.data=i[r],u+=r}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(l(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(n.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,133,null,!1);let o=p(s),r=s[o],a=-1,c=0;const l=[];let h=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-c,o=p(s,o),r=s[o]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=i.nextNode();for(;r<s.length;)if(o=s[r],c(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=n.pop(),l=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${s} `;class b{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=h.exec(t);e+=null===a?t+(n?w:i):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=n[i];if(void 0!==e){const t=e.value;if(S(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const n=new _(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new T(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class M extends k{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends P{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class O{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(s);return n=e.keyString.get(i),void 0===n&&(n=new r(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const $=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new M(t,e.slice(1),n).parts}if("@"===i)return[new O(t,e.slice(1),s.eventContext)];if("?"===i)return[new C(t,e.slice(1),n)];return new k(t,e,n).parts}handleTextExpression(t){return new T(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(t,...e)=>new b(t,e,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,j=(t,e)=>`${t}--${e}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const L=t=>e=>{const n=j(e.type,t);let i=$.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(n,i));let o=i.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(s);if(o=i.keyString.get(a),void 0===o){const n=e.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(n,t),o=new r(e,n),i.keyString.set(a,o)}return i.stringsArray.set(e.strings,o),o},H=["html","svg"],I=new Set,q=(t,e,n)=>{I.add(t);const s=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{H.forEach(e=>{const n=$.get(j(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),d(t,n)})})})(t);const a=s.content;n?function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null==n)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=p(i),a=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===n&&(a=u(e),n.parentNode.insertBefore(e,n));-1!==r&&i[r].index===c;){if(a>0){for(;-1!==r;)i[r].index+=a,r=p(i,r);return}r=p(i,r)}}}(n,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),d(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=F){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||z,i="function"==typeof s?s:s.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||z.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=B){const s=this.constructor,i=s._attributeNameForProperty(t,n);if(void 0!==i){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let s=!0;if(void 0!==t){const i=this.constructor;n=n||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function G(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):X(t,e)}function Z(t){return G({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new tt(n,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const nt={};class st extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),s=[];n.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return nt}}st.finalized=!0,st.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,o=V.has(e),r=Y&&11===e.nodeType&&!!e.host,a=r&&!I.has(i),c=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=V.get(e);void 0===i&&(n(e,e.firstChild),V.set(e,i=new T(Object.assign({templateFactory:D},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,c,Object.assign({templateFactory:L(i)},s)),a){const t=V.get(c);V.delete(c);const s=t.value instanceof _?t.value.template:void 0;q(i,c,s),n(e,e.firstChild),e.appendChild(c),V.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var it=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ot="[^\\s]+",rt=/\[([^]*?)\]/gm;function at(t,e){for(var n=[],s=0,i=t.length;s<i;s++)n.push(t[s].substr(0,e));return n}var ct=function(t){return function(e,n){var s=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function lt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var s=0,i=e;s<i.length;s++){var o=i[s];for(var r in o)t[r]=o[r]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dt=["January","February","March","April","May","June","July","August","September","October","November","December"],ut=at(dt,3),pt={dayNamesShort:at(ht,3),dayNames:ht,monthNamesShort:ut,monthNames:dt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=lt({},pt),ft=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},gt={D:function(t){return String(t.getDate())},DD:function(t){return ft(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return ft(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return ft(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return ft(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return ft(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return ft(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return ft(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return ft(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return ft(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return ft(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return ft(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ft(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+ft(Math.floor(Math.abs(e)/60),2)+":"+ft(Math.abs(e)%60,2)}},vt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],yt=[null,ot],wt=["isPm",ot,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],St=(ct("monthNamesShort"),ct("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xt=function(t,e,n){if(void 0===e&&(e=St.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=St[e]||e).replace(rt,(function(t,e){return s.push(e),"@@@"}));var i=lt(lt({},mt),n);return(e=e.replace(it,(function(e){return gt[e](t,i)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function kt(t){return t.substr(0,t.indexOf("."))}var Pt="hass:bookmark",Tt=["closed","locked","off"],Ct=function(t,e,n,s){s=s||{},n=null==n?{}:n;var i=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return i.detail=n,t.dispatchEvent(i),i},Mt={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Nt(t,e){if(t in Mt)return Mt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),Pt}}var Et=function(t){Ct(window,"haptic",t)},Ot=function(t,e){return function(t,e,n){void 0===n&&(n=!0);var s,i=kt(e),o="group"===i?"homeassistant":i;switch(i){case"lock":s=n?"unlock":"lock";break;case"cover":s=n?"open_cover":"close_cover";break;default:s=n?"turn_on":"turn_off"}return t.callService(o,s,{entity_id:e})}(t,e,Tt.includes(t.states[e].state))},At=function(t,e,n,s,i){var o;if(i&&n.double_tap_action?o=n.double_tap_action:s&&n.hold_action?o=n.hold_action:!s&&n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||n.entity||n.camera_image)&&(Ct(t,"hass-more-info",{entityId:o.entity?o.entity:n.entity?n.entity:n.camera_image}),o.haptic&&Et(o.haptic));break;case"navigate":o.navigation_path&&(function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),Ct(window,"location-changed",{replace:n})}(0,o.navigation_path),o.haptic&&Et(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&Et(o.haptic);break;case"toggle":n.entity&&(Ot(e,n.entity),o.haptic&&Et(o.haptic));break;case"call-service":if(!o.service)return;var r=o.service.split(".",2),a=r[0],c=r[1],l=Object.assign({},o.service_data);"entity"===l.entity_id&&(l.entity_id=n.entity),e.callService(a,c,l),o.haptic&&Et(o.haptic)}};var Dt={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},$t={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Nt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in Dt)return Dt[e];if("battery"===e){var n=Number(t.state);if(isNaN(n))return"hass:battery-unknown";var s=10*Math.round(n/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":"hass:battery-"+s}var i=t.attributes.unit_of_measurement;return"°C"===i||"°F"===i?"hass:thermometer":Nt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Nt("input_datetime"):"hass:calendar":"hass:clock"}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Vt=0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ut=0,Rt=0,jt=[],Yt=0,Lt=!1,Ht=document.createTextNode("");new window.MutationObserver((function(){Lt=!1;const t=jt.length;for(let e=0;e<t;e++){let t=jt[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}jt.splice(0,t),Rt+=t})).observe(Ht,{characterData:!0});const It={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},qt={run:t=>(Lt||(Lt=!0,Ht.textContent=Yt++),jt.push(t),Ut++),cancel(t){const e=t-Rt;if(e>=0){if(!jt[e])throw new Error("invalid async handle: "+t);jt[e]=null}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class zt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Ft.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ft.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof zt?t._cancelAsync():t=new zt,t.setConfig(e,n),t}}let Ft=new Set;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Bt=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),Bt&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]}catch(t){return!1}})();window.Polymer&&window.Polymer.rootPath||(Wt=document.baseURI||window.location.href).substring(0,Wt.lastIndexOf("/")+1);var Wt;window.Polymer&&window.Polymer.sanitizeDOMValue;let Jt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;window.Polymer&&window.Polymer.strictTemplatePolicy,window.Polymer&&window.Polymer.allowTemplateFromDomModule,window.Polymer&&window.Polymer.legacyOptimizations,window.Polymer&&window.Polymer.legacyWarnings,window.Polymer&&window.Polymer.syncInitialRender,window.Polymer&&window.Polymer.legacyUndefined,window.Polymer&&window.Polymer.orderedComputed,window.Polymer&&window.Polymer.removeNestedTemplates,window.Polymer&&window.Polymer.fastDomIf,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Xt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gt="string"==typeof document.head.style.touchAction,Zt="__polymerGesturesHandled",Kt="__polymerGesturesTouchAction",Qt=["mousedown","mousemove","mouseup","click"],te=[0,1,4,2],ee=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ne(t){return Qt.indexOf(t)>-1}let se=!1;function ie(t){if(!ne(t)&&"touchend"!==t)return Gt&&se&&Jt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){se=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let oe=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const re=[],ae={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ce={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function le(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let s=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<s.length;t++)e.push(s[t])}}return e}let he=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[Zt]={skip:!0},"click"===t.type)){let e=!1,s=ge(t);for(let t=0;t<s.length;t++){if(s[t].nodeType===Node.ELEMENT_NODE)if("label"===s[t].localName)re.push(s[t]);else if(n=s[t],ae[n.localName]){let n=le(s[t]);for(let t=0;t<n.length;t++)e=e||re.indexOf(n[t])>-1}if(s[t]===pe.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function de(t){let e=oe?["click"]:Qt;for(let n,s=0;s<e.length;s++)n=e[s],t?(re.length=0,document.addEventListener(n,he,!0)):document.removeEventListener(n,he,!0)}function ue(t){let e=t.type;if(!ne(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!ee&&(e=te[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let pe={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function me(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function fe(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){pe.mouse.mouseIgnoreJob||de(!0),pe.mouse.target=ge(t)[0],pe.mouse.mouseIgnoreJob=zt.debounce(pe.mouse.mouseIgnoreJob,It.after(2500),(function(){de(),pe.mouse.target=null,pe.mouse.mouseIgnoreJob=null}))}),!!se&&{passive:!0});const ge=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],ve={},_e=[];function ye(t){const e=ge(t);return e.length>0?e[0]:t.target}function we(t){let e,n=t.type,s=t.currentTarget.__polymerGestures;if(!s)return;let i=s[n];if(i){if(!t[Zt]&&(t[Zt]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(pe.touch.id=e.identifier),pe.touch.id!==e.identifier)return;Gt||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)pe.touch.x=e.clientX,pe.touch.y=e.clientY,pe.touch.scrollDecided=!1;else if("touchmove"===n){if(pe.touch.scrollDecided)return;pe.touch.scrollDecided=!0;let n=function(t){let e="auto",n=ge(t);for(let t,s=0;s<n.length;s++)if(t=n[s],t[Kt]){e=t[Kt];break}return e}(t),s=!1,i=Math.abs(pe.touch.x-e.clientX),o=Math.abs(pe.touch.y-e.clientY);t.cancelable&&("none"===n?s=!0:"pan-x"===n?s=o>i:"pan-y"===n&&(s=i>o)),s?t.preventDefault():Pe("track")}}(t)}if(e=t[Zt],!e.skip){for(let n,s=0;s<_e.length;s++)n=_e[s],i[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let s,o=0;o<_e.length;o++)s=_e[o],i[s.name]&&!e[s.name]&&(e[s.name]=!0,s[n](t))}}}function be(t,e,n){return!!ve[e]&&(function(t,e,n){let s=ve[e],i=s.deps,o=s.name,r=t.__polymerGestures;r||(t.__polymerGestures=r={});for(let e,n,s=0;s<i.length;s++)e=i[s],oe&&ne(e)&&"click"!==e||(n=r[e],n||(r[e]=n={_count:0}),0===n._count&&t.addEventListener(e,we,ie(e)),n[o]=(n[o]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),s.touchAction&&function(t,e){Gt&&t instanceof HTMLElement&&qt.run(()=>{t.style.touchAction=e});t[Kt]=e}(t,s.touchAction)}(t,e,n),!0)}function Se(t,e,n){return!!ve[e]&&(function(t,e,n){let s=ve[e],i=s.deps,o=s.name,r=t.__polymerGestures;if(r)for(let e,n,s=0;s<i.length;s++)e=i[s],n=r[e],n&&n[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,we,ie(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function xe(t){_e.push(t);for(let e=0;e<t.emits.length;e++)ve[t.emits[e]]=t}function ke(t,e,n){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=n,Xt(t).dispatchEvent(s),s.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Pe(t){let e=function(t){for(let e,n=0;n<_e.length;n++){e=_e[n];for(let n,s=0;s<e.emits.length;s++)if(n=e.emits[s],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Te(t,e,n,s){e&&ke(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:s,prevent:function(t){return Pe(t)}})}function Ce(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),i=Math.abs(t.y-n);return s>=5||i>=5}function Me(t,e,n){if(!e)return;let s,i=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,a=o.y-t.y,c=0;i&&(s=o.x-i.x,c=o.y-i.y),ke(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:r,dy:a,ddx:s,ddy:c,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),s=n;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let i=s;if(s=s.shadowRoot.elementFromPoint(t,e),i===s)break;s&&(n=s)}return n}(n.clientX,n.clientY)}})}function Ne(t,e,n){let s=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=ye(n||e);!o||ce[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(i)||s<=25&&i<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=ye(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),s=t.pageX,i=t.pageY;return!(s>=n.left&&s<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(e))&&(t.prevent||ke(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/xe({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){fe(this.info)},mousedown:function(t){if(!ue(t))return;let e=ye(t),n=this;me(this.info,(function(t){ue(t)||(Te("up",e,t),fe(n.info))}),(function(t){ue(t)&&Te("up",e,t),fe(n.info)})),Te("down",e,t)},touchstart:function(t){Te("down",ye(t),t.changedTouches[0],t)},touchend:function(t){Te("up",ye(t),t.changedTouches[0],t)}}),xe({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,fe(this.info)},mousedown:function(t){if(!ue(t))return;let e=ye(t),n=this,s=function(t){let s=t.clientX,i=t.clientY;Ce(n.info,s,i)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&Pe("tap"),n.info.addMove({x:s,y:i}),ue(t)||(n.info.state="end",fe(n.info)),e&&Me(n.info,e,t),n.info.started=!0)};me(this.info,s,(function(t){n.info.started&&s(t),fe(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=ye(t),n=t.changedTouches[0],s=n.clientX,i=n.clientY;Ce(this.info,s,i)&&("start"===this.info.state&&Pe("tap"),this.info.addMove({x:s,y:i}),Me(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=ye(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Me(this.info,e,n))}}),xe({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){ue(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){ue(t)&&Ne(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Ne(this.info,t.changedTouches[0],t)}});const Ee=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=Vt++;return function(s){let i=s.__mixinSet;if(i&&i[n])return s;let o=e,r=o.get(s);if(!r){r=t(s),o.set(s,r);let e=Object.create(r.__mixinSet||i||null);e[n]=!0,r.__mixinSet=e}return r}}(t=>class extends t{_addEventListenerToNode(t,e,n){be(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Se(t,e,n)||super._removeEventListenerFromNode(t,e,n)}});const Oe={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Ae=class extends st{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"toggle"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return R``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"light"===t.substr(0,t.indexOf(".")));return R`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Oe.required.icon}></ha-icon>
            <div class="title">${Oe.required.name}</div>
          </div>
          <div class="secondary">${Oe.required.secondary}</div>
        </div>
        ${Oe.required.show?R`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>R`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Oe.actions.icon}></ha-icon>
            <div class="title">${Oe.actions.name}</div>
          </div>
          <div class="secondary">${Oe.actions.secondary}</div>
        </div>
        ${Oe.actions.show?R`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Oe.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Oe.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Oe.actions.options.tap.secondary}</div>
                </div>
                ${Oe.actions.options.tap.show?R`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Oe.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Oe.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Oe.actions.options.hold.secondary}</div>
                </div>
                ${Oe.actions.options.hold.show?R`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Oe.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Oe.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Oe.actions.options.double_tap.secondary}</div>
                </div>
                ${Oe.actions.options.double_tap.show?R`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Oe.appearance.icon}></ha-icon>
            <div class="title">${Oe.appearance.name}</div>
          </div>
          <div class="secondary">${Oe.appearance.secondary}</div>
        </div>
        ${Oe.appearance.show?R`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,Oe.actions.options)}_toggleOption(t){this._toggleThing(t,Oe)}_toggleThing(t,e){const n=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=n,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Ct(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([G({attribute:!1})],Ae.prototype,"hass",void 0),t([Z()],Ae.prototype,"_config",void 0),t([Z()],Ae.prototype,"_toggle",void 0),t([Z()],Ae.prototype,"_helpers",void 0),Ae=t([J("big-slider-card-editor")],Ae);var De={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},$e={common:De},Ve={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ue={common:Ve};const Re={en:Object.freeze({__proto__:null,common:De,default:$e}),nb:Object.freeze({__proto__:null,common:Ve,default:Ue})};function je(t,e="",n=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let i;try{i=t.split(".").reduce((t,e)=>t[e],Re[s])}catch(e){i=t.split(".").reduce((t,e)=>t[e],Re.en)}return void 0===i&&(i=t.split(".").reduce((t,e)=>t[e],Re.en)),""!==e&&""!==n&&(i=i.replace(e,n)),i}console.info(`%c  BIG-SLIDER-CARD \n%c  ${je("common.version")} 1.0.4    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"big-slider-card",name:"Big Slider Card",description:"A template custom card for you to create something awesome"});let Ye=class extends(Ee(st)){constructor(){super(),this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=30,this.stateObj=null,this.isHold=!1,this.holdTimer=0,this._shouldUpdate=!0,this.updateTimeout=0,this._setValueThrottled=function(t,e){let n=0;return function(){const s=Date.now();s-n>=e&&(t(),n=s)}}(this._setValue.bind(this),200),this._handleDown=this._handleDown.bind(this),this._handleUp=this._handleUp.bind(this),this._handleTap=this._handleTap.bind(this),this._handleTrack=this._handleTrack.bind(this),this._handleContextMenu=this._handleContextMenu.bind(this)}static async getConfigElement(){return document.createElement("big-slider-card-editor")}static getStubConfig(){return{}}connectedCallback(){super.connectedCallback(),be(this,"down",this._handleDown),be(this,"up",this._handleUp),be(this,"tap",this._handleTap),be(this,"track",this._handleTrack),this.addEventListener("contextmenu",this._handleContextMenu)}disconnectedCallback(){Se(this,"down",this._handleDown),Se(this,"up",this._handleUp),Se(this,"tap",this._handleTap),Se(this,"track",this._handleTrack),this.removeEventListener("contextmenu",this._handleContextMenu),super.disconnectedCallback()}_log(t){console.log(`%c  BIG-SLIDER-CARD ${this._getName()} %c ${t} `,"color: orange; font-weight: bold; background: black","")}_handleContextMenu(t){const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}_handleDown(){var t;this._press(),this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold.bind(this),(null===(t=this.config)||void 0===t?void 0:t.hold_time)||600)}_setHold(){this.isHold=!0,At(this,this.hass,this.config,!0,!1)}_handleUp(){this._unpress()}_handleTap(){var t;clearTimeout(this.holdTimer),(null===(t=this.config)||void 0===t?void 0:t.tap_action)&&(this.isHold||At(this,this.hass,this.config,!1,!1))}_handleTrack(t){switch(this.mousePos={x:t.detail.x,y:t.detail.y},clearTimeout(this.holdTimer),t.detail.state){case"start":this._startTrack();break;case"track":this._track();break;case"end":this._endTrack()}}_startTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue,this._press(),this._stopUpdates(),this.updateTimeout&&clearTimeout(this.updateTimeout)}_track(){this._updateValue()}_endTrack(){this._updateValue(),this._unpress(),this._setValue(),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(this._startUpdates.bind(this),3e3)}_press(){this.setAttribute("pressed","")}_unpress(){this.removeAttribute("pressed")}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,n=Math.round(100*e/t);this.currentValue=this.oldValue+n,this._checklimits(),this._updateSlider()}_checklimits(){this.currentValue<0&&(this.currentValue=0,this._startTrack()),this.currentValue>100&&(this.currentValue=100,this._startTrack())}_updateSlider(){this.style.setProperty("--bsc-percent",this.currentValue+"%")}_updateColors(){var t,e;let n="var(--bsc-color)",s="0%";const i=this.stateObj;if(i){if("on"==i.state){const o=null===(t=i.attributes)||void 0===t?void 0:t.rgb_color,r=null===(e=i.attributes)||void 0===e?void 0:e.brightness;o&&(n=`rgb(${o.join(",")})`),r&&(s=Math.ceil(100*r/255)+"%")}"off"==i.state&&(n="var(--bsc-off-color)")}this.style.setProperty("--bsc-icon-color",n),this.style.setProperty("--bsc-brightness",s)}_getValue(){var t;if(!this._shouldUpdate)return;if(!this.stateObj)return;const e=(null===(t=this.config)||void 0===t?void 0:t.attribute)||"brightness";let n;if("off"==this.stateObj.state)n=0;else switch(e){case"brightness":n=Math.ceil(100*this.stateObj.attributes.brightness/255);break;case"red":case"green":case"blue":const t=this.stateObj.attributes.rgb_color||[0,0,0];"red"===e&&(n=t[0]),"green"===e&&(n=t[1]),"blue"===e&&(n=t[2]),n=Math.ceil(100*n/255);break;case"hue":case"saturation":const s=this.stateObj.attributes.hs_color||[0,0];"hue"===e&&(n=s[0]),"saturation"===e&&(n=s[1])}this.currentValue=n,this._updateSlider()}_setValue(){let t,e=this.currentValue,n=this.config.attribute||"brightness",s=!0;switch(n){case"brightness":e=Math.ceil(e/100*255),e||(s=!1);break;case"red":case"green":case"blue":t=this.stateObj.attributes.rgb_color||[0,0,0],"red"===n&&(t[0]=e),"green"===n&&(t[1]=e),"blue"===n&&(t[2]=e),e=t,n="rgb_color";break;case"hue":case"saturation":t=this.stateObj.attributes.hs_color||[0,0],"hue"===n&&(t[0]=e),"saturation"===n&&(t[1]=e),e=t,n="hs_color"}const i={entity_id:this.stateObj.entity_id};s?(i[n]=e,this.config.transition&&(i.transition=this.config.transition),this.hass.callService("light","turn_on",i)):this.hass.callService("light","turn_off",i)}setConfig(t){if(!t)throw new Error(je("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({attribute:"brightness"},t)}_stopUpdates(){var t,e,n;this._shouldUpdate=!1,null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===n||n.remove("animate")}_startUpdates(){var t,e,n;this._shouldUpdate=!0,null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===n||n.add("animate"),this.requestUpdate()}shouldUpdate(t){return!!this.config&&function(t,e,n){if(e.has("config")||n)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}updated(){var t,e;this.containerWidth=(null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)||0,this._getValue(),this._updateColors()}render(){var t,e;if(!(null===(t=this.config)||void 0===t?void 0:t.entity)||!((null===(e=this.config)||void 0===e?void 0:e.entity)in this.hass.states))return this.stateObj=null,this._showError(je("common.show_error"));this.stateObj=this.hass.states[this.config.entity];const n=this._getName(),s=function(t){if(!t)return Pt;if(t.attributes.icon)return t.attributes.icon;var e=kt(t.entity_id);return e in $t?$t[e](t):Nt(e,t.state)}(this.stateObj);return R`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate"></div>
        <ha-icon .icon="${s}" id="icon"></ha-icon>
        <div id="content">
          <p>${this.config.name||n}</p>
        </div>
      </ha-card>
    `}_getName(){var t,e,n,s;return(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)?this.stateObj.attributes.friendly_name:(null===(n=this.stateObj)||void 0===n?void 0:n.entity_id)?(s=this.stateObj.entity_id).substr(s.indexOf(".")+1):"???"}_showWarning(t){return R`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),R`
      ${e}
    `}static get styles(){return et`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-background: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-color: --paper-item-icon-color;
        --bsc-off-color: --paper-item-icon-color;
        --bsc-icon-color: var(--bsc-color);

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: 60px;
        width: 100%;
        position: relative;
        border-radius: var(--ha-card-border-radius);
        overflow: hidden;
        background: var(--card-background-color);
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background: var(--bsc-slider-background);
        opacity: 0.3;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.animate {
        transition: right 1s ease;
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color);
        filter: brightness(calc(50% + var(--bsc-brightness) / 2));
        transition: color 0.3s ease-out;
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}};t([G({attribute:!1})],Ye.prototype,"hass",void 0),t([Z()],Ye.prototype,"config",void 0),Ye=t([J("big-slider-card")],Ye);export{Ye as BigSliderCard};
