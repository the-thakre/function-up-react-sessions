function synchronousTask() {
    console.log("Start of the synchronous task");

    // Simulating a 10-second synchronous task using setTimeout
    const endTime = Date.now() + 8000; // 5 seconds 1000ms==1second
    while (Date.now() < endTime) {
        // Busy-waiting to simulate the synchronous task
    }

    console.log("End of the synchronous task");
}

// Calling the function

// console.log('My FIRST TASK DONE.');
// synchronousTask();
// console.log('My SECOND TASK DONE.'); //starvation

// step-by-step /sync
// in random async


console.log(' MY STEP 1');
setTimeout(() => {
    console.log('IM EXECUTED ==== FIRST TIME');
}, 8000)
console.log(' MY STEP 2');
setTimeout(() => {
    console.log('IM EXECUTED ==== second TIME');
}, 5000);
console.log(' MY STEP 3');

//async : 




