const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true; // or false for failure
        if (success) {
            resolve("Operation successful");
        } else {
            reject("Operation failed");
        }
    }, 1000);
});


// Handling the Promise
myPromise
    .then((result) => {
        console.log(result); // Operation successful
    })
    .catch((error) => {
        console.error(error); // Operation failed
    });


// const firstAsyncOperation = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("First operation completed");
//         }, 1000);
//     });
// };

// const secondAsyncOperation = (previousResult) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`${previousResult} and second operation completed`);
//         }, 1000);
//     });
// };

// firstAsyncOperation()
//     .then((result) => {
//         console.log(result); // First operation completed
//         return secondAsyncOperation(result);
//     })
//     .then((result) => {
//         console.log(result); // First operation completed and second operation completed
//     })
//     .catch((error) => {
//         console.error(error);
//     });
