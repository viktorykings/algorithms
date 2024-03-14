function binarySearch(arr, item){
    let low = 0;
    let high = arr.length - 1;
    let mid;
    let guess;

    while(low <= high){
        mid = Math.floor((low + high) / 2)
        guess = arr[mid]
        if(guess === item) return mid;
        if(guess < item){
            low = mid + 1
        }
        if(guess > item){
            high = mid - 1
        }
    }
    return null;
}
let arr = [1,3,5,6,7,8,9]
console.log(binarySearch(arr, 8))