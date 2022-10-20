
const container = document.getElementById('gameContainer')

function createPlayer(name) {
    return {
        name,
        markBoard() {
            container.addEventListener('click', function(e){
                console.log('hello')
                e.target.innerText = name
            })
        }
}
}

const player1 = createPlayer('X')
player1.markBoard();

const player2 = createPlayer('O')
player2.markBoard();
// create players as objects
// create gameplay function as module