import _ from 'lodash';
import fs from 'fs';

export default (firstFile, secondFile) => {
  const fileToString = file => fs.readFileSync(`${file}`).toString();
  const fileBefore = JSON.parse(fileToString(firstFile));
  const fileAfter = JSON.parse(fileToString(secondFile));

  const changeData = data => `+ ${data}: ${fileAfter[data]}
  - ${data}: ${fileBefore[data]}`;

  const removeData = data => `- ${data}: ${fileBefore[data]}`;

  const addDate = data => `+ ${data}: ${fileAfter[data]}`;

  const findDif = (data) => {
    if (_.has(fileBefore, data) && _.has(fileAfter, data)) {
      return fileBefore[data] === fileAfter[data]
        ? `  ${data}: ${fileAfter[data]}` : changeData(data);
    }
    return _.has(fileAfter, data) ? addDate(data) : removeData(data);
  };

  const keys = _.union(_.keys(fileBefore), _.keys(fileAfter));
  return `{${keys.reduce((acc, elem) => `${acc}
  ${findDif(elem)}`, '')}
}`;
};
