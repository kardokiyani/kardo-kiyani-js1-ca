// Javascript 1 Course Assignment

const form = document.querySelector("#contactFormPage");

const usersName = document.querySelector("#usersName");

const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");

const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");

const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");

const addressError = document.querySelector("#addressError");

function contactFormValidate(event) {
  event.preventDefault();
  if (checkLength(usersName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateContactEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 24) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateContactEmail(email) {
  const regEx = /\S+@\S+.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", contactFormValidate);
