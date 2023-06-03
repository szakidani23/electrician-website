const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Show initial slide
showSlide(slideIndex);

// Previous button click event
prevBtn.addEventListener('click', () => {
  showSlide(slideIndex -= 1);
});

// Next button click event
nextBtn.addEventListener('click', () => {
  showSlide(slideIndex += 1);
});

// Touch event handling
sliderContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', () => {
  // Determine swipe direction
  if (touchEndX < touchStartX) {
    showSlide(slideIndex += 1);
  } else if (touchEndX > touchStartX) {
    showSlide(slideIndex -= 1);
  }

  touchStartX = 0;
  touchEndX = 0;
});

function showSlide(index) {
  const slides = document.querySelectorAll('.slider-container img');

  // Wrap slide index within the range of slides length
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[slideIndex].style.display = 'block';
}
