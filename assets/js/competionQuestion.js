// toggle answers
$("#answers-toggle > button").on("click", function () {
  $("#answers-toggle > button").removeClass("btn-fill");
  $(this).addClass("btn-fill");
});

// set the timer
const timer = setInterval(() => {
  document.querySelector("#timer").textContent--;
  if (+$("#timer").text() === 0) {
    clearInterval(timer);
    $("#overlay").removeClass("hidden");
    $("#overlay").removeClass("fadeout");
  }
}, 1000);

$("#overlay").on("click", function (e) {
  location.reload()
});