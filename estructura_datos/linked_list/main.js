class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  pop() {
    let node = this.head

    while(node.next !== this.tail) {
      node = node.next
    }
    this.tail = node
    this.tail.next = null
  }
}

const nodes = new LinkedList()
nodes.add(1)
nodes.add(2)
nodes.add(3)
nodes.pop()

console.log(nodes)