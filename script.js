var timer = 60;
var score = 0;
var hitnum = 0;

function setScore() {
  score += 1;
  document.querySelector("#scoreval").textContent = score;
}

function hit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}

function makeBubbble() {
  var jar = "";

  for (i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    jar += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = jar;
}

function runTimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector(
        ".pbtm"
      ).innerHTML = `<h1 style="color: red; font-size: 35px;">GAME OVER.</h1>`;
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  ClickedNum = Number(dets.target.textContent);
  if (ClickedNum === hitnum) {
    setScore();
    makeBubbble();
    hit();
  }
});

runTimer();
makeBubbble();
// setScore();
hit();
