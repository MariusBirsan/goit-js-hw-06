const userInput = document.querySelector("input");
userInput.setAttribute('id', 'validation-input');

userInput.addEventListener("blur", function() {
    console.log(userInput.value.length);
    if (userInput.value.length <= 6) {
      userInput.classList.add("valid");
    } else {
      userInput.classList.add("invalid");
  }
});