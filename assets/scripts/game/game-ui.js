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

// const onGetGames = () => {
//   gameApi.getGames()
//     .then(gameUi.onGetGamesSuccess)
//     .catch(gameUi.onGetGamesFailure)
// }
// const onGetGameById = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   gameApi.getGameById(formData)
//     .then(gameUi.getGameByIdSuccess)
//     .catch(gameUi.getGameByIdfailure)
// }

// const onGetAllGames = () => {
//   gameApi.getAllGames()
//   .then(gameUi.onGetAllGamesSuccess)
//   .catch(gameUi.onGetGamesFailure)
// }

module.exports = {
  createGameSuccess,
  gameOver,
  updateGameSuccess,
  failure
}
