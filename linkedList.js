class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    //adds a new node containing value at the end of the node
    this.head = new Node(value, this.head);
  }

  prepend(value) {
    //adds a new node containing value at the start of the node
    let node = new Node(value);
    let currentPointer;

    if (!this.head) {
      this.head = node;
    } else {
      currentPointer = this.head;

      while (currentPointer.nextNode) {
        currentPointer = currentPointer.nextNode;
      }

      currentPointer.nextNode = node;
    }
  }

  size() {
    //returns the total number of nodes in the list
    let currentPointer = this.head;
    let count = 0;

    while (currentPointer) {
      count++;
      currentPointer = currentPointer.nextNode;
    }
    return count;
  }

  head() {
    //returns the first node of the list
    this;
  }

  tail() {
    //returns the last node of the list
  }

  atIndex(index) {
    //returns the node at the given index
  }

  pop() {
    //removes the last element from the list
  }

  contains(value) {
    //returns true if the passed value is in the list otherwise return false
  }

  find(value) {
    //returns the index of the node containing value or null if not found
  }

  toString() {
    //reprenst your LinkedList objects as strings to print them out and preview them in console
    // format ( value ) -> ( value ) -> ( value ) -> null
    let node = this.head;
    let string = "";

    while (node) {
      string += `(${node.value}) -> `;
      node = node.nextNode;
    }
    console.log(string, null);
  }

  insertAt(value, index) {
    //inserts a node with the provided value at the index of the list
    if (index < 0) {
      console.log("Error! Index cannot be less than 0");
      return;
    } else if (index > this.size()) {
      console.log("Index is greater than the node size! The value will be inserted at the end of the node");
      this.prepend(value);
      return;
    } else if (index === 0) {
      this.append(value);
      return;
    }

    const node = new Node(value);
    let currentPointer,
      previousPointer,
      count = 0;
    currentPointer = this.head;
    while (count < index) {
      previousPointer = currentPointer;
      count++;
      currentPointer = currentPointer.nextNode;
    }

    node.nextNode = currentPointer;
    previousPointer.nextNode = node;
  }

  removeAt(index) {
    //removes the node at the given index
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list1 = new LinkedList();
list1.append(100);
list1.prepend(200);
list1.insertAt(300, 1);
list1.toString();
console.log("Size of the node is:", list1.size());
