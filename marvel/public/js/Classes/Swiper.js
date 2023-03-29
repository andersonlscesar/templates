export class Swiper {
    constructor(swiperContainer, // O container do swiper
    swiperContent, // Os elementos / Imagens dentro do swiper
    options) {
        this.swiperContainer = swiperContainer;
        this.swiperContent = swiperContent;
        this.options = options;
        this.isDragging = false;
        this.currentIndex = 0;
        this.currentPosition = 0;
        this.startPosition = 0;
        this.currentTranslate = 0;
        this.previousTranslate = 0;
        this.moved = 0;
        this.swiperGuard = document.querySelector('#swiper-guard');
        this.swiperContainer = swiperContainer;
        this.swiperContent = swiperContent;
        this.manageEvents();
        this.enableControls();
    }
    /**
     * Função responsável por generenciar os eventos
     */
    manageEvents() {
        this.swiperContent.forEach((content, index) => {
            content.addEventListener('touchstart', this.startDragging.bind(this, index));
            content.addEventListener('mousedown', this.startDragging.bind(this, index));
            content.addEventListener('touchend', this.endDragging.bind(this));
            content.addEventListener('mouseup', this.endDragging.bind(this));
            content.addEventListener('touchmove', this.dragging.bind(this));
            content.addEventListener('mousemove', this.dragging.bind(this));
        });
    }
    /**
     * Esta função é ativada quando o usuário começa a arrastar
     * @param { number } index  Posição da imagem
     * @param { TouchEvent  | MouseEvent } e
     */
    startDragging(index, e) {
        e.preventDefault();
        this.isDragging = true;
        this.currentIndex = index;
        this.startPosition = this.getHorizontalCoordinate(e);
        requestAnimationFrame(this.animate.bind(this));
    }
    /**
     * Função é disparada quando o usuário solta a tela / click
     */
    endDragging(e) {
        e.preventDefault();
        this.isDragging = false;
        this.headForAnotherSlide();
        this.defineTransletrs();
        console.log(navigator.userAgent);
    }
    /**
     * Essa função é disparada quando o usuário fica arrastando o slide
     * @param { TouchEvent | MouseEvent } e
     */
    dragging(e) {
        if (this.isDragging) {
            this.currentPosition = this.getHorizontalCoordinate(e);
            this.currentTranslate = this.previousTranslate + this.currentPosition - this.startPosition;
        }
    }
    animate() {
        this.setSwiperTranslate();
        if (this.isDragging)
            requestAnimationFrame(this.animate.bind(this));
    }
    /**
     * Essa função realiza os calulos para a transição atual e a anterior
     */
    defineTransletrs() {
        this.currentTranslate = this.currentIndex * -window.innerWidth;
        this.previousTranslate = this.currentTranslate;
        this.setSwiperTranslate();
    }
    /**
     * Define a transição do swiper (Seu deslocamento para esquerda / direita)
     */
    setSwiperTranslate() {
        this.swiperContainer.style.transform = `translateX(${this.currentTranslate}px)`;
    }
    /**
     * Pega as coordenadas horizontais do swiper
     * @param { TouchEvent } e
     * @returns { number }
     */
    getHorizontalCoordinate(e) {
        if ('touches' in e) {
            return e.touches[0].clientX;
        }
        else {
            return e.clientX;
        }
    }
    /**
     * Verifica a possibilidade de mudar de slide
     */
    headForAnotherSlide() {
        this.moved = this.currentTranslate - this.previousTranslate;
        if (this.moved < -50 && this.currentIndex < this.swiperContent.length - 1) {
            this.currentIndex++;
        }
        else if (this.moved > 50 && this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
    /**
     * =============================================================
     * ======================== CONTROLS ===========================
     * =============================================================
     */
    /**
     * Esta função cria os componentes dos controles
     */
    createControls() {
        this.controlContainer = document.createElement('div');
        this.controlContainer.classList.add('swiper__controls');
        this.previousButton = document.createElement('i');
        this.previousButton.classList.add('fa-solid', 'fa-angle-left', 'control');
        this.nextButton = document.createElement('i');
        this.nextButton.classList.add('fa-solid', 'fa-angle-right', 'control');
        this.controlContainer.appendChild(this.previousButton);
        this.controlContainer.appendChild(this.nextButton);
    }
    /**
     * Habilita os controles no carousel / Swiper
     */
    enableControls() {
        var _a;
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.isControlsOn) {
            this.createControls();
            this.swiperGuard.appendChild(this.controlContainer);
        }
    }
}
