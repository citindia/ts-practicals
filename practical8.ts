/*
Create a single constant to store student name and student mark. Based on the student mark, calculate the grade as pass or fail. You can use 35 or 25 as the pass mark. Show the output in the terminal as following format.
*/

const student = {
	name: "John",
	mark: 25,
};

if (student.mark >= 35) {
	console.log(`Congratulation ${student.name}! You passed the EXAM.`);
} else {
	console.log(`Sorry ${student.name}! You failed the EXAM.`);
}
