'use strict'

// events to handle the click
const store = require('../store.js')
const api = require('./game-api.js')
const ui = require('./game-ui.js')
const logic = require('./game-logic')

const createNewGame = () => {
  event.preventDefault()
  api.createNewGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)

  store.currentPlayer = 'X'
  store.gameOver = false
  // $('#playerOne').html(store.user.email + ' ' + playerOneCount + ' wins')
  // $('#playerTwo').html('User Two ' + playerTwoCount + ' wins')
}

// const gameBoard = ['', '', '', '', '', '', '', '', '']
//
// const winConditions = [
//   [0, 1, 2], [3, 4, 5],
//   [6, 7, 8], [0, 3, 6],
//   [1, 4, 7], [2, 5, 8],
//   [0, 4, 8], [6, 4, 2]
// ]

const clickBox = (event) => {
  const box = $(event.target)
  const index = box.data('cell-index')
  box.text(store.currentPlayer)

  // temporary local copies of these variables
  const over = logic.didPlayerWin(store.currentPlayer)
  const player = store.currentPlayer

  if (!over) {
    switchPlayer()
  }

  store.gameOver = over

  api.updateGameBoard(index, player, over)
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

const switchPlayer = () => {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

// const switchPlayer = () => {
//   // event.preventDefault()
//   const index = $(event.target).data('cell-index')
//
//   if ($(event.target).text()) {
//     // setTimeOut(() => {
//     $('#user-feedback').text('Select An Empty Square!')
//     //  }, 1000)
//     return
//   }
//   if (gameBoard.winner) { return }
//
//   winConditions.forEach(cond => {
//     if (gameBoard[cond[0]] && gameBoard[cond[0]] === gameBoard[cond[1]] && gameBoard[cond[1]] === gameBoard[cond[2]]) {
//     }
//     if (winConditions === true) {
//       gameBoard.winner = currentPlayer
//     } if (gameBoard.turnCounter === 9 && gameBoard.winner === 'undefined') {
//       gameBoard.winner = 'Tie'
//     } if (gameBoard.winner !== undefined) {
//       gameBoard.api.gameover = true
//     }
//   })
//
//   if (store.currentPlayer === 'X') {
//     $(event.target).text('X')
//     gameBoard[index] = 'X'
//     store.currentPlayer = 'O'
//   } else if (store.currentPlayer === 'O') {
//     $(event.target).text('O')
//     gameBoard[index] = 'O'
//     store.currentPlayer = 'X'
//   }
//
//   const value = $(event.target).text()
//   console.log(store)
// }

//
// const createGame = () => {
//   event.preventDefault()
//   $('#reset-game').on('').reset()
//   // new gameboard
//   $()
// }

module.exports = {
  switchPlayer,
  clickBox,
  createNewGame
}
