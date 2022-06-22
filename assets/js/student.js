$("[data-group]").on("click", function() {
  $(this).next().toggleClass("!h-[0px]");
})