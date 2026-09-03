#!/usr/bin/env bash
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR/.."

echo "==> Building big-slider-card bundle..."
npm run build

echo "==> Copying bundle to HA www directory..."
mkdir -p ha-docker/config/www
cp dist/big-slider-card.js ha-docker/config/www/big-slider-card.js

echo "==> Starting Home Assistant container..."
docker compose -f ha-docker/docker-compose.yml up -d

echo "==> Home Assistant is starting!"
echo "    URL: http://localhost:8123"
echo "    Initial startup may take 30-60 seconds on first run."
echo "    Check logs with: docker compose -f ha-docker/docker-compose.yml logs -f"
