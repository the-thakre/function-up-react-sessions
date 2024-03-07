function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Step 2 Async Operation Completed');
        }, 3000);
    });
}

// async await
// async function can behave like a synchronous function

async function exampleWithPromise() {
    try {
        console.log('STEP 1');
        const result = await asyncOperation();
        console.log(result);
        console.log('STEP 3');

    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function
exampleWithPromise();