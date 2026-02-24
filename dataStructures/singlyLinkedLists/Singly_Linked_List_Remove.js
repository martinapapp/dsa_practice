/**remove pseudo
1. accept index
2. edge cases
    2.1. if index negative or greater-equal length : return undefiend
    2.2. if index is same length-1 : use pop
    2.3. if index is 0 : use shift
3. use get and access pervious index
4. save removed as prev's next prop
5. set prev's next prop as removed's next prop
6. decrement length by 1
7. return removed 
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
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        let previousNode = this.get(index - 1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }
}

let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)







