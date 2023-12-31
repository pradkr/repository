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
    let inNode = new Node(value, this.top);
    this.top = inNode;
    this.size++;
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw 'Stack Underflow';
    }
  }

  pop() {
    if (this.size > 0) {
      let retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return retVal;
    } else {
      throw 'Stack Underflow';
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    let holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

function sortStack(s) {
  let tmpStack = new Stack();
  while (!s.isEmpty()) {
    let val = s.pop();
    while (!tmpStack.isEmpty() && tmpStack.peek() > val) {
      s.push(tmpStack.pop());
    }
    tmpStack.push(val);
  }
  return tmpStack;
}

let s = new Stack();
s.push(34);
s.push(3);
s.push(31);
s.push(98);
s.push(92);
s.push(23);
let out = sortStack(s);

out.print();
