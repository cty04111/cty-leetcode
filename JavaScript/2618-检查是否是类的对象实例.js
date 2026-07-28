// 核心：instanceof左侧要求是一个对象，右侧要求是一个函数
// 如何处理非法的边界情况，将报错转换为true/false?
// 什么情况会报错? 1. 左边不是一个对象 2. 右边不是一个函数
var checkIfInstanceOf = function (obj, classFunction) {
    // 首先排除传入的值为null、undefined（Object(null/undefined)会返回空对象导致误判Object）或类不是一个函数的情况
    if (
        obj === null ||
        obj === undefined ||
        !(classFunction instanceof Function)
    ) {
        return false
    }
    // 将原始值转换为包装对象后检查类型
    return Object(obj) instanceof classFunction
}

// 测试
// 检查某个对象是否是定义的链表节点
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
const p1 = new ListNode(1)
const p2 = {
    val: 1,
    next: null,
}
console.log(checkIfInstanceOf(p1, ListNode)) // true
console.log(checkIfInstanceOf(p2, ListNode)) // false

// 检查原始值的类型（直接使用instanceof会报错）
console.log(checkIfInstanceOf(1, Number)) // true
console.log(checkIfInstanceOf(false, Boolean)) // true
console.log(checkIfInstanceOf('123', String)) // true
console.log(checkIfInstanceOf(null, Object)) // false
console.log(checkIfInstanceOf(undefined, Object)) // false

// 检查非法类型
console.log(checkIfInstanceOf({}, 'abc')) // false
