var createCounter = function (n) {
    return () => {
        return n++
    }
}
// 原理：
// createCounter是一个高阶函数，即返回值仍然是一个函数
// counter是一个匿名函数，调用它会返回n，并使n+1，n存在于闭包内部
// 只要counter还活着，它所引用的外部变量就会一直活着（不被回收）

// 测试
const counter = createCounter(10)
const counter2 = createCounter(1)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
console.log(counter2()) // 1
console.log(counter2()) // 2
console.log(counter2()) // 3
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
