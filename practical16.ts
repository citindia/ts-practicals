/*
Create a constant to store the student data. The student data will be an array of student objects and each student object will have its own name age and mark. Create a report or result generator function, which will be responsible for generating a result based on the student data. The result will show pass or fail based on the student mark. Use this to generate result for each student in the student data array. Show the output in the terminal as following format.
*/

const studentData = [
	{
		name: "John",
		age: 20,
		mark: 25,
	},
	{
		name: "Tom",
		age: 22,
		mark: 35,
	},
];

console.log();

const resultGenerator = (studentName, studentAge, studentMark) => {
	if (studentMark >= 35) {
		console.log(
			`Congratulation ${studentName}! At the age of ${studentAge}, you passed the EXAM.`
		);
	} else {
		console.log(
			`Sorry ${studentName}! At the age of ${studentAge}, you failed the EXAM.`
		);
	}
};

studentData.map(({ name, age, mark }) => resultGenerator(name, age, mark));
