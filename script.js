// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('modo-contraste');
    button.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
});
