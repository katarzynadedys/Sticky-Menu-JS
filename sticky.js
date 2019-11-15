const bannerHeight = 77;
const bannerWrapper = document.querySelector('.header');
const banner = document.querySelector('.header > .grid-container');

const handler = () => {
  const newOffset = window.scrollY || window.pageYOffset;

  if (newOffset > bannerHeight) {
      bannerWrapper.classList.add('sticky');
      bannerWrapper.classList.remove('nosticky');
      bannerWrapper.style.background = 'rgba(262, 197, 35, 0.6)';
  }
   else {
    bannerWrapper.classList.remove('sticky');
    bannerWrapper.classList.add('nosticky');
    bannerWrapper.style.backgroundColor = 'rgba(162, 197, 35, 1)';
  }
};

window.addEventListener('scroll', handler, false);
