import yaml from 'js-yaml';
import ini from 'ini';

const parseManager = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.decode,
};

export default (data, type) => parseManager[type](data);
