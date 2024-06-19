// A simple object is like below.
let simpleObj = {
    a: 1,
    b: "RaDin",
};
console.log(simpleObj);
console.log(simpleObj.a);
console.log(simpleObj.b);
console.log(simpleObj.c);
// A object contains [[Prototype]] which is another object that contains additional properties and we can use them on simpleObj object also.

// We can also set our own [[Prototype]] object.
let animal = {
    eats: true
};
let rabbit ={
    jumps: true
};
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.jumps);
console.log(rabbit.eats);


// Ok so lets start proper object oriented programming.

// Class is used to create templates in OOP.
class Animal{
    // constructor function is automatically run when a object is created.
    constructor(name){
        // this.name is a way to create name property.
        this.name = name;
        console.log("Object is created...");
    }

    // Making other function in a class.
    sleeping(){
        console.log(`${this.name} is sleeping`);
        return 0
    }
    playing(){
        console.log(`${this.name} is playing`);
    }
}

// Create object "a" through the Animal class.
let a = new Animal("Bunny");
console.log(a);
// Display properties of "a" object.
console.log(a.name);
console.log(a.sleeping());
console.log(a.playing());

// Create Lion class and take Animal class as parent class so that we can access all properties of Animal class.
class Lion extends Animal{
    constructor(name){
        // Wthiout super() keyword an error occour, super() keyword is used to run parent class constructor.
        super(name);
        console.log(`The animal is Lion and his name is ${name}`);
    }

    // Method Overriding is used to change a parent function in child class.
    playing(){
        super.playing()
        console.log(`${this.name} not plays`);
    }
}

// Create object "l" through the Lion class.
let l = new Lion("Simba");
console.log(l);
// Display properties of "l" object.
console.log(l.name);
console.log(l.sleeping());
console.log(l.playing());

// Instanceof:
// Instace is like "made of".
console.log(l instanceof Lion); // It gives true.
console.log(l instanceof Lion); // But it also gives true because Lion class is the instanse of Animal class.