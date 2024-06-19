// 8. Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function multipliedByTwo(arr) {
    let newArr = [];
    return new Promise((resolve, reject) => {   
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                console.log(`${arr[i]} multiplied by 2 `);
            }, 500 * (i+1));
            newArr.push(arr[i]*2);
            setTimeout(() => {
                resolve(newArr);
            }, 500 * (arr.length+1));
        }
    })
}

(async function main() {
    let arr = [3, 10, 4, 2, 6, 7, 1, 8, 5, 9]
    let multipliedArr = await multipliedByTwo(arr)
    console.log(multipliedArr);
})();