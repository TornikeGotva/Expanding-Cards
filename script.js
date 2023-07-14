"use strict";

let Panel = document.querySelectorAll(".panel");

Panel.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
