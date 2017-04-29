var player1Symbol = "X";
var player2Symbol = "O";
var currentPlayer = "player1";
var currentPlayerSymbol = player1Symbol;
var winningSet;


$(".box").click(function() {
    if ($(this).text() == "-") {
        $(this).text(currentPlayerSymbol);
        $(this).removeClass('has-hover')
        if (isWinner()) {
            console.log(currentPlayer, "Won!")
            $(".box").unbind("click").removeClass('has-hover');
        }
        changePlayer();
    }

})

function changePlayer() {
    currentPlayer === "player1" ? makePlayer2() : makePlayer1()
}

function makePlayer1() {
    currentPlayer = "player1";
    currentPlayerSymbol = player1Symbol;
}

function makePlayer2() {
    currentPlayer = "player2";
    currentPlayerSymbol = player2Symbol;
}

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

function checkBoxes(a, b, c) {
    return $("#box"+a).text() !== "-" && $("#box"+a).text() === $("#box"+b).text() && $("#box"+a).text() === $("#box"+c).text();
}




// console.log(currentPlayer, currentPlayerSymbol);
// changePlayer();
// console.log(currentPlayer, currentPlayerSymbol);
// changePlayer();
// console.log(currentPlayer, currentPlayerSymbol);
// changePlayer();
// console.log(currentPlayer, currentPlayerSymbol);
