// 法一：每次窗口滑动遍历整个窗口找出最大值 O(n*k) 略
// 法二：单调队列 O(n)
var maxSlidingWindow2 = function (nums, k) {
    const ans = []
    // 维护一个递减的队列（记录下标）
    const q = []
    // 开始滑动，i 为滑动窗口的右边界，i - k + 1为窗口左边界
    for (let i = 0; i < nums.length; i++) {
        // 清理过期队首
        if (q[0] < i - k + 1) {
            q.shift()
        }
        // 遍历队列，从队尾去除所有比右边界小的数，遇到大的停止
        for (let j = q.length - 1; j >= 0; j--) {
            if (nums[q[j]] < nums[i]) {
                q.splice(j, 1)
            } else {
                break
            }
        }
        // 新下标入队
        q.push(i)
        //  窗口构建完整后，开始记录最大值
        if (i - k + 1 >= 0) {
            ans.push(nums[q[0]])
        }
    }
    return ans
}

// 法三：优化维护单调算法，利用单调特性去除队尾元素 / 尽量避免使用 splice（会移动整个数组）
var maxSlidingWindow3 = function (nums, k) {
    const ans = []
    const q = [] // 存储下标
    for (let i = 0; i < nums.length; i++) {
        // 清理过期
        if (q.length && q[0] < i - k + 1) q.shift() // shift O(n) 但 js 可接受，或用指针优化
        // 维护单调递减
        while (q.length && nums[q[q.length - 1]] < nums[i]) {
            q.pop()
        }
        q.push(i)
        if (i >= k - 1) ans.push(nums[q[0]])
    }
    return ans
}

// 法四：使用头指针，避免使用 shift
var maxSlidingWindow4 = function (nums, k) {
    const ans = []
    const q = [] // 存储下标
    let head = 0 // 用 head 标记队首位置，避免 shift()
    for (let i = 0; i < nums.length; i++) {
        // 移除队首过期元素（只移动指针）
        if (head < q.length && q[head] < i - k + 1) head++
        // 维护单调递减
        while (q.length > head && nums[q[q.length - 1]] < nums[i]) {
            q.pop()
        }
        q.push(i)
        if (i >= k - 1) ans.push(nums[q[head]])
    }
    return ans
}

// 测试一下
const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3
const result = maxSlidingWindow4(nums, k)
console.log(result)
