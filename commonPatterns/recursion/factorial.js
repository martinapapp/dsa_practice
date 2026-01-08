// steps:
// 1. if n is 0
//     2. return 1 (base case))
// 3. return n*factorial(n-1)

function factorial(n){
    if(n === 0){
        return 1
    }
    return n*factorial(n-1)
}