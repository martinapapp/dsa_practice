// time: O(n), space: O(n)

function minCost(cost){
    const n = cost.length
    let minCost = []

    minCost[0] = cost[0]
    minCost[1] = cost[1]

    for(let i = 2; i < n; i ++){
        minCost[i] = Math.min(minCost[i-1], minCost[i-2]) + cost[i]    // storing entire arr
    }

    return Math.min(minCost[n-1], minCost[n-2])

}