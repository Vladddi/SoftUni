function vacationBooksList(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let requiredDays = Number(input[2]);

    let requiredReadingTime = pagesCount / pagesPerHour;
    let requiredHoursPerDay = requiredReadingTime / requiredDays;

    console.log(requiredHoursPerDay);
}

vacationBooksList(["212 ", "20 ", "2 "]);
vacationBooksList(["432 ","15 ","4 "]);