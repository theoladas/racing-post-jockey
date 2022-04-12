// SELECTORS
// const exercise1 = {
//   title: "Front Plank",
//   image: document.getElementsByClassName(".exercise-image").src="1.jpg",
//   score1: 1,
//   span1: '0s - 120s',
//   score2: 1++,
//   span2: '121s - 210s',
//   score3: 2++,
//   span3: '211s+',
//   tip: document.getElementsByClassName(".tip-text"),
//   score: 0
// };
// const exercise2 = {
//   title: "Second Plank",
//   image: document.getElementsByClassName(".exercise-image").src="2.jpg",
//   score1: 1,
//   span1: '0s - 30s',
//   score2: 1++,
//   span2: '31s - 40s',
//   score3: 2++,
//   span3: '41s+',
//   tip: document.getElementsByClassName(".tip-text"),
//   score: 0
// };
const nextBtn = document.querySelector(".next");
const score = document.querySelector(".score-value");
// const score1 = 1;
// const score2 = 1++;
// const score3 = 2++;
// const score1Btn = document.querySelector('.score1');
// const score2Btn = document.querySelector('.score2');
// const score3Btn = document.querySelector('.score3');

// FUNCTIONS
function exercise2() {
  const title = (document.querySelector(".exercise-title").innerHTML =
    "BACK PLANK");
  const image = (document.getElementById("exercice-img").src = "2.jpg");
  const score1Span = (document.querySelector(".score-1-span").innerHTML =
    "test");
  const score2Span = (document.querySelector(".score-2-span").innerHTML =
    "test2");
  const score3Span = (document.querySelector(".score-3-span").innerHTML =
    "test3");
}

// EVENT LISTENERS
nextBtn.addEventListener("click", () => {
  exercise2();
});
