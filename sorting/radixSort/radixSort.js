function getDigit(num, i) {
  //.abs: dealing with negative numbers
  //.pow: get ones/tens/hundreds places (helyiertekek)
  //.abs / .pow: e.g. -732 / 10^1 (tens place) => 73,2
  //.floor: cut off decimal part e.g. 73,2 => 73 
  // % 10: trick in base-10 math to 'grab the last digit'. E.g.: 73 => 3 is on the tens place
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
}

function digitCount(num) {
  if (num === 0) return 1; // edge case (by default log10(0) is undefined), number is basically 1 digit long
  //.abs: dealing with negative numbers
  //.log10: 10 to what power gives me this number
  //.floor(.log10(.abs(num))) : 450 => 10^2,65 => 2,65 => 2
  // +1: to get correct result => 3
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0; // init so far 0 digits
  for (let i = 0; i < nums.length; i++) { // loop through array
    //.max: compares to numbers, returns larger num
    //maxDigits = current max
    //digitCount(nums[i]) = current number to check
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums); //how many digits the longest number has?
    for(let k = 0; k < maxDigitCount; k++){ // loop longest number's digits times
        let digitBuckets = Array.from({length: 10}, () => []); //create 0-9 buckets
        for(let i = 0; i < nums.length; i++){ // loop through every number in array
            // place numbers to buckets based on 'k'th digit
            let digit = getDigit(nums[i], k); 
            digitBuckets[digit].push(nums[i]);
        }
        //put them into the array in reordered way as numbers (without this numbers stays in their own array bucket)
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])








