// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    //starts from 40 to 0
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  //right arrow key
  const dodger_2 = document.getElementById("dodger");

function moveDodgerRight() {
    const rightNumbers = dodger_2.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

  //starts at 40px to 400px
    if (left + 40 < 400) {
      dodger_2.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

