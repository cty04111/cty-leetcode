/*
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

示例 2：
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

示例 3：
输入：nums = [1,0,1,2]
输出：3
*/

var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    const st = new Set(nums)
    let ans = [] // 所有的序列长度组成的数组
    for (x of st) {
        // 如果不是序列的第一项，跳过
        if (st.has(x - 1)) {
            continue
        } else {
            // 当前项不断+1并检查是否在哈希集合中
            let y = x + 1
            while (st.has(y)) {
                y++
            }
            // 循环结束代表找到的当前序列的最后一项（y-1）
            ans.push(y - x) // x 到 y-1 的组成的序列长度（y-1 - x + 1）
        }
    }
    return Math.max(...ans)
}

const nums = []
console.log(longestConsecutive(nums))
