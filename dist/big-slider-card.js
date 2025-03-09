var _t = (r) => {
  throw TypeError(r);
};
var it = (r, t, e) => t.has(r) || _t("Cannot " + e);
var a = (r, t, e) => (it(r, t, "read from private field"), e ? e.call(r) : t.get(r)), f = (r, t, e) => t.has(r) ? _t("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), g = (r, t, e, s) => (it(r, t, "write to private field"), s ? s.call(r, e) : t.set(r, e), e), v = (r, t, e) => (it(r, t, "access private method"), e);
var _, x, E, w, C, U, k, L, M, R, b, m, Z, ct, Ut, kt, xt;
let Dt = (xt = class {
  constructor(t, e, { touchActions: s, stopScrollDirection: i = "both" } = {}) {
    f(this, m);
    f(this, _);
    f(this, x);
    f(this, E, 0);
    f(this, w, 0);
    f(this, C, 0);
    f(this, U, 0);
    f(this, k);
    f(this, L, !1);
    f(this, M);
    f(this, R);
    f(this, b);
    g(this, _, t), g(this, x, s), g(this, k, e), g(this, M, i), g(this, R, v(this, m, Ut).bind(this)), g(this, b, v(this, m, kt).bind(this)), this.addListeners();
  }
  addListeners() {
    a(this, _).addEventListener("pointerdown", a(this, b)), a(this, _).addEventListener("pointermove", a(this, b)), a(this, _).addEventListener("pointerup", a(this, b)), a(this, _).addEventListener("pointercancel", a(this, b)), window.addEventListener("touchmove", a(this, R), { passive: !1 }), a(this, x) && (a(this, _).style.touchAction = a(this, x));
  }
  removeListeners() {
    a(this, _).removeEventListener("pointerdown", a(this, b)), a(this, _).removeEventListener("pointermove", a(this, b)), a(this, _).removeEventListener("pointerup", a(this, b)), a(this, _).removeEventListener("pointercancel", a(this, b)), window.removeEventListener("touchmove", a(this, R)), a(this, x) && a(this, _).style.removeProperty("touch-action");
  }
}, _ = new WeakMap(), x = new WeakMap(), E = new WeakMap(), w = new WeakMap(), C = new WeakMap(), U = new WeakMap(), k = new WeakMap(), L = new WeakMap(), M = new WeakMap(), R = new WeakMap(), b = new WeakMap(), m = new WeakSet(), Z = function() {
  g(this, L, !0);
}, ct = function() {
  g(this, L, !1);
}, Ut = function(t) {
  a(this, L) && t.preventDefault();
}, kt = function(t) {
  if (t.type === "pointerdown" && (a(this, _).setPointerCapture(t.pointerId), g(this, E, t.pageX), g(this, w, t.pageY)), a(this, _).hasPointerCapture(t.pointerId) && t.type !== "pointercancel" && typeof a(this, k) == "function") {
    const e = t.pageX - a(this, E), s = t.pageY - a(this, w), i = Math.abs(e / s) > 1, o = Math.abs(e / s) < 1;
    a(this, M) === "horizontal" && i && v(this, m, Z).call(this), a(this, M) === "vertical" && o && v(this, m, Z).call(this), a(this, M) === "both" && v(this, m, Z).call(this), a(this, k).call(this, t, {
      startX: a(this, E),
      startY: a(this, w),
      relativeX: e,
      relativeY: s,
      totalX: e + a(this, C),
      totalY: s + a(this, U)
    });
  }
  t.type === "pointerup" && (g(this, C, +a(this, C) + t.pageX - a(this, E)), g(this, U, +a(this, U) + t.pageY - a(this, w)), a(this, _).releasePointerCapture(t.pointerId), v(this, m, ct).call(this)), t.type === "pointercancel" && (a(this, k).call(this, t, {
    startX: a(this, E),
    startY: a(this, w),
    relativeX: 0,
    relativeY: 0,
    totalX: a(this, C),
    totalY: a(this, U)
  }), a(this, _).releasePointerCapture(t.pointerId), v(this, m, ct).call(this));
}, xt);
const Vt = "1.1.5", zt = "brightness", Bt = 3e3, jt = 600, Wt = 0, ft = 5, Xt = 0, Yt = 100, gt = {
  type: "custom:big-slider-card",
  attribute: zt,
  tap_action: {
    action: "toggle",
    haptic: "light"
  },
  hold_action: {
    action: "more-info"
  },
  hold_time: jt,
  settle_time: Bt,
  min_slide_time: Wt,
  min: Xt,
  max: Yt
}, Mt = { version: "Version", invalid_configuration: "Invalid configuration", show_warning: "Show Warning", no_entity_set: "Entity not set", no_entity: "Entity not available", on: "On", off: "Off" }, qt = {
  common: Mt
}, Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Mt,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), Ot = { version: "Versiunea", invalid_configuration: "Configurație invalidă", show_warning: "Show Warning", no_entity_set: "Entitatea nu e setată", no_entity: "Entitatea nu e disponibilă", on: "Pornit", off: "Oprit" }, Ft = {
  common: Ot
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Ot,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), rt = {
  en: Gt,
  ro: Jt
};
function z(r, t = "", e = "") {
  const s = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_");
  let i;
  try {
    i = r.split(".").reduce((o, n) => o[n], rt[s]);
  } catch {
    i = r.split(".").reduce((n, c) => n[c], rt.en);
  }
  return i === void 0 && (i = r.split(".").reduce((o, n) => o[n], rt.en)), t !== "" && e !== "" && (i = i.replace(t, e)), i;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, lt = Q.ShadowRoot && (Q.ShadyCSS === void 0 || Q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, dt = Symbol(), mt = /* @__PURE__ */ new WeakMap();
let Ht = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== dt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (lt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = mt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && mt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Kt = (r) => new Ht(typeof r == "string" ? r : r + "", void 0, dt), Zt = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((s, i, o) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o + 1], r[0]);
  return new Ht(e, r, dt);
}, Qt = (r, t) => {
  if (lt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = Q.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, bt = lt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return Kt(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: te, defineProperty: ee, getOwnPropertyDescriptor: se, getOwnPropertyNames: ie, getOwnPropertySymbols: re, getPrototypeOf: oe } = Object, S = globalThis, yt = S.trustedTypes, ne = yt ? yt.emptyScript : "", ot = S.reactiveElementPolyfillSupport, B = (r, t) => r, tt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? ne : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, ut = (r, t) => !te(r, t), $t = { attribute: !0, type: String, converter: tt, reflect: !1, hasChanged: ut };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), S.litPropertyMetadata ?? (S.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class H extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = $t) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ee(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = se(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(n) {
      const c = i == null ? void 0 : i.call(this);
      o.call(this, n), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? $t;
  }
  static _$Ei() {
    if (this.hasOwnProperty(B("elementProperties"))) return;
    const t = oe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(B("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(B("properties"))) {
      const e = this.properties, s = [...ie(e), ...re(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(bt(i));
    } else t !== void 0 && e.push(bt(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Qt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const n = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : tt).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const n = s.getPropertyOptions(i), c = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((o = n.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? n.converter : tt;
      this._$Em = i, this[i] = c.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? ut)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, n] of this._$Ep) this[o] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, n] of i) n.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
H.elementStyles = [], H.shadowRootOptions = { mode: "open" }, H[B("elementProperties")] = /* @__PURE__ */ new Map(), H[B("finalized")] = /* @__PURE__ */ new Map(), ot == null || ot({ ReactiveElement: H }), (S.reactiveElementVersions ?? (S.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = { attribute: !0, type: String, converter: tt, reflect: !1, hasChanged: ut }, he = (r = ae, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), o.set(e.name, r), s === "accessor") {
    const { name: n } = e;
    return { set(c) {
      const h = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(n, h, r);
    }, init(c) {
      return c !== void 0 && this.P(n, void 0, r), c;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(c) {
      const h = this[n];
      t.call(this, c), this.requestUpdate(n, h, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function ce(r) {
  return (t, e) => typeof e == "object" ? he(r, t, e) : ((s, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, n ? { ...s, wrapped: !0 } : s), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(r, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function G(r) {
  return ce({ ...r, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis, et = j.trustedTypes, vt = et ? et.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Lt = "$lit$", A = `lit$${Math.random().toFixed(9).slice(2)}$`, Rt = "?" + A, le = `<${Rt}>`, O = document, X = () => O.createComment(""), Y = (r) => r === null || typeof r != "object" && typeof r != "function", pt = Array.isArray, de = (r) => pt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", nt = `[ 	
\f\r]`, V = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, At = /-->/g, Et = />/g, T = RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), wt = /'/g, St = /"/g, It = /^(?:script|style|textarea|title)$/i, ue = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Tt = ue(1), I = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), Pt = /* @__PURE__ */ new WeakMap(), P = O.createTreeWalker(O, 129);
function Nt(r, t) {
  if (!pt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return vt !== void 0 ? vt.createHTML(t) : t;
}
const pe = (r, t) => {
  const e = r.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = V;
  for (let c = 0; c < e; c++) {
    const h = r[c];
    let d, u, l = -1, y = 0;
    for (; y < h.length && (n.lastIndex = y, u = n.exec(h), u !== null); ) y = n.lastIndex, n === V ? u[1] === "!--" ? n = At : u[1] !== void 0 ? n = Et : u[2] !== void 0 ? (It.test(u[2]) && (i = RegExp("</" + u[2], "g")), n = T) : u[3] !== void 0 && (n = T) : n === T ? u[0] === ">" ? (n = i ?? V, l = -1) : u[1] === void 0 ? l = -2 : (l = n.lastIndex - u[2].length, d = u[1], n = u[3] === void 0 ? T : u[3] === '"' ? St : wt) : n === St || n === wt ? n = T : n === At || n === Et ? n = V : (n = T, i = void 0);
    const $ = n === T && r[c + 1].startsWith("/>") ? " " : "";
    o += n === V ? h + le : l >= 0 ? (s.push(d), h.slice(0, l) + Lt + h.slice(l) + A + $) : h + A + (l === -2 ? c : $);
  }
  return [Nt(r, o + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class q {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const c = t.length - 1, h = this.parts, [d, u] = pe(t, e);
    if (this.el = q.createElement(d, s), P.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = P.nextNode()) !== null && h.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(Lt)) {
          const y = u[n++], $ = i.getAttribute(l).split(A), K = /([.?@])?(.*)/.exec(y);
          h.push({ type: 1, index: o, name: K[2], strings: $, ctor: K[1] === "." ? fe : K[1] === "?" ? ge : K[1] === "@" ? me : st }), i.removeAttribute(l);
        } else l.startsWith(A) && (h.push({ type: 6, index: o }), i.removeAttribute(l));
        if (It.test(i.tagName)) {
          const l = i.textContent.split(A), y = l.length - 1;
          if (y > 0) {
            i.textContent = et ? et.emptyScript : "";
            for (let $ = 0; $ < y; $++) i.append(l[$], X()), P.nextNode(), h.push({ type: 2, index: ++o });
            i.append(l[y], X());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Rt) h.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(A, l + 1)) !== -1; ) h.push({ type: 7, index: o }), l += A.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = O.createElement("template");
    return s.innerHTML = t, s;
  }
}
function N(r, t, e = r, s) {
  var n, c;
  if (t === I) return t;
  let i = s !== void 0 ? (n = e._$Co) == null ? void 0 : n[s] : e._$Cl;
  const o = Y(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((c = i == null ? void 0 : i._$AO) == null || c.call(i, !1), o === void 0 ? i = void 0 : (i = new o(r), i._$AT(r, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = N(r, i._$AS(r, t.values), i, s)), t;
}
class _e {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? O).importNode(e, !0);
    P.currentNode = i;
    let o = P.nextNode(), n = 0, c = 0, h = s[0];
    for (; h !== void 0; ) {
      if (n === h.index) {
        let d;
        h.type === 2 ? d = new F(o, o.nextSibling, this, t) : h.type === 1 ? d = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (d = new be(o, this, t)), this._$AV.push(d), h = s[++c];
      }
      n !== (h == null ? void 0 : h.index) && (o = P.nextNode(), n++);
    }
    return P.currentNode = O, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class F {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = N(this, t, e), Y(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== I && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : de(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && Y(this._$AH) ? this._$AA.nextSibling.data = t : this.T(O.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = q.createElement(Nt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(e);
    else {
      const n = new _e(i, this), c = n.u(this.options);
      n.p(e), this.T(c), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Pt.get(t.strings);
    return e === void 0 && Pt.set(t.strings, e = new q(t)), e;
  }
  k(t) {
    pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new F(this.O(X()), this.O(X()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class st {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = N(this, t, e, 0), n = !Y(t) || t !== this._$AH && t !== I, n && (this._$AH = t);
    else {
      const c = t;
      let h, d;
      for (t = o[0], h = 0; h < o.length - 1; h++) d = N(this, c[s + h], e, h), d === I && (d = this._$AH[h]), n || (n = !Y(d) || d !== this._$AH[h]), d === p ? t = p : t !== p && (t += (d ?? "") + o[h + 1]), this._$AH[h] = d;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class fe extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class ge extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class me extends st {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = N(this, t, e, 0) ?? p) === I) return;
    const s = this._$AH, i = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== p && (s === p || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class be {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    N(this, t);
  }
}
const at = j.litHtmlPolyfillSupport;
at == null || at(q, F), (j.litHtmlVersions ?? (j.litHtmlVersions = [])).push("3.2.1");
const ye = (r, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new F(t.insertBefore(X(), o), o, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e = (r) => r ?? p;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class W extends H {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ye(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return I;
  }
}
var Ct;
W._$litElement$ = !0, W.finalized = !0, (Ct = globalThis.litElementHydrateSupport) == null || Ct.call(globalThis, { LitElement: W });
const ht = globalThis.litElementPolyfillSupport;
ht == null || ht({ LitElement: W });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
var ve = Object.defineProperty, J = (r, t, e, s) => {
  for (var i = void 0, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = n(t, e, i) || i);
  return i && ve(t, e, i), i;
};
class D extends W {
  constructor() {
    super(...arguments), this._config = gt, this._name = "", this.mouseStartPos = { x: 0, y: 0 }, this.mousePos = { x: 0, y: 0 }, this.containerWidth = 0, this.oldValue = 0, this.currentValue = 0, this.holdTimer = 0, this.isHold = !1, this._shouldUpdate = !0, this.updateTimeout = 0, this.pressTimeout = 0, this.trackingStartTime = 0, this.isTap = !1, this._handleContextMenu = (t) => (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1), this._handlePointer = (t, e) => {
      this.mousePos = { x: t.pageX, y: t.pageY };
      const s = this._config.min_slide_time;
      if (t.type === "pointerdown" && (this._press(), this.isTap = !0, this.isHold = !1, this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time), this.trackingStartTime = Date.now(), this._resetTrack()), ["pointerdown", "pointermove", "pointerup"].includes(t.type) && this._updateValue(), t.type === "pointermove") {
        if (this.isTap && Math.abs(e.relativeX) < ft && Math.abs(e.relativeY) < ft)
          return;
        this.isTap = !1, clearTimeout(this.holdTimer), this._stopUpdates();
      }
      if (t.type === "pointercancel" && (clearTimeout(this.holdTimer), this._unpress(), this._startUpdates()), t.type === "pointerup") {
        if (clearTimeout(this.holdTimer), this._unpress(), this._startUpdates(), this.isTap) {
          this._handleTap();
          return;
        }
        Date.now() - this.trackingStartTime > s && (this._setValue(), this._startUpdates(!0));
      }
    }, this._setHold = () => {
      this.isTap = !1, this.isHold = !0, this._handleAction("hold");
    }, this._handleTap = () => {
      var t;
      clearTimeout(this.holdTimer), (t = this._config) != null && t.tap_action && (this.isHold || this._handleAction("tap"));
    };
  }
  static getStubConfig(t, e) {
    const s = e.filter((o) => o.split(".")[0] === "light").sort();
    return { type: "custom:big-slider-card", entity: s[Math.floor(Math.random() * s.length)] };
  }
  // life cycle
  setConfig(t) {
    if (!t)
      throw new Error(z("common.invalid_configuration"));
    if (!t.entity)
      throw new Error(z("common.no_entity_set"));
    if (!t.entity || t.entity.split(".")[0] !== "light")
      throw new Error("Specify an entity from within the light domain");
    this._config = { ...gt, ...t }, this._entity = this._config.entity, this._config.original_min = this._config.min, this._config.original_max = this._config.max;
  }
  set hass(t) {
    var e, s, i;
    this._entity && (this._hass = t, this._state = t.states[this._entity], this._status = (e = this._state) == null ? void 0 : e.state, this._name = this._config.name ?? ((i = (s = this._state) == null ? void 0 : s.attributes) == null ? void 0 : i.friendly_name) ?? this._entity.split(".")[1] ?? "");
  }
  _log(t) {
    console.log(
      `%c  BIG-SLIDER-CARD ${this._name} %c ${t} `,
      "color: orange; font-weight: bold; background: black",
      ""
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("contextmenu", this._handleContextMenu), this.slideGesture = new Dt(this, this._handlePointer.bind(this), {
      touchActions: "pan-y",
      stopScrollDirection: "horizontal"
    });
  }
  disconnectedCallback() {
    this.removeEventListener("contextmenu", this._handleContextMenu), this.slideGesture.removeListeners(), super.disconnectedCallback();
  }
  _updateValue() {
    const t = this.containerWidth, e = this.mousePos.x - this.mouseStartPos.x, s = Math.round(100 * e / t);
    this.currentValue = this.oldValue + s, this._checklimits(), this._updateSlider();
  }
  _handleAction(t) {
    const e = new Event("hass-action", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    });
    e.detail = {
      config: this._config,
      action: t
    }, this.dispatchEvent(e);
  }
  _resetTrack() {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y }, this.oldValue = this.currentValue;
  }
  _press() {
    this.pressTimeout && clearTimeout(this.pressTimeout), this.pressTimeout = window.setTimeout(() => this.setAttribute("pressed", ""), this._config.min_slide_time), this.setAttribute("half-pressed", "");
  }
  _unpress() {
    this.pressTimeout && clearTimeout(this.pressTimeout), this.removeAttribute("pressed"), this.removeAttribute("half-pressed");
  }
  _checklimits() {
    const t = this._config.min ?? 0, e = this._config.max ?? 100;
    this.currentValue < t && (this.currentValue = t, this._resetTrack()), this.currentValue > e && (this.currentValue = e, this._resetTrack());
  }
  _updateSlider() {
    var e;
    this.style.setProperty("--bsc-percent", this.currentValue + "%");
    const t = (e = this == null ? void 0 : this.shadowRoot) == null ? void 0 : e.getElementById("percentage");
    t && (t.innerText = Math.round(this.currentValue) + "%");
  }
  _updateColors() {
    var n, c, h;
    let t = "var(--bsc-color)", e = "0%", s = "50%", i = !1;
    if (this._state)
      if (this._status == "on") {
        const d = ((n = this._state.attributes) == null ? void 0 : n.rgb_color) ?? [255, 255, 255], u = ((c = this._state.attributes) == null ? void 0 : c.brightness) ?? 255;
        i = !0, d && (t = `rgb(${d.join(",")})`), u && (e = `${Math.ceil(100 * u / 255)}%`, s = `${Math.ceil(100 * u / 510 + 50)}%`);
      } else
        t = "var(--bsc-off-color)";
    const o = (h = this == null ? void 0 : this.shadowRoot) == null ? void 0 : h.getElementById("percentage");
    i || o && (o.innerText = z("common.off")), this.style.setProperty("--bsc-entity-color", t), this.style.setProperty("--bsc-brightness", e), this.style.setProperty("--bsc-brightness-ui", s), this._config.icon_color && i && this.style.setProperty("--bsc-icon-color", this._config.icon_color), this._config.icon_color && !i && this.style.removeProperty("--bsc-icon-color");
  }
  _getValue() {
    var s;
    if (!this._shouldUpdate || !this._state) return;
    const t = (s = this._config) == null ? void 0 : s.attribute;
    let e = 0;
    if (this._status == "unavailable" ? (this._config.min = 0, this._config.max = 0, this.style.setProperty("--bsc-opacity", "0.5")) : (this._config.min = this._config.original_min, this._config.max = this._config.original_max, this.style.removeProperty("--bsc-opacity")), this._status != "on")
      e = this._config.min ?? 0;
    else
      switch (t) {
        case "brightness":
          e = Math.round(100 * (this._state.attributes.brightness ?? 255) / 255);
          break;
        case "red":
        case "green":
        case "blue":
          const i = this._state.attributes.rgb_color ?? [255, 255, 255];
          t === "red" && (e = i[0]), t === "green" && (e = i[1]), t === "blue" && (e = i[2]), e = Math.ceil(100 * e / 255);
          break;
        case "hue":
        case "saturation":
          const o = this._state.attributes.hs_color ?? [100, 100];
          t === "hue" && (e = o[0]), t === "saturation" && (e = o[1]);
          break;
      }
    this.currentValue = e, this._updateSlider();
  }
  _setValue() {
    if (!this._state) return;
    let t = this.currentValue, e = this._config.attribute, s = !0, i;
    switch (e) {
      case "brightness":
        t = Math.ceil(t / 100 * 255), t || (s = !1);
        break;
      case "red":
      case "green":
      case "blue":
        i = this._state.attributes.rgb_color ?? [255, 255, 255], e === "red" && (i[0] = t), e === "green" && (i[1] = t), e === "blue" && (i[2] = t), t = i, e = "rgb_color";
        break;
      case "hue":
      case "saturation":
        i = this._state.attributes.hs_color ?? [100, 100], e === "hue" && (i[0] = t), e === "saturation" && (i[1] = t), t = i, e = "hs_color";
        break;
    }
    const o = {
      entity_id: this._state.entity_id
    };
    s ? (o[e] = t, this._config.transition && (o.transition = this._config.transition), this._hass.callService("light", "turn_on", o)) : this._hass.callService("light", "turn_off", o);
  }
  _stopUpdates() {
    var t, e, s;
    this.updateTimeout && clearTimeout(this.updateTimeout), this._shouldUpdate && ((s = (e = (t = this.shadowRoot) == null ? void 0 : t.getElementById("slider")) == null ? void 0 : e.classList) == null || s.remove("animate"), this._shouldUpdate = !1);
  }
  _startUpdates(t = !1) {
    this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = window.setTimeout(() => {
      var e, s, i;
      this._shouldUpdate = !0, (i = (s = (e = this.shadowRoot) == null ? void 0 : e.getElementById("slider")) == null ? void 0 : s.classList) == null || i.add("animate"), this.requestUpdate();
    }, t ? this._config.settle_time : 0);
  }
  updated() {
    var t, e;
    this.containerWidth = ((e = (t = this.shadowRoot) == null ? void 0 : t.getElementById("container")) == null ? void 0 : e.clientWidth) ?? 0, this._getValue(), this._updateColors();
  }
  render() {
    var i;
    if (!(this._entity && this._entity in (((i = this._hass) == null ? void 0 : i.states) ?? {})))
      return this._showError(`${z("common.no_entity")}: ${this._entity}`);
    const t = (this._config.colorize && !0) ?? !1, e = (this._config.show_percentage && !0) ?? !1, s = (this._config.bold_text && !0) ?? !1;
    return this._setStyleProperty("--bsc-background", this._config.background_color), this._setStyleProperty("--bsc-primary-text-color", this._config.text_color), this._setStyleProperty("--bsc-slider-color", this._config.color), this._setStyleProperty("--bsc-border-color", this._config.border_color), this._setStyleProperty("--bsc-border-radius", this._config.border_radius), this._setStyleProperty("--bsc-border-style", this._config.border_style), this._setStyleProperty("--bsc-border-width", this._config.border_width), this._setStyleProperty("--bsc-height", this._config.height, (o) => `${o}px`), Tt`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${t ? "colorize" : ""}"></div>
        <ha-state-icon
        id="icon"
              .icon=${this._config.icon}
              .state=${this._state}
              .hass=${this._hass}
              .stateObj=${this._state}
              data-domain=${this._entity.split(".")[0]}
              data-state=${$e(this._status)}
            ></ha-state-icon>
        <div id="content">
          <p id="label" class="${s ? "bold" : ""}">
            <span id="name">${this._name}</span>
            <span id="percentage" class="${e ? "" : "hide"}"></span>
          </p>
        </div>
      </ha-card>
    `;
  }
  _setStyleProperty(t, e, s = (i) => i) {
    e != null && e !== "" && this.style.setProperty(t, s(e));
  }
  // private _showWarning(warning: string): TemplateResult {
  //   return html`
  //     <hui-warning>${warning}</hui-warning>
  //   `;
  // }
  _showError(t) {
    const e = document.createElement("hui-error-card");
    return e.setConfig({
      type: "error",
      error: t
      // origConfig: this._config,
    }), Tt`
      ${e}
    `;
  }
  // https://lit-element.polymer-project.org/guide/styles
  static get styles() {
    return Zt`
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
}
J([
  G()
], D.prototype, "_config");
J([
  G()
], D.prototype, "_entity");
J([
  G()
], D.prototype, "_state");
J([
  G()
], D.prototype, "_status");
J([
  G()
], D.prototype, "_name");
console.info(
  `%c  BIG-SLIDER-CARD 
%c  ${z("common.version")} ${Vt}    `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
customElements.define("big-slider-card", D);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "big-slider-card",
  name: "Big Slider Card",
  description: "Big slider card for light entities."
});
