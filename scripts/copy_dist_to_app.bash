#!/bin/bash

yarn build
rsync -av dist/* ../epop-v2/epop-react-ui/src/rcomps/
rsync -av dist/* ../epop-v2/epop-app/src/rcomps/
rsync -av dist/* ../epop-v2/epop-manager/src/rcomps/