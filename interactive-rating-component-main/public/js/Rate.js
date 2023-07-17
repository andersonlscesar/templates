"use strict";
class Rate {
    constructor() {
        this.rateButtons = document.querySelectorAll('.rate button');
        this.subButton = document.querySelector('.btn');
        this.cardRate = document.querySelector('.card-rate');
        this.rate = '';
        this.manageEvents();
        console.log(this.cardRate);
    }
    set setRate(r) {
        this.rate = r;
    }
    get getRate() {
        return this.rate;
    }
    manageEvents() {
        this.rateButtons.forEach((button) => {
            button.addEventListener('click', this.chooseRate.bind(this, button));
            button.addEventListener('touchend', this.chooseRate.bind(this, button));
        });
        this.subButton.addEventListener('click', this.submitRate.bind(this));
        this.subButton.addEventListener('touchend', this.submitRate.bind(this));
    }
    chooseRate(el, e) {
        e.preventDefault();
        this.rateButtons.forEach(button => button.classList.remove('active'));
        el.classList.add('active');
        this.setRate = el.value;
    }
    submitRate(e) {
        e.preventDefault();
        this.subButton.classList.toggle('loading');
        const children = this.cardRate.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('right');
        }
        setTimeout(() => {
            this.cardRate.innerHTML = '';
            this.cardRate.innerHTML = this.tksMessage(this.getRate);
        }, 1200);
    }
    tksMessage(rate) {
        console.log(rate);
        const html = `       
                    <img src="public/img/illustration-thank-you.svg" alt="Thank you icon" class="thanks to-right">
                    <span class="option-selected to-right">
                        You selected ${rate} out of 5
                    </span>
                    <h1 class="tks-title to-right">Thank you!</h1>
                    <p class="p-tks to-right">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`;
        return html;
    }
}
new Rate;
