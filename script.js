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
    while(round<=9){
        if(round%2===0){
            console.log("player 2 turn\nchoose the cell you  want")
            let row=prompt("Enter cell number (1-9)")
            let column=prompt("Enter cell number (1-9)")
            board[row][column]="O"
            round++;
        }
        else{
            console.log("player 1 turn\nchoose the cell you  want")
            let row=prompt("Enter cell number (1-9)")
            let column=prompt("Enter cell number (1-9)")
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
playGame(player1,player2)
