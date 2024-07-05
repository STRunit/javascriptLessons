const welcomeForm = document.getElementById("welcomeForm");
const nameInput = document.getElementById("nameInput");
const welcomeMessage = document.getElementById("welcomeMessage");
const submit = document.addEventListener(
  "submit",

  function (event) {
    event.preventDefault();
    const name = nameInput.value;
    const message = name + ", та манай хуудсанд тавтай морилно уу !";
    welcomeMessage.textContent = message;
  }
);

const button = document.getElementsByTagName(button);

button.onclick((nameInput.value = " "));
