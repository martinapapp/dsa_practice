// Time Complexity: O(log n)
// Space Complexity: O(log n)

function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num) // find the first index where num appears

    if (firstIdx === -1) return firstIdx // num was not found, return -1

    let lastIdx = findLast(arr, num) // find the last index where num appears

    return lastIdx - firstIdx + 1 // frequency = last index - first index + 1
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) { // keep searching while the search range is valid
        let mid = Math.floor((low + high) / 2) // calculate middle index

        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid // current index is the first occurrence of num
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high) // num must be on the right side
        } else {
            return findFirst(arr, num, low, mid - 1) // first occurrence may be on the left side
        }
    }

    return -1 // num was not found
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) { // keep searching while the search range is valid
        let mid = Math.floor((low + high) / 2) // calculate middle index

        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid // current index is the last occurrence of num
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1) // num must be on the left side
        } else {
            return findLast(arr, num, mid + 1, high) // last occurrence may be on the right side
        }
    }

    return -1 // num was not found
}

// test calls
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4: 2 appears from index 2 to index 5
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1: 3 appears once
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2: 1 appears twice
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1: 4 does not appear
console.log(sortedFrequency([], 2)) // -1: empty array has no values