const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = false; // or false for failure
        if (success) {
            resolve("Operation successful");
        } else {
            reject("Operation failed");
        }
    }, 1000);
});

// Handling the Promise
myPromise.then((result) => {
    console.log(result); // Operation successful
})
    .catch((error) => {
        console.log(error); // Operation failed
    });


// const firstAsyncOperation = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("First");
//         }, 1000); //1000ms = 1sec
//     });
// };

// const secondAsyncOperation = (previousResult) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`second`);
//         }, 1000);
//     });
// };

// const thirdAsyncOperation = (previousResult) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`third`);
//         }, 1000);
//     });
// };

//promise.then().catch();
// CHAINING PROMISES ;
// firstAsyncOperation()
//     .then((result) => {
//         console.log(result); // First operation completed
//         return thirdAsyncOperation(result);
//     })
//     .then((result) => {
//         console.log(result); // First operation completed and second operation completed
//         return secondAsyncOperation(result);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First step completed!");
//     }, 1000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Second step completed!");
//     }, 500);
// });

// firstPromise
//     .then(result => {
//         console.log(result);
//         return secondPromise; // Returning another Promise for chaining
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });



// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 500);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise 3 rejected");
//     }, 800);
// });

// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         console.log("All promises resolved:", results);
//     })
//     .catch(error => {
//         console.error("At least one promise rejected:", error);
//     });
