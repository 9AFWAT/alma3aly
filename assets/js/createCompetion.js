if ($(".color-checker").val() === null) {
  $(".color-checker").css("color", "#9ca3af");
}

$(".color-checker").on("change", function () {
  if ($(".color-checker").val() === null) {
    $(this).css("color", "#9ca3af");
  } else {
    $(this).css("color", "#000");
  }
});

// click on the upload file button
$(".upload").on("click", function () {
  $(this).prev().click();
});




