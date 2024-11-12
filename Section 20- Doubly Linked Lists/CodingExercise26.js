// DLL push - Exercise

// Implement the following on the DoublyLinkedList class

// push

// This function should accept a value add a node to the end of the DoublyLinkedList with the given value. 
// It should return the DoublyLinkedList.

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
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var doublyLinkedList = new DoublyLinkedList;

console.log(doublyLinkedList.push(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.prev); // null

console.log(doublyLinkedList.push(10)); // doublyLinkedList
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.tail.val); // 10
console.log(doublyLinkedList.head.next.prev.val); // 5

console.log(doublyLinkedList.push(15)); // doublyLinkedList
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 15
console.log(doublyLinkedList.tail.prev.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 15