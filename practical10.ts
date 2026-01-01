/*
Create a single constant to store user name and user role. Based on the user role, show the output in the terminal as following format. Note: Only use if / if-else statement.
*/

const user = {
	name: "John",
	role: "abc",
};

if (user.role === "admin" || user.role === "editor" || user.role === "user") {
	if (user.role === "admin") {
		console.log(`Hello ${user.name}! You have full access of the application.`);
	}

	if (user.role === "editor") {
		console.log(
			`Hello ${user.name}! You have edit and view only access of the application.`
		);
	}

	if (user.role === "user") {
		console.log(
			`Hello ${user.name}! You have edit and view only access of the application.`
		);
	}
} else {
	console.log(
		`Hello ${user.name}! You don't have any access to the application.`
	);
}
