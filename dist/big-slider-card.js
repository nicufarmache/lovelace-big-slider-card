var pe = (s) => {
  throw TypeError(s);
};
var oe = (s, e, t) => e.has(s) || pe("Cannot " + t);
var a = (s, e, t) => (oe(s, e, "read from private field"), t ? t.call(s) : e.get(s)), b = (s, e, t) => e.has(s) ? pe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), f = (s, e, t, i) => (oe(s, e, "write to private field"), i ? i.call(s, t) : e.set(s, t), t), w = (s, e, t) => (oe(s, e, "access private method"), t);
var p, E, S, A, k, P, U, R, M, j, v, y, q, de, ke, Pe, Te;
let Tt = (Te = class {
  constructor(e, t, { touchActions: i, stopScrollDirection: o = "both" } = {}) {
    b(this, y);
    b(this, p);
    b(this, E);
    b(this, S, 0);
    b(this, A, 0);
    b(this, k, 0);
    b(this, P, 0);
    b(this, U);
    b(this, R, !1);
    b(this, M);
    b(this, j);
    b(this, v);
    f(this, p, e), f(this, E, i), f(this, U, t), f(this, M, o), f(this, j, w(this, y, ke).bind(this)), f(this, v, w(this, y, Pe).bind(this)), this.addListeners();
  }
  addListeners() {
    a(this, p).addEventListener("pointerdown", a(this, v)), a(this, p).addEventListener("pointermove", a(this, v)), a(this, p).addEventListener("pointerup", a(this, v)), a(this, p).addEventListener("pointercancel", a(this, v)), window.addEventListener("touchmove", a(this, j), { passive: !1 }), a(this, E) && (a(this, p).style.touchAction = a(this, E));
  }
  removeListeners() {
    a(this, p).removeEventListener("pointerdown", a(this, v)), a(this, p).removeEventListener("pointermove", a(this, v)), a(this, p).removeEventListener("pointerup", a(this, v)), a(this, p).removeEventListener("pointercancel", a(this, v)), window.removeEventListener("touchmove", a(this, j)), a(this, E) && a(this, p).style.removeProperty("touch-action");
  }
}, p = new WeakMap(), E = new WeakMap(), S = new WeakMap(), A = new WeakMap(), k = new WeakMap(), P = new WeakMap(), U = new WeakMap(), R = new WeakMap(), M = new WeakMap(), j = new WeakMap(), v = new WeakMap(), y = new WeakSet(), q = function() {
  f(this, R, !0);
}, de = function() {
  f(this, R, !1);
}, ke = function(e) {
  a(this, R) && e.preventDefault();
}, Pe = function(e) {
  if (e.type === "pointerdown" && (a(this, p).setPointerCapture(e.pointerId), f(this, S, e.pageX), f(this, A, e.pageY)), a(this, p).hasPointerCapture(e.pointerId) && e.type !== "pointercancel" && typeof a(this, U) == "function") {
    const t = e.pageX - a(this, S), i = e.pageY - a(this, A), o = Math.abs(t / i) > 1, r = Math.abs(t / i) < 1;
    a(this, M) === "horizontal" && o && w(this, y, q).call(this), a(this, M) === "vertical" && r && w(this, y, q).call(this), a(this, M) === "both" && w(this, y, q).call(this), a(this, U).call(this, e, {
      startX: a(this, S),
      startY: a(this, A),
      relativeX: t,
      relativeY: i,
      totalX: t + a(this, k),
      totalY: i + a(this, P)
    });
  }
  e.type === "pointerup" && (f(this, k, +a(this, k) + e.pageX - a(this, S)), f(this, P, +a(this, P) + e.pageY - a(this, A)), a(this, p).releasePointerCapture(e.pointerId), w(this, y, de).call(this)), e.type === "pointercancel" && (a(this, U).call(this, e, {
    startX: a(this, S),
    startY: a(this, A),
    relativeX: 0,
    relativeY: 0,
    totalX: a(this, k),
    totalY: a(this, P)
  }), a(this, p).releasePointerCapture(e.pointerId), w(this, y, de).call(this));
}, Te);
const Et = "1.2.4-beta", kt = "brightness", Pt = 3e3, Ut = 600, Mt = 0, ge = 5, Ot = 0, Lt = 100, se = {
  type: "custom:big-slider-card",
  attribute: kt,
  tap_action: {
    action: "toggle",
    haptic: "light"
  },
  hold_action: {
    action: "more-info"
  },
  hold_time: Ut,
  settle_time: Pt,
  min_slide_time: Mt,
  min: Ot,
  max: Lt
}, Ue = { version: "Version", invalid_configuration: "Invalid configuration", show_warning: "Show Warning", no_entity_set: "Entity not set", no_entity: "Entity not available", on: "On", off: "Off" }, Me = { sections: { display: "Display Options", styling: "Custom Styling", behavior: "Behavior / Actions" }, attributes: { brightness: "Brightness", red: "Red", green: "Green", blue: "Blue", hue: "Hue", saturation: "Saturation", color_temp_kelvin: "Color Temperature Kelvin" }, labels: { colorize: "Colorize based on state", show_percentage: "Show percentage text", bold_text: "Bold text", no_scale: "Disable scale on press", no_transition_animation: "Disable transition animation", vertical: "Vertical slider", min_slide_time: "Min slide time", hold_time: "Hold time", settle_time: "Settle time", immediate_update: "Update while sliding", background_color: "Background color", height: "Height", width: "Width", text_color: "Text color", icon_color: "Icon color", icon_off_color: "Icon off color", constant_icon_color: "Constant icon color", icon_size: "Icon size", text_size: "Text size", border_color: "Border color", border_radius: "Border radius", border_style: "Border style", border_width: "Border width" } }, Oe = { light_domain_only: "Specify an entity from within the light domain" }, Le = { example_light: "Example Light" }, Re = { name: "Big Slider Card", description: "Big slider card for light entities." }, Rt = {
  common: Ue,
  editor: Me,
  errors: Oe,
  preview: Le,
  card: Re
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Re,
  common: Ue,
  default: Rt,
  editor: Me,
  errors: Oe,
  preview: Le
}, Symbol.toStringTag, { value: "Module" })), je = { version: "Version", invalid_configuration: "Ungültige Konfiguration", show_warning: "Warnung anzeigen", no_entity_set: "Entität nicht gesetzt", no_entity: "Entität nicht verfügbar", on: "An", off: "Aus" }, He = { sections: { display: "Anzeigeoptionen", styling: "Benutzerdefiniertes Styling", behavior: "Verhalten / Aktionen" }, attributes: { brightness: "Helligkeit", red: "Rot", green: "Grün", blue: "Blau", hue: "Farbton", saturation: "Sättigung", color_temp_kelvin: "Farbtemperatur Kelvin" }, labels: { colorize: "Basierend auf Status einfärben", show_percentage: "Prozenttext anzeigen", bold_text: "Fetter Text", no_scale: "Skalierung beim Drücken deaktivieren", no_transition_animation: "Übergangsanimation deaktivieren", vertical: "Vertikaler Schieberegler", min_slide_time: "Minimale Schiebezeit", hold_time: "Haltezeit", settle_time: "Beruhigungszeit", immediate_update: "Beim Schieben aktualisieren", background_color: "Hintergrundfarbe", height: "Höhe", width: "Breite", text_color: "Textfarbe", icon_color: "Symbolfarbe", icon_off_color: "Symbolfarbe aus", constant_icon_color: "Konstante Symbolfarbe", icon_size: "Symbolgröße", text_size: "Textgröße", border_color: "Rahmenfarbe", border_radius: "Rahmenradius", border_style: "Rahmenstil", border_width: "Rahmenbreite" } }, De = { light_domain_only: "Gib eine Entität aus der light-Domain an" }, Be = { example_light: "Beispiellampe" }, Ve = { name: "Big Slider Card", description: "Große Schiebereglerkarte für Lichtentitäten." }, Ht = {
  common: je,
  editor: He,
  errors: De,
  preview: Be,
  card: Ve
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Ve,
  common: je,
  default: Ht,
  editor: He,
  errors: De,
  preview: Be
}, Symbol.toStringTag, { value: "Module" })), Ie = { version: "Versión", invalid_configuration: "Configuración no válida", show_warning: "Mostrar advertencia", no_entity_set: "Entidad no configurada", no_entity: "Entidad no disponible", on: "Encendido", off: "Apagado" }, Ne = { sections: { display: "Opciones de visualización", styling: "Estilo personalizado", behavior: "Comportamiento / Acciones" }, attributes: { brightness: "Brillo", red: "Rojo", green: "Verde", blue: "Azul", hue: "Tono", saturation: "Saturación", color_temp_kelvin: "Temperatura de color Kelvin" }, labels: { colorize: "Colorear según el estado", show_percentage: "Mostrar texto de porcentaje", bold_text: "Texto en negrita", no_scale: "Desactivar escala al pulsar", no_transition_animation: "Desactivar animación de transición", vertical: "Control deslizante vertical", min_slide_time: "Tiempo mínimo de deslizamiento", hold_time: "Tiempo de pulsación larga", settle_time: "Tiempo de estabilización", immediate_update: "Actualizar mientras se desliza", background_color: "Color de fondo", height: "Altura", width: "Anchura", text_color: "Color del texto", icon_color: "Color del icono", icon_off_color: "Color del icono apagado", constant_icon_color: "Color constante del icono", icon_size: "Tamaño del icono", text_size: "Tamaño del texto", border_color: "Color del borde", border_radius: "Radio del borde", border_style: "Estilo del borde", border_width: "Anchura del borde" } }, We = { light_domain_only: "Especifica una entidad del dominio light" }, Ke = { example_light: "Luz de ejemplo" }, Ge = { name: "Big Slider Card", description: "Tarjeta deslizante grande para entidades de luz." }, Bt = {
  common: Ie,
  editor: Ne,
  errors: We,
  preview: Ke,
  card: Ge
}, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Ge,
  common: Ie,
  default: Bt,
  editor: Ne,
  errors: We,
  preview: Ke
}, Symbol.toStringTag, { value: "Module" })), Xe = { version: "Version", invalid_configuration: "Configuration invalide", show_warning: "Afficher l'avertissement", no_entity_set: "Entité non définie", no_entity: "Entité non disponible", on: "Allumé", off: "Éteint" }, Ye = { sections: { display: "Options d'affichage", styling: "Style personnalisé", behavior: "Comportement / Actions" }, attributes: { brightness: "Luminosité", red: "Rouge", green: "Vert", blue: "Bleu", hue: "Teinte", saturation: "Saturation", color_temp_kelvin: "Température de couleur Kelvin" }, labels: { colorize: "Colorer selon l'état", show_percentage: "Afficher le pourcentage", bold_text: "Texte en gras", no_scale: "Désactiver l'échelle à l'appui", no_transition_animation: "Désactiver l'animation de transition", vertical: "Curseur vertical", min_slide_time: "Temps de glissement minimal", hold_time: "Durée d'appui long", settle_time: "Temps de stabilisation", immediate_update: "Mettre à jour pendant le glissement", background_color: "Couleur d'arrière-plan", height: "Hauteur", width: "Largeur", text_color: "Couleur du texte", icon_color: "Couleur de l'icône", icon_off_color: "Couleur de l'icône éteinte", constant_icon_color: "Couleur constante de l'icône", icon_size: "Taille de l'icône", text_size: "Taille du texte", border_color: "Couleur de bordure", border_radius: "Rayon de bordure", border_style: "Style de bordure", border_width: "Largeur de bordure" } }, Fe = { light_domain_only: "Spécifiez une entité du domaine light" }, qe = { example_light: "Lumière d'exemple" }, Ze = { name: "Big Slider Card", description: "Grande carte de curseur pour les entités lumière." }, It = {
  common: Xe,
  editor: Ye,
  errors: Fe,
  preview: qe,
  card: Ze
}, Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Ze,
  common: Xe,
  default: It,
  editor: Ye,
  errors: Fe,
  preview: qe
}, Symbol.toStringTag, { value: "Module" })), Je = { version: "Versione", invalid_configuration: "Configurazione non valida", show_warning: "Mostra avviso", no_entity_set: "Entità non impostata", no_entity: "Entità non disponibile", on: "Acceso", off: "Spento" }, Qe = { sections: { display: "Opzioni di visualizzazione", styling: "Stile personalizzato", behavior: "Comportamento / Azioni" }, attributes: { brightness: "Luminosità", red: "Rosso", green: "Verde", blue: "Blu", hue: "Tonalità", saturation: "Saturazione", color_temp_kelvin: "Temperatura colore Kelvin" }, labels: { colorize: "Colora in base allo stato", show_percentage: "Mostra testo percentuale", bold_text: "Testo in grassetto", no_scale: "Disattiva scala alla pressione", no_transition_animation: "Disattiva animazione di transizione", vertical: "Cursore verticale", min_slide_time: "Tempo minimo di scorrimento", hold_time: "Tempo di pressione prolungata", settle_time: "Tempo di stabilizzazione", immediate_update: "Aggiorna durante lo scorrimento", background_color: "Colore di sfondo", height: "Altezza", width: "Larghezza", text_color: "Colore testo", icon_color: "Colore icona", icon_off_color: "Colore icona spenta", constant_icon_color: "Colore icona costante", icon_size: "Dimensione icona", text_size: "Dimensione testo", border_color: "Colore bordo", border_radius: "Raggio bordo", border_style: "Stile bordo", border_width: "Spessore bordo" } }, et = { light_domain_only: "Specifica un'entità del dominio light" }, tt = { example_light: "Luce di esempio" }, it = { name: "Big Slider Card", description: "Scheda con cursore grande per entità luce." }, Wt = {
  common: Je,
  editor: Qe,
  errors: et,
  preview: tt,
  card: it
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: it,
  common: Je,
  default: Wt,
  editor: Qe,
  errors: et,
  preview: tt
}, Symbol.toStringTag, { value: "Module" })), ot = { version: "Versie", invalid_configuration: "Ongeldige configuratie", show_warning: "Waarschuwing tonen", no_entity_set: "Entiteit niet ingesteld", no_entity: "Entiteit niet beschikbaar", on: "Aan", off: "Uit" }, st = { sections: { display: "Weergaveopties", styling: "Aangepaste stijl", behavior: "Gedrag / Acties" }, attributes: { brightness: "Helderheid", red: "Rood", green: "Groen", blue: "Blauw", hue: "Tint", saturation: "Verzadiging", color_temp_kelvin: "Kleurtemperatuur Kelvin" }, labels: { colorize: "Kleuren op basis van status", show_percentage: "Percentagetekst tonen", bold_text: "Vetgedrukte tekst", no_scale: "Schalen bij indrukken uitschakelen", no_transition_animation: "Overgangsanimatie uitschakelen", vertical: "Verticale schuifregelaar", min_slide_time: "Minimale schuiftijd", hold_time: "Tijd voor ingedrukt houden", settle_time: "Stabilisatietijd", immediate_update: "Bijwerken tijdens schuiven", background_color: "Achtergrondkleur", height: "Hoogte", width: "Breedte", text_color: "Tekstkleur", icon_color: "Pictogramkleur", icon_off_color: "Pictogramkleur uit", constant_icon_color: "Constante pictogramkleur", icon_size: "Pictogramgrootte", text_size: "Tekstgrootte", border_color: "Randkleur", border_radius: "Randradius", border_style: "Randstijl", border_width: "Randbreedte" } }, rt = { light_domain_only: "Geef een entiteit uit het light-domein op" }, nt = { example_light: "Voorbeeldlamp" }, at = { name: "Big Slider Card", description: "Grote schuifregelaar-kaart voor lichtentiteiten." }, Gt = {
  common: ot,
  editor: st,
  errors: rt,
  preview: nt,
  card: at
}, Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: at,
  common: ot,
  default: Gt,
  editor: st,
  errors: rt,
  preview: nt
}, Symbol.toStringTag, { value: "Module" })), lt = { version: "Wersja", invalid_configuration: "Nieprawidłowa konfiguracja", show_warning: "Pokaż ostrzeżenie", no_entity_set: "Encja nie ustawiona", no_entity: "Encja niedostępna", on: "Włączone", off: "Wyłączone" }, ct = { sections: { display: "Opcje wyświetlania", styling: "Niestandardowy styl", behavior: "Zachowanie / Akcje" }, attributes: { brightness: "Jasność", red: "Czerwony", green: "Zielony", blue: "Niebieski", hue: "Odcień", saturation: "Nasycenie", color_temp_kelvin: "Temperatura barwowa Kelvin" }, labels: { colorize: "Koloruj na podstawie stanu", show_percentage: "Pokaż tekst procentowy", bold_text: "Pogrubiony tekst", no_scale: "Wyłącz skalowanie po naciśnięciu", no_transition_animation: "Wyłącz animację przejścia", vertical: "Suwak pionowy", min_slide_time: "Minimalny czas przesuwania", hold_time: "Czas przytrzymania", settle_time: "Czas stabilizacji", immediate_update: "Aktualizuj podczas przesuwania", background_color: "Kolor tła", height: "Wysokość", width: "Szerokość", text_color: "Kolor tekstu", icon_color: "Kolor ikony", icon_off_color: "Kolor ikony wyłączonej", constant_icon_color: "Stały kolor ikony", icon_size: "Rozmiar ikony", text_size: "Rozmiar tekstu", border_color: "Kolor obramowania", border_radius: "Promień obramowania", border_style: "Styl obramowania", border_width: "Szerokość obramowania" } }, dt = { light_domain_only: "Podaj encję z domeny light" }, ht = { example_light: "Przykładowe światło" }, ut = { name: "Big Slider Card", description: "Duża karta suwaka dla encji światła." }, Yt = {
  common: lt,
  editor: ct,
  errors: dt,
  preview: ht,
  card: ut
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: ut,
  common: lt,
  default: Yt,
  editor: ct,
  errors: dt,
  preview: ht
}, Symbol.toStringTag, { value: "Module" })), _t = { version: "Versão", invalid_configuration: "Configuração inválida", show_warning: "Mostrar aviso", no_entity_set: "Entidade não definida", no_entity: "Entidade não disponível", on: "Ligado", off: "Desligado" }, mt = { sections: { display: "Opções de exibição", styling: "Estilo personalizado", behavior: "Comportamento / Ações" }, attributes: { brightness: "Brilho", red: "Vermelho", green: "Verde", blue: "Azul", hue: "Matiz", saturation: "Saturação", color_temp_kelvin: "Temperatura de cor Kelvin" }, labels: { colorize: "Colorir com base no estado", show_percentage: "Mostrar texto de porcentagem", bold_text: "Texto em negrito", no_scale: "Desativar escala ao pressionar", no_transition_animation: "Desativar animação de transição", vertical: "Controle deslizante vertical", min_slide_time: "Tempo mínimo de deslizamento", hold_time: "Tempo de pressionar e segurar", settle_time: "Tempo de estabilização", immediate_update: "Atualizar durante o deslizamento", background_color: "Cor de fundo", height: "Altura", width: "Largura", text_color: "Cor do texto", icon_color: "Cor do ícone", icon_off_color: "Cor do ícone desligado", constant_icon_color: "Cor constante do ícone", icon_size: "Tamanho do ícone", text_size: "Tamanho do texto", border_color: "Cor da borda", border_radius: "Raio da borda", border_style: "Estilo da borda", border_width: "Largura da borda" } }, pt = { light_domain_only: "Especifique uma entidade do domínio light" }, gt = { example_light: "Luz de exemplo" }, bt = { name: "Big Slider Card", description: "Cartão deslizante grande para entidades de luz." }, qt = {
  common: _t,
  editor: mt,
  errors: pt,
  preview: gt,
  card: bt
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: bt,
  common: _t,
  default: qt,
  editor: mt,
  errors: pt,
  preview: gt
}, Symbol.toStringTag, { value: "Module" })), ft = { version: "Versiunea", invalid_configuration: "Configurație invalidă", show_warning: "Show Warning", no_entity_set: "Entitatea nu e setată", no_entity: "Entitatea nu e disponibilă", on: "Pornit", off: "Oprit" }, yt = { sections: { display: "Opțiuni de afișare", styling: "Stilizare personalizată", behavior: "Comportament / Acțiuni" }, attributes: { brightness: "Luminozitate", red: "Roșu", green: "Verde", blue: "Albastru", hue: "Nuanță", saturation: "Saturație", color_temp_kelvin: "Temperatură culoare Kelvin" }, labels: { colorize: "Colorează în funcție de stare", show_percentage: "Afișează text procentual", bold_text: "Text îngroșat", no_scale: "Dezactivează scalarea la apăsare", no_transition_animation: "Dezactivează animația de tranziție", vertical: "Glisor vertical", min_slide_time: "Timp minim de glisare", hold_time: "Timp de apăsare lungă", settle_time: "Timp de stabilizare", immediate_update: "Actualizează în timpul glisării", background_color: "Culoare fundal", height: "Înălțime", width: "Lățime", text_color: "Culoare text", icon_color: "Culoare pictogramă", icon_off_color: "Culoare pictogramă oprită", constant_icon_color: "Culoare constantă pictogramă", icon_size: "Dimensiune pictogramă", text_size: "Dimensiune text", border_color: "Culoare chenar", border_radius: "Rază chenar", border_style: "Stil chenar", border_width: "Lățime chenar" } }, vt = { light_domain_only: "Specifică o entitate din domeniul light" }, $t = { example_light: "Lumină exemplu" }, wt = { name: "Big Slider Card", description: "Card cu glisor mare pentru entități de lumină." }, Jt = {
  common: ft,
  editor: yt,
  errors: vt,
  preview: $t,
  card: wt
}, Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: wt,
  common: ft,
  default: Jt,
  editor: yt,
  errors: vt,
  preview: $t
}, Symbol.toStringTag, { value: "Module" })), re = {
  en: jt,
  de: Dt,
  es: Vt,
  fr: Nt,
  it: Kt,
  nl: Xt,
  pl: Ft,
  pt: Zt,
  ro: Qt
};
function c(s, e = "", t = "") {
  const i = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_");
  let o;
  try {
    o = s.split(".").reduce((r, n) => r[n], re[i]);
  } catch {
    o = s.split(".").reduce((n, d) => n[d], re.en);
  }
  return o === void 0 && (o = s.split(".").reduce((r, n) => r[n], re.en)), e !== "" && t !== "" && (o = o.replace(e, t)), o;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, he = Z.ShadowRoot && (Z.ShadyCSS === void 0 || Z.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ue = Symbol(), be = /* @__PURE__ */ new WeakMap();
let xt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== ue) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (he && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = be.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && be.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ei = (s) => new xt(typeof s == "string" ? s : s + "", void 0, ue), ti = (s, ...e) => {
  const t = s.length === 1 ? s[0] : e.reduce((i, o, r) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + s[r + 1], s[0]);
  return new xt(t, s, ue);
}, ii = (s, e) => {
  if (he) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = Z.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, s.appendChild(i);
  }
}, fe = he ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return ei(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: oi, defineProperty: si, getOwnPropertyDescriptor: ri, getOwnPropertyNames: ni, getOwnPropertySymbols: ai, getPrototypeOf: li } = Object, z = globalThis, ye = z.trustedTypes, ci = ye ? ye.emptyScript : "", ne = z.reactiveElementPolyfillSupport, V = (s, e) => s, J = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? ci : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, _e = (s, e) => !oi(s, e), ve = { attribute: !0, type: String, converter: J, reflect: !1, hasChanged: _e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class L extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ve) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && si(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: r } = ri(this.prototype, e) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(n) {
      const d = o == null ? void 0 : o.call(this);
      r.call(this, n), this.requestUpdate(e, d, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ve;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties"))) return;
    const e = li(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const t = this.properties, i = [...ni(t), ...ai(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(fe(o));
    } else e !== void 0 && t.push(fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ii(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var r;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : J).toAttribute(t, i.type);
      this._$Em = e, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var r;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const n = i.getPropertyOptions(o), d = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((r = n.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? n.converter : J;
      this._$Em = o, this[o] = d.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? _e)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, n] of o) n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(t)) : this._$EU();
    } catch (o) {
      throw e = !1, this._$EU(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
L.elementStyles = [], L.shadowRootOptions = { mode: "open" }, L[V("elementProperties")] = /* @__PURE__ */ new Map(), L[V("finalized")] = /* @__PURE__ */ new Map(), ne == null || ne({ ReactiveElement: L }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const di = { attribute: !0, type: String, converter: J, reflect: !1, hasChanged: _e }, hi = (s = di, e, t) => {
  const { kind: i, metadata: o } = t;
  let r = globalThis.litPropertyMetadata.get(o);
  if (r === void 0 && globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()), r.set(t.name, s), i === "accessor") {
    const { name: n } = t;
    return { set(d) {
      const l = e.get.call(this);
      e.set.call(this, d), this.requestUpdate(n, l, s);
    }, init(d) {
      return d !== void 0 && this.P(n, void 0, s), d;
    } };
  }
  if (i === "setter") {
    const { name: n } = t;
    return function(d) {
      const l = this[n];
      e.call(this, d), this.requestUpdate(n, l, s);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function ui(s) {
  return (e, t) => typeof t == "object" ? hi(s, e, t) : ((i, o, r) => {
    const n = o.hasOwnProperty(r);
    return o.constructor.createProperty(r, n ? { ...i, wrapped: !0 } : i), n ? Object.getOwnPropertyDescriptor(o, r) : void 0;
  })(s, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ee(s) {
  return ui({ ...s, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis, Q = I.trustedTypes, $e = Q ? Q.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, St = "$lit$", x = `lit$${Math.random().toFixed(9).slice(2)}$`, At = "?" + x, _i = `<${At}>`, O = document, W = () => O.createComment(""), K = (s) => s === null || typeof s != "object" && typeof s != "function", me = Array.isArray, mi = (s) => me(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", ae = `[ 	
\f\r]`, B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, we = /-->/g, xe = />/g, C = RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Se = /'/g, Ae = /"/g, zt = /^(?:script|style|textarea|title)$/i, pi = (s) => (e, ...t) => ({ _$litType$: s, strings: e, values: t }), ze = pi(1), H = Symbol.for("lit-noChange"), m = Symbol.for("lit-nothing"), Ce = /* @__PURE__ */ new WeakMap(), T = O.createTreeWalker(O, 129);
function Ct(s, e) {
  if (!me(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return $e !== void 0 ? $e.createHTML(e) : e;
}
const gi = (s, e) => {
  const t = s.length - 1, i = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = B;
  for (let d = 0; d < t; d++) {
    const l = s[d];
    let u, _, h = -1, g = 0;
    for (; g < l.length && (n.lastIndex = g, _ = n.exec(l), _ !== null); ) g = n.lastIndex, n === B ? _[1] === "!--" ? n = we : _[1] !== void 0 ? n = xe : _[2] !== void 0 ? (zt.test(_[2]) && (o = RegExp("</" + _[2], "g")), n = C) : _[3] !== void 0 && (n = C) : n === C ? _[0] === ">" ? (n = o ?? B, h = -1) : _[1] === void 0 ? h = -2 : (h = n.lastIndex - _[2].length, u = _[1], n = _[3] === void 0 ? C : _[3] === '"' ? Ae : Se) : n === Ae || n === Se ? n = C : n === we || n === xe ? n = B : (n = C, o = void 0);
    const $ = n === C && s[d + 1].startsWith("/>") ? " " : "";
    r += n === B ? l + _i : h >= 0 ? (i.push(u), l.slice(0, h) + St + l.slice(h) + x + $) : l + x + (h === -2 ? d : $);
  }
  return [Ct(s, r + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class G {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const d = e.length - 1, l = this.parts, [u, _] = gi(e, t);
    if (this.el = G.createElement(u, i), T.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = T.nextNode()) !== null && l.length < d; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(St)) {
          const g = _[n++], $ = o.getAttribute(h).split(x), F = /([.?@])?(.*)/.exec(g);
          l.push({ type: 1, index: r, name: F[2], strings: $, ctor: F[1] === "." ? fi : F[1] === "?" ? yi : F[1] === "@" ? vi : te }), o.removeAttribute(h);
        } else h.startsWith(x) && (l.push({ type: 6, index: r }), o.removeAttribute(h));
        if (zt.test(o.tagName)) {
          const h = o.textContent.split(x), g = h.length - 1;
          if (g > 0) {
            o.textContent = Q ? Q.emptyScript : "";
            for (let $ = 0; $ < g; $++) o.append(h[$], W()), T.nextNode(), l.push({ type: 2, index: ++r });
            o.append(h[g], W());
          }
        }
      } else if (o.nodeType === 8) if (o.data === At) l.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(x, h + 1)) !== -1; ) l.push({ type: 7, index: r }), h += x.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const i = O.createElement("template");
    return i.innerHTML = e, i;
  }
}
function D(s, e, t = s, i) {
  var n, d;
  if (e === H) return e;
  let o = i !== void 0 ? (n = t._$Co) == null ? void 0 : n[i] : t._$Cl;
  const r = K(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((d = o == null ? void 0 : o._$AO) == null || d.call(o, !1), r === void 0 ? o = void 0 : (o = new r(s), o._$AT(s, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = D(s, o._$AS(s, e.values), o, i)), e;
}
class bi {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? O).importNode(t, !0);
    T.currentNode = o;
    let r = T.nextNode(), n = 0, d = 0, l = i[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let u;
        l.type === 2 ? u = new X(r, r.nextSibling, this, e) : l.type === 1 ? u = new l.ctor(r, l.name, l.strings, this, e) : l.type === 6 && (u = new $i(r, this, e)), this._$AV.push(u), l = i[++d];
      }
      n !== (l == null ? void 0 : l.index) && (r = T.nextNode(), n++);
    }
    return T.currentNode = O, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class X {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = m, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = D(this, e, t), K(e) ? e === m || e == null || e === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : e !== this._$AH && e !== H && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : mi(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== m && K(this._$AH) ? this._$AA.nextSibling.data = e : this.T(O.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = G.createElement(Ct(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(t);
    else {
      const n = new bi(o, this), d = n.u(this.options);
      n.p(t), this.T(d), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = Ce.get(e.strings);
    return t === void 0 && Ce.set(e.strings, t = new G(e)), t;
  }
  k(e) {
    me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const r of e) o === t.length ? t.push(i = new X(this.O(W()), this.O(W()), this, this.options)) : i = t[o], i._$AI(r), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class te {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, r) {
    this.type = 1, this._$AH = m, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = m;
  }
  _$AI(e, t = this, i, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) e = D(this, e, t, 0), n = !K(e) || e !== this._$AH && e !== H, n && (this._$AH = e);
    else {
      const d = e;
      let l, u;
      for (e = r[0], l = 0; l < r.length - 1; l++) u = D(this, d[i + l], t, l), u === H && (u = this._$AH[l]), n || (n = !K(u) || u !== this._$AH[l]), u === m ? e = m : e !== m && (e += (u ?? "") + r[l + 1]), this._$AH[l] = u;
    }
    n && !o && this.j(e);
  }
  j(e) {
    e === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class fi extends te {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === m ? void 0 : e;
  }
}
class yi extends te {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== m);
  }
}
class vi extends te {
  constructor(e, t, i, o, r) {
    super(e, t, i, o, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = D(this, e, t, 0) ?? m) === H) return;
    const i = this._$AH, o = e === m && i !== m || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== m && (i === m || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class $i {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    D(this, e);
  }
}
const le = I.litHtmlPolyfillSupport;
le == null || le(G, X), (I.litHtmlVersions ?? (I.litHtmlVersions = [])).push("3.2.1");
const wi = (s, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new X(e.insertBefore(W(), r), r, void 0, t ?? {});
  }
  return o._$AI(s), o;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xi = (s) => s ?? m;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class N extends L {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = wi(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return H;
  }
}
var Ee;
N._$litElement$ = !0, N.finalized = !0, (Ee = globalThis.litElementHydrateSupport) == null || Ee.call(globalThis, { LitElement: N });
const ce = globalThis.litElementPolyfillSupport;
ce == null || ce({ LitElement: N });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
var Si = Object.defineProperty, ie = (s, e, t, i) => {
  for (var o = void 0, r = s.length - 1, n; r >= 0; r--)
    (n = s[r]) && (o = n(e, t, o) || o);
  return o && Si(e, t, o), o;
};
class Y extends N {
  constructor() {
    super(...arguments), this._config = se, this._name = "", this.mouseStartPos = { x: 0, y: 0 }, this.mousePos = { x: 0, y: 0 }, this.containerWidth = 0, this.containerHeight = 0, this.oldValue = 0, this.currentValue = 0, this.holdTimer = 0, this.isHold = !1, this._shouldUpdate = !0, this.updateTimeout = 0, this.pressTimeout = 0, this.immediateUpdateTimeout = 0, this.trackingStartTime = 0, this.isTap = !1, this.hasValidSlide = !1, this._handleContextMenu = (e) => (e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1), this._handlePointer = (e, t) => {
      this.mousePos = { x: e.pageX, y: e.pageY };
      const i = this._config.min_slide_time;
      if (e.type === "pointerdown" && (this._press(), this.isTap = !0, this.isHold = !1, this.hasValidSlide = !1, this._clearImmediateUpdate(), this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time), this.trackingStartTime = Date.now(), this._updateContainerSize(), this._resetTrack()), !this.isHold && ["pointerdown", "pointermove", "pointerup"].includes(e.type) && this._updateValue(), e.type === "pointermove") {
        if (this.isHold || this.isTap && Math.abs(t.relativeX) < ge && Math.abs(t.relativeY) < ge)
          return;
        this.isTap = !1, clearTimeout(this.holdTimer), this._stopUpdates(), this._scheduleImmediateUpdate();
      }
      if (e.type === "pointercancel" && (clearTimeout(this.holdTimer), this._clearImmediateUpdate(), this._unpress(), this._startUpdates()), e.type === "pointerup") {
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
      var e;
      clearTimeout(this.holdTimer), (e = this._config) != null && e.tap_action && (this.isHold || this._handleAction("tap"));
    };
  }
  static getStubConfig(e, t) {
    const i = t.filter((r) => r.split(".")[0] === "light").sort();
    return { type: "custom:big-slider-card", entity: i[Math.floor(Math.random() * i.length)] };
  }
  getGridOptions() {
    return this._config.vertical ? {
      columns: 2,
      rows: 4,
      min_columns: 1,
      min_rows: 3
    } : {
      columns: 6,
      rows: 1,
      min_columns: 3,
      min_rows: 1
    };
  }
  getCardSize() {
    const e = this._config.vertical ? 180 : 60, t = this._getNumericCssLength(this._config.height ?? e);
    return Math.max(1, Math.ceil((t ?? e) / 50));
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
          title: c("editor.sections.display"),
          flatten: !0,
          schema: [
            {
              name: "attribute",
              selector: {
                select: {
                  options: [
                    { value: "brightness", label: c("editor.attributes.brightness") },
                    { value: "red", label: c("editor.attributes.red") },
                    { value: "green", label: c("editor.attributes.green") },
                    { value: "blue", label: c("editor.attributes.blue") },
                    { value: "hue", label: c("editor.attributes.hue") },
                    { value: "saturation", label: c("editor.attributes.saturation") },
                    { value: "color_temp_kelvin", label: c("editor.attributes.color_temp_kelvin") }
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
            },
            {
              name: "vertical",
              selector: { boolean: {} }
            }
          ]
        },
        {
          type: "expandable",
          name: "styling",
          title: c("editor.sections.styling"),
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
              name: "width",
              selector: {
                number: {
                  mode: "box",
                  min: 10,
                  max: 400,
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
            { name: "icon_off_color", selector: { text: {} } },
            {
              name: "constant_icon_color",
              selector: { boolean: {} }
            },
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
          title: c("editor.sections.behavior"),
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
      computeLabel: (e, t) => ({
        colorize: c("editor.labels.colorize"),
        show_percentage: c("editor.labels.show_percentage"),
        bold_text: c("editor.labels.bold_text"),
        no_scale: c("editor.labels.no_scale"),
        no_transition_animation: c("editor.labels.no_transition_animation"),
        vertical: c("editor.labels.vertical"),
        min_slide_time: c("editor.labels.min_slide_time"),
        hold_time: c("editor.labels.hold_time"),
        settle_time: c("editor.labels.settle_time"),
        immediate_update: c("editor.labels.immediate_update"),
        background_color: c("editor.labels.background_color"),
        height: c("editor.labels.height"),
        width: c("editor.labels.width"),
        text_color: c("editor.labels.text_color"),
        icon_color: c("editor.labels.icon_color"),
        icon_off_color: c("editor.labels.icon_off_color"),
        constant_icon_color: c("editor.labels.constant_icon_color"),
        icon_size: c("editor.labels.icon_size"),
        text_size: c("editor.labels.text_size"),
        border_color: c("editor.labels.border_color"),
        border_radius: c("editor.labels.border_radius"),
        border_style: c("editor.labels.border_style"),
        border_width: c("editor.labels.border_width")
      })[e.name] || t(`ui.panel.lovelace.editor.card.generic.${e.name}`) || e.name
    };
  }
  // life cycle
  setConfig(e) {
    if (!e)
      throw new Error(c("common.invalid_configuration"));
    if (e.entity && e.entity.split(".")[0] !== "light")
      throw new Error(c("errors.light_domain_only"));
    const t = this._getAttributeDefaults(e.attribute ?? se.attribute);
    this._config = { ...se, ...t, ...e }, this._entity = this._config.entity, this._config.original_min = this._config.min, this._config.original_max = this._config.max;
  }
  _getAttributeDefaults(e) {
    switch (e) {
      case "color_temp_kelvin":
        return { min: 2200, max: 6500 };
      default:
        return {};
    }
  }
  set hass(e) {
    var t, i;
    this._hass = e, this._entity && (this._state = e.states[this._entity], this._name = this._config.name ?? ((i = (t = this._state) == null ? void 0 : t.attributes) == null ? void 0 : i.friendly_name) ?? this._entity.split(".")[1] ?? "");
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
    var e, t;
    return this._config.name ? this._config.name : this._state ? ((e = this._state.attributes) == null ? void 0 : e.friendly_name) ?? ((t = this._entity) == null ? void 0 : t.split(".")[1]) ?? "" : c("preview.example_light");
  }
  get _effectiveStatus() {
    return this._state ? this._state.state : "on";
  }
  _log(e) {
    console.log(
      `%c  BIG-SLIDER-CARD ${this._name} %c ${e} `,
      "color: orange; font-weight: bold; background: black",
      ""
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("contextmenu", this._handleContextMenu), this.slideGesture = new Tt(this, this._handlePointer.bind(this), {
      touchActions: this._config.vertical ? "pan-x" : "pan-y",
      stopScrollDirection: this._config.vertical ? "vertical" : "horizontal"
    });
  }
  disconnectedCallback() {
    this.removeEventListener("contextmenu", this._handleContextMenu), this._clearImmediateUpdate(), this.slideGesture.removeListeners(), super.disconnectedCallback();
  }
  _updateValue() {
    if (!this._updateContainerSize()) return;
    const e = this._config.vertical ? this.containerHeight : this.containerWidth, t = this._config.vertical ? this.mouseStartPos.y - this.mousePos.y : this.mousePos.x - this.mouseStartPos.x, i = this._usesRangeSlider() ? Math.round((this._config.max - this._config.min) * t / e) : Math.round(100 * t / e);
    Number.isFinite(i) && (this.currentValue = this.oldValue + i, this._checklimits(), this._updateSlider(), this.hasValidSlide = !0);
  }
  _updateContainerSize() {
    var e, t, i, o;
    return this.containerWidth = ((t = (e = this.shadowRoot) == null ? void 0 : e.getElementById("container")) == null ? void 0 : t.clientWidth) ?? 0, this.containerHeight = ((o = (i = this.shadowRoot) == null ? void 0 : i.getElementById("container")) == null ? void 0 : o.clientHeight) ?? 0, this._config.vertical ? this.containerHeight > 0 : this.containerWidth > 0;
  }
  _handleAction(e) {
    const t = new Event("hass-action", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    });
    t.detail = {
      config: this._config,
      action: e
    }, this.dispatchEvent(t);
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
    const e = this._config.min ?? 0, t = this._config.max ?? 100;
    this.currentValue < e && (this.currentValue = e, this._resetTrack()), this.currentValue > t && (this.currentValue = t, this._resetTrack());
  }
  _updateSlider() {
    var i;
    const e = this._getSliderPercentage();
    this.style.setProperty("--bsc-percent", e + "%");
    const t = (i = this == null ? void 0 : this.shadowRoot) == null ? void 0 : i.getElementById("percentage");
    t && (t.innerText = this._getSliderLabel(e));
  }
  _getSliderLabel(e) {
    return this._config.attribute === "color_temp_kelvin" ? `${Math.round(this.currentValue)}K` : `${Math.round(e)}%`;
  }
  _getSliderPercentage() {
    if (!this._usesRangeSlider()) return this.currentValue;
    const e = this._config.max - this._config.min;
    if (e <= 0) return 0;
    const t = 100 * (this.currentValue - this._config.min) / e;
    return Number.isFinite(t) ? Math.max(0, Math.min(100, t)) : 0;
  }
  _usesRangeSlider() {
    return this._config.attribute === "color_temp_kelvin";
  }
  _updateColors() {
    var l, u, _;
    let e = "var(--bsc-color)", t = "0%", i = "50%", o = !1;
    const r = this._effectiveState;
    if (this._effectiveStatus == "on") {
      const h = ((l = r.attributes) == null ? void 0 : l.rgb_color) ?? [255, 255, 255], g = ((u = r.attributes) == null ? void 0 : u.brightness) ?? 255;
      o = !0, h && (e = `rgb(${h.join(",")})`), g && (t = `${Math.ceil(100 * g / 255)}%`, i = `${Math.ceil(100 * g / 510 + 50)}%`);
    } else
      e = "var(--bsc-off-color)";
    const d = (_ = this == null ? void 0 : this.shadowRoot) == null ? void 0 : _.getElementById("percentage");
    if (!o) {
      const h = r ? this._hass && typeof this._hass.formatEntityState == "function" ? this._hass.formatEntityState(r) : r.state : c("common.off");
      d && (d.innerText = h);
    }
    this.style.setProperty("--bsc-entity-color", e), this.style.setProperty("--bsc-brightness", t), this.style.setProperty("--bsc-brightness-ui", i), this.style.setProperty("--bsc-icon-brightness", this._config.constant_icon_color === !0 ? "100%" : i), o && this._config.icon_color ? this.style.setProperty("--bsc-icon-color", this._config.icon_color) : !o && this._config.icon_off_color ? this.style.setProperty("--bsc-icon-color", this._config.icon_off_color) : this.style.removeProperty("--bsc-icon-color");
  }
  _getValue() {
    var r;
    if (!this._shouldUpdate) return;
    const e = this._effectiveState, t = this._effectiveStatus, i = (r = this._config) == null ? void 0 : r.attribute;
    let o = 0;
    if (t == "unavailable" ? (this._config.min = 0, this._config.max = 0, this.style.setProperty("--bsc-opacity", "0.5")) : (this._config.min = this._config.original_min, this._config.max = this._config.original_max, this.style.removeProperty("--bsc-opacity")), t != "on")
      o = 0;
    else
      switch (i) {
        case "brightness":
          o = Math.round(100 * (e.attributes.brightness ?? 255) / 255);
          break;
        case "red":
        case "green":
        case "blue":
          const n = e.attributes.rgb_color ?? [255, 255, 255];
          i === "red" && (o = n[0]), i === "green" && (o = n[1]), i === "blue" && (o = n[2]), o = Math.ceil(100 * o / 255);
          break;
        case "hue":
        case "saturation":
          const d = e.attributes.hs_color ?? [100, 100];
          i === "hue" && (o = d[0]), i === "saturation" && (o = d[1]);
          break;
        case "color_temp_kelvin":
          o = e.attributes[i] ?? this._config.min ?? 0;
          break;
      }
    this.currentValue = o, this._updateSlider();
  }
  _setValue() {
    if (!this._state) return;
    let e = this.currentValue, t = this._config.attribute, i = !0, o;
    switch (t) {
      case "brightness":
        e = Math.ceil(e / 100 * 255), e || (i = !1);
        break;
      case "red":
      case "green":
      case "blue":
        o = this._state.attributes.rgb_color ?? [255, 255, 255], t === "red" && (o[0] = e), t === "green" && (o[1] = e), t === "blue" && (o[2] = e), e = o, t = "rgb_color";
        break;
      case "hue":
      case "saturation":
        o = this._state.attributes.hs_color ?? [100, 100], t === "hue" && (o[0] = e), t === "saturation" && (o[1] = e), e = o, t = "hs_color";
        break;
      case "color_temp_kelvin":
        e = Math.round(e);
        break;
    }
    const r = {
      entity_id: this._state.entity_id
    };
    i ? (r[t] = e, this._config.transition && (r.transition = this._config.transition), this._hass.callService("light", "turn_on", r)) : this._hass.callService("light", "turn_off", r);
  }
  _stopUpdates() {
    var e, t, i;
    this.updateTimeout && clearTimeout(this.updateTimeout), this._shouldUpdate && ((i = (t = (e = this.shadowRoot) == null ? void 0 : e.getElementById("slider")) == null ? void 0 : t.classList) == null || i.remove("animate"), this._shouldUpdate = !1);
  }
  _scheduleImmediateUpdate() {
    !this._config.immediate_update || this.immediateUpdateTimeout || (this.immediateUpdateTimeout = window.setTimeout(() => {
      this.immediateUpdateTimeout = 0, !this.isHold && Date.now() - this.trackingStartTime > this._config.min_slide_time && this._setValue();
    }, 300));
  }
  _clearImmediateUpdate() {
    this.immediateUpdateTimeout && (clearTimeout(this.immediateUpdateTimeout), this.immediateUpdateTimeout = 0);
  }
  _startUpdates(e = !1) {
    this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = window.setTimeout(() => {
      var t, i, o;
      this._shouldUpdate = !0, (o = (i = (t = this.shadowRoot) == null ? void 0 : t.getElementById("slider")) == null ? void 0 : i.classList) == null || o.add("animate"), this.requestUpdate();
    }, e ? this._config.settle_time : 0);
  }
  updated() {
    this._updateContainerSize(), this._getValue(), this._updateColors();
  }
  render() {
    var h;
    if (this._entity && !(this._entity in (((h = this._hass) == null ? void 0 : h.states) ?? {})))
      return this._showError(`${c("common.no_entity")}: ${this._entity}`);
    const e = this._effectiveState, t = this._effectiveStatus, i = this._effectiveName, o = this._entity || "light.example_light", r = (this._config.colorize && !0) ?? !1, n = (this._config.show_percentage && !0) ?? !1, d = (this._config.bold_text && !0) ?? !1, l = this._config.no_scale !== !0, u = this._config.no_transition_animation !== !0, _ = this._config.vertical === !0;
    return this._setStyleProperty("--bsc-background", this._config.background_color), this._setStyleProperty("--bsc-primary-text-color", this._config.text_color), this._setStyleProperty("--bsc-slider-color", this._config.color), this._setStyleProperty("--bsc-border-color", this._config.border_color), this._setStyleProperty("--bsc-border-radius", this._config.border_radius, this._normalizeCssLength), this._setStyleProperty("--bsc-border-style", this._config.border_style), this._setStyleProperty("--bsc-border-width", this._config.border_width, this._normalizeCssLength), this._setStyleProperty("--bsc-height", this._config.height, this._normalizeCssLength), this._setStyleProperty("--bsc-width", this._config.width, this._normalizeCssLength), this._setStyleProperty("--bsc-icon-size", this._config.icon_size, this._normalizeCssLength), this._setStyleProperty("--bsc-text-size", this._config.text_size, this._normalizeCssLength), this.style.setProperty("--bsc-press-transition", l ? "transform 0.1s ease-out" : "none"), this.style.setProperty("--bsc-half-pressed-transform", l ? "scale(0.99)" : "none"), this.style.setProperty("--bsc-pressed-transform", l ? "scale(0.98)" : "none"), this.style.setProperty("--bsc-color-transition", u ? "background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-slider-transition", u ? "right 1s ease, background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-vertical-slider-transition", u ? "top 1s ease, background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-icon-transition", u ? "color 0.3s ease-out" : "none"), ze`
      <ha-card
        id="container"
        class="${_ ? "vertical" : ""}"
        tabindex="0"
        >
        <div id="slider" class="animate ${r ? "colorize" : ""}"></div>
        <ha-state-icon
          id="icon"
          .icon=${this._config.icon}
          .state=${e}
          .hass=${this._hass}
          .stateObj=${e}
          data-domain=${o.split(".")[0]}
          data-state=${xi(t)}
        ></ha-state-icon>
        <div id="content">
          <p id="label" class="${d ? "bold" : ""}">
            <span id="name">${i}</span>
            <span id="percentage" class="${n ? "" : "hide"}"></span>
          </p>
        </div>
      </ha-card>
    `;
  }
  _setStyleProperty(e, t, i = (o) => o) {
    t != null && t !== "" && this.style.setProperty(e, i(t));
  }
  _normalizeCssLength(e) {
    return typeof e == "number" ? `${e}px` : e;
  }
  _getNumericCssLength(e) {
    if (typeof e == "number") return e;
    if (typeof e != "string") return;
    const t = e.trim().match(/^(\d+(?:\.\d+)?)px$/);
    return t ? Number(t[1]) : void 0;
  }
  // private _showWarning(warning: string): TemplateResult {
  //   return html`
  //     <hui-warning>${warning}</hui-warning>
  //   `;
  // }
  _showError(e) {
    const t = document.createElement("hui-error-card");
    return t.setConfig({
      type: "error",
      error: e
      // origConfig: this._config,
    }), ze`
      ${t}
    `;
  }
  // https://lit-element.polymer-project.org/guide/styles
  static get styles() {
    return ti`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-icon-brightness: var(--bsc-brightness-ui);
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-icon-size: 24px;
        --bsc-text-size: inherit;
        --bsc-press-transition: transform 0.1s ease-out;
        --bsc-half-pressed-transform: scale(0.99);
        --bsc-pressed-transform: scale(0.98);
        --bsc-color-transition: background-color 1s ease, filter 1s ease;
        --bsc-slider-transition: right 1s ease, background-color 1s ease, filter 1s ease;
        --bsc-vertical-slider-transition: top 1s ease, background-color 1s ease, filter 1s ease;
        --bsc-icon-transition: color 0.3s ease-out;
        --bsc-opacity: 1;

        width: 100%;
        height: 100%;
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
        width: var(--bsc-width, 100%);
        height: var(--bsc-height, 100%);
        min-height: var(--bsc-height, 60px);
        min-width: var(--bsc-width, 180px);
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color);
        border-radius: var(--bsc-border-radius);
        border-style: var(--bsc-border-style);
        border-width: var(--bsc-border-width);
        transition: none;
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
      }

      #container.vertical {
        min-height: var(--bsc-height, 180px);
        min-width: var(--bsc-width, 60px);
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

      #container.vertical #slider {
        height: auto;
        right: 0;
        top: calc(100% - var(--bsc-percent));
        bottom: 0;
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color, var(--bsc-slider-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: var(--bsc-color-transition);
      }

      #slider.animate {
        transition: var(--bsc-slider-transition);
      }

      #container.vertical #slider.animate {
        transition: var(--bsc-vertical-slider-transition);
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
        filter: brightness(var(--bsc-icon-brightness));
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

      #container.vertical #icon {
        top: 24px;
        right: 0;
        bottom: auto;
        left: 0;
        width: 100%;
      }

      #container.vertical #content {
        justify-content: center;
        align-items: flex-end;
        padding: 0 12px 24px;
        text-align: center;
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
ie([
  ee()
], Y.prototype, "_config");
ie([
  ee()
], Y.prototype, "_entity");
ie([
  ee()
], Y.prototype, "_state");
ie([
  ee()
], Y.prototype, "_name");
console.info(
  `%c  BIG-SLIDER-CARD 
%c  ${c("common.version")} ${Et}    `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
customElements.define("big-slider-card", Y);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "big-slider-card",
  name: c("card.name"),
  description: c("card.description"),
  preview: !0,
  getEntitySuggestion: (s, e) => e.startsWith("light.") ? {
    type: "custom:big-slider-card",
    config: {
      type: "custom:big-slider-card",
      entity: e
    }
  } : null
});
