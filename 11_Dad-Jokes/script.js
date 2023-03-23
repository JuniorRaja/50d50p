const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", genJokes);

genJokes();

async function genJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const result = await fetch("https://icanhazdadjoke.com", config);
  const resData = await result.json();
  jokeEl.innerHTML = resData.joke;
}
