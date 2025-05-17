const input = document.querySelectorAll(".input");
let playerTurn = true;
const xSymbol = "X";
const oSymbol = "O";
let xList = [];
let oList = [];
let xScore = 0;
let oScore = 0;
let pauseGame = false;


function winChecker(inputList){
    let sum = 0;
    inputList.forEach(element => {
        sum += parseInt(element.getAttribute("id"));
    });
    if(sum === 15){
        return true;
    }
    return false;
}

function setWinningColor(inputList){
    inputList.forEach(element => {
        element.setAttribute("style", "background-color: lightgreen");
    });
}

function updateXScore(){
    const xScoreElement = document.querySelector(".player-x-score");
    xScoreElement.textContent = ++xScore;
}

function updateOScore(){
    const oScoreElement = document.querySelector(".player-o-score");
    oScoreElement.textContent = ++oScore;
}

function resetGame(){
    input.forEach(element => {
        element.removeAttribute("style");
        element.textContent = "";
    });
    xList = [];
    oList = [];
    pauseGame = false;
    playerTurn = true;
}

function restartGame(){
    resetGame();
    xScore = -1;
    oScore = -1;
    updateXScore();
    updateOScore();
}

function gameLogic(cell){
    if(!cell.textContent && playerTurn && !pauseGame){
        cell.textContent = xSymbol;
        playerTurn = false;
        xList.push(cell);
        if(xList.length === 3){
            if(winChecker(xList)){
                setWinningColor(xList);
                updateXScore();
                pauseGame = true;
            }else{
                xList.shift().textContent = "";
            }
        }
    }
    if(!cell.textContent && !playerTurn && !pauseGame){
        cell.textContent = oSymbol;
        playerTurn = true;
        oList.push(cell);
        if(oList.length === 3){
            if(winChecker(oList)){
                setWinningColor(oList);
                updateOScore();
                pauseGame = true;
            }else{
                oList.shift().textContent = "";
            }
        }
    }
}

function startGame(){
    for(const cell of input){
        cell.addEventListener("click", ()=>{
            gameLogic(cell);
        });
    }
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", ()=>{
    resetGame();
});

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", ()=>{
    restartGame();
});

startGame();