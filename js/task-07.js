const range = document.getElementById("font-size-control");

range.addEventListener("input", function () {
  document
    .getElementById("text")
    .setAttribute("style", "font-size: " + this.value + "px;");
});
