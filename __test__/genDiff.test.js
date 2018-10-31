import fs from 'fs';
import genDiff from '../src';

test('difference two JSON files', () => {
  const dir = './__test__/__fixtures__';
  const firstConfig = `${dir}/before.json`;
  const secondConfig = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(firstConfig, secondConfig);
  expect(actual).toBe(result);
});

test('difference two yaml files', () => {
  const dir = './__test__/__fixtures__';
  const firstConfig = `${dir}/before.yml`;
  const secondConfig = `${dir}/after.yml`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(firstConfig, secondConfig);
  expect(actual).toBe(result);
});
/*
test('difference two ini files', () => {
  const dir = './__test__/__fixtures__';
  const firstConfig = `${dir}/before.ini`;
  const secondConfig = `${dir}/after.ini`;
  const result = fs.readFileSync(`${dir}/result`).toString();

  const actual = genDiff(firstConfig, secondConfig);
  expect(actual).toBe(result);
});
*/
