function solve() {
    //създаваме обект с броя аргументи от всеки тип
    const argTypes = [];
    const index = {};

    // обхождаме аргументите
    for (let arg of arguments) {
        // отпечатваме типа и стойността на всеки аргумент
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        //броим типа на аргумента
        let argIndex = index[type];
        if (argTypes === undefined) {
            argIndex = argTypes.lenght;
            argTypes.push({
                type,
                count: 0
            });
            index[type] = argIndex;
        }
        argTypes[argIndex]++;
    }

    //печатаме броя
    argTypes.sort((a, b) => b.count - a.count).forEach(e => console.log(`${e.type} = ${e.count}`));

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