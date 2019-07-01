import { reduce } from 'hexlet-immutable-fs-trees';

// BEGIN (write your solution here)
const countFilesSize = dir => reduce((acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), dir, 0);
export default tree => tree.children
  .map(n => [n.name, countFilesSize(n)])
  .sort((a, b) => (a[1] < b[1] ? 1 : -1));
// END
