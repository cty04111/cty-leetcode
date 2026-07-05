/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
    let i = 0 // 左指针
    let j = height.length - 1 // 右指针
    let leftMax = 0
    let rightMax = 0
    let sum = 0
    while (i <= j) {
        if (height[i] < height[j]) {
            if (height[i] > leftMax) {
                leftMax = height[i]
            } else {
                sum += leftMax - height[i]
            }
            i++
        } else {
            if (height[j] > rightMax) {
                rightMax = height[j]
            } else {
                sum += rightMax - height[j]
            }
            j--
        }
    }
    return sum
}

// 测试一下
const height = [4, 2, 3]
const result = trap(height)
console.log(result)
