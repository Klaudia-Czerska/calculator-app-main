import checkIfIncludes from "./utils.js";

const theme = document.querySelectorAll('.header__theme-switch');
const main = document.querySelector('.calculator');
const NUMBERS = document.querySelectorAll('.buttons__number');
const OPERATIONS = document.querySelectorAll('.buttons__operation');
let calculations = document.querySelector('.calculations__field');
const dot = document.querySelector('.buttons__dot');
const del = document.querySelector('.buttons__del');
const reset = document.querySelector('.buttons__reset');
const sum = document.querySelector('.buttons__sum');

theme.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.checked = true) {
            main.classList.remove('theme-1');
            main.classList.remove('theme-2');
            main.classList.remove('theme-3');
            main.classList.add(`theme-${button.id}`);
        }
    })
})

NUMBERS.forEach((number) => {
    number.addEventListener('click', (e) => {
        e.preventDefault();
        if (calculations.innerText === '0') {
            calculations.innerText = number.innerText;
        } else {
            calculations.innerText += number.innerText;
        }
    })
})

dot.addEventListener('click', (e) => {
    e.preventDefault();
    if (!calculations.innerText.includes('.') && !checkIfIncludes(OPERATIONS, calculations.innerText.slice(-1))) {
        calculations.innerText += dot.innerText;
    }
})

del.addEventListener('click', (e) => {
    e.preventDefault();
    if (calculations.innerText !== '0') {
        if (calculations.innerText.length === 1) {
            calculations.innerText = '0';
        } else {
            calculations.innerText = calculations.innerText.slice(0, -1);
        }
    }
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    calculations.innerText = '0';
})

OPERATIONS.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        e.preventDefault();
        if (!checkIfIncludes(OPERATIONS, calculations.innerText)) {
            calculations.innerText += operation.innerText;
        }
    })
})

sum.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkIfIncludes(OPERATIONS, calculations.innerText)) {
        let operation = checkIfIncludes(OPERATIONS, calculations.innerText);

        switch (operation) {
            case '+':
                let no = calculations.innerText.split('+');
                calculations.innerText = Number(no[0]) + Number(no[1]);
        }
    }
})