"use strict";

(function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var logoColor = document.querySelector(".logo__header svg path");
    header.classList.toggle("sticky", window.scrollY > 0);
    logoColor.classList.toggle("white", window.scrollY > 0);
  });
})();