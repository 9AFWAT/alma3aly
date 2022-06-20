// main image
let arrOfImages = [
  "assets/imgs/bg.png",
  "assets/imgs/bg.png",
  "assets/imgs/bg.png",
];


arrOfImages.forEach((image) => {
  let time = setInterval(() => {
    $(".image-slider").attr("src", image);
  }, 2500);
});

// competions section
$(".owl-carousel").owlCarousel({
  margin: 10,
  nav: false,
  dots: true,
  rtl: true,
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
