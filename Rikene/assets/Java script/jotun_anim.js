var rataanim = document.querySelector(".rata-pos");
var odin = document.querySelector(".odin");
var globo1anim = document.querySelector(".globo1");
var rata2anim = document.querySelector(".rata2");
var globo2anim = document.querySelector(".globo2");

rataanim.addEventListener("click", mover_rata);
odin.addEventListener("mouseover", mover_odin);
globo1anim.addEventListener("mouseover", mover_globo);
rata2anim.addEventListener("click", mover_rata2);
globo2anim.addEventListener("mouseover", mover_globo2);

rataanim.addEventListener("click", mover_rata);

function mover_rata() {
  let sound = new Audio('./sounds/grump.mp3')
  rataanim.classList.add("rata_move")
  sound.play();
}

function mover_odin() {
  odin.classList.add("odin_scroll");
}

function mover_globo() {
  globo1anim.classList.add("globo1anim");
}

function mover_rata2() {
  rata2anim.classList.add("rata2_move");
}

function mover_globo2() {
  globo2anim.classList.add("globo2anim");
}
