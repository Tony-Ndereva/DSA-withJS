// lookup O(n)
// push O(1)
// pop O(1)
// peek  O(1)
// Last in First Out(LIFO)

// google
// udemy.com
//youtube

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return console.log(this.top);
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return console.log(this);
  }
  pop() {
    if (!this.top) {
      return console.log(null);
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}
const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
