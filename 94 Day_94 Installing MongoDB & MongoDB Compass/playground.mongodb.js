
// Select the database to use.
use('alpha');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "name": "Java",
        "price": 20000,
        "teacher": "RaDin"
    },
    {
        "name": "Python",
        "price": 18000,
        "teacher": "Alex"
    },
    {
        "name": "JavaScript",
        "price": 15000,
        "teacher": "Chris"
    },
    {
        "name": "C++",
        "price": 22000,
        "teacher": "Jordan"
    },
    {
        "name": "Ruby",
        "price": 17000,
        "teacher": "Taylor"
    },
    {
        "name": "Swift",
        "price": 21000,
        "teacher": "Morgan"
    },
    {
        "name": "Kotlin",
        "price": 20000,
        "teacher": "Casey"
    },
    {
        "name": "Go",
        "price": 19000,
        "teacher": "Drew"
    },
    {
        "name": "Rust",
        "price": 23000,
        "teacher": "Sam"
    },
    {
        "name": "PHP",
        "price": 16000,
        "teacher": "Jamie"
    }
]);

// Print a message to the output window.
console.log("Done inserting data");