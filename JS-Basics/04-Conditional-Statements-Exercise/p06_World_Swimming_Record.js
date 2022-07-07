function worldSwimmingRecord(input) {
    //----input------
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    //---TODO---
    let resultIvanInSeconds = 0;

    let lag = Math.floor(distanceInMeters / 15);
    let lagInSeconds = lag * 12.5;


    resultIvanInSeconds = (distanceInMeters * secondsPerMeter) + lagInSeconds;
    //-----Output------------
    let leftTime = 0;
    if (resultIvanInSeconds < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(resultIvanInSeconds).toFixed(2)} seconds.`);
    } else {
        leftTime = (resultIvanInSeconds - recordInSeconds).toFixed(2);
        console.log(`No, he failed! He was ${leftTime} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);