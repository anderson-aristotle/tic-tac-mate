'use strict'

// use require with a reference to bundle the file and use it in this file

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/game-events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  // we have to make a mark before we can switch players
  $('.box').on('click', gameEvents.clickBox)
  // $('.box').on('click', gameEvents.switchPlayer)
  $('#create-game').on('click', gameEvents.createNewGame)
  $('#reset-game').on('click', gameEvents.createNewGame)
})
