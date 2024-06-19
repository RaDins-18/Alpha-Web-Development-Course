// We import fs in promises from fs module, So we use await without async function.
import fs from "fs/promises"

// let a = await fs.writeFile("radin.txt", "Abuzar is amazing\n")
// console.log(a);

let b = await fs.appendFile("radin.txt", "Abuzar is nice\n")
console.log(b);

let c = await fs.readFile("radin.txt")
console.log(c.toString());