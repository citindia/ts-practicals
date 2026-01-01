/*
Create a constant to store the discount rate. Create a constant to store the product data. The product data will be an array of product objects and each product object will have its own name and price. Create a discount calculator function, which will be responsible for calculating the discounted price based on the discount rate and the product price. Use the discount calculator function to calculate the discounted price for each product in the product data array. Show the output in the terminal as following format.
*/

const discountRate = 20;

const productData = [
	{
		name: "Laptop",
		price: 30000,
	},
	{
		name: "Headphone",
		price: 2500,
	},
	{
		name: "Speaker",
		price: 1000,
	},
];

const discountCalculator = (discount, productName, productPrice) => {
	const discountPrice = (productPrice * discount) / 100;

	console.log(
		`${productName}: ${productPrice}/- (Discount: - ${discountPrice}/-) = ${
			productPrice - discountPrice
		}/-`
	);
};

console.log(`Flat Discount Rate: ${discountRate}%`);

productData.map(({ name, price }) =>
	discountCalculator(discountRate, name, price)
);
