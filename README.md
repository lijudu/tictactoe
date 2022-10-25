# tictactoe

✅ 1) Store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself. Have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

✅ 2) Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)

✅3) Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

✅4) Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

5) Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

6) Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
Start by just getting the computer to make a random legal move. Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)