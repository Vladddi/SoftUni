function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let hourInSecond = hour * 60 * 60;
    let minutesInSecond = minutes * 60;
    let newTimeInSeconds = hourInSecond + minutesInSecond + (15 * 60);

    //---------------------------------------------------------------
    let currentMinute = newTimeInSeconds / 60;
    let currentHour = Math.floor((newTimeInSeconds / 60) / 60);

    if (currentMinute > 59) {
        currentMinute %= 60;
    }

    if (currentHour > 23) {
        currentHour -= 24;
    }

    if (currentMinute < 10) {
        console.log(`${currentHour}:0${currentMinute}`);
    } else {
        console.log(`${currentHour}:${currentMinute}`);
    }
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);