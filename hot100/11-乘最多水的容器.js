/* 
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。

说明：你不能倾斜容器。

示例 1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例 2：
输入：height = [1,1]
输出：1

*/

var maxArea = function (height) {
    let i = 0
    let j = height.length - 1
    let maxArea = 0
    while (i < j) {
        if (height[i] < height[j]) {
            let area = (j - i) * height[i]
            if (area > maxArea) {
                maxArea = area
            }
            i++
        } else if (height[i] >= height[j]) {
            let area = (j - i) * height[j]
            if (area > maxArea) {
                maxArea = area
            }
            j--
        }
    }
    return maxArea
}

const height = [1,1]
console.log(maxArea(height))

/* 
双指针法：使用两个指针，一个指向数组的起始位置（left），另一个指向数组的末尾位置（right）。
计算面积：计算当前两个指针所指向的线段与x轴构成的容器的面积，面积由较短的那条线的高度和两个指针之间的距离决定。
移动指针：为了寻找可能更大的面积，移动较短的那条线的指针向内侧移动一位，因为移动较长的线的指针不会增加容器的高度，而移动较短的线的指针有可能找到更高的线，从而增加面积。
更新最大面积：在每次移动指针后，计算新的面积，并更新最大面积。
重复步骤：重复上述过程，直到两个指针相遇。
*/