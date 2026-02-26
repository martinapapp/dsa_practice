//LIFO

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    //similar to sll unshift
    push(value){  
        let newNode = new Node(value)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }else{
            let currentFirst = this.first
            this.first = newNode
            this.first.next = currentFirst
        }
        return ++this.size
    }
    //similar to sll shift
    pop(){
        if(this.size === 0) return null
        let currentfirst = this.first
        if(this.size === 1){
            this.first = null
            this.last = null
        }
        this.first = currentfirst.next
        -- this.size
        return currentfirst
    }
}

let stack = new Stack()

console.log(stack)
stack.push("first")
console.log(stack)
stack.push("second")
console.log(stack)
stack.push("last in first out")
console.log(stack)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack)
