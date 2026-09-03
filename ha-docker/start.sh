#!/usr/bin/env bash
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR/.."

echo "==> Building big-slider-card bundle..."
npm run build

echo "==> Copying bundle and cache busters to HA www directory..."
mkdir -p ha-docker/config/www
cp dist/big-slider-card.js ha-docker/config/www/big-slider-card.js

# Ensure client-side cache buster is deployed
cat << 'EOF' > ha-docker/config/www/cache-buster.js
// Docker Test Suite: Unregister any lingering service workers and clear cache storage
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister().catch(() => {});
    }
  });
}
if ('caches' in window) {
  caches.keys().then((names) => {
    for (const name of names) {
      caches.delete(name).catch(() => {});
    }
  });
}
EOF

CACHE_BUST=$(date +%s)
echo "==> Applying cache-busting tag (v=${CACHE_BUST})..."

node -e "
const fs = require('fs');
const confPath = 'ha-docker/config/configuration.yaml';
let conf = fs.readFileSync(confPath, 'utf8');
conf = conf.replace(/\/local\/big-slider-card\.js(\?v=[^\n]*)?/, '/local/big-slider-card.js?v=${CACHE_BUST}');
fs.writeFileSync(confPath, conf);

const resPath = 'ha-docker/config/.storage/lovelace_resources';
if (fs.existsSync(resPath)) {
  const res = JSON.parse(fs.readFileSync(resPath, 'utf8'));
  if (res.data && Array.isArray(res.data.items)) {
    for (const item of res.data.items) {
      if (item.url && item.url.includes('big-slider-card.js')) {
        item.url = '/local/big-slider-card.js?v=${CACHE_BUST}';
      }
    }
    fs.writeFileSync(resPath, JSON.stringify(res, null, 2) + '\n');
  }
}
"

# Check if container is already running; if so, restart it so new configuration is picked up
if docker compose -f ha-docker/docker-compose.yml ps --status running 2>/dev/null | grep -q ha-test; then
  echo "==> Restarting Home Assistant container to load new bundle and cache-busting tag..."
  docker compose -f ha-docker/docker-compose.yml restart
else
  echo "==> Starting Home Assistant container..."
  docker compose -f ha-docker/docker-compose.yml up -d
fi

# Neutralize container service worker caching for test environment
docker exec ha-test sh -c "find /usr/local/lib -name 'sw-modern.js' -exec cp /config/www/cache-buster.js {} \;" 2>/dev/null || true

echo "==> Home Assistant is ready!"
echo "    URL: http://localhost:8123"
echo "    Active bundle URL: /local/big-slider-card.js?v=${CACHE_BUST}"
echo "    Check logs with: docker compose -f ha-docker/docker-compose.yml logs -f"
