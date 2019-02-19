'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully Signed Up!')
}

const signUpFailure = () => {
  $('#user-message').text('Error on Sign Up')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed Sign In')
  store.user = responseData.user
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
  console.log('store:', store)
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
