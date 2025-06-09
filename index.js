document.querySelectorAll('.button-link').forEach(button => {
    let isDragging = false;

    button.addEventListener('mousedown', () => {
        button.classList.add('pressed');
    });

    button.addEventListener('mousemove', () => {
        isDragging = true;
    });

    button.addEventListener('mouseup', () => {
        button.classList.remove('pressed');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('pressed');
        isDragging = false;
    });

    // Prevent drag behavior
    button.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});