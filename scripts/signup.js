// get the user location
let locationBtn = $(".location-button > button");

locationBtn.addEventListener("click", function () {
  if (window.navigator.geolocation) {
    let yourLocation = window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      let locationInput = $("#city");
      locationInput.value = `your coords is  ${latitude} , ${longitude}  (test)`;
    });
  } 
});
