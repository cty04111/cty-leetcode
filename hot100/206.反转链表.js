// 双指针 时间复杂度 O(n) 空间复杂度 O(1)
var reverseList = function (head) {
    let currentNode = head
    // 长度为 0 或 1 的链表直接返回
    if (currentNode === null || currentNode.next === null) {
        return currentNode
    }
    let preNode = null
    while (currentNode !== null) {
        // 记录前前个节点
        let ppN = preNode
        // 移动节点
        preNode = currentNode
        currentNode = currentNode.next
        // 更新前一个节点的指向
        preNode.next = ppN
    }
    return preNode
}

// 写法优化
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

// 测试
// 链表节点定义
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)
const n6 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

let cN = n1
