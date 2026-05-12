//O(N*log(N))

class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, prio){
        this.values.push({val, prio})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a,b)=> a.prio - b.prio)
    }
}

let pq = new PriorityQueue()

pq.enqueue("B",3)
pq.enqueue("C",5)
pq.enqueue("D",2)
pq.enqueue("Q",20)

console.log(pq.values)