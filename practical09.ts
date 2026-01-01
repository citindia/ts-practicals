/*
Create a Day Name Converter to display the day name based on a number.
Use a variable to store a number from 1 to 7.
Based on the number, display the corresponding day name using a switch statement.
For invalid numbers (not 1-7), show an invalid message.
Display the result in the terminal.

Steps:
1. Create a variable called dayNumber:
   - Stores a number from 1 to 7 representing days of the week
   - 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

2. Use a switch statement to match the dayNumber with the correct day:
   - case 1: Monday
   - case 2: Tuesday
   - case 3: Wednesday
   - case 4: Thursday
   - case 5: Friday
   - case 6: Saturday
   - case 7: Sunday
   - Each case needs a break statement to exit the switch

3. Use the default case for invalid numbers:
   - Handles any number not between 1-7
   - Displays "Invalid number!" message

4. Display the result using console.log():
   - Format: "Today is [DayName]" for valid numbers
   - Format: "Invalid number!" for invalid numbers
*/

let dayNumber = 1;

switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    break;

  case 2:
    console.log(`Today is Tuesday`);
    break;

  case 3:
    console.log(`Today is Wednesday`);
    break;

  case 4:
    console.log(`Today is Thursday`);
    break;

  case 5:
    console.log(`Today is Friday`);
    break;

  case 6:
    console.log(`Today is Saturday`);
    break;

  case 7:
    console.log(`Today is Sunday`);
    break;

  default:
    console.log(`Invalid number!`);
}
