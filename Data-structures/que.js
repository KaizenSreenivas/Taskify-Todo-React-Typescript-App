class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Que {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enquee(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  dequeee() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
