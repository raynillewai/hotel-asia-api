#!/bin/sh
############
VERSION=1.1
############

echo ${VERSION}
npm run build --verbose
docker build -t hotel-asia:${VERSION} .
docker tag hotel-asia:${VERSION} raynillewai/hotel-asia:${VERSION}
docker push hotel-asia:${VERSION}
