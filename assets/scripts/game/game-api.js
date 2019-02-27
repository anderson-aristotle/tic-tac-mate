'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createNewGame = (formData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateGameBoard = (index, value, boolean) => {
  console.log(`${index} ${value} ${boolean}`)
  return $.ajax({
    url: config.apiUrl + `games/` + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': boolean
      }
    }
  })
}

const getGamesPlayed = () => {
  return $.ajax({
    url: config.apiUrl + `games/?over=true`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createNewGame,
  updateGameBoard,
  getGamesPlayed
}
