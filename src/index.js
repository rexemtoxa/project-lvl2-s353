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

  const changeData = key => `+ ${key}: ${obj2[key]}
  - ${key}: ${obj1[key]}`;

  const removeData = key => `- ${key}: ${obj1[key]}`;

  const addDate = key => `+ ${key}: ${obj2[key]}`;

  const findDif = (key) => {
    const keyIsShared = _.has(obj1, key) && _.has(obj2, key);
    if (keyIsShared) {
      return obj1[key] === obj2[key]
        ? `  ${key}: ${obj2[key]}` : changeData(key);
    }
    return _.has(obj2, key) ? addDate(key) : removeData(key);
  };

  const keys = _.union(_.keys(obj1), _.keys(obj2));
  return `{${keys.reduce((acc, elem) => `${acc}
  ${findDif(elem)}`, '')}
}`;
};

export default genDiff;
