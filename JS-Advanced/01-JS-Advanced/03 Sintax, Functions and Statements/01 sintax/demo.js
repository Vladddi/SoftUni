/**
 * @param {string} word
 * 
 **/

//---------------------------------------------------------------------
// function echo(word) {
//     console.log(word.length);
//     console.log(word);
// }

// echo('Hello, JavaScript!');
// echo('strings are easy');


//---------------------------------------------------------------------
// function solve(arr1, arr2, arr3) {
//     let sumLength;
//     let averageLength;

//     sumLength = arr1.length + arr2.length + arr3.length;
//     averageLength = Math.floor(sumLength / 3);

//     console.log(sumLength);
//     console.log(averageLength);
// }

// solve('chocolate', 'ice cream', 'cake');
// solve('pasta', '5', '22.3');

// function solve(...params) {
//     console.log(`The largest number is ${Math.max(...params)}.`);
// }

// solve(1, 3, 2);
// solve(5, -3, 16);
// solve(-3, -5, -22.5);


//---------------------------------------------------------------------
// function solve(input) {

//     let typeOfInput = typeof (input);
//     if (typeOfInput === 'number') {
//         const circleArea = (Math.PI * Math.pow(input, 2)).toFixed(2);
//         console.log(circleArea);

//     } else {
//         console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
//     }

// }

// solve(5);
// solve('name');


//---------------------------------------------------------------------
// function solve(input1, input2, operator) {
//     let num1 = Number(input1);
//     let num2 = Number(input2);
//     let sum;
//     switch (operator) {
//         case '+':
//             sum = num1 + num2;
//             break;
//         case '-':
//             sum = num1 - num2;
//             break;
//         case '*':
//             sum = num1 * num2;
//             break;
//         case '/':
//             sum = num1 / num2;
//             break;
//         case '%':
//             sum = num1 % num2;
//             break;
//         case '**':
//             sum = num1 ** num2;
//             break;
//     }

//     console.log(sum);
// }

// solve(5, 6, '+');
// solve(3, 5.5, '*');


//---------------------------------------------------------------------
// function solve(n, m) {
//     let num1 = Number(n);
//     let num2 = Number(m);
//     let result = 0;

//     for (let i = num1; i <= num2; i++) {
//         result += i;
//     }
//     console.log(result);

// }

// solve('1', '5');
// solve('-8', '20');

//---------------------------------------------------------------------
// function solve(input) {
//     switch (input) {
//         case 'Monday':
//             console.log(1);
//             break;
//         case 'Tuesday':
//             console.log(2);
//             break;
//         case 'Wednesday':
//             console.log(3);
//             break;
//         case 'Thursday':
//             console.log(4);
//             break;
//         case 'Friday':
//             console.log(5);
//             break;
//         case 'Saturday':
//             console.log(6);
//             break;
//         case 'Sunday':
//             console.log(7);
//             break;
//         default:
//             console.log('error');
//             break;
//     }
// }
// solve('Monday');
// solve('Friday');
// solve('Invalid');
// solve('Pesho');

//---------------------------------------------------------------------
// function solve(month, year) {
//     const currentDate = new Date(year, month, 0).getDate();

//     return currentDate;
// }
// console.log(currentDate);
// solve(1, 2012);
// solve(2, 2021);


//---------------------------------------------------------------------
// function solve(countNumber) {
//     let row = [];
//     let area = [];

//     if (countNumber == NaN) {
//         for (let i = 1; i <= 5; i++) {
//             row.push('*');
//         }
//         for (let j = 1; j <= row.length; j++) {
//             //console.log(row.join(' '));
//        area = row.push
//         }
//     } else {
//         for (let i = 1; i <= countNumber; i++) {
//             row.push('*');
//         }
//         for (let j = 1; j <= countNumber; j++) {
//             console.log(row.join(' ')) + '\n';
//         }
//     }

// }

// solve(1);
// solve(2);
// solve(5);
// solve();


//---------------------------------------------------------------------

// function solve(fruit, weightInGrams, pricePerKg) {
//     let weight = (weightInGrams / 1000);
//     let money = weight * pricePerKg;
//     console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
// }

// solve('orange', 2500, 1.80);
// solve('apple', 1563, 2.35);

//---------------------------------------------------------------------

// function solve(a, b) {
//     while (b != 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }

//     return a;
// }
// console.log(solve(15, 5));
// console.log(solve(2154, 458));
// console.log(solve(14, 8));

//---------------------------------------------------------------------

// function solve(intNumber) {

//     const strNum = intNumber.toString();
//     let result = parseInt(strNum[0]);
//     let isSame = true;

//     for (let i = 1; i < strNum.length; i++) {
//         result += parseInt(strNum[i]);

//         if (strNum[i] != strNum[i - 1]) {
//             isSame = false;
//         }
//     }

//     console.log(isSame);
//     console.log(result);

// }
// solve(2222222);
// solve(1234);

// function solve4(year, month, day) {

//     let dateString = year + '-' + month + '-' + day;
//     let event = new Date(dateString);
//     event.setDate(day -1);
//     console.log(event.getFullYear() + '-' + (Number(event.getMonth()) + 1) + '-' + event.getDate());

// }
// solve4(2016, 9, 30);
// solve4(2016, 10, 1);

// function solve(steps, metersStepsLength, speedKmH) {
//     let distanceInMeters = steps * metersStepsLength; //2400 meters
//     let breakInSec = (Math.floor(distanceInMeters / 500)) * 60; //4 * 60 = 240 seconds
//     let speedMeterInMin = speedKmH * 1000; // 5 * 1000 = 5000 m/sec
//     let timeInSecond = (distanceInMeters / speedMeterInMin) * 60;
//     let minutes = Math.floor(timeInSecond * 60);


//     console.log(timeInSecond);

//     //  console.log(`${hours}:${totalMinutes}:${seconds}`);
// }

// function TimeToWalk(arg1, arg2, arg3) {
//     let stepsNumber = Number(arg1);
//     let stepsMetersHr = Number(arg2);
//     let studentSpeed = Number(arg3);


//     let distanceMeters = stepsNumber * stepsMetersHr;
//     let speedMetersSec = studentSpeed / 3.6;
//     let time = distanceMeters / speedMetersSec;
//     let rest = Math.floor(distanceMeters / 500);
//     let timeMin = Math.floor(time / 60);
//     let timeSec = Math.round(time - (timeMin * 60));
//     let timeHr = Math.floor(time / 3600);
// }

// TimeToWalk(4000, 0.60, 5);
// TimeToWalk(2564, 0.70, 5.5);


//---------------------------------------------------------------------
// function solve(speed, area) {


//     let residentialLimit = 20;
//     let cityLimit = 50;
//     let interstateLimit = 90;
//     let motorwayLimit = 130;


//     function status(difference) {
//         let status;
//         if (difference <= 20) {
//             status = 'speeding';
//         } else if (difference <= 40) {
//             status = 'excessive speeding';
//         } else {
//             status = 'reckless driving';
//         }
//         return status;
//     }

//     switch (area) {
//         case 'residential':
//             if (speed > residentialLimit) {
//                 let difference = speed - residentialLimit;

//                 console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status(difference)}`);
//             } else {
//                 console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
//             }
//             break;
//         case 'city':
//             if (speed > cityLimit) {
//                 let difference = speed - cityLimit;
//                 console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status(difference)}`);
//             } else {
//                 console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
//             }
//             break;
//         case 'interstate':
//             if (speed > interstateLimit) {
//                 let difference = speed - interstateLimit;
//                 console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status(difference)}`);
//             } else {
//                 console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
//             }
//             break;
//         case 'motorway':
//             if (speed > motorwayLimit) {
//                 let difference = speed - motorwayLimit;
//                 console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status(difference)}`);
//             } else {
//                 console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
//             }
//             break;
//     }
// }

// solve(40, 'city');
// solve(21, 'residential');
// solve(120, 'interstate');
// solve(200, 'motorway');


//---------------------------------------------------------------------

// function cookingByNumber(number, arr1, arr2, arr3, arr4, arr5) {
//     num = Number(number);
//     const arr = [arr1, arr2, arr3, arr4, arr5];
//     let result = num;
//     let chop = function (n) {
//         return n / 2;
//     }

//     let dice = function (n) {
//         return Math.sqrt(n);
//     }

//     let spice = function (n) {
//         return n + 1;
//     }

//     let bake = function (n) {
//         return n * 3;
//     }

//     let fillet = function (n) {
//         return n * 0.8;
//     }


//     for (let i = 0; i < arr.length; i++) {
//         switch (arr[i]) {
//             case 'chop':
//                 result = chop(result);
//                 console.log(result);
//                 break;
//             case 'dice':
//                 result = dice(result);
//                 console.log(result);
//                 break;
//             case 'spice':
//                 result = spice(result);
//                 console.log(result);
//                 break;
//             case 'bake':
//                 result = bake(result);
//                 console.log(result);
//                 break;
//             case 'fillet':
//                 result = fillet(result);
//                 console.log(result);
//                 break;
//         }
//     }
// }

// cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// console.log('------------------')
// cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// function solve(text) {
//     let formattedWords = [];
//     let words = text.split(/\W+/g);
//     for (const word of words) {
//         if (word !== '') {
//             formattedWords.push(word.toUpperCase());
//         }
//     }

//     console.log(formattedWords.join(', '));
// }

// solve('Hi, how are you?');
// solve('hello');


//---------------------------------------------------------------------
// function timeToWalk (steps, stride, speedInKm) {
// let distance = steps * stride;
// let speedInMps = speedInKm / 3.6;

// let time = distance / speedInMps;
// let breaks = Math.trunc(distance / 500);
// time += (breaks * 60);

// let hours = Math.trunc(time / 3600);
// let minutes = Math.trunc((time % 3600) / 60);
// let seconds = Math.round(time % 60);

// console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

// }
// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);


//---------------------------------------------------------------------
// function solve(num1, num2, num3, num4) {
//     let x1 = Number(num1);
//     let y1 = Number(num2);
//     let x2 = Number(num3);
//     let y2 = Number(num4);

//     console.log(`{${x1}, ${y1}} to {0, 0} is ${checkValidity(isValid(x1,y1,0,0))}`);
//     console.log(`{${x2}, ${y2}} to {0, 0} is ${checkValidity(isValid(x2,y2,0,0))}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(isValid(x1,y1,x2,y2))}`);

//     function isValid(x1, y1, x2, y2) {
//         let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//         return Number.isInteger(value);
//     }

//     function checkValidity(validity) {
//         return validity ? 'valid' : 'invalid';
//     }
// }
// solve(3, 0, 0, 4);
// solve(2, 1, 1, 1);

// function aggregateElements(arr) {
//     let result = 0;
//     let concat = '';
//     let inverseArr = [];

//     for (const num of arr) {
//         result += Number(num);
//     }
//     for (const num of arr) {
//         inverseArr.push(num);
//     }

//     for (const num of arr) {
//         concat += num;
//     }

//     inverseArr.reverse();
//     let inversedSum = 0;
//     for (const num of inverseArr) {
//         inversedSum += 1 / num;
//     }
//     console.log(result);
//     console.log(inversedSum);
//     console.log(concat);

// }

// function aggregateElements(array) {
//     let numbersArray = array.map(Number);

//     let sum = numbersArray.reduce((a, b) => a + b);
//     let inverseValuesSum = numbersArray.reduce((a, b) => a + 1 / b, 0);
//     let stringConcat = numbersArray.join('');

//     console.log(sum);
//     console.log(inverseValuesSum);
//     console.log(stringConcat);
// }
// aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);
//--------------------------------------------------

// function squareOfStars(n) {
//     const star = '* ';
//     if (n === null || n === ' ' || n === 0) {
//         for (let i = 0; i < 5; i++) {
//             console.log(`${(star.repeat(5)).trim()}`);
//         }
//     } else {
//         for (let i = 0; i < n; i++) {
//             console.log(`${(star.repeat(n)).trim()}`);
//         }
//     }
// }

// printSquareOfStars(5);
// printSquareOfStars();
// printSquareOfStars(3);
// printSquareOfStars(1);