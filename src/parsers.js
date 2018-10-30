import yaml from 'js-yaml';
import _ from 'lodash';
import fs from 'fs';

const getTypeFile = path => _.last(path.split('.'));
const parseJson = file => JSON.parse(file);
const parseYaml = file => yaml.safeLoad(file);
const fileToString = file => fs.readFileSync(`${file}`).toString();

const parseManager = {
  json: file => parseJson(file),
  yml: file => parseYaml(file),
};

export default (path) => {
  const type = getTypeFile(path);
  const file = fileToString(path);
  return parseManager[type](file);
};
