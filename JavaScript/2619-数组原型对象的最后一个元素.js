// 让任何数组都可以调用，添加在原型链上即可
Array.prototype.last = function () {
    if (this.length === 0) {
        return -1
    } else {
        return this[this.length - 1]
    }
}

// 测试
console.log([null, {}, 3].last())
