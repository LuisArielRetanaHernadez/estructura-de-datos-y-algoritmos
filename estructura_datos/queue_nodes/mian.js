class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.rear = null;
    this.front = null;
    this.length = 0;
  }
}