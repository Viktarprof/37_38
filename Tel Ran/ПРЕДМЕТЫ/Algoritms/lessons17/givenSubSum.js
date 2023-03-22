//    Дан отсортированный массив arr (отсортированный в порядке возрастания),
//    содержащий N целых чисел, найти,
//    существует ли какая-либо пара элементов (arr[i], arr[j]),
//    сумма которых равна X.

// А[] = {10, 20, 35, 50, 75, 80}
// Х == 70
// arr[i] = 20
// arr[j] = 50

// X== 55
// arr[i] = 20
// arr[j] = 35

// X== 1000
// undefined

// временная сложность  O(n^2)
// пространстенная сложность O(1)
function findGivenSumVersion1(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        const el1 = arr[i]
        for (let j = 0; j < arr.length; j++) {
            const el2 = arr[j]
            if (el1 + el2 === x) {
                console.log(el1 + " + " + el2 + " = " + x)
                return;
            }
        }
    }
    console.log("Not found for x = " + x)
}

const arr = [10, 20, 35, 50, 75, 80]

// временная сложность  O(n)
// пространстенная сложность O(n)
function findGivenSumVersion2(arr, x) {
    //arr = [10, 20, 35, 50, 75, 80], X = 70
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        map.set(x - arr[i], arr[i])
    }
    // map = {60 -> 10, 50 -> 20, 35 -> 35, 20 -> 50, -5 -> 75, -10 -> 80

    for (let j = 0; j < arr.length; j++) {
        // j = 0 , arr[0] = 10 => false
        // j = 1 , arr[1] = 20 => true
        if (map.has(arr[j])) {
            console.log(arr[j] + " + " + map.get(arr[j]) + " = " + x)
            return
        }
    }
    console.log("Not found for x = " + x)
}


// временная сложность  O(n)
// пространстенная сложность O(1)
function findGivenSumVersion3(arr, x) {
    // if( arr[0] > x || arr[arr.length -1] * 2 < x) {
    if( arr[0] > x || x - arr[0] > arr[arr.length -1]) {
        console.log("Not found for x = " + x)
        return
    }
    // use two pointers in cycle
    // start pointer, end pointer
    for (let start = 0, end = arr.length - 1; start < end;) {
        const sum = arr[start] + arr[end]
        if (sum === x) {
            console.log(arr[start] + " + " + arr[end] + " = " + x)
            return;
        }
        else if (sum < x) {
            // if sum of two elements < x, then we need increase sum => move start pointer
            start++
        }
        else if (sum > x) {
            // if sum of two elements > x, then we need decrease sum => move end pointer
            end--
        }
    }
    console.log("Not found for x = " + x)
}

console.log("findGivenSumVersion1: ")
findGivenSumVersion1(arr, 70)
findGivenSumVersion1(arr, 55)
findGivenSumVersion1(arr, 1000)
console.log("findGivenSumVersion2: ")
findGivenSumVersion2(arr, 70)
findGivenSumVersion2(arr, 55)
findGivenSumVersion2(arr, 1000)
console.log("findGivenSumVersion3: ")
findGivenSumVersion3(arr, 70)
findGivenSumVersion3(arr, 55)
findGivenSumVersion3(arr, 1000)

