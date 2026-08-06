var detectCycle = function (head) {
    const visited = new Set() // 已遍历的节点
    // 从头开始遍历链表
    let cur = head
    while (cur !== null) {
        // 判断当前节点是否已遍历过
        if (visited.has(cur)) {
            // 存在环形结构，直接返回
            return cur
        }
        // 记录当前的节点
        visited.add(cur)
        cur = cur.next
    }
    // 出循环代表没有环形结构
    return null
}

// 链表节点定义
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const p0 = new Node(3)
const p1 = new Node(2)
const p2 = new Node(0)
const p3 = new Node(4)

p0.next = p1
p1.next = p2
p2.next = p3
p3.next = p4
