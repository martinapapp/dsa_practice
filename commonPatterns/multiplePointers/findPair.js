// Time Complexity: O(n log n)
// Space Complexity: O(1)

function findPair(arr, num) {
    arr.sort((a, b) => a - b) // sort numbers in ascending order

    let i = 0 // first pointer
    let j = 1 // second pointer, starts one step ahead

    let target = Math.abs(num) // difference should work for positive or negative num

    while (i < arr.length && j < arr.length) { // keep checking while both pointers are inside the array
        let diff = arr[j] - arr[i] // calculate current difference

        if (i !== j && diff === target) return true // pair with target difference found
        else if (diff < target) j++ // difference too small, move second pointer right
        else i++ // difference too large, move first pointer right

        if (i === j) j++ // keep the second pointer ahead of the first pointer
    }

    return false // no pair found
}

// test calls
console.log(findPair([6, 1, 4, 10, 2, 4], 2)) // true: 4 - 2 = 2
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true: 1 - 0 = 1
console.log(findPair([4, -2, 3, 10], -6)) // true: 4 - (-2) = 6
console.log(findPair([6, 1, 4, 10, 2, 4], 22)) // false
console.log(findPair([], 0)) // false
console.log(findPair([5, 5], 0)) // true: 5 - 5 = 0