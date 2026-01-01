/*
Create a table (1 to 10) as following format. Use a constant to store the number for the table. And based on the number, table will be auto calculated. Show the output in the terminal as following format. Note: You can use console.log() one time only.
*/

const number = 2;

for (let tableIndex = 1; tableIndex <= 10; tableIndex++) {
	console.log(`${number} X ${tableIndex} = ${number * tableIndex}`);
}
