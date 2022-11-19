
type config = { imagePath: string[], carouselArea: HTMLDivElement, controls?: boolean }

class Carousel {
    private object: config 
    private counter: number = 0
    private btnRight: Element | null | undefined
    private btnLeft: Element | null | undefined

    constructor(settings: config) {
        this.object = settings
        this.createImages(settings.imagePath, settings.carouselArea)
        this.showControls(settings.controls ?? false, settings.carouselArea)
        this.createListeners()
    }

    private createListeners() {
        document.getElementsByClassName('carousel-img')[0].classList.add('show-image')

        this.btnRight?.addEventListener('click', () => {
            this.next()
        })
        this.btnLeft?.addEventListener('click', () => {
            this.previous()
        })
    }
    
    private next() {    
        this.counter++
        if(this.counter >= 3) {
            this.counter = 0
        }        
        const images = <HTMLCollection> document.getElementsByClassName('carousel-img')
        for(let i = 0; i < images.length; i++) {
            images[i].classList.remove('show-image')
        }
        images[this.counter].classList.add('show-image')
        console.log(images.length)
    }

    private previous() {
        const images = <HTMLCollection> document.getElementsByClassName('carousel-img')
        if(this.counter <= 0) {
            this.counter = images.length
        }
        this.counter--        
        for(let i = 0; i < images.length; i++) {
            images[i].classList.remove('show-image')
        }
        images[this.counter].classList.add('show-image')
    }

    /**
     * Sets the image's src and append them all into the carousel area element
     * @param imagesPath 
     * @param carouselArea 
     */

    private createImages(imagesPath: string[], carouselArea: HTMLDivElement): void {       
        imagesPath.forEach(image => {
            let imageElement = document.createElement('img')
            imageElement.classList.add('carousel-img')
            imageElement.addEventListener('dragstart', (e) => e.preventDefault()) // Stop the ghost dragging
            imageElement.src = image   
            carouselArea.appendChild( imageElement )         
        })
    }

    private showControls(controlIsUp: boolean, carouselArea: HTMLDivElement): void {
        if(controlIsUp) {
            this.setControls(carouselArea)
            this.btnRight = document.querySelector('.button-right')
            this.btnLeft = document.querySelector('.button-left')

        } 
    }

    private setControls(carouselArea: HTMLDivElement): void {
        const controls: string[] = [
            '<i class="fa-solid fa-angle-left button-left"></i>',
            '<i class="fa-solid fa-angle-right button-right"></i>'
        ]
        const controlsArea = document.createElement('div')
        controlsArea.classList.add('controls-area')
        controls.forEach(control => {
            controlsArea.innerHTML += control
            carouselArea.appendChild( controlsArea )
        })

    }

    autoNextSlide() {
        setInterval(() => { this.next() }, 4000)
    }
}

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

