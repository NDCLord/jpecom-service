#!/bin/bash
set -e
cd /opt/jpecom-service

echo "Pulling latest code..."
git pull origin main

echo "Rebuilding..."
docker compose down app 2>/dev/null || true
docker compose build app --no-cache
docker compose up -d

sleep 10

if docker ps | grep -q "jpecom-service.*Up"; then
  echo "Deploy successful!"
  docker logs jpecom-service --tail 5
else
  echo "Deploy failed!"
  docker logs jpecom-service --tail 20
  exit 1
fi
