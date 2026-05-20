// Time Complexity: O(n)
// Space Complexity: O(1)

function minSubarrayLen(nums, sum) {
    let total = 0 // stores the current window sum
    let start = 0 // left side of the window
    let end = 0 // right side of the window
    let minLen = Infinity //stores the smallest valid window length found so far

    while (start < nums.length) { // keep checking while start is inside the array
        if (total < sum && end < nums.length) { // window sum is too small, expand the window
            total += nums[end] // add the next number to the window
            end++ // move the right side forward
        } else if (total >= sum) { // current window sum is large enough
            minLen = Math.min(minLen, end - start) // update minimum length if this window is smaller
            total -= nums[start] // remove the leftmost number from the window
            start++ // shrink the window from the left
        } else {
            break // no more numbers to add and total is still too small
        }
    }

    return minLen === Infinity ? 0 : minLen // return 0 if no valid subarray was found
}

// test calls
console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)) // 2: [4, 3]
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)) // 2: [5, 4]
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1: [62]
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3: [16, 22, 5]
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5: [16, 22, 5, 7, 8]
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2: [3, 8]
console.log(minSubarrayLen([1, 2, 3], 100)) // 0: no subarray sum reaches 100