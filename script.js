const menuButton = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach((faq) => {
      faq.classList.remove('active');
      const sign = faq.querySelector('button span');
      if (sign) sign.textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      const sign = item.querySelector('button span');
      if (sign) sign.textContent = '−';
    }
  });
});
