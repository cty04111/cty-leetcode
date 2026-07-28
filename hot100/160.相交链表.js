// 法一：哈希集合 时间复杂度 O(m+n) 空间复杂度 O(m)
var getIntersectionNode = function (headA, headB) {
    // 用集合储存headA所在链表出现过的节点地址
    const set = new Set()
    let currentNodeA = headA
    set.add(currentNodeA)
    // 遍历nodeA所在链表，将所有节点地址加入集合
    while (currentNodeA.next !== null) {
        currentNodeA = currentNodeA.next
        set.add(currentNodeA)
    }
    // 遍历nodeB所在链表，检查节点是否在集合中出现过
    let currentNodeB = headB
    if (set.has(currentNodeB)) {
        return currentNodeB
    }
    while (currentNodeB.next !== null) {
        currentNodeB = currentNodeB.next
        if (set.has(currentNodeB)) {
            return currentNodeB
        }
    }
    return null
}
// 法二：双指针 时间复杂度 O(m+n) 空间复杂度 O(1)
// 若两链表相交，设链表 A 独有部分为 a，链表 B 独有部分为 b，公共部分为 c。那么 pA 走 a + c + b 步，pB 走 b + c + a 步，步数相等，它们会在公共部分的第一个节点（相交点）相遇。
// 若不相交，则 pA 走 a + b 步，pB 走 b + a 步，最终同时到达 null，循环结束，返回 null。
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null
    }
    let pA = headA,
        pB = headB
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    }
    return pA
}

// 测试
// 链表节点定义
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const node1 = new ListNode(1)
const node2 = new ListNode(9)
const node3 = new ListNode(1)
const node4 = new ListNode(2)
const node5 = new ListNode(4)
const node6 = new ListNode(3)

// listA = [1,9,1,2,4], listB = [3,2,4]
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node6.next = node4

console.log(getIntersectionNode(node1, node6))
