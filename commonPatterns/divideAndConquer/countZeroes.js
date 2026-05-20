// Time Complexity: O(log n)
// Space Complexity: O(log n)

function countZeroes(arr) {
    let firstZero = findFirst(arr) // find the index of the first zero

    if (firstZero === -1) return 0 // no zero found in the array

    return arr.length - firstZero // number of zeroes = total length - first zero index
}

function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) { // keep searching while the range is valid
        let mid = low + Math.floor((high - low) / 2) // calculate middle index safely

        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid // current zero is the first zero
        } else if (arr[mid] === 1) {
            return findFirst(arr, mid + 1, high) // zero must be on the right side
        } else {
            return findFirst(arr, low, mid - 1) // zero exists, but first zero may be further left
        }
    }

    return -1 // no zero found
}

// test calls
console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2: first zero is at index 4
console.log(countZeroes([1, 0, 0, 0, 0])) // 4: first zero is at index 1
console.log(countZeroes([0, 0, 0])) // 3: first zero is at index 0
console.log(countZeroes([1, 1, 1, 1])) // 0: no zeroes found
console.log(countZeroes([])) // 0: empty array has no zeroes