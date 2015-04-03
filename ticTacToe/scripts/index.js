/** #####################################
 *  # Created by BA.Ayers on 3/26/2015. #
 ##################################### */

// Tic Tac Toe game

//  1. Initialize ticTacToe object (board)
var board = {row1: [0, 1, 2], row2: [3, 4, 5], row3: [6, 7, 8]};
var player1 = "Brad";
var player2 = "Denise";
var currPlayer = player1;

function playGame(firstPlayer) { // Executes game play activities
    var currPlayer = firstPlayer;
    var piece = "X";
    var play = true;
    // Clear board for new game
    board = {row1: [0, 1, 2], row2: [3, 4, 5], row3: [6, 7, 8]};
    $('.square').addClass('emptyTile');
    $('.square').removeClass('active');

    do {
        pickSquare(piece);
//        var row = prompt("Pick your row " + currPlayer);
//        var col = prompt("Pick your column " + currPlayer);
//        console.log(col);
//        board[row][col] = piece;
//        console.log(board[row]);
        if (winner()) {
            alert(piece + " wins the game! Congratulations " + currPlayer);
            play = false;
            playAgain(currPlayer);
        }
        else {
//            alert("No winner yet " + currPlayer);
            // Change player and piece for next pick
            currPlayer = (currPlayer === "Brad") ? "Denise" : "Brad";
            piece = (currPlayer === "Brad") ? "X" : "O";
            play = false;
        }
    } while (play)
}

function winner() { // Checks for winner
    if (testHor()) {return (testHor())}
    if (testVert()) {return (testVert())}
    if (testDiag()) {return (testDiag())}
    return false;
}


// FUNCTION TO TEST HORIZONTAL ROWS FOR A WINNER (MOSTLY TESTED, OTHER THAN RETURN)
function testHor() {
    // Define winners
    for (row = 1; row < 4; row++) {
        // var winner =_.isEqual(board.row[row], xWins) || board.row[row].isEqual(yWins);
        var winner = false; // remove after testing and reactivate line above that is currently commented out for testing
        if (winner) {
            //return board.row[row][0]; // WE HAVE A WINNER. RETURN X OR O SO WE KNOW WHO WON.  ### MAY NEED TO TWEAK ###
        }
    }
    // ALTERNATE CODE FOR ARRAY EQUALITY COMPARISON IF I DIDN'T USE isEqual METHOD FROM THE UNDERSCORE LIBRARY
    // function equalArrays(arr1, arr2) {
    //    for (i = 0; i < arr1.length; i++) {
    //        if (arr1[i] === arr2[i]) return true;
    //    }
    return false; // change false to winner when implemented in HTML
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
        if (winner === true){return winner};
        winner = true;
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            winner = board[thisRow][idx] === "O" ? true : false; // testing for O winner
        }
        if (winner === true){return winner};
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
            return winner; // gamePiece
        }

        var idx = 3;
        winner = true
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            idx--;
            winner = board[thisRow][idx] === gamePiece ? true : false;
        }
        if (winner === true) {
            return winner; // gamePiece
        }
        ;
        gamePiece = "O"; // NOW LOOP AGAIN TO TEST FOR O WINNER
    }
    return winner;
}

function pickSquare(piece) {
    //  code to prompt player to pick square.
    console.log('in pickSquare function');
    var mySquare = $('.square');
    console.log(piece);
    mySquare.on('click', function() {
        $(this).addClass(piece);
    })
}

function playAgain(player1) {
    console.log('playAgain has been called');
    var display = $('#gameConsole');
    display.animate({width: 200}, 5000, function() {
        $('h2').text('Play Again');
    });
    display.on('click', function() {
        playGame(player1);
    });


    //display.html('<h2>Play again?</h2>');
    //    display.on('click', function() {
    //        display.animate({
    //            width: 475}, 500);
    //        display.h2.fadeOut('slow');
    //    })
    //})
}


//  1. Who starts? User starts first time, winner starts first after that until game is exited
//  2. player1 picks (call compPick function if it is computer pick)
//  3. call winner function to see if there is a winner yet
//  4. player2 picks (call compPick function if it is computer pick)
//  5. call winner function to see if there is a winner yet
//  6. New game or quit option (reset necessary values)
