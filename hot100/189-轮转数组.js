// 思路：把数组最后k项取出，插到开头 O(n*k) 超时
var rotate1 = function (nums, k) {
    for (let i = 0; i < k % nums.length; i++) {
        const lastNum = nums.pop()
        nums.unshift(lastNum)
    }
}

// 优化：使用展开运算符一次性取出k个数，尽量减少unshift的次数 O(n)
var rotate2 = function (nums, k) {
    k = nums.length % k
    nums.unshift(...nums.splice(nums.length - k, k))
}

// 思路：三次翻转，1. 整个数组翻转 2. 前k个数翻转 3. 后nums.length-k个数翻转 O(n)
// 辅助函数，翻转数组下标start-end的部分
const reverse = (arr, start, end) => {
    while (start < end) {
        ;[arr[start], arr[end]] = [arr[end], arr[start]] // 解构赋值，交换start和end的值
        start++
        end--
    }
}
var rotate3 = function (nums, k) {
    k = nums.length % k
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
}

// 测试
const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3
rotate3(nums, k)
console.log(nums)
