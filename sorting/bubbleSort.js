function bubbleSort(numbers){
    // iterate n-1 times
    for(let i = 0; i < numbers.length - 1; i++){
        // iterate from start to end
        for(let j=0; j < numbers.length - 1; j++){
            // if current number > next
            if(numbers[j] > numbers[j + 1]){
                // switch current and next
                const temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }
}

const numbers = [5,3, 2, 4, 1]
bubbleSort(numbers)

// time: O(n^2)
// sapce: O(n)