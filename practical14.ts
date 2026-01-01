/*
Create a table generator function. We can give the function table number and table length. The function will generate a table based on the number parameter and the length of the table will be based on the length parameter. Show the output in the terminal as following format.
*/

const tableGenerator = (number, length) => {
	for (let tableIndex = 1; tableIndex <= length; tableIndex++) {
		console.log(`${number} X ${tableIndex} = ${number * tableIndex}`);
	}
};

tableGenerator(3, 20);
