// 法一：前缀和
var maxSubArray1 = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let sum = nums[0]
    let minSum = nums[0]
    let ans = nums[0]
    console.log(`sum:${sum}, min${minSum}, ans:${ans}`)
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
        // 更新后前缀和-前前缀和的最大值
        if (minSum < 0 && sum - minSum > ans) {
            ans = sum - minSum
        } else if (nums[i] > 0 && sum > ans) {
            ans = sum
        }
        // 更新历史最小值
        if (sum < minSum) {
            minSum = sum
        }
        console.log(`sum:${sum}, min${minSum}, ans:${ans}`)
    }
    return ans
}

// 法二：优化判断写法
var maxSubArray2 = function (nums) {
    let sum = 0
    let minSum = 0
    let ans = -Infinity
    for (let num of nums) {
        sum += num
        ans = Math.max(ans, sum - minSum)
        minSum = Math.min(minSum, sum)
    }
    return ans
}

// 测试
const nums = [-2, -1]
console.log(maxSubArray(nums))
