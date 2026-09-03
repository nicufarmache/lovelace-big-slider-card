# Home Assistant Test Environment

A minimal, self-contained Home Assistant Docker environment for testing `big-slider-card` under real-world conditions (including Sections view and classic Masonry view).

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

## Dashboard Setup

The environment includes:
- **Sections View (`/lovelace/0`)**:
  - Reproducing Issue #74:
    - Default height card (1 row)
    - `height: 100` card in 1 row (demonstrates overflow past row boundary)
    - `height: 100` card in 2 rows (`rows: 2`, demonstrates underfill / misalignment)
  - Other entities: Ceiling lights (vertical card), Fan, Media player
- **Masonry View (`/lovelace/1`)**:
  - Shows how custom height behaves in the legacy masonry view for comparison
- **Entities**:
  - `light.couch` (Interactive template light with brightness control)
  - Home Assistant Demo integration entities (`light.ceiling_lights`, `fan.living_room_fan`, etc.)
