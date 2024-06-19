// 5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumPositiveNums(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num >= 0) {
            sum += num;
        } else {
            break;
        }
    }
    return sum;
}

let numbers = [4, 6, 2, 5, 8, -6, 3, 2, 8, 1, 9, 7, -4, 0];
console.log(sumPositiveNums(numbers));