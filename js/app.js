const getElement = (element) => {
    return document.querySelector(element);
};

var dice = getElement(".dice");
var btnRollDice = getElement(".btn-roll");
var currentScore = getElement("#current-0");
var playerScore = getElement(".player-score");
var active = getElement(".active");
console.log(currentScore);

var currentSumScore = 0;
var playerSumScore = 0;

btnRollDice.addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = diceNumber;
    currentScore.textContent = currentSumScore += diceNumber;

    if (diceNumber === 1) {
        console.log("yap");
        playerScore.textContent = playerSumScore += currentSumScore;
        currentScore.textContent = currentSumScore = 0;
    }
});
