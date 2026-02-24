/**
1. save current node and start at the beginning
2. swap head and tail
3. save next node
4. save prev node
5. loop:
    5.1. set next as current's next prop
    5.2. set current's next prop as prev
    5.3. set prev as current 
    5.4. set current as next
6. return this
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
    reverse(){
      let current = this.head

      this.head = this.tail
      this.tail = current

      let next = null
      let prev = null

      for(let i = 0; i < this.length; i++){
        next = current.next
        current.next = prev
        prev = current
        current = next
      }
      return this
    }
    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)








