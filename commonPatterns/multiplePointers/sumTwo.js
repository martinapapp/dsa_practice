let twoSum = function(nums, target) {
    // Sort and keep track of original indices
    const indexed = nums.map((val, i) => [val, i])
    indexed.sort((a, b) => a[0] - b[0])

    // Two pointers
    let left = 0
    let right = indexed.length - 1

    while (left < right) {
        const sum = indexed[left][0] + indexed[right][0]

        if (sum === target) {
            return [indexed[left][1], indexed[right][1]] // return original indices
        } else if (sum < target) {
            left++  // sum too small, move left pointer right
        } else {
            right-- // sum too big, move right pointer left
        }
    }
}