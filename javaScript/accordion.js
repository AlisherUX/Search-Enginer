"use strict"

const accordionItems = document.querySelectorAll(".accordion");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const itemsLength = accordionItems.length;


for (let i = 0; i < itemsLength; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    const accordionContent = this.nextElementSibling;
    for (let j = 0; j < itemsLength; j++) {
      if (i == j) {
        continue;
      }
      accordionHeaders[j].parentNode.classList.remove("active");
      accordionHeaders[j].nextElementSibling.style.maxHeight = null;
    }
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      this.parentNode.classList.remove("active");
    } else {
      this.parentNode.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}