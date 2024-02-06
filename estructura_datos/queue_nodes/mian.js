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

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.rear) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.prev = newNode;
      this.rear = newNode;
    }
    this.length++;
  }
}