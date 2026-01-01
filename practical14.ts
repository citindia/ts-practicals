/*
Create a flexible multiplication table generator function.
The function accepts two parameters: table number and table length.
Based on these parameters, the function generates a customizable multiplication table.
Display the output in the terminal with formatted multiplication results.

Steps:
1. Create an arrow function named "tableGenerator":
   - Accept two parameters: number (base number) and length (table size)
   - Both parameters have type annotation (number)
   - Use arrow function syntax with const assignment

2. Implement the table generation logic inside the function:
   - Use a for loop to iterate from 1 to the specified length
   - Calculate multiplication: number × tableIndex
   - Display each result using console.log() with template strings

3. Call the function with custom parameters:
   - Pass any number as the first parameter (e.g., 3 for 3's table)
   - Pass any length as the second parameter (e.g., 20 for 20 lines)
   - The function will generate a table of the specified size

4. Display results using template strings:
   - Format: "number X tableIndex = result"
   - Each line shows the multiplication equation and result
*/

let tableGenerator = (number: number, length: number) => {
  for (let tableIndex = 1; tableIndex <= length; tableIndex++) {
    console.log(`${number} X ${tableIndex} = ${number * tableIndex}`);
  }
};

tableGenerator(3, 20);
