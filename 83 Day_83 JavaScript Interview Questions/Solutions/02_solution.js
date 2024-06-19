// 2. The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) == i){
            newArr.push(arr[i]*2);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6];
doubleArr = doubleTrouble(arr);
console.log(doubleArr);