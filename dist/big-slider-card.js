//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = class {
	#e;
	#t;
	#n = 0;
	#r = 0;
	#i = 0;
	#a = 0;
	#o;
	#s = !1;
	#c;
	#l;
	#u;
	constructor(e, t, { touchActions: n, stopScrollDirection: r = "both" } = {}) {
		this.#e = e, this.#t = n, this.#o = t, this.#c = r, this.#l = this.#p.bind(this), this.#u = this.#m.bind(this), this.addListeners();
	}
	addListeners() {
		this.#e.addEventListener("pointerdown", this.#u), this.#e.addEventListener("pointermove", this.#u), this.#e.addEventListener("pointerup", this.#u), this.#e.addEventListener("pointercancel", this.#u), window.addEventListener("touchmove", this.#l, { passive: !1 }), this.#t && (this.#e.style.touchAction = this.#t);
	}
	removeListeners() {
		this.#e.removeEventListener("pointerdown", this.#u), this.#e.removeEventListener("pointermove", this.#u), this.#e.removeEventListener("pointerup", this.#u), this.#e.removeEventListener("pointercancel", this.#u), window.removeEventListener("touchmove", this.#l), this.#t && this.#e.style.removeProperty("touch-action");
	}
	#d() {
		this.#s = !0;
	}
	#f() {
		this.#s = !1;
	}
	#p(e) {
		this.#s && e.preventDefault();
	}
	#m(e) {
		if (e.type === "pointerdown" && (this.#e.setPointerCapture(e.pointerId), this.#n = e.pageX, this.#r = e.pageY), this.#e.hasPointerCapture(e.pointerId) && e.type !== "pointercancel" && typeof this.#o == "function") {
			let t = e.pageX - this.#n, n = e.pageY - this.#r, r = Math.abs(t / n) > 1, i = Math.abs(t / n) < 1;
			this.#c === "horizontal" && r && this.#d(), this.#c === "vertical" && i && this.#d(), this.#c === "both" && this.#d(), this.#o(e, {
				startX: this.#n,
				startY: this.#r,
				relativeX: t,
				relativeY: n,
				totalX: t + this.#i,
				totalY: n + this.#a
			});
		}
		e.type === "pointerup" && (this.#i = +this.#i + e.pageX - this.#n, this.#a = +this.#a + e.pageY - this.#r, this.#e.releasePointerCapture(e.pointerId), this.#f()), e.type === "pointercancel" && (this.#o(e, {
			startX: this.#n,
			startY: this.#r,
			relativeX: 0,
			relativeY: 0,
			totalX: this.#i,
			totalY: this.#a
		}), this.#e.releasePointerCapture(e.pointerId), this.#f());
	}
}, r = "1.2.9", i = "brightness", a = 3e3, o = [
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
], s = {
	type: "custom:big-slider-card",
	attribute: i,
	tap_action: {
		action: "toggle",
		haptic: "light"
	},
	hold_action: { action: "more-info" },
	hold_time: 600,
	settle_time: a,
	min_slide_time: 0,
	min: 0,
	max: 100
}, c = /* @__PURE__ */ t({
	card: () => te,
	common: () => l,
	default: () => ne,
	editor: () => u,
	errors: () => d,
	preview: () => ee
}), l = {
	version: "Version",
	invalid_configuration: "Invalid configuration",
	show_warning: "Show Warning",
	no_entity_set: "Entity not set",
	no_entity: "Entity not available",
	on: "On",
	off: "Off"
}, u = {
	sections: {
		display: "Display Options",
		styling: "Custom Styling",
		behavior: "Behavior / Actions"
	},
	attributes: {
		brightness: "Brightness",
		red: "Red",
		green: "Green",
		blue: "Blue",
		hue: "Hue",
		saturation: "Saturation",
		color_temp_kelvin: "Color Temperature Kelvin",
		value: "Value",
		percentage: "Percentage",
		position: "Position",
		tilt_position: "Tilt position",
		temperature: "Temperature",
		humidity: "Humidity",
		volume: "Volume"
	},
	labels: {
		colorize: "Colorize based on state",
		show_percentage: "Show percentage text",
		bold_text: "Bold text",
		no_scale: "Disable scale on press",
		no_transition_animation: "Disable transition animation",
		vertical: "Vertical slider",
		min_slide_time: "Min slide time",
		hold_time: "Hold time",
		settle_time: "Settle time",
		immediate_update: "Update while sliding",
		background_color: "Background color",
		height: "Height",
		width: "Width",
		text_color: "Text color",
		icon_color: "Icon color",
		icon_off_color: "Icon off color",
		constant_icon_color: "Constant icon color",
		show_icon_halo: "Show icon halo",
		use_alternative_slider_color: "Use alternative slider color",
		icon_size: "Icon size",
		icon_box_size: "Icon box size",
		slider_opacity: "Slider opacity",
		text_size: "Text size",
		border_color: "Border color",
		border_radius: "Border radius",
		border_style: "Border style",
		border_width: "Border width"
	}
}, d = {
	light_domain_only: "Specify an entity from within the light domain",
	unsupported_domain: "Specify a supported slider entity"
}, ee = { example_light: "Example Light" }, te = {
	name: "Big Slider Card",
	description: "Big slider card for light entities."
}, ne = {
	common: l,
	editor: u,
	errors: d,
	preview: ee,
	card: te
}, re = /* @__PURE__ */ t({
	card: () => ce,
	common: () => ie,
	default: () => le,
	editor: () => ae,
	errors: () => oe,
	preview: () => se
}), ie = {
	version: "Version",
	invalid_configuration: "Ungültige Konfiguration",
	show_warning: "Warnung anzeigen",
	no_entity_set: "Entität nicht gesetzt",
	no_entity: "Entität nicht verfügbar",
	on: "An",
	off: "Aus"
}, ae = {
	sections: {
		display: "Anzeigeoptionen",
		styling: "Benutzerdefiniertes Styling",
		behavior: "Verhalten / Aktionen"
	},
	attributes: {
		brightness: "Helligkeit",
		red: "Rot",
		green: "Grün",
		blue: "Blau",
		hue: "Farbton",
		saturation: "Sättigung",
		color_temp_kelvin: "Farbtemperatur Kelvin",
		value: "Wert",
		percentage: "Prozent",
		position: "Position",
		tilt_position: "Kippposition",
		temperature: "Temperatur",
		humidity: "Luftfeuchtigkeit",
		volume: "Lautstärke"
	},
	labels: {
		colorize: "Basierend auf Status einfärben",
		show_percentage: "Prozenttext anzeigen",
		bold_text: "Fetter Text",
		no_scale: "Skalierung beim Drücken deaktivieren",
		no_transition_animation: "Übergangsanimation deaktivieren",
		vertical: "Vertikaler Schieberegler",
		min_slide_time: "Minimale Schiebezeit",
		hold_time: "Haltezeit",
		settle_time: "Beruhigungszeit",
		immediate_update: "Beim Schieben aktualisieren",
		background_color: "Hintergrundfarbe",
		height: "Höhe",
		width: "Breite",
		text_color: "Textfarbe",
		icon_color: "Symbolfarbe",
		icon_off_color: "Symbolfarbe aus",
		constant_icon_color: "Konstante Symbolfarbe",
		show_icon_halo: "Symbol-Halo anzeigen",
		use_alternative_slider_color: "Alternative Schiebereglerfarbe verwenden",
		icon_size: "Symbolgröße",
		icon_box_size: "Symbolfeldgröße",
		slider_opacity: "Schieberegler-Deckkraft",
		text_size: "Textgröße",
		border_color: "Rahmenfarbe",
		border_radius: "Rahmenradius",
		border_style: "Rahmenstil",
		border_width: "Rahmenbreite"
	}
}, oe = {
	light_domain_only: "Gib eine Entität aus der light-Domain an",
	unsupported_domain: "Gib eine unterstützte Schieberegler-Entität an"
}, se = { example_light: "Beispiellampe" }, ce = {
	name: "Big Slider Card",
	description: "Große Schiebereglerkarte für Lichtentitäten."
}, le = {
	common: ie,
	editor: ae,
	errors: oe,
	preview: se,
	card: ce
}, ue = /* @__PURE__ */ t({
	card: () => he,
	common: () => de,
	default: () => ge,
	editor: () => fe,
	errors: () => pe,
	preview: () => me
}), de = {
	version: "Versión",
	invalid_configuration: "Configuración no válida",
	show_warning: "Mostrar advertencia",
	no_entity_set: "Entidad no configurada",
	no_entity: "Entidad no disponible",
	on: "Encendido",
	off: "Apagado"
}, fe = {
	sections: {
		display: "Opciones de visualización",
		styling: "Estilo personalizado",
		behavior: "Comportamiento / Acciones"
	},
	attributes: {
		brightness: "Brillo",
		red: "Rojo",
		green: "Verde",
		blue: "Azul",
		hue: "Tono",
		saturation: "Saturación",
		color_temp_kelvin: "Temperatura de color Kelvin",
		value: "Valor",
		percentage: "Porcentaje",
		position: "Posición",
		tilt_position: "Posición de inclinación",
		temperature: "Temperatura",
		humidity: "Humedad",
		volume: "Volumen"
	},
	labels: {
		colorize: "Colorear según el estado",
		show_percentage: "Mostrar texto de porcentaje",
		bold_text: "Texto en negrita",
		no_scale: "Desactivar escala al pulsar",
		no_transition_animation: "Desactivar animación de transición",
		vertical: "Control deslizante vertical",
		min_slide_time: "Tiempo mínimo de deslizamiento",
		hold_time: "Tiempo de pulsación larga",
		settle_time: "Tiempo de estabilización",
		immediate_update: "Actualizar mientras se desliza",
		background_color: "Color de fondo",
		height: "Altura",
		width: "Anchura",
		text_color: "Color del texto",
		icon_color: "Color del icono",
		icon_off_color: "Color del icono apagado",
		constant_icon_color: "Color constante del icono",
		show_icon_halo: "Mostrar halo del icono",
		use_alternative_slider_color: "Usar color alternativo del control deslizante",
		icon_size: "Tamaño del icono",
		icon_box_size: "Tamaño del cuadro del icono",
		slider_opacity: "Opacidad del control deslizante",
		text_size: "Tamaño del texto",
		border_color: "Color del borde",
		border_radius: "Radio del borde",
		border_style: "Estilo del borde",
		border_width: "Anchura del borde"
	}
}, pe = {
	light_domain_only: "Especifica una entidad del dominio light",
	unsupported_domain: "Especifica una entidad compatible con el control deslizante"
}, me = { example_light: "Luz de ejemplo" }, he = {
	name: "Big Slider Card",
	description: "Tarjeta deslizante grande para entidades de luz."
}, ge = {
	common: de,
	editor: fe,
	errors: pe,
	preview: me,
	card: he
}, _e = /* @__PURE__ */ t({
	card: () => Se,
	common: () => ve,
	default: () => Ce,
	editor: () => ye,
	errors: () => be,
	preview: () => xe
}), ve = {
	version: "Version",
	invalid_configuration: "Configuration invalide",
	show_warning: "Afficher l'avertissement",
	no_entity_set: "Entité non définie",
	no_entity: "Entité non disponible",
	on: "Allumé",
	off: "Éteint"
}, ye = {
	sections: {
		display: "Options d'affichage",
		styling: "Style personnalisé",
		behavior: "Comportement / Actions"
	},
	attributes: {
		brightness: "Luminosité",
		red: "Rouge",
		green: "Vert",
		blue: "Bleu",
		hue: "Teinte",
		saturation: "Saturation",
		color_temp_kelvin: "Température de couleur Kelvin",
		value: "Valeur",
		percentage: "Pourcentage",
		position: "Position",
		tilt_position: "Position d'inclinaison",
		temperature: "Température",
		humidity: "Humidité",
		volume: "Volume"
	},
	labels: {
		colorize: "Colorer selon l'état",
		show_percentage: "Afficher le pourcentage",
		bold_text: "Texte en gras",
		no_scale: "Désactiver l'échelle à l'appui",
		no_transition_animation: "Désactiver l'animation de transition",
		vertical: "Curseur vertical",
		min_slide_time: "Temps de glissement minimal",
		hold_time: "Durée d'appui long",
		settle_time: "Temps de stabilisation",
		immediate_update: "Mettre à jour pendant le glissement",
		background_color: "Couleur d'arrière-plan",
		height: "Hauteur",
		width: "Largeur",
		text_color: "Couleur du texte",
		icon_color: "Couleur de l'icône",
		icon_off_color: "Couleur de l'icône éteinte",
		constant_icon_color: "Couleur constante de l'icône",
		show_icon_halo: "Afficher le halo de l'icône",
		use_alternative_slider_color: "Utiliser une couleur de curseur alternative",
		icon_size: "Taille de l'icône",
		icon_box_size: "Taille du cadre de l'icône",
		slider_opacity: "Opacité du curseur",
		text_size: "Taille du texte",
		border_color: "Couleur de bordure",
		border_radius: "Rayon de bordure",
		border_style: "Style de bordure",
		border_width: "Largeur de bordure"
	}
}, be = {
	light_domain_only: "Spécifiez une entité du domaine light",
	unsupported_domain: "Spécifiez une entité compatible avec le curseur"
}, xe = { example_light: "Lumière d'exemple" }, Se = {
	name: "Big Slider Card",
	description: "Grande carte de curseur pour les entités lumière."
}, Ce = {
	common: ve,
	editor: ye,
	errors: be,
	preview: xe,
	card: Se
}, we = /* @__PURE__ */ t({
	card: () => ke,
	common: () => Te,
	default: () => Ae,
	editor: () => Ee,
	errors: () => De,
	preview: () => Oe
}), Te = {
	version: "Versione",
	invalid_configuration: "Configurazione non valida",
	show_warning: "Mostra avviso",
	no_entity_set: "Entità non impostata",
	no_entity: "Entità non disponibile",
	on: "Acceso",
	off: "Spento"
}, Ee = {
	sections: {
		display: "Opzioni di visualizzazione",
		styling: "Stile personalizzato",
		behavior: "Comportamento / Azioni"
	},
	attributes: {
		brightness: "Luminosità",
		red: "Rosso",
		green: "Verde",
		blue: "Blu",
		hue: "Tonalità",
		saturation: "Saturazione",
		color_temp_kelvin: "Temperatura colore Kelvin",
		value: "Valore",
		percentage: "Percentuale",
		position: "Posizione",
		tilt_position: "Posizione inclinazione",
		temperature: "Temperatura",
		humidity: "Umidità",
		volume: "Volume"
	},
	labels: {
		colorize: "Colora in base allo stato",
		show_percentage: "Mostra testo percentuale",
		bold_text: "Testo in grassetto",
		no_scale: "Disattiva scala alla pressione",
		no_transition_animation: "Disattiva animazione di transizione",
		vertical: "Cursore verticale",
		min_slide_time: "Tempo minimo di scorrimento",
		hold_time: "Tempo di pressione prolungata",
		settle_time: "Tempo di stabilizzazione",
		immediate_update: "Aggiorna durante lo scorrimento",
		background_color: "Colore di sfondo",
		height: "Altezza",
		width: "Larghezza",
		text_color: "Colore testo",
		icon_color: "Colore icona",
		icon_off_color: "Colore icona spenta",
		constant_icon_color: "Colore icona costante",
		show_icon_halo: "Mostra alone icona",
		use_alternative_slider_color: "Usa colore alternativo del cursore",
		icon_size: "Dimensione icona",
		icon_box_size: "Dimensione riquadro icona",
		slider_opacity: "Opacità del cursore",
		text_size: "Dimensione testo",
		border_color: "Colore bordo",
		border_radius: "Raggio bordo",
		border_style: "Stile bordo",
		border_width: "Spessore bordo"
	}
}, De = {
	light_domain_only: "Specifica un'entità del dominio light",
	unsupported_domain: "Specifica un'entità supportata dal cursore"
}, Oe = { example_light: "Luce di esempio" }, ke = {
	name: "Big Slider Card",
	description: "Scheda con cursore grande per entità luce."
}, Ae = {
	common: Te,
	editor: Ee,
	errors: De,
	preview: Oe,
	card: ke
}, je = /* @__PURE__ */ t({
	card: () => Ie,
	common: () => Me,
	default: () => Le,
	editor: () => Ne,
	errors: () => Pe,
	preview: () => Fe
}), Me = {
	version: "Versie",
	invalid_configuration: "Ongeldige configuratie",
	show_warning: "Waarschuwing tonen",
	no_entity_set: "Entiteit niet ingesteld",
	no_entity: "Entiteit niet beschikbaar",
	on: "Aan",
	off: "Uit"
}, Ne = {
	sections: {
		display: "Weergaveopties",
		styling: "Aangepaste stijl",
		behavior: "Gedrag / Acties"
	},
	attributes: {
		brightness: "Helderheid",
		red: "Rood",
		green: "Groen",
		blue: "Blauw",
		hue: "Tint",
		saturation: "Verzadiging",
		color_temp_kelvin: "Kleurtemperatuur Kelvin",
		value: "Waarde",
		percentage: "Percentage",
		position: "Positie",
		tilt_position: "Kantelpositie",
		temperature: "Temperatuur",
		humidity: "Luchtvochtigheid",
		volume: "Volume"
	},
	labels: {
		colorize: "Kleuren op basis van status",
		show_percentage: "Percentagetekst tonen",
		bold_text: "Vetgedrukte tekst",
		no_scale: "Schalen bij indrukken uitschakelen",
		no_transition_animation: "Overgangsanimatie uitschakelen",
		vertical: "Verticale schuifregelaar",
		min_slide_time: "Minimale schuiftijd",
		hold_time: "Tijd voor ingedrukt houden",
		settle_time: "Stabilisatietijd",
		immediate_update: "Bijwerken tijdens schuiven",
		background_color: "Achtergrondkleur",
		height: "Hoogte",
		width: "Breedte",
		text_color: "Tekstkleur",
		icon_color: "Pictogramkleur",
		icon_off_color: "Pictogramkleur uit",
		constant_icon_color: "Constante pictogramkleur",
		show_icon_halo: "Pictogramhalo tonen",
		use_alternative_slider_color: "Alternatieve schuifkleur gebruiken",
		icon_size: "Pictogramgrootte",
		icon_box_size: "Pictogramvakgrootte",
		slider_opacity: "Schuifregelaar dekking",
		text_size: "Tekstgrootte",
		border_color: "Randkleur",
		border_radius: "Randradius",
		border_style: "Randstijl",
		border_width: "Randbreedte"
	}
}, Pe = {
	light_domain_only: "Geef een entiteit uit het light-domein op",
	unsupported_domain: "Geef een ondersteunde schuifregelaar-entiteit op"
}, Fe = { example_light: "Voorbeeldlamp" }, Ie = {
	name: "Big Slider Card",
	description: "Grote schuifregelaar-kaart voor lichtentiteiten."
}, Le = {
	common: Me,
	editor: Ne,
	errors: Pe,
	preview: Fe,
	card: Ie
}, Re = /* @__PURE__ */ t({
	card: () => Ue,
	common: () => ze,
	default: () => We,
	editor: () => Be,
	errors: () => Ve,
	preview: () => He
}), ze = {
	version: "Wersja",
	invalid_configuration: "Nieprawidłowa konfiguracja",
	show_warning: "Pokaż ostrzeżenie",
	no_entity_set: "Encja nie ustawiona",
	no_entity: "Encja niedostępna",
	on: "Włączone",
	off: "Wyłączone"
}, Be = {
	sections: {
		display: "Opcje wyświetlania",
		styling: "Niestandardowy styl",
		behavior: "Zachowanie / Akcje"
	},
	attributes: {
		brightness: "Jasność",
		red: "Czerwony",
		green: "Zielony",
		blue: "Niebieski",
		hue: "Odcień",
		saturation: "Nasycenie",
		color_temp_kelvin: "Temperatura barwowa Kelvin",
		value: "Wartość",
		percentage: "Procent",
		position: "Pozycja",
		tilt_position: "Pozycja nachylenia",
		temperature: "Temperatura",
		humidity: "Wilgotność",
		volume: "Głośność"
	},
	labels: {
		colorize: "Koloruj na podstawie stanu",
		show_percentage: "Pokaż tekst procentowy",
		bold_text: "Pogrubiony tekst",
		no_scale: "Wyłącz skalowanie po naciśnięciu",
		no_transition_animation: "Wyłącz animację przejścia",
		vertical: "Suwak pionowy",
		min_slide_time: "Minimalny czas przesuwania",
		hold_time: "Czas przytrzymania",
		settle_time: "Czas stabilizacji",
		immediate_update: "Aktualizuj podczas przesuwania",
		background_color: "Kolor tła",
		height: "Wysokość",
		width: "Szerokość",
		text_color: "Kolor tekstu",
		icon_color: "Kolor ikony",
		icon_off_color: "Kolor ikony wyłączonej",
		constant_icon_color: "Stały kolor ikony",
		show_icon_halo: "Pokaż poświatę ikony",
		use_alternative_slider_color: "Użyj alternatywnego koloru suwaka",
		icon_size: "Rozmiar ikony",
		icon_box_size: "Rozmiar pola ikony",
		slider_opacity: "Przezroczystość suwaka",
		text_size: "Rozmiar tekstu",
		border_color: "Kolor obramowania",
		border_radius: "Promień obramowania",
		border_style: "Styl obramowania",
		border_width: "Szerokość obramowania"
	}
}, Ve = {
	light_domain_only: "Podaj encję z domeny light",
	unsupported_domain: "Podaj obsługiwaną encję suwaka"
}, He = { example_light: "Przykładowe światło" }, Ue = {
	name: "Big Slider Card",
	description: "Duża karta suwaka dla encji światła."
}, We = {
	common: ze,
	editor: Be,
	errors: Ve,
	preview: He,
	card: Ue
}, Ge = /* @__PURE__ */ t({
	card: () => g,
	common: () => f,
	default: () => Ke,
	editor: () => p,
	errors: () => m,
	preview: () => h
}), f = {
	version: "Versão",
	invalid_configuration: "Configuração inválida",
	show_warning: "Mostrar aviso",
	no_entity_set: "Entidade não definida",
	no_entity: "Entidade não disponível",
	on: "Ligado",
	off: "Desligado"
}, p = {
	sections: {
		display: "Opções de exibição",
		styling: "Estilo personalizado",
		behavior: "Comportamento / Ações"
	},
	attributes: {
		brightness: "Brilho",
		red: "Vermelho",
		green: "Verde",
		blue: "Azul",
		hue: "Matiz",
		saturation: "Saturação",
		color_temp_kelvin: "Temperatura de cor Kelvin",
		value: "Valor",
		percentage: "Porcentagem",
		position: "Posição",
		tilt_position: "Posição de inclinação",
		temperature: "Temperatura",
		humidity: "Umidade",
		volume: "Volume"
	},
	labels: {
		colorize: "Colorir com base no estado",
		show_percentage: "Mostrar texto de porcentagem",
		bold_text: "Texto em negrito",
		no_scale: "Desativar escala ao pressionar",
		no_transition_animation: "Desativar animação de transição",
		vertical: "Controle deslizante vertical",
		min_slide_time: "Tempo mínimo de deslizamento",
		hold_time: "Tempo de pressionar e segurar",
		settle_time: "Tempo de estabilização",
		immediate_update: "Atualizar durante o deslizamento",
		background_color: "Cor de fundo",
		height: "Altura",
		width: "Largura",
		text_color: "Cor do texto",
		icon_color: "Cor do ícone",
		icon_off_color: "Cor do ícone desligado",
		constant_icon_color: "Cor constante do ícone",
		show_icon_halo: "Mostrar halo do ícone",
		use_alternative_slider_color: "Usar cor alternativa do controle deslizante",
		icon_size: "Tamanho do ícone",
		icon_box_size: "Tamanho da caixa do ícone",
		slider_opacity: "Opacidade do controle deslizante",
		text_size: "Tamanho do texto",
		border_color: "Cor da borda",
		border_radius: "Raio da borda",
		border_style: "Estilo da borda",
		border_width: "Largura da borda"
	}
}, m = {
	light_domain_only: "Especifique uma entidade do domínio light",
	unsupported_domain: "Especifique uma entidade compatível com o controle deslizante"
}, h = { example_light: "Luz de exemplo" }, g = {
	name: "Big Slider Card",
	description: "Cartão deslizante grande para entidades de luz."
}, Ke = {
	common: f,
	editor: p,
	errors: m,
	preview: h,
	card: g
}, qe = /* @__PURE__ */ t({
	card: () => Ye,
	common: () => _,
	default: () => Xe,
	editor: () => v,
	errors: () => y,
	preview: () => Je
}), _ = {
	version: "Versiunea",
	invalid_configuration: "Configurație invalidă",
	show_warning: "Show Warning",
	no_entity_set: "Entitatea nu e setată",
	no_entity: "Entitatea nu e disponibilă",
	on: "Pornit",
	off: "Oprit"
}, v = {
	sections: {
		display: "Opțiuni de afișare",
		styling: "Stilizare personalizată",
		behavior: "Comportament / Acțiuni"
	},
	attributes: {
		brightness: "Luminozitate",
		red: "Roșu",
		green: "Verde",
		blue: "Albastru",
		hue: "Nuanță",
		saturation: "Saturație",
		color_temp_kelvin: "Temperatură culoare Kelvin",
		value: "Valoare",
		percentage: "Procent",
		position: "Poziție",
		tilt_position: "Poziție înclinare",
		temperature: "Temperatură",
		humidity: "Umiditate",
		volume: "Volum"
	},
	labels: {
		colorize: "Colorează în funcție de stare",
		show_percentage: "Afișează text procentual",
		bold_text: "Text îngroșat",
		no_scale: "Dezactivează scalarea la apăsare",
		no_transition_animation: "Dezactivează animația de tranziție",
		vertical: "Glisor vertical",
		min_slide_time: "Timp minim de glisare",
		hold_time: "Timp de apăsare lungă",
		settle_time: "Timp de stabilizare",
		immediate_update: "Actualizează în timpul glisării",
		background_color: "Culoare fundal",
		height: "Înălțime",
		width: "Lățime",
		text_color: "Culoare text",
		icon_color: "Culoare pictogramă",
		icon_off_color: "Culoare pictogramă oprită",
		constant_icon_color: "Culoare constantă pictogramă",
		show_icon_halo: "Afișează haloul pictogramei",
		use_alternative_slider_color: "Folosește culoarea alternativă a glisorului",
		icon_size: "Dimensiune pictogramă",
		icon_box_size: "Dimensiune casetă pictogramă",
		slider_opacity: "Opacitate glisor",
		text_size: "Dimensiune text",
		border_color: "Culoare chenar",
		border_radius: "Rază chenar",
		border_style: "Stil chenar",
		border_width: "Lățime chenar"
	}
}, y = {
	light_domain_only: "Specifică o entitate din domeniul light",
	unsupported_domain: "Specifică o entitate suportată de glisor"
}, Je = { example_light: "Lumină exemplu" }, Ye = {
	name: "Big Slider Card",
	description: "Card cu glisor mare pentru entități de lumină."
}, Xe = {
	common: _,
	editor: v,
	errors: y,
	preview: Je,
	card: Ye
}, b = {
	en: c,
	de: re,
	es: ue,
	fr: _e,
	it: we,
	nl: je,
	pl: Re,
	pt: Ge,
	ro: qe
};
function x(e, t = "", n = "") {
	let r = (localStorage.getItem("selectedLanguage") || "en").replace(/['"]+/g, "").replace("-", "_"), i;
	try {
		i = e.split(".").reduce((e, t) => e[t], b[r]);
	} catch {
		i = e.split(".").reduce((e, t) => e[t], b.en);
	}
	return i === void 0 && (i = e.split(".").reduce((e, t) => e[t], b.en)), t !== "" && n !== "" && (i = i.replace(t, n)), i;
}
//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
var S = globalThis, C = S.ShadowRoot && (S.ShadyCSS === void 0 || S.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, w = Symbol(), Ze = /* @__PURE__ */ new WeakMap(), Qe = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== w) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (C && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = Ze.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ze.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, $e = (e) => new Qe(typeof e == "string" ? e : e + "", void 0, w), et = (e, ...t) => new Qe(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, w), tt = (e, t) => {
	if (C) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = S.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, nt = C ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return $e(t);
})(e) : e, { is: rt, defineProperty: it, getOwnPropertyDescriptor: at, getOwnPropertyNames: ot, getOwnPropertySymbols: st, getPrototypeOf: ct } = Object, T = globalThis, E = T.trustedTypes, lt = E ? E.emptyScript : "", ut = T.reactiveElementPolyfillSupport, D = (e, t) => e, O = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? lt : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, k = (e, t) => !rt(e, t), dt = {
	attribute: !0,
	type: String,
	converter: O,
	reflect: !1,
	useDefault: !1,
	hasChanged: k
};
Symbol.metadata ??= Symbol("metadata"), T.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var A = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = dt) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && it(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = at(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? dt;
	}
	static _$Ei() {
		if (this.hasOwnProperty(D("elementProperties"))) return;
		let e = ct(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(D("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(D("properties"))) {
			let e = this.properties, t = [...ot(e), ...st(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(nt(e));
		} else e !== void 0 && t.push(nt(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return tt(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? O : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? O : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? k)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
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
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[D("elementProperties")] = /* @__PURE__ */ new Map(), A[D("finalized")] = /* @__PURE__ */ new Map(), ut?.({ ReactiveElement: A }), (T.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
var ft = {
	attribute: !0,
	type: String,
	converter: O,
	reflect: !1,
	hasChanged: k
}, pt = (e = ft, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function mt(e) {
	return (t, n) => typeof n == "object" ? pt(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
function j(e) {
	return mt({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region node_modules/lit-html/lit-html.js
var M = globalThis, ht = (e) => e, N = M.trustedTypes, gt = N ? N.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, _t = "$lit$", P = `lit$${Math.random().toFixed(9).slice(2)}$`, vt = "?" + P, yt = `<${vt}>`, F = document, I = () => F.createComment(""), L = (e) => e === null || typeof e != "object" && typeof e != "function", R = Array.isArray, bt = (e) => R(e) || typeof e?.[Symbol.iterator] == "function", z = "[ 	\n\f\r]", B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, xt = /-->/g, St = />/g, V = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Ct = /'/g, wt = /"/g, Tt = /^(?:script|style|textarea|title)$/i, Et = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), H = Symbol.for("lit-noChange"), U = Symbol.for("lit-nothing"), Dt = /* @__PURE__ */ new WeakMap(), W = F.createTreeWalker(F, 129);
function Ot(e, t) {
	if (!R(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return gt === void 0 ? t : gt.createHTML(t);
}
var kt = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = B;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === B ? c[1] === "!--" ? o = xt : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = V) : (Tt.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = V) : o = St : o === V ? c[0] === ">" ? (o = i ?? B, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? V : c[3] === "\"" ? wt : Ct) : o === wt || o === Ct ? o = V : o === xt || o === St ? o = B : (o = V, i = void 0);
		let d = o === V && e[t + 1].startsWith("/>") ? " " : "";
		a += o === B ? n + yt : l >= 0 ? (r.push(s), n.slice(0, l) + _t + n.slice(l) + P + d) : n + P + (l === -2 ? t : d);
	}
	return [Ot(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, G = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = kt(t, n);
		if (this.el = e.createElement(l, r), W.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = W.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(_t)) {
					let t = u[o++], n = i.getAttribute(e).split(P), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? jt : r[1] === "?" ? Mt : r[1] === "@" ? Nt : J
					}), i.removeAttribute(e);
				} else e.startsWith(P) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Tt.test(i.tagName)) {
					let e = i.textContent.split(P), t = e.length - 1;
					if (t > 0) {
						i.textContent = N ? N.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], I()), W.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], I());
					}
				}
			} else if (i.nodeType === 8) if (i.data === vt) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(P, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += P.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = F.createElement("template");
		return n.innerHTML = e, n;
	}
};
function K(e, t, n = e, r) {
	if (t === H) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = L(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = K(e, i._$AS(e, t.values), i, r)), t;
}
var At = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? F).importNode(t, !0);
		W.currentNode = r;
		let i = W.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new q(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Pt(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = W.nextNode(), a++);
		}
		return W.currentNode = F, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, q = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = U, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = K(this, e, t), L(e) ? e === U || e == null || e === "" ? (this._$AH !== U && this._$AR(), this._$AH = U) : e !== this._$AH && e !== H && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? bt(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== U && L(this._$AH) ? this._$AA.nextSibling.data = e : this.T(F.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = G.createElement(Ot(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new At(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Dt.get(e.strings);
		return t === void 0 && Dt.set(e.strings, t = new G(e)), t;
	}
	k(t) {
		R(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(I()), this.O(I()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ht(e).nextSibling;
			ht(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, J = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = U, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = U;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = K(this, e, t, 0), a = !L(e) || e !== this._$AH && e !== H, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = K(this, r[n + o], t, o), s === H && (s = this._$AH[o]), a ||= !L(s) || s !== this._$AH[o], s === U ? e = U : e !== U && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === U ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, jt = class extends J {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === U ? void 0 : e;
	}
}, Mt = class extends J {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== U);
	}
}, Nt = class extends J {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = K(this, e, t, 0) ?? U) === H) return;
		let n = this._$AH, r = e === U && n !== U || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== U && (n === U || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Pt = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		K(this, e);
	}
}, Ft = M.litHtmlPolyfillSupport;
Ft?.(G, q), (M.litHtmlVersions ??= []).push("3.3.3");
var It = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new q(t.insertBefore(I(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Y = (e) => e ?? U, X = globalThis, Z = class extends A {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = It(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return H;
	}
};
Z._$litElement$ = !0, Z.finalized = !0, X.litElementHydrateSupport?.({ LitElement: Z });
var Lt = X.litElementPolyfillSupport;
Lt?.({ LitElement: Z }), (X.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/decorate.js
function Q(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/big-slider-card.ts
var $ = class extends Z {
	constructor(...e) {
		super(...e), this._config = s, this.mouseStartPos = {
			x: 0,
			y: 0
		}, this.mousePos = {
			x: 0,
			y: 0
		}, this.containerWidth = 0, this.containerHeight = 0, this.oldValue = 0, this.currentValue = 0, this.holdTimer = 0, this.isHold = !1, this._shouldUpdate = !0, this.updateTimeout = 0, this.pressTimeout = 0, this.immediateUpdateTimeout = 0, this.trackingStartTime = 0, this.isTap = !1, this.hasValidSlide = !1, this._handleContextMenu = (e) => (e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1), this._handlePointer = (e, t) => {
			this.mousePos = {
				x: e.pageX,
				y: e.pageY
			};
			let n = this._config.min_slide_time;
			if (e.type === "pointerdown" && (this._press(), this.isTap = !0, this.isHold = !1, this.hasValidSlide = !1, this._clearImmediateUpdate(), this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time), this.trackingStartTime = Date.now(), this._updateContainerSize(), this._resetTrack()), !this.isHold && [
				"pointerdown",
				"pointermove",
				"pointerup"
			].includes(e.type) && this._updateValue(), e.type === "pointermove") {
				if (this.isHold || this.isTap && Math.abs(t.relativeX) < 5 && Math.abs(t.relativeY) < 5) return;
				this.isTap = !1, clearTimeout(this.holdTimer), this._stopUpdates(), this._scheduleImmediateUpdate();
			}
			if (e.type === "pointercancel" && (clearTimeout(this.holdTimer), this._clearImmediateUpdate(), this._unpress(), this._startUpdates()), e.type === "pointerup") {
				if (clearTimeout(this.holdTimer), this._clearImmediateUpdate(), this._unpress(), this._startUpdates(), this.isHold) return;
				if (this.isTap) {
					this._handleTap();
					return;
				}
				this.hasValidSlide && Date.now() - this.trackingStartTime > n && (this._setValue(), this._startUpdates(!0));
			}
		}, this._setHold = () => {
			this.isTap = !1, this.isHold = !0, this._clearImmediateUpdate(), this._shouldUpdate = !0, this.requestUpdate(), this._handleAction("hold");
		}, this._handleTap = () => {
			clearTimeout(this.holdTimer), this._config?.tap_action && (this.isHold || this._handleAction("tap"));
		};
	}
	static getStubConfig(e, t) {
		let n = t.filter((e) => o.includes(e.split(".")[0])).sort(), r = n[Math.floor(Math.random() * n.length)];
		return {
			type: "custom:big-slider-card",
			...r ? { entity: r } : {}
		};
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
		let e = this._config.vertical ? 180 : 56, t = this._getNumericCssLength(this._config.height ?? e);
		return Math.max(1, Math.ceil((t ?? e) / 50));
	}
	static getConfigForm() {
		return {
			schema: [
				{
					name: "entity",
					required: !0,
					selector: { entity: { domain: o } }
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
					title: x("editor.sections.display"),
					flatten: !0,
					schema: [
						{
							name: "attribute",
							selector: { select: { options: [
								{
									value: "brightness",
									label: x("editor.attributes.brightness")
								},
								{
									value: "red",
									label: x("editor.attributes.red")
								},
								{
									value: "green",
									label: x("editor.attributes.green")
								},
								{
									value: "blue",
									label: x("editor.attributes.blue")
								},
								{
									value: "hue",
									label: x("editor.attributes.hue")
								},
								{
									value: "saturation",
									label: x("editor.attributes.saturation")
								},
								{
									value: "color_temp_kelvin",
									label: x("editor.attributes.color_temp_kelvin")
								},
								{
									value: "value",
									label: x("editor.attributes.value")
								},
								{
									value: "percentage",
									label: x("editor.attributes.percentage")
								},
								{
									value: "position",
									label: x("editor.attributes.position")
								},
								{
									value: "tilt_position",
									label: x("editor.attributes.tilt_position")
								},
								{
									value: "temperature",
									label: x("editor.attributes.temperature")
								},
								{
									value: "humidity",
									label: x("editor.attributes.humidity")
								},
								{
									value: "volume",
									label: x("editor.attributes.volume")
								}
							] } }
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
							name: "show_icon_halo",
							selector: { boolean: {} }
						},
						{
							name: "use_alternative_slider_color",
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
					title: x("editor.sections.styling"),
					flatten: !0,
					schema: [
						{
							name: "height",
							selector: { number: {
								mode: "box",
								min: 10,
								max: 200,
								unit_of_measurement: "px"
							} }
						},
						{
							name: "width",
							selector: { number: {
								mode: "box",
								min: 10,
								max: 400,
								unit_of_measurement: "px"
							} }
						},
						{
							name: "icon_size",
							selector: { number: {
								mode: "box",
								min: 8,
								max: 96,
								unit_of_measurement: "px"
							} }
						},
						{
							name: "icon_box_size",
							selector: { number: {
								mode: "box",
								min: 24,
								max: 96,
								unit_of_measurement: "px"
							} }
						},
						{
							name: "slider_opacity",
							selector: { number: {
								mode: "box",
								min: 0,
								max: 1,
								step: .05
							} }
						},
						{
							name: "text_size",
							selector: { number: {
								mode: "box",
								min: 8,
								max: 48,
								unit_of_measurement: "px"
							} }
						},
						{
							name: "color",
							selector: { text: {} }
						},
						{
							name: "background_color",
							selector: { text: {} }
						},
						{
							name: "text_color",
							selector: { text: {} }
						},
						{
							name: "icon_color",
							selector: { text: {} }
						},
						{
							name: "icon_off_color",
							selector: { text: {} }
						},
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
						{
							name: "border_color",
							selector: { text: {} }
						},
						{
							name: "border_radius",
							selector: { number: {
								mode: "box",
								min: 0,
								unit_of_measurement: "px"
							} }
						},
						{
							name: "border_style",
							selector: { text: {} }
						},
						{
							name: "border_width",
							selector: { number: {
								mode: "box",
								min: 0,
								unit_of_measurement: "px"
							} }
						}
					]
				},
				{
					type: "expandable",
					name: "behavior",
					title: x("editor.sections.behavior"),
					flatten: !0,
					schema: [
						{
							name: "transition",
							selector: { number: {
								mode: "box",
								min: 0,
								step: .1,
								unit_of_measurement: "s"
							} }
						},
						{
							name: "min",
							selector: { number: { mode: "box" } }
						},
						{
							name: "max",
							selector: { number: { mode: "box" } }
						},
						{
							name: "min_slide_time",
							selector: { number: {
								mode: "box",
								unit_of_measurement: "ms"
							} }
						},
						{
							name: "hold_time",
							selector: { number: {
								mode: "box",
								unit_of_measurement: "ms"
							} }
						},
						{
							name: "settle_time",
							selector: { number: {
								mode: "box",
								unit_of_measurement: "ms"
							} }
						},
						{
							name: "immediate_update",
							selector: { boolean: {} }
						},
						{
							name: "tap_action",
							selector: { ui_action: {} }
						},
						{
							name: "hold_action",
							selector: { ui_action: {} }
						}
					]
				}
			],
			computeLabel: (e, t) => ({
				colorize: x("editor.labels.colorize"),
				show_percentage: x("editor.labels.show_percentage"),
				show_icon_halo: x("editor.labels.show_icon_halo"),
				bold_text: x("editor.labels.bold_text"),
				no_scale: x("editor.labels.no_scale"),
				no_transition_animation: x("editor.labels.no_transition_animation"),
				vertical: x("editor.labels.vertical"),
				min_slide_time: x("editor.labels.min_slide_time"),
				hold_time: x("editor.labels.hold_time"),
				settle_time: x("editor.labels.settle_time"),
				immediate_update: x("editor.labels.immediate_update"),
				background_color: x("editor.labels.background_color"),
				height: x("editor.labels.height"),
				width: x("editor.labels.width"),
				text_color: x("editor.labels.text_color"),
				icon_color: x("editor.labels.icon_color"),
				icon_off_color: x("editor.labels.icon_off_color"),
				constant_icon_color: x("editor.labels.constant_icon_color"),
				icon_size: x("editor.labels.icon_size"),
				icon_box_size: x("editor.labels.icon_box_size"),
				slider_opacity: x("editor.labels.slider_opacity"),
				use_alternative_slider_color: x("editor.labels.use_alternative_slider_color"),
				text_size: x("editor.labels.text_size"),
				border_color: x("editor.labels.border_color"),
				border_radius: x("editor.labels.border_radius"),
				border_style: x("editor.labels.border_style"),
				border_width: x("editor.labels.border_width")
			})[e.name] || t(`ui.panel.lovelace.editor.card.generic.${e.name}`) || e.name
		};
	}
	setConfig(e) {
		if (!e) throw Error(x("common.invalid_configuration"));
		let t = this._getDomain(e.entity);
		if (t && !o.includes(t)) throw Error(x("errors.unsupported_domain"));
		let n = e.attribute ?? this._getDefaultAttribute(t), r = this._getAttributeDefaults(n, t);
		this.customMin = e.min, this.customMax = e.max, this._config = {
			...s,
			attribute: n,
			...r,
			...e
		}, this._entity = this._config.entity, this.isConnected && this._setupSlideGesture();
	}
	_getAttributeDefaults(e, t) {
		switch (e) {
			case "color_temp_kelvin": return {
				min: 2200,
				max: 6500
			};
			default: return {};
		}
	}
	_getDomain(e) {
		return e?.split(".")[0] ?? "light";
	}
	_getDefaultAttribute(e) {
		switch (e) {
			case "number":
			case "input_number": return "value";
			case "fan": return "percentage";
			case "cover":
			case "valve": return "position";
			case "media_player": return "volume";
			case "climate":
			case "water_heater": return "temperature";
			case "humidifier": return "humidity";
			default: return s.attribute;
		}
	}
	set hass(e) {
		this._hass = e, this._entity && (this._state = e.states[this._entity]);
	}
	get _effectiveState() {
		return this._state ? this._state : {
			entity_id: this._entity || "light.example_light",
			state: this._effectiveStatus,
			attributes: {
				friendly_name: this._effectiveName,
				brightness: 153,
				rgb_color: [
					255,
					165,
					0
				]
			},
			last_changed: "",
			last_updated: "",
			context: {
				id: "",
				parent_id: null,
				user_id: null
			}
		};
	}
	get _effectiveName() {
		return this._config.name ? this._config.name : this._state ? this._state.attributes?.friendly_name ?? this._entity?.split(".")[1] ?? "" : x("preview.example_light");
	}
	get _effectiveStatus() {
		return this._state ? this._state.state : "on";
	}
	connectedCallback() {
		super.connectedCallback(), this.addEventListener("contextmenu", this._handleContextMenu), this._setupSlideGesture();
	}
	_setupSlideGesture() {
		this.slideGesture?.removeListeners(), this.slideGesture = new n(this, this._handlePointer.bind(this), {
			touchActions: this._config.vertical ? "pan-x" : "pan-y",
			stopScrollDirection: this._config.vertical ? "vertical" : "horizontal"
		});
	}
	disconnectedCallback() {
		this.removeEventListener("contextmenu", this._handleContextMenu), clearTimeout(this.holdTimer), clearTimeout(this.pressTimeout), clearTimeout(this.updateTimeout), this.holdTimer = 0, this.pressTimeout = 0, this.updateTimeout = 0, this._clearImmediateUpdate(), this.slideGesture?.removeListeners(), this.slideGesture = void 0, super.disconnectedCallback();
	}
	_updateValue() {
		if (!this._updateContainerSize()) return;
		let e = this._config.vertical ? this.containerHeight : this.containerWidth, t = this._config.vertical ? this.mouseStartPos.y - this.mousePos.y : this.mousePos.x - this.mouseStartPos.x, n = this._getRange(), r = this._getDragValueDelta(t, e, n);
		Number.isFinite(r) && (this.currentValue = this.oldValue + r, this._checklimits(), this._updateSlider(), this.hasValidSlide = !0);
	}
	_updateContainerSize() {
		return this.containerWidth = this.shadowRoot?.getElementById("container")?.clientWidth ?? 0, this.containerHeight = this.shadowRoot?.getElementById("container")?.clientHeight ?? 0, this._config.vertical ? this.containerHeight > 0 : this.containerWidth > 0;
	}
	_getDragValueDelta(e, t, n) {
		return t <= 0 ? 0 : this._usesRangeSlider() ? (n.max - n.min) * e / t : 100 * e / t;
	}
	_handleAction(e) {
		let t = new CustomEvent("hass-action", {
			bubbles: !0,
			cancelable: !1,
			composed: !0,
			detail: {
				config: this._config,
				action: e
			}
		});
		this.dispatchEvent(t);
	}
	_resetTrack() {
		this.mouseStartPos = {
			x: this.mousePos.x,
			y: this.mousePos.y
		}, this.oldValue = this.currentValue;
	}
	_press() {
		this.pressTimeout && clearTimeout(this.pressTimeout), this.pressTimeout = window.setTimeout(() => this.setAttribute("pressed", ""), this._config.min_slide_time), this.setAttribute("half-pressed", "");
	}
	_unpress() {
		this.pressTimeout && clearTimeout(this.pressTimeout), this.removeAttribute("pressed"), this.removeAttribute("half-pressed");
	}
	_checklimits() {
		let { min: e, max: t } = this._getRange();
		this.currentValue < e && (this.currentValue = e, this._resetTrack()), this.currentValue > t && (this.currentValue = t, this._resetTrack());
	}
	_updateSlider() {
		let e = this._getSliderPercentage();
		this.style.setProperty("--bsc-percent", e + "%");
		let t = this?.shadowRoot?.getElementById("percentage");
		t && (t.innerText = this._getSliderLabel(e));
	}
	_getSliderLabel(e) {
		let t = this._getValueUnit();
		return this._getDomain(this._effectiveState.entity_id) === "climate" && this._config.attribute === "temperature" ? `${this._formatValue(this.currentValue, 1)}${t}` : this._usesRangeSlider() ? `${this._formatValue(this.currentValue)}${t}` : `${this._formatValue(e)}%`;
	}
	_getSliderPercentage() {
		if (!this._usesRangeSlider()) return Math.max(0, Math.min(100, this.currentValue));
		let { min: e, max: t } = this._getRange(), n = t - e;
		if (n <= 0) return 0;
		let r = 100 * (this.currentValue - e) / n;
		return Number.isFinite(r) ? Math.max(0, Math.min(100, r)) : 0;
	}
	_usesRangeSlider() {
		let { min: e, max: t } = this._getRange();
		return this._config.attribute === "color_temp_kelvin" || e !== 0 || t !== 100;
	}
	_getRange() {
		return {
			min: this._config.min ?? 0,
			max: this._config.max ?? 100
		};
	}
	_getValueUnit() {
		let e = this._config.attribute, t = this._effectiveState;
		return e === "color_temp_kelvin" ? "K" : e === "percentage" || e === "position" || e === "tilt_position" || e === "humidity" || e === "volume" ? "%" : t.attributes?.unit_of_measurement ?? "";
	}
	_formatValue(e, t = 0) {
		return Number.isFinite(e) ? t > 0 ? e.toFixed(t) : String(Math.round(e)) : t > 0 ? 0 .toFixed(t) : "0";
	}
	_snapValueToStep(e, t) {
		let n = Number(t);
		if (!Number.isFinite(n) || n <= 0) return e;
		let r = this._getDecimalPlaces(n);
		return Number((Math.round(e / n) * n).toFixed(r));
	}
	_getDecimalPlaces(e) {
		let t = String(e);
		return t.includes(".") ? t.split(".")[1].length : 0;
	}
	_updateColors() {
		let e = "var(--bsc-color)", t = "0%", n = "50%", r = !1, i = this._effectiveState, a = this._effectiveStatus, o = this._getDomain(i.entity_id);
		if (this._isActiveState(a)) {
			let a = o === "light" ? i.attributes?.rgb_color : void 0, s = i.attributes?.brightness ?? 255;
			r = !0, e = a ? `rgb(${a.join(",")})` : "var(--bsc-active-color)", s && (t = `${100 * s / 255}%`, n = `${100 * s / 510 + 50}%`);
		} else e = "var(--bsc-off-color)";
		let s = this?.shadowRoot?.getElementById("percentage");
		if (o === "light" && !r) {
			let e = i ? this._hass && typeof this._hass.formatEntityState == "function" ? this._hass.formatEntityState(i) : i.state : x("common.off");
			s && (s.innerText = e);
		}
		this.style.setProperty("--bsc-entity-color", e), this.style.setProperty("--bsc-brightness", t), this.style.setProperty("--bsc-brightness-ui", n), this.style.setProperty("--bsc-icon-brightness", this._config.constant_icon_color === !0 ? "100%" : n), this.style.setProperty("--bsc-icon-background", this._config.show_icon_halo === !0 ? "color-mix(in srgb, var(--bsc-icon-color, var(--bsc-entity-color)) 20%, transparent)" : "transparent"), this.style.setProperty("--bsc-icon-off-background", this._config.show_icon_halo === !0 ? "color-mix(in srgb, var(--bsc-off-color) 20%, transparent)" : "transparent"), r && this._config.icon_color ? this.style.setProperty("--bsc-icon-color", this._config.icon_color) : !r && this._config.icon_off_color ? this.style.setProperty("--bsc-icon-color", this._config.icon_off_color) : this.style.removeProperty("--bsc-icon-color");
	}
	_getValue() {
		if (!this._shouldUpdate) return;
		let e = this._effectiveState, t = this._effectiveStatus, n = this._config?.attribute;
		if (this._isUnavailable(t)) this._config.min = 0, this._config.max = 0, this.style.setProperty("--bsc-opacity", "0.5");
		else {
			let t = this._getEntityRange(e);
			this._config.min = this.customMin ?? t.min, this._config.max = this.customMax ?? t.max, this.style.removeProperty("--bsc-opacity");
		}
		this.currentValue = this._getEntityValue(e, n), this._checklimits(), this._updateSlider();
	}
	_setValue() {
		if (!this._state) return;
		let e = this.currentValue, t = this._config.attribute, n = this._getDomain(this._state.entity_id);
		if (n !== "light") {
			this._setDomainValue(n, t, e);
			return;
		}
		let r = !0, i = e;
		switch (t) {
			case "brightness":
				i = Math.round(e / 100 * 255), i || (r = !1);
				break;
			case "red":
			case "green":
			case "blue": {
				let n = [...this._state.attributes.rgb_color ?? [
					255,
					255,
					255
				]], r = Math.round(e / 100 * 255);
				t === "red" && (n[0] = r), t === "green" && (n[1] = r), t === "blue" && (n[2] = r), i = n, t = "rgb_color";
				break;
			}
			case "hue":
			case "saturation": {
				let n = [...this._state.attributes.hs_color ?? [100, 100]];
				t === "hue" && (n[0] = e), t === "saturation" && (n[1] = e), i = n, t = "hs_color";
				break;
			}
			case "color_temp_kelvin":
				i = Math.round(e);
				break;
		}
		let a = { entity_id: this._state.entity_id };
		r ? (a[t] = i, this._config.transition && (a.transition = this._config.transition), this._hass.callService("light", "turn_on", a)) : this._hass.callService("light", "turn_off", a);
	}
	_getEntityValue(e, t) {
		let n = this._getDomain(e.entity_id), r = e.state;
		if (this._isUnavailable(r)) return this._config.min ?? 0;
		if (n === "light" && r !== "on") return 0;
		switch (n) {
			case "light": return this._getLightValue(e, t);
			case "number":
			case "input_number": return this._toNumber(e.state, this._config.min ?? 0);
			case "fan": return this._toNumber(e.attributes?.percentage, 0);
			case "cover": return t === "tilt_position" ? this._toNumber(e.attributes?.current_tilt_position, 0) : this._toNumber(e.attributes?.current_position, 0);
			case "valve": return this._toNumber(e.attributes?.current_position ?? e.attributes?.position, 0);
			case "media_player": return 100 * this._toNumber(e.attributes?.volume_level, 0);
			case "climate": return t === "humidity" ? this._toNumber(e.attributes?.humidity, this._config.min ?? 0) : this._toNumber(e.attributes?.temperature, this._config.min ?? 0);
			case "humidifier": return this._toNumber(e.attributes?.humidity, this._config.min ?? 0);
			case "water_heater": return this._toNumber(e.attributes?.temperature, this._config.min ?? 0);
			default: return this._toNumber(e.state, this._config.min ?? 0);
		}
	}
	_getLightValue(e, t) {
		switch (t) {
			case "brightness": return 100 * (e.attributes.brightness ?? 255) / 255;
			case "red":
			case "green":
			case "blue":
				let n = e.attributes.rgb_color ?? [
					255,
					255,
					255
				];
				return t === "red" ? 100 * n[0] / 255 : t === "green" ? 100 * n[1] / 255 : 100 * n[2] / 255;
			case "hue":
			case "saturation":
				let r = e.attributes.hs_color ?? [100, 100];
				return t === "hue" ? r[0] : r[1];
			case "color_temp_kelvin": return this._toNumber(e.attributes[t], this._config.min ?? 0);
			default: return 0;
		}
	}
	_setDomainValue(e, t, n) {
		let r = this._state.entity_id;
		switch (e) {
			case "number":
			case "input_number":
				this._hass.callService(e, "set_value", {
					entity_id: r,
					value: this._snapValueToStep(n, this._state.attributes?.step)
				});
				return;
			case "fan": {
				let e = Math.round(n);
				this._hass.callService("fan", e <= 0 ? "turn_off" : "set_percentage", {
					entity_id: r,
					...e > 0 ? { percentage: e } : {}
				});
				return;
			}
			case "cover":
				this._hass.callService("cover", t === "tilt_position" ? "set_cover_tilt_position" : "set_cover_position", {
					entity_id: r,
					[t === "tilt_position" ? "tilt_position" : "position"]: Math.round(n)
				});
				return;
			case "valve":
				this._hass.callService("valve", "set_valve_position", {
					entity_id: r,
					position: Math.round(n)
				});
				return;
			case "media_player":
				this._hass.callService("media_player", "volume_set", {
					entity_id: r,
					volume_level: Math.max(0, Math.min(1, n / 100))
				});
				return;
			case "climate":
				this._hass.callService("climate", t === "humidity" ? "set_humidity" : "set_temperature", {
					entity_id: r,
					[t === "humidity" ? "humidity" : "temperature"]: t === "humidity" ? Math.round(n) : this._snapValueToStep(n, this._state.attributes?.target_temp_step)
				});
				return;
			case "humidifier":
				this._hass.callService("humidifier", "set_humidity", {
					entity_id: r,
					humidity: Math.round(n)
				});
				return;
			case "water_heater":
				this._hass.callService("water_heater", "set_temperature", {
					entity_id: r,
					temperature: this._snapValueToStep(n, this._state.attributes?.target_temp_step)
				});
				return;
		}
	}
	_getEntityRange(e) {
		let t = this._getDomain(e.entity_id), n = this._config.attribute;
		if (n === "color_temp_kelvin") return {
			min: 2200,
			max: 6500
		};
		switch (t) {
			case "number":
			case "input_number": return {
				min: this._toNumber(e.attributes?.min, s.min),
				max: this._toNumber(e.attributes?.max, s.max)
			};
			case "climate":
			case "water_heater": return n === "humidity" ? {
				min: 0,
				max: 100
			} : {
				min: this._toNumber(e.attributes?.min_temp, s.min),
				max: this._toNumber(e.attributes?.max_temp, s.max)
			};
			default: return {
				min: s.min,
				max: s.max
			};
		}
	}
	_toNumber(e, t) {
		let n = Number(e);
		return Number.isFinite(n) ? n : t;
	}
	_isUnavailable(e) {
		return e === "unavailable" || e === "unknown";
	}
	_isActiveState(e) {
		return ![
			"off",
			"unavailable",
			"unknown"
		].includes(e);
	}
	_stopUpdates() {
		this.updateTimeout && clearTimeout(this.updateTimeout), this._shouldUpdate &&= (this.shadowRoot?.getElementById("slider")?.classList?.remove("animate"), !1);
	}
	_scheduleImmediateUpdate() {
		!this._config.immediate_update || this.immediateUpdateTimeout || (this.immediateUpdateTimeout = window.setTimeout(() => {
			this.immediateUpdateTimeout = 0, !this.isHold && Date.now() - this.trackingStartTime > this._config.min_slide_time && this._setValue();
		}, 300));
	}
	_clearImmediateUpdate() {
		this.immediateUpdateTimeout &&= (clearTimeout(this.immediateUpdateTimeout), 0);
	}
	_startUpdates(e = !1) {
		this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = window.setTimeout(() => {
			this._shouldUpdate = !0, this.shadowRoot?.getElementById("slider")?.classList?.add("animate"), this.requestUpdate();
		}, e ? this._config.settle_time : 0);
	}
	updated() {
		this._updateContainerSize(), this._getValue(), this._updateColors(), this._updateHostAttributes();
	}
	_updateHostAttributes() {
		let e = this._effectiveState;
		this.dataset.domain = this._getDomain(e.entity_id), this.dataset.state = this._effectiveStatus;
	}
	render() {
		if (this._entity && !(this._entity in (this._hass?.states ?? {}))) return this._showError(`${x("common.no_entity")}: ${this._entity}`);
		let e = this._effectiveState, t = this._effectiveStatus, n = this._effectiveName, r = (this._entity || "light.example_light").split(".")[0], i = (this._config.colorize && !0) ?? !1, a = (this._config.show_percentage && !0) ?? !1, o = (this._config.bold_text && !0) ?? !1, s = this._config.no_scale !== !0, c = this._config.no_transition_animation !== !0, l = this._config.vertical === !0, u = this._config.use_alternative_slider_color === !0 ? "var(--paper-slider-active-color, #f9d2b0)" : "var(--bsc-active-color)";
		return this.style.setProperty("--bsc-default-slider-color", u), this._setStyleProperty("--bsc-background", this._config.background_color), this._setStyleProperty("--bsc-primary-text-color", this._config.text_color), this._setStyleProperty("--bsc-slider-color", this._config.color), this._setStyleProperty("--bsc-border-color", this._config.border_color), this._setStyleProperty("--bsc-border-radius", this._config.border_radius, this._normalizeCssLength), this._setStyleProperty("--bsc-border-style", this._config.border_style), this._setStyleProperty("--bsc-border-width", this._config.border_width, this._normalizeCssLength), this._setStyleProperty("--bsc-height", this._config.height, this._normalizeCssLength), this._setStyleProperty("--bsc-width", this._config.width, this._normalizeCssLength), this._setStyleProperty("--bsc-icon-size", this._config.icon_size, this._normalizeCssLength), this._setStyleProperty("--bsc-icon-box-size", this._config.icon_box_size, this._normalizeCssLength), this._setStyleProperty("--bsc-slider-opacity", this._config.slider_opacity), this._setStyleProperty("--bsc-text-size", this._config.text_size, this._normalizeCssLength), this.style.setProperty("--bsc-press-transition", s ? "transform 0.1s ease-out" : "none"), this.style.setProperty("--bsc-half-pressed-transform", s ? "scale(0.99)" : "none"), this.style.setProperty("--bsc-pressed-transform", s ? "scale(0.98)" : "none"), this.style.setProperty("--bsc-color-transition", c ? "background-color 180ms ease-in-out, filter 180ms ease-in-out" : "none"), this.style.setProperty("--bsc-slider-transition", c ? "right 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out" : "none"), this.style.setProperty("--bsc-vertical-slider-transition", c ? "top 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out" : "none"), this.style.setProperty("--bsc-icon-transition", c ? "color 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out" : "none"), Et`
      <ha-card
        id="container"
        class="${l ? "vertical" : ""}"
        data-domain=${Y(r)}
        data-state=${Y(t)}
        tabindex="0"
        >
        <div id="slider" class="animate ${i ? "colorize" : ""}"></div>
        <ha-state-icon
          id="icon"
          .icon=${this._config.icon}
          .state=${e}
          .hass=${this._hass}
          .stateObj=${e}
          data-domain=${Y(r)}
          data-state=${Y(t)}
        ></ha-state-icon>
        <div id="content">
          <p id="label" class="${o ? "bold" : ""}">
            <span id="name">${n}</span>
            <span id="percentage" class="${a ? "" : "hide"}"></span>
          </p>
        </div>
      </ha-card>
    `;
	}
	_setStyleProperty(e, t, n = String) {
		t != null && t !== "" ? this.style.setProperty(e, n(t)) : this.style.removeProperty(e);
	}
	_normalizeCssLength(e) {
		return typeof e == "number" ? `${e}px` : e;
	}
	_getNumericCssLength(e) {
		if (typeof e == "number") return e;
		if (typeof e != "string") return;
		let t = e.trim().match(/^(\d+(?:\.\d+)?)px$/);
		return t ? Number(t[1]) : void 0;
	}
	_showError(e) {
		let t = document.createElement("hui-error-card");
		return t.setConfig({
			type: "error",
			error: e
		}), Et`
      ${t}
    `;
	}
	static get styles() {
		return et`
      :host {
        --bsc-background: var(--card-background-color);
        --bsc-active-color: var(--state-light-on-color, var(--state-light-active-color, var(--state-active-color)));
        --bsc-default-slider-color: var(--bsc-active-color);
        --bsc-slider-color: var(--bsc-default-slider-color);
        --bsc-slider-opacity: 0.3;
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-icon-brightness: var(--bsc-brightness-ui);
        --bsc-color: var(--bsc-active-color);
        --bsc-off-color: var(--state-inactive-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        --bsc-border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
        --bsc-border-style: var(--ha-card-border-style, solid);
        --bsc-border-width: var(--ha-card-border-width, 1px);
        --bsc-icon-box-size: 36px;
        --bsc-icon-size: 24px;
        --bsc-icon-background: transparent;
        --bsc-icon-off-background: transparent;
        --bsc-text-size: var(--ha-font-size-m, 14px);
        --bsc-secondary-text-size: var(--ha-font-size-s, 12px);
        --bsc-press-transition: transform 0.1s ease-out;
        --bsc-half-pressed-transform: scale(0.99);
        --bsc-pressed-transform: scale(0.98);
        --bsc-color-transition: background-color 180ms ease-in-out, filter 180ms ease-in-out;
        --bsc-slider-transition: right 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out;
        --bsc-vertical-slider-transition: top 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out;
        --bsc-icon-transition: color 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out;
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
        min-height: var(--bsc-height, 56px);
        min-width: var(--bsc-width, 0);
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color);
        border-radius: var(--bsc-border-radius);
        border-style: var(--bsc-border-style);
        border-width: var(--bsc-border-width);
        transition: none;
        box-sizing: border-box;
        z-index: 1; /* fix safari bug with filter transition https://stackoverflow.com/a/27935035 */
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
        opacity: var(--bsc-slider-opacity);
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
        left: 10px;
        width: var(--bsc-icon-box-size);
        height: var(--bsc-icon-box-size);
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        background: var(--bsc-icon-background);
        border-radius: var(--ha-tile-icon-border-radius, var(--ha-border-radius-pill, 999px));
        box-sizing: border-box;
        filter: brightness(var(--bsc-icon-brightness));
        transition: var(--bsc-icon-transition);
        --mdc-icon-size: var(--bsc-icon-size);
      }

      #icon[data-state="off"],
      #icon[data-state="unavailable"],
      #icon[data-state="unknown"] {
        background: var(--bsc-icon-off-background);
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px 0 calc(20px + var(--bsc-icon-box-size));
        box-sizing: border-box;
        min-width: 0;
      }

      #container.vertical #icon {
        top: 24px;
        right: 0;
        bottom: auto;
        left: 0;
        width: var(--bsc-icon-box-size);
        height: var(--bsc-icon-box-size);
        margin: 0 auto;
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
        line-height: var(--ha-line-height-normal, 20px);
        margin: 0;
        min-width: 0;
        width: 100%;
      }

      #label.bold {
        font-weight: bold;
      }

      #name {
        color: var(--bsc-primary-text-color);
        line-height: var(--ha-line-height-normal, 20px);
        letter-spacing: 0.1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #percentage {
        color: var(--bsc-secondary-text-color);
        font-size: var(--bsc-secondary-text-size);
        line-height: var(--ha-line-height-condensed, 16px);
        letter-spacing: 0.4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `;
	}
};
Q([j()], $.prototype, "_config", void 0), Q([j()], $.prototype, "_entity", void 0), Q([j()], $.prototype, "_state", void 0), console.info(`%c  BIG-SLIDER-CARD \n%c  ${x("common.version")} ${r}    `, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray"), customElements.define("big-slider-card", $), window.customCards = window.customCards ?? [], window.customCards.push({
	type: "big-slider-card",
	name: x("card.name"),
	description: x("card.description"),
	preview: !0,
	getEntitySuggestion: (e, t) => o.includes(t.split(".")[0]) ? {
		type: "custom:big-slider-card",
		config: {
			type: "custom:big-slider-card",
			entity: t
		}
	} : null
});
//#endregion
