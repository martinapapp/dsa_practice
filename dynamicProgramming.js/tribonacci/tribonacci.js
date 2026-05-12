// time: O(n) space: O(1)
// sliding window approach (space-optimized tabularization)

function tribonacci(n){
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 1

    let t0 = 0,  t1 = 1, t2 = 1    // tracking only 3  variables

    for(let i = 4; i <= n; i++){
        let next = t0 + t1 + t2    // sum the window
        t0 = t1
        t1 = t2
        t2 = next
    }

    return next

}