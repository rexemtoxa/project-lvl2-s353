import fs from 'fs';
import genDiff from '../src';

test('difference two JSON files', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/beforeDefaultFormat.json`;
  const pathSecondConfig = `${dir}/afterDefaultFormat.json`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two yaml files', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/beforeDefaultFormat.yml`;
  const pathSecondConfig = `${dir}/afterDefaultFormat.yml`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two ini files', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/beforeDefaultFormat.ini`;
  const pathSecondConfig = `${dir}/afterDefaultFormat.ini`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});
