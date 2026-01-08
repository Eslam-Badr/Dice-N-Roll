const intro = document.getElementById("intro");
const playground = document.getElementById("playground");
const startRoll = document.getElementById("start-roll");
const playBtn = document.getElementById("play-btn");
const menuList = document.getElementById("menu-list");
const gameMode = document.getElementById("game-mode");
//
const plyerName = document.getElementById("plyerName");
const mode = document.getElementById("mode");
const totalScore = document.getElementById("totalScore");
const sum = document.getElementById("sum");
const roundScore = document.getElementById("roundScore");
//
const diceContainer = document.getElementById("dice-container");
const doubles = document.getElementById("doubles");
const triples = document.getElementById("triples");
//
let currentRolls = [];
let allScore = [];

//
doubles.addEventListener("click", () => {
  intro.classList.add("d-none");
  playground.classList.remove("d-none");
  mode.innerText += " 2 Dices";
  const num = 2;

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
});

triples.addEventListener("click", () => {
  intro.classList.add("d-none");
  playground.classList.remove("d-none");
  mode.innerText += " 3 Dices";
  const num = 3;

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
});

// Play button
playBtn.addEventListener("click", () => {
  gameMode.classList.remove("d-none");
  menuList.classList.add("d-none");
});

// Roll button
// startRoll.addEventListener("click", () => {
//   const fronts = document.querySelectorAll(".front");
//   currentRolls = [];

//   fronts.forEach((face) => {
//     const cube = face.closest(".cube");

//     cube.classList.add("animate");

//     setTimeout(() => {
//       cube.classList.remove("animate");

//       const roll = Math.ceil(Math.random() * 6);
//       console.log("Rolled:", roll);
//       currentRolls.push(roll);

//       rollSum = currentRolls.reduce((total, num) => total + num, 0);

//       sum.innerHTML = `Sum: ${rollSum}`;
//       console.log(`Dice: ${currentRolls} Sum: ${rollSum}`);

//       const isSameNumber = currentRolls.every(
//         (roll) => roll === currentRolls[0]
//       );

//       let score = 0;

//       if (currentRolls.length > 1 && currentRolls.every((r) => r === currentRolls[0])) {
//         score = currentRolls[0];
//       } else if (rollSum == 5) {
//         score = 1;
//       } else if (rollSum == 10) {
//         score = 2;
//       } else if (rollSum == 15) {
//         score = 3;
//       } else if (rollSum < 5) {
//         score = 0;
//       } else if (rollSum > 5 && rollSum < 10) {
//         score = -1;
//       } else if (rollSum > 10 && rollSum < 15) {
//         score = -2;
//       } else if (rollSum > 15) {
//         score = -3;
//       }

//       roundScore.innerHTML = `Score This Round: ${score}`;

//       allScore.push(score);
//       let scores = allScore.reduce((total, num) => total + num, 0);

//       totalScore.innerHTML = `Total Score: ${scores}`

//       console.log(currentRolls);

//       switch (roll) {
//         case 1:
//           face.innerHTML = `
//           <div class="row h-100">
//             <div class="col-12 d-flex justify-content-center align-items-center">
//               <span class="dot"></span>
//             </div>
//           </div>`;
//           break;

//         case 2:
//           face.innerHTML = `
//           <div class="row h-100">
//             <div class="col-6 d-flex justify-content-start align-items-start">
//               <span class="dot"></span>
//             </div>
//             <div class="col-6 d-flex justify-content-end align-items-end">
//               <span class="dot"></span>
//             </div>
//           </div>`;
//           break;

//         case 3:
//           face.innerHTML = `
//           <div class="row h-100 g-0">
//             <div class="col-4 d-flex justify-content-start align-items-start">
//               <span class="dot"></span>
//             </div>
//             <div class="col-4 d-flex justify-content-center align-items-center">
//               <span class="dot"></span>
//             </div>
//             <div class="col-4 d-flex justify-content-end align-items-end">
//               <span class="dot"></span>
//             </div>
//           </div>`;
//           break;

//         case 4:
//           face.innerHTML = `
//           <div class="row h-100">
//             <div class="col-6 d-flex flex-column justify-content-between align-items-start">
//               <span class="dot"></span>
//               <span class="dot"></span>
//             </div>
//             <div class="col-6 d-flex flex-column justify-content-between align-items-end">
//               <span class="dot"></span>
//               <span class="dot"></span>
//             </div>
//           </div>`;
//           break;

//         case 5:
//           face.innerHTML = `
//           <div class="row h-100 g-0">
//             <div class="col-4 d-flex flex-column justify-content-between align-items-center">
//               <span class="dot"></span>
//               <span class="dot"></span>
//             </div>
//             <div class="col-4 d-flex justify-content-center align-items-center">
//               <span class="dot"></span>
//             </div>
//             <div class="col-4 d-flex flex-column justify-content-between align-items-center">
//               <span class="dot"></span>
//               <span class="dot"></span>
//             </div>
//           </div>`;
//           break;

//         case 6:
//           face.innerHTML = `
//           <div class="row h-100">
//         <div class="col-3 offset-1 d-flex flex-column justify-content-between align-items-center">
//           <span class="dot"></span>
//           <span class="dot"></span>
//           <span class="dot"></span>
//         </div>
//         <div class="col-3"></div>
//         <div class="col-4 d-flex flex-column justify-content-between align-items-center">
//           <span class="dot"></span>
//           <span class="dot"></span>
//           <span class="dot"></span>
//         </div>
//       </div>`;
//           break;
//       }
//     }, 1000);
//   });
// });

startRoll.addEventListener("click", () => {
  const fronts = document.querySelectorAll(".front");
  currentRolls = [];

  fronts.forEach((face) => {
    const cube = face.closest(".cube");
    cube.classList.add("animate");

    setTimeout(() => {
      cube.classList.remove("animate");

      const roll = Math.ceil(Math.random() * 6);
      currentRolls.push(roll);

      switch (roll) {
        case 1:
          face.innerHTML = `
          <div class="row h-100">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <span class="dot"></span>
            </div>
          </div>`;
          break;

        case 2:
          face.innerHTML = `
          <div class="row h-100">
            <div class="col-6 d-flex justify-content-start align-items-start">
              <span class="dot"></span>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-end">
              <span class="dot"></span>
            </div>
          </div>`;
          break;

        case 3:
          face.innerHTML = `
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
          </div>`;
          break;

        case 4:
          face.innerHTML = `
          <div class="row h-100">
            <div class="col-6 d-flex flex-column justify-content-between align-items-start">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="col-6 d-flex flex-column justify-content-between align-items-end">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>`;
          break;

        case 5:
          face.innerHTML = `
          <div class="row h-100 g-0">
            <div class="col-4 d-flex flex-column justify-content-between align-items-center">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="col-4 d-flex justify-content-center align-items-center">
              <span class="dot"></span>
            </div>
            <div class="col-4 d-flex flex-column justify-content-between align-items-center">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>`;
          break;

        case 6:
          face.innerHTML = `
          <div class="row h-100">
        <div class="col-3 offset-1 d-flex flex-column justify-content-between align-items-center">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="col-3"></div>
        <div class="col-4 d-flex flex-column justify-content-between align-items-center">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>`;
          break;
      }

      if (currentRolls.length === fronts.length) {
        calculateScore();
      }
    }, 1000);
  });
});

function calculateScore() {
  const rollSum = currentRolls.reduce((a, b) => a + b, 0);
  sum.innerHTML = `Sum: ${rollSum}`;

  let score = 0;

  // 🎯 DOUBLES / TRIPLES
  if (
    currentRolls.length > 1 &&
    currentRolls.every((r) => r === currentRolls[0])
  ) {
    score = currentRolls[0];
  } else if (rollSum === 5) score = 1;
  else if (rollSum === 10) score = 2;
  else if (rollSum === 15) score = 3;
  else if (rollSum < 5) score = 0;
  else if (rollSum > 5 && rollSum < 10) score = -1;
  else if (rollSum > 10 && rollSum < 15) score = -2;
  else if (rollSum > 15) score = -3;

  roundScore.innerHTML = `Score This Round: ${score}`;

  allScore.push(score);
  const total = allScore.reduce((a, b) => a + b, 0);
  totalScore.innerHTML = `Total Score: ${total}`;

  console.log("Dice:", currentRolls, "Score:", score);
}
