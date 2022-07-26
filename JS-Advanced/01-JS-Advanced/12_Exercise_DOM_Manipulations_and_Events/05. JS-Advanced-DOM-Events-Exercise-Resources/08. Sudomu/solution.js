function solve() {

    //1. Select elements - table, the 2 buttons
    let buttons = document.querySelectorAll('#exercise tfoot button');
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];

    //-- add Quick event listener
    checkBtn.addEventListener('click', checkBoard);
    clearBtn.addEventListener('click', clear);


    function checkBoard() {
        //2. Transform the table rows into a in memory nested array (matrix)
        let board = Array
            .from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input'))
                .map(x => Number(x.value)));

        //3. Check if Sudomu board is valid
        let isValid = isvalidSudoku(board);
        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');

        //4. QuickCheckBtn - Color table border, add text into check paragraph and color paragraph text
        table.style.border = isValid ? '2px solid green' : '2px solid red';
        checkParagraph.textContent = isValid ?
            'You solve it! Congratulations!' :
            'NOP! You are not done yet...';
        checkParagraph.style.color = isValid ? 'green' : 'red';

    }

    function isvalidSudoku(board) {
        // traverse matrix
        for (let row = 0; row < board.length; row++) {
            let rowObj = createCheckObj(board);
            let colObj = createCheckObj(board);
            for (let col = 0; col < board[row].length; col++) {
                // check row cell value
                let curRowCell = board[row][col];
                // check col cell value
                let curColCell = board[col][row];

                rowObj[curRowCell]++;
                colObj[curColCell]++;
            }


            // -- check thet every row has only numbers 1-3 and one number of each
            // -- check thet every col has only numbers 1-3 and one number of each
            let rowValues = Object.values(rowObj);
            let colValues = Object.values(colObj);
            if (rowValues.length > board.length || rowValues.some(x => x !== 1) ||
                colValues.length > board.length || colValues.some(x => x !== 1)) {
                return false;
            }
        }
        return true;
    }

    function createCheckObj(board) {
        let obj = {};
        for (let index = 0; index < board.length; index++) {
            obj[index + 1] = 0;
        }
        return obj;
    }

    //5. ClearBtn - Clear table border, paragraph text and paragraph color
    function clear() {
        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');
        let board = Array
            .from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input')));

        checkParagraph.textContent = '';
        table.style.border = '';
        board.forEach(el => el.value = '');
    }
}