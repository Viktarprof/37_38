// Проверка равенства двух массивов:
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Пример использования
  const arr1 = [1, 2, 5, 4, 0];
  const arr2 = [2, 4, 5, 0, 1];
  if (areArraysEqual(arr1, arr2)) {
    console.log("Да");
  } else {
    console.log("Нет");
  }

  
//   Группировка слов с одинаковым набором символов:
function groupWords(words) {
    const groups = {};
    for (let i = 0; i < words.length; i++) {
      const key = words[i].split("").sort().join("");
      if (key in groups) {
        groups[key].push(words[i]);
      } else {
        groups[key] = [words[i]];
      }
    }
    for (const key in groups) {
      console.log(groups[key].join(", "));
    }
  }
  
  // Пример использования
  const words = ["student", "students", "dog", "god", "cat", "act", "flow", "wolf"];
  groupWords(words);
  