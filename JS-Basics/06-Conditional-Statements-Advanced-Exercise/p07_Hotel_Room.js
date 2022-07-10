function hotelRoom(input) {
    let mes = input[0];
    let days = Number(input[1]);
    let apartmentPrice = 0;
    let studioPrice = 0;

    if (mes == 'May' || mes == 'October') {
        studioPrice = 50;
        apartmentPrice = 65;
        if (days > 14) {
            studioPrice -= studioPrice * 0.30;
        } else if (days > 7) {
            studioPrice -= studioPrice * 0.05;
        }
    } else if (mes == 'June' || mes == 'September') {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (days > 14) {
            studioPrice -= studioPrice * 0.20;
        }
    } else if (mes == 'July' || mes == 'August') {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (days > 14) {
        apartmentPrice -= apartmentPrice * 0.10;
    }

    let totalPriceStudio = (studioPrice * days).toFixed(2);
    let totalPriceApartment = (apartmentPrice * days).toFixed(2);

    console.log(`Apartment: ${totalPriceApartment} lv.`);
    console.log(`Studio: ${totalPriceStudio} lv.`);

}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);