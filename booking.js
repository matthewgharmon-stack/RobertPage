(() => {
  const embed = document.querySelector('#tidycal-booking');
  if (!embed) return;

  try {
    const savedContact = sessionStorage.getItem('rbhIntakeContact');
    if (savedContact) {
      const { name, email } = JSON.parse(savedContact);
      if (name) embed.dataset.name = name;
      if (email) embed.dataset.email = email;
      const intakeConfirmation = document.querySelector('#intake-confirmation');
      if (intakeConfirmation) intakeConfirmation.hidden = false;
      sessionStorage.removeItem('rbhIntakeContact');
    }
  } catch (error) {
    // The calendar remains available without pre-filled contact details.
  }

  const script = document.createElement('script');
  script.src = 'https://tidycal.com/js/embed.js';
  script.async = true;
  document.body.appendChild(script);
})();
