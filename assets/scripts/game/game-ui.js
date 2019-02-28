'use strict'
const store = require('../store.js')

const createGameSuccess = (responseData) => {
  $('#user-feedback').text('Begin Game')
  store.game = responseData.game
  $('#game-board').addClass('started')
}

const gameOver = (responseData) => {
  $('#user-feedback').text('Game Over')
  $('#game-board').removeClass('started')
}

const failure = (responseData) => {
  $('#user-feedback').text('Something went wrong')
}

const updateGameSuccess = (responseData) => {
  $('#user-feedback').text('Game Updated')
}

// console.log('store:', store)
module.exports = {
  createGameSuccess,
  gameOver,
  updateGameSuccess,
  failure
}
