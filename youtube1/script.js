const ACTIVE = 'active'

const active_video = document.querySelectorAll(
    ".main-structure .content video"
);

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);
