/* 
    示例
    输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// 辅助函数：判断是否是字母异位词
function isAnagram(s, t) {
    // 长度不同肯定不是
    if (s.length !== t.length) return false
    // 排序后比较
    return s.split('').sort().join('') === t.split('').sort().join('')
}

// 方法1：双指针遍历法
var groupAnagrams1 = function (strs) {
    const result = []
    const used = new Array(strs.length).fill(false) // 标记已使用的单词
    for (let i = 0; i < strs.length; i++) {
        if (used[i]) continue // 跳过已分组的单词
        const group = [strs[i]]
        used[i] = true
        for (let j = i + 1; j < strs.length; j++) {
            if (!used[j] && isAnagram(strs[i], strs[j])) {
                group.push(strs[j])
                used[j] = true //
            }
        }
        result.push(group)
    }
    return result
}

// 方法2：哈希表缓存法
var groupAnagrams2 = function (strs) {
    const map = new Map()
    for (const str of strs) {
        // 排序作为key
        const key = str.split('').sort().join('') // // 将字符串中的字母按字母顺序重新排序
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str)
    }
    return Array.from(map.values())
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams1(strs))
console.log(groupAnagrams2(strs))

/* 
    双指针法思路：一层遍历确定要找的字符串，二层遍历在剩余数组中找目标字符串，添加进group数组中
    使用used数组记录该字符串是否已被添加进group中，遍历到true时跳过该项
    一次二层遍历结束即产生一个group，添加到最终结果result数组中
    哈希表法思路：遍历字符串数组，将当前字符串重新排序的结果作为key
    每次检查是否key已在哈希表中，否则创建一对新的key和value（空数组），是则向key对应的value数组中加入当前字符串
    遍历结束后会得到一个哈希表，结构如下：
    {
        // key: value,
        'aet': ['eat', 'tea', 'ate'],
        'ant': ['tan', 'nat'],
        'abt': ['bat']
        ...
    }
    最终返回由该哈希表的所有value组成的数组即可
    一个是挨个比较查找，一个是根据索引直接拿到，所以哈希表更快
*/