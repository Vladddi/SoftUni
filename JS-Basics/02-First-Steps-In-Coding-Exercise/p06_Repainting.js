function repainting(input) {

    let nylonSQM = Number(input[0]);
    let priceNylon = (nylonSQM + 2) * 1.50;
    

    let paintLiter = Number(input[1]);
    let pricePaint = (paintLiter + (paintLiter * 0.1)) * 14.50;
    
    
    let paintThinner = Number(input[2]);
    let pricePaintThinner = paintThinner * 5;
    
    let hoursWorkers = Number(input[3]);

    let bags = 0.40;

    let materialsMoney = priceNylon + pricePaint + pricePaintThinner + bags;

    let moneyWorkersHour = materialsMoney * 0.3;

    let allWorkersMoney = moneyWorkersHour * hoursWorkers;

    let totalMoney = allWorkersMoney + materialsMoney;


    console.log(totalMoney);
}

repainting(["10 ","11 ","4 ","8 "]); //727.09
repainting(["5 ","10 ","10 ","1 "]); //286.52