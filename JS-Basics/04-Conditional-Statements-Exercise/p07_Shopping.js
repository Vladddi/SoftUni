function shopping(input) {
    //-----input----------
    let buget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);

    //----TODO-----------
    let videoCardsPrice = videoCards * 250;
    let pocessorsPrice = processors * (videoCardsPrice * 0.35);
    let ramMemoryPrice = ramMemory * (videoCardsPrice * 0.1);

    let allExpenses = videoCardsPrice + pocessorsPrice + ramMemoryPrice;

    if (videoCards > processors) {
        allExpenses -= allExpenses * 0.15;
    }

    //---Output--------------
    let result;

    if (buget >= allExpenses) {
        result = (buget - allExpenses).toFixed(2);
        console.log(`You have ${result} leva left!`)
    } else {
        result = (allExpenses - buget).toFixed(2);
        console.log(`Not enough money! You need ${result} leva more!`)
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45","3","1","1"]);