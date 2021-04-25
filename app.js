const burger = document.querySelector(".header-container");
const navBar = document.querySelector(".nav-links");
const cardText = document.querySelectorAll(".card-text");
const card = document.querySelectorAll('.card')

//PAGE TRANSITION
landingAnimation = () => {  
  const landRevealFirst = document.querySelector(".swipe1");
  const landRevealSecond = document.querySelector(".swipe2");
  const landRevealThird = document.querySelector(".swipe3");
  const mainText = document.querySelector(".main-txt-container");
  const burger = document.querySelector(".header-container");

  const revealPage = gsap.timeline({
    defaults: { duration: 1, ease: "expo.inOut" },
  });
  revealPage.fromTo(landRevealFirst, { x: "0%" }, { x: "100%" });
  revealPage.fromTo(landRevealSecond, { x: "0%" }, { x: "100%" }, "-=0.75");
  revealPage.fromTo(landRevealThird, { x: "0%" }, { x: "100%" }, "-=0.8");
  revealPage.fromTo(mainText, { x: "100%" }, { x: "0%" }, "-=0.9");
  revealPage.fromTo(burger, { y: "-100%" }, { y: "0%" }, "-=0.9");
};

//CURSOR ANIMATION
function cursor(e) {
  const mouse = document.querySelector(".cursor");
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

//NAV ANIMATION

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    const revealNav = gsap.timeline({
      defaults: { duration: 0.75, ease: "power2.inOut" },
    });

    revealNav.to(".line1", { rotate: "45", y: 7.5 });
    revealNav.to(".line2", { rotate: "-45", y: -7.5 }, "-=0.5");
    revealNav.to(
      ".navbar",
      { clipPath: "circle(4000px at -100% -10%)" },
      "-=0.5"
    );
    revealNav.to(
      ".main-txt-container",
      { visibility: "hidden", cursor: "none" },
      "-=0.5"
    );
    revealNav.to(
      ".top-div",
      { visibility: "hidden", cursor: "none" },
      "-=0.85"
    );
    revealNav.to(
      ".cards-container",
      { visibility: "hidden", cursor: "none" },
      "-=0.85"
    );
    revealNav.to(
      ".about-container",
      { visibility: "hidden", cursor: "none" },
      "-=0.85"
    );
    revealNav.to(
      ".contact-container",
      { visibility: "hidden", cursor: "none" },
      "-=0.85"
    );
  } else {
    e.target.classList.remove("active");
    const revealNav = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    revealNav.to(".line1", { rotate: "0", y: 0 });
    revealNav.to(".line2", { rotate: "-0", y: -0 }, "-=0.5");
    revealNav.to(
      ".navbar",
      { clipPath: "circle(50px at -100% -10%)" },
      "-=0.75"
    );
    revealNav.to(
      ".main-txt-container",
      { visibility: "visible", cursor: "none" },
      "-=0.5"
    );
    revealNav.to(
      ".cards-container",
      { visibility: "visible", cursor: "none" },
      "-=1"
    );
    revealNav.to(
      ".top-div",
      { visibility: "visible", cursor: "none" },
      "-=1"
    );
    revealNav.to(
      ".about-container",
      { visibility: "visible", cursor: "none" },
      "-=1"
    );
    revealNav.to(
      ".contact-container",
      { visibility: "visible", cursor: "none" },
      "-=1"
    );
  }
}

function revealText() {
  gsap.to(".card-text", {visibility: "visible", duration: 1})
}

//EVENTS LIST
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
// card.addEventListener("mouseover", revealText)

landingAnimation();
