const startGame = () => {
    xTurn = true

    boardCells.forEach((cell) => {
        cell.addEventListener('click', handleClick, { once: true })
    })

    setHoverPiece()
}

const handleClick = (e) => {
    console.log("cell clicked!")
    const currentCell = e.target
    const currentPlayer = xTurn ? X_CLASS : O_CLASS
    placeGamePiece(currentCell, currentPlayer)
    if (checkForWin(currentPlayer)) {
        console.log("Winner!")
    }
    // check for win
    // check for tie
    nextTurn()
}

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

const checkForWin = (currentPlayer) => {
    return POSSIBLE_WINS.some(combination => {
        return combination.every((cellLocation) => {
            return boardCells[cellLocation].classList.contains(currentPlayer)
        })
    })
}