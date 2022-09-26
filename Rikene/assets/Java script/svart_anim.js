var vineta1 = document.querySelector(".vineta1");
var vineta4 = document.querySelector(".vineta4");
var vineta3 = document.querySelector(".vineta3");

vineta1.addEventListener("click", vineta1click);
vineta3.addEventListener("click", vineta3click);
vineta4.addEventListener("mouseover", vineta4click);

function vineta1click() {
  vineta1.classList.add("vineta1click");
}

function vineta3click() {
  vineta3.classList.add("vineta3click");
}
function vineta4click() {
  vineta4.classList.add("vineta4click");
}
