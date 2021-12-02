const X_CLASS = 'x'
const O_CLASS = 'o'

const boardCells = document.querySelectorAll('.cell')
let xTurn = true

const handleClick = (e) => {
    console.log("cell clicked!")
    const currentCell = e.target
    const currentPlayer = xTurn ? X_CLASS : O_CLASS
    placeGamePiece(currentCell, currentPlayer)
    // check for win
    // check for tie
    // change turns
}

boardCells.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true })
})

const placeGamePiece = (cell, currentPlayer) => {
    cell.classList.add(currentPlayer)
}