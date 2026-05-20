// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null // not enough numbers to create a subarray of length num

    let total = 0 // stores the maximum sum found so far

    for (let i = 0; i < num; i++) { // calculate the sum of the first window
        total += arr[i]
    }

    let currentTotal = total // stores the sum of the current window

    for (let i = num; i < arr.length; i++) { // move the window through the rest of the array
        currentTotal += arr[i] - arr[i - num] // add new number and remove the number left behind
        total = Math.max(total, currentTotal) // update maximum sum if current window is larger
    }

    return total // return the largest subarray sum found
}

// test calls
console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700: 300 + 400
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39: 4 + 2 + 10 + 23
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5: 6 + (-1)
console.log(maxSubarraySum([2, 3], 3)) // null: array is shorter than num
console.log(maxSubarraySum([], 4)) // null: empty array has no valid subarray