var player1Symbol = "X";
var player2Symbol = "0";
var currentPlayer = "player1";

$(".box").click(function() {
    if ($(this).text() == "-")
        $(this).text(player1Symbol);


})
