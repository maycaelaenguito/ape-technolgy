// NAVIGATION BAR
function navigation() {
  let navbar = document.getElementById("navbar");
  let icon = document.getElementById("icon");

  if (!navbar.style.left || navbar.style.left === "-100%") {
    navbar.style.left = "0";
    icon.classList.toggle("open-toggle_btn");
  } else {
    navbar.style.left = "-100%";
    icon.classList.toggle("open-toggle_btn");
  }
}
// REVIEWS CARD SLIDER
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderCards = document.querySelectorAll('.slider-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cardWidth = sliderCards[0].offsetWidth + 30;
let position = 0;
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  position = -currentIndex * cardWidth;
  sliderWrapper.style.transform = `translateX(${position}px)`;
  nextBtn.disabled = false; 
});

nextBtn.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  const maxSliderWidth = sliderCards.length * cardWidth;
  currentIndex = Math.min(currentIndex + 1, sliderCards.length - 1);
  position = -currentIndex * cardWidth;
  if (maxSliderWidth > screenWidth) {
    position = Math.max(position, screenWidth - maxSliderWidth);
  }
  sliderWrapper.style.transform = `translateX(${position}px)`;
  if (currentIndex === sliderCards.length - 1) {
    nextBtn.disabled = true; 
  }
  prevBtn.disabled = false; 

  console.log(sliderCards.length)
});

window.addEventListener('resize', () => {
  currentIndex = 0;
  position = 0;
  cardWidth = sliderCards[0].offsetWidth + 30;
  sliderWrapper.style.transform = `translateX(${position}px)`;
  nextBtn.disabled = false; 
  prevBtn.disabled = true; 
});

prevBtn.disabled = true; 

// CLIENT LOGO SCROLLER
function checkLogoRowWidth() {
  var logoRow = document.querySelector('.logo-row');
  if (logoRow.scrollWidth > logoRow.clientWidth) {
    logoRow.classList.add('scrollable');
  } else {
    logoRow.classList.remove('scrollable');
  }
}

window.addEventListener('load', checkLogoRowWidth);
window.addEventListener('resize', checkLogoRowWidth);

// WELCOME
window.addEventListener('scroll', function() {
  let element = document.querySelector('.who p');
  let position = element.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    element.classList.add('visible');
  }
});





// var openNav = false;
// function navBtn()
// {
//   if(!openNav)
//   {
//     document.querySelector("#mobileNav").style.display = "block";
//     openNav = true;
//   }
//   else
//   {
//     document.querySelector("#mobileNav").style.display = "none";
//     openNav = false;
//   }
// }




