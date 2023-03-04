// //  Классическая Queue - реализовать используя массив (Array)
//     pushToEnd(int data) - вставляет элемент в конец queue
//     remove() - удаляет элемент из начала queue
//     peek() - возвращает элемент из начала не удаляя его
//     isEmpty()
//     size()
// начало (sample code in java)
// public class Queue {
//     private int[] arr;      // массив для хранения элементов queue
//     private int head;      // head указывает на передний элемент в queue
//     private int tail;       // tail часть указывает на последний элемент в queue
//     private int capacity;   // максимальная емкость queue
//     private int count;      // текущий размер queue

// // Конструктор для инициализации queue

// public Queue(int size)
//     {
//         arr = new int[size];
//         capacity = size;
//         front = 0;
//         rear = -1;
//         count = 0;
//     }
// }



class Queue {
  constructor() {
    this.arr = [];    // массив для хранения элементов queue
    this.head = 0;    // head указывает на передний элемент в queue
    this.tail = -1;   // tail часть указывает на последний элемент в queue
  }

  // вставляет элемент в конец queue
  pushToEnd(data) {
    this.arr[++this.tail] = data;
  }

  // удаляет элемент из начала queue
  remove() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const removed = this.arr[this.head];
    delete this.arr[this.head++];
    return removed;
  }

  // возвращает элемент из начала не удаляя его
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.arr[this.head];
  }

  // проверяет, пустая ли очередь
  isEmpty() {
    return this.size() === 0;
  }

  // возвращает текущий размер queue
  size() {
    return this.tail - this.head + 1;
  }
}
