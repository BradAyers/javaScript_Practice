/** #####################################
 *  # Created by BA.Ayers on 3/26/2015. #
    ##################################### */

// Tic Tac Toe game

//  1. Initialize ticTacToe object (board)
var board = {row1: ["x", "x", "x"], row2: [3, 4, 5], row3: [6, 7, 8]};
 var xWins = ["x", "x", "x"];

// Print board function test horizontal
var compare = [];
for (row = 1; row < 4; row++) {
    var thisRow = "row" + row;
    var arr = board[thisRow];
    if (arr === xWins) {
        alert("You win!")
    }
    else {
        console.log(arr);
    }
    // board[thisRow].forEach(function(piece){
    //    compare[row-1] = piece;
        // console.log(thisRow, piece);
    // })
}

// Print board function test vertical
for (idx = 0; idx < 3; idx++) { // idx are array indexes for comparing columns with same index
    for (row = 1; row < 4; row++) {
        var thisRow = "row" + row;
    //    console.log(idx, board[thisRow][idx]);
    }
}

// Print board function text diagonal
for (row = 1; row < 4; row++) {
    var thisRow = "row" + row;
    var idx = row - 1;
  //  console.log(row, board[thisRow][idx]);
}

var idx = 3;//include in scope of function once tested and applied
for (row = 1; row < 4; row++) {
    var thisRow = "row" + row;
    idx--;
  //  console.log(row, board[thisRow][idx]);
}


//  1. Who starts? User starts first time, winner starts first after that until game is exited
//  2. player1 picks (call compPick function if it is computer pick)
//  3. call status function to see if there is a winner yet
//  4. player2 picks (call compPick function if it is computer pick)
//  5. call status function to see if there is a winner yet
//  6. New game or quit option (reset necessary values)


