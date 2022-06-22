$("#overlay").on("click", function (e) {
  if (e.target === document.querySelector("#overlay")) {
    $("#overlay").addClass("fadeout");
    document.querySelector("#overlay").addEventListener(
      "animationend",
      (e) => {
        e.target.classList.add("hidden");
        e.target.classList.add("fadeout");
      },
      { once: true }
    );
  }
});

$("#points-count").on("click", function (e) {
  e.preventDefault();
  $("#overlay").removeClass("hidden");
  $("#overlay").removeClass("fadeout");
});
