// 法一：数组 + 排序 时间复杂度 O((n+m)log(n+m)) 空间复杂度 O(n+m)
var mergeTwoLists1 = function (list1, list2) {
    let cur1 = list1 // list1的当前节点
    let cur2 = list2 // list2的当前节点
    // 遍历两个链表，使用数组记录所有节点
    const allNodes = []
    while (cur1 !== null) {
        allNodes.push(cur1)
        cur1 = cur1.next
    }
    while (cur2 !== null) {
        allNodes.push(cur2)
        cur2 = cur2.next
    }
    // 将数组按升序排序并重新构建列表
    allNodes.sort((node1, node2) => {
        return node1.val - node2.val
    })
    for (let i = 0; i < allNodes.length - 1; i++) {
        allNodes[i].next = allNodes[i + 1]
    }
    return allNodes[0] === undefined ? null : allNodes[0] // 防止出现输入两个空链表出现undefined的情况
}

// 法二：双指针
var mergeTwoLists2 = function (list1, list2) {
    let head1 = list1 // list1 首个节点
    let head2 = list2 // list2 首个节点
    let cur = list1 // 当前关注的节点
    let curIndex = '1' // 当前关注的节点位于list1还是list2
    while (cur !== null) {
        // 操作前暂存两个头节点的后继节点
        const next1 = head1.next
        const next2 = head2.next
        // 更新cur和头节点
        if (curIndex === '1') {
            if (cur.next.val >= head2.val) {
                cur.next = head2
                head1 = next1
                curIndex = '2'
            } else {
                cur.next = next1
                h
            }
        }
        if (curIndex === '2') {
            if (cur.val <= head1.val) {
                cur.next = head1
                head2 = next2
                curIndex = '2'
            } else {
                cur.next = head1
                head2 = next2
                curIndex = '1'
            }
        }
    }
}

// 法三：递归
var mergeTwoLists3 = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

// 链表节点定义
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// list1
const p10 = new Node(1)
const p11 = new Node(3)
const p12 = new Node(66)
const p13 = new Node(99)
p10.next = p11
p11.next = p12
p12.next = p13
// list2
const p20 = new Node(2)
const p21 = new Node(4)
const p22 = new Node(6)
const p23 = new Node(8)
p20.next = p21
p21.next = p22
p22.next = p23

mergeTwoLists(p10, p20)
