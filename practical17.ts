/*
Create a delayed user information display system.
Store user details in an object with personal information.
Create a delay timer to control when the user details are shown.
Use setTimeout() to display user information after a specified delay.
Display countdown message and formatted user details in the terminal.

Steps:
1. Create a user object with properties:
   - fullName: stores the person's full name
   - age: stores the person's age
   - gender: stores the person's gender
   - phoneNumber: stores the person's phone number

2. Create a delay time variable:
   - Store delay time in milliseconds (e.g., 2000 for 2 seconds)
   - This controls how long to wait before showing user details

3. Display initial messages:
   - Show countdown message indicating delay duration
   - Display separator line for better formatting

4. Use setTimeout() for delayed execution:
   - Pass an arrow function as the first parameter
   - Pass delayTime as the second parameter
   - The function will execute after the specified delay

5. Display user details after delay using template strings:
   - Access object properties using dot notation
   - Format: "Full Name: [fullName]", "Age: [age]", etc.
   - Each detail is shown on a separate line
*/

let userObject = {
  fullName: "Your Full Name",
  age: "0",
  gender: "Male/Female",
  phoneNumber: "9876543210",
};

let delayTime = 2000;

console.log(`Your details will be shown in ${delayTime / 1000} seconds.`);
console.log("-----------------------------------------");

setTimeout(() => {
  console.log(`Full Name: ${userObject.fullName}`);
  console.log(`Age: ${userObject.age}`);
  console.log(`Gender: ${userObject.gender}`);
  console.log(`Phone Number: ${userObject.phoneNumber}`);
}, delayTime);
