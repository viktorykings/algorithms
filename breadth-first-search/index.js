class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(item) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                this.items[this.tail] = item[i]
                this.tail++
            }
        } else {
            this.items[this.tail] = item
            this.tail++
        }
        return item
    }
    dequeue() {
        const item = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return item
    }
    get length() {
        return this.tail - this.head
    }
    get printQueue() {
        return this.items;
    }
}

const graph = new Map()
graph.set('you', ['alice', 'bob', 'claire'])
graph.set('bob', ['anuj', 'peggy'])
graph.set('claire', ['tom', 'jonny'])
graph.set('alice', ['peggy'])
graph.set('tom', ['seller'])
graph.set('jonny', [])
graph.set('peggy', [])
graph.set('anuj', [])


function isSeller(person) {
    return person[person.length - 1] === 'r';
}

function search(name) {
    const queue = new Queue()
    queue.enqueue(graph.get(name))
    const searched = []

    while (queue.length) {
        let person = queue.dequeue()
        if(!searched.includes(person)){
            if (isSeller(person)) {
                console.log(`${person} is mango seller!`)
                return true
            }
            else {
                queue.enqueue(graph.get(person))
                searched.push(person)
            }
        }
    }
    console.log('No sellers found!')
    return false
}
search('you')