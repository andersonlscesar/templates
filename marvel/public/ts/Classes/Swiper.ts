interface Controls {
    isControlsOn: boolean;
}


export class Swiper<T extends HTMLDivElement> // Constraint
{
    private isDragging:         boolean = false;
    private currentIndex:       number = 0;
    private currentPosition:    number = 0;
    private startPosition:      number = 0;
    private currentTranslate:   number = 0;
    private previousTranslate:  number = 0;
    private moved: number = 0;

    private swiperGuard = document.querySelector('#swiper-guard') as HTMLDivElement;    
    private controlContainer!: HTMLDivElement;
    private previousButton!: HTMLElement;
    private nextButton!: HTMLElement;

    constructor
    (
        private swiperContainer: T, // O container do swiper
        private swiperContent: NodeListOf<T>, // Os elementos / Imagens dentro do swiper
        private options?: Controls
    )   
    {
        this.swiperContainer = swiperContainer;
        this.swiperContent = swiperContent;
        this.manageEvents();
        this.enableControls();
    }

    /**
     * Função responsável por generenciar os eventos
     */

    private manageEvents(): void 
    {
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

    private startDragging(index: number, e: TouchEvent | MouseEvent): void 
    {
        e.preventDefault();
        this.isDragging = true;
        this.currentIndex = index;
        this.startPosition = this.getHorizontalCoordinate(e);
        requestAnimationFrame(this.animate.bind(this));
    }

    /**
     * Função é disparada quando o usuário solta a tela / click
     */

    private endDragging(e: TouchEvent | MouseEvent): void 
    {
        e.preventDefault();
        this.isDragging = false;
        this.headForAnotherSlide();
        this.defineTransletrs();
        console.log(navigator.userAgent)

    }

    /**
     * Essa função é disparada quando o usuário fica arrastando o slide
     * @param { TouchEvent | MouseEvent } e 
     */

    private dragging(e: TouchEvent | MouseEvent): void 
    {
  
        if (this.isDragging) {
            this.currentPosition = this.getHorizontalCoordinate(e);
            this.currentTranslate = this.previousTranslate + this.currentPosition - this.startPosition;          
        }
    }

    private animate(): void 
    {
        this.setSwiperTranslate();
        if (this.isDragging) requestAnimationFrame(this.animate.bind(this));
    }

    /**
     * Essa função realiza os calulos para a transição atual e a anterior
     */

    private defineTransletrs(): void 
    {
        this.currentTranslate = this.currentIndex * - window.innerWidth;
        this.previousTranslate = this.currentTranslate;
        this.setSwiperTranslate();
    }

    /**
     * Define a transição do swiper (Seu deslocamento para esquerda / direita)
     */

    private setSwiperTranslate(): void 
    {
        this.swiperContainer.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    /**
     * Pega as coordenadas horizontais do swiper
     * @param { TouchEvent } e 
     * @returns { number }
     */

     private getHorizontalCoordinate(e: TouchEvent | MouseEvent): number 
     {
        if ('touches' in e) {
            return e.touches[0].clientX;
        } else {
            return e.clientX;
        }
         
     }

    /**
     * Verifica a possibilidade de mudar de slide
     */

    private headForAnotherSlide(): void 
    {
        this.moved = this.currentTranslate - this.previousTranslate;

        if (this.moved < - 50 && this.currentIndex < this.swiperContent.length - 1) {
            this.currentIndex++;
        } else if (this.moved > 50 && this.currentIndex > 0) {
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

    private createControls(): void 
    {
        this.controlContainer = document.createElement('div');
        this.controlContainer.classList.add('swiper__controls');

        this.previousButton = document.createElement('i');
        this.previousButton.classList.add('fa-solid', 'fa-angle-left', 'control');

        this.nextButton = document.createElement('i');
        this.nextButton.classList.add('fa-solid', 'fa-angle-right', 'control');

        this.controlContainer.appendChild( this.previousButton );
        this.controlContainer.appendChild( this.nextButton );
    }

    /**
     * Habilita os controles no carousel / Swiper
     */

    private enableControls(): void 
    {
        if (this.options?.isControlsOn) {
            this.createControls();
            this.swiperGuard.appendChild( this.controlContainer );
        }
    }

    
}