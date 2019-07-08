const buildAttributes = attributes => Object.keys(attributes).reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');

export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${buildAttributes(this.attributes)}>`;
  }
}
