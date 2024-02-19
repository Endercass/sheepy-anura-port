#!/bin/bash

#combined build script
./download.sh
./patch.sh
rm -rf game/node_modules

cd game
7z a ../sheepy.app.zip .

echo "Build complete. You can now start a web server in the game/ directory to begin playing."