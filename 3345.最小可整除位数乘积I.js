var smallestNumber = function (n, t) {
    for (let i = n; n < Infinity; i++) {
        // 计算各位数字之乘积
        const str = String(i)
        let count = 1 // 乘积
        for (const item of str) {
            count *= +item
        }

        if (count % t === 0) {
            return i
        }
    }
}

console.log(smallestNumber(15, 3))
