const func = (...args) => {
  const sum = args.reduce((acc, x) => x + acc, 0);
  const inner = (...rest) => func(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

export default func;
