const buildAst = (data) => {
  if (data[0] instanceof Array) {
    return { type: 'tagsList', body: data.map(buildAst) };
  }
  const name = data[0];
  let body;
  let options = {};
  if (data.length === 3) {
    [, options, body] = data;
  } else if (data.length === 2) {
    if (data[1] instanceof Array || (typeof data[1] === 'string')) {
      [, body] = data;
    } else {
      body = '';
      [, options] = data;
    }
  } else {
    body = '';
  }
  const resultBody = body instanceof Array ? buildAst(body) : body;

  return {
    type: 'tag', name, body: resultBody, options,
  };
};

const buildHtml = (astData) => {
  switch (astData.type) {
    case 'tag': {
      const attributes = Object.keys(astData.options).reduce((acc, key) => `${acc} ${key}="${astData.options[key]}"`, '');
      return `<${astData.name}${attributes}>${buildHtml(astData.body)}</${astData.name}>`;
    }
    case 'tagsList':
      return `${astData.body.map(buildHtml).join('')}`;
    default:
      return astData;
  }
};


export default (dataTree) => {
  const ast = buildAst(dataTree);
  return buildHtml(ast);
};
