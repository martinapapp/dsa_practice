/**unshift pseudo
1. access new value
2. check length is 0 
    2.1. true: set head and tail to newNode
    2.2 false: set head's prev prop to newNode,
               set newNode's next prop to head,
               set head to newNode
3. increment length
4. return list
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
    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }
}
