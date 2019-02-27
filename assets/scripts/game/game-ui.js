'use strict'
const store = require('../store.js')

const createGameSuccess = (gameResponse) => {
  $('#user-message').text('Begin Game')
  store.game = gameResponse.game
}

const failure = (responseData) => {
  $('#user-message').text('Something went wrong')
}

const updateGameSuccess = (responseData) => {
  $('#user-message').text('Game Updated')
}

// console.log('store:', store)
module.exports = {
  createGameSuccess,
  updateGameSuccess,
  failure
}
