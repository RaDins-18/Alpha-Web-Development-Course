// // We use .then to get successfully completed program and aslo running more functions after that program.
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }
// console.log("loading modules");
// console.log("Do something else");
// console.log("Load data");
// let data = getData();
// data.then((v) => {
//     console.log(data);
//     console.log(v);
//     console.log("Process data");
//     console.log("Other tasks");
// })


// // But there are two more good options to do that same things.
// // Async or Await:

// // async is used to get rid of asynchronous nature of javascript, async run Promises in the background by following the flow of code, And don't transfer those Promises to the end of output.
// async function getData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }
// // In mostly conditions await is run in async. 
// async function main() {
//     console.log("loading modules");
//     console.log("Do something else");
//     console.log("Load data");
//     // await is used to wait for the Promise and stops script after the await.
//     let data1 = await getData1();
//     console.log(data1);
//     console.log("Process data");
//     console.log("Other tasks");
// }
// main()

// // Practical use case of async or await.
// async function getData2() {
//     // Simulate getting data from a server.
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // let data = await x.text()
//     let data = await x.json();
//     return data
// }
// async function main1() {
//     console.log("loading modules");
//     console.log("Do something else");
//     console.log("Load data");
//     let data2 = await getData2();
//     console.log(data2);
//     console.log("Process data");
//     console.log("Other tasks");
// }
// main1()


// // FETCH API:

// // Check this link for basic using of fetch API.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// // Check this link for free fake and reliable API for testing and prototyping.
// // https://jsonplaceholder.typicode.com/

// // A basic GET fetch request looks like this:
// async function getPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     return  posts
// }
// async function main2() {
//     console.log("loading modules");
//     console.log("Do something else");
//     console.log("Load data");
//     let posts = await getPosts();
//     console.log(posts);
//     console.log("Process data");
//     console.log("Other tasks");
// }
// main2()

// // Advance fetch request by implementation POST method:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin.
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached.
//         credentials: "same-origin", // include, *same-origin, omit.
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: "follow", // manual, *follow, error.
//         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url.
//         body: JSON.stringify(data), // body data type must match "Content-Type" header.
//     });
//     const finalData = await response.json(); // parses JSON response into native JavaScript objects.
//     return finalData
// }
// async function main3() {
//     console.log("loading modules");
//     console.log("Do something else");
//     console.log("Load data");
//     let data = await postData("https://jsonplaceholder.typicode.com/posts", {
//                                 title: 'football',
//                                 body: 'barcilona',
//                                 userId: 1,
//                             });
//     console.log(data);
//     console.log("Process data");
//     console.log("Other tasks");
// }
// main3()

// // A basic POST fetch request looks like this:
// async function postData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                     method: 'POST',
//                     body: JSON.stringify({
//                         title: 'foo',
//                         body: 'bar',
//                         userId: 1,
//                     }),
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     },
//     })
//     let data = await response.json()
//     return data
// }
// async function main4() {
//     console.log("loading modules");
//     console.log("Do something else");
//     console.log("Load data");
//     let data = await postData()
//     console.log(data);
//     console.log("Process data");
//     console.log("Other tasks");
// }
// main4()

// Practical use case fetch API.
async function postDataAndGetData() {
    let post = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
    })
    let postData = await post.json()
    let get = await fetch('https://jsonplaceholder.typicode.com/posts');
    let getData = await get.json();
    return [postData, getData]
}
async function main5() {
    console.log("loading modules");
    console.log("Do something else");
    console.log("Load data");
    let data = await postDataAndGetData()
    data.forEach(element => {
        console.log(element)
    });
    console.log("Process data");
    console.log("Other tasks");
}
main5()