# Big Slider Card

Big slider card inspired by the google home app cards

## Options

| Name              | Type   | Requirement  | Description                                 | Default             |
| ----------------- | ------ | ------------ | ------------------------------------------- | ------------------- |
| type              | string | **Required** | `custom:big-slider-card`                    |                     |
| name              | string | **Optional** | Card name                                   | entity name         |
| entity            | string | **Optional** | Home Assistant entity ID.                   | `none`              |
| attribute         | string | **Optional** | Attribute to control                        | `brightness`        |
| transition        | number | **Optional** | Transition time (seonds)                    | not used if unset   |
| hold_time         | number | **Optional** | Hold gesture time (ms)                      | `600`               |
| settle_time       | number | **Optional** | Ignore updates after changig the value (ms) | `3000`              |
| tap_action        | object | **Optional** | Action to take on tap                       | `action: more-info` |
| hold_action       | object | **Optional** | Action to take on hold                      | `none`              |
| double_tap_action | object | **Optional** | Action to take on double tap                | `none`              |

## Action Options

| Name            | Type   | Requirement  | Description                                                                                                                            | Default     |
| --------------- | ------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| action          | string | **Required** | Action to perform (more-info, toggle, call-service, navigate url, none)                                                                | `more-info` |
| navigation_path | string | **Optional** | Path to navigate to (e.g. /lovelace/0/) when action defined as navigate                                                                | `none`      |
| url             | string | **Optional** | URL to open on click when action is url. The URL will open in a new tab                                                                | `none`      |
| service         | string | **Optional** | Service to call (e.g. media_player.media_play_pause) when action defined as call-service                                               | `none`      |
| service_data    | object | **Optional** | Service data to include (e.g. entity_id: media_player.bedroom) when action defined as call-service                                     | `none`      |
| haptic          | string | **Optional** | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta) _success, warning, failure, light, medium, heavy, selection_ | `none`      |
| repeat          | number | **Optional** | How often to repeat the `hold_action` in milliseconds.                                                                                 | `non`       |
