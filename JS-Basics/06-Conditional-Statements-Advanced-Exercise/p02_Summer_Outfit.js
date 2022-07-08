function summerOutfit(input) {
    let degree = Number(input[0]);
    let dailyTime = input[1];

    let outfit;
    let shoes;

    if (10 <= degree && degree <= 18) {
        switch (dailyTime) {
            case 'Morning':
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
                break;
            case 'Afternoon':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    } else if (18 < degree && degree <= 24) {
        switch (dailyTime) {
            case 'Morning':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'Afternoon':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    } else if (degree >= 25) {
        switch (dailyTime) {
            case 'Morning':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'Afternoon':
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    }

    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)


}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);