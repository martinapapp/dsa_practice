let twoSum = function(nums, target) {
    const seen = {} // { value: index }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (seen[complement] !== undefined) {
            return [seen[complement], i] // found the pair
        }

        seen[nums[i]] = i // store current value and its index
    }
}