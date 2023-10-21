
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);

const incrementButton = document.querySelector(
  "button[data-action='increment']"
);

const displayedValue = document.querySelector("#value");

let value = 0;



decrementButton.addEventListener("click", function () {
    --value;
    displayedValue.textContent = value;
});

incrementButton.addEventListener("click", function () {
    ++value;
    displayedValue.textContent = value;
});
