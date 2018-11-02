import renderSigns from './renderSigns';
import renderPlain from './renderPlain';

const manager = {
  signs: renderSigns,
  plain: renderPlain,
  JSON: JSON.stringify,
};

export default (ast, format = 'signs') => manager[format](ast);
