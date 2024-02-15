class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }
}