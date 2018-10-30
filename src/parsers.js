import yaml from 'js-yaml';

const parseManager = {
  json: data => JSON.parse(data),
  yml: data => yaml.safeLoad(data),
};

export default (data, type) => parseManager[type](data);
