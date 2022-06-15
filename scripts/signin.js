function $(elm) {
  return document.querySelector(elm);
}

// make loading overlay
let flash = $(".flash");

// remove the class show from flash if the page content is loaded
window.onload = function() {
  setTimeout(() => {
    flash.classList.remove("show");
  }, 1000)
}
