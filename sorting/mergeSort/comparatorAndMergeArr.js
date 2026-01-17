function merge(arr1, arr2, comparator){
    if(typeof comparator !== 'function'){
        comparator = (a,b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        }
    }
        
    let results = []
    
    let i = 0
    let j = 0
    
    
    while(i < arr1.length && j < arr2.length){
        if (comparator(arr1[i], arr2[j]) < 0) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    
    return results
}