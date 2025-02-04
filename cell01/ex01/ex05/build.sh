[ $# -eq 0 ] && echo "No argument supplied" && exit 1
for arg in "$@"; do mkdir "ex$arg"; done

