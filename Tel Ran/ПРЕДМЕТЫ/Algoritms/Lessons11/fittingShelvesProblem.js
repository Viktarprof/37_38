function fittingShelves(w, n, m) {
    const smallerShelfLength = Math.min(m, n)
    const biggerShelfLength = Math.max(m, n)

    let numBigShelves = 0;
    let numSmallShelves = Math.floor(w / smallerShelfLength)
    let minSpace = w - numSmallShelves * smallerShelfLength

    let tmpNumBigShelves = numBigShelves
    let tmpNumSmallShelves = numSmallShelves
    let tmpMinSpace = minSpace

    let remainingWall = w
    // while we have enough space for another big shelf
    while (remainingWall >= biggerShelfLength) {
        // we add big shelf to temporary solution
        tmpNumBigShelves += 1
        remainingWall = remainingWall - biggerShelfLength
        // we fill all other remaining space with small shelves
        tmpNumSmallShelves = Math.floor(remainingWall / smallerShelfLength)
        // recalculate the remaining space
        tmpMinSpace = remainingWall % smallerShelfLength

        // if the remaining space is less or equal that min space of previous solution
        if (tmpMinSpace <= minSpace) {
            // then we save the new solution
            numBigShelves = tmpNumBigShelves
            numSmallShelves = tmpNumSmallShelves
            minSpace = tmpMinSpace
        }
    }

    return [numBigShelves, numSmallShelves, minSpace]
}

const res = fittingShelves(11, 2, 4)
console.log("numBigShelves = " + res[0] +
        " numSmallShelves = " + res[1] +
        " minSpace = " + res[2])

const res1 = fittingShelves(11, 3, 5)
console.log("numBigShelves = " + res1[0] +
    " numSmallShelves = " + res1[1] +
    " minSpace = " + res1[2])