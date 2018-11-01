
install:
	npm install
start:
	npx babel-node -- src/bin/gendiff.js -f plain /home/anton/Documents/secondProject/__tests__/__fixtures__/before.ini /home/anton/Documents/secondProject/__tests__/__fixtures__/after.ini
publish:
	npm run prepublishOnly
lint:
	npx eslint .	
test:
	npm test
fixLint:
	npx eslint --fix .

.PHONY: test
