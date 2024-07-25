var scores = [0, 0];
var activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
    var dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
});
