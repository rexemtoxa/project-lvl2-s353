import renderSigns from './renderSigns';
import renderPlain from './renderPlain';

const renders = {
  signs: renderSigns,
  plain: renderPlain,
  JSON: JSON.stringify,
};

export default (ast, format = 'signs') => renders[format](ast);
