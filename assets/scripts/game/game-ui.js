'use strict'
const store = require('../store.js')

// const [variable] = event => {
//   gameLogic.gameBoard = gameLogic.makeBoard(3)
//   $('.cell').removeClass('x')
//   $('.cell').removeClass('o')
//   gameUi.displayUpdate()
// }

const createGameSuccess = (gameResponse) => {
  console.log(gameResponse)
  $('user-message').text('Begin Game')
  console.log(gameResponse.game)
  store.game = gameResponse.game
  console.log('store')
  console.log(store)
}

// const newGame = () => {
//   gameApi.createNewGame()
//     .then(gameLogic.assignID)
//   gameLogic.gameBoard = gameLogic.makeBoard(3)
//   $('.cell').removeClass('x')
//   $('.cell').removeClass('o')
//   $('#game-display').stop(true, true)
//   $('#game-display').fadeTo('fast', 1)
//   gameUi.displayUpdate()
//   onGetGames()
// }

// const onMove = event => {
// if (gameLogic.gameBoard.winner === undefined) {
// gameLogic.takeTurn(event.target.id)
// gameUi.displayUpdate()
// gameUi.boardUpdate()
// gameApi.updateGame()
// } else {
// gameUi.alreadyOver()
//   }
// }

const switchPlayerSuccess = data => {
  console.log('this data comes from switch player success')
  console.log(data)
  store.game.cells = data.game.cells
}

const userFeedBack = () => {
  $('user-feedback').on()
}

const signInSuccess = (data) => {
  $('#user-message').text('Successfully signed Sign In')
  $('.before-sign-in').hide()
  $('.after-sign-in').show()
  store.user = data.user
}

const resetGame = () => {
  $('#user-message').text('Congrats, game is reset!')
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
  resetGame,
  switchPlayerSuccess,
  userFeedBack,
  signInSuccess
}
