// 9. The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    return new Promise((resolve, reject) => {
        let radomDelay = Math.floor(1 + Math.random() * 10) * 1000;
        setTimeout(() => {
            resolve("Your order has been placed successfully.");
        }, radomDelay);
    })
}

(async function main() {
    let orderConfirmation = await placeOrder();
    console.log(orderConfirmation);
})();