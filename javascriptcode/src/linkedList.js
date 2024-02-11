// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null);
    this.size = 0;
  }

  insertFront(val) {
    const nodeIn = new Node(val, this.front);
    this.front = nodeIn;
    this.size += 1;
  }

  insertRear(val) {
    if (this.size === 0) {
      this.insertFront(val);
    } else if (this.size === 1) {
      this.front.next = new Node(val, null);
      this.size += 1;
    } else {
      let holder = this.front;
      while (holder.next != null) {
        holder = holder.next;
      }
      holder.next = new Node(val, null);
      this.size += 1;
    }
  }

  print() {
    let holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  insert(val, index) {
    if (index > this.size) {
      throw new Error('IndexOutOfRange');
    } else if (index === 0) {
      this.insertFront(val);
    } else {
      let i = 0;
      let holder = this.front;

      while (i < index - 1) {
        holder = holder.next;
        i += 1;
      }

      const newNode = new Node(val, holder.next);
      holder.next = newNode;
      this.size += 1;
    }
  }

  deleteFront() {
    this.front = this.front.next;
    this.size -= 1;
  }

  delete(index) {
    if (index > this.size) {
      throw new Error('IndexOutOfRange');
    } else if (index === 0) {
      this.deleteFront();
    } else {
      let i = 0;
      let holder = this.front;

      while (i < index - 1) {
        holder = holder.next;
        i += 1;
      }

      holder.next = holder.next.next;
      this.size -= 1;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

const list = new LinkedList();
list.insertRear(1);
list.insertRear(2);
list.insertRear(3);
list.print();
