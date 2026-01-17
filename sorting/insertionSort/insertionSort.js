//works well when data coming in live, streaming
//inserting in moments of notice
//time: O(), space: O()

function insertionSort(arr){
	let currentVal;
    let j;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])