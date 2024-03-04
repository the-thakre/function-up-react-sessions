function synchronousTask() {
    console.log("Start of the synchronous task");

    // Simulating a 10-second synchronous task using setTimeout
    const endTime = Date.now() + 5000; // 10 seconds
    while (Date.now() < endTime) {
        // Busy-waiting to simulate the synchronous task
    }

    console.log("End of the synchronous task");
}

// Calling the function

console.log('My FIRST TASK DONE.');
synchronousTask();
console.log('My SECOND TASK DONE.');


