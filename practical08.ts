/*
Create a Student Grade Calculator to determine pass/fail status based on marks.
Use an object to store student name and mark.
Based on the student mark, calculate the grade as pass or fail using conditional logic.
Use 35 as the passing mark threshold.
Display the result in the terminal with a personalized message.

Steps:
1. Create a student object with properties:
   - name: stores the student's name
   - mark: stores the student's exam mark

2. Use conditional logic (if-else statement) to determine pass/fail:
   - Check if student.mark is greater than or equal to 35
   - If mark >= 35: student passed the exam
   - If mark < 35: student failed the exam

3. Display the result using template strings:
   - Show a personalized message with the student's name
   - Display either congratulations or sorry message based on the result
   - Format: "Congratulation [name]! You passed the EXAM." or "Sorry [name]! You failed the EXAM."
*/

let student = {
  name: "John",
  mark: 25,
};

if (student.mark >= 35) {
  console.log(`Congratulation ${student.name}! You passed the EXAM.`);
} else {
  console.log(`Sorry ${student.name}! You failed the EXAM.`);
}
