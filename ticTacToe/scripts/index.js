/** #####################################
 *  # Created by BA.Ayers on 3/26/2015. #
 ##################################### */

// Tic Tac Toe game

//  1. Initialize ticTacToe object (board)
var board = {row1: [0, 1, "O"], row2: [3, 4, "O"], row3: [6, 7, 8]};

function testWinner() {
    console.log(winner());
}

function winner() {
    if (testHor()) {return (testHor() + " wins!")};
    if (testVert()) {return (testVert() + " wins!")};
    if (testDiag()) {return (testDiag() + " wins!")};
    return "No winner yet.";
}


// FUNCTION TO TEST HORIZONTAL ROWS FOR A WINNER (MOSTLY TESTED, OTHER THAN RETURN)
function testHor() {
    // Define winners
    var xWins = ["X", "X", "X"];
    var oWins = ["Y", "Y", "Y"];
    for (row = 1; row < 4; row++) {
        //var winner =_.isEqual(board.row[row], xWins) || board.row[row].isEqual(yWins);
        var winner = false; // remove after testing and reactivate line above that is currently commented out for testing
        if (winner) {
            return board.row[row][0]; // WE HAVE A WINNER. RETURN X OR O SO WE KNOW WHO WON.  ### MAY NEED TO TWEAK ###
        }
    }
    // ALTERNATE CODE FOR ARRAY EQUALITY COMPARISON IF I DIDN'T USE isEqual METHOD FROM THE UNDERSCORE LIBRARY
    // function equalArrays(arr1, arr2) {
    //    for (i = 0; i < arr1.length; i++) {
    //        if (arr1[i] === arr2[i]) return true;
    //    }
    return winner;
}

// FUNCTION TO TEST VERTICAL ROWS FOR A WINNER (TESTED AND WORKING)
function testVert() {
    var winner = false;
    for (idx = 0; (idx < 3) && (winner === false); idx++) { // idx are array indexes for comparing columns with same index
        winner = true // initialize to true so that loop below goes through initial iteration
        for (xRow = 1; (xRow < 4) && (winner === true); xRow++) {
            var thisRow = "row" + xRow;
            winner = board[thisRow][idx] === "X" ? true : false; // testing for X winner
        }
        if (winner === true){return "X"};
        winner = true;
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            winner = board[thisRow][idx] === "O" ? true : false; // testing for O winner
        }
        if (winner === true){return "O"};
    }
    return winner;
}

// FUNCTION TO TEST DIAGONAL ROWS FOR A WINNER (TESTED AND WORKING)
function testDiag() {
    var winner = true;
    var gamePiece = "X"; // TEST FOR X WINNER FIRST
    for (i = 1; i < 3; i++) { // LOOPS TWICE TO CHECK FOR X WINNER, THEN O WINNER
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            var idx = row - 1;
            winner = board[thisRow][idx] === gamePiece ? true : false;
        }
        if (winner === true) {
            return gamePiece
        }

        var idx = 3;
        winner = true
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            idx--;
            winner = board[thisRow][idx] === gamePiece ? true : false;
        }
        if (winner === true) {
            return gamePiece
        }
        ;
        gamePiece = "O"; // NOW LOOP AGAIN TO TEST FOR O WINNER
    }
}


//  1. Who starts? User starts first time, winner starts first after that until game is exited
//  2. player1 picks (call compPick function if it is computer pick)
//  3. call winner function to see if there is a winner yet
//  4. player2 picks (call compPick function if it is computer pick)
//  5. call winner function to see if there is a winner yet
//  6. New game or quit option (reset necessary values)


