function t(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${s}`),r="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,p=0;const{strings:m,values:{length:f}}=t;for(;p<f;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)c(e[t].name,r)&&n++;for(;n-- >0;){const e=m[p],i=u.exec(e)[2],n=i.toLowerCase()+r,s=t.getAttribute(n);t.removeAttribute(n);const a=s.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,s=e.split(o),a=s.length-1;for(let e=0;e<a;e++){let i,o=s[e];if(""===o)i=d();else{const t=u.exec(o);null!==t&&c(t[2],r)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-r.length)+t[3]),i=document.createTextNode(o)}n.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===s[a]?(n.insertBefore(d(),t),i.push(t)):t.data=s[a],p+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(d(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const c=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,h=133;function p(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,h,null,!1);let o=f(n),r=n[o],a=-1,c=0;const l=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-c,o=f(n,o),r=n[o]}l.forEach((t=>t.parentNode.removeChild(t)))}const m=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,h,null,!1);for(;i.nextNode();)e++;return e},f=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
const y=new WeakMap,_=t=>"function"==typeof t&&y.has(t),g={},w={};
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
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,c=s.nextNode();for(;r<n.length;)if(o=n[r],l(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),S=` ${n} `;class x{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const c=u.exec(t);e+=null===c?t+(i?S:s):t.substr(0,c.index)+c[1]+c[2]+r+c[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
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
 */const P=t=>null===t||!("object"==typeof t||"function"==typeof t),k=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class T{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new N(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!k(t))return t}let n="";for(let s=0;s<e;s++){n+=t[s];const e=i[s];if(void 0!==e){const t=e.value;if(P(t)||!k(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||P(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(P(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):k(t)?this.__commitIterable(t):t===w?(this.value=w,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new C(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class O extends T{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends N{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class V{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=U(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const U=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function R(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(n);return i=e.keyString.get(s),void 0===i&&(i=new a(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const j=new Map,D=new WeakMap;
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
 */const L=new
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
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new O(t,e.slice(1),i).parts}if("@"===s)return[new V(t,e.slice(1),n.eventContext)];if("?"===s)return[new E(t,e.slice(1),i)];return new T(t,e,i).parts}handleTextExpression(t){return new C(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const I=(t,...e)=>new x(t,e,"html",L)
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
 */,q=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const $=t=>e=>{const i=q(e.type,t);let s=j.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},j.set(i,s));let o=s.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(n);if(o=s.keyString.get(r),void 0===o){const i=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(i,t),o=new a(e,i),s.keyString.set(r,o)}return s.stringsArray.set(e.strings,o),o},z=["html","svg"],H=new Set,W=(t,e,i)=>{H.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{z.forEach((e=>{const i=j.get(q(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),p(t,i)}))}))})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const o=document.createTreeWalker(n,h,null,!1);let r=f(s),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===i&&(a=m(e),i.parentNode.insertBefore(e,i));-1!==r&&s[r].index===c;){if(a>0){for(;-1!==r;)s[r].index+=a,r=f(s,r);return}r=f(s,r)}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),p(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},X=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:X},J="finalized";class G extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Y}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(J)||t.finalize(),this[J]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=X){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||F,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||F.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Y){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G[J]=!0;
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
const K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},Q=(t,e,i)=>{e.constructor.createProperty(i,t)};function Z(t){return(e,i)=>void 0!==i?Q(t,e,i):K(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const tt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol();class it{constructor(t,e){if(e!==et)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const nt=(t,...e)=>{const i=e.reduce(((e,i,n)=>e+(t=>{if(t instanceof it)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1]),t[0]);return new it(i,et)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const st={};class ot extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),n=[];i.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!tt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new it(String(e),et)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==st&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return st}}var rt,at,ct;function lt(){return(lt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function dt(t){return t.substr(0,t.indexOf("."))}ot.finalized=!0,ot.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,o=D.has(e),r=B&&11===e.nodeType&&!!e.host,a=r&&!H.has(s),c=a?document.createDocumentFragment():e;if(((t,e,n)=>{let s=D.get(e);void 0===s&&(i(e,e.firstChild),D.set(e,s=new C(Object.assign({templateFactory:R},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,c,Object.assign({templateFactory:$(s)},n)),a){const t=D.get(c);D.delete(c);const n=t.value instanceof v?t.value.template:void 0;W(s,c,n),i(e,e.firstChild),e.appendChild(c),D.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)},ot.shadowRootOptions={mode:"open"},(ct=rt||(rt={})).language="language",ct.system="system",ct.comma_decimal="comma_decimal",ct.decimal_comma="decimal_comma",ct.space_comma="space_comma",ct.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(at||(at={}));var ut=["closed","locked","off"],ht=function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s},pt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function mt(t,e){if(t in pt)return pt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var ft=function(t){ht(window,"haptic",t)},yt=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var n,s=dt(e),o="group"===s?"homeassistant":s;switch(s){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(o,n,{entity_id:e})}(t,e,ut.includes(t.states[e].state))},_t=function(t,e,i,n,s){var o;if(s&&i.double_tap_action?o=i.double_tap_action:n&&i.hold_action?o=i.hold_action:!n&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||i.entity||i.camera_image)&&(ht(t,"hass-more-info",{entityId:o.entity?o.entity:i.entity?i.entity:i.camera_image}),o.haptic&&ft(o.haptic));break;case"navigate":o.navigation_path&&(function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),ht(window,"location-changed",{replace:i})}(0,o.navigation_path),o.haptic&&ft(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&ft(o.haptic);break;case"toggle":i.entity&&(yt(e,i.entity),o.haptic&&ft(o.haptic));break;case"call-service":if(!o.service)return;var r=o.service.split(".",2),a=r[0],c=r[1],l=lt({},o.service_data);"entity"===l.entity_id&&(l.entity_id=i.entity),e.callService(a,c,l,o.target),o.haptic&&ft(o.haptic);break;case"fire-dom-event":ht(t,"ll-custom",o),o.haptic&&ft(o.haptic)}};var gt={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},wt={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return mt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in gt)return gt[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var n=10*Math.round(i/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var s=t.attributes.unit_of_measurement;return"°C"===s||"°F"===s?"mdi:thermometer":mt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?mt("input_datetime"):"mdi:calendar":"mdi:clock"}};
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
let vt=0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let bt=0,St=0,xt=[],Pt=0,kt=!1,Tt=document.createTextNode("");new window.MutationObserver((function(){kt=!1;const t=xt.length;for(let e=0;e<t;e++){let t=xt[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}xt.splice(0,t),St+=t})).observe(Tt,{characterData:!0});const Nt={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Ct={run:t=>(kt||(kt=!0,Tt.textContent=Pt++),xt.push(t),bt++),cancel(t){const e=t-St;if(e>=0){if(!xt[e])throw new Error("invalid async handle: "+t);xt[e]=null}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Et{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Ot.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ot.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof Et?t._cancelAsync():t=new Et,t.setConfig(e,i),t}}let Ot=new Set;
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
const At=!window.ShadyDOM||!window.ShadyDOM.inUse;var Mt;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),At&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})(),window.Polymer&&window.Polymer.rootPath||(Mt=document.baseURI||window.location.href).substring(0,Mt.lastIndexOf("/")+1),window.Polymer&&window.Polymer.sanitizeDOMValue;let Vt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;window.Polymer&&window.Polymer.strictTemplatePolicy,window.Polymer&&window.Polymer.allowTemplateFromDomModule,window.Polymer&&window.Polymer.legacyOptimizations,window.Polymer&&window.Polymer.legacyWarnings,window.Polymer&&window.Polymer.syncInitialRender,window.Polymer&&window.Polymer.legacyUndefined,window.Polymer&&window.Polymer.orderedComputed,window.Polymer&&window.Polymer.removeNestedTemplates,window.Polymer&&window.Polymer.fastDomIf,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ut=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Rt="string"==typeof document.head.style.touchAction,jt="__polymerGestures",Dt="__polymerGesturesHandled",Lt="__polymerGesturesTouchAction",It=25,qt=5,Bt=2500,$t=["mousedown","mousemove","mouseup","click"],zt=[0,1,4,2],Ht=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Wt(t){return $t.indexOf(t)>-1}let Ft=!1;function Xt(t){if(!Wt(t)&&"touchend"!==t)return Rt&&Ft&&Vt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){Ft=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Yt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Jt=[],Gt={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Kt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Qt(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<n.length;t++)e.push(n[t])}}catch(t){}}return e}let Zt=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[Dt]={skip:!0},"click"===t.type)){let e=!1,n=oe(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)Jt.push(n[t]);else if(i=n[t],Gt[i.localName]){let i=Qt(n[t]);for(let t=0;t<i.length;t++)e=e||Jt.indexOf(i[t])>-1}if(n[t]===ie.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function te(t){let e=Yt?["click"]:$t;for(let i,n=0;n<e.length;n++)i=e[n],t?(Jt.length=0,document.addEventListener(i,Zt,!0)):document.removeEventListener(i,Zt,!0)}function ee(t){let e=t.type;if(!Wt(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Ht&&(e=zt[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let ie={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ne(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function se(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){ie.mouse.mouseIgnoreJob||te(!0),ie.mouse.target=oe(t)[0],ie.mouse.mouseIgnoreJob=Et.debounce(ie.mouse.mouseIgnoreJob,Nt.after(Bt),(function(){te(),ie.mouse.target=null,ie.mouse.mouseIgnoreJob=null}))}),!!Ft&&{passive:!0});const oe=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],re={},ae=[];function ce(t){const e=oe(t);return e.length>0?e[0]:t.target}function le(t){let e,i=t.type,n=t.currentTarget[jt];if(!n)return;let s=n[i];if(s){if(!t[Dt]&&(t[Dt]={},"touch"===i.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(ie.touch.id=e.identifier),ie.touch.id!==e.identifier)return;Rt||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)ie.touch.x=e.clientX,ie.touch.y=e.clientY,ie.touch.scrollDecided=!1;else if("touchmove"===i){if(ie.touch.scrollDecided)return;ie.touch.scrollDecided=!0;let i=function(t){let e="auto",i=oe(t);for(let t,n=0;n<i.length;n++)if(t=i[n],t[Lt]){e=t[Lt];break}return e}(t),n=!1,s=Math.abs(ie.touch.x-e.clientX),o=Math.abs(ie.touch.y-e.clientY);t.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>s:"pan-y"===i&&(n=s>o)),n?t.preventDefault():me("track")}}(t)}if(e=t[Dt],!e.skip){for(let i,n=0;n<ae.length;n++)i=ae[n],s[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<ae.length;o++)n=ae[o],s[n.name]&&!e[n.name]&&(e[n.name]=!0,n[i](t))}}}function de(t,e,i){return!!re[e]&&(function(t,e,i){let n=re[e],s=n.deps,o=n.name,r=t[jt];r||(t[jt]=r={});for(let e,i,n=0;n<s.length;n++)e=s[n],Yt&&Wt(e)&&"click"!==e||(i=r[e],i||(r[e]=i={_count:0}),0===i._count&&t.addEventListener(e,le,Xt(e)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),n.touchAction&&function(t,e){Rt&&t instanceof HTMLElement&&Ct.run((()=>{t.style.touchAction=e}));t[Lt]=e}(t,n.touchAction)}(t,e,i),!0)}function ue(t,e,i){return!!re[e]&&(function(t,e,i){let n=re[e],s=n.deps,o=n.name,r=t[jt];if(r)for(let e,i,n=0;n<s.length;n++)e=s[n],i=r[e],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,le,Xt(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function he(t){ae.push(t);for(let e=0;e<t.emits.length;e++)re[t.emits[e]]=t}function pe(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,Ut(t).dispatchEvent(n),n.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function me(t){let e=function(t){for(let e,i=0;i<ae.length;i++){e=ae[i];for(let i,n=0;n<e.emits.length;n++)if(i=e.emits[n],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function fe(t,e,i,n){e&&pe(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(t){return me(t)}})}function ye(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),s=Math.abs(t.y-i);return n>=qt||s>=qt}function _e(t,e,i){if(!e)return;let n,s=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,a=o.y-t.y,c=0;s&&(n=o.x-s.x,c=o.y-s.y),pe(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:n,ddy:c,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(t,e),s===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function ge(t,e,i){let n=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),o=ce(i||e);!o||Kt[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=It&&s<=It||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=ce(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,s=t.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}(e))&&(t.prevent||pe(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/he({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){se(this.info)},mousedown:function(t){if(!ee(t))return;let e=ce(t),i=this;ne(this.info,(function(t){ee(t)||(fe("up",e,t),se(i.info))}),(function(t){ee(t)&&fe("up",e,t),se(i.info)})),fe("down",e,t)},touchstart:function(t){fe("down",ce(t),t.changedTouches[0],t)},touchend:function(t){fe("up",ce(t),t.changedTouches[0],t)}}),he({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,se(this.info)},mousedown:function(t){if(!ee(t))return;let e=ce(t),i=this,n=function(t){let n=t.clientX,s=t.clientY;ye(i.info,n,s)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&me("tap"),i.info.addMove({x:n,y:s}),ee(t)||(i.info.state="end",se(i.info)),e&&_e(i.info,e,t),i.info.started=!0)};ne(this.info,n,(function(t){i.info.started&&n(t),se(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=ce(t),i=t.changedTouches[0],n=i.clientX,s=i.clientY;ye(this.info,n,s)&&("start"===this.info.state&&me("tap"),this.info.addMove({x:n,y:s}),_e(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=ce(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),_e(this.info,e,i))}}),he({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){ee(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){ee(t)&&ge(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){ge(this.info,t.changedTouches[0],t)}});const we=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=vt++;return function(n){let s=n.__mixinSet;if(s&&s[i])return n;let o=e,r=o.get(n);if(!r){r=t(n),o.set(n,r);let e=Object.create(r.__mixinSet||s||null);e[i]=!0,r.__mixinSet=e}return r}}((t=>class extends t{_addEventListenerToNode(t,e,i){de(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){ue(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}));const ve="brightness";var be={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available"},Se={common:be},xe={version:"Versiunea",invalid_configuration:"Configurație invalidă",show_warning:"Show Warning",no_entity_set:"Entitatea nu e setată",no_entity:"Entitatea nu e disponibilă"},Pe={common:xe};const ke={en:Object.freeze({__proto__:null,common:be,default:Se}),ro:Object.freeze({__proto__:null,common:xe,default:Pe})};function Te(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce(((t,e)=>t[e]),ke[n])}catch(e){s=t.split(".").reduce(((t,e)=>t[e]),ke.en)}return void 0===s&&(s=t.split(".").reduce(((t,e)=>t[e]),ke.en)),""!==e&&""!==i&&(s=s.replace(e,i)),s}console.info(`%c  BIG-SLIDER-CARD \n%c  ${Te("common.version")} 1.0.7    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"big-slider-card",name:"Big Slider Card",description:"Big slider card for light entities."});let Ne=class extends(we(ot)){constructor(){super(),this._handleContextMenu=t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1},this._handleDown=()=>{this._press(),this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this.config.hold_time)},this._setHold=()=>{this.isHold=!0,_t(this,this.hass,this.config,!0,!1)},this._handleUp=()=>{this._unpress()},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this.config)||void 0===t?void 0:t.tap_action)&&(this.isHold||_t(this,this.hass,this.config,!1,!1))},this._handleTrack=t=>{switch(this.mousePos={x:t.detail.x,y:t.detail.y},clearTimeout(this.holdTimer),t.detail.state){case"start":this._startTrack();break;case"track":this._track();break;case"end":this._endTrack()}},this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=30,this.stateObj=null,this.isHold=!1,this.holdTimer=0,this._shouldUpdate=!0,this.updateTimeout=0,this._setValueThrottled=function(t,e){let i=0;return function(){const n=Date.now();n-i>=e&&(t(),i=n)}}(this._setValue.bind(this),200)}static getStubConfig(){return{}}connectedCallback(){super.connectedCallback(),de(this,"down",this._handleDown),de(this,"up",this._handleUp),de(this,"tap",this._handleTap),de(this,"track",this._handleTrack),this.addEventListener("contextmenu",this._handleContextMenu)}disconnectedCallback(){ue(this,"down",this._handleDown),ue(this,"up",this._handleUp),ue(this,"tap",this._handleTap),ue(this,"track",this._handleTrack),this.removeEventListener("contextmenu",this._handleContextMenu),super.disconnectedCallback()}_log(t){console.log(`%c  BIG-SLIDER-CARD ${this._getName()} %c ${t} `,"color: orange; font-weight: bold; background: black","")}_startTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue,this._press(),this._stopUpdates(),this.updateTimeout&&clearTimeout(this.updateTimeout)}_track(){this._updateValue()}_endTrack(){this._updateValue(),this._unpress(),this._setValue(),this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(this._startUpdates.bind(this),this.config.settle_time)}_press(){this.setAttribute("pressed","")}_unpress(){this.removeAttribute("pressed")}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_checklimits(){this.currentValue<0&&(this.currentValue=0,this._startTrack()),this.currentValue>100&&(this.currentValue=100,this._startTrack())}_updateSlider(){this.style.setProperty("--bsc-percent",this.currentValue+"%")}_updateColors(){var t,e;let i="var(--bsc-color)",n="0%";const s=this.stateObj;if(s){if("on"==s.state){const o=null===(t=s.attributes)||void 0===t?void 0:t.rgb_color,r=null===(e=s.attributes)||void 0===e?void 0:e.brightness;o&&(i=`rgb(${o.join(",")})`),r&&(n=`${Math.ceil(100*r/255)}%`)}"off"==s.state&&(i="var(--bsc-off-color)")}this.style.setProperty("--bsc-icon-color",i),this.style.setProperty("--bsc-brightness",n),this.config.color&&this.style.setProperty("--bsc-slider-background",this.config.color)}_getValue(){var t;if(!this._shouldUpdate)return;if(!this.stateObj)return;const e=(null===(t=this.config)||void 0===t?void 0:t.attribute)||ve;let i;if("off"==this.stateObj.state)i=0;else switch(e){case"brightness":i=Math.ceil(100*this.stateObj.attributes.brightness/255);break;case"red":case"green":case"blue":const t=this.stateObj.attributes.rgb_color||[0,0,0];"red"===e&&(i=t[0]),"green"===e&&(i=t[1]),"blue"===e&&(i=t[2]),i=Math.ceil(100*i/255);break;case"hue":case"saturation":const n=this.stateObj.attributes.hs_color||[0,0];"hue"===e&&(i=n[0]),"saturation"===e&&(i=n[1])}this.currentValue=i,this._updateSlider()}_setValue(){let t,e=this.currentValue,i=this.config.attribute||ve,n=!0;switch(i){case"brightness":e=Math.ceil(e/100*255),e||(n=!1);break;case"red":case"green":case"blue":t=this.stateObj.attributes.rgb_color||[0,0,0],"red"===i&&(t[0]=e),"green"===i&&(t[1]=e),"blue"===i&&(t[2]=e),e=t,i="rgb_color";break;case"hue":case"saturation":t=this.stateObj.attributes.hs_color||[0,0],"hue"===i&&(t[0]=e),"saturation"===i&&(t[1]=e),e=t,i="hs_color"}const s={entity_id:this.stateObj.entity_id};n?(s[i]=e,this.config.transition&&(s.transition=this.config.transition),this.hass.callService("light","turn_on",s)):this.hass.callService("light","turn_off",s)}setConfig(t){if(!t)throw new Error(Te("common.invalid_configuration"));if(!t.entity)throw new Error(Te("common.no_entity_set"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({attribute:ve,tap_action:{action:"toggle",haptic:"light"},hold_time:600,settle_time:3e3},t)}_stopUpdates(){var t,e,i;this._shouldUpdate=!1,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate")}_startUpdates(){var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}updated(){var t,e;this.containerWidth=(null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)||0,this._getValue(),this._updateColors()}render(){var t;if(this.config||(this.stateObj=null),this.config.entity||(this.stateObj=null),!this.config.entity||!(this.config.entity in this.hass.states))return this.stateObj=null,this._showError(`${Te("common.no_entity")}: ${this.config.entity}`);this.stateObj=this.config.entity&&this.hass.states[this.config.entity];const e=this._getName(),i=null!==(t=this.config.icon)&&void 0!==t?t:function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=dt(t.entity_id);return e in wt?wt[e](t):mt(e,t.state)}(this.stateObj);return I`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate"></div>
        <ha-icon .icon="${i}" id="icon"></ha-icon>
        <div id="content">
          <p>A${this.config.name||e}</p>
        </div>
      </ha-card>
    `}_getName(){var t,e,i;return(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)?this.stateObj.attributes.friendly_name:(null===(i=this.stateObj)||void 0===i?void 0:i.entity_id)?function(t){return t.substr(t.indexOf(".")+1)}(this.stateObj.entity_id):"???"}_showWarning(t){return I`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),I`
      ${e}
    `}static get styles(){return nt`
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
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 72px;
        box-sizing: border-box;
      }
    `}};var Ce,Ee;t([Z({attribute:!1})],Ne.prototype,"hass",void 0),t([Z({attribute:!1,hasChanged:null==Ce?void 0:Ce.hasChanged})],Ne.prototype,"config",void 0),Ne=t([(Ee="big-slider-card",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(Ee,t):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(Ee,t))],Ne);export{Ne as BigSliderCard};
