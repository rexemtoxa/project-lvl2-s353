
install:
	npm install
start:
	npx babel-node -- src/bin/gendiff.js ./__tests__/__fixtures__/before.ini ./__tests__/__fixtures__/after.ini
publish:
	npm run prepublishOnly
lint:
	npx eslint .	
test:
	npm test
fixLint:
	npx eslint --fix .

buld:
	npm run buld

.PHONY: test
