// DLL pop - Exercise

// Implement the following on the DoublyLinkedList class

// pop

// This function should remove a node at the end of the DoublyLinkedList. 
// It should return the node removed.

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}

var doublyLinkedList = new DoublyLinkedList;

doublyLinkedList.push(5);
doublyLinkedList.push(10);
doublyLinkedList.push(15);

console.log(doublyLinkedList.pop().val); // 15
console.log(doublyLinkedList.length); // 2

console.log(doublyLinkedList.pop().val); // 10
console.log(doublyLinkedList.length); // 1

console.log(doublyLinkedList.pop().val); // 5
console.log(doublyLinkedList.length); // 0

console.log(doublyLinkedList.pop()); // undefined
console.log(doublyLinkedList.length); // 0