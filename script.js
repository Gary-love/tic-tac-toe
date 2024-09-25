const drops=document.querySelectorAll(".drop")
function gameBoard(){
    const row=3;
    const column=3;
    const board=[];
    for(let i=0;i<row;i++){
        board[i]=[];
        for(let j=0;j<column;j++){
            board[i][j]=0;
        }
    }
    const getBoard = () => board;
    return{getBoard}
}
function createPlayer(name,mark){
    return{name,mark}
}
let player1=createPlayer("Player1","X")
let player2=createPlayer("Player2","O")
function playGame(player1,player2){
    let round=1;
    let game=gameBoard();
    let board=game.getBoard();
    const getRound=()=>round;
    while(round<=9){
        if(round%2===0){
            drops.forEach((drop) => {
                drop.addEventListener("click",e=>{
                    drop.textContent="O";
                })
            });
            console.log("player 2 turn\nchoose the cell you  want")
            let row=prompt("Enter cell number (1-9)")
            let column=prompt("Enter cell number (1-9)")
            while(board[row][column]!==0 || row>3||column>3){
                console.log("Invalid move, try again")
                row=prompt("Enter cell number (1-9)")
                column=prompt("Enter cell number (1-9)")
            }
            board[row][column]="O"
            round++;
        }
        else{
            drops.forEach((drop) => {
                drop.addEventListener("click",e=>{
                    drop.textContent="X";
                })
            });
            console.log("player 1 turn\nchoose the cell you  want")
            let row=prompt("Enter cell number (1-9)")
            let column=prompt("Enter cell number (1-9)")
            while(board[row][column]!==0 || row>3||column>3){
                console.log("Invalid move, try again")
                row=prompt("Enter cell number (1-9)")
                column=prompt("Enter cell number (1-9)")
            }
            board[row][column]="X"
            round++;
        }
        let winner=determineWinner(player1,player2,board)
        if(winner==="No winner"){
          console.log("No winner yet")  
        }
        else{
            console.log(winner)
            round=10;
        }
         console.log(board)
         console.log(round)
         console.log(winner)
    }
}
function determineWinner(player1, player2, board) {
    function checkBoard() {
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== 0) {
                return board[i][0];
            }
            if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== 0) {
                return board[0][i];
            }
        }
    
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== 0) {
            return board[0][0];
        }
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== 0) {
            return board[0][2];
        }
        
        return null; 
    }

    let result = checkBoard();
    if (result === player1.mark) {
        return player1;
    } else if (result === null) {
        return "No winner";
    } else {
        return player2;
    }
}

playGame(player1,player2)
