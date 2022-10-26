
const container = document.getElementById('gameContainer')
let winnerDeclared = false


function createPlayer(name) {
    return {
        name,
        markedArea: [],
        }
}


function gamePlay() {
    let playerMark = false

    container.addEventListener('click', function(e){
        const isMarked = document.getElementById(e.target.id)
        if (isMarked.hasChildNodes() == false) {
            if (playerMark == false && winnerDeclared == false) {
                e.target.innerText = player1.name
                player1.markedArea.push(e.target.id)
                console.log(player1.markedArea)
                declareWinner()
                return playerMark = true
            } else if (playerMark == true && winnerDeclared == false) {
                e.target.innerText = player2.name
                player2.markedArea.push(e.target.id)
                console.log(player2.markedArea)
                declareWinner()
                return playerMark = false
            }
        } else if (isMarked.hasChildNodes() == true) {
            console.log('panelFull')
    }
    })
}


function declareWinner() {  
    let boardWin = [
        ['a1', 'a2', 'a3'],
        ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3'],
        ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'],
        ['a3', 'b3', 'c3'],
        ['a1', 'b2', 'c3'],
        ['a3', 'b2', 'c1'],
        ];
    let showWinner = document.getElementById('declareWinner')
    let createP = document.createElement('div')
    createP.classList.add = 'winner'
    if (player1.markedArea.length >= 3 ) {
        for (i = 0; i < boardWin.length; i++) {
            if (boardWin[i].every(elem => player1.markedArea.includes(elem)) == true) {
                showWinner.appendChild(createP)
                createP.innerText = "Player 1 Wins!"
                console.log('player1 wins')
                return winnerDeclared = true
            }
        }
    }
    if (player2.markedArea.length >= 3) {
        for (j = 0; j < boardWin.length; j++) {
            if (boardWin[j].every(elem => player2.markedArea.includes(elem)) == true) {
                showWinner.appendChild(createP)
                createP.innerText = "Player 2 Wins!"
                console.log('player2 wins')
                return winnerDeclared = true
            }
        }
    }
}


const player1 = createPlayer('X')
const player2 = createPlayer('O')

gamePlay()

// delcare tie
// clean up interface
// figure out AI 