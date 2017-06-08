document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
board.cells = [{
        row: 0,
        col: 0,
        isMine: true,
        hidden: true
    }, {
        row: 1,
        col: 0,
        isMine: false,
        hidden: true
    },
    {
        row: 0,
        col: 1,
        isMine: false,
        hidden: true
    }, {
        row: 1,
        col: 1,
        isMine: false,
        hidden: true
    }
]


function startGame () {
  // Don't remove this function call: it makes the game work!
for (var i = 0; i < board.cells.length; i++) {
var cell = board.cells[i];
  cell.surroundingMines=countSurroundingMines(cell);
  }
  //carla fez add.EventListener
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    var checking = board.cells[i];
    if (checking.isMine && !checking.isMarked) {
      console.log('mine true not marked')
      return;
    }
    // ! ponto de exclamacao faz uma negacao invertendo o valor
    if (!checking.isMine && checking.hidden) {
    console.log('hidden cell')
     return;
   }

  }
console.log('you win')

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
    var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
     var count = 0;
    for (var i =0; i < surroundingCells.length; i++) {
       var surroundingCell = surroundingCells[i];
      if (surroundingCell.isMine) {
        count ++;
      }

    }
     return count;
}
