//time: O(n^2), space:)(1)


function selectionSort(arr) {
//define swap
    const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  //loop through from start
    for (let i = 0; i < arr.length; i++) {
        //save minimum
        let lowest = i;

        //loop through from next
        for (let j = i + 1; j < arr.length; j++) {
            //if current min bigger than next
                //set new minimum
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        //swap if indexes are not the same
        if (i !== lowest) swap(arr, i, lowest);
    }
    //get sorted arr
    return arr;
}

selectionSort([0,2,34,22,10,19,17]);