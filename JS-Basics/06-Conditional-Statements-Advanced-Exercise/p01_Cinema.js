function cinema(input) {
    let type = input[0];
    let rol = Number(input[1]);
    let col = Number(input[2]);

    let ticketPrice = 0;

    switch (type) {
        case 'Premiere':
            ticketPrice = 12.00;
            break;
        case 'Normal':
            ticketPrice = 7.50;
            break;
        case 'Discount':
            ticketPrice = 5.00;
            break;
    }
    let area = rol * col;
    let result = area * ticketPrice;

    console.log(`${result.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);