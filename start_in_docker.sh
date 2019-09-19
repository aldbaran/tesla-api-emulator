#!/bin/bash

docker run -it --rm --name node -p 8000:3000 -v "$PWD":/usr/src/app -w /usr/src/app node:current-alpine npm run start
