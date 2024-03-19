const graph = new Map();
graph.set('start', new Map())
graph.get('start').set('a', 6)
graph.get('start').set('b', 2)
graph.set('fin', null)
graph.set('a', new Map())
graph.get('a').set('fin', 1)
graph.set('b', new Map)
graph.get('b').set('a', 3)
graph.get('b').set('fin', 5)

// const keys = graph.get('start').keys()
// console.log(...keys)

const costs = new Map()
costs.set('a', 6)
costs.set('b', 2)
costs.set('fin', Infinity)


const parents = new Map()
parents.set('a', 'start')
parents.set('b', 'start')
parents.set('fin', null)

const processed = []

function findLowestCostNode(costs) {
    let lowestCost = Infinity
    let lowestCostNode = null
    for (let node of costs.keys()) {
        let cost = costs.get(node)
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestCostNode = node
        }
    }
    return lowestCostNode;
}
let node = findLowestCostNode(costs)


while (graph.get(node)) {
    let cost = costs.get(node)
    let neighbours = graph.get(node)
    for (let n of neighbours.keys()) {
        let newCost = cost + (neighbours.get(n))
        if (costs.get(n) > newCost) {
            costs.set(n, newCost)
            parents.set(n, node)
        }
    }
    processed.push(node)
    node = findLowestCostNode(costs)
}

console.log(costs.get(node))