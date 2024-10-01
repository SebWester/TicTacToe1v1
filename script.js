const box = document.querySelectorAll(".box");

// Adds bg-color when box is hovered
function boxHover(x) {
  box.forEach((hover) => {
    if (hover.innerHTML === "") {
      hover.addEventListener("mouseover", function () {
        hover.style.cursor = "pointer";
        if (hover.innerHTML != "") {
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

        // Hover P1 = Green, hover P2 = Red
        boxHover(totalClicks);
      }
    });
  }
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
