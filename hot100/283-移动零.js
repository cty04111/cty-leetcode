/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

示例 2:
输入: nums = [0]
输出: [0]
*/

// 方法1：交换法
var moveZeroes1 = function (nums) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            // 交换非零元素到前面
            // 解构赋值写法（会产生额外开销）：[nums[i], nums[j]] = [nums[j], nums[i]]
            const temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++ // i 始终指向数组中的第一个0
        }
    }
}

// 方法2：覆盖法
var moveZeroes2 = function (nums) {
    let index = 0

    // 第一次遍历：将所有非零元素移到前面
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }

    // 第二次遍历：将剩余位置补零
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
}

// 方法3：暴力法
var moveZeroes3 = function (nums) {
    let i = 0
    let count = 0
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            count++
        } else {
            i++
        }
    }
    for (let j = 0; j < count; j++) {
        nums.push(0)
    }
}

const test = generateTestArray(100000, 99999)
const nums1 = [...test]
const nums2 = [...test]
const nums3 = [...test]

console.time('方法1')
moveZeroes1(nums1) // O(n)
console.log(nums1)
console.timeEnd('方法1')

console.time('方法2')
moveZeroes2(nums2) // O(n)
console.log(nums2)
console.timeEnd('方法2')

console.time('方法3')
moveZeroes3(nums3) // O(n²)
console.log(nums3)
console.timeEnd('方法3')

/**
 * 生成移动零问题的测试数组
 * @param {number} length - 数组总长度
 * @param {number} zeroCount - 零的数量
 * @returns {Array} 生成的测试数组
 */
function generateTestArray(length, zeroCount) {
    // 参数验证
    if (zeroCount > length) {
        throw new Error(`零的数量(${zeroCount})不能超过数组长度(${length})`)
    }
    if (zeroCount < 0 || length < 0) {
        throw new Error('长度和零的数量必须为非负数')
    }

    // 生成非零元素（1-100之间的随机数）
    const nonZeroCount = length - zeroCount
    const nonZeroArray = Array.from(
        { length: nonZeroCount },
        () => Math.floor(Math.random() * 100) + 1,
    )

    // 创建零数组
    const zeroArray = Array(zeroCount).fill(0)

    // 合并并随机打乱顺序
    const result = [...nonZeroArray, ...zeroArray]
    return shuffleArray(result)
}

/**
 * Fisher-Yates 洗牌算法（随机打乱数组）
 * @param {Array} arr - 要打乱的数组
 * @returns {Array} 打乱后的数组
 */
function shuffleArray(arr) {
    const array = [...arr]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}
