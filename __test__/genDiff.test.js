import fs from 'fs';
import genDiff from '../src';

test('difference to be equal', () => {
  const dir = './__test__/__fixtures__';
  const fileBefore = `${dir}/before.json`;
  const fileAfter = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(fileBefore, fileAfter);
  expect(actual).toBe(result);
});
