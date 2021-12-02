const startGame = () => {
    xTurn = true
    boardCells.forEach((cell) => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setHoverPiece()
    gameoverElement.classList.remove('show')
}

// when player clicks on board cell
const handleClick = (e) => {
    const currentCell = e.target
    const currentPlayer = xTurn ? X_CLASS : O_CLASS
    placeGamePiece(currentCell, currentPlayer)

    if (playerWins(currentPlayer)) {
        gameover(false)
    } else if (playersTie()) {
        gameover(true)
    } else {
        nextTurn()
        setHoverPiece()
    }
}

const placeGamePiece = (cell, currentPlayer) => {
    cell.classList.add(currentPlayer)
}

const nextTurn = () => {
    xTurn = !xTurn

    // add class for player whos turn it is
    // add css for that class
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

const playerWins = (currentPlayer) => {
    return POSSIBLE_WINS.some(combination => {
        return combination.every((cellLocation) => {
            return boardCells[cellLocation].classList.contains(currentPlayer)
        })
    })
}

const playersTie = () => {
    return [...boardCells].every((cell) => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(O_CLASS)
    })
}

const gameover = (tie) => {
    if (tie) {
        gameoverElement.innerText = "Tie!"
    } else {
        const winner = xTurn ? "X" : "O"
        gameoverText.innerText = `${winner} won!`
    }
    gameoverElement.classList.add('show')
}