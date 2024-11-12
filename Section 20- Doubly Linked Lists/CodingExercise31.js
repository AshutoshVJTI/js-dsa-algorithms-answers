// DLL set - Exercise

// Implement the following on the DoublyLinkedList.prototype

// set

// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. 
// It should return true if the node is updated successfully, or false if an invalid index is passed in.

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
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let currentNode;
        if (index < this.length / 2) {
            currentNode = this.head;
            let currentIdx = 0;
            while (currentIdx < index) {
                currentNode = currentNode.next;
                currentIdx++;
            }
        } else {
            let currentIdx = this.length - 1;
            currentNode = this.tail;
            while (currentIdx > index) {
                currentNode = currentNode.prev;
                currentIdx--;
            }
        }

        return currentNode;
    }
    set(index, val) {
        let node = this.get(index);
        if (node !== null) {
            node.val = val;
            return true;
        }
        return false;
    }
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);

console.log(doublyLinkedList.set(0, 10)) // true
console.log(doublyLinkedList.length) // 4
console.log(doublyLinkedList.head.val) // 10

console.log(doublyLinkedList.set(10, 10)) // false

console.log(doublyLinkedList.set(2, 100)) // true
console.log(doublyLinkedList.head.next.next.val) // 100