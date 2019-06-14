#!/usr/bin/env bash

# Please Use Google Shell Style: https://google.github.io/styleguide/shell.xml

# ---- Start unofficial bash strict mode boilerplate
# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -o errexit  # always exit on error
set -o errtrace # trap errors in functions as well
set -o pipefail # don't ignore exit codes when piping output
set -o posix    # more strict failures in subshells
# set -x          # enable debugging

IFS=$'\n\t'
# ---- End unofficial bash strict mode boilerplate

cd "$(dirname "${BASH_SOURCE[0]}")/.."
export PATH="${PWD}/node_modules/.bin:${PATH}"
declare -a args=(
  --ignore-scripts
  --no-lockfile
  --no-progress
  --non-interactive
  --silent
)
yarn "${args[@]}"
(cd package && yarn "${args[@]}" && yarn build)
yarn styleguide:build
