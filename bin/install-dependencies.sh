#!/bin/sh

projectPath=`pwd`

for dir in $projectPath/src/*
do
    if test -d $dir
    then
        for subDir in $dir/*
        do
            if test -d $subDir
            then
                cd $subDir
                if [ -f package.json ]
                then
                    npm install
                fi
            fi
        done
    fi
done

cd $projectPath
