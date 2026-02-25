/**shift pseudo
1. if length is 0 return undefined
2. store current head in oldhead
3. if length is 1
    3.1. true: set head and tail to null
    3.2. false: update head to oldhead's next prop (new head),
                set current head's prev prop to null (break bond backward),
                set oldhead's next prop to null (break bond forward)
4. decrement length by 1
5. return oldhead
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
}
