const customers = document.querySelector(".js--customers").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".js--indicator").children;
let index = 0;

prev.addEventListener("click", function () {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
});

next.addEventListener("click", function () {
  nextSlide();
  updateCircleIndicator();
  resetTimer();
});

function circleIndicator() {
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].setAttribute("onclick", "indicateSlide(this)");
    indicator[i].id = i;
  }
}
circleIndicator();

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("active");
  }
  indicator[index].classList.add("active");
}

function prevSlide() {
  if (index == 0) {
    index = customers.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if (index == customers.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < customers.length; i++) {
    customers[i].classList.remove("active");
  }

  customers[index].classList.add("active");
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 4000);
}

function autoPlay() {
  nextSlide();
  updateCircleIndicator();
}

let timer = setInterval(autoPlay, 4000);
