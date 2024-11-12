// DLL insert / remove - Exercise

// Implement the following on the DoublyLinkedList class

// insert

// This internal/helper function should insert a node at a specified index in a DoublyLinkedList. 
// It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

// remove

// This function should remove a node at a specified index in a DoublyLinkedList. 
// It should return the removed node. if the index is valid, or undefined if the index is invalid.

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
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
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        if (index === this.length) {
            this.push(val);
            return true;
        }

        let newNode = new Node(val);

        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
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

console.log(doublyLinkedList.insert(2, 12)) // true
console.log(doublyLinkedList.insert(100, 12)) // false
console.log(doublyLinkedList.length) // 5
console.log(doublyLinkedList.head.val) // 5
console.log(doublyLinkedList.head.next.val) // 10
console.log(doublyLinkedList.head.next.next.val) // 12
console.log(doublyLinkedList.head.next.next.next.val) // 15
console.log(doublyLinkedList.head.next.next.next.next.val) // 20

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);

console.log(console.log(doublyLinkedList.remove(2).val)) // 15
console.log(doublyLinkedList.remove(100)) // undefined
console.log(doublyLinkedList.length) // 3
console.log(doublyLinkedList.head.val) // 5
console.log(doublyLinkedList.head.next.val) // 10
console.log(doublyLinkedList.head.next.next.val) // 20