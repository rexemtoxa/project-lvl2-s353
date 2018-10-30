import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parseData from './parsers';

const fileToString = pathFile => fs.readFileSync(`${pathFile}`).toString();
const getType = pathFile => path.extname(pathFile);
const getData = pathFile => parseData(fileToString(pathFile), getType(pathFile));

const genDiff = (firstConfig, secondConfig) => {
  const obj1 = getData(firstConfig);
  const obj2 = getData(secondConfig);

  const isSharedKey = key => _.has(obj1, key) && _.has(obj2, key);
  const hasSameValue = key => obj1[key] === obj2[key];
  const isNewKey = key => _.has(obj2, key);

  const propertyActions = [
    {
      check: key => isSharedKey(key) && hasSameValue(key),
      process: key => `  ${key}: ${obj2[key]}`,
    },
    {
      check: key => isSharedKey(key) && !hasSameValue(key),
      process: key => `+ ${key}: ${obj2[key]}\n  - ${key}: ${obj1[key]}`,
    },
    {
      check: key => isNewKey(key),
      process: key => `+ ${key}: ${obj2[key]}`,
    },
    {
      check: key => !isNewKey(key),
      process: key => `- ${key}: ${[obj1[key]]}`,
    },
  ];
  const getPropertyAction = key => propertyActions.find(({ check }) => check(key));

  const keys = _.union(_.keys(obj1), _.keys(obj2));
  return `{${keys.reduce((acc, elem) => {
    const { process } = getPropertyAction(elem);
    return `${acc}\n  ${process(elem)}`;
  }, '')}\n}`;
};

export default genDiff;
