import _ from 'lodash';

const tab = (depth = 0) => '  '.repeat(depth);

const objToString = (obj, depth = 0) => `{\n${tab(depth + 3)}${_.keys(obj).map(key => `${key}: ${obj[key]}`).join('\n')}
${tab(depth + 1)}}`;

const stringify = (value, depth) => (_.isObject(value) ? objToString(value, depth) : value);
const toStringAction = (key, value, depth, sign) => `${tab(depth)}${sign} ${key}: ${stringify(value, depth)}`;

const render = (ast, level = 1) => {
  const propertyActions = {
    parent: (node, depth) => `  ${tab(depth)}${node.key}: ${render(node.children, depth + 2)}`,
    unchanged: (node, depth) => `  ${tab(depth)}${node.key}: ${stringify(node.value, depth)}`,
    added: (node, depth) => toStringAction(node.key, node.value, depth, '+'),
    removed: (node, depth) => toStringAction(node.key, node.value, depth, '-'),
    changed: (node, depth) => {
      const before = toStringAction(node.key, node.oldValue, depth, '-');
      const after = toStringAction(node.key, node.newValue, depth, '+');
      return [before, after];
    },
  };
  return `{\n${_.flatten(ast.map(obj => propertyActions[obj.type](obj, level))).join('\n')}
${tab(level - 1)}}`;
};

export default render;
