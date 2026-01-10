/**
 * Declarative Selection Sort (ES16+ Style)
 * Tells JS 'what' to do instead of managing every 'j' pointer.
 */

// time:O(n^2) , space: O(n)

const selectionSort = (arr) => {
    let result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        // 1. DECLARATIVE SEARCH: 
        // We slice the remaining part and find the index of the minimum value.
        const remaining = result.slice(i);
        const minVal = Math.min(...remaining);
        
        // Find where that minVal is located relative to the original index
        const lowest = result.indexOf(minVal, i);

        // 2. MODERN SWAP
        if (i !== lowest) {
            [result[i], result[lowest]] = [result[lowest], result[i]];
        }
    }

    return result;
};

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));