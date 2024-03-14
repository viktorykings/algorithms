function smallest(arr){
    let smallest = arr[0];
    let smallestInd = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
            smallestInd = i;
        }
    }
    return smallestInd;
}
function selectionSort(arr){
    const newArr = [];
    let i = arr.length - 1;
    while(i >= 0){
        let sm = smallest(arr);
        i--;
        newArr.push(...arr.splice(sm, 1)) ;
    }
    return newArr;
}
const arr = [4,7,2,1,5,6,3,9,8,10];
console.log(selectionSort(arr));