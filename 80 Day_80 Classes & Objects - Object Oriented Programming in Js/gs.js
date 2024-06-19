// Create User class.
class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    // When object gets .name property below code will be execute.
    get name() {
      return this._name;
    }
  
    // When object sets .name property below code will be execute.
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
}

// Create user object by User class.
let user = new User("John");

// Gets .name property.
console.log(user.name); // John

// Sets .name property.
user.name = "Alvi" // Name is too short.
// user.name = "RaDin" // Name is perfect.

// Gets .name property.
console.log(user.name)