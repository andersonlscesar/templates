export class Menu {
    constructor(menuBars, menuNav, closeMenu) {
        this.menuBars = menuBars;
        this.menu = menuNav;
        this.closeMenuBtn = closeMenu;
        this.configure();
    }
    configure() {
        this.menuBars.addEventListener('click', this.openMenu.bind(Menu, this.menu));
        this.closeMenuBtn.addEventListener('click', this.closeMenu.bind(Menu, this.menu));
    }
    openMenu(menu) {
        menu.classList.add('menu--active');
    }
    closeMenu(menu) {
        menu.classList.remove('menu--active');
    }
}
