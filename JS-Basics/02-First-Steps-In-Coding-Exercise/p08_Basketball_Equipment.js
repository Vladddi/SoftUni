function basketballEquipment(input) {
    let fee = Number(input[0]);
    let sneakers = fee - (fee * 0.4);
    let ecip = sneakers - (sneakers * 0.2);
    let ball = ecip / 4;
    let equipment = ball / 5;

    let totalPrice = fee + sneakers + ecip + ball + equipment;

    console.log(totalPrice);
}

basketballEquipment(["365 "]);
basketballEquipment(["550 "]);