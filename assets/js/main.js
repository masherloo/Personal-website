const words = document.querySelectorAll(".word");

words.forEach((word) => {
  const characters = word.textContent.split("");
  const spans = characters.map((character) => `<span>${character}</span>`);
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
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

$(document).ready(function () {
  $('form[name="EmailForm"]').on("submit", function (e) {
    e.preventDefault();
    const formData = $(this).serialize();

    $.ajax({
      url: "https://formspree.io/f/xzbqypkl",
      method: "POST",
      data: formData,
      dataType: "json",
      beforeSend: function () {
        // You can add a loading message here if you want
      },
      success: function () {
        // Display a success message or perform any action you want after successful submission
        alert("Message sent successfully!");
      },
      error: function () {
        // Display an error message or perform any action you want in case of an error
        alert("An error occurred. Please try again.");
      },
    });
  });
});

function toggleContent(event) {
  event.preventDefault();
  const extraContentId = event.target.getAttribute("data-extra-content-id");
  const extraContent = document.getElementById(extraContentId);

  extraContent.classList.toggle("show");

  const newText = event.target.textContent === "Read More" ? "Read Less" : "Read More";
  event.target.textContent = newText;
}

