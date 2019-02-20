'use strict'
const store = require('../store.js')

const createGameSuccess = (gameResponse) => {
  $('user-message').text('Begin Game')
  console.log(gameResponse.game)
  store.game = gameResponse.game
  console.log('store')
  console.log(store)
}

// console.log('store:', store)
module.exports = {
  createGameSuccess
}
