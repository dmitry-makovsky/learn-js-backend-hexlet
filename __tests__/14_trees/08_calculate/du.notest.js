/* eslint-disable no-undef */
import { mkdir, mkfile } from 'hexlet-immutable-fs-trees';
import du from '../../../src/14_trees/08_calculate/du';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

test('du', () => {
  expect(du(tree)).toEqual([
    ['etc', 10280],
    ['hosts', 3500],
    ['resolve', 1000],
  ]);

  expect(du(tree.children[0])).toEqual([
    ['consul', 9480],
    ['nginx', 800],
    ['apache', 0],
  ]);
});
