SCRIPT_PATH=$0
TEST_ARGS=${@:1:99}

APP_PATH=$(cd $(dirname $SCRIPT_PATH); cd ..; pwd)

IMAGE="daocloud.io/tap4fun/ai_sad4_sandbox"

docker run -it --rm \
-v "${APP_PATH}:/app" \
-w /app \
${IMAGE} \
/bin/bash -c " \
jest ${TEST_ARGS}; \
"