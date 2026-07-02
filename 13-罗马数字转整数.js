/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === 'I') {
            count++
        }
        if (s[i] === 'V') {
            if (s[i - 1] === 'I') {
                count += 4
                i --
            } else {
                count += 5
            }
        }
        if (s[i] === 'X') {
            if (s[i - 1] === 'I') {
                count += 9
                i --
            } else {
                count += 10
            }
        }
        if (s[i] === 'L') {
            if (s[i - 1] === 'X') {
                count += 40
                i --
            } else {
                count += 50
            }
        }
        if (s[i] === 'C') {
            if (s[i - 1] === 'X') {
                count += 90
                i --
            } else {
                count += 100
            }
        }
        if (s[i] === 'D') {
            if (s[i - 1] === 'C') {
                count += 400
                i --
            } else {
                count += 500
            }
        }
        if (s[i] === 'M') {
            if (s[i - 1] === 'C') {
                count += 900
                i --
            } else {
                count += 1000
            }
        }
    }
    return count
}

console.log(romanToInt('MCMXCIV')) // 1994
