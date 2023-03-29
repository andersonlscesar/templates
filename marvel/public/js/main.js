import { Navbar } from "./Classes/Navbar.js";
import { Swiper } from "./Classes/Swiper.js";
const controls = {
    openNavbar: document.querySelector('.menu-button'),
    closeNavbar: document.querySelector('.nav-bar__close')
};
const navBar = document.querySelector('.nav-bar');
new Navbar(controls, navBar);
const swiperContainer = document.querySelector('.swiper');
const swiperContent = document.querySelectorAll('.swiper__content');
new Swiper(swiperContainer, swiperContent, { isControlsOn: true });
