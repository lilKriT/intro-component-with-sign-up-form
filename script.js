const submitBtn = document.querySelector("#submit");
const form = document.querySelector(".sign-up");
const firstNameField = document.querySelector("#first-name");
const lastNameField = document.querySelector("#last-name");
const emailField = document.querySelector("#email");
const passField = document.querySelector("#password");

const nameRegex = /^[a-z ,.'-]+$/i;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  // alert("clicked");   // it's working
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert("submitting");
  let firstName = firstNameField.value.trim();
  let lastName = lastNameField.value.trim();
  let email = emailField.value.trim();
  let password = passField.value.trim();

  //   alerting all the info
  //   alert(firstName + " " + lastName + " " + email + " " + password);
  if (!isValid(firstName, nameRegex)) {
    alert("wrong");
    firstNameField.classList.add("invalid");
  } else {
    firstNameField.classList.remove("invalid");
    alert("Name good");
  }
});

function isValid(field, regex) {
  return String(field).toLowerCase().match(regex);
}
