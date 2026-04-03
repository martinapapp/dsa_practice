function tabulatedFib(n){
    if(n === 1) return 1
    if(n === 2) return 1

    let fibNums = [0, 1, 1]

    for (let i= 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }

    return fibNums[n]
}

tabulatedFib(5)