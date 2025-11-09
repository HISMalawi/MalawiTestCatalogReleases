# MalawiTestCatalogReleases
Malawi Test Catalog is a web application for efficient management and browsing of malawi laboratory tests  

## Requirements
1. node: 18
2. pm2

## Installation
1. `npm i pm2 -g`
2. `pm2 start ecosystem.config.js`

## Backend
1. The app is configured to listen on NLIMS backend port 3010

## PM2 Start Port
1. The app will start on port 8007 as configured in the ecosystem.config.js
