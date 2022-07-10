function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

    if (num1 == '0' || num2 == '0') {

        console.log(`Cannot divide ${num1} by zero`);
    } else {
        if (operator == '+') {
            result = num1 + num2;
        } else if (operator == '-') {
            result = num1 - num2;
        } else if (operator == '*') {
            result = num1 * num2;
        } else if (operator == '/') {
            result = (num1 / num2).toFixed(2);
        } else if (operator == '%') {
            result = num1 % num2;
        }

        let evenOdd = result % 2;
        let evenOddString = ''
        if (evenOdd == 0) {
            evenOddString = 'even';
        } else {
            evenOddString = 'odd';

        }

        if (operator == '+' || operator == '-' || operator == '*' ) {
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOddString}`);
            
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result}`);

        }
    }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);