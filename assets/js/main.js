const words = document.querySelectorAll(".word");

words.forEach((word) => {
  const characters = word.textContent.split("");
  const spans = characters.map(
    (character) => `<span>${character}</span>`
  );
  word.innerHTML = spans.join("");
});

let currentWord = 0;
words[currentWord].classList.add("visible");

function swapWords() {
  words[currentWord].classList.remove("visible");
  currentWord = (currentWord + 1) % words.length;
  words[currentWord].classList.add("visible");
}

setInterval(swapWords, 2000);