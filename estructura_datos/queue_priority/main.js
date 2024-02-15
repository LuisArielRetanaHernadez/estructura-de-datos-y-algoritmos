class QueuePriority {
  constructor() {
    this.queue
  }

  enqueue(value) { 
    this.queue.push(value)
  }

  dequeue() {
    if (this.queue.length === 0) return null

    for (let i = 0; i < this.queue.length; i++) {
      let current = this.queue[i]
      if (this.queue[i] < this.queue[i + 1]) {
        current = i
      }
    }

    this.queue.splice(current, 1)
  }

  peek() {
    
}