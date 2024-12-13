document.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 190) { // Adjust the scroll value as needed
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
  });
