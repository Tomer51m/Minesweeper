let board = document.querySelector('.board');

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    let tableSize = e.target[1].value
    createBoard(tableSize);
});

document.addEventListener('click', (ev) => {
    if (ev.target.getAttribute('is-bomb')) {
        let boardRow = board.childNodes;
        for (let row = 0; row < boardRow.length; row += 1) {
            for (let col = 0; col < boardRow[row].childNodes.length; col += 1) {
                if (boardRow[row].childNodes[col].getAttribute('is-bomb')) {
                    boardRow[row].childNodes[col].classList.add('bomb')
                }
            }
        }
        alert('game over');
        return;
    }
    if (ev.target.className === 'cell') {
        let boardRow = board.childNodes;
        for (let row = 0; row < boardRow.length; row += 1) {
            for (let col = 0; col < boardRow[row].childNodes.length; col += 1) {
                
            }
        }        
        ev.target.classList.add('reveal')
    }
})
    
function createArray(tableSize) {
    let dataArray = new Array();
    for (let row = 0; row < tableSize; row += 1) {
        dataArray.push([]);
        for (let col = 0; col < tableSize; col += 1) {
            let random = Math.floor(Math.random() * 5)
            if(random > 0) {
                dataArray[row].push(false);
            } else {
                dataArray[row].push(true);
            }
        }
    }
    return dataArray
}

function createBoard(tableSize) {
    board.innerHTML = '';
    //genrate board in DOM according to create array
    let dataArray = createArray(tableSize);
    
    //create cells with data array properties
    let table = document.createDocumentFragment()
    for (let row = 0; row < dataArray.length; row += 1) {
        let tableRow = document.createElement('div');
        tableRow.setAttribute('class', 'table-row');
        
        for (let col = 0; col < dataArray[row].length; col += 1) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            if (dataArray[row][col] === true) {
                cell.setAttribute('is-bomb', 'true');
                // cell.style.backgroundColor = 'red';
            }
            tableRow.append(cell)
        }
        table.append(tableRow)
        board.append(tableRow);
    }
}




