'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/game.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // console.log('Game events is', gameEvents)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('submit', authEvents.onSignOut)
  $('.box').on('click', gameEvents.onBoxClick)
})
