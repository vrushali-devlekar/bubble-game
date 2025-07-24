function makebubble(num) {
  var clutter = "";

  for (let i = 1; i <= num; i++) {
    var rn = Math.floor(Math.random() * i) + 1;
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

// makebubble(122);
