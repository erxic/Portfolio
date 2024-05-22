document.addEventListener("DOMContentLoaded", function () {
  // Data untuk animasi teks pada setiap elemen
  const animations = [
    {
      element: document.getElementById("index-animate"),
      text: "HI LET ME INTRODUCE MY SELF",
      typingSpeed: 110,
      charIndex: 0,
    },
    {
      element: document.getElementById("project-animate"),
      text: "PROJECT",
      typingSpeed: 200,
      charIndex: 0,
    },
  ];

  // Fungsi untuk mengetik teks pada setiap elemen
  function typeText(animation) {
    const { element, text, typingSpeed, charIndex } = animation;

    if (element && charIndex < text.length) {
      element.innerHTML = text.substring(0, charIndex + 1);
      animation.charIndex++;
      setTimeout(() => typeText(animation), typingSpeed);
    }
  }

  // Memanggil fungsi typeText untuk setiap animasi jika elemennya ada
  animations.forEach((animation) => {
    if (animation.element) {
      console.log(`Starting animation for element with text: ${animation.text}`);
      typeText(animation);
    } else {
      console.warn(`Element not found for text: ${animation.text}`);
    }
  });
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//contact
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this);

  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse response as JSON
    })
    .then((data) => {
      alert("Your message has been sent successfully!");
      this.reset(); // Reset the form
    })
    .catch((error) => {
      alert("There was an error sending your message. Please try again.");
      console.error("Error:", error);
    });
});
