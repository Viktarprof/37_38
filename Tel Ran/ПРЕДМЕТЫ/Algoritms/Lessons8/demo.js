class StackSecondImpl {
    arr = []
    currIdx = 0

    // O(1)
    push = function(elem) {
        this.arr[this.currIdx] = elem
        this.currIdx++
        // arr.push()
    }

    // O(1)
    pop = function() {
        //arr = [5,7,6,8,9, _], currIdx = 5
        this.currIdx-- // if currIdx = 0 then arr[-1]
        if (this.currIdx < 0) {
            // throw Error("Stack is empty")
            return undefined
        }

        let res = this.arr[this.currIdx]
        this.arr[this.currIdx] = undefined
        return res
    }

    isEmpty = function() {
        this.currIdx === 0
    }

    peek = function() {
        this.arr[this.currIdx - 1]
    }

    getMin = function () {

    }
}

stack = new StackSecondImpl()
stack.push(45)
stack.push(46)
stack.push(23)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())