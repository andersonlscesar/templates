export class Navbar {
    /**
     *
     * @param { NavbarControl } controls
     */
    constructor(controls, navBar) {
        this.controls = controls;
        this.navBar = navBar;
        this.controls = controls;
        this.navBar = navBar;
        this.managerEvents();
    }
    /**
     * Gerencia os eventos
     */
    managerEvents() {
        this.controls.openNavbar.addEventListener('click', this.openNavbar.bind(this));
        this.controls.openNavbar.addEventListener('touchend', this.openNavbar.bind(this));
        this.controls.closeNavbar.addEventListener('click', this.closeNavbar.bind(this));
    }
    /**
     * Abre o menu
     * @param { MouseEvent | TouchEvent } e
     */
    openNavbar(e) {
        e.preventDefault();
        this.navBar.classList.add('nav-bar--open');
        this.navBar.classList.remove('nav-bar--close');
    }
    /**
     * Fecha o menu
     * @param { MouseEvent | TouchEvent } e
     */
    closeNavbar(e) {
        e.preventDefault();
        this.navBar.classList.add('nav-bar--close');
    }
}
