import fs from 'fs';
import genDiff from '../src';

test('difference two JSON files', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.json`;
  const pathSecondConfig = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two yaml files', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.yml`;
  const pathSecondConfig = `${dir}/after.yml`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two ini files', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.ini`;
  const pathSecondConfig = `${dir}/after.ini`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});
