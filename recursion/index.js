function factorial(n){
    if (n === 1) {
        return 1
    } else return n * factorial(n - 1)
}
console.log(factorial(5))

function sum(arr){
    if (arr.length === 0) return 0
    if (arr.length === 1) return arr[0]
    else{
        let f = arr[arr.length - 1]
        arr.pop()
        return f + sum(arr)
    }
}
