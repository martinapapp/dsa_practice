/** pop pseudo
 0. accept value
 1.edge case: if list is empty return undefined
 2. set current as this.head (start at the beginning)
 3. set newtail as current (start at the beginning)
 4. loop til the tail
    4.1. set newtail as current
    4.2. set curretn as current.next
5. set tail as newtail
6. set tail.next as null
7. decrement length by 1
8. edge case: if 1 item in the list: reset head and tail
9. return removed node (current)
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

    pop(){
        if(!this.head) return undefined

        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current

    }
}


let list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")
