import yaml from 'js-yaml';
import ini from 'ini';

const parseManager = {
  json: data => JSON.parse(data),
  yml: data => yaml.safeLoad(data),
  ini: data =>ini.decode(data)
};

export default (data, type) => parseManager[type](data);
