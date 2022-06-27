function dayOfWeek (input) {
    let answear;
    switch (input) {
        case 'Monday': answear = 1; break;
        case 'Tuesday': answear = 2; break;
        case 'Wednesday': answear = 3; break;
        case 'Thursday': answear = 4; break;
        case 'Friday': answear = 5; break;
        case 'Saturday': answear = 6; break;
        case 'Sunday': answear = 7; break;
        default: answear = 'error'; break;
    }
    return answear;
    //console.log(answear);
}


dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');