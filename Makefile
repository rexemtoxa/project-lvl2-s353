
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
getDif:
	npx babel-node -- src/bin/gendiff.js /home/anton/Documents/secondProject/__test__/__fixtures__/before.json /home/anton/Documents/secondProject/__test__/__fixtures__/after.json
.PHONY: test
