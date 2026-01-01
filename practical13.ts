/*
Create two types of functions: a normal function and an arrow function.
Both functions will accept a parameter called "userName" and display personalized messages.
Compare the syntax differences between normal and arrow functions.
Display the output in the terminal with function type identification.

Steps:
1. Create a normal function named "normalFunc":
   - Use the function keyword with traditional syntax
   - Accept a parameter "userName" with type annotation (string)
   - Display a message indicating it's from a normal function

2. Create an arrow function named "arrowFunc":
   - Use const with arrow function syntax (=>)
   - Accept the same parameter "userName" with type annotation
   - Display a message indicating it's from an arrow function

3. Call both functions with sample names:
   - Pass a string argument to each function
   - Observe that both produce similar output but with different syntax

4. Display results using template strings:
   - Format: "Hello [userName] from Normal Function"
   - Format: "Hello [userName] from Arrow Function"
*/

function normalFunc(useName: string) {
  console.log(`Hello ${useName} from Normal Function`);
}

normalFunc("Your Name");

const arrowFunc = (useName: string) => {
  console.log(`Hello ${useName} from Arrow Function`);
};

arrowFunc("Your Name");
