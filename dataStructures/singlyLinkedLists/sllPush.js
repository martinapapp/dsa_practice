/**push pseudo: 
 1. value param
 2. create new node with value
 3. if list is empty
    3.1. true: set head & tail to be newly created node
    3.2. false: set next prop on tail to be the new node 
                & update tail prop to be the newly created node
4. increment length by 1
5. return linked list    
 */

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}

let list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")