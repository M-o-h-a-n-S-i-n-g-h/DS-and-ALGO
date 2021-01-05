class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let length = 0;
    while (this.head) {
      length++;
      this.head = this.head.next;
    }
    return length;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    let lastNode = this.getLast();
    lastNode.next = new Node(data);
  }

  getFirst() {
    return this.head.next;
  }

  getLast() {
    let lastNode = this.head;
    if (!lastNode) {
      return "No Lists Here";
    }
    while (lastNode) {
      if (!lastNode.next) {
        return lastNode;
      }
      lastNode = lastNode.next;
    }
  }

  removeFirst() {
    if (!this.head) {
      return "Nothing to Remove";
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return "No Nodes to remove";
    }
    if (!this.head.next) {
      this.head = null;
    }
    let previousNode = this.head;
    let currentNode = this.head.next;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (index === counter) {
        return node.data;
      } else {
        counter++;
        node = node.next;
      }
    }
    return null;
  }

  removeAt(index) {
    if (index === 0) {
      return (this.head = this.head.next);
    }

    let previousNode = getAt(index - 1);
    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next;
  }
}
const list = new LinkedList();
