// problem: how many solutions are there?
// 2 possible move are allowed: 1 step, 1 jump (= 1 step + 1 step)

function climbStairs(n){
    if(n === 1) return 1
    if(n === 2) return 2

    return climbStairs(n-1) + climbStairs(n-2)
}