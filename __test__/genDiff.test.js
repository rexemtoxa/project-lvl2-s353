import fs from 'fs';
import genDiff from '../src';

test('difference to be equal', () => {
  const dir = '/home/anton/Documents/secondProject/__test__/__fixtures__';
  const before = `${dir}/before.json`;
  const after = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(before, after);
  expect(actual).toBe(result);
});
