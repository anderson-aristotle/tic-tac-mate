'use strict'

// events to handle the click
const store = require('../store.js')
const api = require('./game-api.js')
const ui = require('./game-ui.js')

const winConditions = [
  [0, 1, 2], [3, 4, 5],
  [6, 8, 7], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
]

const gameBoard = ['', '', '', '', '', '', '', '', '']

const createGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch()
}

store.currentPlayer = 'X'

const switchPlayer = (event) => {
  event.preventDefault()
  if (store.currentPlayer === 'X') {
    $(event.target).text('X')
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    $(event.target).text('O')
    store.currentPlayer = 'X'
  }
  const value = $(event.target).text()
  const index = $(event.target).data('cell-index')
  const over = false // <--- change in future
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
