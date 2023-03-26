# Big Slider Card
[![GitHub Release][releases-shield]][releases]
<!-- [![hacs_badge](https://img.shields.io/badge/HACS-default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs) -->
[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

Big slider card inspired by the google home app cards for `light` entities.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nicufarmache/lovelace-big-slider-card/master/prev-dark.gif">
  <img width="470" alt="Preview" src="https://raw.githubusercontent.com/nicufarmache/lovelace-big-slider-card/master/prev-light.gif">
</picture>

#### Please ⭐️ this repo if you find it useful


## Installation

### HACS
This card is available in [HACS][hacs] (Home Assistant Community Store).
Just search for `Big Slider Card` in the Frontend section.

### Manual

1. Download `big-slider-card.js` file from the [latest-release].
2. Put `big-slider-card.js` file into your `config/www` folder.
3. Go to _Configuration_ → _Lovelace Dashboards_ → _Resources_ → Click Plus button → Set _Url_ as `/local/big-slider-card.js` → Set _Resource type_ as `JavaScript Module`.
4. Add `custom:big-slider-card` to Lovelace UI as any other card (using either editor or YAML configuration).

## Configuration
### Sample Minimal Configuration
```yaml
type: custom:big-slider-card
entity: light.lamp
```
### Sample Full Configuration
```yaml
type: custom:big-slider-card
entity: light.lamp
name: Bedroom Lamp
attribute: brightness
transition: 0.3
icon_color: '#ff00ff'
colorize: true
icon: mdi:lamp
show_percentage: true
bold_text: true
min: 1
max: 80
hold_time: 600
settle_time: 3000
tap_action:
  action: toggle
hold_action:
  action: more-info
```

### Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:big-slider-card`                    |                     |
| entity            | string  | **Required** | Home Assistant entity ID.                   |                     |
| name              | string  | **Optional** | Name to show on card                        | entity name         |
| attribute         | string  | **Optional** | Attribute to control                        | `brightness`        |
| transition        | number  | **Optional** | Transition time (seonds)                    | not used if unset   |
| color             | string  | **Optional** | Slider color (CSS color)                    | theme color         |
| icon_color        | string  | **Optional** | Icon color (CSS color)                      | entity color        |
| colorize          | boolean | **Optional** | Colorize slider using entity color          | false               |
| icon              | string  | **Optional** | Sets custom icon                            | entity icon         |
| show_percentage   | boolean | **Optional** | Show percentage under entity name           | false               |
| bold_text         | boolean | **Optional** | Make taxt font bold                         | false               |
| min               | number  | **Optional** | Maximum value for slider                    | `0`                 |
| max               | number  | **Optional** | minimum value for slider                    | `100`               |
| hold_time         | number  | **Optional** | Hold gesture time (ms)                      | `600`               |
| settle_time       | number  | **Optional** | Ignore updates after changig the value (ms) | `3000`              |
| tap_action        | object  | **Optional** | Action to take on tap                       | `action: toggle`    |
| hold_action       | object  | **Optional** | Action to take on hold                      | `action: more-info` |

For more action info see this page : [Actions - Home Assistant][actions]

<!-- References -->
[hacs]: https://hacs.xyz
[latest-release]: https://github.com/nicufarmache/lovelace-big-slider-card/releases/latest
[releases-shield]: https://img.shields.io/github/v/release/nicufarmache/lovelace-big-slider-card.svg?style=for-the-badge
[releases]: https://github.com/nicufarmache/lovelace-big-slider-card/releases
[icon-minimal]: https://raw.githubusercontent.com/nicufarmache/lovelace-big-slider-card/main/assets/grid-full-width.png
[actions]: https://www.home-assistant.io/dashboards/actions/
