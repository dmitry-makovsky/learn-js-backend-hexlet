import Node from './Node';

function toString() {
  return `<${this.name}${this.buildAttributesString()}>`;
}

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}
