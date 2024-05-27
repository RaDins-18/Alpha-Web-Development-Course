// All About Arrays:

let arr = [1, 5, 2, 8, 6];
// Index = 0  1  2  3  4

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]); // Undefined

// Type of array is object.
console.log("Type of array is", typeof arr);

// .length statement is used to find length.
console.log("Length of array is", arr.length);

// Arrays are mutable.
// We can change array values by index.
arr[0] = 55;
console.log(arr);


// Array Methods:

// .toString method converts array to string.
console.log("Convert array to a string:", arr.toString());
// .join method removes , with any character you want.
console.log("Remove , with and:", arr.join(" and "));
// .pop method removes last element.
console.log("last element of array:", arr.pop());
// .push method add element at last.
console.log("New length of array after adding lisa:", arr.push("lisa"));
// .shift method removes first element.
console.log("last element of array:", arr.shift());
// .unshift method add element at start.
console.log("New length of array after adding 10:", arr.unshift("jamine"));
// delete is used to remove element at specific index in array but element's memory exists.
console.log(delete arr[4]);
console.log(arr);
console.log(arr[4]);
// .concate method is used to add arrays in each other but it does not change original array.
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
console.log(a1.concat(a2, a3));
console.log(a1);
// .sort method is used to assign elements ascending to descending order.
let b = [3, 5, 2, 6, 7, 1, 4, 8];
console.log(b);
console.log(b.sort());
// .splice method is used to remove elements from initial index to final index in array.
console.log("Remove these elements from array:", b.splice(1, 3));
console.log(b);
// .splice method is also used to add elements on the index of removing elements in array.
console.log("Remove these elements from array:", b.splice(1, 3, 555, 666));
console.log(b);
// .slice method gives another array of specific elements.
let c = [1, 2, 3, 4, 5];
console.log(c);
console.log("Another array:", c.slice(1, 3));
// .reverse method reverse the array elements.
console.log("Reverse array:", c.reverse());


// Array In Loops:

// Simple for loop.
let d = [1, 93, 5, 6, 88];
for (let index = 0; index < d.length; index++) {
    const element = d[index];
    console.log(element);
}

// forEach loop.
d.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// forIn loop.
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// forOf loop.
for (const element of d) {
    console.log(element);
}


// Map, Filter, Reduce In Array:

// Map:
// .map function is used to run a function on every element of array.
let e = [1, 13, 5, 7, 11];
// Instead of this we use map function.
let newArr = [];
for (let index = 0; index < e.length; index++) {
    const element = e[index];
    newArr.push(element**2);
}
console.log(newArr);
// Same thing with .map function.
let newArr1 = e.map((e)=>{
    return e**2;
})
console.log(newArr1);

// Filter:
// .filter function is used to filter elements accourding to given function.
const greaterThanSeven = (e)=>{
    if (e > 7){
        return true;
    }
    return false;
}
console.log(e.filter(greaterThanSeven));

// Reduce:
// .reduce function reduces the elements of array accourding to given function.
let newArr2 = [1, 2, 3, 4, 5];
const add = (a, b)=>{
    return a+b;
}
console.log(newArr2.reduce(add));