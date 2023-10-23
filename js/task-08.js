const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

    const user = {
      email: document.querySelector('input[type="email"]').value,
      password: document.querySelector('input[type="password"]').value
    };

    if (user.email === "" || user.password === "") {
        alert("Please introduce a value in both fields!");
    } else {
        console.log(`email: ${user.email}`);
        console.log(`password: ${user.password}`);
    }

  loginForm.reset();
})


// console.log();