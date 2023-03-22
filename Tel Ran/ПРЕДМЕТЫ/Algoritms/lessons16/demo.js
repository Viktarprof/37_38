const map = new Map() // key - value

map.set("a", 56)
console.log(map)

map.set("a", 55)
console.log(map)

console.log(map.get("a"))


const set = new Set() // unique values
const array = [] // values


// Первый элемент, встречающийся k раз в массиве
// Дан массив из n целых чисел. Задача состоит в том,
// чтобы найти первый элемент, который встречается k раз.
// Если ни один элемент не встречается k раз, выведите -1.
// Распределение целочисленных элементов может быть в любом диапазоне.
//
// Ввод : {1, 7, 4, 3, 7, 8, 4}, k = 2
// Вывод : 7
// Объяснение: И 7 , и 4 встречаются 2 раза. Но 7 — это первое, которое встречается 2 раза.

// naive approach - time complexity O(n^2), memory complexity O(1)
// using map time complexity O(n), memory complexity O(n)
function findKAppearing(arr, k) {
    const frequencies = new Map()
    // for each element
    for (let i = 0; i < arr.length; i++) {
        // if map doesn't have it,
        const key = arr[i]
        const counter = frequencies.get(key)
        if (!counter) {
            // then store in map key - array element, value - 1
            frequencies.set(key, 1)
        } else {
            // if map has it,
            // then increase value (counter+1)
            frequencies.set(key, counter + 1)
        }

        // if counter == k return array element
        if (frequencies.get(key) === k) {
            return key
        }
    }
}

console.log(findKAppearing([1, 7, 4, 3, 7, 8, 4],2))
