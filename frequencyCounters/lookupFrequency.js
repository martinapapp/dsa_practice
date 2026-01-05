  // 1. Convert both numbers to strings
  // 2. If lengths are different, they can't have the same frequency
  // 3. Loop through str1 to build your "inventory"
     // Add logic here: if digit exists, increment; otherwise set to 1
  // 4. Loop through str2 to check against your "inventory"
     // Check: If the digit isn't in lookup OR its count is 0...
    // Logic here: decrease the count in lookup
// 5. return true

function sameFrequency(num1, num2) {

  const str1 = num1.toString();
  const str2 = num2.toString();
  
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i of str1) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;

  }
  
  for (let i = 0; i < str2.length; i++) {   
    if (!lookup[str2[i]]) {
      return false;
    } else {
        lookup[str2[i]] -= 1
    }
  }

  return true;
}