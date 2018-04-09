#!/usr/bin/env bash

buildImage(){
    SERVICE_PATH=$1
    SERVICE_NAME=`basename $SERVICE_PATH`
    SERVICE_VERSION=$2
    IMAGE_NAME=$DOCKER_REGISTRY_HOST/ai/sad4-$SERVICE_NAME:$SERVICE_VERSION
    IMAGE_LATEST=$DOCKER_REGISTRY_HOST/ai/sad4-$SERVICE_NAME:latest

    echo  $IMAGE_NAME
    if docker build -t $IMAGE_NAME $SERVICE_PATH
    then
        docker push $IMAGE_NAME
        docker tag $IMAGE_NAME $IMAGE_LATEST
        docker push $IMAGE_LATEST
    fi
}

echo $DOCKER_REGISTRY_PASSWORD | docker login $DOCKER_REGISTRY_HOST -u $DOCKER_REGISTRY_USERNAME --password-stdin

projectCommit=`git log -n 1 | head -n 1  | sed -e 's/^commit //' | head -c 8`

for dir in $(pwd)/src/*
do
    if test -d $dir
    then
        for subDir in $dir/*
        do
            if test -d $subDir
            then
                buildImage $subDir $projectCommit
            fi
        done
    fi
done
