"use strict";

//card section
const mainCard = document.querySelector(".main-card"),
firstCard = document.querySelectorAll(".main-card_first"),
secondCard = document.querySelectorAll(".main-card_second"),
thirdCard = document.querySelectorAll(".main-card_third");

//info section
const infoSec = document.querySelector(".info"),
textCon = document.querySelectorAll(".info-textSection"),
infoImg = document.querySelectorAll(".info-animateSec_dashboardImg");

//solar system section
const solarSec = document.querySelector(".solarSec"),
solarSystem = document.querySelectorAll(".solarSystem"),
solarText = document.querySelectorAll(".textSec");

//clients section
const clientSec = document.querySelector(".client-container"),
title = document.querySelectorAll(".client-title"),
first = document.querySelectorAll(".client-clients_firstImg"),
second = document.querySelectorAll(".client-clients_secondImg"),
third = document.querySelectorAll(".client-clients_thirdImg"),
fourth = document.querySelectorAll(".client-clients_fourthImg"),
fivth = document.querySelectorAll(".client-clients_fivthImg"),
sixth = document.querySelectorAll(".client-clients_sixthImg"),
seventh = document.querySelectorAll(".client-clients_seventhImg"),
eighth = document.querySelectorAll(".client-clients_eighthImg"),
ninth = document.querySelectorAll(".client-clients_ninthImg"),
brends = document.querySelectorAll(".client-brends");

//wave section
const waveSec = document.querySelector(".wave"),
topContent = document.querySelectorAll(".wave-topContent"),
waveWaves = document.querySelectorAll(".wave-waves"),
BtmContent = document.querySelectorAll(".wave-bottomContent");


//card section
window.addEventListener("scroll", () => {
    if (window.scrollY > mainCard.offsetTop - mainCard.clientHeight) {
        
        firstCard.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        }),
        secondCard.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        }),
        thirdCard.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        });

    }
});

//info section
window.addEventListener("scroll", () => {
    if (window.scrollY > infoSec.offsetTop - infoSec.clientHeight) {
        
        textCon.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        }),
        infoImg.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        });
    }
});

//solar system section
window.addEventListener("scroll", () => {
    if (window.scrollY > solarSec.offsetTop - solarSec.clientHeight) {
        
        solarSystem.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        }),
        solarText.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
    }
});

//clients section
window.addEventListener("scroll", () => {
    if (window.scrollY > clientSec.offsetTop - clientSec.clientHeight) {
        
        title.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        }),
        first.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        second.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        third.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        fourth.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        fivth.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        sixth.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        seventh.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        eighth.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        ninth.forEach((item) => {
            item.style = `transform: translateX(0);
                           opacity: 1;
                           z-index: 1 `;
        });
        brends.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;
                           z-index: 1 `;
        });
    }
});

//wave section
window.addEventListener("scroll", () => {
    if (window.scrollY > waveSec.offsetTop - waveSec.clientHeight) {
        
        topContent.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1; `;
        }),
        waveWaves.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;`;
        }),
        BtmContent.forEach((item) => {
            item.style = `transform: translateY(0);
                           opacity: 1;`;
        });
    }
});