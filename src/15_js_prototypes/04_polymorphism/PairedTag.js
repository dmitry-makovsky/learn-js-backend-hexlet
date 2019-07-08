const buildAttributes = attributes => Object.keys(attributes).reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');

export default class {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0
      ? this.children.map(child => child.toString()).join('') : this.body;
    return `<${this.name}${buildAttributes(this.attributes)}>${value}</${this.name}>`;
  }
}
