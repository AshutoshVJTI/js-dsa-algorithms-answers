// DLL reverse - Exercise

// reverse

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

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
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            
            prev = node;
            node = next;
        }

        return this;
    }
}

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)

console.log(doublyLinkedList.reverse()) // singlyLinkedList;
console.log(doublyLinkedList.length) // 4
console.log(doublyLinkedList.head.val) // 20
console.log(doublyLinkedList.head.next.val) // 15
console.log(doublyLinkedList.head.next.next.val) // 10
console.log(doublyLinkedList.head.next.next.next.val) // 5