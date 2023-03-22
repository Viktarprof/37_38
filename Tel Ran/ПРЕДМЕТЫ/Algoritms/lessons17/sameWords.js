// 2)
// Сгруппируйте слова с одинаковым набором символов
//
// Дан список слов со строчными буквами.
// Реализуйте функцию поиска всех слов с одинаковым уникальным набором символов.
//
// Input: const words =
// ["student", "students", "dog", "god", "cat", "act", "flow", "wolf", "abc", "abacababaaacc"];
// Output :
// student, students, (unique symbols studen)
// cat, act
// dog, god,
// flow, wolf
// abc, abacababaaacc

const words = ["student", "students", "dog", "god", "cat", "act", "flow", "wolf"];

function groupByUniqueSymbols(words) {
    // unique sorted symbols - key, array of words that result to that key - value
    const map = new Map()
    for (let i = 0; i < words.length; i++) {
        // words.split('') - create array with every character
        // "student" -> ['s', 't', 'u','d', 'e', 'n', 't']
        // new Set(...)
        // ['s', 't', 'u','d', 'e', 'n', 't'] -> ['s', 't', 'u', 'd', 'e', 'n']
        // .sort()
        // ['s', 't', 'u', 'd', 'e', 'n'] -> ['d', 'e', 'n', 's', 't', 'u']
        // .join('')
        // ['d', 'e', 'n', 's', 't', 'u'] -> "denstu"
        const key = [...new Set(words[i].split(''))].sort().join('')
        // i = 0 Map("denstu" -> ["student"])
        // i = 1 Map("denstu" -> ["student", "students"])
        // i = 2 Map("denstu" -> ["student", "students"], "dgo" -> ["dog"])
        // ...

        // get all words with given key or empty array
        const wordsByKey = map.has(key) ? map.get(key) : []
        wordsByKey.push(words[i])
        map.set(key, wordsByKey)
    }
    return [...map.values()]
}

console.log(groupByUniqueSymbols(words))
