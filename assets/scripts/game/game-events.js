'use strict'

// events to handle the click
const store = require('../store.js')
const api = require('./game-api.js')
const ui = require('./game-ui.js')

const winConditions = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
]

const gameBoard = ['', '', '', '', '', '', '', '', '']

const createGame = () => {
  api.createGame()
    .then(ui.createGameSuccess)
    .catch()
}

store.currentPlayer = 'X'
const over = false

const switchPlayer = (event) => {
  event.preventDefault()
  const index = $(event.target).data('cell-index')

  if (store.currentPlayer === 'X') {
    $(event.target).text('X')
    gameBoard[index] = 'X'
    $(event.target).off('click')
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    $(event.target).text('O')
    gameBoard[index] = 'O'
    $(event.target).off('click')
    store.currentPlayer = 'X'
  }

  // check winning win conditions

  winConditions.forEach(cond => {
    if (gameBoard[cond[0]] && gameBoard[cond[0]] === gameBoard[cond[1]] && gameBoard[cond[1]] === gameBoard[cond[2]]) {
      console.log('someone won')
      $('.box').off('click')
      // over = true
    }
  })

  const value = $(event.target).text()

  api.updateGameBoard(value, index, over)
    .then((data) => console.log('This works!!!'))
    .catch(ui.failure)
}

module.exports = {
  switchPlayer,
  createGame,
  gameBoard,
  winConditions
}
