const theme = document.querySelectorAll('.header__theme-switch');
const main = document.querySelector('.calculator');

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