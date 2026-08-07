// 大数加法：时间复杂度 O(max(m,n))
var addTwoNumbers = function (l1, l2) {
    // 双指针同速遍历两个链表
    let cur1 = l1 // l1当前节点
    let cur2 = l2 // l2当前节点
    let extra = 0 // 进到下一位的数字，每次循环动态更新
    let arr = []
    while (cur1 !== null || cur2 !== null) {
        const val1 = cur1 === null ? 0 : cur1.val // l1节点的值
        const val2 = cur2 === null ? 0 : cur2.val // l2节点的值
        const sum = val1 + val2 + extra
        const newVal = sum < 10 ? sum : sum - 10 // 新建节点的值
        extra = sum < 10 ? 0 : +String(sum)[0] // 更新进位数字
        arr.push(newVal)
        if (cur1 === null) {
            cur2 = cur2.next
        } else if (cur2 === null) {
            cur1 = cur1.next
        } else {
            cur1 = cur1.next
            cur2 = cur2.next
        }
        if (cur1 === null && cur2 === null) {
            arr.push(extra)
        }
    }
    // 根据数组构建链表
    const head = new ListNode(arr[0])
    let curNode = head
    for (let i = 1; i < arr.length; i++) {
        curNode.next = new ListNode(arr[i])
        curNode = curNode.next
    }
    return head
}

// 链表节点定义
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const p11 = new ListNode(4)
const p12 = new ListNode(1)
const p13 = new ListNode(5)
const p14 = new ListNode(4)
const p15 = new ListNode(1)
const p16 = new ListNode(1)
p11.next = p12
p12.next = p13
p13.next = p14
p14.next = p15
p15.next = p16

const p21 = new ListNode(0)
const p22 = new ListNode(1)
const p23 = new ListNode(8)
const p24 = new ListNode(9)
const p25 = new ListNode(1)
const p26 = new ListNode(9)
const p27 = new ListNode(1)
p21.next = p22
p22.next = p23
p23.next = p24
p24.next = p25
p25.next = p26
p26.next = p27

let cur = addTwoNumbers(p11, p21)
while (cur !== null) {
    console.log(cur.val)
    cur = cur.next
}
