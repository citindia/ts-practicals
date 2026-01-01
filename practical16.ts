/*
Create a student result generator using arrays and conditional logic.
Store student data in an array of objects, each containing name, age, and mark.
Create a result generator function to determine pass/fail status based on marks.
Use array.map() to generate results for each student in the array.
Display personalized pass/fail messages with age information.

Steps:
1. Create an array of student objects:
   - Each object has three properties: name (string), age (number), mark (number)
   - Contains multiple students with their respective data

2. Create a result generator arrow function:
   - Accept three parameters: studentName, studentAge, studentMark
   - Use conditional logic (if-else) to check pass/fail status
   - Passing mark threshold is 35

3. Implement pass/fail logic:
   - If studentMark >= 35: student passed the exam
   - If studentMark < 35: student failed the exam
   - Include age information in the message

4. Use array.map() to process all students:
   - Iterate through each student in studentData array
   - Use object destructuring ({ name, age, mark }) to extract properties
   - Call resultGenerator for each student

5. Display personalized results using template strings:
   - Pass format: "Congratulation [name]! At the age of [age], you passed the EXAM."
   - Fail format: "Sorry [name]! At the age of [age], you failed the EXAM."
*/

let studentData = [
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

const resultGenerator = (
  studentName: string,
  studentAge: number,
  studentMark: number,
) => {
  if (studentMark >= 35) {
    console.log(
      `Congratulation ${studentName}! At the age of ${studentAge}, you passed the EXAM.`,
    );
  } else {
    console.log(
      `Sorry ${studentName}! At the age of ${studentAge}, you failed the EXAM.`,
    );
  }
};

studentData.map(({ name, age, mark }) => resultGenerator(name, age, mark));
