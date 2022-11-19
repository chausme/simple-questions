const btns = document.querySelectorAll('.question-btn');
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.currentTarget.parentElement.parentElement.classList.toggle('collapsed');
    });
});
