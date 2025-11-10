   document.querySelectorAll('[data-link]').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errMessage = document.getElementById('err-message');
    const successBox = document.getElementById('form-success');

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      errName.textContent = '';
      errEmail.textContent = '';
      errMessage.textContent = '';
      successBox.style.display = 'none';

      if (nameInput.value.trim().length < 2) {
        errName.textContent = 'Please enter your name (at least 2 characters).';
        valid = false;
      }
      if (!validateEmail(emailInput.value.trim())) {
        errEmail.textContent = 'Please enter a valid email address.';
        valid = false;
      }
      if (messageInput.value.trim().length < 10) {
        errMessage.textContent = 'Message should be at least 10 characters.';
        valid = false;
      }

      if (valid) {
        // Simulate submission — in real project you'd send to server
        successBox.style.display = 'block';
        form.reset();
        setTimeout(() => successBox.style.display = 'none', 4000);
      }
    });

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // humburger menu toggle
    const toggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    toggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
      toggle.classList.toggle('open');
    });