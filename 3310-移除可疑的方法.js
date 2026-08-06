// 有向图 dfs 全图遍历
// 题目理解：[A, B] 等价于 方法A调用了方法B 等价于 A -> B （构成有向图）
// 可疑方法所指向的也是可疑方法
// 当构成的有向图是非连通图，且一组连通分量全部为可疑方法时，就把这组连通分量全部删除

// 引入辅助函数
// DFS
const dfs = (graph, node, visited = new Set(), result = []) => {
    visited.add(node)
    result.push(node)
    for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result)
        }
    }
    return result
}

// 判断从某节点开始dfs是否完整的遍历一个连通分量
function isCompleteWeakComponent(graph, start) {
    const visited = new Set()
    const result = []
    dfs(graph, start, visited, result) // 使用你提供的 dfs 函数

    // 遍历所有节点和边
    for (const [u, neighbors] of graph) {
        for (const v of neighbors) {
            const uIn = visited.has(u)
            const vIn = visited.has(v)
            if (uIn !== vIn) {
                // 一端在集合内，另一端在外
                return false // 存在跨边，不是完整弱连通分量
            }
        }
    }
    return true // 无跨边，是完整弱连通分量
}

// 全图遍历函数
const fullTraversal = (graph) => {
    const visited = new Set()
    const result = []

    // 获取图中所有节点：包括作为键的节点 和 作为值出现的节点
    const allNodes = new Set()
    for (const [key, valueSet] of graph) {
        allNodes.add(key)
        for (const val of valueSet) {
            allNodes.add(val)
        }
    }

    // 对每个节点，如果没访问过，就启动DFS
    for (const node of allNodes) {
        if (!visited.has(node)) {
            dfs(graph, node, visited, result)
        }
    }

    return result
}

var remainingMethods = function (n, k, invocations) {
    // 先使用有向图记录所有的依赖关系
    const graph = new Map()
    for (const item of invocations) {
        // 如果图中没有当前节点，就添加一对依赖关系
        if (!graph.has(item[0])) {
            graph.set(item[0], new Set([item[1]]))
        } else {
            graph.get(item[0]).add(item[1])
        }
    }

    const allMethods = fullTraversal(graph)

    if (isCompleteWeakComponent(graph, k)) {
        
    }
}
const invocations = [
    [1, 2],
    [0, 2],
    [0, 1],
    [3, 4],
]
remainingMethods(5, 0, invocations)
