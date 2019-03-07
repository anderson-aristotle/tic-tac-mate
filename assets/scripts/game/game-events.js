'use strict'
const store = require('../store.js')
const api = require('./game-api.js')
const ui = require('./game-ui.js')

const createNewGame = () => {
  event.preventDefault()
  api.createNewGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
  $('#create-game').click(function () {
    $('.col-4').empty()
  })
}

const gameBoard = ['', '', '', '', '', '', '', '', '']

const winConditions = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
]

const switchPlayer = (event) => {
  console.log('switchPlayer')
  event.preventDefault()
  const index = $(event.target).data('cell-index')

  if ($(event.target).text()) {
    setTimeout(() => {
      $('#user-feedback').text('Select An Empty Square!')
    }, 1000)
    return
  }
  if (store.winner) { return }

  if (store.currentPlayer === 'X') {
    $(event.target).text('X')
    gameBoard[index] = 'X'
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    $(event.target).text('O')
    gameBoard[index] = 'O'
    store.currentPlayer = 'X'
  }

  const winByPlayer = [
    [$('#czero').text(), $('#cone').text(), $('#ctwo').text()],
    // row 1
    [$('#cthree').text(), $('#cfour').text(), $('#cfive').text()],
    // row 2
    [$('#csix').text(), $('#cseven').text(), $('#ceight').text()],
    // row 3
    [$('#czero').text(), $('#cthree').text(), $('#csix').text()],
    // col 1
    [$('#cone').text(), $('#cfour').text(), $('#cseven').text()],
    // col 2
    [$('#ctwo').text(), $('#cfive').text(), $('#ceight').text()],
    // col 3
    [$('#czero').text(), $('#cfour').text(), $('#ceight').text()],
    // diag 1
    [$('#ctwo').text(), $('#cfour').text(), $('#csix').text()]
    // diag 2
  ]

  console.log(winByPlayer)

  const didXWin = function () {
    store.winner = winByPlayer.some(line => line.every(item => item === 'X'))
  }

  const didOWin = function () {
    if (store.winner) { return }
    store.winner = winByPlayer.some(line => line.every(item => item === 'O'))
  }

  didXWin()
  didOWin()
  api.updateGameBoard(index, store.currentPlayer, store.winner)

  if (winByPlayer === true) {
    console.log('current player wins!')
  }
}

const onGetGames = () => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}
const onGetGameById = (event) => {
  // event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  // api.getGameById(formData)
  //   .then(ui.getGameByIdSuccess)
  //   .catch(ui.getGameByIdfailure)
}

const onGetAllGames = () => {
  api.getAllGames()
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  switchPlayer,
  createNewGame,
  gameBoard,
  winConditions,
  onGetGames,
  onGetGameById,
  onGetAllGames
}
