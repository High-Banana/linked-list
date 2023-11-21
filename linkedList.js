class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    let pointer;

    if (this.head === null) this.head = node;
    else {
      pointer = this.head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    let pointer = this.head;
    let nodeSize = 0;
    while (pointer !== null) {
      pointer = pointer.nextNode;
      nodeSize++;
    }
    return nodeSize;
  }

  getHead() {
    console.log(`The head of the node is ${this.head.value}`);
  }

  getTail() {
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    console.log(`The tail of the node is: ${pointer.value}`);
  }

  at(index) {
    let pointer = this.head;
    if (index > this.size()) {
      console.log("Error! Index value is greater than node's size.");
      return;
    } else if (index < 0) {
      console.log("Error! Index value cannot be less than zero.");
      return;
    }
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    console.log(`The node at index ${index} is ${pointer.value}`);
  }

  pop() {
    if (this.head === null) {
      console.log("Node is empty");
      return;
    }
    let pointer = this.head;
    while (pointer.nextNode.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = null;
  }

  contains(value) {
    let pointer = this.head;
    let containsValue;
    if (value === undefined) {
      console.log("Value cannot be empty");
      return;
    }
    while (pointer !== null) {
      if (pointer.value === value) {
        containsValue = true;
        break;
      } else {
        pointer = pointer.nextNode;
        containsValue = false;
      }
    }
    console.log({ value, containsValue });
  }

  find(value) {
    if (value === undefined) {
      console.log("Value cannot be empty.");
      return;
    }
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        console.log(`Index of value ${value}: ${index}`);
        break;
      } else {
        pointer = pointer.nextNode;
        index++;
      }
    }
    if (pointer === null) {
      console.log(`Index of value ${value}: ${null}`);
    }
  }

  insertAt(value, index) {
    if (index > this.size()) {
      console.log("Index is greater than node's size, added the value at the end of the node.");
      this.append(value);
      return;
    } else if (index < 0) {
      console.log("Index is less than zero, added the value at the start of the node.");
      this.prepend(value);
      return;
    }

    let pointer = this.head;
    let node = new Node(value);

    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    node.nextNode = pointer.nextNode;
    pointer.nextNode = node;
  }

  removeAt(index) {
    let pointer = this.head;
    if (index > this.size()) {
      console.log("Index is greater than node's size, removed the last element");
      this.pop();
      return;
    } else if (index <= 0) {
      console.log("Index is less than zero, removed the first element");
      this.head = pointer.nextNode;
      return;
    }

    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = pointer.nextNode.nextNode;
  }

  print() {
    let pointer = this.head;
    let string = "";
    while (pointer !== null) {
      string += `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    }
    console.log(string, null);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let node1 = new LinkedList();
node1.append(0);
node1.prepend(-10);
node1.append(10);
node1.insertAt(5, 3);
// node1.removeAt(2);
node1.print();
console.log("Size of the node is:", node1.size());
