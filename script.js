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


document.querySelectorAll('.file-native').forEach((input) => {
  input.addEventListener('change', () => {
    const wrapper = input.closest('.file-field');
    const fileName = wrapper?.querySelector('.file-name');
    if (!fileName) return;
    if (!input.files || input.files.length === 0) {
      fileName.textContent = fileName.dataset.default || 'No file selected';
      return;
    }
    fileName.textContent = input.files.length === 1 ? input.files[0].name : `${input.files.length} files selected`;
  });
});
