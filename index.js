
var Dice1 = Math.floor(Math.random() * 7);
while(Dice1 == 0){
  Dice1 = Math.floor(Math.random() * 7)
}

var D1IMG = "images/dice" + Dice1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", D1IMG);



var Dice2 = Math.floor(Math.random() * 7);
while(Dice2 == 0){
  Dice2 = Math.floor(Math.random() * 7)
}
console.log(Dice1);
console.log(Dice2);
var D2IMG = "images/dice" + Dice2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", D2IMG);



if (Dice1 < Dice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
}
if (Dice2 < Dice1) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
}
if (Dice1 == Dice2) {
  document.querySelector("h1").innerHTML = "Draw!";
}

  
