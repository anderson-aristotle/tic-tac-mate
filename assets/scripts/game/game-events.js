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
  $('#playerX').addClass('your-turn')
  $('#playerO').removeClass('your-turn')

  $('.box').text('')

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

  if ($('#game-board').hasClass('started')) {
    // game in progress
    const box = $(event.target)
    if (box.text()) {
      // already in use
      // display user message
      $('#user-feedback').text('That square is taken')
    } else {
      const index = box.data('cell-index')
      box.text(store.currentPlayer)

      // temporary copies of these variables
      const over = logic.didPlayerWin(store.currentPlayer)
      const player = store.currentPlayer

      if (over) {
        // update API
        // notify user that current player won, game is over
        store.winner = player
        api.updateGameBoard(index, player, true)
          .then(ui.gameOver)
          .catch(ui.failure)
      } else {
        // update API, switch players, continue game
        api.updateGameBoard(index, player, false)
          .then(ui.updateGameSuccess)
          .catch(ui.failure)
        switchPlayer()
      }
    }
  } else {
    // game not started
    $('#user-feedback').text('Click the Start button')
  }
}

const switchPlayer = () => {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
    $('#playerO').addClass('your-turn')
    $('#playerX').removeClass('your-turn')
  } else {
    store.currentPlayer = 'X'
    $('#playerX').addClass('your-turn')
    $('#playerO').removeClass('your-turn')
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
