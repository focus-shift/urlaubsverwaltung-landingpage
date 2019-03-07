#!/bin/bash

echo "=> start content server"
node ./server/content-server.js > /dev/null &
CONTENT_SERVER_PID=$!

echo "=> build static webpage"
npm run clean
npm run nextjs:build
npm run nextjs:export

echo "=> kill content server (pid=$CONTENT_SERVER_PID)"
kill $CONTENT_SERVER_PID

echo "=> finished"
