class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    //adds a new node containing value at the end of the node
  }

  prepend(value) {
    //adds a new node containing value at the start of the node
  }

  size() {
    //returns the total number of nodes in the list
  }

  head() {
    //returns the first node of the list
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
  }

  insertAt(value, index) {
    //inserts a node with the provided value at the index of the list
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
