/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let countX = 0
    let countY = 0
    for(let i =0;i<moves.length;i++){
        if(moves[i]==='U'){
            countY++
        }
        if(moves[i]==='D'){
            countY--
        }
        if(moves[i]==='L'){
            countX--
        }
        if(moves[i]==='R'){
            countX++
        }
    }
    if(countX===0&&countY===0){
        return true
    }
    return false
}

const moves = 'ULULDRRD'
console.log(judgeCircle(moves))