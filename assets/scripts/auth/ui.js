'use strict'
const store = require('../store.js')
// const startGame = require('../game/game-events.js')

const signUpSuccess = (data) => {
  $('#sign-up-success-container').show()
  $('#sign-up-auth-alert-success').addClass('show')
  setTimeout(() => {
    $('#sign-up-auth-alert-success').removeClass('show')
    $('#sign-up-success-container').hide()
  }, 1000)
  $('.sign-up-container').hide()
  $('.sign-in-container').show()
}

const signInSuccess = (data) => {
  $('#sign-in-auth-alert-success').show()
  $('#sign-in-success-container').addClass('show')
  setTimeout(() => {
    $('#user-feedback').removeClass('show')
  }, 1000)
  $('.before-sign-in').hide()
  $('.after-sign-in').show()
  store.user = data.user
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
  $('#user-message').text('Successfully change password!')
}
const changePasswordFailure = () => {
  $('#user-message').text('FAILED')
}

const signOutSuccess = function () {
  $('#sign-out-alert-container').show()
  $('#sign-out-auth-alert-success').addClass('show')
  $('#clear-form').reset()

  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
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
