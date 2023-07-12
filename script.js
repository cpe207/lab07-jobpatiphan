const firstName = document.querySelector("#first-name-input");
const lastName = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");

const submitButton = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstName.onkeyup = () => {
  firstName.classList.remove("is-valid");
  firstName.classList.remove("is-invalid");
};

lastName.onkeyup = () => {
  lastName.classList.remove("is-valid");
  lastName.classList.remove("is-invalid");
};

email.onkeyup = () => {
  email.classList.remove("is-valid");
  email.classList.remove("is-invalid");
};

password.onkeyup = () => {
  password.classList.remove("is-valid");
  password.classList.remove("is-invalid");
};

submitButton.onclick = () => {
  let isFirstName = false;
  let isLastName = false;
  let isEmail = false;
  let isPassword = false;

  if (firstName.value === "") {
    firstName.classList.remove("is-valid");
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.remove("is-invalid");
    firstName.classList.add("is-valid");
    isFirstName = true;
  }

  if (lastName.value === "") {
    lastName.classList.remove("is-valid");
    lastName.classList.add("is-invalid");
  } else {
    lastName.classList.remove("is-invalid");
    lastName.classList.add("is-valid");
    isLastName = true;
  }

  if (email.value === "" || !validateEmail(email.value)) {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    isEmail = true;
  }

  if (password.value === "" || password.value.length < 6) {
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    isPassword = true;
  }

  if (isFirstName && isLastName && isEmail && isPassword) {
    alert("Registered Successful!");
  }
};
