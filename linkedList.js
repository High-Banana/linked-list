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

  getHead() {
    //returns the first node of the list
    return this.head.value;
  }

  tail() {
    //returns the last node of the list
    let currentPointer = this.head;
    let tailNode;

    while (currentPointer) {
      tailNode = currentPointer;
      currentPointer = currentPointer.nextNode;
    }

    return tailNode.value;
  }

  atIndex(index) {
    //returns the node at the given index
    let currentPointer = this.head;
    let output,
      count = 0;

    if (index < 0) {
      return "Error! Index cannot be less than zero";
    }

    if (index === 0) {
      output = this.head;
    } else if (index > this.size() - 1) {
      return "Error! Index is greater than list's size";
    } else {
      while (count < index) {
        currentPointer = currentPointer.nextNode;
        count++;
        output = currentPointer;
      }
    }

    return `At index: ${index}` + `, the value is ${output.value}`;
  }

  pop() {
    //removes the last element from the list
    if (!this.head) {
      return "No nodes to remove";
    }
    let currentPointer = this.head;
    while (currentPointer.nextNode.nextNode) {
      currentPointer = currentPointer.nextNode;
    }
    currentPointer.nextNode = null;
    return "Removed the last node";
  }

  contains(value) {
    //returns true if the passed value is in the list otherwise return false
    let currentPointer = this.head;
    let wasFound;
    for (let i = 0; i < this.size(); i++) {
      if (currentPointer.value === value) {
        wasFound = true;
        break;
      } else {
        currentPointer = currentPointer.nextNode;
        wasFound = false;
      }
    }
    return { value, wasFound };
  }

  find(value) {
    //returns the index of the node containing value or null if not found
    let currentPointer = this.head;
    let index;
    for (let i = 0; i < this.size(); i++) {
      if (currentPointer.value === value) {
        index = i;
        break;
      } else {
        currentPointer = currentPointer.nextNode;
        index = null;
      }
    }
    return { value, index };
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
    if (index < 0) return "Index cannot be less than zero";
    else if (index > this.size()) return "Index does not exist in the list yet";
    else if (index === 0) return (this.head = this.head.nextNode);

    let currentPointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentPointer = currentPointer.nextNode;
    }

    if (currentPointer.nextNode) {
      currentPointer.nextNode = currentPointer.nextNode.nextNode;
    }
    return `Removed a node at index: ${index}`;
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
list1.prepend(300);
list1.insertAt(200, 1);
list1.insertAt(20, 0);
list1.prepend(400);
// console.log(list1.pop());
// console.log(list1.removeAt(0));
list1.toString();
console.log("Size of the node is:", list1.size());
console.log("Head:", list1.getHead());
console.log("Tail:", list1.tail());
console.log(list1.atIndex(3));
console.log(list1.contains(400));
console.log(list1.find(400));
