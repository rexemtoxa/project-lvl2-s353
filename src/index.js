import _ from 'lodash';
import fs from 'fs';
import parseData from './parsers';

const fileToString = path => fs.readFileSync(`${path}`).toString();
const getType = path => _.last(path.split('.'));
const getData = path => parseData(fileToString(path), getType(path));

const genDiff = (firstConfig, secondConfig) => {
  const obj1 = getData(firstConfig);
  const obj2 = getData(secondConfig);

  const changeData = key => `+ ${key}: ${obj2[key]}
  - ${key}: ${obj1[key]}`;

  const removeData = key => `- ${key}: ${obj1[key]}`;

  const addDate = key => `+ ${key}: ${obj2[key]}`;

  const findDif = (key) => {
    const sharedKey = _.has(obj1, key) && _.has(obj2, key);
    if (sharedKey) {
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
