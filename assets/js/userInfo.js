document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelector(".change").classList.remove("!hidden")
  })
})
