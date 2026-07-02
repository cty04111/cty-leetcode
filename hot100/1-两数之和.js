// 方法1：双指针法
var twoSum1 = function () {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// 方法2：数组缓存法
var twoSum2 = function (nums, target) {
    const arr = []
    for (let i = 0; i < nums.length; i++) {
        // 遍历缓存，查找目标元素
        for (let j = 0; j < nums.length; j++) {
            if (arr[j] + nums[i] === target) {
                return [j, i]
            }
        }
        arr.push(nums[i])
    }
    // 没有找到的情况：返回空数组
    return []
}

// 方法3：哈希表缓存法（基于法二优化）
var twoSum3 = function (nums, target) {
    const hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 直接查出目标元素
        if (hashMap.has(target - nums[i])) {
            return [hashMap.get(target - nums[i]), i]
        }
        hashMap.set(nums[i], i)
    }
    // 没有找到的情况：返回空数组
    return []
}

// 方法4：对象缓存法（与法三本质相同）
var twoSum4 = function (nums, target) {
    const obj = {} // 用对象代替Map
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]
        if (obj[need] !== undefined) {
            // 检查是否存在
            return [obj[need], i]
        }
        obj[nums[i]] = i // 存储：值 -> 索引
    }
    return []
}

// ========== 测试数据生成器 ==========
function generateTestData(size) {
    // 创建一个大数据集，目标值在最后才匹配
    let nums = []
    for (let i = 0; i < size - 2; i++) {
        nums.push(i)
    }
    // 最后两个数相加等于目标值
    nums.push(size - 2) // 倒数第二个数
    nums.push(size * 2) // 最后一个数
    let target = size - 2 + size * 2 // 目标值

    return { nums, target }
}

const test = generateTestData(10000)
const nums = test.nums
const target = test.target
console.time('方法1')
console.log(twoSum1(nums, target)) // O(n²)
console.timeEnd('方法1')
console.time('方法2')
console.log(twoSum2(nums, target)) // O(n²)
console.timeEnd('方法2')
console.time('方法3')
console.log(twoSum3(nums, target)) // O(n)
console.timeEnd('方法3')
console.time('方法4')
console.log(twoSum4(nums, target)) // O(n)
console.timeEnd('方法4')

/*
    双指针法思路：一层遍历确定要找的数，二层遍历剩余数组中找目标数
    缓存法思路：遍历数组的同时构建缓存，查找缓存中是否有与当前指针指向的数的和为target的数
    使用哈希表之所以快是因为查找缓存中的目标树时不需要一项一项的遍历，只需要使用.has()方法就可以判断是否有目标数，
    使用.get()方法拿到目标数在数组中的位置
    使用对象同理
    哈希表/对象结构：key: 数, value: 在nums数组中的下标
*/
