// function evenPositionElement(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         result += Number(arr[i]) + ' ';
//     }
//     console.log(result);

// }

// evenPositionElement(['20', '30', '40', '50', '60']);
// evenPositionElement(['5', '10']);

//------------------------------------------------------------------

// function lastKNumbersSequence(n, k) {
//     let result = [1];
//     for (let i = 1; i < n; i++) {
//         let startIndex = Math.max(0, i - k);
//         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
//         result.push(currentElement);
//     }
//     return result;
// }

// console.log(lastKNumbersSequence(6, 3));
// console.log(lastKNumbersSequence(8, 2));

//------------------------------------------------------------------
// function firstLast(strings) {
//     const first = Number([...strings].shift());
//     const last = Number([...strings].pop());

//     return first + last;

// }

// console.log(firstLast(['20', '30', '40']));
// console.log(firstLast(['5', '10']));


//------------------------------------------------------------------

// function smallestTwoNumbers(arr) {
//     arr.sort((a, b) => a - b);
//     console.log(arr[0], arr[1]);
// }
// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
// smallestTwoNumbers([3, 0, 10,1 , 13, 4, 7, 3]);
//------------------------------------------------------------------

// function positiveNegative(arr) {
//     let orderedArr = [];
//     for (const num of arr) {
//         if (num < 0) {
//             orderedArr.unshift(num);
//         } else {
//             orderedArr.push(num);
//         }
//     }
//     console.log(orderedArr.join('\n'));
// }
// positiveNegative([7, -2, 8, 9]);
// positiveNegative([3, -2, 0, -1]);

// function biggerHalf(arr) {
//     arr.sort((a, b) => a - b);
//     let biggerHalf = [];
//     for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
//         biggerHalf.push(arr[i]);
//     }
//     return biggerHalf;
// }
// biggerHalf([4, 7, 2, 5]);
// biggerHalf([3, 19, 14, 7, 2, 19, 6]);

//----------------------------------------------------
// function printStars(n) {
//     let num = Number(n);
//     let area = [num][num];

//     console.log(num);
//     for (let row = 0; row < num; row++) {

//     }


// }
// printStars(3);
// printStars(5);

//---------------------------------------------
// function solve(matrix) {
//     const last = matrix.length - 1;
//     let sum1 = 0;
//     let sum2 = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         sum1 += matrix[i][i];
//         sum2 += matrix[i][last - i];
//     }

//     console.log(`${sum1} ${sum2}`);
// }

// solve([
//     [20, 40],
//     [10, 60]
// ]);

// function printArrayWithDelimiter(arr, delimiter) {

//     console.log(arr.join(delimiter));

// }
// printArrayWithDelimiter(['One',
//         'Two',
//         'Three',
//         'Four',
//         'Five'
//     ],
//     '-'
// );

// function printNthElementArray(array, stepNumber) {
//     let result = []
//     for (let i = 0; i < array.length; i += stepNumber) {
//         result.push(array[i]);
//     }
//     return result;
// }
// console.log(printNthElementArray(['5',
//         '20',
//         '31',
//         '4',
//         '20'
//     ],
//     2
// ));

// function addAndRemove(arr) {
//     let number = 1;
//     let result = [];


//     arr.forEach((el) => {
//         if (el == 'add') {
//             result.push(number);
//         } else {
//             result.pop();
//         }
//         number++;
//     });

//     if (result.length == 0) {
//         console.log('Empty');
//     } else {
//         console.log(result.join('\n'));
//     }

// }
// addAndRemove(['add',
//         'add',
//         'add',
//         'add'
//     ]

// );

// addAndRemove(['add',
//     'add',
//     'remove',
//     'add',
//     'add'
// ]);

//--------------------------------------------------------

// function rotateArray(arr, rotation) {
//     for (let i = 0; i < rotation; i++) {
//         arr.unshift(arr.pop());
//     }

//     console.log(arr.join(' '));
// }
// rotateArray(['1',
//         '2',
//         '3',
//         '4'
//     ],
//     2
// );
// rotateArray(['Banana', 
// 'Orange', 
// 'Coconut', 
// 'Apple'], 
// 15
// );
//-------------------------------------------------------

// function extractIncSubFromArray(array) {
//     const result = [];
//     let biggest = Number.MIN_SAFE_INTEGER;

//     array.forEach((el) => {
//         if (el >= biggest) {
//             result.push(el);
//             biggest = el;
//         }
//     })

//     return result;
//     // const result = array.filter((el) => {
//     //     if (el > biggest) {
//     //         biggest = el;
//     //         return true;
//     //     }
//     //     return false;
//     // })
//     // console.log(result.join('\n'));
// }
// console.log(extractIncSubFromArray([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24
// ]));
//-------------------------------------------------------

// function listOfNames(arr) {
//     const result = arr.sort((a,b) => a.localeCompare(b));
//     let number = 1;
//     arr.forEach(element => {
//         console.log(`${number}.${element}`);
//         number++;
//     });
// }
// //    arr=> arr.sort((a,b) => a.localeCompare(b)).forEach((v,i) => console.log(`${i + 1}.${arr[i]}`))
// listOfNames(["John", "Bob", "Christina", "Ema"]);

//-------------------------------------------------------

// function sortingNumbers(numbersArray) {
//     arr = numbersArray.sort((a, b) => a - b);

//     const result = [];
//     const count = Math.floor(arr.length / 2);
//     //     for (let i = 0; i < count; i++) {
//     //         result.push(arr[i]);
//     //         result.push(arr[arr.length - 1 - i]);
//     //     }
//     //   return result;

//     while (arr.length != 0) {
//         result.push(arr.shift(), arr.pop());
//     }
//     return result;

// }
// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

//-------------------------------------------------------

// function sortArrayTwoCriteria(arr) {
//     const result = arr.sort((a, b) => {
//         if (a.length > b.length) {
//             return 1;
//         } else if (a.length == b.length) {
//             return a.localeCompare(b);
//         } else {
//             return -1;
//         }
//     })
//     console.log(result.join('\n'));
// }

// sortArrayTwoCriteria(['alpha',
//     'beta',
//     'gamma'
// ]);
// sortArrayTwoCriteria(['Isacc',
//         'Theodor',
//         'Jack',
//         'Harrison',
//         'George'
//     ]

// );
//-------------------------------------------------------

// function ticTAcToe(arr) {

//     function hasWin(field, coordinates) {
//         const [x, y] = coordinates;
//         if (field[0][y] == field[1][y] == field[2][y]) {
//             return true;
//         } else if (field[x][0] == field[x][1] == field[x][2]) {
//             return true;
//         } else if () {

//         } else {
//             return false;
//         }
//     }

//     function printResult(field) {
//         field.forEach((el) => {
//             console.log(el.join('\t'));
//         })
//     }

//     let gameWon = false;
//     const playField = [
//         [false, false, false],
//         [false, false, false],
//         [false, false, false]
//     ];

//     const currentPlayerSign = 'X';

//     for (let i = 0; i < arr.length; i++) {
//         const [x, y] = arr[i].split(' ');
//         if (playField[x][y]) {
//             console.log("This place is already taken. Please choose another!");
//         } else {
//             playField[x][y] = currentPlayerSign;
//         }

//         if (hasWin(playField, [x][y])) {
//             gameWon = true;
//             console.log(`Player ${currentPlayerSign} wins!`);
//             printResult(playField);
//             break;
//         }
//         currentPlayerSign = currentPlayerSign == "X" ? "O" : "X";
//         //
//         //"Player {x} wins!"
//     }
//     if (!gameWon) {
//         console.log("The game ended! Nobody wins :(");
//         printResult(playField);
//     }
// }
// ticTAcToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"
// ]);
//-------------------------------------------------------

function magicMatrices(input) {
    let arr = [];

    for (let i in input) {
        const rowSum = input[i].reduce((a, b) => a + b, 0);
        const colSum = input.reduce((acc, cur) => {
            acc += cur[i];
            return acc
        }, 0);

        if (rowSum !== colSum || (arr.length > 0 && (rowSum !== arr[0] || colSum !== arr[1]))) {
            return false;
        } else if (i === '0') {
            arr.push(rowSum, colSum);
        }
    }
    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));