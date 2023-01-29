class QueueFirstImpl {

    arr = []
    currIdx = 0

    add = function(elem) {
        this.arr[this.currIdx] = elem
        this.currIdx++;
    }

    poll = function() {
        if (this.currIdx === 0) {
            return undefined
        }

        const res = this.arr[0]
        for (let i = 1; i < this.currIdx; i++) {
            this.arr[i-1] = this.arr[i]
        }
        this.currIdx--;
        this.arr[this.currIdx] = undefined
        return res;
    }

    isEmpty = function () {
        return this.currIdx === 0
    }

    peek = function () {
        return this.arr[0]
    }

    toString = function () {
        console.log("queue - " + this.arr)
    }
}
let queue = new QueueFirstImpl
queue.add(1)
queue.add(2)
queue.add(5)
queue.add(3)
console.log(queue.poll())
console.log(queue.poll())
console.log(queue.poll())
console.log(queue.poll())
console.log(queue.poll())

// Функция для генерации двоичных чисел от 1 до `n` с использованием
// структура данных queue

// n = 1
// 1

// n = 2, 3
// 1, 10,11

// n = 3, 7
// 1, 10, 11, 100, 101, 110, 111

// n = 4, 15
// 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101,1110, 1111


// add 1 to queue
// 10
// 11
printBinaryNumbers = function(n) {
    const queue = new QueueFirstImpl()
    queue.add(1)
    while ((queue.peek() + "").length <= n) {
        queue.add(queue.peek() + '0')
        queue.add(queue.peek() + '1')
        queue.toString()
        console.log(queue.poll() + '')
    }
}

printBinaryNumbers(4)
