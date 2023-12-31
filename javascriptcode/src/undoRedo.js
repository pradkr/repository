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

const undoStack = new Stack();
const redoStack = new Stack();
let counter = 0;

function incrementCounter() {
  undoStack.push(counter);
  counter++;
  document.getElementById('val').value = counter;
}

function undo() {
  redoStack.push(counter);
  counter = undoStack.pop();
  document.getElementById('val').value = counter;
}

function redo() {
  undoStack.push(counter);
  counter = redoStack.pop();
  document.getElementById('val').value = counter;
}
