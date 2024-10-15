// 1 Basic Timeout Understanding
// Analyze the code below and predict the output. Write comments to explain why each line appears in the order
// it does.
console.log("Start"); // this one will output first because it is synchronous
setTimeout(() => {
  // then this one, even though it has 0ms, it is still asynchronous function
  console.log("Inside setTimeout with 0ms");
}, 0);
console.log("End"); // then this one will start immediately after line 4 because it's also synchronous

// 2 Multiple setTimeout Calls
// Look at the code below. Predict the output and explain the behavior using comments. Why do some
// setTimeout logs appear before others?
console.log("Start"); // first
setTimeout(() => {
  console.log("Timeout 1: After 50ms");
}, 50); // fifth, becasue it has 50ms
setTimeout(() => {
  console.log("Timeout 2: After 30ms");
}, 30); // fourth, because it has 30ms
setTimeout(() => {
  console.log("Timeout 3: After 0ms");
}, 0); // third, because it has 0ms
console.log("End"); // second

// 3 Combining Synchronous and Asynchronous Code
// Analyze the code below and write comments to explain the behavior. Predict the order of the outputs and
// verify by running the code.
console.log("First"); // first because it is synchronous
setTimeout(() => {
  console.log("Inside Timeout 1: After 20ms");
}, 20); // fifth because it has 20ms
for (let i = 0; i < 1000000000; i++) {
  // Simulate a long-running task
} // second because it is synchronous, and it will block everything else in the stack, after it finished it will allow other functions to work
setTimeout(() => {
  console.log("Inside Timeout 2: After 0ms");
}, 0); // fourth after the loop finished this one will run because it has 0ms
console.log("Last"); // third because it is synchronous

// 4 Chained setTimeout Calls
// Analyze the code and predict the order of logs. Write comments to explain why each line runs in the order it does.
console.log("Start"); // first because it is synchronous
setTimeout(() => {
  console.log("First Timeout");
  setTimeout(() => {
    console.log("Nested Timeout");
  }, 0); // fifth because it will run after 0ms time, after the parent function
}, 100); // fourth because it has 100ms
setTimeout(() => {
  console.log("Second Timeout");
}, 50); // third because it has 50ms
console.log("End"); // second because it is synchronous

// Using setInterval and setTimeout Together
// The code below combines setInterval and setTimeout. Predict the output and explain why each log
// appears in the order it does. What happens if you change the interval or timeout delays? Write comments
// explaining your thought process.
console.log("Start"); // first because it is synchronous
setInterval(() => {
  console.log("Interval: Every 30ms");
}, 30);
setTimeout(() => {
  console.log("Timeout 1: After 50ms");
}, 50);
setTimeout(() => {
  console.log("Timeout 2: After 100ms");
  clearInterval(this.interval);
}, 100);
console.log("End"); // second because it is synchronous
// the code logs "start" and "end" immediately because they are synchronous. then the interval logs for the first time, then "timeout 1: after 50ms", then another 2 logs for the setinterval which is at 60ms, 90ms, then the last timeout "Timeout 2: after 100ms"

// but when i run the code, it will run forever at the interval function, because the this.interval is not valid, so I think it's a bug from the codE?
