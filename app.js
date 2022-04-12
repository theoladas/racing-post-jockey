// SELECTORS

// function data() {
//   return {
//     data: [
//       {
//         name: "Front Plank",
//         score_1: "0-120 secs",
//         score_2: "121-210 secs",
//         score_3: "211+ secs ",
//         tip: "Engage your core and make sure you stay in a straight line.",
//         img_url: "./img/1image-front-plank.jpg",
//       },
//       {
//         name: "Side Plank",
//         score_1: "0-30 secs",
//         score_2: "31-60 secs",
//         score_3: "61-90 secs",
//         tip: "Keep your elbow directly underneath your shoulder. Keep your hips, knees and ankles in line, lifting your hip as much as possible.",
//         img_url: "./img/2image-side-plank.jpg",
//       },
//       {
//         name: "Single Leg Sit to Stand",
//         score_1: "0-10 reps",
//         score_2: "11-20 reps",
//         score_3: "21-30 reps",
//         tip: "Make sure your knee is kept in control. Drive upwards with your glutes.",
//         img_url: "./img/3image-single-leg-sit.jpg",
//       },
//       {
//         name: "Press Up",
//         score_1: "0-20 reps",
//         score_2: "21-40 reps",
//         score_3: "40 reps+",
//         tip: "Keep your body up as one. Stay in a nice straight line, as if you were doing a plank.",
//         img_url: "./img/4image-press-up.jpg",
//       },
//       {
//         name: "Double Leg Wall Sit and Hold",
//         score_1: "0-30 secs",
//         score_2: "31-60 secs",
//         score_3: "61-90 secs",
//         tip: "Squat against a wall with your legs at a 90 degree angle. Stay nice and low, focusing on quality over quantity. ",
//         img_url: "./img/5image-double-leg-sit.jpg",
//       },
//     ],
//     score: 0,
//     index: 0,
//     clicked: false,
//     results: false,
//   };
// }
const exercise1 = {
  name: "Front Plank",
  score_1: "0-120 secs",
  score_2: "121-210 secs",
  score_3: "211+ secs ",
  tip: "Engage your core and make sure you stay in a straight line.",
  img_url: "./img/1image-front-plank.jpg",
  score: 0,
};

const nextBtn = document.querySelector(".next-btn");
const pointBtn1 = document.querySelector(".point-btn1");
const pointBtn2 = document.querySelector(".point-btn2");
const pointBtn3 = document.querySelector(".point-btn3");
const spanScore = document.querySelector(".score");
let totalScore = 0;
pointBtn1.addEventListener("click", () => {
  addOnePoint();
});
pointBtn2.addEventListener("click", () => {
  addTwoPoints();
});
pointBtn3.addEventListener("click", () => {
  addThreePoints();
});

// FUNCTIONS
function addOnePoint() {
  spanScore.innerHTML = `${(this.spanScore = exercise1.score + 1)}`;
  this.clicked = true;
}
// add two points function
function addTwoPoints() {
  spanScore.innerHTML = `${(this.spanScore = exercise1.score + 2)}`;
  this.clicked = true;
}
// add three points function
function addThreePoints() {
  spanScore.innerHTML = `${(this.spanScore = exercise1.score + 3)}`;
  this.clicked = true;
}

// προχειρο

// function exercise2() {
//   const title = (document.querySelector(".exercise-title").innerHTML =
//     "SIDE PLANK (LEFT & RIGHT SIDES)");
//   const image = (document.getElementById("exercice-img").src =
//     "/img/2image-side-plank.jpg");
//   const score1Span = (document.querySelector(".point-1-span").innerHTML =
//     "0-30 secs");
//   const score2Span = (document.querySelector(".point-2-span").innerHTML =
//     "31-60 secs");
//   const score3Span = (document.querySelector(".point-3-span").innerHTML =
//     "61-90 secs");
// }

// EVENT LISTENERS
// nextBtn.addEventListener("click", () => {
//   // exercise2();
// });

// VUE
{
  /* <div v-for="(d, i) in data" :key="'data-' + i" class="col-12">
          <!-- index page -->
          <div v-if="i == index">
            <!-- image src from data -->
            <img style="align-items: center" :src="d.img_url" :alt="d.name" />
            <div class="col-12 d-flex" style="justify-content: space-between">
              <div></div>
              <div class="d-flex">
                <!-- button 1 -->
                <div class="point__card" @click="addOnePoint()">
                  <h3 class="mb-0">1 Point</h3>
                  <p class="mb-0">
                    {{ d.score_1 }}
                  </p>
                </div>
                <!-- button 2 -->
                <div class="point__card" @click="addTwoPoints()">
                  <h3 class="mb-0">2 Points</h3>
                  <p class="mb-0">
                    {{ d.score_2 }}
                  </p>
                </div>
                <div class="point__card" @click="addThreePoints()">
                  <h3 class="mb-0">3 Point</h3>
                  <p class="mb-0">
                    {{ d.score_3 }}
                  </p>
                </div>
              </div>
              <div>
                <button :disabled="!clicked" v-if="i < 4" @click="nextSlide()">
                  Next
                </button>
                <button
                  v-if="i == 4"
                  :disabled="!clicked"
                  @click="results = true"
                >
                  See results
                </button>
              </div>
            </div>
            <div class="col-12 d-flex" style="justify-content: center">
              <h5 class="mt-4"><span>TIP: </span>{{ d.tip }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container min-vh-100 min-vw-100"
      style="align-items: center; justify-content: center; display: grid"
      v-if="results"
    >
      <div>
        <h5>Your score is: {{ score }}</h5>
        <h1>
          {{ displayResult }}
        </h1>
        <button @click="reset()">RESET</button>
      </div>
    </div>

    <div class="__score" v-if="!results">
      <h1>SCORE: {{ score }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: [
        {
          name: "Front Plank",
          score_1: "0-120 secs",
          score_2: "121-210 secs",
          score_3: "211+ secs ",
          tip: "Engage your core and make sure you stay in a straight line.",
          img_url: "./img/image-front-plank.jpg",
        },
        {
          name: "Side Plank",
          score_1: "0-30 secs",
          score_2: "31-60 secs",
          score_3: "61-90 secs",
          tip: "Keep your elbow directly underneath your shoulder. Keep your hips, knees and ankles in line, lifting your hip as much as possible.",
          img_url: "./img/image-side-plank.jpg",
        },
        {
          name: "Single Leg Sit to Stand",
          score_1: "0-10 reps",
          score_2: "11-20 reps",
          score_3: "21-30 reps",
          tip: "Make sure your knee is kept in control. Drive upwards with your glutes.",
          img_url: "./img/image-single-leg-sit.jpg",
        },
        {
          name: "Press Up",
          score_1: "0-20 reps",
          score_2: "21-40 reps",
          score_3: "40 reps+",
          tip: "Keep your body up as one. Stay in a nice straight line, as if you were doing a plank.",
          img_url: "./img/image-press-up.jpg",
        },
        {
          name: "Double Leg Wall Sit and Hold",
          score_1: "0-30 secs",
          score_2: "31-60 secs",
          score_3: "61-90 secs",
          tip: "Squat against a wall with your legs at a 90 degree angle. Stay nice and low, focusing on quality over quantity. ",
          img_url: "./img/image-double-leg-sit.jpg",
        },
      ],
      score: 0,
      index: 0,
      clicked: false,
      results: false,
    };
  },

  computed: {
    //A calculated variable
    displayResult() {
      if (this.score <= 3) {
        return "NEEDS IMPROVEMENT";
      } else if (this.score <= 10) {
        return "SIGNS OF POTENTIONAL";
      } else {
        return "YOU CAN BECOME A PROFESSIONAL JOCKEY";
      }
    },
  },

  methods: {
    // add one point function
    addOnePoint() {
      this.score = this.score + 1;
      this.clicked = true;
    },
    // add two points function
    addTwoPoints() {
      this.score = this.score + 2;
      this.clicked = true;
    },
    // add three points function
    addThreePoints() {
      this.score = this.score + 3;
      this.clicked = true;
    },
    // move to next slide function
    nextSlide() {
      this.index++;
      this.clicked = false;
    },
    // reset score and start from the beginning
    reset() {
      this.score = 0;
      this.index = 0;
      this.clicked = false;
      this.results = false;
    },
  },
};
</script> */
}
