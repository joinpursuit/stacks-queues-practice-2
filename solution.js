const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  //push
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  //pop
  pop() {
    const item = this.top;
    this.top = this.top.next;
    return item;
  }

  // size
  size() {
    let newItem = this.top;
    let count = 0;
    while (newItem) {
      newItem = newItem.next;
      ++count;
    }
    return count;
  }

  //isEmpty
  isEmpty() {
    return this.top === null;
  }

  //peek
  peek() {
    return this.top;
  }
  //findMin
  findMin() {
    let min = this.top.data;
    let newItem = this.top.next;
    while (newItem) {
      if (min > newItem.data) {
        min = newItem.data;
      }
      newItem = newItem.next;
    }
    return min;
  }
  //sort
  sort() {
    let array = [];
    let newItem = this.top;
    while (newItem) {
      array.push(newItem.data);
      newItem = newItem.next;
    }
    array.sort();
    const newStack = new Stack();
    for (let i = array.length - 1; i >= 0; i--) {
      newStack.push(array[i]);
    }
    this.top = newStack.top;
    return this.top;
  }
}

//Queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    // this.max = 0;
  }
  //enqueue
  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  // count
  count() {
    return this.size;
  }
  //dequeue
  dequeue() {
    if (this.first === null) {
      throw Error('This queue is empty!');
    }
    let item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  //findMax
  findMax() {
    let array = [];
    let newItem = this.first;
    while (newItem) {
      array.push(newItem.data);
      newItem = newItem.next;
    }
    return Math.max(...array);
  }
  //getlast
  getLast() {
    return this.last;
  }

  // empty
  isEmpty() {
    return !this.first;
  }
  //peek
  peek() {
    if (this.first === null) {
      throw Error('This queue is empty!');
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
