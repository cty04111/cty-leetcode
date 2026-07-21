// 思路：不考虑负数，遍历数组，把正数按顺序排好（如果数组是[1,2,3,4,...]，这个数应该出现在哪个位置上？）
// 遍历排好的数组，找第一个与下标+1不相等的项（说明数组中没有找到对应的数，间断了）
var firstMissingPositive = function (nums) {
    if (nums.length === 1 && nums[0] === 1) {
        return 2
    }
    for (let i = 0; i < nums.length; i++) {
        // 注意：使用while交换，直到当前项的值为下标+1或出现负数或出现超出数组长度的大数（说明不存在值为当期下标+1的项）
        while (
            nums[i] >= 1 &&
            nums[i] <= nums.length &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            // 原地交换
            ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
        }
        console.log(nums)
    }

    // 再次遍历，找第一个间断的正数
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j + 1) {
            return j + 1
        }
    }
    // 出了循环仍未找到，则说明数组已连续排好，返回最后一项的值+ 1
    return nums[nums.length - 1] + 1
}

// 测试
const nums = [2, 1]
console.log(firstMissingPositive(nums))
