Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return []
    }
    // 将原数组分为colCount个长度为rowsCount的子数组
    const subArrays = []
    for (let i = 0; i < this.length; i += rowsCount) {
        subArrays.push(this.slice(i, i + rowsCount))
    }
    // 反转下标为奇数的子数组
    for (let j = 0; j < subArrays.length; j++) {
        if (j % 2 === 1) {
            subArrays[j].reverse()
        }
    }
    // 将矩阵的行和列交换
    const ans = []
    for (let k = 0; k < rowsCount; k++) {
        const row = []
        subArrays.forEach((item) => {
            row.push(item[k])
        })
        ans.push(row)
    }
    return ans
}

const arr = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
]

arr.snail(5, 4)
