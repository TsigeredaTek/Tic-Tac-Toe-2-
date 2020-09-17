const cells = document.querySelectorAll(".row > div");
const restartButton = document.getElementById("restart-button")
const winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

let activePlayer = "X";
let turnCount = 0;

cells.forEach(function (cell) {
    cell.addEventListener("click", function (event) {
        event.target.textContent = activePlayer;

        turnCount++;
        checkWin();
        if (activePlayer === "X") {
            activePlayer = "0"
        } else {
            activePlayer = "X"
        }
    });
});

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let XCount = 0;
        let OCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent === "X") {
                XCount++
            } else if (winningCombos[i][j].textContent === "0") {
                OCount++
            }
        }

        if (XCount === 3) {
            alert("X Wins");
            restartButton.style.display = "block";
        } else if (OCount === 3) {
            alert("0 Wins");
            restartButton.style.display = "block";
        } else if (turnCount === 9) {
            alert("Draw");
        }

    }

}

function restartGame() {
    turnCount = 0;
    activePlayer = "X";

    cells.forEach(function (cell) {
        cell.textContent = "";
    });
}








//const cells = document.querySelectorAll(".row > div");
//const winningCombos = [
//   [cells[0], cells[1], cells[2]],
//   [cells[3], cells[4], cells[5]],
//   [cells[6], cells[7], cells[8]],
//   [cells[0], cells[3], cells[6]],
//   [cells[1], cells[4], cells[7]],
//   [cells[2], cells[5], cells[8]],
//   [cells[0], cells[4], cells[8]],
//   [cells[2], cells[4], cells[6]],
//];

//let activePlayer = "X";
//let turnCount = 0;