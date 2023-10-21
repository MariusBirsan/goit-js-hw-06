const userInput = document.querySelector("#name-input");

const replaceTxt = document.querySelector("#name-output");

userInput.addEventListener("keypress", function (event) {
    let value = userInput.value;
    if ((event.key === "Enter") && value.length > 0) {
      replaceTxt.textContent = userInput.value;
    } else {
      replaceTxt.textContent = "Anonymous";
    }
    value = 0;
})

userInput.value = "";