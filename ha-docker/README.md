# Home Assistant Test Environment

A self-contained Home Assistant Docker environment for testing `big-slider-card` under real-world conditions with both **interactive UI editing** and **permanent YAML test suites**.

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

## Dashboards Available in the Sidebar

### 1. Overview / Interactive Sandbox (UI Editable)
- **URL:** [http://localhost:8123/lovelace](http://localhost:8123/lovelace)
- **Mode:** `storage` (full visual editing enabled)
- **How to edit:**
  1. Click the **three dots** in the top-right corner $\rightarrow$ **Edit Dashboard**.
  2. Click the **pencil icon** on any card to edit its visual schema form or switch to the **Layout** tab to test row and column sliders.
  3. Click **+ Add Card** to add new `custom:big-slider-card` instances directly from the visual card picker.
- **Pre-populated Views:**
  - **Sections Playground:** Editable sample cards (default, `height: 100`, `height: 150`, and vertical).
  - **Masonry Playground:** Editable masonry cards.

### 2. Test Suite (YAML)
- **URL:** [http://localhost:8123/test-suite](http://localhost:8123/test-suite)
- **Mode:** `yaml` (permanent automated test fixtures from `ui-lovelace.yaml`)
- **Dedicated Test Views:**
  - **Sections - Bug #74 & Heights:** `56px`, `80px`, `100px`, `120px`, `150px`, plus forced 2-row and stretched 3-row grids.
  - **Sections - Vertical Sliders:** Default 4 rows, `180px`, `300px`, and side-by-side sliders.
  - **Supported Domains:** Lights (colorize/halo), Climate, Fans, Media Players.
  - **Classic Masonry View:** Verification for standard views without regressions.
  - **Stacks & Standard Grids:** Horizontal stacks, vertical stacks, and grid cards.
  - **Styling & Theming:** Custom borders, colors, halos, icons, and opacities.

### 3. Config Matrix (YAML)
- **URL:** [http://localhost:8123/config-matrix](http://localhost:8123/config-matrix)
- **Mode:** `yaml` (exhaustive option testing from `ui-config-matrix.yaml`)
- **Dedicated Test Views:**
  - **Text & Typography:** Default, percentage, bold text, custom names, sizes (11px, 16px, 22px), custom text colors.
  - **Icons & Halos:** Icon overrides, halo states, none, emerald/rose active/off colors, constant icon color, icon sizing (16px to 34px) & box sizing (30px to 56px).
  - **Colors & Opacity:** Violet slider color, slate background, alternative slider color, dynamic light colorize, opacities (0.15, 0.5, 1.0).
  - **Borders & Geometry:** Radius (pill 28px, square 0), solid, dashed, dotted, double styles, heights (40px, 80px, 120px), fixed width (320px), `no_scale`.
  - **Timing & Actions:** Immediate update, `no_transition_animation`, explicit 0 transition, 2s transition, custom settle time (1000ms), min slide delay (150ms), custom tap/hold actions (more-info/toggle/none), hold times (250ms, 1200ms).
  - **Ranges & Domains:** Constrained ranges (20-80), raw brightness (0-255), climate temperature, target temp low, light, fan, media player, cover.
  - **Horizontal Combos:** Cyberpunk glow, minimalist soft pill, brutalist square, warm dashed accent, snappy instant pro, colorize + halo + constant icon.
  - **Vertical Combos:** Default 4-row, compact 140px, tall 280px, vertical glow pill, multi-domain vertical combos (lights, fans, media players, climate).

## Workflow for Testing Code Changes

1. Edit code in `src/`.
2. Run `./ha-docker/start.sh`.
   - Automatically compiles the bundle with `npm run build`.
   - Copies it to `ha-docker/config/www/big-slider-card.js`.
   - Automatically generates a unique cache-busting tag (`?v=<timestamp>`) in `configuration.yaml` and Lovelace resources.
   - Restarts the Home Assistant container so the fresh bundle is loaded immediately.
3. Refresh your browser page normally—the cache-busting tag automatically bypasses disk cache!
