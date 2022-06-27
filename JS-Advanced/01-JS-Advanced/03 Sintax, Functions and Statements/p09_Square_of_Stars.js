function rectangle(input) {
    let typeInput = typeof (input);

    if (typeInput === 'number') {
        for (let i = 0; i <= input; i++) {
            console.log('* ');
        }
        // if (input == '') {
        //     for(let i = 0; i <= 5; i++) {
        //         for(let j = 0; j <= 5; i++) {
        //             console.log('* ');
        //         }
        //     }
        // }
    }


}
rectangle('2');