/*
Create an automated counter system with customizable range and interval.
Set start count, end count, and interval time variables.
Use setInterval() to display each count at specified intervals.
Automatically stop counting when reaching the end count.
Display counting progress in the terminal with formatted output.

Steps:
1. Create counting range variables:
   - startCount: the number to start counting from
   - endCount: the number to stop counting at
   - intervalTime: time between each count in milliseconds

2. Display initial messages:
   - Show the counting range (start to end)
   - Display separator line for better formatting

3. Create a counter variable:
   - Initialize with startCount value
   - This variable will increment during counting

4. Use setInterval() for repeated execution:
   - Pass an arrow function as the first parameter
   - Pass intervalTime as the second parameter
   - Store the interval ID in a constant for later cleanup

5. Implement counting logic inside the interval:
   - Check if current count is less than or equal to endCount
   - If true: display current count and increment counter
   - If false: stop the interval using clearInterval()
   - This prevents infinite loops after reaching the target

6. Display formatted count using template strings:
   - Format: "Count: [currentNumber]"
   - Each count appears after the specified interval time
*/

let startCount = 0;
let endCount = 10;
let intervalTime = 1000;

console.log(`Counting up from ${startCount} to ${endCount}`);
console.log("-------------------------");

let start = startCount;

const counter = setInterval(() => {
  if (start <= endCount) {
    console.log(`Count: ${start}`);
    start++;
  } else {
    clearInterval(counter);
  }
}, intervalTime);
