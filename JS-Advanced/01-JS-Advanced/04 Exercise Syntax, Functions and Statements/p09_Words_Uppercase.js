function wordsUppercase(string) {

    let result = string.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');

//output(HI, HOW, ARE, YOU)
