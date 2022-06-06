const ACTIVE = 'active'

const active_video = document.querySelectorAll(
    ".main-structure .content video"
);

const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);

main_header.innerHTML = CONTENT_INFO.island.h1;
second_header.innerHTML = CONTENT_INFO.island.h2;
paragraph.innerHTML = CONTENT_INFO.island.p;
