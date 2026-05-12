// time: O(n), space: O(1)
// constant transition

function minCost(cost){
    const n = cost.length
    
    let prev1 = cost[1]
    let perv2 = cost[0]

    for(let i = 2; i < n; i++){
        const current = Math.min(prev1, perv2) + cost[i]
        perv2 = prev1
        prev1 = current
    }
    return Math.min(prev1, perv2)
}