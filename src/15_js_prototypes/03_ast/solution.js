// import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

const buildAttributes = attributes => Object.keys(attributes).reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');

// BEGIN (write your solution here)
export const parse = (data) => {
  if (data[0] instanceof Array) {
    return { type: 'tagsList', body: data.map(parse) };
  }
  const name = data[0];
  let body;
  let options = {};
  let type = 'tag';
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
  const resultBody = body instanceof Array ? parse(body) : body;

  if (singleTagsList.has(name)) {
    type = 'singleTag';
  }

  return {
    type, name, body: resultBody, options,
  };
};

export const render = (astData) => {
  switch (astData.type) {
    case 'tag': {
      const attributes = buildAttributes(astData.options);
      return `<${astData.name}${attributes}>${render(astData.body)}</${astData.name}>`;
    }
    case 'tagsList':
      return `${astData.body.map(render).join('')}`;
    case 'singleTag': {
      const attributes = buildAttributes(astData.options);
      return `<${astData.name}${attributes}>`;
    }
    default:
      return astData;
  }
};
// END
