// Selectors
const mainEl = document.querySelector('.main');
const cursorEl = document.querySelector('#cursor');

// code
mainEl.addEventListener(
    "mousemove",
    (details) => {
        cursorEl.style.left = details.x + "px";
        cursorEl.style.top = details.y + "px";
    }
);