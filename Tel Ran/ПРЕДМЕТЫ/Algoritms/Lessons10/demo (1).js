class Node {
    data
    next

    constructor(data) {
        this.data = data
        this.next = null
    }

    setNext(next) {
        this.next = next
    }
}

class MyLinkedList {

    head

    constructor() {
        this.head = null
    }

    // O(1)
    pushToHead = function (data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            newNode.setNext(this.head)
            this.head = newNode
        }
    }

    // O(n)
    pushToTail = function (data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
        } else {
            // find the last element
            let node = this.head;
            while (node !== null && node.next !== null) {
                node = node.next
            }
            node.setNext(newNode)
        }
        // head -> Node(5) -> Node(6) -> Node(7) -> null
    }

    removeHead = function () {
        // if the list is not empty
        if (this.head !== null) {
            // if the list has only one element
            if (this.head.next === null) {
                this.head = null;
            } else {
                const previousHead = this.head
                this.head = this.head.next
                previousHead.next = null
            }
        }
    }

    // O(n)
    removeTail = function () {
        if (this.head !== null) {

            // if the list has only one element
            if (this.head.next === null) {
                this.head = null;
            } else {
                let node = this.head;
                let prevNode = null
                while (node.next !== null) {
                    prevNode = node
                    node = node.next
                }
                prevNode.next = null
            }
        }
    }

    print = function () {
        let node = this.head
        while (node !== null) {
            console.log(node.data)
            node = node.next
        }
    }

    // retrieves data by index
    // Node(5) -> Node(6) -> Node(7)
    // get(2) returns 7
    get = function (index) {

    }


    // Node(5) -> Node(6) -> Node(7)
    // pushToIndex(8, 1)
    // result: Node(5) -> Node(8) -> Node(6) -> Node(7)
    pushToIndex = function (data, index) {

    }

    // Node(5) -> Node(6) -> Node(7)
    // removeByIndex(1)
    // result: Node(5) -> Node(7)
    removeByIndex = function (index) {

    }
}

// [5,6,7]
// Node(5) -> Node(6) -> Node(7)

// PushToHead:
// empty list:
// head -> null
// we want to add an element with data0
// head -> Node(data0)

// non-empty list:
// we have: head -> Node(data1) -> Node(data2) -> Node(data3) -> null
// we want to add an element with data0 to the beginning
// algorithm:
// 1) Node(data0)
// 2)
// head -> Node(data1) -> Node(data2) -> Node(data3) -> null
// Node(data0) -> Node(data1) -> Node(data2) -> Node(data3) -> null
// 3) head -> Node(data0) -> Node(data1) -> Node(data2) -> Node(data3) -> null

// pushtoHead demo
// const list = new MyLinkedList();
// list.pushToHead(5)
// list.pushToHead(6)
// console.log(list)

// Node(5) -> Node(6) -> Node(3) -> Node(8) -> Node(3) -> Node(8)

// PushToTail:
// empty list:
// head -> null
// we want to add data to the tail 'data0'
// head -> Node(data0)

// non-empty list:
// we have: head -> Node(data1) -> Node(data2) -> Node(data3) -> null
// we want to add an element with 'data0' to the tail
// algorithm:
// 1) create new node -  Node(data0)
// 2) find the last element
// 3) set the last element's next to Node(data0)

// head -> Node(data1) -> Node(data2) -> Node(data3) -> Node(data0) -> null
// pushToTail demo
// const  list = new MyLinkedList()
// list.pushToTail(5)
// list.pushToTail(2)
// console.log(list)

// removeHead
// empty list:
// head -> null
// we want to remove the head
// head -> null

// non-empty list:
// we have: head -> Node(data1) -> Node(data2) -> Node(data3) -> null
// algorithm:
// remember Node(data1)
// set head to Node(data2)
// set Node(data1) next to null
// head -> Node(data2) -> Node(data3) -> null

// removeHead demo
// const list = new MyLinkedList()
// list.pushToHead(5)
// list.pushToHead(9)
// list.pushToHead(1)
// list.removeHead()
// console.log(list)

// removeTail
// empty list:
// head -> null
// we want to delete the tail
// head -> null

// non-empty list:
// we have: head -> Node(data1) -> Node(data2) -> Node(data3) -> null
// we want to delete the tail
// algorithm:
// 1) find the element one before last
// 2) set next of this element to null
// head -> Node(data1) -> Node(data2) -> null

// removeTail demo
// const list = new MyLinkedList()
// list.pushToTail(3)
//
// list.removeTail()
// console.log(list)
//

// print
const list = new MyLinkedList()
list.pushToTail(6) // 6
list.pushToTail(9) // 6 9
list.pushToTail(3) // 6 9 3
list.pushToHead(2) // 2 6 9 3
list.print() // 2 6 9 3









