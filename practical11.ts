/*
Create a User Role Access Control System using switch-case statements.
Use an object to store user name and role.
Based on the user role, show appropriate access messages using only switch-case statements.
Handle valid roles (admin, editor, user) and invalid roles with a default case.
Display personalized messages in the terminal.

Steps:
1. Create a user object with properties:
   - name: stores the user's name
   - role: stores the user's role (admin, editor, user, or any other value)

2. Use a switch statement to check user.role:
   - case "admin": full access to the application
   - case "editor": edit and view only access
   - case "user": view only access
   - Each case needs a break statement to exit the switch

3. Use the default case for invalid roles:
   - Handles any role that is not admin, editor, or user
   - Shows no access message

4. Display personalized messages using template strings:
   - Format: "Hello [name]! You have [access level] access of the application."
   - For invalid roles: "Hello [name]! You don't have any access to the application."
*/

let user = {
  name: "John",
  role: "admin",
};

switch (user.role) {
  case "admin":
    console.log(`Hello ${user.name}! You have full access of the application.`);
    break;

  case "editor":
    console.log(
      `Hello ${user.name}! You have edit and view only access of the application.`,
    );
    break;

  case "user":
    console.log(
      `Hello ${user.name}! You have edit and view only access of the application.`,
    );
    break;

  default:
    console.log(
      `Hello ${user.name}! You don't have any access to the application.`,
    );
}
