// Реализовать методы   в классе MyLinkedList
//  1) // retrieves data by index
//     // Node(5) -> Node(6) -> Node(7)
//     // get(2) returns 7
//     get = function (index) {

// }


// // Node(5) -> Node(6) -> Node(7)
// // pushToIndex(8, 1)
// // result: Node(5) -> Node(8) -> Node(6) -> Node(7)
// pushToIndex = function (data, index) {

// }

// // Node(5) -> Node(6) -> Node(7)
// // removeByIndex(1)
// // result: Node(5) -> Node(7)
// removeByIndex = function (index) {

// }


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // retrieves data by index
  // Node(5) -> Node(6) -> Node(7)
  // get(2) returns 7
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.data;
  }

  // Node(5) -> Node(6) -> Node(7)
  // pushToIndex(8, 1)
  // result: Node(5) -> Node(8) -> Node(6) -> Node(7)
  pushToIndex(data, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
    return true;
  }

  // Node(5) -> Node(6) -> Node(7)
  // removeByIndex(1)
  // result: Node(5) -> Node(7)
  removeByIndex(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      if (index === this.length - 1) {
        this.tail = prev;
      }
    }

    this.length--;
    return true;
  }
}

// Класс MyLinkedList представляет связный список, который состоит из узлов Node. Каждый узел содержит данные и ссылку на следующий узел. Голова списка хранится в переменной head, хвост списка в переменной tail, а длина списка в переменной length.

// Метод get принимает индекс и возвращает значение узла по данному индексу, если он существует, иначе возвращает null.

// Метод pushToIndex принимает данные и индекс и добавляет новый узел с данными в список на заданный индекс. Если индекс меньше 0 или больше длины списка, метод возвращает false, в противном случае метод возвращает `