class MaxBinaryHeap{
    constructor(){
        this.values = [48, 33, 28, 12, 18, 23, 2]
    }
    extractMax(){
        // edge case
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.bubbleDown()
        }
        return max
    }
    bubbleDown(){
        let i = 0
        const length = this.values.length
        
        while(true){
            const element = this.values[i]
            let leftChildIdx = 2 * i + 1
            let rightChildIdx = 2 * i + 2
            let leftChild, rightChild
            let swap = null             //tracking swap position

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                   swap = leftChildIdx 
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)){
                        swap = rightChildIdx
                }
            }
            if(swap === null) break
            this.values[i] = this.values[swap]
            this.values[swap] = element

            i = swap
        }
    }
}

let MBH = new MaxBinaryHeap()

MBH.extractMax()
console.log(MBH)
MBH.extractMax()
console.log(MBH)
MBH.extractMax()
console.log(MBH)
MBH.extractMax()
console.log(MBH)

