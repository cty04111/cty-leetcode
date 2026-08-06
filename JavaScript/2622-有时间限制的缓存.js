var TimeLimitedCache = function () {}

TimeLimitedCache.prototype.set = function (key, value, duration) {
    this.key = value
    setTimeout(() => {
        this.key = -1
    }, duration)
}

TimeLimitedCache.prototype.get = function (key) {}

TimeLimitedCache.prototype.count = function () {}

const timeLimitedObj = new TimeLimitedCache()
timeLimitedObj.set('name', '王小明', 2000)
setTimeout(() => {
    console.log(timeLimitedObj.name)
}, 1000)
setTimeout(() => {
    console.log(timeLimitedObj.name)
}, 3000)
