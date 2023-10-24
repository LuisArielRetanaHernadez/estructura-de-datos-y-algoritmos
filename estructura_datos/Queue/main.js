class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    this.queue.shift()
  }

  peek() {
    return this.queue[0]
  }

  size() {
    return this.queue.length
  }

  isEmpty() {
    return this.queue.length === 0
  }

  print() {
    return this.queue
  }

}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.print() // [1, 2, 3]
queue.peek() // 1
queue.isEmpty() // false
queue.size() // 3

queue.dequeue()
queue.print() // [2, 3]
queue.peek() // 2
queue.isEmpty() // false
queue.size() // 2