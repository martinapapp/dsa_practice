// Time Complexity: O(n)
// Space Complexity: O(1)

function avgPair(arr, num) {
    let start = 0 // left pointer starts at the beginning
    let end = arr.length - 1 // right pointer starts at the end

    while (start < end) { // keep checking while pointers have not crossed
        let avg = (arr[start] + arr[end]) / 2 // calculate average of current pair

        if (avg === num) return true // target average found
        else if (avg < num) start++ // average too small, move left pointer right
        else end-- // average too large, move right pointer left
    }

    return false // no pair found
}

// test calls
console.log(avgPair([1, 2, 3], 2.5)) // true: (2 + 3) / 2 = 2.5
console.log(avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true: (6 + 10) / 2 = 8
console.log(avgPair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(avgPair([], 4)) // false