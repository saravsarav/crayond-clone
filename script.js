// Navbar hamburger toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// FAQ accordion toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const activeQuestion = document.querySelector('.faq-question.active');
    if (activeQuestion && activeQuestion !== question) {
      activeQuestion.classList.remove('active');
      activeQuestion.nextElementSibling.classList.remove('active');
    }
    question.classList.toggle('active');
    question.nextElementSibling.classList.toggle('active');
  });
});

// Testimonial slider
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);
