const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileHamburgerBtn = document.getElementById("mobile-hamburger-btn");
const sideDrawer = document.getElementById("side-drawer-btn");
const formElement = document.querySelector(".form-row");

const hamburgerBtnMobileX = document.getElementById("mobile-hamburger")
const hamburgerBtnMobile = document.querySelector(".mobile-menu-btn");

let headerScroll = document.getElementById("site-header");
let menuOpen = false;

// === Hamburger Menu Logic === //

hamburgerBtn.addEventListener("mouseleave", () => {
  if (menuOpen) {
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.classList.remove("menu-btn-clicked");
    menuOpen = false;
    console.log("Mouseleave Works!!");
  }
});

const closedMenu = function () {
  if (menuOpen) {
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.classList.remove("menu-btn-clicked");
    menuOpen = false;
    console.log("Click on X Works!!");
  } else {
    hamburgerBtn.classList.add("open");
    hamburgerBtn.classList.add("menu-btn-clicked");
    menuOpen = true;
    console.log("Opening Works");
  }
};

hamburgerBtn.addEventListener("click", closedMenu);

// === Header Drop Logic === //
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    headerScroll.style.backgroundColor = "rgba(25,25,25, 0.7)";
  } else {
    headerScroll.style.backgroundColor = "transparent";
  }
};

// === Prevent Scroll === //

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

//==== Adding button

//======================test

//=================

const aside = document.getElementById("nav-overlay-id");
const overlayList = document.getElementById("nav-overlay-list-id");

let sideDrawerOpen = false;

const mobileButtonClick = function () {
  console.log("Click Works");
  if (!sideDrawerOpen) {
    aside.classList.add("nav-overlay-open");
    overlayList.classList.add(".nav-overlay-list-open");
    formElement.classList.add("form-row-closed");
    hamburgerBtnMobile.classList.add("mobile-menu-btn.open");
    hamburgerBtnMobileX.classList.add("mobile-menu-btn__burger-open")
    sideDrawerOpen = true;
    disableScroll();
  } else {
    aside.classList.remove("nav-overlay-open");
    overlayList.classList.remove(".nav-overlay-list-open");
    formElement.classList.remove("form-row-closed");
    hamburgerBtnMobile.classList.remove("mobile-menu-btn-open");
    hamburgerBtnMobileX.classList.remove("mobile-menu-btn__burger-open")
    sideDrawerOpen = false;
    enableScroll();
  }
};

mobileHamburgerBtn.addEventListener("click", mobileButtonClick);

/*=========================================================*/

// hamburgerBtn.addEventListener("click", () => {
//   hamburgerBtn.classList.toggle("open");
//   hamburgerBtn.classList.toggle("menu-btn-clicked");
// });
