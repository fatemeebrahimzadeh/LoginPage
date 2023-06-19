const signupPopup = document.querySelector(".signup-popup");
const loginPopup = document.querySelector(".login-popup");

const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");

const buttonHanler = (event, panelType) => {
  event.preventDefault();
  loginPopup.classList.toggle("hidden");
  signupPopup.classList.toggle("hidden");
};

signupButton.addEventListener("click", (event) =>
  buttonHanler(event, "signup")
);
loginButton.addEventListener("click", (event) => buttonHanler(event, "login"));

// axios support
function onSubmitHanler(event) {
  event.preventDefault();
  let data = getFormData(event.target);
  console.log(data);
  //  validation check
  // data is prepared for sending to the server
}

function getFormData(form) {
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  if (Object.keys(data).length === 0) {
    console.warn("No form data found");
  }
  return data;
}
