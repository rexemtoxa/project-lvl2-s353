import _ from 'lodash';
import parseData from './parsers';

const genDiff = (firstFile, secondFile) => {
  const fileBefore = parseData(firstFile);
  const fileAfter = parseData(secondFile);

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
export default genDiff;
