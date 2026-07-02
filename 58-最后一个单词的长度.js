/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.trim().split(' ') // 去除两端空格后用空格分割，形成字符串数组
    return arr[arr.length - 1].toString().length // 取数组最后一项，转成字符串，得到长度
}

const s = 'luffy is still joyboy'
console.log(lengthOfLastWord(s)) // 6
