var findMissingElements = function (nums) {
    const ans = []
    // 遍历nums，找出最大值和最小值，同时构建集合
    let min = Infinity
    let max = -Infinity
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
        if (nums[i] < min) min = nums[i]
        set.add(nums[i])
    }
    // 遍历min - max的所有整数，判断是否在集合中
    // 不在集合中则加入ans
    for (let j = min; j <= max; j++) {
        if (!set.has(j)) {
            ans.push(j)
        }
    }
    return ans
}

// 测试
const nums = [5, 1, 6, 9, 4]
console.log(findMissingElements(nums))
