class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.start = null;
  }

  append(value) {
    let node = new Node(value);

    if (this.start === null) return (this.start = node);
    let pointer = this.start;
    while (pointer.nextNode !== null) pointer = pointer.nextNode;
    pointer.nextNode = node;
  }

  prepend(value) {
    this.start = new Node(value, this.start);
  }

  size() {
    let pointer = this.start;
    let nodeSize = 0;
    while (pointer !== null) {
      pointer = pointer.nextNode;
      nodeSize++;
    }
    return nodeSize;
  }

  head() {
    return this.start.value;
  }

  tail() {
    let pointer = this.start;
    while (pointer.nextNode !== null) pointer = pointer.nextNode;
    return pointer.value;
  }

  at(index) {
    let pointer = this.start;
    if (index > this.size()) return "Error! Index value is greater than node's size.";
    else if (index < 0) return "Error! Index value cannot be less than zero.";
    for (let i = 0; i < index; i++) pointer = pointer.nextNode;
    return pointer.value;
  }

  pop() {
    if (this.start === null) return "Node is empty.";
    let pointer = this.start;
    while (pointer.nextNode.nextNode !== null) pointer = pointer.nextNode;
    pointer.nextNode = null;
  }

  contains(value) {
    let pointer = this.start;
    let containsValue;
    if (value === undefined) return "Value cannot be empty.";
    while (pointer !== null) {
      if (pointer.value === value) return (containsValue = true);
      else {
        pointer = pointer.nextNode;
        containsValue = false;
      }
    }
    return containsValue;
  }

  find(value) {
    if (value === undefined) return "Value cannot be empty.";
    let pointer = this.start;
    for (let i = 0; pointer !== null; i++) {
      if (pointer.value === value) return { value, index: i };
      else pointer = pointer.nextNode;
    }
    if (pointer === null) return { value, index: null };
  }

  insertAt(value, index) {
    if (index > this.size()) {
      this.append(value);
      return;
    } else if (index < 0) {
      this.prepend(value);
      return;
    }

    let pointer = this.start;
    let node = new Node(value);
    for (let i = 0; i < index - 1; i++) pointer = pointer.nextNode;
    node.nextNode = pointer.nextNode;
    pointer.nextNode = node;
  }

  removeAt(index) {
    let pointer = this.start;
    if (index > this.size()) {
      this.pop();
      return;
    } else if (index <= 0) {
      this.start = this.start.nextNode;
      return;
    }

    for (let i = 0; i < index - 1; i++) pointer = pointer.nextNode;
    pointer.nextNode = pointer.nextNode.nextNode;
  }

  print() {
    let pointer = this.start;
    let string = "";
    while (pointer !== null) {
      string += `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    }
    string = string.concat("null");
    return string;
  }
}

module.exports = LinkedList;
