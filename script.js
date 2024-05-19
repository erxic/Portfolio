// Data untuk animasi teks pada setiap elemen
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
function typeText(index) {
  const animation = animations[index];
  const { element, text, typingSpeed, charIndex } = animation;

  if (charIndex < text.length) {
    element.innerHTML = text.substring(0, charIndex + 1);
    animation.charIndex++;
    setTimeout(function () {
      typeText(index);
    }, typingSpeed);
  }
}

// Memanggil fungsi typeText untuk setiap animasi
for (let i = 0; i < animations.length; i++) {
  typeText(i);
}

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
