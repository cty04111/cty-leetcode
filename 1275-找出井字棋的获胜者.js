/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    // 把moves记录到一个二维的“棋盘”上，每个格子都有编号（下标），每格都有三种可能（0，A，B）
    const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ] // board[][]第一个参数为纵坐标，第二个参数为横坐标
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            board[moves[i][0]][moves[i][1]] = 'A'
        } // 如果i为偶数：则是A的操作，将棋盘对应位置记为A
        if (i % 2 !== 0) {
            board[moves[i][0]][moves[i][1]] = 'B'
        } // 如果i为奇数：则是B的操作，将棋盘对应位置记为B
    }
    console.log(board)
    for (let i = 0; i < board.length; i++) {
        if (
            ((board[i][0] === 'A' && board[i][1]) === 'A' && board[i][2]) ===
                'A' ||
            ((board[0][i] === 'A' && board[1][i]) === 'A' && board[2][i]) ===
                'A'
        ) {
            return 'A'
        }
        if (
            ((board[i][0] === 'B' && board[i][1]) === 'B' && board[i][2]) ===
                'B' ||
            ((board[0][i] === 'B' && board[1][i]) === 'B' && board[2][i]) ===
                'B'
        ) {
            return 'B'
        }
    }
    if (
        (board[0][0] === 'A' && board[1][1] === 'A' && board[2][2] === 'A') ||
        (board[0][2] === 'A' && board[1][1] === 'A' && board[2][0] === 'A')
    ) {
        return 'A'
    } else if (
        (board[0][0] === 'B' && board[1][1] === 'B' && board[2][2] === 'B') ||
        (board[0][2] === 'B' && board[1][1] === 'B' && board[2][0] === 'B')
    ) {
        return 'B'
    } else if (moves.length === 9) {
        return 'draw'
    } else if (moves.length !== 9) {
        return 'Pending'
    }
}

console.log(
    tictactoe([
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
    ]),
) // A
console.log(
    tictactoe([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
    ]),
) // B
console.log(
    tictactoe([
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2],
    ]),
) // draw

// 本题注意不要使用连等号
