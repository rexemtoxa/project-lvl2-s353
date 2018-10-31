import fs from 'fs';
import path from 'path';
import parseData from './parsers';
import genAst from './genAst';
import render from './render';

const fileToString = pathFile => fs.readFileSync(`${pathFile}`).toString();
const getType = pathFile => path.extname(pathFile);
const getData = pathFile => parseData(fileToString(pathFile), getType(pathFile));


const genDiff = (firstConfig, secondConfig) => {
  const obj1 = getData(firstConfig);
  const obj2 = getData(secondConfig);

  return render(genAst(obj1, obj2));
};

export default genDiff;
