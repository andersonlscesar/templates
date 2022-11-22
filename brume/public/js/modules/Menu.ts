export class Menu {
    menuBars: Element
    menu: HTMLElement
    closeMenuBtn: Element

    constructor(menuBars: Element, menuNav: HTMLElement, closeMenu: Element) {
        this.menuBars = menuBars
        this.menu = menuNav
        this.closeMenuBtn = closeMenu
        this.configure()
    }

    private configure() {
        this.menuBars.addEventListener('click', this.openMenu.bind(Menu, this.menu))
        this.closeMenuBtn.addEventListener('click', this.closeMenu.bind(Menu, this.menu))
    }

    private openMenu(menu: HTMLElement) {
        menu.classList.add('menu--active')
    }

    private closeMenu(menu: HTMLElement) {
        menu.classList.remove('menu--active')

    }
}