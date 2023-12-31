// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    const inNode = new Node(val, null);
    if (this.size === 0) {
      this.rear = inNode;
      this.front = this.rear;
      this.size += 1;
    } else {
      this.rear.next = inNode;
      this.rear = inNode;
      this.size += 1;
    }
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error('Stack Underflow');
    } else {
      const val = this.front.value;
      this.front = this.front.next;
      this.size -= 1;
      return val;
    }
  }

  peek() {
    if (this.size === 0) {
      throw new Error('Stack Underflow');
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  max() {
    let holder = this.front;
    let maxVal = this.front.value;

    while (holder != null) {
      if (holder.value > maxVal) {
        maxVal = holder.value;
      }
      holder = holder.next;
    }
    return maxVal;
  }
}

const q = new Queue();
q.enqueue(5);
q.enqueue(10);
// q.enqueue(15);
// q.enqueue(25);
// q.enqueue(15);
q.print();
console.log(q);
// console.log(q.max());

// Queue {
//   front: Node { value: 5, next: Node { value: 10, next: null } },
//   rear: Node { value: 10, next: null },
//   size: 2
// }