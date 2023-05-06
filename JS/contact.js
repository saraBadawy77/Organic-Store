const form = document.querySelector('#myForm');
const fullnameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const phoneInput = document.querySelector('#phone');
const countryInput = document.querySelector('#country');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isFormValid = true;
  
  // Validate Full Name field
  if (fullnameInput.value === '') {
    document.querySelector('#fullnameError').textContent = 'Please enter your Full Name.';
    isFormValid = false;
  } else {
    document.querySelector('#fullnameError').textContent = '';
  }
  
  // Validate Email field
  if (emailInput.value === '') {
    document.querySelector('#emailError').textContent = 'Please enter your Email.';
    isFormValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    document.querySelector('#emailError').textContent = 'Please enter a valid Email address.';
    isFormValid = false;
  } else {
    document.querySelector('#emailError').textContent = '';
  }
  
  // Validate Address field
  if (addressInput.value === '') {
    document.querySelector('#addressError').textContent = 'Please enter your Address.';
    isFormValid = false;
  } else {
    document.querySelector('#addressError').textContent = '';
  }
  
  // Validate Phone Number field
  if (phoneInput.value === '') {
    document.querySelector('#phoneError').textContent = 'Please enter your Phone Number.';
    isFormValid = false;
  } else if (!isValidPhone(phoneInput.value)) {
    document.querySelector('#phoneError').textContent = 'Please enter a valid Phone Number.';
    isFormValid = false;
  } else {
    document.querySelector('#phoneError').textContent = '';
  }
  
  // Validate Country field
  if (countryInput.value === '') {
    document.querySelector('#countryError').textContent = 'Please enter your Country.';
    isFormValid = false;
  } else {
    document.querySelector('#countryError').textContent = '';
  }
  
  // Submit the form if all input fields are valid
  if (isFormValid) {
    form.submit();
  }
});

// Utility function to validate email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function to validate phone number
function isValidPhone(phone) {
  const phoneRegex = /^\d{11}$/;
  return phoneRegex.test(phone);
}