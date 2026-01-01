/*
Create a Discount Percentage Calculator to calculate discounts on multiple products.
Use variables to store the discount rate and product prices.
Based on the discount rate, calculate the discount amount for each product.
Display the formatted results in the terminal.

Steps:
1. Create variables for discount calculation:
   - discount: stores the discount percentage (e.g., 10 for 10%)
   - laptopPrice: stores the original price of laptop
   - headphonePrice: stores the original price of headphone
   - speakerPrice: stores the original price of speaker

2. Calculate discount amount for each product:
   - Formula: discountAmount = (productPrice * discount) / 100
   - This calculates how much money will be discounted from each product

3. Display results using template strings:
   - Show the flat discount rate first
   - For each product: show original price and calculated discount amount
   - Format: "Product: price/- (Discount: - discountAmount/-)"
*/

let discount = 10;
let laptopPrice = 30000;
let headphonePrice = 2500;
let speakerPrice = 1000;

console.log(`Flat Discount Rate: ${discount}%`);

console.log(
  `Laptop: ${laptopPrice}/- (Discount: - ${(laptopPrice * discount) / 100}/-)`,
);

console.log(
  `Headphone: ${headphonePrice}/- (Discount: - ${
    (headphonePrice * discount) / 100
  }/-)`,
);

console.log(
  `Speaker: ${speakerPrice}/- (Discount: - ${
    (speakerPrice * discount) / 100
  }/-)`,
);
