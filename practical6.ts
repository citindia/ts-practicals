/*
Create a Discount Percentage Calculator. Use a variable or constant to store the discount rate and product price. Based on the discount rate, calculate the discounted price. Show the output in the terminal as following format.
*/

const discount = 10;

const laptopPrice = 30000;
const headphonePrice = 2500;
const speakerPrice = 1000;

console.log(`Flat Discount Rate: ${discount}%`);

console.log(
	`Laptop: ${laptopPrice}/- (Discount: - ${(laptopPrice * discount) / 100}/-)`
);

console.log(
	`Headphone: ${headphonePrice}/- (Discount: - ${
		(headphonePrice * discount) / 100
	}/-)`
);

console.log(
	`Speaker: ${speakerPrice}/- (Discount: - ${
		(speakerPrice * discount) / 100
	}/-)`
);
