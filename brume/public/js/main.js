import { Carousel } from "./modules/Carousel.js";
const configs = {
    imagePath: [
        'public/img/w1.jpg',
        'public/img/w2.jpg',
        'public/img/w3.jpg'
    ],
    carouselArea: document.querySelector('#hero'),
    controls: true
};
const carousel = new Carousel(configs);
carousel.autoNextSlide();
