/*
Create a multiplication table (1 to 10) using a for loop.
Use a constant to store the base number for the table.
The table will be automatically calculated using iteration.
Display the formatted multiplication table in the terminal using only one console.log() call.

Steps:
1. Create a variable called "number" to store the base number for the multiplication table
   This variable determines which multiplication table to generate (e.g., 2 for 2's table)

2. Use a for loop to generate the multiplication table:
   - Initialize: let tableIndex = 1 (starts from 1)
   - Condition: tableIndex <= 10 (continues until 10)
   - Increment: tableIndex++ (increases by 1 each iteration)
   - Loop body: calculate and display each multiplication result

3. Display each multiplication result using console.log() inside the loop:
   - Use template strings to format each line as "2 X 1 = 2"
   - Only one console.log() statement is used, but it runs 10 times due to the loop
   - Output format: "number X tableIndex = result"
*/

let number = 2;

for (let tableIndex = 1; tableIndex <= 10; tableIndex++) {
  console.log(`${number} X ${tableIndex} = ${number * tableIndex}`);
}
