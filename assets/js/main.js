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

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});