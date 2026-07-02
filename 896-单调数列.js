var isMonotonic = function (nums) {
    let flag = true // 默认是单调数组

    if (nums.length === 1) {
        return flag
    } // 长度为1，一定为单调数组

    // 寻找第一个发生变化的数
    let flag2 = false // 还未找到发生变化的数的下标
    let changeIndex
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[0]) {
            flag2 = true // 找到了
            changeIndex = i // 下标是 i
            break // 停止循环
        }
    }
    if (!flag2) {
        return flag
    } // 没有找到第一个发生变化的数，一定为单调数组

    for (let j = changeIndex - 1; j < nums.length - 1; j++) {
        if (
            (nums[j + 1] - nums[j]) *
                (nums[changeIndex] - nums[changeIndex - 1]) <
            0
        ) {
            flag = false
        }
    } // 找是否有两项之差与发生变化的数与前一项只差异号的情况，有则说明不是单调
    return flag
}
const nums = [1, 2, 3, 4, 5, 4, 7, 8]
console.log(isMonotonic(nums))
