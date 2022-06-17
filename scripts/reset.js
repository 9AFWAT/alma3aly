// make resend counter
let resendCounter = $(".counter");

let clickable = false;

const counter = setInterval(() => {
  resendCounter.textContent--;
  if (resendCounter.textContent == 0) {
    clearInterval(counter);
    clickable = true;
  }
}, 1000);

// prevent the link from clicked before finishing the counter
let resendLink = $(".resend");

resendLink.addEventListener("click", (e) => {
  if (!clickable) {
    e.preventDefault();
    if (!$(".wait")) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode("انتظر لحظة من فضلك."));
      div.classList.add("wait");
      resendLink.appendChild(div);
      setTimeout(() => {
        resendLink.removeChild(div);
      }, 1500);
    }
  }
});
