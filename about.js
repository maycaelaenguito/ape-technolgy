// WELCOME
window.addEventListener('scroll', function() {
    let element = document.querySelector('.who p');
    let position = element.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
  
    if (position < screenPosition) {
      element.classList.add('visible');
    }
  });