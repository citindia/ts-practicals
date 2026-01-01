/*
Create a normal function named "normalFunc" and an arrow function named "arrowFunc". Both of them will receive a parameter named "useName" which needs to be passed to the function. Show the output in the terminal as following format.
*/

function normalFunc(useName) {
	console.log(`Hello ${useName} from Normal Function`);
}

normalFunc("Your Name");

function arrowFunc(useName) {
	console.log(`Hello ${useName} from Arrow Function`);
}

arrowFunc("Your Name");
