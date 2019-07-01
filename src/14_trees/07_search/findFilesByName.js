import path from 'path';

export default (root, substring) => {
  const iter = (node, currentPath, acc) => {
    if (node.type === 'file') {
      return node.name.includes(substring) ? acc.concat(path.join(...currentPath)) : acc;
    }

    return node.children.reduce((cAcc, nn) => iter(nn, currentPath.concat(nn.name), cAcc), acc);
  };
  return iter(root, ['/'], []);
};
