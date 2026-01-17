function bubbleSort(arr, comparator) {
    // default comparator
    //-----------------------------------------------------------------
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
        if (a === b) return 0;
        return a > b ? 1 : -1;
        };
    }
    /*Handel edge-case
    -------------------------------------------------------------------
    handle empty or single-item arrays */ 
    if (arr.length <= 1) return arr;

    /*BubbleSort:
    -------------------------------------------------------------------
    init noSwap as a sensor detecting swaps */
    let noSwaps; 
    //loop from the end
    for (let i = arr.length; i > 0; i--) {
        //at the start of every new pass assuming array is sorted
        noSwaps = true;
        //Loop from the start until i-1
        for (let j = 0; j < i - 1; j++) {
            // if current bigger than next
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // Swap happening
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //detecting swap happening, so can't guarantee collection is sorted
                noSwaps = false;
            }
        }
        /* If we went through a whole pass without swapping, 
        the array is sorted 
        and can break out */
        if (noSwaps) break;
    }
    return arr;
}