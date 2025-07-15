const scrollContainer = document.getElementById('moviesContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// How much to scroll per click
const scrollAmount = 300;

function updateButtons() {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  scrollLeftBtn.style.display = scrollContainer.scrollLeft > 0 ? 'block' : 'none';
  scrollRightBtn.style.display = scrollContainer.scrollLeft < maxScrollLeft ? 'block' : 'none';
}

scrollRightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

scrollLeftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Update buttons when scroll position changes
scrollContainer.addEventListener('scroll', updateButtons);

// Initial check
window.addEventListener('load', updateButtons);
window.addEventListener('resize', updateButtons);

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.Question');
  const answers = document.querySelectorAll('.answer');

  questions.forEach((question, idx) => {
    question.addEventListener('click', () => {
      // Close all answers
      answers.forEach((ans, i) => {
        if (i === idx) {
          ans.classList.toggle('active');
        } else {
          ans.classList.remove('active');
        }
      });
    });
  });
});