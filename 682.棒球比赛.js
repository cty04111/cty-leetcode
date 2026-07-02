/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const countBoard = []
    let finalScore = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            countBoard.push(
                +(
                    countBoard[countBoard.length - 1] +
                    countBoard[countBoard.length - 2]
                ),
            )
            console.log(countBoard)
        }
        else if (operations[i] === 'D') {
            countBoard.push(+(countBoard[countBoard.length - 1] * 2))
            console.log(countBoard)
        }
        else if (operations[i] === 'C') {
            countBoard.pop()
            console.log(countBoard)
        }
        else {
            countBoard.push(+(operations[i]))
            console.log(countBoard)
        }
    }
    for (let j = 0; j < countBoard.length; j++) {
        finalScore += countBoard[j]
    }
    return finalScore
}

const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+']
console.log(calPoints(ops))

// 本题注意使用 else if代表互斥的条件
// 使用 if 会operations[i] === 'D'时意外执行 else