// DATA

// Exercise_2 page
function exercise2() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "SIDE PLANK");
  const image = (document.getElementById("exercice-img").src =
    "/img/2image-side-plank.jpg");
  const point1 = (document.querySelector(".point-1-span").innerHTML =
    "0-30 secs");
  const point2 = (document.querySelector(".point-2-span").innerHTML =
    "31-60 secs");
  const point3 = (document.querySelector(".point-3-span").innerHTML =
    "61-90 secs");
  const tip = (document.querySelector(".tip").innerHTML =
    "Keep your elbow directly underneath your shoulder. Keep your hips, knees and ankles in line, lifting your hip as much as possible.");
  exercise2Btn.disabled = true;
  pointBtnsEnabled();
}
// Exercise_3 page
function exercise3() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "SINGLE LEG SIT TO STAND");
  const image = (document.getElementById("exercice-img").src =
    "/img/3image-single-leg-sit.jpg");
  const point1 = (document.querySelector(".point-1-span").innerHTML =
    "0-10 reps");
  const point2 = (document.querySelector(".point-2-span").innerHTML =
    "11-20 reps");
  const point3 = (document.querySelector(".point-3-span").innerHTML =
    "21-30 reps");
  const tip = (document.querySelector(".tip").innerHTML =
    "Make sure your knee is kept in control. Drive upwards with your glutes.");
  exercise3Btn.disabled = true;
  pointBtnsEnabled();
}
// Exercise_4 page
function exercise4() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "PRESS UP");
  const image = (document.getElementById("exercice-img").src =
    "/img/4image-press-up.jpg");
  const point1 = (document.querySelector(".point-1-span").innerHTML =
    "0-20 reps");
  const point2 = (document.querySelector(".point-2-span").innerHTML =
    "21-40 reps");
  const point3 = (document.querySelector(".point-3-span").innerHTML =
    "40 reps+");
  const tip = (document.querySelector(".tip").innerHTML =
    "Keep your body up as one. Stay in a nice straight line, as if you were doing a plank.");
  exercise4Btn.disabled = true;
  pointBtnsEnabled();
}
// Exercise_5 page
function exercise5() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "DOUBLE LEG WALL SIT AND HOLD");
  const image = (document.getElementById("exercice-img").src =
    "/img/5image-double-leg-sit.jpg");
  const point1 = (document.querySelector(".point-1-span").innerHTML =
    "0-30 secs");
  const point2 = (document.querySelector(".point-2-span").innerHTML =
    "31-60 secs");
  const point3 = (document.querySelector(".point-3-span").innerHTML =
    "61-90 secs");
  const tip = (document.querySelector(".tip").innerHTML =
    "Squat against a wall with your legs at a 90 degree angle. Stay nice and low, focusing on quality over quantity.");
  exercise5Btn.disabled = true;
  pointBtnsEnabled();
}
// Success Results page
function successResults() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "EXCELLENT WORK!");
  const image = (document.getElementById("exercice-img").src =
    "/img/image-fit-yes.jpg");
  document.querySelector(".point-btn1").style.display = "none";
  document.querySelector(".point-btn2").style.display = "none";
  document.querySelector(".point-btn3").style.display = "none";
  document.querySelector(".tip").style.display = "none";
  resultsBtn.disabled = true;
}
// Potential Results page
function potentialResults() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "SIGNS OF POTENTIAL");
  const image = (document.getElementById("exercice-img").src =
    "/img/image-fit-no.jpg");
  document.querySelector(".point-btn1").style.display = "none";
  document.querySelector(".point-btn2").style.display = "none";
  document.querySelector(".point-btn3").style.display = "none";
  document.querySelector(".tip").style.display = "none";
  resultsBtn.disabled = true;
}
// Unsuccesfull Results page
function unsuccessfullResults() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "NEEDS IMPROVEMENT");
  const image = (document.getElementById("exercice-img").src =
    "/img/image-fit-no.jpg");
  document.querySelector(".point-btn1").style.display = "none";
  document.querySelector(".point-btn2").style.display = "none";
  document.querySelector(".point-btn3").style.display = "none";
  document.querySelector(".tip").style.display = "none";
  resultsBtn.disabled = true;
}

// SELECTORS

// Exercise (page navigation) btns
const exercise2Btn = document.querySelector(".exercise2-btn");
const exercise3Btn = document.querySelector(".exercise3-btn");
const exercise4Btn = document.querySelector(".exercise4-btn");
const exercise5Btn = document.querySelector(".exercise5-btn");
const resultsBtn = document.querySelector(".results-btn");
const resetBtn = document.querySelector(".reset-btn");

// Disable all exercise btns
// exercise2Btn.disabled = true;
// exercise3Btn.disabled = true;
// exercise4Btn.disabled = true;
// exercise5Btn.disabled = true;
// resultsBtn.disabled = true;
// Point btns
const pointBtn1 = document.querySelector(".point-btn1");
const pointBtn2 = document.querySelector(".point-btn2");
const pointBtn3 = document.querySelector(".point-btn3");
// Span (total) Score
let spanScore = document.querySelector(".score");
// Default Score
score = 0;

// FUNCTIONS

// All point btns are enabled

function pointBtnsEnabled() {
  pointBtn1.disabled = false;
  pointBtn2.disabled = false;
  pointBtn3.disabled = false;
}
// All point btns are disabled
function pointBtnsDisabled() {
  pointBtn1.disabled = true;
  pointBtn2.disabled = true;
  pointBtn3.disabled = true;
}
// Add one point in user's span score
function addOnePoint() {
  // spanScore.innerHTML = `${(this.spanScore = score + 1)}`;
  if ((pointBtn1.clicked = true)) {
    let point1 = (spanScore.innerHTML = `${(this.spanScore =
      score + this.score++)}`);
    console.log(point1);
    pointBtnsDisabled();
  }
}
// Add two points in user's span score
function addTwoPoints() {
  if ((pointBtn2.clicked = true)) {
    let point2 = (spanScore.innerHTML = `${(this.spanScore = this.score +=
      2)}`);
    pointBtnsDisabled();
  }
}
// Add three points in user's span score
function addThreePoints() {
  // spanScore.innerHTML = `${(this.spanScore = score + 3)}`;
  // exercise2Btn.disabled = false;
  if ((pointBtn3.clicked = true)) {
    let point3 = (spanScore.innerHTML = `${(this.spanScore = this.score +=
      3)}`);
    pointBtnsDisabled();
  }
}

// EVENT LISTENERS

// Point1 button - Add one point functionality
pointBtn1.addEventListener("click", () => {
  addOnePoint();
});
// Point2 button - Add two points functionality
pointBtn2.addEventListener("click", () => {
  addTwoPoints();
});
// Point3 button - Add three points functionality
pointBtn3.addEventListener("click", () => {
  addThreePoints();
});
// Move to Exercise2 page
exercise2Btn.addEventListener("click", () => {
  exercise2();
});
// Move to Exercise3 page
exercise3Btn.addEventListener("click", () => {
  exercise3();
});
// Move to Exercise4 page
exercise4Btn.addEventListener("click", () => {
  exercise4();
});
// Move to Exercise5 page
exercise5Btn.addEventListener("click", () => {
  exercise5();
});
// Move to Results page
resultsBtn.addEventListener("click", () => {
  // if total score is greater or equal to 11
  if (Number(spanScore.innerHTML) >= 11) {
    // show Success results page
    successResults();
    // if total score is less than 11
  } else if (
    Number(spanScore.innerHTML) >= 10 ||
    Number(spanScore.innerHTML) >= 3
  ) {
    // show Improvement results page
    potentialResults();
  } else {
    unsuccessfullResults();
  }
});
// Reset App (back to Exercise1)
resetBtn.addEventListener("click", () => {
  resetApp();
});

//
function resetApp() {
  window.location.href = "index.html";
  this.score = 0;
}
