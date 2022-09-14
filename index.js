const faders = document.querySelectorAll('.about-animate');
const sliders = document.querySelectorAll('.from-animate');
const test = document.querySelector('.btn-background-circle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-container');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -375px 0px',
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
