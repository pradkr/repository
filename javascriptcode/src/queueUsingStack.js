// eslint-disable-next-line max-classes-per-file
class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
    throw new Error('Stack Underflow');
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    throw new Error('Stack Underflow');
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val) {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(val);

    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }
  }

  dequeue() {
    return this.s1.pop();
  }
}

const qs = new Queue();
qs.enqueue(1);
console.log(qs);
qs.enqueue(2);
console.log(qs);
console.log(qs.dequeue());
console.log(qs);
qs.enqueue(3);
console.log(qs);
console.log('-----------');
console.log(qs);
console.log(qs.dequeue());
console.log(qs);
console.log(qs.dequeue());
console.log(qs);