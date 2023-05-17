const text = document.querySelector(".introduction-text");
const background = document.querySelector(".introduction-bg");
const canImage = document.querySelector(".introduction-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

const slides = [
  {
    backgroundColor: "#C9E78A",
    text: "Pear",
    background: "img/pear/pear-bg.png",
    image: "img/pear/pear-can.png",
  },
  {
    backgroundColor: "#FFA3BE",
    text: "Apple",
    background: "img/apple/apple-bg.png",
    image: "img/apple/apple-can.png",
  },
  {
    backgroundColor: "#C1BEFF",
    text: "Exotic",
    background: "img/exotic/exotic-bg.png",
    image: "img/exotic/exotic-can.png",
  },
];

function updateSlide() {
  const currentSlide = slides[currentIndex];

  // Animação de saída do .introduction-bg
  background.classList.add("bg-out");
  text.classList.add("text-out");
  canImage.classList.add("img-out");

  setTimeout(() => {
    // Atualizar as informações
    text.textContent = currentSlide.text;
    background.innerHTML = `<img src="${currentSlide.background}" alt="">`;
    canImage.innerHTML = `<img src="${currentSlide.image}" alt="">`;
    document.body.style.backgroundColor = currentSlide.backgroundColor;
    // Animação de entrada do .introduction-bg
    background.classList.remove("bg-out");
    background.classList.add("bg-in");
    text.classList.remove("text-out");
    text.classList.add("text-in");
    canImage.classList.remove("img-out");
    canImage.classList.add("img-in");
    setTimeout(() => {
      background.classList.remove("bg-in");
      text.classList.remove("text-in");
      canImage.classList.remove("img-in");

    }, 600);
  }, 600);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
