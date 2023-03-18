#!/usr/bin/env sh

cd "$(dirname -- "$0")/../../$2"

unset GIT_INDEX_FILE;

if [[ $1 == "pre-commit" ]]; then
  change_file=`git status -s`
  if [[ $change_file != "" ]]; then
    echo "$2 还有未提交文件，请先提交 $2 ！！！"
    exit 1;
  fi
fi


if [[ $1 == "pre-push" ]]; then
  remote_branch=`git rev-parse --abbrev-ref --symbolic-full-name @{u}`
  no_push=`git log $remote_branch..HEAD`
  if [[ $no_push != "" ]]; then
    echo "$2 还未 push 到远端，请先 push $2 到远端 ！！！"
    exit 1;
  fi
fi
