class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(value){
        let newNode = new Node(value)

        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        } else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null

        let currentFirst = this.first

        if(this.size === 1){
            this.first = null
            this.last = null
        }  

        this.first = currentFirst.next
        
        -- this.size
        return currentFirst
    }
}

let queue = new Queue()

console.log("First IN")
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))

console.log("First OUT")
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())






