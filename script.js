var cells = document.querySelectorAll("td");
var currentPlayer = "X";

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    event.target.textContent = currentPlayer;

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });
}
