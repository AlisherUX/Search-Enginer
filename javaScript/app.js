"use strict";

let body = document.querySelector(".body");
let opocity = document.querySelector(".background-opocity");
let closeBtn = document.querySelector(".leftMenu-exitBtn");
let menuBar = document.querySelector(".leftMenu");
let mobileBtn = document.querySelector(".header-mobilMenu_button");
let hiddenText = document.querySelector(".textSec-hiddenText");
let hiddenBtn = document.querySelector(".textSec_link");
let secondHidBtn = document.querySelector(".info-textSection_link");


//mobile menu bar open buttton
mobileBtn.addEventListener("click", ()=> {
  menuBar.classList.add("open")
})

//menu bar close button
closeBtn.addEventListener("click", ()=> {
  menuBar.classList.remove("open")
})

//opocity remove and add
mobileBtn.addEventListener("click", ()=> {
  opocity.classList.add("open")
})

closeBtn.addEventListener("click", ()=> {
  opocity.classList.remove("open")
})

//Scroll remove and add
mobileBtn.addEventListener("click", ()=> {
  body.classList.add("open")
})

closeBtn.addEventListener("click", ()=> {
  body.classList.remove("open")
})

//text
secondHidBtn.addEventListener("click", ()=> {
  hiddenText.classList.add("open")
})