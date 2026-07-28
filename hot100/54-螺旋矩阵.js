var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) return []

    const ans = []
    // 行数
    const m = matrix.length
    // 列数
    const n = matrix[0].length
    // 总步数
    const total = m * n
    // 已访问集合
    const visited = new Set()

    // 方向数组：右、下、左、上
    const directions = [
        [0, 1], // 右
        [1, 0], // 下
        [0, -1], // 左
        [-1, 0], // 上
    ]

    let row = 0,
        col = 0
    let dirIndex = 0 // 当前方向索引

    while (ans.length < total) {
        // 将当前元素加入结果
        ans.push(matrix[row][col])
        visited.add(`${row},${col}`)

        // 尝试按当前方向前进
        const nextRow = row + directions[dirIndex][0]
        const nextCol = col + directions[dirIndex][1]

        // 如果下一个位置超出边界或已访问，切换方向
        if (
            nextRow < 0 ||
            nextRow >= m ||
            nextCol < 0 ||
            nextCol >= n ||
            visited.has(`${nextRow},${nextCol}`)
        ) {
            // 切换到下一个方向（顺时针）
            dirIndex = (dirIndex + 1) % 4
        }

        // 更新位置到下一步
        row += directions[dirIndex][0]
        col += directions[dirIndex][1]
    }

    return ans
}

// 测试
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]
console.log(spiralOrder(matrix))
