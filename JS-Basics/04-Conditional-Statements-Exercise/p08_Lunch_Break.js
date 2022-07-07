function lunchBreak(input) {
    let nameSerial = input[0];
    let lenghtEpizod = Number(input[1]);
    let lenghtBreak = Number(input[2]);

    let lunchTime = lenghtBreak / 8;
    let breakTime = lenghtBreak / 4;

    let freeTime = lenghtBreak - (lunchTime + breakTime);

    if (freeTime >= lenghtEpizod) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(freeTime - lenghtEpizod)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(lenghtEpizod - freeTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);