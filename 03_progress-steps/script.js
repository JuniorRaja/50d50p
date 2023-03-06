const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

next.addEventListener("click", () => {
  currActive++;

  currActive > circles.length ? (currActive = circles.length) : null;
  updateProg();
});

prev.addEventListener("click", () => {
  currActive--;

  currActive < 1 ? (currActive = 1) : null;
  updateProg();
});

function updateProg() {
  circles.forEach((circle, index) => {
    index < currActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  } %`;

  //prev.disabled = false;
  //next.disabled = false;
  prev.style.display = "";
  next.style.display = "";

  if (currActive === 1) {
    //prev.disabled = true;
    prev.style.display = "none";
  } else if (currActive === circles.length) {
    //next.disabled = true;
    next.style.display = "none";
  }
}
