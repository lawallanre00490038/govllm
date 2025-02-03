#!/bin/sh

cat <<EOF > .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

lint-staged
EOF

chmod +x .husky/pre-commit