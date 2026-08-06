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

const caseReviewForm = document.querySelector('form[name="case-review"]');

if (caseReviewForm) {
  const appointmentStatusInputs = caseReviewForm.querySelectorAll('input[name="already_scheduled"]');
  const submitButton = caseReviewForm.querySelector('#case-form-submit');
  const nextStep = caseReviewForm.querySelector('#case-form-next-step');

  const updateSubmissionPath = () => {
    const alreadyScheduled = caseReviewForm.querySelector('input[name="already_scheduled"]:checked')?.value;

    if (alreadyScheduled === 'Yes') {
      caseReviewForm.action = '/submitted.html';
      if (submitButton) submitButton.textContent = 'Submit Case & Documents';
      if (nextStep) nextStep.textContent = 'Your information will be sent to Robert. Your existing appointment will remain unchanged.';
    } else if (alreadyScheduled === 'No') {
      caseReviewForm.action = '/schedule.html';
      if (submitButton) submitButton.textContent = 'Submit Intake & Choose Appointment';
      if (nextStep) nextStep.textContent = 'Next: select your consultation date and time.';
    } else {
      if (submitButton) submitButton.textContent = 'Submit Intake';
      if (nextStep) nextStep.textContent = 'Tell us whether you already have an appointment to see what happens next.';
    }
  };

  appointmentStatusInputs.forEach((input) => input.addEventListener('change', updateSubmissionPath));

  caseReviewForm.addEventListener('submit', () => {
    const name = caseReviewForm.elements.full_name?.value?.trim() || '';
    const email = caseReviewForm.elements.email?.value?.trim() || '';
    const alreadyScheduled = caseReviewForm.querySelector('input[name="already_scheduled"]:checked')?.value;

    try {
      if (alreadyScheduled === 'No') {
        sessionStorage.setItem('rbhIntakeContact', JSON.stringify({ name, email }));
      } else {
        sessionStorage.removeItem('rbhIntakeContact');
      }
    } catch (error) {
      // Scheduling still works if browser storage is unavailable.
    }
  });

  updateSubmissionPath();
}
