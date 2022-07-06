function depositCalculator (input) {
let deposit = Number(input[0]);
let term = Number(input[1]);
let yearInterestRate = Number(input[2]);
let interestInPercent = yearInterestRate  / 100; 

let sum = deposit + (term * ((deposit * interestInPercent) / 12));

console.log(sum);
}

depositCalculator(["200","3","5.7"]);
depositCalculator(["2350","6","7"]);