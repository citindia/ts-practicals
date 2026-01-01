/*
Create a constant for start count. Create a constant for end count. Create a constant for interval time in milliseconds. Show the output in the terminal as following format. Note: The each count will be shown after given interval time.
*/

const startCount = 0;

const endCount = 10;

const intervalTime = 1000;

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
