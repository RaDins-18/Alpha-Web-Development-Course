// 11. The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, filter) {
    let relevantProducts = [];
    for (const product of products) {
        for (const category in product) {
            const item = product[category];
            if (category == filter) {
                relevantProducts.push(item);
            }
        }
    }
    return relevantProducts;
}

let products = [
    {crockery: "spoons"},
    {crockery: "dishes"},
    {crockery: "pots"},
    {clothes: "shirts"},
    {clothes: "pants"},
    {clothes: "socks"},
    {clothes: "jackets"},
    {clothes: "hoodies"},
    {clothes: "caps"},
    {homedecor: "candles"},
    {homedecor: "ornaments"},
    {homedecor: "planters"},
    {homedecor: "vases"},
    {homedecor: "lamps"},
];

let filter = "crockery";

let relevantProducts = filterProducts(products, filter);
console.log(relevantProducts);