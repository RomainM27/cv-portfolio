"use strict";

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var logoColor = document.querySelector(".logo__header svg path");
    header.classList.toggle("sticky", window.scrollY > 0);
    logoColor.classList.toggle("white", window.scrollY > 0);
  }); // intersection observer setup

  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // si 10% de l ecran est occupe par l element

  };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        var navItem = entry.target.getAttribute('id'); // add 'active' class on the navItem

        if (992 < window.visualViewport.width) {
          document.querySelector("ul li a[href=\"#".concat(navItem, "\"]")).classList.add('active');
        } else {
          document.querySelector(".mobile li a[href=\"#".concat(navItem, "\"]")).classList.add('active');
        } // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above


        if (992 < window.visualViewport.width) {
          document.querySelectorAll("header nav ul li a").forEach(function (item) {
            if (item.getAttribute("href") != "#".concat(navItem)) {
              item.classList.remove('active');
            }
          });
        } else {
          document.querySelectorAll(".mobile li a").forEach(function (item) {
            if (item.getAttribute("href") != "#".concat(navItem)) {
              item.classList.remove('active');
            }
          });
        }
      }
    });
  }, observerOptions); // Track all sections that have an `id` applied

  document.querySelectorAll('section[id]').forEach(function (section) {
    observer.observe(section);
  });
});