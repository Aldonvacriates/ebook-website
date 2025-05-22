function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-dark");
        navbar.classList.add("navbar-sticky");
    } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.remove("navbar-sticky");
    }
  });
}
document.addEventListener("DOMContentLoaded", userScroll);

/*

//  Smooth Scroll to Sections
// Enhance navigation links to scroll smoothly instead of jumping.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Back to Top Button
// Adds a floating button that appears when you scroll down.

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


//  Dark Mode Toggle
// Let users switch between light and dark themes.

function toggleDarkMode() {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-white');
}


// Form Validation Feedback
// Give instant feedback when fields are filled out wrong.

function validateForm() {
  const email = document.querySelector('input[name="email"]');
  if (!email.value.includes('@')) {
    alert('Please enter a valid email address.');
    return false;
  }
  return true;
}

//  Live Character Counter
// Great for message fields or bios.

function updateCharCount(inputId, countId, max = 250) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(countId);
  input.addEventListener('input', () => {
    const remaining = max - input.value.length;
    counter.textContent = `${remaining} characters remaining`;
  });
}


// Copy to Clipboard
// Useful for promo codes or sharing links.

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  });
}


// Countdown Timer
// Could be for a launch, event, or promo.

function startCountdown(targetDate) {
  const timer = document.getElementById('countdown');
  setInterval(() => {
    const now = new Date();
    const distance = new Date(targetDate) - now;
    if (distance < 0) return (timer.textContent = "Time's up!");
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    timer.textContent = `${days} days remaining`;
  }, 1000);
}


// Accordion Toggle All
// Add a button that opens or closes all accordion items at once.

function toggleAllAccordions(open = true) {
  document.querySelectorAll('.accordion-collapse').forEach(item => {
    const instance = bootstrap.Collapse.getOrCreateInstance(item);
    open ? instance.show() : instance.hide();
  });
}

*/