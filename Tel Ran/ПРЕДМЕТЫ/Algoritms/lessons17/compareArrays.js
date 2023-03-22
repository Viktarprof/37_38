// 1) Проверьте, равны ли два массива или нет
// Учитывая два массива, arr1 и arr2 одинаковой длины N , задача состоит в том, чтобы определить,
// равны ли данные массивы или нет.
//
//     Два массива называются равными, если:
//      оба они содержат один и тот же набор элементов,
//     расположение (или перестановки) элементов может/не может быть одинаковым.
//     Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым,
//     чтобы два массива были равны.
//
//     Ввод: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
//     Ввод: arr1[] = {1, 2, 5, 4, 0, 4, 2}, arr2[] = {2, 4, 4, 5, 2, 0, 1}
// Вывод: Да
//
// Временная сложность - O(n)


// Временная сложность 2 O(n log n) + O(n) ~ O(n log n)
// Сложность по памяти O(1)
function compareArraysVersion1(arr1, arr2) {
    //from docs:
    // The sorted array. Note that the array is sorted in place ,
    // and no copy is made
    arr1.sort() // time complexity O(n log n)
    arr2.sort() // time complexity  O(n log n)

    for (let i = 0; i < arr1.length; i++) { // O(n)
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

const arr1 = [1, 2, 5, 4, 0]
const arr2 = [2, 4, 5, 0, 1]
console.log("compareArraysVersion1 " + compareArraysVersion1(arr1 ,arr2))
// arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
// sortedArr1[] = {0, 1, 2, 4, 5}
// sortedArr2[] = {0, 1, 2, 4, 5}

// Временная сложность O(n)
// Сложность по памяти 2 * O(n) ~ O(n)
function compareArraysVersion2(arr1, arr2) {
    // key - the element itself, value - number of repetitions (counter)
    const frequencies1 = new Map();
    for (let i = 0; i < arr1.length; i++) { // O(n)
        let key = arr1[i];
        let counter;
        if (frequencies1.has(key)) {
            counter = frequencies1.get(key) + 1;
        } else {
            counter = 1;
        }
        frequencies1.set(key, counter)
    }

    const frequencies2 = new Map();
    for (let i = 0; i < arr2.length; i++) { // O(n)
        let key = arr2[i];
        let counter;
        if (frequencies2.has(key)) {
            counter = frequencies2.get(key) + 1;
        } else {
            counter = 1;
        }
        frequencies2.set(key, counter)
    }

    // check that every element
    for (const [key, counter1] of frequencies1) { // O(n)
        // how many repetitions were in second array
        const counter2 = frequencies2.get(key)
        if (counter1 !== counter2) {
            return false
        }
    }
    return true
}

console.log("compareArraysVersion2 " + compareArraysVersion2(arr1 ,arr2))

// compareArraysVersion3
// arr1[] = {1, 2, 5}, arr2[] = {2,  5,  1}
// frequencies {1 -> 1, 2 -> 1, 5 -> 1}
// after second cycle
// frequencies {1 -> 0, 2 -> 0, 5 -> 0}

// Временная сложность O(n)
// Сложность по памяти O(n)
function compareArraysVersion3(arr1, arr2) {
    const frequencies = new Map();
    // build frequencies for arr1
    for (let i = 0; i < arr1.length; i++) { // O(n)
        let key = arr1[i];
        let counter;
        counter = frequencies.has(key) ? frequencies.get(key) + 1 : 1;
        frequencies.set(key, counter)
    }
    for (let i = 0; i < arr2.length; i++) {
        let key = arr2[i]
        let counter = frequencies.get(key)
        // we have some element in arr2 which is not in arr1
        if (!counter || counter < 1) {
            return false
        }
        frequencies.set(key, counter - 1)
    }
    for (const [key, counter] of frequencies) {
        if (counter !== 0) {
            return false
        }
    }
    return true
}

console.log("compareArraysVersion3 " + compareArraysVersion3(arr1 ,arr2))




