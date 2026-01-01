/*
Create an Enhanced Discount Percentage Calculator to calculate discounts and final prices.
Use variables to store the discount rate and product prices.
Based on the discount rate, calculate both the discount amount and the final price after discount.
Display the formatted results with original price, discount amount, and final price.

Steps:
1. Create variables for discount calculation:
   - discount: stores the discount percentage (e.g., 10 for 10%)
   - laptopPrice: stores the original price of laptop
   - headphonePrice: stores the original price of headphone
   - speakerPrice: stores the original price of speaker

2. Calculate discount amount and final price for each product:
   - Discount Formula: discountAmount = (productPrice * discount) / 100
   - Final Price Formula: finalPrice = productPrice - discountAmount
   - This calculates both how much is discounted and the final price to pay

3. Display results using template strings:
   - Show the flat discount rate first
   - For each product: show original price, discount amount, and final price
   - Format: "Product: price/- (Discount: - discountAmount/-) = finalPrice/-"
*/

let discount = 10;
let laptopPrice = 30000;
let headphonePrice = 2500;
let speakerPrice = 1000;

console.log(`Flat Discount Rate: ${discount}%`);

console.log(
  `Laptop: ${laptopPrice}/- (Discount: - ${
    (laptopPrice * discount) / 100
  }/-) = ${laptopPrice - (laptopPrice * discount) / 100}/-`,
);

console.log(
  `Headphone: ${headphonePrice}/- (Discount: - ${
    (headphonePrice * discount) / 100
  }/-) = ${headphonePrice - (headphonePrice * discount) / 100}/-`,
);

console.log(
  `Speaker: ${speakerPrice}/- (Discount: - ${
    (speakerPrice * discount) / 100
  }/-) = ${speakerPrice - (speakerPrice * discount) / 100}/-`,
);
