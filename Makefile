
install:
	npm install
start:
	npx babel-node -- src/bin/gendiff.js -h
publish:
	npm run prepublishOnly
lint:
	npx eslint .	
test:
	npm test
fixLint:
	npx eslint --fix .

.PHONY: test
