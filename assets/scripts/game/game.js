'use strict'
// events to handle the click
const store = require('../store.js')
store.currentPlayer = 'X'

const onBoxClick = (event) => {
  event.preventDefault()
  if (store.currentPlayer === 'X') {
    $(event.target).text('X')
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    $(event.target).text('O')
    store.currentPlayer = 'X'
  }
}

module.exports = {
  onBoxClick
}
