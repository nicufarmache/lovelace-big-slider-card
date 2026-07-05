var mt = (o) => {
  throw TypeError(o);
};
var st = (o, t, e) => t.has(o) || mt("Cannot " + e);
var a = (o, t, e) => (st(o, t, "read from private field"), e ? e.call(o) : t.get(o)), f = (o, t, e) => t.has(o) ? mt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, e), g = (o, t, e, i) => (st(o, t, "write to private field"), i ? i.call(o, e) : t.set(o, e), e), $ = (o, t, e) => (st(o, t, "access private method"), e);
var p, P, A, w, C, U, k, L, M, H, y, b, G, ht, Ut, kt, Pt;
let Yt = (Pt = class {
  constructor(t, e, { touchActions: i, stopScrollDirection: s = "both" } = {}) {
    f(this, b);
    f(this, p);
    f(this, P);
    f(this, A, 0);
    f(this, w, 0);
    f(this, C, 0);
    f(this, U, 0);
    f(this, k);
    f(this, L, !1);
    f(this, M);
    f(this, H);
    f(this, y);
    g(this, p, t), g(this, P, i), g(this, k, e), g(this, M, s), g(this, H, $(this, b, Ut).bind(this)), g(this, y, $(this, b, kt).bind(this)), this.addListeners();
  }
  addListeners() {
    a(this, p).addEventListener("pointerdown", a(this, y)), a(this, p).addEventListener("pointermove", a(this, y)), a(this, p).addEventListener("pointerup", a(this, y)), a(this, p).addEventListener("pointercancel", a(this, y)), window.addEventListener("touchmove", a(this, H), { passive: !1 }), a(this, P) && (a(this, p).style.touchAction = a(this, P));
  }
  removeListeners() {
    a(this, p).removeEventListener("pointerdown", a(this, y)), a(this, p).removeEventListener("pointermove", a(this, y)), a(this, p).removeEventListener("pointerup", a(this, y)), a(this, p).removeEventListener("pointercancel", a(this, y)), window.removeEventListener("touchmove", a(this, H)), a(this, P) && a(this, p).style.removeProperty("touch-action");
  }
}, p = new WeakMap(), P = new WeakMap(), A = new WeakMap(), w = new WeakMap(), C = new WeakMap(), U = new WeakMap(), k = new WeakMap(), L = new WeakMap(), M = new WeakMap(), H = new WeakMap(), y = new WeakMap(), b = new WeakSet(), G = function() {
  g(this, L, !0);
}, ht = function() {
  g(this, L, !1);
}, Ut = function(t) {
  a(this, L) && t.preventDefault();
}, kt = function(t) {
  if (t.type === "pointerdown" && (a(this, p).setPointerCapture(t.pointerId), g(this, A, t.pageX), g(this, w, t.pageY)), a(this, p).hasPointerCapture(t.pointerId) && t.type !== "pointercancel" && typeof a(this, k) == "function") {
    const e = t.pageX - a(this, A), i = t.pageY - a(this, w), s = Math.abs(e / i) > 1, n = Math.abs(e / i) < 1;
    a(this, M) === "horizontal" && s && $(this, b, G).call(this), a(this, M) === "vertical" && n && $(this, b, G).call(this), a(this, M) === "both" && $(this, b, G).call(this), a(this, k).call(this, t, {
      startX: a(this, A),
      startY: a(this, w),
      relativeX: e,
      relativeY: i,
      totalX: e + a(this, C),
      totalY: i + a(this, U)
    });
  }
  t.type === "pointerup" && (g(this, C, +a(this, C) + t.pageX - a(this, A)), g(this, U, +a(this, U) + t.pageY - a(this, w)), a(this, p).releasePointerCapture(t.pointerId), $(this, b, ht).call(this)), t.type === "pointercancel" && (a(this, k).call(this, t, {
    startX: a(this, A),
    startY: a(this, w),
    relativeX: 0,
    relativeY: 0,
    totalX: a(this, C),
    totalY: a(this, U)
  }), a(this, p).releasePointerCapture(t.pointerId), $(this, b, ht).call(this));
}, Pt);
const qt = "1.2.1-beta", Ft = "brightness", Gt = 3e3, Kt = 600, Jt = 0, ft = 5, Zt = 0, Qt = 100, ot = {
  type: "custom:big-slider-card",
  attribute: Ft,
  tap_action: {
    action: "toggle",
    haptic: "light"
  },
  hold_action: {
    action: "more-info"
  },
  hold_time: Kt,
  settle_time: Gt,
  min_slide_time: Jt,
  min: Zt,
  max: Qt
}, Mt = { version: "Version", invalid_configuration: "Invalid configuration", show_warning: "Show Warning", no_entity_set: "Entity not set", no_entity: "Entity not available", on: "On", off: "Off" }, te = {
  common: Mt
}, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Mt,
  default: te
}, Symbol.toStringTag, { value: "Module" })), Ot = { version: "Version", invalid_configuration: "Ungültige Konfiguration", show_warning: "Warnung anzeigen", no_entity_set: "Entität nicht gesetzt", no_entity: "Entität nicht verfügbar", on: "An", off: "Aus" }, ie = {
  common: Ot
}, se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Ot,
  default: ie
}, Symbol.toStringTag, { value: "Module" })), zt = { version: "Versión", invalid_configuration: "Configuración no válida", show_warning: "Mostrar advertencia", no_entity_set: "Entidad no configurada", no_entity: "Entidad no disponible", on: "Encendido", off: "Apagado" }, oe = {
  common: zt
}, ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: zt,
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
}, Symbol.toStringTag, { value: "Module" })), It = { version: "Versie", invalid_configuration: "Ongeldige configuratie", show_warning: "Waarschuwing tonen", no_entity_set: "Entiteit niet ingesteld", no_entity: "Entiteit niet beschikbaar", on: "Aan", off: "Uit" }, he = {
  common: It
}, de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: It,
  default: he
}, Symbol.toStringTag, { value: "Module" })), Rt = { version: "Wersja", invalid_configuration: "Nieprawidłowa konfiguracja", show_warning: "Pokaż ostrzeżenie", no_entity_set: "Encja nie ustawiona", no_entity: "Encja niedostępna", on: "Włączone", off: "Wyłączone" }, ue = {
  common: Rt
}, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Rt,
  default: ue
}, Symbol.toStringTag, { value: "Module" })), jt = { version: "Versão", invalid_configuration: "Configuração inválida", show_warning: "Mostrar aviso", no_entity_set: "Entidade não definida", no_entity: "Entidade não disponível", on: "Ligado", off: "Desligado" }, pe = {
  common: jt
}, me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: jt,
  default: pe
}, Symbol.toStringTag, { value: "Module" })), Vt = { version: "Versiunea", invalid_configuration: "Configurație invalidă", show_warning: "Show Warning", no_entity_set: "Entitatea nu e setată", no_entity: "Entitatea nu e disponibilă", on: "Pornit", off: "Oprit" }, fe = {
  common: Vt
}, ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  common: Vt,
  default: fe
}, Symbol.toStringTag, { value: "Module" })), nt = {
  en: ee,
  de: se,
  es: ne,
  fr: ae,
  it: le,
  nl: de,
  pl: _e,
  pt: me,
  ro: ge
};
function K(o, t = "", e = "") {
  const i = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_");
  let s;
  try {
    s = o.split(".").reduce((n, r) => n[r], nt[i]);
  } catch {
    s = o.split(".").reduce((r, l) => r[l], nt.en);
  }
  return s === void 0 && (s = o.split(".").reduce((n, r) => n[r], nt.en)), t !== "" && e !== "" && (s = s.replace(t, e)), s;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, dt = J.ShadowRoot && (J.ShadyCSS === void 0 || J.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ut = Symbol(), gt = /* @__PURE__ */ new WeakMap();
let Nt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== ut) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (dt && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const be = (o) => new Nt(typeof o == "string" ? o : o + "", void 0, ut), ye = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((i, s, n) => i + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[n + 1], o[0]);
  return new Nt(e, o, ut);
}, ve = (o, t) => {
  if (dt) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = J.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, o.appendChild(i);
  }
}, bt = dt ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return be(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: $e, defineProperty: Se, getOwnPropertyDescriptor: Ae, getOwnPropertyNames: we, getOwnPropertySymbols: xe, getPrototypeOf: Ee } = Object, x = globalThis, yt = x.trustedTypes, Te = yt ? yt.emptyScript : "", rt = x.reactiveElementPolyfillSupport, V = (o, t) => o, Z = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? Te : null;
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
} }, _t = (o, t) => !$e(o, t), vt = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: _t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), x.litPropertyMetadata ?? (x.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class z extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = vt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Se(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: n } = Ae(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(r) {
      const l = s == null ? void 0 : s.call(this);
      n.call(this, r), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? vt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties"))) return;
    const t = Ee(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const e = this.properties, i = [...we(e), ...xe(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(bt(s));
    } else t !== void 0 && e.push(bt(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ve(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EC(t, e) {
    var n;
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const r = (((n = i.converter) == null ? void 0 : n.toAttribute) !== void 0 ? i.converter : Z).toAttribute(e, i.type);
      this._$Em = t, r == null ? this.removeAttribute(s) : this.setAttribute(s, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n;
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const r = i.getPropertyOptions(s), l = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((n = r.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? r.converter : Z;
      this._$Em = s, this[s] = l.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    if (t !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(t)), !(i.hasChanged ?? _t)(this[t], e)) return;
      this.P(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, i) {
    this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, r] of s) r.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((s) => {
        var n;
        return (n = s.hostUpdate) == null ? void 0 : n.call(s);
      }), this.update(e)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
z.elementStyles = [], z.shadowRootOptions = { mode: "open" }, z[V("elementProperties")] = /* @__PURE__ */ new Map(), z[V("finalized")] = /* @__PURE__ */ new Map(), rt == null || rt({ ReactiveElement: z }), (x.reactiveElementVersions ?? (x.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: _t }, Ce = (o = Pe, t, e) => {
  const { kind: i, metadata: s } = e;
  let n = globalThis.litPropertyMetadata.get(s);
  if (n === void 0 && globalThis.litPropertyMetadata.set(s, n = /* @__PURE__ */ new Map()), n.set(e.name, o), i === "accessor") {
    const { name: r } = e;
    return { set(l) {
      const c = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(r, c, o);
    }, init(l) {
      return l !== void 0 && this.P(r, void 0, o), l;
    } };
  }
  if (i === "setter") {
    const { name: r } = e;
    return function(l) {
      const c = this[r];
      t.call(this, l), this.requestUpdate(r, c, o);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function Ue(o) {
  return (t, e) => typeof e == "object" ? Ce(o, t, e) : ((i, s, n) => {
    const r = s.hasOwnProperty(n);
    return s.constructor.createProperty(n, r ? { ...i, wrapped: !0 } : i), r ? Object.getOwnPropertyDescriptor(s, n) : void 0;
  })(o, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function tt(o) {
  return Ue({ ...o, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = globalThis, Q = N.trustedTypes, $t = Q ? Q.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Dt = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, Bt = "?" + S, ke = `<${Bt}>`, O = document, B = () => O.createComment(""), W = (o) => o === null || typeof o != "object" && typeof o != "function", pt = Array.isArray, Me = (o) => pt(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", at = `[ 	
\f\r]`, j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, St = /-->/g, At = />/g, E = RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), wt = /'/g, xt = /"/g, Wt = /^(?:script|style|textarea|title)$/i, Oe = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), Et = Oe(1), I = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), Tt = /* @__PURE__ */ new WeakMap(), T = O.createTreeWalker(O, 129);
function Xt(o, t) {
  if (!pt(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return $t !== void 0 ? $t.createHTML(t) : t;
}
const ze = (o, t) => {
  const e = o.length - 1, i = [];
  let s, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = j;
  for (let l = 0; l < e; l++) {
    const c = o[l];
    let d, u, h = -1, m = 0;
    for (; m < c.length && (r.lastIndex = m, u = r.exec(c), u !== null); ) m = r.lastIndex, r === j ? u[1] === "!--" ? r = St : u[1] !== void 0 ? r = At : u[2] !== void 0 ? (Wt.test(u[2]) && (s = RegExp("</" + u[2], "g")), r = E) : u[3] !== void 0 && (r = E) : r === E ? u[0] === ">" ? (r = s ?? j, h = -1) : u[1] === void 0 ? h = -2 : (h = r.lastIndex - u[2].length, d = u[1], r = u[3] === void 0 ? E : u[3] === '"' ? xt : wt) : r === xt || r === wt ? r = E : r === St || r === At ? r = j : (r = E, s = void 0);
    const v = r === E && o[l + 1].startsWith("/>") ? " " : "";
    n += r === j ? c + ke : h >= 0 ? (i.push(d), c.slice(0, h) + Dt + c.slice(h) + S + v) : c + S + (h === -2 ? l : v);
  }
  return [Xt(o, n + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class X {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let n = 0, r = 0;
    const l = t.length - 1, c = this.parts, [d, u] = ze(t, e);
    if (this.el = X.createElement(d, i), T.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = T.nextNode()) !== null && c.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(Dt)) {
          const m = u[r++], v = s.getAttribute(h).split(S), F = /([.?@])?(.*)/.exec(m);
          c.push({ type: 1, index: n, name: F[2], strings: v, ctor: F[1] === "." ? He : F[1] === "?" ? Ie : F[1] === "@" ? Re : et }), s.removeAttribute(h);
        } else h.startsWith(S) && (c.push({ type: 6, index: n }), s.removeAttribute(h));
        if (Wt.test(s.tagName)) {
          const h = s.textContent.split(S), m = h.length - 1;
          if (m > 0) {
            s.textContent = Q ? Q.emptyScript : "";
            for (let v = 0; v < m; v++) s.append(h[v], B()), T.nextNode(), c.push({ type: 2, index: ++n });
            s.append(h[m], B());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Bt) c.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = s.data.indexOf(S, h + 1)) !== -1; ) c.push({ type: 7, index: n }), h += S.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const i = O.createElement("template");
    return i.innerHTML = t, i;
  }
}
function R(o, t, e = o, i) {
  var r, l;
  if (t === I) return t;
  let s = i !== void 0 ? (r = e._$Co) == null ? void 0 : r[i] : e._$Cl;
  const n = W(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== n && ((l = s == null ? void 0 : s._$AO) == null || l.call(s, !1), n === void 0 ? s = void 0 : (s = new n(o), s._$AT(o, e, i)), i !== void 0 ? (e._$Co ?? (e._$Co = []))[i] = s : e._$Cl = s), s !== void 0 && (t = R(o, s._$AS(o, t.values), s, i)), t;
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
    const { el: { content: e }, parts: i } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? O).importNode(e, !0);
    T.currentNode = s;
    let n = T.nextNode(), r = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (r === c.index) {
        let d;
        c.type === 2 ? d = new Y(n, n.nextSibling, this, t) : c.type === 1 ? d = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (d = new je(n, this, t)), this._$AV.push(d), c = i[++l];
      }
      r !== (c == null ? void 0 : c.index) && (n = T.nextNode(), r++);
    }
    return T.currentNode = O, s;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class Y {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = R(this, t, e), W(t) ? t === _ || t == null || t === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : t !== this._$AH && t !== I && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Me(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== _ && W(this._$AH) ? this._$AA.nextSibling.data = t : this.T(O.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = X.createElement(Xt(i.h, i.h[0]), this.options)), i);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === s) this._$AH.p(e);
    else {
      const r = new Le(s, this), l = r.u(this.options);
      r.p(e), this.T(l), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Tt.get(t.strings);
    return e === void 0 && Tt.set(t.strings, e = new X(t)), e;
  }
  k(t) {
    pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const n of t) s === e.length ? e.push(i = new Y(this.O(B()), this.O(B()), this, this.options)) : i = e[s], i._$AI(n), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
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
  constructor(t, e, i, s, n) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = _;
  }
  _$AI(t, e = this, i, s) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) t = R(this, t, e, 0), r = !W(t) || t !== this._$AH && t !== I, r && (this._$AH = t);
    else {
      const l = t;
      let c, d;
      for (t = n[0], c = 0; c < n.length - 1; c++) d = R(this, l[i + c], e, c), d === I && (d = this._$AH[c]), r || (r = !W(d) || d !== this._$AH[c]), d === _ ? t = _ : t !== _ && (t += (d ?? "") + n[c + 1]), this._$AH[c] = d;
    }
    r && !s && this.j(t);
  }
  j(t) {
    t === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class He extends et {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}
class Ie extends et {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
}
class Re extends et {
  constructor(t, e, i, s, n) {
    super(t, e, i, s, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = R(this, t, e, 0) ?? _) === I) return;
    const i = this._$AH, s = t === _ && i !== _ || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, n = t !== _ && (i === _ || s);
    s && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class je {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    R(this, t);
  }
}
const ct = N.litHtmlPolyfillSupport;
ct == null || ct(X, Y), (N.litHtmlVersions ?? (N.litHtmlVersions = [])).push("3.2.1");
const Ve = (o, t, e) => {
  const i = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    i._$litPart$ = s = new Y(t.insertBefore(B(), n), n, void 0, e ?? {});
  }
  return s._$AI(o), s;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ne = (o) => o ?? _;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class D extends z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ve(e, this.renderRoot, this.renderOptions);
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
D._$litElement$ = !0, D.finalized = !0, (Ct = globalThis.litElementHydrateSupport) == null || Ct.call(globalThis, { LitElement: D });
const lt = globalThis.litElementPolyfillSupport;
lt == null || lt({ LitElement: D });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
var De = Object.defineProperty, it = (o, t, e, i) => {
  for (var s = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = r(t, e, s) || s);
  return s && De(t, e, s), s;
};
class q extends D {
  constructor() {
    super(...arguments), this._config = ot, this._name = "", this.mouseStartPos = { x: 0, y: 0 }, this.mousePos = { x: 0, y: 0 }, this.containerWidth = 0, this.oldValue = 0, this.currentValue = 0, this.holdTimer = 0, this.isHold = !1, this._shouldUpdate = !0, this.updateTimeout = 0, this.pressTimeout = 0, this.immediateUpdateTimeout = 0, this.trackingStartTime = 0, this.isTap = !1, this.hasValidSlide = !1, this._handleContextMenu = (t) => (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), !1), this._handlePointer = (t, e) => {
      this.mousePos = { x: t.pageX, y: t.pageY };
      const i = this._config.min_slide_time;
      if (t.type === "pointerdown" && (this._press(), this.isTap = !0, this.isHold = !1, this.hasValidSlide = !1, this._clearImmediateUpdate(), this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time), this.trackingStartTime = Date.now(), this._updateContainerWidth(), this._resetTrack()), !this.isHold && ["pointerdown", "pointermove", "pointerup"].includes(t.type) && this._updateValue(), t.type === "pointermove") {
        if (this.isHold || this.isTap && Math.abs(e.relativeX) < ft && Math.abs(e.relativeY) < ft)
          return;
        this.isTap = !1, clearTimeout(this.holdTimer), this._stopUpdates(), this._scheduleImmediateUpdate();
      }
      if (t.type === "pointercancel" && (clearTimeout(this.holdTimer), this._clearImmediateUpdate(), this._unpress(), this._startUpdates()), t.type === "pointerup") {
        if (clearTimeout(this.holdTimer), this._clearImmediateUpdate(), this._unpress(), this._startUpdates(), this.isHold) return;
        if (this.isTap) {
          this._handleTap();
          return;
        }
        this.hasValidSlide && Date.now() - this.trackingStartTime > i && (this._setValue(), this._startUpdates(!0));
      }
    }, this._setHold = () => {
      this.isTap = !1, this.isHold = !0, this._clearImmediateUpdate(), this._shouldUpdate = !0, this.requestUpdate(), this._handleAction("hold");
    }, this._handleTap = () => {
      var t;
      clearTimeout(this.holdTimer), (t = this._config) != null && t.tap_action && (this.isHold || this._handleAction("tap"));
    };
  }
  static getStubConfig(t, e) {
    const i = e.filter((n) => n.split(".")[0] === "light").sort();
    return { type: "custom:big-slider-card", entity: i[Math.floor(Math.random() * i.length)] };
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
                    { value: "saturation", label: "Saturation" },
                    { value: "color_temp_kelvin", label: "Color Temperature Kelvin" }
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
            {
              name: "immediate_update",
              selector: { boolean: {} }
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
        immediate_update: "Update while sliding",
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
    const e = this._getAttributeDefaults(t.attribute ?? ot.attribute);
    this._config = { ...ot, ...e, ...t }, this._entity = this._config.entity, this._config.original_min = this._config.min, this._config.original_max = this._config.max;
  }
  _getAttributeDefaults(t) {
    switch (t) {
      case "color_temp_kelvin":
        return { min: 2200, max: 6500 };
      default:
        return {};
    }
  }
  set hass(t) {
    var e, i;
    this._hass = t, this._entity && (this._state = t.states[this._entity], this._name = this._config.name ?? ((i = (e = this._state) == null ? void 0 : e.attributes) == null ? void 0 : i.friendly_name) ?? this._entity.split(".")[1] ?? "");
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
    this.removeEventListener("contextmenu", this._handleContextMenu), this._clearImmediateUpdate(), this.slideGesture.removeListeners(), super.disconnectedCallback();
  }
  _updateValue() {
    if (!this._updateContainerWidth()) return;
    const t = this.containerWidth, e = this.mousePos.x - this.mouseStartPos.x, i = this._usesRangeSlider() ? Math.round((this._config.max - this._config.min) * e / t) : Math.round(100 * e / t);
    Number.isFinite(i) && (this.currentValue = this.oldValue + i, this._checklimits(), this._updateSlider(), this.hasValidSlide = !0);
  }
  _updateContainerWidth() {
    var t, e;
    return this.containerWidth = ((e = (t = this.shadowRoot) == null ? void 0 : t.getElementById("container")) == null ? void 0 : e.clientWidth) ?? 0, this.containerWidth > 0;
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
    var i;
    const t = this._getSliderPercentage();
    this.style.setProperty("--bsc-percent", t + "%");
    const e = (i = this == null ? void 0 : this.shadowRoot) == null ? void 0 : i.getElementById("percentage");
    e && (e.innerText = this._getSliderLabel(t));
  }
  _getSliderLabel(t) {
    return this._config.attribute === "color_temp_kelvin" ? `${Math.round(this.currentValue)}K` : `${Math.round(t)}%`;
  }
  _getSliderPercentage() {
    if (!this._usesRangeSlider()) return this.currentValue;
    const t = this._config.max - this._config.min;
    if (t <= 0) return 0;
    const e = 100 * (this.currentValue - this._config.min) / t;
    return Number.isFinite(e) ? Math.max(0, Math.min(100, e)) : 0;
  }
  _usesRangeSlider() {
    return this._config.attribute === "color_temp_kelvin";
  }
  _updateColors() {
    var c, d, u;
    let t = "var(--bsc-color)", e = "0%", i = "50%", s = !1;
    const n = this._effectiveState;
    if (this._effectiveStatus == "on") {
      const h = ((c = n.attributes) == null ? void 0 : c.rgb_color) ?? [255, 255, 255], m = ((d = n.attributes) == null ? void 0 : d.brightness) ?? 255;
      s = !0, h && (t = `rgb(${h.join(",")})`), m && (e = `${Math.ceil(100 * m / 255)}%`, i = `${Math.ceil(100 * m / 510 + 50)}%`);
    } else
      t = "var(--bsc-off-color)";
    const l = (u = this == null ? void 0 : this.shadowRoot) == null ? void 0 : u.getElementById("percentage");
    if (!s) {
      const h = n ? this._hass && typeof this._hass.formatEntityState == "function" ? this._hass.formatEntityState(n) : n.state : K("common.off");
      l && (l.innerText = h);
    }
    this.style.setProperty("--bsc-entity-color", t), this.style.setProperty("--bsc-brightness", e), this.style.setProperty("--bsc-brightness-ui", i), this._config.icon_color && s && this.style.setProperty("--bsc-icon-color", this._config.icon_color), this._config.icon_color && !s && this.style.removeProperty("--bsc-icon-color");
  }
  _getValue() {
    var n;
    if (!this._shouldUpdate) return;
    const t = this._effectiveState, e = this._effectiveStatus, i = (n = this._config) == null ? void 0 : n.attribute;
    let s = 0;
    if (e == "unavailable" ? (this._config.min = 0, this._config.max = 0, this.style.setProperty("--bsc-opacity", "0.5")) : (this._config.min = this._config.original_min, this._config.max = this._config.original_max, this.style.removeProperty("--bsc-opacity")), e != "on")
      s = 0;
    else
      switch (i) {
        case "brightness":
          s = Math.round(100 * (t.attributes.brightness ?? 255) / 255);
          break;
        case "red":
        case "green":
        case "blue":
          const r = t.attributes.rgb_color ?? [255, 255, 255];
          i === "red" && (s = r[0]), i === "green" && (s = r[1]), i === "blue" && (s = r[2]), s = Math.ceil(100 * s / 255);
          break;
        case "hue":
        case "saturation":
          const l = t.attributes.hs_color ?? [100, 100];
          i === "hue" && (s = l[0]), i === "saturation" && (s = l[1]);
          break;
        case "color_temp_kelvin":
          s = t.attributes[i] ?? this._config.min ?? 0;
          break;
      }
    this.currentValue = s, this._updateSlider();
  }
  _setValue() {
    if (!this._state) return;
    let t = this.currentValue, e = this._config.attribute, i = !0, s;
    switch (e) {
      case "brightness":
        t = Math.ceil(t / 100 * 255), t || (i = !1);
        break;
      case "red":
      case "green":
      case "blue":
        s = this._state.attributes.rgb_color ?? [255, 255, 255], e === "red" && (s[0] = t), e === "green" && (s[1] = t), e === "blue" && (s[2] = t), t = s, e = "rgb_color";
        break;
      case "hue":
      case "saturation":
        s = this._state.attributes.hs_color ?? [100, 100], e === "hue" && (s[0] = t), e === "saturation" && (s[1] = t), t = s, e = "hs_color";
        break;
      case "color_temp_kelvin":
        t = Math.round(t);
        break;
    }
    const n = {
      entity_id: this._state.entity_id
    };
    i ? (n[e] = t, this._config.transition && (n.transition = this._config.transition), this._hass.callService("light", "turn_on", n)) : this._hass.callService("light", "turn_off", n);
  }
  _stopUpdates() {
    var t, e, i;
    this.updateTimeout && clearTimeout(this.updateTimeout), this._shouldUpdate && ((i = (e = (t = this.shadowRoot) == null ? void 0 : t.getElementById("slider")) == null ? void 0 : e.classList) == null || i.remove("animate"), this._shouldUpdate = !1);
  }
  _scheduleImmediateUpdate() {
    !this._config.immediate_update || this.immediateUpdateTimeout || (this.immediateUpdateTimeout = window.setTimeout(() => {
      this.immediateUpdateTimeout = 0, !this.isHold && Date.now() - this.trackingStartTime > this._config.min_slide_time && this._setValue();
    }, 300));
  }
  _clearImmediateUpdate() {
    this.immediateUpdateTimeout && (clearTimeout(this.immediateUpdateTimeout), this.immediateUpdateTimeout = 0);
  }
  _startUpdates(t = !1) {
    this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = window.setTimeout(() => {
      var e, i, s;
      this._shouldUpdate = !0, (s = (i = (e = this.shadowRoot) == null ? void 0 : e.getElementById("slider")) == null ? void 0 : i.classList) == null || s.add("animate"), this.requestUpdate();
    }, t ? this._config.settle_time : 0);
  }
  updated() {
    this._updateContainerWidth(), this._getValue(), this._updateColors();
  }
  render() {
    var u;
    if (this._entity && !(this._entity in (((u = this._hass) == null ? void 0 : u.states) ?? {})))
      return this._showError(`${K("common.no_entity")}: ${this._entity}`);
    const t = this._effectiveState, e = this._effectiveStatus, i = this._effectiveName, s = this._entity || "light.example_light", n = (this._config.colorize && !0) ?? !1, r = (this._config.show_percentage && !0) ?? !1, l = (this._config.bold_text && !0) ?? !1, c = this._config.no_scale !== !0, d = this._config.no_transition_animation !== !0;
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
          data-domain=${s.split(".")[0]}
          data-state=${Ne(e)}
        ></ha-state-icon>
        <div id="content">
          <p id="label" class="${l ? "bold" : ""}">
            <span id="name">${i}</span>
            <span id="percentage" class="${r ? "" : "hide"}"></span>
          </p>
        </div>
      </ha-card>
    `;
  }
  _setStyleProperty(t, e, i = (s) => s) {
    e != null && e !== "" && this.style.setProperty(t, i(e));
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
it([
  tt()
], q.prototype, "_config");
it([
  tt()
], q.prototype, "_entity");
it([
  tt()
], q.prototype, "_state");
it([
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
