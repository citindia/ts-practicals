/*
Create a single constant to store user name and user role. Based on the user role, show the output in the terminal as following format. Note: Only use switch-case statement.
*/

const user = {
	name: "John",
	role: "admin",
};

switch (user.role) {
	case "admin":
		console.log(`Hello ${user.name}! You have full access of the application.`);
		break;

	case "editor":
		console.log(
			`Hello ${user.name}! You have edit and view only access of the application.`
		);
		break;

	case "user":
		console.log(
			`Hello ${user.name}! You have edit and view only access of the application.`
		);
		break;

	default:
		console.log(
			`Hello ${user.name}! You don't have any access to the application.`
		);
}
