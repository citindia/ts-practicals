/*
Create constant named userObject. Store "fullName", "age", "gender" and "phoneNumber" in userObject as Object. Create a constant named delayTime in milliseconds. Show the output in the terminal as following format. Note: The user details will be shown after given delay time.
*/

const userObject = {
	fullName: "Your Full Name",
	age: "0",
	gender: "Male/Female",
	phoneNumber: "9876543210",
};

const delayTime = 2000;

console.log();

console.log(`Your details will be shown in ${delayTime / 1000} seconds.`);
console.log("-----------------------------------------");

setTimeout(() => {
	console.log(`Full Name: ${userObject.fullName}`);
	console.log(`Age: ${userObject.age}`);
	console.log(`Gender: ${userObject.gender}`);
	console.log(`Phone Number: ${userObject.phoneNumber}`);
}, delayTime);
