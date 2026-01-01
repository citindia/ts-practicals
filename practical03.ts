/*
Create an array named "userArray" to store personal information.
Store "fullName", "age", "gender", and "phoneNumber" in the array.
Then display each value using array indexing with template strings.

Steps:
1. Create an array called userArray to store all personal information:
   - Index 0: stores the person's full name
   - Index 1: stores the person's age
   - Index 2: stores the person's gender
   - Index 3: stores the person's phone number

2. Access array elements using square brackets array[index]
   Arrays are zero-indexed, meaning the first element is at index 0

3. Use template strings to display each value with descriptive labels
   This will print formatted output like "Full Name: John Doe" to the terminal.
*/

let userArray = ["Your Full Name", "0", "Male/Female", "9876543210"];

console.log(`Full Name: ${userArray[0]}`);
console.log(`Age: ${userArray[1]}`);
console.log(`Gender: ${userArray[2]}`);
console.log(`Phone Number: ${userArray[3]}`);
