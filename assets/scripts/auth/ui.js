'use strict'
const store = require('../store.js')
const startGame = require('../game/game-events.js')

const signUpSuccess = (data) => {
  $('#sign-up-success-container').show()
  $('#sign-up-auth-alert-success').addClass('show')
  setTimeout(() => {
    $('#sign-up-auth-alert-success').removeClass('show')
    $('#sign-up-success-container').hide()
  }, 2000)
  $('.sign-up-container').hide()
  $('.sign-in-container').show()
}

const signInSuccess = (responseData) => {
  $('#sign-in-success-container').show()
  $('#sign-in-auth-alert-success').addClass('show')
  $('#sign-in-success-container').removeClass()
  setTimeout(() => {
    $('#sign-in-auth-alert-success').hide('show')
    $('#user-message').text('Successfully signed Sign In')
    store.user = responseData.user
    $('#sign-in-container').hide()
    $('#sign-in-form').hide()
  }, 5000)
  $('#game-board').show(startGame.createGame)
  console.log(store)
}

const signUpFailure = () => {
  $('#sign-up-alert-container').show()
  $('#sign-up-auth-alert-failure').addClass('show')
  setTimeout(() => {
    $('#sign-up-auth-alert-failure').removeClass('show')
    $('#sign-up-alert-container').hide()
  }, 2000)
}

const signInFailure = () => {
  $('#user-message').text('Failed Sign In')
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully change passward')
}
const changePasswordFailure = () => {
  $('#user-message').text('FAILED')
}

const signOutSuccess = () => {
  $('#user-message').text('success')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = () => {
  $('#user-message').text('FAILED')
}

const failure = () => {
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  failure
}
