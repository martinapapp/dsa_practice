/**unshift pseudo
1. accpet value
2. create new node with value
3. check if there's no head (!!important if - else structure!! without else: //next:Node, with else: //next:Null)
    3.1. true: set newnode as head and tail
    3.2 false: create connection (set newnode's next prop as current head prop)
                & update head (move head to be new node)
4. icrement head by 1
5. return list
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

    unshift(val){
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}

let list = new SinglyLinkedList()
