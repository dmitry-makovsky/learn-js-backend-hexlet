export default class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  buildAttributesString() {
    return Object.keys(this.attributes).reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
