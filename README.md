# TypeScript Practicals

A comprehensive collection of TypeScript exercises covering fundamental programming concepts, data structures, functions, and advanced features.

## Practical 1

Create variables named "fullName", "age", "gender", and "phoneNumber" with sample values.
Then display each variable's value in the console using console.log().

### Steps:

1. Create four variables to store personal information:
   - fullName: stores a person's full name
   - age: stores a person's age
   - gender: stores a person's gender
   - phoneNumber: stores a person's phone number

2. Display each variable's value in the console using console.log()
   This will print the values to the terminal when the program runs.

### Preview:

![Practical 1 Preview](previews/practical1.png)

---

## Practical 2

Create variables named "fullName", "age", "gender", and "phoneNumber" with sample values.
Then display each variable's value in the console using template strings with descriptive labels.

### Steps:

1. Create four variables to store personal information:
   - fullName: stores a person's full name
   - age: stores a person's age
   - gender: stores a person's gender
   - phoneNumber: stores a person's phone number

2. Use template strings (backticks ``) to display each variable with a descriptive label
   Template strings allow you to embed variables directly using ${variableName}
   This will print formatted output like "Full Name: John Doe" to the terminal.

### Preview:

![Practical 2 Preview](previews/practical2-3-4.png)

---

## Practical 3

Create an array named "userArray" to store personal information.
Store "fullName", "age", "gender", and "phoneNumber" in the array.
Then display each value using array indexing with template strings.

### Steps:

1. Create an array called userArray to store all personal information:
   - Index 0: stores the person's full name
   - Index 1: stores the person's age
   - Index 2: stores the person's gender
   - Index 3: stores the person's phone number

2. Access array elements using square brackets array[index]
   Arrays are zero-indexed, meaning the first element is at index 0

3. Use template strings to display each value with descriptive labels
   This will print formatted output like "Full Name: John Doe" to the terminal.

### Preview:

![Practical 3 Preview](previews/practical2-3-4.png)

---

## Practical 4

Create an object named "userObject" to store personal information as key-value pairs.
Store "fullName", "age", "gender", and "phoneNumber" as properties of the object.
Then display each value using dot notation with template strings.

### Steps:

1. Create an object called userObject with properties:
   - fullName: stores the person's full name
   - age: stores the person's age
   - gender: stores the person's gender
   - phoneNumber: stores the person's phone number

2. Access object properties using dot notation (object.property)
   This is the most common way to access object properties in JavaScript/TypeScript

3. Use template strings to display each value with descriptive labels
   This will print formatted output like "Full Name: John Doe" to the terminal.

### Preview:

![Practical 4 Preview](previews/practical2-3-4.png)

---

## Practical 5

Create a multiplication table (1 to 10) using a variable to store the base number.
The table will be automatically calculated based on the number variable.
Display the formatted multiplication table in the terminal.

### Steps:

1. Create a variable called "number" to store the base number for the multiplication table
   This variable determines which multiplication table to generate (e.g., 2 for 2's table)

2. Generate multiplication table from 1 to 10:
   - Multiply the base number by each number from 1 to 10
   - Use template strings to format each line as "2 X 1 = 2"

3. Display each multiplication result using console.log()
   This will print a complete multiplication table to the terminal
   The output format will be: "number X multiplier = result"

### Preview:

![Practical 5 Preview](previews/practical5-12-14.png)

---

## Practical 6

Create a Discount Percentage Calculator to calculate discounts on multiple products.
Use variables to store the discount rate and product prices.
Based on the discount rate, calculate the discount amount for each product.
Display the formatted results in the terminal.

### Steps:

1. Create variables for discount calculation:
   - discount: stores the discount percentage (e.g., 10 for 10%)
   - laptopPrice: stores the original price of laptop
   - headphonePrice: stores the original price of headphone
   - speakerPrice: stores the original price of speaker

2. Calculate discount amount for each product:
   - Formula: discountAmount = (productPrice \* discount) / 100
   - This calculates how much money will be discounted from each product

3. Display results using template strings:
   - Show the flat discount rate first
   - For each product: show original price and calculated discount amount
   - Format: "Product: price/- (Discount: - discountAmount/-)"

### Preview:

![Practical 6 Preview](previews/practical6.png)

---

## Practical 7

Create an Enhanced Discount Percentage Calculator to calculate discounts and final prices.
Use variables to store the discount rate and product prices.
Based on the discount rate, calculate both the discount amount and the final price after discount.
Display the formatted results with original price, discount amount, and final price.

### Steps:

1. Create variables for discount calculation:
   - discount: stores the discount percentage (e.g., 10 for 10%)
   - laptopPrice: stores the original price of laptop
   - headphonePrice: stores the original price of headphone
   - speakerPrice: stores the original price of speaker

2. Calculate discount amount and final price for each product:
   - Discount Formula: discountAmount = (productPrice \* discount) / 100
   - Final Price Formula: finalPrice = productPrice - discountAmount
   - This calculates both how much is discounted and the final price to pay

3. Display results using template strings:
   - Show the flat discount rate first
   - For each product: show original price, discount amount, and final price
   - Format: "Product: price/- (Discount: - discountAmount/-) = finalPrice/-"

### Preview:

![Practical 7 Preview](previews/practical7-15.png)

---

## Practical 8

Create a Student Grade Calculator to determine pass/fail status based on marks.
Use an object to store student name and mark.
Based on the student mark, calculate the grade as pass or fail using conditional logic.
Use 35 as the passing mark threshold.
Display the result in the terminal with a personalized message.

### Steps:

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

### Preview:

![Practical 8 Preview](previews/practical8.png)

---

## Practical 9

Create a Day Name Converter to display the day name based on a number.
Use a variable to store a number from 1 to 7.
Based on the number, display the corresponding day name using a switch statement.
For invalid numbers (not 1-7), show an invalid message.
Display the result in the terminal.

### Steps:

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

### Preview:

![Practical 9 Preview](previews/practical9.png)

---

## Practical 10

Create a User Role Access Control System to display access messages based on user roles.
Use an object to store user name and role.
Based on the user role, show appropriate access messages using only if/if-else statements.
Handle valid roles (admin, editor, user) and invalid roles.
Display personalized messages in the terminal.

### Steps:

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

### Preview:

![Practical 10 Preview](previews/practical10-11.png)

---

## Practical 11

Create a User Role Access Control System using switch-case statements.
Use an object to store user name and role.
Based on the user role, show appropriate access messages using only switch-case statements.
Handle valid roles (admin, editor, user) and invalid roles with a default case.
Display personalized messages in the terminal.

### Steps:

1. Create a user object with properties:
   - name: stores the user's name
   - role: stores the user's role (admin, editor, user, or any other value)

2. Use a switch statement to check user.role:
   - case "admin": full access to the application
   - case "editor": edit and view only access
   - case "user": view only access
   - Each case needs a break statement to exit the switch

3. Use the default case for invalid roles:
   - Handles any role that is not admin, editor, or user
   - Shows no access message

4. Display personalized messages using template strings:
   - Format: "Hello [name]! You have [access level] access of the application."
   - For invalid roles: "Hello [name]! You don't have any access to the application."

### Preview:

![Practical 11 Preview](previews/practical10-11.png)
