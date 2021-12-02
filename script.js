const X_CLASS = 'x'
const O_CLASS = 'o'

const board = document.getElementById('board')
const boardCells = document.querySelectorAll('.cell')
let xTurn = true

const handleClick = (e) => {
    console.log("cell clicked!")
    const currentCell = e.target
    const currentPlayer = xTurn ? X_CLASS : O_CLASS
    placeGamePiece(currentCell, currentPlayer)
    // check for win
    // check for tie
    setHoverPiece()
    nextTurn()
}

boardCells.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true })
})

const placeGamePiece = (cell, currentPlayer) => {
    cell.classList.add(currentPlayer)
}

const nextTurn = () => {
    xTurn = !xTurn
}

const setHoverPiece = () => {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (xTurn) {
        board.classList.add(X_CLASS)
    } else {
        board.classList.add(O_CLASS)
    }
}