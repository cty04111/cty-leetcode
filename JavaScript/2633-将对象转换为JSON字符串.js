var jsonStringify = function (object) {
    // 遇到除字符串外的非对象值
    if (
        typeof object === 'number' ||
        typeof object === 'boolean' ||
        object === null ||
        object === undefined
    ) {
        return String(object)
    }
    // 遇到字符串
    if (typeof object === 'string') {
        return '"' + object + '"'
    }
    // 遇到数组
    if (Array.isArray(object)) {
        let ans = '['
        for (key in object) {
            ans += jsonStringify(object[key]) + ','
        }
        if (ans[ans.length - 1] === ',') {
            return ans.slice(0, -1) + ']'
        } else {
            return ans + ']'
        }
    }
    // 遇到对象
    if (Object.getPrototypeOf(object) === Object.prototype) {
        let ans = '{'
        for (key in object) {
            ans += '"' + key + '"' + ':' + jsonStringify(object[key]) + ','
        }
        if (ans[ans.length - 1] === ',') {
            return ans.slice(0, -1) + '}'
        } else {
            return ans + '}'
        }
    }
}

const p1 = {
    name: 'cty',
    age: 18,
    hobbies: ['guitar', 'programming'],
    teacher: [
        {
            id: 1,
            name: 'yuanjin',
        },
        {
            id: 2,
            name: 'xiejie',
        },
        {},
    ],
}

console.log(jsonStringify(p1))
