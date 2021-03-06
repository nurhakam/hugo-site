// shrink navbar when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var nav = document.querySelector(".nav");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.add('scroll');
  } else {
     nav.classList.remove('scroll');
  }
};

// light and dark theme variables
var themeIcon = document.querySelector(".theme-icon");
var darkIcon = "/img/moon.svg";
var lightIcon = "/img/sun.svg";

// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("theme");
    themeIcon.src = darkIcon;
  } else {
    setTheme("dark");
    themeIcon.src = lightIcon;
  }
};

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
    themeIcon.src = lightIcon;
  } else {
    setTheme("theme");
    themeIcon.src = darkIcon;
  }
})();