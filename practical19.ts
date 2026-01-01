/*
Create an advanced multiplication table generator with timed intervals.
The function accepts three parameters: table number, table length, and interval time.
Generate multiplication table based on number and length parameters.
Display each multiplication result at specified time intervals.
Automatically stop when reaching the table length.

Steps:
1. Create a table generator arrow function:
   - Accept three parameters: number (base number), length (table size), intervalTime (delay)
   - All parameters have type annotation (number)
   - Use arrow function syntax with const assignment

2. Initialize index variable:
   - Start with index = 1 for first multiplication
   - This variable will increment during table generation

3. Display initial messages:
   - Show table number and length information
   - Display interval time in seconds for user understanding
   - Add separator line for better formatting

4. Use setInterval() for timed table generation:
   - Pass an arrow function as the first parameter
   - Pass intervalTime as the second parameter
   - Store the interval ID for later cleanup

5. Implement table generation logic:
   - Check if current index is less than or equal to length
   - If true: display multiplication result and increment index
   - If false: stop the interval using clearInterval()
   - This prevents infinite loops after completing the table

6. Display formatted multiplication results:
   - Format: "number X index = result"
   - Each line appears after the specified interval time
*/

const tableGenerator = (
  number: number,
  length: number,
  intervalTime: number,
) => {
  let index = 1;

  console.log(`Generating table of number ${number} upto ${length} times.`);
  console.log(`In every ${intervalTime / 1000} seconds.`);

  console.log("-------------------------------------------");

  const interval = setInterval(() => {
    if (index <= length) {
      console.log(`${number} X ${index} = ${number * index}`);

      index++;
    } else {
      clearInterval(interval);
    }
  }, intervalTime);
};

tableGenerator(3, 10, 1000);
