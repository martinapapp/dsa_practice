let memo = {}

function memoizedFib(n){
    if(n in memo) return memo[n]

    if(n === 1) return 1
    if(n === 2) return 1

    const result = memoizedFib(n-1) + memoizedFib(n-2)

    memo[n] = result

    return result
}

console.log(memoizedFib(7))