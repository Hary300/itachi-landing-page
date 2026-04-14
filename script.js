const overflowMenu = document.querySelector('.overflow-menu');
const mainSection = document.querySelectorAll('.main-section');
const quickInfoAside = document.querySelector('.quick-info');
const introContainer = document.querySelector('.intro-container');
const introduction = document.querySelector('.introduction');
const biography = document.querySelector('.biography');
const ability = document.querySelector('.ability');

document.addEventListener('click', function (event) {
  const isHome = event.target.closest('.nav-home');
  const isBiography = event.target.closest('.nav-biography');
  const isAbility = event.target.closest('.nav-ability');
  const isCloseBtn = event.target.closest('.close-btn');
  overflowMenu.style.display = 'none';

  if (
    event.target.closest('.hamburger-btn') ||
    isHome ||
    isBiography ||
    isAbility
  ) {
    overflowMenu.style.display = 'flex';
    if (isHome) {
      mainSection.forEach((e) => (e.style.display = 'none'));
      overflowMenu.style.display = 'none';
      introContainer.style.display = 'flex';
      quickInfoAside.style.display = 'block';
      introduction.style.display = 'flex';
    }

    if (isBiography) {
      mainSection.forEach((e) => (e.style.display = 'none'));
      overflowMenu.style.display = 'none';
      introContainer.style.display = 'none';
      quickInfoAside.style.display = 'none';
      biography.style.display = 'flex';
    }

    if (isAbility) {
      mainSection.forEach((e) => (e.style.display = 'none'));
      overflowMenu.style.display = 'none';
      introContainer.style.display = 'none';
      quickInfoAside.style.display = 'none';
      ability.style.display = 'flex';
    }
  }

  if (isCloseBtn) {
    overflowMenu.style.display = 'none';
  }
});

window.addEventListener('resize', function () {
  overflowMenu.style.display = 'none';
});
