import Node from './Node';

function toString() {
  const value = this.children.length > 0
    ? this.children.join('')
    : this.body;
  return `<${this.name}${this.buildAttributesString()}>${value}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
