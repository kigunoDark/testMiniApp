let gameLost = false;

// Обработчик для отслеживания потери видимости страницы
document.addEventListener('visibilitychange', () => {
    if (document.hidden && !gameLost) {
        gameLost = true;
        document.getElementById('status').textContent = 'Игра проиграна!';
        document.getElementById('status').style.color = 'red';
        alert('Вы проиграли! Вы свернули приложение.');
    }
});

// Обработчик для отслеживания потери фокуса окна
window.addEventListener('blur', () => {
    if (!gameLost) {
        gameLost = true;
        document.getElementById('status').textContent = 'Игра проиграна!';
        document.getElementById('status').style.color = 'red';
        alert('Вы проиграли! Вы свернули приложение.');
    }
});
