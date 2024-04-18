console.log("Hello I am Conditionals Tutorial")

let age = 17
let grace = 2

// Arithmetic Operators:
console.log("Arithmetic Operators")
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)
console.log(age++)
console.log(++age)
console.log(age--)
console.log(--age)

// Assignment Operators:
console.log("Assignment Operators")
let apple = null
console.log(apple = 5)
console.log(apple += 3)
console.log(apple -= 3)
console.log(apple *= 3)
console.log(apple /= 3)
console.log(apple %= 3)
console.log(apple **= 3)

// Comparison Operators:
console.log("Comparison Operators")
let orange = 10
console.log(orange == 10)
console.log(orange != 5)
console.log(orange === "10")
console.log(orange !== 5)
console.log(orange > 5)
console.log(orange < 5)
console.log(orange >= 5)
console.log(orange <= 5)

// Logical Operators:
console.log("Logical Operators")
console.log("(&&) Logical AND")
console.log("(||) Logical OR")
console.log("(!) Logical NOT")

// Ternary Operators:
console.log("Ternary Operators")

let a = 6
let b = 8
let c = a > b ? (a - b) : (b - a)
/*
translates to:

if(a>b){
    let c = a - b
}
else{
    let c = b - a
}

*/


// Conditionals:

// simple if, else:
if((age + grace) > 18){
    console.log("You can drive")
}
else{
    console.log("You cannot drive")
}

// if, else, else if ladder:
let clothes_price = 2100

if((clothes_price >= 800) && (clothes_price <= 1500)){
    console.log("Buy it.")
}
else if((clothes_price > 1500) && (clothes_price < 2000)){
    console.log("Don't buy.")
}
else if(clothes_price >= 2000){
    console.log("Are you again kidding.")
}
else{
    console.log("Are you kidding.")
}