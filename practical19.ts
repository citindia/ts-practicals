/*
Create a table generator function. We can give the function table number, table length and interval time. The function will generate a table based on the number parameter and the length of the table will be based on the length parameter. The interval time will be based on the intervalTime parameter. Show the output in the terminal as following format. Note: Each part of the table will be shown after given interval time.
*/

console.log();

const tableGenerator = (number, length, intervalTime) => {
	let index = 1;

	console.log(`Generating table of number ${number} upto ${length} times.`);
	console.log(`In every ${intervalTime / 1000} seconds.`);

	console.log("-------------------------------------------");

	const interval = setInterval(() => {
		if (index <= length) {
			console.log(`${number} X ${index} = ${number * index}`);

			index++;
		} else {
			clearInterval(interval);
		}
	}, intervalTime);
};

tableGenerator(3, 10, 1000);
