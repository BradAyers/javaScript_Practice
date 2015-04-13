/** #####################################
 *  # Created by BA.Ayers on 3/26/2015. #
 ##################################### */

// Tic Tac Toe game

//  1. Initialize ticTacToe object (board)
var board = {row1: [0, 1, 2], row2: [3, 4, 5], row3: [6, 7, 8]};

var hilite = {    // THIS IS GLOBAL FOR NOW FOR TESTING. MAY REMOVE IT LATER ONCE ALL IS WORKING
    1: ['T1', 'I', 'C1'], 2: ['T2', 'A', 'C2'], 3: ['T3', 'O', 'E'], 4: ['T1', 'T2', 'T3'], 5: ['I', 'A', 'O']
    , 6: ['C1', 'C2', 'E'], 7: ['T1', 'A', 'E'], 8: ['C1', 'A', 'T3']
};

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
    $.each(hilite,function(tileGroup, arr) {
        arr.forEach(function(idx) {
            $(this).removeClass('.active');
        })
    })

    // Start picking squares
    var mySquare = $('.square');
    mySquare.on('click', function(idx) {
        var index = $(this).index();
        if (squareOpen(index, piece)) {
            $(this).addClass(piece);
            if (winner()) {
                hiliteWinner(winner()[1]); // Pass the position of the winning row to be highlighted
                $('h2').text("Good game " + currPlayer + "! " + piece + " wins!")
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
    })
}

function winner() { // Checks for winner. Will return true or false for winner, plus winning position for hi-lighting
    if (testHor()) {return (testHor())}
    if (testVert()) {return (testVert())}
    if (testDiag()) {return (testDiag())}
    return false;
}


// FUNCTION TO TEST HORIZONTAL ROWS FOR A WINNER
function testHor() {
    // Define winners
    var xWins = ['X', 'X', 'X'];
    var yWins = ['O', 'O', 'O'];
    for (row = 1; row < 4; row++) {
        var thisRow = "row" + row;
        var winner =_.isEqual(board[thisRow], xWins) || _.isEqual(board[thisRow], yWins);
        if (winner) {
            //return winner;
            return [true, row];
        }
    }
    return false;
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
        if (winner === true){return [true, idx + 4]};
        winner = true;
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            winner = board[thisRow][idx] === "O" ? true : false; // testing for O winner
        }
        if (winner === true){return [true, idx + 4]};
    }
    return winner;
}

// FUNCTION TO TEST DIAGONAL ROWS FOR A WINNER (TESTED AND WORKING)
function testDiag() {
    var winner;
    var gamePiece = "X"; // TEST FOR X WINNER FIRST
    for (i = 1; i < 3; i++) { // LOOPS TWICE TO CHECK FOR X WINNER, THEN O WINNER
        winner = true;
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            var idx = row - 1;
            winner = board[thisRow][idx] === gamePiece ? true : false;
        }
        if (winner === true) {
            return [true, 7];
        }

        var idx = 3;
        winner = true
        for (row = 1; (row < 4) && (winner === true); row++) {
            var thisRow = "row" + row;
            idx--;
            winner = board[thisRow][idx] === gamePiece ? true : false;
        }
        if (winner === true) {
            return [true, 8]; // gamePiece
        }
        gamePiece = "O"; // NOW LOOP AGAIN TO TEST FOR O WINNER
    }
    return winner;
}

function squareOpen(idx, marker) {  // THIS FUNCTION CHECKS TO CONFIRM THAT THE SQUARE PLAYED IS OPEN
    var index = idx;
    if ((idx - 6) >= 0) { // The square is in row3
        index = idx - 6;
        if (board['row3'][index] === idx) { // there is no X or O here
            board['row3'][index] = marker;
            return true;
        }
    }
    else if ((idx - 3) >= 0) { // The square is in row2
        index = idx - 3;
        if (board['row2'][index] === idx) { // there is no X or O here
            board['row2'][index] = marker;
            return true;
        }
    }
    else {  // The square is in row1
        if (board['row1'][index] === idx) { // there is no X or O here
            board['row1'][index] = marker;
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
function hiliteWinner(winningRow) {
    var hilite = {    // THIS OBJECT CONTAINS ARRAYS OF THE WINNING CLASSES TO BE ACTIVATED
        1: ['T1', 'I', 'C1'], 2: ['T2', 'A', 'C2'], 3: ['T3', 'O1', 'E'], 4: ['T1', 'T2', 'T3'], 5: ['I', 'A', 'O1']
        , 6: ['C1', 'C2', 'E'], 7: ['T1', 'A', 'E'], 8: ['C1', 'A', 'T3']
    };
    for (i = 0; i < 3; i++) {
        $('.' + hilite[winningRow][i]).addClass('active');
    }
}

function playAgain(winner) {
    var display = $('#gameConsole');
    player1 = winner;
    display.animate({width: 200}, 4500, function() {
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
            //$('h2').text('Please Enter Player One Name');
            //$('h2').text('Please Enter Player Two Name');
            player2 = prompt('Player2', 'Enter Player Two Name');
            timer = 500;
        }
        display.animate({
            width: 475}, timer, function() {
            $('h2').text(player1 + '\'s move ... ');
            //display.html('<form><input type = "text" name = "player1" placeholder = "Enter Player One Name" id = "player1" /></form>');
            //player1 = document.getElementById("player1");
            //$('h2').text('Enter Player One Name');
            playGame(player1, player2);
        });
    })
})

//    ####### MY INITIAL LOGIC BELOW ON HOW TO BEGIN ORGANIZING MY PROGRAMMING INTO STEPS #######
//
//  1. Who starts? User starts first time, winner starts first after that until game is exited
//  2. player1 picks (call compPick function if it is computer pick)
//  3. call winner function to see if there is a winner yet
//  4. player2 picks (call compPick function if it is computer pick)
//  5. call winner function to see if there is a winner yet
//  6. New game or quit option (reset necessary values)
