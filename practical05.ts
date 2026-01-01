/*
Create a multiplication table (1 to 10) using a variable to store the base number.
The table will be automatically calculated based on the number variable.
Display the formatted multiplication table in the terminal.

Steps:
1. Create a variable called "number" to store the base number for the multiplication table
   This variable determines which multiplication table to generate (e.g., 2 for 2's table)

2. Generate multiplication table from 1 to 10:
   - Multiply the base number by each number from 1 to 10
   - Use template strings to format each line as "2 X 1 = 2"

3. Display each multiplication result using console.log()
   This will print a complete multiplication table to the terminal
   The output format will be: "number X multiplier = result"
*/

let number = 2;

console.log(`${number} X 1 = ${number * 1}`);
console.log(`${number} X 2 = ${number * 2}`);
console.log(`${number} X 3 = ${number * 3}`);
console.log(`${number} X 4 = ${number * 4}`);
console.log(`${number} X 5 = ${number * 5}`);
console.log(`${number} X 6 = ${number * 6}`);
console.log(`${number} X 7 = ${number * 7}`);
console.log(`${number} X 8 = ${number * 8}`);
console.log(`${number} X 9 = ${number * 9}`);
console.log(`${number} X 10 = ${number * 10}`);
