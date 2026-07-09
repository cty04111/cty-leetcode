/**
 * @param {string} s
 * @return {number}
 */

// 法一：暴力枚举 O(n²)
var lengthOfLongestSubstring1 = function (s) {
    if (s.length === 0) {
        return 0
    }
    const ans = []
    for (let i = 0; i < s.length; i++) {
        let letters = []
        for (let j = i; j < s.length; j++) {
            if (!letters.includes(s[j])) {
                letters.push(s[j])
            } else {
                break
            }
        }
        ans.push(letters.length)
    }
    return Math.max(...ans)
}

// 法二：滑动窗口 O(n)
var lengthOfLongestSubstring = function (s) {
    let left = 0 // 窗口左边界
    let maxLen = 0 // 记录最大长度
    const map = new Map() // 记录每个字符最近一次出现的位置

    for (let right = 0; right < s.length; right++) {
        const char = s[right]

        // 如果当前字符已经在窗口内出现过（位置 >= left）
        if (map.has(char) && map.get(char) >= left) {
            // 将左边界移到该字符上次出现位置的下一位，保证窗口内无重复
            left = map.get(char) + 1
        }

        // 更新当前字符的最新位置
        map.set(char, right)

        // 更新最大长度（当前窗口大小 = right - left + 1）
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
}

// 测试一下

const s = 'abcabcbb'
const result = lengthOfLongestSubstring1(s)
console.log(result)
