/*
Create an object named "userObject" to store personal information as key-value pairs.
Store "fullName", "age", "gender", and "phoneNumber" as properties of the object.
Then display each value using dot notation with template strings.

Steps:
1. Create an object called userObject with properties:
   - fullName: stores the person's full name
   - age: stores the person's age
   - gender: stores the person's gender
   - phoneNumber: stores the person's phone number

2. Access object properties using dot notation (object.property)
   This is the most common way to access object properties in JavaScript/TypeScript

3. Use template strings to display each value with descriptive labels
   This will print formatted output like "Full Name: John Doe" to the terminal.
*/

let userObject = {
  fullName: "Your Full Name",
  age: "0",
  gender: "Male/Female",
  phoneNumber: "9876543210",
};

console.log(`Full Name: ${userObject.fullName}`);
console.log(`Age: ${userObject.age}`);
console.log(`Gender: ${userObject.gender}`);
console.log(`Phone Number: ${userObject.phoneNumber}`);
