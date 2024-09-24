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
function determineWinner(player1,player2,board){
        let result;
        for(let i=0;i<3;i++){
            for(let j=0;j<1;j++){
                if(board[i][j]===board[i][j+1] && board[i][j]===board[i][j+2] && board[i][j]!==0){
                    result=board[i][j]
                }
                if(board[j][i]===board[j+1][i] && board[j][i]===board[j+2][i] && board[j][i]!==0){
                    result= board[j][i]
                }
                if(i===j && board[i][j]===board[i+1][j+1] && board[i][j]===board[i+2][j+2] && board[i][i]!==0 ){
                    result= board[i][j]
                }
                if(board[0][2]===board[1][1] && board[0][2]===board[2][0] && board[0][2]!==0 ){
                    result= board[0][2]
                }
                else{
                    result= null;
                }
            }
        }
    if(result===player1.mark){
        return player1;
    }
    else if(result===null){
        return "No winner"
    }
    else{
        return player2;
    }
}
playGame(player1,player2)
