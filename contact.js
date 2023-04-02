
const form = document.querySelector('form');
const fullNameInput = document.querySelector('input[name="fullName"]');
const companyInput = document.querySelector('input[name="company"]');
const emailInput = document.querySelector('input[name="email"]');
const hearAboutUsInput = document.querySelector('select[name="hearAboutUs"]');
const projectDescriptionInput = document.querySelector('textarea[name="projectDescription"]');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  let isValid = true;

  if (fullNameInput.value.trim() === '') {
    fullNameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    fullNameInput.classList.remove('is-invalid');
  }

  if (companyInput.value.trim() === '') {
    companyInput.classList.add('is-invalid');
    isValid = false;
  } else {
    companyInput.classList.remove('is-invalid');
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  if (hearAboutUsInput.value.trim() === '') {
    hearAboutUsInput.classList.add('is-invalid');
    isValid = false;
  } else {
    hearAboutUsInput.classList.remove('is-invalid');
  }

  if (projectDescriptionInput.value.trim() === '') {
    projectDescriptionInput.classList.add('is-invalid');
    isValid = false;
  } else {
    projectDescriptionInput.classList.remove('is-invalid');
  }

  if (isValid) {
    const formInputs = JSON.parse(localStorage.getItem('formInputs')) || [];
   
    const newFormInput = {
      id: Date.now(),
      fullName: fullNameInput.value.trim(),
      company: companyInput.value.trim(),
      email: emailInput.value.trim(),
      hearAboutUs: hearAboutUsInput.value.trim(),
      projectDescription: projectDescriptionInput.value.trim(),
    };
    
    formInputs.push(newFormInput);
    localStorage.setItem('formInputs', JSON.stringify(formInputs));

    form.submit();
  }
});


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
