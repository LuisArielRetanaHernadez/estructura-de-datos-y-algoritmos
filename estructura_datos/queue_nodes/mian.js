class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
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

  dequeue() {
    if (!this.front) return null;
    if (this.front === this.rear) {
      this.rear = null;
      this.front = null;
      this.length = 0;
      return null
    }
    this.front = this.front.prev;
    this.length--;
  }
}

const queue = new Stack();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue)