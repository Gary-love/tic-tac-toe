const drops=document.querySelectorAll(".drop")
const currentRound=document.querySelector(".round")
const player=document.querySelector(".player")
const mark=document.querySelector(".mark")
const result=document.querySelector(".winner")
const reset=document.querySelector(".reset")
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
    games()
    function games(){
        drops.forEach((drop) => {
            drop.addEventListener("click",e=>{
                if(round<=9){
                    if(round%2===0){
                        player.textContent="Player 1's turn"
                        drop.textContent="O";
                        let row=drop.parentElement.className;
                        let column=drop.className[5];
                        board[row][column]="O";
                        mark.textContent="Current mark: X"
                        round++;
                        currentRound.textContent=`Round: ${round}`
                        let winner=determineWinner(player1,player2,board)
                        if(winner==="No winner"){
                          console.log("No winner yet")  
                        }
                        else{
                            console.log(winner)
                            result.textContent=`${winner.name}`
                            round=10;
                        }
                         console.log(board)
                         console.log(round)
                         console.log(winner)
                    }
                    else{
                        player.textContent="Player 2's turn"
                        drop.textContent="X";
                        let row=drop.parentElement.className;
                        let column=drop.className[5];
                        board[row][column]="X";
                        mark.textContent="Current mark: O"
                        round++;
                        currentRound.textContent=` Round: ${round}`
                        let winner=determineWinner(player1,player2,board)
                        if(winner==="No winner"){
                          console.log("No winner yet")  
                        }
                        else{
                            console.log(winner)
                            result.textContent=`${winner.name}`
                            round=10;
                        }
                         console.log(board)
                         console.log(round)
                         console.log(winner)
                    }
                }
                else{
                    drop.removeEventListener('click',e=>{
                    })
                } 
            },{once:true}) 
        });
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
reset.addEventListener("click",e=>{
    drops.forEach((drop)=>{
        drop.textContent=""
        round=1;
        currentRound.textContent=`Round: ${round}`
        player.textContent=""
        mark.textContent=""
        result.textContent=""
        board=gameBoard().getBoard();
        console.log(board)
        console.log(round)
        playGame(player1,player2)
    })
})
playGame(player1,player2)
