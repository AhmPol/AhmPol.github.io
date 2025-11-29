// script.js — collapsible categories + mailto handler

document.addEventListener('DOMContentLoaded', () => {

  // collapsible sections
  document.querySelectorAll('.category').forEach(cat => {
    const header = cat.querySelector('.cat-header');
    const body = cat.querySelector('.cat-body');

    header.addEventListener('click', () => {
      body.classList.toggle('open');
    });
  });

  // contact form handler (only once)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('c-name').value.trim();
      const email = document.getElementById('c-email').value.trim();
      const subject = document.getElementById('c-subject').value.trim() || 'Portfolio contact';
      const message = document.getElementById('c-message').value.trim();

      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

      window.location.href =
        `mailto:ahmselpol@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.scroll-down');
    if(scrollArrow){
      scrollArrow.addEventListener('click', () => {
        document.querySelector('.section').scrollIntoView({ behavior: 'smooth' });
        });
    }
  });

});
