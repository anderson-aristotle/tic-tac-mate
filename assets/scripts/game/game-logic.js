'use strict'

const winByPlayer = [
  '#czero:contains("PLR"), #cone:contains("PLR"), #ctwo:contains("PLR")', // row 1
  '#cthree:contains("PLR"), #cfour:contains("PLR"), #cfive:contains("PLR")', // row 2
  '#csix:contains("PLR"), #cseven:contains("PLR"), #ceight:contains("PLR")', // row 3
  '#czero:contains("PLR"), #cthree:contains("PLR"), #csix:contains("PLR")', // column 1
  '#cone:contains("PLR"), #cfour:contains("PLR"), #cseven:contains("PLR")', // column 2
  '#ctwo:contains("PLR"), #cfive:contains("PLR"), #ceight:contains("PLR")', // column 3
  '#czero:contains("PLR"), #cfour:contains("PLR"), #ceight:contains("PLR")', // diagonal 1
  '#ctwo:contains("PLR"), #cfour:contains("PLR"), #csix:contains("PLR")' // diagonal 2
]

const didXWin = function () {
  for (let i = 0; i < winByPlayer.length; i++) {
    const winByX = winByPlayer[i].replace('PLR', 'x')
    if ($(winByX).length > 0) {
      // X wins
      return true
    }
  }
  return false
}

const didOWin = function () {
  for (let i = 0; i < winByPlayer.length; i++) {
    const winByO = winByPlayer[i].replace('PLR', 'o')
    if ($(winByO).length > 0) {
      // O wins
      return true
    }
  }
  return false
}

module.exports = {
  didXWin,
  didOWin
}
