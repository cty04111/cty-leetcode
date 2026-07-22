// 法一：遍历矩阵，用数组标记出现0的行和列，再次遍历，将其置零
// 时间复杂度 O(m*n) 空间复杂度O(m+n)
var setZeroes1 = function (matrix) {
    const row = [] // 出现 0 的行
    const column = [] // 出现 0 的列
    // 双层for循环遍历矩阵每一项，i代表所在行下标，j代表所在列下标
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                row.push(i)
                column.push(j)
            }
        }
    }
    // 遍历每一行
    if (row.length > 0) {
        for (let i = 0; i < row.length; i++) {
            // 遍历下标为row[i]的行
            for (let j = 0; j < matrix[row[i]].length; j++) {
                matrix[row[i]][j] = 0
            }
        }
    }
    // 遍历每一列
    if (column.length > 0) {
        for (let i = 0; i < column.length; i++) {
            // 遍历下标为column[i]的列
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][column[i]] = 0
            }
        }
    }
}

// 法二：遍历数组，将出现0的行和列的第一项标记为0，再次遍历置零
// 时间复杂度 O(m*n)，空间复杂度 O(1)
var setZeroes2 = function (matrix) {
    let firstRowHas0 = false
    let firstColumnHas0 = false
    // 修改第一行、第一列前先判断其中是否有0，用于后续处理
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            firstRowHas0 = true
            break
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColumnHas0 = true
            break
        }
    }
    // 双层for循环遍历矩阵内层每一项，i代表所在行下标，j代表所在列下标
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                // 将出现0的行和列的第一项标记为0
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    // 再次遍历内层矩阵，i为当前行下标，j为当前列下标
    // 遍历第一行，遇到0就遍历该列置零
    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            // 遍历下标为j的列
            for (let i = 1; i < matrix.length; i++) {
                matrix[i][j] = 0
            }
        }
    }
    // 遍历第一列，遇到0就遍历该行置零
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            // 遍历下标为i的行
            for (let j = 1; j < matrix[i].length; j++) {
                matrix[i][j] = 0
            }
        }
    }
    // 单独处理第一行、第一列
    if (firstRowHas0) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }
    if (firstColumnHas0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
}

// 测试
const matrix = [[1], [0]]
setZeroes2(matrix)
console.log(matrix)
