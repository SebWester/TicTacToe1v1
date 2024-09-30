const box = document.querySelectorAll(".box");

let totalClicks = 0;
box.forEach((emptyBox) => {
  // Increment totalClicks with 1 when box is  clicked
  emptyBox.addEventListener("click", function () {
    totalClicks++;

    // Fill box with X or O if box is clicked
    if (emptyBox.innerHTML === "") {
      if (totalClicks % 2 != 0) {
        emptyBox.innerHTML = "X";
        emptyBox.style.color = "green";
      } else {
        emptyBox.innerHTML = "O";
        emptyBox.style.color = "red";
      }
    }
  });

  // Players bg-color when hovered FIX COLOR!
  if (totalClicks % 2 == 0) {
    emptyBox.addEventListener("mouseover", function () {
      if (totalClicks % 2 === 0) {
        emptyBox.style.backgroundColor = "green";
      } else {
        emptyBox.style.backgroundColor = "red";
      }
    });
  }

  emptyBox.addEventListener("mouseout", function () {
    emptyBox.style.backgroundColor = "";
  });
});
