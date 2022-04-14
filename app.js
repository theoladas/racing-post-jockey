// DATA
// Exercise_2
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
    "TIP: Keep your elbow directly underneath your shoulder. Keep your hips, knees and ankles in line, lifting your hip as much as possible.");
  exercise2Btn.disabled = true;
  pointBtnsEnabled();
}
// Exercise_3
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
    "TIP: Make sure your knee is kept in control. Drive upwards with your glutes.");
  exercise3Btn.disabled = true;
  pointBtnsEnabled();
}
// Exercise_4
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
    "TIP: Keep your body up as one. Stay in a nice straight line, as if you were doing a plank.");
  exercise4Btn.disabled = true;
  pointBtnsEnabled();
}
// Exercise_5
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
    "TIP: Squat against a wall with your legs at a 90 degree angle. Stay nice and low, focusing on quality over quantity.");
  exercise5Btn.disabled = true;
  pointBtnsEnabled();
}
// Success Results
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
// Unsuccessful  Results
function unSuccessResults() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "SIGNS OF IMPROVEMENT");
  const image = (document.getElementById("exercice-img").src =
    "/img/image-fit-no.jpg");
  document.querySelector(".point-btn1").style.display = "none";
  document.querySelector(".point-btn2").style.display = "none";
  document.querySelector(".point-btn3").style.display = "none";
  document.querySelector(".tip").style.display = "none";
  resultsBtn.disabled = true;
}

// SELECTORS
// Next exercise's btns
const exercise2Btn = document.querySelector(".exercise2-btn");
const exercise3Btn = document.querySelector(".exercise3-btn");
const exercise4Btn = document.querySelector(".exercise4-btn");
const exercise5Btn = document.querySelector(".exercise5-btn");
const resultsBtn = document.querySelector(".results-btn");
// Disable all exercise's buttons
// exercise2Btn.disabled = true;
// exercise3Btn.disabled = true;
// exercise4Btn.disabled = true;
// exercise5Btn.disabled = true;
// resultsBtn.disabled = true;
// Point btns
const pointBtn1 = document.querySelector(".point-btn1");
const pointBtn2 = document.querySelector(".point-btn2");
const pointBtn3 = document.querySelector(".point-btn3");
// Span Score
let spanScore = document.querySelector(".score");
// Score
score = 0;

// FUNCTIONS
// All point btns enabled
function pointBtnsEnabled() {
  pointBtn1.disabled = false;
  pointBtn2.disabled = false;
  pointBtn3.disabled = false;
}
// All point btns disabled
function pointBtnsDisabled() {
  pointBtn1.disabled = true;
  pointBtn2.disabled = true;
  pointBtn3.disabled = true;
}
// Add one point in user's display score
function addOnePoint() {
  // spanScore.innerHTML = `${(this.spanScore = score + 1)}`;
  if ((pointBtn1.clicked = true)) {
    let point1 = (spanScore.innerHTML = `${(this.spanScore = score++)}`);
    pointBtnsDisabled();
  }
}
// Add two points in user's display score
function addTwoPoints() {
  if ((pointBtn2.clicked = true)) {
    let point2 = (spanScore.innerHTML = `${(this.spanScore = this.score +=
      2)}`);
    pointBtnsDisabled();
  }
}
// Add three points in user's display score
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
pointBtn1.addEventListener("click", () => {
  addOnePoint();
});
pointBtn2.addEventListener("click", () => {
  addTwoPoints();
});
pointBtn3.addEventListener("click", () => {
  addThreePoints();
});
exercise2Btn.addEventListener("click", () => {
  exercise2();
});
exercise3Btn.addEventListener("click", () => {
  exercise3();
});
exercise4Btn.addEventListener("click", () => {
  exercise4();
});
exercise5Btn.addEventListener("click", () => {
  exercise5();
});
resultsBtn.addEventListener("click", () => {
  if (Number(spanScore.innerHTML) >= 11) {
    successResults();
  } else {
    unSuccessResults();
  }
});
