"use strict";
class Carousel {
    constructor(settings) {
        var _a;
        this.counter = 0;
        this.object = settings;
        this.createImages(settings.imagePath, settings.carouselArea);
        this.showControls((_a = settings.controls) !== null && _a !== void 0 ? _a : false, settings.carouselArea);
        this.createListeners();
    }
    createListeners() {
        var _a, _b;
        document.getElementsByClassName('carousel-img')[0].classList.add('show-image');
        (_a = this.btnRight) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.next();
        });
        (_b = this.btnLeft) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.previous();
        });
    }
    next() {
        this.counter++;
        if (this.counter >= 3) {
            this.counter = 0;
        }
        const images = document.getElementsByClassName('carousel-img');
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('show-image');
        }
        images[this.counter].classList.add('show-image');
        console.log(images.length);
    }
    previous() {
        const images = document.getElementsByClassName('carousel-img');
        if (this.counter <= 0) {
            this.counter = images.length;
        }
        this.counter--;
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('show-image');
        }
        images[this.counter].classList.add('show-image');
    }
    /**
     * Sets the image's src and append them all into the carousel area element
     * @param imagesPath
     * @param carouselArea
     */
    createImages(imagesPath, carouselArea) {
        imagesPath.forEach(image => {
            let imageElement = document.createElement('img');
            imageElement.classList.add('carousel-img');
            imageElement.addEventListener('dragstart', (e) => e.preventDefault()); // Stop the ghost dragging
            imageElement.src = image;
            carouselArea.appendChild(imageElement);
        });
    }
    showControls(controlIsUp, carouselArea) {
        if (controlIsUp) {
            this.setControls(carouselArea);
            this.btnRight = document.querySelector('.button-right');
            this.btnLeft = document.querySelector('.button-left');
        }
    }
    setControls(carouselArea) {
        const controls = [
            '<i class="fa-solid fa-angle-left button-left"></i>',
            '<i class="fa-solid fa-angle-right button-right"></i>'
        ];
        const controlsArea = document.createElement('div');
        controlsArea.classList.add('controls-area');
        controls.forEach(control => {
            controlsArea.innerHTML += control;
            carouselArea.appendChild(controlsArea);
        });
    }
    autoNextSlide() {
        setInterval(() => { this.next(); }, 4000);
    }
}
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
