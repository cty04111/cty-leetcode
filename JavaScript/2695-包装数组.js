class ArrayWrapper {
    constructor(nums) {
        this.nums = nums
    }
    // 隐式类型转换：期望值为number调用valueOf，期望值为string调用toString
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0)
    }
    toString() {
        return `[${this.nums.join(',')}]`
    }
}

const obj1 = new ArrayWrapper([1, 2, 3])
const obj2 = new ArrayWrapper([4, 5, 6])

console.log(obj1 + obj2)
console.log(String(obj1))