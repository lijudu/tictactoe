
const container = document.getElementById('gameContainer')


function createPlayer(name,) {
    return {
        name,
        markedArea,
        }
}



function gamePlay() {
    let playerMark = false
    container.addEventListener('click', function(e){
        const isMarked = document.getElementById(e.target.id)
        if (isMarked.hasChildNodes() == false) {
            if (playerMark == false) {
                e.target.innerText = player1.name
                return playerMark = true
            } else if (playerMark == true) {
                e.target.innerText = player2.name
                playerMark = false
            }
        } else if (isMarked.hasChildNodes() == true) {
            console.log('panelFull')
        }
    })
}


const player1 = createPlayer('X')

const player2 = createPlayer('O')

gamePlay()

// const player2 = createPlayer('O')
// player2.markBoard();
// create players as objects
// player section in array [a1, b1, c1], [a2, b2, c2] = win
// create gameplay function as module