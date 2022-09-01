const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const password2 = document.getElementById('password2');

// show error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// show Success message
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// email validation
const checkEmail = (input) => {
  const ck =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (ck.test(input.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, 'Is not valid');
  }
};

// check user input
const checkInput = (inputs) => {
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checklength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`);
  }
};

// matching password
const matchPasswd = (passwd1, passwd2) => {
  if (passwd1.value !== passwd2.value) {
    showError(passwd2, 'Password do Not match');
  }
};

const checkInputHandler = (event) => {
  event.preventDefault();
  checkInput([userName, email, password, password2]);
  checkEmail(email);
  matchPasswd(password, password2);
  checklength(userName, 3, 15);
  checklength(password, 5, 20);
};

form.addEventListener('submit', checkInputHandler);
