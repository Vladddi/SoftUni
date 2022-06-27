function sumTable() {
    // select first table
    const rows = document.querySelectorAll('table tr');
    let totalSum = 0;
    // const sum1 = document.getElementById('100count');
    // const count100 = sum1.value;
    // console.log(count100);


    // select only rows, containing values
    // repeat for every row
    // - find last cell 
    // - add cell value to sum 
    
    for (let i = 1; i < rows.length - 1; i++) {
        const cell = rows[i].children(row[i].children.length - 2);
        const sum1 = rows[i].children(row[i].children.length - 1);
        console.log(sum1);
        //    const count = Number(cell.firstElementChild);
        //  const number = cell.lastElementChild;
        //  totalSum += Number(count.value);
    }

    // select element with id "sum" and set its value

    //document.getElementById('sum').textContent = sum;
    // document.getElementById('sum').children.value[0] = totalSum;
}