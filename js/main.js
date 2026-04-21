const intro = document.getElementById("intro");
const playground = document.getElementById("playground");
const startRoll = document.getElementById("start-roll");
const playBtn = document.getElementById("play-btn");
const roundNum = document.getElementById("roundNum");
const menuList = document.getElementById("menu-list");
const gameMode = document.getElementById("game-mode");

const mode = document.getElementById("mode");
const totalScore = document.getElementById("totalScore");
const sum = document.getElementById("sum");
const roundScore = document.getElementById("roundScore");

const diceContainer = document.getElementById("dice-container");
const doubles = document.getElementById("doubles");
const triples = document.getElementById("triples");

// Game state
let currentRolls = [];
let total = 0;
let round = 0;
const maxRounds = 10;

// ------------------ MODE SELECTION ------------------ //

function createDice(num) {
  diceContainer.innerHTML = "";

  for (let i = 0; i < num; i++) {
    const dice = document.createElement("div");
    dice.classList.add("dice");

    dice.innerHTML = `
      <div class="cube">
        <div class="face front">
          <div class="row h-100">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <span class="dot"></span>
            </div>
          </div>
        </div>

        <div class="face back px-5">
          <div class="row h-100">
            <div class="col-4 offset-2 d-flex flex-column justify-content-between align-items-center">
              <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            </div>
            <div class="col-2"></div>
            <div class="col-4 d-flex flex-column justify-content-between align-items-center">
              <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            </div>
          </div>
        </div>

        <div class="face right">
          <div class="row h-100">
            <div class="col-6 d-flex justify-content-start align-items-start">
              <span class="dot"></span>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-end">
              <span class="dot"></span>
            </div>
          </div>
        </div>

        <div class="face left">
          <div class="row h-100 g-0">
            <div class="col-4 d-flex flex-column justify-content-between align-items-center">
              <span class="dot"></span><span class="dot"></span>
            </div>
            <div class="col-4 d-flex justify-content-center align-items-center">
              <span class="dot"></span>
            </div>
            <div class="col-4 d-flex flex-column justify-content-between align-items-center">
              <span class="dot"></span><span class="dot"></span>
            </div>
          </div>
        </div>

        <div class="face top">
          <div class="row h-100 g-0">
            <div class="col-4 d-flex justify-content-start align-items-start">
              <span class="dot"></span>
            </div>
            <div class="col-4 d-flex justify-content-center align-items-center">
              <span class="dot"></span>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-end">
              <span class="dot"></span>
            </div>
          </div>
        </div>

        <div class="face bottom">
          <div class="row h-100">
            <div class="col-6 d-flex flex-column justify-content-between align-items-start">
              <span class="dot"></span><span class="dot"></span>
            </div>
            <div class="col-6 d-flex flex-column justify-content-between align-items-end">
              <span class="dot"></span><span class="dot"></span>
            </div>
          </div>
        </div>
      </div>
    `;

    diceContainer.appendChild(dice);
  }
}

doubles.addEventListener("click", () => {
  intro.classList.add("d-none");
  playground.classList.remove("d-none");
  mode.innerText = "Mode: 2 Dices";
  createDice(2);
});

triples.addEventListener("click", () => {
  intro.classList.add("d-none");
  playground.classList.remove("d-none");
  mode.innerText = "Mode: 3 Dices";
  createDice(3);
});

playBtn.addEventListener("click", () => {
  gameMode.classList.remove("d-none");
  menuList.classList.add("d-none");
});

// ------------------ ROUND SYSTEM ------------------ //

function updateRound() {
  round++;

  if (round > maxRounds) {
    alert(`Game Over! Final Score: ${total}`);
    startRoll.disabled = true;
    return false;
  }

  roundNum.innerHTML = `Round: ${round}`;
  return true;
}

// ------------------ PLAY FUNCTION ------------------ //

function playing() {
  if (!updateRound()) return;

  const fronts = document.querySelectorAll(".front");
  currentRolls = [];

  startRoll.disabled = true;

  let finished = 0;

  fronts.forEach((face) => {
    const cube = face.closest(".cube");
    cube.classList.add("animate");

    setTimeout(() => {
      cube.classList.remove("animate");

      const roll = Math.ceil(Math.random() * 6);
      currentRolls.push(roll);

      face.innerHTML = getDiceFace(roll);

      finished++;

      if (finished === fronts.length) {
        calculateScore();
        startRoll.disabled = false;
      }

    }, 1000);
  });
}

startRoll.addEventListener("click", playing);

// ------------------ DICE FACES ------------------ //

function getDiceFace(roll) {
  switch (roll) {
    case 1:
      return `<div class="row h-100">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <span class="dot"></span>
        </div>
      </div>`;

    case 2:
      return `<div class="row h-100">
        <div class="col-6 d-flex justify-content-start align-items-start">
          <span class="dot"></span>
        </div>
        <div class="col-6 d-flex justify-content-end align-items-end">
          <span class="dot"></span>
        </div>
      </div>`;

    case 3:
      return `<div class="row h-100 g-0">
        <div class="col-4 d-flex justify-content-start align-items-start">
          <span class="dot"></span>
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center">
          <span class="dot"></span>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-end">
          <span class="dot"></span>
        </div>
      </div>`;

    case 4:
      return `<div class="row h-100">
        <div class="col-6 d-flex flex-column justify-content-between align-items-start">
          <span class="dot"></span><span class="dot"></span>
        </div>
        <div class="col-6 d-flex flex-column justify-content-between align-items-end">
          <span class="dot"></span><span class="dot"></span>
        </div>
      </div>`;

    case 5:
      return `<div class="row h-100 g-0">
        <div class="col-4 d-flex flex-column justify-content-between align-items-center">
          <span class="dot"></span><span class="dot"></span>
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center">
          <span class="dot"></span>
        </div>
        <div class="col-4 d-flex flex-column justify-content-between align-items-center">
          <span class="dot"></span><span class="dot"></span>
        </div>
      </div>`;

    case 6:
      return `<div class="row h-100">
        <div class="col-3 offset-1 d-flex flex-column justify-content-between align-items-center">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        </div>
        <div class="col-3"></div>
        <div class="col-4 d-flex flex-column justify-content-between align-items-center">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        </div>
      </div>`;
  }
}

// ------------------ SCORE SYSTEM ------------------ //

function calculateScore() {
  const rollSum = currentRolls.reduce((a, b) => a + b, 0);
  sum.innerHTML = `Sum: ${rollSum}`;

  let score = 0;

  // doubles / triples
  if (currentRolls.every((r) => r === currentRolls[0])) {
    score = currentRolls[0];
  } else if (rollSum === 5) score = 1;
  else if (rollSum === 10) score = 2;
  else if (rollSum === 15) score = 3;
  else if (rollSum < 5) score = 0;
  else if (rollSum > 5 && rollSum < 10) score = -1;
  else if (rollSum > 10 && rollSum < 15) score = -2;
  else if (rollSum > 15) score = -3;

  roundScore.innerHTML = `Score This Round: ${score}`;

  total += score;

  // prevent negative total
  if (total < 0) total = 0;

  totalScore.innerHTML = `Total Score: ${total}`;

  console.log("Dice:", currentRolls, "Score:", score);
}
