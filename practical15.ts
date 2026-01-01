/*
Create an advanced discount calculator using arrays and functions.
Store the discount rate and product data in separate variables.
The product data is an array of objects, each containing name and price.
Create a discount calculator function to calculate discounted prices.
Use array.map() to apply the discount function to each product.
Display formatted results in the terminal.

Steps:
1. Create a variable for discount rate:
   - Store the discount percentage (e.g., 20 for 20%)

2. Create an array of product objects:
   - Each object has two properties: name (string) and price (number)
   - Contains multiple products like Laptop, Headphone, Speaker

3. Create a discount calculator arrow function:
   - Accept three parameters: discount, productName, productPrice
   - Calculate discount amount: (productPrice * discount) / 100
   - Calculate final price: productPrice - discountAmount
   - Display formatted result using console.log()

4. Use array.map() to process all products:
   - Iterate through each product in productData array
   - Use object destructuring ({ name, price }) to extract properties
   - Call discountCalculator for each product

5. Display results using template strings:
   - Show flat discount rate first
   - Format: "ProductName: price/- (Discount: - discountAmount/-) = finalPrice/-"
*/

let discountRate = 20;

let productData = [
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

const discountCalculator = (
  discount: number,
  productName: string,
  productPrice: number,
) => {
  let discountPrice = (productPrice * discount) / 100;

  console.log(
    `${productName}: ${productPrice}/- (Discount: - ${discountPrice}/-) = ${
      productPrice - discountPrice
    }/-`,
  );
};

console.log(`Flat Discount Rate: ${discountRate}%`);

productData.map(({ name, price }) =>
  discountCalculator(discountRate, name, price),
);
