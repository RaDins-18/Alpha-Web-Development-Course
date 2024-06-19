// 10. The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffee) {
    return new Promise((resolve, reject) => {
        let randomDelay = Math.floor(1 + Math.random() * 10) * 1000;
        console.log(`We Brewing your ${coffee}.`);
        setTimeout(() => {
            resolve(`Your ${coffee} is ready.`);
        }, randomDelay);
    })
}

(async function main() {
    let coffee = "espresso";
    let brewingCoffee = await brewCoffee(coffee);
    console.log(brewingCoffee);
})();