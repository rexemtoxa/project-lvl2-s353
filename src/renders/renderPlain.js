import _ from 'lodash';

const stringify = value => (_.isObject(value) ? '[complex value]' : value);

const render = (ast, nameParent = '') => {
  const propertyActions = {
    parent: node => `Section '${nameParent}${node.key}'\n${render(node.children, `${nameParent}${node.key}.`)}`,
    unchanged: node => `Property '${nameParent}${node.key}' wasn't changed`,
    added: node => `Property '${nameParent}${node.key}' was added with value: ${stringify(node.value)}`,
    removed: node => `Property '${nameParent}${node.key}' was removed`,
    changed: node => `Property '${nameParent}${node.key}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`,
  };
  return `${_.flatten(ast.map(obj => propertyActions[obj.type](obj))).join('\n')}`;
};

export default render;
