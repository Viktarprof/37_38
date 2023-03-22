
// Дан массив целых чисел размера «n»,
// наша цель — вычислить максимальную сумму «k»
// последовательных элементов в массиве.
//
// Ввод: arr[] = {10, 20, 30, 40}, k = 2
// Вывод: 70
//
// Вход: arr[] = {1, 45, 2, 10, 23, 3, 1, 0, 20}, k = 4
// Выход: 80
// Мы получаем максимальную сумму,
// добавляя подмассив {45, 2, 10, 23} размера 4
function findMax(arr, k) {
    let tempSumm = arr[0];
    for (let j = 1; j < k; j++) {
        tempSumm += arr[j];
    }
    let currentMax = tempSumm;
    for (let i = 0; i < arr.length - k; i++) {
        tempSumm = tempSumm - arr[i] + arr[k + i];
        if (currentMax < tempSumm) {
            currentMax = tempSumm;
        }
    }
    console.log(currentMax);
}

const arr_1 = [1, 45, 2, 10, 23, 3, 1, 0, 20];
const k_1 = 4;
findMax(arr_1, k_1);
const arr_2 = [10, 20, 30, 40];
const k_2 = 2;
findMax(arr_2, k_2);