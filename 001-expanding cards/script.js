let panel = document.querySelectorAll('.panel');

function removeActiveClass() {
    panel.forEach((pan) => {
        pan.classList.remove('active');
    });
}

panel.forEach((pan) => {
    pan.addEventListener('click', () => {
        removeActiveClass();
        pan.classList.add('active');
    });
});

