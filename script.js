const resetBtn = document.getElementById("resetBtn");
const box = document.querySelectorAll(".box");
const winBox = document.getElementById("winner");

// Adds bg-color when box is hovered
function boxHover(x) {
  box.forEach((hover) => {
    if (hover.innerHTML === "") {
      hover.addEventListener("mouseover", function () {
        hover.style.cursor = "pointer";
        if (hover.innerHTML != "" || totalClicks === 420) {
          hover.style.cursor = "not-allowed";
          hover.removeEventListener;
        } else if (x % 2 === 0) {
          hover.classList.remove("redHover");
          hover.classList.add("greenHover");
        } else {
          hover.classList.remove("greenHover");
          hover.classList.add("redHover");
        }
      });
    }
    // Removing all classLists when box not hovered
    hover.addEventListener("mouseout", function () {
      hover.classList.remove("greenHover");
      hover.classList.remove("redHover");
    });
  });
}

let totalClicks = 0;
boxHover(totalClicks);

// Game logic
box.forEach((emptyBox) => {
  // Box clickable if box is empty
  if (emptyBox.innerHTML === "") {
    emptyBox.addEventListener("click", function () {
      if (emptyBox.innerHTML === "") {
        // Increment totalClicks by 1 when clicked
        totalClicks++;
        console.log("Clicks: " + totalClicks);
        // Change cursor to not-allowed when clicked
        emptyBox.style.cursor = "not-allowed";

        // Fill box with X or O based on totalClicks
        if (totalClicks % 2 != 0) {
          emptyBox.innerHTML = "X";
          emptyBox.classList.remove("filledRed");
          emptyBox.classList.add("filledGreen");
        } else {
          emptyBox.innerHTML = "O";
          emptyBox.classList.remove("filledGreen");
          emptyBox.classList.add("filledRed");
        }

        // Check if someone wins
        const winner = checkWinner();
        if (winner) {
          winBox.style.display = "flex";
          winBox.innerHTML = `${winner} wins!`;
          // No hover if totalClicks = 420, magic numbers ftw
          totalClicks = 420;

          if (winner === "X") {
            document.body.classList.add("greenWinner");
            winBox.style.backgroundColor = "rgba(0, 100, 0, 0.6)";
          } else if (winner === "O") {
            document.body.classList.add("redWinner");
            winBox.style.backgroundColor = "rgba(100, 0, 0, 0.6)";
          }
          console.log(`${winner} wins!`);
        }

        // Hover P1 = Green, hover P2 = Red
        boxHover(totalClicks);
      }
    });
  }
  // Reset logic here
  resetBtn.addEventListener("click", function () {
    // Reset game board
    emptyBox.innerHTML = "";
    emptyBox.classList.remove("filledGreen");
    emptyBox.classList.remove("filledRed");
    document.body.classList.remove("greenWinner");
    document.body.classList.remove("redWinner");
    winBox.style.display = "none";
    totalClicks = 0;
  });
});

// All unique boxes
// Row one
const boxA = document.getElementById("a");
const boxB = document.getElementById("b");
const boxC = document.getElementById("c");
// Row two
const boxD = document.getElementById("d");
const boxE = document.getElementById("e");
const boxF = document.getElementById("f");
// Row one
const boxG = document.getElementById("g");
const boxH = document.getElementById("h");
const boxI = document.getElementById("i");
// Array with all boxes
const allboxes = [
  [boxA, boxB, boxC], // Row one
  [boxD, boxE, boxF], // Row two
  [boxG, boxH, boxI], // Row three
];

// Win game-logic
const winningCombinations = [
  // ROWS
  [allboxes[0][0], allboxes[0][1], allboxes[0][2]],
  [allboxes[1][0], allboxes[1][1], allboxes[1][2]],
  [allboxes[2][0], allboxes[2][1], allboxes[2][2]],
  // COLS
  [allboxes[0][0], allboxes[1][0], allboxes[2][0]],
  [allboxes[0][1], allboxes[1][1], allboxes[2][1]],
  [allboxes[0][2], allboxes[1][2], allboxes[2][2]],
  // VERTICALLY
  [allboxes[0][0], allboxes[1][1], allboxes[2][2]],
  [allboxes[0][2], allboxes[1][1], allboxes[2][0]],
];

function checkWinner() {
  // for-of-loop, iterating through winningCombination
  for (let combination of winningCombinations) {
    const [box1, box2, box3] = combination;

    // Check if all boxes has the same innerHtml and not empty
    if (
      box1.innerHTML !== "" &&
      box1.innerHTML === box2.innerHTML &&
      box1.innerHTML === box3.innerHTML
    ) {
      return box1.innerHTML; // Returns X or O
    }
  }
  return null; // While no winner
}
