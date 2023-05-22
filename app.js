const form = document.querySelector("#form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const firstDiv = document.querySelector(".div-firstname");

const validateInputs = () => {
  const firstnameValue = firstNameInput.value.trim();
  const lastnameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passValue = passwordInput.value.trim();

  if (firstnameValue == "") {
    form.classList.add("invalid");
    firstNameInput.placeholder = "";
  } else {
    form.classList.remove("invalid");
  }

  if (lastnameValue == "") {
    lastNameInput.placeholder = "";
  }

  if (emailValue == "") {
    emailInput.placeholder = "email@example.com";
  }

  if (passValue == "") {
    passwordInput.placeholder = "";
  }
};
