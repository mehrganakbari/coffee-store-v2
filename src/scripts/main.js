import "../common/index.css"
// navbar links responsive
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// numbers
let num1 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number1');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num1 !== percentageNumberValue) {
        num1++;
        percentageNumber.innerHTML = `${num1}+`;
    }
}, 50);

let num2 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number2');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num2 !== percentageNumberValue) {
        num2++;
        percentageNumber.innerHTML = `${num2}+`;
    }
}, 25);

let num3 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number3');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num3 !== percentageNumberValue) {
        num3++;
        percentageNumber.innerHTML = `${num3}+`;
    }
}, 100);

let num4 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number4');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num4 !== percentageNumberValue) {
        num4++;
        percentageNumber.innerHTML = `${num4}+`;
    }
}, 25);