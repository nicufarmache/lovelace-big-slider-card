#!/usr/bin/env bash
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
docker compose -f "$DIR/docker-compose.yml" down
echo "==> Home Assistant container stopped."
