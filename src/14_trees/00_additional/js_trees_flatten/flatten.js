export const flattern = array => array.reduce((acc, item) => {
  if (Array.isArray(item)) {
    return [...acc, ...flattern(item)];
  }
  return [...acc, item];
}, []);

export default flattern;
