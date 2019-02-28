'use strict'

const winByPlayerX = [
  '#czero:contains("X"), #cone:contains("X"), #ctwo:contains("X")', // row 1
  '#cthree:contains("X"), #cfour:contains("X"), #cfive:contains("X")', // row 2
  '#csix:contains("X"), #cseven:contains("X"), #ceight:contains("X")', // row 3
  '#czero:contains("X"), #cthree:contains("X"), #csix:contains("X")', // column 1
  '#cone:contains("X"), #cfour:contains("X"), #cseven:contains("X")', // column 2
  '#ctwo:contains("X"), #cfive:contains("X"), #ceight:contains("X")', // column 3
  '#czero:contains("X"), #cfour:contains("X"), #ceight:contains("X")', // diagonal 1
  '#ctwo:contains("X"), #cfour:contains("X"), #csix:contains("X")' // diagonal 2
]

const winByPlayerO = [
  '#czero:contains("O"), #cone:contains("O"), #ctwo:contains("O")', // row 1
  '#cthree:contains("O"), #cfour:contains("O"), #cfive:contains("O")', // row 2
  '#csix:contains("O"), #cseven:contains("O"), #ceight:contains("O")', // row 3
  '#czero:contains("O"), #cthree:contains("O"), #csix:contains("O")', // column 1
  '#cone:contains("O"), #cfour:contains("O"), #cseven:contains("O")', // column 2
  '#ctwo:contains("O"), #cfive:contains("O"), #ceight:contains("O")', // column 3
  '#czero:contains("O"), #cfour:contains("O"), #ceight:contains("O")', // diagonal 1
  '#ctwo:contains("O"), #cfour:contains("O"), #csix:contains("O")' // diagonal 2
]

// find out if player won
// player = 'X' or 'O'
const didPlayerWin = (player) => {
  const winByPlayer = (player === 'X' ? winByPlayerX : winByPlayerO)
  for (let i = 0; i < winByPlayer.length; i++) {
    const win = winByPlayer[i]
    if ($(win).length === 3) {
      // player wins
      return true
    }
  }
  return false
}

module.exports = {
  didPlayerWin
}
