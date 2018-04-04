SCRIPT_PATH=$0
TEST_ARGS=${@:1:99}

APP_PATH=$(cd $(dirname $SCRIPT_PATH); cd ..; pwd)

IMAGE="daocloud.io/tap4fun/ai_sad4_sandbox"

docker run -it --rm \
-v "${APP_PATH}:/app" \
-w /app \
-e NATS_URL="nats://localhost:4222" \
-e FACEBOOK_ACCESS_TOKEN=${FACEBOOK_ACCESS_TOKEN} \
-e FACEBOOK_AD_ACCOUNT_ID=${FACEBOOK_AD_ACCOUNT_ID} \
-e MONGO_URL="mongodb://localhost:27017" \
-e MONGO_DB="test" \
-e MONGO_COLL_FATHER="fathers" \
-e MONGO_COLL_MOTHER="mothers" \
-e MONGO_COLL_SITTER="sitters" \
-e MONGO_COLL_AD="ads" \
${IMAGE} \
/bin/bash -c " \
bash /root/scripts/start-nats.sh; \
bash /root/scripts/start-mongodb.sh; \
jest --runInBand ${TEST_ARGS}; \
"