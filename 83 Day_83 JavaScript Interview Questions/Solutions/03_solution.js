// 3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function strMirror(str) {
    str += " |"
    for (let i = (str.length - 1); i >= 0; i--) {
        str += str[i];
    }
    return str
}

let str = "RaDin BoNes";
let newStr = strMirror(str)
console.log(newStr);