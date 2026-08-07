var areDeeplyEqual = function (o1, o2) {
    // 原始值相等的情况
    if (typeof o1 === typeof o2 && o1 === o2) {
        return true
    }
    // 都是数组的情况
    else if (Array.isArray(o1) && Array.isArray(o2)) {
        if (o1.length !== o2.length) {
            return false
        }
        for (let i = 0; i < o1.length; i++) {
            if (o1[i] !== o2[i]) {
                return false
            }
            return true
        }
    }
    // 都是对象的情况
    else if (
        o1 !== null &&
        o2 !== null &&
        Object.getPrototypeOf(o1) === Object.prototype &&
        Object.getPrototypeOf(o2) === Object.prototype
    ) {
        if (Object.keys(o1).length !== Object.keys(o2).length) {
            return false
        }
        for (key in o1) {
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

console.log(areDeeplyEqual())
