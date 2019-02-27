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

// find out if player won
// player = 'X' or 'O'
const didPlayerWin = (player) => {
  for (let i = 0; i < winByPlayer.length; i++) {
    const win = winByPlayer[i].replace('PLR', player)
    if ($(win).length > 0) {
      // player wins
      return true
    }
  }
  return false
}

module.exports = {
  didPlayerWin
}
