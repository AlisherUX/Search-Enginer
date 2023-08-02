"use strict";
import { mobileBtn, closeBtn, menuBar, opocity, body } from "./variable.js";

mobileBtn.addEventListener("click", () => {
  menuBar.classList.add("open");
  opocity.style.display = "flex";
  body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  menuBar.classList.remove("open");
  opocity.style.display = "none";
  body.style.overflowY = "scroll";
});