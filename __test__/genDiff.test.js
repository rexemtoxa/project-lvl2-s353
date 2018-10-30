import fs from 'fs';
import genDiff from '../src';

test('difference two JSON files', () => {
  const dir = './__test__/__fixtures__';
  const fileBefore = `${dir}/before.json`;
  const fileAfter = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(fileBefore, fileAfter);
  expect(actual).toBe(result);
});

test('difference two yml files', () => {
  const dir = './__test__/__fixtures__';
  const fileBefore = `${dir}/before.yml`;
  const fileAfter = `${dir}/after.yml`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(fileBefore, fileAfter);
  expect(actual).toBe(result);
});
