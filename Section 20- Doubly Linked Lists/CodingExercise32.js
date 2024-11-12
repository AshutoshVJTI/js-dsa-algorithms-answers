// DLL remove - Exercise

// Implement the following on the DoublyLinkedList class

// remove

// This function should remove a node at a specified index in a DoublyLinkedList.
// It should return the removed node. if the index is valid, or undefined if the index is invalid.

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
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
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
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.length--;
        node.prev = null;
        node.next = null;
        return node;
    }
}

var doublyLinkedList = new DoublyLinkedList;

doublyLinkedList.push(5).push(10).push(15).push(20);

console.log(doublyLinkedList.remove(2).val) // 15
console.log(doublyLinkedList.remove(100)) // undefined
console.log(doublyLinkedList.length) // 3
console.log(doublyLinkedList.head.val) // 5
console.log(doublyLinkedList.head.next.val) // 10
console.log(doublyLinkedList.head.next.next.val) // 20