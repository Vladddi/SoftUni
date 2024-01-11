function solve(fruit,grams,price) {
let kg=grams/1000
let finalPrice=kg*price
console.log(`I need $${finalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
} 
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
