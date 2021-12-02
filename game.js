const X_CLASS = 'x'
const O_CLASS = 'o'
const POSSIBLE_WINS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6]
]

const winMessageText = document.getElementById('win-message-text')
const winMessageElement = document.getElementById('win-message')
const board = document.getElementById('board')
const boardCells = document.querySelectorAll('.cell')
let xTurn

startGame()







