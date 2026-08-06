// 经典做法 使用死循环实现
function sleep1(millis) {
    const start = Date.now()
    while (Date.now() - start < millis) {}
}

// 使用Promise实现
async function sleep2(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}

let t = Date.now()
sleep1(5000).then(() => {
    console.log(Date.now() - t) // 100
})
