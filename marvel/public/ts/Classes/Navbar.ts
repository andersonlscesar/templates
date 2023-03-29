import { NavbarControl } from "../interface/NavbarControl.js";

export class Navbar<T extends HTMLDivElement>
{

    /**
     * 
     * @param { NavbarControl } controls 
     */

    constructor
    (
        private controls: NavbarControl<T>,
        private navBar: T
    )
    {
        this.controls = controls;
        this.navBar = navBar;
        this.managerEvents();
    }

    /**
     * Gerencia os eventos
     */

    private managerEvents(): void 
    {   
        this.controls.openNavbar.addEventListener('click', this.openNavbar.bind(this));
        this.controls.openNavbar.addEventListener('touchend', this.openNavbar.bind(this));
        this.controls.closeNavbar.addEventListener('click', this.closeNavbar.bind(this));
    }

    /**
     * Abre o menu
     * @param { MouseEvent | TouchEvent } e 
     */

    private openNavbar(e: MouseEvent | TouchEvent): void 
    {
        e.preventDefault();
        this.navBar.classList.add('nav-bar--open');
        this.navBar.classList.remove('nav-bar--close');
    }

    /**
     * Fecha o menu
     * @param { MouseEvent | TouchEvent } e 
     */

    private closeNavbar(e: MouseEvent | TouchEvent): void 
    {
        e.preventDefault();
        this.navBar.classList.add('nav-bar--close');
    }
}