/**remove pseudo
1. takes index param
2. check inde is not valid return undefined
3. check index 0 : use .shift()
4. check index is same as length-1 : use .pop()
5. save and use .get() to find removing node
6. update next, prev props
7. set next, prev props to null on removing node
8. decrement length
9. return removed node
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
    shift(){
        if(this.length === 0) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length --
        return oldHead
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
    get(index){
        if(index < 0 || index >= this.length) return null

        const middle = Math.floor(this.length/2)
        const isNearHead = index <= middle
        let current = isNearHead ? this.head : this.tail

        if(isNearHead){
            for(let i = 0; i < index; i ++) current = current.next
        }else{
            for(let i = this.length-1; i > index; i-- ) current = current.prev
        }
      return current
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return !!this.shift()
        if(index === this.length-1) return !!this.pop()
        
        let removedNode = this.get(index)
        
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev

        removedNode.next = null
        removedNode.prev = null

        this.length --
        return removedNode
        
    }
}