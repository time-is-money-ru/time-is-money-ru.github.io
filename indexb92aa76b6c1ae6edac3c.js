/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/scrollbarWidthDefinder.js
let width = null;

function scrollbarWidthDefinder_getScrollbarWidth() {
  if (width !== null) {
    return width;
  }

  const div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);
  width = div.offsetWidth - div.clientWidth;

  div.remove();

  return width
}

window.addEventListener('resize', () => width = null)
;// CONCATENATED MODULE: ./src/scripts/rootStyles.js
const rootStyles = getComputedStyle(document.documentElement);

const mobileWidthPx = Number(rootStyles.getPropertyValue('--mobile-width').slice(0, -2));
const rootStyles_maxMobileWidthPx =  Number(rootStyles.getPropertyValue('--max-mobile-width').slice(0, -2));
const desktopWidthPx = Number(rootStyles.getPropertyValue('--desktop-width').slice(0, -2));
const maxDesktopWidthPx =  Number(rootStyles.getPropertyValue('--max-desktop-width').slice(0, -2));

function setScrollbarWidthToCss(widthPx) {
  document.documentElement.style.setProperty('--scroll-width', widthPx+'px');
}
;// CONCATENATED MODULE: ./src/scripts/desktopDetector.js




const isDesktop = () => {
  const windowWidth = window.innerWidth - getScrollbarWidth();

  return windowWidth > maxMobileWidthPx
}


;// CONCATENATED MODULE: ./src/scripts/scale.js




let scrollWidth = scrollbarWidthDefinder_getScrollbarWidth();
setScrollbarWidthToCss(scrollWidth)

const resetScale = () => {
  const windowWidth = window.innerWidth - scrollWidth;

  const scale =  Math.min(windowWidth, maxDesktopWidthPx) / desktopWidthPx;

  document.documentElement.style.setProperty('--scale', scale);
}

resetScale();

window.addEventListener('resize', () => {
  scrollWidth = scrollbarWidthDefinder_getScrollbarWidth();
  setScrollbarWidthToCss(scrollWidth)
  resetScale();
})
;// CONCATENATED MODULE: ./src/index.js




document.addEventListener('scroll', () => {
  if (document.documentElement.scrollLeft > 0) {
    document.documentElement.scrollLeft = 0
  }
})

/******/ })()
;