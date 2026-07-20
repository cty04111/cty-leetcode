// 思路：双层循环遍历除当前项外的所有项，计算乘积，汇总为数组 O(n²)（略）

// 思路：前缀积乘后缀积 O(n)
var productExceptSelf1 = function (nums) {
    const ans = []
    let leftProduct = 1
    const right = new Map()
    let rightProduct = 1
    // 先从右到左遍历计算后缀积 right[j]代表下标为j的项后的所有数字的乘积
    for (let j = nums.length - 1; j >= 0; j--) {
        right.set(j, rightProduct)
        rightProduct *= nums[j]
    }
    // 从左到右遍历计算前缀积并和后缀积相乘得到结果
    for (let i = 0; i < nums.length; i++) {
        ans.push(leftProduct * right.get(i))
        leftProduct *= nums[i]
    }
    return ans
}

// 优化：用数组储存
var productExceptSelf2 = function (nums) {
    const n = nums.length
    const ans = new Array(n)
    const right = new Array(n) // 改用数组

    let rightProduct = 1
    // 存储后缀积
    for (let j = n - 1; j >= 0; j--) {
        right[j] = rightProduct
        rightProduct *= nums[j]
    }

    let leftProduct = 1
    // 计算最终结果
    for (let i = 0; i < n; i++) {
        ans[i] = leftProduct * right[i]
        leftProduct *= nums[i]
    }

    return ans
}

// 测试
const nums = []
console.log(productExceptSelf(nums))
