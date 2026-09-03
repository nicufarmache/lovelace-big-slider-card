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

## Workflow for Testing Code Changes

1. Edit code in `src/`.
2. Run `./ha-docker/start.sh` (or `npm run build && cp dist/big-slider-card.js ha-docker/config/www/big-slider-card.js`).
3. In your browser on Home Assistant, do a hard refresh (**Cmd+Shift+R** or **Ctrl+Shift+R**).
