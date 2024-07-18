// CRUD OPERATIONS:


// CREATE:

// Create Database and Use Database.
use("crudDb");

// Show Database.
console.log(db);

// Create collection in Database.
db.createCollection("courses");

// Insert one document.
// db.courses.insertOne(
//     {
//     name: "Alpha Web Dev Course",
//     price: "0$",
//     assignments: 12,
//     projects: 15,
//     },
// );

// Insert many document.
// db.courses.insertMany([
//     {
//     name: "Python Zero To Hero",
//     price: "50$",
//     assignments: 15,
//     projects: 18,
//     },
//     {
//     name: "UI/UX Course",
//     price: "40$",
//     assignments: 10,
//     projects: 13,
//     }
// ]);


// READ:

let a = db.courses.find({price: "50$"});
// console.log(a);
console.log(a.toArray());
console.log(a.count());

let b = db.courses.findOne({price: "40$"});
console.log(b);

// let c = db.courses.find({ price: {$gte: "40$"} });
// console.log(c);


// UPDATE:

// db.courses.updateOne({price: "0$"}, {$set: {price: "60$"}});

// db.courses.updateMany({price: "0$"}, {$set: {price: "60$"}});


// DELETE:

// db.courses.deleteOne({price: "40$"});
// db.courses.deleteMany({price: "40$"});


// Mongodb Operators:
// https://www.mongodb.com/docs/manual/reference/operator/query/