# Home Assistant Test Environment

A minimal, self-contained Home Assistant Docker environment for testing `big-slider-card` under real-world conditions across multiple layouts and settings.

## Quick Start

1. Start Home Assistant:
   ```sh
   ./ha-docker/start.sh
   ```
2. Open in your browser:
   **http://localhost:8123**

   - **Username:** `admin`
   - **Password:** `password`

3. Stop Home Assistant:
   ```sh
   ./ha-docker/stop.sh
   ```

## Workflow for Testing Card Changes

When making changes to `src/`:
1. Build and sync the bundle:
   ```sh
   ./ha-docker/start.sh
   ```
   (or run `npm run build && cp dist/big-slider-card.js ha-docker/config/www/big-slider-card.js`)
2. In your browser on Home Assistant, do a hard refresh (**Cmd+Shift+R** or **Ctrl+Shift+R**) to reload the frontend resource.

## Permanent Test Dashboard Pages

The dashboard provides 6 dedicated test views accessible via top tabs or direct URLs:

1. **Sections - Bug #74 & Heights:** [`/lovelace/sections-heights`](http://localhost:8123/lovelace/sections-heights)
   - Default height (`56px`, 1 row)
   - Incremental heights: `80px` (2 rows), `100px` (Bug #74 - 2 rows), `120px` (2 rows), `150px` (3 rows)
   - User grid overrides: forced 2 rows, stretched 3 rows, full-width (12 columns)
2. **Sections - Vertical Cards:** [`/lovelace/sections-vertical`](http://localhost:8123/lovelace/sections-vertical)
   - Default vertical slider (4 rows)
   - Custom heights: `180px` (4 rows), `300px` (5 rows)
   - Multi-entity side-by-side vertical sliders (fan, media player)
3. **Supported Domains:** [`/lovelace/domains`](http://localhost:8123/lovelace/domains)
   - Interactive lights (brightness & colorized)
   - Climate entity (`climate.heatpump` with target temperature)
   - Fan entity (`fan.living_room_fan` with speed percentage)
   - Media Player (`media_player.living_room` with volume)
4. **Classic Masonry View:** [`/lovelace/masonry`](http://localhost:8123/lovelace/masonry)
   - Default cards and custom height cards (`80px`, `100px`, `140px`, vertical `200px`)
   - Verifies zero regressions in Home Assistant's classic view
5. **Stacks & Standard Grids:** [`/lovelace/stacks`](http://localhost:8123/lovelace/stacks)
   - Horizontal stack
   - Vertical stack with custom height
   - Native 2-column Grid card
6. **Styling & Theming:** [`/lovelace/styling`](http://localhost:8123/lovelace/styling)
   - Custom borders: color, dashed style, width, border radius
   - Custom card colors, backgrounds, and slider fill opacity
   - Custom icons and icon halo
