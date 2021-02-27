const dark = document.getElementById("dark-mode");

dark.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "red") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "red";
  }
});
