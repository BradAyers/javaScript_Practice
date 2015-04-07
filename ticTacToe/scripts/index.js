/** #####################################
 *  # Created by BA.Ayers on 3/26/2015. #
 ##################################### */

// Tic Tac Toe game

//  1. Initialize ticTacToe object (board)
var board = {row1: [0, 1, 2], row2: [3, 4, 5], row3: [6, 7, 8]};
var player1, player2;

function playGame(player1, player2) { // Executes game play activities

    var currPlayer = player1;
    var piece = "X";
    var play = true;
    // Clear board for new game
    board = {row1: [0, 1, 2], row2: [3, 4, 5], row3: [6, 7, 8]};
    $('.square').addClass('emptyTile');
    $('.square').removeClass('active');
    $('.square').removeClass('O'); // 'O' is below 'emptyTile' in CSS, so clear this too or else 'O' would remain
    $('.square').removeClass('X'); // I added this because X was not being removed for new game

    // Start picking squares
    var mySquare = $('.square');
    mySquare.on('click', function(idx) {
        var index = $(this).index();
        if (squareOpen(index, piece)) {
            $(this).addClass(piece);
            if (winner()) {
                alert(piece + " wins the game! Congratulations " + currPlayer);
                // play = false;
                playAgain(currPlayer);
            }
            else {
                // Change player and piece for next pick
                currPlayer = (currPlayer === player1) ? player2 : player1;
                piece = (currPlayer === player1) ? "X" : "O";
                play = false;
                $('h2').text(currPlayer + '\'s move ... ');
            }
        }
        else {
            console.log('pickAgain');
        }
    })
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

function squareOpen(idx, marker) {
    var index = idx;
    if ((idx - 6) >= 0) { // The square is in row3
        index = idx - 6;
        if (board['row3'][index] === idx) { // there is no X or O here
            board['row3'][index] = marker;
            console.log('row3 ' + index + " " + marker);
            return true;
        }
    }
    else if ((idx - 3) >= 0) { // The square is in row2
        index = idx - 3;
        if (board['row2'][index] === idx) { // there is no X or O here
            board['row2'][index] = marker;
            console.log('row2 ' + index + " " + marker);
            return true;
        }
    }
    else {  // The square is in row1
        // this else statement is not recognizing the equality at the 0 index
        console.log(index);
        console.log(board['row1'][index]);
        console.log(board['row1'][index] === idx);
        if (board['row1'][index] === idx) { // there is no X or O here
            board['row1'][index] = marker;
            console.log('row1 ' + index + " " + marker);
            return true;
        }
    }
return false;
}



    //
    // This code below didn't seem to want to work.  It returned the correct vars index and idx, which would
    // execute the 'if' loop when the equality was true.  However, the addClass part, that should add the correct
    // piece to the board, would not work.  I'm creating a different approach and will ask Nate or Ben about this.
    //

    //do {   // Loop until player picks an empty square,
    //    mySquare.on('click', function () {
    //        var index = $(this).index();
    //        $.each( board, function( row, arr ) {
    //            arr.forEach(function(idx){
    //                if (index == idx) {
    //                    $(this).addClass(piece);
    //                    var stop = false;
    //                }
    //                else {
    //                    //console.log('Pick a different square');
    //                }
    //            })
    //        })
    //    })
    //    var stop = false;
    //} while(stop);

function playAgain(winner) {
    var display = $('#gameConsole');
    player1 = winner;
    display.animate({width: 200}, 1500, function() {
        $('h2').text('Play Again?');
    });
}

$( document).ready(function() {
    // Initialize display box as "Start Game" button.
    var display = $('#gameConsole');


    display.html('<h2>Start Game</h2>');
    display.on('click', function() {
        var timer = 1500;
        if(!player1 || !player2){
            player1 = prompt('Player1', 'Enter Player One Name');
            player2 = prompt('Player2', 'Enter Player Two Name');
            timer = 500;
        }

        console.log(player1 + ' vs ' + player2);
        display.animate({
            width: 475}, timer, function() {
            $('h2').text(player1 + '\'s move ... ');
            playGame(player1, player2);
        });
    })
})
//  1. Who starts? User starts first time, winner starts first after that until game is exited
//  2. player1 picks (call compPick function if it is computer pick)
//  3. call winner function to see if there is a winner yet
//  4. player2 picks (call compPick function if it is computer pick)
//  5. call winner function to see if there is a winner yet
//  6. New game or quit option (reset necessary values)
