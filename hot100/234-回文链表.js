// 法一：结合反转列表，转换前后均转换为数组，判断是否相等
// 引入反转列表函数
var reverseList = function (head) {
    let prev = null
    let curr = head
    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

var isPalindrome1 = function (head) {
    let current = head // 当前遍历的节点
    const before = [] // 正序的所有元素
    const after = [] // 倒序的所有元素
    // 遍历列表
    while (current !== null) {
        before.push(current.val)
        current = current.next
    }
    // 反转列表，再次遍历
    let currentR = reverseList(head) // 当前遍历的节点
    while (currentR !== null) {
        after.push(currentR.val)
        currentR = currentR.next
    }
    // 遍历两个数组，同一下标对应值不同就返回false（判断两个数组是否是逐元素相等的数组）
    for (let i = 0; i < before.length; i++) {
        if (before[i] !== after[i]) {
            return false
        }
    }
    return true
}

// 法二：基于法一优化，只遍历一次，双指针判断是否是回文数组
var isPalindrome2 = function (head) {
    let current = head // 当前遍历的节点
    const arr = [] // 正序的所有元素
    // 遍历列表
    while (current !== null) {
        arr.push(current.val)
        current = current.next
    }
    // 双指针遍历数组，双指针下标对应值不同就返回false（判断两个数组是否是回文数组）
    let i = 0
    let j = arr.length - 1
    while (i <= j) {
        if (arr[j] !== arr[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

// 链表结构
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(3)
const n6 = new Node(2)
const n7 = new Node(1)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
n6.next = n7

console.log(isPalindrome2(n1))
