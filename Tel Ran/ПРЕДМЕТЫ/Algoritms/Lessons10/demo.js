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

    constructor () {
        this.head = null
    }

    pushToHead = function (element) {
        if (head == null){
            head == new Node(element)
        } else {
            newNode.setNext(this.head)
            this.head = newNode
        }
    } 
}








// non-empty list:
// we have: head -> Node(data1) -> Node(data2) -> Node(data3) -> null
// algorithm:
// remember Node(data1)
// set head to Node(data2)
// set Node(data1) next to null
// head -> Node(data2) -> Node(data3) -> null



// removeHead
// empty list:
// head -> null
// we want to remove the head
// head -> null

removeHead = function () {
    // if the list is not empty
    if (this.head !== null) {
        // if the list has only one element
        if (this.head.next === null) {
            this.head = null;
        }
        else {
            const previousHead = head
            this.head = this.head.next
            previousHead.next = null
        }
    }
}
