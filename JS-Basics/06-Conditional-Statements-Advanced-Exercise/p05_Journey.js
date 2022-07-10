function journey(input) {
    let buget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let kindVacation = '';

    switch (season) {
        case 'summer':
            if (buget <= 100) {
                destination = 'Bulgaria';
                kindVacation = 'Camp';
                buget *= 0.3;

            } else if (buget <= 1000) {
                destination = 'Balkans';
                kindVacation = 'Camp';
                buget *= 0.4;
            } else if (buget > 1000) {
                destination = 'Europe';
                kindVacation = 'Hotel';
                buget *= 0.9;
            }
            break;
        case 'winter':
            kindVacation = 'Hotel';
            if (buget <= 100) {
                destination = 'Bulgaria';
                buget *= 0.7;
            } else if (buget <= 1000) {
                destination = 'Balkans';
                buget *= 0.8;
            } else if (buget > 1000) {
                destination = 'Europe';
                buget *= 0.9;
            }
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${kindVacation} - ${(buget).toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);