const X_CLASS = 'x'
const O_CLASS = 'o'

const boardCells = document.querySelectorAll('.cell');
let xTurn

const handleClick = (e) => {
    console.log("clicked!")
    const currentClass = xTurn ? X_CLASS : O_CLASS
    // place game piece
    // check for win
    // check for tie
    // change turns
}

boardCells.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true })
})

