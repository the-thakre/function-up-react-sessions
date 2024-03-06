function asyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Async Operation Completed');
        }, 5000);
    });
}

// async await
// async function can behave like a synchronous function

async function exampleWithPromise() {
    try {
        console.log('STEP 1');
        const result = await asyncOperation();
        console.log('STEP 2', result);
        console.log('result', result);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function
exampleWithPromise();