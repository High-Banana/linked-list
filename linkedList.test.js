const LinkedList = require("./linkedList");

const list = new LinkedList();

test("Adds a node on an empty linked list and prints in linked list format", () => {
  list.append(1);
  expect(list.print()).toBe("(1) -> null");
});

test("Adds nodes at the end of the list", () => {
  list.append(2);
  list.append(3);
  expect(list.print()).toBe("(1) -> (2) -> (3) -> null");
  expect(list.head()).toBe(1);
  expect(list.tail()).toBe(3);
});

test("Adds nodes at the start of the list", () => {
  list.prepend(0);
  list.prepend(-1);
  expect(list.print()).toBe("(-1) -> (0) -> (1) -> (2) -> (3) -> null");
  expect(list.head()).toBe(-1);
  expect(list.tail()).toBe(3);
});

test("Returns the size of the linked list i.e. number of nodes in the list", () => {
  expect(list.size()).toBe(5);
});

test("Returns the node value at the given index", () => {
  expect(list.at(2)).toBe(1);
});

test("Removes the last node from the list", () => {
  list.pop();
  expect(list.tail()).toBe(2);
  expect(list.size()).toBe(4);
  expect(list.print()).toBe("(-1) -> (0) -> (1) -> (2) -> null");
});

test("Returns 'true' if the list contains the given value else returns 'false'", () => {
  expect(list.contains(1)).toBe(true);
  expect(list.contains(3)).toBe(false);
  expect(list.contains()).toBe("Value cannot be empty.");
});

test("Returns index of the given value if found in the list else returns null", () => {
  expect(list.find(1).index).toBe(2);
  expect(list.find(3).index).toBe(null);
  expect(list.find()).toBe("Value cannot be empty.");
});

test("Inserts value at given index, works with negative value and value greater than list size", () => {
  list.insertAt(1.5, 3);
  list.insertAt(-2, -1);
  list.insertAt(3, 10);
  expect(list.print()).toBe("(-2) -> (-1) -> (0) -> (1) -> (1.5) -> (2) -> (3) -> null");
  expect(list.head()).toBe(-2);
  expect(list.tail()).toBe(3);
  expect(list.size()).toBe(7);
});

test("Removes value from given index, works with negative value and value greater than list size", () => {
  list.removeAt(4);
  list.removeAt(-1);
  list.removeAt(100);
  expect(list.print()).toBe("(-1) -> (0) -> (1) -> (2) -> null");
  expect(list.head()).toBe(-1);
  expect(list.tail()).toBe(2);
  expect(list.size()).toBe(4);
});
