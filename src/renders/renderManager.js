import renderDefault from './renderDefault';

const manager = {
  default: renderDefault,
};

export default (ast, format = 'default') => manager[format](ast);
