// homework
// Дан массив строк. 
// Нужно найти самый длинный общий префикс, 
// используя парадигму DivideAndConquer. 
// Пример, // arr = ["return","retard","reunion","rest"] // prefix = "re" 
// arr = ["cheer", "cheerful", "cheese"] 
// prefix = "chee" 
// arr = ["mirror", "nothing"] 
// prefix = "" 

// The longest common prefix
// arr = ["return","retard","reunion","rest"]
// left = ["return","retard"], prefix = "ret"
// right =  ["reunion","rest"], prefix = "re"
// find the longest common prefix of prefix from the left and prefix from the right
// ["ret", "re"] => prefix = "re"

// time complexity 
// O(n + m), n - word1.length, m - word2.length X
// O(n) - n - minimal of (word1.length, word2.length) V
 
// space complexity
function findCommonPrefixBetweenTwoWords(word1, word2) {
    // pseudocode
    // word1 = "return"
    // word2 = "retard"
    const minimalLengthOfWords = Math.min(word1.length, word2.length) // O(1)
    let i = 0
    for(;i < minimalLengthOfWords; i++) { // O(minimalLengthBetweenWords)
        const firstWordChar = word1.charAt(i) // O(1)
        const secondWordChar = word2.charAt(i) // O(1)
        if(firstWordChar !== secondWordChar) { // O(1)
            break;
        }
    }
    return word1.substring(0, i) // O(minimalLengthBetweenWords)
}

console.log(findCommonPrefixBetweenTwoWords("return","retard"))

    // word1 = "return"
    // word2 = "retard"
    // i = 0, firstWordChar = 'r',secondWordChar = 'r'
    // i = 1, firstWordChar = 'e', secondWordChar = 'e'
    // i = 2, firstWordChar = 't', secondWordChar = 't'
    // i = 3, firstWordChar = 'u', secondWordChar = 'a'


// Dynamic Array

