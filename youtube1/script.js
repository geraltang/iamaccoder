const ACTIVE = 'active'

const active_video = document.querySelectorAll(
    ".main-structure .content video"
);

const menu_logo = document.querySelector("header .menu-logo");
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link = document.querySelector(".content .text-description a");

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);

main_header.innerHTML = CONTENT_INFO.island.h1;
second_header.innerHTML = CONTENT_INFO.island.h2;
paragraph.innerHTML = CONTENT_INFO.island.p;
text_link.innerHTML = "Explore"

menu_logo.addEventListener('click', () => {
    menu_logo.classList.toggle(ACTIVE);
})