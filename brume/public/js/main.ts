import { Carousel } from "./modules/Carousel.js"
import { Menu } from "./modules/Menu.js"

// Slide 

const configs = {
    imagePath: [
        'public/img/w1.jpg',
        'public/img/w2.jpg',
        'public/img/w3.jpg'
    ],

    carouselArea: <HTMLDivElement> document.querySelector('#hero')!,
    controls: true
}
const carousel = new Carousel(configs)
carousel.autoNextSlide()

// ====================================================
//Menu

const menuBars = document.querySelector('.menu-bars')!
const closeBtn = document.querySelector('.close-menu')!
const menuNav = document.querySelector('nav')!

const menu = new Menu(menuBars, menuNav, closeBtn)





