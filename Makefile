
install:
	npm install
start:
	npx babel-node -- src/bin/gendiff.js
publish:
	npm run prepublishOnly
lint:
	npx eslint .	
test:
	npm test

.PHONY: test
