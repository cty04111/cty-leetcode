/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 法一：暴力法 超时
// 时间复杂度 O(n*m) （循环 s n 次 * 判断数组是否相等 m 次）
var findAnagrams1 = function (s, p) {
    // 转为数组便于处理
    const sArr = s.split('')
    const pArr = p.split('')
    const pArrSort = pArr.sort()
    const ans = []
    for (let i = 0; i < s.length; i++) {
        if (p.includes(s[i])) {
            const current = sArr.slice(i, i + p.length)
            if (
                current.length === pArr.length &&
                current
                    .sort()
                    .every((value, index) => value === pArrSort[index])
            ) {
                ans.push(i)
            }
        }
    }
    return ans
}

// 法二：优化判断方法 
// 遍历每一项 -> 判断每个字母出现次数是否相同（p.length次 -> windowMap.size次）
// 辅助函数：判断两个字典内容是否相同
// 时间复杂度 O(n)
function areMapsEqual(map1, map2) {
    // 1. 先比较 size
    if (map1.size !== map2.size) return false

    // 2. 遍历 map1 的每个键值对
    for (const [key, val] of map1) {
        // 检查 map2 是否有该键，且值是否严格相等
        if (!map2.has(key) || map2.get(key) !== val) {
            return false
        }
    }
    return true
}

var findAnagrams2 = function (s, p) {
    if (s.length < p.length) {
        return []
    }
    const ans = []
    // 构建p和初始窗口中每个字母出现次数的字典，用于对比
    const pMap = new Map()
    const windowMap = new Map()
    for (let i = 0; i < p.length; i++) {
        const pcurrent = p[i]
        const scurrent = s[i]
        if (pMap.has(pcurrent)) {
            pMap.set(pcurrent, pMap.get(pcurrent) + 1)
        } else {
            pMap.set(pcurrent, 1)
        }
        if (windowMap.has(scurrent)) {
            windowMap.set(scurrent, windowMap.get(scurrent) + 1)
        } else {
            windowMap.set(scurrent, 1)
        }
    }
    // 判断初始窗口是否符合条件
    if (areMapsEqual(windowMap, pMap)) {
        ans.push(0)
    }
    // 移动窗口（i 代表窗口的左下标）
    for (let i = 1; i < s.length; i++) {
        // 判断窗口长度是否超出s，是则跳出循环
        if (i + p.length > s.length) {
            break
        }
        // 更新窗口字典
        // i 前一个字母的数量 -1，数量归零则清除
        const lastLetterNum = windowMap.get(s[i - 1])
        if (lastLetterNum > 1) {
            windowMap.set(s[i - 1], lastLetterNum - 1)
        } else {
            windowMap.delete(s[i - 1])
        }
        // 当前窗口右边界字母数量 +1，没有则创建
        if (windowMap.has(s[i + p.length - 1])) {
            windowMap.set(
                s[i + p.length - 1],
                windowMap.get(s[i + p.length - 1]) + 1,
            )
        } else {
            windowMap.set(s[i + p.length - 1], 1)
        }
        // 判断当前窗口字典是否等于p字典
        if (areMapsEqual(windowMap, pMap)) {
            ans.push(i)
        }
    }

    return ans
}
// 测试一下
const s = 'cbaebabacd'
const p = 'abc'
const result = findAnagrams2(s, p)
console.log(result)
