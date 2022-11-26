// исходный массив
const arr = [2, 4, 7, 22, 9];

console.log('arr\n', arr);

// №1
// Шаг 1: Создаем новый пустой массив
// Шаг 2: Обходим исходный массив от последнего элемента к первому
// Шаг 3: каждый елемент исходного массива ложим в новый массив

// space complexity O(n)
// time complexity O(n)
function revertArrayOne(arr) {
	const revert_arr = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		revert_arr.push(arr[i]);
	}

	return revert_arr;
}

console.log('revert_one\n', revertArrayOne(arr));





// №2
// Шаг 1: Обходим исходный массив от начала до середины
// Шаг 2: Создаем временную переменную в котору кладем значение текущего элемента исходного массива
// Шаг 3: в текущий елемент исходного массива ложим зеркальный от центра элемент массива с конца
// Шаг 4: в зеркальный от центра элемент массива с конца ложим сохраненный во временной переменной текущий элемент

// space complexity O(1)
// time complexity O(n)

function revertArrayTwo(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

console.log('revert_two\n', revertArrayTwo(arr));

  