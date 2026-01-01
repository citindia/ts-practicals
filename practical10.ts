/*
Create a User Role Access Control System to display access messages based on user roles.
Use an object to store user name and role.
Based on the user role, show appropriate access messages using only if/if-else statements.
Handle valid roles (admin, editor, user) and invalid roles.
Display personalized messages in the terminal.

Steps:
1. Create a user object with properties:
   - name: stores the user's name
   - role: stores the user's role (admin, editor, user, or any other value)

2. Use nested if-else statements to check user role:
   - First check if role is valid (admin, editor, or user) using OR operator
   - If valid, check specific role and show corresponding access message
   - If invalid, show no access message

3. Role-based access levels:
   - admin: full access to the application
   - editor: edit and view only access
   - user: view only access
   - any other role: no access

4. Display personalized messages using template strings:
   - Format: "Hello [name]! You have [access level] access of the application."
   - For invalid roles: "Hello [name]! You don't have any access to the application."
*/

let user = {
  name: "John",
  role: "abc",
};

if (user.role === "admin" || user.role === "editor" || user.role === "user") {
  if (user.role === "admin") {
    console.log(`Hello ${user.name}! You have full access of the application.`);
  }

  if (user.role === "editor") {
    console.log(
      `Hello ${user.name}! You have edit and view only access of the application.`,
    );
  }

  if (user.role === "user") {
    console.log(
      `Hello ${user.name}! You have view only access of the application.`,
    );
  }
} else {
  console.log(
    `Hello ${user.name}! You don't have any access to the application.`,
  );
}
