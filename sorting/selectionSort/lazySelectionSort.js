/**
 * ES16+ Selection Sort
 * Uses Iterator Helpers for memory-efficient 'lowest' index searching.
 */

//time: O(n^2), space: O(1)

const selectionSort = (arr) => {
    // 1. Immutable copy (Standard Practice)
    const result = [...arr]; 
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        // 2. LAZY ITERATOR HELPERS (ES16)
        // We create an iterator from the unsorted portion of the array.
        const unsortedIterator = result.values().drop(i);

        // Find the minimum value lazily using the iterator reduce helper
        const minVal = unsortedIterator.reduce((a, b) => Math.min(a, b));

        // 3. FIND INDEX (using the second optional 'fromIndex' parameter)
        const lowest = result.indexOf(minVal, i);

        // 4. MODERN SWAP
        if (i !== lowest) {
            [result[i], result[lowest]] = [result[lowest], result[i]];
        }
    }
    return result;
};

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));