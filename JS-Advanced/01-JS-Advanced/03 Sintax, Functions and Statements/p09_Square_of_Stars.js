function rectangle(input) {
    let typeInput = typeof (input);

    if (typeInput === 'number') {
        for (let i = 0; i < input; i++) {
            let row = '';
            for (let j = 0; j < input; j++) {
                row += '* ';
            }
            console.log(row);
        }
    } else {
        for (let i = 0; i < 5; i++) {
            let row = '';
            for (let j = 0; j < 5; j++) {
                row += '* ';
            }
            console.log(row);
        }
    }
}

 rectangle('5');
 rectangle(1);
 rectangle(2);
 rectangle(5);
 rectangle(7);
