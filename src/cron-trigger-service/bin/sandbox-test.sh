SCRIPT_PATH=$0
TEST_ARGS=${@:1:99}

APP_PATH=$(cd $(dirname $SCRIPT_PATH); cd ..; pwd)

IMAGE="daocloud.io/tap4fun/ai_sad4_sandbox"

docker run -it --rm \
-v "${APP_PATH}:/app" \
-w /app \
-e NATS_URL="nats://localhost:4222" \
${IMAGE} \
/bin/bash -c " \
bash /root/scripts/start-nats.sh; \
jest --runInBand ${TEST_ARGS}; \
"