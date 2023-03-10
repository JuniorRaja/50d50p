const loadingText = document.querySelector(".loading-text");
const siteBg = document.querySelector(".background");

let loading = 0;
let loadInterval = setInterval(blurLoading, 10);

function blurLoading() {
  loading++;

  if (loading > 99) {
    clearInterval(loadInterval);
  }

  loadingText.innerText = `${loading}%`;
  loadingText.style.opacity = fnScale(loading, 0, 100, 1, 0);
  siteBg.style.filter = `blur(${fnScale(loading, 0, 100, 10, 0)}px)`;
}

const fnScale = (load, inMin, inMax, outMin, outMax) => {
  return ((load - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
