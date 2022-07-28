///////////////////////////////
// First-Class Function - има всички възможности които имат променливите
// - може да се асайнва към променлива
// - може да се подава като аргумент на друга функция
// - може да се връща като резултат от изпълнението на друга функция 

// всичко, което може да се прави с променлива, може да се прави и с функцията

/////////////////////////////////
//Higher-Order Function - приема функция като аргумент или връща функция като резулат
//const sayHello = function () {
    //   return function () {
    //     console.log("Hello!");
    //     }
    //   }
/**
 * const myFunc = sayHello();
        myFunc(); // Hello!
 */


//Predicat - функция, която приема някакви аргументи и връща true или false
/**
 * let found = array1.find(isFound); //predicate
 function isFound(element) {
    return element > 10; //True or false
}

console.log(found); // 12

 */


//Pure Function - не променя стейта на приложението
// пример: ако имаме някакви входни данни, те не се изменят на изхода
// function sum(a, b) {
//     return a + b;
// }

//пример
/**
 * // impure function:
let number = 1;
const increment = () => number += 1;
increment(); // 2

// pure function:
const increment = n => n + 1;
increment(1); // 2
 */


///////////////////////////////////
//Imunization - ако има някаква функция, 
//която извършва прекалено много операции и струва прекалено много ресурс. 
//В същото време се очаква да се вика много на брой пъти, 
// след като функцията е пресметнала някакъв резултат, прави кеширане.
// function doSomething(a, b, c,) {
//     //million operation
// }

