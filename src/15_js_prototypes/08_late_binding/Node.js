function buildAttributesString() {
  return Object.keys(this.attributes).reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
}

export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
  this.buildAttributesString = buildAttributesString;
}
