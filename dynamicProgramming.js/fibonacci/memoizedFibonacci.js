function memoizedFibonacci(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]

    if(n === 2) return 1
    if(n === 1) return 1

    result = memoizedFibonacci(n-1, memo) + memoizedFibonacci(n-2, memo)

    memo[n] = result

    return result
}

fibonacci(6)