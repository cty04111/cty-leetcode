// 法一：递归
var flat1 = function (arr, n) {
    // 定义一个递归辅助函数（功能与原数组相同，包含一个递归层数参数，初始值为0）
    const flatten = (array, depth) => {
        const ans = []
        // 遍历数组的每一项
        for (let i = 0; i < array.length; i++) {
            // 如果遇到数组，且层数小于嵌套深度就继续扁平化，层数+1
            if (Array.isArray(array[i]) && depth < n) {
                ans.push(...flatten(array[i], depth + 1))
            } else {
                // 如果遇到普通数字，或已达到深度，就加入结果数组
                ans.push(array[i])
            }
        }
        return ans
    }
    return flatten(arr, 0)
}

// 基于法一优化写法
var flat2 = function (arr, n) {
    const ans = [] // 最终的结果，扁平化的结果直接加入
    const flatten = (array, n) => {
        // 遍历数组每一项
        for (let item of array) {
            if (Array.isArray(item) && n > 0) {
                flatten(item, n - 1)
            } else {
                ans.push(item)
            }
        }
    }
    flatten(arr, n)
    return ans
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat2(arr, 1))
