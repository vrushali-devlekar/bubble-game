var timer = 10;
var score = 0;
var rn;
function scoreValue() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function hitValue() {
  rn = Math.floor(Math.random() * 9) + 1;
  document.querySelector("#hitval").textContent = rn;
}

function timerStart() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearTimeout(timerint);
      document.querySelector("#pbottom").innerHTML = `<div class="over">
                <h1>Game over and your score was ${score} 🥳</h1>
            </div>`;
    }
  }, 1000);
}

function makebubble(num) {
  var clutter = "";

  for (let i = 1; i <= num; i++) {
    var rn = Math.floor(Math.random() * i) + 1;
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum == rn) {
    scoreValue();
    makebubble(105);
    hitValue();
  } else {
    // score -= 10;
  }
});
hitValue();
makebubble(105);
timerStart();
