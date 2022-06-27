function sumTable() {
    //select first table
    const rows = document.querySelectorAll('table tr');
    let sum = 0;
    //select only rows, containing values
    //repeat for every row
    //- find last cell
    //- add cell value to sum
    for (let i = 1; i < rows.length - 1; i++) {
        const cell = rows[i].children(rows[i].children.length - 2);
        const input = cell.firstElementChild;
        sum += Number(input.value);

    }
    console.log(sum);
    //select element with id "sum" and set its value
    document.getElementById('sum').children[0].value = sum;
}