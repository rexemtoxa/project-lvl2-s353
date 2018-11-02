import renderPlusMinus from './renderPlusMinus';
import renderPlain from './renderPlain';

const manager = {
  signs: renderPlusMinus,
  plain: renderPlain,
  JSON: JSON.stringify,
};

export default (ast, format = 'signs') => manager[format](ast);
