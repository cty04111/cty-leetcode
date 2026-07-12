// 法一：暴力法 O(n³) 超时
var subarraySum1 = function (nums, k) {
    let i = 1 // 窗口长度，从 1 到 nums.length
    let count = 0
    while (i <= nums.length) {
        // j 是窗口的左边界下标，从 0 开始，直到窗口右边界抵达数组结尾
        for (let j = 0; j <= nums.length - i; j++) {
            let sum = 0
            // 统计当前窗口中所有数字之和
            for (let l = j; l <= j + i - 1; l++) {
                sum += nums[l]
            }
            if (sum === k) {
                count++
            }
        }
        i++
    }
    return count
}

// 法二：优化窗口内所有数的和的算法 O(n²) 超时
var subarraySum2 = function (nums, k) {
    let i = 1 // 窗口长度，从 1 到 nums.length
    let count = 0
    while (i <= nums.length) {
        // 统计第一个窗口（左 0 右 i-1）中所有数字之和，并判断是否满足条件
        let sum = 0
        for (let l = 0; l <= i - 1; l++) {
            sum += nums[l]
        }
        if (sum === k) {
            count++
        }
        // 开始滑动窗口
        // j 是窗口的左边界下标，从 1 开始，直到窗口右边界抵达数组结尾
        for (let j = 1; j <= nums.length - i; j++) {
            // 更新数字之和，并判断是否满足条件
            sum = sum - nums[j - 1] + nums[j + i - 1]
            if (sum === k) {
                count++
            }
        }
        i++
    }
    return count
}

// 法三：用哈希表缓存从数组开头到当前的下标的所有数字之和 O(n)
// 思路类似于1-两数之和
var subarraySum3 = function (nums, k) {
    let count = 0
    const map = new Map()
    let sum = 0 // 从数组开头到当前的下标的所有数字之和
    map.set(0, 1) // key: 每种sum ; value: 出现次数（等于能找到多少个满足条件的子数组）
    for (let i = 0; i < nums.length; i++) {
        // 更新sum
        sum += nums[i]
        // 统计 sum - k 在字典中出现的次数
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        // 更新字典
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }
    return count
}


// 测试一下
const nums = [6, 4, 3, 1]
const k = 10
const result = subarraySum3(nums, k)
console.log(result)
