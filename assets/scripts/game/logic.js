'strict'
const store = require('../store.js')


const winConditions = [
  [0, 1, 2], [3, 4, 5],
  [6, 8, 7], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
]

const gameBoard = ['', '', '', '', '', '', '', '', '']

const displayGameBoard = {
  $()
}

module.exports = {
  winConditions,
  displayGameBoard,
  gameBoard
}
