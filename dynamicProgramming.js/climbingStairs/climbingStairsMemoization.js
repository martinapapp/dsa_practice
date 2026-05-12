let memo = {}

function climbStairs(n){
    if(n in memo) return memo[n]

    if(n === 1) return 1
    if(n === 2) return 2

    const result = climbStairs(n-1) + climbStairs(n-2)

    memo[n] = result
    
    return result
}