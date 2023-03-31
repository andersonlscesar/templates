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
new Swiper(swiperContainer, swiperContent, { isControlsOn: false });
const swiperContainerVisible = document.querySelector('.swiper-more-visible');
const swiperContentVisible = document.querySelectorAll('.swiper-more-visible__container');
new Swiper(swiperContainerVisible, swiperContentVisible, { isControlsOn: false, visibles: 3, isCentered: true });
const swiperContainerVisibleII = document.querySelector('.swiper-tv-show');
const swiperContentVisibleII = document.querySelectorAll('.swiper-show');
new Swiper(swiperContainerVisibleII, swiperContentVisibleII, { isControlsOn: false, visibles: 3, isCentered: true });
