'use strict'

// use require with a reference to bundle the file and use it in this file

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/game-events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('.box').on('click', gameEvents.switchPlayer)
  $('#create-game').on('click', gameEvents.createNewGame)
})
