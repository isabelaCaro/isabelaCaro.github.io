var vineta1 = document.querySelector(".vineta1");
var vineta2 = document.querySelector(".vineta2");
var vineta3 = document.querySelector(".vineta3");
var rata = document.querySelector(".rata-talk");
var globo = document.querySelector(".globo");
var sturtr = document.querySelector(".sturtr");

vineta1.addEventListener("mouseover", vineta1click);
vineta2.addEventListener("mouseover", vineta2click);
vineta3.addEventListener("mouseover", vineta3click);
rata.addEventListener("click", rata_move);
globo.addEventListener("click", globoanim);
sturtr.addEventListener("click", sturtr_move);

function vineta1click() {
  let sound = new Audio('./nose/mp3')
  vineta1.classList.add("vineta1click");
  sound.play();
}
function vineta2click() {
  vineta2.classList.add("vineta2click");
}
function vineta3click() {
  vineta3.classList.add("vineta3click");
}
function rata_move() {
  rata.classList.add("rata_move");
}
function globoanim() {
  globo.classList.add("globoanim");
}
function sturtr_move () {
    sturtr.classList.add("sturtr_move");
}
  