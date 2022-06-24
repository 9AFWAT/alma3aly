document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelector(".change").classList.remove("!hidden");
  });
});

if (localStorage.getItem("loadedImage")) {
  $(".user-image").attr("src", JSON.parse(localStorage.getItem("loadedImage")));
}

$(".camera-file-upload").on("click", function () {
  document.querySelector(".upload-user-img").click();
});

$(".upload-user-img").on("change", function () {
  const reader = new FileReader();

  reader.onload = function () {
    $(".user-image").attr("src", reader.result);
    localStorage.setItem("loadedImage", JSON.stringify(reader.result));
  };

  reader.readAsDataURL(this.files[0]);
});
