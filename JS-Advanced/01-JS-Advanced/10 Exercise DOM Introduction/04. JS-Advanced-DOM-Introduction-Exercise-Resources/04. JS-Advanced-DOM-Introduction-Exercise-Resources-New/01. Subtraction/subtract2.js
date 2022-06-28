function subtract() {
    const result = document.getElementById('result');
    const number1 = Number(document.getElementById('firstNumber').value);
    const number2 = Number(document.getElementById('secondNumber').value);

    const sum = number1 - number2;

    result.innerHTML = sum.toString();

}