// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(value) {
    const inNode = new Node(value, this.top);
    this.top = inNode;
    this.size += 1;
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    }
    throw new Error('Stack Underflow');
  }

  pop() {
    if (this.size > 0) {
      const retVal = this.top.value;
      this.top = this.top.next;
      this.size -= 1;
      return retVal;
    }
    throw new Error('Stack Underflow');
  }

  isEmpty() {
    return this.size === 0;
  }

  search(val) {
    let index = -1;
    let found = false;
    let holder = this.top;
    while (!found && holder != null) {
      if (holder.value === val) {
        found = true;
      }
      holder = holder.next;
      index += 1;
    }

    if (!found) {
      return -1;
    }
    return index;
  }

  print() {
    let holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

s.print();

console.log(s.search(2));
console.log(s.search(5));
