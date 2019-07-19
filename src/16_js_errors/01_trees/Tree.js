/* eslint-disable class-methods-use-this */
class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChildren() {
    return !!this.children.size;
  }

  hasChild(key) {
    return !!this.children.get(key);
  }

  getParent() {
    return this.parent;
  }

  getDeepChild(keys) {
    if (keys.length === 0) return undefined;
    return keys.reduce((acc, key) => {
      if (acc === undefined) {
        return undefined;
      }
      const node = acc.getChild(key);
      return node;
    }, this);
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getChildren() {
    return [...this.children.values()];
  }
  // END
}

export default Tree;
