/**pop pseudo
 1. check no tail : return undefined
 2. store current tail as poppedNode and later return it
 3. edge case : check length is 1
    3.1. true: set head and tail as null
    3.2. false: set current tail as poppedNode's prev prop (new tail),
                set current tail's next prop as null (forward arrow bond break),
                set poppedNode's prev prop as null (backward arrow bond break)
4. decrement length
5.return poppedNode
 */

class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
       push(newValue){
        let newNode = new Node(newValue)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length ++
        return this
    }
    pop(){
        if(!this.tail) return undefined
        const poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length --
        console.log(poppedNode)
        return poppedNode
        
    }
}

let list = new DoublyLinkedList()

list.push("Hello")
list.push("Doubly")
list.push("Linked")
list.push("List")
console.log(list)

list.pop()
console.log(list)

