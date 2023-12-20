let img1 = document.querySelector(".img1");

let img2 = document.querySelector(".img2");

let d1 = Math.floor(Math.random() * 6) + 1;
let d2 = Math.floor(Math.random() * 6) + 1;
if (d1 > d2) {
  document.getElementById("win").innerHTML = "Player One Win";
} else if (d1 == d2) {
  document.getElementById("win").innerHTML = "Draw";
} else {
  document.getElementById("win").innerHTML = "Player Two Win";
}

img1.setAttribute("src", "images/dice" + d1 + ".png");
img2.setAttribute("src", "images/dice" + d2 + ".png");
