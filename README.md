# project-lvl2-s353

[![Build Status](https://travis-ci.com/rexemtoxa/project-lvl2-s353.svg?branch=master)](https://travis-ci.com/rexemtoxa/project-lvl2-s353)
[![Maintainability](https://api.codeclimate.com/v1/badges/5dc770f1a9a86035a9ca/maintainability)](https://codeclimate.com/github/rexemtoxa/project-lvl2-s353/maintainability)

This is study project to learn testing framework JEST. gendiff - is a CLI utility just like diff on the LINUX.
It has 3 different format output 'signs', 'plain', 'JSON'.

### Install
clone this repo

bash
```
$ git clone git@github.com:rexemtoxa/project-lvl2-s353.git
$ cd project-lvl2-s353
$ make install
$ make build
```
This package is also available in npm repository.

### Run
* usage app

bash
```
$ npx babel-node -- src/bin/gendiff.js <path to first file> <path to second file> -f <format output>
$ npx babel-node -- src/bin/gendiff.js -h
```
* test

bash
```
make test
```