#!/usr/bin/env sh

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if [ -s "$(dirname -- "$0")/_/env.sh" ]; then \. "$(dirname -- "$0")/_/env.sh"; fi

# This loads nvm.sh and sets the correct PATH before running hook
if command_exists nvm; then
  export NVM_DIR="$HOME/.nvm"
  if test -f "$NVM_DIR/nvm.sh"; then
      \. "$NVM_DIR/nvm.sh"
  fi

  cd "$(dirname -- "$0")/../"
  if test -f ".nvmrc"; then
      nvm use
  fi
fi

# issues https://github.com/okonet/lint-staged/issues/1164 and https://github.com/typicode/husky/issues/968#issuecomment-1184296264
if [ -t 2 ]; then
  if [ -f '/dev/console' ]; then
    exec >/dev/console 2>&1
  else
    exec >/dev/tty 2>&1
  fi
fi
