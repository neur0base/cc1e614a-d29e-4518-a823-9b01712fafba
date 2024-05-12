#! /bin/bash
baseDir=$1
AppID=$2
cd ${baseDir}
yes | npx react-native@latest init ${AppID}