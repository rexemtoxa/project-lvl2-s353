import renderDefault from './renderDefault';
import renderPlain from './renderPlain';

const manager = {
  default: renderDefault,
  plain: renderPlain,
};

export default (ast, format = 'default') => manager[format](ast);
