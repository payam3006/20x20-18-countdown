const q = console.log;

const countdownEle = document.getElementById("countdown1");
const loadingEle = document.getElementById("loading");
const newYearEle = document.getElementById("newYear");
const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");

setInterval(() => {
  let now = new Date();
  let newYear = new Date(`Jan 1, ${now.getFullYear() + 1} 00:00:00`);
  let distance = newYear.getTime() - now.getTime();

  newYearEle.innerText = `${newYear.getFullYear()}`;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEle.innerText = `${days}`;
  if (hours < 10) {
    hoursEle.innerText = `0${hours}`;
  } else {
    hoursEle.innerText = `${hours}`;
  }
  if (minutes < 10) {
    minutesEle.innerText = `0${minutes}`;
  } else {
    minutesEle.innerText = `${minutes}`;
  }
  if (seconds < 10) {
    secondsEle.innerText = `0${seconds}`;
  } else {
    secondsEle.innerText = `${seconds}`;
  }
}, 1000);

window.addEventListener("load", () => {
  setTimeout(() => {
    countdownEle.classList.remove("hidden");
    loadingEle.classList.add("hidden");
  }, 1000);
});

//////////////////loading...////////////////////
const ni = Array(12);
for (let i = 1; i <= 12; i++) {
  ni[i - 1] = document.getElementById(`n${i}`);
}

let j = 0;
setInterval(() => {
  if (j == 0) {
    ni[11].classList.remove("nowThis");
    ni[0].classList.add("nowThis");
    j += 1;
  } else {
    if (j == 11) {
      ni[10].classList.remove("nowThis");
      ni[11].classList.add("nowThis");
      j = 0;
    } else {
      ni[j - 1].classList.remove("nowThis");
      ni[j].classList.add("nowThis");
      j += 1;
    }
  }
}, 60);
