function extractNumbers(intNum) {
    const strNum = intNum.toString();
    let result = parseInt(strNum[0]);
    let isSame = true;

    for (let i = 1; i < strNum.length; i++) {
        result += parseInt(strNum[i]);

        if (strNum[i] != strNum[i-1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(result);
}
extractNumbers(2222222);
extractNumbers(1234);


// let arr = [1, 2, 3];
// let a = arr[1]; // a == 2;

// let str = "test string";
// console.log(str.charAt[1]);