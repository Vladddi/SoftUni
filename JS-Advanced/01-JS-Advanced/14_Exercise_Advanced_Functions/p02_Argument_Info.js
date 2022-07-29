function solve() {
    //създаваме обект с броя аргументи от всеки тип
    const argTypes = {};

    // обхождаме аргументите
    for (let arg of arguments) {
        // отпечатваме типа и стойността на всеки аргумент
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        //броим типа на аргумента
        if (argTypes[type] === undefined) {
            argTypes[type] = 0;
        }
        argTypes[type]++;
    }

    //печатаме броя
    Object.entries(argTypes).sort((a, b) => b[1] - a[1]).forEach(e => console.log(`${e[0]} = ${e[1]}`));

}

const obj = {
    string: 1,
    number: 2,
    function: 1
}

solve('cat', 42, function () {
    console.log('Hello world!');
});
solve({
    name: 'bob'
}, 3.333, 9.999);