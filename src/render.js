import _ from 'lodash';

const tab = (depth = 0) => '  '.repeat(depth);

const objToString = (obj, depth = 0) => `{\n${tab(depth + 3)}${_.keys(obj).map(key => `${key}: ${obj[key]}`).join('\n')}
${tab(depth + 1)}}`;

const stringify = (value, depth) => (_.isObject(value) ? objToString(value, depth) : value);
const addEl = (node, depth) => `${tab(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`;
const rmEl = (node, depth) => `${tab(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}`;
const chEl = (node, depth) => `${rmEl(node, depth)}\n${addEl(node, depth)}`;

const render = (ast, level = 1) => {
  const propertyActions = {
    parent: (node, depth) => `  ${tab(depth)}${node.key}: ${render(node.children, depth + 2)}`,
    unchanged: (node, depth) => `  ${tab(depth)}${node.key}: ${stringify(node.value, depth)}`,
    changed: (node, depth) => chEl(node, depth),
    added: (node, depth) => addEl(node, depth),
    removed: (node, depth) => rmEl(node, depth),
  };
  return `{\n${ast.map(obj => propertyActions[obj.type](obj, level)).join('\n')}\n${tab(level - 1)}}`;
};

export default render;
