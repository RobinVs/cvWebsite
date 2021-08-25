// SUDOKU Game
// create sudokuSolver

const b = null;
let db1 = [
    [z],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
];
var z = shift(db1);
function shift(db1) {
    while (db1[0].length<9){
        var integ = Math.floor(Math.random()*9);
        if (db1[0].indexOf(integ)===-1 & integ>0) {
            db1[0].splice(Math.floor(Math.random()*9),0,integ);
        };
    };
    return db1;
};
function solve(board) {
    if(solved(board)){
        return board;
    } else {
        const possibilities = nextBoards(board);
        const validBoards = keepOnlyValid(possibilities);
        return searchForSolutions(validBoards)
    }
}

function searchForSolutions(boards) {
    if(boards.length <1){
        return false
    } else {
        var first = boards.shift();
        const tryPath = solve(first);
        if(tryPath != false) {
            return tryPath;
        } else {
            return searchForSolutions(boards);
        }
    }
}

function solved(board) {
    for (var i=0; i<9; i++){
        for (var j=0; j<9; j++){
            if (board[i][j] == null){
                return false;
            }
        }
    }
    return true;
}

function nextBoards(board) {
    var res = [];
    const firstEmpty = findEmptySqare(board)
    if(firstEmpty != undefined) {
        const y = firstEmpty[0];
        const x = firstEmpty[1];
        for (var i=1; i<=9; i++) {
            var newBoard = [...board]
            var row = [...newBoard[y]];
            row[x] = i;
            newBoard[y]  = row;
            res.push (newBoard);
        }
    }
    return res;
}

function findEmptySqare(board) {
    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            if(board[i][j]==null) {
                return [i, j];
            }
        }
    }
}

function keepOnlyValid(boards) {
    return boards.filter(b=>validBoard(b))
}

function validBoard(board) {
    return rowGood(board) && columnGood(board) && boxesGood(board);
}

function rowGood(board) {
    for (var i=0; i<9; i++) {
        var cur = [];
        for (var j=0; j<9; j++){
            if (cur.includes(board[i][j])) {
                return false;
            } else if (board[i][j]!= null) {
                cur.push (board[i][j])
            }
        }
    }
    return true;
}

function columnGood(board) {
    for (var i=0; i<9; i++) {
        var cur = [];
        for (var j=0; j<9; j++){
            if (cur.includes(board[j][i])) {
                return false;
            } else if (board[j][i]!= null) {
                cur.push (board[j][i])
            }
        }
    }
    return true;
}

function boxesGood(board) {
    const boxCoordinates = [
        [0,0],[0,1],[0,2],
        [1,0],[1,1],[1,2],
        [2,0],[2,1],[2,2]
    ];
    for (var y=0; y<9; y+=3){
        for (var x=0; x<9; x+=3){
            var cur = [];
            for (var i=0; i<9; i++){
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] +=y;
                coordinates[1] +=x;
                if (cur.includes(board[coordinates[0]][coordinates[1]])){
                    return false;
                } else if (board[coordinates[0]][coordinates[1]] != null) {
                    cur.push(board[coordinates[0]][coordinates[1]]);
                }
            }
        }
    }
    return true;
}
// create array
const sudokuArr = solve(db1);
let sudokuArrUnsolved = [...sudokuArr];
let ar = [];
var i = 0; 
// add random numbers in array
while (ar.length <30){
    var num = ''+Math.floor(Math.random()*81)+'';
    if (num == '0') {
        num = '00'
    } else if (num < 10 && num >0 ) {
        num = '0' + num;
    };
    var exist = false;
    splitNum = num.split('');
    if (sudokuArrUnsolved[splitNum[0]][splitNum[1]]!==0){
        ar.push([
        num,sudokuArrUnsolved[splitNum[0]][splitNum[1]]
        ]);
        sudokuArrUnsolved[splitNum[0]][splitNum[1]] = 0;
    };
    i++;
}
// create layout and add array
const sudokuDiv = document.getElementById('sudoku');
for(let i=0; i<9; i++){
    for (let j=0; j<9; j++){
        if (sudokuArrUnsolved[i][j] == 0) {
            sudokuDiv.innerHTML += '<input class="sudokuFrame" id="id'+i+j+'" onchange="sudokuChange('+i+j+',ar)" type="number " value=""></input>';
        } else {
            sudokuDiv.innerHTML += '<input class="sudokuFrame" id="id'+i+j+'" onchange="sudokuChange('+i+j+',ar)" type="number " value="'+sudokuArrUnsolved[i][j]+'"></input>';
        };
    };
};
function completed() {
    var items = document.querySelectorAll('.sudokuFrame');
    var res = true;
    items.forEach(item => {
        if (item.value==""){
            res = false;
            }
        })
        return res;
    }; 
    // check if input == valid || completed
function sudokuChange(id, arr){
    if (id <10){
        id = '0'+id;
    }
    var inputSudoku = document.getElementById('id'+id);
    var score = parseInt(document.getElementById('points').innerHTML,10);
    var splitId = ''+id+''.split('');
    var allert = false;
    for (let i=0; i<arr.length; i++){
        if (arr[i][0]==id) {
            if (inputSudoku.value == arr[i][1]){
                inputSudoku.style.color = 'green';
                inputSudoku.style.fontWeight = 'bold';
                document.getElementById('points').innerHTML = score += 5;
                allert = completed();
            }
            else {
                inputSudoku.style.color = 'red';
                inputSudoku.style.fontWeight = 'bold';
                document.getElementById('points').innerHTML = score -= 1;
                allert= false;
            }
        }
    }     
        if (allert !== false) {
            var divEndScore = document.getElementById('endScore');
            var buttonEndScore = document.getElementById('Completed');
            divEndScore.style.display = 'flex';
            buttonEndScore.innerHTML = score;
            for (let i = 0; i<25; i++) {
            setTimeout(function (){
                const firework = new Firework();
                fireworks.push(firework);
            },i*400)
            }
    }console.log(score);
        
}
    // start fireworks annimation if visitor has no time to solve sudoku
function noTime() {
    var divEndScore = document.getElementById('endScore');
    var buttonEndScore = document.getElementById('Completed');
    divEndScore.style.display = 'flex';
    buttonEndScore.innerHTML = 0;
    for (let i = 0; i<40; i++) {
    setTimeout(function (){
        const firework = new Firework();
        fireworks.push(firework);
    },i*400)
    }
}