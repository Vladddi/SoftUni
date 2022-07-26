function contextPrinter(a, b) {
    console.log(this, a, b);
}

function myFunc() {

}

const myObj = {
    name: 'Peter',
};

const otherObj = {
    width: 5,
    height: 3
}

contextPrinter(11, 6);
contextPrinter.call(myObj, 11, 6);
contextPrinter.apply(otherObj, [11, 6]);

// const extractedFunc = myObj.contextPrinter;
// extractedFunc();

// myObj.contextPrinter();

// document.querySelector('button').addEventListener('click', contextPrinter);