const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        question.classList.toggle('collapsed');
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('collapsed');
            }
        });
    });
});
