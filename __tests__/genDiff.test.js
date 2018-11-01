import fs from 'fs';
import genDiff from '../src';

test('difference two JSON files format def', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.json`;
  const pathSecondConfig = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two yaml files format def', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.yml`;
  const pathSecondConfig = `${dir}/after.yml`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two ini files format def', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.ini`;
  const pathSecondConfig = `${dir}/after.ini`;
  const result = fs.readFileSync(`${dir}/resultDefaultFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig);
  expect(actual).toBe(result);
});

test('difference two ini files format plain', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.ini`;
  const pathSecondConfig = `${dir}/after.ini`;
  const result = fs.readFileSync(`${dir}/resultPlainFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig, 'plain');
  expect(actual).toBe(result);
});

test('difference two json files format plain', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.json`;
  const pathSecondConfig = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/resultPlainFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig, 'plain');
  expect(actual).toBe(result);
});

test('difference two yaml files format plain', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.yml`;
  const pathSecondConfig = `${dir}/after.yml`;
  const result = fs.readFileSync(`${dir}/resultPlainFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig, 'plain');
  expect(actual).toBe(result);
});

test('difference two Json files format JSON', () => {
  const dir = './__tests__/__fixtures__';
  const pathFirstConfig = `${dir}/before.json`;
  const pathSecondConfig = `${dir}/after.json`;
  const result = fs.readFileSync(`${dir}/resultJsonFormat`).toString();

  const actual = genDiff(pathFirstConfig, pathSecondConfig, 'JSON');
  expect(actual).toBe(result);
});
