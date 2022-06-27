function evenPosition(strings) {
    // let result = '';

    // for (let i = 0; i < strings.length; i++) {
    //     if (i % 2 == 0) {
    //         result += strings[i];
    //         result += ' ';
    //     }
    // }

    let result = [];

    for (let i = 0; i < strings.length; i+=2) {
        result[result.length] = strings[i];
    }

    console.log(result.join(' '));

    //console.log(result);
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);