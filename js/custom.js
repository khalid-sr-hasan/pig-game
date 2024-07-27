var scores, roundScore, activePlayer, diceDom, isPlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isPlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6 + 1);
        // document.querySelector("#current-" + activePlayer).textContent = dice;
        console.log(dice);

        // 2. Display the Result
        diceDom.style.display = "block";
        diceDom.textContent = dice;

        // 3. Update the round score IF the rolled number was NOT A 1
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent =
                roundScore;
        } else {
            nextPlayer();
        }
    }
});

// when player hold the game then add score the player score
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (isPlaying) {
        scores[activePlayer] += roundScore;

        // show the UI
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer];
        console.log(roundScore);
        if (scores[activePlayer] >= 20) {
            document.getElementById("name-" + activePlayer).textContent =
                "winner";
            diceDom.style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            isPlaying = false;
        } else {
            nextPlayer();
        }
    }
});

// next player
function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;

    diceDom = document.querySelector(".dice");
    diceDom.style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
