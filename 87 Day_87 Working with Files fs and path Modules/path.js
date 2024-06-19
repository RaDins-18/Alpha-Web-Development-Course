import path from "path"

// console.log(path);

let myPath = "C:/Users/Hobopk/OneDrive/Alpha-Web-Development-Course/87 Day_87 Working with Files fs and path Modules/radin.txt";

console.log(myPath);
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.join("C:/Users", "Programs\\radin.txt"));