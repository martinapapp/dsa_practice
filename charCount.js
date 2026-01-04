const datas = 'This is my 1st test to try out charCount'
const datasMore = 'This is 2nd test.'


function charCount(string){
    let result = {}

    for(let i = 0; i < string.lentgh; i++){
        const char = string[i].toLowerCase()
        if(result[char]){
             result[char]++
        }else{
            result[char] = 1
        }
    }

    console.log(result)
}