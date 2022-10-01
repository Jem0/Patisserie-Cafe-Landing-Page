// responsive navigation menu
const nav = document.querySelector("#primary-navigation");
const navUL = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// sticky navigation
const topOfNav = nav.offsetTop;

function stickyNav() {
  if (window.scrollY > topOfNav) {
    nav.parentNode.classList.add("fixed-nav");
  } else {
    nav.parentNode.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", stickyNav);

// return to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const submitBtn = document.querySelector("#btn-subscribe");
const input = document.querySelector("#email-input");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailformat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (String(input.value).toLowerCase().match(emailformat)) {
    submitBtn.parentNode.classList.remove("invalid-email");
  } else {
    submitBtn.parentNode.classList.add("invalid-email");
  }
});

// slider
document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".handle")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".handle");
  }
  if (handle != null) onHandleClick(handle);
});

function onHandleClick(handle) {
  // looks for the nearest slider
  const slider = handle.closest(".slider-container").querySelector(".slider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  const numImages = document.querySelectorAll(".slider img").length;

  if (handle.classList.contains("left-handle") && !(sliderIndex <= 0)) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
  }
  if (
    handle.classList.contains("right-handle") &&
    (sliderIndex + 2) * 4 - numImages < 4
  ) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
  }
}
