"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".lds-circle");
    const background = document.querySelector(".background");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000),
    setTimeout(() => {
        background.style.opacity = "0";
        setTimeout(() => {
            background.style.display = "none";
        }, 500);
    }, 1000);
});