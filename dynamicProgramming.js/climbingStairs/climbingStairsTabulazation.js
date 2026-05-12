function climbStairs(n){
    const ways = []
    ways[1] = 1
    ways[2] = 2

    for(let i = 3; i <= n; i++){
        ways[i] = ways[i-1] + ways[i-2]
    }

    return ways[n]

}