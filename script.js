
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (rememberMeCheckbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
});

if (localStorage.getItem("username") && localStorage.getItem("password")) {
  const existingButton = document.createElement("button");
  existingButton.id = "existing";
  existingButton.textContent = "Login as existing user";

  existingButton.addEventListener("click", () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    alert(`Logged in as ${username}`);
  });

  document.body.appendChild(existingButton);
}