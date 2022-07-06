function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;

    let volumeInLiters = volume * 0.001;

    let busySpace = percent / 100;
    let neededLitersWater = volumeInLiters * (1 - busySpace);
    console.log(neededLitersWater);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);