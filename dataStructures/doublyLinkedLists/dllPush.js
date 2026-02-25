/**push pseudo
1. accept value
2. construct new Node with that value
3. check list is empty
    3.1. true: set tail and head to be new node
    3.2. false: set tail's next prop as new node (forward arrow),
                set new node's prev prop as old tail (backward arrow),
                set tail to be the new node
4. increment length by 1
5. return list
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
}

let list = new DoublyLinkedList()
console.log(list)
list.push("Hello")
console.log(list)
list.push("Doubly")
console.log(list)
list.push("Linked")
console.log(list)
list.push("List")
console.log(list)
