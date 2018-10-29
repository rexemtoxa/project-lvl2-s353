import _ from 'lodash';
import fs from 'fs';

export default (firstFile, secondFile) => {
  const fileToString = file => fs.readFileSync(`${file}`).toString();
  const before = JSON.parse(fileToString(firstFile));
  const after = JSON.parse(fileToString(secondFile));

  const changeData = data => `+ ${data}: ${after[data]}
  - ${data}: ${before[data]}`;

  const removeData = data => `- ${data}: ${before[data]}`;

  const addDate = data => `+ ${data}: ${after[data]}`;

  const findDif = (data) => {
    if (_.has(before, data) && _.has(after, data)) {
      return before[data] === after[data]
        ? `  ${data}: ${after[data]}` : changeData(data);
    }
    return _.has(after, data) ? addDate(data) : removeData(data);
  };

  const keys = _.union(_.keys(before), _.keys(after));
  return `{${keys.reduce((acc, elem) => `${acc}
  ${findDif(elem)}`, '')}
}`;
};
