// 先排序，后合并 O(nlogn) （sort()为快速排序，时间复杂度为O(nlogn)）
var merge = function (intervals) {
    const ans = []
    // 先排序
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    // 遍历每一项
    for (let i = 0; i < intervals.length; i++) {
        console.log('i=', i)
        // 该层循环每次遍历产生一个区间
        let left = intervals[i][0]
        let right = intervals[i][1]
        let count = 0 // 合并了几项
        // 判断是否有可合并的区间
        for (let j = i + 1; j < intervals.length; j++) {
            // 满足可合并的情况
            if (intervals[j][0] <= intervals[i][1]) {
                // 更新right
                right = Math.max(intervals[j][1], right)
                count++
            } else {
                // 不满足交叉则跳出循环
                break
            }
        }
        console.log('本次循环共找到', count, '项')
        // 跳过合并项
        i = i + count
        ans.push([left, right])
    }
    return ans
}

// 测试
const intervals = [
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
]

const result = merge(intervals)
console.log(result)
