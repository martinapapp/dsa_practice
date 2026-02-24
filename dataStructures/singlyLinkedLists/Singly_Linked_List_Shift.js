/**shift pseudo
1. edge case: if list empty return undefined
2. store current head (this will be removed)
3. set the head as current next value
4. decrement length by 1
5. edge case: reset tail if there's only 1 item
6. return removed node value
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

    shift(){
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
}


let list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE") 
list.push("!")
