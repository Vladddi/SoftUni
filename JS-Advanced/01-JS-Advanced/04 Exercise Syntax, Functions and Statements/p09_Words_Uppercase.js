function solve(string) {
    
    let message = string.split(/\W+/);
    const upperCase = message.map(words => words.toUpperCase());
    
    
}

solve('Hi, how are you?');
solve('hello');

//output(HI, HOW, ARE, YOU)