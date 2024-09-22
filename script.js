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
