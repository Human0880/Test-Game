let timer;
let seconds = 0;
let isFarming = false;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        document.getElementById('timer').innerText = 
            `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }, 1000);
}

function showTab(tab) {
    const tabTitle = document.getElementById('tabTitle');
    const logoImage = document.getElementById('logoImage');

    if (tab === 'Farm') {
        tabTitle.classList.add('hidden');
        logoImage.classList.remove('hidden');
        logoImage.src = 'logo.png'; // Логотип для вкладки Farm
    } else {
        tabTitle.innerText = tab; // Назва вкладки
        tabTitle.classList.remove('hidden');
        logoImage.classList.add('hidden'); // Приховати логотип
    }

    // Додаткові дії для кожної вкладки можна додати тут
}

// Запускаємо таймер при завантаженні сторінки
window.onload = () => {
    startTimer();
};
