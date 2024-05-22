document.addEventListener("DOMContentLoaded", function () {
  // Data untuk animasi teks pada setiap elemen
  const animations = [
    {
      element: document.getElementById("index-animate"),
      text: "Welcome to My Dream...\n I mean My World in Internet",
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
      // Handle newline characters by adding <br>
      if (text.charAt(charIndex) === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += text.charAt(charIndex);
      }

      animation.charIndex++;
      setTimeout(() => typeText(animation), typingSpeed);
    }
  }

  // Memanggil fungsi typeText untuk setiap animasi jika elemennya ada
  animations.forEach((animation) => {
    if (animation.element) {
      typeText(animation);
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
