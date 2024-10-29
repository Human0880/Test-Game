// Змінні для трекінгу
let balance = 100; // Стартовий баланс
let farmingActive = false; // Статус фармінгу
let timeLeft = 10; // Таймер на 10 секунд

// Оновлення елементу балансу
document.getElementById('balanceDisplay').textContent = `${balance} MX`; // Відображення початкового балансу

// Функція для запуску фармінгу
function startFarming() {
    if (!farmingActive) {
        farmingActive = true; // Встановлюємо статус фармінгу
        document.getElementById('farmButton').classList.add('hidden'); // Сховати кнопку Farm
        const claimButton = document.getElementById('claimButton');
        claimButton.classList.remove('hidden'); // Показати кнопку Claim
        claimButton.style.backgroundColor = "grey"; // Встановити сіру кнопку Claim
        startTimer(); // Запустити таймер
    }
}

// Функція для старту таймера
function startTimer() {
    const timerElement = document.getElementById('timer');
    timeLeft = 10; // Скинути таймер на 10 секунд
    timerElement.textContent = "00:10"; // Встановити початкове значення таймера
    let interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            clearInterval(interval); // Зупинити таймер
            const claimButton = document.getElementById('claimButton');
            claimButton.style.backgroundColor = "#38FF6A"; // Змінити колір кнопки Claim на зелений
            timerElement.textContent = "00:00"; // Скинути таймер
        }
    }, 1000);
}

// Функція для отримання нагороди
function claimReward() {
    if (timeLeft === 0 && farmingActive) {
        balance += 150; // Додаємо 150 монет до балансу
        document.getElementById('balanceDisplay').textContent = `${balance} MX`; // Оновити баланс
        document.getElementById('claimButton').classList.add('hidden'); // Сховати кнопку Claim
        document.getElementById('farmButton').classList.remove('hidden'); // Показати кнопку Farm знову
        farmingActive = false; // Скидаємо статус фармінгу
    } else {
        alert("You cannot claim rewards yet!"); // Попередження, якщо не можна отримати нагороду
    }
}

// Функція для показу вкладок
function showTab(tabName) {
    const tabTitle = document.getElementById('tabTitle');
    const logoImage = document.getElementById('logoImage');
    const worldsPanel = document.getElementById('worldsPanel');
    const timer = document.getElementById('timer');
    const farmButton = document.getElementById('farmButton');

    if (tabName === 'Farm') {
        tabTitle.classList.add('hidden'); // Приховати заголовок
        logoImage.classList.remove('hidden'); // Показати логотип
        farmButton.classList.remove('hidden'); // Показати кнопку Farm
        timer.classList.remove('hidden'); // Показати таймер
    } else {
        tabTitle.textContent = tabName;
        tabTitle.classList.remove('hidden'); // Показати заголовок
        logoImage.classList.add('hidden'); // Приховати логотип
        timer.classList.add('hidden'); // Приховати таймер
        farmButton.classList.add('hidden'); // Приховати кнопку Farm
    }

    // Показуємо або ховаємо панель вибору світу
    if (tabName === 'Worlds') {
        worldsPanel.classList.remove('hidden');
    } else {
        worldsPanel.classList.add('hidden');
    }
}

// Функція для вибору світу
function selectWorld(worldName) {
    alert(`You have selected: ${worldName}`);
    // Додайте тут додаткову логіку для обробки вибору світу
}
