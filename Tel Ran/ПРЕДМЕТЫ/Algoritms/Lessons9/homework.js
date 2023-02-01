// Напишите программу, которая реверсирует стек с помощью рекурсии.
//     Вам не разрешено использовать конструкции цикла, такие как while, for.. и тд
// Вы можете использовать только следующие функции в стеке S:
// isEmpty(S)
// push(S)
// pop(S)

const stack = [4, 6, 8, 2, 5]

console.log(stack.push(6))
console.log(stack.pop())
console.log(stack.length === 0) // is Empty

function reverse(stack) {
    if (stack.length === 0) {
        return stack;
    }
}