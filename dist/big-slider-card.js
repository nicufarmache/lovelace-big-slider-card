var ge = (s) => {
  throw TypeError(s);
};
var se = (s, e, t) => e.has(s) || ge("Cannot " + t);
var l = (s, e, t) => (se(s, e, "read from private field"), t ? t.call(s) : e.get(s)), f = (s, e, t) => e.has(s) ? ge("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), v = (s, e, t, i) => (se(s, e, "write to private field"), i ? i.call(s, t) : e.set(s, t), t), x = (s, e, t) => (se(s, e, "access private method"), t);
var p, k, z, A, M, U, V, D, L, H, $, y, Z, he, ke, Me, Ee;
let Et = (Ee = class {
  constructor(e, t, { touchActions: i, stopScrollDirection: o = "both" } = {}) {
    f(this, y);
    f(this, p);
    f(this, k);
    f(this, z, 0);
    f(this, A, 0);
    f(this, M, 0);
    f(this, U, 0);
    f(this, V);
    f(this, D, !1);
    f(this, L);
    f(this, H);
    f(this, $);
    v(this, p, e), v(this, k, i), v(this, V, t), v(this, L, o), v(this, H, x(this, y, ke).bind(this)), v(this, $, x(this, y, Me).bind(this)), this.addListeners();
  }
  addListeners() {
    l(this, p).addEventListener("pointerdown", l(this, $)), l(this, p).addEventListener("pointermove", l(this, $)), l(this, p).addEventListener("pointerup", l(this, $)), l(this, p).addEventListener("pointercancel", l(this, $)), window.addEventListener("touchmove", l(this, H), { passive: !1 }), l(this, k) && (l(this, p).style.touchAction = l(this, k));
  }
  removeListeners() {
    l(this, p).removeEventListener("pointerdown", l(this, $)), l(this, p).removeEventListener("pointermove", l(this, $)), l(this, p).removeEventListener("pointerup", l(this, $)), l(this, p).removeEventListener("pointercancel", l(this, $)), window.removeEventListener("touchmove", l(this, H)), l(this, k) && l(this, p).style.removeProperty("touch-action");
  }
}, p = new WeakMap(), k = new WeakMap(), z = new WeakMap(), A = new WeakMap(), M = new WeakMap(), U = new WeakMap(), V = new WeakMap(), D = new WeakMap(), L = new WeakMap(), H = new WeakMap(), $ = new WeakMap(), y = new WeakSet(), Z = function() {
  v(this, D, !0);
}, he = function() {
  v(this, D, !1);
}, ke = function(e) {
  l(this, D) && e.preventDefault();
}, Me = function(e) {
  if (e.type === "pointerdown" && (l(this, p).setPointerCapture(e.pointerId), v(this, z, e.pageX), v(this, A, e.pageY)), l(this, p).hasPointerCapture(e.pointerId) && e.type !== "pointercancel" && typeof l(this, V) == "function") {
    const t = e.pageX - l(this, z), i = e.pageY - l(this, A), o = Math.abs(t / i) > 1, r = Math.abs(t / i) < 1;
    l(this, L) === "horizontal" && o && x(this, y, Z).call(this), l(this, L) === "vertical" && r && x(this, y, Z).call(this), l(this, L) === "both" && x(this, y, Z).call(this), l(this, V).call(this, e, {
      startX: l(this, z),
      startY: l(this, A),
      relativeX: t,
      relativeY: i,
      totalX: t + l(this, M),
      totalY: i + l(this, U)
    });
  }
  e.type === "pointerup" && (v(this, M, +l(this, M) + e.pageX - l(this, z)), v(this, U, +l(this, U) + e.pageY - l(this, A)), l(this, p).releasePointerCapture(e.pointerId), x(this, y, he).call(this)), e.type === "pointercancel" && (l(this, V).call(this, e, {
    startX: l(this, z),
    startY: l(this, A),
    relativeX: 0,
    relativeY: 0,
    totalX: l(this, M),
    totalY: l(this, U)
  }), l(this, p).releasePointerCapture(e.pointerId), x(this, y, he).call(this));
}, Ee);
const Pt = "1.2.4-beta", kt = "brightness", Mt = 3e3, Ut = 600, Vt = 0, be = 5, Lt = 0, Rt = 100, J = [
  "light",
  "number",
  "input_number",
  "fan",
  "cover",
  "climate",
  "humidifier",
  "water_heater",
  "valve",
  "media_player"
], w = {
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
  settle_time: Mt,
  min_slide_time: Vt,
  min: Lt,
  max: Rt
}, Ue = { version: "Version", invalid_configuration: "Invalid configuration", show_warning: "Show Warning", no_entity_set: "Entity not set", no_entity: "Entity not available", on: "On", off: "Off" }, Ve = { sections: { display: "Display Options", styling: "Custom Styling", behavior: "Behavior / Actions" }, attributes: { brightness: "Brightness", red: "Red", green: "Green", blue: "Blue", hue: "Hue", saturation: "Saturation", color_temp_kelvin: "Color Temperature Kelvin", value: "Value", percentage: "Percentage", position: "Position", tilt_position: "Tilt position", temperature: "Temperature", humidity: "Humidity", volume: "Volume" }, labels: { colorize: "Colorize based on state", show_percentage: "Show percentage text", bold_text: "Bold text", no_scale: "Disable scale on press", no_transition_animation: "Disable transition animation", vertical: "Vertical slider", min_slide_time: "Min slide time", hold_time: "Hold time", settle_time: "Settle time", immediate_update: "Update while sliding", background_color: "Background color", height: "Height", width: "Width", text_color: "Text color", icon_color: "Icon color", icon_off_color: "Icon off color", constant_icon_color: "Constant icon color", icon_size: "Icon size", text_size: "Text size", border_color: "Border color", border_radius: "Border radius", border_style: "Border style", border_width: "Border width" } }, Le = { light_domain_only: "Specify an entity from within the light domain", unsupported_domain: "Specify a supported slider entity" }, Re = { example_light: "Example Light" }, Ne = { name: "Big Slider Card", description: "Big slider card for light entities." }, Nt = {
  common: Ue,
  editor: Ve,
  errors: Le,
  preview: Re,
  card: Ne
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Ne,
  common: Ue,
  default: Nt,
  editor: Ve,
  errors: Le,
  preview: Re
}, Symbol.toStringTag, { value: "Module" })), De = { version: "Version", invalid_configuration: "Ungültige Konfiguration", show_warning: "Warnung anzeigen", no_entity_set: "Entität nicht gesetzt", no_entity: "Entität nicht verfügbar", on: "An", off: "Aus" }, He = { sections: { display: "Anzeigeoptionen", styling: "Benutzerdefiniertes Styling", behavior: "Verhalten / Aktionen" }, attributes: { brightness: "Helligkeit", red: "Rot", green: "Grün", blue: "Blau", hue: "Farbton", saturation: "Sättigung", color_temp_kelvin: "Farbtemperatur Kelvin", value: "Wert", percentage: "Prozent", position: "Position", tilt_position: "Kippposition", temperature: "Temperatur", humidity: "Luftfeuchtigkeit", volume: "Lautstärke" }, labels: { colorize: "Basierend auf Status einfärben", show_percentage: "Prozenttext anzeigen", bold_text: "Fetter Text", no_scale: "Skalierung beim Drücken deaktivieren", no_transition_animation: "Übergangsanimation deaktivieren", vertical: "Vertikaler Schieberegler", min_slide_time: "Minimale Schiebezeit", hold_time: "Haltezeit", settle_time: "Beruhigungszeit", immediate_update: "Beim Schieben aktualisieren", background_color: "Hintergrundfarbe", height: "Höhe", width: "Breite", text_color: "Textfarbe", icon_color: "Symbolfarbe", icon_off_color: "Symbolfarbe aus", constant_icon_color: "Konstante Symbolfarbe", icon_size: "Symbolgröße", text_size: "Textgröße", border_color: "Rahmenfarbe", border_radius: "Rahmenradius", border_style: "Rahmenstil", border_width: "Rahmenbreite" } }, Oe = { light_domain_only: "Gib eine Entität aus der light-Domain an", unsupported_domain: "Gib eine unterstützte Schieberegler-Entität an" }, Be = { example_light: "Beispiellampe" }, je = { name: "Big Slider Card", description: "Große Schiebereglerkarte für Lichtentitäten." }, Ht = {
  common: De,
  editor: He,
  errors: Oe,
  preview: Be,
  card: je
}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: je,
  common: De,
  default: Ht,
  editor: He,
  errors: Oe,
  preview: Be
}, Symbol.toStringTag, { value: "Module" })), Ie = { version: "Versión", invalid_configuration: "Configuración no válida", show_warning: "Mostrar advertencia", no_entity_set: "Entidad no configurada", no_entity: "Entidad no disponible", on: "Encendido", off: "Apagado" }, We = { sections: { display: "Opciones de visualización", styling: "Estilo personalizado", behavior: "Comportamiento / Acciones" }, attributes: { brightness: "Brillo", red: "Rojo", green: "Verde", blue: "Azul", hue: "Tono", saturation: "Saturación", color_temp_kelvin: "Temperatura de color Kelvin", value: "Valor", percentage: "Porcentaje", position: "Posición", tilt_position: "Posición de inclinación", temperature: "Temperatura", humidity: "Humedad", volume: "Volumen" }, labels: { colorize: "Colorear según el estado", show_percentage: "Mostrar texto de porcentaje", bold_text: "Texto en negrita", no_scale: "Desactivar escala al pulsar", no_transition_animation: "Desactivar animación de transición", vertical: "Control deslizante vertical", min_slide_time: "Tiempo mínimo de deslizamiento", hold_time: "Tiempo de pulsación larga", settle_time: "Tiempo de estabilización", immediate_update: "Actualizar mientras se desliza", background_color: "Color de fondo", height: "Altura", width: "Anchura", text_color: "Color del texto", icon_color: "Color del icono", icon_off_color: "Color del icono apagado", constant_icon_color: "Color constante del icono", icon_size: "Tamaño del icono", text_size: "Tamaño del texto", border_color: "Color del borde", border_radius: "Radio del borde", border_style: "Estilo del borde", border_width: "Anchura del borde" } }, Ke = { light_domain_only: "Especifica una entidad del dominio light", unsupported_domain: "Especifica una entidad compatible con el control deslizante" }, Ge = { example_light: "Luz de ejemplo" }, Fe = { name: "Big Slider Card", description: "Tarjeta deslizante grande para entidades de luz." }, Bt = {
  common: Ie,
  editor: We,
  errors: Ke,
  preview: Ge,
  card: Fe
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Fe,
  common: Ie,
  default: Bt,
  editor: We,
  errors: Ke,
  preview: Ge
}, Symbol.toStringTag, { value: "Module" })), Xe = { version: "Version", invalid_configuration: "Configuration invalide", show_warning: "Afficher l'avertissement", no_entity_set: "Entité non définie", no_entity: "Entité non disponible", on: "Allumé", off: "Éteint" }, Ye = { sections: { display: "Options d'affichage", styling: "Style personnalisé", behavior: "Comportement / Actions" }, attributes: { brightness: "Luminosité", red: "Rouge", green: "Vert", blue: "Bleu", hue: "Teinte", saturation: "Saturation", color_temp_kelvin: "Température de couleur Kelvin", value: "Valeur", percentage: "Pourcentage", position: "Position", tilt_position: "Position d'inclinaison", temperature: "Température", humidity: "Humidité", volume: "Volume" }, labels: { colorize: "Colorer selon l'état", show_percentage: "Afficher le pourcentage", bold_text: "Texte en gras", no_scale: "Désactiver l'échelle à l'appui", no_transition_animation: "Désactiver l'animation de transition", vertical: "Curseur vertical", min_slide_time: "Temps de glissement minimal", hold_time: "Durée d'appui long", settle_time: "Temps de stabilisation", immediate_update: "Mettre à jour pendant le glissement", background_color: "Couleur d'arrière-plan", height: "Hauteur", width: "Largeur", text_color: "Couleur du texte", icon_color: "Couleur de l'icône", icon_off_color: "Couleur de l'icône éteinte", constant_icon_color: "Couleur constante de l'icône", icon_size: "Taille de l'icône", text_size: "Taille du texte", border_color: "Couleur de bordure", border_radius: "Rayon de bordure", border_style: "Style de bordure", border_width: "Largeur de bordure" } }, qe = { light_domain_only: "Spécifiez une entité du domaine light", unsupported_domain: "Spécifiez une entité compatible avec le curseur" }, Ze = { example_light: "Lumière d'exemple" }, Je = { name: "Big Slider Card", description: "Grande carte de curseur pour les entités lumière." }, It = {
  common: Xe,
  editor: Ye,
  errors: qe,
  preview: Ze,
  card: Je
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: Je,
  common: Xe,
  default: It,
  editor: Ye,
  errors: qe,
  preview: Ze
}, Symbol.toStringTag, { value: "Module" })), Qe = { version: "Versione", invalid_configuration: "Configurazione non valida", show_warning: "Mostra avviso", no_entity_set: "Entità non impostata", no_entity: "Entità non disponibile", on: "Acceso", off: "Spento" }, et = { sections: { display: "Opzioni di visualizzazione", styling: "Stile personalizzato", behavior: "Comportamento / Azioni" }, attributes: { brightness: "Luminosità", red: "Rosso", green: "Verde", blue: "Blu", hue: "Tonalità", saturation: "Saturazione", color_temp_kelvin: "Temperatura colore Kelvin", value: "Valore", percentage: "Percentuale", position: "Posizione", tilt_position: "Posizione inclinazione", temperature: "Temperatura", humidity: "Umidità", volume: "Volume" }, labels: { colorize: "Colora in base allo stato", show_percentage: "Mostra testo percentuale", bold_text: "Testo in grassetto", no_scale: "Disattiva scala alla pressione", no_transition_animation: "Disattiva animazione di transizione", vertical: "Cursore verticale", min_slide_time: "Tempo minimo di scorrimento", hold_time: "Tempo di pressione prolungata", settle_time: "Tempo di stabilizzazione", immediate_update: "Aggiorna durante lo scorrimento", background_color: "Colore di sfondo", height: "Altezza", width: "Larghezza", text_color: "Colore testo", icon_color: "Colore icona", icon_off_color: "Colore icona spenta", constant_icon_color: "Colore icona costante", icon_size: "Dimensione icona", text_size: "Dimensione testo", border_color: "Colore bordo", border_radius: "Raggio bordo", border_style: "Stile bordo", border_width: "Spessore bordo" } }, tt = { light_domain_only: "Specifica un'entità del dominio light", unsupported_domain: "Specifica un'entità supportata dal cursore" }, it = { example_light: "Luce di esempio" }, ot = { name: "Big Slider Card", description: "Scheda con cursore grande per entità luce." }, Kt = {
  common: Qe,
  editor: et,
  errors: tt,
  preview: it,
  card: ot
}, Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: ot,
  common: Qe,
  default: Kt,
  editor: et,
  errors: tt,
  preview: it
}, Symbol.toStringTag, { value: "Module" })), rt = { version: "Versie", invalid_configuration: "Ongeldige configuratie", show_warning: "Waarschuwing tonen", no_entity_set: "Entiteit niet ingesteld", no_entity: "Entiteit niet beschikbaar", on: "Aan", off: "Uit" }, st = { sections: { display: "Weergaveopties", styling: "Aangepaste stijl", behavior: "Gedrag / Acties" }, attributes: { brightness: "Helderheid", red: "Rood", green: "Groen", blue: "Blauw", hue: "Tint", saturation: "Verzadiging", color_temp_kelvin: "Kleurtemperatuur Kelvin", value: "Waarde", percentage: "Percentage", position: "Positie", tilt_position: "Kantelpositie", temperature: "Temperatuur", humidity: "Luchtvochtigheid", volume: "Volume" }, labels: { colorize: "Kleuren op basis van status", show_percentage: "Percentagetekst tonen", bold_text: "Vetgedrukte tekst", no_scale: "Schalen bij indrukken uitschakelen", no_transition_animation: "Overgangsanimatie uitschakelen", vertical: "Verticale schuifregelaar", min_slide_time: "Minimale schuiftijd", hold_time: "Tijd voor ingedrukt houden", settle_time: "Stabilisatietijd", immediate_update: "Bijwerken tijdens schuiven", background_color: "Achtergrondkleur", height: "Hoogte", width: "Breedte", text_color: "Tekstkleur", icon_color: "Pictogramkleur", icon_off_color: "Pictogramkleur uit", constant_icon_color: "Constante pictogramkleur", icon_size: "Pictogramgrootte", text_size: "Tekstgrootte", border_color: "Randkleur", border_radius: "Randradius", border_style: "Randstijl", border_width: "Randbreedte" } }, nt = { light_domain_only: "Geef een entiteit uit het light-domein op", unsupported_domain: "Geef een ondersteunde schuifregelaar-entiteit op" }, at = { example_light: "Voorbeeldlamp" }, lt = { name: "Big Slider Card", description: "Grote schuifregelaar-kaart voor lichtentiteiten." }, Ft = {
  common: rt,
  editor: st,
  errors: nt,
  preview: at,
  card: lt
}, Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: lt,
  common: rt,
  default: Ft,
  editor: st,
  errors: nt,
  preview: at
}, Symbol.toStringTag, { value: "Module" })), ct = { version: "Wersja", invalid_configuration: "Nieprawidłowa konfiguracja", show_warning: "Pokaż ostrzeżenie", no_entity_set: "Encja nie ustawiona", no_entity: "Encja niedostępna", on: "Włączone", off: "Wyłączone" }, dt = { sections: { display: "Opcje wyświetlania", styling: "Niestandardowy styl", behavior: "Zachowanie / Akcje" }, attributes: { brightness: "Jasność", red: "Czerwony", green: "Zielony", blue: "Niebieski", hue: "Odcień", saturation: "Nasycenie", color_temp_kelvin: "Temperatura barwowa Kelvin", value: "Wartość", percentage: "Procent", position: "Pozycja", tilt_position: "Pozycja nachylenia", temperature: "Temperatura", humidity: "Wilgotność", volume: "Głośność" }, labels: { colorize: "Koloruj na podstawie stanu", show_percentage: "Pokaż tekst procentowy", bold_text: "Pogrubiony tekst", no_scale: "Wyłącz skalowanie po naciśnięciu", no_transition_animation: "Wyłącz animację przejścia", vertical: "Suwak pionowy", min_slide_time: "Minimalny czas przesuwania", hold_time: "Czas przytrzymania", settle_time: "Czas stabilizacji", immediate_update: "Aktualizuj podczas przesuwania", background_color: "Kolor tła", height: "Wysokość", width: "Szerokość", text_color: "Kolor tekstu", icon_color: "Kolor ikony", icon_off_color: "Kolor ikony wyłączonej", constant_icon_color: "Stały kolor ikony", icon_size: "Rozmiar ikony", text_size: "Rozmiar tekstu", border_color: "Kolor obramowania", border_radius: "Promień obramowania", border_style: "Styl obramowania", border_width: "Szerokość obramowania" } }, ht = { light_domain_only: "Podaj encję z domeny light", unsupported_domain: "Podaj obsługiwaną encję suwaka" }, ut = { example_light: "Przykładowe światło" }, _t = { name: "Big Slider Card", description: "Duża karta suwaka dla encji światła." }, Yt = {
  common: ct,
  editor: dt,
  errors: ht,
  preview: ut,
  card: _t
}, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: _t,
  common: ct,
  default: Yt,
  editor: dt,
  errors: ht,
  preview: ut
}, Symbol.toStringTag, { value: "Module" })), mt = { version: "Versão", invalid_configuration: "Configuração inválida", show_warning: "Mostrar aviso", no_entity_set: "Entidade não definida", no_entity: "Entidade não disponível", on: "Ligado", off: "Desligado" }, pt = { sections: { display: "Opções de exibição", styling: "Estilo personalizado", behavior: "Comportamento / Ações" }, attributes: { brightness: "Brilho", red: "Vermelho", green: "Verde", blue: "Azul", hue: "Matiz", saturation: "Saturação", color_temp_kelvin: "Temperatura de cor Kelvin", value: "Valor", percentage: "Porcentagem", position: "Posição", tilt_position: "Posição de inclinação", temperature: "Temperatura", humidity: "Umidade", volume: "Volume" }, labels: { colorize: "Colorir com base no estado", show_percentage: "Mostrar texto de porcentagem", bold_text: "Texto em negrito", no_scale: "Desativar escala ao pressionar", no_transition_animation: "Desativar animação de transição", vertical: "Controle deslizante vertical", min_slide_time: "Tempo mínimo de deslizamento", hold_time: "Tempo de pressionar e segurar", settle_time: "Tempo de estabilização", immediate_update: "Atualizar durante o deslizamento", background_color: "Cor de fundo", height: "Altura", width: "Largura", text_color: "Cor do texto", icon_color: "Cor do ícone", icon_off_color: "Cor do ícone desligado", constant_icon_color: "Cor constante do ícone", icon_size: "Tamanho do ícone", text_size: "Tamanho do texto", border_color: "Cor da borda", border_radius: "Raio da borda", border_style: "Estilo da borda", border_width: "Largura da borda" } }, gt = { light_domain_only: "Especifique uma entidade do domínio light", unsupported_domain: "Especifique uma entidade compatível com o controle deslizante" }, bt = { example_light: "Luz de exemplo" }, ft = { name: "Big Slider Card", description: "Cartão deslizante grande para entidades de luz." }, Zt = {
  common: mt,
  editor: pt,
  errors: gt,
  preview: bt,
  card: ft
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: ft,
  common: mt,
  default: Zt,
  editor: pt,
  errors: gt,
  preview: bt
}, Symbol.toStringTag, { value: "Module" })), vt = { version: "Versiunea", invalid_configuration: "Configurație invalidă", show_warning: "Show Warning", no_entity_set: "Entitatea nu e setată", no_entity: "Entitatea nu e disponibilă", on: "Pornit", off: "Oprit" }, yt = { sections: { display: "Opțiuni de afișare", styling: "Stilizare personalizată", behavior: "Comportament / Acțiuni" }, attributes: { brightness: "Luminozitate", red: "Roșu", green: "Verde", blue: "Albastru", hue: "Nuanță", saturation: "Saturație", color_temp_kelvin: "Temperatură culoare Kelvin", value: "Valoare", percentage: "Procent", position: "Poziție", tilt_position: "Poziție înclinare", temperature: "Temperatură", humidity: "Umiditate", volume: "Volum" }, labels: { colorize: "Colorează în funcție de stare", show_percentage: "Afișează text procentual", bold_text: "Text îngroșat", no_scale: "Dezactivează scalarea la apăsare", no_transition_animation: "Dezactivează animația de tranziție", vertical: "Glisor vertical", min_slide_time: "Timp minim de glisare", hold_time: "Timp de apăsare lungă", settle_time: "Timp de stabilizare", immediate_update: "Actualizează în timpul glisării", background_color: "Culoare fundal", height: "Înălțime", width: "Lățime", text_color: "Culoare text", icon_color: "Culoare pictogramă", icon_off_color: "Culoare pictogramă oprită", constant_icon_color: "Culoare constantă pictogramă", icon_size: "Dimensiune pictogramă", text_size: "Dimensiune text", border_color: "Culoare chenar", border_radius: "Rază chenar", border_style: "Stil chenar", border_width: "Lățime chenar" } }, $t = { light_domain_only: "Specifică o entitate din domeniul light", unsupported_domain: "Specifică o entitate suportată de glisor" }, wt = { example_light: "Lumină exemplu" }, xt = { name: "Big Slider Card", description: "Card cu glisor mare pentru entități de lumină." }, Qt = {
  common: vt,
  editor: yt,
  errors: $t,
  preview: wt,
  card: xt
}, ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  card: xt,
  common: vt,
  default: Qt,
  editor: yt,
  errors: $t,
  preview: wt
}, Symbol.toStringTag, { value: "Module" })), ne = {
  en: Dt,
  de: Ot,
  es: jt,
  fr: Wt,
  it: Gt,
  nl: Xt,
  pl: qt,
  pt: Jt,
  ro: ei
};
function c(s, e = "", t = "") {
  const i = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_");
  let o;
  try {
    o = s.split(".").reduce((r, n) => r[n], ne[i]);
  } catch {
    o = s.split(".").reduce((n, d) => n[d], ne.en);
  }
  return o === void 0 && (o = s.split(".").reduce((r, n) => r[n], ne.en)), e !== "" && t !== "" && (o = o.replace(e, t)), o;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = globalThis, ue = Q.ShadowRoot && (Q.ShadyCSS === void 0 || Q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _e = Symbol(), fe = /* @__PURE__ */ new WeakMap();
let St = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== _e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ue && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ti = (s) => new St(typeof s == "string" ? s : s + "", void 0, _e), ii = (s, ...e) => {
  const t = s.length === 1 ? s[0] : e.reduce((i, o, r) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + s[r + 1], s[0]);
  return new St(t, s, _e);
}, oi = (s, e) => {
  if (ue) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = Q.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, s.appendChild(i);
  }
}, ve = ue ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return ti(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ri, defineProperty: si, getOwnPropertyDescriptor: ni, getOwnPropertyNames: ai, getOwnPropertySymbols: li, getPrototypeOf: ci } = Object, T = globalThis, ye = T.trustedTypes, di = ye ? ye.emptyScript : "", ae = T.reactiveElementPolyfillSupport, I = (s, e) => s, ee = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? di : null;
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
} }, me = (s, e) => !ri(s, e), $e = { attribute: !0, type: String, converter: ee, reflect: !1, hasChanged: me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), T.litPropertyMetadata ?? (T.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class N extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = $e) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && si(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: r } = ni(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? $e;
  }
  static _$Ei() {
    if (this.hasOwnProperty(I("elementProperties"))) return;
    const e = ci(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(I("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(I("properties"))) {
      const t = this.properties, i = [...ai(t), ...li(t)];
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
      for (const o of i) t.unshift(ve(o));
    } else e !== void 0 && t.push(ve(e));
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
    return oi(e, this.constructor.elementStyles), e;
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
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : ee).toAttribute(t, i.type);
      this._$Em = e, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var r;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const n = i.getPropertyOptions(o), d = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((r = n.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? n.converter : ee;
      this._$Em = o, this[o] = d.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? me)(this[e], t)) return;
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
N.elementStyles = [], N.shadowRootOptions = { mode: "open" }, N[I("elementProperties")] = /* @__PURE__ */ new Map(), N[I("finalized")] = /* @__PURE__ */ new Map(), ae == null || ae({ ReactiveElement: N }), (T.reactiveElementVersions ?? (T.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hi = { attribute: !0, type: String, converter: ee, reflect: !1, hasChanged: me }, ui = (s = hi, e, t) => {
  const { kind: i, metadata: o } = t;
  let r = globalThis.litPropertyMetadata.get(o);
  if (r === void 0 && globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()), r.set(t.name, s), i === "accessor") {
    const { name: n } = t;
    return { set(d) {
      const a = e.get.call(this);
      e.set.call(this, d), this.requestUpdate(n, a, s);
    }, init(d) {
      return d !== void 0 && this.P(n, void 0, s), d;
    } };
  }
  if (i === "setter") {
    const { name: n } = t;
    return function(d) {
      const a = this[n];
      e.call(this, d), this.requestUpdate(n, a, s);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function _i(s) {
  return (e, t) => typeof t == "object" ? ui(s, e, t) : ((i, o, r) => {
    const n = o.hasOwnProperty(r);
    return o.constructor.createProperty(r, n ? { ...i, wrapped: !0 } : i), n ? Object.getOwnPropertyDescriptor(o, r) : void 0;
  })(s, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ie(s) {
  return _i({ ...s, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis, te = W.trustedTypes, we = te ? te.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, zt = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, At = "?" + S, mi = `<${At}>`, R = document, G = () => R.createComment(""), F = (s) => s === null || typeof s != "object" && typeof s != "function", pe = Array.isArray, pi = (s) => pe(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", le = `[ 	
\f\r]`, j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, xe = /-->/g, Se = />/g, E = RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ze = /'/g, Ae = /"/g, Tt = /^(?:script|style|textarea|title)$/i, gi = (s) => (e, ...t) => ({ _$litType$: s, strings: e, values: t }), Te = gi(1), O = Symbol.for("lit-noChange"), m = Symbol.for("lit-nothing"), Ce = /* @__PURE__ */ new WeakMap(), P = R.createTreeWalker(R, 129);
function Ct(s, e) {
  if (!pe(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return we !== void 0 ? we.createHTML(e) : e;
}
const bi = (s, e) => {
  const t = s.length - 1, i = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = j;
  for (let d = 0; d < t; d++) {
    const a = s[d];
    let u, _, h = -1, g = 0;
    for (; g < a.length && (n.lastIndex = g, _ = n.exec(a), _ !== null); ) g = n.lastIndex, n === j ? _[1] === "!--" ? n = xe : _[1] !== void 0 ? n = Se : _[2] !== void 0 ? (Tt.test(_[2]) && (o = RegExp("</" + _[2], "g")), n = E) : _[3] !== void 0 && (n = E) : n === E ? _[0] === ">" ? (n = o ?? j, h = -1) : _[1] === void 0 ? h = -2 : (h = n.lastIndex - _[2].length, u = _[1], n = _[3] === void 0 ? E : _[3] === '"' ? Ae : ze) : n === Ae || n === ze ? n = E : n === xe || n === Se ? n = j : (n = E, o = void 0);
    const b = n === E && s[d + 1].startsWith("/>") ? " " : "";
    r += n === j ? a + mi : h >= 0 ? (i.push(u), a.slice(0, h) + zt + a.slice(h) + S + b) : a + S + (h === -2 ? d : b);
  }
  return [Ct(s, r + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class X {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const d = e.length - 1, a = this.parts, [u, _] = bi(e, t);
    if (this.el = X.createElement(u, i), P.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = P.nextNode()) !== null && a.length < d; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(zt)) {
          const g = _[n++], b = o.getAttribute(h).split(S), C = /([.?@])?(.*)/.exec(g);
          a.push({ type: 1, index: r, name: C[2], strings: b, ctor: C[1] === "." ? vi : C[1] === "?" ? yi : C[1] === "@" ? $i : oe }), o.removeAttribute(h);
        } else h.startsWith(S) && (a.push({ type: 6, index: r }), o.removeAttribute(h));
        if (Tt.test(o.tagName)) {
          const h = o.textContent.split(S), g = h.length - 1;
          if (g > 0) {
            o.textContent = te ? te.emptyScript : "";
            for (let b = 0; b < g; b++) o.append(h[b], G()), P.nextNode(), a.push({ type: 2, index: ++r });
            o.append(h[g], G());
          }
        }
      } else if (o.nodeType === 8) if (o.data === At) a.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(S, h + 1)) !== -1; ) a.push({ type: 7, index: r }), h += S.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const i = R.createElement("template");
    return i.innerHTML = e, i;
  }
}
function B(s, e, t = s, i) {
  var n, d;
  if (e === O) return e;
  let o = i !== void 0 ? (n = t._$Co) == null ? void 0 : n[i] : t._$Cl;
  const r = F(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((d = o == null ? void 0 : o._$AO) == null || d.call(o, !1), r === void 0 ? o = void 0 : (o = new r(s), o._$AT(s, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = B(s, o._$AS(s, e.values), o, i)), e;
}
class fi {
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
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? R).importNode(t, !0);
    P.currentNode = o;
    let r = P.nextNode(), n = 0, d = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let u;
        a.type === 2 ? u = new Y(r, r.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(r, a.name, a.strings, this, e) : a.type === 6 && (u = new wi(r, this, e)), this._$AV.push(u), a = i[++d];
      }
      n !== (a == null ? void 0 : a.index) && (r = P.nextNode(), n++);
    }
    return P.currentNode = R, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class Y {
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
    e = B(this, e, t), F(e) ? e === m || e == null || e === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : e !== this._$AH && e !== O && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : pi(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== m && F(this._$AH) ? this._$AA.nextSibling.data = e : this.T(R.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = X.createElement(Ct(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(t);
    else {
      const n = new fi(o, this), d = n.u(this.options);
      n.p(t), this.T(d), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = Ce.get(e.strings);
    return t === void 0 && Ce.set(e.strings, t = new X(e)), t;
  }
  k(e) {
    pe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const r of e) o === t.length ? t.push(i = new Y(this.O(G()), this.O(G()), this, this.options)) : i = t[o], i._$AI(r), o++;
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
class oe {
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
    if (r === void 0) e = B(this, e, t, 0), n = !F(e) || e !== this._$AH && e !== O, n && (this._$AH = e);
    else {
      const d = e;
      let a, u;
      for (e = r[0], a = 0; a < r.length - 1; a++) u = B(this, d[i + a], t, a), u === O && (u = this._$AH[a]), n || (n = !F(u) || u !== this._$AH[a]), u === m ? e = m : e !== m && (e += (u ?? "") + r[a + 1]), this._$AH[a] = u;
    }
    n && !o && this.j(e);
  }
  j(e) {
    e === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class vi extends oe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === m ? void 0 : e;
  }
}
class yi extends oe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== m);
  }
}
class $i extends oe {
  constructor(e, t, i, o, r) {
    super(e, t, i, o, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = B(this, e, t, 0) ?? m) === O) return;
    const i = this._$AH, o = e === m && i !== m || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== m && (i === m || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class wi {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    B(this, e);
  }
}
const ce = W.litHtmlPolyfillSupport;
ce == null || ce(X, Y), (W.litHtmlVersions ?? (W.litHtmlVersions = [])).push("3.2.1");
const xi = (s, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new Y(e.insertBefore(G(), r), r, void 0, t ?? {});
  }
  return o._$AI(s), o;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Si = (s) => s ?? m;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class K extends N {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = xi(t, this.renderRoot, this.renderOptions);
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
    return O;
  }
}
var Pe;
K._$litElement$ = !0, K.finalized = !0, (Pe = globalThis.litElementHydrateSupport) == null || Pe.call(globalThis, { LitElement: K });
const de = globalThis.litElementPolyfillSupport;
de == null || de({ LitElement: K });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
var zi = Object.defineProperty, re = (s, e, t, i) => {
  for (var o = void 0, r = s.length - 1, n; r >= 0; r--)
    (n = s[r]) && (o = n(e, t, o) || o);
  return o && zi(e, t, o), o;
};
class q extends K {
  constructor() {
    super(...arguments), this._config = w, this._name = "", this.mouseStartPos = { x: 0, y: 0 }, this.mousePos = { x: 0, y: 0 }, this.containerWidth = 0, this.containerHeight = 0, this.oldValue = 0, this.currentValue = 0, this.holdTimer = 0, this.isHold = !1, this._shouldUpdate = !0, this.updateTimeout = 0, this.pressTimeout = 0, this.immediateUpdateTimeout = 0, this.trackingStartTime = 0, this.isTap = !1, this.hasValidSlide = !1, this.hasCustomMin = !1, this.hasCustomMax = !1, this._handleContextMenu = (e) => (e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1), this._handlePointer = (e, t) => {
      this.mousePos = { x: e.pageX, y: e.pageY };
      const i = this._config.min_slide_time;
      if (e.type === "pointerdown" && (this._press(), this.isTap = !0, this.isHold = !1, this.hasValidSlide = !1, this._clearImmediateUpdate(), this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time), this.trackingStartTime = Date.now(), this._updateContainerSize(), this._resetTrack()), !this.isHold && ["pointerdown", "pointermove", "pointerup"].includes(e.type) && this._updateValue(), e.type === "pointermove") {
        if (this.isHold || this.isTap && Math.abs(t.relativeX) < be && Math.abs(t.relativeY) < be)
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
    const i = t.filter((r) => J.includes(r.split(".")[0])).sort();
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
          selector: { entity: { domain: J } }
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
                    { value: "color_temp_kelvin", label: c("editor.attributes.color_temp_kelvin") },
                    { value: "value", label: c("editor.attributes.value") },
                    { value: "percentage", label: c("editor.attributes.percentage") },
                    { value: "position", label: c("editor.attributes.position") },
                    { value: "tilt_position", label: c("editor.attributes.tilt_position") },
                    { value: "temperature", label: c("editor.attributes.temperature") },
                    { value: "humidity", label: c("editor.attributes.humidity") },
                    { value: "volume", label: c("editor.attributes.volume") }
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
    const t = this._getDomain(e.entity);
    if (t && !J.includes(t))
      throw new Error(c("errors.unsupported_domain"));
    const i = e.attribute ?? this._getDefaultAttribute(t), o = this._getAttributeDefaults(i, t);
    this.hasCustomMin = e.min !== void 0, this.hasCustomMax = e.max !== void 0, this._config = { ...w, attribute: i, ...o, ...e }, this._entity = this._config.entity, this._config.original_min = this._config.min, this._config.original_max = this._config.max;
  }
  _getAttributeDefaults(e, t) {
    switch (e) {
      case "color_temp_kelvin":
        return { min: 2200, max: 6500 };
      default:
        return {};
    }
  }
  _getDomain(e) {
    return (e == null ? void 0 : e.split(".")[0]) ?? "light";
  }
  _getDefaultAttribute(e) {
    switch (e) {
      case "number":
      case "input_number":
        return "value";
      case "fan":
        return "percentage";
      case "cover":
      case "valve":
        return "position";
      case "media_player":
        return "volume";
      case "climate":
      case "water_heater":
        return "temperature";
      case "humidifier":
        return "humidity";
      default:
        return w.attribute;
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
    super.connectedCallback(), this.addEventListener("contextmenu", this._handleContextMenu), this.slideGesture = new Et(this, this._handlePointer.bind(this), {
      touchActions: this._config.vertical ? "pan-x" : "pan-y",
      stopScrollDirection: this._config.vertical ? "vertical" : "horizontal"
    });
  }
  disconnectedCallback() {
    this.removeEventListener("contextmenu", this._handleContextMenu), this._clearImmediateUpdate(), this.slideGesture.removeListeners(), super.disconnectedCallback();
  }
  _updateValue() {
    if (!this._updateContainerSize()) return;
    const e = this._config.vertical ? this.containerHeight : this.containerWidth, t = this._config.vertical ? this.mouseStartPos.y - this.mousePos.y : this.mousePos.x - this.mouseStartPos.x, i = this._getRange(), o = this._usesRangeSlider() ? this._roundValue((i.max - i.min) * t / e) : Math.round(100 * t / e);
    Number.isFinite(o) && (this.currentValue = this.oldValue + o, this._checklimits(), this._updateSlider(), this.hasValidSlide = !0);
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
    const { min: e, max: t } = this._getRange();
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
    const t = this._getValueUnit();
    return this._usesRangeSlider() ? `${this._formatValue(this.currentValue)}${t}` : `${Math.round(e)}%`;
  }
  _getSliderPercentage() {
    if (!this._usesRangeSlider())
      return Math.max(0, Math.min(100, this.currentValue));
    const { min: e, max: t } = this._getRange(), i = t - e;
    if (i <= 0) return 0;
    const o = 100 * (this.currentValue - e) / i;
    return Number.isFinite(o) ? Math.max(0, Math.min(100, o)) : 0;
  }
  _usesRangeSlider() {
    const { min: e, max: t } = this._getRange();
    return this._config.attribute === "color_temp_kelvin" || e !== 0 || t !== 100;
  }
  _getRange() {
    const e = this._config.min ?? 0, t = this._config.max ?? 100;
    return { min: e, max: t };
  }
  _getValueUnit() {
    var i;
    const e = this._config.attribute, t = this._effectiveState;
    return e === "color_temp_kelvin" ? "K" : e === "percentage" || e === "position" || e === "tilt_position" || e === "humidity" || e === "volume" ? "%" : ((i = t.attributes) == null ? void 0 : i.unit_of_measurement) ?? "";
  }
  _formatValue(e) {
    return Number.isFinite(e) ? Number.isInteger(e) ? String(e) : String(Number(e.toFixed(1))) : "0";
  }
  _roundValue(e) {
    var o, r;
    const t = Number(((o = this._effectiveState.attributes) == null ? void 0 : o.step) ?? ((r = this._effectiveState.attributes) == null ? void 0 : r.target_temp_step));
    if (!Number.isFinite(t) || t <= 0)
      return Math.round(e);
    const i = this._getDecimalPlaces(t);
    return Number((Math.round(e / t) * t).toFixed(i));
  }
  _getDecimalPlaces(e) {
    const t = String(e);
    return t.includes(".") ? t.split(".")[1].length : 0;
  }
  _updateColors() {
    var u, _, h;
    let e = "var(--bsc-color)", t = "0%", i = "50%", o = !1;
    const r = this._effectiveState, n = this._effectiveStatus, d = this._getDomain(r.entity_id);
    if (d === "light" && n == "on") {
      const g = ((u = r.attributes) == null ? void 0 : u.rgb_color) ?? [255, 255, 255], b = ((_ = r.attributes) == null ? void 0 : _.brightness) ?? 255;
      o = !0, g && (e = `rgb(${g.join(",")})`), b && (t = `${Math.ceil(100 * b / 255)}%`, i = `${Math.ceil(100 * b / 510 + 50)}%`);
    } else
      e = "var(--bsc-off-color)";
    const a = (h = this == null ? void 0 : this.shadowRoot) == null ? void 0 : h.getElementById("percentage");
    if (d === "light" && !o) {
      const g = r ? this._hass && typeof this._hass.formatEntityState == "function" ? this._hass.formatEntityState(r) : r.state : c("common.off");
      a && (a.innerText = g);
    }
    this.style.setProperty("--bsc-entity-color", e), this.style.setProperty("--bsc-brightness", t), this.style.setProperty("--bsc-brightness-ui", i), this.style.setProperty("--bsc-icon-brightness", this._config.constant_icon_color === !0 ? "100%" : i), o && this._config.icon_color ? this.style.setProperty("--bsc-icon-color", this._config.icon_color) : !o && this._config.icon_off_color ? this.style.setProperty("--bsc-icon-color", this._config.icon_off_color) : this.style.removeProperty("--bsc-icon-color");
  }
  _getValue() {
    var o;
    if (!this._shouldUpdate) return;
    const e = this._effectiveState, t = this._effectiveStatus, i = (o = this._config) == null ? void 0 : o.attribute;
    if (this._isUnavailable(t))
      this._config.min = 0, this._config.max = 0, this.style.setProperty("--bsc-opacity", "0.5");
    else {
      const r = this._getEntityRange(e);
      this._config.min = this.hasCustomMin ? this._config.original_min ?? w.min : r.min, this._config.max = this.hasCustomMax ? this._config.original_max ?? w.max : r.max, this.style.removeProperty("--bsc-opacity");
    }
    this.currentValue = this._getEntityValue(e, i), this._checklimits(), this._updateSlider();
  }
  _setValue() {
    if (!this._state) return;
    let e = this._roundValue(this.currentValue), t = this._config.attribute;
    const i = this._getDomain(this._state.entity_id);
    if (i !== "light") {
      this._setDomainValue(i, t, e);
      return;
    }
    let o = !0, r;
    switch (t) {
      case "brightness":
        e = Math.ceil(e / 100 * 255), e || (o = !1);
        break;
      case "red":
      case "green":
      case "blue":
        r = this._state.attributes.rgb_color ?? [255, 255, 255], t === "red" && (r[0] = e), t === "green" && (r[1] = e), t === "blue" && (r[2] = e), e = r, t = "rgb_color";
        break;
      case "hue":
      case "saturation":
        r = this._state.attributes.hs_color ?? [100, 100], t === "hue" && (r[0] = e), t === "saturation" && (r[1] = e), e = r, t = "hs_color";
        break;
      case "color_temp_kelvin":
        e = Math.round(e);
        break;
    }
    const n = {
      entity_id: this._state.entity_id
    };
    o ? (n[t] = e, this._config.transition && (n.transition = this._config.transition), this._hass.callService("light", "turn_on", n)) : this._hass.callService("light", "turn_off", n);
  }
  _getEntityValue(e, t) {
    var r, n, d, a, u, _, h, g, b, C;
    const i = this._getDomain(e.entity_id), o = e.state;
    if (this._isUnavailable(o)) return this._config.min ?? 0;
    if (i === "light" && o !== "on") return 0;
    switch (i) {
      case "light":
        return this._getLightValue(e, t);
      case "number":
      case "input_number":
        return this._toNumber(e.state, this._config.min ?? 0);
      case "fan":
        return this._toNumber((r = e.attributes) == null ? void 0 : r.percentage, 0);
      case "cover":
        return t === "tilt_position" ? this._toNumber((n = e.attributes) == null ? void 0 : n.current_tilt_position, 0) : this._toNumber((d = e.attributes) == null ? void 0 : d.current_position, 0);
      case "valve":
        return this._toNumber(((a = e.attributes) == null ? void 0 : a.current_position) ?? ((u = e.attributes) == null ? void 0 : u.position), 0);
      case "media_player":
        return Math.round(100 * this._toNumber((_ = e.attributes) == null ? void 0 : _.volume_level, 0));
      case "climate":
        return t === "humidity" ? this._toNumber((h = e.attributes) == null ? void 0 : h.humidity, this._config.min ?? 0) : this._toNumber((g = e.attributes) == null ? void 0 : g.temperature, this._config.min ?? 0);
      case "humidifier":
        return this._toNumber((b = e.attributes) == null ? void 0 : b.humidity, this._config.min ?? 0);
      case "water_heater":
        return this._toNumber((C = e.attributes) == null ? void 0 : C.temperature, this._config.min ?? 0);
      default:
        return this._toNumber(e.state, this._config.min ?? 0);
    }
  }
  _getLightValue(e, t) {
    switch (t) {
      case "brightness":
        return Math.round(100 * (e.attributes.brightness ?? 255) / 255);
      case "red":
      case "green":
      case "blue":
        const i = e.attributes.rgb_color ?? [255, 255, 255];
        return Math.ceil(t === "red" ? 100 * i[0] / 255 : t === "green" ? 100 * i[1] / 255 : 100 * i[2] / 255);
      case "hue":
      case "saturation":
        const o = e.attributes.hs_color ?? [100, 100];
        return t === "hue" ? o[0] : o[1];
      case "color_temp_kelvin":
        return this._toNumber(e.attributes[t], this._config.min ?? 0);
      default:
        return 0;
    }
  }
  _setDomainValue(e, t, i) {
    const o = this._state.entity_id, r = this._roundValue(i);
    switch (e) {
      case "number":
      case "input_number":
        this._hass.callService(e, "set_value", {
          entity_id: o,
          value: r
        });
        return;
      case "fan":
        this._hass.callService("fan", r <= 0 ? "turn_off" : "set_percentage", {
          entity_id: o,
          ...r > 0 ? { percentage: Math.round(r) } : {}
        });
        return;
      case "cover":
        this._hass.callService("cover", t === "tilt_position" ? "set_cover_tilt_position" : "set_cover_position", {
          entity_id: o,
          [t === "tilt_position" ? "tilt_position" : "position"]: Math.round(r)
        });
        return;
      case "valve":
        this._hass.callService("valve", "set_valve_position", {
          entity_id: o,
          position: Math.round(r)
        });
        return;
      case "media_player":
        this._hass.callService("media_player", "volume_set", {
          entity_id: o,
          volume_level: Math.max(0, Math.min(1, r / 100))
        });
        return;
      case "climate":
        this._hass.callService("climate", t === "humidity" ? "set_humidity" : "set_temperature", {
          entity_id: o,
          [t === "humidity" ? "humidity" : "temperature"]: r
        });
        return;
      case "humidifier":
        this._hass.callService("humidifier", "set_humidity", {
          entity_id: o,
          humidity: Math.round(r)
        });
        return;
      case "water_heater":
        this._hass.callService("water_heater", "set_temperature", {
          entity_id: o,
          temperature: r
        });
        return;
    }
  }
  _getEntityRange(e) {
    var o, r, n, d;
    const t = this._getDomain(e.entity_id), i = this._config.attribute;
    if (i === "color_temp_kelvin")
      return { min: 2200, max: 6500 };
    switch (t) {
      case "number":
      case "input_number":
        return {
          min: this._toNumber((o = e.attributes) == null ? void 0 : o.min, w.min),
          max: this._toNumber((r = e.attributes) == null ? void 0 : r.max, w.max)
        };
      case "climate":
      case "water_heater":
        return i === "humidity" ? { min: 0, max: 100 } : {
          min: this._toNumber((n = e.attributes) == null ? void 0 : n.min_temp, w.min),
          max: this._toNumber((d = e.attributes) == null ? void 0 : d.max_temp, w.max)
        };
      default:
        return { min: w.min, max: w.max };
    }
  }
  _toNumber(e, t) {
    const i = Number(e);
    return Number.isFinite(i) ? i : t;
  }
  _isUnavailable(e) {
    return e === "unavailable" || e === "unknown";
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
    const e = this._effectiveState, t = this._effectiveStatus, i = this._effectiveName, o = this._entity || "light.example_light", r = (this._config.colorize && !0) ?? !1, n = (this._config.show_percentage && !0) ?? !1, d = (this._config.bold_text && !0) ?? !1, a = this._config.no_scale !== !0, u = this._config.no_transition_animation !== !0, _ = this._config.vertical === !0;
    return this._setStyleProperty("--bsc-background", this._config.background_color), this._setStyleProperty("--bsc-primary-text-color", this._config.text_color), this._setStyleProperty("--bsc-slider-color", this._config.color), this._setStyleProperty("--bsc-border-color", this._config.border_color), this._setStyleProperty("--bsc-border-radius", this._config.border_radius, this._normalizeCssLength), this._setStyleProperty("--bsc-border-style", this._config.border_style), this._setStyleProperty("--bsc-border-width", this._config.border_width, this._normalizeCssLength), this._setStyleProperty("--bsc-height", this._config.height, this._normalizeCssLength), this._setStyleProperty("--bsc-width", this._config.width, this._normalizeCssLength), this._setStyleProperty("--bsc-icon-size", this._config.icon_size, this._normalizeCssLength), this._setStyleProperty("--bsc-text-size", this._config.text_size, this._normalizeCssLength), this.style.setProperty("--bsc-press-transition", a ? "transform 0.1s ease-out" : "none"), this.style.setProperty("--bsc-half-pressed-transform", a ? "scale(0.99)" : "none"), this.style.setProperty("--bsc-pressed-transform", a ? "scale(0.98)" : "none"), this.style.setProperty("--bsc-color-transition", u ? "background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-slider-transition", u ? "right 1s ease, background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-vertical-slider-transition", u ? "top 1s ease, background-color 1s ease, filter 1s ease" : "none"), this.style.setProperty("--bsc-icon-transition", u ? "color 0.3s ease-out" : "none"), Te`
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
          data-state=${Si(t)}
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
    }), Te`
      ${t}
    `;
  }
  // https://lit-element.polymer-project.org/guide/styles
  static get styles() {
    return ii`
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
re([
  ie()
], q.prototype, "_config");
re([
  ie()
], q.prototype, "_entity");
re([
  ie()
], q.prototype, "_state");
re([
  ie()
], q.prototype, "_name");
console.info(
  `%c  BIG-SLIDER-CARD 
%c  ${c("common.version")} ${Pt}    `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
customElements.define("big-slider-card", q);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "big-slider-card",
  name: c("card.name"),
  description: c("card.description"),
  preview: !0,
  getEntitySuggestion: (s, e) => J.includes(e.split(".")[0]) ? {
    type: "custom:big-slider-card",
    config: {
      type: "custom:big-slider-card",
      entity: e
    }
  } : null
});
