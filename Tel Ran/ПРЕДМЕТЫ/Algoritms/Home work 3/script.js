
// Имеется три стержня — левый, средний и правый. На левом стержне находятся n дисков, диаметры которых различны. Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший. Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.

// Головоломка имеет следующие два правила:
//       1. Вы не можете поместить больший диск на меньший диск.
//       2. За один раз можно перемещать только один диск.


// Попробуйте реализовать итеративный метод решения (без рекурсии)

// Для решения данной задачи можно использовать алгоритм "Ханойские башни". В данном случае, чтобы реализовать итеративный метод, мы будем использовать стек для хранения состояний башен на каждом шаге алгоритма.

// Алгоритм можно разбить на следующие шаги:

// Создаем три стека, соответствующих левому, среднему и правому стержням.

// Заполняем левый стержень дисками, начиная от наименьшего.

// Создаем объект-состояние, содержащий информацию о текущих позициях дисков на каждом стержне и положение башен. Этот объект помещается в стек состояний.

// Запускаем цикл, который будет выполняться до тех пор, пока правый стержень не будет заполнен дисками.

// На каждой итерации цикла выбираем диск, который можно переместить с левого стержня на правый, и перемещаем его. Это можно сделать следующим образом:

// Если на левом стержне нет дисков, переносим диск со среднего стержня на левый.
// Если на правом стержне нет дисков или на левом стержне верхний диск меньше, чем на правом стержне, переносим диск с левого стержня на правый.
// В противном случае, переносим диск с правого стержня на левый.
// После каждого перемещения обновляем объект-состояние и помещаем его в стек состояний.

// Когда все диски будут перемещены на правый стержень, алгоритм завершается.




function hanoi_iter(n) {
    const towers = [[], [], []]; // создаем массив из трех пустых стержней
    const left = Array.from({ length: n }, (_, i) => i + 1); // создаем массив из n дисков на левом стержне
    const middle = [];
    const right = [];
    
    let source = left;
    let destination = right;
    let auxiliary = middle;
    let count = 0;
  
    // вычисляем количество ходов
    let moves = Math.pow(2, n) - 1;
  
    // если количество дисков четное, то меняем стержни местами
    if (n % 2 === 0) {
      [destination, auxiliary] = [auxiliary, destination];
    }
  
    // переносим диски
    while (count < moves) {
      // определяем какой диск нужно переместить
      let disk = source.pop() || Infinity;
  
      // определяем на какой стержень нужно переместить диск
      if (destination.length > 0 && destination[destination.length - 1] < disk) {
        disk = destination.pop();
        source.push(disk);
      } else {
        destination.push(disk);
      }
  
      count++;
  
      // меняем местами стержни
      [source, auxiliary, destination] = [auxiliary, destination, source];
    }
  
    return [left, middle, right];
  }

  
//   Этот код создает массив из трех пустых стержней и заполняет левый стержень дисками от 1 до n. 
// Затем он переносит диски с левого стержня на правый, используя средний стержень как вспомогательный, 
// согласно правилам головоломки Ханой.
//  Он возвращает массив, содержащий состояние трех стержней после выполнения всех ходов.