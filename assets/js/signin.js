// make loading overlay
let flash = $(".flash");

// check if the app is opened for the first time
if (sessionStorage.getItem("flashed")) {
  flash.classList.remove("show");
} else {
  removeOverlay();
}


// remove the class show from flash if the page content is loaded
function removeOverlay() {
  window.onload = function () {
    sessionStorage.setItem("flashed", "true");
    setTimeout(() => {
      flash.classList.remove("show");
    }, 1000);
  };
}
