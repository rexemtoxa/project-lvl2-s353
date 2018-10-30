import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parseData from './parsers';

const fileToString = pathFile => fs.readFileSync(`${pathFile}`).toString();
const getType = pathFile => path.extname(pathFile);
const getData = pathFile => parseData(fileToString(pathFile), getType(pathFile));

const isSharedKey = (key, obj1, obj2) => _.has(obj1, key) && _.has(obj2, key);
const hasSameValue = (key, obj1, obj2) => obj1[key] === obj2[key];
const isNewKey = (key, obj1, obj2) => _.has(obj2, key) && !_.has(obj1, key);

const propertyActions = [
  {
    check: (key, obj1, obj2) => isSharedKey(key, obj1, obj2) && hasSameValue(key, obj1, obj2),
    process: (key, obj1, obj2) => `  ${key}: ${obj2[key]}`,
  },
  {
    check: (key, obj1, obj2) => isSharedKey(key, obj1, obj2) && !hasSameValue(key, obj1, obj2),
    process: (key, obj1, obj2) => `+ ${key}: ${obj2[key]}\n  - ${key}: ${obj1[key]}`,
  },
  {
    check: (key, obj1, obj2) => isNewKey(key, obj1, obj2),
    process: (key, obj1, obj2) => `+ ${key}: ${obj2[key]}`,
  },
  {
    check: (key, obj1, obj2) => !isNewKey(key, obj1, obj2),
    process: (key, obj) => `- ${key}: ${[obj[key]]}`,
  },
];
const getPropertyAction = (key, obj1, obj2) => (
  propertyActions.find(({ check }) => check(key, obj1, obj2)));

const genDiff = (firstConfig, secondConfig) => {
  const obj1 = getData(firstConfig);
  const obj2 = getData(secondConfig);

  const keys = _.union(_.keys(obj1), _.keys(obj2));
  return `{${keys.reduce((acc, elem) => {
    const { process } = getPropertyAction(elem, obj1, obj2);
    return `${acc}\n  ${process(elem, obj1, obj2)}`;
  }, '')}\n}`;
};

export default genDiff;
