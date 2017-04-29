var player1Symbol = "X";
var player2Symbol = "O";
var currentPlayer = "Player 1";
var currentPlayerSymbol = player1Symbol;
var winningSet;

$(document).ready(initGame);

// Click function for boxes
function playerClickHandler() {
    if ($(this).text() == "-") {
        $(this).text(currentPlayerSymbol);
        $(this).removeClass('has-hover')
        if (isWinner()) {
            $(".notification").text(currentPlayer + " Wins!!")
            $(".box").unbind("click").removeClass('has-hover');
            $("#reset").css("opacity", "1").bind("click", resetHandler)
            // Change class of boxes to winner or loser class
            for (var i = 1; i <= 9; i++) {
                if (winningSet[0] == i || winningSet[1] == i || winningSet[2] == i) {
                    $("#box"+i).addClass('winner');
                }
                else $("#box"+i).addClass('loser');
            } // for loop
        }
        else changePlayer();
    }
}

// $("#reset").click(resetHandler);

function resetHandler() {
    $(".box").text("-").addClass('has-hover').removeClass('winner').removeClass('loser');
    initGame(); // initialize the game
}

function initGame() {
    $(".notification").text(currentPlayer + "'s Turn!");
    $("#reset").css("opacity", "0");
    $("#reset").unbind('click');
    $(".box").click(playerClickHandler);
}

// Change player
function changePlayer() {
    currentPlayer === "Player 1" ? makePlayer2() : makePlayer1()
    $(".notification").text(currentPlayer + "'s Turn!")
}

function makePlayer1() {
    currentPlayer = "Player 1";
    currentPlayerSymbol = player1Symbol;
}

function makePlayer2() {
    currentPlayer = "Player 2";
    currentPlayerSymbol = player2Symbol;
}

// Determine if last player action results in a winning move
function isWinner() {
    return checkRows() || checkColumns() || checkDiagonals();
}

function checkRows() {
    return checkBoxes(1, 2, 3) || checkBoxes(4, 5, 6) || checkBoxes(7, 8, 9);
}

function checkColumns() {
    return checkBoxes(1, 4, 7) || checkBoxes(2, 5, 8) || checkBoxes(3, 6, 9);
}

function checkDiagonals() {
    return checkBoxes(1, 5, 9) || checkBoxes(3, 5, 7);
}

// Check the boxes specified and determine if there is a 3-in a row
function checkBoxes(a, b, c) {
    // check if box a, b, and c are of same symbol and not '-'
    if ($("#box"+a).text() !== "-" &&
        $("#box"+a).text() === $("#box"+b).text() &&
        $("#box"+a).text() === $("#box"+c).text()) {
            winningSet = [a, b, c];
            return true;
    }
    else return false;
}
