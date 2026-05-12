class MaxBinaryHeap{
    constructor(){
        this.values = [48, 33, 28, 12, 18, 23, 2]
    }
    insertMBH(element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]

            if(element <= parent) break

            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx   
        }
        return this.values        
    }
}


let MBH = new MaxBinaryHeap()

MBH.insertMBH(56)
console.log(MBH)
MBH.insertMBH(33)
console.log(MBH)
MBH.insertMBH(1)
console.log(MBH)
