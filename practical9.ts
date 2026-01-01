/*
Create a constant to store a number. Based on the number, a name of the day will be shown and incorrect number will be shown invalid. Show the output in the terminal as following format.
*/

const dayNumber = 1;

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
