import renderSings from './renderSigns';
import renderPlain from './renderPlain';

const manager = {
  signs: renderSings,
  plain: renderPlain,
  JSON: JSON.stringify,
};

export default (ast, format = 'signs') => manager[format](ast);
