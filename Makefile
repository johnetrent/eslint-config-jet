BABEL_NODE := ./node_modules/.bin/babel-node
TEST_CMD := ./node_modules/.bin/ava --verbose
TEST_PATTERN := **/__tests__/**/*test*.js

test:
	${BABEL_NODE} ${TEST_CMD} ${TEST_PATTERN}

.PHONY: test
