function sumTable() {
    const rowsTable = document.querySelectorAll('table tr');
    const sum = 0;

    for (let i = 1; rowsTable.length - 1; i++) {
        const cell = rowsTable[i].lastElementChild;
        sum += Number(cell.textContent);
    }

    document.getElementById('sum').textContent = sum;
}

