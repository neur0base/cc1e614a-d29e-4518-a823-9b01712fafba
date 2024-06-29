#!/bin/bash

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." &> /dev/null && pwd)"
node ../node_modules/@neur0base/app-sdk-next-router/lib/commonjs/bin/genAppDir.js $REPO_DIR
