# Big Slider Card
[![GitHub Release][releases-shield]][releases]
[![hacs_badge](https://img.shields.io/badge/HACS-default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

Big slider card inspired by the google home app cards for `light` entities.

![Preview][preview]

#### Please ⭐️ this repo if you find it useful


## Installation

### HACS
This card is available in [HACS][hacs] (Home Assistant Community Store).
Just search for `Slider Button Card` in Frontend tab.

### Manual

1. Download `big-slider-card.js` file from the [latest-release].
2. Put `big-slider-card.js` file into your `config/www` folder.
3. Go to _Configuration_ → _Lovelace Dashboards_ → _Resources_ → Click Plus button → Set _Url_ as `/local/big-slider-card.js` → Set _Resource type_ as `JavaScript Module`.
4. Add `custom:big-slider-card` to Lovelace UI as any other card (using either editor or YAML configuration).

## Configuration
### Sample Configuration
```yaml
type: custom:big-slider-card
entity: light.wled_lamp
transition: 0.3
```
### Options

| Name              | Type   | Requirement  | Description                                 | Default             |
| ----------------- | ------ | ------------ | ------------------------------------------- | ------------------- |
| type              | string | **Required** | `custom:big-slider-card`                    |                     |
| name              | string | **Optional** | Name to show on card                        | entity name         |
| entity            | string | **Required** | Home Assistant entity ID.                   | `none`              |
| attribute         | string | **Optional** | Attribute to control                        | `brightness`        |
| transition        | number | **Optional** | Transition time (seonds)                    | not used if unset   |
| hold_time         | number | **Optional** | Hold gesture time (ms)                      | `600`               |
| settle_time       | number | **Optional** | Ignore updates after changig the value (ms) | `3000`              |
| tap_action        | object | **Optional** | Action to take on tap                       | `action: more-info` |
| hold_action       | object | **Optional** | Action to take on hold                      | `none`              |
| double_tap_action | object | **Optional** | Action to take on double tap                | `none`              |


<!-- References -->
[hacs]: https://hacs.xyz
[preview]: https://raw.githubusercontent.com/nicufarmache/lovelace-big-slider-card/preview.png
[latest-release]: https://github.com/nicufarmache/lovelace-big-slider-card/releases/latest
[releases-shield]: https://img.shields.io/github/release/custom-cards/big-slider-card.svg?style=for-the-badge
[releases]: https://github.com/nicufarmache/lovelace-big-slider-card/releases
[icon-minimal]: https://raw.githubusercontent.com/nicufarmache/lovelace-big-slider-card/main/assets/grid-full-width.png