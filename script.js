// script.js

// Функція для відображення вмісту вкладки
function showTab(tabName) {
    const tabTitle = document.getElementById('tabTitle');
    const logoImage = document.getElementById('logoImage');
    const timer = document.getElementById('timer');

    // Встановлюємо заголовок у залежності від вибраної вкладки
    if (tabName === 'Farm') {
        tabTitle.classList.add('hidden'); // Сховати текст заголовка для вкладки Farm
        logoImage.classList.remove('hidden'); // Показати логотип
    } else {
        tabTitle.textContent = tabName; // Встановлюємо текст заголовка на ім'я вкладки
        tabTitle.classList.remove('hidden'); // Показати текст заголовка
        logoImage.classList.add('hidden'); // Сховати логотип
    }

    // Показати або сховати таймер залежно від вкладки
    if (tabName === 'Farm') {
        timer.style.display = 'block'; // Показати таймер для вкладки Farm
    } else {
        timer.style.display = 'none'; // Сховати таймер для інших вкладок
    }
}

// Додатковий код для таймера
let timerInterval;

function startTimer() {
    let totalSeconds = 0;

    timerInterval = setInterval(() => {
        totalSeconds++;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Запускаємо таймер при завантаженні сторінки
window.onload = function() {
    startTimer();
    showTab('Farm'); // Відображаємо Farm як початкову вкладку
};
