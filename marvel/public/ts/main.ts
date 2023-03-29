import { Navbar } from "./Classes/Navbar.js";
import { Swiper } from "./Classes/Swiper.js";

const controls = {
    openNavbar: document.querySelector('.menu-button') as HTMLDivElement,
    closeNavbar: document.querySelector('.nav-bar__close') as HTMLDivElement
}
const navBar = document.querySelector('.nav-bar') as HTMLDivElement;
new Navbar(controls, navBar);


const swiperContainer = document.querySelector('.swiper') as HTMLDivElement;
const swiperContent = document.querySelectorAll('.swiper__content') as NodeListOf<HTMLDivElement>;


new Swiper(swiperContainer, swiperContent, { isControlsOn: true });


