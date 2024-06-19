// 13. The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(shoppingCart) {
    let totalCost = 0;
    for (const products of shoppingCart) {
        for (const product in products) {
            let item = products[product];
            let cost = item[0] * item[1].slice(0, -1);
            totalCost += cost;
        }
    }
    return totalCost + "$";
}

let shoppingCart = [
    {ps5: [2, "664$"]},
    {iphone15: [1, "1238$"]},
    {monitor: [3, "1256$"]},
];

console.log(calculateTotal(shoppingCart));