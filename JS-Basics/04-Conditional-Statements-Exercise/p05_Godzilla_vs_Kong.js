function godzillaVsKong(input) {
    let buget = Number(input[0]);
    let countArtists = Number(input[1]);
    let pricePerSuit = Number(input[2]);

    let decorPrice = buget * 0.1;

    if (countArtists > 150) {
        pricePerSuit -= pricePerSuit * 0.1;
    }

    let expenses = (pricePerSuit * countArtists) + decorPrice;

    if (expenses > buget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(expenses - buget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(buget - expenses).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);