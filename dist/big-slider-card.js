var _t = (o) => {
  throw TypeError(o);
};
var it = (o, t, e) => t.has(o) || _t("Cannot " + e);
var a = (o, t, e) => (it(o, t, "read from private field"), e ? e.call(o) : t.get(o)), f = (o, t, e) => t.has(o) ? _t("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, e), g = (o, t, e, s) => (it(o, t, "write to private field"), s ? s.call(o, e) : t.set(o, e), e), $ = (o, t, e) => (it(o, t, "access private method"), e);
var _, T, S, w, C, O, U, L, z, H, y, b, F, lt, Ot, Ut, Tt;
let Yt = (Tt = class {
  constructor(t, e, { touchActions: s, stopScrollDirection: i = "both" } = {}) {
    f(this, b);
    f(this, _);
    f(this, T);
    f(this, S, 0);
    f(this, w, 0);
    f(this, C, 0);
    f(this, O, 0);
    f(this, U);
    f(this, L, !1);
    f(this, z);
    f(this, H);
    f(this, y);
    g(this, _, t), g(this, T, s), g(this, U, e), g(this, z, i), g(this, H, $(this, b, Ot).bind(this)), g(this, y, $(this, b, Ut).bind(this)), this.addListeners();
  }
  addListeners() {
    a(this, _).addEventListener("pointerdown", a(this, y)), a(this, _).addEventListener("pointermove", a(this, y)), a(this, _).addEventListener("pointerup", a(this, y)), a(this, _).addEventListener("pointercancel", a(this, y)), window.addEventListener("touchmove", a(this, H), { passive: !1 }), a(this, T) && (a(this, _).style.touchAction = a(this, T));
  }
  removeListeners() {
    a(this, _).removeEventListener("pointerdown", a(this, y)), a(this, _).removeEventListener("pointermove", a(this, y)), a(this, _).removeEventListener("pointerup", a(this, y)), a(this, _).removeEventListener("pointercancel", a(this, y)), window.removeEventListener("touchmove", a(this, H)), a(this, T) && a(this, _).style.removeProperty("touch-action");
  }
}, _ = new WeakMap(), T = new WeakMap(), S = new WeakMap(), w = new WeakMap(), C = new WeakMap(), O = new WeakMap(), U = new WeakMap(), L = new WeakMap(), z = new WeakMap(), H = new WeakMap(), y = new WeakMap(), b = new WeakSet(), F = function() {
  g(this, L, !0);
}, lt = function() {
  g(this, L, !1);
}, Ot = function(t) {
  a(this, L) && t.preventDefault();
}, Ut = function(t) {
  if (t.type === "pointerdown" && (a(this, _).setPointerCapture(t.pointerId), g(this, S, t.pageX), g(this, w, t.pageY)), a(this, _).hasPointerCapture(t.pointerId) && t.type !== "pointercancel" && typeof a(this, U) == "function") {
    const e = t.pageX - a(this, S), s = t.pageY - a(this, w), i = Math.abs(e / s) > 1, n = Math.abs(e / s) < 1;
    a(this, z) === "horizontal" && i && $(this, b, F).call(this), a(this, z) === "vertical" && n && $(this, b, F).call(this), a(this, z) === "both" && $(this, b, F).call(this), a(this, U).call(this, t, {
      startX: a(this, S),
      startY: a(this, w),
      relativeX: e,
      relativeY: s,
      totalX: e + a(this, C),
      totalY: s + a(this, O)
    });
  }
  t.type === "pointerup" && (g(this, C, +a(this, C) + t.pageX - a(this, S)), g(this, O, +a(this, O) + t.pageY - a(this, w)), a(this, _).releasePointerCapture(t.pointerId), $(this, b, lt).call(this)), t.type === "pointercancel" && (a(this, U).call(this, t, {
    startX: a(this, S),
    startY: a(this, w),
    relativeX: 0,
    relativeY: 0,
    totalX: a(this, C),
    totalY: a(this, O)
  }), a(this, _).releasePointerCapture(t.pointerId), $(this, b, lt).call(this));
}, Tt);
const qt = "1.2.0", Gt = "brightness", Ft = 3e3, Kt = 600, Jt = 0, mt = 5, Zt = 0, Qt = 100, ft = {
  type: "custom:big-slider-card",
  attribute: Gt,
  tap_action: {
    action: "toggle",
    haptic: "light"
  },
  hold_action: {
    action: "more-info"
  },
  hold_time: Kt,
  settle_time: Ft,
  min_slide_time: Jt,
  min: Zt,
  max: Qt
}, zt = { version: "Version", invalid_configuration: "Invalid configuration", show_warning: "Show Warning", no_entity_set: "Entity not set", no_entity: "Entity not available", on: "On", off: "Off" }, te = {
  common: zt
}, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: zt,
  default: te
}, Symbol.toStringTag, { value: "Module" })), Mt = { version: "Version", invalid_configuration: "Ungültige Konfiguration", show_warning: "Warnung anzeigen", no_entity_set: "Entität nicht gesetzt", no_entity: "Entität nicht verfügbar", on: "An", off: "Aus" }, se = {
  common: Mt
}, ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Mt,
  default: se
}, Symbol.toStringTag, { value: "Module" })), kt = { version: "Versión", invalid_configuration: "Configuración no válida", show_warning: "Mostrar advertencia", no_entity_set: "Entidad no configurada", no_entity: "Entidad no disponible", on: "Encendido", off: "Apagado" }, oe = {
  common: kt
}, ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: kt,
  default: oe
}, Symbol.toStringTag, { value: "Module" })), Lt = { version: "Version", invalid_configuration: "Configuration invalide", show_warning: "Afficher l'avertissement", no_entity_set: "Entité non définie", no_entity: "Entité non disponible", on: "Allumé", off: "Éteint" }, re = {
  common: Lt
}, ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Lt,
  default: re
}, Symbol.toStringTag, { value: "Module" })), Ht = { version: "Versione", invalid_configuration: "Configurazione non valida", show_warning: "Mostra avviso", no_entity_set: "Entità non impostata", no_entity: "Entità non disponibile", on: "Acceso", off: "Spento" }, ce = {
  common: Ht
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Ht,
  default: ce
}, Symbol.toStringTag, { value: "Module" })), Rt = { version: "Versie", invalid_configuration: "Ongeldige configuratie", show_warning: "Waarschuwing tonen", no_entity_set: "Entiteit niet ingesteld", no_entity: "Entiteit niet beschikbaar", on: "Aan", off: "Uit" }, he = {
  common: Rt
}, de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Rt,
  default: he
}, Symbol.toStringTag, { value: "Module" })), jt = { version: "Wersja", invalid_configuration: "Nieprawidłowa konfiguracja", show_warning: "Pokaż ostrzeżenie", no_entity_set: "Encja nie ustawiona", no_entity: "Encja niedostępna", on: "Włączone", off: "Wyłączone" }, ue = {
  common: jt
}, pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: jt,
  default: ue
}, Symbol.toStringTag, { value: "Module" })), Nt = { version: "Versão", invalid_configuration: "Configuração inválida", show_warning: "Mostrar aviso", no_entity_set: "Entidade não definida", no_entity: "Entidade não disponível", on: "Ligado", off: "Desligado" }, _e = {
  common: Nt
}, me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Nt,
  default: _e
}, Symbol.toStringTag, { value: "Module" })), It = { version: "Versiunea", invalid_configuration: "Configurație invalidă", show_warning: "Show Warning", no_entity_set: "Entitatea nu e setată", no_entity: "Entitatea nu e disponibilă", on: "Pornit", off: "Oprit" }, fe = {
  common: It
}, ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: It,
  default: fe
}, Symbol.toStringTag, { value: "Module" })), ot = {
  en: ee,
  de: ie,
  es: ne,
  fr: ae,
  it: le,
  nl: de,
  pl: pe,
  pt: me,
  ro: ge
};
function K(o, t = "", e = "") {
  const s = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_");
  let i;
  try {
    i = o.split(".").reduce((n, r) => n[r], ot[s]);
  } catch {
    i = o.split(".").reduce((r, l) => r[l], ot.en);
  }
  return i === void 0 && (i = o.split(".").reduce((n, r) => n[r], ot.en)), t !== "" && e !== "" && (i = i.replace(t, e)), i;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, ht = J.ShadowRoot && (J.ShadyCSS === void 0 || J.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, dt = Symbol(), gt = /* @__PURE__ */ new WeakMap();
let Vt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== dt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ht && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const be = (o) => new Vt(typeof o == "string" ? o : o + "", void 0, dt), ye = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((s, i, n) => s + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[n + 1], o[0]);
  return new Vt(e, o, dt);
}, ve = (o, t) => {
  if (ht) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = J.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
  }
}, bt = ht ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return be(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: $e, defineProperty: Ae, getOwnPropertyDescriptor: Se, getOwnPropertyNames: we, getOwnPropertySymbols: xe, getPrototypeOf: Ee } = Object, x = globalThis, yt = x.trustedTypes, Pe = yt ? yt.emptyScript : "", nt = x.reactiveElementPolyfillSupport, I = (o, t) => o, Z = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? Pe : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, ut = (o, t) => !$e(o, t), vt = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: ut };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), x.litPropertyMetadata ?? (x.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class k extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = vt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Ae(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: n } = Se(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(r) {
      const l = i == null ? void 0 : i.call(this);
      n.call(this, r), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? vt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(I("elementProperties"))) return;
    const t = Ee(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(I("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(I("properties"))) {
      const e = this.properties, s = [...we(e), ...xe(e)];
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
    return ve(t, this.constructor.elementStyles), t;
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
    var n;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : Z).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), l = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((n = r.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? r.converter : Z;
      this._$Em = i, this[i] = l.fromAttribute(e, r.type), this._$Em = null;
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
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, r] of i) r.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
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
k.elementStyles = [], k.shadowRootOptions = { mode: "open" }, k[I("elementProperties")] = /* @__PURE__ */ new Map(), k[I("finalized")] = /* @__PURE__ */ new Map(), nt == null || nt({ ReactiveElement: k }), (x.reactiveElementVersions ?? (x.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: ut }, Ce = (o = Te, t, e) => {
  const { kind: s, metadata: i } = e;
  let n = globalThis.litPropertyMetadata.get(i);
  if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = /* @__PURE__ */ new Map()), n.set(e.name, o), s === "accessor") {
    const { name: r } = e;
    return { set(l) {
      const c = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(r, c, o);
    }, init(l) {
      return l !== void 0 && this.P(r, void 0, o), l;
    } };
  }
  if (s === "setter") {
    const { name: r } = e;
    return function(l) {
      const c = this[r];
      t.call(this, l), this.requestUpdate(r, c, o);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function Oe(o) {
  return (t, e) => typeof e == "object" ? Ce(o, t, e) : ((s, i, n) => {
    const r = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, r ? { ...s, wrapped: !0 } : s), r ? Object.getOwnPropertyDescriptor(i, n) : void 0;
  })(o, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function tt(o) {
  return Oe({ ...o, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = globalThis, Q = V.trustedTypes, $t = Q ? Q.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Dt = "$lit$", A = `lit$${Math.random().toFixed(9).slice(2)}$`, Bt = "?" + A, Ue = `<${Bt}>`, M = document, B = () => M.createComment(""), W = (o) => o === null || typeof o != "object" && typeof o != "function", pt = Array.isArray, ze = (o) => pt(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", rt = `[ 	
\f\r]`, N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, At = /-->/g, St = />/g, E = RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), wt = /'/g, xt = /"/g, Wt = /^(?:script|style|textarea|title)$/i, Me = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), Et = Me(1), R = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), Pt = /* @__PURE__ */ new WeakMap(), P = M.createTreeWalker(M, 129);
function Xt(o, t) {
  if (!pt(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return $t !== void 0 ? $t.createHTML(t) : t;
}
const ke = (o, t) => {
  const e = o.length - 1, s = [];
  let i, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = N;
  for (let l = 0; l < e; l++) {
    const c = o[l];
    let d, u, h = -1, m = 0;
    for (; m < c.length && (r.lastIndex = m, u = r.exec(c), u !== null); ) m = r.lastIndex, r === N ? u[1] === "!--" ? r = At : u[1] !== void 0 ? r = St : u[2] !== void 0 ? (Wt.test(u[2]) && (i = RegExp("</" + u[2], "g")), r = E) : u[3] !== void 0 && (r = E) : r === E ? u[0] === ">" ? (r = i ?? N, h = -1) : u[1] === void 0 ? h = -2 : (h = r.lastIndex - u[2].length, d = u[1], r = u[3] === void 0 ? E : u[3] === '"' ? xt : wt) : r === xt || r === wt ? r = E : r === At || r === St ? r = N : (r = E, i = void 0);
    const v = r === E && o[l + 1].startsWith("/>") ? " " : "";
    n += r === N ? c + Ue : h >= 0 ? (s.push(d), c.slice(0, h) + Dt + c.slice(h) + A + v) : c + A + (h === -2 ? l : v);
  }
  return [Xt(o, n + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class X {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let n = 0, r = 0;
    const l = t.length - 1, c = this.parts, [d, u] = ke(t, e);
    if (this.el = X.createElement(d, s), P.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = P.nextNode()) !== null && c.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const h of i.getAttributeNames()) if (h.endsWith(Dt)) {
          const m = u[r++], v = i.getAttribute(h).split(A), G = /([.?@])?(.*)/.exec(m);
          c.push({ type: 1, index: n, name: G[2], strings: v, ctor: G[1] === "." ? He : G[1] === "?" ? Re : G[1] === "@" ? je : et }), i.removeAttribute(h);
        } else h.startsWith(A) && (c.push({ type: 6, index: n }), i.removeAttribute(h));
        if (Wt.test(i.tagName)) {
          const h = i.textContent.split(A), m = h.length - 1;
          if (m > 0) {
            i.textContent = Q ? Q.emptyScript : "";
            for (let v = 0; v < m; v++) i.append(h[v], B()), P.nextNode(), c.push({ type: 2, index: ++n });
            i.append(h[m], B());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Bt) c.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = i.data.indexOf(A, h + 1)) !== -1; ) c.push({ type: 7, index: n }), h += A.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = M.createElement("template");
    return s.innerHTML = t, s;
  }
}
function j(o, t, e = o, s) {
  var r, l;
  if (t === R) return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const n = W(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1), n === void 0 ? i = void 0 : (i = new n(o), i._$AT(o, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = j(o, i._$AS(o, t.values), i, s)), t;
}
class Le {
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
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? M).importNode(e, !0);
    P.currentNode = i;
    let n = P.nextNode(), r = 0, l = 0, c = s[0];
    for (; c !== void 0; ) {
      if (r === c.index) {
        let d;
        c.type === 2 ? d = new Y(n, n.nextSibling, this, t) : c.type === 1 ? d = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (d = new Ne(n, this, t)), this._$AV.push(d), c = s[++l];
      }
      r !== (c == null ? void 0 : c.index) && (n = P.nextNode(), r++);
    }
    return P.currentNode = M, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class Y {
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
    t = j(this, t, e), W(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== R && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ze(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && W(this._$AH) ? this._$AA.nextSibling.data = t : this.T(M.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = X.createElement(Xt(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(e);
    else {
      const r = new Le(i, this), l = r.u(this.options);
      r.p(e), this.T(l), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Pt.get(t.strings);
    return e === void 0 && Pt.set(t.strings, e = new X(t)), e;
  }
  k(t) {
    pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const n of t) i === e.length ? e.push(s = new Y(this.O(B()), this.O(B()), this, this.options)) : s = e[i], s._$AI(n), i++;
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
class et {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, i) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) t = j(this, t, e, 0), r = !W(t) || t !== this._$AH && t !== R, r && (this._$AH = t);
    else {
      const l = t;
      let c, d;
      for (t = n[0], c = 0; c < n.length - 1; c++) d = j(this, l[s + c], e, c), d === R && (d = this._$AH[c]), r || (r = !W(d) || d !== this._$AH[c]), d === p ? t = p : t !== p && (t += (d ?? "") + n[c + 1]), this._$AH[c] = d;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class He extends et {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class Re extends et {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class je extends et {
  constructor(t, e, s, i, n) {
    super(t, e, s, i, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = j(this, t, e, 0) ?? p) === R) return;
    const s = this._$AH, i = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== p && (s === p || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ne {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    j(this, t);
  }
}
const at = V.litHtmlPolyfillSupport;
at == null || at(X, Y), (V.litHtmlVersions ?? (V.litHtmlVersions = [])).push("3.2.1");
const Ie = (o, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new Y(t.insertBefore(B(), n), n, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ve = (o) => o ?? p;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class D extends k {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ie(e, this.renderRoot, this.renderOptions);
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
    return R;
  }
}
var Ct;
D._$litElement$ = !0, D.finalized = !0, (Ct = globalThis.litElementHydrateSupport) == null || Ct.call(globalThis, { LitElement: D });
const ct = globalThis.litElementPolyfillSupport;
ct == null || ct({ LitElement: D });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
var De = Object.defineProperty, st = (o, t, e, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(t, e, i) || i);
  return i && De(t, e, i), i;
};
class q extends D {
  constructor() {
    super(...arguments), this._config = ft, this._name = "", this.mouseStartPos = { x: 0, y: 0 }, this.mousePos = { x: 0, y: 0 }, this.containerWidth = 0, this.oldValue = 0, this.currentValue = 0, this.holdTimer = 0, this.isHold = !1, this._shouldUpdate = !0, this.updateTimeout = 0, this.pressTimeout = 0, this.trackingStartTime = 0, this.isTap = !1, this._handleContextMenu = (t) => (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1), this._handlePointer = (t, e) => {
      this.mousePos = { x: t.pageX, y: t.pageY };
      const s = this._config.min_slide_time;
      if (t.type === "pointerdown" && (this._press(), this.isTap = !0, this.isHold = !1, this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time), this.trackingStartTime = Date.now(), this._resetTrack()), !this.isHold && ["pointerdown", "pointermove", "pointerup"].includes(t.type) && this._updateValue(), t.type === "pointermove") {
        if (this.isHold || this.isTap && Math.abs(e.relativeX) < mt && Math.abs(e.relativeY) < mt)
          return;
        this.isTap = !1, clearTimeout(this.holdTimer), this._stopUpdates();
      }
      if (t.type === "pointercancel" && (clearTimeout(this.holdTimer), this._unpress(), this._startUpdates()), t.type === "pointerup") {
        if (clearTimeout(this.holdTimer), this._unpress(), this._startUpdates(), this.isHold) return;
        if (this.isTap) {
          this._handleTap();
          return;
        }
        Date.now() - this.trackingStartTime > s && (this._setValue(), this._startUpdates(!0));
      }
    }, this._setHold = () => {
      this.isTap = !1, this.isHold = !0, this._shouldUpdate = !0, this.requestUpdate(), this._handleAction("hold");
    }, this._handleTap = () => {
      var t;
      clearTimeout(this.holdTimer), (t = this._config) != null && t.tap_action && (this.isHold || this._handleAction("tap"));
    };
  }
  static getStubConfig(t, e) {
    const s = e.filter((n) => n.split(".")[0] === "light").sort();
    return { type: "custom:big-slider-card", entity: s[Math.floor(Math.random() * s.length)] };
  }
  getGridOptions() {
    return {
      columns: 6,
      rows: 1,
      min_columns: 3,
      min_rows: 1
    };
  }
  getCardSize() {
    return 1;
  }
  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: !0,
          selector: { entity: { domain: "light" } }
        },
        {
          name: "name",
          selector: { text: {} }
        },
        {
          name: "icon",
          selector: { icon: {} }
        },
        {
          type: "expandable",
          name: "display",
          title: "Display Options",
          flatten: !0,
          schema: [
            {
              name: "attribute",
              selector: {
                select: {
                  options: [
                    { value: "brightness", label: "Brightness" },
                    { value: "red", label: "Red" },
                    { value: "green", label: "Green" },
                    { value: "blue", label: "Blue" },
                    { value: "hue", label: "Hue" },
                    { value: "saturation", label: "Saturation" }
                  ]
                }
              }
            },
            {
              name: "colorize",
              selector: { boolean: {} }
            },
            {
              name: "show_percentage",
              selector: { boolean: {} }
            }
          ]
        },
        {
          type: "expandable",
          name: "styling",
          title: "Custom Styling",
          flatten: !0,
          schema: [
            {
              name: "height",
              selector: {
                number: {
                  mode: "box",
                  min: 10,
                  max: 200,
                  unit_of_measurement: "px"
                }
              }
            },
            {
              name: "icon_size",
              selector: {
                number: {
                  mode: "box",
                  min: 8,
                  max: 96,
                  unit_of_measurement: "px"
                }
              }
            },
            {
              name: "text_size",
              selector: {
                number: {
                  mode: "box",
                  min: 8,
                  max: 48,
                  unit_of_measurement: "px"
                }
              }
            },
            { name: "color", selector: { text: {} } },
            { name: "background_color", selector: { text: {} } },
            { name: "text_color", selector: { text: {} } },
            { name: "icon_color", selector: { text: {} } },
            {
              name: "bold_text",
              selector: { boolean: {} }
            },
            {
              name: "no_scale",
              selector: { boolean: {} }
            },
            {
              name: "no_transition_animation",
              selector: { boolean: {} }
            },
            { name: "border_color", selector: { text: {} } },
            {
              name: "border_radius",
              selector: {
                number: {
                  mode: "box",
                  min: 0,
                  unit_of_measurement: "px"
                }
              }
            },
            { name: "border_style", selector: { text: {} } },
            {
              name: "border_width",
              selector: {
                number: {
                  mode: "box",
                  min: 0,
                  unit_of_measurement: "px"
                }
              }
            }
          ]
        },
        {
          type: "expandable",
          name: "behavior",
          title: "Behavior / Actions",
          flatten: !0,
          schema: [
            {
              name: "transition",
              selector: {
                number: {
                  mode: "box",
                  min: 0,
                  step: 0.1,
                  unit_of_measurement: "s"
                }
              }
            },
            { name: "min", selector: { number: { mode: "box" } } },
            { name: "max", selector: { number: { mode: "box" } } },
            {
              name: "min_slide_time",
              selector: {
                number: {
                  mode: "box",
                  unit_of_measurement: "ms"
                }
              }
            },
            {
              name: "hold_time",
              selector: {
                number: {
                  mode: "box",
                  unit_of_measurement: "ms"
                }
              }
            },
            {
              name: "settle_time",
              selector: {
                number: {
                  mode: "box",
                  unit_of_measurement: "ms"
                }
              }
            },
            { name: "tap_action", selector: { ui_action: {} } },
            { name: "hold_action", selector: { ui_action: {} } }
          ]
        }
      ],
      computeLabel: (t, e) => ({
        colorize: "Colorize based on state",
        show_percentage: "Show percentage text",
        bold_text: "Bold text",
        no_scale: "Disable scale on press",
        no_transition_animation: "Disable transition animation",
        min_slide_time: "Min slide time",
        hold_time: "Hold time",
        settle_time: "Settle time",
        background_color: "Background color",
        text_color: "Text color",
        icon_color: "Icon color",
        icon_size: "Icon size",
        text_size: "Text size",
        border_color: "Border color",
        border_radius: "Border radius",
        border_style: "Border style",
        border_width: "Border width"
      })[t.name] || e(`ui.panel.lovelace.editor.card.generic.${t.name}`) || t.name
    };
  }
  // life cycle
  setConfig(t) {
    if (!t)
      throw new Error(K("common.invalid_configuration"));
    if (t.entity && t.entity.split(".")[0] !== "light")
      throw new Error("Specify an entity from within the light domain");
    this._config = { ...ft, ...t }, this._entity = this._config.entity, this._config.original_min = this._config.min, this._config.original_max = this._config.max;
  }
  set hass(t) {
    var e, s;
    this._hass = t, this._entity && (this._state = t.states[this._entity], this._name = this._config.name ?? ((s = (e = this._state) == null ? void 0 : e.attributes) == null ? void 0 : s.friendly_name) ?? this._entity.split(".")[1] ?? "");
  }
  get _effectiveState() {
    return this._state ? this._state : {
      entity_id: this._entity || "light.example_light",
      state: this._effectiveStatus,
      attributes: {
        friendly_name: this._effectiveName,
        brightness: 153,
        // 60%
        rgb_color: [255, 165, 0]
      },
      last_changed: "",
      last_updated: "",
      context: { id: "", parent_id: null, user_id: null }
    };
  }
  get _effectiveName() {
    var t, e;
    return this._config.name ? this._config.name : this._state ? ((t = this._state.attributes) == null ? void 0 : t.friendly_name) ?? ((e = this._entity) == null ? void 0 : e.split(".")[1]) ?? "" : "Example Light";
  }
  get _effectiveStatus() {
    return this._state ? this._state.state : "on";
  }
  _log(t) {
    console.log(
      `%c  BIG-SLIDER-CARD ${this._name} %c ${t} `,
      "color: orange; font-weight: bold; background: black",
      ""
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("contextmenu", this._handleContextMenu), this.slideGesture = new Yt(this, this._handlePointer.bind(this), {
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
    var c, d, u;
    let t = "var(--bsc-color)", e = "0%", s = "50%", i = !1;
    const n = this._effectiveState;
    if (this._effectiveStatus == "on") {
      const h = ((c = n.attributes) == null ? void 0 : c.rgb_color) ?? [255, 255, 255], m = ((d = n.attributes) == null ? void 0 : d.brightness) ?? 255;
      i = !0, h && (t = `rgb(${h.join(",")})`), m && (e = `${Math.ceil(100 * m / 255)}%`, s = `${Math.ceil(100 * m / 510 + 50)}%`);
    } else
      t = "var(--bsc-off-color)";
    const l = (u = this == null ? void 0 : this.shadowRoot) == null ? void 0 : u.getElementById("percentage");
    if (!i) {
      const h = n ? this._hass && typeof this._hass.formatEntityState == "function" ? this._hass.formatEntityState(n) : n.state : K("common.off");
      l && (l.innerText = h);
    }
    this.style.setProperty("--bsc-entity-color", t), this.style.setProperty("--bsc-brightness", e), this.style.setProperty("--bsc-brightness-ui", s), this._config.icon_color && i && this.style.setProperty("--bsc-icon-color", this._config.icon_color), this._config.icon_color && !i && this.style.removeProperty("--bsc-icon-color");
  }
  _getValue() {
    var n;
    if (!this._shouldUpdate) return;
    const t = this._effectiveState, e = this._effectiveStatus, s = (n = this._config) == null ? void 0 : n.attribute;
    let i = 0;
    if (e == "unavailable" ? (this._config.min = 0, this._config.max = 0, this.style.setProperty("--bsc-opacity", "0.5")) : (this._config.min = this._config.original_min, this._config.max = this._config.original_max, this.style.removeProperty("--bsc-opacity")), e != "on")
      i = 0;
    else
      switch (s) {
        case "brightness":
          i = Math.round(100 * (t.attributes.brightness ?? 255) / 255);
          break;
        case "red":
        case "green":
        case "blue":
          const r = t.attributes.rgb_color ?? [255, 255, 255];
          s === "red" && (i = r[0]), s === "green" && (i = r[1]), s === "blue" && (i = r[2]), i = Math.ceil(100 * i / 255);
          break;
        case "hue":
        case "saturation":
          const l = t.attributes.hs_color ?? [100, 100];
          s === "hue" && (i = l[0]), s === "saturation" && (i = l[1]);
          break;
      }
    this.currentValue = i, this._updateSlider();
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
    const n = {
      entity_id: this._state.entity_id
    };
    s ? (n[e] = t, this._config.transition && (n.transition = this._config.transition), this._hass.callService("light", "turn_on", n)) : this._hass.callService("light", "turn_off", n);
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
    var u;
    if (this._entity && !(this._entity in (((u = this._hass) == null ? void 0 : u.states) ?? {})))
      return this._showError(`${K("common.no_entity")}: ${this._entity}`);
    const t = this._effectiveState, e = this._effectiveStatus, s = this._effectiveName, i = this._entity || "light.example_light", n = (this._config.colorize && !0) ?? !1, r = (this._config.show_percentage && !0) ?? !1, l = (this._config.bold_text && !0) ?? !1, c = this._config.no_scale !== !0, d = this._config.no_transition_animation !== !0;
    return this._setStyleProperty("--bsc-background", this._config.background_color), this._setStyleProperty("--bsc-primary-text-color", this._config.text_color), this._setStyleProperty("--bsc-slider-color", this._config.color), this._setStyleProperty("--bsc-border-color", this._config.border_color), this._setStyleProperty("--bsc-border-radius", this._config.border_radius, this._normalizeCssLength), this._setStyleProperty("--bsc-border-style", this._config.border_style), this._setStyleProperty("--bsc-border-width", this._config.border_width, this._normalizeCssLength), this._setStyleProperty("--bsc-height", this._config.height, this._normalizeCssLength), this._setStyleProperty("--bsc-icon-size", this._config.icon_size, this._normalizeCssLength), this._setStyleProperty("--bsc-text-size", this._config.text_size, this._normalizeCssLength), this.style.setProperty("--bsc-press-transition", c ? "transform 0.1s ease-out" : "none"), this.style.setProperty("--bsc-half-pressed-transform", c ? "scale(0.99)" : "none"), this.style.setProperty("--bsc-pressed-transform", c ? "scale(0.98)" : "none"), this.style.setProperty("--bsc-color-transition", d ? "background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-slider-transition", d ? "right 1s ease, background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-icon-transition", d ? "color 0.3s ease-out" : "none"), Et`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${n ? "colorize" : ""}"></div>
        <ha-state-icon
          id="icon"
          .icon=${this._config.icon}
          .state=${t}
          .hass=${this._hass}
          .stateObj=${t}
          data-domain=${i.split(".")[0]}
          data-state=${Ve(e)}
        ></ha-state-icon>
        <div id="content">
          <p id="label" class="${l ? "bold" : ""}">
            <span id="name">${s}</span>
            <span id="percentage" class="${r ? "" : "hide"}"></span>
          </p>
        </div>
      </ha-card>
    `;
  }
  _setStyleProperty(t, e, s = (i) => i) {
    e != null && e !== "" && this.style.setProperty(t, s(e));
  }
  _normalizeCssLength(t) {
    return typeof t == "number" ? `${t}px` : t;
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
    }), Et`
      ${e}
    `;
  }
  // https://lit-element.polymer-project.org/guide/styles
  static get styles() {
    return ye`
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
        --bsc-icon-size: 24px;
        --bsc-text-size: inherit;
        --bsc-press-transition: transform 0.1s ease-out;
        --bsc-half-pressed-transform: scale(0.99);
        --bsc-pressed-transform: scale(0.98);
        --bsc-color-transition: background-color 1s ease, filter 1s ease;
        --bsc-slider-transition: right 1s ease, background-color 1s ease, filter 1s ease;
        --bsc-icon-transition: color 0.3s ease-out;
        --bsc-opacity: 1;


        display: flex;
        transition: var(--bsc-press-transition);
        user-select: none;
      }

      :host([half-pressed]) {
        transform: var(--bsc-half-pressed-transform);
      }

      :host([pressed]) {
        transform: var(--bsc-pressed-transform);
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
        transition: none;
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
        background-color: var(--bsc-entity-color, var(--bsc-slider-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: var(--bsc-color-transition);
      }

      #slider.animate {
        transition: var(--bsc-slider-transition);
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        width: var(--bsc-icon-size);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: var(--bsc-icon-transition);
        --mdc-icon-size: var(--bsc-icon-size);
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 calc(48px + var(--bsc-icon-size));
        box-sizing: border-box;
      }

      #label {
        display: flex;
        flex-direction: column;
        font-size: var(--bsc-text-size);
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
st([
  tt()
], q.prototype, "_config");
st([
  tt()
], q.prototype, "_entity");
st([
  tt()
], q.prototype, "_state");
st([
  tt()
], q.prototype, "_name");
console.info(
  `%c  BIG-SLIDER-CARD 
%c  ${K("common.version")} ${qt}    `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
customElements.define("big-slider-card", q);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "big-slider-card",
  name: "Big Slider Card",
  description: "Big slider card for light entities.",
  preview: !0,
  getEntitySuggestion: (o, t) => t.startsWith("light.") ? {
    type: "custom:big-slider-card",
    config: {
      type: "custom:big-slider-card",
      entity: t
    }
  } : null
});
