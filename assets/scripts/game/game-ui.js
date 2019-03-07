'use strict'
const store = require('../store.js')

const createGameSuccess = (gameResponse) => {
  $('user-message').text('Begin Game')

  $('#tic-tac-toe').children().each(function (div) {
    $(this).html('')
  })

  store.game = gameResponse.game
  store.currentPlayer = 'X'
  store.winner = false

  console.log('store')
  console.log(store)
}

const switchPlayerSuccess = data => {
  console.log('this data comes from switch player success')
  console.log(data)
  store.game.cells = data.game.cells
}

const userFeedBack = () => {
  $('user-feedback').on()
}

const resetGame = () => {
  $('#user-feedback').text('Congrats, game is reset!')
}

module.exports = {
  createGameSuccess,
  resetGame,
  switchPlayerSuccess,
  userFeedBack
}
