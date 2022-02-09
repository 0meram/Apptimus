var ballSize = 100;
var ballSize2 = 100;
var ballSizeMinus = -50;
var ballGetBiger = true;
var ball3Work = true;

var ball = document.querySelector(".bally");
var ball2 = document.querySelector(".ball2");
var ball3 = document.querySelector(".ball3");

function ballclick() {
  if (!ball3Work) return;

  ballSize = ballSize + 50;
  ball.innerText = ballSize;
  ball.style.width = ballSize + "px";
  ball.style.height = ballSize + "px";
  if (ballSize > 450) ballSize = 50;
  if (ballSize > 300) {
    ball.style.backgroundColor = "red";
  } else {
    ball.style.backgroundColor = "orange";
  }
  if (ballSize < 250) {
    ball.style.backgroundColor = "yellow";
  }
}

function ballclick2() {
  if (!ball3Work) return;

  if (ballGetBiger == true) {
    ballSize2 = ballSize2 + 50;
  } else {
    ballSize2 = ballSize2 - 50;
  }
  ball2.innerText = ballSize2;
  ball2.style.width = ballSize2 + "px";
  ball2.style.height = ballSize2 + "px";

  if (ballSize2 > 300) {
    ball2.style.backgroundColor = "red";
  } else {
    ball2.style.backgroundColor = "orange";
  }
  if (ballSize2 < 250) {
    ball2.style.backgroundColor = "yellow";
  }
  if (ballSize2 == 500) {
    ballGetBiger = false;
  } else if (ballSize2 == 100) {
    ballGetBiger = true;
  }
}
function ballclick3() {
  if (ball3Work) {
    ball3.style.backgroundColor = "gray";
    ball3.innerText = "off";
    ball3Work = false;
  } else {
    // so for sure it has to be false
    ball3.style.backgroundColor = "green";
    ball3.innerText = "on";
    ball3Work = true;
  }
}
